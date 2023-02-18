const d=document;
const countSections=d.querySelectorAll('section');
const ul=d.querySelector('.navUl');
const btn=d.querySelector('.btn');
const landingPage=d.querySelector('.landingPage');
let html=``;

//fetching ul chiled dynamic li with dynamic class 
for(let i=1;i<=countSections.length;i++)
{
html+=`<li class="liClassStyle li-${i}"> <a href="#section${i}">Section ${i}</a></li>`;
ul.innerHTML=html;
};
const liAll=d.querySelectorAll('li');
//to UP botton 
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    // document.body.scrollTop=5;
    // document.documentElement.scrollTop=5;
    landingPage.scrollIntoView({behavior:'smooth'});

});


//On scroll functions
window.onscroll = function() {

    //adding active class according viewport
    countSections.forEach((section,index)=>{
        
        let checking = isInViewport(section);
        //spacify each section to each a tag
        liAll[index].addEventListener('click',(e)=>{
            e.preventDefault();
            //scrolling into section smooth
            section.scrollIntoView({behavior:"smooth"});
        });
        //checking if sec is in view port 
        if(checking[0])
        { 
            //adding active state for view port sections
            section.classList.add('active-states');
            //add active state for link clicked 
            liAll[index].classList.add('your_active_class');
            return;
        }
        else{
            // remove li active class
            liAll[index].classList.remove('your_active_class');
            return;
        }
    });
    //Displaying navBar According view
    if (document.body.scrollTop >=5 || document.documentElement.scrollTop >=5) {
        document.getElementById("navbar").classList.add("navBar");
        document.getElementById("navbar").style.top = "10px";
        btn.style.display="block";
    }
    else 
    {   //hidding nav bar when goes top
        document.getElementById("navbar").style.top = "-100%";
        btn.style.display="none";
    }

    
};
//view port function  
function isInViewport(section) {
    const view = section.getBoundingClientRect();
    let val=[];
    //assigning value of view port
    val[0]= 
        view.top >= -200 &&
        view.left >= 0 &&
        view.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        view.right <= (window.innerWidth || document.documentElement.clientWidth);
    val[1]=view;
    return (val);
}
