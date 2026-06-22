//Home page preview wardrobe

// Lets store in the array all the images we want to preview  with their sketch version
var wardrobe = [
  {
    real: "images/jacketleather.png",
    sketch: "images/sketch/jacketleather-sk.png",
  },
  { real: "images/coatwinter.png", sketch: "images/sketch/coatwinter-sk.png" },
  { real: "images/Bag.png", sketch: "images/sketch/Bag-sk.png" },
  { real: "images/tshirt2.jpg", sketch: "images/sketch/tshirt2-sk.jpg" },
  {
    real: "images/longsleevesport.jpg",
    sketch: "images/sketch/longsleevesport-sk.jpg",
  },
  { real: "images/Hoodie.jpg", sketch: "images/sketch/Hoodie-sk1.jpg" },
  {
    real: "images/jacketjeans.jpg",
    sketch: "images/sketch/jacketjeans-sk.jpg",
  },
  { real: "images/shortj.png", sketch: "images/sketch/shortj-sk.png" },
  { real: "images/botttuta1.jpg", sketch: "images/sketch/botttuta1-sk.jpg" },
  { real: "images/bottjeans1.png", sketch: "images/sketch/bottjeans1-sk.png" },
  {
    real: "images/dressserious.png",
    sketch: "images/sketch/dressserious-sk.png",
  },
  { real: "images/coatrain.jpg", sketch: "images/sketch/coatrain-sk.jpg" },
  { real: "images/bagheart.jpg", sketch: "images/sketch/bagheart-sk.jpg" },
  { real: "images/shoesblack.jpg", sketch: "images/sketch/shoesblack-sk.jpg" },
  { real: "images/blouse.png", sketch: "images/sketch/blouse-sk.png" },
  { real: "images/skirt.png", sketch: "images/sketch/skirt-sk.png" },
  { real: "images/hoodieopen.jpg", sketch: "images/sketch/hoodieopen-sk.jpg" },
  {
    real: "images/Jacketserious1.jpg",
    sketch: "images/sketch/Jacketserious1-sk.jpg",
  },
  {
    real: "images/shoessandale.jpg",
    sketch: "images/sketch/shoessandale-sk.jpg",
  },
  { real: "images/dressopen.jpg", sketch: "images/sketch/dressopen-sk.jpg" },
  {
    real: "images/botttutaser.jpg",
    sketch: "images/sketch/botttutaser-sk.jpg",
  },
  { real: "images/skirtblue.jpg", sketch: "images/sketch/skirtblue-sk.jpg" },
  { real: "images/coatsoft.jpg", sketch: "images/sketch/coatsoft-sk.jpg" },
  {
    real: "images/sweaterknit.jpg",
    sketch: "images/sketch/sweaterknit-sk.jpg",
  },
  {
    real: "images/Tshirtmusic.jpg",
    sketch: "images/sketch/Tshirtmusic-sk.jpg",
  },
  { real: "images/Tshirtf1.jpg", sketch: "images/sketch/Tshirtf1-sk.jpg" },
  {
    real: "images/bottWhiteJeans.png",
    sketch: "images/sketch/bottWhiteJeans-sk.png",
  },
  {
    real: "images/shoesboot.jpg",
    sketch: "images/sketch/shoesboot-sk.jpg",
  },
  {
    real: "images/logsleeveopen.jpg",
    sketch: "images/sketch/logsleeveopen-sk.jpg",
  },
  {
    real: "images/LinenBlousef1.jpg",
    sketch: "images/sketch/LinenBlousef1-sk.jpg",
  },
  {
    real: "images/dresswinter.jpg",
    sketch: "images/sketch/dresswinter-sk.jpg",
  },
  { real: "images/Jumpswit.png", sketch: "images/sketch/Jumpswit-sk.png" },
  {
    real: "images/longsleevecasual.jpg",
    sketch: "images/sketch/longsleevecasual-sk.jpg",
  },
  { real: "images/shoestaka.jpg", sketch: "images/sketch/shoestaka-sk.jpg" },
];
// console.log(wardrobe);

// Helper mapping function to automatically generate human-friendly labels for screen readers
function getItemLabel(filename) {
  const name = filename.split("/").pop().split(".").shift();
  return name
    .replace(/[_-]/g, " ")
    .replace(/preview|removebg/gi, "")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// define the current index and how many items we want to see for page
var currentIndex = 0;
var itemsPage = 5;

// console.log(currentIndex, itemsPage, wardrobe.length);

//function to  show images
function showImages() {
  var container = document.getElementById("material"); //Get the element container where images will be placed
  container.innerHTML = ""; //first lets clear old images
  var visibleItems = wardrobe.slice(currentIndex, currentIndex + itemsPage);

  for (var i = 0; i < visibleItems.length; i++) {
    const item = visibleItems[i]; //Get the current object from the array
    // console.log("The first 5 items are: ", item);

    // Accessibility Fix: Wrap the interactive item in a semantic button element for keyboard focus
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "item-btn-wrapper";
    btn.style.background = "none";
    btn.style.border = "none";
    btn.style.padding = "0";
    btn.style.cursor = "pointer";

    const img = document.createElement("img"); //create the image element
    img.src = item.real; //Set the source of the image to the real image path
    img.classList.add("g-image"); //Add the g-image  class for styling

    // Accessibility Fix: Provide clear alternative descriptive text labels dynamically
    const readableName = getItemLabel(item.real);
    img.alt = readableName + " preview";
    btn.setAttribute("aria-label", "View interactive " + readableName);

    // console.log("Show item image real: " + item.real);

    // from real to sketch on enter
    btn.onmouseenter = function () {
      img.src = item.sketch;
    };
    // console.log("Sketch version: " + item.sketch);

    // from  sketch to real on leave
    btn.onmouseleave = function () {
      img.src = item.real;
    };

    // Accessibility Fix: Tie interactive hover actions to focus transitions for keyboard-only visitors
    btn.onfocus = function () {
      img.src = item.sketch;
    };
    btn.onblur = function () {
      img.src = item.real;
    };

    //put the image inside the button container, then attach to the main grid view
    btn.appendChild(img);
    container.appendChild(btn);
  }
}

// next button
document.getElementById("next-Btn").addEventListener("click", () => {
  if (currentIndex + itemsPage < wardrobe.length) {
    currentIndex += itemsPage; // move 5 steps after
    // currentIndex += 1; // move 1 step
    showImages();
  }
});

// previous button
document.getElementById("prev-Btn").addEventListener("click", () => {
  if (currentIndex - itemsPage >= 0) {
    currentIndex -= itemsPage; //move 5 steps before
    // currentIndex -= 1;
    showImages();
  }
});

//  first loading of images on the page
showImages();
