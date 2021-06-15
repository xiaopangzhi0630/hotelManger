
import axios from 'axios';

// 进度条  发送请求加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 导入base_url
import { BASE_URL } from '../config/index'

//初始化一个axios对象
const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  baseURL: BASE_URL,
  timeout: 10000,
  // headers: {
  //   'X-Custom-Header': 'foobar'
  // }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // NProgress.start();
  return config;
}, function (error) {
  // 对请求错误做些什么
  // NProgress.done();
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // NProgress.done();
  return response;
}, function (error) {
  // 对响应错误做点什么
  // NProgress.done()
  return Promise.reject(error);
});




// 创建以一个get请求
let get = async function (url, params) {
  // return instance.get(url, {params})
  let { data } = await instance.get(url, { params });
  return data;
};

// 创建一个post请求
let post = async function (url, params) {
  let { data } = await instance.post(url, { params });
  return data;
};

// 导出请求方法
export {
  get,
  post

}