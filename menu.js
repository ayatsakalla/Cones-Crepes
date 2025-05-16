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
                    <div class="d-flex menu-div h-100 overflow-hidden">
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
                    <div class="d-flex menu-div h-100 overflow-hidden">
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
                    <div class="d-flex menu-div h-100 overflow-hidden">
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

    $.getJSON('json files/specials.json', function (data) {
        const container = $('#specials-items');

        data.forEach(item => {
            const itemHTML = `
                <div class="col-12 col-md-6 mb-4">
                    <div class="d-flex menu-div h-100 overflow-hidden">
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

    $.getJSON('json files/mojitos.json', function (data) {
        const row = $('#mojitos-items');
        row.empty();

        data.forEach((item, index) => {
            const col = $(`
            <div class="col-6 col-md-3 mb-4">
                <div class="p-3 border rounded h-100 d-flex flex-column justify-content-between bg-white">
                    <div>
                        <h5 class="fw-bold">${item.title}</h5>
                        <p class="text-muted mb-2">${item.description}</p>
                    </div>
                    <img src="${item.image}" class="img-fluid rounded" alt="${item.title}">
                </div>
            </div>
        `);
            row.append(col);
        });

        // Center the last row on medium+ screens if items don't fill full row
        const itemsInLastRow = row.children().length % 4;
        if (itemsInLastRow !== 0) {
            const offset = Math.floor((4 - itemsInLastRow) * 3 / 2); // 3 cols per card
            row.children().last().addClass(`offset-md-${offset}`);
        }
    });


});