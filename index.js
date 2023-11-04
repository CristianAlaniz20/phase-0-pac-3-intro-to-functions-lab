function shout(string) {
    return "Hello".toUpperCase();
}

function whisper(string) {
    return "Hello".toLowerCase();
}

function logShout(string) {
    console.log("Hello".toUpperCase());
}

console.log(logShout);

function logWhisper(string) {
    console.log("Hello".toLowerCase())
}

console.log(logWhisper)

function sayHiToHeadphonedRoommate(string) {
    let reply; 

  if (string === "Let's have dinner together!") {
      reply = "I would love to!";
  } else if (string === string.toLowerCase()) {
      reply = "I can't hear you!";
  } else if (string === string.toUpperCase()) {
      reply = "YES INDEED!";
  }
  return reply;
}

console.log(sayHiToHeadphonedRoommate("LET'S HAVE DINNER TOGETHER!")); 