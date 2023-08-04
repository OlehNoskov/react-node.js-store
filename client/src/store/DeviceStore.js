import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        //This variable with underscore because it's agreement and this variable do not change
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 5
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

    setSelectedPage(page) {
        this._page = page
    }

    setSelectedTotalCount(count) {
        this._totalCount = count
    }

    setSelectedLimit(limit) {
        this._limit = limit
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

    get selectedPage() {
        return this._page
    }

    get selectedTotalCount() {
        return this._totalCount
    }

    get selectedLimit() {
        return this._limit
    }
}
