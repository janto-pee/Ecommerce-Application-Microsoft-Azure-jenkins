import { MongoClient } from "mongodb";
import connectToDB from "../../utils/dbConnect";

export default async function newsletterHandler(req, res) {
  if (req.method == "POST") {
    const userEmail = req.body.email;
    console.log(userEmail);
    if (!userEmail || !userEmail.includes("@")) {
      return res.status(422).json({ message: "invalid email" });
    }

    const client = await connectToDB();
    if (client) console.log(client);
    const db = client.db();
    await db.collection("emails").insertOne({ email: userEmail });
    client.close();
    return res.status(201).json({ message: "signed up" });
  }
  if (req.method == "GET") {
    const dummyList = [
      {
        id: 1,
        title: "Networking for introverts",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, eum!",
        location: "New Wall street, 5 6554 New York",
        date: "May 30, 2021",
        img: "/asset/cardimg6.jpg",
        isFeatured: true,
      },
      {
        id: 2,
        title: "Programming for everyone",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae?",
        location: "New Wall street, 5 6554 New York",
        date: "May 30, 2021",
        img: "/asset/cardimg2.jpg",
        isFeatured: true,
      },
    ];
    res.status(201).json({ comments: dummyList });
    console.log(dummyList);
  }
}
