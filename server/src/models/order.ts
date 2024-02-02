import { Document, Schema, model } from 'mongoose';

interface IOrderItem extends Document {
  id: number;
  products: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    thumbnail: string;
  }[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

const OrderSchema = new Schema<IOrderItem>({
  id: { type: Number, required: true },
  products: [
    {
      id: { type: Number, required: true },
      title: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      total: { type: Number, required: true },
      discountPercentage: { type: Number, required: true },
      discountedPrice: { type: Number, required: true },
      thumbnail: { type: String, required: true },
    },
  ],
  total: { type: Number, required: true },
  discountedTotal: { type: Number, required: true },
  userId: { type: Number, required: true },
  totalProducts: { type: Number, required: true },
  totalQuantity: { type: Number, required: true },
});


const Order = model<IOrderItem>('Order', OrderSchema);

export default Order;
