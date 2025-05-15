$(document).ready(function () {

    $('.menu-selection').hide();

    $('.menu-nav-btn').on('click', function () {
        const target = $(this).data('target');

        // Hide all sections
        $('.menu-selection').hide();

        // Show the clicked one
        $(target).show();

        // Optional: manage active state
        $('.menu-nav-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
    });


    $.getJSON('json files/crepes.json', function (data) {
        const container = $('#crepe-items');

        data.forEach(item => {
            const itemHTML = `
                <div class="col-12 col-md-6 mb-4">
                    <div class="d-flex border rounded shadow-sm h-100 overflow-hidden">
                        <div class="p-3 col-8 d-flex flex-column justify-content-center">
                            <h5 class="fw-bold text-white granny">${item.title}</h5>
                            <p class="mb-2 text-white guarantee">${item.description}</p>
                            <span class="fw-semibold text-white guarantee">${item.price}</span>
                        </div>
                        <div class="col-4 d-flex align-items-center">
                            <img src="${item.image}" class="img-fluid w-100 h-100 object-fit-cover" alt="${item.title}">
                        </div>
                    </div>
                </div>
            `;
            container.append(itemHTML);
        });
    });

    $.getJSON('json files/chocolatedips.json', function (data) {
        const container = $('#chocolatedips-items');

        data.forEach(item => {
            const itemHTML = `
                <div class="col-12 col-md-6 mb-4">
                    <div class="d-flex border rounded shadow-sm h-100 overflow-hidden">
                        <div class="p-3 col-8 d-flex flex-column justify-content-center">
                            <h5 class="fw-bold text-white granny">${item.title}</h5>
                            <span class="fw-semibold text-white guarantee">${item.price}</span>
                        </div>
                        <div class="col-4 d-flex align-items-center">
                            <img src="${item.image}" class="img-fluid w-100 h-100 object-fit-cover" alt="${item.title}">
                        </div>
                    </div>
                </div>
            `;
            container.append(itemHTML);
        });
    });

    $.getJSON('json files/milkshakes.json', function (data) {
        const container = $('#milkshakes-items');

        data.forEach(item => {
            const itemHTML = `
                <div class="col-12 col-md-6 mb-4">
                    <div class="d-flex border rounded shadow-sm h-100 overflow-hidden">
                        <div class="p-3 col-8 d-flex flex-column justify-content-center">
                            <h5 class="fw-bold text-white granny">${item.title}</h5>
                            <p class="mb-2 text-white guarantee">${item.description}</p>
                            <span class="fw-semibold text-white guarantee">${item.price}</span>
                        </div>
                        <div class="col-4 d-flex align-items-center">
                            <img src="${item.image}" class="img-fluid w-100 h-100 object-fit-cover" alt="${item.title}">
                        </div>
                    </div>
                </div>
            `;
            container.append(itemHTML);
        });
    });

});