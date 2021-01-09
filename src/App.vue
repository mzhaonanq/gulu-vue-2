<template>
  <div>
  <Button>默认按钮</Button>
  <Button button-type="main">主要按钮</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";

export default {
  components: {Button},
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>