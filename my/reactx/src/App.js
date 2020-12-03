import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Section from './components/Sections';
import Navbar from './components/Navbar/Navbar';
import Projets from './components/Projets';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [],
      footer: []
    };
    fetch('http://localhost:8000/apip/articles')
      .then((response) => {
        return response.json()
      })
      .then((result) => {

        this.setState({ sections: result["hydra:member"] })

      })
      fetch('http://localhost:8000/apip/projets')
      .then((response) => {
        return response.json()
      })
      .then((result) => {

        this.setState({ footer: result["hydra:member"] })

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
        <div className="portfolio">
          <div className="headerPort">
            <h1>Voici la Liste des derniers projets</h1>  <hr></hr>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
            { this.state.footer.map((val, index) => 
              {
                return <Projets 
                  
                  type={val["@type"]}
                  content={val.content}
                  id={val.id}
                  img={val.img}
                  title={val.title}
                />
              })
            }
          </div>
          
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
