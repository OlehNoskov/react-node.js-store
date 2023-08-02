const {Device, Brand} = require("../models/models");

class DeviceController {
    async create(req, res) {
        const {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        const device = await Device.create({name})
        return res.json(device)
    }

    async getAll(req, res) {
        const devices = await Device.findAndCountAll()
        return res.json(devices)
    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController()
