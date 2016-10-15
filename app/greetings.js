var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.message;
    };
    return Greeter;
}());
var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter('how are you?'));
greeters.push(new Greeter('hello!'));
console.log(greeters);
// Different for loop syntax - note this is reversed from PHP
for (var _i = 0, greeters_1 = greeters; _i < greeters_1.length; _i++) {
    var greeter = greeters_1[_i];
    alert(greeter.greet());
}
