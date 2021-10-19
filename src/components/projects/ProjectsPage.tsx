import React, {useCallback, useContext, useEffect} from 'react';
import PortfolioDataContext from "../Providers/PortfolioDataProvider";
import {IProject} from "../../api/interfaces/IProject";


export interface IProjectPage {
}

export const ProjectsPage : React.FC<IProjectPage> = (props) => {
    const {portfolio} = useContext(PortfolioDataContext);
    let toggleAlign = false;
    portfolio?.projects?.forEach((project)  => {
        //can ignore typescript strict rules ...
        // @ts-ignore
        project.toggleAlign = toggleAlign;
        toggleAlign = !toggleAlign;

    })



    return (<div>

        <section id="projects" className="projects">
            <div className="title-heading">
                <h2>PROJECTS</h2>
                <p>these are some of my recent projects</p>
                {
                    portfolio?.projects?.map((project : IProject) =>
                        (
                            // @ts-ignore
                            project.toggleAlign ?
                                (<div className="project-item">

                                    <div className="project-img has-margin-right">
                                        <img src="images/sppms.png"/>
                                    </div>
                                    <div className="project-description">
                                        <h2>{project.name}</h2>
                                        <p>{project.description}</p>
                                        <a href="#" className="project-link" target="_blank">
                                            <i className="fa fa-github" aria-hidden="true"> View Code</i>
                                        </a>
                                    </div>

                                </div>)

                                :
                                (<div className="project-item">
                                    <div className="project-description has-margin-right">
                                        <h2>{project.name}</h2>
                                        <p>{project.description}</p>
                                        <a href="#" className="project-link" target="_blank">
                                            <i className="fa fa-github" aria-hidden="true"> View Code</i>
                                        </a>
                                    </div>

                                    <div className="project-img">
                                        <img src="images/sppms.png"/>
                                    </div>
                                </div>)
                        )
                    )
                }
            </div>
        </section>
        <hr/>
    </div>)
}


