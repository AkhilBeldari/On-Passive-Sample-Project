import React, { useState } from "react";
import "./index.scss";

import { useHistory, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { Form, Input, Button, message, Modal, Spin } from "antd";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { ReactComponent as LogoITC } from "../../assets/itc_trade_next_logo.svg";

import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { BarLoader } from "react-spinners";
import { loginSuccess } from '../../store/actions';

const { confirm } = Modal;

const LoginPage = (props) => {
  const { history, currentUser, loginSuccess } = props;
  const [enterPasswordScreen, setEnterPasswordScreen] = useState(false);
  const [forgotScreen, setForgotScreen] = useState(false);
  const [resetMsgShow, setResetMsgShow] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    // console.log("On Finish --->", values);
    if (validate(values)) {
      localStorage.setItem("isLogged", true);
      loginSuccess(values);
      history.push("/dashboard");
    }
  }

  const validate = (values) => {
    const { username, password, verify_password } = values;
    // console.log("ITem For VAlidation ----------------------------> ", values, username, password, verify_password, password === undefined, verify_password === undefined);

    var alphaNumericRegex = /^[a-zA-Z0-9]*$/;
    var numberRegex = /^[0-9.]+$/;

    var EmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var passwordRegex = /^([a-zA-Z0-9_-]){12,28}$/;
    if ((username !== undefined || username !== null || username !== "") && (password !== undefined) && (verify_password === undefined)) {

      if (
        username === null ||
        username === undefined ||
        username === ""
      ) {
        message.error(`Please enter user Name !`, 5);
        return false;
      } else if (!username.match(EmailRegex)) {
        message.error(`Please enter valid Username !`, 5);
        return false;
      } else if (
        password === null ||
        password === undefined ||
        password === ""
      ) {
        message.error(`Please enter Password !`, 5);
        return false;
      } else if (password.match(alphaNumericRegex)) {
        message.error(`Please enter Alpha Numeric Password !`, 5);
        return false;
      } else if (password.length < 12) {
        message.error(`Your password must contain atleast 12 characters !`, 5);
        return false;
      }
      return true;
    }
    else if ((username !== undefined || username !== null || username !== "") && (password === undefined) && (verify_password === undefined)) {
      if (
        username === null ||
        username === undefined ||
        username === ""
      ) {
        message.error(`Please enter user Name !`, 5);
        return false;
      } else if (!username.match(EmailRegex)) {
        message.error(`Please enter valid Username !`, 5);
        return false;
      }
      handleResetClick();
      return false;
    }
    else if ((username === undefined) && (password !== undefined) && (verify_password !== undefined)) {
      if (
        password === null ||
        password === undefined ||
        password === ""
      ) {
        message.error(`Please enter New Password !`, 5);
        return false;
      } else if (password.match(alphaNumericRegex)) {
        message.error(`Please enter Alpha Numeric Password !`, 5);
        return false;
      } else if (password.length < 12) {
        message.error(`Your password must contain atleast 12 characters !`, 5);
        return false;
      } else if (password !== verify_password) {
        message.error("Verify Password doesn't match with New Password.")
        return false;
      }
      handleNewPasswordClick();
      return false;
    }
    // else if (username === undefined) {
    //   message.error(`From the Enter New Password !`, 5);
    //   return false;
    // }
    // else if (
    //   rowData.salary === null ||
    //   rowData.salary === undefined ||
    //   rowData.salary === "") {
    //   message.error(`Please enter Salary !`, 5);
    //   return false;
    // }
    // else if (rowData.salary < 0) {
    //   message.error(`Salary cannot be less than 0 !`, 5);
    //   return false;
    // }

    // return true;
  };

  const handleCancelClick = () => {
    setForgotScreen(false)
    setResetMsgShow(false)
    setEnterPasswordScreen(false)
  }

  const handleNewPasswordClick = () => {
    message.success("Password Updated successfully", 5);
    setForgotScreen(false)
    setResetMsgShow(false)
    setEnterPasswordScreen(false)
  }

  const handleResetClick = () => {

    message.success("Password Updated successfully", 5);
    setForgotScreen(false)
    setResetMsgShow(false)
    setEnterPasswordScreen(false)
  }

  const logo = <LogoITC className="itc-logo" />;

  return (
    <Spin spinning={false}>
      {/* <BarLoader loading={loader} width={"100%"} color="#fdbc2c" /> */}
      {/* {console.log("User Data", currentUser)} */}
      <div className="login">
        <div className="login-container">
          {/* <div className="left-container">
            <div className="logo-container">{logo}</div>
          </div> */}
          <div className="right-container">
            <div className="header">
              {forgotScreen ? "Forgot Password ?" : enterPasswordScreen ? "Enter New Password" : "Login to the Dashboard"}</div>
            {enterPasswordScreen && <div className="sub-header">
              {"Your password must contain atleast 12 characters with Alphabets & Numericals"}
            </div>}
            <div className="form-container">
              {/* <div className="login-form"> */}
              <Form
                form={form}
                name="normal_login"
                //   className="login-form"
                initialValues={{ remember: true }}
                size="large"
                onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              >
                {!enterPasswordScreen ? <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input username !",
                    },
                  ]}
                >
                  <Input
                    suffix={<UserOutlined className="site-form-item-icon" />}
                    placeholder={"Username"}
                  />
                </Form.Item>
                  : <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter new Password !",
                      },
                    ]}
                  >
                    <Input.Password
                      // prefix={<LockOutlined className="site-form-item-icon" />}
                      // type="password"
                      placeholder={"Enter New Password"}
                    />
                  </Form.Item>}
                {!forgotScreen && !enterPasswordScreen && <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input password !",
                    },
                  ]}
                >
                  <Input.Password
                    // prefix={<LockOutlined className="site-form-item-icon" />}
                    // type="password"
                    placeholder={"Password"}
                  />
                </Form.Item>
                }
                {enterPasswordScreen && <Form.Item
                  name="verify_password"
                  rules={[
                    {
                      required: true,
                      message: "Please input verify password !",
                    },
                  ]}
                >
                  <Input.Password
                    // prefix={<LockOutlined className="site-form-item-icon" />}
                    // type="password"
                    placeholder={"Verify Password"}
                  />
                </Form.Item>
                }
                {resetMsgShow && <div style={{ backgroundColor: "rgb(92 147 243)", borderRadius: "10px", marginTop: "10px" }}>
                  <p className="rest-text">
                    We have send you an email with reset password Link. Kindly access the link to reset the Password.
                  </p>
                </div>}
                {forgotScreen ? <div style={{ display: "block", width: "100%" }}>
                  <Form.Item className="text-align-left">
                    <a
                      className="custom-link"
                      // onClick={() => showPromiseConfirm()}
                      onClick={() => setResetMsgShow(true)}
                    >
                      Resend Link
                  </a>
                  </Form.Item><Form.Item className="text-align-right">
                    <a
                      className="custom-link"
                      // onClick={() => showPromiseConfirm()}
                      onClick={() => {
                        setForgotScreen(false)
                        setResetMsgShow(false)
                        setEnterPasswordScreen(true)
                      }}
                    >
                      Enter password
                  </a>
                  </Form.Item>
                </div> : enterPasswordScreen ? null : <Form.Item className="forgot-text-align-left">
                  <a
                    className="custom-link"
                    // onClick={() => showPromiseConfirm()}
                    onClick={() => setForgotScreen(true)}
                  >
                    Forgot password ?
                  </a>
                </Form.Item>
                }
                <div style={{ display: "block", width: "100%" }}>
                  <Button
                    type="primary"
                    className="signup-btn"
                    // icon={<LoginOutlined />}
                    size={"large"}
                    block
                    htmlType="submit"
                    onClick={() => {
                      forgotScreen || enterPasswordScreen ? handleCancelClick()
                        : alert("SignUp Form under Construction")
                    }}
                  >
                    {forgotScreen || enterPasswordScreen ? "CANCEL" : "NEW ? SIGNUP"}
                  </Button>
                  {<Button
                    type="primary"
                    className="login-btn"
                    // icon={<LoginOutlined />}
                    size={"large"}
                    block
                    htmlType="submit"
                  >
                    {forgotScreen ? "RESET" : enterPasswordScreen ? "SAVE" : "LOGIN NOW"}
                  </Button>}
                  {/* {(forgotScreen || enterPasswordScreen) && <Button
                    type="primary"
                    className="login-btn"
                    // icon={<LoginOutlined />}
                    size={"large"}
                    block
                    htmlType="submit"
                    onClick={() => {
                      forgotScreen ? setResetMsgShow(true) : handleNewPasswordClick()
                    }}
                  >
                    {forgotScreen ? "RESET" : "SAVE"}
                  </Button>} */}
                </div>
              </Form>
            </div>
          </div>
        </div>

      </div>
    </Spin >
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.login.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (userData) => dispatch(loginSuccess(userData)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
