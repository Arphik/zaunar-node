import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true}, 
    description: { type: String, required: true}, 
    qty: { type: Number, required: true},
    sentTime: { type: String, required: true},
    price: { type: Number, required: true},
    guarantee: { type: String, required: true},
    image: { type: String, required: true},
    producer: { type: String, required: true},
    type: { type: String, required: true},
    technology: { type: String, required: true},
    purpose: { type: String, required: true},
    oar: { type: String, required: true},
    handle: { type: String, required: true},
    thickness: { type: String, required: true},
    length: { type: String, required: true},
    width: { type: String, required: true},
});

export interface Product extends mongoose.Document{
    id: string;
    title: string;
    description: string;
    qty: number;
    sentTime: string,
    price: number;
    guarantee: string;
    image: string;
    producer: string;
    type: string;
    technology: string;
    purpose: string;
    oar: string;
    handle: string;
    thickness: string;
    length: string;
    width: string;
}