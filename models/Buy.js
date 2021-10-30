import mongoose from 'mongoose'

const BuySchema = mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Buy', BuySchema)
