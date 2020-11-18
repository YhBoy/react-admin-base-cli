import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import {
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons';

import './Nav.less'
import { Link } from 'react-router-dom';
import menuList from '../../../config/menu'
const { SubMenu } = Menu;

export default class Nav extends Component{
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
                        defaultSelectedKeys={['/admin/home']}
                        mode="inline"
                        theme="dark"
                    >
                    {
                        this.createMenu(menuList)
                    }        

                         
                        
                </Menu>    
            </Fragment>    
            
         )
    }
}