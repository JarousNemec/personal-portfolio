import {useCallback} from "react";

export const useScrollToSection = (offset: number = 54) => {
    return useCallback((id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        let buffer = document.getElementById("__scroll_buffer__") as HTMLDivElement | null;

        const bufferHeight = window.innerHeight - el.offsetHeight;

        if (!buffer) {
            buffer = document.createElement("div");
            buffer.id = "__scroll_buffer__";
            buffer.style.height = `${bufferHeight > 0 ? bufferHeight : 0}px`;
            buffer.style.pointerEvents = "none";
            document.body.appendChild(buffer);
        } else {
            buffer.style.height = `${bufferHeight > 0 ? bufferHeight : 0}px`;
        }

        // Scroll after layout
        requestAnimationFrame(() => {
            const top = el.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top,
                behavior: "smooth",
            });

            const checkIfReached = () => {
                const rect = el.getBoundingClientRect();
                return Math.abs(rect.top - offset) < 3; // tolerance pár px
            };

            const waitUntilScrolled = () => {
                return new Promise<void>((resolve) => {
                    const handler = () => {
                        if (checkIfReached()) {
                            window.removeEventListener("scroll", handler);
                            resolve();
                        }
                    };
                    window.addEventListener("scroll", handler);
                    // kdyby to už bylo na místě ve stejný frame
                    handler();
                });
            };

            waitUntilScrolled().then(() => {
                if (!buffer) return;

                const observer = new IntersectionObserver(
                    (entries) => {
                        const entry = entries[0];

                        // Pokud buffer NENÍ vidět → odstraníme ho a zrušíme observer
                        if (!entry.isIntersecting) {
                            buffer?.remove();
                            observer.disconnect();
                        }
                    },
                    {
                        root: null,
                        threshold: 0, // stačí i pixel viditelnosti
                    }
                );

                observer.observe(buffer);
            });
        });
    }, [offset]);
};






