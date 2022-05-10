/*
 * @Author: TPF 834892854@qq.com
 * @Date: 2022-05-07 17:42:48
 * @LastEditors: TPF 834892854@qq.com
 * @LastEditTime: 2022-05-09 10:59:41
 * @FilePath: \vue_tree1\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import router from './router/index'

// import router from './router/index'
//引入路由器

const app = createApp(App);

app.use(Antd).use(router).mount('#app');