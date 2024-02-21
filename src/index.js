import { Router } from "@fastly/expressly";
import path from "path";

const router = new Router();

// Use middleware to set a header
router.use((req, res, next) => {
  res.set("x-powered-by", "expressly");
  next();
});

// Serve HTML pages
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve another HTML page
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

router.get('/my-account', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-account.html'));
});

router.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog.html'));
});
// POST simple message
router.post("/submit", async (req, res) => {
  let body = await req.text();
  res.send(`You posted: "${body}"`);
});

// 404/405 response for everything else
router.use((req, res) => {
  res.sendStatus(404); // Not Found
});

router.listen();
