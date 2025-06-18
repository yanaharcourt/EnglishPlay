/* ============================================
Скрипт позволяет пользователю:
*выбирать фразы,
*отмечать их как изученные или возвращать обратно,
*запускать режим обучения,
*переключаться между вкладками («Изучается» / «Изучено»),
*видеть счётчик выбранных фраз и получать уведомления.
============================================ */
function loadPhrasesStatus() {
    // Получаем сохраненные статусы из localStorage
    const phrasesStatus = JSON.parse(localStorage.getItem('phrasesStatus') || '{}');

    // Применяем статусы к элементам на странице
    for (const phraseId in phrasesStatus) {
        const phraseElement = document.querySelector(`.phrase-card[data-id="${phraseId}"]`);
        if (phraseElement) {
            phraseElement.setAttribute('data-status', phrasesStatus[phraseId]);
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
    loadPhrasesStatus();
});
document.addEventListener('DOMContentLoaded', function () {
    // Элементы из оригинального кода
    const studyButton = document.querySelector('.study-button');
    const phrasesContainer = document.getElementById('phrasesContainer');
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

    // Исходные данные - фразы
    // Здесь будут храниться все фразы из HTML-структуры
    let phrasesData = [];
    let currentFavoriteFilter = 'all';

    // Инициализация данных фраз из HTML
    function initializePhrasesData() {
        const phraseCards = phrasesContainer.querySelectorAll('.phrase-card');

        phraseCards.forEach(card => {
            const id = parseInt(card.dataset.id);
            const phrase = card.querySelector('h3').textContent;
            const translation = card.querySelector('.phrase-translation').textContent;
            const example = card.querySelector('.phrase-example')?.textContent || '';
            const status = card.dataset.status || 'studying';
            const added = card.dataset.added || new Date().toISOString().split('T')[0];
            const favorite = card.querySelector('.favorite').classList.contains('active');

            phrasesData.push({
                id,
                phrase,
                translation,
                example,
                status,
                added,
                favorite
            });
        });
    }

    // Состояния
    let currentFilter = 'studying'; // По умолчанию показываем studying
    let currentSortType = 'date'; // По умолчанию сортировка по дате
    let originalStudyButtonText = studyButton ? studyButton.textContent : "Учить фразы";

    // Прогресс
    const learningProgress = JSON.parse(localStorage.getItem('learningProgress')) || {};

    // Функция для отображения фраз
    function renderPhrases() {
        if (!phrasesContainer) return;

        // Применяем поиск, фильтрацию и сортировку
        const searchText = searchInput ? searchInput.value.toLowerCase() : '';

        let filteredPhrases = phrasesData.filter(phrase => {
            // Поиск по тексту
            const matchesSearch =
                phrase.phrase.toLowerCase().includes(searchText) ||
                phrase.translation.toLowerCase().includes(searchText) ||
                (phrase.example && phrase.example.toLowerCase().includes(searchText));

            // Фильтр по статусу (studying/learned)
            const matchesStatusFilter = currentFilter === 'all' || phrase.status === currentFilter;

            // Фильтр по избранному
            const matchesFavoriteFilter = currentFavoriteFilter === 'all' ||
                (currentFavoriteFilter === 'favorites' && phrase.favorite);

            return matchesSearch && matchesStatusFilter && matchesFavoriteFilter;
        });

        // Сортировка
        if (currentSortType === 'alphabetical') {
            filteredPhrases.sort((a, b) => a.phrase.localeCompare(b.phrase));
        } else {
            // По дате добавления (от новых к старым)
            filteredPhrases.sort((a, b) => new Date(b.added) - new Date(a.added));
        }

        phrasesContainer.innerHTML = '';

        filteredPhrases.forEach(phrase => {
            const phraseCard = document.createElement('div');
            phraseCard.className = 'phrase-card';
            phraseCard.dataset.id = phrase.id;
            phraseCard.dataset.status = phrase.status;
            phraseCard.dataset.added = phrase.added;

            const favoriteClass = phrase.favorite ? 'active' : '';

            phraseCard.innerHTML = `
                <div class="phrase-header">
                    <div class="phrase-info">
                        <h3>${phrase.phrase}</h3>
                        <div class="phrase-translation">${phrase.translation}</div>
                        <div class="phrase-example">${phrase.example}</div>
                    </div>
                    <div class="phrase-actions">
                        <input type="checkbox" class="phrase-checkbox">
                        <button class="action-button favorite ${favoriteClass}" data-id="${phrase.id}">★</button>
                        <button class="action-button delete" data-id="${phrase.id}">✕</button>
                    </div>
                </div>
            `;

            phrasesContainer.appendChild(phraseCard);
        });

        // Добавление обработчиков для кнопок избранного
        document.querySelectorAll('.favorite').forEach(button => {
            button.addEventListener('click', function () {
                const id = parseInt(this.dataset.id);
                toggleFavorite(id);
            });
        });

        // Добавление обработчиков для кнопок удаления
        document.querySelectorAll('.delete').forEach(button => {
            button.addEventListener('click', function () {
                const id = parseInt(this.dataset.id);
                deletePhrase(id);
            });
        });

        updateCounter();
    }

    // Функция для обновления счетчика и интерфейса
    function updateCounter() {
        if (!wordCount) return;

        const visibleCards = phrasesContainer.querySelectorAll('.phrase-card');
        const checkedBoxes = Array.from(visibleCards).filter(card =>
            card.querySelector('.phrase-checkbox').checked
        );

        const totalVisible = visibleCards.length;
        const selectedCount = checkedBoxes.length;

        wordCount.textContent = selectedCount > 0
            ? `${selectedCount} из ${totalVisible} фраз`
            : `${totalVisible} фраз`;

        if (studyButton) {
            studyButton.textContent = selectedCount > 0
                ? `Учить фразы (${selectedCount})`
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

    // Функция для удаления фразы
    function deletePhrase(id) {
        const phraseIndex = phrasesData.findIndex(phrase => phrase.id === id);
        if (phraseIndex !== -1) {
            phrasesData.splice(phraseIndex, 1);
            renderPhrases();
            showNotification('Фраза удалена', 'warning');
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
    function startLearningMode(phrases) {
        // Заглушка для функции обучения
        console.log('Начинаем изучение фраз:', phrases);
        showNotification('Режим обучения запущен', 'success');
    }

    // Слушатели событий из оригинального кода
    if (phrasesContainer) {
        phrasesContainer.addEventListener('change', (e) => {
            if (e.target.classList.contains('phrase-checkbox')) updateCounter();
        });
    }

    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function () {
            const cards = phrasesContainer.querySelectorAll('.phrase-card');
            cards.forEach(card => card.querySelector('.phrase-checkbox').checked = this.checked);
            updateCounter();
        });
    }

    if (batchActionBack) {
        batchActionBack.addEventListener('click', () => {
            document.querySelectorAll('.phrase-checkbox').forEach(cb => cb.checked = false);
            if (selectAllCheckbox) {
                selectAllCheckbox.checked = false;
                selectAllCheckbox.indeterminate = false;
            }
            updateCounter();
        });
    }

    if (batchActionMarkLearned) {
        batchActionMarkLearned.addEventListener('click', () => {
            const checkedCards = phrasesContainer.querySelectorAll('.phrase-checkbox:checked');

            if (currentFilter === 'learned') {
                // Возвращаем фразы на изучение
                checkedCards.forEach(cb => {
                    const card = cb.closest('.phrase-card');
                    const id = parseInt(card.getAttribute('data-id'));
                    const phraseIndex = phrasesData.findIndex(p => p.id === id);

                    if (phraseIndex !== -1) {
                        phrasesData[phraseIndex].status = 'studying';
                        learningProgress[id] = 0; // Сбрасываем прогресс
                    }
                });
                saveProgress();
                renderPhrases();
                showNotification('Фразы возвращены на изучение', 'success');
            } else {
                // Отмечаем фразы как изученные
                checkedCards.forEach(cb => {
                    const card = cb.closest('.phrase-card');
                    const id = parseInt(card.getAttribute('data-id'));
                    const phraseIndex = phrasesData.findIndex(p => p.id === id);

                    if (phraseIndex !== -1) {
                        phrasesData[phraseIndex].status = 'learned';
                        learningProgress[id] = 100;
                    }
                });
                saveProgress();
                renderPhrases();
                showNotification('Фразы отмечены как изученные', 'success');
            }
        });
    }

    if (studyButton) {
        studyButton.addEventListener('click', () => {
            const checkedCards = phrasesContainer.querySelectorAll('.phrase-checkbox:checked');
            if (!checkedCards.length) return showNotification('Выберите фразы для изучения', 'warning');

            const phrases = Array.from(checkedCards).map(cb => {
                const card = cb.closest('.phrase-card');
                return {
                    id: card.getAttribute('data-id'),
                    text: card.querySelector('h3').textContent,
                    translation: card.querySelector('.phrase-translation').textContent,
                    example: card.querySelector('.phrase-example')?.textContent || ''
                };
            });

            startLearningMode(phrases);
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
                renderPhrases();
            });
        });
    }

    // Новые обработчики для фильтрации и сортировки
    if (searchInput) {
        searchInput.addEventListener('input', renderPhrases);
    }

    if (filterSelect) {
        filterSelect.addEventListener('change', function () {
            currentFavoriteFilter = this.value;
            renderPhrases();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            currentSortType = this.value;
            renderPhrases();
        });
    }

    // Инициализация
    initializePhrasesData();
    loadFavorites();
    renderPhrases();

    // Активируем нужную вкладку при загрузке
    document.querySelector('.switcher-btn.active')?.click();
});

/* ============================================
Скрипт для добавления кнопок управления идиомами
Восстанавливает функционал, аналогичный фразовым глаголам
============================================ */

document.addEventListener('DOMContentLoaded', function () {
    // Проверяем, что мы на странице идиом
    if (!document.querySelector('.idiom-card')) {
        return;
    }

    console.log('Initializing idioms buttons functionality...');

    // Функция для добавления управляющих кнопок к карточкам идиом
    function addButtonsToIdiomCards() {
        const idiomCards = document.querySelectorAll('.idiom-card');

        idiomCards.forEach(card => {
            // Проверяем, есть ли уже кнопки (чтобы не дублировать)
            const existingActions = card.querySelector('.idiom-actions');

            if (existingActions) {
                // Удаляем старые элементы, если они уже существуют (для обновления)
                existingActions.innerHTML = '';

                // Добавляем флажок (чекбокс)
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'idiom-checkbox';
                existingActions.appendChild(checkbox);

                // Добавляем кнопку избранного
                const favoriteBtn = document.createElement('button');
                favoriteBtn.className = 'action-button favorite';
                favoriteBtn.dataset.id = card.dataset.id;
                favoriteBtn.innerHTML = '★';

                // Проверяем, должна ли быть активна кнопка избранного
                const idiomsFavorites = JSON.parse(localStorage.getItem('idiomsFavorites') || '[]');
                if (idiomsFavorites.includes(parseInt(card.dataset.id))) {
                    favoriteBtn.classList.add('active');
                }

                existingActions.appendChild(favoriteBtn);

                // Добавляем кнопку удаления
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'action-button delete';
                deleteBtn.dataset.id = card.dataset.id;
                deleteBtn.innerHTML = '✕';
                existingActions.appendChild(deleteBtn);
            } else {
                // Создаем контейнер кнопок, если его нет
                const actionsContainer = document.createElement('div');
                actionsContainer.className = 'idiom-actions';

                // Добавляем флажок (чекбокс)
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'idiom-checkbox';
                actionsContainer.appendChild(checkbox);

                // Добавляем кнопку избранного
                const favoriteBtn = document.createElement('button');
                favoriteBtn.className = 'action-button favorite';
                favoriteBtn.dataset.id = card.dataset.id;
                favoriteBtn.innerHTML = '★';

                // Проверяем, должна ли быть активна кнопка избранного
                const idiomsFavorites = JSON.parse(localStorage.getItem('idiomsFavorites') || '[]');
                if (idiomsFavorites.includes(parseInt(card.dataset.id))) {
                    favoriteBtn.classList.add('active');
                }

                actionsContainer.appendChild(favoriteBtn);

                // Добавляем кнопку удаления
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'action-button delete';
                deleteBtn.dataset.id = card.dataset.id;
                deleteBtn.innerHTML = '✕';
                actionsContainer.appendChild(deleteBtn);

                // Находим заголовок карточки и добавляем кнопки после него
                const idiomHeader = card.querySelector('.idiom-header');
                if (idiomHeader) {
                    // Если header существует, добавляем в него кнопки
                    idiomHeader.appendChild(actionsContainer);
                } else {
                    // Если header не существует, создаем его
                    const idiomInfo = card.querySelector('.idiom-info');
                    const headerDiv = document.createElement('div');
                    headerDiv.className = 'idiom-header';

                    // Перемещаем информацию в заголовок
                    if (idiomInfo) {
                        card.insertBefore(headerDiv, idiomInfo);
                        headerDiv.appendChild(idiomInfo);
                        headerDiv.appendChild(actionsContainer);
                    } else {
                        // Если нет idiom-info, просто добавляем заголовок с кнопками
                        card.insertBefore(headerDiv, card.firstChild);
                        headerDiv.appendChild(actionsContainer);
                    }
                }
            }
        });

        // Добавляем обработчики событий для кнопок
        setupButtonEventHandlers();
    }

    // Функция для настройки обработчиков событий для кнопок
    function setupButtonEventHandlers() {
        // Обработчики для кнопок избранного
        document.querySelectorAll('.idiom-card .action-button.favorite').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                // Переключаем класс активности
                this.classList.toggle('active');

                // Сохраняем изменения в localStorage
                const idiomId = parseInt(this.dataset.id);
                const isActive = this.classList.contains('active');

                // Получаем текущие избранные
                let idiomsFavorites = JSON.parse(localStorage.getItem('idiomsFavorites') || '[]');

                if (isActive) {
                    // Добавляем в избранное, если еще нет
                    if (!idiomsFavorites.includes(idiomId)) {
                        idiomsFavorites.push(idiomId);
                    }
                    showNotification('Идиома добавлена в избранное', 'success');
                } else {
                    // Удаляем из избранного
                    idiomsFavorites = idiomsFavorites.filter(id => id !== idiomId);
                    showNotification('Идиома удалена из избранного', 'info');
                }

                // Сохраняем обновленный список
                localStorage.setItem('idiomsFavorites', JSON.stringify(idiomsFavorites));

                // Применяем фильтр, если мы в режиме "Избранное"
                const filterSelect = document.getElementById('filterSelect');
                if (filterSelect && filterSelect.value === 'favorites') {
                    const card = this.closest('.idiom-card');
                    if (!isActive && card) {
                        card.style.display = 'none';
                        card.classList.add('hidden');
                    }
                }

                // Обновляем счетчики
                if (typeof updateIdiomCounter === 'function') {
                    updateIdiomCounter();
                }
            });
        });

        // Обработчики для кнопок удаления
        document.querySelectorAll('.idiom-card .action-button.delete').forEach(button => {
            button.addEventListener('click', function () {
                const card = this.closest('.idiom-card');
                if (card) {
                    // Создаем подтверждение удаления
                    if (confirm('Вы уверены, что хотите удалить эту идиому?')) {
                        card.remove();
                        showNotification('Идиома удалена', 'warning');

                        // Обновляем счетчики
                        if (typeof updateIdiomCounter === 'function') {
                            updateIdiomCounter();
                        }
                    }
                }
            });
        });

        // Обработчики для чекбоксов
        document.querySelectorAll('.idiom-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                updateBatchActions();
                updateSelectedIdiomsCount();
            });
        });
    }

    // Функция для обновления счетчика выбранных идиом
    function updateSelectedIdiomsCount() {
        const selectedCount = document.querySelectorAll('.idiom-card:not(.hidden) .idiom-checkbox:checked').length;
        const totalVisible = document.querySelectorAll('.idiom-card:not(.hidden)').length;
        const wordCountElement = document.querySelector('.word-count');

        if (wordCountElement && selectedCount > 0) {
            wordCountElement.textContent = `${selectedCount} из ${totalVisible} ${getDeclension(totalVisible, 'идиома', 'идиомы', 'идиом')}`;
        } else if (wordCountElement) {
            wordCountElement.textContent = `${totalVisible} ${getDeclension(totalVisible, 'идиома', 'идиомы', 'идиом')}`;
        }

        // Обновляем текст кнопки изучения
        const studyButton = document.querySelector('.study-button');
        if (studyButton) {
            // Сохраняем оригинальный текст кнопки при первом вызове
            if (!studyButton.hasAttribute('data-original-text')) {
                const cleanText = studyButton.textContent.replace(/\s*\(\d+\)/, '');
                studyButton.setAttribute('data-original-text', cleanText);
            }

            const originalText = studyButton.getAttribute('data-original-text') || 'Учить идиомы';

            if (selectedCount > 0) {
                studyButton.textContent = `${originalText} (${selectedCount})`;
                studyButton.classList.add('selected');
            } else {
                studyButton.textContent = originalText;
                studyButton.classList.remove('selected');
            }
        }
    }

    // Функция для обновления видимости и состояния кнопок пакетных действий
    function updateBatchActions() {
        const checkedItems = document.querySelectorAll('.idiom-checkbox:checked').length;
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

        // Обновляем состояние кнопки "Выбрать все"
        updateSelectAllCheckbox();
    }

    // Функция для обновления состояния чекбокса "Выбрать все"
    function updateSelectAllCheckbox() {
        const selectAllCheckbox = document.querySelector('.select-all-checkbox');
        if (selectAllCheckbox) {
            const allCheckboxes = document.querySelectorAll('.idiom-card:not(.hidden) .idiom-checkbox');
            const checkedCheckboxes = document.querySelectorAll('.idiom-card:not(.hidden) .idiom-checkbox:checked');

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

    // Функция для инициализации обработчиков пакетных действий
    function initBatchActionsHandlers() {
        // Обработчик для кнопки "Назад" (отмена выбора)
        const batchActionBack = document.getElementById('batchActionBack');
        if (batchActionBack) {
            batchActionBack.addEventListener('click', function () {
                document.querySelectorAll('.idiom-checkbox').forEach(checkbox => {
                    checkbox.checked = false;
                });

                // Снимаем выбор со всех чекбоксов категорий
                document.querySelectorAll('.category-checkbox').forEach(checkbox => {
                    checkbox.checked = false;
                });

                // Сбрасываем чекбокс "Выбрать все"
                const selectAllCheckbox = document.querySelector('.select-all-checkbox');
                if (selectAllCheckbox) {
                    selectAllCheckbox.checked = false;
                    selectAllCheckbox.indeterminate = false;
                }

                updateBatchActions();

                // Обновляем счетчик идиом
                if (typeof updateIdiomCounter === 'function') {
                    updateIdiomCounter();
                } else {
                    updateSelectedIdiomsCount();
                }
            });
        }

        // Обработчик для кнопки "Отметить как изученные"/"Вернуть на изучение"
        const batchActionMarkLearned = document.getElementById('batchActionMarkLearned');
        if (batchActionMarkLearned) {
            batchActionMarkLearned.addEventListener('click', function () {
                const currentFilter = document.querySelector('.switcher-btn.active')?.getAttribute('data-filter') || 'studying';
                const checkedCards = document.querySelectorAll('.idiom-checkbox:checked');

                if (checkedCards.length === 0) return;

                // Получаем текущие статусы из localStorage
                let idiomsStatus = JSON.parse(localStorage.getItem('idiomsStatus') || '{}');

                if (currentFilter === 'learned') {
                    // Возвращаем идиомы на изучение
                    checkedCards.forEach(cb => {
                        const card = cb.closest('.idiom-card');
                        if (card) {
                            const id = card.getAttribute('data-id');
                            card.setAttribute('data-status', 'studying');

                            // Сохраняем изменение в localStorage
                            idiomsStatus[id] = 'studying';

                            // Скрываем карточку, если мы на вкладке "изучено"
                            card.classList.add('hidden');
                            card.style.display = 'none';
                        }
                    });

                    // Сохраняем обновленные статусы
                    localStorage.setItem('idiomsStatus', JSON.stringify(idiomsStatus));

                    // Показываем уведомление
                    showNotification('Идиомы возвращены на изучение', 'success');
                } else {
                    // Отмечаем идиомы как изученные
                    checkedCards.forEach(cb => {
                        const card = cb.closest('.idiom-card');
                        if (card) {
                            const id = card.getAttribute('data-id');
                            card.setAttribute('data-status', 'learned');

                            // Сохраняем изменение в localStorage
                            idiomsStatus[id] = 'learned';

                            // Скрываем карточку, если мы на вкладке "изучается"
                            card.classList.add('hidden');
                            card.style.display = 'none';
                        }
                    });

                    // Сохраняем обновленные статусы
                    localStorage.setItem('idiomsStatus', JSON.stringify(idiomsStatus));

                    // Показываем уведомление
                    showNotification('Идиомы отмечены как изученные', 'success');
                }

                // Сбрасываем выбор
                if (batchActionBack) batchActionBack.click();

                // Обновляем счетчики
                updateTabCounters();

                // Вызываем глобальную функцию обновления счетчика, если доступна
                if (typeof updateIdiomCounter === 'function') {
                    updateIdiomCounter();
                }
            });
        }

        // Обработчик для кнопки "Удалить"
        const batchActionDelete = document.getElementById('batchActionDelete');
        if (batchActionDelete) {
            batchActionDelete.addEventListener('click', function () {
                const checkedCards = document.querySelectorAll('.idiom-checkbox:checked');

                if (checkedCards.length === 0) return;

                // Запрашиваем подтверждение
                if (confirm(`Вы уверены, что хотите удалить выбранные идиомы (${checkedCards.length} шт.)?`)) {
                    checkedCards.forEach(cb => {
                        const card = cb.closest('.idiom-card');
                        if (card) {
                            card.remove();
                        }
                    });

                    // Показываем уведомление
                    showNotification('Выбранные идиомы удалены', 'warning');

                    // Сбрасываем выбор
                    if (batchActionBack) batchActionBack.click();

                    // Обновляем счетчики
                    if (typeof updateIdiomCounter === 'function') {
                        updateIdiomCounter();
                    } else {
                        updateSelectedIdiomsCount();
                    }
                }
            });
        }

        // Обработчик для чекбокса "Выбрать все"
        const selectAllCheckbox = document.querySelector('.select-all-checkbox');
        if (selectAllCheckbox) {
            selectAllCheckbox.addEventListener('change', function () {
                const isChecked = this.checked;

                // Выбираем/снимаем выбор со всех видимых идиом
                document.querySelectorAll('.idiom-card:not(.hidden) .idiom-checkbox').forEach(checkbox => {
                    checkbox.checked = isChecked;
                });

                // Обновляем кнопки пакетных действий
                updateBatchActions();

                // Обновляем счетчик выбранных идиом
                updateSelectedIdiomsCount();
            });
        }
    }

    // Функция для инициализации переключения вкладок
    function initTabSwitching() {
        const switcherBtns = document.querySelectorAll('.switcher-btn');
        if (switcherBtns.length === 0) return;

        switcherBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                // Снимаем активный класс со всех кнопок
                switcherBtns.forEach(b => b.classList.remove('active'));

                // Активируем текущую кнопку
                this.classList.add('active');

                // Получаем статус фильтра (studying/learned)
                const filterValue = this.getAttribute('data-filter');

                // Фильтруем идиомы по статусу
                filterIdiomsByStatus(filterValue);

                // Обновляем текст кнопок пакетных действий
                updateBatchActions();

                // Вызываем глобальную функцию обновления счетчика, если доступна
                if (typeof updateIdiomCounter === 'function') {
                    updateIdiomCounter();
                }
            });
        });
    }

    // Функция для фильтрации идиом по статусу (studying/learned)
    function filterIdiomsByStatus(status) {
        const idiomCards = document.querySelectorAll('.idiom-card');

        idiomCards.forEach(card => {
            const cardStatus = card.getAttribute('data-status') || 'studying';

            if (cardStatus === status) {
                card.classList.remove('hidden');
                card.style.display = '';
            } else {
                card.classList.add('hidden');
                card.style.display = 'none';
            }
        });

        // Сбрасываем все чекбоксы
        document.querySelectorAll('.idiom-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });

        // Обновляем счетчики идиом
        updateSelectedIdiomsCount();
        updateBatchActions();
    }

    // Функция для обновления счетчиков в табах (На изучении/Изучено)
    function updateTabCounters() {
        const studyingTab = document.querySelector('.switcher-btn[data-filter="studying"]');
        const learnedTab = document.querySelector('.switcher-btn[data-filter="learned"]');

        if (!studyingTab || !learnedTab) return;

        // Подсчитываем количество идиом в каждой категории
        const studyingCount = document.querySelectorAll('.idiom-card[data-status="studying"]').length;
        const learnedCount = document.querySelectorAll('.idiom-card[data-status="learned"]').length;

        // Обновляем тексты вкладок
        studyingTab.textContent = `На изучении(${studyingCount})`;
        learnedTab.textContent = `Изучено(${learnedCount})`;
    }

    // Функция для отображения уведомлений
    function showNotification(message, type = 'info') {
        // Проверяем, есть ли глобальная функция
        if (typeof window.showNotification === 'function') {
            window.showNotification(message, type);
            return;
        }

        // Иначе создаем свое уведомление
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            border-radius: 8px;
            z-index: 1001;
            background-color: ${type === 'success' ? 'var(--correct-bg)' :
                type === 'warning' ? 'var(--danger-bg)' :
                    'var(--neutral-bg)'};
            color: ${type === 'success' ? 'var(--correct-text)' :
                type === 'warning' ? 'var(--danger-text)' :
                    'var(--neutral-text)'};
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;

        document.body.appendChild(notification);

        // Удаляем уведомление через 3 секунды
        setTimeout(() => {
            notification.remove();
        }, 3000);
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

    // Инициализация всех функций
    function initializeAll() {
        // Добавляем кнопки к карточкам идиом
        addButtonsToIdiomCards();

        // Инициализируем обработчики пакетных действий
        initBatchActionsHandlers();

        // Инициализируем переключение вкладок
        initTabSwitching();

        // Обновляем счетчики в табах
        updateTabCounters();

        // Активируем первоначальный фильтр (по умолчанию "studying")
        const activeTab = document.querySelector('.switcher-btn.active');
        if (activeTab) {
            const filterValue = activeTab.getAttribute('data-filter');
            filterIdiomsByStatus(filterValue);
        } else {
            // Если нет активной вкладки, активируем "studying"
            const studyingTab = document.querySelector('.switcher-btn[data-filter="studying"]');
            if (studyingTab) {
                studyingTab.classList.add('active');
                filterIdiomsByStatus('studying');
            }
        }
    }

    // Запуск инициализации
    initializeAll();

    // Делаем функции доступными глобально (для использования в других скриптах)
    window.idiomButtonsManager = {
        addButtonsToIdiomCards,
        updateSelectedIdiomsCount,
        updateBatchActions,
        filterIdiomsByStatus,
        updateTabCounters,
        showNotification
    };

    // Экспортируем необходимые функции в глобальное пространство имен
    // (для совместимости с существующим кодом)
    if (typeof window.updateSelectedPhrasesCount !== 'function') {
        window.updateSelectedPhrasesCount = updateSelectedIdiomsCount;
    }

    if (typeof window.updateCategoryCheckboxes !== 'function') {
        window.updateCategoryCheckboxes = function () {
            document.querySelectorAll('.category-item').forEach(category => {
                const categoryId = category.getAttribute('data-category');
                const categoryCheckbox = document.querySelector(`.category-checkbox[data-category="${categoryId}"]`);

                if (categoryCheckbox) {
                    const idiomCheckboxes = document.querySelectorAll(`.idiom-card[data-category="${categoryId}"]:not(.hidden) .idiom-checkbox`);
                    const checkedIdiomCheckboxes = document.querySelectorAll(`.idiom-card[data-category="${categoryId}"]:not(.hidden) .idiom-checkbox:checked`);

                    // Если все идиомы категории выбраны, отмечаем чекбокс категории
                    if (idiomCheckboxes.length > 0 && checkedIdiomCheckboxes.length === idiomCheckboxes.length) {
                        categoryCheckbox.checked = true;
                    } else {
                        categoryCheckbox.checked = false;
                    }
                }
            });
        };
    }

    console.log('Idioms buttons functionality initialized successfully');
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
Cистема счетчиков для идиом 
============================================ */

// Функция для обновления счетчика идиом на странице
function updateIdiomCounter() {
    // Проверяем, что мы на странице идиом
    if (!document.querySelector('.idiom-card')) {
        console.log('Не найдены элементы .idiom-card, это не страница идиом');
        return;
    }

    console.log('Обновляем счетчик идиом...');

    const wordCountElement = document.querySelector('.word-count');
    if (!wordCountElement) {
        console.log('Не найден элемент .word-count');
        return;
    }

    // Получаем текущий активный фильтр
    const filterSelect = document.getElementById('filterSelect');
    const currentFilter = filterSelect ? filterSelect.value : 'all';
    console.log('Текущий фильтр:', currentFilter);

    // Получаем текущий статус (studying/learned)
    const activeBtn = document.querySelector('.switcher-btn.active');
    const currentStatus = activeBtn ? activeBtn.getAttribute('data-filter') : 'studying';
    console.log('Текущий статус:', currentStatus);

    // ВАЖНО: Показываем карточки с правильным статусом
    showCorrespondingIdioms(currentStatus, currentFilter);

    // Обновляем счетчики категорий
    updateCategoryCounters();

    // Сначала проверяем, есть ли выбранные идиомы
    const selectedCheckboxes = document.querySelectorAll('.idiom-card:not(.hidden) .idiom-checkbox:checked');
    const selectedCount = selectedCheckboxes.length;
    console.log('Выбрано идиом:', selectedCount);

    if (selectedCount > 0) {
        const totalVisible = document.querySelectorAll('.idiom-card:not(.hidden)').length;
        console.log('Всего видимых идиом:', totalVisible);

        // Склонение для идиом
        const itemWord = getDeclension(totalVisible, 'идиома', 'идиомы', 'идиом');
        const newText = `${selectedCount} из ${totalVisible} ${itemWord}`;
        console.log('Новый текст счетчика (выбранные):', newText);
        wordCountElement.textContent = newText;

        // Обновляем кнопку "Учить идиомы"
        updateStudyButton(selectedCount);

        return; // Завершаем функцию, так как счетчик уже обновлен
    } else {
        // Если нет выбранных, сбрасываем кнопку "Учить идиомы" в исходное состояние
        updateStudyButton(0);
    }

    // Если нет выбранных, считаем обычным образом
    if (currentFilter === 'favorites') {
        // В избранном считаем только те идиомы, где есть активная звездочка
        const idiomCards = document.querySelectorAll(`.idiom-card[data-status="${currentStatus}"]`);
        let count = 0;

        idiomCards.forEach(card => {
            // Проверяем, что карточка не скрыта
            if (card.style.display === 'none' || card.classList.contains('hidden')) {
                return;
            }

            const favoriteBtn = card.querySelector('.action-button.favorite');
            if (favoriteBtn && favoriteBtn.classList.contains('active')) {
                count++;
            }
        });

        console.log('Количество избранных идиом:', count);

        // Склонение для счетчика идиом
        const itemWord = getDeclension(count, 'идиома', 'идиомы', 'идиом');
        const newText = `${count} ${itemWord}`;
        console.log('Новый текст счетчика (избранные):', newText);
        wordCountElement.textContent = newText;
    } else {
        // Для общего фильтра считаем все видимые идиомы
        // Проверяем как непосредственно видимость, так и состояние
        const visibleIdioms = Array.from(document.querySelectorAll(`.idiom-card[data-status="${currentStatus}"]`))
            .filter(card => {
                return card.style.display !== 'none' && !card.classList.contains('hidden');
            });

        const count = visibleIdioms.length;
        console.log('Количество видимых идиом:', count);

        // Склонение для счетчика идиом
        const itemWord = getDeclension(count, 'идиома', 'идиомы', 'идиом');
        const newText = `${count} ${itemWord}`;
        console.log('Новый текст счетчика (все):', newText);
        wordCountElement.textContent = newText;
    }

    // Обновляем счетчики в табах "На изучении" и "Изучено"
    updateTabCounters();
}

// Функция для отображения соответствующих идиом в зависимости от статуса
function showCorrespondingIdioms(status, filter) {
    console.log(`Показываем идиомы со статусом: ${status}, фильтр: ${filter}`);

    // Получаем все карточки идиом
    const idiomCards = document.querySelectorAll('.idiom-card');

    // Обходим все карточки и показываем/скрываем в зависимости от статуса и фильтра
    idiomCards.forEach(card => {
        const cardStatus = card.getAttribute('data-status');
        const favoriteBtn = card.querySelector('.action-button.favorite');
        const isFavorite = favoriteBtn && favoriteBtn.classList.contains('active');

        // Определяем, должна ли карточка быть видимой
        let shouldDisplay = cardStatus === status;

        // Для фильтра "избранное" доп. проверка на избранное
        if (filter === 'favorites') {
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

    console.log(`Видимые идиомы: ${document.querySelectorAll('.idiom-card:not(.hidden)').length}`);
}

// Функция для обновления счетчиков в категориях
function updateCategoryCounters() {
    // Получаем все категории на странице
    const categories = document.querySelectorAll('.category-item');

    // Получаем текущий статус (studying/learned)
    const activeBtn = document.querySelector('.switcher-btn.active');
    const currentStatus = activeBtn ? activeBtn.getAttribute('data-filter') : 'studying';

    // Получаем текущий фильтр
    const filterSelect = document.getElementById('filterSelect');
    const currentFilter = filterSelect ? filterSelect.value : 'all';

    categories.forEach(category => {
        const categoryId = category.getAttribute('data-category');
        const countElement = category.querySelector('.category-count');

        if (!countElement) return;

        // Подсчет для общего фильтра
        if (currentFilter === 'all') {
            // Считаем все идиомы в категории с текущим статусом
            const count = document.querySelectorAll(`.idiom-card[data-category="${categoryId}"][data-status="${currentStatus}"]:not(.hidden)`).length;
            countElement.textContent = count;
        }
        // Подсчет для избранного
        else if (currentFilter === 'favorites') {
            // Считаем избранные идиомы в категории
            let count = 0;
            document.querySelectorAll(`.idiom-card[data-category="${categoryId}"][data-status="${currentStatus}"]`).forEach(card => {
                const favoriteBtn = card.querySelector('.action-button.favorite');
                if (favoriteBtn && favoriteBtn.classList.contains('active') &&
                    card.style.display !== 'none' && !card.classList.contains('hidden')) {
                    count++;
                }
            });
            countElement.textContent = count;
        }
    });

    console.log('Обновлены счетчики категорий');
}

// Функция для обновления счетчиков в табах "На изучении" и "Изучено"
function updateTabCounters() {
    // Получаем все вкладки
    const studyingTab = document.querySelector('.switcher-btn[data-filter="studying"]');
    const learnedTab = document.querySelector('.switcher-btn[data-filter="learned"]');

    if (!studyingTab || !learnedTab) {
        console.log('Не найдены вкладки "На изучении" или "Изучено"');
        return;
    }

    // Подсчет идиом на изучении
    const studyingCount = document.querySelectorAll('.idiom-card[data-status="studying"]').length;

    // Подсчет изученных идиом
    const learnedCount = document.querySelectorAll('.idiom-card[data-status="learned"]').length;

    console.log(`Идиом на изучении: ${studyingCount}, изучено: ${learnedCount}`);

    // Полностью заменяем текст вкладок
    // ИСПРАВЛЕНО: больше никаких дублирующихся скобок
    studyingTab.textContent = `На изучении(${studyingCount})`;
    learnedTab.textContent = `Изучено(${learnedCount})`;
}

// Функция для обновления кнопки "Учить идиомы"
function updateStudyButton(selectedCount) {
    const studyButton = document.querySelector('.study-button');
    if (!studyButton) {
        console.log('Не найдена кнопка .study-button');
        return;
    }

    // Сохраняем оригинальный текст кнопки при первом вызове
    if (!studyButton.hasAttribute('data-original-text')) {
        // Убираем возможные числа в скобках из исходного текста
        const cleanText = studyButton.textContent.replace(/\s*\(\d+\)/, '');
        studyButton.setAttribute('data-original-text', cleanText);
    }

    const originalText = studyButton.getAttribute('data-original-text') || 'Учить идиомы';

    if (selectedCount > 0) {
        // Обновляем текст кнопки с количеством выбранных идиом
        const newText = `${originalText} (${selectedCount})`;
        studyButton.textContent = newText;
        studyButton.classList.add('selected'); // Добавляем класс для стилизации
    } else {
        // Возвращаем оригинальный текст без числа в скобках
        studyButton.textContent = originalText;
        studyButton.classList.remove('selected'); // Удаляем класс
    }

    console.log(`Обновлена кнопка "Учить идиомы": ${studyButton.textContent}`);
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

// Функция для выбора/снятия выбора всех идиом в категории
function updateCategorySelection(categoryCheckbox) {
    if (!categoryCheckbox) return;

    // Получаем ID категории
    const categoryId = categoryCheckbox.getAttribute('data-category');
    if (!categoryId) return;

    const isChecked = categoryCheckbox.checked;

    // Находим все видимые идиомы в этой категории
    const idiomCheckboxes = document.querySelectorAll(`.idiom-card[data-category="${categoryId}"]:not(.hidden) .idiom-checkbox`);

    // Устанавливаем им всем такое же состояние
    idiomCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });

    // Обновляем счетчики и кнопку
    updateIdiomCounter();
}

// Функция для добавления обработчиков событий для счетчика идиом
function setupIdiomCounterEvents() {
    // Проверяем, что мы на странице идиом
    if (!document.querySelector('.idiom-card')) {
        console.log('Не устанавливаем обработчики: не найдены элементы .idiom-card');
        return;
    }

    console.log('Устанавливаем обработчики событий для счетчика идиом...');

    // Обработчик для выбора категории
    document.querySelectorAll('.category-checkbox').forEach(checkbox => {
        checkbox.removeEventListener('change', onCategoryCheckboxChange);
        checkbox.addEventListener('change', onCategoryCheckboxChange);
    });

    // Обработчик для фильтра (переключение между "все" и "избранные")
    const filterSelect = document.getElementById('filterSelect');
    if (filterSelect) {
        // Удаляем старый обработчик, если он уже был (чтобы не дублировать)
        filterSelect.removeEventListener('change', updateIdiomCounterWithDelay);
        // Добавляем новый обработчик
        filterSelect.addEventListener('change', updateIdiomCounterWithDelay);
        console.log('Установлен обработчик для filterSelect');
    } else {
        console.log('Не найден элемент #filterSelect');
    }

    // Обработчик для кнопок избранного
    const favoriteButtons = document.querySelectorAll('.idiom-card .action-button.favorite');
    console.log(`Найдено ${favoriteButtons.length} кнопок избранного`);

    favoriteButtons.forEach(button => {
        // Удаляем старый обработчик для обновления счетчика
        button.removeEventListener('click', updateIdiomCounterWithDelay);

        // Добавляем новый обработчик
        button.addEventListener('click', updateIdiomCounterWithDelay);
    });

    // Обработчики для чекбоксов идиом
    const idiomCheckboxes = document.querySelectorAll('.idiom-checkbox');
    console.log(`Найдено ${idiomCheckboxes.length} чекбоксов идиом`);

    idiomCheckboxes.forEach(checkbox => {
        // Удаляем старый обработчик
        checkbox.removeEventListener('change', updateIdiomCounter);
        // Добавляем новый обработчик
        checkbox.addEventListener('change', updateIdiomCounter);
    });

    // Обработчик для переключения вкладок (изучается/изучено)
    const switcherButtons = document.querySelectorAll('.switcher-btn');
    console.log(`Найдено ${switcherButtons.length} кнопок переключения вкладок`);

    switcherButtons.forEach(btn => {
        // Удаляем старый обработчик
        btn.removeEventListener('click', onTabButtonClick);
        // Добавляем новый обработчик
        btn.addEventListener('click', onTabButtonClick);
    });

    // Обработчик для кнопки "Назад" в пакетных действиях
    const batchActionBack = document.getElementById('batchActionBack');
    if (batchActionBack) {
        batchActionBack.removeEventListener('click', updateIdiomCounterWithDelay);
        batchActionBack.addEventListener('click', updateIdiomCounterWithDelay);
        console.log('Установлен обработчик для batchActionBack');
    }

    // Обработчик для selectAll чекбокса
    const selectAllCheckbox = document.querySelector('.select-all-checkbox');
    if (selectAllCheckbox) {
        selectAllCheckbox.removeEventListener('change', updateIdiomCounter);
        selectAllCheckbox.addEventListener('change', updateIdiomCounter);
        console.log('Установлен обработчик для selectAllCheckbox');
    }

    // Обработчик для кнопок пакетного действия (отметить как изученные)
    const batchActionMarkLearned = document.getElementById('batchActionMarkLearned');
    if (batchActionMarkLearned) {
        batchActionMarkLearned.removeEventListener('click', updateIdiomCounterWithDelay);
        batchActionMarkLearned.addEventListener('click', updateIdiomCounterWithDelay);
        console.log('Установлен обработчик для batchActionMarkLearned');
    }

    // Обработчики для поиска
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.removeEventListener('input', updateIdiomCounterWithDelay);
        searchInput.addEventListener('input', updateIdiomCounterWithDelay);
        console.log('Установлен обработчик для searchInput');
    }

    // Обработчик для изменений в DOM (MutationObserver)
    // Это поможет отслеживать, когда карточки скрываются или показываются
    const contentContainer = document.querySelector('.categories-container');
    if (contentContainer) {
        // Создаем наблюдатель за изменениями
        const observer = new MutationObserver(function (mutations) {
            console.log('Обнаружены изменения в DOM');
            // Задержка для того, чтобы DOM успел обновиться полностью
            setTimeout(updateIdiomCounter, 100);
        });

        // Начинаем наблюдение за изменениями классов и стилей
        observer.observe(contentContainer, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class', 'data-status']
        });

        console.log('Установлен MutationObserver для отслеживания изменений DOM');
    }

    console.log('Все обработчики для счетчика идиом установлены');
}

// Обработчик для клика по чекбоксу категории
function onCategoryCheckboxChange(e) {
    console.log('Сработало событие change для category-checkbox');
    // Предотвращаем всплытие события
    e.stopPropagation();
    // Обновляем выбор идиом в категории
    updateCategorySelection(e.target);
}

// Обработчик для клика по вкладке
function onTabButtonClick(e) {
    console.log('Сработало событие click для кнопки переключения вкладки:', this.dataset.filter);

    // Переключаем активную вкладку
    document.querySelectorAll('.switcher-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    // Принудительно перерисовываем карточки с нужным статусом
    const status = this.getAttribute('data-filter');
    const filterSelect = document.getElementById('filterSelect');
    const filter = filterSelect ? filterSelect.value : 'all';

    // Вызываем функцию отображения карточек с задержкой
    setTimeout(() => {
        showCorrespondingIdioms(status, filter);
        updateIdiomCounter();
    }, 50);
}

// Функция для обновления счетчика с задержкой
function updateIdiomCounterWithDelay() {
    console.log('Вызвана функция обновления счетчика с задержкой');
    setTimeout(updateIdiomCounter, 100);
}

// Инициализация счетчика идиом
function initIdiomCounter() {
    // Запускаем только если мы на странице идиом
    if (!document.querySelector('.idiom-card')) {
        console.log('Не запускаем initIdiomCounter: это не страница идиом');
        return;
    }

    console.log('Инициализация счетчика идиом...');

    // Исправляем изначальное отображение карточек идиом
    fixInitialIdiomDisplay();

    // Устанавливаем обработчики событий
    setupIdiomCounterEvents();

    // Первоначальное обновление счетчика
    // Добавляем небольшую задержку для уверенности, что DOM полностью загружен
    setTimeout(() => {
        updateIdiomCounter();
        updateTabCounters(); // Обновляем счетчики в табах
        updateCategoryCounters(); // Обновляем счетчики категорий
    }, 200);

    console.log('Счетчик идиом инициализирован');
}

// Функция для исправления изначального отображения карточек идиом
function fixInitialIdiomDisplay() {
    // Получаем текущую активную вкладку
    const activeTab = document.querySelector('.switcher-btn.active');
    const currentStatus = activeTab ? activeTab.getAttribute('data-filter') : 'studying';

    // Очищаем возможные дублирующиеся (0) в текстах вкладок
    document.querySelectorAll('.switcher-btn').forEach(tab => {
        // Удаляем возможные дублирующиеся (0) из текста
        const cleanText = tab.textContent.replace(/\(\d+\)(?:\(\d+\))+/, `(${0})`);
        tab.textContent = cleanText;
    });

    // Получаем текущий фильтр
    const filterSelect = document.getElementById('filterSelect');
    const currentFilter = filterSelect ? filterSelect.value : 'all';

    console.log(`Инициализация: статус=${currentStatus}, фильтр=${currentFilter}`);

    // Показываем соответствующие идиомы
    showCorrespondingIdioms(currentStatus, currentFilter);
}

// Запускаем инициализацию при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded: запускаем initIdiomCounter');
    initIdiomCounter();
});

// Также запускаем для случая, если DOM уже загружен
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('DOM уже загружен, запускаем initIdiomCounter немедленно');
    initIdiomCounter();
}

// Предотвращаем конфликты с существующими счетчиками для фразовых глаголов
console.log('Модуль счетчика идиом загружен');

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
Modal Window for Idioms
============================================ */
class IdiomTraining {
    constructor() {
        this.selectedIdioms = [];
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.count = 0;
        this.activeModesSequence = [];
        this.currentModeIndex = 0;
        this.trainingModes = {
            matchPictures: true,       // Match the Pictures to the Correct Idioms
            writeIdiom: true,          // Write the Correct Idiom Next to Its Definition
            fillGaps: false,           // Fill in the Gaps with the Correct Idiom
            chooseCorrectMeaning: false, // Read the statement and choose the correct meaning
            crossOutIncorrect: false,  // Cross out the incorrect words in each sentence
            findMistake: false         // Find the Mistake (error correction)
        };
        this.totalCorrectAnswers = 0; // Track total correct answers across all modes
    }

    initialize(selectedIdiomsCount) {
        // Get selected idioms to know their actual count
        this.selectedIdioms = this.getSelectedIdioms();

        // Use the count of actually selected idioms
        this.count = this.selectedIdioms.length;

        this.createTrainingModal(this.count);
    }

    getSelectedIdioms() {
        // Get selected idioms (with checked checkboxes)
        const selectedIdiomElements = document.querySelectorAll('.idiom-card:not(.hidden) .idiom-checkbox:checked');
        const idioms = [];

        // Create data structure for each selected idiom
        selectedIdiomElements.forEach(checkbox => {
            const idiomElement = checkbox.closest('.idiom-card');
            if (idiomElement) {
                const idiom = {
                    id: idiomElement.dataset.id,
                    text: idiomElement.querySelector('h3').textContent,
                    translation: idiomElement.querySelector('.idiom-translation').textContent,
                    example: idiomElement.querySelector('.idiom-example')?.textContent || '',
                    imageUrl: idiomElement.dataset.imageUrl || '',
                    synonyms: idiomElement.dataset.synonyms || '',
                    usage: idiomElement.dataset.usage || '',
                    similar: idiomElement.dataset.similar || '',
                    description: idiomElement.dataset.description || '',
                    extraExamples: idiomElement.dataset.extraExamples || ''
                };
                idioms.push(idiom);
            }
        });

        // If nothing selected, take idioms with "studying" status up to the required number
        if (idioms.length === 0) {
            const idiomsElements = document.querySelectorAll('.idiom-card[data-status="studying"]');
            const idiomsArray = Array.from(idiomsElements).slice(0, this.count || 5); // Default value 5 if count not set

            idiomsArray.forEach(idiomElement => {
                const idiom = {
                    id: idiomElement.dataset.id,
                    text: idiomElement.querySelector('h3').textContent,
                    translation: idiomElement.querySelector('.idiom-translation').textContent,
                    example: idiomElement.querySelector('.idiom-example')?.textContent || '',
                    imageUrl: idiomElement.dataset.imageUrl || '',
                    synonyms: idiomElement.dataset.synonyms || '',
                    usage: idiomElement.dataset.usage || '',
                    similar: idiomElement.dataset.similar || '',
                    description: idiomElement.dataset.description || '',
                    extraExamples: idiomElement.dataset.extraExamples || ''
                };
                idioms.push(idiom);
            });
        }

        return idioms;
    }

    createTrainingModal(selectedIdiomsCount) {
        // Remove existing modal if it exists
        const existingModal = document.getElementById('idiomTrainingModal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.id = 'idiomTrainingModal';
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

        // Count active modes
        const modesCount = Object.values(this.trainingModes).filter(Boolean).length;
        let modeWord;
        if (modesCount === 1) {
            modeWord = 'режим';
        } else if (modesCount > 1 && modesCount < 5) {
            modeWord = 'режима';
        } else {
            modeWord = 'режимов';
        }

        // Count of selected idioms for studying
        const selectedIdiomCount = this.selectedIdioms.length;

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
                            <h2 style="font-size: 30px; font-weight: 700; color: #f8fafc; margin-top: 45px;">Idiom Training</h2>
                        </div>
                        <p style="color: #b6b9d0; margin-top: 8px; font-size: 16px;">Выбрано идиом: ${selectedIdiomCount}</p>
                    </div>
                    
                    <div style="margin-top: 64px;">
                        <p style="color: #b6b9d0; margin-bottom: 24px; font-size: 16px;">Выберите количество идиом</p>
                        
                        <div class="idiom-count-controls" style="display: flex; align-items: center; justify-content: center; gap: 24px; margin-bottom: 64px;">
                            <button class="minus-btn control-btn">-</button>
                            <span class="idiom-count" style="font-size: 24px; color: #f8fafc;">${selectedIdiomsCount}</span>
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
        const idiomCountSpan = modal.querySelector('.idiom-count');

        minusBtn.addEventListener('click', () => {
            if (this.count > 1) {
                this.count--;
                idiomCountSpan.textContent = this.count;
            }
        });

        plusBtn.addEventListener('click', () => {
            // Maximum count is the number of selected idioms
            const maxCount = this.selectedIdioms.length;
            if (this.count < maxCount) {
                this.count++;
                idiomCountSpan.textContent = this.count;
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
        // Remove existing modal if it exists
        const existingModal = document.getElementById('idiomModesModalOverlay');
        if (existingModal) {
            existingModal.remove();
        }

        // Create darkened background behind the modes modal
        const overlay = document.createElement('div');
        overlay.id = 'idiomModesModalOverlay';
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
        modesModal.id = 'idiomModesModal';
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
            matchPictures: "Найдите соответствующие картинки для идиом",
            writeIdiom: "Напишите правильную идиому к определению",
            fillGaps: "Заполните пропуски правильной идиомой",
            chooseCorrectMeaning: "Прочитайте предложение и выберите правильное значение",
            crossOutIncorrect: "Вычеркните неправильные слова в каждом предложении",
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
            document.getElementById('idiomModesModalOverlay').remove();
        });

        // Cancel button
        modesModal.querySelector('.cancel-modes-btn').addEventListener('click', () => {
            document.getElementById('idiomModesModalOverlay').remove();
        });

        // Save button
        modesModal.querySelector('.save-modes-btn').addEventListener('click', () => {
            try {
                // First disable all modes
                for (const mode in this.trainingModes) {
                    this.trainingModes[mode] = false;
                }

                // Then enable only the selected ones
                let enabledModesCount = 0;
                modesModal.querySelectorAll('.mode-item').forEach(item => {
                    const checkbox = item.querySelector('.mode-checkbox');
                    const mode = item.dataset.mode;

                    if (checkbox && checkbox.checked) {
                        this.trainingModes[mode] = true;
                        enabledModesCount++;
                    }
                });

                console.log("Active modes after saving:", enabledModesCount);

                // Correct declension of "режим"
                let modeWord;
                if (enabledModesCount === 1) {
                    modeWord = 'режим';
                } else if (enabledModesCount >= 2 && enabledModesCount <= 4) {
                    modeWord = 'режима';
                } else {
                    modeWord = 'режимов';
                }

                // Update all settings buttons
                document.querySelectorAll('.settings-btn').forEach(btn => {
                    btn.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                        ${enabledModesCount} ${modeWord}
                    `;

                    // Save value in attribute for potential debugging
                    btn.setAttribute('data-modes-count', enabledModesCount);
                });

                // Close the modal
                document.getElementById('idiomModesModalOverlay').remove();

            } catch (error) {
                console.error("Error saving modes:", error);
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
            matchPictures: "Match the Pictures to the Correct Idioms",
            writeIdiom: "Write the Correct Idiom Next to Its Definition",
            fillGaps: "Fill in the Gaps with the Correct Idiom",
            chooseCorrectMeaning: "Read the Statement and Choose the Correct Meaning",
            crossOutIncorrect: "Cross Out the Incorrect Words in Each Sentence",
            findMistake: "Find the Mistake (error correction)"
        };
        return titles[mode] || mode;
    }

    startTraining() {
        console.log('Starting idiom training');
        this.activeModesSequence = [];

        // Add only active modes
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
            case 'writeIdiom':
                this.createWriteIdiomModal();
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
        const successRate = this.totalCorrectAnswers / totalPossibleAnswers;

        // Automatically move successfully learned idioms from "studying" to "learned"
        let autoMovedCount = 0;
        const learnedIdiomIds = []; // Array to store IDs of learned idioms

        if (successRate >= 0.8) {
            this.selectedIdioms.forEach(idiom => {
                const idiomElement = document.querySelector(`.idiom-card[data-id="${idiom.id}"][data-status="studying"]`);
                if (idiomElement) {
                    idiomElement.setAttribute('data-status', 'learned');
                    learnedIdiomIds.push(idiom.id); // Add idiom ID to learned array
                    autoMovedCount++;
                }
            });

            // Save changes to localStorage
            this.saveIdiomsStatus(learnedIdiomIds);
        }

        // Text about moved idioms
        const movedIdiomsText = autoMovedCount > 0
            ? `<p style="color: var(--correct-text); font-size: 16px; margin-bottom: 16px;">
                ${autoMovedCount} ${this.getDeclension(autoMovedCount, 'идиома', 'идиомы', 'идиом')} ${this.getDeclension(autoMovedCount, 'перемещена', 'перемещены', 'перемещено')} в раздел "Изучено".
              </p>`
            : '';

        modal.innerHTML = `
            <div style="background: #1e1e2e; width: 95vw; max-width: 500px; border-radius: 12px; padding: 32px; text-align: center;">
                <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 16px;">Все режимы тренировки завершены!</h2>
                <p style="color: #b6b9d0;<p style="color: #b6b9d0; font-size: 18px; margin-bottom: 16px;">
                    Отличная работа! Вы успешно завершили все выбранные режимы тренировки.
                </p>
                <p style="color: #b6b9d0; font-size: 18px; margin-bottom: ${autoMovedCount > 0 ? '8px' : '32px'};">
                    Общее количество правильных ответов: ${this.totalCorrectAnswers} из ${totalPossibleAnswers}
                    (${Math.round(successRate * 100)}%)
                </p>
                ${movedIdiomsText}
                <button class="close-completion" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; transition: background-color 0.3s ease;">
                Закрыть
                </button>
            </div>
        `;

        document.body.appendChild(modal);

        // Update idiom statistics
        const idiomStats = JSON.parse(localStorage.getItem('idiomStats') || '{}');

        this.selectedIdioms.forEach(idiom => {
            if (!idiomStats[idiom.text]) {
                idiomStats[idiom.text] = { successfulAttempts: 0, lastAttemptDate: null };
            }

            if (successRate >= 0.7) {
                const today = new Date().toDateString();
                if (idiomStats[idiom.text].lastAttemptDate !== today) {
                    idiomStats[idiom.text].successfulAttempts++;
                    idiomStats[idiom.text].lastAttemptDate = today;
                }
            }
        });

        localStorage.setItem('idiomStats', JSON.stringify(idiomStats));

        // If idioms were moved, update UI
        if (autoMovedCount > 0) {
            // Update category counts and filters if functions are available
            if (typeof updateCategoryCounts === 'function') {
                updateCategoryCounts();
            }
            if (typeof updateFilterCounts === 'function') {
                updateFilterCounts();
            }
        }

        window.dispatchEvent(new Event('storage'));

        modal.querySelector('.close-completion').addEventListener('click', () => {
            modal.remove();
            this.totalCorrectAnswers = 0;
        });
    }

    // Helper function for word declension
    getDeclension(number, one, two, five) {
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

    // Function to save idioms statuses to localStorage
    saveIdiomsStatus(learnedIdiomIds) {
        // Get current data from localStorage
        let idiomsStatus = JSON.parse(localStorage.getItem('idiomsStatus') || '{}');

        // Update idiom statuses
        learnedIdiomIds.forEach(id => {
            idiomsStatus[id] = 'learned';
        });

        // Save updated data
        localStorage.setItem('idiomsStatus', JSON.stringify(idiomsStatus));
    }

    // Helper functions for all modes
    getRandomIdioms(count) {
        // If count is greater than actual number of idioms, limit it
        count = Math.min(count, this.selectedIdioms.length);

        // If we have selected idioms, use them
        if (this.selectedIdioms.length > 0) {
            // Check if selected idioms contain imageUrl
            // If not, get this information from DOM
            const idiomsWithImages = this.selectedIdioms.map(idiom => {
                if (idiom.imageUrl) return idiom;

                // Find the card element by ID to get image URL
                const cardElement = document.querySelector(`.idiom-card[data-id="${idiom.id}"]`);
                if (cardElement && cardElement.dataset.imageUrl) {
                    return {
                        ...idiom,
                        imageUrl: cardElement.dataset.imageUrl
                    };
                }

                // If no imageUrl in DOM, use fallback
                return {
                    ...idiom,
                    imageUrl: this.getDefaultImageUrl(idiom.text)
                };
            });

            // Shuffle and take the specified count
            return this.shuffleArray([...idiomsWithImages]).slice(0, count);
        }

        // If no idioms specifically selected, return empty array
        return [];
    }

    getDefaultImageUrl(idiomText) {
        // Create URL for fallback image based on idiom text
        const keywords = encodeURIComponent(idiomText.replace(/\s+/g, ','));
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

    // Function to check answers with possible variations
    checkAnswer(userAnswer, correctAnswer) {
        // Convert to lowercase for comparison
        userAnswer = userAnswer.toLowerCase().trim();
        correctAnswer = correctAnswer.toLowerCase().trim();

        // Basic check for exact match
        if (userAnswer === correctAnswer) {
            return true;
        }

        // Check ignoring spaces and hyphens
        const normalizedUserAnswer = userAnswer.replace(/[-\s]/g, '');
        const normalizedCorrectAnswer = correctAnswer.replace(/[-\s]/g, '');

        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            return true;
        }

        // Check for typos (allow one error)
        if (this.levenshteinDistance(userAnswer, correctAnswer) <= 1) {
            return true;
        }

        return false;
    }

    // Function to calculate Levenshtein distance (for typo checking)
    levenshteinDistance(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;

        const matrix = [];

        // Initialize matrix
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }

        // Fill the matrix
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // substitution
                        Math.min(
                            matrix[i][j - 1] + 1, // insertion
                            matrix[i - 1][j] + 1  // deletion
                        )
                    );
                }
            }
        }

        return matrix[b.length][a.length];
    }

    // Functions for specific training modes
    createMatchPicturesModal() {
        console.log('Creating Match Pictures modal for idioms');

        // Get random idioms for this exercise (limited to this.count)
        const idiomsToUse = this.getRandomIdioms(this.count);

        if (idiomsToUse.length === 0) {
            console.log('No idioms available');
            this.currentModeIndex++;
            this.startNextMode();
            return;
        }

        // Create modal window
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

        // Initial HTML structure
        modal.innerHTML = `
            <div style="background: #1e1e2e; width: 90vw; max-width: 900px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
                <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                
                <div style="margin-bottom: 32px; text-align: center;">
                    <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">Match Pictures to Idioms</h2>
                    <p style="color: #b6b9d0;">Select the image that best matches the idiom</p>
                </div>
                
                <div class="progress-indicator" style="width: 100%; margin-bottom: 24px;">
                    <div class="progress-indicator-header" style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: var(--card-text-secondary); font-size: 14px;">Match Pictures to Idioms</span>
                        <span class="progress-indicator-label" style="color: var(--card-text-secondary); font-size: 14px;">1/${idiomsToUse.length}</span>
                    </div>
                    <div class="progress-indicator-bar" style="width: 100%; height: 4px; background: var(--card-bg-tertiary); border-radius: 2px; overflow: hidden;">
                        <div class="progress-indicator-fill" style="height: 100%; background: var(--accent-primary); border-radius: 2px; width: ${(1 / idiomsToUse.length) * 100}%;"></div>
                    </div>
                </div>
                
                <div id="match-pictures-content">
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
        this.currentMatchPicturesIndex = 0;
        this.matchPicturesCorrectCount = 0;
        this.matchPicturesData = idiomsToUse;
        this.showNextMatchPicturesQuestion(modal);
    }

    showNextMatchPicturesQuestion(modal) {
        const contentArea = modal.querySelector('#match-pictures-content');
        if (!contentArea) {
            console.error('Content area not found in the modal');
            return;
        }

        // Update progress indicator
        const progressIndicator = modal.querySelector('.progress-indicator-label');
        if (progressIndicator) {
            progressIndicator.textContent = `${this.currentMatchPicturesIndex + 1}/${this.matchPicturesData.length}`;
        }

        // Progress bar
        const progressFill = modal.querySelector('.progress-indicator-fill');
        if (progressFill) {
            progressFill.style.width = `${((this.currentMatchPicturesIndex + 1) / this.matchPicturesData.length) * 100}%`;
        }

        // Check if we've gone through all idioms
        if (this.currentMatchPicturesIndex >= this.matchPicturesData.length) {
            console.log('Completed Match Pictures mode');
            this.totalCorrectAnswers += this.matchPicturesCorrectCount;

            // Show completion screen for this mode
            contentArea.innerHTML = `
                <div style="text-align: center; padding: 32px;">
                    <h2 style="color: #f8fafc; font-size: 28px; margin-bottom: 16px;">Training Complete!</h2>
                    <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 24px;">
                        You correctly matched ${this.matchPicturesCorrectCount} out of ${this.matchPicturesData.length} idioms.
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
            // Get current idiom and prepare options
            const currentIdiom = this.matchPicturesData[this.currentMatchPicturesIndex];

            if (!currentIdiom) {
                console.error('Current idiom is undefined');
                return;
            }

            // Get 3 additional random idioms to use as distractors
            const otherIdioms = this.matchPicturesData.filter(idiom => idiom.id !== currentIdiom.id);
            const distractors = this.shuffleArray(otherIdioms).slice(0, 3);

            // Combine correct answer with distractors and shuffle
            const options = [currentIdiom, ...distractors].slice(0, 4);
            const shuffledOptions = this.shuffleArray(options);

            // Generate content for current question
            contentArea.innerHTML = `
                <div style="margin-bottom: 24px;">
                    <div class="idiom-to-match" style="background: #292a3e; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <h3 style="color: #f8fafc; font-size: 20px; margin: 0 0 8px 0;">${currentIdiom.text}</h3>
                        <p style="color: #b6b9d0; margin: 0;">${currentIdiom.translation}</p>
                        <p style="color: #b6b9d0; font-style: italic; margin: 8px 0 0 0;">${currentIdiom.example}</p>
                    </div>
                    
                    <div class="feedback-message" style="min-height: 40px; display: flex; align-items: center; justify-content: center;">
                        <p>Choose the image that best matches this idiom</p>
                    </div>
                </div>
                
                <div class="image-options-grid" style="display: flex; justify-content: space-between; width: 100%; margin: 0 auto; gap: 12px;">
                    ${shuffledOptions.map((option, index) => {
                return `
                            <div class="image-option" data-id="${option.id}" data-correct="${option.id === currentIdiom.id}" style="position: relative; overflow: hidden; border-radius: 8px; aspect-ratio: 1/1; cursor: pointer; border: 3px solid transparent; flex: 1;">
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

            // Add event handlers for image options
            const imageOptions = contentArea.querySelectorAll('.image-option');
            const feedbackMessage = contentArea.querySelector('.feedback-message');
            const nextButton = contentArea.querySelector('.next-question-btn');

            let selectedOption = null;

            imageOptions.forEach(option => {
                // Handle selection
                option.addEventListener('click', () => {
                    // If option already selected, ignore
                    if (selectedOption !== null) return;

                    selectedOption = option;
                    const isCorrect = option.dataset.correct === 'true';

                    // Style selected option
                    option.classList.add('selected');

                    if (isCorrect) {
                        option.style.borderColor = 'var(--correct-border)';
                        option.style.boxShadow = '0 0 0 3px var(--correct-bg)';
                        feedbackMessage.innerHTML = '<p style="color: var(--correct-text); font-weight: bold;">Correct! Well done!</p>';
                        this.matchPicturesCorrectCount++;
                    } else {
                        option.style.borderColor = 'var(--danger-border)';
                        option.style.boxShadow = '0 0 0 3px var(--danger-bg)';

                        // Highlight correct option
                        imageOptions.forEach(opt => {
                            if (opt.dataset.correct === 'true') {
                                opt.style.borderColor = 'var(--correct-border)';
                                opt.style.boxShadow = '0 0 0 3px var(--correct-bg)';
                            }
                        });

                        feedbackMessage.innerHTML = '<p style="color: var(--danger-text); font-weight: bold;">Incorrect. See the correct match highlighted.</p>';
                    }

                    // Show "Next" button
                    nextButton.style.opacity = '1';
                    nextButton.style.pointerEvents = 'auto';
                });
            });

            // Go to next question when button is clicked
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
    }

    createWriteIdiomModal() {
        console.log('Creating Write Idiom modal');

        // Get random idioms for this exercise
        const idiomsToUse = this.getRandomIdioms(this.count);

        if (idiomsToUse.length === 0) {
            console.log('No idioms available');
            this.currentModeIndex++;
            this.startNextMode();
            return;
        }

        // Create modal window
        const modal = document.createElement('div');
        modal.className = 'write-idiom-modal';
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

        // Initial HTML structure
        modal.innerHTML = `
            <div style="background: #1e1e2e; width: 90vw; max-width: 700px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
                <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                
                <div style="margin-bottom: 32px; text-align: center;">
                    <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">Write the Correct Idiom</h2>
                    <p style="color: #b6b9d0;">Type the idiom that matches the definition</p>
                </div>
                
                <div class="progress-indicator" style="width: 100%; margin-bottom: 24px;">
                    <div class="progress-indicator-header" style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: var(--card-text-secondary); font-size: 14px;">Write the Correct Idiom Next to Its Definition</span>
                        <span class="progress-indicator-label" style="color: var(--card-text-secondary); font-size: 14px;">1/${idiomsToUse.length}</span>
                    </div>
                    <div class="progress-indicator-bar" style="width: 100%; height: 4px; background: var(--card-bg-tertiary); border-radius: 2px; overflow: hidden;">
                        <div class="progress-indicator-fill" style="height: 100%; background: var(--accent-primary); border-radius: 2px; width: ${(1 / idiomsToUse.length) * 100}%;"></div>
                    </div>
                </div>
                
                <div id="write-idiom-content">
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
        this.currentWriteIdiomIndex = 0;
        this.writeIdiomCorrectCount = 0;
        this.writeIdiomData = idiomsToUse;
        this.showNextWriteIdiomQuestion(modal);
    }

    showNextWriteIdiomQuestion(modal) {
        const contentArea = modal.querySelector('#write-idiom-content');
        if (!contentArea) {
            console.error('Content area not found in the modal');
            return;
        }

        // Update progress indicator
        const progressIndicator = modal.querySelector('.progress-indicator-label');
        if (progressIndicator) {
            progressIndicator.textContent = `${this.currentWriteIdiomIndex + 1}/${this.writeIdiomData.length}`;
        }

        // Progress bar
        const progressFill = modal.querySelector('.progress-indicator-fill');
        if (progressFill) {
            progressFill.style.width = `${((this.currentWriteIdiomIndex + 1) / this.writeIdiomData.length) * 100}%`;
        }

        // Check if we've gone through all idioms
        if (this.currentWriteIdiomIndex >= this.writeIdiomData.length) {
            console.log('Completed Write Idiom mode');
            this.totalCorrectAnswers += this.writeIdiomCorrectCount;

            // Show completion screen for this mode
            contentArea.innerHTML = `
                <div style="text-align: center; padding: 32px;">
                    <h2 style="color: #f8fafc; font-size: 28px; margin-bottom: 16px;">Training Complete!</h2>
                    <p style="color: #b6b9d0; font-size: 18px; margin-bottom: 24px;">
                        You correctly wrote ${this.writeIdiomCorrectCount} out of ${this.writeIdiomData.length} idioms.
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
            // Get current idiom
            const currentIdiom = this.writeIdiomData[this.currentWriteIdiomIndex];

            if (!currentIdiom) {
                console.error('Current idiom is undefined');
                return;
            }

            // Generate content for current question
            contentArea.innerHTML = `
                <div style="margin-bottom: 32px; background: #292a3e; border-radius: 8px; padding: 20px;">
                    <h3 style="color: #f8fafc; font-size: 20px; margin: 0 0 16px 0;">Definition:</h3>
                    <p style="color: #b6b9d0; font-size: 18px; margin: 0;">${currentIdiom.translation}</p>
                </div>
                
                <div class="answer-area" style="margin-bottom: 32px;">
                    <label for="idiom-answer" style="display: block; color: #f8fafc; margin-bottom: 8px; font-size: 16px;">Enter the idiom:</label>
                    <div style="display: flex; gap: 16px;">
                        <input type="text" id="idiom-answer" style="flex: 1; padding: 12px 16px; background: #353748; border: 1px solid #4a4d6b; border-radius: 8px; color: #f8fafc; font-size: 16px;" placeholder="Type the idiom here...">
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

            // Add event handlers for input and buttons
            const answerInput = contentArea.querySelector('#idiom-answer');
            const checkButton = contentArea.querySelector('.check-answer-btn');
            const feedbackArea = contentArea.querySelector('.feedback-area');
            const feedbackMessage = contentArea.querySelector('.feedback-message');
            const exampleContainer = contentArea.querySelector('.example-container');
            const nextButton = contentArea.querySelector('.next-question-btn');

            // Auto-focus on input field
            setTimeout(() => {
                if (answerInput) {
                    answerInput.focus();
                }
            }, 100);

            // Handle Enter key press in input field
            if (answerInput) {
                answerInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' && checkButton) {
                        checkButton.click();
                    }
                });
            }

            // Handle answer checking
            if (checkButton) {
                checkButton.addEventListener('click', () => {
                    // Block further attempts
                    if (answerInput) answerInput.disabled = true;
                    checkButton.disabled = true;

                    const userAnswer = answerInput ? answerInput.value.trim() : '';
                    const correctAnswer = currentIdiom.text;

                    // Check answer
                    const isCorrect = this.checkAnswer(userAnswer.toLowerCase(), correctAnswer.toLowerCase());

                    // Show feedback area
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
                        this.writeIdiomCorrectCount++;
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

                    // Show example with correct idiom (only once)
                    if (currentIdiom.example && exampleContainer) {
                        // Create example with context
                        const exampleWithHighlight = currentIdiom.example.replace(
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

                    // Show "Next" button
                    if (nextButton) {
                        nextButton.style.opacity = '1';
                        nextButton.style.pointerEvents = 'auto';
                    }
                });
            }

            // Go to next question when button is clicked
            if (nextButton) {
                nextButton.addEventListener('click', () => {
                    this.currentWriteIdiomIndex++;
                    this.showNextWriteIdiomQuestion(modal);
                });
            }
        } catch (error) {
            console.error('Error in showNextWriteIdiomQuestion:', error);
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
    }

    createFillGapsModal() {
        console.log('Creating Fill Gaps modal for idioms');

        // Get random idioms for this exercise
        const idiomsToUse = this.getRandomIdioms(this.count);

        if (idiomsToUse.length === 0) {
            console.log('No idioms available');
            this.currentModeIndex++;
            this.startNextMode();
            return;
        }

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

        // Initial HTML structure with properly configured counter
        modal.innerHTML = `
            <div style="background: #1e1e2e; width: 90vw; max-width: 700px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
                <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                
                <div style="margin-bottom: 32px; text-align: center;">
                    <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">Fill in the Gaps</h2>
                    <p style="color: #b6b9d0;">Choose the correct idiom to complete each sentence</p>
                </div>
                
                <div style="margin-bottom: 24px; width: 100%;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: #b6b9d0; font-size: 14px;">Fill in the Gaps with the Correct Idiom</span>
                        <span style="color: #b6b9d0; font-size: 14px;" class="progress-indicator-label">1/${idiomsToUse.length}</span>
                    </div>
                    <div style="width: 100%; height: 4px; background: #292a3e; border-radius: 2px; overflow: hidden;">
                        <div class="progress-indicator-fill" style="width: ${(1 / idiomsToUse.length) * 100}%; height: 100%; background: #6366f1; border-radius: 2px;"></div>
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
        this.fillGapsData = idiomsToUse;

        // Prepare all available idioms from the page for answer options
        this.allIdioms = this.getAllIdioms();

        this.showNextFillGapsQuestion(modal);
    }

    // Function to get all idioms from the page
    getAllIdioms() {
        const idioms = [];

        // Get all idiom titles
        const idiomTitles = document.querySelectorAll('.idiom-card h3');
        idiomTitles.forEach(title => {
            const idiomText = title.textContent.trim();
            if (idiomText && !idioms.includes(idiomText)) {
                idioms.push(idiomText);
            }
        });

        // If less than 10 idioms found, add fallbacks
        if (idioms.length < 10) {
            const defaultIdioms = [
                "Break the ice", "Cost an arm and a leg", "Hit the nail on the head",
                "Miss the boat", "Under the weather", "Beat around the bush",
                "Cut corners", "In hot water", "On the ball", "Steal the show"
            ];

            defaultIdioms.forEach(idiom => {
                if (!idioms.includes(idiom)) {
                    idioms.push(idiom);
                }
            });
        }

        return idioms;
    }

    showNextFillGapsQuestion(modal) {
        const contentArea = modal.querySelector('#fill-gaps-content');

        // Update progress indicator in bar
        const progressIndicator = modal.querySelector('.progress-indicator-fill');
        if (progressIndicator) {
            progressIndicator.style.width = `${((this.currentFillGapsIndex + 1) / this.fillGapsData.length) * 100}%`;
        }

        // Update text progress counter
        const progressCounter = modal.querySelector('.progress-indicator-label');
        if (progressCounter) {
            progressCounter.textContent = `${this.currentFillGapsIndex + 1}/${this.fillGapsData.length}`;
        }

        // Check if we've gone through all idioms
        if (this.currentFillGapsIndex >= this.fillGapsData.length) {
            console.log('Completed Fill Gaps mode');
            this.totalCorrectAnswers += this.fillGapsCorrectCount;

            // Show completion screen for this mode
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

        // Get current idiom
        const currentIdiom = this.fillGapsData[this.currentFillGapsIndex];

        // Create example sentence with gap where the idiom should be
        const exampleSentence = this.processExampleWithGap(currentIdiom);

        // If unable to create gapped sentence, skip this idiom
        if (!exampleSentence) {
            console.warn(`Skipping idiom: ${currentIdiom.text} - could not create gapped sentence`);
            this.currentFillGapsIndex++;
            this.showNextFillGapsQuestion(modal);
            return;
        }

        // Create answer options (always 3 unique options)
        const options = this.generateIdiomOptions(currentIdiom);

        // Shuffle options
        const shuffledOptions = this.shuffleArray(options);

        // Generate content for current question
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

        // Save current question data for later use
        contentArea.dataset.correctText = currentIdiom.text;
        contentArea.dataset.originalSentence = exampleSentence.originalSentence;
        contentArea.dataset.gapPosition = JSON.stringify(exampleSentence.gapPosition);

        // Add event handlers for option buttons
        const optionButtons = contentArea.querySelectorAll('.option-btn');
        const feedbackMessage = contentArea.querySelector('.feedback-message');
        const gappedSentence = contentArea.querySelector('#gapped-sentence');
        const nextButton = contentArea.querySelector('.next-question-btn');

        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                // If option already selected, ignore
                if (feedbackMessage.style.display === 'block') return;

                const selectedText = button.dataset.text;
                const isCorrect = button.dataset.correct === 'true';
                const correctText = contentArea.dataset.correctText;
                const gapPosition = JSON.parse(contentArea.dataset.gapPosition);

                // Fill gap with selected option
                let filledSentence;

                if (isCorrect) {
                    // For correct answer
                    filledSentence = this.fillGapWithAnswer(
                        exampleSentence.processedSentence,
                        selectedText,
                        true
                    );
                } else {
                    // For incorrect answer (show strikethrough incorrect and correct answer)
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
                    feedbackMessage.innerHTML = `
                        <p style="color: var(--danger-text); font-weight: bold; margin: 0 0 8px 0;">Incorrect.</p>
                        <p style="color: var(--body-1); margin: 0;">The correct idiom is: <span style="color: var(--correct-text); font-weight: bold;">${correctText}</span></p>
                    `;
                    feedbackMessage.style.backgroundColor = 'var(--danger-bg)';
                    feedbackMessage.style.border = '1px solid var(--danger-border)';
                    button.style.backgroundColor = 'var(--danger-bg)';
                    button.style.borderColor = 'var(--danger-border)';

                    // Highlight correct option
                    optionButtons.forEach(btn => {
                        if (btn.dataset.correct === 'true') {
                            btn.style.backgroundColor = 'var(--correct-bg)';
                            btn.style.borderColor = 'var(--correct-border)';
                        }
                    });
                }

                // Show "Next" button
                nextButton.style.opacity = '1';
                nextButton.style.pointerEvents = 'auto';
            });
        });

        // Go to next question when button is clicked
        nextButton.addEventListener('click', () => {
            this.currentFillGapsIndex++;
            this.showNextFillGapsQuestion(modal);
        });
    }

    // Function to fill gap with answer
    fillGapWithAnswer(sentenceWithGap, answer, isCorrect, correctAnswer = null) {
        const gapPlaceholder = '<span class="gap-placeholder" style="background-color: var(--card-bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--body-1); font-weight: bold;">_____</span>';

        let replacement;
        if (isCorrect) {
            replacement = `<span style="color: var(--correct-text); font-weight: bold;">${answer}</span>`;
        } else {
            replacement = `<span style="color: var(--danger-text); font-weight: bold; text-decoration: line-through;">${answer}</span> <span style="color: var(--correct-text); font-weight: bold;">${correctAnswer}</span>`;
        }

        return sentenceWithGap.replace(gapPlaceholder, replacement);
    }

    // Function to generate answer options
    generateIdiomOptions(currentIdiom) {
        // Correct option
        const correctOption = {
            text: currentIdiom.text,
            isCorrect: true
        };

        // Filter list of all idioms to exclude correct answer
        const filteredIdioms = this.allIdioms.filter(idiom =>
            idiom !== currentIdiom.text
        );

        // Shuffle and take 2 random idioms for distractor options
        const distractors = this.shuffleArray(filteredIdioms).slice(0, 2).map(idiom => ({
            text: idiom,
            isCorrect: false
        }));

        // Return all 3 options
        return [correctOption, ...distractors];
    }

    // Function to process example and create gap in the right place
    processExampleWithGap(idiom) {
        const originalSentence = idiom.example;
        const idiomText = idiom.text;

        // Create regular expression to find idiom in the example
        const idiomRegex = new RegExp(idiomText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');
        const match = originalSentence.match(idiomRegex);

        if (match) {
            // Idiom found in example
            const matchedText = match[0]; // Full matched text
            const matchIndex = match.index;

            // Split sentence into parts
            const before = originalSentence.substring(0, matchIndex);
            const after = originalSentence.substring(matchIndex + matchedText.length);

            // Create gap
            const gapElement = '<span class="gap-placeholder" style="background-color: var(--card-bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--body-1); font-weight: bold;">_____</span>';

            // Assemble sentence with gap
            const processedSentence = before + gapElement + after;

            return {
                originalSentence: originalSentence,
                processedSentence: processedSentence,
                gapPosition: {
                    before: before,
                    matchedText: matchedText,
                    after: after
                }
            };
        }

        // Alternative approach: attempt more flexible match by lowercasing both
        const lowercaseIdiom = idiomText.toLowerCase();
        const lowercaseSentence = originalSentence.toLowerCase();
        const indexInLowercase = lowercaseSentence.indexOf(lowercaseIdiom);

        if (indexInLowercase !== -1) {
            const before = originalSentence.substring(0, indexInLowercase);
            const matchedText = originalSentence.substring(indexInLowercase, indexInLowercase + idiomText.length);
            const after = originalSentence.substring(indexInLowercase + idiomText.length);

            const gapElement = '<span class="gap-placeholder" style="background-color: var(--card-bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--body-1); font-weight: bold;">_____</span>';

            const processedSentence = before + gapElement + after;

            return {
                originalSentence: originalSentence,
                processedSentence: processedSentence,
                gapPosition: {
                    before: before,
                    matchedText: matchedText,
                    after: after
                }
            };
        }

        // Fallback: create artificial sentence with gap
        const artificialSentence = `When meeting new people, it's important to ${idiomText} to make everyone comfortable.`;
        const gapElement = '<span class="gap-placeholder" style="background-color: var(--card-bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--body-1); font-weight: bold;">_____</span>';
        const processedSentence = artificialSentence.replace(idiomText, gapElement);

        console.warn(`Could not find idiom "${idiomText}" in example: "${originalSentence}". Creating artificial sentence.`);

        return {
            originalSentence: artificialSentence,
            processedSentence: processedSentence,
            gapPosition: {
                before: "When meeting new people, it's important to ",
                matchedText: idiomText,
                after: " to make everyone comfortable."
            }
        };
    }

    // Add additional training modes as needed
    createChooseCorrectMeaningModal() {
        // Implementation for Choose Correct Meaning mode
        this.currentModeIndex++;
        this.startNextMode();
    }

    createCrossOutIncorrectModal() {
        // Implementation for Cross Out Incorrect mode
        this.currentModeIndex++;
        this.startNextMode();
    }

    createFindMistakeModal() {
        // Implementation for Find Mistake mode
        this.currentModeIndex++;
        this.startNextMode();
    }
}

// Initialize the idiom training when needed
document.addEventListener('DOMContentLoaded', function () {
    // Add study button event listener
    const studyButton = document.querySelector('.study-button');
    if (studyButton && document.querySelector('.idiom-card')) {
        studyButton.addEventListener('click', function () {
            const selectedIdioms = document.querySelectorAll('.idiom-card:not(.hidden) .idiom-checkbox:checked');
            if (selectedIdioms.length > 0) {
                const idiomTraining = new IdiomTraining();
                idiomTraining.initialize(selectedIdioms.length);
            } else {
                // If none selected, show idioms with "studying" status
                const studyingIdioms = document.querySelectorAll('.idiom-card[data-status="studying"]');
                if (studyingIdioms.length > 0) {
                    const idiomTraining = new IdiomTraining();
                    idiomTraining.initialize(studyingIdioms.length);
                } else {
                    alert('У вас нет идиом на изучении.');
                }
            }
        });
    }
});

/*--------------------------------------------------------------
# перенос идиомы в "Изучено"
--------------------------------------------------------------*/
IdiomTraining.prototype.showCompletionModal = function () {
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

    // Автоматически перемещаем успешно изученные идиомы из "На обучении" в "Изучено"
    let autoMovedCount = 0;
    const learnedIdiomIds = []; // Массив для хранения ID изученных идиом

    if (successRate >= 0.8) {
        this.selectedItems.forEach(idiom => {
            const idiomElement = document.querySelector(`.idiom-card[data-id="${idiom.id}"][data-status="studying"]`);
            if (idiomElement) {
                idiomElement.setAttribute('data-status', 'learned');
                learnedIdiomIds.push(idiom.id); // Добавляем ID идиомы в массив изученных
                autoMovedCount++;
            }
        });

        // Сохраняем изменения в localStorage
        this.saveIdiomsStatus(learnedIdiomIds);
    }

    // Текст о перемещенных идиомах
    const movedIdiomsText = autoMovedCount > 0
        ? `<p style="color: var(--correct-text); font-size: 16px; margin-bottom: 16px;">
            ${autoMovedCount} ${this.getDeclension(autoMovedCount, 'идиома', 'идиомы', 'идиом')} ${this.getDeclension(autoMovedCount, 'перемещена', 'перемещены', 'перемещено')} в раздел "Изучено".
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
            ${movedIdiomsText}
            <button class="close-completion" style="background: #6366f1; color: #f8fafc; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; transition: background-color 0.3s ease;">
            Закрыть
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Update idiom statistics
    const idiomStats = JSON.parse(localStorage.getItem('idiomStats') || '{}');

    this.selectedItems.forEach(idiom => {
        if (!idiomStats[idiom.text]) {
            idiomStats[idiom.text] = { successfulAttempts: 0, lastAttemptDate: null };
        }

        if (successRate >= 0.7) {
            const today = new Date().toDateString();
            if (idiomStats[idiom.text].lastAttemptDate !== today) {
                idiomStats[idiom.text].successfulAttempts++;
                idiomStats[idiom.text].lastAttemptDate = today;
            }
        }
    });

    localStorage.setItem('idiomStats', JSON.stringify(idiomStats));

    // Если идиомы были перемещены, обновляем UI
    if (autoMovedCount > 0) {
        // Обновляем счётчики категорий и фильтры, если функции доступны
        if (typeof updateCategoryCounts === 'function') {
            updateCategoryCounts();
        }
        if (typeof updateFilterCounts === 'function') {
            updateFilterCounts();
        }
    }

    window.dispatchEvent(new Event('storage'));

    modal.querySelector('.close-completion').addEventListener('click', () => {
        modal.remove();
        this.totalCorrectAnswers = 0;
    });
};

// Добавим вспомогательную функцию для склонения слов
IdiomTraining.prototype.getDeclension = function (number, one, two, five) {
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

// Функция для сохранения статусов идиом в localStorage
IdiomTraining.prototype.saveIdiomsStatus = function (learnedIdiomIds) {
    // Получаем текущие данные из localStorage
    let idiomsStatus = JSON.parse(localStorage.getItem('idiomsStatus') || '{}');

    // Обновляем статусы идиом
    learnedIdiomIds.forEach(id => {
        idiomsStatus[id] = 'learned';
    });

    // Сохраняем обновленные данные
    localStorage.setItem('idiomsStatus', JSON.stringify(idiomsStatus));
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

PhraseTraining.prototype.createFillGapsModal = function () {
    console.log('Creating Fill Gaps modal');

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

    // Начальная HTML-структура с правильно настроенным счетчиком
    modal.innerHTML = `
        <div style="background: #1e1e2e; width: 90vw; max-width: 700px; height: 90vh; border-radius: 12px; padding: 24px; overflow-y: auto; position: relative;">
            <button class="close-modal" style="position: absolute; top: 16px; right: 16px; color: #b6b9d0; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
            
            <div style="margin-bottom: 32px; text-align: center;">
                <h2 style="color: #f8fafc; font-size: 24px; margin-bottom: 8px;">Fill in the Gaps</h2>
                <p style="color: #b6b9d0;">Choose the correct phrasal verb to complete each sentence</p>
            </div>
            
            <div style="margin-bottom: 24px; width: 100%;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #b6b9d0; font-size: 14px;">Fill in the Gaps with the Correct Phrasal Verb</span>
                    <span style="color: #b6b9d0; font-size: 14px;" class="progress-indicator-label">1/${phrasesToUse.length}</span>
                </div>
                <div style="width: 100%; height: 4px; background: #292a3e; border-radius: 2px; overflow: hidden;">
                    <div class="progress-indicator-fill" style="width: ${(1 / phrasesToUse.length) * 100}%; height: 100%; background: #6366f1; border-radius: 2px;"></div>
                </div>
            </div>
            
            <div id="fill-gaps-content">
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
    this.currentFillGapsIndex = 0;
    this.fillGapsCorrectCount = 0;
    this.fillGapsData = phrasesToUse;

    // Подготавливаем все доступные фразовые глаголы со страницы для вариантов ответа
    this.allPhrasalVerbs = this.getAllPhrasalVerbs();

    this.showNextFillGapsQuestion(modal);
};

// Функция для получения всех фразовых глаголов со страницы
PhraseTraining.prototype.getAllPhrasalVerbs = function () {
    const verbs = [];

    // Получаем все заголовки фразовых глаголов
    const phraseTitles = document.querySelectorAll('.phrase-card h3');
    phraseTitles.forEach(title => {
        const verbText = title.textContent.trim();
        if (verbText && !verbs.includes(verbText)) {
            verbs.push(verbText);
        }
    });

    // Если найдено менее 10 глаголов, добавляем запасные
    if (verbs.length < 10) {
        const defaultPhrasalVerbs = [
            "Look down on", "Fit in with", "Pack into", "Ask after", "Gang up on",
            "Wear down", "Flood in(to)", "Spill out", "Watch over", "Turn on",
            "Butter up", "Fuss over", "Look up to", "Gather up", "Part with",
            "Come across", "Get back from", "Turn up", "Look after", "Grow up",
            "Get along with", "Fall out", "Make up", "Break down", "Keep up with",
            "Hold on", "Give up", "Run into", "Move on", "Put off"
        ];

        defaultPhrasalVerbs.forEach(verb => {
            if (!verbs.includes(verb)) {
                verbs.push(verb);
            }
        });
    }

    return verbs;
};

PhraseTraining.prototype.showNextFillGapsQuestion = function (modal) {
    const contentArea = modal.querySelector('#fill-gaps-content');

    // Обновляем индикатор прогресса в полосе
    const progressIndicator = modal.querySelector('.progress-indicator-fill');
    if (progressIndicator) {
        progressIndicator.style.width = `${((this.currentFillGapsIndex + 1) / this.fillGapsData.length) * 100}%`;
    }

    // Обновляем текстовый счетчик прогресса
    const progressCounter = modal.querySelector('.progress-indicator-label');
    if (progressCounter) {
        progressCounter.textContent = `${this.currentFillGapsIndex + 1}/${this.fillGapsData.length}`;
    }

    // Проверяем, прошли ли мы все фразы
    if (this.currentFillGapsIndex >= this.fillGapsData.length) {
        console.log('Completed Fill Gaps mode');
        this.totalCorrectAnswers += this.fillGapsCorrectCount;

        // Показываем экран завершения для этого режима
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

    // Получаем текущую фразу
    const currentPhrase = this.fillGapsData[this.currentFillGapsIndex];

    // Создаем пример предложения с пропуском на месте фразового глагола
    const exampleSentence = this.processExampleWithGap(currentPhrase);

    // Если не удалось создать предложение с пропуском, пропускаем эту фразу
    if (!exampleSentence) {
        console.warn(`Skipping phrase: ${currentPhrase.text} - could not create gapped sentence`);
        this.currentFillGapsIndex++;
        this.showNextFillGapsQuestion(modal);
        return;
    }

    // Создаем варианты ответов (всегда 3 уникальных варианта)
    const options = this.generatePhrasalVerbOptions(currentPhrase);

    // Перемешиваем варианты
    const shuffledOptions = this.shuffleArray(options);

    // Генерируем контент для текущего вопроса
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

    // Сохраняем данные о текущем вопросе для дальнейшего использования
    contentArea.dataset.correctText = currentPhrase.text;
    contentArea.dataset.originalSentence = exampleSentence.originalSentence;
    contentArea.dataset.gapPosition = JSON.stringify(exampleSentence.gapPosition);

    // Добавляем обработчики событий для кнопок вариантов
    const optionButtons = contentArea.querySelectorAll('.option-btn');
    const feedbackMessage = contentArea.querySelector('.feedback-message');
    const gappedSentence = contentArea.querySelector('#gapped-sentence');
    const nextButton = contentArea.querySelector('.next-question-btn');

    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Если уже выбран вариант, игнорируем
            if (feedbackMessage.style.display === 'block') return;

            const selectedText = button.dataset.text;
            const isCorrect = button.dataset.correct === 'true';
            const correctText = contentArea.dataset.correctText;
            const gapPosition = JSON.parse(contentArea.dataset.gapPosition);

            // Заполняем пропуск выбранным вариантом
            let filledSentence;

            if (isCorrect) {
                // Для правильного ответа
                filledSentence = this.fillGapWithAnswer(
                    exampleSentence.processedSentence,
                    selectedText,
                    true
                );
            } else {
                // Для неправильного ответа (показываем зачеркнутый неверный и правильный ответ)
                filledSentence = this.fillGapWithAnswer(
                    exampleSentence.processedSentence,
                    selectedText,
                    false,
                    correctText
                );
            }

            gappedSentence.innerHTML = filledSentence;

            // Показываем обратную связь
            feedbackMessage.style.display = 'block';

            if (isCorrect) {
                feedbackMessage.innerHTML = `<p style="color: var(--correct-text); font-weight: bold; margin: 0;">Correct! Well done!</p>`;
                feedbackMessage.style.backgroundColor = 'var(--correct-bg)';
                feedbackMessage.style.border = '1px solid var(--correct-border)';
                button.style.backgroundColor = 'var(--correct-bg)';
                button.style.borderColor = 'var(--correct-border)';
                this.fillGapsCorrectCount++;
            } else {
                feedbackMessage.innerHTML = `
                    <p style="color: var(--danger-text); font-weight: bold; margin: 0 0 8px 0;">Incorrect.</p>
                    <p style="color: var(--body-1); margin: 0;">The correct phrasal verb is: <span style="color: var(--correct-text); font-weight: bold;">${correctText}</span></p>
                `;
                feedbackMessage.style.backgroundColor = 'var(--danger-bg)';
                feedbackMessage.style.border = '1px solid var(--danger-border)';
                button.style.backgroundColor = 'var(--danger-bg)';
                button.style.borderColor = 'var(--danger-border)';

                // Выделяем правильный вариант
                optionButtons.forEach(btn => {
                    if (btn.dataset.correct === 'true') {
                        btn.style.backgroundColor = 'var(--correct-bg)';
                        btn.style.borderColor = 'var(--correct-border)';
                    }
                });
            }

            // Показываем кнопку "Далее"
            nextButton.style.opacity = '1';
            nextButton.style.pointerEvents = 'auto';
        });
    });

    // Переходим к следующему вопросу при нажатии кнопки
    nextButton.addEventListener('click', () => {
        this.currentFillGapsIndex++;
        this.showNextFillGapsQuestion(modal);
    });
};

// Функция для заполнения пропуска ответом
PhraseTraining.prototype.fillGapWithAnswer = function (sentenceWithGap, answer, isCorrect, correctAnswer = null) {
    const gapPlaceholder = '<span class="gap-placeholder" style="background-color: var(--card-bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--body-1); font-weight: bold;">_____</span>';

    let replacement;
    if (isCorrect) {
        replacement = `<span style="color: var(--correct-text); font-weight: bold;">${answer}</span>`;
    } else {
        replacement = `<span style="color: var(--danger-text); font-weight: bold; text-decoration: line-through;">${answer}</span> <span style="color: var(--correct-text); font-weight: bold;">${correctAnswer}</span>`;
    }

    return sentenceWithGap.replace(gapPlaceholder, replacement);
};

// Функция для генерации вариантов ответа
PhraseTraining.prototype.generatePhrasalVerbOptions = function (currentPhrase) {
    // Правильный вариант
    const correctOption = {
        text: currentPhrase.text,
        isCorrect: true
    };

    // Фильтруем список всех фразовых глаголов, чтобы исключить правильный ответ
    const filteredVerbs = this.allPhrasalVerbs.filter(verb =>
        verb !== currentPhrase.text
    );

    // Перемешиваем и берем 2 случайных глагола для отвлекающих вариантов
    const distractors = this.shuffleArray(filteredVerbs).slice(0, 2).map(verb => ({
        text: verb,
        isCorrect: false
    }));

    // Возвращаем все 3 варианта
    return [correctOption, ...distractors];
};

// Функция для обработки примера и создания пропуска в правильном месте
PhraseTraining.prototype.processExampleWithGap = function (phrase) {
    const originalSentence = phrase.example;
    const phraseText = phrase.text;

    // Создаем регулярное выражение для поиска фразового глагола в разных формах
    const baseForm = phraseText.toLowerCase();

    // Разбиваем фразовый глагол на части для более гибкого поиска
    const parts = baseForm.split(' ');
    const verb = parts[0]; // первое слово (глагол)

    // Составляем основу регулярного выражения, допуская разные формы глагола
    const verbRegex = `(${verb}|${verb}s|${verb}ing|${verb}ed)`;

    // Собираем полное регулярное выражение с учетом остальных частей фразового глагола
    const restParts = parts.slice(1).join(' ');
    const fullRegex = new RegExp(`${verbRegex}\\s+${restParts.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'i');

    const match = originalSentence.match(fullRegex);

    if (match) {
        // Фразовый глагол найден в примере
        const matchedText = match[0]; // Полный найденный текст
        const matchIndex = match.index;

        // Разделяем предложение на части
        const before = originalSentence.substring(0, matchIndex);
        const after = originalSentence.substring(matchIndex + matchedText.length);

        // Создаем пропуск
        const gapElement = '<span class="gap-placeholder" style="background-color: var(--card-bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--body-1); font-weight: bold;">_____</span>';

        // Собираем предложение с пропуском
        const processedSentence = before + gapElement + after;

        return {
            originalSentence: originalSentence,
            processedSentence: processedSentence,
            gapPosition: {
                before: before,
                matchedText: matchedText,
                after: after
            }
        };
    }

    // Альтернативный подход, если регулярное выражение не сработало
    // Ищем точное вхождение фразового глагола
    const exactMatch = originalSentence.toLowerCase().indexOf(baseForm.toLowerCase());

    if (exactMatch !== -1) {
        const before = originalSentence.substring(0, exactMatch);
        const after = originalSentence.substring(exactMatch + baseForm.length);

        const gapElement = '<span class="gap-placeholder" style="background-color: var(--card-bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--body-1); font-weight: bold;">_____</span>';

        const processedSentence = before + gapElement + after;

        return {
            originalSentence: originalSentence,
            processedSentence: processedSentence,
            gapPosition: {
                before: before,
                matchedText: phraseText,
                after: after
            }
        };
    }

    // Запасной вариант: создаем искусственное предложение с пропуском
    const artificialSentence = `She ${phraseText} her friends whenever she can.`;
    const gapElement = '<span class="gap-placeholder" style="background-color: var(--card-bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--body-1); font-weight: bold;">_____</span>';
    const processedSentence = artificialSentence.replace(phraseText, gapElement);

    console.warn(`Could not find phrasal verb "${phraseText}" in example: "${originalSentence}". Creating artificial sentence.`);

    return {
        originalSentence: artificialSentence,
        processedSentence: processedSentence,
        gapPosition: {
            before: 'She ',
            matchedText: phraseText,
            after: ' her friends whenever she can.'
        }
    };
};

// Обновляем метод startNextMode, чтобы включить fillGaps
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
        case 'matchSynonyms':
            this.currentModeIndex++;
            this.startNextMode();
            break;
        case 'chooseCorrect':
            this.currentModeIndex++;
            this.startNextMode();
            break;
        case 'fillGapsCorrectForm':
            this.currentModeIndex++;
            this.startNextMode();
            break;
        case 'findMistake':
            this.currentModeIndex++;
            this.startNextMode();
            break;
        case 'completeSentences':
            this.currentModeIndex++;
            this.startNextMode();
            break;
        default:
            this.currentModeIndex++;
            this.startNextMode();
    }
};