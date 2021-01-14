<template>
  <div>
    <Button  icon-name="down" icon-position="right" @click="sayHi" >
      <span>默认按钮</span>
    </Button>
    <Button button-size="medium" button-type="main" icon-name="left">
      <span>主要中</span>
    </Button>
    <Button button-size="small" button-type="danger">危险小</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
import Icon from "../lib/Icon.vue";

export default {
  components: {Icon, Button},
  data() {
    return {};
  },
  methods: {
    sayHi() {
      console.log("hi")
    }
  }
};
</script>

<style lang="scss">
</style>