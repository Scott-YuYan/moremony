<template>
  <div>
    <div>
      <div class="fontTemplate">
        <router-link to="/">
          <Icon icon-name="zhuye"/>
          主页
        </router-link>
        |
        <router-link to="/backPage">
          <Icon icon-name="prev-blue"></Icon>
          上一页(B)
        </router-link>
        |
        <router-link to="/nextPage">
          下一页(N)
          <Icon icon-name="next-blue"></Icon>
        </router-link>
        |
        <router-link to="/finish">完成(F)
          <Icon icon-name="wancheng"></Icon>
        </router-link>
        |
        <router-link to="/cancel">取消(C)
          <Icon icon-name="cancel"></Icon>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style type="scss" scoped>
  .fontTemplate {
    font-size: 20px;
  }
</style>