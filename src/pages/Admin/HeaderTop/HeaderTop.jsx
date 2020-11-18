import React, { Component } from 'react';
import './headerTop.less'
import { Modal} from 'antd';
import {connect} from 'react-redux'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;



class HeaderTop extends Component{
    logOut=()=>{
        confirm({
            title: '提示',
            icon: <ExclamationCircleOutlined />,
            content: '确认退出?',
            okText: '确认',
            cancelText: '取消',
            onOk() {
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
          });
    }
    render(){
        return ( 
            <div className="header">
                    <div className="info">
                        <i className="iconfont icon-quanping"></i>
                        <span onClick = { this.props.handleInputChange }> {this.props.inputValue} </span>
                        <p onClick={ this.logOut }>退出登录</p>
                    </div>   
            </div>        
         )
    }
}

const mapStateToProps = (state)=>{
  return {
      inputValue: state.inputValue,
      list:state.list
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
      handleInputChange(e){
          const action = {
              type: 'change_input_value'
          }    
          dispatch(action)
      },
      handleClick(){
        const action = {
            type: 'add_item',
        }    
        dispatch(action)
      },
      deleteItem(index){
          const action = {
              type: 'delete_item',
              value: index
          } 
          dispatch(action)
      }
      
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HeaderTop)