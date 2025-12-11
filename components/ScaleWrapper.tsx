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

    // Sync external scrollbar when main container scrolls
    const handleMainScroll = () => {
        if (isSyncingMain.current) return;
        isSyncingExternal.current = true;

        if (mainContainerRef.current && externalScrollbarRef.current) {
            const mainScrollTop = mainContainerRef.current.scrollTop;
            externalScrollbarRef.current.scrollTop = mainScrollTop * scale;
        }

        // Small timeout to reset lock
        requestAnimationFrame(() => {
            isSyncingExternal.current = false;
        });
    };

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


    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black">
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
                    className="w-full h-full overflow-y-auto scroll-smooth no-scrollbar"
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
