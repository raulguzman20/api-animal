import {model, Schema} from 'mongoose';

const MascotaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'nombre de la mascota'],
    },

    especie: {
        type: String,
        required: [true, 'especie de la mascota'],
    },

    color: {
        type: String,
        required: [true, 'color de la mascota'],
    },

    raza: {
        type: String,
        required: [true, 'raza de la mascota'],
    },

    precio: {
        type: Number,
        required: [true, 'precio de la mascota'],
        min: 1,
        max: 10000
    },

    documento: {
        type: String,
        required: [true, 'documento de identidad de la mascota'],
        unique: true
    }
});

export default model('Mascota', MascotaSchema, 'Mascota');