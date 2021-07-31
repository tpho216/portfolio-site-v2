import React from "react";
import {initialize, db} from "../../firebase/firebase";
export interface IAbout {}

export const About : React.FC<IAbout> = (props) => {
    initialize();
    //console.log(db.ref().child("about"));
    return (
        <section id="about" className="about">
            <h1>This is about section</h1>
            <div className="container">
                <div className="about-img">
                </div>
                <div className="about-text-box">
                </div>
                <div className="update-date">
                </div>
            </div>
            <hr/>
        </section>
    );
};
