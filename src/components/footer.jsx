import React, { Component } from 'react';

class FooterComponent extends Component {
 
    render() { 
        return (  <React.Fragment><div id="footerContainer" className="Container">
        <div className="bottom-container">
          <div className="inner-bottom-container">
            <div className="inverted">  
            Copyright © WAWA Caterings
            </div>
          </div>
        </div>
      </div></React.Fragment>);
    }
}
 
export default FooterComponent;