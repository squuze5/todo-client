import React, { Component } from 'react';

// Default style, Image
import './ProjectList.scss';
// import NoProject from '../../assets/image/no-project.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import EventsBlock from '../EventsBlock/EventsBlock';
import LeftNavigation from '../LeftNavigation/LeftNavigation';

class ProjectList extends Component {

    cardColor = {
        default: { 
            background: `linear-gradient(
                0deg, 
                rgba(7, 0, 179, 1) 0%, 
                rgba(32, 0, 228, 1) 0%, 
                rgba(43, 34, 255, 1) 100%
            )`
        },
        green: {
            background: 'green'
        },
        red: {
            background: 'red'
        }
    }

    render() {
        return (
            <div className="project-list">
                <div className="row">
                    <div className="col-xl-1">
                        <LeftNavigation />
                    </div>
                    <div className="col-xl-8">
                        <div className="container-fluid">
                            <div className="row">
                                <ProjectCard colorProject={this.cardColor.default} />
                                <ProjectCard colorProject={this.cardColor.default} />
                                <ProjectCard colorProject={this.cardColor.green} />
                                <ProjectCard colorProject={this.cardColor.default} />
                                <ProjectCard colorProject={this.cardColor.red} />
                                <ProjectCard colorProject={this.cardColor.default} />
                                <ProjectCard colorProject={this.cardColor.default} />
                                <ProjectCard colorProject={this.cardColor.red} />
                                <ProjectCard colorProject={this.cardColor.default} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <EventsBlock /> 
                    </div>
                </div>
                
                {/* <div className="no-project">
                    <img src={NoProject} alt="Projects not found" />
                    <p>No new projects found, try adding a new one :)</p>
                </div> */}

            </div>
        )
    }
}

export default ProjectList;