import React, { Component } from 'react';

//Components
import ButtonPlus from '../../../components/ButtonPlus/ButtonPlus';
import ProjectList from '../../../components/ProjectList/ProjectList';

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <ProjectList />
                <ButtonPlus />
            </div>
        )
    }
}

export default Main;