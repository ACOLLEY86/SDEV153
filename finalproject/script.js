document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsContainer = document.querySelector(".reviews");

    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        reviewElement.innerHTML = `
            <p><strong>${name}</strong></p>
            <p>Rating: ${rating} stars</p>
            <p>${comment}</p>
        `;

        reviewsContainer.appendChild(reviewElement);

        reviewForm.reset();
    });
});