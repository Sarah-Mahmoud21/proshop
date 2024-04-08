const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 3001;

const users = [
  {
    firstName: "Sara",
    lastName: "Mahmoud",
    email: "sara@gmail.com",
    password: "sara1234S@",
    birthday: "15/4/1999",
    img: "https://images.squarespace-cdn.com/content/v1/5535036ee4b04c1bc651788f/1686852663297-Z34GJKT4K9PN065UZQXH/JasperArt_2023-06-15_14.10.46_2_upscaled.jpg?format=1500w",
  },

  {
    firstName: "Amy",
    lastName: "Mayer",
    email: "amymay@gmail.com",
    password: "sara1234S@",
    birthday: "12/4/1999",
    img: "https://images.squarespace-cdn.com/content/v1/5535036ee4b04c1bc651788f/1686852663297-Z34GJKT4K9PN065UZQXH/JasperArt_2023-06-15_14.10.46_2_upscaled.jpg?format=1500w",
  },
];

const jwtSecretKey = "yourSecretKey";

app.use(bodyParser.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ email: user.email }, jwtSecretKey);
  res.json({ token });
});

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  jwt.verify(token.split(" ")[1], jwtSecretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

app.get("/profile", verifyToken, (req, res) => {
  try {
    const userEmail = req.user.email;
    const user = users.find((user) => user.email === userEmail);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
