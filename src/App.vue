<template>
  <div>
    <Button icon-name="down" icon-position="right">
      <span>默认按钮</span>
    </Button>
    <Button button-type="main" button-size="medium" icon-name="left" >
      <span>主要中</span>
    </Button>
    <Button button-type="danger" button-size="small" >危险小</Button>
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