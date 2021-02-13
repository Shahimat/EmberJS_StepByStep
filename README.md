# ember-tutorial

README описывает детали совместной работы над данным приложением Ember.
Краткое введение в приложение можно легко здесь найти.

код был сгененирован непосредственно в папке ember-tutorial путем ввода компанды `ember init`.

для использования **SCSS** введите команду установки `ember install ember-cli-sass`
## Перед началом работы

На вашем компьютере предварительно должны быть установлены:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Установка

* `git clone <repository-url>` this repository
* `cd ember-tutorial`
* `npm install`

## Запуск / Разработка

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Генераторы кода

Используйте генераторы кода, для большей информации введите `ember help generate`.

## Роутинг

Для создания роута, введите `ember generate route <route-name>`

Для удаления роутов можно использовать команду `ember destroy route <route-name>`

## Controller

`ember generate controller <controller-name>` - для генерации контроллера

## Иконки

См. сайт [Font Awesome](https://fontawesome.com/)

Установка:

`ember install @fortawesome/ember-fontawesome` - плагин для Эмбер

`npm i --save-dev @fortawesome/free-solid-svg-icons` - стиль бесплатных иконок Solid (можно установить разные)

Для настройки дополнительных зависимостей, можно глянуть сайт [npm модуля](https://www.npmjs.com/package/@fortawesome/ember-fontawesome)

## Bootstrap

`ember install ember-bootstrap` - устанавливаем плагин

`ember generate ember-bootstrap --preprocessor=sass` - если нужен препроцессор SASS

### Запуск тестов

* `ember test`
* `ember test --server`

### Linting - анализ кода

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Указать как производится deploy

## Дальнейшее ознакомление / полезные ссылки

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
