// html structures  
const structures = {
    homeHtml : `
        <div class="homePage">
            <header>
                <h5>Code To Destiny || Pacify Team</h5>
                <h3>
                    Hi! <span id="user"></span><br>
                    Nice to meet you.
                </h3>
            </header>
        
            <section class="autoScrollImg">
                <div id="imgContainer" class="imgContainer">
                    
                </div>
            </section>
                
            <section class="ourGoal">
                <h5><span>Our goal</span></h5>
                <h4>Explore your imagination with just three things.</h4>
                <p>Our destiny is to have the dare for developing a responsive web-site with a best UI/UX. Every members should contribute with their best to any tasks or projects uploaded. Building a good team co-ordination and resulted the exchange of familiarity in HTML, CSS & Js with your dedication.  </p>
            </section>
        
            <footer id="footer">
            
            </footer>
        </div>
    `,

    taskHtml : `
        <div class="taskPage">
            <header>
                <div class="expand" tabindex="0"></div>
                    <!-- <div class="background"></div> -->
                <div class="box">
                    <img src="banner/codeToDestinyLight.png" alt="">
                    <div class="card" id="front"></div>
                    <div class="card" id="back"></div>
                    <div class="card" id="left"></div>
                    <div class="card" id="right"></div>
                    <div class="card" id="top"></div>
                    <div class="card" id="bottom"></div>
                </div>
            </header>
            
            <section class="parent">
                <div class="subNav">
                    <div>
                        <button class='recent' onclick=taskStatus('recent')>
                            <i class="fa-solid fa-clock-rotate-left"></i>
                        </button>
                        <p>Recent</p>
                    </div>
                    <div>
                        <button class='current' onclick=taskStatus('current')>
                            <i class="fa-solid fa-gears"></i>
                        </button>
                        <p>Current</p>
                    </div>
                    <div>
                        <button class='upcoming' onclick=taskStatus('upcoming')>
                            <i class="fa-solid fa-shield-halved"></i>
                        </button>
                        <p>Upcoming</p>
                    </div>
                    <div>
                        <button class='completed' onclick=taskStatus('completed')>
                            <i class="fa-solid fa-circle-check"></i>
                        </button>
                        <p>Completed</p>
                    </div>
                </div>

                <div class="taskListContainer" id="taskListContainer">
                    
                </div>
            </section>
        </div>
    `,

    membersHtml : `
        <div class="membersPage">
            <header class="membersHeader">
                <h3>
                    <span>Hi!</span> I’m <br>
                    <span>Salam Priyansu Meitei,</span> <br>
                    Leader and Supervisor of <br>
                    <span>Pacify Team.</span>
                </h3>
                <img src="banner/pacifyLeader2.png" alt="">
            </header>

            <section>
                <button class="join" onclick="location.href='https://forms.gle/WBZgeirmeygz1AZi9'" >Join</button>
                <button class="review" onclick="location.href='https://forms.gle/5YVChZr1RLvXzjm68'">Review</button>
            </section>

            <section class="membersWrapper">
                <h4>Members :</h4>
                <section id="membersContainer">
                    
                </section>
            </section>

            <footer>
                <p>
                    We are one family. <br>
                    Strong bonding, Cooperation, <br>
                    Learning new skills are our key priority.
                </p>
            </footer>
        </div>
    `,
};

const membersDetails = [
    {
        id : '01',
        name : 'Salam Priyansu Meitei',
        position : 'Leader',
        portfolio : 'https://psmluwang.github.io/portfolio/'
    },
    {
        id : '02',
        name : 'Salam Swamidutta Singh',
        position : 'Member',
        portfolio : '#'
    },
    {
        id : '03',
        name : 'Kishan Meitei',
        position : 'Member',
        portfolio : 'https://kishanmeitei.github.io/portfolio/my-portfolio'
    },
    {
        id : '04',
        name : 'Irom Deepakumar Singh',
        position : 'Member',
        portfolio : '#'
    },
    {
        id : '05',
        name : 'Shamulailatpam Dudeja Sharma',
        position : 'Member',
        portfolio : '#'
    },
];

// course show in footer
const course = [
    {
        logo : "html.png",
        definition : "HTML5 is used for structuring and presenting content on the web.",
    },
    {
        logo : "css.jpg",
        definition : "CSS3 used for styling and layout of web pages.",
    },
    {
        logo : "js.png",
        definition : "JavaScript is a high-level language used for client-side scripting on the web.",
    }
]
// auto slide img in home page
const autoScrollImgList = [
    'banner/img1.webp',
    'banner/img2.webp',
    'banner/img3.webp',
    'banner/img4.webp',
    'banner/img5.jpg',
    'banner/img6.webp',
]


// task details 
const taskDetails = [
    {
        id : '01',
        title : "Develop an Interactive Portfolio.",
        postDate : "28-10-2024",
        deadline : "31-10-2024",
        thumbnail : "thumbnail01.jpeg",
        description : 'A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic. <br><br>Create your own design to develop your portfolio for yourself. The above photos are the examples of it. You can add additional information as well as you can add link of your social media accounts to understand more about you. <br><br> - Use HTML, CSS, Js (optional). <br> - Understand HTML structure. <br> - Gain more knowledge on CSS properties. <br></br>',
        media : [
            'task-img/thumbnail01.jpeg',
            'task-img/portfolio02.png',
            'task-img/portfolio03.png',
            'task-img/portfolio04.jpg',
            'task-img/portfolio05.png',
            'task-img/portfolio06.jpg',
            'task-img/portfolio07.png',
        ],
    },
    {
        id : '02',
        title : "Complete HTML and CSS properties.",
        postDate : "28-10-2024",
        deadline : "03-11-2024",
        thumbnail : "thumbnail02.jpeg",
        description : 'To be a Master in HTML and CSS, research more on HTML tags and CSS properties. Develop a minimum of 2 or 3 static websites. <br><br># HTML (Hypertext Markup Language)<br>It is a standard markup language used to create web pages. It gives the structure and content of web pages. <br><br>Main HTML elements:<br> - Headings (h1-h6)<br>- Paragraphs (p)<br>- Links (a)<br>- Images (img)<br>- Lists (ul, ol, li)<br>- Tables (table, tr, td)<br>- Forms (form, input, textarea)<br>- Divisions (div, span)<br><br>CSS (Cascading Style Sheets)<br>It is a styling language used to control the layout and appearance of web pages written in HTML<br><br>Main CSS concepts:<br>- Selectors (e.g., .class, #id, tag)<br>- Properties (e.g., background-color, padding)<br>- Values (e.g., #fff, 16px)<br>- Box model (margin, border, padding, content)<br>- Layout (display, position, float)',
        media : [
            'task-img/thumbnail02.jpeg',
            'task-img/html.png',
            'task-img/html-tags.png',
            'task-img/css.jpg',
            'task-img/css2_cheat_sheet.jpg',
        ],
    },
    {
        id : '03',
        title : "Learning layout structure.",
        postDate : "13-11-2024",
        deadline : "17-11-2024",
        thumbnail : "thumbnail03.png",
        description : 'Develop the above page. And add the href link accourdingly. <br><br>Facebook : href="https://www.facebook.com/"<br>Instagram : href="https://www.instagram.com/"<br>X (Twitter) : href="https://twitter.com/"',
        media : [
            'task-img/thumbnail03.png',
            'task-img/fb.png',
            'task-img/ig.jpg',
            'task-img/x.jpg',
        ],
    },
    {
        id : '04',
        title : "Develop a Sign in page.",
        postDate : "15-11-2024",
        deadline : "19-11-2024",
        thumbnail : "thumbnail04.png",
        description : 'Use a form and put all the input elements inside the form. Focus on the layout. No need to add external links in any buttons or elements.',
        media : [
            'task-img/thumbnail04.png',
            'task-img/fb.png',
            'task-img/google.png',
        ],
    },
];

// nav btn animation
function activeNavBtn(active) {
    document.querySelector(".homeBtn").classList.remove("activeNavBtn");
    document.querySelector(".taskBtn").classList.remove("activeNavBtn");
    document.querySelector(".achievementBtn").classList.remove("activeNavBtn");
    document.querySelector(".membersBtn").classList.remove("activeNavBtn");

    document.querySelector(`.${active}`).classList.add("activeNavBtn");
}

function taskStatus(status) {
    document.querySelector(".recent").classList.remove("activeStatusBtn");
    document.querySelector(".current").classList.remove("activeStatusBtn");
    document.querySelector(".upcoming").classList.remove("activeStatusBtn");
    document.querySelector(".completed").classList.remove("activeStatusBtn");
    document.querySelector(`.${status}`).classList.add("activeStatusBtn");

    let taskListContainer = document.getElementById('taskListContainer');
    taskListContainer.innerHTML = ``;
    for (let i = 0; i < taskDetails.length; i++) {
        const post = parseInt((taskDetails[i].postDate).split('-').reverse().join(''));
        const dead = parseInt((taskDetails[i].deadline).split('-').reverse().join(''));
        const currentDate = new Date();
        const today = parseInt(`${currentDate.getFullYear()}${currentDate.getMonth() + 1}${currentDate.getDate()}`);
        const taskChildHtml = `
            <div>
                <div class="taskThumbnail">
                    <img src="task-img/${taskDetails[i].thumbnail}" alt="">
                    <div>
                        ${taskDetails[i].title}
                    </div>
                </div>
                <div class="taskDetails">
                    <div onclick="window.location.href='taskDetails.html?value=${i}'">
                        <p>Details</p>
                    </div>
                    <p>
                        <span>ID : ${taskDetails[i].id}</span> <br>
                        Post : ${taskDetails[i].postDate} <br>
                        Deadline : ${taskDetails[i].deadline}
                    </p>
                </div>
            </div>
        `;
        
        if (status == 'recent') {
            if (post <= today && today <= dead && today-post <= 1) {
                taskListContainer.innerHTML += taskChildHtml;
            }
        } else if (status == 'current') {
            if (post <= today && today <= dead) {
                taskListContainer.innerHTML += taskChildHtml;
            }
        } else if (status == 'upcoming') {
            if (today < post) {
                taskListContainer.innerHTML += taskChildHtml;
            }
        } else if (status == 'completed') {
            if (dead < today) {
                taskListContainer.innerHTML += taskChildHtml;
            }
        }
    }

    if (taskListContainer.innerHTML == ``) {
        taskListContainer.innerHTML = `
            <div>
                <p style="color: black; margin-block: 100px">No tasks to show &#129300</p>
            </div>
        `;
    }
}
