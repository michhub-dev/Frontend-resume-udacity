//Build four objects, each one representing a different resume section
let work = {
  "jobs": [{
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

let projects = {
  "projects": [{
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

let bio = {
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

let education = {
  "schools": [{
      "name": "University of Ibadan",
      "location": "Ibadan, Oyo",
      "degree": "N/A",
      "majors": [
          "Psychology"
      ],
      "dates": "2017-2022",
      "url": "http://www.ui.edu"
  }],
  "onlineCourses": [{
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

// Define Functions

// Display bio info

bio.display = function() {
  // Display name and role

  let formattedName = HTMLheaderName.replace("%data%", bio["name"]);
  let formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);

  // Display contact info
  //prepends the variable above to the start of the header element
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  let contacts = bio["contacts"];
  // string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from the resume javaScript objects and store in a variable
  let formattedMobile = HTMLmobile.replace("%data%", contacts["mobile"]);
  let formattedEmail = HTMLemail.replace("%data%", contacts["email"]);
  let formattedGithub = HTMLgithub.replace("%data%", contacts["github"]);
  let formattedLocation = HTMLlocation.replace("%data%", contacts["location"]);
  let formattedImage = HTMLbioPic.replace("%data%", bio["img"]);
  let formattedMessage = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);
  //selector.append() makes an element appear at the end of a selected section
  $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
  $("#header").append(formattedImage + formattedMessage);

  // Display skills
  // appends the element from helper.js to the header element. Loops through each of the skills and replaces the old text to the object created then appends the created variable to the html element
  if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      let formattedSkill = "";
      for (let i = 0; i < bio.skills.length; i++) {
          formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(formattedSkill);
      };
  };
};

// Display jobs

work.display = function() {
  for (let job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      let j = work.jobs[job];
      // string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from the resume javaScript objects and store in a variable
      let formattedEmployer = HTMLworkEmployer.replace("%data%", j["employer"]);
      let formattedTitle = HTMLworkTitle.replace("%data%", j["title"]);
      let formattedDates = HTMLworkDates.replace("%data%", j["dates"]);
      let formattedLocation = HTMLworkLocation.replace("%data%", j['location']);
      let formattedWorkDesc = HTMLworkDescription.replace("%data%", j['description']);
      $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedWorkDesc);
  }
};

// Display projects

projects.display = function() {
  for (let project in projects["projects"]) {
      $("#projects").append(HTMLprojectStart);
      let proj = projects["projects"][project];
      // string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from the resume javaScript objects and store in a variable
      let formattedTitle = HTMLprojectTitle.replace("%data%", proj["title"]);
      let formattedDates = HTMLprojectDates.replace("%data%", proj["dates"]);
      let formattedDesc = HTMLprojectDescription.replace("%data%", proj["description"]);
      let formattedImages = "";
      if (proj["images"].length > 0) {
          for (image in proj["images"]) { //image variable is used to loop through the array
              formattedImages += HTMLprojectImage.replace("%data%", proj["images"][image]);
          };
      }
      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDesc + formattedImages);
  };
}

// Display education

education.display = function() {
  // Add education entry for each school
  for (school in education["schools"]) {
      $("#education").append(HTMLschoolStart);
      let sch = education["schools"][school];
      // string.replace(old, new) to swap out all the placeholder text for data from the resume javaScript objects and store in a variable
      let formattedName = HTMLschoolName.replace("%data%", sch["name"]);
      let formattedDegree = HTMLschoolDegree.replace("%data%", sch["degree"]);
      let formattedDates = HTMLschoolDates.replace("%data%", sch["dates"]);
      let formattedLocation = HTMLschoolLocation.replace("%data%", sch["location"]);
      let formattedMajor = "";
      if (sch["majors"].length > 0) {
          for (let major in sch["majors"]) {
              formattedMajor += HTMLschoolMajor.replace("%data%", sch["majors"][major]);
          };
      };
      $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
  };
  if (education["onlineCourses"].length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (course in education["onlineCourses"]) {
          $("#education").append(HTMLschoolStart);
          let mooc = education["onlineCourses"][course];
          // string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from the resume javaScript objects and store in a variable
          let formattedTitle = HTMLonlineTitle.replace("%data%", mooc["title"]);
          let formattedSchool = HTMLonlineSchool.replace("%data%", mooc["school"]);
          let edformattedDates = HTMLonlineDates.replace("%data%", mooc["dates"]);
          let formattedUrl = HTMLonlineURL.replace("%data%", mooc["url"]);
          $(".education-entry:last").append(formattedTitle + formattedSchool + edformattedDates + formattedUrl);
      };
  };
};

// Call display functions

bio.display();
work.display();
projects.display();
education.display();

// Shows  the x and y cordinate on the console whenever there is a click on any part of the page

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});


// Add map!

$("#mapDiv").append(googleMap);
