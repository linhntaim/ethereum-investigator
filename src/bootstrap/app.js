import {createApp} from 'vue'
import {createStart} from '@/app/support/start'
import {mixins, providers} from '@/app/providers'
import {modify, take, time} from '@/app/support/helpers'
import App from '@/resources/views/App.vue'

export const vueStart = time()

export const app = modify(createApp(App), vueApp => {
    // register mixins
    mixins.forEach(mixin => vueApp.mixin(mixin))
    // register start plugin
    vueApp.use(createStart(vueStart))
    // register plugins
    Object.keys(providers).forEach(key => vueApp.use(providers[key]))

    return modify(vueApp.mount('#app'), app => {
        // when built, `_instance` is always null (?) => must trick to proxy the app
        if (vueApp._instance == null) {
            vueApp._instance = app.$
        }
        return app.$.proxy
    })
})