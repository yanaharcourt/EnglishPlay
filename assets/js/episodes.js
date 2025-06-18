/* ============================================
Vocab
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.play-audio').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const word = this.closest('.word-line').querySelector('.word').textContent;

            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;

            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);

            this.classList.add('playing');

            utterance.onend = () => {
                this.classList.remove('playing');
            };
        });
    });

    document.querySelectorAll('.checkbox-container input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.removeAttribute('checked');
    });

    document.querySelectorAll('.add-to-dictionary').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const popup = document.querySelector('.dictionary-popup');
            popup.style.display = 'block';

            setTimeout(() => {
                popup.style.display = 'none';
            }, 2000);
        });
    });

    document.querySelectorAll('.close-popup').forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.dictionary-popup').style.display = 'none';
        });
    });
});

document.addEventListener('click', function (e) {
    if (e.target.closest('.dictionary-popup')) return;
    const popup = document.querySelector('.dictionary-popup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    }
});

window.addEventListener('load', function () {
    window.speechSynthesis.cancel();
});

window.addEventListener('beforeunload', function () {
    window.speechSynthesis.cancel();
});

/* ============================================
Grammar 
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const checkButtons = document.querySelectorAll('.check-button');

    checkButtons.forEach(button => {
        button.addEventListener('click', function () {
            const practiceItem = button.closest('.practice-item');
            const input = practiceItem.querySelector('.tag-input');
            const result = practiceItem.querySelector('.result');
            const correctAnswer = input.dataset.correct;

            if (input.value.toLowerCase().trim() === correctAnswer.toLowerCase()) {
                result.textContent = '✓';
                result.className = 'result correct';
                input.style.borderColor = '#39A275';
            } else {
                result.textContent = '✗';
                result.className = 'result incorrect';
                input.style.borderColor = '#ff4444';
            }
        });
    });
});

/* ============================================
Questions 
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const correctAnswers = {
        'question1': '1',
        'question2': '1',
        'question3': '1',
        'question4': '1',
        'question5': '1',
        'question6': '1',
        'question7': '1',
        'question8': '1',
        'question9': '1',
        'question10': '1'
    };

    function clearAllAnswers() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('question')) {
                localStorage.removeItem(key);
            }
        });
    }

    function shuffleAnswers() {
        const questionItems = document.querySelectorAll('.question-item');

        questionItems.forEach((questionItem, questionIndex) => {
            const answersContainer = questionItem.querySelector('.answers-list');
            const answers = Array.from(answersContainer.children);

            for (let i = answers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                answersContainer.appendChild(answers[j]);
            }

            const questionNumber = questionIndex + 1;
            answers.forEach((answer, index) => {
                const radio = answer.querySelector('input[type="radio"]');
                radio.name = `question${questionNumber}`;
                radio.value = (index + 1).toString();
                radio.checked = false;
            });
        });
    }

    function initializeAnswerHandlers() {
        const answerContainers = document.querySelectorAll('.answer-container');

        answerContainers.forEach(container => {
            const radio = container.querySelector('input[type="radio"]');

            radio.addEventListener('change', function () {
                const questionItem = this.closest('.question-item');
                const questionNumber = Array.from(questionItem.parentNode.children).indexOf(questionItem) + 1;
                const questionName = `question${questionNumber}`;

                const allAnswersForQuestion = questionItem.querySelectorAll('.answer-container');

                allAnswersForQuestion.forEach(answer => {
                    answer.classList.remove('correct', 'incorrect');
                });

                const isCorrect = this.value === '1';
                container.classList.add(isCorrect ? 'correct' : 'incorrect');

                if (!isCorrect) {
                    allAnswersForQuestion.forEach(answer => {
                        if (answer.querySelector('input[type="radio"]').value === '1') {
                            answer.classList.add('correct');
                        }
                    });
                }

                localStorage.setItem(`${questionName}_answer`, this.value);
            });
        });
    }

    clearAllAnswers();
    shuffleAnswers();
    initializeAnswerHandlers();
});

/* ============================================
Sorting 
============================================ */

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded - initializing sorting functionality");

    // Инициализация всех секций с сортировкой
    initAllSortingSections();

    // Обработка кликов по заголовкам секций
    initSectionToggles();

    function initAllSortingSections() {
        // Найти все списки диалогов
        const dialogueLists = document.querySelectorAll('.dialogue-list[data-dialogues]');
        console.log("Found dialogue lists:", dialogueLists.length);

        dialogueLists.forEach(list => {
            try {
                // Получить данные диалогов из атрибута
                const dialoguesData = list.getAttribute('data-dialogues');
                console.log("Raw dialogues data:", dialoguesData);

                const dialogues = JSON.parse(dialoguesData);
                console.log("Parsed dialogues:", dialogues);

                // Инициализировать сортировку для каждого списка
                initSortingForList(list, dialogues);
            } catch (e) {
                console.error('Error parsing dialogues data:', e);
            }
        });
    }

    function initSortingForList(dialogueList, dialogues) {
        let draggingElement = null;

        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        function createDialogueItems() {
            dialogueList.innerHTML = '';
            console.log("Creating dialogue items with", dialogues.length, "items");

            shuffleArray(dialogues).forEach((dialogue) => {
                const dialogueItem = document.createElement('div');
                dialogueItem.className = 'dialogue-item';
                dialogueItem.draggable = true;
                dialogueItem.dataset.id = dialogue.id;

                const dragIndicator = document.createElement('span');
                dragIndicator.className = 'drag-indicator';
                dragIndicator.textContent = '::';

                const dialogueText = document.createElement('span');
                dialogueText.className = 'dialogue-text';
                dialogueText.textContent = dialogue.text;

                dialogueItem.appendChild(dragIndicator);
                dialogueItem.appendChild(dialogueText);

                dialogueItem.addEventListener('dragstart', handleDragStart);
                dialogueItem.addEventListener('dragend', handleDragEnd);
                dialogueItem.addEventListener('dragover', handleDragOver);
                dialogueItem.addEventListener('drop', handleDrop);
                dialogueItem.addEventListener('dragenter', function (e) {
                    e.preventDefault();
                });

                dialogueList.appendChild(dialogueItem);
            });

            console.log("Created dialogue items:", dialogueList.children.length);
        }

        function handleDragStart(e) {
            draggingElement = e.target.closest('.dialogue-item');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', ''); // Required for Firefox
            draggingElement.classList.add('dragging');
        }

        function handleDragEnd(e) {
            draggingElement.classList.remove('dragging');
            checkOrder();
        }

        function handleDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            const target = e.target.closest('.dialogue-item');
            if (target && target !== draggingElement) {
                const targetRect = target.getBoundingClientRect();
                const targetY = targetRect.top + targetRect.height / 2;

                if (e.clientY < targetY) {
                    dialogueList.insertBefore(draggingElement, target);
                } else {
                    dialogueList.insertBefore(draggingElement, target.nextSibling);
                }
            }
        }

        function handleDrop(e) {
            e.preventDefault();
            checkOrder();
        }

        function checkOrder() {
            const currentOrder = Array.from(dialogueList.children);
            currentOrder.forEach((item, index) => {
                const correctPosition = parseInt(item.dataset.id) === index + 1;
                item.classList.toggle('correct', correctPosition);
            });
        }

        // Создать элементы при инициализации
        createDialogueItems();
    }

    function initSectionToggles() {
        // Обработка кликов по заголовкам для сворачивания/разворачивания секций
        const sectionHeaders = document.querySelectorAll('.section-header');
        console.log("Found section headers:", sectionHeaders.length);

        sectionHeaders.forEach(header => {
            header.addEventListener('click', function () {
                const sectionId = this.dataset.section;
                const contentSection = document.getElementById(sectionId);
                console.log("Toggling section:", sectionId);

                if (contentSection) {
                    const isVisible = contentSection.style.display !== 'none';
                    contentSection.style.display = isVisible ? 'none' : 'block';

                    // Поворот стрелки при раскрытии/сворачивании
                    const arrow = this.querySelector('.arrow-icon svg');
                    if (arrow) {
                        arrow.style.transform = isVisible ? '' : 'rotate(180deg)';
                    }
                }
            });
        });
    }
});
/* ============================================
Make a Match
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const columns = document.querySelectorAll('.match-column');
    let draggingElement = null;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shuffleColumns() {
        columns.forEach(column => {
            const items = Array.from(column.children);
            const shuffledItems = shuffleArray([...items]);
            column.innerHTML = '';
            shuffledItems.forEach(item => column.appendChild(item));
        });
    }

    function initializeItems() {
        const items = document.querySelectorAll('.match-item');
        items.forEach(item => {
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragend', handleDragEnd);
            item.addEventListener('dragover', handleDragOver);
            item.addEventListener('drop', handleDrop);
        });
    }

    function handleDragStart(e) {
        draggingElement = e.target;
        draggingElement.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    }

    function handleDragEnd(e) {
        draggingElement.classList.remove('dragging');
        draggingElement = null;
        checkMatches();
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';

        const item = e.target.closest('.match-item');
        if (!item || item === draggingElement) return;

        const column = item.parentNode;
        const items = [...column.children];
        const dragIndex = items.indexOf(draggingElement);
        const dropIndex = items.indexOf(item);

        if (dragIndex === -1) {
            // Если элемент из другой колонки - меняем местами
            const oldItem = item;
            const newColumn = draggingElement.parentNode;
            const oldIndex = [...newColumn.children].indexOf(draggingElement);

            if (oldIndex !== -1) {
                column.insertBefore(draggingElement, item);
                newColumn.insertBefore(oldItem, newColumn.children[oldIndex]);
            }
        } else if (dragIndex !== dropIndex) {
            // Перемещение внутри одной колонки
            const rect = item.getBoundingClientRect();
            const mid = (rect.bottom - rect.top) / 2;
            const offset = e.clientY - rect.top;

            if (offset < mid && dragIndex > dropIndex) {
                item.parentNode.insertBefore(draggingElement, item);
            } else if (offset > mid && dragIndex < dropIndex) {
                item.parentNode.insertBefore(draggingElement, item.nextSibling);
            }
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        const item = e.target.closest('.match-item');
        if (!item || item === draggingElement) return;

        if (draggingElement) {
            const column = item.parentNode;
            const items = [...column.children];
            const dropIndex = items.indexOf(item);

            if (dropIndex !== -1) {
                // Если элементы из разных колонок - меняем их местами
                if (draggingElement.parentNode !== column) {
                    const oldItem = item;
                    const newColumn = draggingElement.parentNode;
                    const oldIndex = [...newColumn.children].indexOf(draggingElement);

                    column.insertBefore(draggingElement, oldItem);
                    newColumn.insertBefore(oldItem, newColumn.children[oldIndex]);
                }
            }
        }
    }

    function checkMatches() {
        const leftColumn = document.getElementById('wordsColumn');
        const rightColumn = document.getElementById('translationsColumn');

        const leftItems = Array.from(leftColumn.children);
        const rightItems = Array.from(rightColumn.children);

        leftItems.forEach((item, index) => {
            const isMatched = item.dataset.match === rightItems[index].dataset.match;
            item.classList.toggle('correct', isMatched);
            rightItems[index].classList.toggle('correct', isMatched);
        });
    }

    // Инициализация
    shuffleColumns();
    initializeItems();
});

/* ============================================
Sentence Building 
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    // Находим все контейнеры предложений на странице
    const sentenceContainers = document.querySelectorAll('.sentences-container');

    sentenceContainers.forEach(container => {
        // Получаем данные предложений из атрибута data-sentences
        let sentences;
        try {
            sentences = JSON.parse(container.dataset.sentences);
        } catch (e) {
            console.error('Error parsing sentences data:', e);
            return;
        }

        if (!sentences || !Array.isArray(sentences)) {
            console.error('Invalid sentences data format');
            return;
        }

        // Создаем упражнения для каждого предложения
        sentences.forEach((sentence, index) => {
            createSentenceExercise(container, sentence, index);
        });
    });

    function createSentenceExercise(container, sentence, index) {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'sentence-exercise';
        exerciseDiv.dataset.index = index;

        const wordsContainer = document.createElement('div');
        wordsContainer.className = 'words-container';

        const shuffledWords = shuffleArray([...sentence.words]);
        shuffledWords.forEach(word => {
            const wordDiv = document.createElement('div');
            wordDiv.className = 'word-item';
            wordDiv.draggable = true;

            const dragIndicator = document.createElement('span');
            dragIndicator.className = 'drag-indicator';
            dragIndicator.textContent = '::';

            const wordText = document.createElement('span');
            wordText.textContent = word;

            wordDiv.appendChild(dragIndicator);
            wordDiv.appendChild(wordText);
            wordsContainer.appendChild(wordDiv);
        });

        const resultDiv = document.createElement('div');
        resultDiv.className = 'sentence-result';

        const correctAnswer = document.createElement('div');
        correctAnswer.className = 'correct-answer';
        correctAnswer.textContent = `Correct: ${sentence.correct}`;

        const checkButton = document.createElement('button');
        checkButton.className = 'check-button';
        checkButton.textContent = 'Check';
        checkButton.onclick = () => checkSentence(exerciseDiv, sentence.correct);

        resultDiv.appendChild(correctAnswer);
        resultDiv.appendChild(checkButton);

        exerciseDiv.appendChild(wordsContainer);
        exerciseDiv.appendChild(resultDiv);
        container.appendChild(exerciseDiv);

        // Add drag and drop functionality
        setupDragAndDrop(wordsContainer);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function setupDragAndDrop(container) {
        let draggingElement = null;

        container.addEventListener('dragstart', e => {
            draggingElement = e.target.closest('.word-item');
            if (draggingElement) {
                draggingElement.classList.add('dragging');
            }
        });

        container.addEventListener('dragend', e => {
            if (draggingElement) {
                draggingElement.classList.remove('dragging');
                draggingElement = null;
            }
        });

        container.addEventListener('dragover', e => {
            e.preventDefault();
            if (!draggingElement) return;

            const target = e.target.closest('.word-item');
            if (target && target !== draggingElement) {
                const targetRect = target.getBoundingClientRect();
                const targetCenter = targetRect.left + targetRect.width / 2;

                if (e.clientX < targetCenter) {
                    target.parentNode.insertBefore(draggingElement, target);
                } else {
                    target.parentNode.insertBefore(draggingElement, target.nextSibling);
                }
            }
        });
    }

    function checkSentence(exerciseDiv, correctAnswer) {
        const wordsContainer = exerciseDiv.querySelector('.words-container');
        const words = Array.from(wordsContainer.querySelectorAll('.word-item'))
            .map(wordDiv => wordDiv.lastChild.textContent);

        const userSentence = words.join(' ');
        const isCorrect = userSentence === correctAnswer;

        exerciseDiv.classList.toggle('correct', isCorrect);
        const correctAnswerDiv = exerciseDiv.querySelector('.correct-answer');
        correctAnswerDiv.style.display = isCorrect ? 'block' : 'none';
    }
});

/* ============================================
Fill in the Blank
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const fillBlankItems = document.querySelectorAll('.fill-blank-item');

    // Функция для перемешивания массива (алгоритм Фишера-Йейтса)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    fillBlankItems.forEach(item => {
        const optionsContainer = item.querySelector('.options');
        const options = Array.from(item.querySelectorAll('.option'));
        const blank = item.querySelector('.blank');
        const correctAnswer = item.dataset.correct;

        // Перемешиваем варианты ответов
        const shuffledOptions = shuffleArray([...options]);

        // Очищаем контейнер и добавляем перемешанные варианты
        optionsContainer.innerHTML = '';
        shuffledOptions.forEach(option => {
            optionsContainer.appendChild(option);
        });

        // Добавляем обработчики событий к перемешанным вариантам
        item.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => {
                // Сброс предыдущего выбора
                item.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected', 'correct', 'wrong');
                });

                // Проверка ответа
                const isCorrect = option.dataset.value === correctAnswer;

                // Добавление соответствующих классов
                option.classList.add('selected');
                option.classList.add(isCorrect ? 'correct' : 'wrong');

                // Обновление пропуска
                blank.textContent = option.dataset.value;

                // Если ответ правильный, добавляем класс к контейнеру
                item.classList.toggle('completed', isCorrect);

                // Если ответ неправильный, показываем правильный вариант
                if (!isCorrect) {
                    item.querySelectorAll('.option').forEach(opt => {
                        if (opt.dataset.value === correctAnswer) {
                            opt.classList.add('correct');
                        }
                    });
                }
            });
        });
    });
});

/* ============================================
Script 
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    // Section Toggle Functionality
    const sectionHeaders = document.querySelectorAll('.section-header');
    let currentlyOpenSection = null;

    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const sectionId = header.getAttribute('data-section');
            const content = document.getElementById(sectionId);

            // If there's a currently open section and it's different from the clicked one
            if (currentlyOpenSection && currentlyOpenSection !== content) {
                // Close the currently open section
                const currentHeader = document.querySelector(`[data-section="${currentlyOpenSection.id}"]`);
                currentHeader.setAttribute('aria-expanded', 'false');
                currentlyOpenSection.style.display = 'none';
            }

            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Toggle clicked section
            header.setAttribute('aria-expanded', !isExpanded);
            content.style.display = isExpanded ? 'none' : 'block';

            // Update currently open section reference
            currentlyOpenSection = isExpanded ? null : content;

            // Smooth scroll to section if opening
            if (!isExpanded) {
                content.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Vocabulary Functionality
    const addToDictionaryButtons = document.querySelectorAll('.add-to-dictionary');
    const dictionaryPopup = document.querySelector('.dictionary-popup');

    addToDictionaryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const vocabItem = button.closest('.vocab-item');
            const word = vocabItem.querySelector('.word').textContent;

            // Show popup
            dictionaryPopup.style.display = 'block';

            // Hide popup after 3 seconds
            setTimeout(() => {
                dictionaryPopup.style.display = 'none';
            }, 3000);

            // Save to localStorage (example implementation)
            const dictionary = JSON.parse(localStorage.getItem('dictionary') || '[]');
            dictionary.push(word);
            localStorage.setItem('dictionary', JSON.stringify(dictionary));
        });
    });

    // Questions Functionality
    const questionOptions = document.querySelectorAll('.option-item');

    questionOptions.forEach(option => {
        option.addEventListener('click', () => {
            const isCorrect = option.classList.contains('correct-answer');
            const questionGroup = option.closest('.question-item');
            const allOptions = questionGroup.querySelectorAll('.option-item');

            // Remove previous selections
            allOptions.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });

            // Mark selected option
            option.classList.add(isCorrect ? 'correct' : 'incorrect');

            // If incorrect, show correct answer
            if (!isCorrect) {
                const correctOption = questionGroup.querySelector('.correct-answer');
                correctOption.classList.add('correct');
            }
        });
    });

    // Checkbox save state
    const vocabularyCheckboxes = document.querySelectorAll('.vocabulary-list input[type="checkbox"]');

    vocabularyCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const vocabItem = checkbox.closest('.vocab-item');
            const word = vocabItem.querySelector('.word').textContent;

            // Save checkbox state
            localStorage.setItem(`vocab_${word}`, checkbox.checked);
        });

        // Load saved state
        const word = checkbox.closest('.vocab-item').querySelector('.word').textContent;
        const savedState = localStorage.getItem(`vocab_${word}`);
        if (savedState === 'true') {
            checkbox.checked = true;
        }
    });
});

/* ============================================
Add to Dictionary
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.add-to-dictionary').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Безопасно получаем существующий словарь
            let dictionary = [];
            try {
                const existingDictionary = localStorage.getItem('dictionary');
                if (existingDictionary) {
                    dictionary = JSON.parse(existingDictionary);
                    // Фильтруем недопустимые записи
                    dictionary = dictionary.filter(item => item && item.text);
                }
            } catch (error) {
                console.error('Error loading dictionary:', error);
                dictionary = [];
            }

            // Получаем данные слова
            const vocabItem = this.closest('.vocab-item');
            const wordElem = vocabItem?.querySelector('.word');

            if (!vocabItem || !wordElem || !wordElem.textContent || !wordElem.getAttribute('data-translation')) {
                console.error('Invalid word data');
                return;
            }

            // Создаем объект слова
            const wordData = {
                text: wordElem.textContent.trim(),
                translation: wordElem.getAttribute('data-translation').trim(),
                transcription: vocabItem.querySelector('.transcription')?.textContent?.trim().replace(/[/]/g, '') || '',
                type: vocabItem.querySelector('.type')?.textContent?.replace(/[\[\]]/g, '').trim() || '',
                example: vocabItem.querySelector('.example')?.textContent?.replace('Example:', '').trim() || '',
                dateAdded: Date.now(),
                favorite: false
            };

            // Проверяем есть ли уже такое слово
            const existingWord = dictionary.find(item =>
                item &&
                item.text &&
                item.text.toLowerCase() === wordData.text.toLowerCase()
            );

            if (existingWord) {
                // Обновляем существующее слово, сохраняя статус избранного
                const updatedDictionary = dictionary.map(item => {
                    if (item && item.text && item.text.toLowerCase() === wordData.text.toLowerCase()) {
                        return { ...wordData, favorite: item.favorite };
                    }
                    return item;
                });
                dictionary = updatedDictionary;
            } else {
                // Добавляем новое слово
                dictionary.push(wordData);
            }

            try {
                // Сохраняем обновленный словарь
                localStorage.setItem('dictionary', JSON.stringify(dictionary));

                // Показываем подтверждение
                const popup = document.querySelector('.dictionary-popup');
                if (popup) {
                    popup.style.display = 'block';
                    setTimeout(() => popup.style.display = 'none', 2000);
                }
            } catch (error) {
                console.error('Error saving to dictionary:', error);
            }
        });
    });
});

/* ============================================
for episode 
============================================ */
