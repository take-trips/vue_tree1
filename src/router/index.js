/*
 * @Author: TPF 834892854@qq.com
 * @Date: 2022-05-09 10:30:12
 * @LastEditors: TPF 834892854@qq.com
 * @LastEditTime: 2022-05-09 10:43:13
 * @FilePath: \vue_tree1\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 该文件专门用于创建整个应用的路由器
import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'
 
const router = createRouter({
    history: createWebHistory(), 
    routes
})
 
export default router

