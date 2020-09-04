document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'duc',
            img: 'images/duc.png'
        },
        {
            name: 'vietnam',
            img: 'images/vietnam.png'
        },
        {
            name: 'phap',
            img: 'images/phap.png'
        },
        {
            name: 'han',
            img: 'images/han.png'
        },
        {
            name: 'nhat',
            img: 'images/nhat.png'
        },
        {
            name: 'mi',
            img: 'images/my.png'
        },
        {
            name: 'duc',
            img: 'images/duc.png'
        },
        {
            name: 'vietnam',
            img: 'images/vietnam.png'
        },
        {
            name: 'phap',
            img: 'images/phap.png'
        },
        {
            name: 'han',
            img: 'images/han.png'
        },
        {
            name: 'nhat',
            img: 'images/nhat.png'
        },
        {
            name: 'mi',
            img: 'images/my.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //tao bang game
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('id', `${i}`);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 200);
        }
    }

    //kiem tra trung nhau
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')

        } else if (cardsChosen[0] === cardsChosen[1]) {

            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')

        }
        cardsChosen = [];
        cardsChosenId = [];
        if (cardsWon.length === cardArray.length / 2) { //kiem tra dieu kien ưin
            resultDisplay.innerHTML = 'chúc mừng bạn đã qua Module 1 !'
            //tao button choi lai
            let button = document.createElement('input');
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'chơi lại');
            resultDisplay.append(button);
            button.addEventListener('click', reload);
        }
    }
    // tao game moi
    function reload() {
        cardArray.sort(() => 0.5 - Math.random());
        cardsWon = [];
        resultDisplay.innerHTML = "";
        grid.innerHTML = "";
        createBoard();

        // location.reload();
    }


    createBoard()
})
