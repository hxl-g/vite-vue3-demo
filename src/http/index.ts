import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

const requestPool: string[] = []
let loading: boolean = false

export interface IRequestExtraConfig extends AxiosRequestConfig {
  loading?: boolean
}

export class HttpService {
  private $http: AxiosInstance

  constructor() {
    this.$http = Axios.create({
      baseURL: '/api',
      timeout: 30000 // 30秒
    })

    this.$http.interceptors.request.use(
      (config: any) => {
        const res: any = config
        res.headers.Authorization = localStorage.getItem('token')
        return res
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.$http.interceptors.response.use(
      (response: AxiosResponse) => {
        /**
         * 根据你的项目实际情况来对 response 和 error 做处理
         * 这里对 response 和 error 不做任何处理，直接返回
         */
        return response
      },
      (error) => {
        if (error.response && error.response.data) {
          const code = error.response.status
          const msg = error.response.data.message
          ElMessage.error(`Code: ${code}, Message: ${msg}`)
        } else {
          ElMessage.error(`${error}`)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
   * http fn
   * @param req 请求配置
   * @param config loading
   */
  http(req: AxiosRequestConfig, config: IRequestExtraConfig) {
    if (config.loading) {
      requestPool.push(config.url || '')
    }
    // 如果 requestPool 存在的同时没有loading
    if (!loading && requestPool && requestPool.length) {
      loading = true
      const msg: any = '加载中'
      ElMessage.alert(msg, {
        dangerouslyUseHTMLString: true,
        callback: () => {
          loading = false
        }
      })
    }

    const { url, headers, responseType, ...otherConfig } = config
    const request: AxiosRequestConfig = {
      url,
      headers: headers || {},
      responseType: responseType || 'json',
      ...req,
      ...otherConfig
    }
    return this.$http(request)
  }

  /**
   * get
   * @param params 请求参数
   * @param config 配置
   */
  get(params: any, config: IRequestExtraConfig): Promise<any> {
    const req: AxiosRequestConfig = {
      method: 'get',
      params: params || {}
    }
    return this.http(req, config)
  }

  /**
   * post
   * @param data 请求参数
   * @param config 配置
   */
  post(data: any, config: any): Promise<any> {
    const req: AxiosRequestConfig = {
      method: 'post',
      data: data || {}
    }
    return this.http(req, config)
  }

  /**
   * put
   * @param data 请求参数
   * @param config 配置
   */
  put(data: any, config: IRequestExtraConfig): Promise<any> {
    const req: AxiosRequestConfig = {
      method: 'put',
      data: data || {}
    }
    return this.http(req, config)
  }

  /**
   * delete
   * @param data 请求参数
   * @param config 配置
   */
  delete(data: any, config: IRequestExtraConfig): Promise<any> {
    const req: AxiosRequestConfig = {
      method: 'delete',
      data: data || {}
    }
    return this.http(req, config)
  }
}

export default HttpService
