function toggleMode() {
    let toggleModeButton = document.getElementById("dark-mode-toggle");
    toggleModeButton.addEventListener("click", function () {
        let currentCSS = document.getElementById("stylesheet").href;
        let currentFileName = currentCSS.substring(currentCSS.lastIndexOf('/') + 1);

        if (currentFileName === "my_light.css") {
            document.getElementById("stylesheet").href = "my_dark.css";
        } else {
            document.getElementById("stylesheet").href = "my_light.css";
        }
    });
}
