class Greeter {
  constructor (public message: string) {}
  greet() {
    return "Hello, " + this.message;
  }
}


var greeters: Greeter[] = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter('how are you?'));
greeters.push(new Greeter('hello!'));
console.log(greeters);
// Different for loop syntax - note this is reversed from PHP
for(var greeter of greeters) {
  alert(greeter.greet());
}
