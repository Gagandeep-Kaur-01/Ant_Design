import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Select, Checkbox, Upload, message, Icon, Row, Col, DatePicker } from 'antd'
import './Forms.css'
const FormItem = Form.Item;


class Forms extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        const layout = {   
          labelCol: {
          span: 8,
          },
          wrapperCol: {
          span: 16,
          },
        }; 
        const formItemLayoutDesc = {
           wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 }
            }
        };
        const rowStyle = {
         width: "100%"
        };
        const colStyle = {
         marginBottom: "16px"
        };
        const gutter = 16;

        const onFinish = (values) => {
        console.log(values);
        };

        return (
            <div>
            <h2 className="topHeading">Form in Ant Design</h2>
            </div>
         
        );  
    }
}
export default Forms;