class Picture{

    constructor(app, appList){
        this.app = app;
        this.appList = appList;
        this.picture = document.createElement('div');
        this.picture.setAttribute('class','picture');
        this.app.appendChild(this.picture);
        
        this.render();
    }

    render(){
            const headerButton = document.querySelector('.header.button.back');
            console.log(headerButton);
            headerButton.style.visibility = 'visible';

            headerButton.addEventListener('click', (e) => {
                this.picture.remove();
                this.app.appendChild(this.appList);
                headerButton.style.visibility = 'hidden';
                
            });
            
            
            this.pictureBar = document.createElement('div');
            this.pictureBar.setAttribute('class','pictureBar');
    
        }



}

export default Picture;