let nav = document.getElementById('navbar');

let home = document.getElementById('home')

let topIcon = document.querySelector('.fixed-icon')

window.onscroll = () => {

    if(window.scrollY >=  (home.scrollHeight-1) ){
        
        nav.style.cssText = 'background: rgba(0, 0, 0, 0.9) !important; padding-top: .5rem !important; padding-bottom:.5rem !important' 
    }
    else{
        nav.style.cssText = 'background: transparent !important; padding-top: 1rem !important; padding-bottom: 1rem !important'
    }

    if(window.scrollY > 50){
        topIcon.style.cssText = 'display: flex'

    }
    else{
        topIcon.style.cssText= 'display:none'

    }

}



topIcon.onclick = () => {
    window.scrollTo({top:0})
}

