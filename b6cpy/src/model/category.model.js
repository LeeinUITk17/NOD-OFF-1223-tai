const { Schema } = require("mongoose");
mongoose = require("mongoose");

const COLLECTION_NAME = "category";

const newSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      default: "inactive",
      enum: ["active", "inactive"],
    },
    discription: String,
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);
// newSchema.pre("save",function)
module.exports = mongoose.model(COLLECTION_NAME, newSchema);
