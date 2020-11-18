import React, { Component } from 'react';

import './admin.less'
import HeaderTop from './HeaderTop/HeaderTop'
import Footer from './Footer/Footer'


import Home from '../../components/Home/Home'
import Category from '../Category/Category'
import Product from '../Product/Product'

import User from '../User/User'
import Role from '../Role/Role'

import Bar from '../Bar/Bar'
import Pie from '../Pie/Pie'
import Line from '../Line/Line'

import Nav from './Nav/Nav'

import { Switch,Route, Redirect } from 'react-router-dom' 
import { Layout } from 'antd';
const { Header,  Sider, Content } = Layout;
export default class Login extends Component{

    componentDidMount(){
        console.log(123)
    }


    render(){
        return ( 
            <Layout className="admin">
                <Sider className="slider">
                    <Nav />
                </Sider>
                <Layout>
                    <Header className="header">
                            <HeaderTop />
                    </Header>
                    <Content className="content">
                        <Switch>
                            <Route path="/admin/home" component={Home} />
                            <Route path="/admin/prod_about/category" component={Category} />
                            <Route path="/admin/prod_about/product" component={Product} />
                            <Route path="/admin/user" component={User} />
                            <Route path="/admin/role" component={Role} />
                            <Route path="/admin/bar" component={Bar} />
                            <Route path="/admin/line" component={Line} />
                            <Route path="/admin/pie" component={Pie} />
                            <Redirect to="/admin/home"  />
                        </Switch>
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
         )
    }
}


