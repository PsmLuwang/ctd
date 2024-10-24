const userInput = prompt("Please enter your name:");
        if (userInput != '' && userInput !== null) {
            document.getElementById('user').innerText = userInput + ".";
        }
        
        const autoScrollImgList = [
            'banner/img1.webp',
            'banner/img2.webp',
            'banner/img3.webp',
            'banner/img4.webp',
            'banner/img5.jpg',
            'banner/img6.webp',
        ]       
        let i = 0;
        let imgContainer = document.getElementById('imgContainer');
        imgContainer.innerHTML =`
            <img src="${autoScrollImgList[i]}" alt="">
        `;
        setInterval(() => {
            i = (i+1) % autoScrollImgList.length;
            imgContainer.innerHTML = `<img src="${autoScrollImgList[i]}" alt="">`;
        }, 3500);


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

        let footer = document.getElementById("footer");
        for (let i = 0; i < course.length; i++) {
            footer.innerHTML += `
                <div>
                    <img src="banner/${course[i].logo}" alt="">
                    <p>${course[i].definition}</p>
                </div>
            `;
        }