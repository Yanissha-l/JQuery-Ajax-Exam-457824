$(document).ready(function () {

    $("#retrieve-resources").click(function () {

        $( ".start" ).empty();

        $.ajax({
                type: "GET",
                url: "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;topLevelDomain;flag;"
            })
            .done(function (data) {
                build(data);
            })
            .fail(function (jqXHR, status, err) {
                console.log("Error");
            });
    });

    $("#retrieve-resources-name").click(function () {

        $( ".start" ).empty();

        var countryName = $("#input-name").val();

        $.ajax({
                type: "GET",
                url: "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;topLevelDomain;flag;"
            })
            .done(function (data) {
                buildByName(data, countryName);
            })
            .fail(function (jqXHR, status, err) {
                console.log("Error");
            });
    });    
})

function buildByName(data, countryName){

    var tempCountry;
    var tempArray = [];
    var j = 0;

    for (let i = 0; i < data.length; i++) {
        if(data[i].name.includes(countryName)){
            tempArray[j++] = i;
        }
    }

    for (let i = 0; i < tempArray.length; i++) {
        
        card = $('<div>', {
            id: i + 'card',
            class: "card my-cards",
        }).appendTo('.start');

        img = $('<img>', {
            src: data[tempArray[i]].flag,
            alt: data[tempArray[i]].name,
            class: "card-img-top",
        }).appendTo('#' + i +'card');

        card = $('<div>', {
            id: i + 'inputcard',
            class: "card-body",
        }).appendTo('#' + i +'card');

        card = $('<h5>', {
            class: "card-title",
            text: "Name: " + data[tempArray[i]].name
        }).appendTo('#' + i + 'inputcard');

        card = $('<p>', {
            class: "card-text",
            text: "Capital: " + data[tempArray[i]].capital,
        }).appendTo('#' + i + 'inputcard');

        card = $('<p>', {
            class: "card-text",
            text: "Top Level Domain: " + data[tempArray[i]].topLevelDomain[0],
        }).appendTo('#' + i + 'inputcard');

        for (let j = 0; j < data[tempArray[i]].currencies.length; j++) {

            card = $('<p>', {
                class: "card-text",
                text: "Currencies Code: " + data[tempArray[i]].currencies[j].code,
            }).appendTo('#' + i + 'inputcard');

            card = $('<p>', {
                class: "card-text",
                text: "Currencies Name: " + data[tempArray[i]].currencies[j].name,
            }).appendTo('#' + i + 'inputcard');

            card = $('<p>', {
                class: "card-text",
                text: "Currencies Symbol: " + data[tempArray[i]].currencies[j].symbol,
            }).appendTo('#' + i + 'inputcard');
        }
    }
}

function build(data) {

    for (let i = 0; i < data.length; i++) {

        card = $('<div>', {
            id: i + 'card',
            class: "card my-cards",
        }).appendTo('.start');

        img = $('<img>', {
            src: data[i].flag,
            alt: data[i].name,
            class: "card-img-top",
        }).appendTo('#' + i +'card');

        card = $('<div>', {
            id: i + 'inputcard',
            class: "card-body",
        }).appendTo('#' + i +'card');

        card = $('<h5>', {
            class: "card-title",
            text: "Name: " + data[i].name
        }).appendTo('#' + i + 'inputcard');

        card = $('<p>', {
            class: "card-text",
            text: "Capital: " + data[i].capital,
        }).appendTo('#' + i + 'inputcard');

        card = $('<p>', {
            class: "card-text",
            text: "Top Level Domain: " + data[i].topLevelDomain[0],
        }).appendTo('#' + i + 'inputcard');

        for (let j = 0; j < data[i].currencies.length; j++) {

            card = $('<p>', {
                class: "card-text",
                text: "Currencies Code: " + data[i].currencies[j].code,
            }).appendTo('#' + i + 'inputcard');

            card = $('<p>', {
                class: "card-text",
                text: "Currencies Name: " + data[i].currencies[j].name,
            }).appendTo('#' + i + 'inputcard');

            card = $('<p>', {
                class: "card-text",
                text: "Currencies Symbol: " + data[i].currencies[j].symbol,
            }).appendTo('#' + i + 'inputcard');
        }
    }
}