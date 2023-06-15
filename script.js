// Setting an empty array to store quotes
let likedQuotes = [];

// Creating an array containing the quotes we're going to be displaying
const quotes = [
  {
    quote: `“The difference between the impossible and the possible lies in determination.”`,
    author: `Usain Bolt`
  },
  {
    quote: `“Great moments are born from great opportunities.”`,
    author: `Herb Brooks`
  },
  { quote: `“There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you do.”`,
 author : `Derek Jeter`},

{ quote :`“You cannot escape the responsibility of tomorrow by evading it today.”`,
author : `Abraham Lincoln`
},

{ quote :`“Ninety-nine percent of failures come from people who make excuses.”`,
author :`George Washington`
},

{ quote : `“Be the change you wish to see in the world.”`,
author : `Mahatma Gandhi`
},

{ quote : `“Don’t risk what is important to you to get something which isn’t important to you.”`,
author : `Warren Buffett`
},
];

// Function to generate a random quote
function generateQuote() {
  let index = Math.floor(Math.random() * quotes.length);
  let quoteElement = document.getElementById('quote');
  let authorElement = document.querySelector('.author');

  quoteElement.innerText = quotes[index].quote;
  authorElement.innerText = quotes[index].author;
}

// Event listener for generate button
document.getElementById('new').addEventListener('click', generateQuote);

// Event listener for the "Like" button
document.getElementById('fav').addEventListener('click', likeQuote);

// Function to add the liked quote to the favorites list
function likeQuote() {
  let quoteElement = document.getElementById('quote');
  let authorElement = document.querySelector('.author');
  let quote = quoteElement.innerText;
  let author = authorElement.innerText;

  // Checking if the quote is already liked
  const isLiked = likedQuotes.some(
    (likedQuote) => likedQuote.quote === quote && likedQuote.author === author
  );

  if (!isLiked) {
    likedQuotes.push({ quote, author });
    alert('Quote added to favorites!');
  }
}

// Event listener for the fav button
document.getElementById('likebtn').addEventListener('click', showLikedQuotes);

// Function to show the liked quotes
function showLikedQuotes() {
  let quoteContainer = document.getElementById('quoteContainer');
  let likedQuotesContainer = document.getElementById('likedQuotesContainer');
  let likedQuotesList = document.getElementById('likedQuotesList');

  // pour cacher the quote container
  quoteContainer.style.display = 'none';
  // Show the liked quotes container
  likedQuotesContainer.style.display = 'block';

  // Clear the previous content of the liked quotes list
  likedQuotesList.innerHTML = '';

  // Create a list item for each liked quote and append it to the liked quotes list
  likedQuotes.forEach((likedQuote) => {
    let listItem = document.createElement('li');
    listItem.innerText = `"${likedQuote.quote}" - ${likedQuote.author}`;
    likedQuotesList.appendChild(listItem);
  });
}