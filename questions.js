const QUIZ = {
  title: "The SOPH Friday Pub Quiz",
  intro: "Welcome to your very own SOPH Friday Pub Quiz. Don't worry, Ava Keady didn't write it!",

  rounds: [
    {
      title: "Round 1",
      questions: [
        {
          text: "1. Where was the iconic beach day photo taken?",
          image: "images/q1.JPG",
          options: ["Clover", "Clue", "Crowes"],
          correct: 0
        },
        {
          text: "2. After not making it into Mother Hubbard's, we went to a different bar to get a drink, which I so kindly paid for. What was the name of this bar?",
          image: "images/q2.jpg",
          options: ["The Boss Bar", "Parlay River North", "Theory"],
          correct: 0
        },
        {
          text: "3. Returning the favour, you bought the drinks for the beach day. What flavour were the High Noons?",
          image: "images/q3.JPG",
          options: ["Watermelon", "Iced Tea", "Pineapple"],
          correct: 1
        },
        {
          text: "4. To the nearest mile, what is the distance between J1Accom and 2123 West Adams Street?",
          image: "images/q4.png",
          options: ["2 miles", "3 miles", "4 miles"],
          correct: 1
        },
        {
          text: "5. You recommended a place for me to go. I wanted to go with you, but ended up going alone while you picked out your thesis. What was the name of this place?",
          image: "images/q5.png",
          options: ["Chicago Cultural Center", "The Center for Chicago Heritage", "Illinois Convention Center"],
          correct: 0
        }
      ]
    },

    {
      title: "Round 2",
      questions: [
        {
          text: "6. What was the caption of the first snap I sent to you?",
          image: "images/q6.jpg",
          options: ['"He shaved it off fr"', '"Where did the stache go!?"', '"The stache is gone!"'],
          correct: 2
        },
        {
          text: "7. How many mutual 5 star films do we have on Letterboxd?",
          image: "images/q7.jpg",
          options: ["2", "4", "8"],
          correct: 1,
          explanation: "La La Land, One Flew Over the Cuckoo's Nest, Rear Window, and It's a Wonderful Life."
        },
        {
          text: "8. When you went to dinner with my family in Galway, what was the name of the restaurant?",
          image: "images/q8.png",
          options: ["Peggy's", "Heneghan's", "Regan's"],
          correct: 0
        },
        {
          text: "9. In the game Coup, shown to us by Finn, which character's action allowed them to collect 3 coins?",
          image: "images/q9.png",
          options: ["Duke", "Contessa", "Ambassador"],
          correct: 0
        },
        {
          text: "10. Which one of these streets was Trump Tower on?",
          image: "images/q10.jpg",
          options: ["N State St", "N Clark St", "N Wabash Ave"],
          correct: 2
        }
      ]
    },

    {
      title: "Round 3",
      questions: [
        {
          text: "11. We've watched 11 movies together. Which has the highest average rating on Letterboxd?",
          image: "images/q11.png",
          options: ["Cinema Paradiso", "It's a Wonderful Life", "Fight Club"],
          correct: 0
        },
        {
          text: "12. Sometimes when I say “Sophie” there's confusion whether I'm talking about you, or my cousin Sophie. Who's older?",
          image: "images/q12.jpg",
          options: ["You", "Her"],
          correct: 1
        },
        {
          text: "13. On our flight to Chicago, what flavour was the mousse?",
          image: "images/q13.jpg",
          options: ["Passionfruit", "Apple Crumble", "Lemon"],
          correct: 0
        },
        {
          text: "14. At the time of writing, June 28, how many WhatsApp calls have we had in 2026?",
          image: "images/q14.JPG",
          options: ["75", "90", "105"],
          correct: 2
        },
        {
          text: "15. Which town has more pubs, Headford or Blackrock? I am not considering The Clermont or The Brake as pubs.",
          image: "images/q15.jpeg",
          options: ["Headford", "The same", "Blackrock"],
          correct: 1,
          explanation: "Blackrock: Bayview Tavern, The Stone House, Uncle Tom's Cabin, and The Nep. Headford: Tav, Teds, Varleys, Tatch."
        }
      ]
    },

    {
      title: "Round 4",
      questions: [
        {
          text: "16. We're going to a restaurant called Alliance in Paris for dinner. How many Michelin Stars does it have?",
          image: "images/q16.jpg",
          options: ["0", "1", "2"],
          correct: 2
        },
        {
          text: "17. Which of these is NOT a real review for Jelly Bean Garden?",
          image: "images/q17.jpg",
          options: [
            'NOT "The Bean" 😂 Mistook this park as the iconic Bean statue or Cloud Gate. Made for a very hilarious trip with a surprise realization',
            "What started as an effort to improve the neighborhood has sadly fallen into the same state as everything around it. The garden feels neglected, with little maintenance and a lot of missed potential.",
            "Ghetto dump. That said no need to visit."
          ],
          correct: 1
        },
        {
          text: "18. Who is in the statue in Cong that you so rudely jumped on?",
          image: "images/q18.jpg",
          options: ["John Wayne and Grace Kelly", "Clark Gable and Grace Kelly", "John Wayne and Maureen O'Hara"],
          correct: 2
        },
        {
          text: "19. Where is the best coffee in Dublin?",
          image: "images/q19.jpeg",
          options: ["All Rosey", "Coffee gets to the stage where all good coffee tastes the same", "Pi"],
          correct: 0
        },
        {
          text: "20. When my dad was talking to Peter and my lecturer at graduation, which of his niche interests did he bring up?",
          image: "images/q20.JPG",
          options: ["Starlink", "Solar Panels", "Money for collecting water bottles"],
          correct: 2
        }
      ]
    },

    {
      title: "Round 5",
      questions: [
        {
          text: "21. In our first, of many, runs together, we ran a whopping 2.07km. This was a very significant achievement. What was our pace?",
          image: "images/q21.jpg",
          options: ["5:15 /km", "5:42 /km", "6:01 /km"],
          correct: 1
        },
        {
          text: "22. Which of these people have NOT written a JOE Friday Pub Quiz? Bonus point: which person in the image is Ava Keady?",
          image: "images/q22.jpg",
          options: ["Ava Keady (booooo)", "Charlie Herbert", "Ryan Carrick"],
          correct: 2
        },
        {
          text: "23. After the baseball, someone was so sure that we would end up together, or wanted to haunt me if we didn't, that they scheduled an email to me on Christmas Day of the two of us. Who?",
          image: "images/q23.JPG",
          options: ["Oisín", "Ivan", "Jack O'Brien"],
          correct: 0
        },
        {
          text: "24. Who broke Rory's chair?",
          image: "images/q24.jpeg",
          options: ["Ivan, Jack King, Aoife", "Me, Ivan, Aoife", "Me, Jack King, Ivan"],
          correct: 1
        },
        {
          text: "25. Who do I want to be with forever?",
          image: "images/q25.png",
          options: ["Hmm forever is a long time, it would be too keen to pick just one person", "You"],
          correct: 1
        }
      ]
    }
  ]
};
