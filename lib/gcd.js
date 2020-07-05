
/*
* gcd(a,b) will returns greatest common divisor of a and b (i.e the maximum positive number that divides both a and b)
*/

function gcd(a,b){
	return (b == 1 ? a : gcd(b, a%b))
}

module.exports = gcd
