function load_daily() {
    $.ajax({
        url: "https://uselessfacts.jsph.pl/api/v2/facts/today",
        type: "GET",
        dataType: "json",
        success: function(resp) {
            $("#fact").html(resp.text);
            return false;
        }
    });
    $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        type: "GET", 
        dataType: "json",
        success: function(resp) {
            $("#image-duck").attr("src", resp.message);
            $("#name-duck").text(get_random_name());
            return false;
        }
    });
}

function load_random_fact() {
    $.ajax({
        url: "https://uselessfacts.jsph.pl/api/v2/facts/random",
        type: "GET",
        dataType: "json",
        success: function(resp) {
            $("#fact-random").html(resp.text);
            return false;
        }
    });
}

function load_random_dog() {
    $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        type: "GET", 
        dataType: "json",
        success: function(resp) {
            $("#image-duck-random").attr("src", resp.message);
            $("#name-duck-random").text(get_random_name());
            return false;
        }
    });
}

function get_random_name() {
    const names = [
        "g",
        "h",
        "j"
    ];

    return names[Math.floor(Math.random() * names.length)];
}

function load_random() {
    load_random_fact();
    load_random_dog();
}

$(function() {
    load_daily();
    load_random();

    $("#duck-button").bind("click", load_random_dog);
    $("#both-button").bind("click", load_random);
    $("#fact-button").bind("click", load_random_fact);
});