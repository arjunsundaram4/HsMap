import React from "react";

export const Inspiration=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title inspirationTitle"}>Inspiration</div>
                <div className={"inspirationDiv"}>
                    <img src={"/images/BookCover.png"} className={"bookCoverImage"}/>
                    <div className={"inspirationText"}>
                        <ul>
                            <li>
                                Robert Edgar Hope-Simpson (1908-2003) was a general practitioner.
                                <ul>
                                    <li>
                                        He showed that shingles was caused by reactivation of the chickenpox virus.
                                    </li>
                                </ul>
                            </li>
                            <li>The influenza epidemic of 1932-33,  the year he began his practice, motivated him to study the influenza virus.</li>
                            <li>
                                60 years of extensive historical research culminated in the publication of his book The Transmission of Epidemic Influenza
                                <ul>
                                    <li>Includes Houston influenza data</li>
                                </ul>
                            </li>
                            <li>Proposed that person-to-person transmission was insufficient to explain the pattern of influenza outbreaks around the world.</li>
                            <li>Proposed an influential seasonally-mediated mechanism.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}