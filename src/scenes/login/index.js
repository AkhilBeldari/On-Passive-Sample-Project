import React, { useState } from "react";
import "./index.scss";

import { useHistory, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { Form, Input, Button, message, Modal, Spin } from "antd";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { ReactComponent as LogoITC } from "../../assets/itc_trade_next_logo.svg";

import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { BarLoader } from "react-spinners";

const { confirm } = Modal;

const LoginPage = (props) => {
  const { history, setUserLoggedInStatus, setUserData, userData } = props;
  const [loader, setLoader] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [enterPasswordScreen, setEnterPasswordScreen] = useState(false);
  const [forgotScreen, setForgotScreen] = useState(false);
  const [resetMsgShow, setResetMsgShow] = useState(false);

  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  // const history = useHistory();

  const onFinish = async (username, password) => {
    //   try {
    //     const dataToSend = {
    //       username: username,
    //       password: password,
    //       supplier: false,
    //     };

    //     setLoader(true);

    //     const loginResponse = await loginService(dataToSend);
    //     console.log("LoginResponse: ", loginResponse);

    //     //TODO: autologout to be setup
    //     if (loginResponse.status == 200) {
    //       console.log(loginResponse.data);
    //       setUserData({
    //         ...loginResponse.data.data,
    //         locationFeatureArray: loginResponse.data.data.location_access.map(
    //           (item) => item.feature_code
    //         ),
    //         username: username,
    //         logout_timestamp:
    //           Math.round(new Date().getTime() / 1000) +
    //           loginResponse.data.data.refresh_token_expiry,
    //       });
    //       console.log(
    //         "date time at logout : ",
    //         new Date(
    //           (Math.round(new Date().getTime() / 1000) +
    //             loginResponse.data.data.refresh_token_expiry) *
    //           1000
    //         )
    //       );
    //       setUserLoggedInStatus(true);
    //       history.replace("/home");
    //     } else {
    //       console.log("Login response: ", loginResponse.data.message);
    //       message.error("Login Failed.");
    //       setLoader(false);
    //     }
    //   } catch (error) {
    //     if (error.response) {
    //       message.error(error.response.data.message);
    //     } else {
    //       message.error("Server Unavailable.");
    //     }
    //     setLoader(false);
    //   }
    // };
    // const onFinishReset = async (old_password, new_password, confirm_password) => {
    //   try {
    //     setResetting(true);
    //     const dataToSend = {
    //       user_name: form.getFieldValue("username"),
    //       old_password: old_password,
    //       new_password: new_password,
    //     };

    //     const response = await changePwService(dataToSend);
    //     console.log("ChangeResponse: ", response);

    //     if (response.status == 200) {
    //       console.log(response.data);
    //       setForgotPwModal(false);
    //       form.setFieldsValue({
    //         password: new_password,
    //       });
    //       onFinish({
    //         username: form.getFieldValue("username"),
    //         password: new_password,
    //       });
    //     } else {
    //       console.log("Change response: ", response.data.message);
    //       message.error("Cannot reset password..!");
    //     }
    //   } catch (error) {
    //     message.error(error.response.data.message);
    //   }
    //   setResetting(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinishFailedReset = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const forgotPwClicked = async () => {
    //   console.log(form.getFieldValue("username"));
    //   if (
    //     form.getFieldValue("username") !== null &&
    //     form.getFieldValue("username") !== "" &&
    //     form.getFieldValue("username") !== undefined
    //   ) {
    //     setSpinning(true);
    //     try {
    //       const response = await forgotPwService({
    //         user_name: form.getFieldValue("username"),
    //         supplier: false,
    //       });
    //       if (response.data.status) {
    //         setForgotPwModal(true);
    //         setSpinning(false);
    //       } else {
    //         message.warning("Error sending email...!");
    //         setSpinning(false);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       message.warning(error.response.data.message);
    //       setSpinning(false);
    //     }
    //   } else {
    //     message.warning("Please enter username..!");
    //   }
  };

  function showPromiseConfirm() {
    confirm({
      title: "Reset Password ?",
      icon: <ExclamationCircleOutlined />,
      content:
        "A password reset code will be sent to your registered Email id and Mobile number, please use it to reset the password..",
      okText: "Reset",
      cancelText: "Cancel",
      onOk() {
        forgotPwClicked();
      },
      onCancel() { },
    });
  }
  const handleCancelClick = () => {
    setForgotScreen(false)
    setResetMsgShow(false)
  }

  const logo = <LogoITC className="itc-logo" />;

  return (
    <Spin spinning={spinning}>
      <>
        {/* <Modal
        visible={forgotPwModal}
        footer={false}
        maskClosable={false}
        closable={false}
        className="forgot-pw-modal"
      >
        <div className="reset-pw">
          <div className="header">
            A password reset code has been sent to the registered Email id and
            Mobile number.
          </div>
          <div className="login-form">
            <Form
              form={form2}
              name="reset_pw"
              initialValues={{ remember: false }}
              size="large"
              onFinish={onFinishReset}
              onFinishFailed={onFinishFailedReset}
            >
              <Form.Item
                name="old_password"
                rules={[
                  {
                    required: true,
                    message: "Please input password !",
                  },
                ]}
                label="Reset Code"
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  // type="password"
                  placeholder={"Reset Code"}
                />
              </Form.Item>
              <Form.Item
                name="new_password"
                dependencies={["old_password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input password !",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("old_password") !== value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The new password should not be same as reset Code !"
                      );
                    },
                  }),
                ]}
                label="New Password"
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  // type="password"
                  placeholder={"New Password"}
                />
              </Form.Item>
              <Form.Item
                name="confirm_password"
                dependencies={["new_password"]}
                hasFeedback
                label="Confirm Password"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password !",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("new_password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "Confirm password does not match with new password !"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  // type="password"
                  placeholder={"Confirm Password"}
                />
              </Form.Item>

              <Form.Item>
                <div className="reset-btn-container">
                  <Button
                    type="primary"
                    size={"large"}
                    block
                    htmlType="submit"
                    loading={resetting}
                  >
                    Reset Password
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal> */}
      </>
      <BarLoader loading={loader} width={"100%"} color="#fdbc2c" />

      <div className="login">
        <div className="login-container">
          {/* <div className="left-container">
            <div className="logo-container">{logo}</div>
          </div> */}
          <div className="right-container">
            <div className="header">{forgotScreen ? "Forgot Password ?" : "Login to the Dashboard"}</div>
            {/* <div className="sub-header">
              Hi user, sign in and start managing your auctions
            </div> */}
            <div className="form-container">
              {/* <div className="login-form"> */}
              <Form
                form={form}
                name="normal_login"
                //   className="login-form"
                initialValues={{ remember: true }}
                size="large"
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              >
                <Form.Item
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
                {!forgotScreen && <Form.Item
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
                      onClick={() => setEnterPasswordScreen(true)}
                    >
                      Enter password
                  </a>
                  </Form.Item>
                </div> : <Form.Item className="forgot-text-align-left">
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
                  {/* <Form.Item> */}
                  <Button
                    type="primary"
                    className="signup-btn"
                    // icon={<LoginOutlined />}
                    size={"large"}
                    block
                    htmlType="submit"
                    onClick={() => {
                      forgotScreen ? handleCancelClick()
                        : alert("SignUp Form under Construction")
                    }}
                  >
                    {forgotScreen ? "CANCEL" : "NEW ? SIGNUP"}
                  </Button>
                  {/* </Form.Item> */}
                  {/* <Form.Item> */}
                  <Button
                    type="primary"
                    className="login-btn"
                    // icon={<LoginOutlined />}
                    size={"large"}
                    block
                    htmlType="submit"
                    onClick={() => {
                      forgotScreen ? setResetMsgShow(true) : onFinish()
                    }}
                  >
                    {forgotScreen ? "RESET" : "LOGIN NOW"}
                  </Button>
                  {/* </Form.Item> */}
                </div>
              </Form>
            </div>
          </div>
        </div>

        {/* <div className="login-container">
          <div className="login-card">
            <div className="form-header">
              <div className="main-header">Sign In</div>
              <div className="sub-header">
                Hi user, sign in and start managing your auctions
              </div>
            </div>
            <div className="login-form">
              <Form
                form={form}
                name="normal_login"
                //   className="login-form"
                initialValues={{ remember: true }}
                size="large"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input username !",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder={"Username"}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input password !",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    // type="password"
                    placeholder={"Password"}
                  />
                </Form.Item>

                <Form.Item className="text-align-center">
                  <a
                    className="custom-link"
                    onClick={() => showPromiseConfirm()}
                  >
                    Forgot password ?
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    icon={<LoginOutlined />}
                    size={"large"}
                    block
                    htmlType="submit"
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div> 
          </div>
        </div>*/}
      </div>
    </Spin >
  );
};

const mapStateToProps = state => {

};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
