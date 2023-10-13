function getMovieQuestions() {
  $.get(
    "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple",
    (data) => {
      let query = data.results[0];
      renderQuestion(query.question);
      renderAnswers(query.correct_answer, query.incorrect_answers);
    }
  );
}

function renderQuestion(question) {
  let $movieQuestion = $("#movie-question");
  $movieQuestion.html(question);
}

function renderAnswers(correctAnswer, incorrectAnswers) {
  $("#answer-one").html(correctAnswer);
  $("#answer-two").html(incorrectAnswers[0]);
  $("#answer-three").html(incorrectAnswers[1]);
  $("#answer-four").html(incorrectAnswers[2]);
}

getMovieQuestions();
