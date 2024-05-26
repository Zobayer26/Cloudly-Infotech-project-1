const slider = document.getElementById('slider');
const itemWidth = 400; // Width of each item plus spacing
let currentPosition = 0;
const totalItems = slider.childElementCount;
const maxTranslateX = -(itemWidth * (totalItems - 1));

function handleClick() {
    currentPosition -= itemWidth;
    if (currentPosition < maxTranslateX) {
        currentPosition = maxTranslateX; // Prevent moving beyond the last item
    }
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(${currentPosition}px)`;
}

function prevHandleClick() {
    currentPosition += itemWidth;
    if (currentPosition > 0) {
        currentPosition = 0; // Prevent moving before the first item
    }
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(${currentPosition}px)`;
}


function toggleSideBar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}

function hideSideBar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.add('hidden');
}