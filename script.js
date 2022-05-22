let btn = document.getElementById('btn')
let output = document.getElementById('output')

let bookList = ['Queen Unseen', 'The Island of Missing Trees', 'The Martian', 'Butterflies In November', 'Red Dragon', 'Do No Harm', 'The Hunting Party', 'The Guest List', 'The Lost Apothecary'];

btn.addEventListener('click', function(){
    let bookToRead = bookList[Math.floor(Math.random()*bookList.length)];
    output.innerHTML = bookToRead;
})