<template>
  <button class="gulu-button" :class="buttonType">
    <slot/>
  </button>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是Button组件"
    }
  },
  props: {
    buttonType: {
      type: String,
      default: "normal",
      validator(value) {
        return value === "normal" || value === "main" || value === "danger"
      }
    }
  }
}
</script>

<style lang="scss">
.gulu-button {
  display: inline-block;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  line-height: 1;
  font-size: 14px;
  padding: 12px 16px;
  text-align: center;
  color: #606266;
  cursor: pointer;
  &:focus,&:hover{
    outline: none;
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active{
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
}
  &.main {
    background: #409eff;
    border-color: #409eff;
    color:#ffffff;
  }
  &.danger {
    background: red;
  }
}
</style>