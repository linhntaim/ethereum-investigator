import {Evm} from './evm'
import {Explorer} from './explorer'

export class EvmExplorer extends Explorer
{
    constructor(options = {}) {
        super(options)

        this.apiKey = options.apiKey
    }

    getNetwork() {
        return new Evm('')
    }
}
