# :small_orange_diamond: Приложение ["Movies Explorer"]([https://movies.diploma.nomoredomains.monster])
*Frontend дипломной работы на курсе в Яндекс Практикум*  
*[:link: Backend приложения](https://github.com/uzornakovre/movies-explorer-api)*
______

Movies Explorer - это сервис по поиску и сохранению фильмов с базы данных **BeatFilm**. Главная страница посвящена описанию работы и [:link: разработчику](https://github.com/uzornakovre) проекта.

Сайт является **адаптивно-отзывчивым**. Адаптирован под экраны с шириной 320 и 1280 пикселей,
но великолепно смотрится на всех разрешениях! :smiley:  
В данном проекте используется методология **БЭМ** и препроцессор **SCSS**. Присутствуют элементы **Grid Layout**, **Flexbox**, **формы** и **медиазапросы**.

*Интерактив:*  
При **регистрации** и **авторизации** на сайте пользователь попадает на страницу поиска фильмов по ключевому слову с возможностью **фильтрации** по короткометражкам. 
В результатах поиска отображаются карточки фильмов, включающие в себя заголовок, длительность, эскиз с ссылкой на трейлер и кнопку сохранения. Если совпадений по запросу много, то на странице сначала отображается меньшее количество карточек (зависит от ширины экрана), а остальные подгружаются с помощью кнопки "Еще" внизу. По нажитии кнопки сохранения фильм добавляется на страницу "Сохраненные фильмы". Удалить сохраненный фильм можно с обоих страниц. Присутствует страница изменения даннах о пользователе. 

Используются два **API**: изначальный массив с фильмами получается со стороннего **BeatFilm API**, а для сохраниния карточек и регистрации пользователей используется **собственный сервер**, который написан на **Node.js**. В качетсве базы данных используется **MongoDB**. Также задействованы менеджер процессов **pm2** и HTTP-сервер **nginx**.

Используемые языки: 
* :heavy_check_mark: HTML5    
* :heavy_check_mark: CSS3 (**Препроцессор SCSS**)      
* :heavy_check_mark: JavaScript ES6 (**Библиотека React.js**)
* :heavy_check_mark: Node.js ([:link: Backend](https://github.com/uzornakovre/movies-explorer-api))

______

Для входа на главную страницу необходимо зарегистрироваться или ввести данные гостевой учетной записи:  
**Почта:**  guest@me.com  
**Пароль:** guest
______   

[:link: Открыть веб-сайт приложения](https://movies.diploma.nomoredomains.monster)  
------
![GitHub repo size](https://img.shields.io/github/repo-size/uzornakovre/movies-explorer-frontend?color=yellow&style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/uzornakovre/movies-explorer-frontend?color=blue&style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/uzornakovre/movies-explorer-frontend?color=pink&style=flat-square)  

------

[![Скриншот страницы](https://i.ibb.co/PDMxYKq/screen1.jpg)](https://movies.diploma.nomoredomains.monster)  

[![Скриншот страницы](https://i.ibb.co/tBX56hr/screen2.jpg)](https://movies.diploma.nomoredomains.monster)  
