<template>
  <div class="example">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello',
    };
  },
};
</script>

<style lang="scss">
$color:red;
.example {
  color: $color;
}
</style>