import {factory} from './factory'
import {config} from './config'
import {log} from './log'
import {service} from './service'
import {encryption} from './encryption'
import {storage} from './storage'
import {cache} from './cache'
import {i18n, settings} from './settings'
import {store} from './store'
import {router} from './router'
import {url} from './url'
import {bus} from './bus'
import {pageTitle} from './page-title'
import {pageVisibility} from './page-visibility'
import {timer} from './timer'
import {head} from './head'
import {explorer as blockchainExplorer} from './blockchain'

export const mixins = [
    //
]

// Should be maintained in order
export const providers = {
    factory,
    config,
    log,
    service,
    encryption,
    storage,
    cache,
    i18n,
    settings,
    store,
    router,
    url,
    bus,
    pageTitle,
    pageVisibility,
    timer,
    head,
    blockchainExplorer,
}
