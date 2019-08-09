import ActionSheets from './ActionSheets'
import BackDrop from './BackDrop'

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}

function install (Vue) {
    Vue.component(ActionSheets.name, ActionSheets)
    Vue.component(BackDrop.name, BackDrop)
}

export default {
    install,
    ActionSheets,
    BackDrop
}