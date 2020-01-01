import Axios from 'axios';
import React from 'react';
import {Button,Input,message} from 'antd';
var LoanreturnCss = require('../css/loanreturn.css');



export default class LoanreturnPage extends React.Component{


    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload = ()=>{
        var data
        var data={
            
            "学生学号":this.state.学生学号,
            "图书名字":this.state.图书名字,
            "图书编号":this.state.图书编号,
        }
        Axios.post({
            url:"/Register/register",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("借阅成功")
            }
            else if(result.state==1){
                message.info("归还成功")
            }
        })
    }


    render(){
        return(
            <div>
                <div className={LoanreturnCss.header}>
                   <h3>借阅与归还</h3>
                </div>
                
                <div className={LoanreturnCss.table}>
               
                    <tr >
                        <td>学生学号</td>
                        <td>图书名字</td>
                        <td>图书编号</td>
                    </tr>
                    <tr>
                        <td><Input  placeholder=""></Input></td>
                        <td><Input  placeholder="" ></Input></td>
                        <td><Input  placeholder="" ></Input></td>
                    </tr>
                    <tr>
                        <td><Input  placeholder="" ></Input></td>
                        <td><Input  placeholder="" ></Input></td>
                        <td><Input  placeholder="" ></Input></td>
                    </tr>
                    <tr>
                        <td><Input  placeholder="" ></Input></td>
                        <td><Input  placeholder="" ></Input></td>
                        <td><Input  placeholder="" className={LoanreturnCss.h3}></Input></td>
                    </tr>
                </div>
                
                <div className={LoanreturnCss.Button}>
                    <Button onclick="foLogin()" >借书</Button>
                    <Button onclick="foLogin()" >还书</Button>
                </div>
            </div>
        )
    }
}