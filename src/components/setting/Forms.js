import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { 
  Form, Input, InputNumber, Select, 
  Checkbox, Upload, message, Row, Col, Tooltip, 
  Popover, Popconfirm, DatePicker, Button, Switch } from 'antd';
import BirthDatePicker from "../utility/datePicker";
import './Forms.css'

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const { TextArea } = Input;


class Forms extends Component {

    constructor(props) {
        super(props);
    }

    render(){

      //Convert capital to small letters
      const getLowercaseValue = e => e.target.value.toLowerCase().trim();

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
                          <FormItem label="Password" 
                                    name="password"
                                    rules={[
                                      {
                                      //required: true,
                                      },
                                      ]}  hasFeedback>                          
                            <Input type="password" name="password" id="password" placeholder="Password" autoComplete="off" />
                          </FormItem>
                        </Col> 
                        <Col md={12} xs={24} >
                          <FormItem
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                              {
                                //required: true,
                                message: 'Please confirm your password!',
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                              }),
                            ]}
                           >
                            <Input type="password" name="password" id="password" placeholder="Confirm Password" autoComplete="off" />
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

                    <Row justify="start" className="appFormStyle" >
                        <Col md={12} xs={24} >
                          <FormItem label="Range" hasFeedback>                          
                            <RangePicker picker="date" bordered={false} className="range"/>
                          </FormItem>
                        </Col> 
                        <Col md={12} xs={24}>
                          <FormItem label="Contact Number" hasFeedback>
                            <Input
                              type="number"
                              pattern="^-?[0-9]\d*\.?\d*$"
                              name="phone_number"
                              id="phone_number"                              
                              maxLength={14}
                              placeholder="Contact Number" autoComplete="off"
                            />
                          </FormItem>
                        </Col>                           
                    </Row> 

                    <Row justify="start" className="appFormStyle">
                        <Col md={12} xs={24}>
                          <FormItem 
                                label="Email" 
                                type="email"
                                name="email"                             
                                rules={[
                                  {
                                    //required: true,
                                    type: "email",
							                      message: "Please enter valid email."
                                  },
                                  ({getFieldValue}) => ({
                                    getValueFromEvent: getLowercaseValue,
					                          validate: [{
					                          trigger: 'onChange',
					        	                  rules: [{
							                          type: "email",
							                          message: "Please enter valid email."
						                        	  },
						                          	{
							                            required: true,
							                            whitespace: true,
							                            message: "Please enter email."
						                           	}
					                        	  ]
					                          	}, { 
					                            	trigger: 'onChange',
					                                rules: [
						                             	  {
						                            		validator: this.handleTrigger
						                              	}
					                                ]
					                            }]
                                  }) 
                                ]} 
                                hasFeedback  >
                            <Input type="email" name="email" id="email" placeholder="Email" autoComplete="off" />
                          </FormItem>
                        </Col>
                        <Col md={12} xs={24}>
                          <FormItem
                            name={['user', 'age']}
                            label="Age"
                            rules={[
                             {
                             type: 'number',
                             min: 0,
                             max: 99,
                             },
                            ]}
                           >
                            <Input type="number" name="age" id="age" placeholder="Age" autoComplete="off" />
                          </FormItem>
                        </Col>  
                    </Row> 

                    <Row justify="start" className="appFormStyle" >
                        <Col md={12} xs={24} >
                          <FormItem label="Note" name="note"
                                     /*rules={[
                                      {
                                      //required: true,
                                      },
                                      ]}*/  hasFeedback>         
                                                      
                            <TextArea name="note" id="note" rows={6} placeholder="Notes" />
                          </FormItem>
                        </Col> 
                        <Col md={12} xs={24} >
                          <FormItem label="Zip" hasFeedback>
                            <Input type="text" name="zip" id="zip" maxLength={6}
                               placeholder="Zip" autoComplete="off" />
                          </FormItem>  
                        </Col> 
                    </Row>    

                    <Row justify="start" className="appFormStyle" >
                        <Col md={12} xs={24} >
                            <FormItem label="Active">
                              <Switch />
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