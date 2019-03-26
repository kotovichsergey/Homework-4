let americanStates = { 
	"AL": "Alabama",
	"AK": "Alaska",
	"AS": "American Samoa",
	"AZ": "Arizona",
	"AR": "Arkansas",
	"CA": "California",
	"CO": "Colorado",
	"CT": "Connecticut",
	"DE": "Delaware"
},
transfromObject = function (obj) {
    let answer = {};
    for (key in obj) {
      answer[obj[key]] = key;
    }
    return answer;
};
console.log(americanStates);
console.log(transfromObject(americanStates));
