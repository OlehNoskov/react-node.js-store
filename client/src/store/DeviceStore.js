import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        //This variable with underscore because it's agreement and this variable do not change
        this._types = [
            {id:1, name: 'Phones'},
            {id:2, name: 'TV'},
        ]
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:2, name: 'Apple'},
        ]
        this._devices = [
            {
                id: 1,
                name: "15 pro",
                price: 60000,
                rating: 0,
                img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ffdn.gsmarena.com%2Fimgroot%2Fstatic%2Fheaders%2Fmakers%2Fapple-2023-1.jpg&tbnid=vT5TJ9akYiBbnM&vet=12ahUKEwimwuSlo8CAAxXbEhAIHebqCGcQMygBegUIARDsAQ..i&imgrefurl=https%3A%2F%2Fwww.gsmarena.com%2Fapple-phones-48.php&docid=0fQr7CAOJLv_rM&w=728&h=316&q=phones&ved=2ahUKEwimwuSlo8CAAxXbEhAIHebqCGcQMygBegUIARDsAQ",
            },
            {
                id: 2,
                name: "13 pro max",
                price: 60000,
                rating: 0,
                img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ffdn.gsmarena.com%2Fimgroot%2Fstatic%2Fheaders%2Fmakers%2Fapple-2023-1.jpg&tbnid=vT5TJ9akYiBbnM&vet=12ahUKEwimwuSlo8CAAxXbEhAIHebqCGcQMygBegUIARDsAQ..i&imgrefurl=https%3A%2F%2Fwww.gsmarena.com%2Fapple-phones-48.php&docid=0fQr7CAOJLv_rM&w=728&h=316&q=phones&ved=2ahUKEwimwuSlo8CAAxXbEhAIHebqCGcQMygBegUIARDsAQ",
            },
            {
                id: 3,
                name: "TV 42",
                price: 100000,
                rating: 0,
                img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ffdn.gsmarena.com%2Fimgroot%2Fstatic%2Fheaders%2Fmakers%2Fapple-2023-1.jpg&tbnid=vT5TJ9akYiBbnM&vet=12ahUKEwimwuSlo8CAAxXbEhAIHebqCGcQMygBegUIARDsAQ..i&imgrefurl=https%3A%2F%2Fwww.gsmarena.com%2Fapple-phones-48.php&docid=0fQr7CAOJLv_rM&w=728&h=316&q=phones&ved=2ahUKEwimwuSlo8CAAxXbEhAIHebqCGcQMygBegUIARDsAQ",
            },
            {
                id: 4,
                name: "TV 52",
                price: 100000,
                rating: 0,
                img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ffdn.gsmarena.com%2Fimgroot%2Fstatic%2Fheaders%2Fmakers%2Fapple-2023-1.jpg&tbnid=vT5TJ9akYiBbnM&vet=12ahUKEwimwuSlo8CAAxXbEhAIHebqCGcQMygBegUIARDsAQ..i&imgrefurl=https%3A%2F%2Fwww.gsmarena.com%2Fapple-phones-48.php&docid=0fQr7CAOJLv_rM&w=728&h=316&q=phones&ved=2ahUKEwimwuSlo8CAAxXbEhAIHebqCGcQMygBegUIARDsAQ",
            }
        ]
        //Overview for this variables
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this.devices
    }
}
