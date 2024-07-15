document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
    const commentCount = document.querySelector('.comment-count');

    let commentId = 1;

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const usernameInput = document.getElementById('username');
        const commentInput = document.getElementById('comment');

        // Form validation
        if (usernameInput.value.trim().length < 3 || commentInput.value.trim().length < 3) {
            alert('Please enter at least 3 characters for both Name and Comment.');
            return;
        }

        // Create new comment element
        const newComment = document.createElement('li');
        newComment.innerHTML = `
            <strong>${usernameInput.value}</strong>: 
            <p>${commentInput.value}</p>
            <button class="like-btn">Like</button>
            <span class="like-count">0</span>
        `;
        newComment.classList.add('comment-item');
        newComment.dataset.id = commentId;
        commentId++;

        // Append new comment to comment list
        commentList.appendChild(newComment);

        // Update comment count
        updateCommentCount();

        // Clear form inputs
        usernameInput.value = '';
        commentInput.value = '';

        // Attach event listener for like button in new comment
        const likeBtn = newComment.querySelector('.like-btn');
        const likeCount = newComment.querySelector('.like-count');
        let count = 0;

        likeBtn.addEventListener('click', function() {
            count++;
            likeCount.textContent = count;
        });
    });

    function updateCommentCount() {
        const commentCountElem = document.querySelectorAll('.comment-item').length;
        commentCount.textContent = commentCountElem;
    }
});
