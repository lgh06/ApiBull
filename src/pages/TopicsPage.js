import React, { useEffect } from "react";
// import './App.css'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// https://cloud.tencent.com/document/product/876/19363
// https://console.cloud.tencent.com/tcb/env/login
// https://docs.cloudbase.net/api-reference/webv2/initialization.html
// import cloudbase from "@cloudbase/js-sdk";
import { http } from "../helpers";

// node引入包名
// 浏览器、微信小程序，支付宝小程序引入./dist编译的js文件
//  js版本下载地址：
//  https://github.com/aliyun/alibabacloud-iot-device-sdk/
//  https://github.com/mqttjs/MQTT.js/tree/v3.0.0
// const iot = require('alibabacloud-iot-device-sdk/dist/alibabacloud-iot-device-sdk.js');

// https://reactrouter.com/web/example/nesting
export default function TopicsPage() {
  let {path, url} = useRouteMatch();
  useEffect(() => {

  }, []); // [] empty array 
  // see https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  return (
    <div>
      <h2>Topics UnFinished未完成 Topics/Remote</h2>

      <ul>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}