<template>
  <div>
    <Button disabled>默认按钮</Button>
    <Button button-type="main" button-size="medium" >主要中</Button>
    <Button button-type="danger" button-size="small">危险小</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";

export default {
  components: {Button},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>