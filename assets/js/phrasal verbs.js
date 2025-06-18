/* ============================================
Скрипт позволяет пользователю:
*выбирать фразы,
*отмечать их как изученные или возвращать обратно,
*запускать режим обучения,
*переключаться между вкладками («Изучается» / «Изучено»),
*видеть счётчик выбранных фраз и получать уведомления.
============================================ */
// Функция для определения текущего типа контента (фразы или идиомы)
function getContentType() {
    const isPhrasalVerbs = window.location.pathname.includes('Phrasal Verbs.html');
    const isIdioms = window.location.pathname.includes('Idioms.html');

    if (isPhrasalVerbs) return 'phrase';
    if (isIdioms) return 'idiom';
    return null;
}

// Функция для загрузки статусов фраз при загрузке страницы
function loadPhrasesStatus() {
    try {
        // Получаем сохраненные статусы из localStorage
        const phrasesStatus = JSON.parse(localStorage.getItem('phrasesStatus') || '{}');
        console.log('Loaded phrases statuses:', phrasesStatus);

        // Применяем статусы к элементам на странице
        for (const phraseId in phrasesStatus) {
            const phraseElement = document.querySelector(`.phrase-card[data-id="${phraseId}"]`);
            if (phraseElement) {
                const status = phrasesStatus[phraseId];
                console.log(`Setting phrase ${phraseId} to status: ${status}`);
                phraseElement.setAttribute('data-status', status);
            }
        }

        // Обновляем UI после загрузки статусов
        updateFilterCounts();
        updateCategoryCounts();
    } catch (error) {
        console.error('Error loading phrase statuses:', error);
    }
    // Отладочная функция для просмотра статистики карточек
    function debugCardStatuses() {
        const total = document.querySelectorAll('.phrase-card').length;
        const studying = document.querySelectorAll('.phrase-card[data-status="studying"]').length;
        const learned = document.querySelectorAll('.phrase-card[data-status="learned"]').length;
        const unknown = total - studying - learned;

        console.log('===== Card Status Debug =====');
        console.log(`Total cards: ${total}`);
        console.log(`Studying: ${studying}`);
        console.log(`Learned: ${learned}`);
        console.log(`Unknown status: ${unknown}`);

        // Проверяем localStorage
        const storedStatuses = JSON.parse(localStorage.getItem('phrasesStatus') || '{}');
        const learnedIdsInStorage = Object.keys(storedStatuses).filter(id => storedStatuses[id] === 'learned');
        console.log(`Learned IDs in localStorage: ${learnedIdsInStorage.length}`);
        console.log('Learned IDs:', learnedIdsInStorage);
    }

    // Вызываем функцию отладки при загрузке страницы
    document.addEventListener('DOMContentLoaded', function () {
        // Загружаем статусы фраз
        loadPhrasesStatus();
        debugCardStatuses();

        // Активируем первоначальную фильтрацию
        const activeFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter') || 'studying';
        filterCardsByStatus(activeFilter);
    });

    // Добавляем вызов отладки при переключении вкладок
    document.querySelectorAll('.switcher-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            setTimeout(debugCardStatuses, 100);
        });
    });
}

// Вызываем загрузку статусов при инициализации страницы
document.addEventListener('DOMContentLoaded', function () {
    loadPhrasesStatus();
});

// Функция для получения правильных локализованных строк
function getLocalizedStrings(contentType) {
    const strings = {
        phrase: {
            one: 'фраза',
            fewGenitive: 'фразы',
            many: 'фраз',
            studyButton: 'Учить фразы',
            searchPlaceholder: 'Поиск фразы...',
            allItems: 'Все фразы',
            storageKey: 'phrasesStatus',
            cardsDeleted: 'Фраза удалена',
            selectToStudy: 'Выберите фразы для изучения',
            addedToFavorites: 'Фраза добавлена в избранное',
            removedFromFavorites: 'Фраза удалена из избранного',
            returnedToStudy: 'Фразы возвращены на изучение',
            markedAsLearned: 'Фразы отмечены как изученные'
        },
        idiom: {
            one: 'идиома',
            fewGenitive: 'идиомы',
            many: 'идиом',
            studyButton: 'Учить идиомы',
            searchPlaceholder: 'Поиск идиомы...',
            allItems: 'Все идиомы',
            storageKey: 'idiomsStatus',
            cardsDeleted: 'Идиома удалена',
            selectToStudy: 'Выберите идиомы для изучения',
            addedToFavorites: 'Идиома добавлена в избранное',
            removedFromFavorites: 'Идиома удалена из избранного',
            returnedToStudy: 'Идиомы возвращены на изучение',
            markedAsLearned: 'Идиомы отмечены как изученные'
        }
    };

    return strings[contentType] || strings.phrase;
}

// Функция для загрузки статусов при загрузке страницы
function loadStatus() {
    const contentType = getContentType();
    const strings = getLocalizedStrings(contentType);

    // Получаем сохраненные статусы из localStorage
    const contentStatus = JSON.parse(localStorage.getItem(strings.storageKey) || '{}');

    // Применяем статусы к элементам на странице
    for (const contentId in contentStatus) {
        const contentElement = document.querySelector(`.${contentType}-card[data-id="${contentId}"]`);
        if (contentElement) {
            contentElement.setAttribute('data-status', contentStatus[contentId]);
        }
    }

    // Обновляем UI после загрузки статусов
    if (typeof updateCategoryCounts === 'function') {
        updateCategoryCounts();
    }
    if (typeof updateFilterCounts === 'function') {
        updateFilterCounts();
    }
}

// Вызываем загрузку статусов при инициализации страницы
document.addEventListener('DOMContentLoaded', function () {
    loadStatus();
});

document.addEventListener('DOMContentLoaded', function () {
    const contentType = getContentType();
    const strings = getLocalizedStrings(contentType);

    // Элементы из оригинального кода
    const studyButton = document.querySelector('.study-button');
    const contentContainer = document.getElementById('contentContainer');
    const wordCount = document.querySelector('.word-count');
    const selectAllCheckbox = document.querySelector('.select-all-checkbox');
    const batchActions = document.getElementById('batch-actions');
    const batchActionBack = document.getElementById('batchActionBack');
    const batchActionMarkLearned = document.getElementById('batchActionMarkLearned');
    const switcherBtns = document.querySelectorAll('.switcher-btn');

    // Новые элементы для нашей функциональности
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');
    const sortSelect = document.getElementById('sortSelect');

    // Исходные данные
    let contentData = [];
    let currentFavoriteFilter = 'all';

    // Инициализация данных из HTML
    function initializeContentData() {
        const contentCards = document.querySelectorAll(`.${contentType}-card`);

        contentCards.forEach(card => {
            const id = parseInt(card.dataset.id);
            const text = card.querySelector('h3').textContent;
            const translation = card.querySelector(`.${contentType}-translation`).textContent;
            const example = card.querySelector(`.${contentType}-example`)?.textContent || '';
            const status = card.dataset.status || 'studying';
            const added = card.dataset.added || new Date().toISOString().split('T')[0];
            const favorite = card.querySelector('.favorite').classList.contains('active');

            contentData.push({
                id,
                text,
                translation,
                example,
                status,
                added,
                favorite
            });
        });
    }

    // Состояния
    let currentFilter = 'studying';
    let currentSortType = 'date';
    let originalStudyButtonText = studyButton ? strings.studyButton : strings.studyButton;

    // Прогресс
    const learningProgress = JSON.parse(localStorage.getItem('learningProgress') || '{}');

    // Функция для отображения контента
    function renderContent() {
        const containers = document.querySelectorAll('.category-content');

        containers.forEach(container => {
            const searchText = searchInput ? searchInput.value.toLowerCase() : '';
            const cards = container.querySelectorAll(`.${contentType}-card`);

            cards.forEach(card => {
                const text = card.querySelector('h3').textContent.toLowerCase();
                const translation = card.querySelector(`.${contentType}-translation`).textContent.toLowerCase();
                const example = card.querySelector(`.${contentType}-example`)?.textContent.toLowerCase() || '';
                const status = card.getAttribute('data-status');
                const favoriteBtn = card.querySelector('.favorite');
                const isFavorite = favoriteBtn.classList.contains('active');

                // Применяем все фильтры
                const matchesSearch = text.includes(searchText) ||
                    translation.includes(searchText) ||
                    example.includes(searchText);

                const matchesStatusFilter = currentFilter === 'all' || status === currentFilter;

                const matchesFavoriteFilter = currentFavoriteFilter === 'all' ||
                    (currentFavoriteFilter === 'favorites' && isFavorite);

                if (matchesSearch && matchesStatusFilter && matchesFavoriteFilter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });

        updateCounter();
        updateCategoryCounts();
    }

    // Функция для обновления счетчика и интерфейса
    function updateCounter() {
        if (!wordCount) return;

        const visibleCards = document.querySelectorAll(`.${contentType}-card:not(.hidden)`);
        const checkedBoxes = Array.from(visibleCards).filter(card =>
            card.querySelector(`.${contentType}-checkbox`).checked
        );

        const totalVisible = visibleCards.length;
        const selectedCount = checkedBoxes.length;

        wordCount.textContent = selectedCount > 0
            ? `${selectedCount} из ${totalVisible} ${declension(totalVisible, strings.one, strings.fewGenitive, strings.many)}`
            : `${totalVisible} ${declension(totalVisible, strings.one, strings.fewGenitive, strings.many)}`;

        if (studyButton) {
            studyButton.textContent = selectedCount > 0
                ? `${strings.studyButton} (${selectedCount})`
                : originalStudyButtonText;
        }

        if (batchActions) {
            batchActions.style.display = selectedCount > 0 ? 'block' : 'none';
        }

        if (selectAllCheckbox) {
            selectAllCheckbox.checked = selectedCount > 0 && selectedCount === totalVisible;
            selectAllCheckbox.indeterminate = selectedCount > 0 && selectedCount < totalVisible;
        }

        // Изменение текста кнопки в зависимости от выбранной вкладки
        if (batchActionMarkLearned) {
            if (currentFilter === 'learned') {
                batchActionMarkLearned.textContent = 'Вернуть на изучение';
            } else {
                batchActionMarkLearned.textContent = 'Отметить как изученные';
            }
        }
    }

    // Функция склонения
    function declension(number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) return five;
        n %= 10;
        if (n === 1) return one;
        if (n >= 2 && n <= 4) return two;
        return five;
    }

    // Функция для удаления контента
    function deleteContent(id) {
        const contentIndex = contentData.findIndex(content => content.id === id);
        if (contentIndex !== -1) {
            contentData.splice(contentIndex, 1);
            renderContent();
            showNotification(strings.cardsDeleted, 'warning');
        }
    }

    // Функция для сохранения прогресса
    function saveProgress() {
        localStorage.setItem('learningProgress', JSON.stringify(learningProgress));
    }

    // Функция для отображения уведомлений
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.className = `notification ${type}`;
        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            borderRadius: '8px',
            zIndex: 1001,
            backgroundColor: type === 'success' ? 'var(--correct-bg)' :
                type === 'warning' ? 'var(--danger-bg)' : 'var(--info-bg)',
            color: type === 'warning' ? 'var(--danger-text)' : 'var(--correct-text)',
        });
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }

    // Функция для начала режима обучения
    function startLearningMode(items) {
        // Заглушка для функции обучения
        console.log(`Начинаем изучение ${contentType === 'phrase' ? 'фраз' : 'идиом'}:`, items);
        showNotification('Режим обучения запущен', 'success');
    }

    // Слушатели событий
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains(`${contentType}-checkbox`)) updateCounter();
    });

    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function () {
            const cards = document.querySelectorAll(`.${contentType}-card:not(.hidden)`);
            cards.forEach(card => card.querySelector(`.${contentType}-checkbox`).checked = this.checked);
            updateCounter();
        });
    }

    if (batchActionBack) {
        batchActionBack.addEventListener('click', () => {
            document.querySelectorAll(`.${contentType}-checkbox`).forEach(cb => cb.checked = false);
            if (selectAllCheckbox) {
                selectAllCheckbox.checked = false;
                selectAllCheckbox.indeterminate = false;
            }
            updateCounter();
        });
    }

    if (batchActionMarkLearned) {
        batchActionMarkLearned.addEventListener('click', () => {
            const checkedCards = document.querySelectorAll(`.${contentType}-checkbox:checked`);

            if (currentFilter === 'learned') {
                // Возвращаем контент на изучение
                checkedCards.forEach(cb => {
                    const card = cb.closest(`.${contentType}-card`);
                    const id = parseInt(card.getAttribute('data-id'));
                    const contentIndex = contentData.findIndex(p => p.id === id);

                    if (contentIndex !== -1) {
                        contentData[contentIndex].status = 'studying';
                        learningProgress[id] = 0; // Сбрасываем прогресс
                    }
                });
                saveProgress();
                renderContent();
                showNotification(strings.returnedToStudy, 'success');
            } else {
                // Отмечаем контент как изученный
                checkedCards.forEach(cb => {
                    const card = cb.closest(`.${contentType}-card`);
                    const id = parseInt(card.getAttribute('data-id'));
                    const contentIndex = contentData.findIndex(p => p.id === id);

                    if (contentIndex !== -1) {
                        contentData[contentIndex].status = 'learned';
                        learningProgress[id] = 100;
                    }
                });
                saveProgress();
                renderContent();
                showNotification(strings.markedAsLearned, 'success');
            }
        });
    }

    if (studyButton) {
        // Удаляем все существующие обработчики
        const newButton = studyButton.cloneNode(true);
        if (studyButton.parentNode) {
            studyButton.parentNode.replaceChild(newButton, studyButton);
        }

        // Добавляем новый обработчик
        newButton.addEventListener('click', function () {
            console.log("Study button clicked");

            // Получаем выбранные фразы
            const checkedCards = document.querySelectorAll('.phrase-card:not(.hidden) .phrase-checkbox:checked');

            if (checkedCards.length > 0) {
                // Есть выбранные фразы
                console.log(`Found ${checkedCards.length} selected phrases`);
                const phraseTraining = new PhraseTraining();
                phraseTraining.initialize(checkedCards.length);
                showNotification('Режим обучения запущен', 'success');
            } else {
                // Нет выбранных фраз, проверяем наличие фраз на изучении
                const studyingPhrases = document.querySelectorAll('.phrase-card[data-status="studying"]:not(.hidden)');

                if (studyingPhrases.length > 0) {
                    console.log(`Found ${studyingPhrases.length} phrases in studying status`);
                    const phraseTraining = new PhraseTraining();
                    phraseTraining.initialize(studyingPhrases.length);
                    showNotification('Режим обучения запущен', 'success');
                } else {
                    // Ничего не найдено для изучения
                    showNotification('Выберите фразы для изучения', 'warning');
                }
            }
        });
    }

    // Обработчики для переключения вкладок изучения/изученные
    if (switcherBtns) {
        switcherBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const filter = this.dataset.filter;
                switcherBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentFilter = filter;
                renderContent();
            });
        });
    }

    // Новые обработчики для фильтрации и сортировки
    if (searchInput) {
        searchInput.addEventListener('input', renderContent);
    }

    if (filterSelect) {
        filterSelect.addEventListener('change', function () {
            currentFavoriteFilter = this.value;
            renderContent();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            currentSortType = this.value;
            renderContent();
        });
    }

    // Инициализация
    initializeContentData();
    loadFavorites();
    renderContent();

    // Активируем нужную вкладку при загрузке
    document.querySelector('.switcher-btn.active')?.click();
});

/* ============================================
Favorites
============================================ */
(function () {
    // Инициализация при загрузке страницы
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initFavorites();
    } else {
        window.addEventListener('DOMContentLoaded', initFavorites);
    }

    // Основная функция инициализации
    function initFavorites() {
        console.log('Initializing improved favorites module...');

        // Определяем тип контента
        const contentType = getContentType();
        const strings = getLocalizedStrings(contentType);

        console.log(`Content type detected: ${contentType}`);

        // Загружаем сохраненные избранные
        const savedFavorites = getSavedFavorites(strings.storageKey);
        console.log(`Loaded ${savedFavorites.length} favorites from storage`);

        // Применяем статусы к кнопкам
        applyFavoritesToButtons(savedFavorites, strings.cardSelector);

        // Устанавливаем обработчики событий
        setupFavoriteButtons(strings);
        setupFilterSelect();

        // Проверяем текущий фильтр
        checkCurrentFilter();

        // Обновляем счетчики
        updateAllCounters();
    }

    // Определение типа контента
    function getContentType() {
        if (document.querySelector('.phrase-card')) {
            return 'phrase';
        } else if (document.querySelector('.idiom-card')) {
            return 'idiom';
        }
        return 'phrase';
    }

    // Получение локализованных строк
    function getLocalizedStrings(type) {
        return {
            phrase: {
                storageKey: 'phrasesFavorites',
                cardSelector: '.phrase-card',
                checkboxSelector: '.phrase-checkbox',
                addedNotification: 'Фраза добавлена в избранное',
                removedNotification: 'Фраза удалена из избранного'
            },
            idiom: {
                storageKey: 'idiomsFavorites',
                cardSelector: '.idiom-card',
                checkboxSelector: '.idiom-checkbox',
                addedNotification: 'Идиома добавлена в избранное',
                removedNotification: 'Идиома удалена из избранного'
            }
        }[type];
    }

    // Получение сохраненных избранных
    function getSavedFavorites(storageKey) {
        try {
            return JSON.parse(localStorage.getItem(storageKey)) || [];
        } catch (error) {
            console.error('Error loading favorites:', error);
            return [];
        }
    }

    // Применение сохраненных избранных к кнопкам
    function applyFavoritesToButtons(savedFavorites, cardSelector) {
        document.querySelectorAll(`${cardSelector}`).forEach(card => {
            const id = parseInt(card.dataset.id);
            const button = card.querySelector('.action-button.favorite');

            if (button) {
                if (savedFavorites.includes(id)) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            }
        });
    }

    // Настройка обработчиков кнопок избранного
    function setupFavoriteButtons(strings) {
        const buttons = document.querySelectorAll(`${strings.cardSelector} .action-button.favorite`);

        console.log(`Setting up ${buttons.length} favorite buttons`);

        buttons.forEach(button => {
            // Удаляем существующие обработчики
            const newButton = button.cloneNode(true);
            if (button.parentNode) {
                button.parentNode.replaceChild(newButton, button);
            }

            // Добавляем новый обработчик
            newButton.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const card = this.closest(strings.cardSelector);
                const id = parseInt(card.dataset.id);

                // Переключаем класс активности
                this.classList.toggle('active');
                const isActive = this.classList.contains('active');

                // Сохраняем изменения
                saveFavorites(strings.storageKey, isActive, id);

                // Показываем уведомление
                const message = isActive ? strings.addedNotification : strings.removedNotification;
                const type = isActive ? 'success' : 'info';
                showNotification(message, type);

                // Применяем фильтр, если мы в режиме "Избранное"
                const filterSelect = document.getElementById('filterSelect');
                if (filterSelect && filterSelect.value === 'favorites') {
                    if (isActive) {
                        // Показываем карточку, если она соответствует текущему статусу
                        showCardWithAnimation(card);
                    } else {
                        // Скрываем карточку
                        hideCardWithAnimation(card);
                    }
                }

                // Обновляем счетчики
                updateCategoryTotalCounts();
                updateWordCount(); // Добавлено для обновления общего счетчика
            });
        });
    }

    // Настройка обработчика выбора фильтра
    function setupFilterSelect() {
        const filterSelect = document.getElementById('filterSelect');
        if (!filterSelect) return;

        // Очищаем существующие обработчики
        const newSelect = filterSelect.cloneNode(true);
        filterSelect.parentNode.replaceChild(newSelect, filterSelect);

        // Добавляем новый обработчик
        newSelect.addEventListener('change', function () {
            const filterValue = this.value;
            applyFilter(filterValue);

            // Обновляем счетчики при изменении фильтра
            updateCategoryTotalCounts();
            updateWordCount(); // Обновляем общий счетчик фраз
        });
    }

    // Проверка текущего фильтра
    function checkCurrentFilter() {
        const filterSelect = document.getElementById('filterSelect');
        if (filterSelect && filterSelect.value === 'favorites') {
            applyFilter('favorites');
        } else {
            applyFilter('all');
        }
    }

    // Применение фильтра
    function applyFilter(value) {
        console.log(`Applying filter: ${value}`);

        const contentType = getContentType();
        const strings = getLocalizedStrings(contentType);

        // Получаем текущий статус (studying/learned)
        const activeBtn = document.querySelector('.switcher-btn.active');
        const currentStatus = activeBtn ? activeBtn.getAttribute('data-filter') : 'studying';

        // Применяем фильтр ко всем карточкам
        document.querySelectorAll(strings.cardSelector).forEach(card => {
            // Сбрасываем стили анимации
            card.style.opacity = '';
            card.style.transform = '';
            card.style.transition = '';

            const cardStatus = card.getAttribute('data-status');
            const favoriteBtn = card.querySelector('.action-button.favorite');
            const isFavorite = favoriteBtn && favoriteBtn.classList.contains('active');

            // Определяем видимость
            let shouldDisplay = cardStatus === currentStatus;

            if (value === 'favorites') {
                shouldDisplay = shouldDisplay && isFavorite;
            }

            // Применяем видимость
            if (shouldDisplay) {
                card.style.display = '';
                card.classList.remove('hidden');
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        });

        // Обновляем счетчики
        updateAllCounters();
        updateCategoryTotalCounts();
        updateWordCount(); // Обновление общего счетчика фраз
    }

    // Функция для обновления главного счетчика фраз/идиом на странице
    function updateWordCount() {
        const contentType = getContentType();
        const strings = getLocalizedStrings(contentType);
        const wordCountElement = document.querySelector('.word-count');

        if (!wordCountElement) return;

        // Получаем текущий активный фильтр
        const filterSelect = document.getElementById('filterSelect');
        const currentFilter = filterSelect ? filterSelect.value : 'all';

        // Получаем текущий статус
        const activeBtn = document.querySelector('.switcher-btn.active');
        const currentStatus = activeBtn ? activeBtn.getAttribute('data-filter') : 'studying';

        // Считаем видимые карточки в зависимости от фильтра
        let visibleCardsSelector;

        if (currentFilter === 'favorites') {
            // В избранном считаем только те карточки, где есть активная звездочка
            const cardElements = document.querySelectorAll(`${strings.cardSelector}[data-status="${currentStatus}"]:not(.hidden)`);
            let count = 0;

            cardElements.forEach(card => {
                const favoriteBtn = card.querySelector('.action-button.favorite');
                if (favoriteBtn && favoriteBtn.classList.contains('active')) {
                    count++;
                }
            });

            // Склонение для счетчика
            const itemWord = contentType === 'phrase' ?
                getDeclension(count, 'фраза', 'фразы', 'фраз') :
                getDeclension(count, 'идиома', 'идиомы', 'идиом');

            wordCountElement.textContent = `${count} ${itemWord}`;
        } else {
            // Для общего фильтра считаем все видимые карточки
            const visibleCards = document.querySelectorAll(`${strings.cardSelector}[data-status="${currentStatus}"]:not(.hidden)`);

            // Склонение для счетчика
            const count = visibleCards.length;
            const itemWord = contentType === 'phrase' ?
                getDeclension(count, 'фраза', 'фразы', 'фраз') :
                getDeclension(count, 'идиома', 'идиомы', 'идиом');

            wordCountElement.textContent = `${count} ${itemWord}`;
        }
    }

    // Функция склонения слов
    function getDeclension(number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
            return five;
        }
        n %= 10;
        if (n === 1) {
            return one;
        }
        if (n >= 2 && n <= 4) {
            return two;
        }
        return five;
    }

    // Новая функция для обновления общего количества в категориях (не только избранных)
    function updateCategoryTotalCounts() {
        const contentType = getContentType();
        const strings = getLocalizedStrings(contentType);

        // Получаем текущее значение фильтра
        const filterSelect = document.getElementById('filterSelect');
        const currentFilter = filterSelect ? filterSelect.value : 'all';

        // Получаем текущий статус (studying/learned)
        const activeBtn = document.querySelector('.switcher-btn.active');
        const currentStatus = activeBtn ? activeBtn.getAttribute('data-filter') : 'studying';

        // Обновляем счетчики всех категорий
        document.querySelectorAll('.category-item').forEach(category => {
            const categoryId = category.getAttribute('data-category');
            const countElement = category.querySelector('.category-count');

            if (countElement) {
                let visibleCards = 0;

                if (currentFilter === 'favorites') {
                    // В режиме избранного считаем только избранные карточки
                    document.querySelectorAll(`${strings.cardSelector}[data-category="${categoryId}"][data-status="${currentStatus}"]`).forEach(card => {
                        const favoriteBtn = card.querySelector('.action-button.favorite');
                        if (favoriteBtn && favoriteBtn.classList.contains('active')) {
                            visibleCards++;
                        }
                    });
                } else {
                    // В режиме "все" считаем все карточки соответствующего статуса
                    visibleCards = document.querySelectorAll(
                        `${strings.cardSelector}[data-category="${categoryId}"][data-status="${currentStatus}"]`
                    ).length;
                }

                // Обновляем счетчик
                countElement.textContent = visibleCards;
            }
        });
    }

    // Обновляем существующую функцию, чтобы она вызывала новую
    function updateCategoryFavoritesCount() {
        updateCategoryTotalCounts();
    }

    // Сохранение избранных
    function saveFavorites(storageKey, isActive, id) {
        try {
            // Получаем текущие избранные
            let favorites = getSavedFavorites(storageKey);

            if (isActive) {
                // Добавляем в избранное, если еще нет
                if (!favorites.includes(id)) {
                    favorites.push(id);
                }
            } else {
                // Удаляем из избранного
                favorites = favorites.filter(favId => favId !== id);
            }

            // Сохраняем обновленный список
            localStorage.setItem(storageKey, JSON.stringify(favorites));
            console.log(`Saved favorites, now have ${favorites.length} items`);

        } catch (error) {
            console.error('Error saving favorites:', error);
        }
    }

    // Показать карточку с анимацией
    function showCardWithAnimation(card) {
        // Проверяем соответствие текущему статусу
        const activeBtn = document.querySelector('.switcher-btn.active');
        const currentStatus = activeBtn ? activeBtn.getAttribute('data-filter') : 'studying';
        const cardStatus = card.getAttribute('data-status');

        if (cardStatus === currentStatus) {
            // Подготовка к анимации
            card.classList.remove('hidden');
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';

            // Анимация появления
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';

                // Обновляем счетчики после появления
                updateWordCount();
            }, 10);
        }
    }

    // Скрыть карточку с анимацией
    function hideCardWithAnimation(card) {
        // Анимация исчезновения
        card.style.transition = 'all 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';

        // После анимации скрываем
        setTimeout(() => {
            card.style.display = 'none';
            card.classList.add('hidden');

            // Важно: обновляем счетчики после завершения анимации
            updateCategoryTotalCounts();
            updateAllCounters();
            updateWordCount();
        }, 300);
    }

    // Показать уведомление
    function showNotification(message, type = 'info') {
        // Используем глобальную функцию, если доступна
        if (typeof window.showNotification === 'function') {
            window.showNotification(message, type);
            return;
        }

        // Создаем свое уведомление
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            border-radius: 8px;
            z-index: 1001;
            background-color: ${type === 'success' ? 'rgba(56, 189, 142, 0.25)' : 'rgba(100, 116, 139, 0.25)'};
            color: ${type === 'success' ? '#a7f3d0' : '#cbd5e1'};
        `;

        document.body.appendChild(notification);

        // Анимация появления и исчезновения
        if (window.Animation) {
            notification.animate(
                [
                    { transform: 'translateX(100%)', opacity: 0 },
                    { transform: 'translateX(0)', opacity: 1 }
                ],
                { duration: 300, easing: 'ease-out' }
            );

            setTimeout(() => {
                notification.animate(
                    [
                        { transform: 'translateX(0)', opacity: 1 },
                        { transform: 'translateX(100%)', opacity: 0 }
                    ],
                    { duration: 300, easing: 'ease-in' }
                ).onfinish = () => notification.remove();
            }, 3000);
        } else {
            // Запасной вариант без анимации
            setTimeout(() => notification.remove(), 3000);
        }
    }

    // Обновление всех счетчиков
    function updateAllCounters() {
        setTimeout(() => {
            // Вызываем все возможные функции обновления счетчиков
            const updaters = [
                updateCategoryCounts,
                updateTotalPhraseCount,
                updateTotalIdiomCount,
                updateTotalContentCount,
                updateWordCount // Добавлен наш новый счетчик
            ];

            updaters.forEach(func => {
                if (typeof func === 'function') {
                    try {
                        func();
                    } catch (error) {
                        console.error(`Error calling ${func.name}:`, error);
                    }
                }
            });
        }, 50);
    }

    // Экспорт глобальных функций
    window.ImprovedFavoriteModule = {
        init: initFavorites,
        apply: applyFilter,
        refresh: function () {
            const contentType = getContentType();
            const strings = getLocalizedStrings(contentType);
            const savedFavorites = getSavedFavorites(strings.storageKey);
            applyFavoritesToButtons(savedFavorites, strings.cardSelector);
            checkCurrentFilter();
            updateAllCounters();
            updateCategoryTotalCounts();
            updateWordCount(); // Добавлено для обновления счетчика
        }
    };
})(); 

/* ============================================
Category
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    // Инициализация счётчиков категорий
    updateCategoryCounts();

    // Инициализация переключения категорий
    initCategoryToggles();

    // Добавление обработчиков событий для карточек
    addCardEventListeners();

    // Инициализация чекбоксов категорий
    initCategoryCheckboxes();

    // Обработчик для "Выбрать все"
    document.querySelector('.select-all-checkbox')?.addEventListener('change', function () {
        const checked = this.checked;
        document.querySelectorAll('.phrase-card:not(.hidden) .phrase-checkbox').forEach(checkbox => {
            checkbox.checked = checked;
        });
        updateBatchActions();
        updateCategoryCheckboxes();
    });

    // Обработчики для кнопок пакетных действий
    document.getElementById('batchActionBack')?.addEventListener('click', function () {
        document.querySelectorAll('.phrase-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });

        // Снимаем выделение чекбоксов категорий
        document.querySelectorAll('.category-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });

        document.querySelector('.select-all-checkbox').checked = false;
        updateBatchActions();
    });

    document.getElementById('batchActionMarkLearned')?.addEventListener('click', function () {
        const currentFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter') || 'studying';
        let actionTaken = false;

        document.querySelectorAll('.phrase-checkbox:checked').forEach(checkbox => {
            const card = checkbox.closest('.phrase-card');
            if (card) {
                actionTaken = true;
                // If in "studying" tab, mark as learned
                if (currentFilter === 'studying') {
                    card.setAttribute('data-status', 'learned');

                    // Save the change to localStorage
                    savePhrasesStatus(card.getAttribute('data-id'), 'learned');

                    // Hide card if we're in studying tab
                    card.classList.add('hidden');
                }
                // If in "learned" tab, return to studying
                else if (currentFilter === 'learned') {
                    card.setAttribute('data-status', 'studying');

                    // Save the change to localStorage
                    savePhrasesStatus(card.getAttribute('data-id'), 'studying');

                    // Hide card if we're in learned tab
                    card.classList.add('hidden');
                }
            }
        });

        if (actionTaken) {
            // Update counts and refresh the UI
            updateFilterCounts();

            // Show appropriate notification message
            if (currentFilter === 'studying') {
                showNotification('Фразы отмечены как изученные', 'success');
            } else {
                showNotification('Фразы возвращены на изучение', 'success');
            }
        }

        // Reset selection
        document.getElementById('batchActionBack').click();
    });

    // Helper function to save status changes to localStorage
    function savePhrasesStatus(id, status) {
        let phrasesStatus = JSON.parse(localStorage.getItem('phrasesStatus') || '{}');
        phrasesStatus[id] = status;
        localStorage.setItem('phrasesStatus', JSON.stringify(phrasesStatus));
        console.log(`Saved status for phrase ${id}: ${status}`);
    }

    document.getElementById('batchActionDelete')?.addEventListener('click', function () {
        document.querySelectorAll('.phrase-checkbox:checked').forEach(checkbox => {
            const card = checkbox.closest('.phrase-card');
            if (card) {
                card.remove();
            }
        });

        // Обновляем счётчики категорий после удаления
        updateCategoryCounts();

        // Сбрасываем выбор
        document.getElementById('batchActionBack').click();
    });

    // Обработчики для фильтрации по статусу
    document.querySelector('.switcher-btn[data-filter="studying"]')?.addEventListener('click', function () {
        document.querySelectorAll('.switcher-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Фильтрация карточек со статусом "studying"
        filterCardsByStatus('studying');
    });

    document.querySelector('.switcher-btn[data-filter="learned"]')?.addEventListener('click', function () {
        console.log("Switching to 'learned' view");
        document.querySelectorAll('.switcher-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Принудительно перезагружаем данные из localStorage перед фильтрацией
        loadPhrasesStatus();

        // Фильтрация карточек со статусом "learned"
        filterCardsByStatus('learned');
    });

    // Обработчик для поиска
    document.getElementById('searchInput')?.addEventListener('input', function () {
        filterCardsBySearch(this.value);
    });

    // Инициализация фильтров
    initFilters();
});

// Функция для инициализации чекбоксов категорий
function initCategoryCheckboxes() {
    document.querySelectorAll('.category-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function (e) {
            e.stopPropagation(); // Предотвращаем всплытие события клика

            const categoryId = this.getAttribute('data-category');
            const isChecked = this.checked;

            // Выбираем все чекбоксы фраз в данной категории
            const phraseCheckboxes = document.querySelectorAll(`.phrase-card[data-category="${categoryId}"]:not(.hidden) .phrase-checkbox`);

            // Устанавливаем всем чекбоксам фраз в категории такое же состояние
            phraseCheckboxes.forEach(phraseCheckbox => {
                phraseCheckbox.checked = isChecked;
            });

            // Обновляем общее состояние интерфейса
            updateBatchActions();
            updateSelectAllCheckbox();
            updateSelectedPhrasesCount();
        });
    });

    // Обработчики для проверки выбраны ли все фразы в категории
    document.querySelectorAll('.phrase-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            updateCategoryCheckboxes();
            updateSelectAllCheckbox();
        });
    });
}

// Функция для обновления состояния чекбоксов категорий
function updateCategoryCheckboxes() {
    document.querySelectorAll('.category-item').forEach(category => {
        const categoryId = category.getAttribute('data-category');
        const categoryCheckbox = document.querySelector(`.category-checkbox[data-category="${categoryId}"]`);

        if (categoryCheckbox) {
            const phraseCheckboxes = document.querySelectorAll(`.phrase-card[data-category="${categoryId}"]:not(.hidden) .phrase-checkbox`);
            const checkedPhraseCheckboxes = document.querySelectorAll(`.phrase-card[data-category="${categoryId}"]:not(.hidden) .phrase-checkbox:checked`);

            // Если все фразы выбраны, отмечаем чекбокс категории
            if (phraseCheckboxes.length > 0 && checkedPhraseCheckboxes.length === phraseCheckboxes.length) {
                categoryCheckbox.checked = true;
            } else {
                categoryCheckbox.checked = false;
            }
        }
    });
}

// Функция для обновления состояния чекбокса "Выбрать все"
function updateSelectAllCheckbox() {
    const selectAllCheckbox = document.querySelector('.select-all-checkbox');
    if (selectAllCheckbox) {
        const allCheckboxes = document.querySelectorAll('.phrase-card:not(.hidden) .phrase-checkbox');
        const checkedCheckboxes = document.querySelectorAll('.phrase-card:not(.hidden) .phrase-checkbox:checked');

        if (allCheckboxes.length > 0) {
            if (checkedCheckboxes.length === allCheckboxes.length) {
                selectAllCheckbox.checked = true;
                selectAllCheckbox.indeterminate = false;
            } else if (checkedCheckboxes.length === 0) {
                selectAllCheckbox.checked = false;
                selectAllCheckbox.indeterminate = false;
            } else {
                selectAllCheckbox.indeterminate = true;
            }
        } else {
            selectAllCheckbox.checked = false;
            selectAllCheckbox.indeterminate = false;
        }
    }
}

// Функция для обновления счётчиков категорий
function updateCategoryCounts() {
    document.querySelectorAll('.category-item').forEach(category => {
        const categoryId = category.getAttribute('data-category');
        const contentContainer = document.getElementById(`${categoryId}-content`);
        const visibleCards = contentContainer ? contentContainer.querySelectorAll('.phrase-card:not(.hidden)') : [];

        // Обновляем счётчик категории
        const countElement = category.querySelector('.category-count');
        if (countElement) {
            countElement.textContent = visibleCards.length;
        }
    });

    // Обновляем общий счётчик фраз
    updateTotalPhraseCount();
}

// Функция для обновления общего счётчика фраз
function updateTotalPhraseCount() {
    // Получаем текущие фильтры
    const activeStatusFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter') || 'studying';
    const activeFavoriteFilter = document.getElementById('filterSelect')?.value || 'all';

    console.log(`Updating count with filters: status=${activeStatusFilter}, favorites=${activeFavoriteFilter}`);

    // Подсчитываем видимые фразы с учетом фильтров
    let totalVisiblePhrases = 0;

    if (activeFavoriteFilter === 'favorites') {
        // Только избранные с соответствующим статусом
        // ИСПРАВЛЕНО: Правильный селектор для избранных фраз
        totalVisiblePhrases = document.querySelectorAll(`.phrase-card[data-status="${activeStatusFilter}"] .action-button.favorite.active`).length;
    } else {
        // Все с соответствующим статусом
        totalVisiblePhrases = document.querySelectorAll(`.phrase-card[data-status="${activeStatusFilter}"]`).length;
    }

    console.log(`Found ${totalVisiblePhrases} visible phrases for filter combination`);

    // Обновляем элемент счетчика
    const wordCountElement = document.querySelector('.word-count');
    if (wordCountElement) {
        let countText = `${totalVisiblePhrases} `;

        // Склонение слова "фраза"
        if (totalVisiblePhrases === 1) {
            countText += 'фраза';
        } else if (totalVisiblePhrases >= 2 && totalVisiblePhrases <= 4) {
            countText += 'фразы';
        } else {
            countText += 'фраз';
        }

        wordCountElement.textContent = countText;
    }

    // Обновляем счётчик выбранных фраз
    updateSelectedPhrasesCount();
}

// Функция для обновления счётчика выбранных фраз
function updateSelectedPhrasesCount() {
    const selectedCount = document.querySelectorAll('.phrase-card:not(.hidden) .phrase-checkbox:checked').length;
    const totalVisible = document.querySelectorAll('.phrase-card:not(.hidden)').length;
    const wordCountElement = document.querySelector('.word-count');

    if (wordCountElement && selectedCount > 0) {
        wordCountElement.textContent = `${selectedCount} из ${totalVisible} фраз`;
    } else if (wordCountElement) {
        wordCountElement.textContent = `${totalVisible} фраз`;
    }

    // Обновляем текст кнопки изучения и добавляем/удаляем класс selected
    const studyButton = document.querySelector('.study-button');
    if (studyButton) {
        const originalText = studyButton.getAttribute('data-original-text') || "Учить фразы";
        if (!studyButton.getAttribute('data-original-text')) {
            studyButton.setAttribute('data-original-text', studyButton.textContent);
        }

        if (selectedCount > 0) {
            studyButton.textContent = `Учить фразы (${selectedCount})`;
            studyButton.classList.add('selected'); // Добавляем класс для стилизации
        } else {
            studyButton.textContent = originalText;
            studyButton.classList.remove('selected'); // Удаляем класс
        }
    }
}

// Функция для обновления счётчиков при фильтрации
function updateFilterCounts() {
    const activeFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter') || 'studying';

    // Update the count in both tabs
    document.querySelectorAll('.switcher-btn').forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        const count = document.querySelectorAll(`.phrase-card[data-status="${filter}"]`).length;

        // You could add a count element to the tabs if it doesn't exist
        let countElement = btn.querySelector('.filter-count');
        if (!countElement) {
            countElement = document.createElement('span');
            countElement.className = 'filter-count';
            btn.appendChild(countElement);
        }

        // Update the count
        countElement.textContent = `(${count})`;
    });

    // Update category counts
    updateCategoryCounts();
}

// Функция для инициализации переключения категорий
function initCategoryToggles() {
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', function (e) {
            // Проверяем, не был ли клик на чекбоксе
            if (e.target.classList.contains('category-checkbox')) {
                return; // Не переключаем категорию если кликнули на чекбокс
            }

            const categoryItem = this.closest('.category-item');
            const wasActive = categoryItem.classList.contains('active');

            // Сворачиваем все категории
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });

            // Если категория не была активна, разворачиваем её
            if (!wasActive) {
                categoryItem.classList.add('active');
            }
        });
    });
}

// Функция для добавления обработчиков событий к карточкам фраз
function addCardEventListeners() {
    // Обработчики для кнопок избранного
    document.querySelectorAll('.action-button.favorite').forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });

    // Обработчики для кнопок удаления
    document.querySelectorAll('.action-button.delete').forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.phrase-card');
            if (card) {
                card.remove();
                updateCategoryCounts();
            }
        });
    });

    // Обработчики для чекбоксов
    document.querySelectorAll('.phrase-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            updateBatchActions();
            updateSelectedPhrasesCount();
        });
    });
}

// Функция для обновления состояния кнопок пакетных действий
function updateBatchActions() {
    const checkedItems = document.querySelectorAll('.phrase-checkbox:checked').length;
    const batchActions = document.getElementById('batch-actions');

    if (batchActions) {
        if (checkedItems > 0) {
            batchActions.style.display = 'block';
        } else {
            batchActions.style.display = 'none';
        }
    }

    // Обновляем текст кнопки действия в зависимости от текущего фильтра
    const batchActionMarkLearned = document.getElementById('batchActionMarkLearned');
    const activeFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter');

    if (batchActionMarkLearned) {
        if (activeFilter === 'learned') {
            batchActionMarkLearned.textContent = 'Вернуть на изучение';
        } else {
            batchActionMarkLearned.textContent = 'Отметить как изученные';
        }
    }
}

// Функция для фильтрации карточек по статусу
function filterCardsByStatus(status) {
    console.log(`Filtering cards by status: "${status}"`);

    // Сначала выводим отладочную информацию
    const totalCards = document.querySelectorAll('.phrase-card').length;
    const statusCards = document.querySelectorAll(`.phrase-card[data-status="${status}"]`).length;
    console.log(`Found ${statusCards} out of ${totalCards} cards with status "${status}"`);

    // Если статус "learned", покажем какие конкретно ID имеют статус "learned"
    if (status === "learned") {
        const learnedCards = document.querySelectorAll('.phrase-card[data-status="learned"]');
        const learnedIds = Array.from(learnedCards).map(card => card.getAttribute('data-id'));
        console.log("Learned card IDs:", learnedIds);
    }

    document.querySelectorAll('.phrase-card').forEach(card => {
        const cardStatus = card.getAttribute('data-status') || 'studying';
        console.log(`Card ${card.getAttribute('data-id')} status: "${cardStatus}"`);

        if (cardStatus === status) {
            card.classList.remove('hidden');
            card.style.display = '';
        } else {
            card.classList.add('hidden');
            card.style.display = 'none';
        }
    });

    // Обновляем счётчики категорий после фильтрации
    updateCategoryCounts();

    // Сбрасываем все чекбоксы
    document.querySelectorAll('.phrase-checkbox, .category-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });

    const selectAllCheckbox = document.querySelector('.select-all-checkbox');
    if (selectAllCheckbox) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    }

    updateBatchActions();

    // Обновляем счетчик карточек
    const visibleCount = document.querySelectorAll(`.phrase-card:not(.hidden)`).length;
    console.log(`After filtering: ${visibleCount} visible cards`);
}

// Функция для фильтрации карточек по поисковому запросу
function filterCardsBySearch(searchText) {
    searchText = searchText.toLowerCase();

    // Получаем текущий активный фильтр статуса
    const activeFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter') || 'studying';

    document.querySelectorAll('.phrase-card').forEach(card => {
        const phraseText = card.querySelector('h3').textContent.toLowerCase();
        const translationText = card.querySelector('.phrase-translation').textContent.toLowerCase();
        const exampleText = card.querySelector('.phrase-example')?.textContent.toLowerCase() || '';
        const cardStatus = card.getAttribute('data-status');

        // Проверяем совпадение текста и статуса
        const matchesSearch = phraseText.includes(searchText) ||
            translationText.includes(searchText) ||
            exampleText.includes(searchText);

        const matchesStatus = (activeFilter === 'studying' && cardStatus === 'studying') ||
            (activeFilter === 'learned' && cardStatus === 'learned');

        if (matchesSearch && matchesStatus) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    // Обновляем счётчики категорий после поиска
    updateCategoryCounts();

    // Обновляем чекбоксы категорий
    updateCategoryCheckboxes();
}

// Функция для инициализации фильтров
function initFilters() {
    // Инициализируем фильтр по статусу "studying" (по умолчанию)
    filterCardsByStatus('studying');

    // Инициализируем фильтр "Все фразы" / "Избранные"
    document.getElementById('filterSelect')?.addEventListener('change', function () {
        const filterValue = this.value;

        if (filterValue === 'all') {
            // Показываем все карточки (с учётом текущего фильтра статуса)
            const activeFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter') || 'studying';
            filterCardsByStatus(activeFilter);
        } else if (filterValue === 'favorites') {
            // Показываем только избранные карточки
            document.querySelectorAll('.phrase-card').forEach(card => {
                const isFavorite = card.querySelector('.action-button.favorite').classList.contains('active');
                const cardStatus = card.getAttribute('data-status');
                const activeFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter') || 'studying';

                if (isFavorite && cardStatus === activeFilter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });

            // Обновляем счётчики
            updateCategoryCounts();
        }
    });

    // Инициализируем сортировку
    document.getElementById('sortSelect')?.addEventListener('change', function () {
        const sortValue = this.value;

        document.querySelectorAll('.category-content').forEach(container => {
            const cards = Array.from(container.querySelectorAll('.phrase-card'));

            if (sortValue === 'date') {
                // Сортировка по дате (от новых к старым)
                cards.sort((a, b) => {
                    const dateA = new Date(a.getAttribute('data-added'));
                    const dateB = new Date(b.getAttribute('data-added'));
                    return dateB - dateA;
                });
            } else if (sortValue === 'alphabetical') {
                // Сортировка по алфавиту
                cards.sort((a, b) => {
                    const textA = a.querySelector('h3').textContent.toLowerCase();
                    const textB = b.querySelector('h3').textContent.toLowerCase();
                    return textA.localeCompare(textB);
                });
            }

            // Применяем новый порядок
            cards.forEach(card => container.appendChild(card));
        });
    });
}

// Интеграция с существующим скриптом изучения фраз
document.addEventListener('DOMContentLoaded', function () {
    // Проверяем наличие кнопки изучения
    const studyButton = document.querySelector('.study-button');

    if (studyButton && typeof PhraseTraining !== 'undefined') {
        // Сохраняем оригинальный обработчик клика, если он есть
        const originalClickHandler = studyButton.onclick;

        // Устанавливаем новый обработчик
        studyButton.addEventListener('click', function () {
            const selectedPhrases = document.querySelectorAll('.phrase-card:not(.hidden) .phrase-checkbox:checked');

            if (selectedPhrases.length > 0) {
                // Создаем экземпляр класса PhraseTraining и передаем количество выбранных фраз
                const phraseTraining = new PhraseTraining();
                phraseTraining.initialize(selectedPhrases.length);
            } else if (originalClickHandler) {
                // Вызываем оригинальный обработчик, если фразы не выбраны
                originalClickHandler();
            }
        });
    }
});


/* ============================================
Modal Window for Phrasal verbs
============================================ */
class PhraseTraining {
    constructor() {
        this.selectedPhrases = [];
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.count = 0;
        this.activeModesSequence = [];
        this.currentModeIndex = 0;
        this.trainingModes = {
            matchPictures: true,       // Match the Pictures to the Correct Sentences
            writePhrasalVerb: true,    // Write the Correct Phrasal Verb Next to Its Definition
            fillGaps: true,           // Fill in the Gaps with the Correct Phrasal Verb
            chooseCorrectMeaning: true, // Read the statement and choose the correct meaning
            /* crossOutIncorrect: true, */  // Cross out the incorrect words in each sentence
            trueOrFalse: true,  
            findMistake: true         // Find the Mistake (error correction)
        };
        this.totalCorrectAnswers = 0; // Track total correct answers across all modes
    }

    initialize(selectedPhrasesCount) {
        // Получаем выбранные фразы заранее, чтобы знать их реальное количество
        this.selectedPhrases = this.getSelectedPhrases();

        // Используем количество реально выбранных фраз
        this.count = this.selectedPhrases.length;

        this.createTrainingModal(this.count);
    }

    getSelectedPhrases() {
        // Получаем выбранные фразы (с отмеченными чекбоксами)
        const selectedPhraseElements = document.querySelectorAll('.phrase-card:not(.hidden) .phrase-checkbox:checked');
        const phrases = [];

        // Создаем структуру данных для каждой выбранной фразы
        selectedPhraseElements.forEach(checkbox => {
            const phraseElement = checkbox.closest('.phrase-card');
            if (phraseElement) {
                const phrase = {
                    id: phraseElement.dataset.id,
                    text: phraseElement.querySelector('h3').textContent,
                    translation: phraseElement.querySelector('.phrase-translation').textContent,
                    example: phraseElement.querySelector('.phrase-example')?.textContent || '',
                    imageUrl: phraseElement.dataset.imageUrl || '',
                    synonyms: phraseElement.dataset.synonyms || '',
                    forms: phraseElement.dataset.forms || '',
                    commonMistakes: phraseElement.dataset.commonMistakes || '',
                    extraExamples: phraseElement.dataset.extraExamples || ''
                };
                phrases.push(phrase);
            }
        });

        // Если ничего не выбрано, берем фразы со статусом "studying" до нужного количества
        if (phrases.length === 0) {
            const phrasesElements = document.querySelectorAll('.phrase-card[data-status="studying"]');
            const phrasesArray = Array.from(phrasesElements).slice(0, this.count || 5); // Дефолтное значение 5, если count не задан

            phrasesArray.forEach(phraseElement => {
                const phrase = {
                    id: phraseElement.dataset.id,
                    text: phraseElement.querySelector('h3').textContent,
                    translation: phraseElement.querySelector('.phrase-translation').textContent,
                    example: phraseElement.querySelector('.phrase-example')?.textContent || '',
                    imageUrl: phraseElement.dataset.imageUrl || '',
                    synonyms: phraseElement.dataset.synonyms || '',
                    forms: phraseElement.dataset.forms || '',
                    commonMistakes: phraseElement.dataset.commonMistakes || '',
                    extraExamples: phraseElement.dataset.extraExamples || ''
                };
                phrases.push(phrase);
            });
        }

        return phrases;
    }

    createTrainingModal(selectedPhrasesCount) {
        // Удаляем существующее модальное окно, если оно есть
        const existingModal = document.getElementById('phraseTrainingModal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.id = 'phraseTrainingModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;

        // Подсчитываем количество активных режимов
        const modesCount = Object.values(this.trainingModes).filter(Boolean).length;
        let modeWord;
        if (modesCount === 1) {
            modeWord = 'режим';
        } else if (modesCount > 1 && modesCount < 5) {
            modeWord = 'режима';
        } else {
            modeWord = 'режимов';
        }

        // Количество выбранных фраз для изучения, которые мы получили из выбранных чекбоксов
        const selectedPhraseCount = this.selectedPhrases.length;

        modal.innerHTML = `
            <style>
                .mode-checkbox {
                    appearance: none;
                    width: 20px !important;
                    height: 20px !important;
                    border: 2px solid #6366f1;
                    border-radius: 4px;
                    background-color: transparent;
                    cursor: pointer;
                    position: relative;
                }

                .mode-checkbox:checked {
                    background-color: #6366f1;
                }

                .mode-checkbox:checked::after {
                    content: '✓';
                    position: absolute;
                    color: white;
                    font-size: 14px;
                    left: 50%;
                    top: 45%;
                    transform: translate(-50%, -50%);
                }

                .mode-item {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    background: #292a3e;
                    padding: 16px;
                    border-radius: 8px;
                    opacity: 0.7;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                }

                .mode-item.active {
                    opacity: 1;
                    border-color: #6366f1;
                    background: rgba(99, 102, 241, 0.1);
                }
                
                .settings-btn:hover {
                    color: #f8fafc !important;
                }
                .settings-btn:hover svg {
                    stroke: #f8fafc;
                }
                
                .control-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #292a3e;
                    color: #f8fafc;
                    border: none;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                
                .control-btn:hover {
                    background: #6366f1;
                }
                
                .start-training-btn, .save-modes-btn, .close-completion {
                    background: #6366f1;
                    color: #f8fafc;
                    padding: 12px 32px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                
                .start-training-btn:hover, .save-modes-btn:hover, .close-completion:hover {
                    background: #4f46e5;
                }
                
                .close-modal, .close-modes-modal {
                    color: #b6b9d0;
                    background: none;
                    border: none;
                    font-size: 32px;
                    cursor: pointer;
                    padding: 8px;
                    transition: color 0.3s ease;
                }
                
                .close-modal:hover, .close-modes-modal:hover {
                    color: #f8fafc;
                }
            </style>
            <div style="background: #1e1e2e; width: 95vw; height: 90vh; border-radius: 12px; padding: 24px; margin: 16px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <button class="close-modal" style="position: absolute; top: 60px; right: 60px;">×</button>
                
                <div style="text-align: center; max-width: 400px;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="position: relative; text-align: center;">
                            <span style="position: absolute; top: -60px; left: 50%; transform: translateX(-50%); font-size: 70px;">📝</span>
                            <h2 style="font-size: 30px; font-weight: 700; color: #f8fafc; margin-top: 45px;">Phrase Training</h2>
                        </div>
                        <p style="color: #b6b9d0; margin-top: 8px; font-size: 16px;">Выбрано фраз: ${selectedPhraseCount}</p>
                    </div>
                    
                    <div style="margin-top: 64px;">
                        <p style="color: #b6b9d0; margin-bottom: 24px; font-size: 16px;">Выберите количество фраз</p>
                        
                        <div class="phrase-count-controls" style="display: flex; align-items: center; justify-content: center; gap: 24px; margin-bottom: 64px;">
                            <button class="minus-btn control-btn">-</button>
                            <span class="phrase-count" style="font-size: 24px; color: #f8fafc;">${selectedPhrasesCount}</span>
                            <button class="plus-btn control-btn">+</button>
                        </div>

                        <button class="settings-btn" style="background: none; border: none; cursor: pointer; color: #b6b9d0; font-size: 18px; display: flex; align-items: center; gap: 8px; margin: 0 auto 64px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                            ${modesCount} ${modeWord}
                        </button>

                        <button class="start-training-btn" style="width: 100%;">
                            Начать тренировку
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.addModalEventListeners(modal);
    }

    addModalEventListeners(modal) {
        // Close button
        modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());

        // Count controls
        const minusBtn = modal.querySelector('.minus-btn');
        const plusBtn = modal.querySelector('.plus-btn');
        const phraseCountSpan = modal.querySelector('.phrase-count');

        minusBtn.addEventListener('click', () => {
            if (this.count > 1) {
                this.count--;
                phraseCountSpan.textContent = this.count;
            }
        });

        plusBtn.addEventListener('click', () => {
            // Максимальное количество - это количество выбранных фраз
            const maxCount = this.selectedPhrases.length;
            if (this.count < maxCount) {
                this.count++;
                phraseCountSpan.textContent = this.count;
            }
        });

        // Settings button
        modal.querySelector('.settings-btn').addEventListener('click', () => this.createModesModal());

        // Start training button
        modal.querySelector('.start-training-btn').addEventListener('click', () => {
            modal.remove();
            this.startTraining();
        });
    }

    createModesModal() {
        // Удаляем существующее модальное окно, если оно есть
        const existingModal = document.getElementById('phraseModesModalOverlay');
        if (existingModal) {
            existingModal.remove();
        }

        // Создаем затемненный фон за модальным окном режимов
        const overlay = document.createElement('div');
        overlay.id = 'phraseModesModalOverlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1001;
        `;

        const modesModal = document.createElement('div');
        modesModal.id = 'phraseModesModal';
        modesModal.style.cssText = `
            background: #1e1e2e;
            width: 90vw;
            max-width: 650px;
            max-height: 80vh;
            border-radius: 12px;
            padding: 24px;
            margin: 16px;
            overflow-y: auto;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            z-index: 1002;
        `;

        const modeDescriptions = {
            matchPictures: "Найдите соответствующие картинки для фраз",
            writePhrasalVerb: "Напишите правильный фразовый глагол к определению",
            fillGaps: "Заполните пропуски правильным фразовым глаголом",
            chooseCorrectMeaning: "Прочитайте предложение и выберите правильное значение",
            /* crossOutIncorrect: "Вычеркните неправильные слова в каждом предложении", */
            trueOrFalse: "Определите, правильно ли использован фразовый глагол в предложении",
            findMistake: "Найдите ошибку"
        };

        modesModal.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h2 style="color: #f8fafc; font-size: 24px;">Режимы тренировки</h2>
                <button class="close-modes-modal" style="color: #b6b9d0; background: none; border: none; font-size: 32px; cursor: pointer; padding: 8px;">×</button>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr; gap: 16px; max-width: 600px; margin: 0 auto;">
                ${Object.keys(this.trainingModes).map(mode => `
                    <label class="mode-item ${this.trainingModes[mode] ? 'active' : ''}" data-mode="${mode}">
                        <input type="checkbox" class="mode-checkbox" ${this.trainingModes[mode] ? 'checked' : ''}>
                        <div>
                            <h3 style="color: #f8fafc; font-size: 18px; margin: 0 0 4px 0;">${this.getModeTitle(mode)}</h3>
                            <p style="color: #b6b9d0; font-size: 14px; margin: 0;">${modeDescriptions[mode]}</p>
                        </div>
                    </label>
                `).join('')}
            </div>
            
            <div style="display: flex; justify-content: center; gap: 16px; margin-top: 32px;">
                <button class="cancel-modes-btn" style="background: #292a3e; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; transition: background-color 0.3s ease; font-size: 16px;">
                    Отмена
                </button>
                <button class="save-modes-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; transition: background-color 0.3s ease; font-size: 16px;">
                    Сохранить
                </button>
            </div>
        `;

        overlay.appendChild(modesModal);
        document.body.appendChild(overlay);

        // Event listeners for checkboxes and labels
        modesModal.querySelectorAll('.mode-item').forEach(item => {
            const checkbox = item.querySelector('.mode-checkbox');

            item.addEventListener('click', function (e) {
                if (e.target !== checkbox) {
                    e.preventDefault();
                    e.stopPropagation();
                    checkbox.checked = !checkbox.checked;
                    const changeEvent = new Event('change');
                    checkbox.dispatchEvent(changeEvent);
                }
            });

            checkbox.addEventListener('change', () => {
                this.updateModeStatus(item, checkbox.checked);
            });
        });

        // Close button
        modesModal.querySelector('.close-modes-modal').addEventListener('click', () => {
            document.getElementById('phraseModesModalOverlay').remove();
        });

        // Cancel button
        modesModal.querySelector('.cancel-modes-btn').addEventListener('click', () => {
            document.getElementById('phraseModesModalOverlay').remove();
        });

        // Save button
        modesModal.querySelector('.save-modes-btn').addEventListener('click', () => {
            try {
                // Сначала отключаем все режимы
                for (const mode in this.trainingModes) {
                    this.trainingModes[mode] = false;
                }

                // Затем включаем только выбранные
                let enabledModesCount = 0;
                modesModal.querySelectorAll('.mode-item').forEach(item => {
                    const checkbox = item.querySelector('.mode-checkbox');
                    const mode = item.dataset.mode;

                    if (checkbox && checkbox.checked) {
                        this.trainingModes[mode] = true;
                        enabledModesCount++;
                    }
                });

                console.log("Активные режимы после сохранения:", enabledModesCount);

                // Правильное склонение слова "режим"
                let modeWord;
                if (enabledModesCount === 1) {
                    modeWord = 'режим';
                } else if (enabledModesCount >= 2 && enabledModesCount <= 4) {
                    modeWord = 'режима';
                } else {
                    modeWord = 'режимов';
                }

                // Обновляем все кнопки настроек
                document.querySelectorAll('.settings-btn').forEach(btn => {
                    btn.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                        ${enabledModesCount} ${modeWord}
                    `;

                    // Сохраняем значение в атрибуте для потенциальной отладки
                    btn.setAttribute('data-modes-count', enabledModesCount);
                });

                // Закрываем модальное окно
                document.getElementById('phraseModesModalOverlay').remove();

            } catch (error) {
                console.error("Ошибка при сохранении режимов:", error);
                alert("Произошла ошибка при сохранении режимов тренировки. Пожалуйста, попробуйте еще раз.");
            }
        });
    }

    updateModeStatus(item, isChecked) {
        const mode = item.dataset.mode;
        this.trainingModes[mode] = isChecked;

        if (isChecked) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }

    getModeTitle(mode) {
        const titles = {
            matchPictures: "Match the Pictures to the Correct Sentences",
            writePhrasalVerb: "Write the Correct Phrasal Verb Next to Its Definition",
            fillGaps: "Fill in the Gaps with the Correct Phrasal Verb",
            chooseCorrectMeaning: "Read the Statement and Choose the Correct Meaning",
            trueOrFalse: "True or False?",
            crossOutIncorrect: "Cross Out the Incorrect Words in Each Sentence",
            findMistake: "Find the Mistake (error correction)"
        };
        return titles[mode] || mode;
    }

    startTraining() {
        console.log('Starting phrase training');
        this.activeModesSequence = [];

        // Добавляем только активные режимы
        for (const mode in this.trainingModes) {
            if (this.trainingModes[mode]) {
                this.activeModesSequence.push(mode);
            }
        }

        console.log('Active modes:', this.activeModesSequence);
        this.currentModeIndex = 0;
        this.totalCorrectAnswers = 0;
        this.startNextMode();
    }

    startNextMode() {
        this.currentCardIndex = 0;
        this.isFlipped = false;

        const nextMode = this.activeModesSequence[this.currentModeIndex];
        console.log({
            currentModeIndex: this.currentModeIndex,
            nextMode,
            activeModesSequence: this.activeModesSequence,
            totalCorrectAnswers: this.totalCorrectAnswers
        });

        if (!nextMode) {
            console.log('No next mode, showing completion modal');
            this.showCompletionModal();
            return;
        }

        switch (nextMode) {
            case 'matchPictures':
                this.createMatchPicturesModal();
                break;
            case 'writePhrasalVerb':
                this.createWritePhrasalVerbModal();
                break;
            case 'fillGaps':
                this.createFillGapsModal();
                break;
            case 'chooseCorrectMeaning':
                this.createChooseCorrectMeaningModal();
                break;
            case 'trueOrFalse':  // Новый режим!
                this.createTrueOrFalseModal();
                break;
            case 'findMistake':
                this.createFindMistakeModal();
                break;
            default:
                this.currentModeIndex++;
                this.startNextMode();
        }
    }

    createProgressIndicator(mode, current, total) {
        return `
            <div style="margin-bottom: 24px; width: 100%;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #b6b9d0; font-size: 14px;">${this.getModeTitle(mode)}</span>
                    <span style="color: #b6b9d0; font-size: 14px;">${current}/${total}</span>
                </div>
                <div style="width: 100%; height: 4px; background: #292a3e; border-radius: 2px; overflow: hidden;">
                    <div style="width: ${(current / total) * 100}%; height: 100%; background: #6366f1; border-radius: 2px;"></div>
                </div>
            </div>
        `;
    }

    showCompletionModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1002;
        `;

        // Calculate total possible answers
        const totalPossibleAnswers = this.activeModesSequence.length * this.count;

        modal.innerHTML = `
            <div style="background: #1e1e2e; width: 95vw; max-width: 500px; border-radius: 12px; padding: 32px; text-align: center;">
                <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 16px;">Все режимы тренировки завершены!</h2>
                <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 16px;">
                    Отличная работа! Вы успешно завершили все выбранные режимы тренировки.
                </p><p style="color: #b6b9d0; font-size: 18px; margin-bottom: 32px;">
                    Общее количество правильных ответов: ${this.totalCorrectAnswers} из ${totalPossibleAnswers}
                </p>
                <button class="close-completion" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; transition: background-color 0.3s ease;">
                Закрыть
                </button>
            </div>
        `;

        document.body.appendChild(modal);

        // Update phrase statistics
        const phraseStats = JSON.parse(localStorage.getItem('phraseStats') || '{}');

        this.selectedPhrases.forEach(phrase => {
            if (!phraseStats[phrase.text]) {
                phraseStats[phrase.text] = { successfulAttempts: 0, lastAttemptDate: null };
            }

            const successRate = this.totalCorrectAnswers / totalPossibleAnswers;
            if (successRate >= 0.7) {
                const today = new Date().toDateString();
                if (phraseStats[phrase.text].lastAttemptDate !== today) {
                    phraseStats[phrase.text].successfulAttempts++;
                    phraseStats[phrase.text].lastAttemptDate = today;
                }
            }
        });

        localStorage.setItem('phraseStats', JSON.stringify(phraseStats));
        window.dispatchEvent(new Event('storage'));

        modal.querySelector('.close-completion').addEventListener('click', () => {
            modal.remove();
            this.totalCorrectAnswers = 0;
        });
    }

    // Вспомогательные функции для всех режимов
    getRandomPhrases(count) {
        // Если count больше реального количества фраз, ограничиваем его
        count = Math.min(count, this.selectedPhrases.length);

        // Если у нас есть выбранные фразы, используем их
        if (this.selectedPhrases.length > 0) {
            // Проверяем, содержат ли выбранные фразы imageUrl
            // Если нет, получаем эту информацию из DOM
            const phrasesWithImages = this.selectedPhrases.map(phrase => {
                if (phrase.imageUrl) return phrase;

                // Ищем элемент карточки по ID для получения URL изображения
                const cardElement = document.querySelector(`.phrase-card[data-id="${phrase.id}"]`);
                if (cardElement && cardElement.dataset.imageUrl) {
                    return {
                        ...phrase,
                        imageUrl: cardElement.dataset.imageUrl
                    };
                }

                // Если нет imageUrl в DOM, используем запасной вариант
                return {
                    ...phrase,
                    imageUrl: this.getDefaultImageUrl(phrase.text)
                };
            });

            // Перемешиваем и берем заданное количество
            return this.shuffleArray([...phrasesWithImages]).slice(0, count);
        }

        // Если фразы специально не выбраны, возвращаем пустой массив
        return [];
    }

    getDefaultImageUrl(phraseText) {
        // Создаем URL для запасного изображения на основе текста фразы
        const keywords = encodeURIComponent(phraseText.replace(/\s+/g, ','));
        return `https://source.unsplash.com/300x200/?${keywords}`;
    }

    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // Функция для проверки ответов с учетом возможных вариаций
    checkAnswer(userAnswer, correctAnswer) {
        // Приводим к нижнему регистру для сравнения
        userAnswer = userAnswer.toLowerCase().trim();
        correctAnswer = correctAnswer.toLowerCase().trim();

        // Базовая проверка на точное соответствие
        if (userAnswer === correctAnswer) {
            return true;
        }

        // Проверка с игнорированием пробелов и дефисов
        const normalizedUserAnswer = userAnswer.replace(/[-\s]/g, '');
        const normalizedCorrectAnswer = correctAnswer.replace(/[-\s]/g, '');

        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            return true;
        }

        // Проверка на опечатки (допускаем одну ошибку)
        if (this.levenshteinDistance(userAnswer, correctAnswer) <= 1) {
            return true;
        }

        return false;
    }

    // Функция для вычисления расстояния Левенштейна (для проверки опечаток)
    levenshteinDistance(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;

        const matrix = [];

        // Инициализируем матрицу
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }

        // Заполняем матрицу
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // замена
                        Math.min(
                            matrix[i][j - 1] + 1, // вставка
                            matrix[i - 1][j] + 1  // удаление
                        )
                    );
                }
            }
        }

        return matrix[b.length][a.length];
    }
}

// Initialize the phrase training when needed
document.addEventListener('DOMContentLoaded', function () {
    // Example: Add a study button event listener
    const studyButton = document.querySelector('.study-button');
    if (studyButton) {
        studyButton.addEventListener('click', function () {
            const selectedPhrases = document.querySelectorAll('.phrase-card:not(.hidden) .phrase-checkbox:checked');
            if (selectedPhrases.length > 0) {
                const phraseTraining = new PhraseTraining();
                phraseTraining.initialize(selectedPhrases.length);
            } else {
                // Если ничего не выбрано, показываем фразы со статусом "studying"
                const studyingPhrases = document.querySelectorAll('.phrase-card[data-status="studying"]');
                if (studyingPhrases.length > 0) {
                    const phraseTraining = new PhraseTraining();
                    phraseTraining.initialize(studyingPhrases.length);
                } else {
                    alert('У вас нет фраз на изучении.');
                }
            }
        });
    }
});

/*--------------------------------------------------------------
#  перенос фразы в "Изучено" 
--------------------------------------------------------------*/
PhraseTraining.prototype.showCompletionModal = function () {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1002;
    `;

    // Calculate total possible answers
    const totalPossibleAnswers = this.activeModesSequence.length * this.count;
    const successRate = this.totalCorrectAnswers / totalPossibleAnswers;

    // Автоматически перемещаем успешно изученные фразы из "На обучении" в "Изучено"
    let autoMovedCount = 0;
    const learnedPhraseIds = []; // Массив для хранения ID изученных фраз

    if (successRate >= 0.8) {
        this.selectedPhrases.forEach(phrase => {
            const phraseElement = document.querySelector(`.phrase-card[data-id="${phrase.id}"][data-status="studying"]`);
            if (phraseElement) {
                phraseElement.setAttribute('data-status', 'learned');
                learnedPhraseIds.push(phrase.id); // Добавляем ID фразы в массив изученных
                autoMovedCount++;
            }
        });

        // Сохраняем изменения в localStorage
        if (learnedPhraseIds.length > 0) {
            this.savePhrasesStatus(learnedPhraseIds);
        }
    }

    // Текст о перемещенных фразах
    const movedPhrasesText = autoMovedCount > 0
        ? `<p style="color: var(--correct-text); font-size: 16px; margin-bottom: 16px;">
            ${autoMovedCount} ${this.getDeclension(autoMovedCount, 'фраза', 'фразы', 'фраз')} ${this.getDeclension(autoMovedCount, 'перемещена', 'перемещены', 'перемещено')} в раздел "Изучено".
          </p>`
        : '';

    modal.innerHTML = `
        <div style="background: #1e1e2e; width: 95vw; max-width: 500px; border-radius: 12px; padding: 32px; text-align: center;">
            <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 16px;">Все режимы тренировки завершены!</h2>
            <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 16px;">
                Отличная работа! Вы успешно завершили все выбранные режимы тренировки.
            </p>
            <p style="color: #b6b9d0; font-size: 18px; margin-bottom: ${autoMovedCount > 0 ? '8px' : '32px'};">
                Общее количество правильных ответов: ${this.totalCorrectAnswers} из ${totalPossibleAnswers}
                (${Math.round(successRate * 100)}%)
            </p>
            ${movedPhrasesText}
            <button class="close-completion" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; transition: background-color 0.3s ease;">
            Закрыть
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Update phrase statistics
    const phraseStats = JSON.parse(localStorage.getItem('phraseStats') || '{}');

    this.selectedPhrases.forEach(phrase => {
        if (!phraseStats[phrase.text]) {
            phraseStats[phrase.text] = { successfulAttempts: 0, lastAttemptDate: null };
        }

        if (successRate >= 0.7) {
            const today = new Date().toDateString();
            if (phraseStats[phrase.text].lastAttemptDate !== today) {
                phraseStats[phrase.text].successfulAttempts++;
                phraseStats[phrase.text].lastAttemptDate = today;
            }
        }
    });

    localStorage.setItem('phraseStats', JSON.stringify(phraseStats));

    // Если фразы были перемещены, обновляем UI
    if (autoMovedCount > 0) {
        // Обновляем счётчики категорий и фильтры
        updateFilterCounts();
        updateCategoryCounts();

        // Перезагружаем данные из localStorage для обновления интерфейса
        let phrasesStatus = JSON.parse(localStorage.getItem('phrasesStatus') || '{}');

        // Проверяем и перестраиваем отображение карточек в соответствии с текущим фильтром
        const activeFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter') || 'studying';
        filterCardsByStatus(activeFilter);
    }

    window.dispatchEvent(new Event('storage'));

    modal.querySelector('.close-completion').addEventListener('click', () => {
        modal.remove();
        this.totalCorrectAnswers = 0;

        // Обновляем представление после закрытия модального окна
        const activeFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter') || 'studying';
        filterCardsByStatus(activeFilter);
    });
};

// Добавьте эти вспомогательные методы
PhraseTraining.prototype.getDeclension = function (number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
};

PhraseTraining.prototype.savePhrasesStatus = function (learnedPhraseIds) {
    // Получаем текущие данные из localStorage
    let phrasesStatus = JSON.parse(localStorage.getItem('phrasesStatus') || '{}');

    // Проверяем тип входных данных
    if (Array.isArray(learnedPhraseIds)) {
        // Обновляем статусы фраз
        learnedPhraseIds.forEach(id => {
            phrasesStatus[id] = 'learned';
            console.log(`Setting phrase ${id} to learned status`);
        });
    } else {
        // Для обратной совместимости
        phrasesStatus[learnedPhraseIds] = 'learned';
        console.log(`Setting single phrase ${learnedPhraseIds} to learned status`);
    }

    // Сохраняем обновленные данные
    localStorage.setItem('phrasesStatus', JSON.stringify(phrasesStatus));
    console.log('Updated phrasesStatus in localStorage:', phrasesStatus);
};

// Функция для отображения уведомлений
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        border-radius: 8px;
        z-index: 1001;
        background-color: ${type === 'success' ? 'rgba(56, 189, 142, 0.25)' :
            type === 'warning' ? 'rgba(244, 67, 54, 0.25)' :
                'rgba(100, 116, 139, 0.25)'};
        color: ${type === 'success' ? '#a7f3d0' :
            type === 'warning' ? '#fca5a5' :
                '#cbd5e1'};
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Делаем функцию доступной глобально
window.showNotification = showNotification;

// Делаем функцию доступной глобально
window.showNotification = showNotification;

// Функция для сохранения статусов фраз в localStorage
PhraseTraining.prototype.savePhrasesStatus = function (learnedPhraseIds) {
    // Получаем текущие данные из localStorage
    let phrasesStatus = JSON.parse(localStorage.getItem('phrasesStatus') || '{}');

    // Обновляем статусы фраз
    learnedPhraseIds.forEach(id => {
        phrasesStatus[id] = 'learned';
    });

    // Сохраняем обновленные данные
    localStorage.setItem('phrasesStatus', JSON.stringify(phrasesStatus));
};

/*--------------------------------------------------------------
#1  Match Pictures Training
--------------------------------------------------------------*/

PhraseTraining.prototype.createMatchPicturesModal = function () {
    console.log('Creating Match Pictures modal');

    // Получаем случайные фразы для этого упражнения (ограничено this.count)
    const phrasesToUse = this.getRandomPhrases(this.count);

    if (phrasesToUse.length === 0) {
        console.log('No phrases available');
        this.currentModeIndex++;
        this.startNextMode();
        return;
    }

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'match-pictures-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    // Начальная HTML-структура
    modal.innerHTML = `
        <div style="background: #1e1e2e; width: 90vw; max-width: 900px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
            <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
            
            <div style="margin-bottom: 32px; text-align: center;">
                <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">Match Pictures to Phrases</h2>
                <p style="color: #b6b9d0;">Select the image that best matches the phrase</p>
                <p style="color: #b6b9d0;">Выберите изображение, которое лучше всего соответствует фразе</p>
            </div>
            
            <div class="progress-indicator" style="width: 100%; margin-bottom: 24px;">
                <div class="progress-indicator-header" style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: var(--card-text-secondary); font-size: 14px;">Match Pictures to Phrases</span>
                    <span class="progress-indicator-label" style="color: var(--card-text-secondary); font-size: 14px;">1/${phrasesToUse.length}</span>
                </div>
                <div class="progress-indicator-bar" style="width: 100%; height: 4px; background: var(--card-bg-tertiary); border-radius: 2px; overflow: hidden;">
                    <div class="progress-indicator-fill" style="height: 100%; background: var(--accent-primary); border-radius: 2px; width: ${(1 / phrasesToUse.length) * 100}%;"></div>
                </div>
            </div>
            
            <div id="match-pictures-content">
                <!-- Контент будет динамически вставлен сюда -->
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Настройка кнопки закрытия
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        this.currentModeIndex++;
        this.startNextMode();
    });

    // Инициализация первого вопроса
    this.currentMatchPicturesIndex = 0;
    this.matchPicturesCorrectCount = 0;
    this.matchPicturesData = phrasesToUse;
    this.showNextMatchPicturesQuestion(modal);
};

PhraseTraining.prototype.showNextMatchPicturesQuestion = function (modal) {
    const contentArea = modal.querySelector('#match-pictures-content');
    if (!contentArea) {
        console.error('Content area not found in the modal');
        return;
    }

    // Обновляем индикатор прогресса
    const progressIndicator = modal.querySelector('.progress-indicator-label');
    if (progressIndicator) {
        progressIndicator.textContent = `${this.currentMatchPicturesIndex + 1}/${this.matchPicturesData.length}`;
    }

    // Полоса прогресса
    const progressFill = modal.querySelector('.progress-indicator-fill');
    if (progressFill) {
        progressFill.style.width = `${((this.currentMatchPicturesIndex + 1) / this.matchPicturesData.length) * 100}%`;
    }

    // Проверяем, прошли ли мы все фразы
    if (this.currentMatchPicturesIndex >= this.matchPicturesData.length) {
        console.log('Completed Match Pictures mode');
        this.totalCorrectAnswers += this.matchPicturesCorrectCount;

        // Показываем экран завершения для этого режима
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 32px;">
                <h2 style="color: #f8fafc; font-size: 28px; margin-bottom: 16px;">Training Complete!</h2>
                <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 24px;">
                    You correctly matched ${this.matchPicturesCorrectCount} out of ${this.matchPicturesData.length} phrases.
                </p>
                <button class="continue-training-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.continue-training-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        return;
    }

    try {
        // Получаем текущую фразу и готовим варианты
        const currentPhrase = this.matchPicturesData[this.currentMatchPicturesIndex];

        if (!currentPhrase) {
            console.error('Current phrase is undefined');
            return;
        }

        // Получаем 3 дополнительные случайные фразы для использования в качестве дистракторов
        const otherPhrases = this.matchPicturesData.filter(phrase => phrase.id !== currentPhrase.id);
        const distractors = this.shuffleArray(otherPhrases).slice(0, 3);

        // Комбинируем правильный ответ с дистракторами и перемешиваем
        const options = [currentPhrase, ...distractors].slice(0, 4);
        const shuffledOptions = this.shuffleArray(options);

        // Генерируем контент для текущего вопроса
        contentArea.innerHTML = `
            <div style="margin-bottom: 24px;">
                <div class="phrase-to-match" style="background: #292a3e; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                    <h3 style="color: #f8fafc; font-size: 20px; margin: 0 0 8px 0;">${currentPhrase.text}</h3>
                    <p style="color: #b6b9d0; margin: 0;">${currentPhrase.translation}</p>
                    <p style="color: #b6b9d0; font-style: italic; margin: 8px 0 0 0;">${currentPhrase.example}</p>
                </div>
                
                <div class="feedback-message" style="min-height: 40px; display: flex; align-items: center; justify-content: center;">
                    <p>Choose the image that best matches this phrase</p>
                </div>
            </div>
            
            <div class="image-options-grid" style="display: flex; justify-content: space-between; width: 100%; margin: 0 auto; gap: 12px;">
                ${shuffledOptions.map((option, index) => {
            return `
                        <div class="image-option" data-id="${option.id}" data-correct="${option.id === currentPhrase.id}" style="position: relative; overflow: hidden; border-radius: 8px; aspect-ratio: 1/1; cursor: pointer; border: 3px solid transparent; flex: 1;">
                            <img src="${option.imageUrl}" alt="${option.text}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    `;
        }).join('')}
            </div>
            
            <div style="display: flex; justify-content: center; margin-top: 32px;">
                <button class="next-question-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; font-size: 16px;">
                    Next Question
                </button>
            </div>
        `;

        // Добавляем обработчики событий для вариантов изображений
        const imageOptions = contentArea.querySelectorAll('.image-option');
        const feedbackMessage = contentArea.querySelector('.feedback-message');
        const nextButton = contentArea.querySelector('.next-question-btn');

        let selectedOption = null;

        imageOptions.forEach(option => {
            // Обработка выбора
            option.addEventListener('click', () => {
                // Если вариант уже выбран, игнорируем
                if (selectedOption !== null) return;

                selectedOption = option;
                const isCorrect = option.dataset.correct === 'true';

                // Стилизуем выбранный вариант
                option.classList.add('selected');

                if (isCorrect) {
                    option.style.borderColor = 'var(--correct-border)';
                    option.style.boxShadow = '0 0 0 3px var(--correct-bg)';
                    feedbackMessage.innerHTML = '<p style="color: var(--correct-text); font-weight: bold;">Correct! Well done!</p>';
                    this.matchPicturesCorrectCount++;
                } else {
                    option.style.borderColor = 'var(--danger-border)';
                    option.style.boxShadow = '0 0 0 3px var(--danger-bg)';

                    // Подсвечиваем правильный вариант
                    imageOptions.forEach(opt => {
                        if (opt.dataset.correct === 'true') {
                            opt.style.borderColor = 'var(--correct-border)';
                            opt.style.boxShadow = '0 0 0 3px var(--correct-bg)';
                        }
                    });

                    feedbackMessage.innerHTML = '<p style="color: var(--danger-text); font-weight: bold;">Incorrect. See the correct match highlighted.</p>';
                }

                // Показываем кнопку "Далее"
                nextButton.style.opacity = '1';
                nextButton.style.pointerEvents = 'auto';
            });
        });

        // Переходим к следующему вопросу при нажатии кнопки
        nextButton.addEventListener('click', () => {
            this.currentMatchPicturesIndex++;
            this.showNextMatchPicturesQuestion(modal);
        });

    } catch (error) {
        console.error('Error in showNextMatchPicturesQuestion:', error);
        contentArea.innerHTML = `
            <div style="color: #f87171; background: var(--danger-bg); padding: 20px; border-radius: 8px; text-align: center;">
                <p>An error occurred while preparing this question. Please try again.</p>
                <button class="retry-btn" style="background: #6366f1; color: #f8fafc; padding: 8px 24px; border-radius: 8px; border: none; cursor: pointer; margin-top: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.retry-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });
    }
};

PhraseTraining.prototype.getRandomPhrases = function (count) {
    // Если у нас есть выбранные фразы, используем их
    if (this.selectedPhrases.length > 0) {
        // Проверяем, содержат ли выбранные фразы imageUrl
        // Если нет, получаем эту информацию из DOM
        const phrasesWithImages = this.selectedPhrases.map(phrase => {
            if (phrase.imageUrl) return phrase;

            // Ищем элемент карточки по ID для получения URL изображения
            const cardElement = document.querySelector(`.phrase-card[data-id="${phrase.id}"]`);
            if (cardElement && cardElement.dataset.imageUrl) {
                return {
                    ...phrase,
                    imageUrl: cardElement.dataset.imageUrl
                };
            }

            // Если нет imageUrl в DOM, используем запасной вариант
            return {
                ...phrase,
                imageUrl: this.getDefaultImageUrl(phrase.text)
            };
        });

        // Перемешиваем и берем заданное количество
        return this.shuffleArray([...phrasesWithImages]).slice(0, count);
    }

    // Если фразы специально не выбраны, получаем их из DOM
    const phrasesElements = document.querySelectorAll('.phrase-card[data-status="studying"]');
    const phrasesArray = Array.from(phrasesElements);

    if (phrasesArray.length === 0) return [];

    // Перемешиваем и берем заданное количество
    const shuffled = this.shuffleArray(phrasesArray);
    const selected = shuffled.slice(0, count);

    return selected.map(phraseElement => {
        return {
            id: phraseElement.dataset.id,
            text: phraseElement.querySelector('h3').textContent,
            translation: phraseElement.querySelector('.phrase-translation').textContent,
            example: phraseElement.querySelector('.phrase-example')?.textContent || '',
            imageUrl: phraseElement.dataset.imageUrl || this.getDefaultImageUrl(phraseElement.querySelector('h3').textContent)
        };
    });
};

PhraseTraining.prototype.getDefaultImageUrl = function (phraseText) {
    // Создаем URL для запасного изображения на основе текста фразы
    // Здесь используем Unsplash для генерации картинки по ключевым словам из фразы
    const keywords = encodeURIComponent(phraseText.replace(/\s+/g, ','));
    return `https://source.unsplash.com/300x200/?${keywords}`;
};

PhraseTraining.prototype.shuffleArray = function (array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

PhraseTraining.prototype.showNextMatchPicturesQuestion = function (modal) {
    const contentArea = modal.querySelector('#match-pictures-content');

    // Обновляем индикатор прогресса
    const progressIndicator = modal.querySelector('.progress-indicator-label');
    if (progressIndicator) {
        progressIndicator.textContent = `${this.currentMatchPicturesIndex + 1} / ${this.matchPicturesData.length}`;
    }

    // Полоса прогресса
    const progressFill = modal.querySelector('.progress-indicator-fill');
    if (progressFill) {
        progressFill.style.width = `${((this.currentMatchPicturesIndex + 1) / this.matchPicturesData.length) * 100}%`;
    }

    // Проверяем, прошли ли мы все фразы
    if (this.currentMatchPicturesIndex >= this.matchPicturesData.length) {
        console.log('Completed Match Pictures mode');
        this.totalCorrectAnswers += this.matchPicturesCorrectCount;

        // Показываем экран завершения для этого режима
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 32px;">
                <h2 style="color: #f8fafc; font-size: 28px; margin-bottom: 16px;">Training Complete!</h2>
                <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 24px;">
                    You correctly matched ${this.matchPicturesCorrectCount} out of ${this.matchPicturesData.length} phrases.
                </p>
                <button class="continue-training-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.continue-training-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        return;
    }

    // Получаем текущую фразу и готовим варианты
    const currentPhrase = this.matchPicturesData[this.currentMatchPicturesIndex];

    // Получаем 3 дополнительные случайные фразы для использования в качестве дистракторов
    const otherPhrases = this.matchPicturesData.filter(phrase => phrase.id !== currentPhrase.id);
    const distractors = this.shuffleArray(otherPhrases).slice(0, 3);

    // Комбинируем правильный ответ с дистракторами и перемешиваем
    const options = [currentPhrase, ...distractors].slice(0, 4);
    const shuffledOptions = this.shuffleArray(options);

    // Генерируем контент для текущего вопроса
    contentArea.innerHTML = `
        <div style="margin-bottom: 24px;">
            <div class="phrase-to-match" style="background: #292a3e; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                <h3 style="color: #f8fafc; font-size: 20px; margin: 0 0 8px 0;">${currentPhrase.text}</h3>
                <p style="color: #b6b9d0; margin: 0;">${currentPhrase.translation}</p>
                <p style="color: #b6b9d0; font-style: italic; margin: 8px 0 0 0;">${currentPhrase.example}</p>
            </div>
            
            <div class="feedback-message" style="min-height: 40px; display: flex; align-items: center; justify-content: center;">
                <p>Choose the image that best matches this phrase</p>
            </div>
        </div>
        
        <div class="image-options-grid" style="display: flex; justify-content: space-between; width: 100%; margin: 0 auto; gap: 12px;">
            ${shuffledOptions.map((option, index) => {
        return `
                    <div class="image-option" data-id="${option.id}" data-correct="${option.id === currentPhrase.id}" style="position: relative; overflow: hidden; border-radius: 8px; aspect-ratio: 1/1; cursor: pointer; border: 3px solid transparent; flex: 1;">
                        <img src="${option.imageUrl}" alt="${option.text}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                `;
    }).join('')}
        </div>
        
        <div style="display: flex; justify-content: center; margin-top: 32px;">
            <button class="next-question-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; font-size: 16px;">
                Next Question
            </button>
        </div>
    `;

    // Добавляем обработчики событий для вариантов изображений
    const imageOptions = contentArea.querySelectorAll('.image-option');
    const feedbackMessage = contentArea.querySelector('.feedback-message');
    const nextButton = contentArea.querySelector('.next-question-btn');

    let selectedOption = null;

    imageOptions.forEach(option => {
        // Обработка выбора
        option.addEventListener('click', () => {
            // Если вариант уже выбран, игнорируем
            if (selectedOption !== null) return;

            selectedOption = option;
            const isCorrect = option.dataset.correct === 'true';

            // Стилизуем выбранный вариант
            option.classList.add('selected');

            if (isCorrect) {
                option.style.borderColor = 'var(--correct-border)';
                option.style.boxShadow = '0 0 0 3px var(--correct-bg)';
                feedbackMessage.innerHTML = '<p style="color: var(--correct-text); font-weight: bold;">Correct! Well done!</p>';
                this.matchPicturesCorrectCount++;
            } else {
                option.style.borderColor = 'var(--danger-border)';
                option.style.boxShadow = '0 0 0 3px var(--danger-bg)';

                // Подсвечиваем правильный вариант
                imageOptions.forEach(opt => {
                    if (opt.dataset.correct === 'true') {
                        opt.style.borderColor = 'var(--correct-border)';
                        opt.style.boxShadow = '0 0 0 3px var(--correct-bg)';
                    }
                });

                feedbackMessage.innerHTML = '<p style="color: var(--danger-text); font-weight: bold;">Incorrect. See the correct match highlighted.</p>';
            }

            // Показываем кнопку "Далее"
            nextButton.style.opacity = '1';
            nextButton.style.pointerEvents = 'auto';
        });
    });

    // Переходим к следующему вопросу при нажатии кнопки
    nextButton.addEventListener('click', () => {
        this.currentMatchPicturesIndex++;
        this.showNextMatchPicturesQuestion(modal);
    });
};

/*--------------------------------------------------------------
#2  Write the Correct Phrasal Verb Training
--------------------------------------------------------------*/

PhraseTraining.prototype.createWritePhrasalVerbModal = function () {
    console.log('Creating Write Phrasal Verb modal');

    // Получаем случайные фразы для этого упражнения (ограничено this.count)
    const phrasesToUse = this.getRandomPhrases(this.count);

    if (phrasesToUse.length === 0) {
        console.log('No phrases available');
        this.currentModeIndex++;
        this.startNextMode();
        return;
    }

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'write-phrasal-verb-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    // Начальная HTML-структура
    modal.innerHTML = `
        <div style="background: #1e1e2e; width: 90vw; max-width: 700px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
            <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
            
            <div style="margin-bottom: 32px; text-align: center;">
                <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">Write the Correct Phrasal Verb</h2>
                <p style="color: #b6b9d0;">Type the phrasal verb that matches the definition</p>
            </div>
            
            ${this.createProgressIndicator('writePhrasalVerb', 1, phrasesToUse.length)}
            
            <div id="write-phrasal-verb-content">
                <!-- Контент будет динамически вставлен сюда -->
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Настройка кнопки закрытия
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        this.currentModeIndex++;
        this.startNextMode();
    });

    // Инициализация первого вопроса
    this.currentWritePhrasalVerbIndex = 0;
    this.writePhrasalVerbCorrectCount = 0;
    this.writePhrasalVerbData = phrasesToUse;
    this.showNextWritePhrasalVerbQuestion(modal);
};

PhraseTraining.prototype.createWritePhrasalVerbModal = function () {
    console.log('Creating Write Phrasal Verb modal');

    // Получаем случайные фразы для этого упражнения (ограничено this.count)
    const phrasesToUse = this.getRandomPhrases(this.count);

    if (phrasesToUse.length === 0) {
        console.log('No phrases available');
        this.currentModeIndex++;
        this.startNextMode();
        return;
    }

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'write-phrasal-verb-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    // Начальная HTML-структура
    modal.innerHTML = `
        <div style="background: #1e1e2e; width: 90vw; max-width: 700px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
            <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
            
            <div style="margin-bottom: 32px; text-align: center;">
                <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">Write the Correct Phrasal Verb</h2>
                <p style="color: #b6b9d0;">Type the phrasal verb that matches the definition</p>
                <p style="color: #b6b9d0;">Введите фразовый глагол, соответствующий определению.</p>
            </div>
            
            <div class="progress-indicator" style="width: 100%; margin-bottom: 24px;">
                <div class="progress-indicator-header" style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: var(--card-text-secondary); font-size: 14px;">Write the Correct Phrasal Verb Next to Its Definition</span>
                    <span class="progress-indicator-label" style="color: var(--card-text-secondary); font-size: 14px;">1/${phrasesToUse.length}</span>
                </div>
                <div class="progress-indicator-bar" style="width: 100%; height: 4px; background: var(--card-bg-tertiary); border-radius: 2px; overflow: hidden;">
                    <div class="progress-indicator-fill" style="height: 100%; background: var(--accent-primary); border-radius: 2px; width: ${(1 / phrasesToUse.length) * 100}%;"></div>
                </div>
            </div>
            
            <div id="write-phrasal-verb-content">
                <!-- Контент будет динамически вставлен сюда -->
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Настройка кнопки закрытия
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        this.currentModeIndex++;
        this.startNextMode();
    });

    // Инициализация первого вопроса
    this.currentWritePhrasalVerbIndex = 0;
    this.writePhrasalVerbCorrectCount = 0;
    this.writePhrasalVerbData = phrasesToUse;
    this.showNextWritePhrasalVerbQuestion(modal);
};

PhraseTraining.prototype.showNextWritePhrasalVerbQuestion = function (modal) {
    const contentArea = modal.querySelector('#write-phrasal-verb-content');
    if (!contentArea) {
        console.error('Content area not found in the modal');
        return;
    }

    // Обновляем индикатор прогресса
    const progressIndicator = modal.querySelector('.progress-indicator-label');
    if (progressIndicator) {
        progressIndicator.textContent = `${this.currentWritePhrasalVerbIndex + 1}/${this.writePhrasalVerbData.length}`;
    }

    // Полоса прогресса
    const progressFill = modal.querySelector('.progress-indicator-fill');
    if (progressFill) {
        progressFill.style.width = `${((this.currentWritePhrasalVerbIndex + 1) / this.writePhrasalVerbData.length) * 100}%`;
    }

    // Проверяем, прошли ли мы все фразы
    if (this.currentWritePhrasalVerbIndex >= this.writePhrasalVerbData.length) {
        console.log('Completed Write Phrasal Verb mode');
        this.totalCorrectAnswers += this.writePhrasalVerbCorrectCount;

        // Показываем экран завершения для этого режима
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 32px;">
                <h2 style="color: #f8fafc; font-size: 28px; margin-bottom: 16px;">Training Complete!</h2>
                <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 24px;">
                    You correctly wrote ${this.writePhrasalVerbCorrectCount} out of ${this.writePhrasalVerbData.length} phrasal verbs.
                </p>
                <button class="continue-training-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.continue-training-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        return;
    }

    try {
        // Получаем текущую фразу
        const currentPhrase = this.writePhrasalVerbData[this.currentWritePhrasalVerbIndex];

        if (!currentPhrase) {
            console.error('Current phrase is undefined');
            return;
        }

        console.log('Current phrase:', currentPhrase);

        // Генерируем контент для текущего вопроса
        contentArea.innerHTML = `
            <div style="margin-bottom: 32px; background: #292a3e; border-radius: 8px; padding: 20px;">
                <h3 style="color: #f8fafc; font-size: 20px; margin: 0 0 16px 0;">Definition:</h3>
                <p style="color: #b6b9d0; font-size: 18px; margin: 0;">${currentPhrase.translation}</p>
            </div>
            
            <div class="answer-area" style="margin-bottom: 32px;">
                <label for="phrasal-verb-answer" style="display: block; color: #f8fafc; margin-bottom: 8px; font-size: 16px;">Enter the phrasal verb:</label>
                <div style="display: flex; gap: 16px;">
                    <input type="text" id="phrasal-verb-answer" style="flex: 1; padding: 12px 16px; background: #353748; border: 1px solid #4a4d6b; border-radius: 8px; color: #f8fafc; font-size: 16px;" placeholder="Type the phrasal verb here...">
                    <button class="check-answer-btn" style="background: #6366f1; color: #f8fafc; padding: 0 24px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;">
                        Check
                    </button>
                </div>
            </div>
            
            <div class="feedback-area" style="margin-bottom: 32px; min-height: 60px; display: none; background: #292a3e; border-radius: 8px; padding: 20px;">
                <div class="feedback-message" style="text-align: center;">
                    <!-- Feedback will appear here -->
                </div>
            </div>
            
            <div class="example-container" style="margin-top: 24px; display: none; text-align: center;">
                <!-- Example will appear here -->
            </div>
            
            <div style="display: flex; justify-content: center; margin-top: 32px;">
                <button class="next-question-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; font-size: 16px;">
                    Next Question
                </button>
            </div>
        `;

        // Добавляем обработчики событий для ввода и кнопок
        const answerInput = contentArea.querySelector('#phrasal-verb-answer');
        const checkButton = contentArea.querySelector('.check-answer-btn');
        const feedbackArea = contentArea.querySelector('.feedback-area');
        const feedbackMessage = contentArea.querySelector('.feedback-message');
        const exampleContainer = contentArea.querySelector('.example-container');
        const nextButton = contentArea.querySelector('.next-question-btn');

        // Автофокус на поле ввода
        setTimeout(() => {
            if (answerInput) {
                answerInput.focus();
            }
        }, 100);

        // Обработка нажатия Enter в поле ввода
        if (answerInput) {
            answerInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && checkButton) {
                    checkButton.click();
                }
            });
        }

        // Обработка проверки ответа
        if (checkButton) {
            checkButton.addEventListener('click', () => {
                // Блокируем дальнейшие попытки
                if (answerInput) answerInput.disabled = true;
                checkButton.disabled = true;

                const userAnswer = answerInput ? answerInput.value.trim() : '';
                const correctAnswer = currentPhrase.text;

                // Проверяем ответ
                const isCorrect = this.checkAnswer(userAnswer.toLowerCase(), correctAnswer.toLowerCase());

                // Показываем область обратной связи
                if (feedbackArea) feedbackArea.style.display = 'block';

                if (isCorrect) {
                    if (feedbackMessage) {
                        feedbackMessage.innerHTML = `
                            <p style="color: var(--correct-text); font-weight: bold; font-size: 18px;">Correct! Well done!</p>
                            <p style="color: #f8fafc; margin-top: 8px;">${correctAnswer}</p>
                        `;
                    }
                    if (feedbackArea) {
                        feedbackArea.style.border = '2px solid var(--correct-border)';
                        feedbackArea.style.backgroundColor = 'var(--correct-bg)';
                    }
                    this.writePhrasalVerbCorrectCount++;
                } else {
                    if (feedbackMessage) {
                        feedbackMessage.innerHTML = `
                            <p style="color: var(--danger-text); font-weight: bold; font-size: 18px;">Not quite right.</p>
                            <p style="color: #f8fafc; margin-top: 8px;">The correct answer is: ${correctAnswer}</p>
                        `;
                    }
                    if (feedbackArea) {
                        feedbackArea.style.border = '2px solid var(--danger-border)';
                        feedbackArea.style.backgroundColor = 'var(--danger-bg)';
                    }
                }

                // Показываем пример с правильным фразовым глаголом (только один раз)
                if (currentPhrase.example && exampleContainer) {
                    // Создаем пример с контекстом
                    const exampleWithHighlight = currentPhrase.example.replace(
                        new RegExp(correctAnswer, 'gi'),
                        match => `<span style="color: var(--correct-text); font-weight: bold;">${match}</span>`
                    );

                    exampleContainer.innerHTML = `
                        <p style="color: #b6b9d0; margin-top: 16px; font-size: 16px;">Example:</p>
                        <div style="background: #353748; padding: 16px; border-radius: 8px; margin-top: 8px; display: inline-block;">
                            <p style="color: #f8fafc; margin: 0;">${exampleWithHighlight}</p>
                        </div>
                    `;
                    exampleContainer.style.display = 'block';
                }

                // Показываем кнопку "Далее"
                if (nextButton) {
                    nextButton.style.opacity = '1';
                    nextButton.style.pointerEvents = 'auto';
                }
            });
        }

        // Переходим к следующему вопросу при нажатии кнопки
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                this.currentWritePhrasalVerbIndex++;
                this.showNextWritePhrasalVerbQuestion(modal);
            });
        }
    } catch (error) {
        console.error('Error in showNextWritePhrasalVerbQuestion:', error);
        contentArea.innerHTML = `
            <div style="color: #f87171; background: var(--danger-bg); padding: 20px; border-radius: 8px; text-align: center;">
                <p>An error occurred while preparing this question. Please try again.</p>
                <button class="retry-btn" style="background: #6366f1; color: #f8fafc; padding: 8px 24px; border-radius: 8px; border: none; cursor: pointer; margin-top: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.retry-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });
    }
};

// Функция для проверки ответа с учетом возможных вариаций
PhraseTraining.prototype.checkAnswer = function (userAnswer, correctAnswer) {
    // Базовая проверка на точное соответствие (без учета регистра)
    if (userAnswer === correctAnswer) {
        return true;
    }

    // Проверка с игнорированием пробелов и дефисов
    const normalizedUserAnswer = userAnswer.replace(/[-\s]/g, '');
    const normalizedCorrectAnswer = correctAnswer.replace(/[-\s]/g, '');

    if (normalizedUserAnswer === normalizedCorrectAnswer) {
        return true;
    }

    // Проверка на опечатки (допускаем одну ошибку)
    if (this.levenshteinDistance(userAnswer, correctAnswer) <= 1) {
        return true;
    }

    return false;
};

// Функция для вычисления расстояния Левенштейна (для проверки опечаток)
PhraseTraining.prototype.levenshteinDistance = function (a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // Инициализируем матрицу
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Заполняем матрицу
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // замена
                    Math.min(
                        matrix[i][j - 1] + 1, // вставка
                        matrix[i - 1][j] + 1  // удаление
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
};

/*--------------------------------------------------------------
#3  Fill in the Gaps Training 
--------------------------------------------------------------*/

/*--------------------------------------------------------------
#3  Fill in the Gaps Training 
--------------------------------------------------------------*/

PhraseTraining.prototype.createFillGapsModal = function () {
    console.log('Creating Fill Gaps modal');

    // Get random phrases for this exercise (limited by this.count)
    const phrasesToUse = this.getRandomPhrases(this.count);

    if (phrasesToUse.length === 0) {
        console.log('No phrases available');
        this.currentModeIndex++;
        this.startNextMode();
        return;
    }

    console.log(`Selected ${phrasesToUse.length} phrases for Fill Gaps exercise`);

    // Create modal window
    const modal = document.createElement('div');
    modal.className = 'fill-gaps-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    // CRITICAL: Prepare data by getting extra examples from the DOM
    const preparedData = [];

    // Loop through each selected phrase
    phrasesToUse.forEach(phrase => {
        // Find the card element for this phrase to extract data-extra-examples
        const phraseCard = document.querySelector(`.phrase-card[data-id="${phrase.id}"]`);

        if (phraseCard) {
            // Get the extra examples attribute
            const extraExamples = phraseCard.getAttribute('data-extra-examples');

            if (extraExamples && extraExamples.trim() !== '') {
                // Store both the phrase data and its examples
                preparedData.push({
                    ...phrase,
                    extraExamples: extraExamples
                });
                console.log(`Added phrase ID ${phrase.id}: "${phrase.text}" with examples`);
            } else {
                console.warn(`Phrase ID ${phrase.id}: "${phrase.text}" has no data-extra-examples`);
            }
        } else {
            console.warn(`Cannot find card element for phrase ID ${phrase.id}: "${phrase.text}"`);
        }
    });

    // If no valid phrases with examples, show error and exit
    if (preparedData.length === 0) {
        console.error('No phrases with data-extra-examples. Exiting training mode.');
        modal.innerHTML = `
            <div style="background: #1e1e2e; width: 90vw; max-width: 700px; border-radius: 12px; padding: 24px; position: relative; text-align: center;">
                <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                
                <div style="margin: 32px 0;">
                    <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 16px;">No Valid Examples Found</h2>
                    <p style="color: #b6b9d0; margin-bottom: 24px;">
                        This training mode requires examples in data-extra-examples attributes. 
                        No phrases with examples were found.
                    </p>
                    <button class="continue-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;">
                        Continue
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Setup buttons
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        modal.querySelector('.continue-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        return;
    }

    // Initial HTML structure
    modal.innerHTML = `
        <div style="background: #1e1e2e; width: 90vw; max-width: 700px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
            <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
            
            <div style="margin-bottom: 32px; text-align: center;">
                <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">Fill in the Gaps</h2>
                <p style="color: #b6b9d0;">Choose the correct phrasal verb to complete each sentence</p>
                <p style="color: #b6b9d0;">Выберите правильный фразовый глагол, чтобы закончить каждое предложение.</p>
            </div>
            
            <div style="margin-bottom: 24px; width: 100%;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #b6b9d0; font-size: 14px;">Fill in the Gaps with the Correct Phrasal Verb</span>
                    <span style="color: #b6b9d0; font-size: 14px;" class="progress-indicator-label">1/${preparedData.length}</span>
                </div>
                <div style="width: 100%; height: 4px; background: #292a3e; border-radius: 2px; overflow: hidden;">
                    <div class="progress-indicator-fill" style="width: ${(1 / preparedData.length) * 100}%; height: 100%; background: #6366f1; border-radius: 2px;"></div>
                </div>
            </div>
            
            <div id="fill-gaps-content">
                <!-- Content will be dynamically inserted here -->
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Setup close button
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        this.currentModeIndex++;
        this.startNextMode();
    });

    // Initialize first question
    this.currentFillGapsIndex = 0;
    this.fillGapsCorrectCount = 0;
    this.fillGapsData = preparedData;

    // Prepare all available phrasal verbs from the page for answer options
    this.allPhrasalVerbs = this.getAllPhrasalVerbs();

    this.showNextFillGapsQuestion(modal);
};

// Get all phrasal verbs from the page (without parentheses)
PhraseTraining.prototype.getAllPhrasalVerbs = function () {
    const verbs = [];

    // Get all phrasal verb titles
    const phraseTitles = document.querySelectorAll('.phrase-card h3');
    phraseTitles.forEach(title => {
        const verbText = title.textContent.trim();
        if (verbText) {
            // Clean up by removing any parentheses
            const cleanVerb = verbText.replace(/\([^)]*\)/g, '').trim();

            if (!verbs.includes(cleanVerb)) {
                verbs.push(cleanVerb);
            }
        }
    });

    console.log(`Found ${verbs.length} phrasal verbs from cards`);
    return verbs;
};

// Function to only use examples from data-extra-examples
PhraseTraining.prototype.processExampleWithGap = function (phrase) {
    // Verify we have examples
    if (!phrase.extraExamples || phrase.extraExamples.trim() === '') {
        console.error(`No examples available for phrase: ${phrase.text}`);
        return null;
    }

    // Parse examples from the attribute
    const examples = phrase.extraExamples.split('|').filter(ex => ex && ex.trim() !== '');
    if (examples.length === 0) {
        console.error(`No valid examples in extraExamples for phrase: ${phrase.text}`);
        return null;
    }

    // Try each example from data-extra-examples until we find one that works
    for (const example of examples) {
        const trimmedExample = example.trim();
        const result = this.findAndCreateGap(trimmedExample, phrase.text);
        if (result) {
            console.log(`Successfully created gap using example: "${trimmedExample}"`);
            return result;
        }
    }

    // If no example worked, use the first one as a fallback
    console.warn(`Could not find phrasal verb in any examples for "${phrase.text}". Using fallback.`);
    return this.findAndCreateGap(examples[0].trim(), phrase.text);
};

// This is the critical function for finding and replacing phrasal verbs
PhraseTraining.prototype.findAndCreateGap = function (sentence, phraseText) {
    console.log(`Finding "${phraseText}" in "${sentence}"`);

    // Clean up the phrasal verb text - remove any parentheses for matching
    const cleanPhrasalVerb = phraseText.replace(/\([^)]*\)/g, '').trim();

    // Create the gap placeholder element
    const gapPlaceholder = '<span class="gap-placeholder" style="background-color: var(--card-bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--body-1); font-weight: bold;">_____</span>';

    // First, let's look for exact matches to detect when the phrasal verb is already in the sentence
    const sentenceLower = sentence.toLowerCase();
    const cleanVerbLower = cleanPhrasalVerb.toLowerCase();

    // Break the phrasal verb into parts for flexible matching
    const parts = cleanVerbLower.split(' ');
    const baseVerb = parts[0]; // First word (the verb)
    const restParts = parts.slice(1).join(' '); // Rest of the phrasal verb

    // === STEP 1: Look for forms like "flooded in" when phrasal verb is "flood in" ===
    // Common verb form variations
    const verbStems = [];

    // Handle irregular verbs like "come" -> "came"
    // Just check if verb ends with 'e'
    if (baseVerb.endsWith('e')) {
        verbStems.push(baseVerb.slice(0, -1)); // "come" -> "com" for matching "coming"
    }

    // Add the regular base
    verbStems.push(baseVerb);

    // Try each possible verb stem
    for (const stem of verbStems) {
        // Common verb endings
        const endings = ['', 's', 'ed', 'ing', 'd'];

        for (const ending of endings) {
            const verbForm = stem + ending;

            // Create regex pattern to find this verb form followed by rest of phrasal verb
            const pattern = new RegExp(`\\b${verbForm}\\s+${restParts.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
            const match = sentence.match(pattern);

            if (match) {
                // Found a verb variant!
                const matchStart = match.index;
                const matchedText = match[0];
                const matchEnd = matchStart + matchedText.length;

                const before = sentence.substring(0, matchStart);
                const after = sentence.substring(matchEnd);

                console.log(`Found verb variant match: "${matchedText}"`);

                // Create gap with the EXACT form found in the original sentence
                return {
                    originalSentence: sentence,
                    processedSentence: before + gapPlaceholder + after,
                    gapPosition: {
                        before: before,
                        matchedText: matchedText, // This is crucial - use the exact form found
                        after: after
                    }
                };
            }
        }
    }

    // === STEP 2: Try simple exact matches ===
    const exactMatchIndex = sentenceLower.indexOf(cleanVerbLower);
    if (exactMatchIndex >= 0) {
        const before = sentence.substring(0, exactMatchIndex);
        const matchedText = sentence.substring(exactMatchIndex, exactMatchIndex + cleanPhrasalVerb.length);
        const after = sentence.substring(exactMatchIndex + cleanPhrasalVerb.length);

        console.log(`Found exact match: "${matchedText}"`);

        return {
            originalSentence: sentence,
            processedSentence: before + gapPlaceholder + after,
            gapPosition: {
                before: before,
                matchedText: matchedText, // Preserve case from original sentence
                after: after
            }
        };
    }

    // === STEP 3: Try to match verb and particles separately (separated phrasal verbs) ===
    // This handles cases like "turn the light on" where parts are separated
    if (parts.length > 1) {
        // For each possible verb form
        for (const stem of verbStems) {
            const endings = ['', 's', 'ed', 'ing', 'd'];

            for (const ending of endings) {
                const verbForm = stem + ending;

                // Look for the verb part
                const verbPattern = new RegExp(`\\b${verbForm}\\b`, 'i');
                const verbMatch = sentence.match(verbPattern);

                if (verbMatch) {
                    // Now look for the rest of the phrasal verb after this position
                    const verbMatchEnd = verbMatch.index + verbMatch[0].length;
                    const afterVerb = sentence.substring(verbMatchEnd);

                    // Look for the particle part (might be separated by other words)
                    const particlePattern = new RegExp(`\\b${restParts.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
                    const particleMatch = afterVerb.match(particlePattern);

                    if (particleMatch) {
                        const particleMatchStart = verbMatchEnd + particleMatch.index;

                        // Take the whole range including words in between
                        const before = sentence.substring(0, verbMatch.index);
                        const matchedText = sentence.substring(verbMatch.index, particleMatchStart + particleMatch[0].length);
                        const after = sentence.substring(particleMatchStart + particleMatch[0].length);

                        console.log(`Found separated phrasal verb: "${matchedText}"`);

                        return {
                            originalSentence: sentence,
                            processedSentence: before + gapPlaceholder + after,
                            gapPosition: {
                                before: before,
                                matchedText: matchedText, // This is the full text including separating words
                                after: after
                            }
                        };
                    }
                }
            }
        }
    }

    // === STEP 4: FALLBACK - use a reasonable position in the sentence ===
    console.warn(`Could not find any form of "${cleanPhrasalVerb}" in sentence. Using fallback method.`);

    // Find a good position to insert (avoiding first and last word)
    const words = sentence.split(' ');
    let insertPos = Math.floor(words.length / 3);
    insertPos = Math.max(1, Math.min(insertPos, words.length - 2));

    const before = words.slice(0, insertPos).join(' ');
    const after = ' ' + words.slice(insertPos).join(' ');

    // Determine appropriate form based on context
    let contextForm = cleanPhrasalVerb;

    if (insertPos > 0) {
        const prevWord = words[insertPos - 1].toLowerCase();

        // Adjust form based on preceding word
        if (['am', 'is', 'was', 'are', 'were', 'be', 'been', 'being'].includes(prevWord)) {
            // After forms of "to be", use -ing form
            const verbParts = cleanPhrasalVerb.split(' ');
            verbParts[0] = verbParts[0] + 'ing';
            contextForm = verbParts.join(' ');
        } else if (['has', 'have', 'had'].includes(prevWord)) {
            // After forms of "to have", use past participle
            const verbParts = cleanPhrasalVerb.split(' ');
            verbParts[0] = verbParts[0] + 'ed';
            contextForm = verbParts.join(' ');
        }
    }

    console.log(`Created fallback gap using contextual form: "${contextForm}"`);

    return {
        originalSentence: sentence,
        processedSentence: before + gapPlaceholder + after,
        gapPosition: {
            before: before,
            matchedText: contextForm, // Use form appropriate to context
            after: after
        }
    };
};

// Fixed function for filling in the gap with an answer
PhraseTraining.prototype.fillGapWithAnswer = function (sentenceWithGap, answer, isCorrect, correctAnswer) {
    const gapPlaceholder = '<span class="gap-placeholder" style="background-color: var(--card-bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--body-1); font-weight: bold;">_____</span>';

    // Clean up answer text - remove any parentheses
    const cleanAnswer = answer.replace(/\([^)]*\)/g, '').trim();

    // Clean up correct answer - ensure it has no parentheses
    const cleanCorrectAnswer = correctAnswer.replace(/\([^)]*\)/g, '').trim();

    let replacement;
    if (isCorrect) {
        // For correct answer, show the clean version
        replacement = `<span style="color: var(--correct-text); font-weight: bold;">${cleanCorrectAnswer}</span>`;
    } else {
        // For incorrect answer, show both wrong and right
        replacement = `<span style="color: var(--danger-text); font-weight: bold; text-decoration: line-through;">${cleanAnswer}</span> <span style="color: var(--correct-text); font-weight: bold;">${cleanCorrectAnswer}</span>`;
    }

    return sentenceWithGap.replace(gapPlaceholder, replacement);
};

// Improved function to generate options
PhraseTraining.prototype.generatePhrasalVerbOptions = function (currentPhrase) {
    // Clean the phrasal verb text - no parentheses, proper capitalization
    const cleanPhrasalVerb = currentPhrase.text.replace(/\([^)]*\)/g, '').trim();

    // Correct option always shows cleaned-up version
    const correctOption = {
        text: cleanPhrasalVerb, // Clean display form with no parentheses
        isCorrect: true
    };

    // Filter the list of all phrasal verbs to exclude the correct one
    const filteredVerbs = this.allPhrasalVerbs.filter(verb =>
        verb.toLowerCase().replace(/\([^)]*\)/g, '').trim() !==
        cleanPhrasalVerb.toLowerCase()
    );

    // Clean up distractors (remove parentheses)
    const distractors = this.shuffleArray(filteredVerbs).slice(0, 2).map(verb => ({
        text: verb.replace(/\([^)]*\)/g, '').trim(),
        isCorrect: false
    }));

    // Return all 3 options
    return [correctOption, ...distractors];
};

// Main function for showing each question
PhraseTraining.prototype.showNextFillGapsQuestion = function (modal) {
    const contentArea = modal.querySelector('#fill-gaps-content');

    // Update progress indicators
    const progressIndicator = modal.querySelector('.progress-indicator-fill');
    if (progressIndicator) {
        progressIndicator.style.width = `${((this.currentFillGapsIndex + 1) / this.fillGapsData.length) * 100}%`;
    }

    const progressCounter = modal.querySelector('.progress-indicator-label');
    if (progressCounter) {
        progressCounter.textContent = `${this.currentFillGapsIndex + 1}/${this.fillGapsData.length}`;
    }

    // Check if we've completed all phrases
    if (this.currentFillGapsIndex >= this.fillGapsData.length) {
        console.log('Completed Fill Gaps mode');
        this.totalCorrectAnswers += this.fillGapsCorrectCount;

        // Show completion screen
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 32px;">
                <h2 style="color: #f8fafc; font-size: 28px; margin-bottom: 16px;">Training Complete!</h2>
                <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 24px;">
                    You correctly filled ${this.fillGapsCorrectCount} out of ${this.fillGapsData.length} gaps.
                </p>
                <button class="continue-training-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.continue-training-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        return;
    }

    try {
        // Get current phrase
        const currentPhrase = this.fillGapsData[this.currentFillGapsIndex];

        // Process the example and get an example with a gap
        const exampleSentence = this.processExampleWithGap(currentPhrase);

        // If processing failed, skip to next phrase
        if (!exampleSentence || !exampleSentence.processedSentence) {
            console.warn(`Failed to create gap for phrase: ${currentPhrase.text}, skipping to next`);
            this.currentFillGapsIndex++;
            this.showNextFillGapsQuestion(modal);
            return;
        }

        // Get the actual form of the phrasal verb as used in the sentence
        // This is CRUCIAL - it contains the exact form from the original
        const actualForm = exampleSentence.gapPosition.matchedText;
        console.log(`Found actual form: "${actualForm}" for phrasal verb "${currentPhrase.text}"`);

        // Create options for this question (without parentheses)
        const options = this.generatePhrasalVerbOptions(currentPhrase);
        const shuffledOptions = this.shuffleArray(options);

        // Generate content for the current question
        contentArea.innerHTML = `
            <div style="margin-bottom: 32px;">
                <div class="sentence-container" style="background: #292a3e; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <p style="color: #f8fafc; font-size: 18px; line-height: 1.6; margin: 0;" id="gapped-sentence">${exampleSentence.processedSentence}</p>
                </div>
                
                <div class="options-container" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
                    ${shuffledOptions.map((option, index) => `
                        <button class="option-btn" data-text="${option.text}" data-correct="${option.isCorrect}" style="background: #353748; border: 1px solid #4a4d6b; color: #f8fafc; padding: 12px 16px; border-radius: 8px; text-align: left; cursor: pointer; font-size: 16px; transition: all 0.3s;">
                            ${option.text}
                        </button>
                    `).join('')}
                </div>
                
                <div class="feedback-message" style="min-height: 60px; margin-bottom: 24px; padding: 16px; border-radius: 8px; display: none;">
                    <!-- Feedback will appear here -->
                </div>
            </div>
            
            <div style="display: flex; justify-content: center;">
                <button class="next-question-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; font-size: 16px;">
                    Next Question
                </button>
            </div>
        `;

        // Store data about the current question for later use
        contentArea.dataset.correctText = actualForm;
        contentArea.dataset.originalSentence = exampleSentence.originalSentence;
        contentArea.dataset.gapPosition = JSON.stringify(exampleSentence.gapPosition);

        // Add event listeners for option buttons
        const optionButtons = contentArea.querySelectorAll('.option-btn');
        const feedbackMessage = contentArea.querySelector('.feedback-message');
        const gappedSentence = contentArea.querySelector('#gapped-sentence');
        const nextButton = contentArea.querySelector('.next-question-btn');

        // Set up event handlers for option buttons
        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Skip if feedback already shown
                if (feedbackMessage.style.display === 'block') return;

                const selectedText = button.dataset.text;
                const isCorrect = button.dataset.correct === 'true';

                // CRUCIAL: Using the actual form found in the sentence (no parentheses)
                const correctText = actualForm;

                // Fill the gap with the selected answer
                let filledSentence;

                if (isCorrect) {
                    // For correct answer, use the actual form found in the sentence
                    filledSentence = this.fillGapWithAnswer(
                        exampleSentence.processedSentence,
                        selectedText,
                        true,
                        correctText
                    );
                } else {
                    // For incorrect answer, show both wrong and right
                    filledSentence = this.fillGapWithAnswer(
                        exampleSentence.processedSentence,
                        selectedText,
                        false,
                        correctText
                    );
                }

                gappedSentence.innerHTML = filledSentence;

                // Show feedback
                feedbackMessage.style.display = 'block';

                if (isCorrect) {
                    feedbackMessage.innerHTML = `<p style="color: var(--correct-text); font-weight: bold; margin: 0;">Correct! Well done!</p>`;
                    feedbackMessage.style.backgroundColor = 'var(--correct-bg)';
                    feedbackMessage.style.border = '1px solid var(--correct-border)';
                    button.style.backgroundColor = 'var(--correct-bg)';
                    button.style.borderColor = 'var(--correct-border)';
                    this.fillGapsCorrectCount++;
                } else {
                    // Clean up the display of the correct phrasal verb (no parentheses)
                    const cleanCorrectPhrasalVerb = currentPhrase.text.replace(/\([^)]*\)/g, '').trim();

                    feedbackMessage.innerHTML = `
                        <p style="color: var(--danger-text); font-weight: bold; margin: 0 0 8px 0;">Incorrect.</p>
                        <p style="color: var(--body-1); margin: 0;">The correct phrasal verb is: <span style="color: var(--correct-text); font-weight: bold;">${cleanCorrectPhrasalVerb}</span></p>
                    `;
                    feedbackMessage.style.backgroundColor = 'var(--danger-bg)';
                    feedbackMessage.style.border = '1px solid var(--danger-border)';
                    button.style.backgroundColor = 'var(--danger-bg)';
                    button.style.borderColor = 'var(--danger-border)';

                    // Highlight the correct option
                    optionButtons.forEach(btn => {
                        if (btn.dataset.correct === 'true') {
                            btn.style.backgroundColor = 'var(--correct-bg)';
                            btn.style.borderColor = 'var(--correct-border)';
                        }
                    });
                }

                // Show the "Next" button
                nextButton.style.opacity = '1';
                nextButton.style.pointerEvents = 'auto';
            });
        });

        // Go to next question when "Next" button is clicked
        nextButton.addEventListener('click', () => {
            this.currentFillGapsIndex++;
            this.showNextFillGapsQuestion(modal);
        });

    } catch (error) {
        console.error('Error in showNextFillGapsQuestion:', error);
        contentArea.innerHTML = `
            <div style="color: #f87171; background: var(--danger-bg); padding: 20px; border-radius: 8px; text-align: center;">
                <p>An error occurred while preparing this question. Please try again.</p>
                <button class="retry-btn" style="background: #6366f1; color: #f8fafc; padding: 8px 24px; border-radius: 8px; border: none; cursor: pointer; margin-top: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.retry-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });
    }
};

/*--------------------------------------------------------------
#4  Read the Statement and Choose the Correct Meaning
--------------------------------------------------------------*/

// Создаёт модальное окно для режима "Выбрать правильное значение"
PhraseTraining.prototype.createChooseCorrectMeaningModal = function () {
    console.log('Creating Choose Correct Meaning modal');

    // Получаем фразы для упражнения
    const phrasesToUse = this.selectedPhrases.slice(0, this.count);

    if (phrasesToUse.length === 0) {
        console.log('No phrases available');
        this.currentModeIndex++;
        this.startNextMode();
        return;
    }

    // Создаём модальное окно
    const modal = document.createElement('div');
    modal.className = 'choose-correct-meaning-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    // Начальная HTML-структура
    modal.innerHTML = `
        <div style="background: #1e1e2e; width: 90vw; max-width: 800px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
            <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
            
            <div style="margin-bottom: 32px; text-align: center;">
                <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">Choose the Correct Meaning</h2>
                <p style="color: #b6b9d0;">Read the statement and select the meaning of the highlighted phrasal verb</p>
                <p style="color: #b6b9d0;">Прочитайте утверждение и выберите значение выделенного фразового глагола.</p>
            </div>
            
            <div class="progress-indicator" style="width: 100%; margin-bottom: 24px;">
                <div class="progress-indicator-header" style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: var(--card-text-secondary); font-size: 14px;">Read the Statement and Choose the Correct Meaning</span>
                    <span class="progress-indicator-label" style="color: var(--card-text-secondary); font-size: 14px;">1/${phrasesToUse.length}</span>
                </div>
                <div class="progress-indicator-bar" style="width: 100%; height: 4px; background: var(--card-bg-tertiary); border-radius: 2px; overflow: hidden;">
                    <div class="progress-indicator-fill" style="height: 100%; background: var(--accent-primary); border-radius: 2px; width: ${(1 / phrasesToUse.length) * 100}%;"></div>
                </div>
            </div>
            
            <div id="choose-meaning-content">
                <!-- Content will be dynamically inserted here -->
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Настройка кнопки закрытия
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        this.currentModeIndex++;
        this.startNextMode();
    });

    // Инициализация первого вопроса
    this.currentChooseMeaningIndex = 0;
    this.chooseMeaningCorrectCount = 0;
    this.chooseMeaningData = phrasesToUse;

    // Получаем переводы для вариантов ответов
    this.allPhrasalVerbMeanings = this.getAllPhrasalVerbMeanings();

    this.showNextChooseMeaningQuestion(modal);
};

// Получает все переводы фразовых глаголов для вариантов ответов
PhraseTraining.prototype.getAllPhrasalVerbMeanings = function () {
    const meanings = [];

    // Получаем все переводы из карточек фразовых глаголов
    const phraseTranslations = document.querySelectorAll('.phrase-card .phrase-translation');
    phraseTranslations.forEach(translation => {
        const meaningText = translation.textContent.trim();
        if (meaningText && !meanings.includes(meaningText)) {
            meanings.push(meaningText);
        }
    });

    return meanings;
};

// Показывает следующий вопрос в режиме выбора правильного значения
PhraseTraining.prototype.showNextChooseMeaningQuestion = function (modal) {
    const contentArea = modal.querySelector('#choose-meaning-content');

    // Обновляем индикатор прогресса
    const progressIndicator = modal.querySelector('.progress-indicator-label');
    if (progressIndicator) {
        progressIndicator.textContent = `${this.currentChooseMeaningIndex + 1}/${this.chooseMeaningData.length}`;
    }

    // Обновляем полосу прогресса
    const progressFill = modal.querySelector('.progress-indicator-fill');
    if (progressFill) {
        progressFill.style.width = `${((this.currentChooseMeaningIndex + 1) / this.chooseMeaningData.length) * 100}%`;
    }

    // Проверяем, завершили ли мы все фразы
    if (this.currentChooseMeaningIndex >= this.chooseMeaningData.length) {
        console.log('Completed Choose Correct Meaning mode');
        this.totalCorrectAnswers += this.chooseMeaningCorrectCount;

        // Показываем экран завершения для этого режима
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 32px;">
                <h2 style="color: #f8fafc; font-size: 28px; margin-bottom: 16px;">Training Complete!</h2>
                <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 24px;">
                    You correctly identified ${this.chooseMeaningCorrectCount} out of ${this.chooseMeaningData.length} meanings.
                </p>
                <button class="continue-training-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.continue-training-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        return;
    }

    try {
        // Получаем текущую фразу
        const currentPhrase = this.chooseMeaningData[this.currentChooseMeaningIndex];

        if (!currentPhrase) {
            console.error('Current phrase is undefined');
            return;
        }

        // Получаем data-extra-examples из DOM, если их нет в объекте фразы
        if (!currentPhrase.extraExamples) {
            const phraseCard = document.querySelector(`.phrase-card[data-id="${currentPhrase.id}"]`);
            if (phraseCard) {
                currentPhrase.extraExamples = phraseCard.getAttribute('data-extra-examples') || '';
            }
        }

        // Создаем пример с выделенным фразовым глаголом
        const exampleWithHighlight = this.createHighlightedExample(currentPhrase);

        // Генерируем варианты ответов
        const options = this.generateMeaningOptions(currentPhrase);

        // Генерируем контент для текущего вопроса
        contentArea.innerHTML = `
            <div style="margin-bottom: 32px;">
                <div class="statement-container" style="background: #292a3e; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <p style="color: #f8fafc; font-size: 18px; line-height: 1.6; margin: 0;">${exampleWithHighlight}</p>
                </div>
                
                <div class="feedback-message" style="min-height: 50px; text-align: center; margin-bottom: 16px;">
                    <p style="color: #b6b9d0;">What does the highlighted phrasal verb mean?</p>
                </div>
                
                <div class="meaning-options" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
                    ${options.map((option, index) => `
                        <button class="meaning-option" data-correct="${option.isCorrect}" style="background: #353748; border: 1px solid #4a4d6b; color: #f8fafc; padding: 16px; border-radius: 8px; text-align: left; cursor: pointer; font-size: 16px; transition: all 0.3s;">
                            ${option.text}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div style="display: flex; justify-content: center;">
                <button class="next-question-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; font-size: 16px;">
                    Next Question
                </button>
            </div>
        `;

        // Добавляем обработчики событий для кнопок вариантов
        const optionButtons = contentArea.querySelectorAll('.meaning-option');
        const feedbackMessage = contentArea.querySelector('.feedback-message');
        const nextButton = contentArea.querySelector('.next-question-btn');

        let optionSelected = false;

        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Пропускаем, если вариант уже выбран
                if (optionSelected) return;

                optionSelected = true;
                const isCorrect = button.dataset.correct === 'true';

                // Сбрасываем все кнопки к стандартному стилю
                optionButtons.forEach(btn => {
                    btn.style.borderColor = '#4a4d6b';
                    btn.style.backgroundColor = '#353748';
                });

                if (isCorrect) {
                    // Стиль правильного ответа
                    button.style.backgroundColor = 'var(--correct-bg)';
                    button.style.borderColor = 'var(--correct-border)';

                    feedbackMessage.innerHTML = `<p style="color: var(--correct-text); font-weight: bold;">Correct! That's the right meaning.</p>`;
                    this.chooseMeaningCorrectCount++;
                } else {
                    // Стиль неправильного ответа
                    button.style.backgroundColor = 'var(--danger-bg)';
                    button.style.borderColor = 'var(--danger-border)';

                    // Подсвечиваем правильный ответ
                    optionButtons.forEach(btn => {
                        if (btn.dataset.correct === 'true') {
                            btn.style.backgroundColor = 'var(--correct-bg)';
                            btn.style.borderColor = 'var(--correct-border)';
                        }
                    });

                    feedbackMessage.innerHTML = `<p style="color: var(--danger-text); font-weight: bold;">Incorrect. The right meaning is highlighted.</p>`;
                }

                // Показываем кнопку "Далее"
                nextButton.style.opacity = '1';
                nextButton.style.pointerEvents = 'auto';
            });
        });

        // Переходим к следующему вопросу при нажатии кнопки "Далее"
        nextButton.addEventListener('click', () => {
            this.currentChooseMeaningIndex++;
            this.showNextChooseMeaningQuestion(modal);
        });

    } catch (error) {
        console.error('Error in showNextChooseMeaningQuestion:', error);
        contentArea.innerHTML = `
            <div style="color: #f87171; background: var(--danger-bg); padding: 20px; border-radius: 8px; text-align: center;">
                <p>An error occurred while preparing this question. Please try again.</p>
                <button class="retry-btn" style="background: #6366f1; color: #f8fafc; padding: 8px 24px; border-radius: 8px; border: none; cursor: pointer; margin-top: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.retry-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });
    }
};

// Creates an example with highlighted phrasal verb - ENHANCED VERSION
PhraseTraining.prototype.createHighlightedExample = function (phrase) {
    // Get examples from data-extra-examples
    let examples = [];
    if (phrase.extraExamples) {
        examples = phrase.extraExamples.split('|').filter(ex => ex.trim() !== '');
    }

    // If no examples, use main example
    if (examples.length === 0) {
        examples = [phrase.example];
    }

    // If still no examples, create a standard one
    if (!examples[0] || examples[0].trim() === '') {
        return `She <span style="color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;">${phrase.text}</span> her colleagues at the meeting yesterday.`;
    }

    // Choose a random example
    const randomExample = examples[Math.floor(Math.random() * examples.length)];

    // Clean the base form of the phrasal verb
    const cleanBaseVerb = phrase.text.replace(/\(.*?\)/g, '').trim().toLowerCase();

    // Split into parts
    const parts = cleanBaseVerb.split(' ');
    const baseVerb = parts[0]; // Base verb
    const particles = parts.slice(1).join(' '); // Particles

    // Attempt 1: Try a word-by-word approach for multi-word phrases
    if (parts.length > 1) {
        // Find each word of the phrasal verb
        const words = randomExample.toLowerCase().split(/\s+/);

        // Look for the particles first (usually more distinctive)
        for (let i = 0; i < words.length; i++) {
            // Check for any particle match
            for (let j = 0; j < parts.length; j++) {
                if (j === 0) continue; // Skip the verb part

                const particle = parts[j];
                if (words[i] === particle) {
                    // Found a particle, now look backwards for potential verb forms
                    // Try up to 5 words before the particle
                    const maxLookback = Math.min(i, 5);

                    for (let k = 1; k <= maxLookback; k++) {
                        const potentialVerb = words[i - k];

                        // Check if this could be a form of our verb
                        // 1. Exact match
                        // 2. Starts with verb
                        // 3. Common verb endings
                        if (potentialVerb === baseVerb ||
                            potentialVerb.startsWith(baseVerb) ||
                            (baseVerb.length > 3 && potentialVerb.includes(baseVerb.substring(0, 3)))) {

                            // We found a likely verb-particle combination
                            // Now extract the exact text from the original example

                            // Find the start of the verb in the original text
                            let verbStartPos = 0;
                            let wordCount = 0;

                            for (let pos = 0; pos < randomExample.length; pos++) {
                                if (/\s/.test(randomExample[pos])) {
                                    wordCount++;
                                    if (wordCount === i - k) {
                                        verbStartPos = pos + 1;
                                        break;
                                    }
                                }
                            }

                            // Find the end of the particle in the original text
                            let particleEndPos = randomExample.length;
                            wordCount = 0;

                            for (let pos = 0; pos < randomExample.length; pos++) {
                                if (/\s/.test(randomExample[pos]) || pos === randomExample.length - 1) {
                                    if (wordCount === i) {
                                        particleEndPos = pos === randomExample.length - 1 ? pos + 1 : pos;
                                        break;
                                    }
                                    wordCount++;
                                }
                            }

                            // Extract the full phrasal verb from the original text
                            const phraseText = randomExample.substring(verbStartPos, particleEndPos);

                            // Create highlighted version
                            const before = randomExample.substring(0, verbStartPos);
                            const after = randomExample.substring(particleEndPos);

                            return `${before}<span style="color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;">${phraseText}</span>${after}`;
                        }
                    }
                }
            }
        }
    }

    // Attempt 2: Try to simplify and just look for the combined parts in sequence
    const simpleTest = new RegExp(`\\b\\w*${baseVerb.substring(0, 3)}\\w*\\s+${particles}\\b`, 'i');
    const simpleMatch = randomExample.match(simpleTest);

    if (simpleMatch) {
        // Found a possible match
        const matchText = simpleMatch[0];
        const matchIndex = simpleMatch.index;

        // Create highlighted version
        const before = randomExample.substring(0, matchIndex);
        const after = randomExample.substring(matchIndex + matchText.length);

        return `${before}<span style="color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;">${matchText}</span>${after}`;
    }

    // Attempt 3: Last resort - manually check for common difficult verb forms
    const difficultForms = {
        'wear': ['wore', 'worn', 'wearing'],
        'take': ['took', 'taken', 'taking'],
        'give': ['gave', 'given', 'giving'],
        'go': ['went', 'gone', 'going'],
        'come': ['came', 'coming'],
        'see': ['saw', 'seen', 'seeing'],
        'do': ['did', 'done', 'doing'],
        'make': ['made', 'making'],
        'get': ['got', 'getting'],
        'find': ['found', 'finding'],
        'have': ['had', 'having']
    };

    if (difficultForms[baseVerb] && parts.length > 1) {
        for (const altForm of difficultForms[baseVerb]) {
            const diffPattern = new RegExp(`\\b${altForm}\\s+${particles}\\b`, 'i');
            const diffMatch = randomExample.match(diffPattern);

            if (diffMatch) {
                const matchText = diffMatch[0];
                const matchIndex = diffMatch.index;

                // Create highlighted version
                const before = randomExample.substring(0, matchIndex);
                const after = randomExample.substring(matchIndex + matchText.length);

                return `${before}<span style="color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;">${matchText}</span>${after}`;
            }
        }
    }

    // Attempt 4: Try a modified approach for "wore down" specifically (as a fallback)
    if (baseVerb === 'wear' && particles === 'down') {
        const specialPattern = /\b(wore)\s+(down)\b/i;
        const specialMatch = randomExample.match(specialPattern);

        if (specialMatch) {
            const matchText = specialMatch[0];
            const matchIndex = specialMatch.index;

            // Create highlighted version
            const before = randomExample.substring(0, matchIndex);
            const after = randomExample.substring(matchIndex + matchText.length);

            return `${before}<span style="color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;">${matchText}</span>${after}`;
        }
    }

    // If all detection methods fail, apply a simple fallback - split the example
    // into words and add highlighting where it seems most appropriate
    const words = randomExample.split(' ');
    for (let i = 0; i < words.length; i++) {
        // Look for words that might be related to our phrasal verb
        if (words[i].toLowerCase().includes(baseVerb.substring(0, 3)) ||
            particles.split(' ').some(p => words[i].toLowerCase().includes(p))) {

            // Determine how many words to highlight (usually 2-3 for a phrasal verb)
            const wordsToHighlight = Math.min(parts.length + 1, words.length - i);

            // Extract the text to highlight
            const highlightText = words.slice(i, i + wordsToHighlight).join(' ');

            // Create highlighted version by reconstructing the example
            const before = words.slice(0, i).join(' ');
            const after = words.slice(i + wordsToHighlight).join(' ');

            return `${before ? before + ' ' : ''}<span style="color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;">${highlightText}</span>${after ? ' ' + after : ''}`;
        }
    }

    // If absolutely everything fails, return the example as is
    return randomExample;
};

// Генерирует варианты значений для выбора
PhraseTraining.prototype.generateMeaningOptions = function (currentPhrase) {
    // Правильный вариант
    const correctOption = {
        text: currentPhrase.translation,
        isCorrect: true
    };

    // Фильтруем список всех значений, исключая правильный
    const filteredMeanings = this.allPhrasalVerbMeanings.filter(meaning =>
        meaning !== currentPhrase.translation
    );

    // Перемешиваем и берем 3 случайных значения для дистракторов
    const distractors = this.shuffleArray(filteredMeanings).slice(0, 3).map(meaning => ({
        text: meaning,
        isCorrect: false
    }));

    // Возвращаем все 4 варианта в случайном порядке
    return this.shuffleArray([correctOption, ...distractors]);
};

// Обновляем метод для включения нового режима тренировки
PhraseTraining.prototype.startNextMode = function () {
    this.currentCardIndex = 0;
    this.isFlipped = false;

    const nextMode = this.activeModesSequence[this.currentModeIndex];
    console.log({
        currentModeIndex: this.currentModeIndex,
        nextMode,
        activeModesSequence: this.activeModesSequence,
        totalCorrectAnswers: this.totalCorrectAnswers
    });

    if (!nextMode) {
        console.log('No next mode, showing completion modal');
        this.showCompletionModal();
        return;
    }

    switch (nextMode) {
        case 'matchPictures':
            this.createMatchPicturesModal();
            break;
        case 'writePhrasalVerb':
            this.createWritePhrasalVerbModal();
            break;
        case 'fillGaps':
            this.createFillGapsModal();
            break;
        case 'chooseCorrectMeaning':
            this.createChooseCorrectMeaningModal();
            break;
        case 'trueOrFalse':  // Новый режим!
            this.createTrueOrFalseModal();
            break;
        case 'findMistake':
            this.createFindMistakeModal();
            break;
        default:
            this.currentModeIndex++;
            this.startNextMode();
    }
};

/*--------------------------------------------------------------
#5 True or False 
--------------------------------------------------------------*/

// Create True/False modal window
PhraseTraining.prototype.createTrueOrFalseModal = function () {
    console.log('Creating True or False modal');

    // Get random phrases for this exercise (limited by this.count)
    const phrasesToUse = this.getRandomPhrases(this.count);

    if (phrasesToUse.length === 0) {
        console.log('No phrases available');
        this.currentModeIndex++;
        this.startNextMode();
        return;
    }

    // Create modal window
    const modal = document.createElement('div');
    modal.className = 'true-false-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    // Initial HTML structure with bilingual instructions
    modal.innerHTML = `
        <div style="background: #1e1e2e; width: 90vw; max-width: 800px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
            <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
            
            <div style="margin-bottom: 32px; text-align: center;">
                <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">True or False?</h2>
                <p style="color: #b6b9d0; margin-bottom: 6px;">Is the phrasal verb used correctly in this sentence?</p>
                <p style="color: #b6b9d0;">Правильно ли использован фразовый глагол в этом предложении?</p>
            </div>
            
            <div class="progress-indicator" style="width: 100%; margin-bottom: 24px;">
                <div class="progress-indicator-header" style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: var(--card-text-secondary); font-size: 14px;">Is the phrasal verb correct?</span>
                    <span class="progress-indicator-label" style="color: var(--card-text-secondary); font-size: 14px;">1/${phrasesToUse.length}</span>
                </div>
                <div class="progress-indicator-bar" style="width: 100%; height: 4px; background: var(--card-bg-tertiary); border-radius: 2px; overflow: hidden;">
                    <div class="progress-indicator-fill" style="height: 100%; background: var(--accent-primary); border-radius: 2px; width: ${(1 / phrasesToUse.length) * 100}%;"></div>
                </div>
            </div>
            
            <div id="true-false-content">
                <!-- Content will be dynamically inserted here -->
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Setup close button
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        this.currentModeIndex++;
        this.startNextMode();
    });

    // Initialize first question
    this.currentTrueFalseIndex = 0;
    this.trueFalseCorrectCount = 0;
    this.trueFalseData = this.prepareTrueFalseData(phrasesToUse);
    this.showNextTrueFalseQuestion(modal);
};

// Prepare data for the True or False mode
PhraseTraining.prototype.prepareTrueFalseData = function (phrases) {
    // First, collect all phrasal verbs for use as alternatives
    const allPhrasalVerbs = this.getAllPhrasalVerbs();

    return phrases.map(phrase => {
        // Get examples specifically from data-extra-examples attribute in DOM
        const extraExamples = this.getExtraExamplesFromDOM(phrase.id);

        // Choose an example sentence - prioritize extra examples if available
        let exampleSentence = '';

        if (extraExamples && extraExamples.length > 0) {
            // Take a random example from the available ones
            exampleSentence = extraExamples[Math.floor(Math.random() * extraExamples.length)];
        } else if (phrase.example && phrase.example.trim() !== '') {
            // Use the main example from the phrase data
            exampleSentence = phrase.example;
        } else {
            // Create a simple fallback example as last resort
            exampleSentence = `She couldn't ${phrase.text.toLowerCase()} her favorite books.`;
        }

        // Get the verb forms for this phrasal verb from DOM
        const verbForms = this.getVerbFormsFromDOM(phrase.id);

        // Decide if this will be true (correct) or false (incorrect) - roughly 50/50 chance
        const isTrue = Math.random() >= 0.5;

        // Find the actual form of the phrasal verb used in the example
        const verbInExampleData = this.findActualPhrasalVerbInSentence(exampleSentence, phrase.text, verbForms);

        // For false cases, find a valid incorrect phrasal verb
        let incorrectPhrasalVerb = '';
        if (!isTrue) {
            // Filter to avoid using the same phrasal verb
            const otherPhrasalVerbs = allPhrasalVerbs.filter(verb =>
                verb.toLowerCase() !== phrase.text.toLowerCase()
            );

            // Select a random incorrect phrasal verb
            incorrectPhrasalVerb = otherPhrasalVerbs[Math.floor(Math.random() * otherPhrasalVerbs.length)];
        }

        // Process the sentence for display (highlight or replace the phrasal verb)
        let processedSentence;
        if (isTrue) {
            // For true cases, highlight the correct phrasal verb in place
            processedSentence = this.highlightPhrasalVerbInSentence(
                exampleSentence,
                verbInExampleData
            );
        } else {
            // For false cases, replace the correct verb with incorrect and highlight
            processedSentence = this.replaceAndHighlightPhrasalVerb(
                exampleSentence,
                incorrectPhrasalVerb,
                verbInExampleData
            );
        }

        return {
            id: phrase.id,
            text: phrase.text,
            verbForms: verbForms,
            originalSentence: exampleSentence,
            processedSentence: processedSentence,
            isTrue: isTrue,
            correctPhrasalVerb: phrase.text,
            verbInExample: verbInExampleData.verbForm || phrase.text,
            incorrectPhrasalVerb: incorrectPhrasalVerb,
            verbLocation: verbInExampleData
        };
    });
};

// Helper to get example sentences from data-extra-examples attribute
PhraseTraining.prototype.getExtraExamplesFromDOM = function (phraseId) {
    const phraseCard = document.querySelector(`.phrase-card[data-id="${phraseId}"]`);

    if (phraseCard && phraseCard.dataset.extraExamples) {
        return phraseCard.dataset.extraExamples.split('|').filter(ex => ex.trim() !== '');
    }

    return [];
};

// Helper to get verb forms from data-forms attribute
PhraseTraining.prototype.getVerbFormsFromDOM = function (phraseId) {
    const phraseCard = document.querySelector(`.phrase-card[data-id="${phraseId}"]`);

    if (phraseCard && phraseCard.dataset.forms) {
        return phraseCard.dataset.forms.split(',').map(form => form.trim());
    }

    return [];
};

// Find the actual phrasal verb used in a sentence (improved for split verbs)
PhraseTraining.prototype.findActualPhrasalVerbInSentence = function (sentence, basePhrasalVerb, verbForms) {
    // Initialize result object
    const result = {
        found: false,
        verbForm: basePhrasalVerb.toLowerCase(),
        matchIndex: -1,
        matchLength: 0,
        isSplit: false,
        verbPartIndex: -1,
        verbPartLength: 0,
        particleIndex: -1,
        particleLength: 0
    };

    if (!sentence || sentence.trim() === '') {
        return result;
    }

    // Remove 'to' prefix if present
    const cleanBaseVerb = basePhrasalVerb.replace(/^to\s+/i, '').toLowerCase();

    // First try exact match
    const lowerSentence = sentence.toLowerCase();
    const exactMatchIndex = lowerSentence.indexOf(cleanBaseVerb);

    if (exactMatchIndex !== -1) {
        result.found = true;
        result.verbForm = cleanBaseVerb;
        result.matchIndex = exactMatchIndex;
        result.matchLength = cleanBaseVerb.length;
        return result;
    }

    // If exact match fails, try the verb forms from data-forms
    if (verbForms && verbForms.length > 0) {
        for (const form of verbForms) {
            const cleanForm = form.replace(/^to\s+/i, '').toLowerCase();
            const formMatchIndex = lowerSentence.indexOf(cleanForm);

            if (formMatchIndex !== -1) {
                result.found = true;
                result.verbForm = cleanForm;
                result.matchIndex = formMatchIndex;
                result.matchLength = cleanForm.length;
                return result;
            }
        }
    }

    // If still not found and the phrasal verb has multiple parts, try to find them separately
    const parts = cleanBaseVerb.split(' ');

    if (parts.length > 1) {
        const verbPart = parts[0]; // First part (the verb)
        const particlePart = parts.slice(1).join(' '); // Rest parts (particles)

        // Try different forms of the verb part
        const verbForms = [
            verbPart,                         // base: look
            verbPart + 's',                   // 3rd person: looks
            verbPart + 'ed',                  // regular past: looked
            verbPart + 'ing',                 // gerund: looking
            verbPart.replace(/e$/, '') + 'ing', // for verbs ending with 'e': come -> coming
            this.getIrregularPastForm(verbPart) // Try irregular past forms like 'got' for 'get'
        ];

        // Try each verb form until we find a match
        for (const form of verbForms) {
            const verbRegex = new RegExp(`\\b${form}\\b`, 'i');
            const verbMatch = lowerSentence.match(verbRegex);

            if (verbMatch) {
                const verbIndex = verbMatch.index;
                const verbEndIndex = verbIndex + form.length;

                // Look for the particle part in the rest of the sentence
                const afterVerbText = lowerSentence.substring(verbEndIndex);
                const particleRegex = new RegExp(`\\b${particlePart}\\b`, 'i');
                const particleMatch = afterVerbText.match(particleRegex);

                if (particleMatch) {
                    const particleStartIndex = verbEndIndex + particleMatch.index;

                    // Only consider it a match if the particle is within reasonable distance (0-30 chars)
                    const gapSize = particleStartIndex - verbEndIndex;

                    if (gapSize >= 0 && gapSize <= 30) {
                        // Detected a split phrasal verb
                        result.found = true;
                        result.verbForm = cleanBaseVerb;
                        result.isSplit = true;
                        result.verbPartIndex = verbIndex;
                        result.verbPartLength = form.length;
                        result.particleIndex = particleStartIndex;
                        result.particleLength = particlePart.length;

                        console.log(`Found split phrasal verb: '${form}...${particlePart}' in '${sentence}'`);
                        return result;
                    }
                }
            }
        }
    }

    // No match found, return default result
    return result;
};

// Helper function to get irregular past forms
PhraseTraining.prototype.getIrregularPastForm = function (verb) {
    const irregulars = {
        'get': 'got',
        'come': 'came',
        'go': 'went',
        'make': 'made',
        'take': 'took',
        'break': 'broke',
        'give': 'gave',
        'write': 'wrote',
        'drive': 'drove',
        'fly': 'flew',
        'speak': 'spoke',
        'draw': 'drew',
        'do': 'did',
        'see': 'saw',
        'run': 'ran',
        'know': 'knew',
        'grow': 'grew',
        'throw': 'threw',
        'blow': 'blew',
        'bring': 'brought',
        'buy': 'bought',
        'catch': 'caught',
        'fight': 'fought',
        'teach': 'taught',
        'think': 'thought',
        'seek': 'sought'
    };

    return irregulars[verb] || verb + 'ed';
};

// Highlight a phrasal verb in a sentence (improved for split phrasal verbs)
PhraseTraining.prototype.highlightPhrasalVerbInSentence = function (sentence, verbData) {
    // If verb wasn't found in the original sentence, return the sentence as is
    if (!verbData.found) {
        return sentence;
    }

    // Define highlight style once
    const highlightStyle = 'color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;';

    // Handle split phrasal verbs (separate highlighting for verb and particle)
    if (verbData.isSplit) {
        // Get parts of the original sentence
        const before = sentence.substring(0, verbData.verbPartIndex);
        const verbPart = sentence.substring(verbData.verbPartIndex, verbData.verbPartIndex + verbData.verbPartLength);
        const middle = sentence.substring(verbData.verbPartIndex + verbData.verbPartLength, verbData.particleIndex);
        const particlePart = sentence.substring(verbData.particleIndex, verbData.particleIndex + verbData.particleLength);
        const after = sentence.substring(verbData.particleIndex + verbData.particleLength);

        // Check if both parts are found properly
        if (verbPart && particlePart) {
            // Highlight only the verb part and particle part, leave the middle unchanged
            return before +
                `<span style="${highlightStyle}">${verbPart}</span>` +
                middle +
                `<span style="${highlightStyle}">${particlePart}</span>` +
                after;
        } else {
            // Fallback - if for some reason we can't split properly,
            // highlight the whole phrase including the middle part
            const startIndex = verbData.verbPartIndex;
            const endIndex = verbData.particleIndex + verbData.particleLength;
            const entirePhrase = sentence.substring(startIndex, endIndex);

            return before +
                `<span style="${highlightStyle}">${entirePhrase}</span>` +
                after;
        }
    } else {
        // For non-split phrasal verbs, highlight the entire verb at once
        const before = sentence.substring(0, verbData.matchIndex);
        const verb = sentence.substring(verbData.matchIndex, verbData.matchIndex + verbData.matchLength);
        const after = sentence.substring(verbData.matchIndex + verbData.matchLength);

        return before +
            `<span style="${highlightStyle}">${verb}</span>` +
            after;
    }
};

// Replace and highlight a phrasal verb in a sentence (improved for split phrasal verbs)
PhraseTraining.prototype.replaceAndHighlightPhrasalVerb = function (sentence, incorrectVerb, verbData) {
    // If verb wasn't found in the original sentence, return the sentence as is
    if (!verbData.found) {
        return sentence;
    }

    // Define highlight style once
    const highlightStyle = 'color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;';

    // Make sure the incorrect verb is lowercase
    const incorrectVerbLower = incorrectVerb.toLowerCase();

    // Handle split phrasal verbs
    if (verbData.isSplit) {
        // Get parts of the original sentence
        const before = sentence.substring(0, verbData.verbPartIndex);
        const middle = sentence.substring(verbData.verbPartIndex + verbData.verbPartLength, verbData.particleIndex);
        const after = sentence.substring(verbData.particleIndex + verbData.particleLength);

        // For split verbs, we'll use the first word of the incorrect verb for the verb part,
        // and the rest for the particle part
        const incorrectParts = incorrectVerbLower.split(' ');

        // Check if the incorrect verb has multiple parts
        if (incorrectParts.length > 1) {
            const incorrectVerbPart = incorrectParts[0];
            const incorrectParticlePart = incorrectParts.slice(1).join(' ');

            // Highlight only the verb part and particle part, leave the middle unchanged
            return before +
                `<span style="${highlightStyle}">${incorrectVerbPart}</span>` +
                middle +
                `<span style="${highlightStyle}">${incorrectParticlePart}</span>` +
                after;
        } else {
            // If incorrect verb is just one word, use first half for verb part 
            // and second half for particle part
            const halfLength = Math.ceil(incorrectVerbLower.length / 2);
            const incorrectFirstPart = incorrectVerbLower.substring(0, halfLength);
            const incorrectSecondPart = incorrectVerbLower.substring(halfLength);

            return before +
                `<span style="${highlightStyle}">${incorrectFirstPart}</span>` +
                middle +
                `<span style="${highlightStyle}">${incorrectSecondPart}</span>` +
                after;
        }
    } else {
        // For non-split phrasal verbs, replace the whole verb at once
        const before = sentence.substring(0, verbData.matchIndex);
        const after = sentence.substring(verbData.matchIndex + verbData.matchLength);

        return before +
            `<span style="${highlightStyle}">${incorrectVerbLower}</span>` +
            after;
    }
};

// Show next True/False question
PhraseTraining.prototype.showNextTrueFalseQuestion = function (modal) {
    const contentArea = modal.querySelector('#true-false-content');

    // Update progress indicator
    const progressLabel = modal.querySelector('.progress-indicator-label');
    if (progressLabel) {
        progressLabel.textContent = `${this.currentTrueFalseIndex + 1}/${this.trueFalseData.length}`;
    }

    // Update progress bar
    const progressFill = modal.querySelector('.progress-indicator-fill');
    if (progressFill) {
        progressFill.style.width = `${((this.currentTrueFalseIndex + 1) / this.trueFalseData.length) * 100}%`;
    }

    // Check if we've gone through all phrases
    if (this.currentTrueFalseIndex >= this.trueFalseData.length) {
        console.log('Completed True/False mode');
        this.totalCorrectAnswers += this.trueFalseCorrectCount;

        // Show completion screen
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 32px;">
                <h2 style="color: #f8fafc; font-size: 28px; margin-bottom: 16px;">Training Complete!</h2>
                <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 24px;">
                    You answered correctly ${this.trueFalseCorrectCount} out of ${this.trueFalseData.length} questions.
                </p>
                <button class="continue-training-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.continue-training-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        return;
    }

    try {
        // Get current question data
        const currentQuestion = this.trueFalseData[this.currentTrueFalseIndex];

        // Prepare a properly highlighted correct sentence
        const correctSentenceHighlighted = this.highlightPhrasalVerbInSentence(
            currentQuestion.originalSentence,
            currentQuestion.verbLocation
        );

        // Generate content for current question
        contentArea.innerHTML = `
            <div style="margin-bottom: 32px;">
                <div class="sentence-container" style="background: #292a3e; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <p style="color: #f8fafc; font-size: 18px; line-height: 1.6; margin: 0;">${currentQuestion.processedSentence}</p>
                </div>
                
                <div class="true-false-buttons" style="display: flex; justify-content: center; gap: 32px; margin-bottom: 32px;">
                    <button class="true-btn" data-value="true" style="background: #292a3e; color: #f8fafc; border: 2px solid #4a4d6b; border-radius: 8px; padding: 16px 48px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                        TRUE
                    </button>
                    <button class="false-btn" data-value="false" style="background: #292a3e; color: #f8fafc; border: 2px solid #4a4d6b; border-radius: 8px; padding: 16px 48px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                        FALSE
                    </button>
                </div>
                
                <div class="feedback-message" style="min-height: 60px; display: none; padding: 16px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
                    <!-- Feedback will appear here -->
                </div>
                
                <div class="correct-sentence" style="display: none; background: #292a3e; border-radius: 8px; padding: 20px; margin-top: 16px; margin-bottom: 24px;">
                    <p style="color: var(--correct-text); font-size: 14px; margin: 0 0 8px 0;">Correct sentence:</p>
                    <p style="color: #f8fafc; font-size: 18px; line-height: 1.6; margin: 0;">${correctSentenceHighlighted}</p>
                </div>
            </div>
            
            <div style="display: flex; justify-content: center;">
                <button class="next-question-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; font-size: 16px;">
                    Next Question
                </button>
            </div>
        `;

        // Add event listeners
        const trueButton = contentArea.querySelector('.true-btn');
        const falseButton = contentArea.querySelector('.false-btn');
        const feedbackMessage = contentArea.querySelector('.feedback-message');
        const correctSentence = contentArea.querySelector('.correct-sentence');
        const nextButton = contentArea.querySelector('.next-question-btn');

        // Handle button clicks
        const buttons = [trueButton, falseButton];

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Disable buttons to prevent multiple clicks
                buttons.forEach(btn => btn.disabled = true);

                // Get user's answer
                const userAnswer = button.getAttribute('data-value') === 'true';

                // Check if it's correct
                const isCorrect = userAnswer === currentQuestion.isTrue;

                // Change button styles
                buttons.forEach(btn => {
                    btn.style.opacity = '0.5';
                });

                button.style.opacity = '1';

                if (isCorrect) {
                    button.style.backgroundColor = 'var(--correct-bg)';
                    button.style.borderColor = 'var(--correct-border)';
                    this.trueFalseCorrectCount++;
                } else {
                    button.style.backgroundColor = 'var(--danger-bg)';
                    button.style.borderColor = 'var(--danger-border)';

                    // Highlight the correct button
                    const correctButton = currentQuestion.isTrue ? trueButton : falseButton;
                    correctButton.style.backgroundColor = 'var(--correct-bg)';
                    correctButton.style.borderColor = 'var(--correct-border)';
                    correctButton.style.opacity = '1';
                }

                // Show feedback
                feedbackMessage.style.display = 'block';

                if (isCorrect) {
                    feedbackMessage.innerHTML = `
                        <p style="color: var(--correct-text); font-weight: bold; margin: 0 0 8px 0;">Correct!</p>
                    `;
                    feedbackMessage.style.backgroundColor = 'var(--correct-bg)';
                    feedbackMessage.style.border = '1px solid var(--correct-border)';

                    // Show correct sentence if either:
                    // 1. The answer is FALSE (meaning they correctly identified an incorrect verb)
                    // 2. Or if the user got it wrong (needs to see the correct sentence)
                    if (!currentQuestion.isTrue) {
                        correctSentence.style.display = 'block';
                    }
                } else {
                    let explanation = '';

                    if (currentQuestion.isTrue) {
                        explanation = `"${currentQuestion.verbInExample}" is correctly used in this context.`;
                    } else {
                        explanation = `The phrase should be "${currentQuestion.correctPhrasalVerb}" instead of "${currentQuestion.incorrectPhrasalVerb}".`;
                    }

                    feedbackMessage.innerHTML = `
                        <p style="color: var(--danger-text); font-weight: bold; margin: 0 0 8px 0;">Incorrect!</p>
                        <p style="color: var(--body-1); margin: 0;">${explanation}</p>
                    `;
                    feedbackMessage.style.backgroundColor = 'var(--danger-bg)';
                    feedbackMessage.style.border = '1px solid var(--danger-border)';

                    // Always show correct sentence when user is incorrect
                    correctSentence.style.display = 'block';
                }

                // Show next button
                nextButton.style.opacity = '1';
                nextButton.style.pointerEvents = 'auto';
            });
        });

        // Handle next button click
        nextButton.addEventListener('click', () => {
            this.currentTrueFalseIndex++;
            this.showNextTrueFalseQuestion(modal);
        });

    } catch (error) {
        console.error('Error in showNextTrueFalseQuestion:', error);

        // Show error message
        contentArea.innerHTML = `
            <div style="color: #f87171; background: var(--danger-bg); padding: 20px; border-radius: 8px; text-align: center;">
                <p>An error occurred while preparing this question. Please try again.</p>
                <button class="retry-btn" style="background: #6366f1; color: #f8fafc; padding: 8px 24px; border-radius: 8px; border: none; cursor: pointer; margin-top: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.retry-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });
    }
};

// Update the startNextMode method to include the trueOrFalse mode
PhraseTraining.prototype.startNextMode = function () {
    this.currentCardIndex = 0;
    this.isFlipped = false;

    const nextMode = this.activeModesSequence[this.currentModeIndex];
    console.log({
        currentModeIndex: this.currentModeIndex,
        nextMode,
        activeModesSequence: this.activeModesSequence,
        totalCorrectAnswers: this.totalCorrectAnswers
    });

    if (!nextMode) {
        console.log('No next mode, showing completion modal');
        this.showCompletionModal();
        return;
    }

    switch (nextMode) {
        case 'matchPictures':
            this.createMatchPicturesModal();
            break;
        case 'writePhrasalVerb':
            this.createWritePhrasalVerbModal();
            break;
        case 'fillGaps':
            this.createFillGapsModal();
            break;
        case 'chooseCorrectMeaning':
            this.createChooseCorrectMeaningModal();
            break;
        case 'crossOutIncorrect':
            this.createCrossOutIncorrectModal();
            break;
        case 'findMistake':
            this.createFindMistakeModal();
            break;
        case 'trueOrFalse':
            this.createTrueOrFalseModal();
            break;
        default:
            this.currentModeIndex++;
            this.startNextMode();
    }
};

/*--------------------------------------------------------------
#6  Find the Mistake (error correction) Training
--------------------------------------------------------------*/

PhraseTraining.prototype.createFindMistakeModal = function () {
    console.log('Creating Find the Mistake modal');

    // Get random phrases for this exercise (limited by this.count)
    const phrasesToUse = this.getRandomPhrases(this.count);

    if (phrasesToUse.length === 0) {
        console.log('No phrases available');
        this.currentModeIndex++;
        this.startNextMode();
        return;
    }

    // Create modal window
    const modal = document.createElement('div');
    modal.className = 'find-mistake-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    // Initial HTML structure with bilingual instructions
    modal.innerHTML = `
        <div style="background: #1e1e2e; width: 90vw; max-width: 800px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
            <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
            
            <div style="margin-bottom: 32px; text-align: center;">
                <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">Find the Mistake</h2>
                <p style="color: #b6b9d0; margin-bottom: 6px;">Correct the highlighted phrasal verb in the sentence below</p>
                <p style="color: #b6b9d0;">Исправьте выделенный фразовый глагол в предложении ниже</p>
            </div>
            
            <div class="progress-indicator" style="width: 100%; margin-bottom: 24px;">
                <div class="progress-indicator-header" style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: var(--card-text-secondary); font-size: 14px;">Find the Mistake (error correction)</span>
                    <span class="progress-indicator-label" style="color: var(--card-text-secondary); font-size: 14px;">1/${phrasesToUse.length}</span>
                </div>
                <div class="progress-indicator-bar" style="width: 100%; height: 4px; background: var(--card-bg-tertiary); border-radius: 2px; overflow: hidden;">
                    <div class="progress-indicator-fill" style="height: 100%; background: var(--accent-primary); border-radius: 2px; width: ${(1 / phrasesToUse.length) * 100}%;"></div>
                </div>
            </div>
            
            <div id="find-mistake-content">
                <!-- Content will be dynamically inserted here -->
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Setup close button
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        this.currentModeIndex++;
        this.startNextMode();
    });

    // Initialize first question
    this.currentFindMistakeIndex = 0;
    this.findMistakeCorrectCount = 0;
    this.findMistakeData = this.prepareFindMistakeData(phrasesToUse);
    this.showNextFindMistakeQuestion(modal);
};

// Prepare data for the Find the Mistake mode
PhraseTraining.prototype.prepareFindMistakeData = function (phrases) {
    return phrases.map(phrase => {
        // Create a sentence with a deliberate mistake in the phrasal verb
        return this.createSentenceWithMistake(phrase);
    });
};

// Create a sentence with a deliberate mistake in the phrasal verb
PhraseTraining.prototype.createSentenceWithMistake = function (phrase) {
    // Extract the examples from data-extra-examples
    let exampleSentence = '';
    let extraExamples = [];

    if (phrase.extraExamples) {
        extraExamples = phrase.extraExamples.split('|');
        if (extraExamples.length > 0) {
            // Randomly choose one of the extra examples
            exampleSentence = extraExamples[Math.floor(Math.random() * extraExamples.length)];
        }
    }

    // If no examples from data-extra-examples, use the main example
    if (!exampleSentence || exampleSentence.trim() === '') {
        exampleSentence = phrase.example;
    }

    // Get the correct phrasal verb
    const correctPhrasalVerb = phrase.text;

    // Find the actual verb form used in the example sentence
    const verbDetails = this.findPhrasalVerbInSentence(exampleSentence, correctPhrasalVerb);

    // If we couldn't find the phrasal verb in the sentence, try other examples
    if (!verbDetails.found && extraExamples.length > 1) {
        for (const otherExample of extraExamples) {
            if (otherExample !== exampleSentence) {
                const otherVerbDetails = this.findPhrasalVerbInSentence(otherExample, correctPhrasalVerb);
                if (otherVerbDetails.found) {
                    exampleSentence = otherExample;
                    verbDetails.found = true;
                    verbDetails.verbForm = otherVerbDetails.verbForm;
                    verbDetails.fullMatch = otherVerbDetails.fullMatch;
                    verbDetails.matchIndex = otherVerbDetails.matchIndex;
                    break;
                }
            }
        }
    }

    // Fall back to main example if still not found
    if (!verbDetails.found && phrase.example && phrase.example !== exampleSentence) {
        const mainExampleDetails = this.findPhrasalVerbInSentence(phrase.example, correctPhrasalVerb);
        if (mainExampleDetails.found) {
            exampleSentence = phrase.example;
            verbDetails.found = true;
            verbDetails.verbForm = mainExampleDetails.verbForm;
            verbDetails.fullMatch = mainExampleDetails.fullMatch;
            verbDetails.matchIndex = mainExampleDetails.matchIndex;
        }
    }

    // Create an incorrect version of the phrasal verb (matching the same form found in the sentence)
    const incorrectPhrasalVerb = verbDetails.found
        ? this.createIncorrectPhrasalVerb(verbDetails.verbForm)
        : this.createIncorrectPhrasalVerb(correctPhrasalVerb);

    // Replace the correct phrasal verb with the incorrect one in the example
    const processedExample = this.replacePhrasalVerbWithMistake(
        exampleSentence,
        verbDetails.found ? verbDetails.verbForm : correctPhrasalVerb,
        incorrectPhrasalVerb,
        verbDetails
    );

    return {
        id: phrase.id,
        text: phrase.text,
        example: exampleSentence,
        incorrectPhrasalVerb: incorrectPhrasalVerb,
        correctPhrasalVerb: verbDetails.found ? verbDetails.verbForm : correctPhrasalVerb,
        processedExample: processedExample.processedExample,
        originalSentence: exampleSentence, // This is the sentence with the correct phrasal verb
        verbDetails: verbDetails
    };
};

// Find the actual form of the phrasal verb used in a sentence
PhraseTraining.prototype.findPhrasalVerbInSentence = function (sentence, basePhrasalVerb) {
    // Initialize the result object
    const result = {
        found: false,
        verbForm: basePhrasalVerb,
        fullMatch: '',
        matchIndex: -1
    };

    if (!sentence) return result;

    // Split the phrasal verb into parts
    const parts = basePhrasalVerb.toLowerCase().split(' ');

    // If it's just a single word, simple search
    if (parts.length === 1) {
        const match = sentence.match(new RegExp('\\b' + parts[0] + '\\b', 'i'));
        if (match) {
            result.found = true;
            result.verbForm = match[0];
            result.fullMatch = match[0];
            result.matchIndex = match.index;
        }
        return result;
    }

    // Get the verb part (first word) and the particle parts
    const baseVerb = parts[0];
    const particles = parts.slice(1).join(' ');

    // Common verb forms to check (base, -s form, -ing form, past tense, past participle)
    const verbForms = [
        baseVerb,                        // base form (e.g., "look")
        baseVerb + 's',                  // -s form (e.g., "looks")
        baseVerb + 'ing',                // -ing form (e.g., "looking")
        baseVerb + 'ed',                 // regular past (e.g., "looked")
        this.getIrregularPastForm(baseVerb) // irregular past (e.g., "wore" for "wear")
    ];

    // Check each possible verb form + particles combination
    for (const verbForm of verbForms) {
        // The phrasal verb might have the parts together or separated by other words
        // First, try the direct match
        const directPattern = new RegExp('\\b' + verbForm + '\\s+' + particles.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'i');
        const directMatch = sentence.match(directPattern);

        if (directMatch) {
            result.found = true;
            result.verbForm = directMatch[0];
            result.fullMatch = directMatch[0];
            result.matchIndex = directMatch.index;
            return result;
        }

        // Try more flexible pattern that allows words between verb and particles
        const flexPattern = new RegExp('\\b' + verbForm + '\\b[\\s\\w]*\\b' + particles + '\\b', 'i');
        const flexMatch = sentence.match(flexPattern);

        if (flexMatch) {
            result.found = true;
            result.verbForm = verbForm + ' ' + particles; // Normalized form
            result.fullMatch = flexMatch[0];
            result.matchIndex = flexMatch.index;
            return result;
        }
    }

    return result;
};

// Get irregular past form of some common verbs
PhraseTraining.prototype.getIrregularPastForm = function (verb) {
    const irregularVerbs = {
        'wear': 'wore',
        'find': 'found',
        'stand': 'stood',
        'come': 'came',
        'go': 'went',
        'take': 'took',
        'give': 'gave',
        'get': 'got',
        'put': 'put',
        'make': 'made',
        'see': 'saw',
        'bring': 'brought',
        'buy': 'bought',
        'catch': 'caught',
        'do': 'did',
        'feel': 'felt',
        'have': 'had',
        'hold': 'held',
        'keep': 'kept',
        'lead': 'led',
        'let': 'let',
        'lie': 'lay',
        'light': 'lit',
        'lose': 'lost',
        'mean': 'meant',
        'meet': 'met',
        'pay': 'paid',
        'run': 'ran',
        'say': 'said',
        'sell': 'sold',
        'send': 'sent',
        'set': 'set',
        'sit': 'sat',
        'sleep': 'slept',
        'speak': 'spoke',
        'spend': 'spent',
        'stand': 'stood',
        'teach': 'taught',
        'tell': 'told',
        'think': 'thought',
        'understand': 'understood',
        'write': 'wrote'
    };

    // Return the irregular past form or add 'ed' as fallback
    return irregularVerbs[verb.toLowerCase()] || verb + 'ed';
};

// Create an incorrect version of a phrasal verb
PhraseTraining.prototype.createIncorrectPhrasalVerb = function (correctVerb) {
    // Split the phrasal verb into parts
    const parts = correctVerb.split(' ');

    // Common mistakes to introduce:
    const mistakeTypes = [
        'preposition', // Change the preposition (e.g., "look up" -> "look at")
        'verb',        // Change the verb (e.g., "look up" -> "see up")
        'order',       // Change the order (e.g., "look up" -> "up look")
        'omission',    // Omit a part (e.g., "look up to" -> "look to")
        'addition'     // Add an unnecessary part (e.g., "look up" -> "look up on")
    ];

    // Common incorrect prepositions to substitute
    const prepositions = ['in', 'on', 'at', 'to', 'from', 'with', 'by', 'for', 'of', 'out', 'up', 'down', 'off', 'about'];

    // Common incorrect verbs to substitute
    const verbs = ['get', 'make', 'take', 'do', 'go', 'come', 'look', 'put', 'bring', 'give', 'find', 'turn', 'keep', 'run'];

    // Choose a mistake type
    const mistakeType = mistakeTypes[Math.floor(Math.random() * mistakeTypes.length)];

    // Apply the chosen mistake type
    switch (mistakeType) {
        case 'preposition':
            // Only apply if there's a preposition to change
            if (parts.length > 1) {
                const originalPrep = parts[parts.length - 1];
                let newPrep;
                do {
                    newPrep = prepositions[Math.floor(Math.random() * prepositions.length)];
                } while (newPrep === originalPrep); // Ensure it's different

                const newParts = [...parts];
                newParts[parts.length - 1] = newPrep;
                return newParts.join(' ');
            }
        // Fall through if no preposition to change

        case 'verb':
            // Change the main verb
            const originalVerb = parts[0];
            let newVerb;
            do {
                newVerb = verbs[Math.floor(Math.random() * verbs.length)];
            } while (newVerb === originalVerb); // Ensure it's different

            const newParts = [...parts];
            newParts[0] = newVerb;
            return newParts.join(' ');

        case 'order':
            // Only apply if there's more than one part
            if (parts.length > 1) {
                return [...parts].reverse().join(' ');
            }
        // Fall through if only one part

        case 'omission':
            // Only apply if there's more than one part
            if (parts.length > 1) {
                const partToOmit = Math.floor(Math.random() * parts.length);
                const newParts = [...parts];
                newParts.splice(partToOmit, 1);
                return newParts.join(' ');
            }
        // Fall through if only one part

        case 'addition':
            // Add an extra preposition
            const extraPrep = prepositions[Math.floor(Math.random() * prepositions.length)];
            return correctVerb + ' ' + extraPrep;

        default:
            // Fallback: swap a preposition
            if (parts.length > 1) {
                const newParts = [...parts];
                const prepIndex = parts.length - 1;
                let newPrep;
                do {
                    newPrep = prepositions[Math.floor(Math.random() * prepositions.length)];
                } while (newPrep === parts[prepIndex]); // Ensure it's different

                newParts[prepIndex] = newPrep;
                return newParts.join(' ');
            } else {
                // If single-word verb, add a random preposition
                return correctVerb + ' ' + prepositions[Math.floor(Math.random() * prepositions.length)];
            }
    }
};

// Replace the correct phrasal verb with the incorrect version in the example
PhraseTraining.prototype.replacePhrasalVerbWithMistake = function (example, correctVerb, incorrectVerb, verbDetails) {
    // If we have specific verb details from our search, use those
    if (verbDetails && verbDetails.found) {
        const before = example.substring(0, verbDetails.matchIndex);
        const after = example.substring(verbDetails.matchIndex + verbDetails.fullMatch.length);

        // Create highlighted version with gold color and incorrect verb
        const highlightedIncorrect = `<span style="color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;">${incorrectVerb}</span>`;

        return {
            processedExample: `${before}${highlightedIncorrect}${after}`,
            before: before,
            matchedText: verbDetails.fullMatch,
            after: after
        };
    }

    // Fallback to regex approach if we don't have details
    // Create regex for finding the phrasal verb in different forms
    const baseForm = correctVerb.toLowerCase();
    const parts = baseForm.split(' ');
    const verb = parts[0]; // first word (verb)

    // Create regex pattern allowing different verb forms
    const verbRegex = `(${verb}|${verb}s|${verb}ing|${verb}ed)`;

    // Build full regex with the rest of the phrasal verb parts
    const restParts = parts.slice(1).join(' ');
    const fullRegex = new RegExp(`${verbRegex}\\s+${restParts.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'i');

    const match = example.match(fullRegex);

    if (match) {
        // Phrasal verb found in the example
        const matchedText = match[0];
        const matchIndex = match.index;

        // Split sentence into parts
        const before = example.substring(0, matchIndex);
        const after = example.substring(matchIndex + matchedText.length);

        // Create highlighted version with gold color and incorrect verb
        const highlightedIncorrect = `<span style="color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;">${incorrectVerb}</span>`;

        return {
            processedExample: `${before}${highlightedIncorrect}${after}`,
            before: before,
            matchedText: matchedText,
            after: after
        };
    }

    // Use exact match if regex fails
    const exactMatch = example.toLowerCase().indexOf(baseForm.toLowerCase());

    if (exactMatch !== -1) {
        const before = example.substring(0, exactMatch);
        const after = example.substring(exactMatch + baseForm.length);

        // Create highlighted version with gold color and incorrect verb
        const highlightedIncorrect = `<span style="color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;">${incorrectVerb}</span>`;

        return {
            processedExample: `${before}${highlightedIncorrect}${after}`,
            before: before,
            matchedText: correctVerb,
            after: after
        };
    }

    // If the phrasal verb isn't found in the example, handle the fallback case
    console.warn(`Could not find phrasal verb "${correctVerb}" in example: "${example}". Using direct substitution.`);

    const processedExample = example.replace(
        correctVerb,
        `<span style="color: var(--accent-gold); font-weight: bold; background: rgba(245, 158, 11, 0.15); padding: 0 4px; border-radius: 4px;">${incorrectVerb}</span>`
    );

    return {
        processedExample: processedExample,
        before: '',
        matchedText: correctVerb,
        after: example
    };
};

PhraseTraining.prototype.showNextFindMistakeQuestion = function (modal) {
    const contentArea = modal.querySelector('#find-mistake-content');

    // Update progress indicator
    const progressLabel = modal.querySelector('.progress-indicator-label');
    if (progressLabel) {
        progressLabel.textContent = `${this.currentFindMistakeIndex + 1}/${this.findMistakeData.length}`;
    }

    // Update progress bar
    const progressFill = modal.querySelector('.progress-indicator-fill');
    if (progressFill) {
        progressFill.style.width = `${((this.currentFindMistakeIndex + 1) / this.findMistakeData.length) * 100}%`;
    }

    // Check if we've gone through all phrases
    if (this.currentFindMistakeIndex >= this.findMistakeData.length) {
        console.log('Completed Find the Mistake mode');
        this.totalCorrectAnswers += this.findMistakeCorrectCount;

        // Show completion screen
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 32px;">
                <h2 style="color: #f8fafc; font-size: 28px; margin-bottom: 16px;">Training Complete!</h2>
                <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 24px;">
                    You correctly fixed ${this.findMistakeCorrectCount} out of ${this.findMistakeData.length} mistakes.
                </p>
                <button class="continue-training-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.continue-training-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        return;
    }

    try {
        // Get current question data
        const currentQuestion = this.findMistakeData[this.currentFindMistakeIndex];

        // Generate content for current question
        contentArea.innerHTML = `
            <div style="margin-bottom: 32px;">
                <div class="sentence-container" style="background: #292a3e; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <p style="color: #f8fafc; font-size: 18px; line-height: 1.6; margin: 0;">${currentQuestion.processedExample}</p>
                </div>
                
                <div class="correction-container" style="margin-bottom: 24px;">
                    <label for="correction-input" style="display: block; color: #f8fafc; margin-bottom: 8px; font-size: 16px;">
                        Correct the sentence <span style="color: #b6b9d0; font-size: 14px;">(you can write just the correct phrasal verb or the entire sentence)</span>:
                    </label>
                    <div style="display: flex; gap: 12px; align-items: center;">
                        <input type="text" id="correction-input" style="flex-grow: 1; padding: 12px 16px; background: #353748; border: 1px solid #4a4d6b; border-radius: 8px; color: #f8fafc; font-size: 16px;" 
                            placeholder="Type the corrected phrasal verb or full sentence...">
                        <button class="check-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 24px; height: 48px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px; white-space: nowrap;">
                            Check
                        </button>
                    </div>
                </div>
                
                <div class="feedback-message" style="min-height: 60px; display: none; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
                    <!-- Feedback will appear here -->
                </div>
                
                <div class="hint-container" style="text-align: center; margin-bottom: 16px; display: none;">
                    <button class="hint-btn" style="background: none; border: none; color: #b6b9d0; text-decoration: underline; cursor: pointer; font-size: 14px;">
                        Show Hint
                    </button>
                </div>
            </div>
            
            <div style="display: flex; justify-content: center;">
                <button class="next-question-btn" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; font-size: 16px;">
                    Next Question
                </button>
            </div>
        `;

        // Store correct information in data attributes
        contentArea.dataset.correctPhrasalVerb = currentQuestion.correctPhrasalVerb;
        contentArea.dataset.incorrectPhrasalVerb = currentQuestion.incorrectPhrasalVerb;
        contentArea.dataset.originalSentence = currentQuestion.originalSentence;

        // Add event listeners
        const correctionInput = contentArea.querySelector('#correction-input');
        const checkButton = contentArea.querySelector('.check-btn');
        const feedbackMessage = contentArea.querySelector('.feedback-message');
        const hintContainer = contentArea.querySelector('.hint-container');
        const hintButton = contentArea.querySelector('.hint-btn');
        const nextButton = contentArea.querySelector('.next-question-btn');

        // Initialize variables
        let isCorrect = false;
        let attemptCount = 0;
        const maxAttempts = 2;

        // Focus on input field
        setTimeout(() => {
            if (correctionInput) {
                correctionInput.focus();
            }
        }, 100);

        // Enter key in input field triggers check button
        correctionInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkButton.click();
            }
        });

        // Check button functionality
        checkButton.addEventListener('click', () => {
            const userAnswer = correctionInput.value.trim();
            attemptCount++;

            // Check if the answer is correct
            isCorrect = this.checkFindMistakeAnswer(
                userAnswer,
                currentQuestion.correctPhrasalVerb,
                currentQuestion.incorrectPhrasalVerb,
                currentQuestion.originalSentence
            );

            // Show feedback
            feedbackMessage.style.display = 'block';

            if (isCorrect) {
                // Correct answer
                feedbackMessage.innerHTML = `
                    <p style="color: var(--correct-text); font-weight: bold; margin: 0;">Correct! You fixed the mistake.</p>
                    <p style="color: var(--correct-text); margin: 5px 0 0 0;">The correct phrasal verb is "${currentQuestion.correctPhrasalVerb}".</p>
                `;
                feedbackMessage.style.backgroundColor = 'var(--correct-bg)';
                feedbackMessage.style.border = '1px solid var(--correct-border)';

                this.findMistakeCorrectCount++;

                // Disable input and check button
                correctionInput.disabled = true;
                checkButton.disabled = true;

                // Show next button
                nextButton.style.opacity = '1';
                nextButton.style.pointerEvents = 'auto';
            } else {
                // Incorrect answer
                if (attemptCount >= maxAttempts) {
                    // Max attempts reached, show correct answer
                    feedbackMessage.innerHTML = `
                        <p style="color: var(--danger-text); font-weight: bold; margin: 0;">Not quite right.</p>
                        <p style="color: var(--body-1); margin: 5px 0 0 0;">The correct answer is: 
                            <span style="color: var(--correct-text); font-weight: bold;">${currentQuestion.correctPhrasalVerb}</span>
                        </p>
                        <p style="color: var(--body-1); margin: 5px 0 0 0;">The full sentence is: 
                            <span style="color: var(--correct-text); font-weight: bold;">${currentQuestion.originalSentence}</span>
                        </p>
                    `;
                    feedbackMessage.style.backgroundColor = 'var(--danger-bg)';
                    feedbackMessage.style.border = '1px solid var(--danger-border)';

                    // Disable input and check button
                    correctionInput.disabled = true;
                    checkButton.disabled = true;

                    // Show next button
                    nextButton.style.opacity = '1';
                    nextButton.style.pointerEvents = 'auto';
                } else {
                    // Still have attempts left
                    feedbackMessage.innerHTML = `
                        <p style="color: var(--danger-text); font-weight: bold; margin: 0;">Not quite right. Try again!</p>
                        <p style="color: var(--body-1); margin: 5px 0 0 0;">
                            You need to replace "${currentQuestion.incorrectPhrasalVerb}" with the correct phrasal verb.
                        </p>
                    `;
                    feedbackMessage.style.backgroundColor = 'var(--danger-bg)';
                    feedbackMessage.style.border = '1px solid var(--danger-border)';

                    // Show hint after first attempt
                    if (attemptCount === 1) {
                        hintContainer.style.display = 'block';
                    }
                }
            }
        });

        // Hint button functionality
        hintButton.addEventListener('click', () => {
            // Show hint with first letter(s) of the correct phrasal verb
            const correctVerb = currentQuestion.correctPhrasalVerb;
            const hintLength = Math.ceil(correctVerb.length / 3); // Show about 1/3 of the correct verb
            const hintText = correctVerb.substring(0, hintLength) + '...';

            hintContainer.innerHTML = `
                <p style="color: var(--body-1); margin: 5px 0;">
                    Hint: The correct phrasal verb starts with "${hintText}"
                </p>
            `;
        });

        // Next button functionality
        nextButton.addEventListener('click', () => {
            this.currentFindMistakeIndex++;
            this.showNextFindMistakeQuestion(modal);
        });

    } catch (error) {
        console.error('Error in showNextFindMistakeQuestion:', error);

        // Show error message
        contentArea.innerHTML = `
            <div style="color: #f87171; background: var(--danger-bg); padding: 20px; border-radius: 8px; text-align: center;">
                <p>An error occurred while preparing this question. Please try again.</p>
                <button class="retry-btn" style="background: #6366f1; color: #f8fafc; padding: 8px 24px; border-radius: 8px; border: none; cursor: pointer; margin-top: 16px;">
                    Continue to Next Training
                </button>
            </div>
        `;

        modal.querySelector('.retry-btn').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });
    }
};

// Check if the user's answer is correct - with improved flexibility
// Enhanced answer checking for Find the Mistake training mode
PhraseTraining.prototype.checkFindMistakeAnswer = function (userAnswer, correctPhrasalVerb, incorrectPhrasalVerb, originalSentence) {
    if (!userAnswer || userAnswer.trim() === '') return false;

    // Clean the strings for comparison
    const userCleaned = userAnswer.toLowerCase().trim();
    const correctVerbCleaned = correctPhrasalVerb.toLowerCase().trim();
    const incorrectVerbCleaned = incorrectPhrasalVerb.toLowerCase().trim();
    const originalSentenceCleaned = originalSentence.toLowerCase().trim();

    console.log("Checking answer:", {
        userAnswer: userCleaned,
        correctVerb: correctVerbCleaned,
        incorrectVerb: incorrectVerbCleaned,
        originalSentence: originalSentenceCleaned
    });

    // ---- Multiple checking approaches ----

    // 1. Direct match check - user entered just the correct phrasal verb
    if (userCleaned === correctVerbCleaned) {
        console.log("✓ Direct match: User entered exact correct phrasal verb");
        return true;
    }

    // 2. Full sentence check - user entered the complete original sentence
    if (userCleaned === originalSentenceCleaned) {
        console.log("✓ Full sentence: User entered exact original sentence");
        return true;
    }

    // 3. Substring check - the correct verb appears in the user's answer
    if (userCleaned.includes(correctVerbCleaned) && !userCleaned.includes(incorrectVerbCleaned)) {
        console.log("✓ Substring check: User's answer contains correct verb but not incorrect verb");
        return true;
    }

    // 4. Normalized variation check - handle common variations (spaces, hyphens, etc.)
    const normalizedUserAnswer = userCleaned.replace(/[-\s]+/g, ' ');
    const normalizedCorrectVerb = correctVerbCleaned.replace(/[-\s]+/g, ' ');

    if (normalizedUserAnswer === normalizedCorrectVerb) {
        console.log("✓ Normalized check: User entered correct phrasal verb with different spacing/formatting");
        return true;
    }

    // 5. Smart sentence comparison - check with flexibility for sentence structure
    if (this.areSentencesSimilar(userCleaned, originalSentenceCleaned, correctVerbCleaned, incorrectVerbCleaned)) {
        console.log("✓ Sentence similarity: User entered similar sentence with correction");
        return true;
    }

    // 6. Parts check - special handling for multi-word phrasal verbs
    const verbParts = correctVerbCleaned.split(' ');
    if (verbParts.length > 1) {
        // Check if all parts of the phrasal verb appear in the user's answer
        const allCorrectPartsPresent = verbParts.every(part => userCleaned.includes(part));

        // Check if all parts of the incorrect verb are absent
        const incorrectParts = incorrectVerbCleaned.split(' ');
        const allIncorrectPartsAbsent = incorrectParts.some(part => !userCleaned.includes(part));

        if (allCorrectPartsPresent && allIncorrectPartsAbsent) {
            console.log("✓ Parts check: All parts of correct phrasal verb present, some parts of incorrect verb absent");
            return true;
        }
    }

    // 7. Special case for phrasal verbs with prepositions (into, onto, etc.)
    // Handle cases where "in to" vs "into" or similar variations might cause issues
    if (this.checkPrepositionVariations(userCleaned, correctVerbCleaned, incorrectVerbCleaned)) {
        console.log("✓ Preposition variations: Accepted variation of preposition");
        return true;
    }

    // 8. Extremely permissive check for short answers (final fallback)
    if (userCleaned.length < 20 && this.isLikelyCorrectAnswer(userCleaned, correctVerbCleaned, incorrectVerbCleaned)) {
        console.log("✓ Permissive check: Short answer likely correct");
        return true;
    }

    console.log("✗ Incorrect answer: No check passed");
    return false;
};

// Helper function to check if sentences are similar enough
PhraseTraining.prototype.areSentencesSimilar = function (userSentence, originalSentence, correctVerb, incorrectVerb) {
    // Replace the incorrect verb with the correct one in the original sentence
    const correctedOriginalSentence = originalSentence.replace(correctVerb, incorrectVerb);

    // Calculate word-by-word comparison
    const userWords = userSentence.split(/\s+/);
    const originalWords = originalSentence.split(/\s+/);

    let matchCount = 0;
    let foundCorrectVerb = false;
    const correctVerbParts = correctVerb.split(/\s+/);

    // Check each word in the user's answer
    for (let i = 0; i < userWords.length; i++) {
        const word = userWords[i];

        // Check if this word is part of the correct phrasal verb
        if (correctVerbParts.includes(word)) {
            foundCorrectVerb = true;
        }

        // Check if this word appears in the original sentence
        if (originalWords.includes(word)) {
            matchCount++;
        }
    }

    // Calculate similarity percentage
    const totalWords = Math.max(userWords.length, originalWords.length);
    const similarity = matchCount / totalWords;

    // The sentence is similar enough if:
    // 1. It has a high similarity score (60% or more) AND
    // 2. It contains the correct phrasal verb or parts of it
    return similarity >= 0.6 && foundCorrectVerb;
};

// Helper to check variations of prepositions (in to/into, on to/onto, etc.)
PhraseTraining.prototype.checkPrepositionVariations = function (userAnswer, correctVerb, incorrectVerb) {
    // Common preposition variations
    const variations = [
        { single: 'into', split: 'in to' },
        { single: 'onto', split: 'on to' },
        { single: 'upon', split: 'up on' },
        { single: 'inside', split: 'in side' },
        { single: 'outside', split: 'out side' }
    ];

    for (const variation of variations) {
        // Check if correct verb contains the single form
        if (correctVerb.includes(variation.single)) {
            // Check if user wrote the split form instead
            const altCorrectVerb = correctVerb.replace(variation.single, variation.split);
            if (userAnswer.includes(altCorrectVerb)) {
                return true;
            }
        }

        // Check if correct verb contains the split form
        if (correctVerb.includes(variation.split)) {
            // Check if user wrote the single form instead
            const altCorrectVerb = correctVerb.replace(variation.split, variation.single);
            if (userAnswer.includes(altCorrectVerb)) {
                return true;
            }
        }

        // Special case for "flood into" and similar verbs that might be written as "flooded into"
        // Extract the base verb
        const verbBase = correctVerb.split(' ')[0];

        // Check for common verb forms (base, -ed, -ing, -s)
        const verbForms = [
            verbBase,
            verbBase + 'ed',
            verbBase + 'ing',
            verbBase + 's'
        ];

        // Check if any of these forms with the right preposition is in the answer
        for (const form of verbForms) {
            // Get the preposition part (everything after the first word)
            const prepPart = correctVerb.substring(correctVerb.indexOf(' '));
            const testVerb = form + prepPart;

            if (userAnswer.includes(testVerb)) {
                return true;
            }
        }
    }

    return false;
};

// Last resort permissive check for short answers
PhraseTraining.prototype.isLikelyCorrectAnswer = function (userAnswer, correctVerb, incorrectVerb) {
    // If the answer is very short, be more lenient
    if (userAnswer.length < 30) {
        // Extract the key words from both verbs (ignoring common prepositions)
        const extractKeywords = (phrase) => {
            return phrase.split(' ').filter(word =>
                !['in', 'on', 'at', 'to', 'from', 'with', 'by', 'for', 'of', 'the', 'a', 'an'].includes(word)
            );
        };

        const correctKeywords = extractKeywords(correctVerb);
        const incorrectKeywords = extractKeywords(incorrectVerb);

        // Check if the essential correct keywords are present and incorrect ones absent
        const hasCorrectKeywords = correctKeywords.some(keyword => userAnswer.includes(keyword));
        const hasIncorrectKeywords = incorrectKeywords.every(keyword => userAnswer.includes(keyword));

        return hasCorrectKeywords && !hasIncorrectKeywords;
    }

    return false;
};

// Calculate text similarity (0-1) for flexible answer checking
PhraseTraining.prototype.calculateSimilarity = function (s1, s2) {
    // Remove the phrasal verbs from comparison to focus on sentence structure
    const s1Words = s1.split(' ');
    const s2Words = s2.split(' ');

    // Count matching words (excluding the phrasal verb)
    let matchCount = 0;
    for (const word of s1Words) {
        if (s2Words.includes(word)) {
            matchCount++;
        }
    }

    // Calculate similarity ratio (0-1)
    const totalWords = Math.max(s1Words.length, s2Words.length);
    return matchCount / totalWords;
};

// Update the startNextMode method to include findMistake mode
PhraseTraining.prototype.startNextMode = function () {
    this.currentCardIndex = 0;
    this.isFlipped = false;

    const nextMode = this.activeModesSequence[this.currentModeIndex];
    console.log({
        currentModeIndex: this.currentModeIndex,
        nextMode,
        activeModesSequence: this.activeModesSequence,
        totalCorrectAnswers: this.totalCorrectAnswers
    });

    if (!nextMode) {
        console.log('No next mode, showing completion modal');
        this.showCompletionModal();
        return;
    }

    switch (nextMode) {
        case 'matchPictures':
            this.createMatchPicturesModal();
            break;
        case 'writePhrasalVerb':
            this.createWritePhrasalVerbModal();
            break;
        case 'fillGaps':
            this.createFillGapsModal();
            break;
        case 'chooseCorrectMeaning':
            this.createChooseCorrectMeaningModal();
            break;
        case 'trueOrFalse':  // Новый режим!
            this.createTrueOrFalseModal();
            break;
        case 'findMistake':
            this.createFindMistakeModal();
            break;
        default:
            this.currentModeIndex++;
            this.startNextMode();
    }
};