<template xmlns="">
  <div class="outer">
    <div class="content">
      <slot name="header"></slot>
    </div>
    <div>
      <Nav/>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout',
    component: 'Layout'
  };

</script>

<style type="text/css" scoped>
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