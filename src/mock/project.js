import { param2Obj } from '@/utils'

const project_list = [
  {
    name: '挑战网项目分发与验收平台',
    party_a: '共青团西安交通大学委员会',
    id: 'tz-2018-802137234',
    time: '1544470500',
    manager: '孫銘聰',
    department: '技术部',
    status: 2
  },
  {
    name: '西安交通大学公共空间申请平台(https://apply.tiaozhan.com)',
    party_a: '共青团西安交通大学委员会',
    id: 'tz-2018-802298347',
    time: '1544470224',
    manager: '董江彬',
    department: '产品部',
    status: 1
  }
]
const project_detail = {
  'tz-2018-802298347': {
    name: '西安交通大学公共空间申请平台(https://apply.tiaozhan.com)',
    status_time: '1544470224'
  },
  'tz-2018-802137234': {
    name: '挑战网项目分发与验收平台',
    status_time: '1544470500'
  }
}
export default {
  projectList: config => {
    return project_list
  },
  projectDetail: config => {
    const id = param2Obj(config.url)
    return project_detail[id]
  },
  logout: () => 'success'
}
