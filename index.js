var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');


for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
       
        var interval = setInterval(function(){
            var tatgetCordinate = targetSection.getBoundingClientRect();
            if(tatgetCordinate.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },50);

    });
}


var progressBar = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;


function intialiseBars(){
    for(let bar of progressBar){
        bar.style.width = 0 +'%';
    }
}
intialiseBars();

function fillBars(){
    for(let bar of progressBar){
        let value = bar.getAttribute('data-bar-width');
        let current =0;
       let interval = setInterval(function(){
        if(current>value){
            clearInterval(interval);
            return;
        }
        current++;
        bar.style.width = current +'%';
       },5);
    }
}

function redirectToNewTab(url){
    window.open(url, '_blank');
}

function checkScroll(){
    
    var cordinate = skillContainer.getBoundingClientRect();
    if(!animationDone && cordinate.top<=window.innerHeight){
        animationDone = true;
        console.log("Skill section");
        
        fillBars();
        
    }
    else if(cordinate.top>window.innerHeight){
        animationDone = false;
        intialiseBars();
    }

}