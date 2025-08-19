const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const port = 8000;

// Middileware - plugin
app.use(express.urlencoded({extended : false}))

// Routes
app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

// Rest APi
app.get("/api/users", (req, res) => {
  return res.json(users);
});



// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// app.patch("/api/users/:id", (req, res) => {
//   // todo : edit the user with id
//   return res.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   // todo : delete the user with id
//   return res.json({ status: "pending" });
// });


// same route if /api/users/:id are the the so we can use the this type of routing so 
  // we can manage easly if routes are change , we change only one place...
app.route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // todo : edit the user with id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // todo : delete the user with id
    return res.json({ status: "pending" });
  });

  
app.post("/api/users", (req, res) => {
  // todo : create new user
  const body = req.body;
//   console.log("Body", body);
  
//   users.push({
//     first_name : body.first_name,
//     last_name : body.last_name,
//     email : body.email,
//     gender : body.gender,
//     job_title : body.job_title

//   })
   // also we can appned the whole body
   //   users.push(body) 
   
   users.push({...body, id : users.length + 1}) 
   
   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      return res.json({ status: "success", id : users.length});
   })
//   return res.json({ status: "pending" });
});



app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
