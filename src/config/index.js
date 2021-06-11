

// 导入base——url
import base_url_mode from './base_url_mode.js'

// 导出环境地址   打包改变[dev]
export let BASE_URL = base_url_mode['dev'].url;


// 路径地址在此文件配置， 然后使用