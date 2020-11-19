import React from "react";
import ReactDOM from "react-dom";
import Section from "./Section";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:"coucou"
    };
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json =>  this.setState({content: json.title}))    
  }

  render() {
    console.log("rendered")
    return (
      <div>
        <h1>{this.state.content}</h1>
        <Section />
      </div>
    );
  }
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

