let time = prompt('Введите число от 0 до 59');

if (time <= 15) {
    alert('Число попадает в первую четверть часа');
}
else if (15 < time & time <= 30) {
    alert('Число попадает во вторую четверть часа');
}
else if (30 < time & time <= 45) {
    alert('Число попадает в третью четверть часа');
}
else if (45 < time & time <= 59) {
    alert('Число попадает в четвёртую четверть часа');
}