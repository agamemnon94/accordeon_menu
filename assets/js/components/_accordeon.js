export function acccordeon() {
  const questionContainers = document.querySelectorAll(".faq_question");
  console.log(questionContainers);

  questionContainers.forEach((container) => {
    const questionButton = container.querySelector(
      ".faq-question_title-button"
    );
    const response = container.querySelector(".faq_response");
    const btnArrow = questionButton.querySelector("img");

    questionButton.addEventListener("click", (e) => {
      // Fermer toutes les autres réponses actives avant d'ouvrir la nouvelle
      // Interréssant si les réponse ne sont pas trop hautes si non ça décale trop
      questionContainers.forEach((otherContainer) => {
        const otherResponse = otherContainer.querySelector(".faq_response");
        const otherBtnArrow = otherContainer.querySelector(
          ".faq-question_title-button img"
        );

        // Vérifier que ce n'est pas le même container
        if (otherContainer !== container) {
          otherResponse.classList.remove("active");
          otherBtnArrow.classList.remove("active");
        }
      });

      response.classList.toggle("active");
      btnArrow.classList.toggle("active");
    });
  });
}
