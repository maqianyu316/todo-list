/*
 * @Description: 
 * @Author: xiaoma
 * @Date: 2019-11-27 17:39:58
 * @LastEditTime: 2019-11-29 15:43:17
 * @LastEditors: xiaoma
 */
import React, { Component } from 'react';
import './show.css';

class Show extends Component {   
    // 单项完成的点击事件
    finishAction = (index)=>{
        this.props.onFinishItem(index);
    }
    // 单项数据的删除事件
    deleteAction(index){
        this.props.onDeleteItem(index);
    }
    // 单项数据的撤回完成事件
    withdraw(index){
        this.props.onWithdrawItem(index);
    }
    //全部设置为完成
    fininshAll(){
        this.props.onFininshAll();
    }
    //撤销全部完成设置
    withdrawAll(){
        this.props.onWithdrawAll();
    }
    render() {
        let {data,dataTotal} = this.props;        
        let newArr = dataTotal.filter((item)=>{
            return item.status === 'finished';
        });
        let all      = dataTotal.length,
            finished = newArr.length;
        return (
            <div className='list'>
                <ul className="list-group">
                {
                    data.map((item, index)=>(
                        <li style={{textDecoration: (item.status==='finished')?'line-through':'none',
                            color:(item.status==='finished')?'rgba(0, 0, 0, 0.2)':'rgba(0, 0, 0, 0.65)'}} 
                            className="list-group-item" key={index}>
                            <span>{item.value}</span>
                            <div>
                                {(item.status!=='finished') && <i className='glyphicon glyphicon-ok' onClick={()=>this.finishAction(index)}></i>}
                                {(item.status ==='finished') && <i className='glyphicon glyphicon-share-alt' onClick={()=>this.withdraw(index)}></i>}
                            </div>
                            <div>
                                <i className='glyphicon glyphicon-remove' onClick={()=>this.deleteAction(index)}></i>
                            </div>                      
                        </li>
                    ))
                }
                </ul>        
                <div>    
                    {(data.length!==0)&&(all!==finished) ? <i className='glyphicon glyphicon-check' onClick={()=>this.fininshAll()}></i> : null }
                    {(data.length!==0)&&(all===finished) ? <i className='glyphicon glyphicon-share' onClick={()=>this.withdrawAll()}></i> : null }
                </div>
            </div>
        );
    }
}

export default Show;