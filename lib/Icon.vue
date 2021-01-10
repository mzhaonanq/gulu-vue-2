<template>
  <svg class="gulu-icon" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>
<script>
import svg from './icons/down.svg'
export default {
  data(){
    return{}
    },
  props:{
    name:String,
  }
}
</script>
<style lang="scss" >

</style>