const gcd = require('../lib/gcd')
const assert = require('assert')

// to clarify what is going on, I will use dictionary for 'cases'
const cases = [
	{
		a: 10,
		b: 5, 
		result: 5, 
	},
	{
		a: 100,
		b: 29,
		result: 1,
	}, 
	{
		a: 1000,
		b: 520, 
		result: 40,
	},
	{
		a: 1321230,
		b: 123482,
		result: 2,
	},
	{
		a: 1321230,
		b: 5555555,
		result: 5,
	},
	{
		a: 1000000,
		b: 0,
		result: 1000000,
	},
	{
		a: 0,
		b: 21489,
		result: 21489,
	},
]

describe('Test gcd result', ()=>{
	for(let i = 0; i < cases.length; i++) {
		it(`should return ${cases[i].result} as a result of gcd(${cases[i].a},${cases[i].b})`, ()=>{
			let {a, b, result} = cases[i]
			let tmp = gcd(a, b)
			assert.equal(tmp, result)
		})
	}
})
