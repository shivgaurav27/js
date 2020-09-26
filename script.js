const quoteConerator = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

// show loading

function loading(){
    loader.hidden = false;
    quoteConerator.hidden=true;
}

// hide loading 

function complete(){
    if(!loader.hidden){
        quoteConerator.hidden=false;
        loader.hidden=true;
    }
}

// get Quote from API
async function getQuote(){
    loading();
    const proxyUrl='https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch( proxyUrl + apiUrl);
        const data = await response.json();
        // if author is blank , add unknown
        if(data.quoteAuthor===""){
            authorText.innerText="Uknown"
        }else{
            authorText.innerText=data.quoteAuthor;

        }

        // reduce font size for long Quotes
        if(data.quoteText.length>50){
            quoteText.classList.add('long-quote');
        }else{
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText=data.quoteText;
        // stop loader and show quote
        complete();
    } catch (error) {
        getQuote();
    }
}

//  twitter function 
function tweetQuote(){
    const quote= quoteText.innerText;
    const author=authorText.innerText;
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quote}-${author}`
    window.open(twitterUrl,'_blank');
}

// event listen 
    newQuoteBtn.addEventListener('click',getQuote);
    twitterBtn.addEventListener('click',tweetQuote)


getQuote();

