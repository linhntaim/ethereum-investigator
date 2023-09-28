import {app} from './app'
import {env} from './env'

export const pageTitle = {
    defaults: [app.name],
    separator: env.VITE_PAGE_TITLE_SEPARATOR || '-',
    asc: !(env.VITE_PAGE_TITLE_DIRECTION === 'desc'),
}
