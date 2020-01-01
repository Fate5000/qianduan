import Axios from 'axios';
import React from 'react';
import {Button,Input,message} from 'antd';
var DeleteaddCss = require('../css/deleteadd.css');

export default class DeleteaddPage extends React.Component{


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
            
            "图书数量":this.state.图书数量,
            "图书编号":this.state.图书编号,
            "图书书名":this.state.图书书名,
        }
        Axios.post({
            url:"/findpassword",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("增加成功")
            }
            else if(result.state==1){
                message.info("减少成功")
            }
        })
    }

    render(){
        return(
            <div>
                <div className={DeleteaddCss.header}>
                    <h1>增减图书</h1>
                </div>
                <div className={DeleteaddCss.table}>
                    <table>
                        <tr>
                            <td>图书编号</td>
                            <td>图书书名</td>
                            <td>图书数量</td>
                        </tr>
                        <tr>
                            <td><Input  placeholder="" ></Input></td>
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
                            <td><Input  placeholder="" ></Input></td>
                        </tr>
                        </table>
                </div>
                    <div className={DeleteaddCss.Button}>
                        <Button onclick="foLogin()" >增加</Button>
                        <Button onclick="foLogin()" >减少</Button>
                    </div>
                   
                
            </div>
        )
    }
}