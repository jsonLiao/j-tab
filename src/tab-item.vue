<template>
  <a class="tab-item" :style="$parent.value === id ? activeStyle : {}" @click="itemClick">
    <div class="tab-item-icon" v-if="$parent.fixBottom">
      <slot name="icon"></slot>
    </div>
    <div class="tab-item-label">
      <slot></slot>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'TabItem',
    computed: {
      activeStyle() {
        return {
          color: this.$parent.activeColor
        }
      }
    },
    data() {
      return {
        id: (this.$parent.$children.length || 1) - 1
      }
    },
    methods: {
      itemClick() {
        this.$parent.$emit('input', this.id)
      }
    }
  }
</script>

<style>
  .tab-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
  }
</style>
