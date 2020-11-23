import vuePlugin from './modules/plugin.js'
import lang from './modules/lang.js'

const awemaPlugin = {

    install(AWEMA) {
        AWEMA.lang = lang
        Vue.use(vuePlugin)
    }
}

if (window && ('AWEMA' in window)) {
    AWEMA.use(awemaPlugin)
} else {
    window.__awema_plugins_stack__ = window.__awema_plugins_stack__ || []
    window.__awema_plugins_stack__.push(awemaPlugin)
}