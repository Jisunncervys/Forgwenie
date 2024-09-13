document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");

    // Event listener for when the audio finishes playing
    audio.addEventListener("ended", function() {
        // Redirect to another page (replace "next-page.html" with your desired page)
        window.location.href = "../lol/web/home/home.html";
    });
});