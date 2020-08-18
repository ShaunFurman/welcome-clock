import React, {Component } from 'react';


class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    tick(){
        this.setState({
            date: new Date(),
        })
    }
    componentDidMount (){
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render(){
        return (
            <h2 classname="Clock"> (the)Clock Says: { this.state.date.toLocaleTimeString()}
               
            </h2>
        )

    }

}
export default Clock;