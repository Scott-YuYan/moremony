<template>
  <div>
    <Layout #header>
      <div class="entry">
        <NumberToChoice></NumberToChoice>
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
  .entry{
    height: 8vh;
  }
  .tags {

  }

  .tags > .library {

  }

  .tags > .library > label{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 10px;
    border: 1px solid red;
  }

  .tags > .library > label >input{
    border: 1px solid yellow;
  }

</style>