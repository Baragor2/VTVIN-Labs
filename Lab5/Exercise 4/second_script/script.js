let lang = prompt('Введите число ru или by');
let week;

switch (lang) {
    case 'ru':
        week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        alert(week);
        break;

    case 'by':
        week = ['Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота', 'Нядзеля'];
        alert(week);
        break;
}