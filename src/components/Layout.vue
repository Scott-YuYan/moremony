<template>
  <div>
    <div class="outer">
      <div class="content">
        <slot name="header"></slot>
      </div>
      <div>
        <Nav/>
      </div>
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
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: rgb(204,221,231);
  }

  .content {
    overflow: auto;
    flex-grow: 1;
    background: white;
  }
</style>