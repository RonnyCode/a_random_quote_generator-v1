/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

var quotes = [
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas Alva Edison",
    tags: "Technology"
  },
  {
    quote: "I never left the field saying I could have done more to get ready and that gives me peace of mind.",
    source: "Peyton Manning",
    tags: "Sports"
  },
  {
    quote: "The music is not in the notes, but in the silence between.",
    source: "Wolfgang Amadeus Mozart",
    tags: "Music"
  },
  {
    quote: "Without commitment, you'll never start, but more importantly, without consistency, you'll never finish.",
    source: "Denzel Washington",
    tags: "Entertainment",
    year: '2017'
  },
  {
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
    source: "Steve Jobs",
    tags: "Technology",
    year: '2005'
    
  },
]




/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

//This function grabs a random quote from the object located in the array stated above.//
function getRandomQuote(array) {


  var randomNumber = Math.floor( Math.random() * quotes.length) ;
  randomNumber = quotes[randomNumber]; 
  
  return randomNumber;
}



/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  var sendQuote = getRandomQuote(); 
  var html = "<p class=quote>" + sendQuote.quote + "</p>";
  html += "<p class=quote>" + sendQuote.source + "</p>";
  html += '<span class="citation">' + sendQuote.tags + "</span>";
  html += '</p>'
  if ( sendQuote.year ) {
    html += '<span class="year">' + sendQuote.year + '</span>'
    }
    document.getElementById('quote-box').innerHTML = html;
    return html;
}


  










/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

