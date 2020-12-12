function toggleMute() {

    var audio = document.getElementById("#rather");

    if (audio.muted) {
        audio.muted = false;
    } else {
        debugger;
        audio.muted = true;
        audio.play()
    }

}

$(document).ready(function() {
    setTimeout(toggleMute, 1000);
})