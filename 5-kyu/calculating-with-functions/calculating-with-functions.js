function zero(f) {return !f ? 0 : f(0)}
function one(f) {return !f ? 1 : f(1)}
function two(f) {return !f ? 2 : f(2)}
function three(f) {return !f ? 3 : f(3)}
function four(f) {return !f ? 4 : f(4)}
function five(f) {return !f ? 5 : f(5)}
function six(f) {return !f ? 6 : f(6)}
function seven(f) {return !f ? 7 : f(7)}
function eight(f) {return !f ? 8 : f(8)}
function nine(f) {return !f ? 9 : f(9)}
​
function plus(number_right) {return function (number_left) {return (number_right + number_left)}}
function minus(number_right) {return function (number_left) {return (number_left - number_right)}}
function times(number_right) {return function (number_left) {return (number_left * number_right)}}
function dividedBy(number_right) {return function (number_left) {return (Math.floor(number_left / number_right))}}