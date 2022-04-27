import { HttpService } from '@/http'

const userService: any = new HttpService()
// // 获取用户列表
export const getUser = async (data: any): Promise<any> => {
  const config = {
    url: '/getUser'
  }
  const res: any = await userService.get(data, config)
  return res
}

export const setUser = async (data: any): Promise<any> => {
  const config = {
    url: '/setUser'
  }
  const res: any = await userService.get(data, config)
  return res
}
