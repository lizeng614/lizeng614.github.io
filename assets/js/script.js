// 滚动主图像库
function scrollGallery(direction) {
  mainImages[currentImageIndex].style.display = 'none';
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex += mainImages.length;
  } else if (currentImageIndex >= mainImages.length) {
    currentImageIndex -= mainImages.length;
  }

  mainImages[currentImageIndex].style.display = 'block';
}

// 滚动和高亮缩略图
function moveStausImageHighlight(direction) {
  // Remove the highlighted class from the previously highlighted image
  oldStatusImageIndex = middleIndex - direction;
  if (oldStatusImageIndex < 0) {
    oldStatusImageIndex += mainImages.length;
  } else if (oldStatusImageIndex >= mainImages.length) {
    oldStatusImageIndex -= mainImages.length;
  }

  statusImages[oldStatusImageIndex].classList.remove('highlighted');
  statusImages[oldStatusImageIndex].classList.add('non-highlighted');

  // Add the 'highlighted' class to the new highlighted image
  statusImages[middleIndex].classList.add('highlighted');
  statusImages[middleIndex].classList.remove('non-highlighted');
}


function initializeStatusGallery() {
  // Ensure all images are non-highlighted
  statusImages.forEach(image => image.classList.remove('highlighted'));
  statusImages.forEach(image => image.classList.add('non-highlighted'));

  // Highlight the initial status image
  statusImages[currentStatusImageIndex].classList.remove('non-highlighted');
  statusImages[currentStatusImageIndex].classList.add('highlighted');
}


function updateStatusGallery(direction) {
  moveIdx = direction;
  if (moveIdx >= 1) {
    while (moveIdx >= 1) {
      const firstImage = statusImages.shift();
      statusImages.push(firstImage);
      moveIdx -= 1;
    }
  }
  else if (moveIdx <= -1) {
    while (moveIdx <= -1) {
      const lastImage = statusImages.pop();
      statusImages.unshift(lastImage);
      moveIdx += 1;
    }
  }
  moveStausImageHighlight(direction)

  // Clear the existing status images from the DOM
  while (statusGallery.firstChild) {
    statusGallery.removeChild(statusGallery.firstChild);
  }

  // Append the status images to the statusGallery in the new order
  new_data_image_idx = 1
  statusImages.forEach(image => {
    image.setAttribute('data-image', new_data_image_idx);
    statusGallery.appendChild(image);
    new_data_image_idx += 1;
  });
}

// Function to handle click on a status image
function handleStatusImageClick(event) {
  // Get the clicked status image
  const clickedStatusImage = event.target.closest('.status-image-container');
  console.log(clickedStatusImage)
  if (!clickedStatusImage) return; // Ensure a status image was clicked

  // Get the data-image attribute to identify the selected image
  const selectedImageIndex = parseInt(clickedStatusImage.getAttribute('data-image')) - 1;


  // Move the clicked status image to the center
  const statusGallery = document.querySelector('.status-gallery');
  const statusImages = statusGallery.querySelectorAll('.status-image-container');
  const middleIndex = Math.floor(statusImages.length / 2);
  const direction = selectedImageIndex - middleIndex;

  updateStatusGallery(direction);
  scrollGallery(direction);

}

// select the middle image to display
function prepareGalleryVariable() {
  mainImages = document.querySelectorAll('.image-container');
  statusGallery = document.querySelector('.status-gallery');
  statusImages = [...document.querySelectorAll('.status-image-container')];
  middleIndex = Math.floor(mainImages.length / 2);
  currentImageIndex = middleIndex;
  currentStatusImageIndex = middleIndex;
  statusImages.forEach(image => {
    image.addEventListener('click', handleStatusImageClick);
  });

}

function generateStatusGallery(statusImagePaths) {
  const statusGallery = document.getElementById("status-gallery");
  statusGallery.innerHTML = '';

  statusImagePaths.forEach((imagePath, index) => {
    const statusImageContainer = document.createElement("div");
    statusImageContainer.classList.add("status-image-container");
    statusImageContainer.setAttribute("data-image", index + 1);

    const img = document.createElement("img");
    img.classList.add("status-image");
    img.src = imagePath;
    img.alt = `Status Image ${index + 1}`;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    statusImageContainer.appendChild(img);
    statusImageContainer.appendChild(overlay);

    statusGallery.appendChild(statusImageContainer);
  });
}

function generateGallery(imagePaths) {
  console.log('trigger')
  const galleryContainer = document.getElementById("gallery");
  galleryContainer.innerHTML = '';
  middleIndex = Math.floor(imagePaths.length / 2);
  imagePaths.forEach((imagePath, index) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.display = index === middleIndex ? "block" : "none";

    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = `Image ${index + 1}`;

    imageContainer.appendChild(img);
    galleryContainer.appendChild(imageContainer);
  });
}

/*code to load new content*/
function loadBalticSeaContent() {
  console.log("load baltic sea")
  generateGallery(baticSeaImages);
  generateStatusGallery(baticSeaImages);
  prepareGalleryVariable();
  initializeStatusGallery();
}

function loadEuropeEearly2020sContent() {
  console.log("europe")
  generateGallery(europe2020sImages);
  generateStatusGallery(europe2020sImages);
  prepareGalleryVariable();
  initializeStatusGallery();
}


document.getElementById('left-arrow').addEventListener('click', () => {
  scrollGallery(-1);
  updateStatusGallery(-1);
});

document.getElementById('right-arrow').addEventListener('click', () => {
  scrollGallery(1);
  updateStatusGallery(1);
});



let mainImages, statusGallery, statusImages
let middleIndex, currentImageIndex, currentStatusImageIndex



mainImages = document.querySelectorAll('.image-container');
statusGallery = document.querySelector('.status-gallery');
statusImages = [...document.querySelectorAll('.status-image-container')];
middleIndex = Math.floor(mainImages.length / 2);
currentImageIndex = middleIndex;
currentStatusImageIndex = middleIndex;
statusImages.forEach(image => {
  image.addEventListener('click', handleStatusImageClick);
});
/*4 JavaScript to handle hamburger menu and overlay menu*/

const overlayMenu = document.getElementById('overlay-menu');
const hamburgerIcon = document.getElementById('menuToggle');
const closeMenuButton = document.getElementById('close-menu');

hamburgerIcon.addEventListener('click', () => {
  overlayMenu.style.display = 'block';
});

closeMenuButton.addEventListener('click', () => {
  overlayMenu.style.display = 'none';
});


const baticSeaImages = [
  "photos/baltic_sea/h1.jpeg",
  "photos/baltic_sea/h2.jpeg",
  "photos/baltic_sea/h3.jpeg",
  "photos/baltic_sea/h4.jpeg",
  "photos/baltic_sea/v1_wave.jpeg",
  "photos/baltic_sea/v2_wave.jpeg",
  "photos/baltic_sea/v3_wave.jpeg",
  "photos/baltic_sea/v4_wave.jpeg",
  "photos/baltic_sea/v5_wave.jpeg",
  "photos/baltic_sea/v6.jpeg",
];
const europe2020sImages = [
  "photos/europe_2020s/h1.jpeg",
  "photos/europe_2020s/h2.jpeg",
  "photos/europe_2020s/h3.jpeg",
  "photos/europe_2020s/h4.jpeg",
  "photos/europe_2020s/h5.jpeg",
  "photos/europe_2020s/v1.jpeg",
  "photos/europe_2020s/v2.jpeg",
  "photos/europe_2020s/v3.jpeg",
  "photos/europe_2020s/v4.jpeg",
];

// Function to load content based on the hash value
function loadContentBasedOnHash() {
  const hash = window.location.hash;
  switch (hash) {
    case '#baltic-sea':
      loadBalticSeaContent();
      break;
    case '#europe2020':
      // Load content for Section 2
      loadEuropeEearly2020sContent();
      break;
    case '#section3':
      // Load content for Section 3
      loadSection3Content();
      break;
    // Add more cases for other sections as needed
    default:
    // Default action if the hash doesn't match any known sections
    //loadDefaultContent();
  }
}

// Load content when the page initially loads
window.addEventListener('load', loadContentBasedOnHash);

// Listen for hash changes (e.g., when clicking links with href="#sectionX")
window.addEventListener('hashchange', loadContentBasedOnHash);



// Call the function to generate the status gallery




/*
function loadBalticSeaContent() {
    dynamicGallery.innerHTML = `
        <h1>Baltic Sea Section</h1>
        <p>This is the content for the Baltic Sea section.</p>
        <!-- Include images and other content as needed -->
    `;
    dynamicGalleryStatus.innerHTML = `
    <h1>Baltic Sea Section</h1>
    <p>This is the content for the Baltic Sea section.</p>
    <!-- Include images and other content as needed -->
    `;
}

// Function to load content for the Europe Late 2010s section
function loadEuropeLate2010sContent() {
    dynamicGallery.innerHTML = `
        <h1>Europe Late 2010s Section</h1>
        <p>This is the content for the Europe Late 2010s section.</p>
        <!-- Include images and other content as needed -->
    `;
}*/

// Add event listeners to your menu items to load content when clicked

// By default, load content for the Baltic Sea section when the page loads



