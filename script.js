document.addEventListener("DOMContentLoaded", () => {
    const listings = document.querySelector(".listings-grid");
    const maxPerPage = 10;
    let currentPage = 1;

    const hostels = Array.from({ length: 50 }, (_, i) => ({
        name: `Hostel ${i + 1}`,
        location: `Area ${i % 5}`,
        price: `PKR ${i * 1000} - ${i * 1500}`,
        facilities: ["Wi-Fi", "Security", "Food"],
    }));

    function renderPage(page) {
        listings.innerHTML = "";
        const start = (page - 1) * maxPerPage;
        const end = start + maxPerPage;

        hostels.slice(start, end).forEach((hostel) => {
            const card = document.createElement("div");
            card.className = "hostel-card";
            card.innerHTML = `
                <h3>${hostel.name}</h3>
                <p>Location: ${hostel.location}</p>
                <p>Price: ${hostel.price}</p>
                <p>Facilities: ${hostel.facilities.join(", ")}</p>
            `;
            listings.appendChild(card);
        });
    }

    document.querySelector(".pagination button:nth-child(1)").addEventListener("click", () => {
        if (currentPage > 1) renderPage(--currentPage);
    });

    document.querySelector(".pagination button:nth-child(2)").addEventListener("click", () => {
        if (currentPage * maxPerPage < hostels.length) renderPage(++currentPage);
    });

    renderPage(currentPage);
});


document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const inquiryType = document.getElementById("inquiryType").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your ${inquiryType} has been received. We will contact you at ${email} soon.`);
    // Optionally, clear the form
    event.target.reset();
});
