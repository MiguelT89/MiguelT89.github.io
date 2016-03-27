/*
Bio info
*/

var bio = {
	"name": "Miguel Tostado",
	"role": "Web Developer",
	"contacts": {
		"mobile": "843-300-5870",
		"email": "mtostado2@gmail.com",
		"github": "MiguelT89",
		"location": "San Antonio, TX"
	},
	"welcomeMessage": "Front-End Web Developer",
	"skills": [
		"HTML", "CSS", "Javascript", "jQuery", "Bootstrap"
		],
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedRole);
		
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGitHub);

		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedlocation);
		
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);

			formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
			$("#skills").append(formattedSkill);
		}
		
		var formattedFooterMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedFooterMobile);
		
		var formattedFooterEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedFooterEmail);
		
		var formattedFooterGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#footerContacts").append(formattedFooterGitHub);

		var formattedFooterLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#footerContacts").append(formattedFooterLocation);
	}
};
bio.display();

/*
Education info
*/

var education = {
	"schools": [{
		"name": "University of Texas at San Antonio",
		"location": "San Antonio, TX",
		"degree": "In Progress",
		"major": "Physics",
		"minor": "Computer Science",
		"dates": "In Progress",
		"url": "http://www.utsa.edu"
	}],
	"onlineCourses": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": "In Present",
		"url": "https://www.udacity.com"
	}, {
		"title": "HTML & CSS",
		"school": "CodeCademy",
		"date": "2015",
		"url": "https://www.codecademy.com"
	}, {
		"title": "JavaScript",
		"school": "CodeCademy",
		"date": "2015",
		"url": "https://www.codecademy.com"
	}, {
		"title": "The Web Developer Bootcamp",
		"school": "Udemy",
		"date": "In Progress",
		"url": "https://www.udemy.com/the-web-developer-bootcamp"
	}],
	"display": function() {
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedName + formattedDegree);
			
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);

			var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
			$(".education-entry:last").append(formattedMinor);
		}

		$("#education").append(HTMLonlineClasses);
		for (var course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);
			
			var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".education-entry:last").append(formattedOnlineDate);
			
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
};
education.display();

/*
Work history info
*/

var work = {
	"jobs": [
		{
			"employer": "MMC Group",
			"title": "Data Entry Clerk",
			"location": "San Antonio, TX",
			"dates": "28APR15 - 31OCT15",
			"description": "I processed between 1 and 2 thousand child support payments for the state of Texas a day. Requiring a high degree of accuracy with 10-Key while quickly analyzing financial instruments."
		}, {
			"employer": "United State\'s Navy",
			"title": "Electrician\'s Mate Second Class",
			"location": "Groton, CT",
			"dates": "05JAN09 - 05JAN15",
			"description": "Trained to properly operate and maintain the steam and reactor plants onboard a nuclear submarine. I was also my division's Work Center Supervisor (WCS), in charge of scheduling and deligating all of my division's maintenance totalling over one thousand items."
		}
	],
	"display": function() {
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};
work.display();

/*
Project info
*/

var projects = {
	"projects": [
		{
			"title": "RGB Color Guessing Game",
			"dates": "March 2016",
			"description": "Game designed to improve recognition of RGB colors. JavaScript, HTML, and CSS.",
			"images": ["images/fry.jpg"]
		}, {
			"title": "Arcade Game Clone",
			"dates": "March 2016",
			"description": "Clone of the game Frogger with art assets from Udacity. JavaScript, HTML, and CSS.",
			"images": ["images/frogger-clone.png"]
		}
	],
	"display": function() {
		for (var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if(projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);		
				}
			}
		}
	}
};
projects.display();

/*
Google Map
*/

$("#mapDiv").append(googleMap);

/*
Navbar http://codepen.io/nicklolsen/pen/GyFzk for the entire function.
*/

(function($) {
    "use strict";

    var $navbar = $("#navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "-48px"
            }, 0);
        }
    });
})(jQuery, undefined);