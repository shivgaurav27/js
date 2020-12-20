const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost: 27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connet to MongoDb Sever!!");
  }
  console.log("<<<Successfully connected MongoDb Server!!>>>");

  const db = client.db("TodoApp");
  db.collection("Todos")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5fdf6805c6d8b33adc52f935"),
      },
      {
        $set: {
          completed: true,
          text: "Happy New year 2021",
        },
      },
      {
        returnOriginal: false,
      }
    )
    .then((result) => {
      console.log(result);
    });

  client.close();
});
