"use client";

import { useEffect, useState, useRef } from "react";

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 830;

const ScaleWrapper = ({ children }: { children: React.ReactNode }) => {
    const [scale, setScale] = useState(1);
    const [contentHeight, setContentHeight] = useState(0);
    const mainContainerRef = useRef<HTMLDivElement>(null);
    const externalScrollbarRef = useRef<HTMLDivElement>(null);
    const isSyncingMain = useRef(false);
    const isSyncingExternal = useRef(false);

    useEffect(() => {
        const handleResize = () => {
            const scaleX = window.innerWidth / BASE_WIDTH;
            const scaleY = window.innerHeight / BASE_HEIGHT;
            setScale(Math.min(scaleX, scaleY));
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        // Update content height on resize
        if (mainContainerRef.current) {
            setContentHeight(mainContainerRef.current.scrollHeight);
        }

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    // Sync external scrollbar when main container scrolls
    const handleMainScroll = () => {
        if (isSyncingMain.current) return;
        isSyncingExternal.current = true;

        if (mainContainerRef.current && externalScrollbarRef.current) {
            const mainScrollTop = mainContainerRef.current.scrollTop;
            externalScrollbarRef.current.scrollTop = mainScrollTop * scale;

            // Debounce persistence to improve consistency
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
            scrollTimeout.current = setTimeout(() => {
                sessionStorage.setItem("scrollPosition", mainScrollTop.toString());
            }, 100);
        }

        requestAnimationFrame(() => {
            isSyncingExternal.current = false;
        });
    };

    // Restore scroll position on mount
    useEffect(() => {
        const savedPosition = sessionStorage.getItem("scrollPosition");
        if (savedPosition && mainContainerRef.current) {
            // Restore immediately without scroll animation
            mainContainerRef.current.scrollTop = parseInt(savedPosition, 10);
        }
    }, [mainContainerRef.current]); // Run when ref attaches (effectively on mount)

    // Sync main container when external scrollbar scrolls
    const handleExternalScroll = () => {
        if (isSyncingExternal.current) return;
        isSyncingMain.current = true;

        if (mainContainerRef.current && externalScrollbarRef.current) {
            const externalScrollTop = externalScrollbarRef.current.scrollTop;
            mainContainerRef.current.scrollTop = externalScrollTop / scale;
        }

        requestAnimationFrame(() => {
            isSyncingMain.current = false;
        });
    };

    // Update content height whenever children change or on mount
    useEffect(() => {
        if (mainContainerRef.current) {
            const observer = new ResizeObserver(() => {
                if (mainContainerRef.current) {
                    setContentHeight(mainContainerRef.current.scrollHeight);
                }
            });
            observer.observe(mainContainerRef.current);
            return () => observer.disconnect();
        }
    }, [children]);


    const handleBackgroundWheel = (e: React.WheelEvent) => {
        // If the event target is the main container or inside it, let native scroll handle it
        if (mainContainerRef.current && mainContainerRef.current.contains(e.target as Node)) {
            return;
        }

        // Otherwise (scrolling on background), manually scroll the main container
        if (mainContainerRef.current) {
            // Divide by scale to ensure visual 1:1 scroll speed
            // Multiply by 5.0 to match the perceived sensitivity/acceleration of native scroll
            // Use scrollBy with behavior: 'auto' to bypass CSS scroll-smooth if present
            mainContainerRef.current.scrollBy({
                top: (e.deltaY / scale) * 5.0,
                behavior: "auto"
            });
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black"
            onWheel={handleBackgroundWheel}
        >
            <div
                style={{
                    width: `${BASE_WIDTH}px`,
                    height: `${BASE_HEIGHT}px`,
                    transform: `scale(${scale})`,
                    transformOrigin: "center center",
                }}
                className="relative overflow-hidden bg-black shadow-2xl"
            >
                <div
                    ref={mainContainerRef}
                    id="main-scroll-container"
                    className="w-full h-full overflow-y-auto scroll-smooth no-scrollbar relative"
                    onScroll={handleMainScroll}
                >
                    {children}
                </div>
            </div>

            {/* Custom Scrollbar positioned at window edge */}
            <div
                ref={externalScrollbarRef}
                id="external-scrollbar"
                className="absolute top-0 right-0 w-4 h-full overflow-y-auto"
                style={{ zIndex: 9999 }}
                onScroll={handleExternalScroll}
            >
                <div style={{ height: `${contentHeight * scale}px` }}></div>
            </div>
        </div>
    );
}

export default ScaleWrapper;
