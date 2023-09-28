export class PageTitle
{
    constructor({separator = '-', asc = true, defaults = []}) {
        this.asc = asc
        this.separator = separator
        this.defaults = defaults

        this.titles = []
    }

    placeholder(...titles) {
        this.titles.push(titles)
        return this.titles.length - 1
    }

    set(placeholder, ...titles) {
        if (this.titles.length > 0) {
            this.titles[placeholder] = titles
        }
        return this
    }

    remove(placeholder) {
        if (this.titles.length > 0) {
            this.titles.splice(placeholder)
        }
        return this
    }

    toString() {
        const titles = [...this.defaults]
        this.titles.forEach(ts => titles.push(...ts))
        return (this.asc ? titles : titles.reverse()).join(` ${this.separator} `)
    }
}
