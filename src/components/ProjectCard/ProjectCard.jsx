import React, { Component } from 'react';
import './ProjectCard.scss';

// Icon Material-icon
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PaletteIcon from '@material-ui/icons/Palette';
import CloseIcon from '@material-ui/icons/Close';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DoneIcon from '@material-ui/icons/Done';

class ProjectCard extends Component {

    state = {
        settings: false,
        editProject: true,
        projectName: 'Name project',
        editIcon: <EditIcon className="icon-project" />
    }

    settingsShow = () => {
        this.setState({settings: !this.state.settings });
    }

    settingsClose = () => {
        this.setState({ settings: false });
    }

    editProject = () => {
        this.setState({editProject: !this.state.editProject});
        this.state.editProject 
            ? this.setState({editIcon: <DoneIcon className="icon-project" />, editProject: false })
            : this.setState({editIcon: <EditIcon className="icon-project" />, editProject: true });
    }

    onProjectChange = (value) => {
        this.setState({ projectName: value });
    }

    render() {

        const showSettings = {
            display: this.state.settings ? 'flex' : 'none'
        };

        const showEditInput = {
            display: this.state.editProject ? 'none' : 'flex'
        }

        const showNameProject = {
            display: this.state.editProject ? 'flex' : 'none'
        }

        const EditProject = this.state.editIcon;

        return (
            <div className="col-xl-4">
                <div className="card">
                    <div className="card-project" style={this.props.colorProject}>
                        
                        <div className="header-card">
                            <div className="" onClick={this.editProject}>{EditProject}</div>
                            <h5 style={showNameProject}>{this.state.projectName}</h5>
                            <input 
                                type="text" 
                                style={showEditInput} 
                                value={this.state.projectName} 
                                onChange={e => this.onProjectChange(e.target.value)}
                            />
                            <SettingsIcon 
                                className="icon-project setting-icon" 
                                onClick={this.settingsShow}
                            />
                        </div>

                        <div className="body-card">
                            <div className="no-task">
                                <FormatListBulletedIcon className="icon-todo" />
                                <p>No new tasks found</p>
                            </div>
                        </div>

                        <div className="footer-card">
                            >
                        </div>

                    </div>

                    <div className="setting-project" style={showSettings} >
                        <DeleteForeverIcon className="setting-icon delete-icon" />
                        <EditIcon className="setting-icon" />
                        <PaletteIcon className="setting-icon" />
                        <CloseIcon className="setting-icon" style={{ color: 'red' }} onClick={this.settingsClose} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard;