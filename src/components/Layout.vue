<template>
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
    background: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    background: white;
    overflow: auto;
    flex-grow: 1;
  }
</style>