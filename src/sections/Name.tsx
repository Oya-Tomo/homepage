import React, { useEffect, useRef, useState } from "react";
import NameCSS from "./Name.module.css";

const Name: React.FC = () => {
    const base = useRef<HTMLElement>(null);
    const [shadowX, setShadowX] = useState<number>(40);
    const [shadowY, setShadowY] = useState<number>(40);

    useEffect(() => {
        base.current?.addEventListener("mousemove", (event) => {
            const baseRect = base.current?.getBoundingClientRect();
            const rt = (event.pageX - baseRect?.width! / 2) / baseRect?.width!;
            const ct =
                (event.clientY - baseRect?.height! / 2) / baseRect?.height!;
            setShadowX(-150 * rt + 50 > 40 ? -100 * rt + 50 : 40);
            setShadowY(-150 * ct + 50 > 40 ? -90 * ct + 50 : 50);
        });
    }, []);

    return (
        <section className={NameCSS["NameSection"]} ref={base}>
            <h1>
                <span
                    style={{
                        textShadow: `${shadowX}px ${shadowY}px rgb(30, 200, 20)`,
                    }}
                >
                    Oya
                </span>
                <span
                    style={{
                        textShadow: `${shadowX}px ${shadowY}px rgb(10, 10, 10)`,
                    }}
                >
                    Tomo
                </span>
            </h1>
        </section>
    );
};

export default Name;
