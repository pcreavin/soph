/* ============================================================================
   👉 THIS IS THE ONLY FILE YOU NEED TO EDIT 👈

   Replace the questions, options and images below with your own.
   You do NOT need to touch index.html or style.css.

   HOW EACH QUESTION WORKS
   -----------------------
   {
     text: "Your question goes here?",
     image: "images/somephoto.jpg",  // OPTIONAL: a picture shown under the question.
                                      //   - Put the photo file inside the "images" folder.
                                      //   - Then write its name here, e.g. "images/beach.jpg".
                                      //   - For NO picture, delete this line (or use image: "").
     options: ["First choice", "Second choice", "Third choice"],  // exactly 3 options
     correct: 1,   // which option is right, COUNTING FROM 0:
                   //   0 = the first option, 1 = the second, 2 = the third
     explanation: "A little note shown after she answers." // OPTIONAL: delete if not wanted
   }

   TIPS
   ----
   • Keep the commas , and curly braces { } exactly where they are.
   • Each question is wrapped in { } and separated by a comma.
   • You can rename the rounds, add or remove questions — there's no strict
     limit, but the design is built around 25 (5 rounds of 5).
   ============================================================================ */

const QUIZ = {
  // Big heading on the pink title card:
  title: "Happy Birthday, Sophie!",

  // A short welcome line under the title (delete the text for none):
  intro: "Welcome to the Soph July 7th pub quiz. Don't worry it's not Ava Keady writing it this time.",

  rounds: [
    /* ---------------------------- ROUND 1 ---------------------------- */
    {
      title: "Round 1: Where was...",
      questions: [
        {
          text: "Where was this picture taken,
          image: "images/placeholder.svg",
          options: ["Clover, "Clue", "Crowes"],
          correct: 0,
          explanation: "Replace this with your own memory!"
        },
        {
          text: "What was the first thing I said to you?",
          options: ["“Hi, I'm ...”", "Something embarrassing", "I don't remember!"],
          correct: 1,
          explanation: "You can delete the explanation line if you don't want one."
        },
        {
          text: "What month did we get together?",
          options: ["Spring", "Summer", "Winter"],
          correct: 2
        },
        {
          text: "Where did we go on our first date?",
          image: "images/placeholder.svg",
          options: ["The cinema", "A restaurant", "A walk"],
          correct: 1,
          explanation: "Add a photo by dropping it in the images folder."
        },
        {
          text: "Who said 'I love you' first?",
          options: ["Me", "You", "We said it together"],
          correct: 0
        }
      ]
    },

    /* ---------------------------- ROUND 2 ---------------------------- */
    {
      title: "Round 2: All About You",
      questions: [
        {
          text: "What's your go-to coffee order?",
          options: ["Flat white", "Cappuccino", "Just tea, thanks"],
          correct: 0
        },
        {
          text: "What's your favourite film of all time?",
          options: ["Film A", "Film B", "Film C"],
          correct: 1
        },
        {
          text: "What's your dream holiday destination?",
          image: "images/placeholder.svg",
          options: ["Japan", "Italy", "The Maldives"],
          correct: 2
        },
        {
          text: "What's your hidden talent?",
          options: ["Talent A", "Talent B", "Talent C"],
          correct: 0
        },
        {
          text: "What's your favourite way to spend a Sunday?",
          options: ["A lie-in and brunch", "A big walk", "On the sofa with a film"],
          correct: 0
        }
      ]
    },

    /* ---------------------------- ROUND 3 ---------------------------- */
    {
      title: "Round 3: Picture Round 📸",
      questions: [
        {
          text: "Where were we when this photo was taken?",
          image: "images/placeholder.svg",
          options: ["The seaside", "The city", "The mountains"],
          correct: 0,
          explanation: "Swap images/placeholder.svg for a real photo from this trip."
        },
        {
          text: "What were we celebrating here?",
          image: "images/placeholder.svg",
          options: ["A birthday", "An anniversary", "Just because"],
          correct: 1
        },
        {
          text: "Whose house was this at?",
          image: "images/placeholder.svg",
          options: ["Mine", "Yours", "A friend's"],
          correct: 2
        },
        {
          text: "What year was this?",
          image: "images/placeholder.svg",
          options: ["2023", "2024", "2025"],
          correct: 1
        },
        {
          text: "What did we do right after this photo?",
          image: "images/placeholder.svg",
          options: ["Got food", "Went dancing", "Went home to sleep"],
          correct: 0
        }
      ]
    },

    /* ---------------------------- ROUND 4 ---------------------------- */
    {
      title: "Round 4: Us as a Couple",
      questions: [
        {
          text: "What's 'our song'?",
          options: ["Song A", "Song B", "Song C"],
          correct: 0
        },
        {
          text: "What's our most-watched TV show together?",
          options: ["Show A", "Show B", "Show C"],
          correct: 1
        },
        {
          text: "What's the best trip we've taken together?",
          image: "images/placeholder.svg",
          options: ["Trip A", "Trip B", "Trip C"],
          correct: 2
        },
        {
          text: "What's our favourite takeaway?",
          options: ["Pizza", "Chinese", "Indian"],
          correct: 0
        },
        {
          text: "What do we argue about most (lovingly)?",
          options: ["The thermostat", "What to watch", "Who's driving"],
          correct: 1
        }
      ]
    },

    /* ---------------------------- ROUND 5 ---------------------------- */
    {
      title: "Round 5: The Future",
      questions: [
        {
          text: "Where do we most want to travel next?",
          image: "images/placeholder.svg",
          options: ["Somewhere sunny", "Somewhere snowy", "A city break"],
          correct: 0
        },
        {
          text: "What's first on our someday bucket list?",
          options: ["A roadtrip", "Learn to cook properly", "See the Northern Lights"],
          correct: 2
        },
        {
          text: "What pet should we get one day?",
          options: ["A dog", "A cat", "Absolutely none"],
          correct: 0
        },
        {
          text: "What's our shared goal for this year?",
          options: ["Goal A", "Goal B", "Goal C"],
          correct: 1
        },
        {
          text: "Finish the sentence: the best is...",
          options: ["...behind us", "...right now", "...yet to come"],
          correct: 2,
          explanation: "Happy birthday — I love you. 💛"
        }
      ]
    }
  ]
};
