import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Section from './components/Sections';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: []
    };
    fetch('http://localhost:8000/apip/articles')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        console.log("1.5", this.state.sections)
        this.setState({ sections: result["hydra:member"] })
        console.log("2", this.state.sections)
      })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>

        { this.state.sections.map((value, index) => 
          {
            return <Section

              type={value["@type"]}
              content={value.content}
              id={value.id}
              image={value.image}
              title={value.title}

            />
          })
        }

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
