import mongoose from "mongoose";

const Schema = mongoose.Schema
const poleraSchema = new Schema({
    color: {type: String, require: true},
    talla: {type: String, require: true},
    precio: {type: String, require: true}
}, {versionKey: false})

export const Polera = mongoose.model('poleras', poleraSchema)