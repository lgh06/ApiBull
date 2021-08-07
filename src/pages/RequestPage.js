import React from "react";

import { Select } from 'antd';
import { Input } from 'antd';

// TODO , more methods
const methodArray = ['GET', 'POST', 'PUT', 'DELETE'];


export default function RequestPage () {
  const { Option } = Select;
  
  function handleChange(field, e) {
    if (field === 'select'){
      console.log(`选择了 ${field} ${e}`);
    }else if (field === 'input'){
      console.log(`选择了 ${field} ${e.target.value}`)
    }
  }
  return (
    <>
      <Select defaultValue="GET" style={{ width: 120 }} onSelect={(e) => handleChange('select', e)}>
        {methodArray.map((v) => {
          return <Option key={v} value={v}>{v}</Option>
        })}
      </Select>
      <Input placeholder="请输入URL" onChange={(e) => handleChange('input', e)} />
      <div>test</div>
    </>
  )
}