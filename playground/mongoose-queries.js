const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { user } = require("../server/models/user");

var id = "600bbf6400e8dd0c304ca9d8";

// Todo.find({
//   _id: id,
// }).then((todos) => {
//   console.log(todos);
// });
// Todo.findOne({
//   _id: id,
// }).then((todo) => {
//   console.log("todo", todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log("id not not found !!");
  }
  console.log(todo);
});

user.findById("600b0ec60b6e1631d873f80e").then(
  () => {
    if (!user) {
      return console.log("unable fto found user");
    }
    console.log(JSON.stringify(user, undefined, 2));
  },
  (err) => {
    console.log(err);
  }
);
