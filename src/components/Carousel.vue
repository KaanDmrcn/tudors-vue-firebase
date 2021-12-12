<template>
<hr style="margin-left:510%;">
  <div v-bind:style="{ backgroundImage: 'url(' + getsrc.src + ')' }" class="solSagBosluk caro">
   
    

<div style="float:left; margin-top: 140px;">
        <img v-on:click="goleft" class="rotateimg180" style="width:55px;" src="https://www.pngitem.com/pimgs/m/141-1415525_right-arrow-png-transparent-png.png" alt="">
    </div>

<div style="float:right; margin-top: 140px;">
        <img v-on:click="goright" style="width:55px;" src="https://www.pngitem.com/pimgs/m/141-1415525_right-arrow-png-transparent-png.png" alt="">
    </div>



  </div>
</template>
<script>









export default {
  data() {
    return {      
      id: 0,
    };
  },
  methods: {
    goright(){
      if(this.id==4){
        this.id = 0}
      else
      this.id = this.id+1
    },
    goleft(){
      if(this.id==0){
        this.id = 4}
      else
      this.id = this.id-1
    },
  },
  computed : {
        
        getsrc(){  
                     
            return this.$store.getters.getSrcId(this.id)
        },
    },
};
</script>
<style scoped>
.solSagBosluk{
    margin-left: 14.15%;
    margin-right: 14.15%;
}
.caro  {
  background-size: 100%;
  height: 425px;
}
.rotateimg180 {
  -webkit-transform:rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>