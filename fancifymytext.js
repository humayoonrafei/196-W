const button =document.getElementById('button');
button.onclick = function() {
  const text = document.getElementById("text-area");
   text.style.fontSize = "23pt";
}

const checkbox = document.getElementById("fancy");
const boring = document.getElementById("boring-text");

checkbox.onchange = function() {
   const text = document.getElementById("text-area");
    if (checkbox.checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    }
}
boring.onchange=function(){
    const text = document.getElementById("text-area");
    if (boring.checked) {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
    }
    
function uppercaseAndAddMoo() {
  var textArea = document.getElementById("text-area");
  var text = textArea.value;

  // Uppercase the entire text
  var uppercaseText = text.toUpperCase();

  // Adding  "-Moo" to the last word of each sentence
  var sentences = uppercaseText.split(". ");
  var modifiedSentences = sentences.map(function(sentence) {
    var words = sentence.split(" ");
    var lastWord = words[words.length - 1];
    var modifiedLastWord = lastWord + "-Moo";
    words[words.length - 1] = modifiedLastWord;
    return words.join(" ");
  });
  textArea.value = modifiedSentences.join(".");
}

// event handler for the "Moo!" button

var mooButton = document.getElementById("moo-button");
mooButton.addEventListener("click", uppercaseAndAddMoo);
