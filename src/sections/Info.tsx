import React, { useEffect, useRef, useState } from "react";
import InfoCSS from "./Info.module.css";

const Info: React.FC = () => {
    const base = useRef<HTMLElement>(null);
    const [shadowX, setShadowX] = useState<number>(40);
    const [shadowY, setShadowY] = useState<number>(40);

    useEffect(() => {
        base.current?.addEventListener("mousemove", (event) => {
            const baseRect = base.current?.getBoundingClientRect();
            const rt = (event.pageX - baseRect?.width! / 2) / baseRect?.width!;
            const ct =
                (event.clientY - baseRect?.height! / 2) / baseRect?.height!;
            setShadowX(-50 * rt + 10 > 10 ? -50 * rt + 10 : 10);
            setShadowY(-30 * ct + 10 > 10 ? -30 * ct + 10 : 10);
        });
    }, []);

    return (
        <section className={InfoCSS["InfoSection"]} ref={base}>
            <h1
                style={{
                    textShadow: `${shadowX}px ${shadowY}px rgb(30, 200, 20)`,
                }}
            >
                introduction
            </h1>
        </section>
    );
};

export default Info;
