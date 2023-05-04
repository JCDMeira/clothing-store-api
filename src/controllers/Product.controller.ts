import { Request, Response } from 'express';
import { ProductModel } from '../models/Product.model';

export class ProductController {
  static async Create(req: Request, res: Response) {
    try {
      const { body } = req;
      const date = new Date().getTime();

      const product = await ProductModel.create({
        ...body,
        created_at: date,
        updated_at: date,
      });

      return res.status(201).json({ message: 'successfully created', product });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Unknown error' });
    }
  }

  static async FindAll(req: Request, res: Response) {
    try {
      const products = await ProductModel.find({}, { __v: 0 });

      return res.status(200).json({ products });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Unknown error' });
    }
  }

  static async FindOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await ProductModel.findById({ _id: id }, { __v: 0 });

      return res.status(200).json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Unknown error' });
    }
  }

  static async Update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const body = req.body;

      await ProductModel.findByIdAndUpdate(id, { ...body });

      return res.status(200).json({ message: 'Product updated successfully' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Unknown error' });
    }
  }

  static async Delete(req: Request, res: Response) {
    try {
      console.log(req);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Unknown error' });
    }
  }
}
