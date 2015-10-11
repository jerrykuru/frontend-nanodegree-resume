'use strict';

var bio = {
     "name": "Jerry  Kuru",
     "role": "Web Developer",
     "contacts": {
         "mobile": "650-555-5555",
         "email": "john@email.com",
         "github": "johndoe",
         "twitter": "@johndoe",
         "location": "San Franscio"
     },
     "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc",
     "skills": ["awesome", "delivering things", "cryogenic sleep", "saving the universe"],
     "bioPic": "images/fry.jpg"
 };

bio.display = function() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
         $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

         var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
         var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
         var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
         var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
         var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
         var formattedContacts = formattedHTMLmobile + formattedHTMLemail + formattedHTMLgithub + formattedHTMLtwitter + formattedHTMLlocation;
         $("#topContacts").prepend(formattedContacts);

     $("#footerContacts").prepend(HTMLlocation.replace("%data%", bio.contacts.location));
     $("#footerContacts").prepend(HTMLtwitter.replace("%data%", bio.contacts.twitter));
     $("#footerContacts").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
     $("#footerContacts").prepend(HTMLemail.replace("%data%", bio.contacts.email));
     $("#footerContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
};


 var education = {
     "schools": [{
         "name": "Franklin University",
         "location": "Columbus, OH",
         "degree": "Masters",
         "majors": ["Computer Science"],
         "dates": 2007,
         "url": "http://Franklin.com"
     }, {
         "name": "Bharathidasan University",
         "location": "Tiruchirappalli, Tamil Nadu 620024, India",
         "degree": "BS",
         "majors": ["Electrical & Electronics Engineering"],
         "dates": 1994,
         "url": "http://Bharathidasan.com"
     }],
     "onlineCourse": [{
         "title": "JavaScript Crash Course",
         "school": "Udacity",
         "date": 2014,
         "url": "http://www.udacity.com/course/ud804"
     }]
 };

education.display = function () {
   

         for (var eduIndx in education.schools) {
             $("#education").append(HTMLschoolStart);

             var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[eduIndx].name);
             var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[eduIndx].degree);
             $(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);
             var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[eduIndx].dates);
             $(".education-entry:last").append(formattedHTMLschoolDates);
             var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[eduIndx].location);
             $(".education-entry:last").append(formattedHTMLschoolLocation);

             if (education.schools[eduIndx].majors.length > 0) {
                 var majors = education.schools[eduIndx].majors;
                 for (var majorIdx in majors) {
                     var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", majors[majorIdx]);
                     $(".education-entry:last").append(formattedHTMLschoolMajor);
                 }
             }
         }

         $(".education-entry:last").append(HTMLonlineClasses);
         var onlineCourse = education.onlineCourse;
         for (var courseIdx in onlineCourse) {
             var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse[courseIdx].title);
             var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse[courseIdx].school);
             $(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);
             var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlineCourse[courseIdx].date);
             $(".education-entry:last").append(formattedHTMLonlineDates);
             var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", onlineCourse[courseIdx].url);
             $(".education-entry:last").append(formattedHTMLonlineURL);

         }
     };


 var work = {
     "jobs": [{
         "employer": "Udacity",
         "title": "Course Developer",
         "location": "Mountain View, CA",
         "dates": "Feb 2014 - Current",
         "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
     }, {
         "employer": "LearnBIG",
         "title": "Software Engineer",
         "location": "Seattle, WA",
         "dates": "May 2013 - Jan 2014",
         "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
     }, {
         "employer": "LEAD Academy Charter High School",
         "title": "Science Teacher",
         "location": "Nashville, TN",
         "dates": "Jul 2012 - May 2013",
         "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
     }, {
         "employer": "Stratford High School",
         "title": "Science Teacher",
         "location": "Columbus, OH",
         "dates": "Jun 2009 - Jun 2012",
         "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
     }]
     
 };

work.display = function() {
       for (var workIdx in work.jobs) {
             var workExperienceObj = work.jobs[workIdx];
             $("#workExperience").append(HTMLworkStart);

             var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", workExperienceObj.employer);
             var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", workExperienceObj.title);
             var formattedHTMLworkDates = HTMLworkDates.replace("%data%", workExperienceObj.dates);
             var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", workExperienceObj.description);
             var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", workExperienceObj.location);
             var formatterEmployerTitle = formattedHTMLworkEmployer + formattedHTMLworkTitle + formattedHTMLworkDates + formattedHTMLworkLocation + formattedHTMLworkDescription;

             $(".work-entry:last").append(formatterEmployerTitle);
         }
};


 var projects = {
     "projects": [{
         "title": "Columbus Community Shelter",
         "dates": "2013",
         "description": "Build a mobile Application to help non profilt organization",
         "images": [

             "http://placehold.it/197x148", "http://placehold.it/197x148"
         ]
     }]
 };

projects.display = function() {
         var listOfProjects = projects.projects;
         for (var project in listOfProjects) {
             $("#projects").append(HTMLprojectStart);

             var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", listOfProjects[project].title);
             $(".project-entry:last").append(formattedHTMLprojectTitle);
             var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", listOfProjects[project].dates);
             $(".project-entry:last").append(formattedHTMLprojectDates);
             var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", listOfProjects[project].description);
             $(".project-entry:last").append(formattedHTMLprojectDescription);

             if (listOfProjects[project].images.length > 0) {
                 for (var image in listOfProjects[project].images) {
                     var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", listOfProjects[project].images[image]);
                     $(".project-entry:last").append(formattedHTMLprojectImage);
                 }
             }
         }

     };

 $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
 $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
 $("#header").append(HTMLskillsStart);
 for (var skill in bio.skills) {
     $("#skills-h3").append(HTMLskills.replace("%data%", bio.skills[skill]));
 }


 $("#main").append(internationalizeButton);

 function inName(name) {
     var intName;
     var nameAsArray = name.split(" ");
     return nameAsArray[0].slice(0, 1).toLocaleUpperCase() + nameAsArray[0].slice(1, nameAsArray[0].length) + " " + nameAsArray[1].toLocaleUpperCase();
 };



 


 bio.display();
 education.display();
 work.display();
 projects.display();
 $("#mapDiv").append(googleMap);
 