import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Select, Checkbox, Upload, message, Icon, Row, Col } from 'antd';
import Box from '../utility/Box';
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

       // const Forms = () => {
        const onFinish = (values) => {
        console.log(values);
        };

        return (
            <Form  onFinish={onFinish} validateMessages={validateMessages} style={{ width: "100%" }} className="appForm">
                <Row style={rowStyle} gutter={gutter} justify="start">
                  <Col md={24} sm={24} xs={24} style={colStyle}>
                  <Box title="Basic Information">
                      <Row justify="start" className="appFormStyle">
                        <Col md={12} xs={24}>
                          <FormItem label="First Name" hasFeedback>
                            
                              rules:{[
                                {
                                  required: true,
                                  whitespace: true,
                                  message: "Please enter first name."
                                }
                              ]}
                            (<Input type="text" name="first_name" id="first_name" placeholder="First Name" autoComplete="off" />)
                          </FormItem>
                        </Col>
                        <Col md={12} xs={24}>
                          <FormItem label="Last Name" hasFeedback>
                            
                              rules: {[
                                {
                                  required: true,
                                  whitespace: true,
                                  message: "Please enter last name."
                                }
                              ]}
                            (<Input type="text" name="last_name" id="last_name" placeholder="Last Name" autoComplete="off"/>)
                          </FormItem>
                        </Col>
                      </Row>
                    </Box>
                    </Col>
                      <Form.Item
                       name={['user', 'name']}
                       label="Name"
                       rules={[
                        {
                          required: true,
                        },
                       ]}
                      >
                     <Input />
                     </Form.Item>
                      <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                          {
                          type: 'email',
                          },
                        ]}
                      >
                      <Input />
                     </Form.Item>
                     <Form.Item
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
                     <InputNumber />
                     </Form.Item>
                     <Form.Item name={['user', 'website']} label="Website">
                       <Input />
                     </Form.Item>
                     <Form.Item name={['user', 'introduction']} label="Introduction">
                       <Input.TextArea />
                     </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                      <Button type="primary" htmlType="submit">
                       Submit
                      </Button>
                    </Form.Item>
                </Row> 
            </Form>
        );  
    }
}
export default Forms;