var myString = "Hi, I am Aathira R N, a final-year B.Tech student and a developer on a quest to learn, build, and grow into an entrepreneur.<br><br>My interest in computer science began when my family bought our first computer back when I was 10. At first, it was GTA Vice City all day, but soon curiosity took over me. I wanted to understand how all the hardware components worked together. I started as more of a hardware enthusiast, but leaning into the trends of the time, I chose computer science. Looking back, I do not regret it much.<br><br>    The transition from studying bioscience in higher secondary to stepping into computer science engineering was scary at first, but I eventually found my footing and, along the way, discovered like minded people who made the journey worthwhile.<br><br>    While I have not specialized in a single field, I am deeply fascinated by Machine Learning and AI, especially large language models (LLMs), and I have built a few projects around them. Still, I see myself as someone who seeks versatility. Sticking to just one area feels limiting. My interests stretch all the way from English literature to robotics, and I enjoy exploring them all.<br><br>Apart from coding, I love indulging in good food (like a huge chocolate cake) and spending time with cats truly the loves of my life <3.";

var myDiv = document.getElementById("myDiv");

function printStringByLetter() {
    var index = 0;
    var intervalId = setInterval(function() {
        if (myString.substr(index, 4) === "<br>") {
            myDiv.innerHTML += "<br>";
            index += 4;
        } else {
            myDiv.innerHTML += myString.charAt(index);
            index++;
        }
        if (index >= myString.length) {
            clearInterval(intervalId);
        }
    }, 50);
}
