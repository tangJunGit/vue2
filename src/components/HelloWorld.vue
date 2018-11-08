<template>
  <div class="hello_world">
    <img src="../../static/images/logo.png" alt="">
    <p>{{count.num}}</p>
    <p>{{doneCount}}</p>
    <button @click="increment">点击这里</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { COUNT } from '@/store/mutations'
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  created () {},
  methods: {
    ...mapMutations({
      increment: COUNT.ADD // 将 `this.increment()` 映射为 `this.$store.commit('add')`
    })
  },
  computed: {
    ...mapState([
      //   count: state => state.count,
      'count' // 映射 this.count 为 store.state.count
    ]),

    ...mapGetters([
      'doneCount'
    ])

  }
}
</script>
<style lang="less" scoped>
@import url("../assets/less/HelloWorld.less");
</style>
