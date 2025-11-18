import {useCallback, useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const useScrollToId = (offset: number = 54) => {
    const navigate = useNavigate();

    const scrollToEl = useCallback((id: string) => {
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

        requestAnimationFrame(() => {
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({top, behavior: "smooth"});

            const checkIfReached = () => {
                const rect = el.getBoundingClientRect();
                return Math.abs(rect.top - offset) < 3;
            };

            const waitUntilScrolled = () =>
                new Promise<void>((resolve) => {
                    const handler = () => {
                        if (checkIfReached()) {
                            window.removeEventListener("scroll", handler);
                            resolve();
                        }
                    };
                    window.addEventListener("scroll", handler);
                    handler();
                });

            waitUntilScrolled().then(() => {
                if (!buffer) return;

                const observer = new IntersectionObserver(
                    (entries) => {
                        if (!entries[0].isIntersecting) {
                            buffer?.remove();
                            observer.disconnect();
                        }
                    },
                    {root: null, threshold: 0}
                );

                observer.observe(buffer);
            });
        });

    }, [offset]);

    const tryScrollToElementIdInStorage = useCallback(() => {
        const id = sessionStorage.getItem("scroll-target");
        if (!id) return;
        const el = document.getElementById(id);
        if (el) {
            sessionStorage.removeItem("scroll-target");
            scrollToEl(id);
        } else {
            requestAnimationFrame(tryScrollToElementIdInStorage);
        }
    },[scrollToEl]);


    const navigateAndScroll = useCallback((targetPage: string, id: string) => {
        sessionStorage.setItem("scroll-target", id);
        navigate(targetPage);
        tryScrollToElementIdInStorage();
    }, [navigate, tryScrollToElementIdInStorage]);

    useEffect(() => {
        tryScrollToElementIdInStorage();
    }, [tryScrollToElementIdInStorage]);

    return navigateAndScroll;
};
