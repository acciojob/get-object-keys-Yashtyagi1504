const student = {
  name: "John",
};

function getKeys(student) {
	// return Object.keys(student);
	// console.log(Object.keys(student))
	let arr = [];
	for(let key in student){
		arr.push(key);
	}
	return arr
}

console.log(getKeys(student))

