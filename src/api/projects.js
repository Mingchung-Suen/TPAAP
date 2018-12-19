import request from '@/utils/request'

export function fetchProjectList() {
  return request({
    url: '/api/projects',
    method: 'get'
  })
}
