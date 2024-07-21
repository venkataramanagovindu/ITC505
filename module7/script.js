document.getElementById('todo-list').addEventListener('click', function(event) {
    if(event.target && event.target.nodeName === 'LI') {
        event.target.classList.toggle('highlight');
    }
});
