import { MongoClient } from "mongodb";
import connectToDB from "../../../utils/dbConnect";

export default async function commentHandler(req, res) {
  const eventId = req.query.eventId;

  const client = await connectToDB();
  const db = client.db();

  if (req.method == "GET") {
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    // ];
    res.status(201).json({ comment: documents });
    console.log(documents);
    return;
  }
  if (req.method == "POST") {
    const { username, email, text } = req.body;
    if (username == "" || email == "" || text == "") {
      console.log("empty fields");
      return res.status(422).json({ message: "empty fields" });
    }
    const newComment = { username, email, text, eventId };
    await db.collection("comments").insertOne(newComment);
    client.close();

    console.log("finally", { username, email, text, eventId });
    return;
  }
}
