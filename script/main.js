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
            // set src
            newSubImg.src = "images/" + objectIndex.images[index]; 
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
    
})();
