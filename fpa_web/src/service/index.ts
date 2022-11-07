import axios from 'axios'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const instance = axios.create({
  // baseURL: 'http://localhost:3000',
  timeout: 100
})

let loading: LoadingInstance

// 发起请求拦截
instance.interceptors.request.use(
  (config) => {
    loading = ElLoading.service({
      lock: true,
      text: '正在请求数据',
      background: 'rgba(0, 0, 0, 0.5)'
    })
    console.log('正在发生请求拦截器')
    return config
  },
  (err) => {
    return err
  }
)

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    loading.close()
    console.log('响应拦截器')
    return res
  },
  (err) => {
    loading.close()
    return err
  }
)

export default instance
