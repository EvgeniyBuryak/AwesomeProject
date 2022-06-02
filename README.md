# AwesomeProject

Приложение Галерея отображает список картинок от различных авторов.
Данные использовались сначала из api pixabay.com. После блокировки из api https://picsum.photos/ .

Что сделано:
1)Приложение состоит из трех модулей: лента(список), поиск и детали.
2)Реализован offline-режим: т.е. в случае, если нет доступа к сети, показывать последние загруженные данные(и ленту, и детали).
3)Приложение извлекает ресурс в формате JSON по вызову REST API. Используется библиотека axios.

Что не было сделано: 
1)Unit тесты не были реализованны. Было недостаточно времени для изучения. Раньше не имел с ними дела.

Технологии:
1)Приложение реализовано на react-native-cli.
2)Для данных используется mobx.
3)Для навигации react-navigation.

Экраны приложения, которые предпологалось сделать:
1) Сетка - отображает две или одну колонку с возможностью переключения, 
когда пользователь нажимает на элемент открывается экран детального просмотра фотографии
2) Детальный просмотр фотографии
2.1) Вывести в детальном просмотре справочную информацию о фото (автор, теги, описание и т.д.)
2.2) Облако тегов - при нажатие на определенный тег, предполагается поиск по этому тегу
2.3) При нажатие на фото, отображать одну фотографию на полный экран, с возможностью увеличения картинки
3) Поиск по фотографиям, нажатие на элемент поиска открывает экран детального просмотра (пункт 2)

Что было сделано:
1) done
2) done
2.1) Выводилось фото, автор, теги. Использовал api pixabay. В день дед лайна они закрыли доступ россиянам.
Пришлось быстро перейти на другую api. Но с данным api picsum.photos не предоставилось возможным 
реализовать теги и облако тегов из за скудности содержания.
2.2) Смотрите пункт 2.1
2.3) Было принято решение отказаться, так как не укладывался по времени
3) done
