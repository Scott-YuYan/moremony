<template>
  <div class="outer">
    <div class="content">
      <p>Hello Vue</p>
    </div>
      <Nav/>
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
  .outer {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    overflow: auto;
    flex-grow: 1;
  }

</style>