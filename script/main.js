(function (){
    var theImages = document.querySelectorAll('.image-holder'),
        theHeading = document.querySelector('.heading'),
        theSubhead = document.querySelector('.main-copy h2'),
        theSeasonText = document.querySelector('.main-copy p'),
        appliedClass;
    
    //want to change the content
    function changeElemnts(){
    //////////////////    debugger;// trap to stop execution
        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];
        
        //remove the duplicate image 
        while(subImages.firstChild){
            subImages.removeChild(subImages.firstChild);
        }
        
        // add image to the bottom of the page
        objectIndex.images.forEach(function(image,index){
            //create an image element
            let newSubImg = document.createElement('img');
            // add css class to it
            newSubImg.classList.add('thumb');
            // set src of the image
            newSubImg.src = "images/" + objectIndex.images[index]; 
            //set the window for the lightbox
            newSubImg.dataset.index = index;
            //eventlistner for lightbox
            newSubImg.addEventListener('click',function(){ popLightbox(index, objectIndex);},false);
            //add it to the page 
            subImages.appendChild(newSubImg);
        })
        
        // remove the color applied last
        theSubhead.classList.remove(appliedClass);
        theHeading.classList.remove(appliedClass);
        
        // change the text using value and property
        theSubhead.firstChild.nodeValue=objectIndex.headline;
        theSeasonText.firstChild.nodeValue=objectIndex.text;
        
        //add color to the text
        theSubhead.classList.add(this.id);
        theHeading.classList.add(this.id);
        appliedClass=this.id;

    }
    theImages.forEach(function(image,index){
        //add an event handelr to each image
        image.addEventListener('click',changeElemnts,false);
    })
    
    // triger lightbox
    function popLightbox(currentIndex, currentObject){
        //debugger;
        // move up the window to the top every time we click
        window.scrollTo(0,0);
        document.body.style.overflow='hidden';
        // triger the lightbox so we can see it
        // set the class for the lightbox of css
        let lightbox = document.querySelector('.lightbox');
        //set the image for the lightbox
        let lightboxImg = lightbox.querySelector('img');
        //set the text for the lightbox
        let lightboxDesc = lightbox.querySelector('p');
        //set the close button for the lightbox
        let lightboxClose = document.querySelector('.close-lightbox');
        //lightbox will appear from this
        lightbox.style.display='block';
        //set source of the lightbox's image
        lightboxImg.src = "images/" + currentObject.images[currentIndex];
        //set the text for the lightbox
        lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];
        //eventlistner for the closing of the lightbox
        lightboxClose.addEventListener('click',closeLightbox,false);
}
    function closeLightbox(){
        // reset every thing 
        //debugger;
        let lightbox = document.querySelector('.lightbox');
        //set the display of lightbox to none it will disappear
        lightbox.style.display='none';
        //set the window bac to the normal view
        document.body.style.display='block';
        //set the window bac to the normal view
        document.body.style.overflow='visible';
}
    //document.querySelector('#spring').click();
    //set the listners to change the seasons
    changeElemnts.call(document.querySelector('#summer'));
    changeElemnts.call(document.querySelector('#autumn'));
    changeElemnts.call(document.querySelector('#winter'));
    changeElemnts.call(document.querySelector('#spring'));
})();
