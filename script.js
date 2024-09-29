document.getElementById("readMoreBtn").addEventListener("click", () => {
    const moreText = document.getElementById("moreText");
    const btnText = document.getElementById("readMoreBtn");
    const dots = document.getElementById("dots");

    if (moreText.style.display === "inline") {
        dots.setAttribute("style", "display: inline;");
        moreText.setAttribute("style", "display: none;");
        btnText.innerHTML = "Read More";
    } else {
        dots.setAttribute("style", "display: none;");
        moreText.setAttribute("style", "display: inline;");
        btnText.innerHTML = "Read Less";
    }
});


const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("changeColorBtn").addEventListener("click", () => {
    const container = document.getElementById("container");
    container.setAttribute("style", "background-color: " + getRandomColor());
});

let currentProgress = 0;
const progressBar = document.getElementById('progress');

document.getElementById("increaseProgressBtn").addEventListener("click", () => {
    if (currentProgress < 100) {
        currentProgress += 10;
        progressBar.style.width = currentProgress + '%';
    } else {
        alert('Progress is already at 100%');
    }
});

document.getElementById("resetProgressBtn").addEventListener("click", () => {
    currentProgress = 0;
    progressBar.style.width = '0%';
});

document.getElementById("addTaskBtn").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = "";
});

let startTime;

startStopBtn.addEventListener("click", () => {
    const startStopBtn = document.getElementById("startStopBtn");
    const timerOutput = document.getElementById("timerOutput");

    if (startStopBtn.innerHTML === "Start") {
        startTime = Date.now();
        startStopBtn.innerHTML = "Stop";
        timerOutput.textContent = "";
    } else {
        const timeTaken = Math.round((Date.now() - startTime) / 1000);
        startStopBtn.innerHTML = "Start";
        timerOutput.textContent = `Time Taken: ${timeTaken} seconds`;
    }
});


