<template lang="html">
  <div class="page">
    <h1 v-text="hello"></h1>
    <div class="vuex-example">
      <h2>Vuex Example</h2>
      <button @click="decrement"><i class="el-icon-minus"></i></button>
      <span v-text="count"></span>
      <button @click="increment"><i class="el-icon-plus"></i></button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import exampleApi from '@/api/example'
  export default {
    data() {
      return {
        hello: 'Hello World',
        count: 0,
      };
    },
    created() {
      this.doCelery()
    },
    computed: {
      ...mapGetters({
        countNum: 'count',
      }),
    },
    methods: {
      ...mapActions({
        increment: 'increment',
        decrement: 'decrement',
      }),
      doCelery () {
        console.log(exampleApi.CommonCeleryDelay)
        this.axios.post(exampleApi.CommonCeleryDelay, {
          left_val: 1,
          right_val: 2,
          operate: "add",
        }).then(
          resp => {
            console.log(resp.data.task_id);
          }
        );
      },
    },
    watch: {
      countNum(val) {
        this.count = val;
        console.log(val);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .page {
    h1 {
      text-align: center;
      color: #ff0000;
    }

    .vuex-example {
      margin: 200px auto;
      text-align: center;
      font-size: 16px;
      // color: #fff;

      span {
        font-size: 28px;
        display: inline-block;
        margin-left: 20px;
        margin-right: 20px;
      }

      button {
        cursor: pointer;
        border: none;
        width: 44px;
        height: 44px;
        outline: none;
        font-size: 20px;
        font-weight: bold;
        border-radius: 50%;
        // background-color: #fff;
      }
    }
  }
</style>
