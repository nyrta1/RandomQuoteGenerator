$(document).ready(function () {
    const COLOR_LIST = [
        '#11235A',
        '#756AB6',
        '#A1EEBD',
        '#FF9800',
        '#3559E0',
        '#E26EE5',
        '#7E30E1',
        '#EF4040',
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
        '#2B3499',
        '#FF6C22',
        '#FF9209',
        '#FFD099',
        '#0C356A',
        '#0174BE',
        '#FFC436',
        '#FFF0CE',
        '#00A9FF',
        '#3D30A2',
        '#F875AA'
    ];

    $("#new-quote").click(function() {
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
    }

    async function getQuoteFromAPI() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const json_quote = await response.json()
            console.log(json_quote)
            setQuoteText(json_quote.content)
            setAuthorName(json_quote.author)
        } catch (error) {
            console.log(error)
        }
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

    getQuoteFromAPI()
    changeColor()
})