let btn = document.getElementById('btn')
let output = document.getElementById('output')

let bookList = [
    [
        " Aristotle and Dante Discover the Secrets of the Universe (Aristotle and Dante, #1) ",
        " by Benjamin Alire Sáenz ",
        " Rating: 4.35 ",
        " Pages: 384"
    ],
    [
        " The Song of Achilles ",
        " by Madeline Miller ",
        " Rating: 4.4 ",
        " Pages: 378"
    ],
    [
        " The It Girl ",
        " by Ruth Ware ",
        " Rating: 4.02 ",
        " Pages: 432"
    ],
    [
        " Devil's Knot: The True Story of the West Memphis Three (Justice Knot, #1) ",
        " by Mara Leveritt ",
        " Rating: 4.14 ",
        " Pages: 419"
    ],
    [
        " Daisy Darker ",
        " by Alice Feeney ",
        " Rating: 4.12 ",
        " Pages: 352"
    ],
    [
        " Things We Do in the Dark ",
        " by Jennifer Hillier ",
        " Rating: 4.22 ",
        " Pages: 352"
    ],
    [
        " The Icepick Surgeon: Murder, Fraud, Sabotage, Piracy, and Other Dastardly Deeds Perpetrated in the Name of Science ",
        " by Sam Kean ",
        " Rating: 4 ",
        " Pages: 368"
    ],
    [
        " Hooked: How to Build Habit-Forming Products ",
        " by Nir Eyal ",
        " Rating: 4.09 ",
        " Pages: 256"
    ],
    [
        " The Legacy Journey: A Radical View of Biblical Wealth and Generosity ",
        " by Dave Ramsey ",
        " Rating: 4.34 ",
        " Pages: 256"
    ],
    [
        " Pandora's Lab: Seven Stories of Science Gone Wrong ",
        " by Paul A. Offit ",
        " Rating: 4.17 ",
        " Pages: 288"
    ],
    [
        " Either/Or ",
        " by Elif Batuman ",
        " Rating: 4.34 ",
        " Pages: 368"
    ],
    [
        " Delilah Green Doesn't Care (Bright Falls, #1) ",
        " by Ashley Herring Blake ",
        " Rating: 4.26 ",
        " Pages: 384"
    ],
    [
        " She Gets the Girl ",
        " by Rachael Lippincott ",
        " Rating: 4.26 ",
        " Pages: 384"
    ],
    [
        " Sweet Bean Paste ",
        " by Durian Sukegawa ",
        " Rating: 4.07 ",
        " Pages: 213"
    ],
    [
        " Ugly Love ",
        " by Colleen Hoover ",
        " Rating: 4.25 ",
        " Pages: 337"
    ],
    [
        " November 9 ",
        " by Colleen Hoover ",
        " Rating: 4.33 ",
        " Pages: 310"
    ],
    [
        " Verity ",
        " by Colleen Hoover ",
        " Rating: 4.43 ",
        " Pages: 336"
    ],
    [
        " Love Is a Dog from Hell ",
        " by Charles Bukowski ",
        " Rating: 4.05 ",
        " Pages: 312"
    ],
    [
        " Boy Parts ",
        " by Eliza  Clark ",
        " Rating: 4.03 ",
        " Pages: 304"
    ],
    [
        " The Bell Jar ",
        " by Sylvia Plath ",
        " Rating: 4.03 ",
        " Pages: 294"
    ],
    [
        " Just Kids ",
        " by Patti Smith ",
        " Rating: 4.18 ",
        " Pages: 304"
    ],
    [
        " Dreamland: The True Tale of America's Opiate Epidemic ",
        " by Sam Quinones ",
        " Rating: 4.24 ",
        " Pages: 384"
    ],
    [
        " The Bear and the Nightingale (The Winternight Trilogy, #1) ",
        " by Katherine Arden ",
        " Rating: 4.1 ",
        " Pages: 319"
    ],
    [
        " One Last Stop ",
        " by Casey McQuiston ",
        " Rating: 4.04 ",
        " Pages: 418"
    ],
    [
        " I Kissed Shara Wheeler ",
        " by Casey McQuiston ",
        " Rating: 4.24 ",
        " Pages: 356"
    ],
    [
        " Lapvona ",
        " by Ottessa Moshfegh ",
        " Rating: 4.04 ",
        " Pages: 313"
    ],
    [
        " Bad Pharma: How Drug Companies Mislead Doctors and Harm Patients ",
        " by Ben Goldacre ",
        " Rating: 4.1 ",
        " Pages: 448"
    ],
    [
        " The Skies Belong to Us: Love and Terror in the Golden Age of Hijacking ",
        " by Brendan I. Koerner ",
        " Rating: 4.02 ",
        " Pages: 318"
    ],
    [
        " The Unwinding: An Inner History of the New America ",
        " by George Packer ",
        " Rating: 4.13 ",
        " Pages: 448"
    ],
    [
        " One Summer: America, 1927 ",
        " by Bill Bryson ",
        " Rating: 4.08 ",
        " Pages: 456"
    ],
    [
        " Mo' Meta Blues: The World According to Questlove ",
        " by Ahmir Thompson ",
        " Rating: 4.11 ",
        " Pages: 288"
    ],
    [
        " Happy, Happy, Happy: My Life and Legacy as the Duck Commander ",
        " by Phil Robertson ",
        " Rating: 4.06 ",
        " Pages: 224"
    ],
    [
        " Terms of Enlistment ",
        " by Marko Kloos ",
        " Rating: 4.03 ",
        " Pages: 282"
    ],
    [
        " Vicious (Villains, #1) ",
        " by V.E. Schwab ",
        " Rating: 4.23 ",
        " Pages: 368"
    ],
    [
        " Whistling Past the Graveyard ",
        " by Susan Crandall ",
        " Rating: 4.07 ",
        " Pages: 307"
    ],
    [
        " Police (Harry Hole, #10) ",
        " by Jo Nesbø ",
        " Rating: 4.22 ",
        " Pages: 436"
    ],
    [
        " Americanah ",
        " by Chimamanda Ngozi Adichie ",
        " Rating: 4.31 ",
        " Pages: 477"
    ],
    [
        " A Tale for the Time Being ",
        " by Ruth Ozeki ",
        " Rating: 4.03 ",
        " Pages: 432"
    ],
    [
        " The Rosie Project (Don Tillman, #1) ",
        " by Graeme Simsion ",
        " Rating: 4.02 ",
        " Pages: 295"
    ],
    [
        " Orphan Train ",
        " by Christina Baker Kline ",
        " Rating: 4.18 ",
        " Pages: 278"
    ],
    [
        " Me Before You (Me Before You, #1) ",
        " by Jojo Moyes ",
        " Rating: 4.26 ",
        " Pages: 369"
    ],
    [
        " The Storyteller ",
        " by Jodi Picoult ",
        " Rating: 4.27 ",
        " Pages: 461"
    ],
    [
        " Twilight of the Elites: America After Meritocracy ",
        " by Christopher L. Hayes ",
        " Rating: 4 ",
        " Pages: 304"
    ],
    [
        " The Power of Habit: Why We Do What We Do in Life and Business ",
        " by Charles Duhigg ",
        " Rating: 4.12 ",
        " Pages: 375"
    ],
    [
        " Quiet: The Power of Introverts in a World That Can't Stop Talking ",
        " by Susan Cain ",
        " Rating: 4.07 ",
        " Pages: 333"
    ],
    [
        " Killing Kennedy: The End of Camelot (The Killing of Historical Figures) ",
        " by Bill O'Reilly ",
        " Rating: 4.07 ",
        " Pages: 325"
    ],
    [
        " Drift: The Unmooring of American Military Power ",
        " by Rachel Maddow ",
        " Rating: 4.06 ",
        " Pages: 275"
    ],
    [
        " Mrs. Kennedy and Me: An Intimate Memoir ",
        " by Clint Hill ",
        " Rating: 4.21 ",
        " Pages: 343"
    ],
    [
        " Wild: From Lost to Found on the Pacific Crest Trail ",
        " by Cheryl Strayed ",
        " Rating: 4.03 ",
        " Pages: 315"
    ],
    [
        " Seduction and Snacks (Chocolate Lovers, #1) ",
        " by Tara Sivec ",
        " Rating: 4.07 ",
        " Pages: 286"
    ],
    [
        " The First Confessor (The Legend of Magda Searus, #1) ",
        " by Terry Goodkind ",
        " Rating: 4.19 ",
        " Pages: 481"
    ],
    [
        " The Secret Keeper ",
        " by Kate Morton ",
        " Rating: 4.14 ",
        " Pages: 484"
    ],
    [
        " Bring Up the Bodies (Thomas Cromwell, #2) ",
        " by Hilary Mantel ",
        " Rating: 4.25 ",
        " Pages: 412"
    ],
    [
        " The Light Between Oceans ",
        " by M.L. Stedman ",
        " Rating: 4.03 ",
        " Pages: 362"
    ],
    [
        " Gone Girl ",
        " by Gillian Flynn ",
        " Rating: 4.11 ",
        " Pages: 419"
    ],
    [
        " Memoirs of an Imaginary Friend ",
        " by Matthew Dicks ",
        " Rating: 4.13 ",
        " Pages: 311"
    ],
    [
        " Tell the Wolves I'm Home ",
        " by Carol Rifka Brunt ",
        " Rating: 4.03 ",
        " Pages: 360"
    ],
    [
        " Crazy River: Exploration and Folly in East Africa ",
        " by Richard Grant ",
        " Rating: 4.07 ",
        " Pages: 323"
    ],
    [
        " 1861: The Civil War Awakening ",
        " by Adam Goodheart ",
        " Rating: 4.05 ",
        " Pages: 481"
    ],
    [
        " The Eighty-Dollar Champion: Snowman, the Horse That Inspired a Nation ",
        " by Elizabeth Letts ",
        " Rating: 4.21 ",
        " Pages: 329"
    ],
    [
        " Incognito: The Secret Lives of the Brain ",
        " by David Eagleman ",
        " Rating: 4.07 ",
        " Pages: 290"
    ],
    [
        " It Gets Better: Coming Out, Overcoming Bullying, and Creating a Life Worth Living ",
        " by Dan Savage ",
        " Rating: 4.13 ",
        " Pages: 338"
    ],
    [
        " Damn You, Autocorrect!: Awesomely Embarrassing Text Messages You Didn't Mean to Send ",
        " by Jillian Madison ",
        " Rating: 4.01 ",
        " Pages: 279"
    ],
    [
        " The Language of Flowers ",
        " by Vanessa Diffenbaugh ",
        " Rating: 4.09 ",
        " Pages: 323"
    ],
    [
        " Red, White & Royal Blue ",
        " by Casey McQuiston ",
        " Rating: 4.18 ",
        " Pages: 448"
    ],
    [
        " The Hunger Games (The Hunger Games, #1) ",
        " by Suzanne Collins ",
        " Rating: 4.32 ",
        " Pages: 374"
    ],
    [
        " Quicksand of Memory ",
        " by Michael J. Malone ",
        " Rating: 4.55 ",
        " Pages: 300"
    ],
    [
        " Dopesick: Dealers, Doctors and the Drug Company that Addicted America ",
        " by Beth Macy ",
        " Rating: 4.09 ",
        " Pages: null"
    ],
    [
        " The Grace Year ",
        " by Kim Liggett ",
        " Rating: 4.15 ",
        " Pages: 416"
    ],
    [
        " The White Album ",
        " by Joan Didion ",
        " Rating: 4.12 ",
        " Pages: 224"
    ],
    [
        " Norwegian Wood ",
        " by Haruki Murakami ",
        " Rating: 4.03 ",
        " Pages: 296"
    ],
    [
        " My Policeman ",
        " by Bethan Roberts ",
        " Rating: 4.06 ",
        " Pages: 352"
    ],
    [
        " State of Terror ",
        " by Hillary Rodham Clinton ",
        " Rating: 4.14 ",
        " Pages: 495"
    ],
    [
        " My Life as a Goddess: A Memoir through (Un)Popular Culture ",
        " by Guy Branum ",
        " Rating: 4.01 ",
        " Pages: 288"
    ],
    [
        " The Perfect Predator: A Scientist's Race to Save Her Husband from a Deadly Superbug: A Memoir ",
        " by Steffanie Strathdee ",
        " Rating: 4.4 ",
        " Pages: 337"
    ],
    [
        " A Woman of No Importance: The Untold Story of the American Spy Who Helped Win World War II ",
        " by Sonia Purnell ",
        " Rating: 4.12 ",
        " Pages: 352"
    ],
    [
        " Me ",
        " by Elton John ",
        " Rating: 4.31 ",
        " Pages: 374"
    ],
    [
        " Blowout: Corrupted Democracy, Rogue State Russia, and the Richest, Most Destructive Industry on Earth ",
        " by Rachel Maddow ",
        " Rating: 4.35 ",
        " Pages: 406"
    ],
    [
        " The Witches Are Coming ",
        " by Lindy West ",
        " Rating: 4.14 ",
        " Pages: 260"
    ],
    [
        " Maybe You Should Talk to Someone: A Therapist, Her Therapist, and Our Lives Revealed ",
        " by Lori Gottlieb ",
        " Rating: 4.38 ",
        " Pages: 415"
    ],
    [
        " Stay Sexy & Don't Get Murdered: The Definitive How-To Guide ",
        " by Karen Kilgariff ",
        " Rating: 4.09 ",
        " Pages: 300"
    ],
    [
        " No Filter: The Inside Story of Instagram ",
        " by Sarah Frier ",
        " Rating: 4.13 ",
        " Pages: 352"
    ],
    [
        " Greenlights ",
        " by Matthew McConaughey ",
        " Rating: 4.21 ",
        " Pages: 308"
    ],
    [
        " Clanlands: Whisky, Warfare, and a Scottish Adventure Like No Other ",
        " by Sam Heughan ",
        " Rating: 4.09 ",
        " Pages: 297"
    ],
    [
        " The Monk of Mokha ",
        " by Dave Eggers ",
        " Rating: 4.06 ",
        " Pages: 327"
    ],
    [
        " God Save Texas: A Journey Into the Soul of the Lone Star State ",
        " by Lawrence Wright ",
        " Rating: 4 ",
        " Pages: 368"
    ],
    [
        " The Space Barons: Elon Musk, Jeff Bezos, and the Quest to Colonize the Cosmos ",
        " by Christian Davenport ",
        " Rating: 4.13 ",
        " Pages: 320"
    ],
    [
        " Inferior: How Science Got Women Wrong—and the New Research That's Rewriting the Story ",
        " by Angela Saini ",
        " Rating: 4.07 ",
        " Pages: 200"
    ],
    [
        " The Radium Girls: The Dark Story of America's Shining Women ",
        " by Kate  Moore ",
        " Rating: 4.14 ",
        " Pages: 479"
    ],
    [
        " My Lovely Wife in the Psych Ward ",
        " by Mark Lukach ",
        " Rating: 4.09 ",
        " Pages: 305"
    ],
    [
        " Get Well Soon: History's Worst Plagues and the Heroes Who Fought Them ",
        " by Jennifer   Wright ",
        " Rating: 4.25 ",
        " Pages: 336"
    ],
    [
        " A Mother's Reckoning: Living in the Aftermath of Tragedy ",
        " by Sue Klebold ",
        " Rating: 4.12 ",
        " Pages: 305"
    ],
    [
        " A Kim Jong-Il Production: The Extraordinary True Story of a Kidnapped Filmmaker, His Star Actress, and a Young Dictator's Rise to Power ",
        " by Paul   Fischer ",
        " Rating: 4.18 ",
        " Pages: 353"
    ],
    [
        " Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration ",
        " by Ed Catmull ",
        " Rating: 4.21 ",
        " Pages: 368"
    ],
    [
        " Funny Farm: My Unexpected Life with 600 Rescue Animals ",
        " by Laurie Zaleski ",
        " Rating: 4.31 ",
        " Pages: 256"
    ],
    [
        " Between Two Kingdoms: A Memoir of a Life Interrupted ",
        " by Suleika Jaouad ",
        " Rating: 4.43 ",
        " Pages: 352"
    ],
    [
        " The Secret Life of Salvador Dalí ",
        " by Salvador Dalí ",
        " Rating: 4.1 ",
        " Pages: 432"
    ],
    [
        " Guns, Germs, and Steel: The Fates of Human Societies ",
        " by Jared Diamond ",
        " Rating: 4.04 ",
        " Pages: 498"
    ],
    [
        " The Making of Jane Austen ",
        " by Devoney Looser ",
        " Rating: 4.01 ",
        " Pages: 282"
    ],
    [
        " All the Young Men ",
        " by Ruth Coker Burks ",
        " Rating: 4.52 ",
        " Pages: 304"
    ],
    [
        " Into the Woods: A Five Act Journey Into Story ",
        " by John Yorke ",
        " Rating: 4.23 ",
        " Pages: 256"
    ],
    [
        " Nomadland: Surviving America in the Twenty-First Century ",
        " by Jessica Bruder ",
        " Rating: 4.04 ",
        " Pages: 288"
    ],
    [
        " Because Internet: Understanding the New Rules of Language ",
        " by Gretchen McCulloch ",
        " Rating: 4.06 ",
        " Pages: 327"
    ],
    [
        " Burnout: The Secret to Unlocking the Stress Cycle ",
        " by Emily Nagoski ",
        " Rating: 4 ",
        " Pages: 277"
    ],
    [
        " Digital Minimalism: Choosing a Focused Life in a Noisy World ",
        " by Cal Newport ",
        " Rating: 4.07 ",
        " Pages: 284"
    ],
    [
        " Will My Cat Eat My Eyeballs? Big Questions from Tiny Mortals About Death ",
        " by Caitlin Doughty ",
        " Rating: 4.12 ",
        " Pages: 222"
    ],
    [
        " Crying in H Mart ",
        " by Michelle Zauner ",
        " Rating: 4.31 ",
        " Pages: 256"
    ],
    [
        " Cultish: The Language of Fanaticism ",
        " by Amanda Montell ",
        " Rating: 4.04 ",
        " Pages: 310"
    ],
    [
        " The Bomber Mafia: A Dream, a Temptation, and the Longest Night of the Second World War ",
        " by Malcolm Gladwell ",
        " Rating: 4.04 ",
        " Pages: 256"
    ],
    [
        " My Dark Vanessa ",
        " by Kate Elizabeth Russell ",
        " Rating: 4.07 ",
        " Pages: 373"
    ],
    [
        " Crisis in the Red Zone: The Story of the Deadliest Ebola Outbreak in History, and of the Outbreaks to Come ",
        " by Richard   Preston ",
        " Rating: 4.41 ",
        " Pages: 375"
    ],
    [
        " Invisible Women: Data Bias in a World Designed for Men ",
        " by Caroline Criado Pérez ",
        " Rating: 4.37 ",
        " Pages: 411"
    ],
    [
        " The Only Plane in the Sky: An Oral History of 9/11 ",
        " by Garrett M. Graff ",
        " Rating: 4.72 ",
        " Pages: 485"
    ],
    [
        " American Predator: The Hunt for the Most Meticulous Serial Killer of the 21st Century ",
        " by Maureen Callahan ",
        " Rating: 4.09 ",
        " Pages: 285"
    ],
    [
        " Countdown 1945: The Extraordinary Story of the 116 Days that Changed the World ",
        " by Chris Wallace ",
        " Rating: 4.22 ",
        " Pages: 320"
    ],
    [
        " If It Bleeds ",
        " by Stephen King ",
        " Rating: 4.02 ",
        " Pages: 436"
    ],
    [
        " Shuggie Bain ",
        " by Douglas   Stuart ",
        " Rating: 4.33 ",
        " Pages: 430"
    ],
    [
        " The Vanishing Half ",
        " by Brit Bennett ",
        " Rating: 4.19 ",
        " Pages: 343"
    ],
    [
        " Local Woman Missing ",
        " by Mary Kubica ",
        " Rating: 4.12 ",
        " Pages: 352"
    ],
    [
        " The Spanish Love Deception ",
        " by Elena  Armas ",
        " Rating: 4.05 ",
        " Pages: 482"
    ],
    [
        " Slaughterhouse-Five ",
        " by Kurt Vonnegut Jr. ",
        " Rating: 4.09 ",
        " Pages: 275"
    ],
    [
        " Mythos: The Greek Myths Retold (Stephen Fry's Great Mythology, #1) ",
        " by Stephen Fry ",
        " Rating: 4.27 ",
        " Pages: 416"
    ],
    [
        " A Moveable Feast: The Restored Edition ",
        " by Ernest Hemingway ",
        " Rating: 4.02 ",
        " Pages: 236"
    ],
    [
        " Malibu Rising ",
        " by Taylor Jenkins Reid ",
        " Rating: 4.08 ",
        " Pages: 369"
    ],
    [
        " Nightmare Scenario: Inside the Trump Administration's Response to the Pandemic That Changed History ",
        " by Yasmeen Abutaleb ",
        " Rating: 4.31 ",
        " Pages: 496"
    ],
    [
        " Circe ",
        " by Madeline Miller ",
        " Rating: 4.26 ",
        " Pages: 393"
    ],
    [
        " The Love Hypothesis ",
        " by Ali Hazelwood ",
        " Rating: 4.34 ",
        " Pages: 352"
    ],
    [
        " I Alone Can Fix It: Donald J. Trump's Catastrophic Final Year ",
        " by Carol Leonnig ",
        " Rating: 4.41 ",
        " Pages: 476"
    ],
    [
        " Red Rising (Red Rising Saga, #1) ",
        " by Pierce Brown ",
        " Rating: 4.25 ",
        " Pages: 382"
    ],
    [
        " Recursion ",
        " by Blake Crouch ",
        " Rating: 4.15 ",
        " Pages: 329"
    ],
    [
        " Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch ",
        " by Terry Pratchett ",
        " Rating: 4.25 ",
        " Pages: 491"
    ],
    [
        " 1984 ",
        " by George Orwell ",
        " Rating: 4.19 ",
        " Pages: 298"
    ],
    [
        " The Martian ",
        " by Andy Weir ",
        " Rating: 4.41 ",
        " Pages: 384"
    ],
    [
        " Dark Matter ",
        " by Blake Crouch ",
        " Rating: 4.12 ",
        " Pages: 340"
    ],
    [
        " Project Hail Mary ",
        " by Andy Weir ",
        " Rating: 4.52 ",
        " Pages: 476"
    ],
    [
        " Harry Potter and the Philosopher's Stone ",
        " by J.K. Rowling ",
        " Rating: 4.48 ",
        " Pages: 223"
    ],
    [
        " Daisy Jones & The Six ",
        " by Taylor Jenkins Reid ",
        " Rating: 4.24 ",
        " Pages: 355"
    ],
    [
        " The Seven Husbands of Evelyn Hugo ",
        " by Taylor Jenkins Reid ",
        " Rating: 4.48 ",
        " Pages: 389"
    ],
    [
        " In Order to Live: A North Korean Girl's Journey to Freedom ",
        " by Yeonmi Park ",
        " Rating: 4.46 ",
        " Pages: 273"
    ],
    [
        " The Night Circus ",
        " by Erin Morgenstern ",
        " Rating: 4.03 ",
        " Pages: 387"
    ],
    [
        " The Silent Patient ",
        " by Alex Michaelides ",
        " Rating: 4.15 ",
        " Pages: 325"
    ],
    [
        " Mrs England ",
        " by Stacey Halls ",
        " Rating: 4.01 ",
        " Pages: 424"
    ],
    [
        " Piranesi ",
        " by Susanna Clarke ",
        " Rating: 4.27 ",
        " Pages: 245"
    ],
    [
        " Ace of Spades ",
        " by Faridah Àbíké-Íyímídé ",
        " Rating: 4.28 ",
        " Pages: 470"
    ],
    [
        " The Lighthouse Witches ",
        " by C.J.  Cooke ",
        " Rating: 4 ",
        " Pages: 350"
    ],
    [
        " Norse Mythology ",
        " by Neil Gaiman ",
        " Rating: 4.09 ",
        " Pages: 301"
    ],
    [
        " The Midnight Library ",
        " by Matt Haig ",
        " Rating: 4.05 ",
        " Pages: 288"
    ],
    [
        " The Invisible Life of Addie LaRue ",
        " by V.E. Schwab ",
        " Rating: 4.23 ",
        " Pages: 444"
    ],
    [
        " The Devil All the Time ",
        " by Donald Ray Pollock ",
        " Rating: 4.12 ",
        " Pages: 261"
    ],
    [
        " BOX 88 (BOX 88, #1) ",
        " by Charles Cumming ",
        " Rating: 4.07 ",
        " Pages: 482"
    ],
    [
        " The Plague Year: America in the Time of Covid ",
        " by Lawrence Wright ",
        " Rating: 4.13 ",
        " Pages: 336"
    ],
    [
        " We Are Legion (We Are Bob) (Bobiverse, #1) ",
        " by Dennis E. Taylor ",
        " Rating: 4.28 ",
        " Pages: 383"
    ],
    [
        " An Astronaut's Guide to Life on Earth ",
        " by Chris Hadfield ",
        " Rating: 4.15 ",
        " Pages: 295"
    ],
    [
        " The Three-Body Problem (Remembrance of Earth’s Past #1) ",
        " by Liu Cixin ",
        " Rating: 4.07 ",
        " Pages: 399"
    ],
    [
        " Ready Player One ",
        " by Ernest Cline ",
        " Rating: 4.24 ",
        " Pages: 374"
    ],
    [
        " Red Dragon (Hannibal Lecter, #1) ",
        " by Thomas  Harris ",
        " Rating: 4.04 ",
        " Pages: 454"
    ]
];


btn.addEventListener('click', function (){
    let bookToRead = bookList[Math.floor(Math.random() * bookList.length)];
output.innerHTML = bookToRead;
})