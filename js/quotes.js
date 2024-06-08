let quotesData = [
  {
    quote:
      "The difference between the almost-right word and the right word is the difference between the ligthning-bug and the lightning.",
    author: "Unknown",
  },
  {
    quote:
      "You don't write because you want to say something. You write because you have something to say",
    author: "F. Scott Fitzgerald",
  },
  {
    quote:
      "There are three rules for writing a novel. Unfortunately, no one knows what they are.",
    author: "W. Somerset Maugham",
  },
  {
    quote:
      "There are three things all wise men fear: the sea in a storm, a night with no moon, and the anger of a gentle man.",
    author: "Patrick Rothfuss",
  },
  {
    quote:
      "The problem with having an open mind is that people will insist on coming along and trying to put things in it.",
    author: "Terry Pratchett",
  },
  {
    quote:
      "Fairytales don't teach children that monsters exist, they already know that monsters exist. Fairy tales teach children that monsters can be killed",
    author: "G. K. Chesterton",
  },
  {
    quote:
      "It is the condition of monsters that they do not perceive themselves as such.",
    author: "Laini Taylor",
  },
  {
    quote:
      "The best lack all conviction, while the worst are full of passionate intensity.",
    author: "William Yeats",
  },
  {
    quote:
      "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "They've promised that dreams can come true - but forgot to mention that nightmares are dreams too.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "In the beginning the Universe was created. This has made a lot of people very angry and has been widely regarded as a bad move.",
    author: "Douglas Adams",
  },
  {
    quote:
      "There are two possibilities: either we are alone in the universe or we are not. Both are equally terrifying.",
    author: "Arthur C. Clarke",
  },
  {
    quote:
      "I was never one to hold grudges, Jeffrey. My father held grudges. I'll always hate him for that.",
    author: "Pierce",
  },
  {
    quote:
      "If you wish to make an apple pie from scratch, you must first invent the universe.",
    author: "Carl Sagan",
  },
  {
    quote: "Now I am become Death, the destroyer of worlds.",
    author: "Unknown",
  },
  {
    quote:
      "I see now that the circumstances of one's birth are irrelevant; it is what you do with the gift of life that determines who you are.",
    author: "Mewtwo",
  },
  {
    quote:
      "Knowledge is knowing that Frankenstein wasn't the monster. Wisdom is knowing that Frankenstein was the monster.",
    author: "Unknown",
  },
  {
    quote: "There is no problem so bad that you can't make it worse.",
    author: "Unknown",
  },
  {
    quote:
      "If they can get you asking the wrong questions, they don't have to worry about answers.",
    author: "Thomas Pynchon",
  },
  {
    quote:
      "Give me six hours to chop a tree, I will spend the first four sharpening my axe.",
    author: "Abraham Lincoln",
  },
  {
    quote: "We judge others by their actions and ourselves by our intentions.",
    author: "Unknown",
  },
  {
    quote:
      "Sometimes you never realize the value of a moment until it becomes a memory",
    author: "Dr. Seuss",
  },
  {
    quote:
      "Many that live deserve death. And some that die deserve life. Can you give it to them? Then do  not be too eager to deal out death in judgement. For even the very wise cannot see all ends.",
    author: "Gandalf the Grey",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "Always forgive your enemies; nothng annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "I am so clever that sometimes I don't understand a single word of what I am saying",
    author: "Oscar Wilde",
  },
  {
    quote:
      "All that is gold does not glitter, Not all those who wander are lost;",
    author: "J.R.R . Tolkien",
  },
  {
    quote:
      "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    author: "Jane Austen",
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "J.K. Rowling",
  },
  {
    quote:
      "Outside of a dog, a book is a man's best friend. Inside of a dog it's too dark to read.",
    author: "Groucho Marx",
  },
  {
    quote:
      "I love deadlines. I love the whooshing noise they make as they go by.",
    author: "Douglas Adams",
  },
  {
    quote: "Never trust anyone who has not brought a book with them.",
    author: "Lemony Snicket",
  },
  {
    quote:
      "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "It is what you read when you don't have to that determines what you will be when you can't help it.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "You don't <em>have</em> a soul, Doctor. You <em>are</em> a soul. You <em>have</em> a body, temporarily.",
    author: "Walter M. Miller Jr",
  },
  {
    quote: "I have never let my schooling interfere with my education.",
    author: "Mark Twain",
  },
  {
    quote:
      "It's no use going back to yesterday, because I was a different person then.",
    author: "Lewis Carroll",
  },
  {
    quote:
      "Until I feared I would lose it, I never loved to read. One does not love breathing.",
    author: "Harper Lee",
  },
  {
    quote: "If you don't know where you're going, any road'll take you there.",
    author: "George Harrison",
  },
  {
    quote:
      "Give a man a fire and he's warmfor a day, but set fire tohim and he's warm for the rest of his life.",
    author: "Terry Pratchett",
  },
  {
    quote: "One is loved because one is loved. No reason is needed for loving.",
    author: "Paulo Coelho",
  },
  {
    quote:
      "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
    author: "J.R.R. Tolkien",
  },
  {
    quote:
      "I refuse to answer that question on the grounds that I don't know the answer.",
    author: "Douglas Adams",
  },
  {
    quote: "Never memorize something that you can look up.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Wicked people never have time for reading. It's one of the reasons for their wickedness.",
    author: "Lemony Snicket",
  },
  {
    quote:
      "Reader, suppose you were an idiot. And suppose you were a member of Congress. But I repeat myself.",
    author: "Mark Twain",
  },
  {
    quote:
      "Anyone who lives within their means suffers from a lack of imagination.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "It is the unknown we fear when we look upon death and darkness, nothing more.",
    author: "J.K. Rowling",
  },
  {
    quote:
      "I would challenge you to a battle of wits, but I see you are unarmed!",
    author: "William Shakespeare",
  },
  {
    quote:
      "Make it a rule never to give a child a book you would not read yourself.",
    author: "George Bernard Shaw",
  },
  {
    quote:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle",
  },
  {
    quote:
      "The flower that blooms in adversity is the rarest and most beautiful of all.",
    author: "Walt Disney Company, Mulan",
  },
  {
    quote:
      "I can't imagine a man really enjoying a book and reading it only once.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "I'm not saying that everything is survivable. Just that everything except the last thing is.",
    author: "John Green",
  },
  {},
];

// to get a random index number of quote and author
function getRandomQuote() {
  return quotesData[Math.floor(Math.random() * quotesData.length)];
}

// insert random quote and author into quotebox
function getQuote() {
  let randomQuote = getRandomQuote();
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;
  /*document.getElementById("quote-text").innerHTML = currentQuote;
    document.getElementById("quote-author").innerHTML = "- " + currentAuthor;
    */
  //$('#quote-text').text(currentQuote);
  //$('#quote-author').text("-" + currentAuthor);
  $(".quote-body").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#quote-text").html(currentQuote);
  });

  $(".quote-author").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#quote-author").text("- " + currentAuthor);
  });

  $(".tweet-btn").attr(
    "href",
    "https://twitter.com/intent/tweet?text=" +
      currentQuote +
      " " +
      currentAuthor
  );
}

/*
// initial quote and author for page
let randQuote=getRandomQuote();
document.getElementById("quote-text").innerHTML = randQuote.quote;
document.getElementById("quote-author").innerHTML = "- " + randQuote.author;
*/

// Event listener for new quote button click
//document.getElementById("new-quote").addEventListener("click", getQuote);
$(document).ready(getQuote);
$("#new-quote").on("click", getQuote);
