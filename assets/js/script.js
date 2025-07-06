/* ============================================
CURSOR
============================================ */
document.addEventListener('DOMContentLoaded', () => {
            const cursor = document.querySelector('.js-cursor-init');
            const cursorCircle = cursor.querySelector('.cursor-circle');
            const scrollText = cursor.querySelector('.scroll_cursor_txt .text');
            const viewText = cursor.querySelector('.view_more_cursor .text');

            // Function to determine if background is dark or light
            const isDarkBackground = (element) => {
                // Get the background color of the element
                const bgColor = window.getComputedStyle(element).backgroundColor;

                // If no background color or transparent, check parent
                if (!bgColor || bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)') {
                    if (element.parentElement) {
                        return isDarkBackground(element.parentElement);
                    }
                    return false; // Default to light if we can't determine
                }

                // Parse the RGB values
                const rgb = bgColor.match(/\d+/g);
                if (!rgb || rgb.length < 3) return false;

                // Calculate brightness - higher value means lighter background
                // Formula: (R * 299 + G * 587 + B * 114) / 1000
                const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;

                // Consider dark if brightness is less than 128
                return brightness < 128;
            };

            // Update cursor position and style
            document.addEventListener('mousemove', (e) => {
                requestAnimationFrame(() => {
                    cursor.style.left = `${e.clientX}px`;
                    cursor.style.top = `${e.clientY}px`;
                });

                // Get element under cursor
                const element = document.elementFromPoint(e.clientX, e.clientY);
                if (!element) return;

                // Reset cursor styles
                cursor.classList.remove('white_cursor', 'dark_cursor', 'active');
                scrollText.style.display = 'none';
                viewText.style.display = 'none';

                // Handle different sections
                const heroSection = element.closest('.hero-section');
                const whyChooseSection = element.closest('.why-choose-section');
                const navElements = element.closest('.left-nav') || element.closest('.right-nav');

                // If cursor is over hero section
                if (heroSection) {
                    cursor.classList.add('active', 'white_cursor');
                    scrollText.style.display = 'block';
                }
                // If cursor is over why choose section
                else if (whyChooseSection) {
                    cursor.classList.add('active', 'dark_cursor');
                    scrollText.style.display = 'block';
                }
                // If cursor is over navigation
                else if (navElements) {
                    // Navigation elements use white cursor by default
                    cursor.classList.add('white_cursor');
                }
                // For other elements, determine by background
                else {
                    if (isDarkBackground(element)) {
                        cursor.classList.add('white_cursor');
                    } else {
                        cursor.classList.add('dark_cursor');
                    }
                }

                // Special case for accent-word
                if (element.classList.contains('accent-word') || element.closest('.accent-word')) {
                    cursor.classList.add('active');
                    scrollText.style.display = 'none';
                    viewText.style.display = 'block';
                }
            });

            // Cursor click animation
            document.addEventListener('mousedown', () => {
                cursorCircle.style.transform = 'scale(0.9)';
            });

            document.addEventListener('mouseup', () => {
                cursorCircle.style.transform = 'scale(1)';
            });
});

/* ============================================
EPISODES
============================================ */
document.addEventListener('DOMContentLoaded', function () {
            const track = document.querySelector('.carousel-track');
            const episodesSection = document.querySelector('.episodes-section');
            const episodeCards = document.querySelectorAll('.episode-card');

            function updateEpisodeVisibility(movieId) {
                episodesSection.style.display = 'block';

                episodeCards.forEach(card => {
                    if (card.dataset.movieId === movieId) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }

            function updateActiveSlideAndEpisodes() {
                const activeSlide = document.querySelector('.carousel-slide.active');
                if (activeSlide) {
                    updateEpisodeVisibility(activeSlide.dataset.movieId);
                }
            }

            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        if (mutation.target.classList.contains('active')) {
                            updateEpisodeVisibility(mutation.target.dataset.movieId);
                        }
                    }
                });
            });

            document.querySelectorAll('.carousel-slide').forEach(slide => {
                observer.observe(slide, { attributes: true });
            });

            updateActiveSlideAndEpisodes();
});

/* ============================================
CAROUSEL
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.movie-carousel');
    const cardsNodeList = document.querySelectorAll('.movie-card');
    const cards = Array.from(cardsNodeList);
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    const dots = document.querySelectorAll('.carousel-dot');
    const episodesSection = document.querySelector('.episodes-section');
    let activeIndex = 0;

    // Устанавливаем первую карточку как активную при загрузке
    if (cards.length > 0) {
        cards[0].classList.add('active');
    }

    // Функция обновления эпизодов
    function updateEpisodes(movieId) {
        console.log('Обновление эпизодов для фильма:', movieId);

        if (!episodesSection) {
            console.log('Секция эпизодов не найдена');
            return;
        }

        if (!movieId) {
            console.log('ID фильма не определен');
            return;
        }

        const episodeCards = document.querySelectorAll('.episode-card');
        let foundMatchingEpisodes = false;

        episodeCards.forEach(card => {
            const cardMovieId = card.dataset.movieId;
            const isMatching = cardMovieId === movieId;

            if (isMatching) {
                foundMatchingEpisodes = true;
            }

            card.style.display = isMatching ? 'block' : 'none';
        });

        console.log('Найдены соответствующие эпизоды:', foundMatchingEpisodes);
    }

    // Функция активации карточки
    function activateCard(index) {
        if (!cards || cards.length === 0) {
            console.log('Карточки фильмов не найдены');
            return;
        }

        if (index < 0 || index >= cards.length) {
            console.log('Индекс за пределами допустимого диапазона:', index);
            return;
        }

        // Убираем активный класс со всех карточек
        cards.forEach(card => card.classList.remove('active'));

        // Добавляем активный класс выбранной карточке
        cards[index].classList.add('active');

        // Получаем ID фильма из активной карточки
        const selectedMovieId = cards[index].dataset.movieId;
        console.log('Активирована карточка с ID:', selectedMovieId);

        // Обновляем список эпизодов для выбранного фильма
        updateEpisodes(selectedMovieId);

        // Центрируем карусель и обновляем индикаторы
        centerCarousel(index);
        updateDots(index);

        // Сохраняем текущий индекс
        activeIndex = index;
    }

    function centerCarousel(index) {
        if (!carousel || !cards || cards.length === 0) return;

        const card = cards[index];
        const carouselWidth = carousel.parentElement.offsetWidth;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = card.offsetLeft + (cardRect.width / 2);

        const containerCenter = carouselWidth / 2;
        const offset = cardCenter - containerCenter;

        const maxOffset = carousel.scrollWidth - carouselWidth;
        const clampedOffset = Math.max(0, Math.min(offset, maxOffset));

        carousel.style.transform = `translateX(-${clampedOffset}px)`;
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Устанавливаем обработчики событий
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (activeIndex > 0) {
                activateCard(activeIndex - 1);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (activeIndex < cards.length - 1) {
                activateCard(activeIndex + 1);
            }
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            activateCard(index);
        });
    });

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            activateCard(index);
        });
    });

    // Инициализация с небольшой задержкой, чтобы все элементы DOM были гарантированно загружены
    setTimeout(() => {
        // Устанавливаем первую карточку как активную и обновляем эпизоды
        if (cards.length > 0) {
            // Принудительно получаем movieId из первой карточки
            const firstMovieId = cards[0].dataset.movieId;
            console.log('Начальная инициализация с ID фильма:', firstMovieId);

            // Активируем первую карточку
            activateCard(0);

            // Дополнительно принудительно обновляем эпизоды для первой карточки
            updateEpisodes(firstMovieId);
        }
    }, 100);

    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        centerCarousel(activeIndex);
    });
});

/* ============================================
FILTERS
============================================ */

/* document.addEventListener('DOMContentLoaded', function () {
    // Get all selector buttons
    const accentButtons = document.querySelectorAll('.accent-btn');
    const levelButtons = document.querySelectorAll('.level-btn');

    // Get all episode cards and movie cards
    const episodeCards = document.querySelectorAll('.episode-card');
    const movieCards = document.querySelectorAll('.movie-card');

    // Reference to the carousel component
    const carousel = document.querySelector('.movie-carousel');

    // Set default values
    let selectedAccent = "All accents";
    let selectedLevel = "All levels";

    // Function to initialize movie data attributes from HTML content
    function initializeMovieData() {
        movieCards.forEach(movieCard => {
            // Initialize accent data if not present in data attribute
            if (!movieCard.dataset.accents || movieCard.dataset.accents === '') {
                const accentSpan = movieCard.querySelector('.movie-accent');
                if (accentSpan && accentSpan.textContent) {
                    // Store the accent in the data attribute
                    movieCard.dataset.accents = accentSpan.textContent.trim();
                }
            }

            // Initialize levels data if not present in data attribute
            if (!movieCard.dataset.levels || movieCard.dataset.levels === '') {
                const levelSpans = movieCard.querySelectorAll('.movie-levels');
                if (levelSpans.length > 0) {
                    const levels = Array.from(levelSpans).map(span => span.textContent.trim());
                    // Store the levels in the data attribute
                    movieCard.dataset.levels = levels.join(',');
                }
            }

            // Log the initialized data for debugging
            console.log(`Movie ${movieCard.dataset.movieId} initialized with:`, {
                accents: movieCard.dataset.accents,
                levels: movieCard.dataset.levels
            });
        });
    }

    // Function to initialize default selections
    function initializeDefaults() {
        // Clear any active classes first
        accentButtons.forEach(btn => btn.classList.remove('active'));
        levelButtons.forEach(btn => btn.classList.remove('active'));

        // Set active class on the "All accents" button
        accentButtons.forEach(btn => {
            if (btn.textContent === "All accents") {
                btn.classList.add('active');
            }
        });

        // Set active class on the "All levels" button
        levelButtons.forEach(btn => {
            if (btn.textContent === "All levels") {
                btn.classList.add('active');
            }
        });

        // Apply the default filters
        filterMovies();
    }

    // Function to handle accent button clicks
    function handleAccentClick(e) {
        // Remove active class from all accent buttons
        accentButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        e.target.classList.add('active');

        // Update selected accent
        selectedAccent = e.target.textContent;

        // Apply filters
        filterMovies();
    }

    // Function to handle level button clicks
    function handleLevelClick(e) {
        // Remove active class from all level buttons
        levelButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        e.target.classList.add('active');

        // Update selected level
        selectedLevel = e.target.textContent;

        // Apply filters
        filterMovies();
    }

    // Function to filter movies in the carousel based on selected filters
    function filterMovies() {
        let hasVisibleMovie = false;
        let firstVisibleMovieIndex = -1;
        let wasActiveMovieHidden = true;
        let activeMovieIndex = -1;

        console.log(`Filtering movies with: accent=${selectedAccent}, level=${selectedLevel}`);

        // Find the currently active movie
        movieCards.forEach((card, index) => {
            if (card.classList.contains('active')) {
                activeMovieIndex = index;
            }
        });

        // Filter movies
        movieCards.forEach((movieCard, index) => {
            // Get accents for this movie - properly split and trimmed
            let movieAccents = movieCard.dataset.accents ?
                movieCard.dataset.accents.split(',').map(a => a.trim()) : [];

            // If we couldn't get from data attribute, try from HTML
            if (movieAccents.length === 0) {
                const accentSpan = movieCard.querySelector('.movie-accent');
                if (accentSpan) {
                    movieAccents = [accentSpan.textContent.trim()];
                }
            }

            // Get levels for this movie - properly split and trimmed
            let movieLevels = movieCard.dataset.levels ?
                movieCard.dataset.levels.split(',').map(l => l.trim()) : [];

            // If we couldn't get from data attribute, try from HTML
            if (movieLevels.length === 0) {
                const levelSpans = movieCard.querySelectorAll('.movie-levels');
                if (levelSpans.length > 0) {
                    const levelText = levelSpans[0].textContent.trim();
                    movieLevels = levelText.split(',').map(l => l.trim());
                }
            }

            console.log(`Movie ${movieCard.dataset.movieId} has:`, {
                accents: movieAccents,
                levels: movieLevels
            });

            // Check if this movie matches the filters
            const accentMatch = selectedAccent === "All accents" || movieAccents.includes(selectedAccent);
            const levelMatch = selectedLevel === "All levels" || movieLevels.includes(selectedLevel);

            console.log(`Movie ${movieCard.dataset.movieId} matches:`, {
                accent: accentMatch,
                level: levelMatch
            });

            // Determine visibility based on filter matches
            const isVisible = accentMatch && levelMatch;

            // Apply visibility style
            if (isVisible) {
                movieCard.style.display = '';  // Use default display value

                if (!hasVisibleMovie) {
                    firstVisibleMovieIndex = index;
                    hasVisibleMovie = true;
                }

                // Check if this is the active movie
                if (index === activeMovieIndex) {
                    wasActiveMovieHidden = false;
                }
            } else {
                movieCard.style.display = 'none';
            }
        });

        // If no visible movies, show all and reset filters
        if (!hasVisibleMovie) {
            console.log("No movies match the current filters. Showing all movies.");
            movieCards.forEach(card => card.style.display = '');
            firstVisibleMovieIndex = 0;
        }

        // If active movie was hidden or there was no active movie before
        if (wasActiveMovieHidden && firstVisibleMovieIndex >= 0) {
            // Get existing active card and remove active class
            const existingActive = document.querySelector('.movie-card.active');
            if (existingActive) {
                existingActive.classList.remove('active');
            }

            // Activate the first visible movie
            const firstVisibleMovie = movieCards[firstVisibleMovieIndex];
            firstVisibleMovie.classList.add('active');

            // Update dots if they exist
            const dots = document.querySelectorAll('.carousel-dot');
            if (dots.length > 0) {
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === firstVisibleMovieIndex);
                });
            }

            // Update episodes section for the first visible movie
            const selectedMovieId = firstVisibleMovie.dataset.movieId;
            updateEpisodesForMovie(selectedMovieId);

            // Center carousel on the first visible movie
            if (carousel) {
                centerCarousel(firstVisibleMovieIndex);
            }
        }

        // After filtering movies, also update episodes for the active movie
        const activeMovie = document.querySelector('.movie-card.active');
        if (activeMovie) {
            updateEpisodesForMovie(activeMovie.dataset.movieId);
        }
    }

    // Function to update episodes display for a specific movie
    function updateEpisodesForMovie(movieId) {
        const episodesSection = document.querySelector('.episodes-section');

        if (!episodesSection) {
            console.log('Секция эпизодов не найдена');
            return;
        }

        // Make episodes section visible
        episodesSection.style.display = 'block';

        // Show only episodes for the selected movie WITHOUT additional filtering
        episodeCards.forEach(card => {
            // Check if this episode belongs to the currently active movie
            if (card.dataset.movieId === movieId) {
                // Show all episodes for the selected movie without filtering
                card.style.display = 'block';
            } else {
                // Hide episodes for other movies
                card.style.display = 'none';
            }
        });
    }

    // Function to center carousel on a specific index
    function centerCarousel(index) {
        if (!carousel || !movieCards || movieCards.length === 0) return;

        const card = movieCards[index];
        if (!card) return;

        const carouselWidth = carousel.parentElement.offsetWidth;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = card.offsetLeft + (cardRect.width / 2);

        const containerCenter = carouselWidth / 2;
        const offset = cardCenter - containerCenter;

        const maxOffset = carousel.scrollWidth - carouselWidth;
        const clampedOffset = Math.max(0, Math.min(offset, maxOffset));

        carousel.style.transform = `translateX(-${clampedOffset}px)`;
    }

    // Add event listeners to all accent buttons
    accentButtons.forEach(button => {
        button.addEventListener('click', handleAccentClick);
    });

    // Add event listeners to all level buttons
    levelButtons.forEach(button => {
        button.addEventListener('click', handleLevelClick);
    });

    // Initialize the movie data first
    initializeMovieData();

    // Then initialize the default filters
    initializeDefaults();

    // Hook into the existing carousel click event to ensure proper syncing
    movieCards.forEach(card => {
        // Store the original click handler
        const originalClickHandler = card.onclick;

        // Replace with our enhanced handler
        card.onclick = function (e) {
            // Only process visible cards
            if (this.style.display !== 'none') {
                // Call original handler if it exists
                if (originalClickHandler) {
                    originalClickHandler.call(this, e);
                }

                // Make sure our episode filter is applied
                const movieId = this.dataset.movieId;
                updateEpisodesForMovie(movieId);
            }
        };
    });
}); */
document.addEventListener('DOMContentLoaded', function () {
    // Get all selector buttons
    const accentButtons = document.querySelectorAll('.accent-btn');
    const levelButtons = document.querySelectorAll('.level-btn');

    // Get all episode cards and movie cards
    const episodeCards = document.querySelectorAll('.episode-card');
    const movieCards = document.querySelectorAll('.movie-card');

    // Reference to the carousel component
    const carousel = document.querySelector('.movie-carousel');

    // Create notification element for no results
    let noResultsNotification;
    function createNoResultsNotification() {
        noResultsNotification = document.createElement('div');
        noResultsNotification.className = 'no-results-notification';
        noResultsNotification.style.cssText = `
            display: none;
            background-color: var(--accent-gold);
            color: #333;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            text-align: center;
            font-size: 16px;
            /* border: 1px solid #f5c6cb; */
        `;

        // Insert the notification after the carousel
        if (carousel && carousel.parentNode) {
            carousel.parentNode.insertBefore(noResultsNotification, carousel.nextSibling);
        }
    }

    // Create notification element
    createNoResultsNotification();

    // Set default values
    let selectedAccent = "All accents";
    let selectedLevel = "All levels";

    // Function to initialize movie data attributes from HTML content
    function initializeMovieData() {
        movieCards.forEach(movieCard => {
            // Initialize accent data if not present in data attribute
            if (!movieCard.dataset.accents || movieCard.dataset.accents === '') {
                const accentSpan = movieCard.querySelector('.movie-accent');
                if (accentSpan && accentSpan.textContent) {
                    // Store the accent in the data attribute
                    movieCard.dataset.accents = accentSpan.textContent.trim();
                }
            }

            // Initialize levels data if not present in data attribute
            if (!movieCard.dataset.levels || movieCard.dataset.levels === '') {
                const levelSpans = movieCard.querySelectorAll('.movie-levels');
                if (levelSpans.length > 0) {
                    const levels = Array.from(levelSpans).map(span => span.textContent.trim());
                    // Store the levels in the data attribute
                    movieCard.dataset.levels = levels.join(',');
                }
            }

            // Log the initialized data for debugging
            console.log(`Movie ${movieCard.dataset.movieId} initialized with:`, {
                accents: movieCard.dataset.accents,
                levels: movieCard.dataset.levels
            });
        });
    }

    // Function to initialize default selections
    function initializeDefaults() {
        // Clear any active classes first
        accentButtons.forEach(btn => btn.classList.remove('active'));
        levelButtons.forEach(btn => btn.classList.remove('active'));

        // Set active class on the "All accents" button
        accentButtons.forEach(btn => {
            if (btn.textContent === "All accents") {
                btn.classList.add('active');
            }
        });

        // Set active class on the "All levels" button
        levelButtons.forEach(btn => {
            if (btn.textContent === "All levels") {
                btn.classList.add('active');
            }
        });

        // Apply the default filters
        filterMovies();
    }

    // Function to handle accent button clicks
    function handleAccentClick(e) {
        // Remove active class from all accent buttons
        accentButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        e.target.classList.add('active');

        // Update selected accent
        selectedAccent = e.target.textContent;

        // Apply filters
        filterMovies();
    }

    // Function to handle level button clicks
    function handleLevelClick(e) {
        // Remove active class from all level buttons
        levelButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        e.target.classList.add('active');

        // Update selected level
        selectedLevel = e.target.textContent;

        // Apply filters
        filterMovies();
    }

    // Function to show no results notification
    function showNoResultsNotification() {
        if (noResultsNotification) {
            noResultsNotification.innerHTML = `
                <p><strong>По выбранным фильтрам фильмы не найдены. Пожалуйста, измените критерии поиска.</strong></p>
                <p><strong>No movies found for the selected filters. Please change your search criteria.</strong></p>
            `;
            noResultsNotification.style.display = 'block';
        }
    }

    // Function to hide no results notification
    function hideNoResultsNotification() {
        if (noResultsNotification) {
            noResultsNotification.style.display = 'none';
        }
    }

    // Function to filter movies in the carousel based on selected filters
    function filterMovies() {
        let hasVisibleMovie = false;
        let firstVisibleMovieIndex = -1;
        let wasActiveMovieHidden = true;
        let activeMovieIndex = -1;

        console.log(`Filtering movies with: accent=${selectedAccent}, level=${selectedLevel}`);

        // Hide notification at the beginning of filtering
        hideNoResultsNotification();

        // Find the currently active movie
        movieCards.forEach((card, index) => {
            if (card.classList.contains('active')) {
                activeMovieIndex = index;
            }
        });

        // Filter movies
        movieCards.forEach((movieCard, index) => {
            // Get accents for this movie - properly split and trimmed
            let movieAccents = movieCard.dataset.accents ?
                movieCard.dataset.accents.split(',').map(a => a.trim()) : [];

            // If we couldn't get from data attribute, try from HTML
            if (movieAccents.length === 0) {
                const accentSpan = movieCard.querySelector('.movie-accent');
                if (accentSpan) {
                    movieAccents = [accentSpan.textContent.trim()];
                }
            }

            // Get levels for this movie - properly split and trimmed
            let movieLevels = movieCard.dataset.levels ?
                movieCard.dataset.levels.split(',').map(l => l.trim()) : [];

            // If we couldn't get from data attribute, try from HTML
            if (movieLevels.length === 0) {
                const levelSpans = movieCard.querySelectorAll('.movie-levels');
                if (levelSpans.length > 0) {
                    const levelText = levelSpans[0].textContent.trim();
                    movieLevels = levelText.split(',').map(l => l.trim());
                }
            }

            console.log(`Movie ${movieCard.dataset.movieId} has:`, {
                accents: movieAccents,
                levels: movieLevels
            });

            // Check if this movie matches the filters
            const accentMatch = selectedAccent === "All accents" || movieAccents.includes(selectedAccent);
            const levelMatch = selectedLevel === "All levels" || movieLevels.includes(selectedLevel);

            console.log(`Movie ${movieCard.dataset.movieId} matches:`, {
                accent: accentMatch,
                level: levelMatch
            });

            // Determine visibility based on filter matches
            const isVisible = accentMatch && levelMatch;

            // Apply visibility style
            if (isVisible) {
                movieCard.style.display = '';  // Use default display value

                if (!hasVisibleMovie) {
                    firstVisibleMovieIndex = index;
                    hasVisibleMovie = true;
                }

                // Check if this is the active movie
                if (index === activeMovieIndex) {
                    wasActiveMovieHidden = false;
                }
            } else {
                movieCard.style.display = 'none';
            }
        });

        // If no visible movies, show notification and reset to defaults
        if (!hasVisibleMovie) {
            console.log("No movies match the current filters. Showing notification.");
            showNoResultsNotification();

            // If we're not already showing all movies, reset to show all
            if (selectedAccent !== "All accents" || selectedLevel !== "All levels") {
                // Reset films to visible but keep the filters as they are
                // so user can see what they selected that caused no results
                movieCards.forEach(card => card.style.display = '');
                firstVisibleMovieIndex = 0;
            }
        }

        // If active movie was hidden or there was no active movie before
        if (wasActiveMovieHidden && firstVisibleMovieIndex >= 0) {
            // Get existing active card and remove active class
            const existingActive = document.querySelector('.movie-card.active');
            if (existingActive) {
                existingActive.classList.remove('active');
            }

            // Activate the first visible movie
            const firstVisibleMovie = movieCards[firstVisibleMovieIndex];
            firstVisibleMovie.classList.add('active');

            // Update dots if they exist
            const dots = document.querySelectorAll('.carousel-dot');
            if (dots.length > 0) {
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === firstVisibleMovieIndex);
                });
            }

            // Update episodes section for the first visible movie
            const selectedMovieId = firstVisibleMovie.dataset.movieId;
            updateEpisodesForMovie(selectedMovieId);

            // Center carousel on the first visible movie
            if (carousel) {
                centerCarousel(firstVisibleMovieIndex);
            }
        }

        // After filtering movies, also update episodes for the active movie
        const activeMovie = document.querySelector('.movie-card.active');
        if (activeMovie) {
            updateEpisodesForMovie(activeMovie.dataset.movieId);
        }
    }

    // Function to update episodes display for a specific movie
    function updateEpisodesForMovie(movieId) {
        const episodesSection = document.querySelector('.episodes-section');

        if (!episodesSection) {
            console.log('Секция эпизодов не найдена');
            return;
        }

        // Make episodes section visible
        episodesSection.style.display = 'block';

        // Show only episodes for the selected movie WITHOUT additional filtering
        episodeCards.forEach(card => {
            // Check if this episode belongs to the currently active movie
            if (card.dataset.movieId === movieId) {
                // Show all episodes for the selected movie without filtering
                card.style.display = 'block';
            } else {
                // Hide episodes for other movies
                card.style.display = 'none';
            }
        });
    }

    // Function to center carousel on a specific index
    function centerCarousel(index) {
        if (!carousel || !movieCards || movieCards.length === 0) return;

        const card = movieCards[index];
        if (!card) return;

        const carouselWidth = carousel.parentElement.offsetWidth;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = card.offsetLeft + (cardRect.width / 2);

        const containerCenter = carouselWidth / 2;
        const offset = cardCenter - containerCenter;

        const maxOffset = carousel.scrollWidth - carouselWidth;
        const clampedOffset = Math.max(0, Math.min(offset, maxOffset));

        carousel.style.transform = `translateX(-${clampedOffset}px)`;
    }

    // Add event listeners to all accent buttons
    accentButtons.forEach(button => {
        button.addEventListener('click', handleAccentClick);
    });

    // Add event listeners to all level buttons
    levelButtons.forEach(button => {
        button.addEventListener('click', handleLevelClick);
    });

    // Initialize the movie data first
    initializeMovieData();

    // Then initialize the default filters
    initializeDefaults();

    // Hook into the existing carousel click event to ensure proper syncing
    movieCards.forEach(card => {
        // Store the original click handler
        const originalClickHandler = card.onclick;

        // Replace with our enhanced handler
        card.onclick = function (e) {
            // Only process visible cards
            if (this.style.display !== 'none') {
                // Call original handler if it exists
                if (originalClickHandler) {
                    originalClickHandler.call(this, e);
                }

                // Make sure our episode filter is applied
                const movieId = this.dataset.movieId;
                updateEpisodesForMovie(movieId);
            }
        };
    });
});

