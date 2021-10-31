# Приложение для отслеживания криптовалют и формирования собственного портфеля.
![cryptocurrency](https://raw.githubusercontent.com/kkasya/cripto/master/src/assets/cryto.png)
[Приложение Cryptocurrency](https://kkasya.github.io/cripto/)
---
### Технологии:
- React, Redux, Bootstrap, SCSS, БЭМ.
- API: Coincap
---
### Структура и особенности работы приложения
1. **Главная страница:**
- список (таблица) криптовалют с основной информацией по ним и с контролами для возможности добавления в портфель (например, "+".). 
- Реализовать пагинацию.

2. **Страница валюты:**
- при нажатии на элемент таблицы, открывается страница с подробной информацией по валюте, с контролом для добавления в портфель, а также ее история в виде графика (можно использовать либы для визуализации данных).
- при нажатии на "+", открывается модальное окно, где можно ввести количество (в т.ч. дробное) криптовалюты. После сабмита, криптовалюта добавляется в портфель в указанном количестве.
- реализовать роутинг. Кнопка "Вернуться" браузера должна работать корректно.

 3. **Header:**
- Стоимость 3 популярных криптовалют в ряд. 
- Стоимость портфеля пользователя и разница с изначальной стоимостью портфеля, в скобках разница в процентах. Example: 134,32 USD +2,38 (1,80 %). При обновлении портфеля мы храним инфо о стоимости добавленной валюты на момент обновления. При следующем запуске (релоаде) приложения мы получаем текущие стоимости валют и можем обновить разницу.

4. **Портфель:**
- При нажатии на информацию о портфеле, открывается модальное окно со списком валют в портфеле и возможностью убрать каждую из них из портфеля.
- Портфель должен быть устойчив к релоду страницы (localStorage).

---
Дизайн должен быть простым, понятным и функциональным. Поддерживаются мобильные устройства и планшеты.
