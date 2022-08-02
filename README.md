### Тестовое задание в компанию MediaLand.
Сделано на React, Redux. Полностью функциональный подход, модульные стили, lazy-loading.

**Использумые библиотеки:** React, react-router-dom, redux, react-redux, reselect, react-final-form, axios, redux-thunk.

**Сделано по тех-заданию:**

Средствами React + JS реализуйте небольшое SPA приложение для заметок.

Каждая заметка имеет название(title заметки) и тело замметки, далее - body заметки.

Приложение состоит всего из 2х страниц. Пример страниц можно посмотреть тут. На главной странице простая форма авторизации, нужно написать логику авторизации, получение TOKEN_API при успешной авторизации. При ошибке авторизации, не верный логин/пароль, выводим ошибку, любым доступным методом кроме alert, prompt, confirm.

После успешной авторизации открывается главный интерфейс приложения без редерикта страницы. Смотрим фигму, функционал не вижу смысла детально описывать все предлельно, интуитивно, понятно.

**Нужно реализовать:**

    получение списка заметок (GET)
    создание заметки (POST)
    редактирование заметки (PUT)
    удаление (DELETE) (необходимо подтверждение)

**Api backend**
Авторизация пользователя

    ROUTE: /login METHOD: POST: данные для авторизации json: {'login': 'test@test.test', 'password': 'UHYGBhunjuHBJNKM'} Ответ: json:{"status": "ok", "token": "***********"}
    Заметки
    токен передаем в header token:************

    ROUTE: /note METHOD: GET: Отдает список всех заметок. Ответ: json: {"status": "ok", "notes": [ { "id": 1, "date_create": "07/27/2022 15:05:57", "title": "#Заметка_1", "body": "Тут какой то текст заметки, бла бла бла...", "color": "#F00000" } ] } POST: Создает новую заметку. Входящие данные: {"title": "", "body": "","color": ""} Ответ: json, представление созданной заметки.

    PUT:
    Редактирование заметки. Редактирование просходит по id.
    Входящие данные: {"id":"", title": "", "body": "","color": ""}
    Ответ: json, представление отредактированной заметки.
    
    DELETE:
    Удаляет заметку. Удаление просходит по id.
    Входящие данные: {"id":"", title": "", "body": "","color": ""}
    Ответ: code 204 if ok else json err

**Требования к функционалу:**

Все действия на сайте должны происходить без перезагрузки страницы.
Подтверждение действий (удалить заметку) выполняется с помощью диалогового окна.
После перезагрузки страницы состояние списка заметок должно сохраняться.
Заметки должны быть отсортированы по дате создания (от новых к старым)

**Технические требования:**

Диалоговые окна должны быть реализованы без использования "alert", "prompt" и "confirm".
В качестве языка разработки допускается использовать JavaScript, TypeScript.
В качестве сборщика, если это необходимо, используйте Webpack и любые другие инструменты.
Верстка может быть выполнена с использованием любых UI библиотек.
Не запрещается испльзовать любые библиотеки которые вы посчитаете уместными.
Логика приложения должна быть разбита на разумное количество самодостаточных React-компонентов.
Адаптивность не обязательна, но приветствуется. (Пример в фигме)

**Особое внимание стоит обратить на следующие моменты:**

Код должен быть написан понятно и аккуратно, с соблюдением табуляции и прочих элементов написания, без лишних элементов и функций, не имеющих отношения к функционалу тестового задания.
Читабельность и наличие элементарной архитектуры.
Чистота и оформление кода — не менее важный фактор. Код должен быть написан в едином стиле (желательно в рекомендуемом для конкретного языка). Также к чистоте относятся отсутствие копипаста и дублирования логики.

**Тестовое задание должно быть предоставлено в следующем виде:**

Запуск backend

для работы нужен python3 любой версии, pip3. далее в рабочем каталоге(где лежит файл backend-test.py) выполняем в консоли:

pip3 install Flask python3 backend-test.py

После успешного запуска в консоли должно появится:

$ python3 backend.py

    Serving Flask app 'backend-test' (lazy loading)
    Environment: production WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
    Debug mode: off
    Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)

Сервер доступен по адресу localhost:5000






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
