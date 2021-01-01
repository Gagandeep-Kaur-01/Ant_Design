import React, { Component } from "react";
import { Row, Col } from "antd";
import underConstruction from '../../Utility/Images/under_construction.png';
import "./dashboard.css"

export default class extends Component {
    render() {
      const rowStyle = {
          width: "100%",
          marginLeft: '25%'
      };

      return(
        <div className="dashboard" >
          <Row gutter={0} justify="start" style={rowStyle}>
			      <Col sm={24} className="dashboard">
			      	<img class="under-construction-image" src={underConstruction} />
		      	</Col>
	    	  </Row>
        </div>  
      )
    }
}