import {Arbitrum} from './arbitrum'
import {EvmExplorer} from './evm-explorer'

export class ArbitrumExplorer extends EvmExplorer
{
    getNetwork() {
        return new Arbitrum()
    }
}
