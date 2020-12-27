import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Select, Checkbox, Upload, message, Icon, Row, Col, DatePicker } from 'antd'
import BirthDatePicker from "../utility/datePicker";
import './Forms.css'
const FormItem = Form.Item;
const Option = Select.Option;


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

        const validateMessages = {
            required: '${label} is required!',
            types: {
              email: '${label} is not a valid email!',
              number: '${label} is not a valid number!',
            },
            number: {
            range: '${label} must be between ${min} and ${max}',
            },
          };

        const onFinish = (values) => {
        console.log(values);
        };

        return (
          <div>
            <h2 className="topHeading">Form in Ant Design</h2>
            <Form style={{ width: "100%", marginRight: "10px" }} onFinish={onFinish} validateMessages={validateMessages} className="appForm" >
               <Row style={rowStyle} gutter={gutter} justify="start"> 
                  <Col md={24} sm={24} xs={24} style={colStyle}> 
                
                    <Row justify="start" className="appFormStyle" >
                        <Col md={12} xs={24} >
                          <FormItem label="First Name" hasFeedback>                          
                            <Input type="text" name="first_name" id="first_name" maxLength={150} placeholder="First Name" autoComplete="off" />
                          </FormItem>
                        </Col>
                        <Col md={12} xs={24}>
                          <FormItem label="Last Name" hasFeedback>                          
                              <Input type="text" name="last_name" id="last_name" maxLength={150} placeholder="Last Name" autoComplete="off"/>
                          </FormItem>
                        </Col>
                    </Row>
                    
                    <Row justify="start" className="appFormStyle" >
                        <Col md={12} xs={24} >
                          <FormItem label="Password" hasFeedback>                          
                            <Input type="password" name="password" id="password" placeholder="Password" autoComplete="off" />
                          </FormItem>
                        </Col>                        
                    </Row>

                    <Row justify="start" className="appFormStyle">
                        <Col md={12} xs={24}>
                          <FormItem label="Gender">
                            <Select
                              name="gender"
                              id="gender"
                              showSearch
                              optionFilterProp="children"
                              getPopupContainer={trigger => trigger.parentNode}
                              placeholder="Select Gender"
                              bordered={false}
                              className="select"
                             >
                             <Option value="">Select Gender</Option>
                             <Option value="M">Male</Option>
                             <Option value="F">Female</Option>
                            </Select>                    
                          </FormItem>
                        </Col>
                        <Col md={12} xs={24}>
                          <FormItem label="Birth Date">                            
                            <BirthDatePicker/>    
                          </FormItem>
                        </Col>
                    </Row>    

                  </Col>
                </Row> 
            </Form>       

                      
         </div>
         
        );  
    }
}
export default Forms;