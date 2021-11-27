import React, { useEffect } from "react";
import "./BlogSlide.css";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BlogSlide = (props) => {
    const { data, id } = props;

    useEffect(() => {
        if (!data) {
            return;
        }

        gsap.from(`.blogSlide${id}`, {
            opacity: 0, y: 100, duration: 1, ease: "linear", scrollTrigger: {
                trigger: `.blogSlide${id}`,
                start: "top 70%",
                end: "bottom 100%",
                scrub: 1
            }
        });

    }, [data])

    const getDateTime = (date) => {
        const d = new Date(date);
        return d.toLocaleString();
    }

    return (
        <div className={`slide blogSlide${id}`}>
            <div className={"slideTitle"}>{data.title}</div>
            <div className={"slideContentContainer"}>
                <div>
                    {data.image && (
                        <img
                            src={data.image?.url}
                            alt="logo"
                            className={"slideImage"}
                        />
                    )}
                </div>
                <div className={"slideContent"}>
                    <p>{data.information}</p>
                    {data.date && <div className={"slideDate"}>{getDateTime(data.date)}</div>}
                </div>
            </div>
        </div>
    )
}