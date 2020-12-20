const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost: 27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connet to MongoDb Sever!!");
  }
  console.log("Successfully connected MongoDb Server!!");
  const db = client.db("TodoApp");
  db.collection("Todos").insertOne(
    {
      text: "Something to do-4",
      completed: false,
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert todo", err);
      }
      console.log(JSON.stringify(result.ops, undefined, true));
    }
  );
  client.close();
});
