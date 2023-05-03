import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  modifiers: { type: Array<string>, required: false },
  sets: { type: Array<string>, required: false },
  created_at: { type: Number, required: true },
  updated_at: { type: Number, required: true },
});

export const ProductModel = mongoose.model('product', ProductSchema);
