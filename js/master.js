var req = new XMLHttpRequest();
req.open('GET', 'data/test.json');
req.onload = function() {
  if (req.status >= 200 && req.status < 400) {
    var data = JSON.parse(req.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

req.onerror = function() {
  console.log("Connection error");
};

req.send();

function createHTML(testData) {
  var testContainer = document.getElementById("test");
  testContainer.innerHTML = templates.App.test();
}