<template>
  <div class="g-nav-item" :class="{selected, vertical}" :data-name="name" @click="onClick">
    <slot></slot>
  </div>  
</template>

<script>
export default {
  name: "GuluNavItem",
  inject: ["root", "vertical"],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  },
  created() {
    this.root.addItem(this);
  },
  methods: {
    onClick() {
      this.root.namePath = [];
      this.$parent.updateNamePath && this.$parent.updateNamePath();
      this.$emit("update:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";

.g-nav-item {
  position: relative;
  padding: 10px 20px;
  &:not(.vertical) {
    &.selected {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 2px solid $blue;
      }
    }
  }
  &.vertical {
    &.selected {
      color: $blue;
    }
  }
}
.g-sub-nav .g-nav-item:not(.vertical) {
  &.selected {
    color: $color;
    background: $grey;
    &::after {
      display: none;
    }
  }
}
</style>
