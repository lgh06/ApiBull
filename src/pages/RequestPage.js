import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import { Select, Input } from 'antd';
import { Row, Col } from 'antd';
import * as current from '../reducers/currentSlice'


// import { fetch }  from "../helpers";


// TODO , more methods
const methodArray = ['GET', 'POST', 'PUT', 'DELETE'];


export default function RequestPage () {
  const dispatch = useDispatch()



  const { Option } = Select;
  
  function handleChange(field, e) {
    let value;
    if (field === 'reqConfig.method'){ // Select可以直接拿到值
      value = e;
    }else{ // Input需要e.target.value拿到值
      value =  e.currentTarget.value;
    }
    if (field === 'reqUrl'){
      dispatch(current.setReqUrl(value))
    }else if (String(field).startsWith('reqConfig')){
      const configField = String(field).split('.')[1];
      dispatch(current.setReqConfig({[configField]: value}))
    }
  }
  function handleSubmit() {
    console.log('clicked 请求')
  }
  return (
    <>
      <Row align="middle" justify="center">
        <Col flex="100px">
          <Select defaultValue="GET" style={{ width: 120 }} onSelect={(e) => handleChange('reqConfig.method', e)}>
            {methodArray.map((v) => {
              return <Option key={v} value={v}>{v}</Option>
            })}
          </Select>
        </Col>
        <Col flex="auto">
          <Input.Search
            placeholder="请输入URL"
            allowClear
            enterButton="请求"
            onChange={(e) => handleChange('reqUrl', e)}
            onSearch={handleSubmit}
          />
        </Col>
      </Row>
      <Row>
        <Col>
        req headers (JSON object)
          <Input.TextArea
            rows="8"
            onChange={(e) => handleChange('reqConfig.headers', e)}
          />
        </Col>
        <Col>
        req body (JSON object)
          <Input.TextArea
              rows="8"
              onChange={(e) => handleChange('reqConfig.body', e)}
            />
        </Col>
      </Row>
      <div>test</div>
    </>
  )
}