import tabBuilder from '../../vue/tab-builder.vue'
import tabSwitcher from '../../vue/tab-switcher.vue'
import tabNav from '../../vue/tab-nav.vue'
import tbTab from '../../vue/tb-tab.vue'
import tbLink from '../../vue/tb-link.vue'

export function install(Vue) {

    if ( this.installed ) return
    this.installed = true

    Vue.component('tab-builder', tabBuilder)
    Vue.component('tab-nav', tabNav)
    Vue.component('tab-switcher', tabSwitcher)
    Vue.component('tb-tab', tbTab)
    Vue.component('tb-link', tbLink)
}

export default {
    installed: false,
    install
}