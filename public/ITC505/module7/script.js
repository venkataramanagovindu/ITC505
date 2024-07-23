// Event delegation for the to-do list
document.getElementById('todo-list').addEventListener('click', function(event) {
    if(event.target && event.target.nodeName === 'LI') {
        event.target.classList.toggle('highlight');
    }
});

// HTTP Status Codes
const statusCodes = [
    { code: 201, name: 'Created', purpose: 'The request has been fulfilled and resulted in a new resource being created.', example: 'Used in REST APIs for successful resource creation.' },
    { code: 204, name: 'No Content', purpose: 'The server successfully processed the request, but is not returning any content.', example: 'Used for successful form submissions with no data to return.' },
    { code: 400, name: 'Bad Request', purpose: 'The server could not understand the request due to invalid syntax.', example: 'Returned when the request is malformed.' },
    { code: 401, name: 'Unauthorized', purpose: 'The request requires user authentication.', example: 'Returned when authentication is required and has failed or has not been provided.' },
    { code: 503, name: 'Service Unavailable', purpose: 'The server is currently unable to handle the request due to temporary overloading or maintenance.', example: 'Returned when the server is temporarily down.' }
];

const statusCodesList = document.getElementById('status-codes');
statusCodes.forEach(status => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${status.code} ${status.name}</strong>: ${status.purpose} <em>(${status.example})</em>`;
    statusCodesList.appendChild(li);
});

// JSON Data
const movieData = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Science Fiction",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
};

// Display Stringified JSON data
const jsonStringifiedElement = document.getElementById('json-stringified');
jsonStringifiedElement.textContent = JSON.stringify(movieData, null, 2); // Format JSON with indentation

// Display Parsed JSON data
const parsedMovieData = JSON.parse(jsonStringifiedElement.textContent);
const jsonParsedElement = document.getElementById('json-parsed');
jsonParsedElement.textContent = JSON.stringify(parsedMovieData, null, 2); // Format JSON with indentation
