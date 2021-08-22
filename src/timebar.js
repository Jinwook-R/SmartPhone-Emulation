import '../css/style.css'

class TimeBar {

    constructor($app, timeSetter){
        this.app = $app;
        this.timeSetter = timeSetter;
        this.render();
    }

    render(){

        const header = document.createElement('nav');
        header.setAttribute('class', 'header');

        const backButton = document.createElement('a');
        backButton.setAttribute('class', 'header button back');
        backButton.textContent = 'BACK';

        const timebar = document.createElement('div');
        timebar.setAttribute('class', 'timebar');
        
        const newButton = document.createElement('a');
        newButton.setAttribute('class', 'header button new');
        newButton.textContent = 'NEW';

        header.appendChild(backButton);
        header.appendChild(timebar);
        header.appendChild(newButton);

        setInterval(() => { 
            const now = new Date();
            timebar.textContent = this.makeTime(now);
        }, 1000);

        this.app.appendChild(header);


    }

    makeTime(now){

        const year    = now.getFullYear();	// 연도
        const month   = now.getMonth();
        const date    = now.getDate();	// 일
        const hours   = now.getHours();	// 시간
        const minutes = now.getMinutes();	// 분
        const seconds = now.getSeconds();	// 초

        return `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`;
    }
}

export default TimeBar;