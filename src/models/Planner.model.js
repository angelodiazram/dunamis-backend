import mongoose from "mongoose";

const Schema = mongoose.Schema

const plannerSchema = new Schema({
    urlImg: {type: String, require: true},
    tipo: {type: String, require: true},
    description: {type: String, require: true},
    precio: {type: Number, require: true},
    SKU: {type: Number, require: true, unique: true}
}, {versionKey: false})

export const Planner = mongoose.model('planner', plannerSchema);