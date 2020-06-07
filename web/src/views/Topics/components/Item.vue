<template>
  <div @click="toDetail" class="wrap">
    <div>{{data.title}}</div>
    <el-row class="item-footer">
      <el-col :span="6" class="user">
        <ViewAvatar textImgError :text="data.author.loginname" quickWidth="20px" class="autor" v-if="data.author" :src="data.author.avatar_url" alt=""/>
        <i v-else class="el-icon-user-solid"></i>
       <span>{{data.author.loginname}}</span>
      </el-col>
      <el-col :span="4"> <i class="el-icon-chat-dot-square"></i> {{data.reply_count}}</el-col>
      <el-col :span="6" ><i class="el-icon-view"></i> {{data.visit_count}}</el-col>
      <el-col class="time" :span="8" >{{calDate()}}</el-col>
    </el-row>
  </div>
</template>

<script>
import ViewAvatar from 'view-avatar'
export default {
  components: { ViewAvatar },
  props: {
    data: Object
  },
  methods: {
    toDetail () {
      this.$router.push({ path: 'detail', query: { id: this.data.id } })
    },
    calDate () {
      return this.timeago(new Date(this.data.create_at))
    },
    timeago (date) { // dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
      const dateTimeStamp = new Date(date)
      const minute = 1000 * 60 // 把分，时，天，周，半个月，一个月用毫秒表示
      const hour = minute * 60
      const day = hour * 24
      const week = day * 7
      const month = day * 30
      const now = new Date().getTime() // 获取当前时间毫秒
      let result = ''
      const diffValue = now - dateTimeStamp// 时间差

      if (diffValue < 0) {
        return
      }
      const minC = diffValue / minute // 计算时间差的分，时，天，周，月
      const hourC = diffValue / hour
      const dayC = diffValue / day
      const weekC = diffValue / week
      const monthC = diffValue / month
      if (monthC >= 1 && monthC <= 3) {
        result = ' ' + parseInt(monthC) + '月前'
      } else if (weekC >= 1 && weekC <= 3) {
        result = ' ' + parseInt(weekC) + '周前'
      } else if (dayC >= 1 && dayC <= 6) {
        result = ' ' + parseInt(dayC) + '天前'
      } else if (hourC >= 1 && hourC <= 23) {
        result = ' ' + parseInt(hourC) + '小时前'
      } else if (minC >= 1 && minC <= 59) {
        result = ' ' + parseInt(minC) + '分钟前'
      } else if (diffValue >= 0 && diffValue <= minute) {
        result = '刚刚'
      } else {
        const datetime = new Date()
        datetime.setTime(dateTimeStamp)
        const nyear = datetime.getFullYear()
        const nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1
        const ndate = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate()
        const nhour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours()
        const nminute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes()
        result = `${nyear}-${nmonth}-${ndate} ${nhour}:${nminute}`
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 10px;
    padding-left: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
      background: #efefef;
    }
  }
  .autor {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    overflow: hidden;
  }
  .time {
    text-align: right;
    padding-right: 20px;
  }
  .user {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
  .item-footer {
    display: flex;
    margin-top: 5px;
    color: #666;
    font-size: 14px;
  }
</style>
