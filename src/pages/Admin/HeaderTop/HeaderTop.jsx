import React, { Component } from 'react';
import './headerTop.less'
export default class HeaderTop extends Component{
    logOut=()=>{
        console.log(12)
    }
    render(){
        return ( 
            <div className="header">
                    <div className="info">
                        <i className="iconfont icon-quanping"></i>
                        <span>啦啦啦</span>
                        <p onClick={ this.logOut }>退出登录</p>
                    </div>   
            </div>        
         )
    }
}