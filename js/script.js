/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/
// Array of quote objects that includes different properties.
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
let quotes = [{
	quote: "I have not failed. I've just found 10,000 ways that won't work.",
	source: "Thomas Alva Edison",
	tags: "Technology"
}, {
	quote: "I never left the field saying I could have done more to get ready and that gives me peace of mind.",
	source: "Peyton Manning",
	tags: "Sports"
}, {
	quote: "The music is not in the notes, but in the silence between.",
	source: "Wolfgang Amadeus Mozart",
	tags: "Music"
}, {
	quote: "Without commitment, you'll never start, but more importantly, without consistency, you'll never finish.",
	source: "Denzel Washington",
	tags: "Entertainment",
	year: '2017'
}, {
	quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
	source: "Steve Jobs",
	tags: "Technology",
	year: '2005'
}, ]
//This function uses a random number to return a random quote from the array of quote objects. 
function getRandomQuote(array) {
	let randomNumber = Math.floor(Math.random() * quotes.length);
	randomNumber = quotes[randomNumber];
	return randomNumber;
}
//Function stated below prints the quote/object-properties to the HTML page by targeting DOM elements.
function printQuote() {
	let sendQuote = getRandomQuote();
	let html = '<p class="quote">' + sendQuote.quote + "</p>";
	html += '<p class="source">' + sendQuote.source;
	html += '<span class="citation">' + sendQuote.tags + "</span>";
	if (sendQuote.year) {
		html += '<span class="year">' + sendQuote.year + '</span>';
		html += '</p>';
	}
	document.getElementById('quote-box').innerHTML = html;
	return html;
}
setInterval(printQuote, 20000);
//Calls the 'printQuote' function to display a random quote when the button "Show Another Quote" is clicked.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 16)];
	}
	document.body.style.backgroundColor = color;
	return color;
}
//Refreshes the random color ever 20 seconds.
setInterval(getRandomColor, 20000);
//Calls 'getRandomColor' function to display a random color to the page when the button "Show Another Quote" is clicked.
document.getElementById('loadQuote').addEventListener("click", getRandomColor, false);