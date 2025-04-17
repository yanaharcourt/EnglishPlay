// Word Training Module
class WordTraining {
    constructor() {
        this.selectedWords = [];
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.count = 0;
        this.activeModesSequence = [];
        this.currentModeIndex = 0;
        this.trainingModes = {
            flashcards: true,
            translation: false,
            matching: false,
            spelling: false
        };
        this.totalCorrectAnswers = 0; // Добавляем счетчик общих правильных ответов
    }

    getRandomTranslations(currentWord) {
        const dictionary = JSON.parse(localStorage.getItem('dictionary') || '[]');
        const otherWords = dictionary.filter(word => word.text !== currentWord.text);
        const shuffled = otherWords.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2).map(word => word.translation);
    }

    initialize(selectedWordsCount) {
        this.count = selectedWordsCount;
        this.createTrainingModal(selectedWordsCount);
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
        case 'flashcards':
            this.createFlashcardsModal();
            break;
        case 'translation':
            this.createTranslationQuizModal();
            break;
        case 'matching':
            this.createMatchingModal();
            break;
        case 'spelling': 
            this.createSpellingModal();
            break;
        default:
            this.currentModeIndex++;
            this.startNextMode();
    }
}

startTraining() {
    console.log('Starting training');
    this.activeModesSequence = [];
    if (this.trainingModes.flashcards) this.activeModesSequence.push('flashcards');
    if (this.trainingModes.translation) this.activeModesSequence.push('translation');
    if (this.trainingModes.matching) this.activeModesSequence.push('matching');
    if (this.trainingModes.spelling) this.activeModesSequence.push('spelling');

    console.log('Active modes:', this.activeModesSequence);
    this.currentModeIndex = 0;
    this.startNextMode();
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
            // Подсчитываем общее количество возможных правильных ответов
            const totalPossibleAnswers = this.activeModesSequence.reduce((total, mode) => {
                if (mode === 'translation' || mode === 'matching' || mode === 'spelling') {
                    return total + this.selectedWords.length;
                }
                return total;
            }, 0);
    
            modal.innerHTML = `
                <div style="background: #1F1F27; width: 95vw; max-width: 500px; border-radius: 12px; padding: 32px; text-align: center;">
                    <h2 style="color: white; font-size: 24px; margin-bottom: 16px;">Все режимы тренировки завершены!</h2>
                    <p style="color: #808080; font-size: 18px; margin-bottom: 16px;">
                        Отличная работа! Вы успешно завершили все выбранные режимы тренировки.
                    </p>
                    <p style="color: #808080; font-size: 18px; margin-bottom: 32px;">
                        Общее количество правильных ответов: ${this.totalCorrectAnswers} из ${totalPossibleAnswers}
                    </p>
                    <button class="close-completion" style="padding: 12px 32px; background: #39A275; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer;">
                        Закрыть
                    </button>
                </div>
            `;
    
            document.body.appendChild(modal);
    
            // Обновление статистики
            const wordStats = JSON.parse(localStorage.getItem('wordStats') || '{}');
            
            this.selectedWords.forEach(word => {
                if (!wordStats[word.text]) {
                    wordStats[word.text] = { successfulAttempts: 0, lastAttemptDate: null };
                }
                
                const successRate = this.totalCorrectAnswers / totalPossibleAnswers;
                if (successRate >= 0.7) {
                    const today = new Date().toDateString();
                    if (wordStats[word.text].lastAttemptDate !== today) {
                        wordStats[word.text].successfulAttempts++;
                        wordStats[word.text].lastAttemptDate = today;
                    }
                }
            });
    
            localStorage.setItem('wordStats', JSON.stringify(wordStats));
            window.dispatchEvent(new Event('storage'));
    
            modal.querySelector('.close-completion').addEventListener('click', () => {
                modal.remove();
                this.totalCorrectAnswers = 0;
            });
        }

    createFlashcardsModal() {
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

        const updateCardContent = () => {
            modal.innerHTML = this.createCardHTML(
                this.selectedWords[this.currentCardIndex],
                this.currentCardIndex,
                this.selectedWords.length
            );
            this.addCardEventListeners(modal);
        };

        updateCardContent();
        document.body.appendChild(modal);

        // Make updateCard available globally
        window.updateCard = (newIndex) => {
            if (newIndex >= 0 && newIndex < this.selectedWords.length) {
                this.currentCardIndex = newIndex;
                this.isFlipped = false;
                updateCardContent();
            }
        };
    }

    createCardHTML(word, index, total) {
        return `
            <div style="background: #1F1F27; width: 95vw; height: 90vh; border-radius: 12px; padding: 24px; margin: 16px; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                    <h2 style="color: white; font-size: 24px;">Флешкарточки (${index + 1}/${total})</h2>
                    <button class="close-flashcards" style="color: #808080; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                </div>
                
                ${this.createProgressIndicator('flashcards', index + 1, total)}
    
                <div class="flashcard-container" style="flex: 1; display: flex; align-items: center; justify-content: center; perspective: 1000px;">
                    <div style="position: relative; width: 100%; height: 400px;">
                        <div style="position: absolute; top: 8px; left: 4px; right: -4px; height: 400px; background: #2A2A35; border-radius: 12px; transform: scale(0.98);"></div>
                        <div style="position: absolute; top: 4px; left: 2px; right: -2px; height: 400px; background: #2A2A35; border-radius: 12px; transform: scale(0.99);"></div>
                        
                        <div class="flashcard" style="position: relative; width: 100%; height: 400px; background: #2A2A35; border-radius: 12px; cursor: pointer; transition: transform 0.6s; transform-style: preserve-3d;">
                            <div class="card-front" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px;">
                                <h3 style="color: white; font-size: 32px; margin-bottom: 16px;">${word.text}</h3>
                                <p style="color: #808080; font-size: 20px;">${word.phonetics || ''}</p>
                                <button class="pronounce-btn" style="background: none; border: 1px solid #39A275; color: #39A275; padding: 8px 16px; border-radius: 8px; cursor: pointer; margin-top: 16px; display: flex; align-items: center; gap: 8px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                                        <line x1="12" y1="19" x2="12" y2="23"/>
                                        <line x1="8" y1="23" x2="16" y2="23"/>
                                    </svg>
                                    Прослушать
                                </button>
                                <div style="position: absolute; bottom: 20px; display: flex; align-items: center; color: #808080;">
                                    <span style="margin-right: 8px;">↻</span>
                                    Нажмите чтобы перевернуть
                                </div>
                            </div>
                            <div class="card-back" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; padding: 20px;">
                                <h3 style="color: white; font-size: 32px; text-align: center;">${word.translation}</h3>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div style="display: flex; justify-content: center; gap: 16px; margin-top: 24px;">
                    <button class="nav-btn prev-btn" ${index === 0 ? 'disabled' : ''} 
                        style="padding: 12px 24px; border-radius: 8px; border: none; cursor: pointer; background: ${index === 0 ? '#2A2A35' : '#39A275'}; color: white; ${index === 0 ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                        Назад
                    </button>
                    ${index === total - 1 ? `
                        <button class="nav-btn next-btn" 
                            style="padding: 12px 24px; border-radius: 8px; border: none; cursor: pointer; background: #39A275; color: white; display: flex; align-items: center; gap: 8px;">
                            Завершить
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    ` : `
                        <button class="nav-btn next-btn"
                            style="padding: 12px 24px; border-radius: 8px; border: none; cursor: pointer; background: #39A275; color: white;">
                            Вперед
                        </button>
                    `}
                </div>
                
            </div>
        `;
    }

    addCardEventListeners(modal) {
        // Close button
        modal.querySelector('.close-flashcards').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        // Flip card
        const flashcard = modal.querySelector('.flashcard');
        if (flashcard) {
            flashcard.addEventListener('click', () => {
                this.isFlipped = !this.isFlipped;
                flashcard.style.transform = this.isFlipped ? 'rotateY(180deg)' : '';
            });
        }

        // Pronunciation button
        const pronounceBtn = modal.querySelector('.pronounce-btn');
        if (pronounceBtn) {
            pronounceBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card flip
                const utterance = new SpeechSynthesisUtterance(this.selectedWords[this.currentCardIndex].text);
                utterance.lang = 'en-US';
                utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
            });
        }

        // Navigation buttons
        const prevBtn = modal.querySelector('.prev-btn');
        const nextBtn = modal.querySelector('.next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.currentCardIndex > 0) {
                    window.updateCard(this.currentCardIndex - 1);
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.currentCardIndex < this.selectedWords.length - 1) {
                    window.updateCard(this.currentCardIndex + 1);
                } else {
                    // If we're on the last card and click next, move to the next mode
                    modal.remove();
                    this.currentModeIndex++;
                    this.startNextMode();
                }
            });
        }
    }

    createTranslationQuizModal() {
        let currentIndex = 0;
        let correctAnswers = 0;
    
        const createQuizHTML = (word, index, total) => {
            const randomTranslations = this.getRandomTranslations(word);
            const allTranslations = [...randomTranslations, word.translation]
                .sort(() => 0.5 - Math.random());
    
                return `
                <div style="background: #1F1F27; width: 95vw; height: 90vh; border-radius: 12px; padding: 24px; margin: 16px; display: flex; flex-direction: column;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h2 style="color: white; font-size: 24px;">Выберите правильный перевод (${index + 1}/${total})</h2>
                        <button class="close-quiz" style="color: #808080; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                    </div>

                    ${this.createProgressIndicator('translation', index + 1, total)}
    
                    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 32px;">
                        <div style="text-align: center;">
                            <h3 style="color: white; font-size: 36px; margin-bottom: 16px;">${word.text}</h3>
                            <p style="color: #808080; font-size: 20px;">${word.phonetics || ''}</p>
                        </div>
    
                        <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 400px;">
                            ${allTranslations.map(translation => `
                                <button class="translation-option" data-translation="${translation}" 
                                    style="padding: 16px; background: #2A2A35; border: 1px solid #3C3C47; border-radius: 8px; color: white; font-size: 18px; cursor: pointer; transition: all 0.2s ease;">
                                    ${translation}
                                </button>
                            `).join('')}
                        </div>
                    </div>
    
                    <div style="margin-top: 32px; text-align: center;">
                        <p style="color: #808080; font-size: 16px;">Правильных ответов: ${correctAnswers} из ${index}</p>
                    </div>
                </div>
            `;
        };
    
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
    
        const updateQuiz = () => {
            modal.innerHTML = createQuizHTML(
                this.selectedWords[currentIndex],
                currentIndex,
                this.selectedWords.length
            );
    
            // Add event listeners
            modal.querySelector('.close-quiz').addEventListener('click', () => {
                this.totalCorrectAnswers += correctAnswers; // Добавляем текущие правильные ответы к общему счету
                modal.remove();
                this.currentModeIndex++;
                this.startNextMode();
            });
    
            const options = modal.querySelectorAll('.translation-option');
            options.forEach(option => {
                option.addEventListener('mouseover', () => {
                    option.style.background = '#39A275';
                });
                option.addEventListener('mouseout', () => {
                    option.style.background = '#2A2A35';
                });
                option.addEventListener('click', () => {
                    const isCorrect = option.dataset.translation === this.selectedWords[currentIndex].translation;
                    
                    // Disable all buttons
                    options.forEach(btn => {
                        btn.style.cursor = 'default';
                        btn.style.pointerEvents = 'none';
                        
                        if (btn.dataset.translation === this.selectedWords[currentIndex].translation) {
                            btn.style.background = '#2F9E44';
                            btn.style.borderColor = '#2F9E44';
                        } else if (btn === option && !isCorrect) {
                            btn.style.background = '#E03131';
                            btn.style.borderColor = '#E03131';
                        }
                    });
    
                    if (isCorrect) correctAnswers++;
    
                    // Wait 1 second before moving to next word
                    setTimeout(() => {
                        if (currentIndex < this.selectedWords.length - 1) {
                            currentIndex++;
                            updateQuiz();
                        } else {
                            this.totalCorrectAnswers += correctAnswers; // Добавляем текущие правильные ответы к общему счету
                            modal.remove();
                            this.currentModeIndex++;
                            this.startNextMode();
                        }
                    }, 1000);
                });
            });
        };
    
        updateQuiz();
        document.body.appendChild(modal);
    }

    // New matching mode method
    createMatchingModal() {
        let matchedPairs = new Set();
        let selectedCard = null;
        let canClick = true;
        let correctMatches = 0;
        
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        const createCardHTML = (text, index, isWord = true) => {
            return `
                <div class="matching-card ${isWord ? 'word' : 'translation'}" data-index="${index}"
                    style="background: #2A2A35; padding: 16px; border-radius: 8px; cursor: pointer; 
                    height: 80px; display: flex; align-items: center; justify-content: center; 
                    color: white; font-size: 18px; text-align: center; transition: all 0.3s ease;
                    ${matchedPairs.has(index) ? 'background: #2F9E44; cursor: default;' : ''}">
                    ${text}
                </div>
            `;
        };

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

        // Create pairs of words and translations
        const pairs = this.selectedWords.map((word, index) => ({
            word: word.text,
            translation: word.translation,
            index
        }));

        // Create and shuffle cards
        const words = shuffleArray([...pairs]);
        const translations = shuffleArray([...pairs]);

        modal.innerHTML = `
            <div style="background: #1F1F27; width: 95vw; height: 90vh; border-radius: 12px; padding: 24px; margin: 16px; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                    <h2 style="color: white; font-size: 24px;">Сопоставьте пары</h2>
                    <button class="close-matching" style="color: #808080; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                </div>

                ${this.createProgressIndicator('matching', matchedPairs.size + 1, pairs.length)}

                <div style="flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; padding: 24px;">
                    <div class="words-column" style="display: grid; gap: 16px;">
                        ${words.map((pair, idx) => createCardHTML(pair.word, pair.index, true)).join('')}
                    </div>
                    <div class="translations-column" style="display: grid; gap: 16px;">
                        ${translations.map((pair, idx) => createCardHTML(pair.translation, pair.index, false)).join('')}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add event listeners
        modal.querySelector('.close-matching').addEventListener('click', () => {
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        const handleCardClick = (card) => {
            // Если карточка уже сопоставлена или клики заблокированы, игнорируем
            if (!canClick || matchedPairs.has(parseInt(card.dataset.index))) return;
        
            // Если кликнули по той же карточке, которая уже выбрана - игнорируем
            if (card === selectedCard) return;
        
            // Если это первая карточка
            if (!selectedCard) {
                selectedCard = card;
                card.style.background = '#39A275';
                return;
            }
        
            // Если это вторая карточка
            canClick = false;
            const firstIndex = parseInt(selectedCard.dataset.index);
            const secondIndex = parseInt(card.dataset.index);
        
            // Проверяем совпадение
            if (firstIndex === secondIndex) {
                // Правильная пара
                correctMatches++;
                card.style.background = '#2F9E44';
                selectedCard.style.background = '#2F9E44';
                matchedPairs.add(firstIndex);
        
                // Обновляем прогресс
                const progressBar = modal.querySelector('[style*="background: #39A275"]');
                if (progressBar) {
                    progressBar.style.width = `${(matchedPairs.size / pairs.length) * 100}%`;
                }
        
                // Проверяем завершение
                if (matchedPairs.size === pairs.length) {
                    this.totalCorrectAnswers += correctMatches;
                    setTimeout(() => {
                        modal.remove();
                        this.currentModeIndex++;
                        this.startNextMode();
                    }, 1000);
                }
            } else {
                // Неправильная пара
                card.style.background = '#E03131';
                selectedCard.style.background = '#E03131';
            }
        
            // Сбрасываем выбор после задержки
            setTimeout(() => {
                if (!matchedPairs.has(firstIndex)) {
                    selectedCard.style.background = '#2A2A35';
                }
                if (!matchedPairs.has(secondIndex)) {
                    card.style.background = '#2A2A35';
                }
                selectedCard = null;
                canClick = true;
            }, 1000);
        };

        // Add click listeners to all cards
        modal.querySelectorAll('.matching-card').forEach(card => {
            let isHandlingClick = false;
            
            card.addEventListener('click', () => {
                if (!isHandlingClick) {
                    isHandlingClick = true;
                    handleCardClick(card);
                    setTimeout(() => {
                        isHandlingClick = false;
                    }, 100);
                }
            });
            
            // Add hover effect
            card.addEventListener('mouseover', () => {
                if (!matchedPairs.has(parseInt(card.dataset.index)) && card !== selectedCard) {
                    card.style.background = '#39A275';
                }
            });
            
            card.addEventListener('mouseout', () => {
                if (!matchedPairs.has(parseInt(card.dataset.index)) && card !== selectedCard) {
                    card.style.background = '#2A2A35';
                }
            });
        });
    }

createSpellingModal() {
    let currentIndex = 0;
    let correctAnswers = 0;
    
    const shuffleWord = (word) => {
        return word.split('')
            .sort(() => Math.random() - 0.5)
            .map((letter, index) => ({
                letter,
                id: index,
                isSelected: false
            }));
    };

    const createSpellingHTML = (word, index, total) => {
        const shuffledLetters = shuffleWord(word.text);
        return `
            <div style="background: #1F1F27; width: 95vw; height: 90vh; border-radius: 12px; padding: 24px; margin: 16px; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                    <h2 style="color: white; font-size: 24px;">Составьте слово (${index + 1}/${total})</h2>
                    <button class="close-spelling" style="color: #808080; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                </div>

                ${this.createProgressIndicator('spelling', index + 1, total)}

                <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 32px;">
                    <div style="text-align: center;">
                        <p style="color: #808080; font-size: 24px; margin-bottom: 8px;">Перевод:</p>
                        <h3 style="color: white; font-size: 32px;">${word.translation}</h3>
                    </div>

                    <div class="answer-container" style="min-height: 60px; padding: 16px; background: #2A2A35; border-radius: 8px; width: 100%; max-width: 500px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 16px;">
                    </div>

                    <div class="letters-container" style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; width: 100%; max-width: 500px;">
                        ${shuffledLetters.map(({letter, id}) => `
                            <div class="letter" data-id="${id}" style="width: 50px; height: 50px; background: #2A2A35; border: 1px solid #3C3C47; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; cursor: pointer; transition: all 0.2s ease;">
                                ${letter}
                            </div>
                        `).join('')}
                    </div>

                    <div style="display: flex; gap: 16px;">
                        <button class="check-btn" style="padding: 12px 32px; background: #39A275; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; opacity: 0.5;" disabled>
                            Проверить
                        </button>
                        <button class="reset-btn" style="padding: 12px 32px; background: #2A2A35; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer;">
                            Сбросить
                        </button>
                    </div>
                </div>

                <div style="margin-top: 32px; text-align: center;">
                    <p style="color: #808080; font-size: 16px;">Правильных ответов: ${correctAnswers} из ${index}</p>
                </div>
            </div>
        `;
    };

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

    const checkAnswer = () => {
        const answerContainer = modal.querySelector('.answer-container');
        const selectedLetters = answerContainer.querySelectorAll('.letter');
        const userAnswer = Array.from(selectedLetters).map(letter => letter.textContent.trim()).join('');
        
        if (userAnswer.toLowerCase() === this.selectedWords[currentIndex].text.toLowerCase()) {
            correctAnswers++;
            answerContainer.style.background = '#2F9E44';
            
            setTimeout(() => {
                if (currentIndex < this.selectedWords.length - 1) {
                    currentIndex++;
                    updateSpelling();
                } else {
                    this.totalCorrectAnswers += correctAnswers;
                    modal.remove();
                    this.currentModeIndex++;
                    this.startNextMode();
                }
            }, 1000);
        } else {
            answerContainer.style.background = '#E03131';
            
            setTimeout(() => {
                answerContainer.style.background = '#2A2A35';
                // Возвращаем все буквы обратно
                const lettersContainer = modal.querySelector('.letters-container');
                Array.from(answerContainer.querySelectorAll('.letter')).forEach(letter => {
                    lettersContainer.appendChild(letter);
                });
                updateCheckButton();
            }, 1000);
        }
    };

    const updateCheckButton = () => {
        const answerContainer = modal.querySelector('.answer-container');
        const checkBtn = modal.querySelector('.check-btn');
        const selectedLetters = answerContainer.querySelectorAll('.letter');
        
        if (selectedLetters.length === this.selectedWords[currentIndex].text.length) {
            checkBtn.style.opacity = '1';
            checkBtn.disabled = false;
        } else {
            checkBtn.style.opacity = '0.5';
            checkBtn.disabled = true;
        }
    };

    const updateSpelling = () => {
        modal.innerHTML = createSpellingHTML(
            this.selectedWords[currentIndex],
            currentIndex,
            this.selectedWords.length
        );

        // Add event listeners
        modal.querySelector('.close-spelling').addEventListener('click', () => {
            this.totalCorrectAnswers += correctAnswers;
            modal.remove();
            this.currentModeIndex++;
            this.startNextMode();
        });

        // Reset button
        modal.querySelector('.reset-btn').addEventListener('click', () => {
            const lettersContainer = modal.querySelector('.letters-container');
            const answerContainer = modal.querySelector('.answer-container');
            
            Array.from(answerContainer.querySelectorAll('.letter')).forEach(letter => {
                lettersContainer.appendChild(letter);
            });
            
            updateCheckButton();
        });

        // Check button
        modal.querySelector('.check-btn').addEventListener('click', checkAnswer);

        // Letter movement
        const letters = modal.querySelectorAll('.letter');
        letters.forEach(letter => {
            letter.addEventListener('click', () => {
                const answerContainer = modal.querySelector('.answer-container');
                const lettersContainer = modal.querySelector('.letters-container');
                
                if (letter.parentElement === answerContainer) {
                    lettersContainer.appendChild(letter);
                } else {
                    answerContainer.appendChild(letter);
                }
                
                updateCheckButton();
            });

            // Hover effect
            letter.addEventListener('mouseover', () => {
                letter.style.background = '#39A275';
            });

            letter.addEventListener('mouseout', () => {
                letter.style.background = '#2A2A35';
            });
        });
    };
    
    updateSpelling();
    document.body.appendChild(modal);
}
    
    createProgressIndicator(currentMode, currentStep, totalSteps) {
        const totalModes = this.activeModesSequence.length;
        const currentModeIndex = this.activeModesSequence.indexOf(currentMode) + 1;
        
        return `
            <div style="width: 100%; margin-bottom: 24px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #808080; font-size: 14px;">Режим ${currentModeIndex} из ${totalModes}</span>
                    <span style="color: #808080; font-size: 14px;">${currentStep}/${totalSteps}</span>
                </div>
                <div style="width: 100%; height: 4px; background: #2A2A35; border-radius: 2px;">
                    <div style="width: ${(currentStep / totalSteps) * 100}%; height: 100%; background: #39A275; border-radius: 2px; transition: width 0.3s ease;"></div>
                </div>
            </div>
        `;
    }
    createTrainingModal(selectedWordsCount) {
        const modal = document.createElement('div');
        modal.id = 'wordTrainingModal';
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
    
        const modesCount = Object.values(this.trainingModes).filter(Boolean).length;
        let modeWord;
        if (modesCount === 1) {
            modeWord = 'режим';
        } else if (modesCount > 1 && modesCount < 5) {
            modeWord = 'режима';
        } else {
            modeWord = 'режимов';
        }

        modal.innerHTML = `
            <style>
                .mode-checkbox {
                    appearance: none;
                    width: 20px !important;
                    height: 20px !important;
                    border: 2px solid #39A275;
                    border-radius: 4px;
                    background-color: transparent;
                    cursor: pointer;
                    position: relative;
                }

                .mode-checkbox:checked {
                    background-color: #39A275;
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
                    background: #2A2A35;
                    padding: 16px;
                    border-radius: 8px;
                    opacity: 0.7;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                }

                .mode-item.active {
                    opacity: 1;
                    border-color: #39A275;
                    background: rgba(57, 162, 117, 0.1);
                }
                
                .settings-btn:hover {
                    color: #ffffff !important;
                }
                .settings-btn:hover svg {
                    stroke: #ffffff;
                }
            </style>
            <div style="background: #1F1F27; width: 95vw; height: 90vh; border-radius: 12px; padding: 24px; margin: 16px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <button class="close-modal" style="position: absolute; top: 60px; right: 60px; color: #808080; background: none; border: none; font-size: 32px; cursor: pointer; padding: 8px;">×</button>
                
                <div style="text-align: center; max-width: 400px;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="position: relative; text-align: center;">
                            <span style="position: absolute; top: -60px; left: 50%; transform: translateX(-50%); font-size: 70px;">📓</span>
                            <h2 style="font-size: 30px; font-weight: 700; color: white; margin-top: 45px;">Word training</h2>
                        </div>
                        <p style="color: #808080; margin-top: 8px; font-size: 16px;">Слов на изучении: ${selectedWordsCount}</p>
                    </div>
                    
                    <div style="margin-top: 64px;">
                        <p style="color: #808080; margin-bottom: 24px; font-size: 16px;">Выберите количество слов</p>
                        
                        <div class="word-count-controls" style="display: flex; align-items: center; justify-content: center; gap: 24px; margin-bottom: 64px;">
                            <button class="minus-btn control-btn" style="width: 40px; height: 40px; border-radius: 50%; background: #2A2A35; color: white; border: none; cursor: pointer;">-</button>
                            <span class="word-count" style="font-size: 24px; color: white;">${selectedWordsCount}</span>
                            <button class="plus-btn control-btn" style="width: 40px; height: 40px; border-radius: 50%; background: #2A2A35; color: white; border: none; cursor: pointer;">+</button>
                        </div>

                        <button class="settings-btn" style="background: none; border: none; cursor: pointer; color: #808080; font-size: 18px; display: flex; align-items: center; gap: 8px; margin: 0 auto 64px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                            ${Object.values(this.trainingModes).filter(Boolean).length} ${modeWord}
                        </button>

                        <button class="start-training-btn" style="background: #39A275; color: white; padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px; width: 100%;">
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
        const wordCountSpan = modal.querySelector('.word-count');

        minusBtn.addEventListener('click', () => {
            if (this.count > 1) {
                this.count--;
                wordCountSpan.textContent = this.count;
            }
        });

        plusBtn.addEventListener('click', () => {
            const maxCount = parseInt(wordCountSpan.textContent);
            if (this.count < maxCount) {
                this.count++;
                wordCountSpan.textContent = this.count;
            }
        });

        // Hover effects for control buttons
        modal.querySelectorAll('.control-btn').forEach(button => {
            button.addEventListener('mouseover', () => button.style.backgroundColor = '#39A275');
            button.addEventListener('mouseout', () => button.style.backgroundColor = '#2A2A35');
        });

        // Settings button
        modal.querySelector('.settings-btn').addEventListener('click', () => this.createModesModal());

        // Start training button
        modal.querySelector('.start-training-btn').addEventListener('click', () => {
            this.selectedWords = this.getSelectedWords();
            modal.remove();
            this.startTraining();
        });
    }

    createModesModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1001;
        `;

        modal.innerHTML = `
            <div style="background: #1F1F27; width: 600px; border-radius: 12px; padding: 24px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                    <h2 style="color: white; font-size: 24px;">Выбор режимов</h2>
                    <button class="close-modes" style="color: #808080; background: none; border: none; font-size font-size: 24px; cursor: pointer;">×</button>
                </div>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div class="mode-item" data-mode="flashcards">
                        <input type="checkbox" ${this.trainingModes.flashcards ? 'checked' : ''} class="mode-checkbox">
                        <div>
                            <h3 style="color: white; margin: 0 0 4px 0;">Флешкарточки</h3>
                            <p style="color: #808080; margin: 0; font-size: 14px;">Ознакомление с новой лексикой</p>
                        </div>
                    </div>

                    <div class="mode-item" data-mode="translation">
                        <input type="checkbox" ${this.trainingModes.translation ? 'checked' : ''} class="mode-checkbox">
                        <div>
                            <h3 style="color: white; margin: 0 0 4px 0;">Проверка перевода</h3>
                            <p style="color: #808080; margin: 0; font-size: 14px;">Определение значения слова</p>
                        </div>
                    </div>

                    <div class="mode-item" data-mode="matching">
                        <input type="checkbox" ${this.trainingModes.matching ? 'checked' : ''} class="mode-checkbox">
                        <div>
                            <h3 style="color: white; margin: 0 0 4px 0;">Словесные пары</h3>
                            <p style="color: #808080; margin: 0; font-size: 14px;">Соединение слов с их значениями</p>
                        </div>
                    </div>

                    <div class="mode-item" data-mode="spelling">
                        <input type="checkbox" ${this.trainingModes.spelling ? 'checked' : ''} class="mode-checkbox">
                        <div>
                            <h3 style="color: white; margin: 0 0 4px 0;">Собери слово</h3>
                            <p style="color: #808080; margin: 0; font-size: 14px;">Создание слов из предложенных букв</p>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 24px; display: flex; justify-content: center; gap: 16px;">
                    <button class="cancel-modes" style="padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px; background: #2A2A35; color: white;">
                        Отмена
                    </button>
                    <button class="save-modes" style="padding: 12px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px; background: #39A275; color: white;">
                        Сохранить
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.addModesModalEventListeners(modal);
    }
    
            // Функция для обновления счетчика режимов
            addModesModalEventListeners(modal) {
                
                const updateModeCount = () => {
                    const selectedModes = Object.values(this.trainingModes).filter(Boolean).length;
                    const settingsBtn = document.querySelector('.settings-btn');
                    if (settingsBtn) {
                        const modeWord = selectedModes === 1 ? 'режим' : (selectedModes >= 2 && selectedModes <= 4 ? 'режима' : 'режимов');
                        settingsBtn.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                            ${selectedModes} ${modeWord}
                        `;
                    }
                };
            
                // Close buttons
                const closeButtons = modal.querySelectorAll('.close-modes, .cancel-modes');
                closeButtons.forEach(button => {
                    button.addEventListener('click', () => modal.remove());
                });
            
                // Mode items
                const modeItems = modal.querySelectorAll('.mode-item[data-mode]');
                modeItems.forEach(item => {
                    const checkbox = item.querySelector('.mode-checkbox');
                    const mode = item.dataset.mode;
            
                    // Initialize checkbox state and active class
                    checkbox.checked = this.trainingModes[mode];
                    if (checkbox.checked) item.classList.add('active');
            
                    const toggleMode = () => {
                        if (checkbox.checked) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                        // Обновление состояния режима и счетчика
                        this.trainingModes[mode] = checkbox.checked;
                        updateModeCount();
                    };
            
                    checkbox.addEventListener('change', toggleMode);
                    item.addEventListener('click', (e) => {
                        if (e.target !== checkbox) {
                            checkbox.checked = !checkbox.checked;
                            toggleMode();
                        }
                    });
                });
            
                // Save button
                modal.querySelector('.save-modes').addEventListener('click', () => {
                    let hasSelectedMode = false;
                    
                    modeItems.forEach(item => {
                        const mode = item.dataset.mode;
                        const checkbox = item.querySelector('.mode-checkbox');
                        this.trainingModes[mode] = checkbox.checked;
                        if (checkbox.checked) hasSelectedMode = true;
                    });
            
                    if (!hasSelectedMode) {
                        // If no modes selected, default to flashcards
                        this.trainingModes.flashcards = true;
                    }
            
                    updateModeCount(); // Обновление счетчика перед закрытием
                    modal.remove();
                });
            }

    getSelectedWords() {
        const checkedWords = document.querySelectorAll('.word-checkbox:checked');
        return Array.from(checkedWords)
            .map(checkbox => {
                const words = JSON.parse(localStorage.getItem('dictionary') || '[]');
                return words.find(word => word.text === checkbox.dataset.word);
            })
            .filter(Boolean)
            .slice(0, this.count);
    }
}

// Initialize the training module
const wordTraining = new WordTraining();

// Event listener for the study button
document.querySelector('.study-button').addEventListener('click', function() {
    const checkedWords = document.querySelectorAll('.word-checkbox:checked');
    const selectedWordsCount = checkedWords.length;

    if (selectedWordsCount === 0) {
        alert('Пожалуйста, сначала выберите слова для обучения');
        return;
    }

    wordTraining.initialize(selectedWordsCount);
});