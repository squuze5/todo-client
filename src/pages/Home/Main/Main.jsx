import React, { Component } from 'react';

//Components
import ButtonPlus from '../../../components/ButtonPlus/ButtonPlus';
import ProjectList from '../../../components/ProjectList/ProjectList';
import Navbar from '../../../components/Navbar/Navbar';

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <ProjectList />
                <ButtonPlus />
            </div>
        )
    }
}

export default Main;