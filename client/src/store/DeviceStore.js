import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        //This variable with underscore because it's agreement and this variable do not change
        this._types = [
            {id: 1, name: 'Phones'},
            {id: 2, name: 'TV'},
            {id: 3, name: 'Laptops'},
            {id: 4, name: 'Earphones'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {
                id: 1,
                name: "15 pro",
                price: 60000,
                rating: 0,
                img: "https://www.zdnet.com/a/img/resize/f792d73c3e241b8f40a52875616f490ea1a08e97/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=1200&width=1200"
            },
            {
                id: 2,
                name: "13 pro max",
                price: 60000,
                rating: 0,
                img: "https://www.zdnet.com/a/img/resize/f792d73c3e241b8f40a52875616f490ea1a08e97/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=1200&width=1200"
            },
            {
                id: 3,
                name: "TV 42",
                price: 100000,
                rating: 0,
                img: "https://www.zdnet.com/a/img/resize/f792d73c3e241b8f40a52875616f490ea1a08e97/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=1200&width=1200"
            },
            {
                id: 4,
                name: "TV 52",
                price: 100000,
                rating: 0,
                img: "https://www.zdnet.com/a/img/resize/f792d73c3e241b8f40a52875616f490ea1a08e97/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=1200&width=1200"
            },
            {
                id: 5,
                name: "TV 52",
                price: 100000,
                rating: 0,
                img: "https://www.zdnet.com/a/img/resize/f792d73c3e241b8f40a52875616f490ea1a08e97/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=1200&width=1200"
            },
            {
                id: 6,
                name: "TV 52",
                price: 100000,
                rating: 0,
                img: "https://www.zdnet.com/a/img/resize/f792d73c3e241b8f40a52875616f490ea1a08e97/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=1200&width=1200"
            }
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
