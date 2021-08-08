import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import { Select, Input } from 'antd';
import { Row, Col } from 'antd';
import * as current from '../reducers/currentSlice'


// import { fetch }  from "../helpers";


// TODO , more methods
const methodArray = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];


export default function RequestPage () {
  const dispatch = useDispatch()
  const { reqUrl, reqConfig } = useSelector((state) => state.current)



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
      dispatch(current.setReqConfig({[field]: value}))
    }
  }
  function handleSubmit() {
    console.log('clicked 请求')
    dispatch(current.fetchByConfig({reqUrl, reqConfig}))
  }
  return (
    <>
      <Row align="middle" justify="center">
        <Col flex="100px">
          <Select defaultValue={reqConfig.method} style={{ width: 120 }} onSelect={(e) => handleChange('reqConfig.method', e)}>
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
            value={reqUrl}
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
            value={reqConfig.headers}
            onChange={(e) => handleChange('reqConfig.headers', e)}
          />
        </Col>
        <Col>
        req body (JSON object)
          <Input.TextArea
              rows="8"
              value={reqConfig.body}
              onChange={(e) => handleChange('reqConfig.body', e)}
            />
        </Col>
      </Row>
      <div>test</div>
    </>
  )
}