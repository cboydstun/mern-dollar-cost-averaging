import mongoose from 'mongoose'

const BuySchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      enum: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Stock' }],
    },
    symbol: {
      type: String,
      // required: true,
      enum: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Stock' }],
    },
    quantity: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Buy', BuySchema)
