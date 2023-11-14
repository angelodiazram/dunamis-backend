import mongoose from "mongoose";

const Schema = mongoose.Schema

const poleraSchema = new Schema({
    urlImg: {type: String, require: true},
    description: {type: String, require: true},
    color: {type: String, require: true},
    talla: {type: String, require: true},
    precio: {type: Number, require: true},
    SKU: {type: Number, require: true, unique: true}
}, {versionKey: false})

export const Polera = mongoose.model('polera', poleraSchema);