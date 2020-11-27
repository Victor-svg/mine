import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Section from './components/Sections';
import Navbar from './components/Navbar/Navbar';

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

        this.setState({ sections: result["hydra:member"] })

      })
  }

  render() {
    return (
      <div>
          <Navbar />
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
