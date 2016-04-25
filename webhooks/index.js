// Node.js Example
app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === "ybc-init-vtoken") {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});
