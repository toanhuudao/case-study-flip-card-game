document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'duc',
            img: 'images/fries.png'
        },
        {
            name: 'vietnam',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'phap',
            img: 'images/ice-cream.png'
        },
        {
            name: 'han',
            img: 'images/pizza.png'
        },
        {
            name: 'nhat',
            img: 'images/milkshake.png'
        },
        {
            name: 'mi',
            img: 'images/hotdog.png'
        },
        {
            name: 'duc',
            img: 'images/fries.png'
        },
        {
            name: 'vietnam',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'phap',
            img: 'images/ice-cream.png'
        },
        {
            name: 'han',
            img: 'images/pizza.png'
        },
        {
            name: 'nhat',
            img: 'images/milkshake.png'
        },
        {
            name: 'mi',
            img: 'images/hotdog.png'
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
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.innerHTML = 'chúc mừng bạn đã qua Module 1 !'
            let button = document.createElement('input');
            //tao button choi lai
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'chơi lại');
            resultDisplay.append(button);
            button.addEventListener('click', reload);
        }
    }

    //lat the
    function flipCard() {
        let cardId = this.getAttribute('id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 200);
        }
    }

    // tao game moi
    function reload() {
        location.reload();
    }

    createBoard()
})
