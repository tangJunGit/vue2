export default {
  data() {
    return {
      text: '哈哈，恭喜你已经入坑Vue2'
    }
  },
  methods: {
    goto() {
      this.$router.push({ name: 'lazyLoad' })
    }
  }
}
