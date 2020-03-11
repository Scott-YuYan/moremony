<template>
<div id="app">
  <router-view/>
</div>
</template>

<style lang="scss">
  @import "src/assets/style/font/hepler.scss";
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  #app{
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body{
    line-height: 1.5;
    font-family: $heiTi;
    font-size: 16px;
  }

  ul li {
    list-style: none;
  }


</style>
