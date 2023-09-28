import {Arbitrum} from './arbitrum'
import {Bitcoin} from './bitcoin'
import {Ethereum} from './ethereum'

export * from './create-explorer'
export * from './evm'
export * from './evm-explorer'
export * from './explorer'
export * from './explorer-manager'
export * from './network'

export function getNetworkList() {
    const list = {};
    [
        new Bitcoin(),
        new Ethereum(),
        new Arbitrum(),
    ].forEach(network => list[network.id] = network.name)
    return list
}
