class Memo {

    constructor(app, appList){

        this.app = app;
        this.appList = appList;
        this.memo = document.createElement('div');
        this.memo.setAttribute('class','memo');
        this.app.appendChild(this.memo)
        this.beforeRender();
        this.render();
    }

    beforeRender() {
        
        if(localStorage.getItem('memo')){

            this.memo.innerHTML = localStorage.getItem('memo');
            // this.app.appendChild(this.memo);
            
            if(document.querySelector('.inputForm')){
                document.querySelector('.inputForm').remove();
            }

            const memoContents = document.querySelectorAll('.memoOne');
            memoContents.forEach((e) => {
                e.addEventListener('click',(e)=>{
                    const otherMemoOne = document.querySelectorAll('.memoOne');
                    for(const one of otherMemoOne){
                        one.style.height = '3em';
                    }
                    e.target.style.height= '100%';

                })
            });
        }
        
    }

    render() {
        
        const headerButton = document.querySelectorAll('.header.button');
        headerButton.forEach((e) => {
            e.style.visibility = 'visible';

            if(e.className === 'header button back'){

                e.addEventListener('click',() => {

                    this.memo.remove();
                    this.app.appendChild(this.appList);
                    e.style.visibility = 'hidden';
                    document.querySelector('.new').style.visibility = 'hidden';
                });

            }else if(e.className === 'header button new'){
                console.log(this.appList);
                e.addEventListener('click', (e) => {
                    
                    const inputForm = document.createElement('div');
                    inputForm.setAttribute('class', 'inputForm');
                    
                    inputForm.innerHTML = `<input class='inputMemo' type="text" placeholder="메모를 입력하세요">`;
                    
                    this.memo.insertAdjacentElement('afterbegin', inputForm);
                    
                    
                    const inputMemo = document.querySelector('.inputMemo');
                    
                    inputForm.addEventListener('keyup', (e) => {
                        
                        if(e.key === 'Enter'){
                            console.log(inputMemo.value);
                            const memoOne = document.createElement('p');
                            memoOne.setAttribute('class','memoOne');

                            memoOne.innerText = inputMemo.value;
                            
                            memoOne.addEventListener("click", (e)=>{
                                
                                const otherMemoOne = document.querySelectorAll('.memoOne');
                                for(const one of otherMemoOne){
                                    one.style.height = '3em';
                                }
                                e.target.style.height= '100%';
                            });

                            this.memo.appendChild(memoOne);
                            inputForm.remove();
                            localStorage.setItem('memo',this.memo.innerHTML);
                        }
                    
                    });

                });
                
            }
        });

        
    }


}

export default Memo;