var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
  },
  compeleted: {
    type: Boolean,
  },
  compeletedAt: {
    type: Number,
  },
});

// var newTodo = new Todo({
//   text: "Cook Dinner",
// });

// var newTodo = new Todo({
//   text: "Hello world",
//   compeleted: true,
//   compeletedAt: 1611312230,
// });

// newTodo.save().then(
//   (doc) => {
//     console.log("save Todo", doc);
//   },
//   (e) => {
//     console.log("unable to save Todo", e);
//   }
// );

var user = mongoose.model("User", {
  email: {
    type: String,
    useNewUrlParser: true,
    require: true,
    trim: true,
    minLength: 1,
  },
});

var newUser = new user({
  email: "shiv7727@gmail.com",
});

newUser.save().then(
  (doc) => {
    console.log("saved email", doc);
  },
  (e) => {
    console.log("unable to save email", e);
  }
);
