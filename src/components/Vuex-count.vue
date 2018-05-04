<template>
  <div>
    <p>{{count.num}}</p>
    <p>{{doneCount}}</p>
    <button @click="increment">add</button>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import { COUNT } from '@/store/mutations'

  export default {
    data() {
      return {
        
      }
    },
    created(){
      console.log(this.$store.state.count);
    },
    methods: {
      ...mapMutations({
        increment: COUNT.ADD  // 将 `this.increment()` 映射为 `this.$store.commit('add')`
      })
    },
    computed:{
      // 以下相同
      // ...mapState({
      //   count: state => state.count, 
      //   count: 'count',
      // }),

      ...mapState([
        'count'   // 映射 this.count 为 store.state.count
      ]),

      ...mapGetters([
        'doneCount'
      ]),


      
    },
  
  }
</script>
