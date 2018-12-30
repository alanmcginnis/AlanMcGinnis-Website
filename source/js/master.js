var req = new XMLHttpRequest();
req.open('GET', 'data/portfolio.json');
req.onload = function() {
  if (req.status >= 200 && req.status < 400) {
    var data = JSON.parse(req.responseText);
    generateCareerOverview(data.careerOverview);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

req.onerror = function() {
  console.log("Connection error");
};

req.send();

function generateCareerOverview(data) {
    var template = App['templates']['careerOverview'];
    var container = document.getElementById("career-overview");
    container.innerHTML = template(data);
}