document.addEventListener('DOMContentLoaded', (event) => {
    // Get all the textbox elements
    var textBoxes = document.querySelectorAll('.textbox');

    // Get the modal elements
    var modal = document.getElementById("modal");
    var modalTitle = document.getElementById("modal-title");
    var modalDates = document.getElementById("modal-dates");
    var modalDescription = document.getElementById("modal-description");
    var closeBtn = document.getElementsByClassName("close")[0];

    textBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var title = box.querySelector('h2').textContent;
        var dates = box.querySelector('small').textContent;
        var description = box.getAttribute('data-job-description'); // Get job description from data attribute
        var exclusiveContent = box.getAttribute('data-exclusive-content');

        openModal(title, dates, description, exclusiveContent);
    });
});

function openModal(title, dates, description, exclusiveContent) {
    modalTitle.textContent = title;
    modalDates.textContent = dates;
    modalDescription.textContent = description; // Set job description in the modal
    var modalExclusiveContent = document.getElementById("modal-exclusive-content");
    modalExclusiveContent.innerHTML = exclusiveContent;
    modal.style.display = "block";
    document.body.classList.add('no-scroll');
}

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.classList.remove('no-scroll');
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove('no-scroll');
        }
    }
});