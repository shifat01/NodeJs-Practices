const http = require("http");


const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // Home
  if (req.url === '/home') {
    res.write('<h1>Welcome to home</h1>' ) 
    res.write('<a href="/">Go back</a>')
    return res.end()
  }

  // Man
  else if (req.url === '/man') {
    res.write('<h1>Welcome to man</h1>')
    res.write('<a href="/">Go back</a>') 
    return res.end()}

  // Women
  else if (req.url === '/women') {
    res.write('<h1>Welcome to women</h1>')
    res.write('<a href="/">Go back</a>')
    return res.end()
  }

  // Kids
  else if (req.url === '/kids') {
    res.write('<h1>Welcome to kids</h1>')
    res.write('<a href="/">Go back</a>')
    return res.end()
  }

  // Cart
  else if (req.url === '/cart') {
    res.write('<h1>Welcome to cart</h1>')
    res.write('<a href="/">Go back</a>')
    return res.end()
  }

  
  // Html for main page
  res.write(
    `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>e-commers</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/man">Man</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
        </nav>
    </head>
</body>
</html>`);
  res.end();
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`server start at http://localhost:${PORT}`);
});
