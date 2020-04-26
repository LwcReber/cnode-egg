'use strict';

const Controller = require('egg').Controller;
const paramsRule = {
  page: { type: 'number', require: false, defautl: 1 },
  limit: { type: 'number', require: false, defautl: 1 },
  mdrender: { type: 'string', require: false },
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
}
class topicController extends Controller {
  async index () {
    const { ctx, service } = this;
    // // 校验参数
    let query = ctx.query
    // ctx.validate(paramsRule, query);
    const req = Object.assign(query)
    const res = await service.topics.getList(req)
    ctx.body = res
    ctx.status = 201
  }
  async show () {
    const { ctx, service } = this;
    // // 校验参数
    // ctx.validate(paramsRule, query);
    const req = ctx.params.id
    const res = await service.topics.showDetail(req)
    ctx.body = res
    ctx.status = 201
  }
}

module.exports = topicController;
