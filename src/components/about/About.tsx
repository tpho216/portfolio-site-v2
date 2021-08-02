import React, {useEffect, useState} from "react";
import {db} from "../../firebase/firebase";
import {DebugHelper} from "../../../Util/DebugHelper";
export interface IAbout {}

export const About : React.FC<IAbout> = (props) => {
    const initialAboutState = {
        greetingMsg: "",
        info: "",
        updateDate: "",
    }
    const [currentAbout, setCurrentAbout] = useState(initialAboutState);
    const aboutRef = db.ref().child("about");

    useEffect(() => {
        aboutRef.on("value", (snapshot) => {
            setCurrentAbout({...currentAbout,
                greetingMsg : snapshot.val().greeting_msg,
                info: snapshot.val().info,
                updateDate: snapshot.val().update_date,
            }); //render after useEffect callback
        });
    },[]);
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-img">
                </div>
                <div className="about-text-box">
                    <h2>{currentAbout.greetingMsg}</h2>
                    <p>{currentAbout.info}</p>
                </div>
                <div className="update-date">
                    <p>{currentAbout.updateDate}</p>
                </div>
            </div>
            <hr/>
        </section>
    );
};
