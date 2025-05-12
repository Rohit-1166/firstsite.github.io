//const myHeading = document.querySelector("h1"); //stores a refrence to <h1> in a variable(myHeading)
//myHeading.textContent = "Hello Mozilla"; // update the text content of <h1>

// Adding an image changer{use JavaScript and DOM API features to alternate the display between two images. This change will happen when a user clicks the displayed image.}

const myImage = document.querySelector("Img");
myImage.addEventListener("click",()=>{
    const mysrc = myImage.getAttribute("src");
    if(mysrc==="download.jpeg"){
        myImage.setAttribute("src","mozilla.jpg");
    }
    else{
        myImage.setAttribute("src","download.jpeg");
    }
}); 

/*Every time the <img> is clicked, the function does the following:

---Retrieves the value of the image's src attribute.

--Uses a conditional (if ... else structure) to check if the src value is equal to the path of the original image:

-If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element.
-If it isn't (meaning the image has already been changed), the src value swaps back to the original image path.*/

// Adding a personalised message for welcomne{hange the page heading to show a personalized welcome message when the user first visits the site}

let myButton = document.querySelector("button"); //creates references to the new button and the heading, storing each inside variables:
let myHeading = document.querySelector("h1");

/*function setUsername(){
    const myName = prompt("Please enter your name !"); //prompt--asks the user to enter data and stores it in a variable after they click OK.
    if(!myName){
        setUsername();
    }
    else{
        localStorage.setItem("name",myName); //WebstorageAPI --use the localStorage.setItem() function to create and store a data item called "name", setting its value to the myName variable, which contains the user's input.
        myHeading.textContent = 'Hello Mozilla , ${myName}'; //set the textContent of the heading to a string that includes the user's stored name.
    }
}*/

function setUserName(){
    const myname = prompt("Enter your name !");
    localStorage.setItem("name",myname);
    myHeading.textContent = `Hello Mozilla,${myname}`;
}

if(!localStorage.getItem("name")){ //check whether the name data item is not already stored in localStorage
    setUserName();//If not, the setUserName() function runs to create it
}
else{//If it exists (that is, the user set a username during a previous visit)
    const storedName = localStorage.getItem("name");//retrieve the stored name using localStorage.getItem()
    myHeading.textContent = `Mozilla is cool , ${storedName}`;// set the textContent of the heading to a string, plus the user's name – just like we did inside setUserName().
}

myButton.addEventListener("click",() => { //Add a click event handler function to the button. When clicked, setUserName() runs. This allows the user to store a different name if they want to.
    setUserName();
});

