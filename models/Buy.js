import mongoose from 'mongoose'

const BuySchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      enum: ['Bitcoin', 'Ethereum', 'Litecoin', 'Bitcoin Cash', 'Dogecoin'],
    },
    symbol: {
      type: String,
      // required: true,
      enum: ['BTC', 'ETH', 'LTC', 'BCH', 'DOGE'],
    },
    quantity: {
      type: Number,
      // required: true,
    },
    cost: {
      type: Number,
      // required: true,
    },
    date: {
      type: Date,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Buy', BuySchema)
