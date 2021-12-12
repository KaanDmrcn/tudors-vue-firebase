<template>
<div>
  <div><Menu></Menu></div>
  <div><SignIn></SignIn></div>  
  
  
  </div>
</template>

<script>
// @ is an alias to /src

import Menu from '@/components/Menu.vue'
import SignIn from '@/components/SignIn.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    SignIn,
  }
}
</script>
