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
        container.empty();

        data.forEach(item => {
            const itemHTML = `
            <div class="col-12 col-md-6 mb-4 crepe-col">
                <div class="d-flex menu-div h-100 overflow-hidden">
                    <div class="p-3 col-8 d-flex flex-column justify-content-center">
                        <h5 class="fw-bold text-white granny">${item.title}</h5>
                        <p class="mb-2 text-white guarantee">${item.description}</p>
                        <span class="text-white guarantee">${item.price}</span>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <img src="${item.image}" class="img-fluid w-100 h-100 object-fit-cover" alt="${item.title}">
                    </div>
                </div>
            </div>
        `;
            container.append(itemHTML);
        });

        // Center the last item if total is odd
        const total = container.children('.crepe-col').length;
        if (total % 2 !== 0) {
            container.children('.crepe-col').last().addClass('offset-md-3');
        }
    });

    $.getJSON('json files/chocolatedips.json', function (data) {
        const container = $('#chocolatedips-items');
        container.empty();

        data.forEach(item => {
            const itemHTML = `
            <div class="col-12 col-md-6 mb-4 dip-col">
                <div class="d-flex menu-div h-100 overflow-hidden">
                    <div class="p-3 col-8 d-flex flex-column justify-content-center">
                        <h5 class="fw-bold text-white granny">${item.title}</h5>
                        <span class="text-white guarantee">${item.price}</span>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <img src="${item.image}" class="img-fluid w-100 h-100 object-fit-cover" alt="${item.title}">
                    </div>
                </div>
            </div>
        `;
            container.append(itemHTML);
        });

        // Center the last item if there is an odd number of items
        const items = container.children('.dip-col');
        if (items.length % 2 !== 0) {
            items.last().addClass('offset-md-3'); // centers 6-column div (6 + 3 offset = center)
        }
    });


    $.getJSON('json files/milkshakes.json', function (data) {
        const container = $('#milkshakes-items');
        container.empty();

        data.forEach(item => {
            const itemHTML = `
            <div class="col-12 col-md-6 mb-4 milkshake-col">
                <div class="d-flex menu-div h-100 overflow-hidden">
                    <div class="p-3 col-8 d-flex flex-column justify-content-center">
                        <h5 class="fw-bold text-white granny">${item.title}</h5>
                        <p class="mb-2 text-white guarantee">${item.description}</p>
                        <span class="text-white guarantee">${item.price}</span>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <img src="${item.image}" class="img-fluid w-100 h-100 object-fit-cover" alt="${item.title}">
                    </div>
                </div>
            </div>
        `;
            container.append(itemHTML);
        });

        // Center last item if total is odd
        const total = container.children('.milkshake-col').length;
        if (total % 2 !== 0) {
            container.children('.milkshake-col').last().addClass('offset-md-3');
        }
    });


    $.getJSON('json files/specials.json', function (data) {
        const container = $('#specials-items');
        container.empty();

        data.forEach(item => {
            const itemHTML = `
            <div class="col-12 col-md-6 mb-4 specials-col">
                <div class="d-flex menu-div h-100 overflow-hidden">
                    <div class="p-3 col-8 d-flex flex-column justify-content-center">
                        <h5 class="fw-bold text-white granny">${item.title}</h5>
                        <p class="mb-2 text-white guarantee">${item.description}</p>
                        <span class="text-white guarantee">${item.price}</span>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <img src="${item.image}" class="img-fluid w-100 h-100 object-fit-cover" alt="${item.title}">
                    </div>
                </div>
            </div>
        `;
            container.append(itemHTML);
        });

        // Center the last item if there's an odd number
        const items = container.children('.specials-col');
        if (items.length % 2 !== 0) {
            items.last().addClass('offset-md-3'); // centers 6-column wide div
        }
    });

    $.getJSON('json files/mojitos.json', function (data) {
        const row = $('#mojitos-items');
        row.empty();

        data.forEach((item, index) => {
            const col = $(`
            <div class="col-6 col-md-3 mb-4 ">
                <div class="p-3 rounded h-100 d-flex flex-column justify-content-between text-white menu-div">
                        <h5 class="fw-bold text-center granny">${item.title}</h5>
                        <img src="${item.image}" class="img-fluid rounded text-center text-white" alt="${item.title}">
                        <p class="mb-2 text-center guarantee">${item.description}</p>
                        
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