import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }
    
    render() {
        return (
          <div>
            <h1>titre: {this.props.title}</h1>
            <h2>Texte: {this.props.content}</h2>
            <h3>Img: {this.props.image}</h3>
          </div>
        );
    }
}
export default Section;