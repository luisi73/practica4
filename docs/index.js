
const breakingBad_url='https://breaking-bad-quotes.herokuapp.com/v1/quotes'
async function getBreakingBadData () {
    const response = await fetch(breakingBad_url);
    const data=await response.json();
    const {author, quote} = data[0];

    document.getElementById('autor').textContent=author;
    document.getElementById('frase').textContent=quote;
}

getBreakingBadData();