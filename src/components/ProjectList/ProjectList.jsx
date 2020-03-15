import React, { Component } from 'react';

// Default style, Image
import './ProjectList.scss';
import NoProject from '../../assets/image/no-project.png';

class ProjectList extends Component {
    render() {
        return (
            <div className="project-list">
                
                <div className="no-project">
                    <img src={NoProject} alt="Projects not found" />
                    <p>No new projects found, try adding a new one :)</p>
                </div>

            </div>
        )
    }
}

export default ProjectList;