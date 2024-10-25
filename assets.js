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

// nav btn animation
function activeNavBtn(active) {
    document.querySelector(".homeBtn").classList.remove("activeNavBtn");
    document.querySelector(".taskBtn").classList.remove("activeNavBtn");
    document.querySelector(".achievementBtn").classList.remove("activeNavBtn");
    document.querySelector(".membersBtn").classList.remove("activeNavBtn");

    document.querySelector(`.${active}`).classList.add("activeNavBtn");
}
