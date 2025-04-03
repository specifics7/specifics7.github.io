// Increase text area by 2pt each time
function toBig() {
    // Alert box
    alert("Hello, world!");
    // Retrive text area element
    var textArea = document.getElementById("textArea");
    // Get current font size
    var currentSize = textArea.style.fontSize;
    var sizeValue = currentSize ? parseFloat(currentSize) : 12;
    // Increase font size by 2pt
    sizeValue += 2;
    textArea.style.fontSize = sizeValue + "pt";
}
// Toggle fancy text
function toggleFancy() {
    // Get both elements
    var textArea = document.getElementById("textArea");
    var fancyRadio = document.getElementById("fancyShmancy");

    // Check if fancySchmany button checked
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        alert("FancyShmancy was selected");
    // Reset to default when BoringBetty selected
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "";
        textArea.style.textDecoration = "none"
        alert("BoringBetty was selected");
    }
}
// Add -Moo to text
function toMoo() {
    // Get elements
    var textArea = document.getElementById("textArea");
    var text = textArea.value;

    text = text.toUpperCase();
    // Split sentences
    var sentences = text.split(".");
    // Loop over each sentence
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.length > 0) {
            var words = sentence.split(" ");
            // Add -Moo to end of every sentence
            words[words.length - 1] = words[words.length - 1] + "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    
    // Join sentences to single string
    var newText = sentences.join(". ");
    if (text.trim().endsWith(".")) {
        newText += ".";
    }
    
    // Update with new text
    textArea.value = newText;
}