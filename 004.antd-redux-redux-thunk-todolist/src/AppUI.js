import React from 'react'
import { Input, Button, List } from 'antd'


export default (props)=>(
    <div style={{padding: '10px 0 0 10px'}}>
        <Input
            style={{marginRight: '20px',width: '300px'}} 
            placeholder='info'
            value={props.inputValue}
            onChange={props.handleChange}
        ></Input>
        <Button
            onClick={props.handleClick}
        >添加</Button>
        <List
            style={{width: '380px',marginTop: '10px'}}
            bordered
            dataSource={props.lists}
            renderItem={(item, index) => (
                <List.Item onClick={()=>props.handleDel(index)}>
                {item}
                </List.Item>
            )}
        />
    </div>
)
