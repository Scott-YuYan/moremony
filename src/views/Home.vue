<template>
  <div>
    <Layout #header>
      <div>
        <label>
          存储库：
          <input type="text">
        </label>
      </div>
      <div>主要内容源
        <ul>
          <li>本机文件</li>
          <li>url</li>
        </ul>
      </div>
      <div>属性</div>
      <div>业务</div>
    </Layout>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
    components: {}
  }
</script>

<style type="scss" scoped>
</style>