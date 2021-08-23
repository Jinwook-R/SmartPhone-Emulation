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
            
            this.pictureBar.innerHTML = 
            `
                <img class='pictureOne' src='../images/cookie.png' alt='' width=150px height=150px>
                <img class='pictureOne' src='../images/cookie2.png' alt='' width=150px height=150px>
                <img class='pictureOne' src='../images/dog2.jpeg' alt='' width=150px height=150px>
                <img class='pictureOne' src='../images/pizza.png' alt='' width=150px height=150px>
                <img class='pictureOne' src='../images/pizza2.png' alt='' width=150px height=150px>
                <img class='pictureOne' src='../images/profile02.png' alt='' width=150px height=150px>
                <img class='pictureOne' src='../images/spiderman.jpeg' alt='' width=150px height=150px>
                <img class='pictureOne' src='../images/waffle.png' alt='' width=150px height=150px>
                <img class='pictureOne' src='../images/waffle2.png' alt='' width=150px height=150px>`
            
            this.picture.appendChild(this.pictureBar)

            let isDown = false;
            let startX;
            let scrollLeft;

            this.pictureBar.addEventListener('mousedown', (e) => {
                isDown = true;
                this.pictureBar.classList.add('active');
                startX = e.pageX - this.pictureBar.offsetLeft;
                
                scrollLeft = this.pictureBar.scrollLeft;

            });

            this.pictureBar.addEventListener('mouseleave', () => {
                isDown = false;
                this.pictureBar.classList.add('remove');
            });

            this.pictureBar.addEventListener('mouseup', () => {
                isDown = false;
                this.pictureBar.classList.add('remove');
            });

            this.pictureBar.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - this.pictureBar.offsetLeft;
                const walk = (x - startX) * 3;
                this.pictureBar.scrollLeft = scrollLeft - walk;
            });
        
            const pictureOneList = document.querySelectorAll('.pictureOne');

            for(const pictureOne of pictureOneList){
                console.log(pictureOne);
                pictureOne.addEventListener('click', (e) => {
        
                    pictureOneList.forEach((e)=>{
                        e.style.border = 'none';
                    });
                    pictureOne.style.border = 'solid orange 3px';

                    if(document.querySelector('.bigPictureOne')) 
                    document.querySelector('.bigPictureOne').remove();

                    this.bigPictureOne = document.createElement('div');
                    this.bigPictureOne.setAttribute('class','bigPictureOne');

                    this.bigPictureOne.innerHTML = `<img class='bigPictureOneImage' src="${e.target.src}">`;

                    this.picture.appendChild(this.bigPictureOne);
                });


                

            }
        
        
        
        
        
        
        }

}

export default Picture;