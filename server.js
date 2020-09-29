const http = require('http')
const webhookHandler = require('github-webhook-handler')

const handler = webhookHandler({path: '/webhook', secret: 'xujunlin'})
http.createServer((req, res)=>{

    handler(req, res, (err)=>{

        res.statusCode = 404
        res.end('no')
    })

}).listen(8888)
handler.on('error', (err)=>{
    console.error('Error:', err.message);
})
handler.on('push', (event)=>{
    console.log('push for %s to %s', event.payload);
})
handler.on('issues', (event)=>{

    console.log('issue for %s action=%s ', event.payload);

})