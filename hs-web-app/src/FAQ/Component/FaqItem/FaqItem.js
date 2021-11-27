import React, { useEffect } from "react";
import "./FaqItem.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FaqItem = (props) => {
    const { data, id } = props;


    useEffect(() => {
        if (!data) {
            return;
        }

        gsap.from(`.faqItem${id}`, {
            opacity: 0, y: 100, duration: 1, ease: "linear", scrollTrigger: {
                trigger: `.faqItem${id}`,
                start: "top 90%",
                end: "bottom 100%",
                scrub: 1,
            }
        });

    }, [data])

    return (
        <div class={`faqItem faqItem${id}`}>
            <div className={"faqQuestion"}>
                <img src={"/images/question-mark.png"} />
                <div>{data.questions}</div>
            </div>
            <div className={"faqAnswer"}>{data.answers}</div>
        </div>
    )
}