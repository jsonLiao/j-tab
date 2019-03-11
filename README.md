
###------ 基于Vue 2.0, 一个用于移动端的可触摸滑动Vue组件-------###
 
## Installation
```shell
npm i tab -S

```

### Usage

import Vue from 'vue'
import tab from 'tab'

Vue.use(tab)
// 之后便可在全局使用了
```
### Example

---------- html ----------
<tab
    v-model="selectedId"
    :items="items"
    :options="options">
</tab>
---------- html ----------


---------- js ------------
export default {
  data () {
    return {
      selectedId: 0,
      items: [
        {label: 'javascript'},
        {label: 'java'},
        {label: 'Android'},
        {label: 'ios'},
        {label: 'php'},
        {label: 'python'},
        {label: 'typescript'},
        {label: 'webpack'},
        {label: 'nodejs'}
      ],
      options: {
        activeColor: '#fb3180'
      },
    }
  }
}
---------- js ------------

### 配置项 | 类型 | 描述 | 默认值 
 labelKey | String | 指定item的文字部分在item对象中的key | label 
 lineWidth | Number | fixBottom为false时tabbar底部border-width | 1px 
 activeColor | String | 激活状态下字体以及滑条颜色 | #fb3180
 fixBottom | Boolean | 是否固定在视图底部 | false 
 additionalX | Number | 近似等于超出边界时最大可拖动距离 | 50px 
 reBoundExponent | Number | 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长) | 10 
 sensitivity | Number | 惯性滑动时的灵敏度(值越小，阻力越大),可近似认为手松开后速度减为零所需时间 | 1000ms 
 reBoundingDuration | Number | 回弹动画duration | 360ms 


### 事件

 事件名 | 参数 | 描述 
 change | item, index | 当前点击的item以及索引值
