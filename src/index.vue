<template>
  <div class="tab">
    <tab-box v-model="selectedId" v-bind="options">
      <tab-item v-for="(item, index) in items" :key="index">
        <span v-if="options.fixBottom && item.icon" slot="icon">
            <i :class="item.icon"></i>
          </span>
        <span>{{ item[labelKey] }}</span>
      </tab-item>
    </tab-box>
  </div>
</template>

<script>
  import tabBox from './tab-box'
  import tabItem from './tab-item'
  export default {
    name: 'tab',
    components: {
      tabBox,
      tabItem
    },
    props: {
      value: {
        type: Number,
        default: 0
      },
      items: {
        type: Array,
        default () {
          return []
        }
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
      return {
        selectedId: this.value
      }
    },
    computed: {
      labelKey() {
        return this.options.labelKey || 'label'
      }
    },
    watch: {
      value(value) {
        this.selectedId = value
      },
      selectedId(value) {
        this.$emit('input', value)
        this.$emit('change', this.items[value], value)
      }
    }
  }
</script>