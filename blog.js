function increaseLike() {
    let like = document.getElementById("like-button").innerText;
    if(like === "Like") {
        document.getElementById("like-button").innerText = "Dislike";
        document.getElementById("like-button").style = "background-color: hsl(323.6842105263158,100%,45%);";
    } else {
        document.getElementById("like-button").innerText = "Like";
        document.getElementById("like-button").style = "background-color: #4e54c8;";
    }
}

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
