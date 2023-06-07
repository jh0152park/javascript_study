const quotes = [
  {
    quote:
      "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
    author: "Walt Disney",
  },
  {
    quote:
      "Never say goodbye because goodbye means going away and going away means forgetting.",
    author: " Peter Pan",
  },
  {
    quote: "Some people are worth melting for.",
    author: "Frozen(Olaf)",
  },
  {
    quote:
      "The flower that blooms in adversity is the most rare and beautiful of all.",
    author: "Mulan",
  },
  {
    quote:
      "If you focus on what you left behind, you will never see what lies ahead.",
    author: "Ratatouille",
  },
  {
    quote:
      "The past can hurt. But from the way I see it, you can either run from it, or learn from it.",
    author: "Lion King",
  },
  {
    quote:
      "You cannot be happy every day. But there are happy things every day.",
    author: "Winnie the Pooh",
  },
  {
    quote: "To love someone, you have to love yourself first.",
    author: "Beauty and the Beast",
  },
  {
    quote:
      "Share your gift with the world. Who knows how many lives you are saving just by doing so.",
    author: "Kung Fu Panda",
  },
  {
    quote: "Venture outside your comfort zone. The rewards are worth it.",
    author: "Rapunzel",
  },
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayLine = quotes[getRandomInt(0, quotes.length)];

quote.innerText = todayLine.quote;
author.innerText = todayLine.author;
