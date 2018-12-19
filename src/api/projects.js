import request from '@/utils/request'

export function fetchProjectList() {
  return request({
    url: 'project/list',
    method: 'get'
  })
}