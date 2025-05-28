const increment = 3;
let currentIndex = increment; // Start after prepended clones
let totalCards = 0;
const visibleCards = 3;

$.getJSON('json files/favorites.json', function (data) {
    const track = $('#carousel-track');
    const items = [...data]; // Copy to preserve original
    totalCards = items.length;

    // Clone last N and first N for looping
    const prepend = items.slice(-visibleCards);
    const append = items.slice(0, visibleCards);

    const allItems = [...prepend, ...items, ...append];

    allItems.forEach(item => {
        const card = `
            <div class="carousel-card">
                <div class="card-content">
                    <h4 class="granny">${item.title}</h4>
                    <p class="guarantee" style="font-size: 12px;">${item.description}</p>
                    <img src="${item.image}" class="img-fluid rounded mb-2" alt="${item.title}">
                </div>
            </div>
        `;
        track.append(card);
    });

    // Set initial position
    $('#carousel-track').css('transform', `translateX(-${currentIndex * (100 / visibleCards)}%)`);
});

function updatePosition() {
    $('#carousel-track').css('transition', 'transform 0.5s ease');
    $('#carousel-track').css('transform', `translateX(-${currentIndex * (100 / visibleCards)}%)`);
}

function jumpTo(index) {
    $('#carousel-track').css('transition', 'none');
    $('#carousel-track').css('transform', `translateX(-${index * (100 / visibleCards)}%)`);
    currentIndex = index;
}

$('#carousel-right').on('click', function () {
    currentIndex++;
    if (currentIndex >= totalCards + visibleCards) {
        setTimeout(() => jumpTo(visibleCards), 510);
    }
    updatePosition();
});

$('#carousel-left').on('click', function () {
    currentIndex--;
    if (currentIndex <= 0) {
        setTimeout(() => jumpTo(totalCards), 510);
    }
    updatePosition();
});

$(window).on('load', function () {
    $('.elfsight-app-424744fd-e393-4d6e-a80a-7c0860072f8f').find('a').last().attr('style', 'display: none !important');
});