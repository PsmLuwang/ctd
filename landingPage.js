
// get username only once
// const userInput = prompt("Please enter your name:");

// page direction
const caseFunctions = {
    // go to home 
    home : function () {
        // nav btn animation
        activeNavBtn('homeBtn');

        // insert html 
        let wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = structures.homeHtml;

        // greeting to userInput
        // if (userInput != '' && userInput !== null) {
        //     document.getElementById('user').innerText = userInput + ".";
        // }        

        // auto scroll img
        let i = 0;
        let imgContainer = document.getElementById('imgContainer');
        imgContainer.innerHTML =`
            <img src="${autoScrollImgList[i]}" alt="">
        `;
        setInterval(() => {
            i = (i+1) % autoScrollImgList.length;
            imgContainer.innerHTML = `<img src="${autoScrollImgList[i]}" alt="">`;
        }, 3500);

        // course shown in footer
        let footer = document.getElementById("footer");
        for (let i = 0; i < course.length; i++) {
            footer.innerHTML += `
                <div>
                    <img src="banner/${course[i].logo}" alt="">
                    <p>${course[i].definition}</p>
                </div>
            `;
        }
    },

    // go to task 
    task : function () {
        // nav btn animation 
        activeNavBtn('taskBtn');

        // insert html 
        let wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = structures.taskHtml;
        
        // listing the task 
        taskStatus('current');
    },

    // go to achievement 
    achievement : function () {
        console.log('achievement');
        activeNavBtn('achievementBtn')
    },

    // go to members 
    members : function () {
        // nav btn animation
        activeNavBtn('membersBtn')
        
        // insert html 
        let wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = structures.membersHtml;

        // list all the members
        const membersContainer = document.getElementById('membersContainer');
        for (let i = 0; i < membersDetails.length; i++) {
            membersContainer.innerHTML += `
                <div class="membersComponent">
                    <div>
                        <h3>${i+1}.</h3>
                        <p>${membersDetails[i].name}. <br> <span>${membersDetails[i].position}</span></p>
                    </div>
                    <button onclick="location.href='${membersDetails[i].portfolio}'">Portfolio</button>
                </div>
            `;
        }
    },
}

direction('task');
function direction(page) {
    switch (page) {
        case 'home':
            caseFunctions.home()
            break;
        case 'task':
            caseFunctions.task()
            break;
        case 'achievement':
            caseFunctions.achievement()
            break;
        case 'members':
            caseFunctions.members()
            break;
        default:
    }
}





  








