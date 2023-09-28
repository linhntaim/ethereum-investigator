import {Driver} from '../driver'
import {Network} from './network'
import axios from 'axios'

export class Explorer extends Driver
{
    constructor(options = {}) {
        super(options)

        this.client = axios.create({
            baseURL: options.baseURL,
        })
    }

    getNetwork() {
        return new Network('')
    }
}
