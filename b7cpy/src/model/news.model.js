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
    ordering:{
      type:Number,
      min: 1,
      default: 1,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);
// newSchema.pre("save",function)
module.exports = mongoose.model(COLLECTION_NAME, newSchema);
