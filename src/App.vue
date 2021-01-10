<template>
  <div>
    <Button >默认按钮</Button>
    <Button button-type="main" button-size="medium" >主要中</Button>
    <Button button-type="danger" button-size="small" >危险小</Button>
    <Icon/>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
import Icon from "../lib/Icon.vue";

export default {
  components: {Icon, Button},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>