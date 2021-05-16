const displayCards = document.querySelector('.display-cards');
const filterBox = document.querySelector('input');

let cardList = '';

for (let card of cards){
    cardList += `
    <div class=card id=card-${card.number}>
        <h3>${card.number}: ${card.name_cz}</h3>
        <h5>${card.name_en}<h5>
        <h6>${card.name_ln}</h6>
        <p>${card.prop}</p>
    </div>
    `;
}

displayCards.innerHTML = cardList;
htmlCards = document.querySelectorAll('.card');

function showCard(e){
    cardNumber = e.target.value;
    if(cardNumber){
        for(const card of htmlCards){
            card.classList.add('hidden');
        }
        const card = document.querySelector(`#card-${cardNumber}`);
        if (card) {
            card.classList.remove('hidden')
        }
    }
}

filterBox.onkeyup = showCard;
