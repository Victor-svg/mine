import React from 'react';
import Img from './agency.JPG'

class Projets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

render() {
    return (
      
      <div className="projets">
        <figure className="imgs">
          <img src={Img} alt="mon image" />
          {this.props.img}
            <figcaption className="banner">
              <h5>{this.props.title}</h5>
              <p>{this.props.content}</p>
            </figcaption>
        </figure>
      </div>

    );
}

}
export default Projets;