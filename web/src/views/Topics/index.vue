<template>
  <div class="main">
    <div class="header">
      <el-tabs v-model="tab" @tab-click="changeTab">
        <el-tab-pane v-for="item in tabs" :key="item.label" :label="item.label" :name="item.value"></el-tab-pane>
      </el-tabs>
    </div>

    <div class="bottom" v-loading="loading">
      <div class="list-wrap">
        <Item :data="item" v-for="item in list" :key="item.id"/>
      </div>
      <div>
        <el-pagination
          @current-change="getList"
          :current-page.sync="curPage"
          class="pagination"
          background
          :page-size="limit"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from './components/Item'
import { getTopics } from '@/api'
export default {
  name: 'Topics',
  components: { Item },
  data () {
    return {
      loading: false,
      tab: '',
      tabs: [
        { value: '', label: '全部' },
        { value: 'good', label: '精华' },
        { value: 'share', label: '分享' },
        { value: 'ask', label: '问答' },
        { value: 'job', label: '招聘' }
      ],
      list: [],
      curPage: 1,
      limit: 10,
      total: 500 // 默认总共50页
    }
  },
  created () {
    this.getList()
  },
  methods: {
    changeTab () {
      this.$nextTick(() => {
        this.curPage = 1
        this.getList()
      })
    },
    getList () {
      this.loading = true
      const tab = this.tab
      getTopics({ tab: tab === '0' ? '' : tab, page: this.curPage, limit: this.limit }).then((res) => {
        this.loading = false
        if (res && res.data) {
          this.list = res.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0;
  background: #fff;
  margin-bottom: 10px;
  text-align: left;
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 20px;
  /deep/ {
    .el-tabs {
      width: 100%;
    }
    .el-tabs__item {
      height: 50px;
      line-height: 50px;
    }
    .el-tabs__header {
      margin-bottom: 0;
    }
  }
}
.list-wrap {
  min-height: 700px;
}
.bottom {
  background: #fff;
  padding-bottom: 10px;
  border-radius: 4px;
}
.pagination {
  margin-top: 10px;
  margin-left: -5px;
  padding-left: 20px;
}
</style>
