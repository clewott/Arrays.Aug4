$(document).ready (function() {


var myArray = [
  {  avatar:"https://avatars.githubusercontent.com/u/115030?v=2",
    name: "Calvin Webster",
    github: "https://github.com/calweb",
    repos: "https://api.github.com/users/calweb/repos",
    location: "Charleston, SC",
    followers: 64,
    following: 96
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/8247044?v=2",
    name: "Ansley Jones",
    github: "https://github.com/ansleyjones",
    repos: "https://api.github.com/users/ansleyjones/repos",
    location: "Charleston, SC",
    followers: 9,
    following: 9
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/8238249?v=2",
    name: "Cory Figueroa",
    github: "https://github.com/CTFigueroa",
    repos: "https://api.github.com/users/CTFigueroa/repos",
    location: "Charleston, SC",
    followers: 7,
    following: 8
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/7594485?v=2",
    name: "Susie Starkman",
    github: "https://github.com/scstarkman",
    repos: "https://api.github.com/users/scstarkman/repos",
    location: "Charleston, SC",
    followers: 4,
    following: 8
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/6947446?v=2",
    name: "Brendan Quinn",
    github: "https://github.com/Mathdrquinn",
    repos: "https://api.github.com/users/Mathdrquinn/repos",
    location: "Charleston, SC",
    followers: 6,
    following: 4
  }

];

var templateFunction = function(arr, $myTarget) {
  var fragment = "";
  for(var i=0; i <arr.length; i++) {

    fragment += "<div class=\"profileCard\">"
      + "<a href=\"" + arr[i].github + "\">" + "<img src=\"" + arr[i].avatar + "\" alt=\"\">" + "</a>"
      + "<h3>" +arr[i].name +"</h3>"
      + "<ul>"
      + "<li>" + "<a href=\"" + arr[i].repos + "\">" + arr[i].name + "'s Repos" + "</a>" + "</li>"
      + "<li>" + "Location: " + arr[i].location + "</li>"
      + "<li>" + "Followers: " + arr[i].followers + "</li>"
      + "<li>" + "Following: " + arr[i].following + "</li>"
      + "</ul>"
      + "</div>";

  }
  $myTarget.append(fragment);
};

templateFunction(myArray, $(".container"));


});
