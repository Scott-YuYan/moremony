<template>
  <div>
    <div>
      <div>

        <span>*表示必填项</span>

        <router-link to="/">主页</router-link>
        |
        <router-link to="/backPage">上一页(B)</router-link>
        |
        <router-link to="/nextPage">下一页(N)</router-link>
        |
        <router-link to="/finish">完成(F)</router-link>
        |
        <router-link to="/cancel">取消(C)</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style type="scss" scoped>
</style>