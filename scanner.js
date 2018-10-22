var request = require('request');


var options = {
  uri: 'http://localhost:3004/v1.0/tag_boxes/pick',
  method: 'POST',
  json: {
    package_group_id: "XAH174738",
    product_id: "888620038708",
    wall_id: "XAK1"
  }
};


request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
});




// {
//     package_group_id: "XAH174738",
//     product_id: "PPP362838",
//     wall_id: "XAK1"
//   }


// {
//     package_group_id: "XAH174738",
//     product_id: "PPP305645",
//     wall_id: "XAK1"
//   }


// {
//     package_group_id: "XAH174738",
//     product_id: "PPP366162",
//     wall_id: "XAK1"
//   }


// package_group_id: "XAH174738",

// package: 82704384
// products:
// 353918
// 305645 *
// 307281
// 307282
// 307283 **



// package_group_id: "XAH174738",

// package: 82704384
// products:
// 353918 ***
// 305645 *
// 307281
// 307282
// 307283 **


// package_group_id: "XAH174738",

// package: 82704388
// products:
// 353918 ***
// 366660
// 366661
// 366662
// 366664

// package_group_id: "XAH174738",

// package: 82704385
// products:
// 307283 **
