<template>
  <div class="hello">
    <router-link :to="{name: 'Guard'}">Guard</router-link>
    <router-link :to="{name: 'Lazy'}">Lazy</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  }
}
</script>
