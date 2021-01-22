var mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
  },
  compeleted: {
    type: Boolean,
    default: false,
  },
  compeletedAt: {
    type: Number,
    default: null,
  },
});

module.exports = { Todo };
