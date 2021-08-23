import '../css/style.css'

class Alarm {

    constructor(app, appList) {
        
        this.appList = appList;
        this.app = app;
        this.alarm = document.createElement('div');
        this.alarm.setAttribute('class','alarm');
        
        this.beforeRender();
        this.render();
    }

    beforeRender() {
        if(localStorage.getItem('alarm')){

            this.alarm.innerHTML = localStorage.getItem('alarm');
            this.app.appendChild(this.alarm);
            
            if(document.querySelector('.timeSelectBar')){
                document.querySelector('.timeSelectBar').remove();
            }

            const alarmContents = document.querySelectorAll('.alarmOne');

            alarmContents.forEach((e) => {
                const contents = e.textContent.split(' ');

                const ampm = contents[0];
                const hour = contents[1].substring(0,1);
                const minute = contents[2].substring(0,2);
                
                const alarmOne = document.createElement('div');
                alarmOne.setAttribute('class','alarmOne');
                
                alarmOne.textContent = `${ampm} ${hour}시 ${minute}분`;

                const deleteButton = e.childNodes[1];
                deleteButton.setAttribute('class','delete');
                deleteButton.setAttribute('type','button');
                deleteButton.value = '삭제';
                
                deleteButton.addEventListener('click', (e) => {
                    e.target.parentNode.remove();
                    localStorage.setItem('alarm',this.alarm.innerHTML);
                });

                let timeChecker = setInterval(() => {
                    let checkHour = hour;
                    if(ampm === '오후'){
                        checkHour = String(12+ Number(hour));
                    }
                    const now     = new Date();
                    const hours   = now.getHours();	// 시간
                    const minutes = now.getMinutes();	// 분
                    
                    if(checkHour == hours && minute == minutes){
                        alarmOne.remove();
                        localStorage.setItem('alarm',this.alarm.innerHTML);
                        clearInterval(timeChecker);
                    }
                },1000);
            });
        }
    }

    render() {
        
        const headerButton = document.querySelectorAll('.header.button');

        headerButton.forEach((e) => {
            e.style.visibility = 'visible';

            if(e.className === 'header button back'){

                e.addEventListener('click', () => {
                    this.alarm.remove();
                    this.app.appendChild(this.appList);
                    e.style.visibility = 'hidden';
                    document.querySelector('.new').style.visibility = 'hidden';
                    
                });

            }else if(e.className === 'header button new'){
                
                e.addEventListener('click',(e) => {
                    
                    const timeSelectBar = document.createElement('div');
                    timeSelectBar.setAttribute('class', 'timeSelectBar');
                    
                    timeSelectBar.innerHTML = `
                    <div class='timeForm'>
                        <select class='ampm' size="1">
                            <option value="오전">오전</option>
                            <option value="오후">오후</option>
                        </select>                
                        <input class='hour' type="number" min="1" max="12" step="1" value="1" required>
                        <input class='minute' type="number" min="00" max="59" step="10" value="00" required>
                    </div>
                    <input class='save' type="button" value="저장">`;

                    this.alarm.insertAdjacentElement('afterbegin', timeSelectBar);
                    this.saveButton = document.querySelector('.save');
                                        
                    this.saveButton.addEventListener('click', () => {

                        const $ampm = document.querySelector('.ampm');
                        const ampm = $ampm.options[$ampm.selectedIndex].value;
                        
                        const hour = document.querySelector('.hour').value;
                        const minute = document.querySelector('.minute').value;
                        
                        const alarmOne = document.createElement('div');
                        alarmOne.setAttribute('class','alarmOne');
                        
                        alarmOne.textContent = `${ampm} ${hour}시 ${minute}분`;
                        
                        const deleteButton = document.createElement('input');
                        deleteButton.setAttribute('class','delete');
                        deleteButton.setAttribute('type','button');
                        deleteButton.value = '삭제';
                        
                        deleteButton.addEventListener('click', (e) => {
                            e.target.parentNode.remove();
                            localStorage.setItem('alarm',this.alarm.innerHTML);
                        });

                        let timeChecker = setInterval(() => {
                            let checkHour = hour;
                            if(ampm === '오후'){
                                checkHour = String(12+ Number(hour));
                            }
                            const now = new Date();
                            const hours   = now.getHours();	// 시간
                            const minutes = now.getMinutes();	// 분
                            
                            if(checkHour == hours && minute == minutes){
                                alarmOne.remove();
                                localStorage.setItem('alarm',this.alarm.innerHTML);
                                clearInterval(timeChecker);
                            }
                        },1000);
                        
                        alarmOne.appendChild(deleteButton);
                        this.alarm.appendChild(alarmOne);
                        
                        timeSelectBar.remove();
                        localStorage.setItem('alarm',this.alarm.innerHTML);
                    });
                });
            }
        });


        this.app.appendChild(this.alarm);

    }


}

export default Alarm;