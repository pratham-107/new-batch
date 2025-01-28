function speakText() {
    const text = document.getElementById("textarea").value;

    if (text.trim() === "") {
        alert("please enter some text");
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(utterance);
}