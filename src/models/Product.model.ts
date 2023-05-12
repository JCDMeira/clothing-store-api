import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  modifiers: { type: Array<{ title: string; price: number }>, required: false },
  sets: { type: Array<{ title: string; price: number }>, required: false },
  price: { type: Number, required: true },
  created_at: { type: Number, required: true },
  updated_at: { type: Number, required: true },
});

export const ProductModel = mongoose.model('product', ProductSchema);
