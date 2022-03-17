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

  const faqElement = document.getElementById("faq");
  faqElement.innerHTML = "";

  const faqContainer = document.createElement("div");
  faqContainer.id = "faq-container";

  const visible = "answer-visible";
  const hidden = "answer-hidden";

  const handleQuestionClick = (entryAnswer) => {
    const isVisible = entryAnswer.className.includes(visible);

    // Hide the answer
    if (isVisible) {
      entryAnswer.className = `answer ${hidden}`;
    }

    // if NOT isVisible
    // Show the answer
    if (!isVisible) {
      entryAnswer.className = `answer ${visible}`;
    }
  };

  faqData.forEach((faqEntry) => {
    const { question, answer } = faqEntry;

    const entryContainer = document.createElement("div");
    entryContainer.className = "question-container";

    const entryAnswer = document.createElement("div");
    entryAnswer.className = "answer answer-hidden";
    entryAnswer.innerHTML = answer;

    const entryQuestion = document.createElement("div");
    entryQuestion.className = "question chevron right question-interactive";
    entryQuestion.innerHTML = question;
    entryQuestion.onclick = () => {
      handleQuestionClick(entryAnswer);
    };

    // Add Question and answer elements to Container
    entryContainer.append(entryQuestion);
    entryContainer.append(entryAnswer);

    faqContainer.append(entryContainer);
  });

  faqElement.append(faqContainer);
};

faqList();
