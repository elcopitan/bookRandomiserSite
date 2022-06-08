let btn = document.getElementById('btn')
let output = document.getElementById('output')

let bookList = [
    ["My Sister, the Serial Killer", "  Oyinkan Braithwaite"],

    ["Queen Unseen", "  Peter Hince"],

    ["Hotel Magnifique", "  Emily J. Taylor"],

    ["Dial A for Aunties (Aunties #1)", "  Jesse Q. Sutanto"],

    ["Red, White & Royal Blue", "  Casey McQuiston"],

    ["Survive the Night", "  Riley Sager"],

    ["The Lost Apothecary", "  Sarah Penner"],

    ["The Paper Palace", "  Miranda Cowley Heller"],
    ["The Hunger Games (The Hunger Games, #1)", " Suzanne Collins"],
    ["All Our Hidden Gifts (All Our Hidden Gifts, #1)", " Caroline O'Donoghue"],
    ["Quicksand of Memory", " Michael J. Malone"],
    ["The Power", " Naomi Alderman"],
    ["Butterflies in November", " Auður Ava Ólafsdóttir"],
    ["Islands of Abandonment", " Cal Flyn"],
    ["Dopesick: Dealers, Doctors and the Drug Company that Addicted America", " Beth Macy"],
    ["My Year of Rest and Relaxation", " Ottessa Moshfegh"],
    ["The Loop (The Loop Trilogy #1)", " Ben  Oliver"],
    ["Luckenbooth", "  Jenni Fagan"
    ],
    [
        "For Your Own Good", " Samantha Downing"
    ],
    [
        "When the Stars Go Dark", " Paula McLain"
    ],
    [
        "Billy Summers", " Stephen King"
    ],
    [
        "Severance", " Ling Ma"
    ],
    [
        "Saint X", " Alexis Schaitkin"
    ],
    [
        "The Grace Year", " Kim Liggett"
    ],
    [
        "Akin", " Emma Donoghue"
    ],
    [
        "Things We Didn't Talk About When I Was a Girl: A Memoir", " Jeannie Vanasco"
    ],
    [
        "The White Album", " Joan Didion"
    ],
    [
        "After Dark", " Haruki Murakami"
    ],
    [
        "1Q84 (1Q84 #1-3)", " Haruki Murakami"
    ],
    [
        "Norwegian Wood", " Haruki Murakami"
    ],
    [
        "My Policeman", " Bethan Roberts"
    ],
    [
        "On Bowie", " Rob Sheffield"
    ],
    [
        "Talking to Girls about Duran Duran: One Young Man's Quest for True Love and a Cooler Haircut", " Rob Sheffield"
    ],
    [
        "The Substitution Order", " Martin Clark"
    ],
    [
        "State of Terror", " Hillary Rodham Clinton"
    ],
    [
        "Space Opera", " Catherynne M. Valente"
    ],
    [
        "Several People Are Typing", " Calvin Kasulke"
    ],
    [
        "Love Is a Mix Tape: Life and Loss, One Song at a Time", " Rob Sheffield"
    ],
    [
        "The Survivors", " Jane Harper"
    ],
    [
        "Open Water", " Caleb Azumah Nelson"
    ],
    [
        "Uncanny Valley: A Memoir", " Anna Wiener"
    ],
    [
        "Midnight in Chernobyl: The Untold Story of the World's Greatest Nuclear Disaster", " Adam Higginbotham"
    ],
    [
        "All-American Murder: The Rise and Fall of Aaron Hernandez, the Superstar Whose Life Ended on Murderers' Row", " James Patterson"
    ],
    [
        "My Life as a Goddess: A Memoir through (Un)Popular Culture", " Guy Branum"
    ],
    [
        "The Perfect Predator: A Scientist's Race to Save Her Husband from a Deadly Superbug: A Memoir", " Steffanie Strathdee"
    ],
    [
        "A Woman of No Importance: The Untold Story of the American Spy Who Helped Win World War II", " Sonia Purnell"
    ],
    [
        "Say Nothing: A True Story of Murder and Memory in Northern Ireland", " Patrick Radden Keefe"
    ],
    [
        "Prognosis: A Memoir of My Brain", " Sarah Vallance"
    ],
    [
        "Me", " Elton John"
    ],
    [
        "Blowout: Corrupted Democracy, Rogue State Russia, and the Richest, Most Destructive Industry on Earth", " Rachel Maddow"
    ],
    [
        "Embrace Your Weird: Face Your Fears and Unleash Creativity", " Felicia Day"
    ],
    [
        "The Witches Are Coming", " Lindy West"
    ],
    [
        "Maybe You Should Talk to Someone: A Therapist, Her Therapist, and Our Lives Revealed", " Lori Gottlieb"
    ],
    [
        "Stay Sexy & Don't Get Murdered: The Definitive How-To Guide", " Karen Kilgariff"
    ],
    [
        "No Filter: The Inside Story of Instagram", " Sarah Frier"
    ],
    [
        "Greenlights", " Matthew McConaughey"
    ],
    [
        "Don't Overthink It: Make Easier Decisions, Stop Second-Guessing, and Bring More Joy to Your Life", " Anne Bogel"
    ],
    [
        "Clanlands: Whisky, Warfare, and a Scottish Adventure Like No Other", " Sam Heughan"
    ],
    [
        "Robin", " Dave Itzkoff"
    ],
    [
        "Becoming", " Michelle Obama"
    ],
    [
        "The Monk of Mokha", " Dave Eggers"
    ],
    [
        "God Save Texas: A Journey Into the Soul of the Lone Star State", " Lawrence Wright"
    ],
    [
        "The Space Barons: Elon Musk, Jeff Bezos, and the Quest to Colonize the Cosmos", " Christian Davenport"
    ],
    [
        "Inferior: How Science Got Women Wrong—and the New Research That's Rewriting the Story", " Angela Saini"
    ],
    [
        "The Radium Girls: The Dark Story of America's Shining Women", " Kate  Moore"
    ],
    [
        "My Lovely Wife in the Psych Ward", " Mark Lukach"
    ],
    [
        "Get Well Soon: History's Worst Plagues and the Heroes Who Fought Them", " Jennifer   Wright"
    ],
    [
        "Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness", " Peter Godfrey-Smith"
    ],
    [
        "A Mother's Reckoning: Living in the Aftermath of Tragedy", " Sue Klebold"
    ],
    [
        "Rise of the Rocket Girls: The Women Who Propelled Us, from Missiles to the Moon to Mars", " Nathalia Holt"
    ],
    [
        "The Romanovs: 1613-1918", " Simon Sebag Montefiore"
    ],
    [
        "Hidden Figures", " Margot Lee Shetterly"
    ],
    [
        "M Train", " Patti Smith"
    ],
    [
        "Girl in a Band", " Kim Gordon"
    ],
    [
        "The Witches: Salem, 1692", " Stacy Schiff"
    ],
    [
        "A Kim Jong-Il Production: The Extraordinary True Story of a Kidnapped Filmmaker, His Star Actress, and a Young Dictator's Rise to Power", " Paul   Fischer"
    ],
    [
        "On the Move: A Life", " Oliver Sacks"
    ],
    [
        "Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration", " Ed Catmull"
    ],
    [
        "The World's Strongest Librarian: A Memoir of Tourette's, Faith, Strength, and the Power of Family", " Josh Hanagarne"
    ],
    [
        "The Nineties", " Chuck Klosterman"
    ],
    [
        "Extreme North: A Cultural History", " Bernd Brunner"
    ],
    [
        "Funny Farm: My Unexpected Life with 600 Rescue Animals", " Laurie Zaleski"
    ],
    [
        "Secrets of the Sprakkar: Iceland's Extraordinary Women and How They Are Changing the World", " Eliza  Reid"
    ],
    [
        "It Ended Badly: Thirteen of the Worst Breakups in History", " Jennifer   Wright"
    ],
    [
        "Between Two Kingdoms: A Memoir of a Life Interrupted", " Suleika Jaouad"
    ],
    [
        "One Night in Miami", " Kemp Powers"
    ],
    [
        "The Year of Living Danishly: My Twelve Months Unearthing the Secrets of the World's Happiest Country",
        "Helen Russell"
    ],
    [
        "The Almost Nearly Perfect People: Behind the Myth of the Scandinavian Utopia", " Michael Booth"
    ],
    [
        "Watching Neighbours Twice a Day...: How 90s TV (Almost) Prepared Me For Life", " Josh Widdicombe"
    ],
    [
        "Dent's Modern Tribes: The Secret Languages of Britain", " Susie Dent"
    ],
    [
        "Swiss Watching: Inside Europe's Landlocked Island", " Diccon Bewes"
    ],
    [
        "The Secret Life of Salvador Dalí", " Salvador Dalí"
    ],
    [
        "Sapiens: A Brief History of Humankind", " Yuval Noah Harari"
    ],
    [
        "Guns, Germs, and Steel: The Fates of Human Societies", " Jared Diamond"
    ],
    [
        "Collapse: How Societies Choose to Fail or Succeed", " Jared Diamond"
    ],
    [
        "The Diary of a Bookseller (Diary of a Bookseller, #1)", " Shaun Bythell"
    ],
    [
        "The Making of Jane Austen", " Devoney Looser"
    ],
    [
        "All the Young Men", " Ruth Coker Burks"
    ],
    [
        "Into the Woods: A Five Act Journey Into Story", " John Yorke"
    ],
    [
        "Nomadland: Surviving America in the Twenty-First Century", " Jessica Bruder"
    ],
    [
        "Born to Run", " Bruce Springsteen"
    ],
    [
        "Because Internet: Understanding the New Rules of Language", " Gretchen McCulloch"
    ],
    [
        "Burnout: The Secret to Unlocking the Stress Cycle", " Emily Nagoski"
    ],
    [
        "Digital Minimalism: Choosing a Focused Life in a Noisy World", " Cal Newport"
    ],
    [
        "Will My Cat Eat My Eyeballs? Big Questions from Tiny Mortals About Death", " Caitlin Doughty"
    ],
    [
        "Dead Famous: An Unexpected History of Celebrity from Bronze Age to Silver Screen", " Greg  Jenner"
    ],
    [
        "Crying in H Mart", " Michelle Zauner"
    ],
    [
        "Cultish: The Language of Fanaticism", " Amanda Montell"
    ],
    [
        "Empire of Pain: The Secret History of the Sackler Dynasty", " Patrick Radden Keefe"
    ],
    [
        "The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race", " Walter Isaacson"
    ],
    [
        "Vanderbilt: The Rise and Fall of an American Dynasty", " Anderson Cooper"
    ],
    [
        "Come Fly the World: The Jet-Age Story of the Women of Pan Am", " Julia  Cooke"
    ],
    [
        "The Doctors Blackwell: How Two Pioneering Sisters Brought Medicine to Women and Women to Medicine", " Janice P. Nimura"
    ],
    [
        "The Bomber Mafia: A Dream, a Temptation, and the Longest Night of the Second World War", " Malcolm Gladwell"
    ],
    [
        "My Dark Vanessa", " Kate Elizabeth Russell"
    ],
    [
        "Crisis in the Red Zone: The Story of the Deadliest Ebola Outbreak in History, and of the Outbreaks to Come", " Richard   Preston"
    ],
    [
        "Invisible Women: Data Bias in a World Designed for Men", " Caroline Criado Pérez"
    ],
    [
        "The Only Plane in the Sky: An Oral History of 9/11", " Garrett M. Graff"
    ],
    [
        "American Predator: The Hunt for the Most Meticulous Serial Killer of the 21st Century", " Maureen Callahan"
    ],
    [
        "The Institute", " Stephen King"
    ],
    [
        "The Starless Sea", " Erin Morgenstern"
    ],
    [
        "Countdown 1945: The Extraordinary Story of the 116 Days that Changed the World", " Chris Wallace"
    ],
    [
        "If It Bleeds", " Stephen King"
    ],
    [
        "Agency", " William Gibson"
    ],
    [
        "The Space Between Worlds", " Micaiah Johnson"
    ],
    [
        "Shuggie Bain", " Douglas Stuart"
    ],
    [
        "Utopia Avenue", " David Mitchell"
    ],
    [
        "The Vanishing Half", " Brit Bennett"
    ],
    [
        "A Slow Fire Burning", " Paula Hawkins"
    ],
    [
        "Local Woman Missing", " Mary Kubica"
    ],
    [
        "Arsenic and Adobo (Tita Rosie's Kitchen Mystery, #1)", " Mia P. Manansala"
    ],
    [
        "Cloud Cuckoo Land", " Anthony Doerr"
    ],
    [
        "The Book of Accidents", " Chuck Wendig"
    ],
    [
        "Termination Shock", " Neal Stephenson"
    ],
    [
        "The End of Men", " Christina Sweeney-Baird"
    ],
    [
        "Neon Gods (Dark Olympus, #1)", " Katee Robert"
    ],
    [
        "The Spanish Love Deception", " Elena Armas"
    ],
    [
        "Neuromancer (Sprawl, #1)", " William Gibson"
    ],
    [
        "Snow Crash", " Neal Stephenson"
    ],
    [
        "Brave New World", " Aldous Huxley"
    ],
    [
        "11/22/63", " Stephen King"
    ],
    [
        "The Guest List", " Lucy Foley"
    ],
    [
        "There's No Such Thing as an Easy Job", " Kikuko Tsumura"
    ],
    [
        "Slaughterhouse-Five", " Kurt Vonnegut Jr."
    ],
    [
        "Mythos: The Greek Myths Retold (Stephen Fry's Great Mythology, #1)", " Stephen Fry"
    ],
    [
        "Vagabonds", " Hao Jingfang"
    ],
    [
        "Ice Crash: Antarctica", " Lynda Engler"
    ],
    [
        "Hide", " Kiersten White"
    ],
    [
        "A Brush with Love", " Mazey Eddings"
    ],
    [
        "Meet Me in the Margins", " Melissa Ferguson"
    ],
    [
        "A Pho Love Story", " Loan Le"
    ],
    [
        "Run Rose Run", " Dolly Parton"
    ],
    [
        "A Moveable Feast: The Restored Edition", " Ernest Hemingway"
    ],
    [
        "Packing for Mars: The Curious Science of Life in the Void", " Mary Roach"
    ],
    [
        "Malibu Rising", " Taylor Jenkins Reid"
    ],
    [
        "On Writing: A Memoir of the Craft", " Stephen King"
    ],
    [
        "Nightmare Scenario: Inside the Trump Administration's Response to the Pandemic That Changed History", " Yasmeen Abutaleb"
    ],
    [
        "Midnight in Washington: How We Almost Lost Our Democracy and Still Could", " Adam Schiff"
    ],
    [
        "Circe", " Madeline Miller"
    ],
    [
        "The Love Hypothesis", " Ali Hazelwood"
    ],
    [
        "Devolution: A Firsthand Account of the Rainier Sasquatch Massacre", " Max Brooks"
    ],
    [
        "The President's Daughter", " Bill Clinton"
    ],
    [
        "I Alone Can Fix It: Donald J. Trump's Catastrophic Final Year", " Carol Leonnig"
    ],
    [
        "Red Rising (Red Rising Saga, #1)", " Pierce Brown"
    ],
    [
        "No One Is Talking About This", " Patricia Lockwood"
    ],
    [
        "Recursion", " Blake Crouch"
    ],
    [
        "Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch", " Terry Pratchett"
    ],
    [
        "1984", " George Orwell"
    ],
    [
        "The Martian", " Andy Weir"
    ],
    [
        "Dark Matter", " Blake Crouch"
    ],
    [
        "Project Hail Mary", " Andy Weir"
    ],
    [
        "Convenience Store Woman", " Sayaka Murata"
    ],
    [
        "Falling", " T.J. Newman"
    ],
    [
        "Harry Potter and the Philosopher's Stone", " J.K. Rowling"
    ],
    [
        "Daisy Jones & The Six", " Taylor Jenkins Reid"
    ],
    [
        "The Memory Police", " Yōko Ogawa"
    ],
    [
        "Miss Iceland", " Auður Ava Ólafsdóttir"
    ],
    [
        "The Seven Husbands of Evelyn Hugo", " Taylor Jenkins Reid"
    ],
    [
        "Outlawed", " Anna North"
    ],
    [
        "In Order to Live: A North Korean Girl's Journey to Freedom", " Yeonmi Park"
    ],
    [
        "Klara and the Sun", " Kazuo Ishiguro"
    ],
    [
        "The Night Circus", " Erin Morgenstern"
    ],
    [
        "The Silent Patient", " Alex Michaelides"
    ],
    [
        "Before the Coffee Gets Cold (Before the Coffee Gets Cold, #1)", " Toshikazu Kawaguchi"
    ],
    [
        "Kim Jiyoung, Born 1982", " Cho Nam-Joo"
    ],
    [
        "Mrs England", " Stacey Halls"
    ],
    [
        "Escape from Earth: A Secret History of the Space Rocket", " Fraser MacDonald"
    ],
    [
        "Skin of the Sea (Skin of the Sea #1)", " Natasha Bowen"
    ],
    [
        "Speak Your Truth: Connecting With Your Inner Truth and Learning to Find Your Voice", " Fearne Cotton"
    ],
    [
        "Piranesi", " Susanna Clarke"
    ],
    [
        "Ace of Spades", " Faridah Àbíké-Íyímídé"
    ],
    [
        "The Lighthouse Witches", " C.J.  Cooke"
    ],
    [
        "Norse Mythology", " Neil Gaiman"
    ],
    [
        "Hercule Poirot's Christmas (Hercule Poirot, #20)", " Agatha Christie"
    ],
    [
        "The Maidens", " Alex Michaelides"
    ],
    [
        "The Midnight Library", " Matt Haig"
    ],
    [
        "The Heart Principle (The Kiss Quotient, #3)", " Helen Hoang"
    ],
    [
        "The Invisible Life of Addie LaRue", " V.E. Schwab"
    ],
    [
        "Earthlings", " Sayaka Murata"
    ],
    [
        "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy, #1)", " Douglas Adams"
    ],
    [
        "Silicon Values: The Future of Free Speech Under Surveillance Capitalism", " Jillian York"
    ],
    [
        "The Devil All the Time", " Donald Ray Pollock"
    ],
    [
        "Annihilation", " Jeff VanderMeer"
    ],
    [
        "Fahrenheit 451", " Ray Bradbury"
    ],
    [
        "Filth", " Irvine Welsh"
    ],
    [
        "BOX 88 (BOX 88, #1)", " Charles Cumming"
    ],
    [
        "Pines (Wayward Pines, #1)", " Blake Crouch"
    ],
    [
        "The Last Town (Wayward Pines, #3)", " Blake Crouch"
    ],
    [
        "The End of October", " Lawrence Wright"
    ],
    [
        "The Innovators by Walter Isaacson | Conversation Starters", " Daily Books"
    ],
    [
        "Steve Jobs: A Biographic Portrait of the Genius of", " Kevin Lynch"
    ],
    [
        "Everything You Really Need to Know About Politics: My Life as an MP", " Jess Phillips"
    ],
    [
        "The Plague Year: America in the Time of Covid", " Lawrence Wright"
    ],
    [
        "Checkpoint Charlie: The Cold War, The Berlin Wall, and the Most Dangerous Place On Earth", " Iain MacGregor"
    ],
    [
        "Doctor Sleep", " Stephen King"
    ],
    [
        "The Shining", " Stephen King"
    ],
    [
        "The Ministry for the Future", " Kim Stanley Robinson"
    ],
    [
        "14 (Threshold, #1)", " Peter Clines"
    ],
    [
        "Defending Jacob", " William Landay"
    ],
    [
        "Year Zero", " Rob Reid"
    ],
    [
        "We Are Legion (We Are Bob) (Bobiverse, #1)", " Dennis E. Taylor"
    ],
    [
        "An Astronaut's Guide to Life on Earth", " Chris Hadfield"
    ],
    [
        "Red Mars (Mars Trilogy, #1)", " Kim Stanley Robinson"
    ],
    [
        "Pet Sematary", " Stephen King"
    ],
    [
        "The Girl with All the Gifts (The Girl with All the Gifts, #1)", " M.R. Carey"
    ],
    [
        "The Three-Body Problem (Remembrance of Earth’s Past #1)", " Liu Cixin"
    ],
    [
        "Ethel Rosenberg: An American Tragedy", " Anne Sebba"
    ],
    [
        "The Man in the High Castle", " Philip K. Dick"
    ],
    [
        "Leviathan Wakes (The Expanse, #1)", " James S.A. Corey"
    ],
    [
        "Ready Player One", " Ernest Cline"
    ],
    [
        "This Is a Call: The Life and Times of Dave Grohl", " Paul Brannigan"
    ],
    [
        "Red Dragon (Hannibal Lecter, #1)", " Thomas  Harris"
    ],
    [
        "Dune", " Frank Herbert"
    ],
    [
        "Artemis", " Andy Weir"
    ]
];


btn.addEventListener('click', function (){
    let bookToRead = bookList[Math.floor(Math.random() * bookList.length)];
    output.innerHTML = bookToRead;
})