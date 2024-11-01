// get value from home page (index - task to be shown)
const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value');

// print id 
document.getElementById('taskID').innerText = `ID : ${taskDetails[value].id}`;

// display task details in footer
let footer = document.getElementById('footer');
footer.innerHTML = `
    <div class="grandparentTask">
        <div class="parentTask" id="parentTask">

        </div>
    </div>

    <div class="description">
        <p>
            <span>
                Commence : ${taskDetails[value].postDate} <br>
                Deadline : ${taskDetails[value].deadline} <br><br><br>
                # ${taskDetails[value].title} <br><br>
            </span>
            ${taskDetails[value].description}
        </p>
    </div>
`;


// listed the tasks images 
let parentTask = document.getElementById('parentTask');
for (let i = 0; i < taskDetails[value].media.length; i++) {
    parentTask.innerHTML += `
        <img onclick="viewTaskPhotos(${value}, ${i})" class="taskPhoto unique${i}" src="${taskDetails[value].media[i]}" alt="">
    `;
}
// add the orange border in the first photo
document.querySelector(".unique0").classList.add("active");

// view the task photo
viewTaskPhotos(value, 0);
function viewTaskPhotos (value, viewing) {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(`.unique${viewing}`).classList.add("active");

    document.getElementById('display').innerHTML = `
        <img src="${taskDetails[value].media[viewing]}" alt="">
        <a download href="${taskDetails[value].media[viewing]}">
            <i class="fa-solid fa-download"></i>
        </a>
        <p>${viewing+1}/${taskDetails[value].media.length}</p>
    `;
}