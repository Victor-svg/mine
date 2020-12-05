import React from 'react';
import Cards from './Cards';

class Section extends React.Component {
  constructor(props) {
    super(props);
      this.state = {

      };
    }
    
    render() {
        return (
          <div className="section">
            <h1>{this.props.title}</h1> <hr></hr>
            <p>{this.props.content}</p>
            <span>{this.props.image}</span>
            <div className="cards">
            <Cards />
            </div> 
          </div>
        );
    }
}
export default Section;