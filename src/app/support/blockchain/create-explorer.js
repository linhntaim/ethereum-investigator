import {getApp, registerPropertyFactory} from '../helpers'
import {ExplorerManager} from './explorer-manager'

export function createExplorer(extend = {}) {
    return {
        install(vApp) {
            registerPropertyFactory(
                vApp.config.globalProperties,
                '$blockchainExplorer',
                () => new ExplorerManager(getApp(vApp)).extend(extend),
            )
        },
    }
}
