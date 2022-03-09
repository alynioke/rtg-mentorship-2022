/**
  NOTE:
  - It is good practice to keep your values in function scope while writing pure JavaScript to not to interfere with other script files.
  - I prefer creating init() function, this way any variable I define in this function wont interfere with other document scripts.
*/

/* HELPER FUNCTIONS START */

// Get all FAQ question elements using CSS Selector from DOM
const getQuestionsNodeList = () => {
  const containerSelector = "div#faq .question-container";

  return document.querySelectorAll(containerSelector);
};

// Get Question title element from DOM
const getTitle = (parentElement) => {
  const questionSelector = ".question";

  return parentElement.querySelector(questionSelector);
};

// Get Question answer element from DOM
const getAnswer = (parentElement) => {
  const answerSelector = ".answer";

  return parentElement.querySelector(answerSelector);
};

// Toggle Title Chevron
const toggleTitleStyle = (title, forcedClassName) => {
  // Pick opposite class for toggled state.
  const isRight = title.className.includes("chevron right");
  const nextTitleState = isRight ? "bottom" : "right";

  // Override with forced className if provided
  title.className = `question question-interactive chevron ${
    forcedClassName || nextTitleState
  }`;
};

// Toggle Answer
const toggleAnswerStyle = (answer, forcedClassName) => {
  // Pick opposite class for toggled state.
  const isClosed = answer.className.includes("closed");
  const nextAnswerState = isClosed ? "open" : "closed";

  // Override with forced className if provided
  answer.className = `answer ${forcedClassName || nextAnswerState}`;
};

// Convert if possible Selector NodeList (Iterable Object) to Array
const nodeListToArray = (nodeList) => {
  // Verify if we can iterate NodeList as Array
  let nodeListAsMap = [];

  // If possible, convert to array.
  if (nodeList.length) {
    nodeListAsMap = Array.from(nodeList);
  } else {
    console.error("provided NodeList is not iterable");
  }

  return nodeListAsMap;
};

// Get Questions as an Array
const getQuestions = () => {
  const questionsNodeList = getQuestionsNodeList();

  if (questionsNodeList.length <= 0) {
    console.error("no FAQ elements found :(", questionsNodeList);

    // Return empty Array on error
    return [];
  } else {
    console.log("Found some FAQ Questions Yay!", questionsNodeList);
  }

  const questionsAsMap = nodeListToArray(questionsNodeList);

  return questionsAsMap;
};

// Add default toggled style for all questions
const resetQuestionStyle = (question) => {
  const title = getTitle(question);
  const answer = getAnswer(question);

  toggleTitleStyle(title, "right");
  toggleAnswerStyle(answer, "closed");
};

// Question title click handler
const handleQuestionTitleClick = (currentQuestion, questions) => {
  const title = getTitle(currentQuestion);
  const answer = getAnswer(currentQuestion);

  questions.map((question) => {
    // Check if the question that we will reset style is not the same question we are currently clicking
    if (question !== currentQuestion) {
      resetQuestionStyle(question);
    }
  });

  toggleTitleStyle(title);
  toggleAnswerStyle(answer);
};
/* HELPER FUNCTIONS END */

/* Main Function that initializes FAQ interactive buttons START */
const initFaqAccordion = () => {
  console.log("Initialize interactive FAQ");

  // Get all questions
  const questions = getQuestions();

  // Add extra sugar - hover state and default chevron position, hide answer
  questions.map((question) => {
    const title = getTitle(question);

    // Set initial state
    resetQuestionStyle(question);

    // Add interactive question title click
    title.onclick = () => handleQuestionTitleClick(question, questions);
  });
};

/* Main Function that initializes FAQ interactive buttons END */

/* Add FAQ data as HTML START */
const faqList = () => {
  console.log("Initialize FAQ List from data");

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

  // Create container for all items.
  // NOTE: It is good practice to reduce appends to DOM elements like faq, so we keep that to the last step.
  const faq = document.getElementById("faq");
  faq.innerHTML = "";

  const faqContainer = document.createElement("div");
  faqContainer.id = "faq-container";

  // Loop trough Array of FAQ questions, and generate HTML with class names
  faqData.forEach((faqEntry) => {
    const { question, answer, type = undefined } = faqEntry;

    // Create FAQ Question container
    const entryContainer = document.createElement("div");
    entryContainer.className = `question-container ${type}`.trim();

    // Create FAQ Question
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = question;

    // Create FAQ Answer
    const answerElement = document.createElement("div");
    answerElement.className = "answer";
    answerElement.innerHTML = answer;

    // Add Question and answer elements to Container
    entryContainer.append(questionElement);
    entryContainer.append(answerElement);

    // Add newly made FAQ Question and answer to html element list container
    faqContainer.append(entryContainer);
  });

  // Lastly - update FAQ element in the DOM to display all the newly made answers.
  faq.append(faqContainer);

  initFaqAccordion();
};

faqList();
/* Add FAQ data as HTML END */
