import React from 'react';

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
            <h2>{this.props.content}</h2>
            <h3>{this.props.image}</h3>
          </div>
        );
    }
}
export default Section;