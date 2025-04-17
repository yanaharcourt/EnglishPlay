    //////////////////////////////////////////////////////////////////////////////////CURSOR
    /////////////////////////////////////////////////////////////////////////////////
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
   
    //////////////////////////////////////////////////////////////////////////////////Episods
    /////////////////////////////////////////////////////////////////////////////////
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

    
    //////////////////////////////////////////////////////////////////////////////////Carousel
    /////////////////////////////////////////////////////////////////////////////////
  
    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.movie-carousel');
        const cards = Array.from(document.querySelectorAll('.movie-card'));
        const prevBtn = document.querySelector('.carousel-button.prev');
        const nextBtn = document.querySelector('.carousel-button.next');
        const dots = document.querySelectorAll('.carousel-dot');
        const episodesSection = document.querySelector('.episodes-section');

        let activeIndex = 0;
        const cardsVisible = 3;

        function initializeEpisodes() {
            if (episodesSection) {
                const activeCard = document.querySelector('.movie-card.active');
                if (activeCard) {
                    updateEpisodes(activeCard.dataset.movieId);
                }
            }
        }

        function updateEpisodes(movieId) {
            if (episodesSection) {
                document.querySelectorAll('.episode-card').forEach(card => {
                    card.style.display = card.dataset.movieId === movieId ? 'block' : 'none';
                });
            }
        }

        function activateCard(index) {
            const allCards = document.querySelectorAll('.movie-card');
            if (index < 0 || index >= allCards.length) return;

            allCards.forEach(card => card.classList.remove('active'));
            allCards[index].classList.add('active');
            updateEpisodes(allCards[index].dataset.movieId);
            centerCarousel(index);
            updateDots(index);
            activeIndex = index;
        }

        function centerCarousel(index) {
            const allCards = document.querySelectorAll('.movie-card');
            const card = allCards[index];
            const carouselWidth = carousel.parentElement.offsetWidth;
            const cardRect = card.getBoundingClientRect();
            const cardCenter = card.offsetLeft + (cardRect.width / 2);
            const offset = cardCenter - (carouselWidth / 2);
            carousel.style.transform = `translateX(-${offset}px)`;
        }

        function updateDots(index) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        function goToSlide(index) {
            activateCard(index);
        }

        prevBtn.addEventListener('click', () => {
            if (activeIndex > 0) {
                activateCard(activeIndex - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (activeIndex < cards.length - 1) {
                activateCard(activeIndex + 1);
            }
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
        });

        // Добавим обработчики кликов по карточкам
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                activateCard(index);
            });
        });

        // Инициализация
        activateCard(0);
        initializeEpisodes();

        window.addEventListener('resize', () => {
            centerCarousel(activeIndex);
        });
    });


    //////////////////////////////////////////////////////////////////////////////////FILTERS
    /////////////////////////////////////////////////////////////////////////////////
    document.addEventListener('DOMContentLoaded', function () {
        // Get all selector buttons
        const accentButtons = document.querySelectorAll('.accent-btn');
        const levelButtons = document.querySelectorAll('.level-btn');

        // Get all episode cards
        const episodeCards = document.querySelectorAll('.episode-card');

        // Set default values
        let selectedAccent = "British"; // Default set to British
        let selectedLevel = "A2"; // Default set to A2

        // Function to initialize default selections
        function initializeDefaults() {
            // Clear any active classes first
            accentButtons.forEach(btn => btn.classList.remove('active'));
            levelButtons.forEach(btn => btn.classList.remove('active'));

            // Set active class on the British accent button
            accentButtons.forEach(btn => {
                if (btn.textContent === "British") {
                    btn.classList.add('active');
                }
            });

            // Set active class on the A2 level button
            levelButtons.forEach(btn => {
                if (btn.textContent === "A2") {
                    btn.classList.add('active');
                }
            });

            // Apply the default filters
            filterEpisodes();
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
            filterEpisodes();
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
            filterEpisodes();
        }

        // Function to filter episodes based on selected accent and level
        function filterEpisodes() {
            episodeCards.forEach(card => {
                // Get episode metadata
                const episodeTags = card.querySelectorAll('.episode-meta span');

                // Find level tags (could be multiple like "A2,B1")
                const levelTag = Array.from(episodeTags).find(tag =>
                    /^[A-C][1-2](,[A-C][1-2])*$/.test(tag.textContent.trim())
                );

                // Find accent tag (with the class 'language-tag')
                const accentTag = Array.from(episodeTags).find(tag =>
                    tag.classList.contains('language-tag')
                );

                // Check if this episode matches the selected filters
                let levelMatch = false;
                if (levelTag) {
                    const levels = levelTag.textContent.split(',');
                    levelMatch = levels.includes(selectedLevel);
                }

                let accentMatch = false;
                if (accentTag) {
                    // Extract accent name from class (language-tag british -> British)
                    const accentClass = Array.from(accentTag.classList)
                        .find(cls => cls !== 'language-tag');

                    if (accentClass) {
                        const accentName = accentClass.charAt(0).toUpperCase() + accentClass.slice(1);
                        accentMatch = (accentName === selectedAccent);
                    }
                }

                // Show or hide based on filter matches
                if (levelMatch && accentMatch) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Add event listeners to all accent buttons
        accentButtons.forEach(button => {
            button.addEventListener('click', handleAccentClick);
        });

        // Add event listeners to all level buttons
        levelButtons.forEach(button => {
            button.addEventListener('click', handleLevelClick);
        });

        // Initialize the default filters
        initializeDefaults();
    });