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


/* ============================================
statistic cards
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    function updateStatistics() {
        // Получаем все слова из словаря
        const dictionary = JSON.parse(localStorage.getItem('dictionary') || '[]');
        const wordStats = JSON.parse(localStorage.getItem('wordStats') || '{}');

        // Подсчитываем количество слов
        const totalWords = dictionary.length; // Общее количество слов
        const wordsLearned = dictionary.filter(word => {
            const stats = wordStats[word.text] || { successfulAttempts: 0 };
            return stats.successfulAttempts >= 1;
        }).length;

        // Слова на изучении = общее количество - изученные
        const wordsStudying = totalWords - wordsLearned;

        // Обновляем отображение на странице
        document.getElementById('words-studying').textContent = wordsStudying;
        document.getElementById('words-learned').textContent = wordsLearned;

        // Вычисляем средний темп
        const now = new Date();
        const startDate = new Date(localStorage.getItem('studyStartDate') || now);
        const daysStudying = Math.max(1, Math.ceil((now - startDate) / (1000 * 60 * 60 * 24)));
        const averagePace = Math.round(wordsLearned / daysStudying);

        // Обновляем средний темп и рекорд
        document.getElementById('average-pace').textContent = averagePace;
        document.getElementById('daily-record').textContent =
            localStorage.getItem('dailyRecord') || '0';
        const streak = localStorage.getItem('dailyStreak') || '0';
        document.getElementById('daily-record').textContent = streak;

        // Проверяем и обновляем streak при загрузке
        const lastActiveDate = localStorage.getItem('lastActiveDate');
        if (lastActiveDate) {
            const lastDate = new Date(lastActiveDate);
            const currentDate = new Date();
            const diffTime = Math.abs(currentDate - lastDate);
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 1) {
                localStorage.setItem('dailyStreak', '0');
                document.getElementById('daily-record').textContent = '0';
            }
        }
        // Выводим в консоль для отладки
        console.log('Dictionary:', dictionary);
        console.log('Word Stats:', wordStats);
        console.log('Total words:', totalWords);
        console.log('Words studying:', wordsStudying);
        console.log('Words learned:', wordsLearned);
    }

    // Функция для обновления прогресса после тренировки
    function

        updateTrainingStats(correctAnswers, totalQuestions, selectedWords) {
        const wordStats = JSON.parse(localStorage.getItem('wordStats') || '{}');
        const successRate = correctAnswers / totalQuestions;
        const today = new Date().toDateString();

        // Получаем текущий streak и последний день активности
        let streak = parseInt(localStorage.getItem('dailyStreak') || '0');
        let lastActiveDate = localStorage.getItem('lastActiveDate');

        if (successRate >= 0.7) {
            selectedWords.forEach(word => {
                if (!wordStats[word.text]) {
                    wordStats[word.text] = {
                        successfulAttempts: 0,
                        learnedDate: null
                    };
                }
                if (wordStats[word.text].successfulAttempts === 0) {
                    wordStats[word.text].successfulAttempts = 1;
                    wordStats[word.text].learnedDate = today;
                }
            });

            // Обновляем streak
            if (!lastActiveDate) {
                streak = 1;
            } else {
                const lastDate = new Date(lastActiveDate);
                const currentDate = new Date();
                const diffTime = Math.abs(currentDate - lastDate);
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays === 0) {
                    // Сегодня уже занимались, streak не меняется
                } else if (diffDays === 1) {
                    streak += 1;
                } else {
                    streak = 1;
                }
            }

            localStorage.setItem('dailyStreak', streak.toString());
            localStorage.setItem('lastActiveDate', today);
            localStorage.setItem('wordStats', JSON.stringify(wordStats));

            const dailyRecordElement = document.getElementById('daily-record');
            if (dailyRecordElement) {
                dailyRecordElement.textContent = streak;
            }

            updateStatistics();
        }
    }

    // Инициализация
    if (!localStorage.getItem('studyStartDate')) {
        localStorage.setItem('studyStartDate', new Date().toISOString());
    }

    // Обновляем статистику при загрузке
    updateStatistics();

    // Делаем функции доступными глобально
    window.updateStatistics = updateStatistics;
    window.updateTrainingStats = updateTrainingStats;
});

// Модифицируем метод showCompletionModal
WordTraining.prototype.showCompletionModal = function () {
    const modal = document.createElement('div');
    // ... существующий код создания модального окна ...

    // Добавляем обновление статистики
    const totalQuestions = this.activeModesSequence.reduce((total, mode) => {
        if (mode === 'translation' || mode === 'matching' || mode === 'spelling') {
            return total + this.selectedWords.length;
        }
        return total;
    }, 0);

    window.updateTrainingStats(this.totalCorrectAnswers, totalQuestions, this.selectedWords);
};


/* ============================================
на изучении / изучено фильтры
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const switcherBtns = document.querySelectorAll('.switcher-btn');
    const switcherBar = document.querySelector('.switcher-bar');

    function updateSwitcherBar(button) {
        const buttonRect = button.getBoundingClientRect();
        const parentRect = button.parentElement.getBoundingClientRect();
        const offset = buttonRect.left - parentRect.left;
        switcherBar.style.width = `${buttonRect.width}px`;
        switcherBar.style.transform = `translateX(${offset}px)`;
    }

    function filterWords() {
        const activeFilter = document.querySelector('.switcher-btn.active').dataset.filter;
        const dictionary = JSON.parse(localStorage.getItem('dictionary') || '[]');
        const wordStats = JSON.parse(localStorage.getItem('wordStats') || '{}');

        const filteredWords = dictionary.filter(word => {
            const stats = wordStats[word.text] || { successfulAttempts: 0 };
            if (activeFilter === 'studying') {
                return stats.successfulAttempts < 1;
            } else {
                return stats.successfulAttempts >= 1;
            }
        });

        const wordsContainer = document.getElementById('wordsContainer');
        if (wordsContainer && typeof renderWords === 'function') {
            renderWords(filteredWords);
        }
    }

    switcherBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            switcherBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateSwitcherBar(this);
            filterWords();
        });
    });

    const studyingBtn = document.querySelector('.switcher-btn[data-filter="studying"]');
    if (studyingBtn) {
        switcherBtns.forEach(b => b.classList.remove('active'));
        studyingBtn.classList.add('active');
        updateSwitcherBar(studyingBtn);
        filterWords();
    }

    window.addEventListener('storage', filterWords);
});

/* ============================================
чекбокс для последующего изучения слов
============================================ */
document.addEventListener('DOMContentLoaded', function () {

    // функции кнопки добавить в изученное, вернуть на изучение, удалить:
    function updateBatchActionsVisibility() {
        const checkedBoxes = document.querySelectorAll('.word-checkbox:checked:not(.select-all-checkbox)');
        const batchActions = document.getElementById('batch-actions');
        const markLearnedBtn = document.getElementById('batchActionMarkLearned');
        const currentTab = document.querySelector('.switcher-btn.active').dataset.filter;

        if (checkedBoxes.length > 0) {
            batchActions.style.display = 'block';
            // Меняем текст кнопки в зависимости от вкладки
            if (currentTab === 'studying') {
                markLearnedBtn.textContent = 'Отметить как изученное';
            } else {
                markLearnedBtn.textContent = 'Вернуть на изучение';
            }
        } else {
            batchActions.style.display = 'none';
        }
    }

    // Добавьте обработчики для новых кнопок
    document.getElementById('batchActionBack').addEventListener('click', function () {
        document.querySelectorAll('.word-checkbox:checked').forEach(checkbox => {
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change'));
        });
    });

    document.getElementById('batchActionMarkLearned').addEventListener('click', function () {
        const checkedBoxes = document.querySelectorAll('.word-checkbox:checked:not(.select-all-checkbox)');
        const currentTab = document.querySelector('.switcher-btn.active').dataset.filter;
        const wordStats = JSON.parse(localStorage.getItem('wordStats') || '{}');

        checkedBoxes.forEach(checkbox => {
            const wordText = checkbox.dataset.word;
            if (!wordStats[wordText]) {
                wordStats[wordText] = { successfulAttempts: 0 };
            }
            wordStats[wordText].successfulAttempts = currentTab === 'studying' ? 1 : 0;
        });

        localStorage.setItem('wordStats', JSON.stringify(wordStats));
        window.dispatchEvent(new Event('storage'));
        updateStatistics();
    });

    document.getElementById('batchActionDelete').addEventListener('click', function () {
        if (confirm('Вы уверены, что хотите удалить выбранные слова?')) {
            const checkedBoxes = document.querySelectorAll('.word-checkbox:checked:not(.select-all-checkbox)');
            const words = loadWords();
            const updatedWords = words.filter(word =>
                !Array.from(checkedBoxes).some(checkbox =>
                    checkbox.dataset.word === word.text
                )
            );
            localStorage.setItem('dictionary', JSON.stringify(updatedWords));
            renderWords(updatedWords);
            updateStatistics();
        }
    });

    // Обновите обработчик изменения чекбоксов
    document.addEventListener('change', function (e) {
        if (e.target.classList.contains('word-checkbox')) {
            updateBatchActionsVisibility();
        }
    });

    // Добавьте обработчик для переключения вкладок
    document.querySelectorAll('.switcher-btn').forEach(btn => {
        btn.addEventListener('click', updateBatchActionsVisibility);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let selectedWords = new Set();

    // Функция добавления чекбоксов к существующим словам
    function addCheckboxesToWords() {
        // Для grid view
        document.querySelectorAll('.word-card .word-header').forEach(header => {
            if (!header.querySelector('.word-checkbox')) {
                const wordText = header.querySelector('h3').textContent;
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'word-checkbox';
                checkbox.dataset.word = wordText;
                // Вставляем чекбокс в начало div с действиями
                const actionsDiv = header.querySelector('.word-actions');
                actionsDiv.insertBefore(checkbox, actionsDiv.firstChild);
            }
        });

        // Для list view
        document.querySelectorAll('.list-item').forEach(item => {
            if (!item.querySelector('.word-checkbox')) {
                const wordText = item.querySelector('strong').textContent;
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'word-checkbox';
                checkbox.dataset.word = wordText;
                item.querySelector('.word-info').insertBefore(checkbox, item.querySelector('strong'));
            }
        });

        // Для table view
        const table = document.querySelector('.words-table');
        if (table) {
            // Добавление заголовков для чекбоксов, если его нет
            const headerRow = table.querySelector('thead tr');
            if (headerRow && !headerRow.querySelector('th:first-child').textContent.includes('Select')) {
                const selectTh = document.createElement('th');
                selectTh.style.width = '50px';
                selectTh.textContent = 'Select';
                headerRow.insertBefore(selectTh, headerRow.firstChild);
            }

            // Добавляем чекбоксы в строки таблицы
            table.querySelectorAll('tbody tr').forEach(row => {
                if (!row.querySelector('.word-checkbox')) {
                    const wordText = row.cells[0].textContent;
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.className = 'word-checkbox';
                    checkbox.dataset.word = wordText;
                    const newCell = row.insertCell(0);
                    newCell.style.textAlign = 'center';
                    newCell.appendChild(checkbox);
                }
            });
        }

        // Добавляем обработчики для всех чекбоксов
        document.querySelectorAll('.word-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const word = this.dataset.word;
                if (this.checked) {
                    selectedWords.add(word);
                } else {
                    selectedWords.delete(word);
                }
                updateStudyButton();
            });
        });
    }

    // Функция обновления кнопки изучения
    function updateStudyButton() {
        const studyButton = document.querySelector('.study-button');
        if (selectedWords.size > 0) {
            studyButton.classList.add('active');
            studyButton.textContent = `Учить слова (${selectedWords.size})`;
        } else {
            studyButton.classList.remove('active');
            studyButton.textContent = 'Учить слова';
        }
    }

    // Обработчик для кнопки "Учить слова"
    document.querySelector('.study-button').addEventListener('click', () => {
        if (selectedWords.size > 0) {
            const selectedWordsArray = Array.from(selectedWords);
            const words = JSON.parse(localStorage.getItem('dictionary') || '[]');
            const wordsForStudy = words.filter(word => selectedWordsArray.includes(word.text));
            localStorage.setItem('wordsForStudy', JSON.stringify(wordsForStudy));
            console.log('Selected words for study:', wordsForStudy);
        }
    });

    // Запускаем наблюдатель за изменениями в DOM
    const wordsContainer = document.getElementById('wordsContainer');
    if (wordsContainer) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    setTimeout(addCheckboxesToWords, 100);
                }
            });
        });

        observer.observe(wordsContainer, {
            childList: true,
            subtree: true
        });
    }

    // Инициализация чекбоксов при загрузке страницы
    setTimeout(addCheckboxesToWords, 500);

    // Добавляем обработчики для кнопок переключения вида
    document.querySelectorAll('.view-button').forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(addCheckboxesToWords, 300);
        });
    });
});

/* ============================================
Скрытие определенных функций
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const toggleCheckboxes = document.querySelectorAll('.filter-checkbox');

    // Функция для обновления элементов DOM
    function updateElements() {
        toggleCheckboxes.forEach(checkbox => {
            const targetClass = checkbox.dataset.target;
            const isVisible = checkbox.checked;
            const elements = document.querySelectorAll(targetClass);

            elements.forEach(element => {
                if (element) {
                    element.style.display = isVisible ? '' : 'none';
                }
            });
        });
    }

    // Функция модификации списочного представления
    function modifyListView() {
        const listItems = document.querySelectorAll('.list-item');

        listItems.forEach(item => {
            const wordInfo = item.querySelector('.word-info');
            if (!wordInfo) return;

            // Получаем текущий текст
            const strongElement = wordInfo.querySelector('strong');
            const wordText = strongElement ? strongElement.textContent : '';
            const wordTranslation = wordInfo.textContent.split('-')[1]?.trim() || '';

            // Получаем слово из словаря
            const dictionary = JSON.parse(localStorage.getItem('dictionary') || '[]');
            const word = dictionary.find(w => w.text === wordText);

            if (!word) return;

            wordInfo.innerHTML = `
                                    <strong>${wordText}</strong>
                                    <span class="word-phonetics">${word.phonetics || ''}</span>
                                    <span class="word-translation"> - ${wordTranslation}</span>
                                    ${word.type ? `<span class="word-type">(${word.type})</span>` : ''}
                                    ${word.example ? `<span class="word-example">"${word.example}"</span>` : ''}
                                    ${word.synonyms && word.synonyms.length > 0 ? `<span class="word-synonyms">Synonyms: ${word.synonyms.join(', ')}</span>` : ''}
                                `;
        });

        // После модификации применяем текущие настройки видимости
        updateElements();
    }

    // Обработчик переключения вида
    document.querySelectorAll('.view-button').forEach(button => {
        button.addEventListener('click', function () {
            // Даем время на отрисовку нового вида
            setTimeout(() => {
                if (this.dataset.view === 'list') {
                    modifyListView();
                }
                updateElements();
            }, 100);
        });
    });

    // Обработчик изменения чекбоксов
    toggleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const targetClass = this.dataset.target;
            const isVisible = this.checked;
            const labelText = this.nextElementSibling;

            // Обновляем текст метки
            if (isVisible) {
                labelText.textContent = `Скрыть ${labelText.textContent.replace('Показать ', '')}`;
                this.style.backgroundColor = '#39A275';
            } else {
                labelText.textContent = `Показать ${labelText.textContent.replace('Скрыть ', '')}`;
                this.style.backgroundColor = 'transparent';
            }

            updateElements();
        });

        // Инициализация цвета чекбокса
        if (checkbox.checked) {
            checkbox.style.backgroundColor = '#39A275';
        }
    });

    // Также нужно модифицировать функцию renderList в основном скрипте
    const originalRenderList = window.renderList;
    if (originalRenderList) {
        window.renderList = function (words) {
            originalRenderList(words);
            modifyListView();
        };
    }
});

/* ============================================
word-count
============================================ */
window.addEventListener('load', function () {
    function updateWordCount() {
        const countElement = document.querySelector('.word-count');
        if (!countElement) return;

        try {
            const dictionary = localStorage.getItem('dictionary');
            const words = dictionary ? JSON.parse(dictionary) : [];
            const wordStats = JSON.parse(localStorage.getItem('wordStats') || '{}');
            const currentFilter = document.getElementById('filterSelect').value;
            const studyFilter = document.querySelector('.switcher-btn.active').dataset.filter;

            let filteredWords = words.filter(word => word && word.text && word.translation);

            // Apply favorites filter if active
            if (currentFilter === 'favorites') {
                filteredWords = filteredWords.filter(word => word.favorite);
            }

            // Apply study/learned filter
            filteredWords = filteredWords.filter(word => {
                const stats = wordStats[word.text] || { successfulAttempts: 0 };
                return studyFilter === 'studying'
                    ? stats.successfulAttempts < 1
                    : stats.successfulAttempts >= 1;
            });

            const wordCount = filteredWords.length;
            countElement.textContent = `${wordCount} word${wordCount !== 1 ? 's' : ''}`;
        } catch (error) {
            console.error('Error updating word count:', error);
            countElement.textContent = '0 words';
        }
    }

    // Select All functionality
    const selectAllCheckbox = document.querySelector('.select-all-checkbox');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function () {
            const wordCheckboxes = document.querySelectorAll('.word-checkbox:not(.select-all-checkbox)');
            wordCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;

                // Trigger change event to update UI
                const event = new Event('change', { bubbles: true });
                checkbox.dispatchEvent(event);
            });
        });
    }

    window.addEventListener('storage', updateWordCount);

    const observer = new MutationObserver(updateWordCount);
    const wordsContainer = document.getElementById('wordsContainer');
    if (wordsContainer) {
        observer.observe(wordsContainer, {
            childList: true,
            subtree: true
        });
    }

    const filterSelect = document.getElementById('filterSelect');
    if (filterSelect) {
        filterSelect.addEventListener('change', updateWordCount);
    }
    const studyButtons = document.querySelectorAll('.switcher-btn');
    studyButtons.forEach(button => {
        button.addEventListener('click', updateWordCount);
    });

    updateWordCount();

    const originalAddWord = window.addWord;
    if (typeof originalAddWord === 'function') {
        window.addWord = async function () {
            await originalAddWord.apply(this, arguments);
            updateWordCount();
        };
    }
});

/* ============================================
Доп окно для изучени слов
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const wordInput = document.querySelector('.word-input');
    const addButton = document.querySelector('.add-button');
    const wordsContainer = document.getElementById('wordsContainer');
    let currentView = 'grid';

    // Создаем элемент для уведомлений
    const notification = document.createElement('div');
    notification.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    padding: 15px 25px;
                    border-radius: 8px;
                    color: white;
                    font-weight: 500;
                    display: none;
                    z-index: 1000;
                `;
    document.body.appendChild(notification);

    // Функция показа уведомления
    function showNotification(message, isSuccess = true) {
        notification.textContent = message;
        notification.style.backgroundColor = isSuccess ? '#39A275' : '#dc3545';
        notification.style.display = 'block';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

    // Функция добавления слова
    async function addWord() {
        const word = wordInput.value.trim();
        if (!word) return;

        addButton.disabled = true;
        wordInput.disabled = true;

        try {
            // Проверяем существующие слова
            const words = loadWords();
            if (words.some(w => w.text.toLowerCase() === word.toLowerCase())) {
                showNotification('Это слово уже есть в словаре', false);
                return;
            }

            // Получаем данные из всех API параллельно
            const [translationResponse, dictionaryResponse] = await Promise.all([
                // MyMemory API для перевода
                fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|ru`),

                // Free Dictionary API
                fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)
            ]);

            const translationData = await translationResponse.json();
            const translation = translationData.responseData.translatedText;

            const dictionaryData = await dictionaryResponse.json();

            let partOfSpeech = 'word';
            let example = '';
            let definition = '';
            let phonetics = '';
            let synonyms = [];
            let antonyms = [];

            // Обработка данных из Free Dictionary API
            if (Array.isArray(dictionaryData) && dictionaryData.length > 0) {
                const entry = dictionaryData[0];

                // Получаем фонетическую транскрипцию
                if (!word.phonetics) {
                    phonetics =
                        entry.phonetic ||
                        (entry.phonetics && entry.phonetics.find(p => p.text)?.text) ||
                        '';

                    if (phonetics) {
                        word.phonetics = phonetics;
                        updated = true;
                    }
                }

                if (entry.meanings && entry.meanings.length > 0) {
                    // Ищем первый пример использования среди всех значений
                    let foundExample = false;
                    let foundPartOfSpeech = '';

                    // Проходим по всем значениям слова
                    for (const meaning of entry.meanings) {
                        // Собираем синонимы и антонимы
                        if (meaning.synonyms) {
                            synonyms = [...new Set([...synonyms, ...meaning.synonyms])];
                        }
                        if (meaning.antonyms) {
                            antonyms = [...new Set([...antonyms, ...meaning.antonyms])];
                        }

                        if (meaning.definitions && meaning.definitions.length > 0) {
                            // Если еще не нашли пример, ищем его
                            if (!foundExample) {
                                const definitionWithExample = meaning.definitions.find(def => def.example);
                                if (definitionWithExample) {
                                    example = definitionWithExample.example;
                                    definition = definitionWithExample.definition;
                                    foundExample = true;
                                    // Если нашли пример, используем часть речи из этого значения
                                    foundPartOfSpeech = meaning.partOfSpeech;
                                }
                            }

                            // Если все еще нет определения, берем первое
                            if (!definition) {
                                definition = meaning.definitions[0].definition;
                            }
                        }
                    }

                    // Устанавливаем часть речи
                    partOfSpeech = foundPartOfSpeech || entry.meanings[0].partOfSpeech || 'word';
                }
            }

            // Если API не вернул часть речи, попробуем определить по окончанию слова
            if (partOfSpeech === 'word') {
                if (word.endsWith('ly')) partOfSpeech = 'adverb';
                else if (word.endsWith('ing')) partOfSpeech = 'verb';
                else if (word.endsWith('ed')) partOfSpeech = 'verb';
                else if (word.endsWith('tion')) partOfSpeech = 'noun';
                else if (word.endsWith('ness')) partOfSpeech = 'noun';
                else if (word.endsWith('ful')) partOfSpeech = 'adjective';
            }

            // Создаем новое слово
            const capitalizeFirstLetter = (str) => {
                if (!str) return str;
                return str.charAt(0).toUpperCase() + str.slice(1);
            };
            const getFullPartOfSpeech = (abbr) => {
                const partsOfSpeech = {
                    'noun': 'Noun',
                    'verb': 'Verb',
                    'adj': 'Adjective',
                    'adv': 'Adverb',
                    'adjective': 'Adjective',
                    'adverb': 'Adverb',
                    'pronoun': 'Pronoun',
                    'preposition': 'Preposition',
                    'conjunction': 'Conjunction',
                    'interjection': 'Interjection',
                    'word': 'Word'
                };
                return partsOfSpeech[abbr.toLowerCase()] || capitalizeFirstLetter(abbr);
            };

            // Создаем новое слово
            const newWord = {
                text: capitalizeFirstLetter(word),
                translation: capitalizeFirstLetter(translation),
                type: getFullPartOfSpeech(partOfSpeech),
                phonetics: phonetics || '',
                example: example,
                definition: definition,
                synonyms: synonyms.slice(0, 5),
                antonyms: antonyms.slice(0, 5),
                dateAdded: Date.now(),
                favorite: false
            };

            // Добавляем слово в словарь
            words.push(newWord);
            localStorage.setItem('dictionary', JSON.stringify(words));

            // Очищаем поле ввода и обновляем отображение
            wordInput.value = '';
            renderWords(words);

            // Показываем уведомление об успехе
            showNotification('Слово успешно добавлено!');

        } catch (error) {
            console.error('Error adding word:', error);
            showNotification('Произошла ошибка при добавлении слова', false);
        } finally {
            addButton.disabled = false;
            wordInput.disabled = false;
        }
    }

    // Функция загрузки слов
    function loadWords() {
        try {
            const data = localStorage.getItem('dictionary');
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading dictionary:', error);
            return [];
        }
    }

    // Вспомогательные функции
    function pronounceWord(word) {
        if (!word) return;
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }
    function toggleFavorite(word) {
        if (!word || !word.text) return;

        // Загружаем слова из localStorage
        const words = loadWords();
        const wordToUpdate = words.find(w => w.text.toLowerCase() === word.text.toLowerCase());

        if (wordToUpdate) {
            // Переключаем статус избранного
            wordToUpdate.favorite = !wordToUpdate.favorite;

            // Сохраняем изменения в localStorage
            localStorage.setItem('dictionary', JSON.stringify(words));

            const selectors = {
                grid: '.word-card',
                list: '.list-item',
                table: 'tr',
            };

            const activeFilter = document.getElementById('filterSelect').value;

            if (activeFilter === 'favorites' && !wordToUpdate.favorite) {
                // Если активен фильтр "Избранное" и слово удаляется из избранного,
                // плавно скрываем элемент и удаляем его
                Object.entries(selectors).forEach(([view, selector]) => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(element => {
                        const wordElement =
                            view === 'table'
                                ? element.querySelector('td:first-of-type')
                                : element.querySelector('h3, strong');

                        if (
                            wordElement &&
                            wordElement.textContent.toLowerCase() === word.text.toLowerCase()
                        ) {
                            element.style.transition = 'opacity 0.3s ease';
                            element.style.opacity = '0';
                            setTimeout(() => {
                                element.remove();
                            }, 300);
                        }
                    });
                });
            } else {
                // Обновление состояние кнопки
                Object.entries(selectors).forEach(([view, selector]) => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(element => {
                        const wordElement =
                            view === 'table'
                                ? element.querySelector('td:first-of-type')
                                : element.querySelector('h3, strong');

                        if (
                            wordElement &&
                            wordElement.textContent.toLowerCase() === word.text.toLowerCase()
                        ) {
                            const favoriteButton = element.querySelector(
                                '.action-button.favorite'
                            );
                            if (favoriteButton) {
                                if (wordToUpdate.favorite) {
                                    favoriteButton.classList.add('active');
                                } else {
                                    favoriteButton.classList.remove('active');
                                }
                            }
                        }
                    });
                });
            }
        }
    }

    function deleteWord(word) {
        if (!word || !word.text) return;
        if (confirm(`Are you sure you want to delete "${word.text}"?`)) {
            const words = loadWords().filter(w =>
                w.text.toLowerCase() !== word.text.toLowerCase()
            );
            localStorage.setItem('dictionary', JSON.stringify(words));
            renderWords(words);
        }
    }

    window.renderWords = function (wordsToRender = loadWords()) {
        if (!wordsContainer) return;

        // Проверяем активный фильтр
        const activeFilter = document.querySelector('.switcher-btn.active').dataset.filter;
        const wordStats = JSON.parse(localStorage.getItem('wordStats') || '{}');

        // Фильтруем слова
        const validWords = wordsToRender.filter(word => {
            if (!word || !word.text || !word.translation) return false;
            const stats = wordStats[word.text] || { successfulAttempts: 0 };
            return activeFilter === 'studying' ? stats.successfulAttempts < 1 : stats.successfulAttempts >= 1;
        });

        wordsContainer.innerHTML = '';

        if (validWords.length === 0) {
            wordsContainer.innerHTML = `
                            <div class="empty-state">
                                <p>No words found.</p>
                            </div>
                        `;
            return;
        }

        switch (currentView) {
            case 'grid': renderGrid(validWords); break;
            case 'list': renderList(validWords); break;
            case 'table': renderTable(validWords); break;
        }
    }

    function renderGrid(words) {
        wordsContainer.className = 'words-grid';
        words.forEach(word => {
            if (!word || !word.text || !word.translation) return;

            const card = document.createElement('div');
            card.className = 'word-card';

            card.innerHTML = `
                            <div class="word-header">
                                <div class="word-info">
                                    <h3>${word.text}</h3>
                                    ${word.phonetics ? `<div class="word-phonetics">${word.phonetics}</div>` : ''}
                                    <p class="word-translation">${word.translation}</p>
                                </div>
                                <div class="word-actions">
                                    <button class="action-button pronounce" title="Pronounce">🔊</button>
                                    <button class="action-button favorite ${word.favorite ? 'active' : ''}" title="Favorite">★</button>
                                    <button class="action-button delete" title="Delete">✖</button>
                                </div>
                            </div>
                            ${word.type ? `<div class="word-type">${word.type}</div>` : ''}
                            ${word.example ? `<div class="word-example">"${word.example}"</div>` : ''}
                            ${word.synonyms && word.synonyms.length > 0 ? `
                                <div class="word-synonyms">
                                    Synonyms: ${word.synonyms.join(', ')}
                                </div>
                            ` : ''}
                        `;

            card.querySelector('.pronounce').addEventListener('click', () => pronounceWord(word.text));
            card.querySelector('.favorite').addEventListener('click', () => toggleFavorite(word));
            card.querySelector('.delete').addEventListener('click', () => deleteWord(word));

            wordsContainer.appendChild(card);
        });
    }

    function renderList(words) {
        wordsContainer.className = 'words-list';
        words.forEach(word => {
            if (!word || !word.text || !word.translation) return;

            const listItem = document.createElement('div');
            listItem.className = 'list-item';


            listItem.innerHTML = `
                            <div class="word-info">
                                <strong>${word.text}</strong>
                                ${word.phonetics ? `<span class="word-phonetics">${word.phonetics}</span>` : ''}
                                ${word.translation ? `<span class="word-translation"> - ${word.translation}</span>` : ''}
                                ${word.type ? `<span class="word-type">(${word.type})</span>` : ''}
                                ${word.example ? `<span class="word-example">"${word.example}"</span>` : ''}
                                ${word.synonyms && word.synonyms.length > 0 ? `
                                    <span class="word-synonyms">Synonyms: ${word.synonyms.join(', ')}</span>
                                ` : ''}
                            </div>
                            <div class="word-actions">
                                <button class="action-button pronounce" title="Pronounce">🔊</button>
                                <button class="action-button favorite ${word.favorite ? 'active' : ''}" title="Favorite">★</button>
                                <button class="action-button delete" title="Delete">✖</button>
                            </div>
                        `;

            // Добавляем обработчики событий
            listItem.querySelector('.pronounce').addEventListener('click', () => pronounceWord(word.text));
            listItem.querySelector('.favorite').addEventListener('click', () => toggleFavorite(word));
            listItem.querySelector('.delete').addEventListener('click', () => deleteWord(word));

            wordsContainer.appendChild(listItem);
        });

        // После рендеринга применяем текущие настройки видимости
        const checkboxes = document.querySelectorAll('.filter-checkbox');
        checkboxes.forEach(checkbox => {
            const targetClass = checkbox.dataset.target;
            const isVisible = checkbox.checked;
            const elements = document.querySelectorAll(targetClass);
            elements.forEach(element => {
                if (element) {
                    element.style.display = isVisible ? '' : 'none';
                }
            });
        });
    }

    /* отличная логика скрытия  */
    function renderTable(words) {
        // Не очищаем полностью className
        if (wordsContainer.classList.contains('words-grid')) {
            wordsContainer.classList.remove('words-grid');
        }
        if (wordsContainer.classList.contains('words-list')) {
            wordsContainer.classList.remove('words-list');
        }

        const table = document.createElement('table');
        table.className = 'words-table';

        // Очищаем содержимое контейнера, сохраняя классы
        while (wordsContainer.firstChild) {
            wordsContainer.removeChild(wordsContainer.firstChild);
        }

        table.innerHTML = `
                        <thead>
                            <tr>
                                <th>Word</th>
                                <th class="word-translation">Translation</th>
                                <th class="word-type">Type</th>
                                <th class="word-phonetics">Phonetics</th>
                                <th class="word-synonyms">Synonyms</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${words.map(word => `
                                <tr data-word="${word.text}">
                                    <td>${word.text}</td>
                                    <td class="word-translation">${word.translation || '-'}</td>
                                    <td class="word-type">${word.type || '-'}</td>
                                    <td class="word-phonetics">${word.phonetics || '-'}</td>
                                    <td class="word-synonyms">${word.synonyms && word.synonyms.length > 0 ? word.synonyms.join(', ') : '-'}</td>
                                    <td class="table-actions">
                                        <button class="action-button pronounce" title="Pronounce">🔊</button>
                                        <button class="action-button favorite ${word.favorite ? 'active' : ''}" title="Favorite">★</button>
                                        <button class="action-button delete" title="Delete">✖</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    `;

        wordsContainer.appendChild(table);

        // Add styles to maintain table structure
        table.addEventListener('click', function (event) {
            const target = event.target;
            if (!target.classList.contains('action-button')) return;

            const row = target.closest('tr');
            if (!row) return;

            const wordText = row.dataset.word;
            const word = words.find(w => w.text === wordText);

            if (!word) return;

            if (target.classList.contains('pronounce')) {
                pronounceWord(word.text);
            }
            else if (target.classList.contains('favorite')) {
                const isInFavorites = document.getElementById('filterSelect').value === 'favorites';

                toggleFavorite(word);
                target.classList.toggle('active');

                if (isInFavorites && !target.classList.contains('active')) {
                    row.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    row.style.opacity = '0';
                    row.style.transform = 'translateX(20px)';

                    setTimeout(() => {
                        row.remove();
                        if (table.querySelectorAll('tbody tr').length === 0) {
                            wordsContainer.innerHTML = `
                                            <div class="empty-state">
                                                <p>No favorite words found</p>
                                            </div>
                                        `;
                        }
                    }, 300);
                }
            }
            else if (target.classList.contains('delete')) {
                const isInFavorites = document.getElementById('filterSelect').value === 'favorites';

                // Анимация удаления
                row.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                row.style.opacity = '0';
                row.style.transform = 'translateX(20px)';

                setTimeout(() => {
                    deleteWord(word);
                    // Не вызываем renderWords() напрямую
                    // Вместо этого запускаем фильтрацию заново
                    if (isInFavorites) {
                        const select = document.getElementById('filterSelect');
                        // Это вызовет событие change, которое обновит отображение
                        select.dispatchEvent(new Event('change'));
                    }
                }, 300);
            }
        });

        document.head.appendChild(style);

        // Apply current visibility settings
        const checkboxes = document.querySelectorAll('.filter-checkbox');
        checkboxes.forEach(checkbox => {
            const targetClass = checkbox.dataset.target;
            const isVisible = checkbox.checked;
            updateColumnVisibility(targetClass, isVisible);
        });

        // Add button handlers
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const wordText = row.dataset.word;
            const word = words.find(w => w.text === wordText);

            if (word) {
                const pronounceBtn = row.querySelector('.pronounce');
                const favoriteBtn = row.querySelector('.favorite');
                const deleteBtn = row.querySelector('.delete');

                if (pronounceBtn) {
                    pronounceBtn.addEventListener('click', () => pronounceWord(word.text));
                }

                if (favoriteBtn) {
                    favoriteBtn.addEventListener('click', () => {
                        const isInFavorites = document.getElementById('filterSelect').value === 'favorites';

                        toggleFavorite(word);
                        favoriteBtn.classList.toggle('active');

                        if (isInFavorites && !favoriteBtn.classList.contains('active')) {
                            row.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                            row.style.opacity = '0';
                            row.style.transform = 'translateX(20px)';

                            setTimeout(() => {
                                row.remove();
                                if (table.querySelectorAll('tbody tr').length === 0) {
                                    wordsContainer.innerHTML = `
                                                    <div class="empty-state">
                                                        <p>No favorite words found</p>
                                                    </div>
                                                `;
                                }
                            }, 300);
                        }
                    });
                }

                if (deleteBtn) {
                    deleteBtn.addEventListener('click', () => deleteWord(word));
                }
            }
        });
    }

    // Add event listeners for checkboxes
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const targetClass = this.dataset.target;
            const isVisible = this.checked;
            updateColumnVisibility(targetClass, isVisible);
        });
    });

    // Добавляем обработчики событий
    addButton.addEventListener('click', addWord);
    wordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addWord();
    });

    // Обработчики для фильтров и поиска
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const words = loadWords();
        const filteredWords = words.filter(word =>
            word && word.text && word.translation &&
            (word.text.toLowerCase().includes(searchTerm) ||
                word.translation.toLowerCase().includes(searchTerm))
        );
        renderWords(filteredWords);
    });

    const filterSelect = document.getElementById('filterSelect');
    filterSelect.addEventListener('change', function () {
        // Store current filter value
        const currentFilter = this.value;

        // Get and filter words
        const words = loadWords();
        const filteredWords = currentFilter === 'favorites'
            ? words.filter(word => word && word.favorite)
            : words;

        // Render filtered words
        renderWords(filteredWords);
    });

    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', function () {
        const words = loadWords();
        if (this.value === 'alphabetical') {
            words.sort((a, b) => a.text.localeCompare(b.text));
        } else {
            words.sort((a, b) => b.dateAdded - a.dateAdded);
        }
        renderWords(words);
    });

    document.querySelectorAll('.view-button').forEach(button => {
        button.addEventListener('click', function () {
            // Get current filter state
            const currentFilter = document.getElementById('filterSelect').value;

            // Update view buttons UI
            document.querySelectorAll('.view-button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Update current view
            currentView = this.dataset.view;

            // Get words and apply current filter
            const words = loadWords();
            const filteredWords = currentFilter === 'favorites'
                ? words.filter(word => word && word.favorite)
                : words;

            // Render with current filter applied
            renderWords(filteredWords);
        });
    });

    // Обработчик для кнопки обновления слов
    const updateButton = document.getElementById('updateWordsButton');
    if (updateButton) {
        updateButton.addEventListener('click', async (e) => {
            e.preventDefault();
            updateButton.disabled = true;
            updateButton.textContent = 'Обновление...';

            const capitalizeFirstLetter = (str) => {
                if (!str) return str;
                return str.charAt(0).toUpperCase() + str.slice(1);
            };

            try {
                const words = loadWords();
                let updatedCount = 0;
                const totalWords = words.length;

                showNotification(`Starting update of ${totalWords} words...`);

                for (let word of words) {
                    if (!word.definition || !word.phonetics || !word.example ||
                        !word.synonyms || !word.antonyms) {
                        try {
                            // Сначала пробуем получить всю фразу
                            let response = await fetch(
                                `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.text)}`
                            );

                            // Если фраза не найдена, пробуем первое слово
                            if (!response.ok) {
                                const firstWord = word.text.split(' ')[0];
                                response = await fetch(
                                    `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(firstWord)}`
                                );
                            }

                            if (!response.ok) {
                                console.log(`Skipping word "${word.text}" - Could not find in dictionary`);
                                continue;
                            }

                            const dictionaryData = await response.json();

                            if (Array.isArray(dictionaryData) && dictionaryData.length > 0) {
                                const entry = dictionaryData[0];
                                let updated = false;

                                if (!word.phonetics) {
                                    phonetics =
                                        entry.phonetic ||
                                        (entry.phonetics && entry.phonetics.find(p => p.text)?.text) ||
                                        '';

                                    if (phonetics) {
                                        word.phonetics = phonetics;
                                        updated = true;
                                    }
                                }
                                phonetics =
                                    entry.phonetic ||
                                    (entry.phonetics && entry.phonetics[0]?.text) ||
                                    '';

                                if (entry.meanings && entry.meanings.length > 0) {
                                    if (!word.definition) {
                                        const firstDefinition = entry.meanings[0].definitions[0];
                                        if (firstDefinition && firstDefinition.definition) {
                                            word.definition = firstDefinition.definition;
                                            updated = true;
                                        }
                                    }

                                    if (!word.example) {
                                        for (const meaning of entry.meanings) {
                                            const definitionWithExample = meaning.definitions?.find(def => def.example);
                                            if (definitionWithExample) {
                                                word.example = definitionWithExample.example;
                                                updated = true;
                                                break;
                                            }
                                        }
                                    }

                                }
                                if (updated) {
                                    // Применяем капитализацию к существующим полям
                                    word.text = capitalizeFirstLetter(word.text);
                                    word.translation = capitalizeFirstLetter(word.translation);
                                    if (word.type) {
                                        word.type = getFullPartOfSpeech(word.type);
                                    }

                                    updatedCount++;
                                    // Сохраняем после каждого обновленного слова
                                    localStorage.setItem('dictionary', JSON.stringify(words));
                                    renderWords(words);
                                    showNotification(`Updated ${updatedCount} out of ${totalWords} words...`);
                                }

                                /* if (updated) {
                                    updatedCount++;
                                    // Сохраняем после каждого обновленного слова
                                    localStorage.setItem('dictionary', JSON.stringify(words));
                                    renderWords(words);
                                    showNotification(`Updated ${updatedCount} out of ${totalWords} words...`);
                                } */
                            }
                        } catch (error) {
                            console.error(`Error updating word ${word.text}:`, error);
                        }
                        // Пауза между запросами
                        await new Promise(resolve => setTimeout(resolve, 1500));
                    }
                }

                if (updatedCount > 0) {
                    showNotification(`Completed! Updated ${updatedCount} words!`);
                } else {
                    showNotification('No words needed updating!');
                }
            } catch (error) {
                console.error('Error during update:', error);
                showNotification('An error occurred during update', false);
            } finally {
                updateButton.disabled = false;
                updateButton.textContent = 'Обновить';
            }
        });
    }

    // Инициализация
    renderWords();
});

/*--------------------------------------------------------------
# КРИТИЧЕСКИЙ JavaScript для мобильной таблицы
# Добавьте этот код в конец файла word-training.js
--------------------------------------------------------------*/

// Функция для добавления data-label атрибутов к таблице
function addMobileTableLabels() {
    const table = document.querySelector('.words-table');
    if (!table) return;

    const headers = ['Выбрать', 'Слово', 'Перевод', 'Тип', 'Фонетика', 'Синонимы', 'Действия'];
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, index) => {
            if (headers[index]) {
                cell.setAttribute('data-label', headers[index]);
            }
        });
    });
}

// Функция для оборачивания контента в main-content
function wrapMainContent() {
    const body = document.body;
    const nav = document.querySelector('.left-nav');
    const cursor = document.querySelector('.js-cursor-init');
    
    // Создаем main-content обертку
    const mainContent = document.createElement('main');
    mainContent.className = 'main-content';
    
    // Переносим все элементы кроме навигации и курсора в main-content
    const children = Array.from(body.children);
    children.forEach(child => {
        if (child !== nav && child !== cursor && child.id !== 'mobile-menu-toggle') {
            mainContent.appendChild(child);
        }
    });
    
    // Добавляем main-content в body
    body.appendChild(mainContent);
}

// Функция для принудительного применения мобильных стилей
function forceMobileStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Критические мобильные стили с максимальным приоритетом */
        @media (max-width: 768px) {
            body {
                padding: 0 0.75rem !important;
                padding-top: 70px !important;
                margin: 0 auto !important;
                max-width: 100% !important;
            }
            
            .words-table {
                min-width: unset !important;
                width: 100% !important;
            }
            
            .words-table thead {
                display: none !important;
            }
            
            .words-table tbody {
                display: flex !important;
                flex-direction: column !important;
                gap: 16px !important;
            }
            
            .words-table tr {
                display: block !important;
                background: var(--card-bg) !important;
                border-radius: 12px !important;
                padding: 16px !important;
                margin: 0 !important;
            }
            
            .words-table td {
                display: flex !important;
                justify-content: space-between !important;
                padding: 8px 0 !important;
                border-bottom: 1px solid var(--card-stroke) !important;
            }
            
            .words-table td:last-child {
                border-bottom: none !important;
                justify-content: center !important;
            }
            
            .words-table td::before {
                content: attr(data-label) !important;
                font-weight: 600 !important;
                color: var(--card-text-primary) !important;
                flex: 0 0 30% !important;
            }
            
            .words-table td:first-child {
                display: none !important;
            }
            
            .stats-cards {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 12px !important;
            }
            
            .words-grid {
                grid-template-columns: 1fr !important;
            }
        }
        
        @media (max-width: 480px) {
            .stats-cards {
                grid-template-columns: 1fr !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Наблюдатель за изменениями в DOM для автоматического обновления таблиц
function setupTableObserver() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.matches('.words-table') || node.querySelector('.words-table')) {
                            setTimeout(addMobileTableLabels, 10);
                        }
                    }
                });
            }
        });
    });

    // Наблюдаем за изменениями в контейнере слов
    const wordsContainer = document.querySelector('.words-container') || 
                          document.querySelector('#wordsContainer') || 
                          document.body;
    
    if (wordsContainer) {
        observer.observe(wordsContainer, { 
            childList: true, 
            subtree: true 
        });
    }
}

// Функция для проверки мобильного устройства
function isMobileDevice() {
    return window.innerWidth <= 768 || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Функция инициализации мобильных исправлений
function initMobileFixes() {
    // Добавляем класс для мобильных устройств
    if (isMobileDevice()) {
        document.body.classList.add('is-mobile-device');
    }
    
    // Принудительно применяем мобильные стили
    forceMobileStyles();
    
    // Оборачиваем контент
    wrapMainContent();
    
    // Добавляем data-label атрибуты к существующим таблицам
    addMobileTableLabels();
    
    // Настраиваем наблюдатель за новыми таблицами
    setupTableObserver();
    
    // Добавляем обработчик изменения размера окна
    window.addEventListener('resize', () => {
        setTimeout(() => {
            addMobileTableLabels();
        }, 100);
    });
}

// Переопределяем функцию renderTable если она существует
if (typeof window.renderTable === 'function') {
    const originalRenderTable = window.renderTable;
    window.renderTable = function(...args) {
        const result = originalRenderTable.apply(this, args);
        setTimeout(addMobileTableLabels, 10);
        return result;
    };
}

// Инициализируем исправления при загрузке DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileFixes);
} else {
    initMobileFixes();
}

// Дополнительная инициализация после полной загрузки страницы
window.addEventListener('load', () => {
    setTimeout(() => {
        addMobileTableLabels();
        
        // Принудительно обновляем стили
        const event = new Event('resize');
        window.dispatchEvent(event);
    }, 100);
});

// Экспортируем функции для внешнего использования
window.addMobileTableLabels = addMobileTableLabels;
window.forceMobileStyles = forceMobileStyles;