'use strict';
const Service = require('egg').Service

class ListService extends Service {
  async getList (params) {
    const { config } = this
    const result = await this.ctx.curl(`${config.baseUrl}/topics`, 
    {
      method: 'get',
      data: params,
      dataType: 'json',
      contentType: 'json',
    })
    return result.data
  }
  async showDetail (topic) {
    const { config } = this
    const result = await this.ctx.curl(`${config.baseUrl}/topic/${topic}`, 
    { 
      method: 'get',
      dataType: 'json',
      contentType: 'json',
    })
    return result.data
  }
}

module.exports = ListService