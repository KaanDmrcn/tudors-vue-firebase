<template>
<div>
  <div><Menu></Menu></div>
  <div><ProductDetail></ProductDetail></div>
  <div><HomePageBottom></HomePageBottom></div>
  
  
  </div>
</template>

<script>
// @ is an alias to /src

import Menu from '@/components/Menu.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import HomePageBottom from '@/components/HomePageBottom.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    ProductDetail,
    HomePageBottom,
  }
}
</script>
