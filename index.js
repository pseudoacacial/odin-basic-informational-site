import { createServer } from "node:http";
import fs from "node:fs";

const port = 2137;
const server = createServer((req, res) => {
  let statusCode = 200;
  let response = null;
  if (req.url === "/") {
    //change the rest of the routes like this to use readFileSync
    response = fs.readFileSync("index.html");
  } else if (req.url === "/about") {
    response = fs.readFileSync("about.html");
  } else if (req.url === "/contact-me") {
    response = fs.readFileSync("contact-me.html");
  } else {
    response = fs.readFileSync("404.html");
    statusCode = 404;
  }
  res.writeHead(statusCode);
  res.end(response);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
