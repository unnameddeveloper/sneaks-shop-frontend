// const { WebApp } = require('@grammyjs/web-app');
// npm i @grammyjs/web-app

// const tg = WebApp
const tg = window.Telegram.WebApp
const user = tg.initDataUnsafe.user
const queryId = tg.initDataUnsafe?.query_id

// Функция закрытия приложения
const onClose = () => {
    tg.close();
}

// Функция для скрытия/показа кнопки
const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
    }
}

module.exports = { onClose, onToggleButton, user, tg, queryId } 