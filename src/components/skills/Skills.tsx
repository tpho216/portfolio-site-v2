import React, {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/reducers/rootReducer";
import PortfolioDataContext from "../Providers/PortfolioDataProvider";
import {ISkill} from "../../api/interfaces/ISkill";

export interface ISkillsSection {}

export const SkillsSection : React.FC<ISkillsSection> = (props) => {
    const skillsData : any = useSelector((state : RootState) => {return state.skills});

    return (
        <section id="services" className="services">
                <div className="container">
                    <div className="title-heading">
                        <h2>MY SKILLS</h2>
                    </div>

                    <div className="service-tiers">
                        {
                            skillsData?.skills?.map((skill : ISkill) => (
                                <div className="tier-item">
                                    <i className="fa fa-code" aria-hidden="true"></i>
                                    <h2>{skill.name}</h2>
                                    <h3>
                                        <a href="https://my-favourite-ln.web.app"/>
                                        {skill.description}
                                    </h3>
                                    <p>{skill.languages}</p>
                                </div>
                            )
                            )
                        }
                        {/*{*/}

                        {/*    <div className="tier-item">*/}
                        {/*        <i className="fa fa-code" aria-hidden="true"></i>*/}
                        {/*        <h2>{skills.name}</h2>*/}
                        {/*        <h3>*/}
                        {/*            <a href="https://my-favourite-ln.web.app"/>*/}
                        {/*            {skills.description}*/}
                        {/*        </h3>*/}
                        {/*        <p>{skills.languages}</p>*/}
                        {/*    </div>*/}

                        {/*}*/}
                    </div>
                </div>
            <hr/>
        </section>
    );
}
