import React, { Component } from 'react';
import './EventsBlock.scss';

class EventsBlock extends Component {

    state = {
        time: new Date()
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000 );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({ time: new Date() });
    }

    render() {
        return (
            <div className="events-block">
                
                <div className="events-header">
                    <h5>Upcoming events</h5>
                    <p>Time: <span>{this.state.time.toLocaleTimeString()}</span></p>
                </div>

            </div>
        )
    }
}

export default EventsBlock;