const { Schema } = reuire("mongoose");
const HoldingSchema = new schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

module.exports = { HoldingSchema };
