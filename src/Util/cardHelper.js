let ranks = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]

function ranked(cards) {
    return cards.map(card => ranks.indexOf(card[0])).sort((a,b) => a-b)
}

function getCount(cards) {
    let cnt = {}
    for(let card of cards) {
        if(!cnt[card[0]]) cnt[card[0]] = 0
        cnt[card[0]] += 1
    }

    return cnt
}

function checkFiveOfAKind(cnt) {
    for(let num of Object.values(cnt)) {
        if (num == 5) return true
    }
    return false
}

function checkRoyalFlush(cards,rankedCards) {
    if(rankedCards[0] == 8) {
        if(checkFlush(cards) && checkStraight(rankedCards)) return true
    }
    return false
}

function checkStraightFlush(cards,rankedCards) {
    return checkFlush(cards) && checkStraight(rankedCards)
}

function checkFourOfAKind(cnt) {
    for(let num of Object.values(cnt)) {
        if(num == 4) return true
    }
    return false
}

function checkFullHouse(cnt) {
    // We can do this because a 4 of a kind will have cnt [4,1] but will return earlier
    return Object.keys(cnt).length == 2
}

function checkFlush(cards) {
    let suit = cards[0][1]
    for(let card of cards) {
        if(card[1] != suit) return false
    }

    return true
}

function checkStraight(rankedCards) {
    if(rankedCards[0] == 0 && rankedCards[4] == 12) {
        rankedCards.splice(0,0,-1)
        rankedCards.pop()
    }
    for(let i = 1; i<rankedCards.length; i++) {
        if(rankedCards[i-1] != rankedCards[i]-1) return false;
    } 

    return true;
}

function checkThreeOfAKind(cnt) {
    for(let num of Object.values(cnt)) {
        if(num == 3) return true
    }
    return false
}

function checkTwoPair(cnt) {
    numTwos = 0
    for(let num of Object.values(cnt)) {
        if(num == 2) numTwos++
    }
    return numTwos == 2
}

function checkPair(cnt) {
    for(let num of Object.values(cnt)) {
        if(num == 2) return true
    }
    return false
}

exports.getHand = (cards) => {
    console.log(this.cards)
    let cnt = getCount(cards)
    let rankedCards = ranked(cards)
    if(checkFiveOfAKind(cnt)) return 0
    if(checkRoyalFlush(cards,rankedCards)) return 1
    if(checkStraightFlush(cards,rankedCards)) return 2
    if(checkFourOfAKind(cnt)) return 3
    if(checkFullHouse(cnt)) return 4
    if(checkFlush(cards)) return 5
    if(checkStraight(rankedCards)) return 6
    if(checkThreeOfAKind(cnt)) return 7
    if(checkTwoPair(cnt)) return 8
    if(checkPair(cnt)) return 9
}

exports.values = {
    0:250,
    1:200,
    2:150,
    3:125,
    4:100,
    5:50,
    6:40,
    7:20,
    8:15,
    9:10
}

exports.Ranks = {
    0:"Five of a Kind",
    1:"Royal Flush",
    2:"Straight Flush",
    3:"Four of a Kind",
    4:"Full House",
    5:"Flush",
    6:"Straight",
    7:"Three of a Kind",
    8:"Two Pair",
    9:"Pair"
}

exports.cards = []

exports.setCards = (buffer) => {
    this.cards = this.parseBuffer(buffer)
}

exports.parseBuffer = (buffer) => {
    return JSON.parse(JSON.parse(JSON.stringify(Buffer.from(Buffer.from(buffer).toString("utf8").match(/.{2}/g).map(x => "0x"+x), "hex").toString("utf8")).replace(/\u0000/g,""))).join("").match(/.{2}/g)
}