import { model, Schema } from "mongoose";

const CustomerSchema = new Schema({
  name: String,
  birthDate: Date,
  gender: String,
  email: String,
  address: String,
  state: String,
  city: String,
});

export default model("Customers", CustomerSchema);
