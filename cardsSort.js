// Сортировщик карточек путещественника
// Эккерт Игорь
//
// Формат входных данных - массив из объектов с from (откуда), to (куда)
//                               by (на чем), number(номер), seat(место)
// cards = [{'from': 'Moscow', 'to': 'Piter', 'by': 'train', 'number': 95, 'seat': '4F'},
//         {'from': 'Sean', 'to': 'River', 'by': 'airplane', 'number': 6, 'seat': '9B'},
//         {'from': 'Piter', 'to': 'Sean', 'by': 'bus', 'number': 7, 'seat': null},
//         {'from': null, 'to': 'Moscow', 'by': 'train', 'number': 95, 'seat': '4F'}];


//  сортируем на основе ассоциативного массива, в котором ключом является
//  пункт прибытия или отбытия

function sortCards(cards) {

  fromWhere = {};
  toWhere = {};

  for (var i = 0; i < cards.length; i++) {
    fromWhere[cards[i].from] = cards[i];
    toWhere[cards[i].to] = cards[i];
  }

  var begin = null;

  for (i = 0; i < cards.length; i++) {
    if (toWhere[cards[i].from] == null) {
      begin = cards[i];
      var tmp = cards[0];
      cards[0] = begin;
      cards[i] = tmp;
      break;
    }
  }
  for (var i = 1; i < cards.length; i++) {
    cards[i] = fromWhere[cards[i - 1].to];
  }
  return cards;
}

function printRoute(cards) {
  sortCards(cards);
  var answer = '';
  for (i = 1; i < cards.length; i++) {
    var card = cards[i];
    switch(card.by) {
      case 'train':
        answer += 'Take train ' + card.number + ' from ' + card.from +
         'to ' + card.to + '. Seat ' + card.seat + '.\n';

      case 'airplane':
        answer += 'From ' + card.from + ' Airport take flight ' + card.number +
         ' to ' + card.to + ' Airport. Seat ' + card.seat + '.\n';

      case 'bus':
        if (cards.seat == null) {
          card.seat = 'not assignment';
        }
        answer += 'Take bus ' + card.number + ' from ' + card.from +
        ' to ' + card.to + '. Seat ' + card.seat + '.\n';
    }
  }
  return answer;
}

// вызов printRoute(cards) возвращает словесное описание маршрута
