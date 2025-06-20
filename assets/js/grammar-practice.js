function getPageTitleFromData(topic, subtitle, exerciseType) {
    try {
        // Получаем данные упражнения
        const exerciseData = window.grammarExercises[topic]?.[subtitle];

        if (exerciseData && exerciseData.title) {
            // Определяем название типа упражнения
            const exerciseTypeNames = {
                'multipleChoice': 'Multiple Choice',
                'fillGaps': 'Fill in the Gaps',
                'sentenceBuilding': 'Sentence Building'
            };

            const exerciseTypeName = exerciseTypeNames[exerciseType] || 'Exercise';

            // Возвращаем: "Тип упражнения - Название страницы"
            return `${exerciseTypeName} - ${exerciseData.title}`;
        }

        // Если нет title, используем старый формат
        const pageNum = subtitle.match(/page(\d+)/)?.[1] || '1';
        const exerciseTypeNames = {
            'multipleChoice': 'Multiple Choice',
            'fillGaps': 'Fill in the Gaps',
            'sentenceBuilding': 'Sentence Building'
        };
        const exerciseTypeName = exerciseTypeNames[exerciseType] || 'Exercise';
        return `${exerciseTypeName} - Exercise Set ${pageNum}`;

    } catch (error) {
        console.log('Error getting page title:', error);
        const pageNum = subtitle.match(/page(\d+)/)?.[1] || '1';
        return `Exercise Set ${pageNum}`;
    }
}


/* ============================================
Initialize interactive functionality on page load
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    console.log('Initializing grammar practice functionality');

    // Initialize the interactive elements
    initializeCategoryToggles();
    setupLevelFilters();
    initializeTopicFilters();
    initializeExerciseFilters();
    initializeContextFilters();
    initializeSearch();

    // Setup audience buttons last to avoid triggering reloads
    setupAudienceButtons();

    // Apply all filters on page load
    applyAllFilters();

    // Initialize grammar exercise modal functionality
    setupExerciseButtons();

    console.log('Initialization complete. DOM is fully loaded and parsed.');
});
document.addEventListener('DOMContentLoaded', function() {
    // Перехватываем клики на кнопки упражнений
    document.querySelectorAll('.exercise-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Получаем карточку и категорию
            const card = this.closest('.grammar-card');
            if (!card) return;
            
            const category = card.closest('.grammar-category');
            if (!category) return;
            
            // Получаем данные
            const topic = category.getAttribute('data-topic');
            const topicName = card.getAttribute('data-topic-name') || '';
            
            // Выводим для отладки
            console.log("Clicked exercise button");
            console.log("Topic:", topic);
            console.log("Topic name from data attribute:", topicName);
            
            // Получаем тип упражнения
            const exerciseType = this.getAttribute('data-exercise');
            const href = this.getAttribute('href');
            
            // Загружаем файл упражнений
            if (href) {
                const script = document.createElement('script');
                script.src = href;
                document.body.appendChild(script);
            }
            
            // Имитируем клик после небольшой задержки, чтобы скрипт успел загрузиться
            setTimeout(() => {
                console.log("Triggering original click handler");
                if (this.originalClick && typeof this.originalClick === 'function') {
                    this.originalClick();
                }
            }, 500);
        });
        
        // Сохраняем оригинальный обработчик
        button.originalClick = button.onclick;
    });
});

/* ============================================
Audience Toggle - Handle Adults/Children buttons
============================================ */
function setupAudienceButtons() {
    console.log('Setting up audience buttons');

    const audienceButtons = document.querySelectorAll('.audience-btn');

    // Debug information
    console.log(`Found ${audienceButtons.length} audience buttons`);

    // First, remove old listeners from all buttons to avoid duplicates
    const newButtons = [];
    audienceButtons.forEach(button => {
        const isLink = button.tagName.toLowerCase() === 'a';
        const isActive = button.classList.contains('active');
        const audience = button.getAttribute('data-audience');

        console.log(`Found audience button: ${button.textContent} - Type: ${button.tagName} - Is Link: ${isLink} - Active: ${isActive} - Audience: ${audience}`);

        // Remove old listeners by cloning and replacing
        const newButton = button.cloneNode(true);
        if (button.parentNode) {
            button.parentNode.replaceChild(newButton, button);
        }
        newButtons.push(newButton);
    });

    // Now add new click events for all audience buttons
    newButtons.forEach(button => {
        const isLink = button.tagName.toLowerCase() === 'a';
        const audience = button.getAttribute('data-audience');

        button.addEventListener('click', function (event) {
            console.log(`Audience button clicked: ${this.textContent} (${audience})`);

            // If already active, do nothing
            if (this.classList.contains('active')) {
                console.log('Button already active, no action needed');
                event.preventDefault(); // Prevent navigation if it's a link
                return;
            }

            // Remove active class from all buttons
            newButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Apply audience filter and store selection
            console.log(`Switching to audience: ${audience}`);
            localStorage.setItem('selectedAudience', audience);

            // Handle navigation for children button only
            if (audience === 'children' && isLink) {
                // Let the default link behavior happen for children
                console.log('Allowing navigation to children page');
                // No preventDefault() here - let the link work normally

                // But, if we need to add a delay for visual feedback:
                if (this.hasAttribute('href')) {
                    const href = this.getAttribute('href');
                    event.preventDefault(); // Prevent immediate navigation
                    setTimeout(() => {
                        window.location.href = href;
                    }, 100);
                }
            } else {
                // For adults button or any non-link, prevent default navigation
                event.preventDefault();

                // If we're on children page but clicked adults button, go back to main page
                if (audience === 'adults' && window.location.pathname.includes('kids')) {
                    // Extract the base filename from current path
                    const currentPath = window.location.pathname;
                    const basePath = currentPath.replace('-kids.html', '.html');
                    console.log(`Navigating from kids page to main page: ${basePath}`);

                    setTimeout(() => {
                        window.location.href = basePath;
                    }, 100);
                }
            }
        });
    });

    // Set the correct button as active based on current page
    const currentPage = window.location.pathname.includes('kids') ? 'children' : 'adults';
    console.log(`Current page appears to be for: ${currentPage}`);

    const buttonToActivate = document.querySelector(`.audience-btn[data-audience="${currentPage}"]`);
    if (buttonToActivate && !buttonToActivate.classList.contains('active')) {
        // Just add the active class, don't trigger a click
        newButtons.forEach(btn => btn.classList.remove('active'));
        buttonToActivate.classList.add('active');
        console.log(`Set ${currentPage} button as active without triggering click`);
    }
}

/* ============================================
Level Filters - Setup and apply level filters
============================================ */
function setupLevelFilters() {
    console.log('Setting up level filters');

    // Reset level filters first
    resetLevelFilters();

    // Set up button click events
    const levelButtons = document.querySelectorAll('.level-btn');
    const allLevelsButton = document.querySelector('.level-btn[data-level="all"]');

    // Debug information
    console.log(`Found ${levelButtons.length} level buttons`);
    console.log(`All Levels button found: ${allLevelsButton !== null}`);

    if (!allLevelsButton) {
        console.warn('All Levels button not found!');
    }

    levelButtons.forEach(button => {
        const level = button.getAttribute('data-level');
        const isActive = button.classList.contains('active');

        console.log(`Level button: ${button.textContent} - Level: ${level} - Active: ${isActive}`);

        // Make sure the button has proper styles for clickability
        button.style.cursor = 'pointer';
        button.style.pointerEvents = 'auto';

        // Remove existing event listeners by cloning and replacing
        const newButton = button.cloneNode(true);
        if (button.parentNode) {
            button.parentNode.replaceChild(newButton, button);
        }

        // Add new click event
        newButton.addEventListener('click', function () {
            console.log(`Level button clicked: ${this.textContent} - Level: ${this.getAttribute('data-level')}`);

            // If "All Levels" is clicked
            if (this.getAttribute('data-level') === 'all') {
                // Activate "All Levels" button
                this.classList.add('active');

                // Deactivate all specific level buttons
                document.querySelectorAll('.level-btn').forEach(btn => {
                    if (btn !== this && btn.getAttribute('data-level') !== 'all') {
                        btn.classList.remove('active');
                    }
                });
            } else {
                // If a specific level button is clicked
                // Toggle the clicked button
                this.classList.toggle('active');

                // Check if any specific level is active
                const hasActiveSpecificLevel = document.querySelectorAll('.level-btn[data-level]:not([data-level="all"]).active').length > 0;

                // Update "All Levels" button state
                const allLevelsBtn = document.querySelector('.level-btn[data-level="all"]');
                if (allLevelsBtn) {
                    if (hasActiveSpecificLevel) {
                        allLevelsBtn.classList.remove('active');
                    } else {
                        allLevelsBtn.classList.add('active');
                    }
                }
            }

            // Apply filters immediately
            applyAllFilters();

            // Visual feedback that button was clicked
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

function resetLevelFilters() {
    console.log('Resetting level filters');

    // Find all level buttons
    const levelButtons = document.querySelectorAll('.level-btn');
    console.log(`Found ${levelButtons.length} level buttons to reset`);

    // Find the "All Levels" button
    const allLevelsButton = document.querySelector('.level-btn[data-level="all"]');

    if (!allLevelsButton) {
        console.warn('All Levels button not found during reset!');
        // If no "All Levels" button, just reset all buttons to inactive
        levelButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        return;
    }

    // Make sure "All Levels" is active
    allLevelsButton.classList.add('active');
    console.log('Set "All Levels" button to active');

    // Deactivate all other level buttons
    levelButtons.forEach(btn => {
        if (btn !== allLevelsButton && btn.getAttribute('data-level') !== 'all') {
            btn.classList.remove('active');
        }
    });

    console.log('Level filters reset complete');
}

/* ============================================
Category Toggles - Expand/Collapse sections
============================================ */
/* function initializeCategoryToggles() {
    const categoryHeaders = document.querySelectorAll('.category-header');

    console.log(`Found ${categoryHeaders.length} category headers`);

    categoryHeaders.forEach(header => {
        // Remove old event listeners by cloning and replacing
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);

        newHeader.addEventListener('click', function (event) {
            console.log('Category header clicked');

            const category = this.closest('.grammar-category');
            const content = category.querySelector('.category-content');

            if (!content) {
                console.warn('Category content not found');
                return;
            }

            // Toggle active class
            content.classList.toggle('active');

            // Log the state change
            console.log(`Category ${category.querySelector('h2')?.textContent} is now ${content.classList.contains('active') ? 'expanded' : 'collapsed'}`);

            // Update toggle icon rotation
            const toggleIcon = this.querySelector('.toggle-icon');
            if (toggleIcon) {
                if (content.classList.contains('active')) {
                    toggleIcon.style.transform = 'rotate(0)';
                } else {
                    toggleIcon.style.transform = 'rotate(-90deg)';
                }
            }
        });
    });

    // Expand the first category by default
    if (categoryHeaders.length > 0) {
        const firstCategory = categoryHeaders[0].closest('.grammar-category');
        if (firstCategory) {
            const firstContent = firstCategory.querySelector('.category-content');
            if (firstContent) {
                firstContent.classList.add('active');

                // Update toggle icon on the first category
                const toggleIcon = categoryHeaders[0].querySelector('.toggle-icon');
                if (toggleIcon) {
                    toggleIcon.style.transform = 'rotate(0)';
                }

                console.log('First category expanded by default');
            }
        }
    }
} */
/* ============================================
Category Toggles - Expand/Collapse sections (Accordion behavior)
============================================ */
function initializeCategoryToggles() {
    const categoryHeaders = document.querySelectorAll('.category-header');
    console.log(`Found ${categoryHeaders.length} category headers`);

    categoryHeaders.forEach(header => {
        // Remove old event listeners by cloning and replacing
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);

        newHeader.addEventListener('click', function (event) {
            console.log('Category header clicked');
            const category = this.closest('.grammar-category');
            const content = category.querySelector('.category-content');

            if (!content) {
                console.warn('Category content not found');
                return;
            }

            const isCurrentlyActive = content.classList.contains('active');

            // Закрываем ВСЕ категории
            const allCategories = document.querySelectorAll('.grammar-category');
            allCategories.forEach(cat => {
                const catContent = cat.querySelector('.category-content');
                const catToggleIcon = cat.querySelector('.toggle-icon');

                if (catContent) {
                    catContent.classList.remove('active');
                }
                if (catToggleIcon) {
                    catToggleIcon.style.transform = 'rotate(-90deg)'; // или rotate(0deg) если используете ▼
                }
            });

            // Если текущая категория была закрыта, открываем её
            if (!isCurrentlyActive) {
                content.classList.add('active');
                const toggleIcon = this.querySelector('.toggle-icon');
                if (toggleIcon) {
                    toggleIcon.style.transform = 'rotate(0deg)'; // или rotate(90deg) если используете ▶
                }
                console.log(`Category ${category.querySelector('h2')?.textContent} opened`);
            } else {
                console.log(`Category ${category.querySelector('h2')?.textContent} closed`);
            }
        });
    });

    // Инициализируем все иконки в закрытом состоянии
    const allToggleIcons = document.querySelectorAll('.toggle-icon');
    allToggleIcons.forEach(icon => {
        icon.style.transform = 'rotate(-90deg)'; // или rotate(0deg) если используете ▼
    });
}


/* ============================================
Topic Filters - Handle topic checkboxes
============================================ */
function initializeTopicFilters() {
    const topicCheckboxes = document.querySelectorAll('.topic-checkbox');

    console.log(`Found ${topicCheckboxes.length} topic checkboxes`);

    topicCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            console.log(`Topic checkbox changed: ${this.getAttribute('data-topic')} - Checked: ${this.checked}`);
            applyAllFilters();
        });
    });
}

/* ============================================
Exercise Filters - Handle exercise type checkboxes
============================================ */
function initializeExerciseFilters() {
    const exerciseCheckboxes = document.querySelectorAll('.exercise-checkbox');

    console.log(`Found ${exerciseCheckboxes.length} exercise checkboxes`);

    exerciseCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            console.log(`Exercise checkbox changed: ${this.getAttribute('data-exercise')} - Checked: ${this.checked}`);
            applyAllFilters();
        });
    });
}

/* ============================================
Context Filters - Handle context checkboxes
============================================ */
function initializeContextFilters() {
    const contextCheckboxes = document.querySelectorAll('.context-checkbox');

    console.log(`Found ${contextCheckboxes.length} context checkboxes`);

    if (contextCheckboxes.length > 0) {
        contextCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                console.log(`Context checkbox changed: ${this.getAttribute('data-context')} - Checked: ${this.checked}`);
                applyAllFilters();
            });
        });
    }
}

/* ============================================
Search Functionality - Handle search input
============================================ */
function initializeSearch() {
    const searchInput = document.getElementById('grammarSearch');

    console.log(`Search input found: ${searchInput !== null}`);

    if (searchInput) {
        // Use input event with debounce for better performance
        let debounceTimer;
        searchInput.addEventListener('input', function () {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                console.log(`Search input changed: "${this.value}"`);
                applyAllFilters();
            }, 300); // 300ms debounce
        });
    }
}

/* ============================================
Apply All Filters - Main filtering function
============================================ */
function applyAllFilters() {
    console.log('Applying all filters');

    // Get selected levels
    const selectedLevels = getActiveLevels();
    console.log('Selected levels:', selectedLevels);

    // Get selected topics
    const selectedTopics = [];
    document.querySelectorAll('.topic-checkbox:checked').forEach(checkbox => {
        selectedTopics.push(checkbox.getAttribute('data-topic'));
    });
    console.log('Selected topics:', selectedTopics);

    // Get selected exercise types
    const selectedExerciseTypes = [];
    document.querySelectorAll('.exercise-checkbox:checked').forEach(checkbox => {
        selectedExerciseTypes.push(checkbox.getAttribute('data-exercise'));
    });
    console.log('Selected exercise types:', selectedExerciseTypes);

    // Get selected contexts (if available)
    const selectedContexts = [];
    document.querySelectorAll('.context-checkbox:checked').forEach(checkbox => {
        if (checkbox) {
            selectedContexts.push(checkbox.getAttribute('data-context'));
        }
    });
    console.log('Selected contexts:', selectedContexts);

    // Get search term
    const searchInput = document.getElementById('grammarSearch');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    console.log('Search term:', searchTerm);

    // Apply filters to grammar cards
    filterGrammarCards(selectedLevels, selectedTopics, selectedExerciseTypes, selectedContexts, searchTerm);

    // Update category visibility
    updateCategoryVisibility();
}

/* ============================================
Get Active Levels - Helper function
============================================ */
function getActiveLevels() {
    const allLevelsButton = document.querySelector('.level-btn[data-level="all"]');
    const allLevelsActive = allLevelsButton && allLevelsButton.classList.contains('active');

    const activeSpecificLevels = document.querySelectorAll('.level-btn.active:not([data-level="all"])');
    const hasActiveSpecificLevels = activeSpecificLevels.length > 0;

    console.log(`All Levels active: ${allLevelsActive}, Specific levels active: ${hasActiveSpecificLevels}`);

    if (allLevelsActive || !hasActiveSpecificLevels) {
        // If "All Levels" is active or no specific levels are selected, include all possible levels
        const allPossibleLevels = ['all', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2', 'beginner', 'elementary', 'intermediate', 'advanced'];
        console.log(`Returning all levels: ${allPossibleLevels.join(', ')}`);
        return allPossibleLevels;
    }

    // Otherwise, get only specific active levels
    const activeLevels = [];
    activeSpecificLevels.forEach(btn => {
        const level = btn.getAttribute('data-level');
        if (level) {
            activeLevels.push(level.toLowerCase());
        }
    });

    console.log(`Returning specific levels: ${activeLevels.join(', ')}`);
    return activeLevels;
}

/* ============================================
Filter Grammar Cards - Apply filters to cards
============================================ */
function filterGrammarCards(levels, topics, exerciseTypes, contexts, searchTerm) {
    const grammarCards = document.querySelectorAll('.grammar-card');
    console.log(`Starting filtering of ${grammarCards.length} grammar cards`);
    console.log(`Filter criteria: levels=${levels}, topics=${topics.length} topics, exercises=${exerciseTypes.length} types, contexts=${contexts.length} contexts, search="${searchTerm}"`);

    let visibleCount = 0;
    let hiddenCount = 0;

    // Ensure we have arrays for everything to prevent errors
    const levelsArray = Array.isArray(levels) ? levels : [];
    const topicsArray = Array.isArray(topics) ? topics : [];
    const exerciseTypesArray = Array.isArray(exerciseTypes) ? exerciseTypes : [];
    const contextsArray = Array.isArray(contexts) ? contexts : [];

    // Special handling if "all" is in levels
    const includeAllLevels = levelsArray.includes('all');

    grammarCards.forEach(card => {
        // First, clear any previous hidden states
        card.classList.remove('hidden', 'level-hidden');
        card.style.display = '';

        // Get card data for filtering
        const cardLevels = (card.getAttribute('data-level') || '').toLowerCase().split(' ').filter(l => l);
        const cardCategory = card.closest('.grammar-category');
        const cardTopic = cardCategory ? cardCategory.getAttribute('data-topic') : '';
        const cardExerciseBtns = card.querySelectorAll('.exercise-btn');
        const cardContext = (card.getAttribute('data-context') || '').split(' ').filter(c => c);

        // Check level match - card matches if either:
        // 1. We're including all levels (all button is active)
        // 2. Card has at least one level that's in our active levels list
        let levelMatch = includeAllLevels;
        if (!levelMatch && cardLevels.length > 0) {
            // Check each card level against our active levels
            for (const cardLevel of cardLevels) {
                if (levelsArray.includes(cardLevel)) {
                    levelMatch = true;
                    break;
                }
            }
        }

        // If no levels are specified on the card, count it as matching all levels
        if (!levelMatch && cardLevels.length === 0) {
            levelMatch = true;
        }

        // Check topic match
        const topicMatch = topicsArray.length === 0 || topicsArray.includes(cardTopic);

        // Check exercise type match
        let exerciseMatch = exerciseTypesArray.length === 0; // Match if no exercise types selected

        if (!exerciseMatch && cardExerciseBtns.length > 0) {
            // Check each exercise button to see if any match our active types
            for (const btn of cardExerciseBtns) {
                const btnExerciseType = btn.getAttribute('data-exercise');
                if (exerciseTypesArray.includes(btnExerciseType)) {
                    exerciseMatch = true;
                    break;
                }
            }
        }

        // Check context match (if available)
        let contextMatch = contextsArray.length === 0; // Match if no contexts selected
        if (!contextMatch && cardContext.length > 0) {
            // Check each card context to see if any match our active contexts
            for (const context of cardContext) {
                if (contextsArray.includes(context)) {
                    contextMatch = true;
                    break;
                }
            }
        }

        // Check search match
        const cardTitle = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const cardBody = card.querySelector('.card-body')?.textContent.toLowerCase() || '';
        const searchMatch = !searchTerm || searchTerm === '' ||
            cardTitle.includes(searchTerm) ||
            cardBody.includes(searchTerm);

        // Apply visibility based on all filters
        if (levelMatch && topicMatch && exerciseMatch && contextMatch && searchMatch) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.classList.add(levelMatch ? 'hidden' : 'level-hidden');
            hiddenCount++;
        }
    });

    console.log(`Filter results: ${visibleCount} visible cards, ${hiddenCount} hidden cards`);

    // Update "no results" message if needed
    if (visibleCount === 0) {
        showNoResultsMessage();
    } else {
        hideNoResultsMessage();
    }
}

/* ============================================
Update Category Visibility - Hide empty categories
============================================ */
function updateCategoryVisibility() {
    const categories = document.querySelectorAll('.grammar-category');
    let visibleCategoriesCount = 0;
    let hiddenCategoriesCount = 0;

    categories.forEach(category => {
        const cards = category.querySelectorAll('.grammar-card');
        const hasVisibleCards = Array.from(cards).some(card =>
            card.style.display !== 'none' &&
            !card.classList.contains('hidden') &&
            !card.classList.contains('level-hidden')
        );

        if (hasVisibleCards) {
            category.style.display = '';
            visibleCategoriesCount++;

            // Ensure the category is expanded if it has visible cards
            const content = category.querySelector('.category-content');
            if (content) {
                /* content.classList.add('active'); */

                // Update toggle icon
                const toggleIcon = category.querySelector('.toggle-icon');
                if (toggleIcon) {
                    /* toggleIcon.style.transform = 'rotate(0)'; */
                }
            }
        } else {
            category.style.display = 'none';
            hiddenCategoriesCount++;
        }
    });

    console.log(`Category visibility update: ${visibleCategoriesCount} visible, ${hiddenCategoriesCount} hidden`);

    // If no categories are visible, show a message
    if (visibleCategoriesCount === 0) {
        showNoResultsMessage();
    } else {
        hideNoResultsMessage();
    }
}

/* ============================================
No Results Message - Show when no content matches
============================================ */
function showNoResultsMessage() {
    // Check if message already exists
    if (!document.getElementById('no-results-message')) {
        const message = document.createElement('div');
        message.id = 'no-results-message';
        message.style.cssText = `
            margin: 40px auto;
            padding: 20px;
            text-align: center;
            background-color: var(--card-bg);
            border-radius: 12px;
            max-width: 600px;
        `;

        message.innerHTML = `
            <h3 style="color: var(--heading-color); margin-bottom: 12px;">No matching grammar topics found</h3>
            <p style="color: var(--body-2);">Try adjusting your filters or search criteria to see more content.</p>
            <button id="reset-filters-btn" style="margin-top: 16px; padding: 8px 16px; background-color: var(--accent-color); color: white; border: none; border-radius: 6px; cursor: pointer;">Reset All Filters</button>
        `;

        const grammarContent = document.querySelector('.grammar-content');
        if (grammarContent) {
            grammarContent.appendChild(message);

            // Add event listener to reset button
            document.getElementById('reset-filters-btn').addEventListener('click', resetAllFilters);
        }

        console.log('No results message displayed');
    }
}

function hideNoResultsMessage() {
    const message = document.getElementById('no-results-message');
    if (message) {
        message.remove();
        console.log('No results message removed');
    }
}

/* ============================================
Reset All Filters - Reset to default state
============================================ */
function resetAllFilters() {
    console.log('Resetting all filters');

    // Reset level filters
    resetLevelFilters();

    // Reset topic checkboxes
    document.querySelectorAll('.topic-checkbox').forEach(checkbox => {
        checkbox.checked = true;
    });

    // Reset exercise checkboxes
    document.querySelectorAll('.exercise-checkbox').forEach(checkbox => {
        checkbox.checked = true;
    });

    // Reset context checkboxes if they exist
    document.querySelectorAll('.context-checkbox').forEach(checkbox => {
        checkbox.checked = true;
    });

    // Clear search input
    const searchInput = document.getElementById('grammarSearch');
    if (searchInput) {
        searchInput.value = '';
    }

    // Apply all filters
    applyAllFilters();

    // Show notification
    showNotification('All filters have been reset', 'success');
}

/* ============================================
Show Notification - Display user messages
============================================ */
function showNotification(message, type = 'info') {
    console.log(`Notification: ${message} (${type})`);

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '8px',
        backgroundColor: type === 'success' ? 'var(--correct-bg)' :
            type === 'error' ? 'var(--danger-bg)' :
                'var(--neutral-bg)',
        color: type === 'success' ? 'var(--correct-text)' :
            type === 'error' ? 'var(--danger-text)' :
                'var(--neutral-text)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        opacity: 0,
        transition: 'opacity 0.3s ease'
    });

    // Add to document
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = 1;
    }, 10);

    // Remove after delay
    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/* ============================================
Grammar Exercise Modal - Creates and manages interactive exercise modals
============================================ */

// Global variables to track current exercise state
let currentExerciseData = null;
let currentExerciseType = null;
let currentExerciseIndex = 0;
let totalCorrectAnswers = 0;
let exerciseScores = {};
let selectedOptions = {};

/* ============================================
Setup Exercise Buttons - Add click handlers to exercise buttons
============================================ */
function setupExerciseButtons() {
    const exerciseButtons = document.querySelectorAll('.exercise-btn');
    console.log(`Found ${exerciseButtons.length} exercise buttons`);

    exerciseButtons.forEach(button => {
        // Remove existing event listeners by cloning and replacing
        const newButton = button.cloneNode(true);
        if (button.parentNode) {
            button.parentNode.replaceChild(newButton, button);
        }

        // Add new click handler
        newButton.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Get card and related data
            const card = this.closest('.grammar-card');
            if (!card) {
                console.error('Could not find parent card');
                return;
            }

            // Get topic from category
            const category = card.closest('.grammar-category');
            if (!category) {
                console.error('Could not find parent category');
                return;
            }

            // Get topic and subtitle
            const topic = category.getAttribute('data-topic');

            // ВАЖНО: Используем data-topic-name из карточки, а не генерируем из заголовка
            let cardTopicName = card.getAttribute('data-topic-name');

            if (!cardTopicName) {
                // Fallback: generate from card title if data-topic-name is missing
                const cardTitle = card.querySelector('h3');
                const cardTitleText = cardTitle ? cardTitle.textContent.trim() : '';

                cardTopicName = cardTitleText
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-');
            }

            // Get exercise type from button attribute
            const exerciseType = this.getAttribute('data-exercise');
            console.log(`Exercise button clicked: ${exerciseType} for ${topic}/${cardTopicName}`);

            // Handle special cases for loading external scripts
            const buttonHref = this.getAttribute('href');
            if (buttonHref && buttonHref !== '#') {
                loadExerciseScript(buttonHref);
                console.log(`Loading exercise file from: ${buttonHref}`);
            }

            // Open exercise modal with the specific exercise type (передаем exerciseType, а не dataPropertyName)
            openExerciseModal(topic, cardTopicName, exerciseType);
        });
    });
}
/* ============================================
Load External Exercise Script - Dynamically loads JS files
============================================ */
function loadExerciseScript(src) {
    // Проверяем, загружен ли файл уже
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
        console.log(`Script ${src} already loaded`);
        return;
    }

    // Создаем новый скрипт
    const script = document.createElement('script');
    script.src = src;
    script.onload = function () {
        console.log(`Script ${src} loaded successfully`);
    };
    script.onerror = function () {
        console.error(`Error loading script ${src}`);
        showNotification(`Ошибка загрузки файла упражнений: ${src}`, 'error');
    };

    // Добавляем скрипт в документ
    document.body.appendChild(script);
}

/* ============================================
Open Exercise Modal - Create and display exercise modal
============================================ */
function openExerciseModal(topic, subtitle, exerciseType) {
    console.log(`Opening exercise modal: ${topic}/${subtitle}/${exerciseType}`);

    // Reset exercise state
    currentExerciseIndex = 0;
    totalCorrectAnswers = 0;
    currentExerciseType = exerciseType;

    // Check if data exists
    if (!window.grammarExercises) {
        console.error('No grammar exercises data found.');
        showNotification('Exercise data not loaded. Please refresh the page and try again.', 'error');
        return;
    }

    // Check if topic exists
    if (!window.grammarExercises[topic]) {
        console.error(`Topic "${topic}" not found in grammar exercises data.`);
        showNotification(`No exercises found for topic: ${topic}`, 'error');
        return;
    }

    // Обработка подтемы
    let specificSubtitle = subtitle;
    let baseSubtitle = subtitle;
    let pageNumber = 1;

    // Извлечь базовую подтему и номер страницы, если они есть
    if (subtitle.includes('page')) {
        const match = subtitle.match(/(.+)-page(\d+)/);
        if (match) {
            baseSubtitle = match[1];
            pageNumber = parseInt(match[2]);
        }
    }

    // Для типов упражнений требующих специальной обработки
    let exerciseDataType = exerciseType;

    if (exerciseType === 'multiple-choice') {
        exerciseDataType = 'multipleChoice';
    } else if (exerciseType === 'fill-gaps') {
        exerciseDataType = 'fillGaps';
        // Для Fill in the Gaps проверяем специальный формат
        if (!specificSubtitle.includes('-gap-') && !specificSubtitle.includes('gap-page')) {
            specificSubtitle = `${baseSubtitle}-gap-page${pageNumber}`;
        }
    } else if (exerciseType === 'matching') {
        exerciseDataType = 'matching';
        // Для Matching используем формат "-matching-page"
        if (!specificSubtitle.includes('-matching-')) {
            specificSubtitle = `${baseSubtitle}-matching-page${pageNumber}`;
        }
    } else if (exerciseType === 'sentence-building') {
        exerciseDataType = 'sentenceBuilding';
        // Для Sentence Building используем формат "-sentence-page"
        if (!specificSubtitle.includes('-sentence-')) {
            specificSubtitle = `${baseSubtitle}-sentence-page${pageNumber}`;
        }
    } else if (exerciseType === 'word-order') {
        exerciseDataType = 'wordOrder';
        // Для Word Order используем формат "-word-order-page"
        if (!specificSubtitle.includes('-word-order-')) {
            specificSubtitle = `${baseSubtitle}-word-order-page${pageNumber}`;
        }
    } else if (exerciseType === 'test') {
        exerciseDataType = 'test';
    }

    // Проверяем наличие данных для выбранного типа
    let hasData = false;

    // Сначала проверяем точное совпадение
    if (window.grammarExercises[topic][specificSubtitle] &&
        window.grammarExercises[topic][specificSubtitle][exerciseDataType]) {
        hasData = true;
    }

    // Если нет точного совпадения, ищем подходящие страницы
    if (!hasData) {
        // Ищем все ключи в данном топике
        const topicKeys = Object.keys(window.grammarExercises[topic]);

        // Шаблон поиска зависит от типа упражнения
        let searchPattern;
        if (exerciseType === 'fill-gaps') {
            searchPattern = new RegExp(`${baseSubtitle.replace(/-/g, '\\-')}\\-gap\\-page\\d+`);
        } else if (exerciseType === 'sentence-building') {
            searchPattern = new RegExp(`${baseSubtitle.replace(/-/g, '\\-')}\\-sentence\\-page\\d+`);
        } else if (exerciseType === 'matching') {
            searchPattern = new RegExp(`${baseSubtitle.replace(/-/g, '\\-')}\\-matching\\-page\\d+`);
        } else if (exerciseType === 'word-order') {
            searchPattern = new RegExp(`${baseSubtitle.replace(/-/g, '\\-')}\\-word\\-order\\-page\\d+`);
        } else {
            searchPattern = new RegExp(`${baseSubtitle.replace(/-/g, '\\-')}\\-page\\d+`);
        }

        // Ищем первый подходящий ключ
        for (const key of topicKeys) {
            if (searchPattern.test(key) &&
                window.grammarExercises[topic][key] &&
                window.grammarExercises[topic][key][exerciseDataType]) {
                specificSubtitle = key;
                hasData = true;
                break;
            }
        }
    }

    // Если все еще нет данных, проверяем, есть ли просто страницы с этим типом
    if (!hasData) {
        // Ищем все ключи в данном топике
        const topicKeys = Object.keys(window.grammarExercises[topic]);

        // Просто ищем любую страницу с нужным типом
        for (const key of topicKeys) {
            if (window.grammarExercises[topic][key] &&
                window.grammarExercises[topic][key][exerciseDataType]) {
                specificSubtitle = key;
                hasData = true;
                break;
            }
        }
    }

    // Store exercise data for later use if found
    if (hasData) {
        currentExerciseData = window.grammarExercises[topic][specificSubtitle];
    } else {
        // Если данные не найдены, создаем пустой объект
        currentExerciseData = {};
    }

    // Create modal with specified exercise type
    createExerciseModal(topic, specificSubtitle, exerciseDataType);
}

/* ============================================
Create Exercise Modal - Generate modal HTML
============================================ */
function createExerciseModal(topic, subtitle, exerciseType) {
    // Remove any existing modal
    const existingModal = document.getElementById('grammarExerciseModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Format title
    let baseSubtitle = subtitle;
    let pageNumber = 1;

    const pageMatch = subtitle.match(/(.+)-page(\d+)/);
    if (pageMatch) {
        baseSubtitle = pageMatch[1];
        pageNumber = parseInt(pageMatch[2]);
    }

    // Удаляем префиксы из отображаемого заголовка
    let displaySubtitle = baseSubtitle
        .replace('-gap', '')
        .replace('-sentence', '')
        .replace('-matching', '')
        .replace('-word-order', '');

    const formattedTitle = displaySubtitle
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

    // Format exercise type for display
    const exerciseTypeDisplayMap = {
        'multipleChoice': 'Multiple Choice',
        'fillGaps': 'Fill in the Gaps',
        'matching': 'Matching',
        'sentenceBuilding': 'Sentence Building',
        'wordOrder': 'Word Order',
        'test': 'Test'
    };

    const exerciseTypeDisplay = exerciseTypeDisplayMap[exerciseType] || exerciseType;
    const titleText = pageMatch ?
        `${formattedTitle} - ${exerciseTypeDisplay} (Set ${pageNumber})` :
        `${formattedTitle} - ${exerciseTypeDisplay}`;

    // Create modal container
    const modal = document.createElement('div');
    modal.id = 'grammarExerciseModal';
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

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: var(--bg-color);
        width: 90vw;
        max-width: 900px;
        max-height: 90vh;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    `;

    // Create header
    const modalHeader = document.createElement('div');
    modalHeader.style.cssText = `
        padding: 20px;
        background: var(--card-bg);
        border-bottom: 1px solid var(--card-stroke);
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    // Add title
    const titleElement = document.createElement('h2');
    const pageTitle = getPageTitleFromData(topic, subtitle, exerciseType);
    titleElement.textContent = pageTitle;
    titleElement.style.cssText = `
        color: var(--heading-color);
        font-size: 1.5rem;
        margin: 0;
    `;

    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.cssText = `
        background: none;
        border: none;
        font-size: 24px;
        color: var(--body-2);
        cursor: pointer;
    `;
    closeButton.onclick = function () {
        modal.remove();
    };

    modalHeader.appendChild(titleElement);
    modalHeader.appendChild(closeButton);

    // Create body with scrolling
    const modalBody = document.createElement('div');
    modalBody.style.cssText = `
        padding: 20px;
        overflow-y: auto;
        max-height: calc(90vh - 70px);
    `;

    // Assemble modal
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);

    // Add to document
    document.body.appendChild(modal);

    // Check if this specific exercise type exists in this data
    if (!currentExerciseData[exerciseType]) {
        // Показать сообщение об ошибке
        modalBody.innerHTML = `
            <div style="text-align: center; padding: 30px;">
                <h3 style="color: var(--heading-color); margin-bottom: 15px;">
                    Упражнение типа "${exerciseTypeDisplay}" не найдено
                </h3>
                <p style="color: var(--body-1); margin-bottom: 20px;">
                    К сожалению, упражнения этого типа ещё не добавлены для данной темы.
                </p>
                <p style="color: var(--body-2);">
                    Пожалуйста, попробуйте другой тип упражнения.
                </p>
            </div>
        `;
        return;
    }

    // Всегда загружать полную страницу заданий для всех типов упражнений
    loadFullExercisePage(modalBody, topic, subtitle, exerciseType);
}

/* ============================================
Navigate Exercise - Move between exercises
============================================ */
function navigateExercise(direction) {
    if (!currentExerciseData || !currentExerciseType) return;

    const exercises = currentExerciseData[currentExerciseType];
    if (!exercises || exercises.length === 0) return;

    // Update index based on direction
    if (direction === 'prev' && currentExerciseIndex > 0) {
        currentExerciseIndex--;
    } else if (direction === 'next' && currentExerciseIndex < exercises.length - 1) {
        currentExerciseIndex++;
    } else {
        return; // Invalid navigation
    }

    // Get modal body container
    const modal = document.getElementById('grammarExerciseModal');
    if (!modal) return;

    const modalBody = modal.querySelector('div > div:nth-child(2)');
    if (!modalBody) return;

    // Load the next exercise
    loadExercise(modalBody, currentExerciseType);
}
/* ============================================
Create Exercise Pagination - Add pagination controls for individual exercises
============================================ */
function createExercisePagination(container, topic, subtitle, exerciseType) {
    // Create pagination container
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'exercise-pagination';
    paginationContainer.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--card-stroke);
    `;

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.id = 'prevExerciseBtn';
    prevButton.textContent = '← Previous';
    prevButton.style.cssText = `
        background-color: var(--card-bg);
        color: var(--body-1);
        border: 1px solid var(--card-stroke);
        border-radius: 6px;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.2s ease;
        display: none;
    `;
    prevButton.addEventListener('click', function () {
        navigateExercise('prev');
    });

    // Pagination info
    const paginationInfo = document.createElement('span');
    paginationInfo.id = 'exercisePagination';
    paginationInfo.style.cssText = `
        color: var(--body-1);
        font-size: 1rem;
    `;
    paginationInfo.textContent = '1 of 10';

    // Next button
    const nextButton = document.createElement('button');
    nextButton.id = 'nextExerciseBtn';
    nextButton.textContent = 'Next →';
    nextButton.style.cssText = `
        background-color: var(--accent-color);
        color: white;
        border: none;
        border-radius: 6px;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.2s ease;
    `;
    nextButton.addEventListener('click', function () {
        navigateExercise('next');
    });

    // Add hover effects
    prevButton.addEventListener('mouseenter', function () {
        this.style.backgroundColor = 'var(--card-hover-secondary)';
        this.style.borderColor = 'var(--accent-color)';
    });
    prevButton.addEventListener('mouseleave', function () {
        this.style.backgroundColor = 'var(--card-bg)';
        this.style.borderColor = 'var(--card-stroke)';
    });
    nextButton.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#4F46E5'; // Darker shade
    });
    nextButton.addEventListener('mouseleave', function () {
        this.style.backgroundColor = 'var(--accent-color)';
    });

    // Assemble pagination
    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(paginationInfo);
    paginationContainer.appendChild(nextButton);

    // Add to container
    container.appendChild(paginationContainer);

    // Update pagination info
    const exercises = currentExerciseData[exerciseType] || [];
    updatePagination(0, exercises.length);
}
/* ============================================
Update Pagination - Show current exercise position
============================================ */
function updatePagination(currentIndex, totalCount) {
    const pagination = document.getElementById('exercisePagination');
    const prevButton = document.getElementById('prevExerciseBtn');
    const nextButton = document.getElementById('nextExerciseBtn');

    if (!pagination || !prevButton || !nextButton) return;

    // Update text
    pagination.textContent = `${currentIndex + 1} of ${totalCount}`;

    // Update button visibility
    prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
    nextButton.style.display = currentIndex < totalCount - 1 ? 'block' : 'none';
}

/* ============================================
Load Exercise - Display exercise based on type
============================================ */
function loadExercise(container, exerciseType) {
    // Clear previous exercise content (but keep pagination)
    const paginationContainer = container.querySelector('.exercise-pagination');
    container.innerHTML = '';
    if (paginationContainer) {
        container.appendChild(paginationContainer);
    }

    // Check if we have exercises for this type
    if (!currentExerciseData[exerciseType] || currentExerciseData[exerciseType].length === 0) {
        container.innerHTML += `
            <div style="text-align: center; color: var(--body-1); padding: 20px;">
                <p>No exercises found for this type. Please try another exercise type.</p>
                <p style="color: var(--body-2);">Упражнения этого типа не найдены. Пожалуйста, выберите другой тип упражнения.</p>
            </div>
        `;
        return;
    }

    const exercises = currentExerciseData[exerciseType];
    const exercise = exercises[currentExerciseIndex];

    // Update pagination if it exists
    if (document.getElementById('exercisePagination')) {
        updatePagination(currentExerciseIndex, exercises.length);
    }

    // Show the exercise based on type
    if (exerciseType === 'multipleChoice') {
        showMultipleChoiceExercise(container, exercise);
    } else if (exerciseType === 'fillGaps') {
        showFillGapsExercise(container, exercise);
    } else if (exerciseType === 'matching') {
        showMatchingExercise(container, exercise);
    } else if (exerciseType === 'sentenceBuilding') {
        showSentenceBuildingExercise(container, exercise);
    } else if (exerciseType === 'wordOrder') {
        showWordOrderExercise(container, exercise);
    } else {
        container.innerHTML += `
            <div style="text-align: center; color: var(--body-1); padding: 20px;">
                <p>Exercise type "${exerciseType}" is not implemented yet.</p>
                <p style="color: var(--body-2);">Тип упражнения "${exerciseType}" еще не реализован.</p>
            </div>
        `;
    }
}

/* ============================================
Show Multiple Choice Exercise - With language support
============================================ */
function showMultipleChoiceExercise(container, exercise) {
    if (!exercise) return;

    // Create question container
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-container';
    questionContainer.style.cssText = `
        margin-bottom: 20px;
    `;

    // Create question
    const question = document.createElement('h3');
    question.style.cssText = `
        color: var(--heading-color);
        margin-bottom: 15px;
        font-size: 1.2rem;
    `;

    // Add the English question
    question.textContent = exercise.question;
    questionContainer.appendChild(question);

    // Add Russian question if available
    if (exercise.questionRu) {
        const russianQuestion = document.createElement('p');
        russianQuestion.textContent = exercise.questionRu;
        russianQuestion.style.cssText = `
            color: var(--body-2);
            margin-bottom: 15px;
            font-size: 1rem;
            font-style: italic;
        `;
        questionContainer.appendChild(russianQuestion);
    }

    // Add sentence if available
    if (exercise.sentence) {
        const sentenceContainer = document.createElement('div');
        sentenceContainer.style.cssText = `
            background-color: var(--card-bg-secondary);
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
        `;

        const sentenceElement = document.createElement('p');
        sentenceElement.style.cssText = `
            color: var(--body-1);
            font-size: 1.1rem;
            margin: 0;
        `;

        // Replace underscore with a styled blank
        sentenceElement.innerHTML = exercise.sentence.replace(
            /_+/g,
            '<span style="display: inline-block; min-width: 50px; border-bottom: 2px solid var(--accent-color); text-align: center;">_____</span>'
        );

        sentenceContainer.appendChild(sentenceElement);
        questionContainer.appendChild(sentenceContainer);
    }

    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';
    optionsContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;

    // Shuffle answer options for display
    const shuffledIndices = Array.from({ length: exercise.options.length }, (_, i) => i);
    for (let i = shuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
    }

    // Add options in shuffled order
    shuffledIndices.forEach((originalIndex) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-btn';
        optionButton.dataset.originalIndex = originalIndex; // Store original index
        optionButton.textContent = exercise.options[originalIndex];
        optionButton.style.cssText = `
            background: var(--card-bg);
            border: 1px solid var(--card-stroke);
            border-radius: 8px;
            padding: 12px 15px;
            color: var(--body-1);
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            font-size: 1rem;
            position: relative;
            overflow: hidden;
        `;

        // Add hover effect
        optionButton.addEventListener('mouseenter', function() {
            if (!this.classList.contains('answered')) {
                this.style.backgroundColor = 'var(--card-hover-secondary)';
                this.style.borderColor = 'var(--accent-color)';
            }
        });

        optionButton.addEventListener('mouseleave', function() {
            if (!this.classList.contains('answered')) {
                this.style.backgroundColor = 'var(--card-bg)';
                this.style.borderColor = 'var(--card-stroke)';
            }
        });

        // Add click handler
        optionButton.addEventListener('click', function() {
            if (this.classList.contains('answered')) return;

            // Mark all options as answered
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.add('answered');
                btn.style.backgroundColor = 'var(--card-bg)';
                btn.style.borderColor = 'var(--card-stroke)';
            });

            // Check if answer is correct
            const isCorrect = parseInt(this.dataset.originalIndex) === exercise.correctAnswer;

            if (isCorrect) {
                // Correct answer
                this.style.backgroundColor = 'var(--correct-bg)';
                this.style.borderColor = 'var(--correct-border)';
                this.style.color = 'var(--correct-text)';

                // Add checkmark
                const checkmark = document.createElement('span');
                checkmark.textContent = '✓';
                checkmark.style.cssText = `
                    position: absolute;
                    right: 15px;
                    color: var(--correct-text);
                    font-weight: bold;
                `;
                this.appendChild(checkmark);

                // Update correct answers count
                totalCorrectAnswers++;

                // Create feedback content with Russian translation
                let feedbackHtml = '';
                if (exercise.correctFeedback) {
                    feedbackHtml += `<p>${exercise.correctFeedback}</p>`;
                }
                if (exercise.correctFeedbackRu) {
                    feedbackHtml += `<p style="color: var(--heading-color); opacity: 0.9; font-style: italic;">${exercise.correctFeedbackRu}</p>`;
                }

                // Show feedback
                showFeedback(container, true, feedbackHtml);

            } else {
                // Wrong answer
                this.style.backgroundColor = 'var(--danger-bg)';
                this.style.borderColor = 'var(--danger-border)';
                this.style.color = 'var(--danger-text)';

                // Add cross
                const cross = document.createElement('span');
                cross.textContent = '✗';
                cross.style.cssText = `
                    position: absolute;
                    right: 15px;
                    color: var(--danger-text);
                    font-weight: bold;
                `;
                this.appendChild(cross);

                // Highlight correct answer
                const correctOption = document.querySelector(`.option-btn[data-originalIndex="${exercise.correctAnswer}"]`);
                if (correctOption) {
                    correctOption.style.backgroundColor = 'var(--correct-bg)';
                    correctOption.style.borderColor = 'var(--correct-border)';
                    correctOption.style.color = 'var(--correct-text)';

                    // Add checkmark to correct option
                    const checkmark = document.createElement('span');
                    checkmark.textContent = '✓';
                    checkmark.style.cssText = `
                        position: absolute;
                        right: 15px;
                        color: var(--correct-text);
                        font-weight: bold;
                    `;
                    correctOption.appendChild(checkmark);
                }

                // Create feedback content with Russian translation
                let feedbackHtml = '';
                if (exercise.incorrectFeedback) {
                    feedbackHtml += `<p>${exercise.incorrectFeedback}</p>`;
                }
                if (exercise.incorrectFeedbackRu) {
                    feedbackHtml += `<p style="color: var(--heading-color); opacity: 0.9; font-style: italic;">${exercise.incorrectFeedbackRu}</p>`;
                }

                // Show feedback
                showFeedback(container, false, feedbackHtml);
            }
        });

        optionsContainer.appendChild(optionButton);
    });

    // Assemble and append
    container.appendChild(questionContainer);
    container.appendChild(optionsContainer);
}

/* ============================================
Show Feedback - Display exercise feedback with bilingual support
============================================ */
function showFeedback(container, isCorrect, htmlContent) {
    // Remove any existing feedback
    const existingFeedback = container.querySelector('.feedback-message');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = 'feedback-message';
    feedback.style.cssText = `
        margin-top: 20px;
        padding: 15px;
        border-radius: 8px;
        font-size: 0.95rem;
        background-color: ${isCorrect ? 'var(--correct-bg)' : 'var(--danger-bg)'};
        border: 1px solid ${isCorrect ? 'var(--correct-border)' : 'var(--danger-border)'};
        color: ${isCorrect ? 'var(--correct-text)' : 'var(--danger-text)'};
    `;
    
    // Set message - use innerHTML to support HTML content
    if (htmlContent) {
        feedback.innerHTML = htmlContent;
    } else {
        feedback.innerHTML = isCorrect ? 
            '<p>Correct!</p><p style="font-style: italic;">Правильно!</p>' : 
            '<p>Incorrect!</p><p style="font-style: italic;">Неправильно!</p>';
    }
    
    container.appendChild(feedback);
}

/* ============================================
Load Full Exercise Page 
============================================ */
function loadFullExercisePage(container, topic, subtitle, exerciseType = 'multipleChoice') {
    console.log(`Loading full exercise page for ${topic}/${subtitle}/${exerciseType}`);

    // Extract base subtitle and page number
    let baseSubtitle, pageNumber;

    if (subtitle.includes('page')) {
        const match = subtitle.match(/(.+)-page(\d+)/);
        if (match) {
            baseSubtitle = match[1];
            pageNumber = parseInt(match[2]);
        }
    } else {
        baseSubtitle = subtitle;
        pageNumber = 1;
    }

    // Determine current page's data
    const pageKey = subtitle; // Используем переданный subtitle
    const currentPageData = window.grammarExercises[topic][pageKey];

    if (!currentPageData || !currentPageData[exerciseType]) {
        container.innerHTML = `
            <div style="padding: 20px; text-align: center; color: var(--body-1);">
                <p>No exercises found for ${baseSubtitle} page ${pageNumber} (${exerciseType}).</p>
            </div>
        `;
        return;
    }

    // Create page title and navigation
    const pageNavigation = document.createElement('div');
    pageNavigation.className = 'page-navigation';
    pageNavigation.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--card-stroke);
    `;

    // Create page title
    const pageTitle = document.createElement('h3');
    pageTitle.style.cssText = `
        color: var(--heading-color);
        margin: 0;
        font-size: 20px;
    `;
    pageTitle.textContent = `Exercise Set ${pageNumber}`;

    // Create page buttons container
    const pageButtonsContainer = document.createElement('div');
    pageButtonsContainer.style.cssText = `
        display: flex;
        gap: 10px;
    `;

    // Check how many pages are available (max 10 pages)
    const maxPages = 10;

    // Определяем суффикс в зависимости от типа упражнения
    let pageSuffix = '';
    if (exerciseType === 'fillGaps') {
        pageSuffix = '-gap';
    } else if (exerciseType === 'matching') {
        pageSuffix = '-matching';
    } else if (exerciseType === 'sentenceBuilding') {
        pageSuffix = '-sentence';
    } else if (exerciseType === 'wordOrder') {
        pageSuffix = '-word-order';
    }

    // Add page buttons
    for (let i = 1; i <= maxPages; i++) {
        let pageKey = `${baseSubtitle.replace(/-page\d+$/, '').replace(/-gap(-page\d+)?$/, '').replace(/-matching(-page\d+)?$/, '').replace(/-sentence(-page\d+)?$/, '').replace(/-word-order(-page\d+)?$/, '')}${pageSuffix}-page${i}`;

        // Check if this page exists in the data
        const pageExists = window.grammarExercises[topic][pageKey] &&
            window.grammarExercises[topic][pageKey][exerciseType];

        if (pageExists) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;

            // Style the button to match your screenshot
            pageButton.style.cssText = `
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                border: 1px solid ${i === pageNumber ? 'var(--accent-color)' : 'var(--card-stroke)'};
                background-color: ${i === pageNumber ? 'var(--accent-color)' : 'var(--card-bg)'};
                color: ${i === pageNumber ? 'white' : 'var(--body-1)'};
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.2s ease;
            `;

            // Add hover effect
            pageButton.addEventListener('mouseenter', function () {
                if (i !== pageNumber) {
                    this.style.backgroundColor = 'var(--card-hover-secondary)';
                    this.style.borderColor = 'var(--accent-color)';
                }
            });

            pageButton.addEventListener('mouseleave', function () {
                if (i !== pageNumber) {
                    this.style.backgroundColor = 'var(--card-bg)';
                    this.style.borderColor = 'var(--card-stroke)';
                }
            });

            // Add click handler
            pageButton.addEventListener('click', function () {
                if (i !== pageNumber) {
                    // Load the selected page
                    const newSubtitle = pageKey;
                    loadFullExercisePage(container, topic, newSubtitle, exerciseType);

                    // Update the title in the modal header
                    const modalTitle = document.querySelector('#grammarExerciseModal h2');
                    const exerciseTypeDisplayMap = {
                        'multipleChoice': 'Multiple Choice',
                        'fillGaps': 'Fill in the Gaps',
                        'matching': 'Matching',
                        'sentenceBuilding': 'Sentence Building',
                        'wordOrder': 'Word Order',
                        'test': 'Test'
                    };
                    const exerciseTypeDisplay = exerciseTypeDisplayMap[exerciseType] || exerciseType;

                    if (modalTitle) {
                        // Форматируем заголовок
                        let displayBaseSubtitle = baseSubtitle
                            .replace('-gap', '')
                            .replace('-sentence', '')
                            .replace('-matching', '')
                            .replace('-word-order', '');
                        let formattedTitle = displayBaseSubtitle
                            .replace(/-/g, ' ')
                            .replace(/\b\w/g, l => l.toUpperCase());

                        const pageTitle = getPageTitleFromData(topic, newSubtitle, exerciseType);
                        modalTitle.textContent = pageTitle;
                    }
                }
            });

            pageButtonsContainer.appendChild(pageButton);
        }
    }

    // Assemble page navigation
    pageNavigation.appendChild(pageTitle);
    pageNavigation.appendChild(pageButtonsContainer);

    // Reset container and add page navigation
    container.innerHTML = '';
    container.appendChild(pageNavigation);

    // Create score tracker
    const scoreTracker = document.createElement('div');
    scoreTracker.className = 'score-tracker';
    scoreTracker.style.cssText = `
        background-color: var(--card-bg);
        padding: 15px 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const scoreLabel = document.createElement('span');
    scoreLabel.textContent = 'Your score:';
    scoreLabel.style.cssText = `
        color: var(--body-2);
        font-size: 1rem;
    `;

    const scoreValue = document.createElement('span');
    scoreValue.className = 'page-score';
    scoreValue.textContent = '0 / 10';
    scoreValue.style.cssText = `
        color: var(--heading-color);
        font-weight: 500;
        font-size: 1.1rem;
    `;

    scoreTracker.appendChild(scoreLabel);
    scoreTracker.appendChild(scoreValue);
    container.appendChild(scoreTracker);

    // Create exercises container
    const exercisesContainer = document.createElement('div');
    exercisesContainer.className = 'exercises-container';
    exercisesContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 30px;
    `;

    // Add all exercises from this page
    const exercises = currentPageData[exerciseType];
    exerciseScores[subtitle] = exerciseScores[subtitle] || new Array(exercises.length).fill(null);

    // Определяем функцию отображения в зависимости от типа упражнения
    let showExerciseFunction;
    if (exerciseType === 'multipleChoice') {
        showExerciseFunction = showMultipleChoiceFullPageExercise;
    } else if (exerciseType === 'fillGaps') {
        showExerciseFunction = showFillGapsFullPageExercise;
    } else if (exerciseType === 'matching') {
        showExerciseFunction = showMatchingFullPageExercise;
    } else if (exerciseType === 'sentenceBuilding') {
        showExerciseFunction = showSentenceBuildingFullPageExercise;
    } else if (exerciseType === 'wordOrder') {
        showExerciseFunction = showWordOrderFullPageExercise;
    } else {
        // Для неизвестных типов используем первую доступную функцию
        showExerciseFunction = showMultipleChoiceFullPageExercise;
    }

    // Добавляем все упражнения
    exercises.forEach((exercise, index) => {
        const exerciseBox = showExerciseFunction(
            topic,
            subtitle,
            exercise,
            index,
            exerciseScores[subtitle][index]
        );
        exercisesContainer.appendChild(exerciseBox);
    });

    container.appendChild(exercisesContainer);

    // Update page score
    updatePageScore(subtitle);
}

/* ============================================
Update Page Score - Show user's score for a page
============================================ */
function updatePageScore(subtitle) {
    if (!exerciseScores || !exerciseScores[subtitle]) return;

    const scores = exerciseScores[subtitle];
    const correctCount = scores.filter(score => score === true).length;
    const totalAnswered = scores.filter(score => score !== null).length;

    const scoreDisplay = document.querySelector('.page-score');
    if (scoreDisplay) {
        scoreDisplay.textContent = `${correctCount} / ${scores.length}`;

        // Add color based on score
        if (correctCount === scores.length) {
            scoreDisplay.style.color = 'var(--correct-text)';
        } else if (correctCount >= scores.length * 0.7) {
            scoreDisplay.style.color = 'var(--correct-text)';
        } else {
            scoreDisplay.style.color = 'var(--heading-color)';
        }
    }
}

/* ============================================
Show Exercise Feedback - Display feedback under an exercise
============================================ */
function showExerciseFeedback(exerciseBox, isCorrect, message, messageRu) {
    // Check if feedback already exists
    let feedbackElement = exerciseBox.querySelector('.exercise-feedback');

    if (!feedbackElement) {
        feedbackElement = document.createElement('div');
        feedbackElement.className = 'exercise-feedback';
        exerciseBox.appendChild(feedbackElement);
    }

    // Set feedback styles based on correctness - exactly match screenshot
    if (isCorrect) {
        feedbackElement.style.cssText = `
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
            font-size: 1rem;
            background-color: rgba(56, 189, 142, 0.25);
            border: 2px solid #34d399;
            color: #a7f3d0;
        `;
    } else {
        feedbackElement.style.cssText = `
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
            font-size: 1rem;
            background-color: rgba(244, 67, 54, 0.25);
            border: 2px solid #f87171;
            color: #fca5a5;
        `;
    }

    // Create content with both languages
    let feedbackContent = '';

    // Add English feedback if available
    if (message) {
        feedbackContent += `<p style="margin: 0;">${message}</p>`;
    } else {
        feedbackContent += `<p style="margin: 0;">${isCorrect ? 'Correct!' : 'Incorrect!'}</p>`;
    }

    // Add Russian feedback if available
    if (messageRu) {
        feedbackContent += `<p style="margin: 5px 0 0 0; font-style: italic;">${messageRu}</p>`;
    } else if (message) {
        // If English is available but Russian is not, add default Russian
        feedbackContent += `<p style="margin: 5px 0 0 0; font-style: italic;">${isCorrect ? 'Правильно!' : 'Неправильно!'}</p>`;
    }

    // Set the feedback content
    feedbackElement.innerHTML = feedbackContent;
}

/* ============================================
Consistent shuffle function for exercise options
============================================ */
function shuffleWithSeed(array, seed) {
    // Simple string hash function
    const hashString = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash);
    };

    // Get deterministic seed value
    const seedValue = hashString(seed);

    // Create a copy of the array
    const result = [...array];

    // Deterministic Fisher-Yates shuffle
    for (let i = result.length - 1; i > 0; i--) {
        // Use seedValue and current index to get a deterministic random index
        const j = (seedValue + i) % (i + 1);
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

/* ============================================
Show Fill Gaps Full Page Exercise - Display fill in the gaps exercise in full page style
============================================ */
function showFillGapsFullPageExercise(topic, subtitle, exercise, index, currentScore) {
    // Create exercise container
    const exerciseBox = document.createElement('div');
    exerciseBox.className = 'exercise-box';
    exerciseBox.dataset.index = index;
    exerciseBox.style.cssText = `
        background-color: var(--card-bg);
        border-radius: 12px;
        border: 1px solid var(--card-stroke);
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    `;

    // Create exercise header with question number
    const exerciseHeader = document.createElement('div');
    exerciseHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    `;

    // Question number pill
    const exerciseNumber = document.createElement('span');
    exerciseNumber.textContent = `Question ${index + 1}`;
    exerciseNumber.style.cssText = `
        background-color: var(--accent-color);
        color: white;
        padding: 5px 12px;
        border-radius: 30px;
        font-size: 0.9rem;
        font-weight: 500;
    `;

    // Status indicator (correct/incorrect)
    const exerciseStatus = document.createElement('span');
    exerciseStatus.className = `exercise-status-${index}`;

    // Set appropriate status message and style
    if (currentScore === true) {
        exerciseStatus.textContent = '✓ Correct';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--correct-text);
        `;
    } else if (currentScore === false) {
        exerciseStatus.textContent = '✗ Incorrect';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--danger-text);
        `;
    } else {
        exerciseStatus.textContent = '';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: transparent;
        `;
    }

    exerciseHeader.appendChild(exerciseNumber);
    exerciseHeader.appendChild(exerciseStatus);
    exerciseBox.appendChild(exerciseHeader);

    // Create question container
    const questionContainer = document.createElement('div');
    questionContainer.style.cssText = `
        margin-bottom: 15px;
    `;

    // Add question
    const questionElement = document.createElement('h4');
    questionElement.textContent = exercise.question;
    questionElement.style.cssText = `
        color: var(--heading-color);
        font-size: 1.2rem;
        margin-bottom: 10px;
        font-weight: 500;
    `;
    questionContainer.appendChild(questionElement);

    // Add Russian question if available
    if (exercise.questionRu) {
        const russianQuestion = document.createElement('p');
        russianQuestion.textContent = exercise.questionRu;
        russianQuestion.style.cssText = `
            color: var(--body-2);
            font-size: 0.95rem;
            margin-bottom: 10px;
            font-style: italic;
        `;
        questionContainer.appendChild(russianQuestion);
    }

    exerciseBox.appendChild(questionContainer);

    // Create sentence with gap
    const sentenceContainer = document.createElement('div');
    sentenceContainer.style.cssText = `
        background-color: var(--card-bg-secondary);
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 20px;
    `;

    // Split the sentence at the gap marker
    const sentenceParts = (exercise.sentence || '').split('____');

    // Create sentence with gap and dropdown
    const sentenceElement = document.createElement('div');
    sentenceElement.style.cssText = `
        color: var(--body-1);
        font-size: 1.1rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px;
    `;

    // Add first part of the sentence
    const firstPart = document.createElement('span');
    firstPart.textContent = sentenceParts[0];
    sentenceElement.appendChild(firstPart);

    // Create custom styled dropdown for the gap
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = `gap-dropdown-container-${index}`;
    dropdownContainer.style.cssText = `
        position: relative;
        display: inline-block;
        min-width: 180px;
    `;

    // Create selected display field
    const selectedDisplay = document.createElement('div');
    selectedDisplay.className = `selected-display-${index}`;
    selectedDisplay.style.cssText = `
        background-color: var(--card-bg);
        color: var(--body-1);
        border: 1px solid var(--card-stroke);
        border-radius: 6px;
        padding: 8px 14px;
        font-size: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        user-select: none;
    `;

    // Add text and arrow to display field
    const displayText = document.createElement('span');
    displayText.className = `display-text-${index}`;
    displayText.textContent = '-- Select --';

    const arrow = document.createElement('span');
    arrow.innerHTML = '▼';
    arrow.style.cssText = `
        font-size: 0.7rem;
        margin-left: 8px;
        color: var(--body-2);
    `;

    selectedDisplay.appendChild(displayText);
    selectedDisplay.appendChild(arrow);
    dropdownContainer.appendChild(selectedDisplay);

    // Create dropdown options container
    const dropdownOptions = document.createElement('div');
    dropdownOptions.className = `dropdown-options-${index}`;
    dropdownOptions.style.cssText = `
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 10;
        width: 100%;
        max-height: 180px;
        overflow-y: auto;
        background-color: var(--card-bg);
        border: 1px solid var(--card-stroke);
        border-radius: 6px;
        margin-top: 3px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

    // Hidden input to store actual value
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.className = `gap-input-${index}`;
    hiddenInput.value = '';
    dropdownContainer.appendChild(hiddenInput);

    // Add options to dropdown
    if (exercise.options && Array.isArray(exercise.options)) {
        exercise.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'dropdown-option';
            optionElement.textContent = option;
            optionElement.dataset.value = option;
            optionElement.style.cssText = `
                padding: 8px 14px;
                cursor: pointer;
                border-bottom: 1px solid var(--card-stroke-tertiary);
                color: var(--body-1);
                transition: all 0.2s;
            `;

            // Add hover effect
            optionElement.addEventListener('mouseenter', function () {
                this.style.backgroundColor = 'var(--card-hover-secondary)';
            });

            optionElement.addEventListener('mouseleave', function () {
                this.style.backgroundColor = 'transparent';
            });

            // Add click event to select option
            optionElement.addEventListener('click', function () {
                const displayElement = document.querySelector(`.display-text-${index}`);
                const hiddenInput = document.querySelector(`.gap-input-${index}`);

                displayElement.textContent = this.textContent;
                hiddenInput.value = this.dataset.value;

                // Hide dropdown
                const dropdown = document.querySelector(`.dropdown-options-${index}`);
                dropdown.style.display = 'none';
                arrow.style.transform = 'rotate(0)';
            });

            dropdownOptions.appendChild(optionElement);
        });
    }

    dropdownContainer.appendChild(dropdownOptions);

    // Toggle dropdown display on click
    selectedDisplay.addEventListener('click', function () {
        // Don't toggle if already answered
        if (currentScore !== null) return;

        const dropdown = document.querySelector(`.dropdown-options-${index}`);
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            dropdown.style.display = 'none';
            arrow.style.transform = 'rotate(0)';
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest(`.gap-dropdown-container-${index}`)) {
            const dropdown = document.querySelector(`.dropdown-options-${index}`);
            if (dropdown) dropdown.style.display = 'none';

            const arrowElement = e.target.closest(`.selected-display-${index}`)?.querySelector('span:last-child');
            if (arrowElement) arrowElement.style.transform = 'rotate(0)';
        }
    });

    // Check if exercise was already answered
    if (currentScore !== null) {
        // Disable dropdown
        selectedDisplay.style.pointerEvents = 'none';

        // Set the correct value in dropdown
        const displayText = document.querySelector(`.display-text-${index}`);
        const hiddenInput = document.querySelector(`.gap-input-${index}`);

        if (displayText && hiddenInput) {
            displayText.textContent = exercise.correctAnswer;
            hiddenInput.value = exercise.correctAnswer;
        }

        // Style the dropdown based on the answer
        if (currentScore === true) {
            selectedDisplay.style.backgroundColor = 'var(--correct-bg)';
            selectedDisplay.style.borderColor = 'var(--correct-border)';
            selectedDisplay.style.color = 'var(--correct-text)';
        } else {
            selectedDisplay.style.backgroundColor = 'var(--danger-bg)';
            selectedDisplay.style.borderColor = 'var(--danger-border)';
            selectedDisplay.style.color = 'var(--danger-text)';
        }
    }

    sentenceElement.appendChild(dropdownContainer);

    // Add second part of the sentence (if any)
    if (sentenceParts.length > 1) {
        const secondPart = document.createElement('span');
        secondPart.textContent = sentenceParts[1];
        sentenceElement.appendChild(secondPart);
    }

    sentenceContainer.appendChild(sentenceElement);
    exerciseBox.appendChild(sentenceContainer);

    // Create check button
    const checkButton = document.createElement('button');
    checkButton.textContent = 'Check';
    checkButton.className = `check-answer-btn-${index}`;
    checkButton.style.cssText = `
        background-color: var(--accent-color);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 8px 16px;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    // Hide button if already answered
    if (currentScore !== null) {
        checkButton.style.display = 'none';
    } else {
        // Add hover effect for button
        checkButton.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#4F46E5'; // Darker shade
        });

        checkButton.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'var(--accent-color)';
        });

        // Add click handler for the check button
        checkButton.addEventListener('click', function () {
            const hiddenInput = document.querySelector(`.gap-input-${index}`);
            const selectedValue = hiddenInput.value;

            if (selectedValue === '') {
                // User hasn't selected an option
                alert('Please select an answer');
                return;
            }

            // Disable dropdown and button after answer is checked
            const selectedDisplay = document.querySelector(`.selected-display-${index}`);
            selectedDisplay.style.pointerEvents = 'none';
            checkButton.disabled = true;
            checkButton.style.display = 'none';

            // Check if answer is correct
            const isCorrect = selectedValue === exercise.correctAnswer;

            // Update score
            exerciseScores[subtitle] = exerciseScores[subtitle] || [];
            exerciseScores[subtitle][index] = isCorrect;
            updatePageScore(subtitle);

            // Style the dropdown based on the answer
            if (isCorrect) {
                selectedDisplay.style.backgroundColor = 'var(--correct-bg)';
                selectedDisplay.style.borderColor = 'var(--correct-border)';
                selectedDisplay.style.color = 'var(--correct-text)';

                // Update status
                const status = document.querySelector(`.exercise-status-${index}`);
                if (status) {
                    status.textContent = '✓ Correct';
                    status.style.color = 'var(--correct-text)';
                }

                // Show feedback
                showExerciseFeedback(exerciseBox, true, exercise.correctFeedback, exercise.correctFeedbackRu);
            } else {
                selectedDisplay.style.backgroundColor = 'var(--danger-bg)';
                selectedDisplay.style.borderColor = 'var(--danger-border)';
                selectedDisplay.style.color = 'var(--danger-text)';

                // Update status
                const status = document.querySelector(`.exercise-status-${index}`);
                if (status) {
                    status.textContent = '✗ Incorrect';
                    status.style.color = 'var(--danger-text)';
                }

                // Show the correct answer
                const correctAnswer = document.createElement('div');
                correctAnswer.style.cssText = `
                    margin-top: 10px;
                    font-size: 0.9rem;
                    color: var(--correct-text);
                `;
                correctAnswer.textContent = `Correct answer: ${exercise.correctAnswer}`;
                sentenceContainer.appendChild(correctAnswer);

                // Show feedback
                showExerciseFeedback(exerciseBox, false, exercise.incorrectFeedback, exercise.incorrectFeedbackRu);
            }
        });
    }

    exerciseBox.appendChild(checkButton);

    // Add feedback container if already answered
    if (currentScore !== null) {
        const feedbackText = currentScore ?
            exercise.correctFeedback :
            exercise.incorrectFeedback;

        const feedbackTextRu = currentScore ?
            exercise.correctFeedbackRu :
            exercise.incorrectFeedbackRu;

        showExerciseFeedback(exerciseBox, currentScore, feedbackText, feedbackTextRu);

        // If answer was incorrect, show the correct answer
        if (currentScore === false) {
            const correctAnswer = document.createElement('div');
            correctAnswer.style.cssText = `
                margin-top: 10px;
                font-size: 0.9rem;
                color: var(--correct-text);
            `;
            correctAnswer.textContent = `Correct answer: ${exercise.correctAnswer}`;
            sentenceContainer.appendChild(correctAnswer);
        }
    }

    return exerciseBox;
}
/* console.log("Card title:", cardTitleText);
console.log("Generated subtitle:", subtitle); */
/* ============================================
Show Multiple Choice Full Page Exercise - For compatibility with updated code
============================================ */
function showMultipleChoiceFullPageExercise(topic, subtitle, exercise, index, currentScore) {
    // Create exercise container
    const exerciseBox = document.createElement('div');
    exerciseBox.className = 'exercise-box';
    exerciseBox.dataset.index = index;
    exerciseBox.style.cssText = `
        background-color: var(--card-bg);
        border-radius: 12px;
        border: 1px solid var(--card-stroke);
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    `;

    // Create exercise header with question number
    const exerciseHeader = document.createElement('div');
    exerciseHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    `;

    // Question number pill
    const exerciseNumber = document.createElement('span');
    exerciseNumber.textContent = `Question ${index + 1}`;
    exerciseNumber.style.cssText = `
        background-color: var(--accent-color);
        color: white;
        padding: 5px 12px;
        border-radius: 30px;
        font-size: 0.9rem;
        font-weight: 500;
    `;

    // Status indicator (correct/incorrect)
    const exerciseStatus = document.createElement('span');
    exerciseStatus.className = `exercise-status-${index}`;

    // Set appropriate status message and style
    if (exerciseScores[subtitle][index] === true) {
        exerciseStatus.textContent = '✓ Correct';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--correct-text);
        `;
    } else if (exerciseScores[subtitle][index] === false) {
        exerciseStatus.textContent = '✗ Incorrect';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--danger-text);
        `;
    } else {
        exerciseStatus.textContent = '';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: transparent;
        `;
    }

    exerciseHeader.appendChild(exerciseNumber);
    exerciseHeader.appendChild(exerciseStatus);
    exerciseBox.appendChild(exerciseHeader);

    // Create question container
    const questionContainer = document.createElement('div');
    questionContainer.style.cssText = `
        margin-bottom: 15px;
    `;

    // Add question
    const questionElement = document.createElement('h4');
    questionElement.textContent = exercise.question;
    questionElement.style.cssText = `
        color: var(--heading-color);
        font-size: 1.2rem;
        margin-bottom: 10px;
        font-weight: 500;
    `;
    questionContainer.appendChild(questionElement);

    // Add Russian question if available
    if (exercise.questionRu) {
        const russianQuestion = document.createElement('p');
        russianQuestion.textContent = exercise.questionRu;
        russianQuestion.style.cssText = `
            color: var(--body-2);
            font-size: 0.95rem;
            margin-bottom: 10px;
            font-style: italic;
        `;
        questionContainer.appendChild(russianQuestion);
    }

    // Add sentence if available
    if (exercise.sentence) {
        const sentenceElement = document.createElement('p');
        sentenceElement.style.cssText = `
            color: var(--body-1);
            font-size: 1.1rem;
            margin-bottom: 15px;
        `;

        // Replace underscore with a styled blank - make the blue underline longer
        sentenceElement.innerHTML = exercise.sentence.replace(
            /_+/g,
            '<span style="display: inline-block; min-width: 80px; /* border-bottom: 2px solid #6366f1; */ text-align: center; color: var(--body-1);">___________</span>'
        );

        questionContainer.appendChild(sentenceElement);
    }

    exerciseBox.appendChild(questionContainer);

    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = `options-container-${index}`;
    optionsContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 8px;
    `;

    // Clone and shuffle the options array for display
    const optionsData = exercise.options.map((text, optIndex) => ({
        text,
        isCorrect: optIndex === exercise.correctAnswer
    }));

    // Shuffle the options (but maintain consistency for answered questions)
    const optionSeed = `${topic}-${subtitle}-${index}`;
    const shuffledOptions = shuffleWithSeed(optionsData, optionSeed);

    // Flag to check if this question was answered
    const isAnswered = exerciseScores[subtitle][index] !== null;

    // Find the selected option index (if any)
    let selectedOptionIndex = -1;
    if (selectedOptions && selectedOptions[subtitle] && selectedOptions[subtitle][index] !== undefined) {
        selectedOptionIndex = selectedOptions[subtitle][index];
    }

    // Add option buttons
    shuffledOptions.forEach((option, optIndex) => {
        const optionButton = document.createElement('button');
        optionButton.className = `option-button option-${index}-${optIndex}`;
        optionButton.dataset.questionIndex = index;
        optionButton.dataset.optionIndex = optIndex;
        optionButton.dataset.correct = option.isCorrect;
        optionButton.textContent = option.text;

        // Important: center the text in the button to match screenshot
        optionButton.style.textAlign = 'left';

        // Check if this option is the selected one for this question
        const isThisOptionSelected = (selectedOptionIndex === optIndex);

        // Set the button styles based on the question status
        if (isAnswered) {
            if (isThisOptionSelected) {
                if (option.isCorrect) {
                    // Correct selected option - green background
                    optionButton.style.cssText = `
                        background-color: rgba(56, 189, 142, 0.25);
                        border: 1px solid #34d399;
                        border-radius: 8px;
                        padding: 12px 16px;
                        text-align: left;
                        color: #a7f3d0;
                        font-size: 1rem;
                        cursor: default;
                        width: 100%;
                    `;
                } else {
                    // Incorrect selected option - red background
                    optionButton.style.cssText = `
                        background-color: rgba(244, 67, 54, 0.25);
                        border: 1px solid #f87171;
                        border-radius: 8px;
                        padding: 12px 16px;
                        text-align: left;
                        color: #fca5a5;
                        font-size: 1rem;
                        cursor: default;
                        width: 100%;
                    `;
                }
            } else if (option.isCorrect && !selectedOptions[subtitle]) {
                // If there's a correct answer that wasn't selected (when another incorrect option was chosen)
                optionButton.style.cssText = `
                    background-color: rgba(56, 189, 142, 0.25);
                    border: 1px solid #34d399;
                    border-radius: 8px;
                    padding: 12px 16px;
                    text-align: left;
                    color: #a7f3d0;
                    font-size: 1rem;
                    cursor: default;
                    width: 100%;
                `;
            } else {
                // Non-selected options in an answered question - gray/neutral style
                optionButton.style.cssText = `
                    background-color: #292a3e;
                    border: 1px solid #353748;
                    border-radius: 8px;
                    padding: 12px 16px;
                    text-align: left;
                    color: #6e7191;
                    font-size: 1rem;
                    cursor: default;
                    width: 100%;
                `;
            }

            // Disable all buttons for answered questions
            optionButton.disabled = true;
        } else {
            // This is a fresh, unanswered question - all options look the same
            optionButton.style.cssText = `
                background-color: #292a3e;
                border: 1px solid #353748;
                border-radius: 8px;
                padding: 12px 16px;
                text-align: left;
                color: #f8fafc;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.2s ease;
                width: 100%;
            `;

            // Add hover effect
            optionButton.addEventListener('mouseenter', function () {
                this.style.backgroundColor = 'var(--card-hover-secondary)';
                this.style.borderColor = 'var(--accent-color)';
            });

            optionButton.addEventListener('mouseleave', function () {
                this.style.backgroundColor = '#292a3e';
                this.style.borderColor = '#353748';
            });
        }

        // Add click handler for unanswered questions
        if (!isAnswered) {
            optionButton.addEventListener('click', function () {
                // Store user's selection
                selectedOptions = selectedOptions || {};
                selectedOptions[subtitle] = selectedOptions[subtitle] || {};
                selectedOptions[subtitle][index] = optIndex;

                // Check if answer is correct
                const isCorrect = this.dataset.correct === 'true';

                // Update score
                exerciseScores[subtitle][index] = isCorrect;
                updatePageScore(subtitle);

                // Disable all options for this question
                const allOptions = document.querySelectorAll(`.option-button[data-question-index="${index}"]`);
                allOptions.forEach(opt => {
                    opt.disabled = true;
                    opt.style.cursor = 'default';

                    // Remove hover effects
                    opt.removeEventListener('mouseenter', null);
                    opt.removeEventListener('mouseleave', null);

                    // Gray out non-selected options
                    opt.style.backgroundColor = '#292a3e';
                    opt.style.borderColor = '#353748';
                    opt.style.color = '#6e7191';
                });

                // Style selected option
                if (isCorrect) {
                    this.style.backgroundColor = 'rgba(56, 189, 142, 0.25)';
                    this.style.borderColor = '#34d399';
                    this.style.color = '#a7f3d0';

                    // Update status
                    const status = document.querySelector(`.exercise-status-${index}`);
                    if (status) {
                        status.textContent = '✓ Correct';
                        status.style.color = 'var(--correct-text)';
                    }

                    // Show feedback
                    showExerciseFeedback(exerciseBox, true, exercise.correctFeedback, exercise.correctFeedbackRu);
                } else {
                    // Style incorrect selected option
                    this.style.backgroundColor = 'rgba(244, 67, 54, 0.25)';
                    this.style.borderColor = '#f87171';
                    this.style.color = '#fca5a5';

                    // Highlight correct answer
                    allOptions.forEach(opt => {
                        if (opt.dataset.correct === 'true') {
                            opt.style.backgroundColor = 'rgba(56, 189, 142, 0.25)';
                            opt.style.borderColor = '#34d399';
                            opt.style.color = '#a7f3d0';
                        }
                    });

                    // Update status
                    const status = document.querySelector(`.exercise-status-${index}`);
                    if (status) {
                        status.textContent = '✗ Incorrect';
                        status.style.color = 'var(--danger-text)';
                    }

                    // Show feedback
                    showExerciseFeedback(exerciseBox, false, exercise.incorrectFeedback, exercise.incorrectFeedbackRu);
                }
            });
        }

        optionsContainer.appendChild(optionButton);
    });

    exerciseBox.appendChild(optionsContainer);

    // Add feedback container if already answered
    if (exerciseScores[subtitle][index] !== null) {
        const feedbackText = exerciseScores[subtitle][index] ?
            exercise.correctFeedback :
            exercise.incorrectFeedback;

        const feedbackTextRu = exerciseScores[subtitle][index] ?
            exercise.correctFeedbackRu :
            exercise.incorrectFeedbackRu;

        const isCorrect = exerciseScores[subtitle][index];
        showExerciseFeedback(exerciseBox, isCorrect, feedbackText, feedbackTextRu);
    }

    return exerciseBox;
}

/* ============================================
Show Matching Full Page Exercise 
============================================ */
function showMatchingFullPageExercise(topic, subtitle, exercise, index, currentScore) {
    // Create exercise container
    const exerciseBox = document.createElement('div');
    exerciseBox.className = 'exercise-box';
    exerciseBox.dataset.index = index;
    exerciseBox.style.cssText = `
        background-color: var(--card-bg);
        border-radius: 12px;
        border: 1px solid var(--card-stroke);
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    `;

    // Create exercise header
    const header = document.createElement('div');
    header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    `;

    const questionNumber = document.createElement('span');
    questionNumber.textContent = `Question ${index + 1}`;
    questionNumber.style.cssText = `
        background-color: var(--accent-color);
        color: white;
        padding: 5px 12px;
        border-radius: 30px;
        font-size: 0.9rem;
        font-weight: 500;
    `;

    const exerciseStatus = document.createElement('span');
    exerciseStatus.className = `exercise-status-${index}`;

    // Set status if already answered
    if (currentScore === true) {
        exerciseStatus.textContent = '✓ Correct';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--correct-text);
        `;
    } else if (currentScore === false) {
        exerciseStatus.textContent = '✗ Incorrect';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--danger-text);
        `;
    } else {
        exerciseStatus.textContent = '';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: transparent;
        `;
    }

    header.appendChild(questionNumber);
    header.appendChild(exerciseStatus);
    exerciseBox.appendChild(header);

    // Create question text
    const questionContainer = document.createElement('div');
    questionContainer.style.cssText = `margin-bottom: 20px;`;

    const questionText = document.createElement('h4');
    questionText.textContent = exercise.question;
    questionText.style.cssText = `
        color: var(--heading-color);
        font-size: 1.2rem;
        margin-bottom: 10px;
    `;
    questionContainer.appendChild(questionText);

    // Add Russian question if available
    if (exercise.questionRu) {
        const questionTextRu = document.createElement('p');
        questionTextRu.textContent = exercise.questionRu;
        questionTextRu.style.cssText = `
            color: var(--body-2);
            font-size: 0.95rem;
            font-style: italic;
            margin-bottom: 15px;
        `;
        questionContainer.appendChild(questionTextRu);
    }

    exerciseBox.appendChild(questionContainer);

    // Create matching items container
    const matchingContainer = document.createElement('div');
    matchingContainer.className = `matching-container-${index}`;
    matchingContainer.style.cssText = `
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
    `;

    // Create columns for items
    const leftColumn = document.createElement('div');
    leftColumn.className = `left-column-${index}`;
    leftColumn.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;

    const rightColumn = document.createElement('div');
    rightColumn.className = `right-column-${index}`;
    rightColumn.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;

    // Store state information
    const state = {
        selectedItem: null,
        connections: [],
        correctPairs: [],
        readonly: currentScore !== null,
        completedCount: 0
    };

    // Function to get correct pairs for a left index
    function getCorrectRightIndices(leftIndex) {
        return exercise.correctPairs
            .filter(pair => pair[0] === leftIndex)
            .map(pair => pair[1]);
    }

    // Check if we've completed all items
    function checkCompletion() {
        if (state.completedCount === exercise.leftItems.length && !state.readonly) {
            state.readonly = true;

            // Update score
            const allCorrect = state.connections.every(conn => conn.isCorrect);
            exerciseScores[subtitle] = exerciseScores[subtitle] || [];
            exerciseScores[subtitle][index] = allCorrect;
            updatePageScore(subtitle);

            // Update status
            const status = document.querySelector(`.exercise-status-${index}`);
            if (status) {
                if (allCorrect) {
                    status.textContent = '✓ Correct';
                    status.style.color = 'var(--correct-text)';
                    showExerciseFeedback(exerciseBox, true, exercise.feedback, exercise.feedbackRu);
                } else {
                    status.textContent = '✗ Incorrect';
                    status.style.color = 'var(--danger-text)';
                    showExerciseFeedback(exerciseBox, false, exercise.feedback, exercise.feedbackRu);
                }
            }
        }
    }

    // Add left items
    if (exercise.leftItems && Array.isArray(exercise.leftItems)) {
        exercise.leftItems.forEach((item, i) => {
            const leftItem = document.createElement('div');
            leftItem.className = `left-item-${index}-${i}`;
            leftItem.textContent = item;
            leftItem.dataset.index = i;
            leftItem.style.cssText = `
                background-color: var(--card-bg-secondary);
                padding: 10px;
                border-radius: 6px;
                border: 1px solid var(--card-stroke);
                cursor: pointer;
                user-select: none;
                transition: all 0.2s;
                position: relative;
                z-index: 2;
            `;

            // Disable if readonly
            if (state.readonly) {
                leftItem.style.cursor = 'default';
                leftItem.style.pointerEvents = 'none';
            } else {
                // Add hover effect
                leftItem.addEventListener('mouseenter', function () {
                    // Don't apply hover if already connected correctly
                    const alreadyConnected = state.connections.some(conn =>
                        conn.leftIndex === i && conn.isCorrect);

                    if (!alreadyConnected && !state.readonly) {
                        this.style.borderColor = 'var(--accent-color)';
                        this.style.boxShadow = '0 0 0 1px var(--accent-color)';
                    }
                });

                leftItem.addEventListener('mouseleave', function () {
                    // Don't remove styles if selected or connected
                    const isSelected = state.selectedItem &&
                        state.selectedItem.type === 'left' &&
                        state.selectedItem.index === i;

                    const isConnected = state.connections.some(conn => conn.leftIndex === i);

                    if (!isSelected && !isConnected) {
                        this.style.borderColor = 'var(--card-stroke)';
                        this.style.boxShadow = 'none';
                    }
                });

                // Add click handler
                leftItem.addEventListener('click', function () {
                    // Skip if already connected correctly
                    const alreadyConnected = state.connections.some(conn =>
                        conn.leftIndex === i && conn.isCorrect);

                    if (alreadyConnected || state.readonly) return;

                    // If this item is already selected, deselect it
                    if (state.selectedItem && state.selectedItem.type === 'left' && state.selectedItem.index === i) {
                        state.selectedItem = null;
                        leftItem.style.borderColor = 'var(--card-stroke)';
                        leftItem.style.backgroundColor = 'var(--card-bg-secondary)';
                        leftItem.style.boxShadow = 'none';
                        return;
                    }

                    // If another left item is selected, deselect it
                    if (state.selectedItem && state.selectedItem.type === 'left') {
                        const prevItem = document.querySelector(`.left-item-${index}-${state.selectedItem.index}`);
                        if (prevItem) {
                            prevItem.style.borderColor = 'var(--card-stroke)';
                            prevItem.style.backgroundColor = 'var(--card-bg-secondary)';
                            prevItem.style.boxShadow = 'none';
                        }
                    }

                    // Select this item
                    state.selectedItem = { type: 'left', index: i };
                    leftItem.style.borderColor = 'var(--accent-color)';
                    leftItem.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
                    leftItem.style.boxShadow = '0 0 0 2px var(--accent-color)';

                    // Add subtle pulse animation to indicate selection
                    leftItem.style.animation = 'pulse 1.5s infinite';
                });
            }

            leftColumn.appendChild(leftItem);
        });
    }

    // Add right items
    if (exercise.rightItems && Array.isArray(exercise.rightItems)) {
        // Create a copy of rightItems with their original indices
        const rightItemsWithIndex = exercise.rightItems.map((item, index) => ({ item, index }));

        // Shuffle the array
        for (let i = rightItemsWithIndex.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [rightItemsWithIndex[i], rightItemsWithIndex[j]] = [rightItemsWithIndex[j], rightItemsWithIndex[i]];
        }

        // Add items to the right column
        rightItemsWithIndex.forEach(({ item, index: originalIndex }) => {
            const rightItem = document.createElement('div');
            rightItem.className = `right-item-${index}-${originalIndex}`;
            rightItem.textContent = item;
            rightItem.dataset.index = originalIndex;
            rightItem.style.cssText = `
                background-color: var(--card-bg-secondary);
                padding: 10px;
                border-radius: 6px;
                border: 1px solid var(--card-stroke);
                cursor: pointer;
                user-select: none;
                transition: all 0.2s;
                position: relative;
                z-index: 2;
            `;

            // Disable if readonly
            if (state.readonly) {
                rightItem.style.cursor = 'default';
                rightItem.style.pointerEvents = 'none';
            } else {
                // Add hover effect
                rightItem.addEventListener('mouseenter', function () {
                    // Don't apply hover if already connected correctly
                    const alreadyConnected = state.connections.some(conn =>
                        conn.rightIndex === originalIndex && conn.isCorrect);

                    if (!alreadyConnected && !state.readonly) {
                        this.style.borderColor = 'var(--accent-color)';
                        this.style.boxShadow = '0 0 0 1px var(--accent-color)';
                    }
                });

                rightItem.addEventListener('mouseleave', function () {
                    // Don't remove styles if selected or connected
                    const isSelected = state.selectedItem &&
                        state.selectedItem.type === 'right' &&
                        state.selectedItem.index === originalIndex;

                    const isConnected = state.connections.some(conn => conn.rightIndex === originalIndex);

                    if (!isSelected && !isConnected) {
                        this.style.borderColor = 'var(--card-stroke)';
                        this.style.boxShadow = 'none';
                    }
                });

                // Add click handler
                rightItem.addEventListener('click', function () {
                    // Skip if no left item is selected or already in readonly mode
                    if (!state.selectedItem || state.selectedItem.type !== 'left' || state.readonly) return;

                    const leftIndex = state.selectedItem.index;
                    const rightIndex = originalIndex;

                    // Check if this left item already has a correct connection
                    const alreadyConnected = state.connections.some(conn =>
                        conn.leftIndex === leftIndex && conn.isCorrect);

                    if (alreadyConnected) return;

                    // Remove any existing connection for this left item
                    state.connections = state.connections.filter(conn => conn.leftIndex !== leftIndex);

                    // Get correct right indices for this left item
                    const correctRightIndices = getCorrectRightIndices(leftIndex);

                    // Check if this connection is correct
                    const isCorrect = correctRightIndices.includes(rightIndex);

                    // Add new connection
                    state.connections.push({
                        leftIndex,
                        rightIndex,
                        isCorrect
                    });

                    // Reset selected item
                    const leftItem = document.querySelector(`.left-item-${index}-${leftIndex}`);
                    if (leftItem) {
                        // Remove pulse animation
                        leftItem.style.animation = '';

                        if (isCorrect) {
                            // Mark as correctly connected with nice styles
                            leftItem.style.borderColor = '#34d399';
                            leftItem.style.backgroundColor = 'rgba(52, 211, 153, 0.1)';
                            leftItem.style.boxShadow = '0 0 0 2px #34d399';

                            rightItem.style.borderColor = '#34d399';
                            rightItem.style.backgroundColor = 'rgba(52, 211, 153, 0.1)';
                            rightItem.style.boxShadow = '0 0 0 2px #34d399';

                            // Add subtle success animation
                            leftItem.style.transition = 'all 0.3s ease-out';
                            rightItem.style.transition = 'all 0.3s ease-out';

                            // Play success animation
                            [leftItem, rightItem].forEach(item => {
                                item.animate([
                                    { transform: 'scale(1)' },
                                    { transform: 'scale(1.05)' },
                                    { transform: 'scale(1)' }
                                ], {
                                    duration: 300,
                                    easing: 'ease-in-out'
                                });
                            });

                            // Increment completed count
                            state.completedCount++;

                            // Play success sound
                            const successSound = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjEyLjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAeAAAXDAAGBg0NDRQUFBsbGyIiIikpKTAwMDc3Nz4+PkVFRUxMTFNTU1paWmFhYWhoaG9vb3Z2dnx8fIODg4qKipGRkZiYmJ+fn6ampq2trbS0tLu7u8LCwsnJydDQ0NbW1t3d3eTk5Ovr6/Ly8vn5+f////8AAAAATGF2YzU4LjIxAAAAAAAAAAAAAAAAJAAAAAAAAAAAFwzpRKmVAAAAAAAAAAAAAAAAAAAA//tAxAAAB7gFF6EEAN0IJL0wYgATEEMm5BDAMQwSaCEEjQR5TKeo6plU8BUz3G7rdKhImLhzIeEibieHPh4cOeHg+D4Ph8H3xP/B/yggg/5QfB8Hw+H//h8H3//+UHwfB8Hw+IAYTauXKuubh3HQcv///xSa066HcjgzjsyPimnff/9wQznynHYg////0KGGFMOYmFCDCkHMSiikT//8pMR5U5dOrKORwhxp1r///+SMTqadSb0zhzC6E4Xb////2JihTjs25nDofcpDAP4ABAAAwhoSFjIcRxHwEAEAACOsuXPn//tAxDyACwyjMfmsgBoF7Kb/MwAJfctRnGRocjkeTyB7K5Y+J7Mks84pY99u2Xm9nyeu22223TPPrRTbfdxzz16Y+YiIiIiIiJnMiIiIkREzO7vaqpmZ3d3d3eqqqrt5qqq96qqrniIiImbMzMx3d3d1VVVVeqqqqveqssdt/nZVe9VVvueIiIhssiIid4iI3iIiqqsznd3d3eqqqqqqt1VVV71VV2ZmZmZmZ3d3hhhhgwwwYDBgwYMMMGDDDDDDDDDDDBhmzDBgwYMGDBgwYMGDDMhhhhhhhhj/3v+93/+YMGDDBgwYMMMMGGGGGDDDDDB//tAxEABD0iLO/ZlABnVkSX+zaADgwYMGDDBgwYZgwYMGGGGGGGGGCAJGBCDAAQhCgAAAgQQAAAgCBAAAQIAgCFABAgAIEASMAEBAhAICQICDHDw+jhwH08PB7AgP/BB/ghCwIOD+DweQQEBAQEYIOCAOBAQcEAQEGGNCDAgIMcaGNCDAgBx/gg5oIH4IPAf//ghCHh///8EBBx////h4P////h4fDw8PDw8Hg8Hg8Hw+Hw8Hw+H3wfBzwfB8EHwffB8H/BA+D/gg4IOOaCD/ggf//ghCH///+CD//oIch4Yfgh/4IP/+CD//pA//tAxEOADpCHN/mnACHWESY/POADQgfB//wcH//f/8HwQ////8P////D////w////8PDw8PDwffB8Hg8Hw+D4Pg+CAgg4IOCDmoIP+CDmog5qIP+CDmg5qIP+CD/mg//oIP/+D/+g//4P+aD//g//oP/+CDmg//4P/+D//g//4P/+CD/gg/5oIQh/4IQhD/wc/8EHHBBzQc0EH/BBzQQf/////////////////////g+Hw+Hw+D4IQfkUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tAxEWADgCJN/mnADG+kSd/MeAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
                            successSound.play().catch(e => console.log('Audio play prevented:', e));

                            // Check if we've completed all items
                            checkCompletion();
                        } else {
                            // Mark as incorrectly connected with shake animation
                            leftItem.style.borderColor = '#f87171';
                            leftItem.style.boxShadow = '0 0 0 2px #f87171';
                            rightItem.style.borderColor = '#f87171';
                            rightItem.style.boxShadow = '0 0 0 2px #f87171';

                            // Shake animation for incorrect match
                            [leftItem, rightItem].forEach(item => {
                                item.style.animation = 'shake 0.5s';
                                setTimeout(() => {
                                    item.style.animation = '';
                                    item.style.borderColor = 'var(--card-stroke)';
                                    item.style.boxShadow = 'none';
                                }, 800);
                            });

                            // Remove the connection after animation completes
                            setTimeout(() => {
                                // Remove the connection from state
                                state.connections = state.connections.filter(conn =>
                                    !(conn.leftIndex === leftIndex && conn.rightIndex === rightIndex));

                                // Reset styles
                                leftItem.style.borderColor = 'var(--card-stroke)';
                                leftItem.style.boxShadow = 'none';
                                leftItem.style.backgroundColor = 'var(--card-bg-secondary)';

                                rightItem.style.borderColor = 'var(--card-stroke)';
                                rightItem.style.boxShadow = 'none';
                                rightItem.style.backgroundColor = 'var(--card-bg-secondary)';

                                // Reset selected item
                                state.selectedItem = null;

                                // Play error sound
                                const errorSound = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjEyLjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAoAAAiQAAFBQsLEhIYGB4eJSUrKzExODg+PkVFS0tSUlhYX19lZWxscnJ4eH9/hYWMjJKSmJifn6amrKyysri4v7/FxczM0tLZ2d/f5ubr6/Hx9/f9/f//AAAAAExhdmM1OC4yMQAAAAAAAAAAAAAAJAWQAAAAAAAAIkAvFLGdAAAAAAAAAAAAAAAAAAAA//tAxAAACxxhGeEEACsTEDa/IBoA4QABRAABEbSpMQyjEwjGAJYQMQBgDogeAJ0fEFBv4IAH/g+A98XweD6TYCIfB9/+/xM/BAP/ysQBT4P/5QGB9A//lA//9B/7//ff7//0H/v//pP63/U3lUrJbbSpMQylHmXXTTEVMZJJMQyjEwjHQcJjjCCUw6UCEGDKTQKASQlDYuDvLgyMSEqXCcZCRmAYiHhMJhIwYAHAVcZEpkHG+KV0xwzBIlBGsWdohQUDdE2lVjabkZzRQRtdoUmM2VEUQ0cE//tAxB0ADMhhgfvlABKPi3A/7wABE9NQYpoTizJm5QDBU5RkCFQnSrR2iSZlB9YwmjP/U4+sZ+T1/mf//5//7l///8Hf///+7+////sxlViCnTr1mIz4bYG4ggHgcR2GcMZOeDkUAAEBBAiJhA7pn5p6FTt2iE1j1zzDfTtLCbzpHdVdPnU19zRcmmNqlb0/9P/+n////+W/sS4u7//++3KZYzf/////srdNJImGyYymw+dFBGUBbg8AAXBUMCdGzJWBmFHpioQdIKCEmC3DioORQSMzKVc1rB//tAxCQAD5yHgf54AAI2kK9/rMAARyB0GXKGZbJcfF9E3KRrLd9aN+7NdFkbWSdytrNZG5dWSu1/bWzjue3X7/3Znu/7dTWaq////6m7u//9+qu3bvZt2///0+9P////zDIAMoRUUlKpKkkhUNAQcBYWBQOBQCPRIVrKqkrJNPLdUwggQfJLKVVVtZVSpfIhwfJ+RDh8vlSpfvCQZJLB8vlS+X7qD8eEP/rKqqX8JGXy+XzIMMmSD5PlST5UlUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tAxC4ADwSFcfvBABF/kK7+CYAoVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
                                errorSound.play().catch(e => console.log('Audio play prevented:', e));

                            }, 800);
                        }
                    }

                    state.selectedItem = null;
                });
            }

            rightColumn.appendChild(rightItem);
        });
    }

    // Assemble the matching container
    matchingContainer.appendChild(leftColumn);
    matchingContainer.appendChild(rightColumn);
    exerciseBox.appendChild(matchingContainer);

    // Add CSS for animations
    const animations = document.createElement('style');
    animations.textContent = `
        @keyframes pulse {
            0% { box-shadow: 0 0 0 2px var(--accent-color); }
            50% { box-shadow: 0 0 0 4px var(--accent-color); }
            100% { box-shadow: 0 0 0 2px var(--accent-color); }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    exerciseBox.appendChild(animations);

    // Render correct connections if already answered
    if (state.readonly) {
        // Populate connections with correct pairs
        exercise.correctPairs.forEach(pair => {
            state.connections.push({
                leftIndex: pair[0],
                rightIndex: pair[1],
                isCorrect: true
            });
        });

        // Update completed count
        state.completedCount = exercise.leftItems.length;

        // Update styles for all matched items
        setTimeout(() => {
            state.connections.forEach(conn => {
                const leftItem = document.querySelector(`.left-item-${index}-${conn.leftIndex}`);
                const rightItem = document.querySelector(`.right-item-${index}-${conn.rightIndex}`);

                if (leftItem && rightItem) {
                    leftItem.style.borderColor = '#34d399';
                    leftItem.style.backgroundColor = 'rgba(52, 211, 153, 0.1)';
                    leftItem.style.boxShadow = '0 0 0 2px #34d399';

                    rightItem.style.borderColor = '#34d399';
                    rightItem.style.backgroundColor = 'rgba(52, 211, 153, 0.1)';
                    rightItem.style.boxShadow = '0 0 0 2px #34d399';
                }
            });

            // Add feedback message
            if (currentScore === true) {
                showExerciseFeedback(exerciseBox, true, exercise.feedback, exercise.feedbackRu);
            } else {
                showExerciseFeedback(exerciseBox, false, exercise.feedback, exercise.feedbackRu);
            }
        }, 100);
    }
    // Для упражнений, на которые еще не был дан ответ, можно добавить кнопку проверки
    // Закомментирован или удален блок добавления кнопки "Check Answers"
    /* 
    else {
        const checkButton = document.createElement('button');
        checkButton.textContent = 'Check Answers';
        checkButton.style.cssText = `
            background-color: var(--accent-color);
            color: white;
            border: none;
            border-radius: 6px;
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 15px;
            transition: all 0.2s ease;
        `;
        
        checkButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#4F46E5';
        });
        
        checkButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--accent-color)';
        });
        
        checkButton.addEventListener('click', function() {
            // Check if all items are connected
            if (state.connections.length < exercise.leftItems.length) {
                // Show notification that not all items are connected
                alert('Please connect all items before checking.');
                return;
            }
            
            // Evaluate all connections
            const allCorrect = state.connections.every(conn => conn.isCorrect);
            
            // Set exercise as readonly
            state.readonly = true;
            
            // Update score
            exerciseScores[subtitle] = exerciseScores[subtitle] || [];
            exerciseScores[subtitle][index] = allCorrect;
            updatePageScore(subtitle);
            
            // Update status
            const status = document.querySelector(`.exercise-status-${index}`);
            if (status) {
                if (allCorrect) {
                    status.textContent = '✓ Correct';
                    status.style.color = 'var(--correct-text)';
                    showExerciseFeedback(exerciseBox, true, exercise.feedback, exercise.feedbackRu);
                } else {
                    status.textContent = '✗ Incorrect';
                    status.style.color = 'var(--danger-text)';
                    
                    // Show correct answers
                    state.connections = [];
                    exercise.correctPairs.forEach(pair => {
                        state.connections.push({
                            leftIndex: pair[0],
                            rightIndex: pair[1],
                            isCorrect: true
                        });
                    });
                    
                    // Update item styles
                    document.querySelectorAll(`[class^="left-item-${index}-"], [class^="right-item-${index}-"]`).forEach(item => {
                        item.style.borderColor = 'var(--card-stroke)';
                        item.style.backgroundColor = 'var(--card-bg-secondary)';
                        item.style.boxShadow = 'none';
                        item.style.animation = '';
                        item.style.cursor = 'default';
                        item.style.pointerEvents = 'none';
                    });
                    
                    // Style correctly connected items
                    state.connections.forEach(conn => {
                        const leftItem = document.querySelector(`.left-item-${index}-${conn.leftIndex}`);
                        const rightItem = document.querySelector(`.right-item-${index}-${conn.rightIndex}`);
                        
                        if (leftItem && rightItem) {
                            leftItem.style.borderColor = '#34d399';
                            leftItem.style.backgroundColor = 'rgba(52, 211, 153, 0.1)';
                            leftItem.style.boxShadow = '0 0 0 2px #34d399';
                            
                            rightItem.style.borderColor = '#34d399';
                            rightItem.style.backgroundColor = 'rgba(52, 211, 153, 0.1)';
                            rightItem.style.boxShadow = '0 0 0 2px #34d399';
                        }
                    });
                    
                    showExerciseFeedback(exerciseBox, false, exercise.feedback, exercise.feedbackRu);
                }
            }
            
            // Hide check button
            checkButton.style.display = 'none';
            
            // Disable all items
            document.querySelectorAll(`[class^="left-item-${index}-"], [class^="right-item-${index}-"]`).forEach(item => {
                item.style.cursor = 'default';
                item.style.pointerEvents = 'none';
            });
            
            // Play final animation
            if (allCorrect) {
                exerciseBox.animate([
                    { boxShadow: '0 0 0 2px transparent' },
                    { boxShadow: '0 0 0 4px #34d399' },
                    { boxShadow: '0 0 0 2px transparent' }
                ], {
                    duration: 1000,
                    iterations: 2
                });
            }
        });
        
        exerciseBox.appendChild(checkButton);
    }
    */

    return exerciseBox;
}

/* ============================================
Show Sentence Building Full Page Exercise 
============================================ */
function showSentenceBuildingFullPageExercise(topic, subtitle, exercise, index, currentScore) {
    // Create exercise container
    const exerciseBox = document.createElement('div');
    exerciseBox.className = 'exercise-box';
    exerciseBox.dataset.index = index;
    exerciseBox.style.cssText = `
        background-color: var(--card-bg);
        border-radius: 12px;
        border: 1px solid var(--card-stroke);
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    `;

    // Exercise header with question number
    const header = document.createElement('div');
    header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    `;

    const questionNumber = document.createElement('span');
    questionNumber.textContent = `Question ${index + 1}`;
    questionNumber.style.cssText = `
        background-color: var(--accent-color);
        color: white;
        padding: 5px 12px;
        border-radius: 30px;
        font-size: 0.9rem;
        font-weight: 500;
    `;

    // Status indicator (correct/incorrect)
    const exerciseStatus = document.createElement('span');
    exerciseStatus.className = `exercise-status-${index}`;

    // Set status if already answered
    if (currentScore === true) {
        exerciseStatus.textContent = '✓ Correct';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--correct-text);
        `;
    } else if (currentScore === false) {
        exerciseStatus.textContent = '✗ Incorrect';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--danger-text);
        `;
    } else {
        exerciseStatus.textContent = '';
        exerciseStatus.style.cssText = `
            font-size: 0.95rem;
            font-weight: 500;
            color: transparent;
        `;
    }

    header.appendChild(questionNumber);
    header.appendChild(exerciseStatus);
    exerciseBox.appendChild(header);

    // Question container
    const questionContainer = document.createElement('div');
    questionContainer.style.cssText = `margin-bottom: 20px;`;

    // Add question
    const questionText = document.createElement('h4');
    questionText.textContent = exercise.question;
    questionText.style.cssText = `
        color: var(--heading-color);
        font-size: 1.2rem;
        margin-bottom: 10px;
        font-weight: 500;
    `;
    questionContainer.appendChild(questionText);

    // Add Russian question if available
    if (exercise.questionRu) {
        const russianQuestion = document.createElement('p');
        russianQuestion.textContent = exercise.questionRu;
        russianQuestion.style.cssText = `
            color: var(--body-2);
            font-size: 0.95rem;
            margin-bottom: 10px;
            font-style: italic;
        `;
        questionContainer.appendChild(russianQuestion);
    }

    exerciseBox.appendChild(questionContainer);

    // Create answer container (where words will be placed when clicked)
    const answerContainer = document.createElement('div');
    answerContainer.className = `answer-container-${index}`;
    answerContainer.style.cssText = `
        min-height: 60px;
        padding: 15px;
        background-color: var(--card-bg-secondary);
        border-radius: 8px;
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        border: 1px dashed var(--card-stroke);
    `;
    exerciseBox.appendChild(answerContainer);

    // Create words container (available words to click)
    const wordsContainer = document.createElement('div');
    wordsContainer.className = `words-container-${index}`;
    wordsContainer.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 20px;
    `;

    // Shuffle the words
    const shuffledWords = [...exercise.words];
    for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
    }

    // Track if this exercise is complete
    const state = {
        selectedWords: [],
        isComplete: currentScore !== null,
        isCorrect: currentScore === true
    };

    // Add words to the words container
    if (!state.isComplete) {
        shuffledWords.forEach((word, wordIndex) => {
            const wordElement = document.createElement('div');
            wordElement.className = `word-element-${index}-${wordIndex}`;
            wordElement.textContent = word;
            wordElement.dataset.word = word;
            wordElement.dataset.wordIndex = wordIndex;
            wordElement.style.cssText = `
                background-color: var(--card-bg);
                color: var(--body-1);
                padding: 8px 14px;
                border-radius: 6px;
                cursor: pointer;
                user-select: none;
                border: 1px solid var(--card-stroke);
                transition: all 0.2s ease;
            `;

            // Add hover effects
            wordElement.addEventListener('mouseenter', function () {
                this.style.backgroundColor = 'var(--card-hover-secondary)';
                this.style.borderColor = 'var(--accent-color)';
            });

            wordElement.addEventListener('mouseleave', function () {
                this.style.backgroundColor = 'var(--card-bg)';
                this.style.borderColor = 'var(--card-stroke)';
            });

            // Add click event to move word to answer
            wordElement.addEventListener('click', function () {
                // Add word to selected words array
                state.selectedWords.push(word);

                // Create a new word element in the answer container
                const answerWord = document.createElement('div');
                answerWord.className = `answer-word-${index}-${state.selectedWords.length - 1}`;

                // Make first word capitalized if it's the first in the sentence
                let displayWord = word;
                if (state.selectedWords.length === 1) {
                    // Capitalize first letter
                    displayWord = word.charAt(0).toUpperCase() + word.slice(1);
                }

                answerWord.textContent = displayWord;
                answerWord.dataset.word = word; // Save original word for comparison
                answerWord.dataset.originalIndex = wordIndex;
                answerWord.style.cssText = `
                    background-color: var(--accent-color);
                    color: white;
                    padding: 8px 14px;
                    border-radius: 6px;
                    user-select: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    position: relative;
                `;

                // Remove this word from available words
                this.style.display = 'none';

                // Add click event to remove word from answer
                answerWord.addEventListener('click', function () {
                    // Re-display original word in words container
                    const originalWordIndex = this.dataset.originalIndex;
                    const originalWord = document.querySelector(`.word-element-${index}-${originalWordIndex}`);
                    if (originalWord) {
                        originalWord.style.display = 'block';
                    }

                    // Remove word from selected words array
                    const wordToRemove = this.dataset.word;
                    const wordIndex = state.selectedWords.indexOf(wordToRemove);
                    if (wordIndex !== -1) {
                        state.selectedWords.splice(wordIndex, 1);
                    }

                    // Remove this word from answer container
                    this.remove();

                    // Update check button state
                    updateCheckButtonState();
                });

                // Add word to answer container
                answerContainer.appendChild(answerWord);

                // Update check button state
                updateCheckButtonState();
            });

            wordsContainer.appendChild(wordElement);
        });
    } else {
        // If already completed, show the correct answer
        const correctAnswer = exercise.correctAnswer;
        const answerWords = correctAnswer.split(' ');

        // Display words with proper capitalization
        answerWords.forEach((word, i) => {
            const displayWord = i === 0 ?
                // Capitalize first word
                word.charAt(0).toUpperCase() + word.slice(1) :
                word;

            const wordElement = document.createElement('div');
            wordElement.textContent = displayWord;
            wordElement.style.cssText = `
                background-color: ${state.isCorrect ? 'var(--correct-bg)' : 'var(--danger-bg)'};
                color: ${state.isCorrect ? 'var(--correct-text)' : 'var(--danger-text)'};
                padding: 8px 14px;
                border-radius: 6px;
                user-select: none;
                border: 1px solid ${state.isCorrect ? 'var(--correct-border)' : 'var(--danger-border)'};
            `;
            answerContainer.appendChild(wordElement);
        });

        // If incorrect, show the correct answer below
        if (!state.isCorrect) {
            const correctAnswerContainer = document.createElement('div');
            correctAnswerContainer.style.cssText = `
                margin-top: 10px;
                padding: 10px;
                background-color: var(--correct-bg);
                border-radius: 6px;
                color: var(--correct-text);
                border: 1px solid var(--correct-border);
            `;
            correctAnswerContainer.innerHTML = `<strong>Correct answer:</strong> ${exercise.correctAnswer}`;
            exerciseBox.appendChild(correctAnswerContainer);
        }
    }

    exerciseBox.appendChild(wordsContainer);

    // Create check button
    const checkButton = document.createElement('button');
    checkButton.className = `check-answer-btn-${index}`;
    checkButton.textContent = 'Check';
    checkButton.disabled = true; // Initially disabled until user selects all words
    checkButton.style.cssText = `
        background-color: var(--accent-color);
        color: white;
        border: none;
        border-radius: 6px;
        padding: 10px 20px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        opacity: 0.6;
    `;

    // Hide button if already answered
    if (state.isComplete) {
        checkButton.style.display = 'none';
    } else {
        // Add hover effect for button
        checkButton.addEventListener('mouseenter', function () {
            if (!this.disabled) {
                this.style.backgroundColor = '#4F46E5'; // Darker shade
            }
        });

        checkButton.addEventListener('mouseleave', function () {
            if (!this.disabled) {
                this.style.backgroundColor = 'var(--accent-color)';
            }
        });

        // Add click handler for the check button
        checkButton.addEventListener('click', function () {
            // Disable button after clicking
            this.disabled = true;
            this.style.opacity = '0.6';

            // Compare user's answer with correct answer
            const userAnswer = state.selectedWords.join(' ');

            // Clean both answers for comparison (remove punctuation at the end, case insensitive)
            // For comparison purposes, we use the original words
            const cleanUserAnswer = userAnswer.toLowerCase().replace(/[.,!?;:]$/, '');
            const cleanCorrectAnswer = exercise.correctAnswer.toLowerCase().replace(/[.,!?;:]$/, '');

            const isCorrect = cleanUserAnswer === cleanCorrectAnswer;

            // Mark exercise as complete
            state.isComplete = true;
            state.isCorrect = isCorrect;

            // Update score
            exerciseScores[subtitle] = exerciseScores[subtitle] || [];
            exerciseScores[subtitle][index] = isCorrect;
            updatePageScore(subtitle);

            // Update status and styles
            const status = document.querySelector(`.exercise-status-${index}`);
            if (status) {
                if (isCorrect) {
                    status.textContent = '✓ Correct';
                    status.style.color = 'var(--correct-text)';

                    // Style answer words as correct
                    document.querySelectorAll(`[class^="answer-word-${index}-"]`).forEach(word => {
                        word.style.backgroundColor = 'var(--correct-bg)';
                        word.style.color = 'var(--correct-text)';
                        word.style.borderColor = 'var(--correct-border)';
                        word.style.cursor = 'default';
                    });

                    // Show feedback
                    showExerciseFeedback(exerciseBox, true, exercise.correctFeedback, exercise.correctFeedbackRu);
                } else {
                    status.textContent = '✗ Incorrect';
                    status.style.color = 'var(--danger-text)';

                    // Style answer words as incorrect
                    document.querySelectorAll(`[class^="answer-word-${index}-"]`).forEach(word => {
                        word.style.backgroundColor = 'var(--danger-bg)';
                        word.style.color = 'var(--danger-text)';
                        word.style.borderColor = 'var(--danger-border)';
                        word.style.cursor = 'default';
                    });

                    // Show the correct answer
                    const correctAnswerContainer = document.createElement('div');
                    correctAnswerContainer.style.cssText = `
                        margin-top: 10px;
                        padding: 10px;
                        background-color: var(--correct-bg);
                        border-radius: 6px;
                        color: var(--correct-text);
                        border: 1px solid var(--correct-border);
                    `;

                    // Show correct answer with capitalized first letter
                    let displayCorrectAnswer = exercise.correctAnswer;
                    if (displayCorrectAnswer.length > 0) {
                        displayCorrectAnswer = displayCorrectAnswer.charAt(0).toUpperCase() + displayCorrectAnswer.slice(1);
                    }

                    correctAnswerContainer.innerHTML = `<strong>Correct answer:</strong> ${displayCorrectAnswer}`;
                    exerciseBox.appendChild(correctAnswerContainer);

                    // Show feedback
                    showExerciseFeedback(exerciseBox, false, exercise.incorrectFeedback, exercise.incorrectFeedbackRu);
                }
            }

            // Hide check button
            this.style.display = 'none';

            // Disable word clicking
            document.querySelectorAll(`[class^="word-element-${index}-"]`).forEach(word => {
                word.style.cursor = 'default';
                word.style.pointerEvents = 'none';
            });

            document.querySelectorAll(`[class^="answer-word-${index}-"]`).forEach(word => {
                word.style.cursor = 'default';
                word.style.pointerEvents = 'none';
            });

            // Play success animation
            if (isCorrect) {
                exerciseBox.animate([
                    { boxShadow: '0 0 0 2px transparent' },
                    { boxShadow: '0 0 0 4px #34d399' },
                    { boxShadow: '0 0 0 2px transparent' }
                ], {
                    duration: 1000,
                    iterations: 2
                });
            }
        });
    }

    exerciseBox.appendChild(checkButton);

    // Function to update check button state
    function updateCheckButtonState() {
        if (state.selectedWords.length === exercise.words.length) {
            checkButton.disabled = false;
            checkButton.style.opacity = '1';
        } else {
            checkButton.disabled = true;
            checkButton.style.opacity = '0.6';
        }
    }

    // Add feedback if already answered
    if (state.isComplete) {
        const feedbackText = state.isCorrect ?
            exercise.correctFeedback :
            exercise.incorrectFeedback;

        const feedbackTextRu = state.isCorrect ?
            exercise.correctFeedbackRu :
            exercise.incorrectFeedbackRu;

        showExerciseFeedback(exerciseBox, state.isCorrect, feedbackText, feedbackTextRu);
    }

    return exerciseBox;
}