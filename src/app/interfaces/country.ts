// Testing
export interface Country {
    area: number
    capital: string
    continents: string
    currencies: string[] //!Valor cambiante
    flags: {
        png: string,
        svg: string
    }
    lenguages: string[] //!Valor cambiante
    region: string
    timezones: Date
    name: {
        common: string
    }

}

