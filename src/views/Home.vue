<template>
<div>
  <div><Menu></Menu></div>
  <div><HomePage></HomePage></div>
  <div><HomePageBottom></HomePageBottom></div>
  
  </div>
</template>

<script>
// @ is an alias to /src

import Menu from '@/components/Menu.vue'
import HomePage from '@/components/HomePage.vue'
import HomePageBottom from '@/components/HomePageBottom.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    HomePage,
    HomePageBottom,
  },
  
}
</script>
