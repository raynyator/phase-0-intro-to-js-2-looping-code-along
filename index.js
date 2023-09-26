// Code your solutions in this file

function writeCards() {
    const randomNames = ["Guadalupe"
        , "Ollie",
        "Aki"
    ];

    const thankYouMessages = [];

    for (let i = 0; i < randomNames.length; i++) {
        const name = randomNames[i];
        const message = `Thank you, ${name}, for the wonderful surprise gift!`;
        thankYouMessages.push(message);
    }

    return thankYouMessages;
}

const messages = writeCards();
    
console.log(messages);

function countDown(thenumber){
    while (thenumber>=0){
        console.log(thenumber);
       thenumber--; 
    }
   
}
