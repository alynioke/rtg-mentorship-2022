/* HELPER FUNCTIONS */

// Toggle CSS class to show question in HTML
const handleOpenQuestion = (entryQuestion) => {
  // Toggle off className right
  entryQuestion.classList.toggle("right");

  // Toggle on className bottom
  entryQuestion.classList.toggle("bottom");
};

const handleOpenAnswer = (entryAnswer) => {
  // Toggle off className answer-hidden
  entryAnswer.classList.toggle("answer-hidden");
};

/**
 * Find Questions in DOM
 * Toggle class names to make them closed
 */
const handleHideOtherQuestions = (currentAnswer) => {
  const answers = document.querySelectorAll("#faq .question-container");

  answers.forEach((questionContainer) => {
    const question = questionContainer.querySelector(".question");
    const answer = questionContainer.querySelector(".answer");

    // Skip if answer is the current answer
    if (currentAnswer === answer) {
      return;
    }

    // Add answer-hidden to all other answers
    question.classList.remove("bottom");
    question.classList.add("right");
    answer.classList.add("answer-hidden");
  });
};

const getAnswerContainer = (entryQuestion, entryAnswer) => {
  const entryContainer = document.createElement("div");
  entryContainer.className = "question-container";

  entryContainer.append(entryQuestion);
  entryContainer.append(entryAnswer);

  return entryContainer;
};

const getFaqListContainer = () => {
  // Create pseudocontainer,
  // that does not exist in DOM yet for more performant entry append after we have generated all necessary HTML
  return document.createElement("div");
};

const getEntryAnswer = (answer) => {
  const answerElement = document.createElement("div");
  answerElement.className = "answer answer-hidden";
  answerElement.innerHTML = answer;

  return answerElement;
};

const getEntryQuestion = (question) => {
  const questionElement = document.createElement("div");
  questionElement.className = "question chevron right question-interactive";
  questionElement.innerHTML = question;

  return questionElement;
};

/* END HELPER FUNCTIONS */

const faqList = () => {
  const faqData = [
    {
      question: `When is the deadline for applications?`,
      answer: `You can apply until November 12th, 2022`,
    },
    {
      question: `What does program provide?`,
      answer: `Support from a local or an international mentor, opportunity to
          network and form working groups with other participants of the
          program, environment where tp grow, advance and broaden your skills
          and knowledge`,
    },

    {
      question: `What is the selection criteria?`,
      answer: `We evaluate you motivation and goals. The assessment will be carried
          out by a special working group together with mentors`,
    },
    {
      question: `What's the timeline?`,
      answer: `Program starts on 6th of January and ends on 30th of June, 2023`,
    },
    {
      question: `What competences can I train in TechMentor program?`,
      answer: ` We have mentors representing 12 tracks:
          <ul>
            <li>frontend development</li>
            <li>backend development</li>
            <li>UX/UI</li>
            <li>Quality Assurance</li>
            <li>engineering</li>
            <li>IT support/DevOps</li>
            <li>project management</li>
            <li>product management</li>
            <li>cyber security</li>
            <li>data analytics/data science</li>
            <li>business analytics</li>
            <li>startups</li>
            <li>"Step up your game"</li>
          </ul>`,
    },
    {
      question: `What is "Step up your game" mentorship?`,
      answer: `it's for ladies with experience that want to “step up their game” in
          the IT field: boost their skill set, while knowing the basics already:
          likely finished our previous tracks, have done some work in the IT
          field or professionals that want to move to the IT field from a non-IT
          related position.`,
    },
    {
      type: "highlighted-text",
      question: `What is "lorem ipsum"?`,
      answer: `
          <p>
            Find info about mentors on <a href="./mentors.html">mentor page</a>
          </p>
          The lorem ipsum is a placeholder text used in publishing and graphic
          design. This filler text is a short paragraph that contains all the
          letters of the alphabet. The characters are spread out evenly so that
          the reader's attention is focused on the layout of the text instead of
          its content.`,
    },
    {
      type: "highlighted-text",
      question: `What is "lorem ipsum"?`,
      answer: `The lorem ipsum is a placeholder text used in publishing and graphic
          design. This filler text is a short paragraph that contains all the
          letters of the alphabet. The characters are spread out evenly so that
          the reader's attention is focused on the layout of the text instead of
                                                      its content.`,
    },
    {
      question: `How do I apply?`,
      answer: `You can do this right here 👉
          <a class="button" href="http://rigatechgirls.com/" target="_blank" >
            APPLY
          </a>`,
    },
  ];

  /**
   * By using document.createElement, we would like to re-create
   * Basic structure of a question
   *
    <div class="question-container">
      <div class="question">question</div>
      <div class="answer">answer</div>
    </div>
   */

  const faqContainer = getFaqListContainer();

  const handleQuestionClick = (entryQuestion, entryAnswer) => {
    handleHideOtherQuestions(entryAnswer);

    handleOpenQuestion(entryQuestion);
    handleOpenAnswer(entryAnswer);
  };

  faqData.forEach((faqEntry) => {
    const { question, answer } = faqEntry;

    const entryAnswer = getEntryAnswer(answer);
    const entryQuestion = getEntryQuestion(question);

    // Add Question Click
    entryQuestion.onclick = () => {
      handleQuestionClick(entryQuestion, entryAnswer);
    };

    // Add Question and answer elements to Container
    const entryContainer = getAnswerContainer(entryQuestion, entryAnswer);

    faqContainer.append(entryContainer);
  });

  // Get the main container from DOM that we will be operating in.
  const faqElement = document.getElementById("faq");
  faqElement.innerHTML = "";

  faqElement.append(faqContainer);
};

faqList();
