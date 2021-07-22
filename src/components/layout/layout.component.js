import React from "react";
import "./layout.styles.css";

import { Layout, Menu, Icon, Select } from "antd";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
const { Header, Sider, Content, Footer } = Layout;
const { Option } = Select;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onChange = (value) => {
    console.log(`selected ${value}`);
  }

  onSearch = (val) => {
    console.log('search:', val);
  }

  render() {
    return (
      <Layout>
        {console.log("Match Parms", this.props.match.path, this.props)}
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">On Passive</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UsergroupAddOutlined />}>
              Employees
        </Menu.Item>
            <Menu.Item key="2" icon={<HomeOutlined />}>
              Organizations
        </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Users
        </Menu.Item>
            <Menu.Item key="4" icon={<SettingOutlined />}>
              Settins
        </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: this.state.collapsed ? "collapsed-trigger" : "trigger",
              onClick: this.toggle,
            })}
            {this.props.match.path === "/dashboard" ? <>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select Language"
                optionFilterProp="children"
                showArrow
                showSearch
                onChange={() => this.onChange()}
                onSearch={this.onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="telugu">Telugu</Option>
                <Option value="hindi">Hindi</Option>
                <Option value="english">English</Option>
              </Select>
            </> : null}
          </Header>
          <Content
            className="site-content-background"
            style={{
              margin: '24px 16px',
              marginBottom: 0,
              padding: 24,
              minHeight: "Calc(100vh - 118px)",
            }}
          >
            {this.props.match.path === "/dashboard" ? "Content" : "Create Content"}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout));
