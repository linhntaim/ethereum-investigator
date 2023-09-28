import {Bitcoin} from './bitcoin'
import {Explorer} from './explorer'

export class BitcoinExplorer extends Explorer
{
    getNetwork() {
        return new Bitcoin()
    }
}
