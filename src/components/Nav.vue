<template>
  <div>
    <div>
      <nav>
        <router-link to="/home" class="item" active-class="selected">
          <Icon icon-name="zhuye"/>
          主页(H)
        </router-link>
        <router-link to="/backPage" class="item" active-class="selected">
          <Icon icon-name="prev-blue"></Icon>
          上一页(B)
        </router-link>
        <router-link to="/nextPage" class="item" active-class="selected">
          <Icon icon-name="next-blue"></Icon>
          下一页(N)
        </router-link>
        <router-link to="/finish" class="item">
          <Icon icon-name="wancheng"></Icon>
          完成(F)
        </router-link>
        <router-link to="/cancel" class="item">
          <Icon icon-name="cancel">
          </Icon> 取消(C)
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  @import "../assets/style/color/helper";
  nav{
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 3px rgb(0,0,0) ;
    border: 1px solid black;
    > .item{
      width: 20%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    > .item.selected{
      color: $blue;
    }
  }
  </style>