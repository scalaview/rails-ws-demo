var App = {};

App.pick = function(front_id) {
  data = {
    front_id: front_id,
    action : "put"
  };
  message = {
    command: "message",
    identifier: JSON.stringify(App.param),
    data: JSON.stringify(data)
  };
  App.ws.send(JSON.stringify(message));
}

App.unpack = function(behind_id){
  data = {
    behind_id: behind_id,
    action : "finish"
  };
  message = {
    command: "message",
    identifier: JSON.stringify(App.param),
    data: JSON.stringify(data)
  };
  App.ws.send(JSON.stringify(message));
}


App.set_up = function(front_ids){
  data = {
    front_ids: front_ids,
    action : "set_up"
  };
  message = {
    command: "message",
    identifier: JSON.stringify(App.param),
    data: JSON.stringify(data)
  };
  App.ws.send(JSON.stringify(message));
}

App.connect_server = function() {
  const W3CWebSocket = require('ws');
  App.ws = new W3CWebSocket('ws://localhost:3004/wall', ["actioncable-v1-json", "actioncable-unsupported"]);

  App.param = {channel: "OperationChannel", uuid: guid(), warehouse_id: 1};

  App.ws.on('open', function open() {
    data = {
      command: "subscribe",
      identifier: JSON.stringify(App.param)
    }
    App.ws.send(JSON.stringify(data))
  });
  App.ws.on('message', function (event) {
    console.log(event)
    var response = JSON.parse(event)
    if(response.message && response.message.action && response.message.action == 'pick'){
      if(response.message.data[0]){
        for(var d in response.message.data){
          App.pick(response.message.data[d].front_id)
        }
      }
    }
    if(response.message && response.message.action && response.message.action == 'unpack'){
      App.unpack(response.message.data.behind_id)
    }
    if(response.message && response.message.action && response.message.action == 'set_up'){
      App.set_up([1, 2, 10, 11, 13, 15, 16])
    }
  });
  function guid() {
   function s4() {
     return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }
   return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
  }
}
App.connect_server();


