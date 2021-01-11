<template>
  <button :class="classes" :disabled="disabled" class="gulu-button">
    <template v-if="iconName && iconPosition==='left'">
      <Icon :name="iconName"/>
    </template>
    <slot/>
    <template v-if="iconName && iconPosition==='right'">
      <Icon :name="iconName"/>
    </template>
  </button>
</template>

<script>
import Icon from "./Icon.vue"

export default {
  components: {Icon},
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
    },
    buttonSize: {
      type: String,
      default: "big",
      validator(value) {
        return value === "big" || value === "medium" || value === "small";
      }
    },
    disabled: {
      type: Boolean,
      default: false,
      validator(value) {
        return value === true || value === false
      }
    },
    iconName: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left"
    }
  },
  computed: {
    classes() {
      return [this.buttonType, this.buttonSize]
    }
  }
}
</script>

<style lang="scss">
.gulu-button {
  background: #ffffff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  line-height: 1;
  font-size: 14px;
  padding: 12px 16px;
  text-align: center;
  color: #606266;
  cursor: pointer;
  display: inline-block;
  &.medium {
    font-size: 12px;
    padding: 10px 14px;
  }
  &.small {
    font-size: 10px;
    padding: 8px 12px;
  }
  &:focus, &:hover {
    outline: none;
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  &:disabled {
    border-color: #ebeef5;
    color: #c0c4cc;
    cursor: not-allowed;
    &:focus, &:hover {
      color: #c0c4cc;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }
  &.main {
    background: #409eff;
    border-color: #409eff;
    color: #ffffff;
    &.medium {
      font-size: 12px;
      padding: 10px 14px;
    }
    &.small {
      font-size: 10px;
      padding: 8px 12px;
    }
    &:focus, &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
    }
    &:active {
      background: #3a8ee6;
      border-color: #3a8ee6;
    }
    &:disabled {
      background-color: #a0cfff;
      border-color: #a0cfff;
      &:focus, &:hover {
        color: #ffffff;
        background: #a0cfff;
        border-color: #a0cfff;
        cursor: not-allowed;
      }
    }
  }
  &.danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &.medium {
      font-size: 12px;
      padding: 10px 14px;
    }
    &.small {
      font-size: 10px;
      padding: 8px 12px;
    }
    &:focus, &:hover {
      background: #f78989;
      border-color: #f78989;
    }
    &:active {
      background: #dd6161;
      border-color: #dd6161;
    }
    &:disabled {
      background-color: #fab6b6;
      border-color: #fab6b6;
      &:focus, &:hover {
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
      }
    }
  }
}
</style>