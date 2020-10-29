import React, { useState, useEffect } from 'react'
import { Button, Input } from 'antd';
import { useHistory } from "react-router-dom"
import axios from "axios"
import "./App.css"
export default function Deng() {
    const [account, setaccount] = useState("")
    const [password, setpassword] = useState("")
    const [data, setdata] = useState([{
        // ctiye: "1111",
        // wendu: "18"
    }])
    const history = useHistory()
    useEffect(async () => {
        const fetData = async () => {
            const result = await axios(
                'http://wthrcdn.etouch.cn/weather_mini?city=成都'
            )
            console.log(result.data.data)
            let city = result.data.data.city
            let wendu = result.data.data.wendu
            setdata(
                data.concat({
                    city,
                    wendu
                })
            )
        }
        fetData()
    }, [])
    return (
        <div>
            <div>
                {data.map(i => (
                    <span>{i.city} {i.wendu}</span>
                    
                ))}
            </div>
            <div className="deng">

                <span> 账号：<Input value={account} onChange={e => setaccount(e.target.value)} /></span>
                <span>密码：<Input value={password} onChange={e => setpassword(e.target.value)} /></span>
                <div className="deng-text">
                    <Button onClick={() => {
                        setaccount("")
                        setpassword("")
                    }}>重置</Button>
                    <Button onClick={() => {
                        if (!account || !password) {
                            alert("错误请重新输入")
                        } else {
                            history.push("/app")
                        }
                        console.log(data)
                    }}>登录</Button>
                </div>
            </div>
        </div>

    )
}