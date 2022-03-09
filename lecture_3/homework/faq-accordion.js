/**
  NOTE:
  - It is good practice to keep your values in function scope while writing pure JavaScript to not to interfere with other script files.
  - I prefer creating main() function, this way any variable I define in this function wont interfere with other document scripts.
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
const main = () => {
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

main();
/* Main Function that initializes FAQ interactive buttons END */
