import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Section from './components/Sections';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      section: []
    };
    
    fetch('http://localhost:8000/apip/articles/14')
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      this.setState({section: result})
    })
  }
  
  componentDidMount(){

  }
  
  render() {
    return (
      <div>
        <h1>{this.state.section.title}</h1>
        <p>{this.state.section.content}</p>
        {this.state.section.image}
        <Section />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
