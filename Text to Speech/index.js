function textToAudio(){
    let synth = window.speechSynthesis;
    let msg=document.getElementById("text-to-speech").value;

    let speech=new SpeechSynthesisUtterance();
    speech.lang='en-US';

    speech.text=msg;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;

    synth.speak(speech);

}