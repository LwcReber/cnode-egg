import request from '@/axios'
export function getTopics (params) {
  return request({
    url: '/api/topics',
    method: 'get',
    params
  })
}

export function getTopicInfo (id) {
  return request({
    url: `/api/topics/${id}`,
    method: 'get'
  })
}
