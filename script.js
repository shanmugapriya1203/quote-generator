const quoteContainer=document.getElementById('quote-container')
const quoteText=document.getElementById('quote')
const authorText=document.getElementById('author')
const twittterBtn=document.getElementById('twitter')
const newQuoteBtn=document.getElementById('new-quote')
const loader=document.getElementById('loader');


// Get QUOTES from api
let apiQuotes=[];
//Show loading
function Loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}
//Hide Loading
function complete(){
    quoteContainer.hidden=false;
    loader.hidden=true;
}
//Show new Quote

function newQuote(){
    Loading();
    //Pick a random quote from apiquotes
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
if(!quote.author){
    authorText.textContent="Unknown"
}
else{
    authorText.textContent=quote.author;
}
//Ceck Quote lengt to determine styling
if(quote.text.length>120){
    quoteText.classList.add('long-quote');
}else{
    quoteText.classList.remove("long-quote")
}
//set quote,Hide Loader
  quoteText.textContent=quote.text;
  complete();
}
async function getQuotes(){
     Loading();
    const apiUrl='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
const response=await fetch(apiUrl);
apiQuotes=await response.json();
newQuote();
    }
    catch(error){
           //Catch Error Here

    }
}
//Tweet  Quote
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}

//Event Listener
newQuoteBtn.addEventListener('click',newQuote);
twittterBtn.addEventListener('click',tweetQuote);
getQuotes();
