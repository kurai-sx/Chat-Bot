function getBotResponse(input) {
    
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
    else if (input == "which technologies have you used" || input == "Which technologies have you used"){
        return "I have been created by using HTML, CSS and JavaScript."
    }
    else if (input == "Anything else?" || input == "anything else?"|| input == "anything else"){
        return "May you get full marks 😆"
    }
    else if (input == "Why you took engineering ?" || input == "why you took engineering ?"|| input == "why you took engineering"){
        return "I don't want peace, I want problems 😅"
    }
    else {
        return "Sorry ,but I'm learning !";
    }
}
