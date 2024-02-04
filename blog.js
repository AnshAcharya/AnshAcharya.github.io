function increaseLike(counterId) {
    var currentLikes = parseInt(document.getElementById(counterId).innerText);
    currentLikes++;
    document.getElementById(counterId).innerText = currentLikes;
    localStorage.setItem(counterId, currentLikes);
}

// function decreaseLike(counterId) {
//     var currentLikes = parseInt(document.getElementById(counterId).innerText);
//     if (currentLikes <= 0) {
//         return;
//     }
//     currentLikes--;
//     document.getElementById(counterId).innerText = currentLikes;
//     localStorage.setItem(counterId, currentLikes);
// }

function addComment(inputId, listId) {
    var comment = document.getElementById(inputId).value;
    if (comment.trim() !== "") {
        var commentList = document.getElementById(listId);
        var listItem = document.createElement("li");
        listItem.textContent = comment;
        commentList.appendChild(listItem);
        document.getElementById(inputId).value = "";

        // Save comments to local storage
        var comments = JSON.parse(localStorage.getItem(listId)) || [];
        comments.push(comment);
        localStorage.setItem(listId, JSON.stringify(comments));
    } else {
        alert("Please enter a valid comment.");
    }
}

window.onload = function () {
    var storedLikes = localStorage.getItem("likeCounter1");
    if (storedLikes) {
        document.getElementById("likeCounter1").innerText = storedLikes;
    }

    var storedComments = JSON.parse(localStorage.getItem("commentList1"));
    if (storedComments) {
        var commentList = document.getElementById("commentList1");
        storedComments.forEach(function (comment) {
            var listItem = document.createElement("li");
            listItem.textContent = comment;
            commentList.appendChild(listItem);
        });
    }
};

function clearLocalStorage() {
    localStorage.clear();
    window.location.reload();
}
