import TimeBar from './timebar.js'
import AppList from './appList.js';
import Alarm from './alarm.js';
import Memo from './memo.js'
import Picture from './picture.js';
import '../css/style.css';

class App {

    constructor($app){
        this.app = $app;

        this.timebar = new TimeBar(this.app);
        this.appList = new AppList(this.app, (appOne, appList) => {
            
            const className = appOne.className.split(' ')[1];
            
            if(className === 'alarmButton'){
                this.alarm = new Alarm(this.app, appList);

            }else if(className === 'memoButton'){
                this.memo = new Memo(this.app, appList);
            }else if(className === 'pictureButton'){

                this.picture = new Picture(this.app, appList);
            }

        });

    }


}

const $app = document.querySelector('.app');

const myApp = new App($app);

