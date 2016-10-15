var greeting: string = "Hi ";

var peopleHere: string[] = ['Kenna', 'Peter', 'Alexa', 'Jerry', 'Judy'];

for (var i = 0; i < peopleHere.length; i++) {
  document.write("<p>" +  greeting + peopleHere[i] + "! " + "</p>" );
}
