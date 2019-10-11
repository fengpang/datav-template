import components from 'v-charts/lib/index.common'

function componnetHandler (component) {
  return {
    render(h) {
      return h('div',  {class: 'test'},
      [
       h(component, {theme: this.$store.state.echartsTheme, ...this.$attrs})
      ])
    },
    created () {
    },
    name: component.name
  }
}

const wrapedComponents = []

for(let key in components) {
  key !== 'install' && wrapedComponents.push(componnetHandler(components[key])) 
}
console.log(wrapedComponents)
export default function install (Vue) {
  wrapedComponents.forEach(component => {
    Vue.component(component.name, component)
  })
}