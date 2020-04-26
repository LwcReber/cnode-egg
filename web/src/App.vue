<template>
  <div id="app">
    <el-container class="container">
      <el-header class="header"><div class="page">前后端学习项目</div></el-header>
      <el-main class="content-wrap">
        <div class="content">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive">
              <!-- 这里是会被缓存的视图组件，比如 Home！ -->
            </router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive">
            <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
          </router-view>
        </div>
        <div class="footer">
          <div class="thinks">感谢 <b><el-link class="cnode" href="https://cnodejs.org/" type="primary" target="_blank">CNODE社区</el-link></b> 提供的api</div>
          <div>egg作为中间件，前后端部署到服务器的学习项目，仅用于学习</div>
        </div>

      </el-main>
      <el-backtop target="#app .content-wrap"></el-backtop>
    </el-container>
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #f5f5f5
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .el-main {
    padding: 10px 0;
  }
}

.container {
  height: 100%;
  .content,
  .header,
  .footer {
    padding-left: 100px;
    padding-right: 100px;
  }

}
.page {
  width: 100%;
  margin: auto;
}

.header {
  background: #55C9AE;
  color: #fff;
  display: flex;
  align-items: center;
}
.footer {
  // display: flex;
  // align-items: center;
  // justify-content: center;
  font-size: 12px;
  text-align: left;
  padding: 20px;
  .thinks {
    line-height: 20px;
  }
}
.cnode {
  vertical-align: baseline;
}

</style>
