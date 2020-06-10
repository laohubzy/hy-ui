---
sidebarDepth: 0
autoGroup-1: 基础组件
---
## Button 按钮
<br/>

<!-- <ClientOnly>
  <CodeExample> -->
  <!-- <dy-button></dy-button> -->
  <!-- </CodeExample>
  <CodePreview desc="一些常用的button按钮"></CodePreview>
</ClientOnly> -->

::: details 展示代码<br/>
  <<< ./docs/example/button.vue
  <br/>
:::

<script>
export default {
  components: {   
  },
  data () {
    return {
      value: 1
    }
  },
  methods: {
    click () {
      console.log(1)
    }
  }
}
</script>




### API 文档

> Button

- 属性

参数 | 说明 | 类型 | 选项 | 默认值 | 是否必填
---|---|---|---|---|---|---|---
disable | 是否禁用 | boolean | true、false | false | false
type | 按钮类型 | string | text、danger、primary、success、warning、info | false | false
round | 圆角类型 | boolean | true、false | false | false
plain | 朴素类型 | boolean | true、false | false | false
small | 小型按钮 | boolean | true、false | false | false
middle | 中型按钮 | boolean | true、false | false | false
large | 大型按钮（默认为大型按钮） | boolean | true、false | false | false
superbig | 超大型按钮 | boolean | true、false | false | false
- 事件

事件名称 | 返回值 | 类型
---|---|---
click |  | string
