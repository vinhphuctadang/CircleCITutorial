
/*
* gcd(a,b) will returns greatest common divisor of a and b (i.e the maximum positive number that divides both a and b)
*/

function gcd(a,b){
	while (b != 0) {
		r = a % b
		a = b 
		b = r 
	}
	return a
}

module.exports = gcd
