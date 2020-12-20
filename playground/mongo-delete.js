const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost: 27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connet to MongoDb Sever!!");
  }
  console.log("Successfully connected MongoDb Server!!");
  const db = client.db("TodoApp");
  //   delete Many

  //   db.collection("Todos")
  //     .deleteMany({ text: "Something to do-4" })
  //     .then((result) => {
  //       console.log("result==>", result);
  //     });

  // delete one

  //   db.collection("Todos")
  //     .deleteOne({ text: "Something to do-1" })
  //     .then((result) => {
  //       console.log("result>>", result);
  //     });

  //    find one and delete

  db.collection("Todos")
    .findOneAndDelete({ completed: false })
    .then((result) => {
      console.log(result);
    });

  client.close();
});
