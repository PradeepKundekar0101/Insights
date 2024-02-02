import { Document, Schema, model } from 'mongoose';

interface IUser extends Document {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: Date;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
}


const UserSchema = new Schema<IUser>({
  id: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  maidenName: { type: String },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: true },
  image: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  eyeColor: { type: String, required: true },
  hair: {
    color: { type: String, required: true },
    type: { type: String, required: true },
  },
  domain: { type: String, required: true },
  ip: { type: String, required: true },
  address: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    postalCode: { type: String, required: true },
    state: { type: String, required: true },
  },
  macAddress: { type: String, required: true },
  university: { type: String, required: true },
  bank: {
    cardExpire: { type: String, required: true },
    cardNumber: { type: String, required: true },
    cardType: { type: String, required: true },
    currency: { type: String, required: true },
    iban: { type: String, required: true },
  },
  company: {
    address: {
      address: { type: String, required: false },
      city: { type: String, required: false },
      coordinates: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
      postalCode: { type: String, required: true },
      state: { type: String, required: true },
    },
    department: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
  },
  ein: { type: String, required: true },
  ssn: { type: String, required: true },
  userAgent: { type: String, required: true },
  crypto: {
    coin: { type: String, required: true },
    wallet: { type: String, required: true },
    network: { type: String, required: true },
  },
});

const User = model<IUser>('User', UserSchema,'users');
export default User;
