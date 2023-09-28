import {ArbitrumExplorer} from './arbitrum-explorer'
import {BitcoinExplorer} from './bitcoin-explorer'
import {Drivers} from '../drivers'
import {EthereumExplorer} from './ethereum-explorer'

export class ExplorerManager extends Drivers
{
    constructor(app) {
        super(app, 'blockchain.explorer', 'ethereum')
    }

    createBitcoin() {
        return new BitcoinExplorer(this.options('bitcoin'))
    }

    createEthereum() {
        return new EthereumExplorer(this.options('ethereum'))
    }

    createArbitrum() {
        return new ArbitrumExplorer(this.options('arbitrum'))
    }
}
