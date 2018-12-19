import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
// import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission judge function
// function hasPermission(roles, permissionRoles) {
//   if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
//   if (!permissionRoles) return true
//   return roles.some(role => permissionRoles.indexOf(role) >= 0)
// }

const whiteList = ['/login', '/auth-redirect', '/passport']// no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  // console.log(to)
  if (store.getters.isLogin === true) { // determine if there has token
    /* has token*/
    if (to.path === '/login') {
      window.document.title = window.document.title
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      window.document.title = to.meta.title
      next()
    }
  } else {
    /* has no token*/
    store.dispatch('getInfoUser').then(() => {
      if (store.getters.isLogin === false) {
        store.dispatch('FedLogOut').then(() => {
          Message.error('Verification failed, please login again')
          // next({ path: '/' })
        })
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
          window.document.title = to.meta.title
          next()
        } else {
          window.document.title = 'Sign In - TPAAP'
          next('/login') // 否则全部重定向到登录页
          NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
      }
      window.document.title = to.meta.title
      next()
    })
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
