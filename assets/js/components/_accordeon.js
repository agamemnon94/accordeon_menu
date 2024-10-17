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
      response.classList.toggle("active");
      btnArrow.classList.toggle("active");

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
    });
  });
}

/**
 * Le comprtement par défaut des inputs checkox implique que l'input est soit checked soit pas. Le CSS va donc appliquer le style nécessaire. On a simplement à parcourrir les autres ckeckbox et passer leur attribut "checked" à false
 * @param {Array} labelButtons
 */
export function accordion2(labelButtons) {
  labelButtons.forEach((labelBtn) => {
    labelBtn.addEventListener("click", function (e) {
      const img = labelBtn.nextElementSibling.querySelector("span img");
      if (labelBtn.checked === true) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }

      labelButtons.forEach((otherBtn) => {
        if (otherBtn !== e.target) {
          const otherImg =
            otherBtn.nextElementSibling.querySelector("span img");
          otherBtn.checked = false;
          otherImg.classList.remove("active");
        }
      });
    });
  });
}
