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
    let cnt = getCount(cards)
    let rankedCards = ranked(cards)
    if(checkRoyalFlush(cards,rankedCards)) return 0
    if(checkStraightFlush(cards,rankedCards)) return 1
    if(checkFourOfAKind(cnt)) return 2
    if(checkFullHouse(cnt)) return 3
    if(checkFlush(cards)) return 4
    if(checkStraight(rankedCards)) return 5
    if(checkThreeOfAKind(cnt)) return 6
    if(checkTwoPair(cnt)) return 7
    if(checkPair(cnt)) return 8
}

exports.values = {
    0:250,
    1:150,
    2:125,
    3:100,
    4:50,
    5:40,
    6:20,
    7:15,
    8:10
}

exports.Ranks = {
    0:"Royal Flush",
    1:"Straight Flush",
    2:"Four of a Kind",
    3:"Full House",
    4:"Flush",
    5:"Straight",
    6:"Three of a Kind",
    7:"Two Pair",
    8:"Pair"
}