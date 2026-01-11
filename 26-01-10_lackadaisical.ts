// Instructions
// Your task is to determine what Bob will reply to someone when they say something to him or ask him a question.

// Bob only ever answers one of five things:

// "Sure." This is his response if you ask him a question, such as "How are you?" The convention used for questions is that it ends with a question mark.
// "Whoa, chill out!" This is his answer if you YELL AT HIM. The convention used for yelling is ALL CAPITAL LETTERS.
// "Calm down, I know what I'm doing!" This is what he says if you yell a question at him.
// "Fine. Be that way!" This is how he responds to silence. The convention used for silence is nothing, or various combinations of whitespace characters.
// "Whatever." This is what he answers to anything else.

function hey(message: string): string {
  if (/^\s*$/.test(message.trim())) return "Fine. Be that way!";
  if (/^[A-Z\s]+\?$/.test(message.trim()))
    return "Calm down, I know what I'm doing!";
  if (/\?$/.test(message.trim())) return "Sure.";
  if (/^(?=.*[A-Z])[^a-z]+$/.test(message.trim())) return "Whoa, chill out!";
  return "Whatever.";
}

hey("Does this cryogenic chamber make me look fat?");
hey("How are you!");
