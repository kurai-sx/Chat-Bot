function getBotResponse(input) {
    //rock paper scissors
    
    if (input == "rock" || input == "Rock" || input == "ROCK") {
        return "Paper";
    } else if (input == "paper" || input =="Paper" || input == "PAPER") {
        return "Scissors";
    } else if (input == "scissors" || input == "Scissors" || input == "SCISSORS") {
        return "Rock";
    }

    // Simple responses
    if (input == "hello" || input == "Hello" || input == "HELLO") {
        return "Hello there !";
    } else if (input == "goodbye" || input == "Goodbye" || input == "GoodBye" || input == "GOODBYE") {
        return "Talk to you later!";
    }
    else if (input == "HI" || input == "hi" || input == "Hi" || input == "hI") {
        return "Hi there !";
    }
    else if (input == "Whatsup" || input == "whatsup" || input == "WhatsUp"){
        return "Nothing Much !"
    }
    else if (input == "who is pm of india" || input == "Who is PM of India" || input == "Who is Pm of India"){
            return "Narendra Modi"
    }
    
    else {
        return "Sorry ,but I'm learning !";
    }
}