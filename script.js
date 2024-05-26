function submitButton(event) {
    event.preventDefault();
    var inputs = document.querySelectorAll('.input-contact');
    var allFilled = true;


    inputs.forEach(function (input) {
        if (input.hasAttribute('required') && input.value === "") {
            allFilled = false;
        }
    });

    if (!allFilled) {
        alert("Please fill in all required fields.");
    } else {
        alert("Great, you submitted successfully!");
        // Here you can submit the form if all required fields are filled
        event.target.closest('form').submit(); // Submits the form
    }
}



function navigateToAbout() {
    window.location.href = "./About.html";
}
function navigateToFuyuzat() {
    window.location.href = "./MIMTA_broadcasts_Fuyuzat.html";
}
function navigateToIshiq() {
    window.location.href = "./MIMTA_broadcasts_Ishiq.html";
}



// document.addEventListener("DOMContentLoaded", function () {
//     const searchIcon = document.querySelector('.search-icon');
//     const searchInput = document.querySelector('.search-input');
//     const searchResult = document.getElementById('search-result');

//     function searchNames() {
//         const query = searchInput.value.trim().toLowerCase();

//         if (query === "fuyuzat") {
//             window.location.href = "./MIMTA_broadcasts_Fuyuzat.html";
//         } else if (query === "isiq") {
//             window.location.href = "./MIMTA_broadcasts_Ishiq.html";
//         } else {
//             window.location.href = "./no_result.html";
//         }
//     }

//     searchIcon.parentElement.addEventListener('click', searchNames);
//     searchInput.addEventListener('keypress', function (event) {
//         if (event.key === 'Enter') {
//             searchNames();
//         }
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    const searchResult = document.getElementById('search-result');

    const pages = [
        { name: "fuyuzat", url: "./MIMTA_broadcasts_Fuyuzat.html" },
        { name: "füyuzat", url: "./MIMTA_broadcasts_Fuyuzat.html" },
        { name: "Füyuzat", url: "./MIMTA_broadcasts_Fuyuzat.html" },
        { name: "füyu", url: "./MIMTA_broadcasts_Fuyuzat.html" },
        { name: "fuy", url: "./MIMTA_broadcasts_Fuyuzat.html" },
        { name: "isiq", url: "./MIMTA_broadcasts_Ishiq.html" },
        { name: "işıq", url: "./MIMTA_broadcasts_Ishiq.html" },
        { name: "İşıq", url: "./MIMTA_broadcasts_Ishiq.html" },
        { name: "İş", url: "./MIMTA_broadcasts_Ishiq.html" },
        { name: "ishiq", url: "./MIMTA_broadcasts_Ishiq.html" },

    ];

    function searchNames() {
        const query = searchInput.value.trim().toLowerCase();
        const match = pages.find(page => page.name.toLowerCase() === query);

        if (match) {
            window.location.href = match.url;
        } else {
            window.location.href = "./no_result.html";
        }
    }

    searchIcon.parentElement.addEventListener('click', searchNames);
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchNames();
        }
    });
});