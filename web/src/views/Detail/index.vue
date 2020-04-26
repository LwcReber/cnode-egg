<template>
  <div class="detail-container">
    <el-page-header @back="goBack" content="详情"></el-page-header>
    <div class="title">{{data.title}}</div>
    <div v-loading="true" class="detail-content" v-html="data.content"></div>
  </div>
</template>

<script>
import { getTopicInfo } from '@/api'
export default {
  computed: {
    id () {
      return this.$route.query.id
    }
  },
  data () {
    return {
      loading: false,
      data: {}
    }
  },
  created () {
    this.data = {}
    if (this.id) {
      this.loading = true
      getTopicInfo(this.id).then(res => {
        this.loading = false
        console.log(res)
        this.data = res.data
      })
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
}
.detail-content {
  min-height: 600px;
  img {
   max-width: 100%;
  }
}
</style>
