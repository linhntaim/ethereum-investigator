import {env} from './env'

export const blockchain = {
    explorer: {
        default: 'ethereum',
        drivers: {
            ethereum: {
                baseUrl: env.VITE_BLOCKCHAIN_ETHEREUM_EXPLORER_API_URL,
                apiKey: env.VITE_BLOCKCHAIN_ETHEREUM_EXPLORER_API_KEY,
            },
        },
    },
}
