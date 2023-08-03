const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket, Type} = require('../models/models')

class UserController {
    async registration(req, res) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Email or password is incorrect'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User with this email is already existed'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = jwt.sign(
            {id: user.id, email, role},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
        return res.json({token})
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Id hasn\'t been provided!'))
        }
        res.json(id);
    }

    async getAll(req, res) {
        const users = await User.findAndCountAll()
        return res.json(users)
    }
}

module.exports = new UserController()
