import initModule1 from '@/store/module1'
import initModule2 from '@/store/module2'

const appStore: any = {}

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.module1 = initModule1()
  appStore.module2 = initModule2()
}

export default appStore
