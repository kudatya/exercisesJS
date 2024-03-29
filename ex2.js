//Время имеет формат: часы:минуты. И часы, и минуты имеют две цифры, например, 09:00.
//Введите регулярное выражение, чтобы найти время в строке: Завтрак в 09:00 в комнате 123:456.
//P.S. В этой задаче пока нет необходимости проверять правильность времени, поэтому 25:99 также может быть верным результатом.
//P.P.S. Регулярное выражение не должно находить 123:456.

alert( "Завтрак в 09:00 в комнате 123:456.".match(/\b\d\d:\d\d\b/));

//Время может быть в формате часы:минуты или часы-минуты. И часы, и минуты имеют две цифры: 09:00 или 21-30.

let regexp = /\d\d[-:]\d\d/g;
alert( "03:00. Ужин в 23-70".match(regexp));

//Напишите регулярное выражение, которое ищет многоточие (3 и более точек подряд).

let regexp = /\.{3,}/g;
alert( "... ЧТО?.....".match(regexp));

