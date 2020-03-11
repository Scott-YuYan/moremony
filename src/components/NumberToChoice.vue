<template>
  <div class="entry">
    <div class="disPlayColumn">
      <div class="displayRow">
        <router-link to="/home" class="circular" active-class="choice">1</router-link>
        设置属性
      </div>
      <div class="line"></div>
      <div class="displayRow">
        <router-link to="/pageTwo" class="circular" active-class="choice">2</router-link>
        设置附件
      </div>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: "NumberToChoice"
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/style/font/hepler";
  $h: 20px;
  .circular {
    display: flex;
    height: $h;
    width: $h;
    border-radius: $h/2;
    justify-content: center;
    align-items: center;
    padding: 5px 5px;
    color: rgb(168, 168, 168);
    box-shadow: inset 2px 2px 6px 1px rgba(0, 0, 0, 0.2);
  }

  .choice {
    background: rgb(255, 222, 100);
  }

  .disPlayColumn {
    display: flex;
    flex-direction: row;
  }
  .displayRow{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 7px;
    font-weight: bold;
  }
  .line{
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    width: 2*$h;
    height: 1px;
    margin-top: $h/2;
    background: black;
  }
  .entry{
    margin: 10px 10px;
  }
</style>