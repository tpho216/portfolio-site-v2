import React, {useEffect, useState} from "react";
import {db} from "../../firebase/firebase";
import {useSelector} from "react-redux";
import {RootState} from "../../state/reducers/rootReducer";
import ContentLoader, { Facebook } from 'react-content-loader'

export interface IAbout {}

export const About : React.FC<IAbout> = (props) => {
    const about = useSelector((state: RootState) => {return state.about});
    //populate the about store state so do not need to reload every time
    const initialAboutState = {
        greetingMsg: "",
        info: "",
        updateDate: "",
        loading: false,
    }
    const [currentAbout, setCurrentAbout] = useState(initialAboutState);
    const aboutRef = db.ref().child("about");

    useEffect(() => {
        aboutRef.on("value", (snapshot) => {
            setCurrentAbout({...currentAbout,
                greetingMsg : snapshot.val().greeting_msg,
                info: snapshot.val().info,
                updateDate: snapshot.val().update_date,
                loading: false
            }); //render after useEffect callback
        });
        setCurrentAbout({...currentAbout,
                // greetingMsg: about.greetingMsg,
                // info: about.info,
                // updateDate: about.updateDate,
                loading: about.loading
        })
    },[]);



    return (
        <section id="about" className="about">

            <div className="container">
                {
                    currentAbout.loading ? <ContentLoader
                        backgroundColor="#00000"
                        foregroundColor="#EEE"
                        backgroundOpacity={1}
                        foregroundOpacity={0}
                    /> : null
                }


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
