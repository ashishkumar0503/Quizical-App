

export default function SingleQuestion(props) {
  const answersElements = props.allAnswers.map((answer, index) => {
    // console.log(answer);
    return (
      // correct class: when answer = correct answer
      // incorrect class: when answer = user selected answer & it's incorrect answer
      // dimmed class: all answers except correct answer
      <button
        key={index}
        onClick={() => props.updateAnswer(answer, props.question)}
        className={`${answer === props.selectedAnswer ? "selected" : ""}
                //  ${
                  props.showResult && props.correctAnswer === answer
                    ? "correct"
                    : ""
                }
                    ${
                      props.showResult &&
                      props.correctAnswer !== answer &&
                      props.selectedAnswer === answer
                        ? "wrong"
                        : ""
                    }
                    ${
                      props.showResult && props.correctAnswer !== answer
                        ? "grey"
                        : ""
                    }


                `}
      >
        {answer}
      </button>
    );
  });

  return (
    <>
      <h5>{props.question}</h5>
      <div className="btns-container">{answersElements}</div>
      <hr />
    </>
  );
}
