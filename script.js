let btn = document.getElementById('btn')
let output = document.getElementById('output')

let bookList = ['Beautiful World, Where Are You by Sally Rooney', 'Dial A For Aunties by Jesse Q Sutanto', 'Once There Were Wolves by Charlotte McConaghy', 'The Paper Palace by Miranda Cowley Heller', 'The Wish by Nicholas Sparks', 'The Guncle by Steven Rowley', 'Detransition Baby by Torrey Peters', 'Golden Girl by Elin Hilderbrand', 'The Reading List by Sara Nisha Adams', 'That Summer by Jennifer Weiner', 'We Are The Brennans by Tracey Lange', 'The One Hundred Years of Lenni and Margot by Marianne Cronin', 'Black Buck by Mateo Askaripour', 'Infinite Country by Patricia Engel', 'The Sentence by Louise Erdich', 'This Close to Okay by Leesa Cross-Smith', 'Bewilderment by Richard Powers', 'Oh William by Elizabeth Strout', 'One Two Three by Laurie Frankel', 'My Sister, The Serial Killer by Oyinkan Braithwaite', 'Queen Unseen: My Life with the Greatest Rock Band of the 20th Century by Peter Hince', 'Hotel Magnifique by Emily J. Taylor', 'Red, White & Royal Blue by Casey McQuiston', 'Survive the Night by Riley Sager',];

btn.addEventListener('click', function(){
    let bookToRead = bookList[Math.floor(Math.random()*bookList.length)];
    output.innerHTML = bookToRead;
})