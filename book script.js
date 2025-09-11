document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const movie = document.getElementById('movie');
  const ticketCount = document.getElementById('tickets').value;

  const pricePerTicket = parseInt(movie.value);
  const total = pricePerTicket * ticketCount;

  if (!isNaN(total) && ticketCount > 0) {
    document.getElementById('result').innerHTML =
      ` You booked ${ticketCount} ticket(s) for <strong>${movie.options[movie.selectedIndex].text.split(" - ")[0]}</strong>.<br>Total: <strong>$${total}</strong>`;
  } else {
    document.getElementById('result').innerHTML = "Please select a movie and enter a valid number of tickets.";
  }
});

