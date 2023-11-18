import mongoose from 'mongoose';

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {type: String, require: true, unique: true}, 
    pass: {type: String, require: true},
    name: {type: String, require: true},
    last_name: {type: String, require: true},
    rut: {type: String, require: true, unique: true},
    phone: {type: String, require: true, unique: true}, 
    adress: {type: String, require: true}
}, {versionKey: false})

export const Usuario = mongoose.model('usuario', userSchema);