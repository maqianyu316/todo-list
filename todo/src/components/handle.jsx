/*
 * @Description: 
 * @Author: xiaoma
 * @Date: 2019-11-27 17:39:40
 * @LastEditTime: 2019-11-29 15:40:49
 * @LastEditors: xiaoma
 */
import React, { Component } from 'react';
import './handle.css';

class Handle extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal: ''
        }
    }
    // 回车输入
    onInputKeyup(e){
        if (this.state.inputVal === '') return;
        else if(e.keyCode === 13){ 
        this.addAction();
        }
    }
    // 输入值的变化
    changeAction = (ev)=>{
        this.setState({inputVal: ev.target.value});
    }
    // 添加数据
    addAction = ()=>{
        this.props.onAdd(this.state.inputVal);
        // 清空输入框
        this.setState({inputVal: ''});
    }
    
    render(){
        let {inputVal} = this.state;
        return (
            <div className='wrap'>
                <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1"><i className='glyphicon glyphicon-th-list'></i></span>
                    <input type="text" className="form-control" 
                           placeholder="What needs to be done?" 
                           aria-describedby="sizing-addon1"
                           value={inputVal} 
                           onChange={(e) => this.changeAction(e)}
                           onKeyUp={(e) => this.onInputKeyup(e)}
                    />              
                </div>          
            </div>
        );
    }
}

export default Handle;