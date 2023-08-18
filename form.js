document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can use Fetch API or XMLHttpRequest to send form data to the server
    // Here's a simple example using Fetch API:
    fetch('submit.php', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});