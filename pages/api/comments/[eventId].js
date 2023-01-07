export function commentHandler(req, res) {
  const eventId = req.query.eventId;
  if (req.method == "POST") {
    const { username, email, text } = req.body;
    if (email == "" || username == "" || text == "") {
      console.log("emtpty fields");
      return res.status(422).json({ message: "field is empty" });
    }
    console.log(username, email, text);
    const newComment = {
      id: new Date().toISOString(),
      username,
      text,
      email,
    };
    console.log(newComment);
    res.status(201).json({ message: newComment });
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
  }
}
