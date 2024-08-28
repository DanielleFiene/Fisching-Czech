// Get all images and the modal elements
const images = document.querySelectorAll('.column1 img');
const modal = document.createElement('div');
const modalImg = document.createElement('img');
const modalClose = document.createElement('span');
const modalPrev = document.createElement('span');
const modalNext = document.createElement('span');
let currentIndex = 0;

// Create modal structure
modal.classList.add('modal');
modalClose.classList.add('modal-close');
modalPrev.classList.add('modal-prev');
modalNext.classList.add('modal-next');

modalClose.innerHTML = '&times;';
modalPrev.innerHTML = '&#10094;';
modalNext.innerHTML = '&#10095;';
modal.appendChild(modalClose);
modal.appendChild(modalPrev);
modal.appendChild(modalNext);
modal.appendChild(modalImg);
document.body.appendChild(modal);

// Open modal when image is clicked
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openModal(img.src);
    });
});

// Open modal function
function openModal(src) {
    modalImg.src = src;
    modal.style.display = 'block';
}

// Close modal function
modalClose.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}

// Navigate to previous image
modalPrev.addEventListener('click', showPrevImage);

function showPrevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    modalImg.src = images[currentIndex].src;
}

// Navigate to next image
modalNext.addEventListener('click', showNextImage);

function showNextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    modalImg.src = images[currentIndex].src;
}

// Close modal if clicked outside of the image
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'Escape') {
            closeModal();
        }
    }
});

// Modal styles
const modalStyle = `
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    overflow: auto;
    animation: fadeIn 0.5s ease;
}
.modal img {
    max-width: 90%;
    max-height: 80%;
    margin: auto;
    display: block;
    animation: zoomIn 0.5s ease;
}
.modal-close, .modal-prev, .modal-next {
    position: absolute;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
}
.modal-close {
    top: 15px;
    right: 25px;
}
.modal-prev {
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
}
.modal-next {
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
@keyframes zoomIn {
    from { transform: scale(0.9); }
    to { transform: scale(1); }
}
`;

// Append modal styles to head
const styleTag = document.createElement('style');
styleTag.innerHTML = modalStyle;
document.head.appendChild(styleTag);
