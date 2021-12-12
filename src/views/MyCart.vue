<template>
<div>
  <div><Menu></Menu></div>
  <div><MyCart></MyCart></div>  
  
  
  </div>
</template>

<script>
// @ is an alias to /src

import MyCart from '@/components/MyCart.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    MyCart,
    Menu,
  }
}
</script>
