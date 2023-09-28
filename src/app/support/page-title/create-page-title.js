import {inject, onBeforeUnmount, onUnmounted} from 'vue'
import {PageTitle} from './page-title'

const titleSymbol = 'pageTitle'

export function createPageTitle({separator = '-', asc = true, defaults = []}) {
    return {
        install(vApp) {
            const pageTitle = new PageTitle({separator, asc, defaults})
            vApp.config.globalProperties.$pageTitle = pageTitle
            vApp.provide(titleSymbol, pageTitle)
        },
    }
}

export function usePageTitle(...titles) {
    const pageTitle = inject(titleSymbol)
    const placeholder = pageTitle.placeholder(...titles)
    onBeforeUnmount(() => {
        pageTitle.remove(placeholder)
    })
    return {setTitle: (...titles) => pageTitle.set(placeholder, ...titles).toString()}
}
