const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost: 27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connet to MongoDb Sever!!");
  }
  console.log("Successfully connected MongoDb Server!!");
  //   const db = client.db("TodoApp");
  //   db.collection("Todos")
  //     .find()
  //     .toArray()
  //     .then(
  //       (docs) => {
  //         console.log("Todos");
  //         console.log(JSON.stringify(docs, undefined, 2));
  //       },
  //       (err) => {
  //         console.log("unable to fetch todos", err);
  //       }
  //     );

  const db = client.db("TodoApp");
  db.collection("Todos")
    .find()
    .count()
    .then(
      (count) => {
        console.log(`Todos Count ${count}`);
      },
      (err) => {
        console.log("unable to fetch todos", err);
      }
    );
  client.close();
});
