var request = require('request');


var options = {
  uri: 'http://localhost:3004/v1.0/tag_boxes/pick',
  method: 'POST',
  json: {
    package_group_id: "XAH174738",
    product_id: "PPP362838",
    wall_id: "XAK1"
  }
};


request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the shortened url.
  }
});