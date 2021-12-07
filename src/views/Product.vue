<template>
<div>
  <div><Menu></Menu></div>
  <div><ProductFilter></ProductFilter></div>
  <div><HomePageBottom></HomePageBottom></div>
  
  </div>
</template>

<script>
// @ is an alias to /src

import Menu from '@/components/Menu.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import HomePageBottom from '@/components/HomePageBottom.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    ProductFilter,
    HomePageBottom,
  }
}
</script>
