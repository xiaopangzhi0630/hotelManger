// 导入请求方法
import {
  get,
  post
} from '../utils/request.js'

// 角色api层
// 查询列表信息
export let roleList = async function()  {
  let res = await get('/Role/List');
  // 处理数据。。。。 然后返回在页面使用
  console.log(res);
  return res
}

// 添加用户信息
export let addUser = async function(params) {
  let res = await post('/Role/Add', params);
  // 处理数据。。。。 然后返回在页面使用
  return res
}



