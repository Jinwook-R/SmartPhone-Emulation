import '../css/style.css';

class AppList {

    constructor($app,onClick){

        this.app = $app;
        this.render();
        this.onClick = onClick;
        this.handlePageChange();
        this.handleDragAndDrop();
    }

    setLocalStorage(){
        localStorage.setItem('appList',this.appList.innerHTML);
    }

    render(){
        this.appList = document.createElement('div');
        this.appList.setAttribute('class', 'appList');

        if(localStorage.getItem('appList')){
            this.appList.innerHTML = localStorage.getItem('appList');
        }else{

            this.makeAppOne('알람', 'alarmButton');
            this.makeAppOne('메모', 'memoButton');
            this.makeAppOne('사진', 'pictureButton');
        }
        
        this.app.appendChild(this.appList);
    }

    makeAppOne(appName, className){
        
        const appOne = document.createElement('a');

        appOne.setAttribute('class', `button ${className}`);
        appOne.setAttribute('draggable', 'true'); 
        appOne.textContent = appName;
        this.appList.appendChild(appOne);
    }

    handlePageChange(handlePageChangeCallBack){

        const dragButtons = document.querySelectorAll('.button');

        dragButtons.forEach(dragButton => {
            dragButton.addEventListener('click', (e) => {
                this.setLocalStorage('appList',this.appList);
                this.onClick(e.target, this.appList);
                this.appList.remove();
            })
        });
    }

    handleDragAndDrop(){
        
        const dragButtons = document.querySelectorAll('.button');
        
        dragButtons.forEach( dragButton => {
            dragButton.addEventListener('dragstart', () => {
                dragButton.classList.add('dragging');
            });   

            dragButton.addEventListener('dragend', () => {
                dragButton.classList.remove('dragging');
                this.setLocalStorage();
            });
        });

        this.appList.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = this.getDragAfterElement(e.clientX);
            const dragButton = document.querySelector('.dragging');
            if(!afterElement){
                this.appList.appendChild(dragButton) //가장 오른쪽에 저장    
            }else{
                this.appList.insertBefore(dragButton, afterElement)
            }
        })
    }

    getDragAfterElement(x) {
        const draggableElements = [...this.appList.querySelectorAll('.button:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {

            const box = child.getBoundingClientRect();
            const offset = x - box.left - box.width / 2
            
            if (offset < 0 && offset > closest.offset){

                return {element : child}
            }else{
                return closest
            }

        }, {offset: Number.NEGATIVE_INFINITY}).element
    }
}

export default AppList;
