//Page 2 filter by category and weather

//all images as object with category and wether propetires
var wardrobepage2 = [
  {
    img: "images/resized/Bag-removebg-preview.png",
    category: "Outerwear",
    weather: "Cold",
  },
  {
    img: "images/resized/sweaterknit-removebg-preview.png",
    category: "Tops",
    weather: "Cold",
  },
  {
    img: "images/resized/botttuta1-removebg-preview.png",
    category: "Bottoms",
    weather: "Rainy",
  },
  {
    img: "images/resized/coatrain-removebg-preview.png",
    category: "Outerwear",
    weather: "Rainy",
  },
  {
    img: "images/resized/shirtwhite-removebg-preview.png",
    category: "Tops",
    weather: "Warm",
  },
  {
    img: "images/resized/longsleevecasual-removebg-preview.png",
    category: "Tops",
    weather: "Rainy",
  },
  {
    img: "images/resized/Sweater-removebg-preview.png",
    category: "Tops",
    weather: "Cold",
  },
  {
    img: "images/resized/jacketleather-removebg-preview.png",
    category: "Outerwear",
    weather: "Cold",
  },
  {
    img: "images/resized/jacketserious1-removebg-preview.png",
    category: "Outerwear",
    weather: "Warm",
  },
  {
    img: "images/resized/longsleevesport-removebg-preview.png",
    category: "Tops",
    weather: "Rainy",
  },
  {
    img: "images/resized/shortsearious-removebg-preview.png",
    category: "Bottoms",
    weather: "Warm",
  },
  {
    img: "images/resized/Hoodie-removebg-preview.png",
    category: "Tops",
    weather: "Cold",
  },
  {
    img: "images/resized/jacketjeans-removebg-preview.png",
    category: "Outerwear",
    weather: "Rainy",
  },
  {
    img: "images/resized/shortj-removebg-preview.png",
    category: "Bottoms",
    weather: "Warm",
  },
  {
    img: "images/resized/bottjeans1-removebg-preview.png",
    category: "Bottoms",
    weather: "Rainy",
  },
  {
    img: "images/resized/coatwinter-removebg-preview.png",
    category: "Outerwear",
    weather: "Cold",
  },
  {
    img: "images/resized/shoeswhite-removebg-preview.png",
    category: "Outerwear",
    weather: "Rainy",
  },
  {
    img: "images/resized/bagheart-removebg-preview.png",
    category: "Outerwear",
    weather: "Warm",
  },
  {
    img: "images/resized/shoesblack-removebg-preview.png",
    category: "Outerwear",
    weather: "Cold",
  },
  {
    img: "images/resized/blouse-removebg-preview.png",
    category: "Tops",
    weather: "Rainy",
  },
  {
    img: "images/resized/skirt-removebg-preview.png",
    category: "Bottoms",
    weather: "Warm",
  },
  {
    img: "images/resized/hoodieopen-removebg-preview.png",
    category: "Outerwear",
    weather: "Warm",
  },

  {
    img: "images/resized/shoessandale-removebg-preview.png",
    category: "Outerwear",
    weather: "Warm",
  },
  {
    img: "images/resized/dressopen-removebg-preview.png",
    category: "One piece",
    weather: "Warm",
  },
  {
    img: "images/resized/botttutaser-removebg-preview.png",
    category: "Bottoms",
    weather: "Cold",
  },
  {
    img: "images/resized/skirtblue-removebg-preview.png",
    category: "Bottoms",
    weather: "Warm",
  },
  {
    img: "images/resized/coatsoft-removebg-preview.png",
    category: "Outerwear",
    weather: "Warm",
  },
  {
    img: "images/resized/tshirt2-removebg-preview.png",
    category: "Tops",
    weather: "Warm",
  },
  {
    img: "images/resized/sweaterknit-removebg-preview.png",
    category: "Tops",
    weather: "Cold",
  },
  {
    img: "images/resized/Tshirtmusic-removebg-preview.png",
    category: "Tops",
    weather: "Warm",
  },
  {
    img: "images/resized/Tshirtf1-removebg-preview.png",
    category: "Tops",
    weather: "Warm",
  },
  {
    img: "images/resized/shoestaka-removebg-preview.png",
    category: "Outerwear",
    weather: "Warm",
  },
  {
    img: "images/resized/bottWhiteJeans-removebg-preview.png",
    category: "Bottoms",
    weather: "Warm",
  },
  {
    img: "images/resized/logsleeveopen-removebg-preview.png",
    category: "Tops",
    weather: "Rainy",
  },
  {
    img: "images/resized/dressserious-removebg-preview.png",
    category: "One piece",
    weather: "Warm",
  },
  {
    img: "images/resized/LinenBlousef1-removebg-preview.png",
    category: "Tops",
    weather: "Warm",
  },
  {
    img: "images/resized/dresswinter-removebg-preview.png",
    category: "One piece",
    weather: "Cold",
  },
  {
    img: "images/resized/Jumpswit-removebg-preview.png",
    category: "One piece",
    weather: "Warm",
  },
  {
    img: "images/resized/longsleevecasual-removebg-preview.png",
    category: "Tops",
    weather: "Rainy",
  },
];
// console.log(wardrobepage2);

// Helper helper function to clean text strings from paths dynamically for screen readers
function getItemLabel(filename) {
  const name = filename.split('/').pop().split('.').shift();
  return name
    .replace(/[_-]/g, ' ')
    .replace(/preview|removebg|resized/gi, '')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase());
}

// auto fit scaling function for the clothes layers
function fitClothing(layerId, imgElement, scaleFactor = 1) {
  const layer = document.getElementById(layerId);
  const wrapper = document.querySelector(".model-wrapper");

  if (!layer || !wrapper) return;

  const img = new Image();
  img.src = imgElement.src;

  img.onload = function () {
    const modelWidth = wrapper.offsetWidth;
    const naturalWidth = img.naturalWidth;

    const scale = (modelWidth / naturalWidth) * scaleFactor;

    layer.style.transform = `translateX(-50%) scale(${scale})`;
    layer.style.transformOrigin = "top center";
  };
}
//  Setup variables
var currIndex = 0;
var itemsForPage = 8;
var currentList = wardrobepage2;

//  The function to show the grid
function showItems(list) {
  var allitems = document.getElementById("items-container");
  if (!allitems) return;

  allitems.innerHTML = ""; // Clear grid
  currentList = list;

  // Check for empty list
  if (currentList.length === 0) {
    allitems.innerHTML = "<p>No clothes items for this collection</p>";
    return;
  }

  // Reset index-suffered to catch this 2 hours
  if (currIndex >= currentList.length) {
    currIndex = 0;
  }

  var visible = currentList.slice(currIndex, currIndex + itemsForPage);

  //    for (let j = 0; j < visible.length; j++) {
  //      const itemNow = visible[j];
  // Accessibility Fix: Using functional forEach but wrapping structures cleanly into semantic buttons
  visible.forEach(function (itemNow) {
    // Kept original class wrapper context intact
    const div = document.createElement("div");
    div.classList.add("item");
    div.style.padding = "0"; 

    // Accessibility Fix: Converted raw click targeting from an image to a semantic focusable button
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "item-action-wrapper";
    btn.style.width = "100%";
    btn.style.height = "100%";
    btn.style.background = "none";
    btn.style.border = "none";
    btn.style.padding = "0";
    btn.style.cursor = "pointer";

    const img1 = document.createElement("img");
    img1.src = itemNow.img;
    img1.style.width = "100%";
    img1.style.height = "auto";

    // Accessibility Fix: Map descriptive readable alt values for screen reader contexts
    const readableTitle = getItemLabel(itemNow.img);
    img1.alt = readableTitle;
    btn.setAttribute("aria-label", "Select and overlay " + readableTitle + " onto mannequin");

    // Core functionality function extracted so both click and keyboard trigger it perfectly
    const handleOutfitSelection = function () {
      // Find the correct layer
      // We replace spaces with dashes to match the ID format
      const categoryId = "layer-" + itemNow.category.replace(" ", "-");
      const targetLayer = document.getElementById(categoryId);

      if (targetLayer) {
        const adjust = {
          Tops: 1.4,
          Bottoms: 1.4,
          "One piece": 1.6,
          Outerwear: 1.3,
        };

        fitClothing(categoryId, img1, adjust[itemNow.category]);

        // If is one piece , hide Tops and Bottoms
        if (itemNow.category === "One piece") {
          document.getElementById("layer-Tops").style.display = "none";
          document.getElementById("layer-Bottoms").style.display = "none";
        }

        //  If it's a Top or Bottom, hide the One piece
        else if (
          itemNow.category === "Tops" ||
          itemNow.category === "Bottoms"
        ) {
          document.getElementById("layer-One-piece").style.display = "none";
        }

        // Update and show the layer
        targetLayer.src = itemNow.img;
        targetLayer.style.display = "block";
      }
    };

    // CLICK TO ADD WEARS TO  MODEL
    btn.onclick = handleOutfitSelection;

    // Accessibility Fix: Ensure keyboard interactions execute beautifully when pressing Enter or Spacebar
    btn.onkeydown = function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOutfitSelection();
      }
    };

    // must be outside the onclick function
    btn.appendChild(img1);
    div.appendChild(btn);
    allitems.appendChild(div);
  });
}

// filter helper fux to get values of checkboxes
function getValues(className) {
  var values = [];
  var boxes = document.getElementsByClassName(className);
  for (var z = 0; z < boxes.length; z++) {
    if (boxes[z].checked) {
      values.push(boxes[z].value);
    }
  }
  return values;
}

// filter logic
function filterItems() {
  var chosenCategories = getValues("category");
  var chosenWeather = getValues("weather");

  var filtered = wardrobepage2.filter(function (wear) {
    var categoryOk =
      chosenCategories.length === 0 || chosenCategories.includes(wear.category);
    var weatherOk =
      chosenWeather.length === 0 || chosenWeather.includes(wear.weather);
    return categoryOk && weatherOk;
  });

  currIndex = 0;
  showItems(filtered);
}

// event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Checkboxes
  var checkboxes = document.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((box) => box.addEventListener("change", filterItems));

  // Reset Button
  document.getElementById("reset-outfit").onclick = function () {
    const layers = document.querySelectorAll(".clothes-layer");
    layers.forEach((layer) => {
      layer.style.display = "none";
      layer.src = "";
    });
  };

  // Next Button
  const nextBtn = document.getElementById("g2-nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      if (currIndex + itemsForPage < currentList.length) {
        currIndex += itemsForPage;
        showItems(currentList);
      }
    });
  }

  // Previous Button
  const prevBtn = document.getElementById("g2-prevBtn");
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      if (currIndex - itemsForPage >= 0) {
        currIndex -= itemsForPage;
        showItems(currentList);
      }
    });
  }

  // Initial Load
  showItems(wardrobepage2);
});