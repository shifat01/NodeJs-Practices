// node js server
const { log } = require('console');
const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res)=>{
    if (req.url === '/') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write("<head><title>shifat's server</title></head>")
        res.write('<body>')
        res.write('<form action="/submit-details" method="POST">')
        res.write('<input type="text" name="username" placeholder="Enter Username" ><br>')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male" ><br>')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female"><br>')
        res.write('<input type="submit" value="submit">')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    } else if (req.url.toLocaleLowerCase() === '/submit-details' && req.method == 'POST') {

        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);

        });
        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody)
            // const bodyObject = {};
            // for(const [key, val] of params.entries()){
            //     bodyObject[key] = val;
            // }
            // console.log(bodyObject);

            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFileSync('user-details.txt', JSON.stringify(bodyObject));
        });
        fs.writeFileSync('user-details.txt', 'form data')
        res.statusCode = 302
        res.setHeader('location', '/')
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>page not found 404</h1>')
    res.end()
})

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Sever ruuing at http://localhost:${PORT}`);
})
