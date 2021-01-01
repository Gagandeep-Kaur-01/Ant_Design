import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { 
  Form, Input, InputNumber, Select, 
  Checkbox, Upload, message, Row, Col, Tooltip, 
  Popover, Popconfirm, DatePicker, Button, Switch } from 'antd'
//import Button from "../utility/button";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import BirthDatePicker from "../utility/datePicker";
import PhoneInput from 'react-phone-number-input/input'
import './Forms.css'

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

//Before Image Upload
function beforeUpload(file) {
  return false;
}; 

//Get base64 String From Image
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

/*function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}*/

class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          redirectToReferrer: false
        };      
    };

    //If agree
    onAgreeChange = async e => { 
      this.setState({
        agreeChecked: !this.state.agreeChecked
      });
    };

    //After Image Upload
    handleUpload = info => {
      const isJPG = info.file.type === "image/jpeg";
      const isPNG = info.file.type === "image/png";
      const isGIF = info.file.type === "image/gif";
      if (!isJPG && !isPNG && !isGIF) {
        message.error("You can only upload image file!");
        return false;
      }
      const isLt2M = info.file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
        return false;
      }
      this.setState({
        loading: true,
        selectedImage: info.fileList.slice(-1)[0].originFileObj
      });
      getBase64(info.fileList.slice(-1)[0].originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    };    

   /* handleChange = info => {
      if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            imageUrl,
            loading: false,
          }),
        );
      }
    };*/

    render(){

      const { loading, imageUrl } = this.state;
      const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}> Upload</div>
        </div>
      );

      //Only allow numbers
      const checkNumericValue = e => e.target.value.replace(/\D/, "");
      
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
          required: 'Please enter ${label}.',
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
                        <Col md={12} xs={24}>
                          <FormItem label="Image">                         
                              <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                                onChange={this.handleUpload}
                                >
                                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width:'100%' }} /> : uploadButton}
                              </Upload>
                          </FormItem>
                        </Col> 
                      </Row>  
                
                      <Row justify="start" className="appFormStyle" >
                        <Col md={12} xs={24} >
                          <FormItem label="First Name" name="firstname"
                                     rules={[
                                      {
                                      required: true,
                                      },
                                      ]}  hasFeedback>         
                                                      
                            <Input type="text" name="first_name" id="first_name" maxLength={50} placeholder="First Name" autoComplete="off" />
                          </FormItem>
                        </Col>
                        <Col md={12} xs={24}>
                          <FormItem label="Last Name" name="last_name"
                                    rules={[
                                      {
                                      required: true,
                                      },
                                      ]}  hasFeedback>                          
                              <Input type="text" name="last_name" id="last_name" maxLength={50} placeholder="Last Name" autoComplete="off"/>
                          </FormItem>
                        </Col>
                      </Row>
                      <Row justify="start" className="appFormStyle" >
                        <Col md={12} xs={24} >
                          <FormItem label="Password" 
                                    name="password"
                                    rules={[
                                      {
                                      required: true,
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
                                required: true,
                                message: 'Please confirm your password.',
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
                          <FormItem label="Gender" name="gender">
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
                          <FormItem label="Birth Date" name="birth">                            
                            <BirthDatePicker />    
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
                          <FormItem label="Contact Number" name="phone_number"
                               rules={[
                                {
                                  required: true,
                                  min: 10,
                                  max:14,
                                  message: "Contact number must be 10 digit long."
                                },                            
                              ]}                               
                              hasFeedback  >
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
                                    required: true,
                                    type: "email",
							                      message: "Please enter valid email."
                                  },                                  
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
                          <FormItem label="Note" name="note" hasFeedback>
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
                      <Row justify="start" className="appFormStyle" >
                        <Col md={12} xs={24} >
                          <FormItem >
                          <span>
						                <Checkbox checked={this.state.agreeChecked} onChange={this.onAgreeChange}>
						                 I Agree with
						                </Checkbox>
		                       {/*} <Link to={{ pathname: "" }} onClick={this.showModal}>Waiver and Release</Link>*/}
					              	</span>
                          </FormItem>
                        </Col>
                      </Row> 
                      <Row justify="start" className="appFormStyle" >
                        <Col md={12} xs={24} >
                          <FormItem>
                            <Button type="primary"  className="blue-btn" htmlType="submit">
                              Submit
                            </Button>
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