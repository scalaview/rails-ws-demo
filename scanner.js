var request = require('request');

var product_ids = [
  'PPP366664',
  'PPP366662',
  'PPP366661',
  'PPP366660',
  'PPP366162',
  'PPP362838',
  'PPP358215',
  'PPP357619',
  'PPP357618',
  'PPP353918',
  'PPP309059',
  'PPP307283',
  'PPP307282',
  'PPP307281',
  'PPP305645' ]

var index = 0

function make_req() {
  if(index >= product_ids.length ){// product_ids.length){
    clearInterval(myVar);
    console.log("finish")
    return
  }
  var options = {
    uri: 'http://localhost:3004/v1.0/tag_boxes/pick',
    method: 'POST',
    json: {
      package_group_id: "XAH174738",
      product_id: product_ids[index],
      wall_id: "XAK1"
    }
  };
  index++
  console.log(options)
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
    }
  });
}
console.log("start")
var myVar = setInterval(function(){ make_req() }, 3000);

// {
//     package_group_id: "XAH174738",
//     product_id: "PPP305645",
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
