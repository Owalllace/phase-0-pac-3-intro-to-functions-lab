function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(inputString) {
    console.log(inputString.toUpperCase());
}
function logWhisper(inputString) {
    console.log(inputString.toLowerCase());
}

function sayHiToHeadphonedRoommate(inputString) {
    if (inputString.toLowerCase() === inputString && inputString !== "Let's have dinner together!") {
        return "I can't hear you!";
    } else if (inputString.toUpperCase() === inputString) {
        return "YES INDEED!";
    } else if (inputString === "Let's have dinner together!") {
        return "I would love to!"
    } else {
        return "Unexpected input!";
    }
}
console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("HELLO"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));