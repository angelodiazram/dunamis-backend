import mongoose from "mongoose";

const Schema = mongoose.Schema

const cuadernoSchema = new Schema({
    urlImg: {type: String, require: true},
    tipo: {type: String, require: true},
    description: {type: String, require: true},
    precio: {type: Number, require: true},
    SKU: {type: Number, require: true, unique: true}
}, {versionKey: false})

export const Cuaderno = mongoose.model('cuaderno', cuadernoSchema);