<template>
  <svg class="gulu-icon" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>
<script>
let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('./', true, /\.svg$/));} catch (error) {console.log(error);}
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