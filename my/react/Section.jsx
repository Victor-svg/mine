import React from 'react';

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          content:"hey"
        };
      }
    
    render() {
        return (
          <div>
            <h1>Hello test section</h1>
          </div>
        );
    }
}