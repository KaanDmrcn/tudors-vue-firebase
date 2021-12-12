<template>
<div>
  <div><Menu></Menu></div>
  <div><SignUp></SignUp></div>  
  
  
  </div>
</template>

<script>
// @ is an alias to /src

import Menu from '@/components/Menu.vue'
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    SignUp,
  }
}
</script>
