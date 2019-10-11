import components from 'v-charts/lib/index.common'

/* 把v-charts的组件重新包装了一遍统一加上theme属性 避免每次添加theme属性，也可以在此对组件进行一些公共逻辑处理 */
function wraper (component) {
  return {
    render(h) {
      return h('div',  {class: 'test'},
      [
       h(component, {attrs: Object.assign(this.$attrs, {theme: this.$store.state.echartsTheme})})
      ])
    },
    created () {
      /* do something */
    },
    name: component.name
  }
}

const wrapedComponents = []

for(let key in components) {
  key !== 'install' && wrapedComponents.push(wraper(components[key])) 
}
export default function install (Vue) {
  wrapedComponents.forEach(component => {
    Vue.component(component.name, component)
  })
}