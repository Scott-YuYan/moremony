<template>
  <div>
    <Layout #header>
      <div>
        <span>存储库：</span>
        <span></span>
      </div>
      <div>
        <span>文档类型：</span>
        <select name="文档类型">
          <option>--请选择文档类型--</option>
        </select>
      </div>
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