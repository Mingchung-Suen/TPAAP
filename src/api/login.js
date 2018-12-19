import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/api/auth',
    method: 'delete'
  })
}

// export function getUserInfo(token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

export function netidLogin() {
  return request({
    url: '/api/auth',
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: '/api/auth',
    method: 'get'
  })
}
