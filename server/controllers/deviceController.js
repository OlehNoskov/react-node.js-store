const {Device, Brand} = require("../models/models");
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files

            //Generates unique file name
            let fileName = uuid.v4() + ".jpeg"

            //Moving uploaded files to "static" directory inside project
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const devices = await Device.findAndCountAll()
        return res.json(devices)
    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController()
