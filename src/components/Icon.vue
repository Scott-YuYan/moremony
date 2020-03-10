<template>
    <svg class="IconLClass">
      <use v-bind:xlink:href="'#'+IconName"></use>
    </svg>
</template>

<script lang="ts">
  export default {
    props:['IconName'],
    name: "Icon"
  }

  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (error) {
    console.log(error);
  }

</script>

<style scoped>
  .IconLClass{
    width: 2em; height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>