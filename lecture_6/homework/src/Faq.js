import { useState } from "react";

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
    answer: (
      <>
        We have mentors representing 12 tracks:
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
        </ul>
      </>
    ),
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
    answer: (
      <>
        <p>
          Find info about mentors on <a href="./mentors.html">mentor page</a>
        </p>
        The lorem ipsum is a placeholder text used in publishing and graphic
        design. This filler text is a short paragraph that contains all the
        letters of the alphabet. The characters are spread out evenly so that
        the reader's attention is focused on the layout of the text instead of
        its content.
      </>
    ),
  },
  {
    type: "highlighted-text",
    question: `What is "lorem ipsum"? 2`,
    answer: `The lorem ipsum is a placeholder text used in publishing and graphic
          design. This filler text is a short paragraph that contains all the
          letters of the alphabet. The characters are spread out evenly so that
          the reader's attention is focused on the layout of the text instead of
                                                      its content.`,
  },
  {
    question: `How do I apply?`,
    answer: (
      <div>
        You can do this right here 👉
        <a
          class="button"
          href="http://rigatechgirls.com/"
          target="_blank"
          rel="noreferrer"
        >
          APPLY
        </a>
      </div>
    ),
  },
];

const QuestionContainer = ({
  question,
  openQuestion,
  answer,
  setOpenQuestion,
  isOpen,
}) => {
  return (
    <div
      onClick={() =>
        setOpenQuestion(question === openQuestion ? null : question)
      }
      className="question-container"
    >
      <div
        className={`question chevron ${
          question === openQuestion ? "bottom" : "right"
        }`}
      >
        {question}
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <section id="learn-more">
      <div className="learn-more">
        <a
          className="button"
          href="#faq"
          aria-label="Go to frequently asked questions"
        >
          learn more
        </a>
      </div>
      <h2 className="sr-only">FAQ</h2>
      <div id="faq" className="faq">
        {faqData.map((item) => (
          <QuestionContainer
            key={item.question}
            question={item.question}
            answer={item.answer}
            setOpenQuestion={setOpenQuestion}
            isOpen={openQuestion === item.question}
            openQuestion={openQuestion}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
