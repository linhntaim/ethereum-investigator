import {Ethereum} from './ethereum'
import {EvmExplorer} from './evm-explorer'

export class EthereumExplorer extends EvmExplorer
{
    getNetwork() {
        return new Ethereum()
    }
}
