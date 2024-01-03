const { Schema } = require("mongoose");
mongoose = require("mongoose");

const COLLECTION_NAME = "News";

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

module.exports = mongoose.model(COLLECTION_NAME, newSchema);
