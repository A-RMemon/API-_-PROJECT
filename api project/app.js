let endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';


function getQuote (){
fetch(endpoint)
.then(function(response){
    return response.json();
})
.then(function(data){
    displayquotes(data.message);
})
.catch(function(){
    console.log('an error occurred')
})
}

function displayquotes (quote){
    let quotetext = document.querySelector('.quote-text');
    quotetext.textContent= quote
}
let newQuotebutton = document.querySelector('.new-quote');

newQuotebutton.addEventListener('click',getQuote)
getQuote()
