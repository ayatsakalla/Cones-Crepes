
let currentIndex = 0;
let totalCards = 0;

$.getJSON('json files/favorites.json', function (data) {
    const track = $('#carousel-track');
    track.empty();

    data.forEach(item => {
        const card = `
    <div class="carousel-card">
        <div class="card-content">
            <h5 class="text-white granny">${item.title}</h5>
            <p class="text-white guarantee" style="font-size: 12px;">${item.description}</p>
            <img src="${item.image}" class="img-fluid rounded mb-2" alt="${item.title}">
        </div>
    </div>
    `;
        track.append(card);
    });

    totalCards = data.length;
});

$('#carousel-right').on('click', function () {
    if (currentIndex < totalCards - 3) {
        currentIndex++;
        $('#carousel-track').css('transform', `translateX(-${currentIndex * (100 / 3)}%)`);
    }
});

$('#carousel-left').on('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        $('#carousel-track').css('transform', `translateX(-${currentIndex * (100 / 3)}%)`);
    }
});

