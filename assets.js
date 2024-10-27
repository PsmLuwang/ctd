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
                <div class="background"></div>
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
                        <button>
                            <i class="fa-solid fa-clock-rotate-left"></i>
                        </button>
                        <p>Recent</p>
                    </div>
                    <div>
                        <button id="current">
                            <i class="fa-solid fa-gears"></i>
                        </button>
                        <p>Current</p>
                    </div>
                    <div>
                        <button>
                            <i class="fa-solid fa-shield-halved"></i>
                        </button>
                        <p>Upcoming</p>
                    </div>
                    <div>
                        <button>
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
        postDate : "28th Oct 2024",
        deadline : "31st Oct 2024",
        thumbnail : "thumbnail01.jpeg",
        description : '',
        media : [],
    },
    {
        id : '02',
        title : "Complete HTML and CSS properties.",
        postDate : "28th Oct 2024",
        deadline : "3rd Nov 2024",
        thumbnail : "thumbnail02.jpeg",
        description : '',
        media : [],
    }
];

// nav btn animation
function activeNavBtn(active) {
    document.querySelector(".homeBtn").classList.remove("activeNavBtn");
    document.querySelector(".taskBtn").classList.remove("activeNavBtn");
    document.querySelector(".achievementBtn").classList.remove("activeNavBtn");
    document.querySelector(".membersBtn").classList.remove("activeNavBtn");

    document.querySelector(`.${active}`).classList.add("activeNavBtn");
}
