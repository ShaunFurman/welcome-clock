import React, { Component } from 'react';

//import our service

import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {

  //set our initial state and set up our service as this.client on this component
 
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},//eventually update question
      score: 0
    }
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() { //catalyst to change state by getting questions//
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  //display the results on the screen BULLET POINT 2:

  render() {  //Conditional Rendering//




    return (
      <div>
       <strong>SCORE:</strong> {this.state.score} <br/>
       <strong>Question:</strong> {this.state.data.question} <br/>
       <strong>Value:</strong> {this.state.data.value} <br/>
       <strong>Category:</strong> {this.state.data.category.title} <br/>

       
       
       
       
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}
export default Jeopardy;