var work = {
  "jobs": [
    {
      "employer": "DataSMS NG",
      "title": "Office Assistant",
      "location": "Lagos, Nigeria",
      "dates": "2014 - 2016",
      "description": "Running administrative tasks"
    },
    {
      "employer": "Women Flix",
      "title": "Web Developer Intern",
      "location": "Virtual",
      "dates": "2021",
      "description": "Create, build, design website content"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "HTML Mockup",
      "dates": "May 2021",
      "description": "Using HTML to create the mockup for a website",
      "images": ["./images/js.png"]
    },
    {
      "title": "JavaScript Resume",
      "dates": "May 2021",
      "description": "",
      "images": ["./images/program.jpg"]
    },
    {
      "title": "JavaScript Resume",
      "dates": "June 2021",
      "description": "Using JavaScript to create an interactive resume",
      "images": ["./images/mockup.jpg"]
    }
  ]
}

var bio = {
  "name": "Rachael David",
  "role": "Front-End Web Developer",
  "welcomeMessage": "My name is Rachael David. I'm Nice.",
  "contacts": {
    "mobile": "091-500-899",
    "email": "rachaelholy@gmail.com",
    "github": "michhub-dev",
    "location": "Lagos, Nigeria"
  },
  "img": "images/michy4.jpg",
  "skills": ["Cloud Computing", "programming", "HTML", "CSS", "JS"]
};

var education = {
  "schools": [
    {
      "name": "University of Ibadan",
      "location": "Ibadan, Oyo",
      "degree": "N/A",
      "majors": [
        "Psychology"
      ],
      "dates": "2017-2022",
      "url": "http://www.ui.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Cloud Computing",
      "school": "Pluralsight",
      "dates": "2019",
      "url": "https://www.pluralsight.com"
    },
    {
      "title": "Introduction to Web Programming",
      "school": "Coursera",
      "dates": "2021",
      "url": "https://www.Cousera.com"
    },
    {
      "title": "Soft Skills",
      "school": "Cousera",
      "dates": "2021",
      "url": "https://www.cousera.com"
    },
    {
      "title": "Frontend Development",
      "school": "Udacity",
      "dates": "2021",
      "url": "https://www.udacity.com/course/viewer#!/c-ud775"
    }
  ]
};

//  Functions

// Display bio info

bio.display = function() {
  // Display name and role

  var formattedName = HTMLheaderName.replace("%data%",bio["name"]);
  var formattedRole = HTMLheaderRole.replace("%data%",bio["role"]);

  // Display contact info

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  var contacts = bio["contacts"];
  var formattedMobile = HTMLmobile.replace("%data%",contacts["mobile"]);
  var formattedEmail = HTMLemail.replace("%data%",contacts["email"]);
  var formattedGithub = HTMLgithub.replace("%data%",contacts["github"]);
  var formattedLocation = HTMLlocation.replace("%data%",contacts["location"]);
  var formattedImage = HTMLbioPic.replace("%data%",bio["img"]);
  var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio["welcomeMessage"]);
  $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
  $("#header").append(formattedImage + formattedMessage);

  // Display skills

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = "";
    for (var i = 0; i < bio.skills.length; i++){
      formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
      $("#skills").append(formattedSkill);
    };
  };
};

// Display jobs

work.display = function(){
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var j = work.jobs[job];
    var formattedEmployer = HTMLworkEmployer.replace("%data%",j["employer"]);
    var formattedTitle = HTMLworkTitle.replace("%data%",j["title"]);
    var formattedDates = HTMLworkDates.replace("%data%",j["dates"]);
    var formattedLocation = HTMLworkLocation.replace("%data%",j['location']);
    var formattedWorkDesc = HTMLworkDescription.replace("%data%",j['description']);
    $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedWorkDesc);
  }
};

// Display projects

projects.display = function() {
  for (var project in projects["projects"]) {
    $("#projects").append(HTMLprojectStart);
    var proj = projects["projects"][project];
    var formattedTitle = HTMLprojectTitle.replace("%data%", proj["title"]);
    var formattedDates = HTMLprojectDates.replace("%data%", proj["dates"]);
    var formattedDesc = HTMLprojectDescription.replace("%data%", proj["description"]);
    var formattedImages = "";
    if (proj["images"].length > 0){
      for (image in proj["images"]) {
        formattedImages += HTMLprojectImage.replace("%data%", proj["images"][image]);
      };
    }
    $(".project-entry:last").append(formattedTitle + formattedDates + formattedDesc + formattedImages);
  };
}

// Display education

education.display = function() {
  // Add education entry for each school
  for (school in education["schools"]){
    $("#education").append(HTMLschoolStart);
    var sch = education["schools"][school];
    var formattedName = HTMLschoolName.replace("%data%", sch["name"]);
    var formattedDegree = HTMLschoolDegree.replace("%data%", sch["degree"]);
    var formattedDates = HTMLschoolDates.replace("%data%", sch["dates"]);
    var formattedLocation = HTMLschoolLocation.replace("%data%", sch["location"]);
    var formattedMajor = ""; 
    if (sch["majors"].length > 0){
      for (var major in sch["majors"]){
        formattedMajor += HTMLschoolMajor.replace("%data%", sch["majors"][major]);
      };
    };
    $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
  };
  if (education["onlineCourses"].length > 0){
    $("#education").append(HTMLonlineClasses);
    for (course in education["onlineCourses"]){
      $("#education").append(HTMLschoolStart);
      var mooc = education["onlineCourses"][course];
      var formattedTitle = HTMLonlineTitle.replace("%data%", mooc["title"]);
      var formattedSchool = HTMLonlineSchool.replace("%data%", mooc["school"]);
      var formattedDates = HTMLonlineDates.replace("%data%", mooc["dates"]);
      var formattedUrl = HTMLonlineURL.replace("%data%", mooc["url"]);
      $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
    };
  };
};

// Call display functions

bio.display();
work.display();
projects.display();
education.display();

// Log clicks to console

$(document).click(function(loc){
  logClicks(loc.pageX,loc.pageY);
});

// Internationalize! 

$("#main").append(internationalizeButton);

var inName = function() {
  var oldName = $("#name").text();
  var finalName = oldName.trim().split(" ");
  finalName[0] = finalName[0][0].toUpperCase() + finalName[0].slice(1).toLowerCase();
  finalName[1] = finalName[1].toUpperCase();
  finalName = finalName.join(" ");
  return finalName;
}

// Add map!

$("#mapDiv").append(googleMap);