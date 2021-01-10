<template>
  <div>
    <Button icon-name="down">
      <span>默认按钮</span>
    </Button>
    <Button button-type="main" button-size="medium" >
      <span>主要中</span>
      <Icon name="left"/>
    </Button>
    <Button button-type="danger" button-size="small" >危险小</Button>

    <Icon name="left"/>

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