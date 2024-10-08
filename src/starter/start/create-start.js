import {time} from '../helpers'

export function createStart(vueStart) {
    return {
        install(vue) {
            vue.config.globalProperties.$start = {
                fresh: 0,
                freshStart: vueStart,
                isFresh() {
                    return this.fresh === 0
                },
                continue() {
                    ++this.fresh
                    this.freshStart = time()
                },
                reset() {
                    this.fresh = 0
                },
            }
        },
    }
}
