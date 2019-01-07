var req = new XMLHttpRequest();
req.open('GET', 'data/resume.json');
req.onload = function() {
  if (req.status >= 200 && req.status < 400) {
    var data = JSON.parse(req.responseText);
    generateCareerProfile(data.careerProfile);
    generateExperiences(data.experiences);
    generateSkills(data.skills);
    generateSidebar(data.sidebar);
  } else {
    console.log('We connected to the server, but it returned an error.');
  }
};

req.onerror = function() {
  console.log('Connection error');
};

req.send();

// Sidebar

function generateSidebar(data) {
  var template = App['templates']['sidebar'];
  var container = document.querySelector('.sidebar');
  container.innerHTML = template(data);
}

// Main content

function generateCareerProfile(data) {
    var template = App['templates']['career-profile'];
    var container = document.querySelector('.career-profile');
    container.innerHTML = template(data);
}

function generateExperiences(data) {
  var template = App['templates']['experiences'];
  var container = document.querySelector('.experiences');
  container.innerHTML = template(data);
}

function generateSkills(data) {
  var template = App['templates']['skills'];
  var container = document.querySelector('.skills');
  container.innerHTML = template(data);
}