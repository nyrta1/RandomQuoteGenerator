$(document).ready(function () {
    const COLOR_LIST = [
        '#756AB6',
        '#FF9800',
        '#3559E0',
        '#E26EE5',
        '#7E30E1',
        '#C21292',
        '#65B741',
        '#FFB534',
        '#FF90BC',
        '#E3651D',
        '#BED754',
        '#7B66FF',
        '#7071E8',
        '#C683D7',
        '#ED9ED6',
        '#FFC7C7',
        '#FF6C22',
        '#FF9209',
        '#0174BE',
        '#FFC436',
        '#00A9FF',
        '#3D30A2',
        '#F875AA'
    ];

    $("#new-quote").click(function() {
        hideThePlaceholders()
        getQuoteFromAPI()
        changeColor()
    })

    function changeColor() {
        let randomIndex = getRandomInt(COLOR_LIST.length)
        $("body").css('background-color', COLOR_LIST[randomIndex])
        $("#quote").css('color', COLOR_LIST[randomIndex])
        $("#author").css('color', COLOR_LIST[randomIndex])
        $("#github-link").css('background-color', COLOR_LIST[randomIndex])
        $("#new-quote").css('background-color', COLOR_LIST[randomIndex])
        $(".placeholder").css('color', COLOR_LIST[randomIndex])
    }

    async function getQuoteFromAPI() {
        showThePlaceholders()
        hideTheQuoteAndAuthor()
        try {
            const response = await fetch('https://api.quotable.io/random');
            const json_quote = await response.json()
            setQuoteText(json_quote.content)
            setAuthorName(json_quote.author)
            hideThePlaceholders()
            showTheQuoteAndAuthor()
        } catch (error) {
            console.log(error)
        }
    }

    function showThePlaceholders() {
        $("#placeholder-block").show();
    }

    function showTheQuoteAndAuthor() {
        $("#quote-block").show();
    }

    function hideThePlaceholders() {
        $("#placeholder-block").hide();
    }

    function hideTheQuoteAndAuthor() {
        $("#quote-block").hide();
    }

    function getRandomInt(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * max);
    }

    function setAuthorName(name) {
        $("#author").html(name);
    }

    function setQuoteText(text) {
        $("#quote").html(text)
    }

    changeColor()
    hideTheQuoteAndAuthor()
    getQuoteFromAPI()
})