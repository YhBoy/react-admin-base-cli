import React, { Component, Fragment } from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

import './Nav.less'
import { Link } from 'react-router-dom';
import menuList from '../../../config/menu'
const { SubMenu } = Menu;

export default class Nav extends Component{
      state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
      createMenu = (target)=>{
         return target.map((item)=>{
            if( !item.children  ){
                return (
                    <Menu.Item key={item.key} icon={<PieChartOutlined />}>
                        <Link to={item.key}>
                            {item.title}
                        </Link>
                    </Menu.Item>
                )
            }else{
                return (
                    <SubMenu key={item.key} icon={<MailOutlined />} title={item.title}>
                        {this.createMenu(item.children)}
                    </SubMenu>
                )
            }
        }) 
      }
    render(){
        return ( 
            <Fragment>
                <h1 className="logo">这里可以放LOGO</h1>
                <Menu
                        
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                    {
                        this.createMenu(menuList)
                    }        

                         
                        
                </Menu>    
            </Fragment>    
            
         )
    }
}