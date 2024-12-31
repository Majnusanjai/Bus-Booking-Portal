document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;
    
    // Display confirmation message
    const confirmation = document.getElementById("confirmation");
    confirmation.innerHTML = `
        <h4>Booking Confirmation</h4>
        <p>Departure: ${departure}</p>
        <p>Destination: ${destination}</p>
        <p>Date: ${date}</p>
        <p>Seats: ${seats}</p>
    `;
    confirmation.style.display = "block";
  
    // Clear the form
    document.getElementById("booking-form").reset();
  });
  