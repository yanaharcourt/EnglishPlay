console.log("===== LOADING AGES AND NATIONALITIES EXERCISES =====");
/* =============================================================================== */
/* =========================Multiple Choice Exercises============================= */

// Initialize grammar exercises object if it doesn't exist
window.grammarExercises = window.grammarExercises || {};

// Initialize topic hierarchy
window.grammarExercises['to-be'] = window.grammarExercises['to-be'] || {};

/* ============================================
Page 1: Introducing yourself with age
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page1'] = {
    title: "'To Be' with ages and nationalities - Introducing yourself with age",
    multipleChoice: [
        {
            question: "Choose the correct form to introduce your age:",
            questionRu: "Выберите правильную форму для представления своего возраста:",
            sentence: "Hi, I ___ 22 years old.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! When introducing your own age, always use 'I am'.",
            correctFeedbackRu: "Правильно! При представлении своего возраста всегда используйте 'I am'.",
            incorrectFeedback: "Incorrect. For your own age, use 'I am' followed by the number.",
            incorrectFeedbackRu: "Неправильно. Для своего возраста используйте 'I am' с числом."
        },
        {
            question: "Select the best way to ask someone's age politely:",
            questionRu: "Выберите лучший способ вежливо спросить чей-то возраст:",
            options: [
                "How old are you?",
                "How old is you?",
                "How old am you?",
                "How old be you?"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'How old are you?' is the standard polite way to ask about age.",
            correctFeedbackRu: "Отлично! 'How old are you?' - стандартный вежливый способ спросить о возрасте.",
            incorrectFeedback: "Incorrect. The correct question is 'How old are you?'",
            incorrectFeedbackRu: "Неправильно. Правильный вопрос: 'How old are you?'"
        },
        {
            question: "Choose the correct response about someone else's age:",
            questionRu: "Выберите правильный ответ о чьем-то возрасте:",
            sentence: "My brother ___ 15 years old.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' when talking about another person's age.",
            correctFeedbackRu: "Правильно! Используйте 'is' когда говорите о возрасте другого человека.",
            incorrectFeedback: "Incorrect. With 'my brother' (he), we use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my brother' (он) мы используем 'is'."
        },
        {
            question: "Select the correct sentence about twins:",
            questionRu: "Выберите правильное предложение о близнецах:",
            options: [
                "The twins are both 16 years old.",
                "The twins is both 16 years old.",
                "The twins am both 16 years old.",
                "The twins be both 16 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Twins' is plural, so we use 'are'.",
            correctFeedbackRu: "Отлично! 'Twins' - множественное число, поэтому используем 'are'.",
            incorrectFeedback: "Incorrect. 'Twins' is plural, so we need 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Twins' - множественное число, нужно 'are'."
        },
        {
            question: "Choose the right form to talk about your friend's age:",
            questionRu: "Выберите правильную форму для рассказа о возрасте друга:",
            sentence: "My best friend ___ almost 20 years old.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'My best friend' is third person singular, so use 'is'.",
            correctFeedbackRu: "Отлично! 'My best friend' - третье лицо единственного числа, используйте 'is'.",
            incorrectFeedback: "Incorrect. 'My best friend' requires 'is'.",
            incorrectFeedbackRu: "Неправильно. 'My best friend' требует 'is'."
        },
        {
            question: "Select the correct way to talk about your age range:",
            questionRu: "Выберите правильный способ рассказать о своей возрастной группе:",
            options: [
                "I am in my twenties.",
                "I is in my twenties.",
                "I are in my twenties.",
                "I be in my twenties."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'I am in my twenties' is perfect for age ranges.",
            correctFeedbackRu: "Правильно! 'I am in my twenties' идеально для возрастных диапазонов.",
            incorrectFeedback: "Incorrect. Always use 'I am' when talking about yourself.",
            incorrectFeedbackRu: "Неправильно. Всегда используйте 'I am' когда говорите о себе."
        },
        {
            question: "Choose the correct form for talking about elderly people:",
            questionRu: "Выберите правильную форму для разговора о пожилых людях:",
            sentence: "My grandparents ___ in their eighties.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Grandparents' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Grandparents' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Grandparents' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Grandparents' - множественное число и требует 'are'."
        },
        {
            question: "Select the best way to describe a baby's age:",
            questionRu: "Выберите лучший способ описать возраст малыша:",
            options: [
                "The baby is 6 months old.",
                "The baby are 6 months old.",
                "The baby am 6 months old.",
                "The baby be 6 months old."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! For babies, we still use 'is' even with months.",
            correctFeedbackRu: "Отлично! Для малышей мы все еще используем 'is' даже с месяцами.",
            incorrectFeedback: "Incorrect. 'The baby' is singular, so use 'is'.",
            incorrectFeedbackRu: "Неправильно. 'The baby' - единственное число, используйте 'is'."
        },
        {
            question: "Choose the correct way to express uncertainty about age:",
            questionRu: "Выберите правильный способ выразить неуверенность в возрасте:",
            sentence: "I think she ___ about 25 years old.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Even with 'about' or 'around', use 'is' with 'she'.",
            correctFeedbackRu: "Правильно! Даже с 'about' или 'around' используйте 'is' с 'she'.",
            incorrectFeedback: "Incorrect. 'She' always takes 'is', even with approximations.",
            incorrectFeedbackRu: "Неправильно. 'She' всегда требует 'is', даже с приблизительными значениями."
        },
        {
            question: "Select the right form for a group of people:",
            questionRu: "Выберите правильную форму для группы людей:",
            options: [
                "All my classmates are 18 years old.",
                "All my classmates is 18 years old.",
                "All my classmates am 18 years old.",
                "All my classmates be 18 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Classmates' is plural, so we use 'are'.",
            correctFeedbackRu: "Отлично! 'Classmates' - множественное число, поэтому используем 'are'.",
            incorrectFeedback: "Incorrect. 'Classmates' is plural and requires 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Classmates' - множественное число и требует 'are'."
        }
    ]
};

/* ============================================
Page 2: Talking about nationalities and origins  
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page2'] = {
    title: "'To Be' with ages and nationalities - Talking about nationalities and origins",
    multipleChoice: [
        {
            question: "Choose the correct way to state your nationality:",
            questionRu: "Выберите правильный способ указать свою национальность:",
            sentence: "I ___ Russian.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Use 'I am' when stating your own nationality.",
            correctFeedbackRu: "Отлично! Используйте 'I am' при указании своей национальности.",
            incorrectFeedback: "Incorrect. For your own nationality, always use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для своей национальности всегда используйте 'I am'."
        },
        {
            question: "Select the correct sentence about origin:",
            questionRu: "Выберите правильное предложение о происхождении:",
            options: [
                "My teacher is from Brazil.",
                "My teacher are from Brazil.",
                "My teacher am from Brazil.",
                "My teacher be from Brazil."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'My teacher' is singular, so use 'is from'.",
            correctFeedbackRu: "Правильно! 'My teacher' - единственное число, используйте 'is from'.",
            incorrectFeedback: "Incorrect. With 'my teacher', we use 'is from'.",
            incorrectFeedbackRu: "Неправильно. С 'my teacher' мы используем 'is from'."
        },
        {
            question: "Choose the right form for multiple nationalities:",
            questionRu: "Выберите правильную форму для множественных национальностей:",
            sentence: "We ___ all European.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'We' always takes 'are' for nationalities.",
            correctFeedbackRu: "Отлично! 'We' всегда требует 'are' для национальностей.",
            incorrectFeedback: "Incorrect. 'We' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'We' - множественное число и требует 'are'."
        },
        {
            question: "Select the best way to describe someone's origin:",
            questionRu: "Выберите лучший способ описать чье-то происхождение:",
            options: [
                "She is originally from Japan.",
                "She are originally from Japan.",
                "She am originally from Japan.",
                "She be originally from Japan."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Originally from' shows where someone was born.",
            correctFeedbackRu: "Отлично! 'Originally from' показывает, где кто-то родился.",
            incorrectFeedback: "Incorrect. 'She' requires 'is' even with 'originally'.",
            incorrectFeedbackRu: "Неправильно. 'She' требует 'is' даже с 'originally'."
        },
        {
            question: "Choose the correct form for asking about nationality:",
            questionRu: "Выберите правильную форму для вопроса о национальности:",
            options: [
                "What nationality are you?",
                "What nationality is you?",
                "What nationality am you?",
                "What nationality be you?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'What nationality are you?' is the standard question.",
            correctFeedbackRu: "Правильно! 'What nationality are you?' - стандартный вопрос.",
            incorrectFeedback: "Incorrect. The proper question is 'What nationality are you?'",
            incorrectFeedbackRu: "Неправильно. Правильный вопрос: 'What nationality are you?'"
        },
        {
            question: "Select the right way to talk about mixed heritage:",
            questionRu: "Выберите правильный способ рассказать о смешанном происхождении:",
            sentence: "He ___ half Korean and half American.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Use 'is' for mixed heritage descriptions.",
            correctFeedbackRu: "Отлично! Используйте 'is' для описания смешанного происхождения.",
            incorrectFeedback: "Incorrect. 'He' always takes 'is'.",
            incorrectFeedbackRu: "Неправильно. 'He' всегда требует 'is'."
        },
        {
            question: "Choose the correct form for a group from different countries:",
            questionRu: "Выберите правильную форму для группы из разных стран:",
            options: [
                "The students are from various countries.",
                "The students is from various countries.",
                "The students am from various countries.",
                "The students be from various countries."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Students' is plural, so use 'are from'.",
            correctFeedbackRu: "Отлично! 'Students' - множественное число, используйте 'are from'.",
            incorrectFeedback: "Incorrect. 'Students' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Students' - множественное число и требует 'are'."
        },
        {
            question: "Select the best way to describe citizenship:",
            questionRu: "Выберите лучший способ описать гражданство:",
            sentence: "I ___ a British citizen.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'I am a [nationality] citizen' is the proper form.",
            correctFeedbackRu: "Правильно! 'I am a [национальность] citizen' - правильная форма.",
            incorrectFeedback: "Incorrect. Use 'I am' for stating citizenship.",
            incorrectFeedbackRu: "Неправильно. Используйте 'I am' для указания гражданства."
        },
        {
            question: "Choose the right form for describing where people come from:",
            questionRu: "Выберите правильную форму для описания откуда люди:",
            options: [
                "My neighbors are from different continents.",
                "My neighbors is from different continents.",
                "My neighbors am from different continents.",
                "My neighbors be from different continents."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Neighbors' is plural, so use 'are from'.",
            correctFeedbackRu: "Отлично! 'Neighbors' - множественное число, используйте 'are from'.",
            incorrectFeedback: "Incorrect. 'Neighbors' is plural and requires 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Neighbors' - множественное число и требует 'are'."
        },
        {
            question: "Select the correct way to express dual nationality:",
            questionRu: "Выберите правильный способ выразить двойное гражданство:",
            sentence: "She ___ both Canadian and French.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Even with dual nationality, 'she' takes 'is'.",
            correctFeedbackRu: "Отлично! Даже с двойным гражданством, 'she' требует 'is'.",
            incorrectFeedback: "Incorrect. 'She' always requires 'is', even with multiple nationalities.",
            incorrectFeedbackRu: "Неправильно. 'She' всегда требует 'is', даже с множественными национальностями."
        }
    ]
};

/* ============================================
Page 3: Combining age and nationality information
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page3'] = {
    title: "'To Be' with ages and nationalities - Combining age and nationality information",
    multipleChoice: [
        {
            question: "Choose the correct forms for complete self-introduction:",
            questionRu: "Выберите правильные формы для полного самопредставления:",
            sentence: "I ___ 26 years old and I ___ Italian.",
            options: [
                "am, am",
                "is, am",
                "am, is",
                "are, am"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Both parts of your introduction use 'I am'.",
            correctFeedbackRu: "Отлично! Обе части вашего представления используют 'I am'.",
            incorrectFeedback: "Incorrect. Both age and nationality with 'I' require 'am'.",
            incorrectFeedbackRu: "Неправильно. И возраст, и национальность с 'I' требуют 'am'."
        },
        {
            question: "Select the best complete description of someone:",
            questionRu: "Выберите лучшее полное описание кого-то:",
            options: [
                "My roommate is 23 years old and she is Chinese.",
                "My roommate are 23 years old and she are Chinese.",
                "My roommate am 23 years old and she am Chinese.",
                "My roommate is 23 years old and she are Chinese."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Both sentences correctly use 'is' for third person singular.",
            correctFeedbackRu: "Отлично! Оба предложения правильно используют 'is' для третьего лица единственного числа.",
            incorrectFeedback: "Incorrect. Both 'my roommate' and 'she' need 'is'.",
            incorrectFeedbackRu: "Неправильно. И 'my roommate', и 'she' требуют 'is'."
        },
        {
            question: "Choose the right way to describe a couple:",
            questionRu: "Выберите правильный способ описать пару:",
            sentence: "They ___ both 28 years old and they ___ from Sweden.",
            options: [
                "are, are",
                "is, is",
                "am, am",
                "are, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'They' always takes 'are' for both age and origin.",
            correctFeedbackRu: "Отлично! 'They' всегда требует 'are' и для возраста, и для происхождения.",
            incorrectFeedback: "Incorrect. 'They' is plural and needs 'are' in both cases.",
            incorrectFeedbackRu: "Неправильно. 'They' - множественное число и требует 'are' в обоих случаях."
        },
        {
            question: "Select the correct description with additional details:",
            questionRu: "Выберите правильное описание с дополнительными деталями:",
            options: [
                "He is 35, originally Spanish, but now American.",
                "He are 35, originally Spanish, but now American.",
                "He am 35, originally Spanish, but now American.",
                "He be 35, originally Spanish, but now American."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Complex descriptions still follow basic 'to be' rules.",
            correctFeedbackRu: "Отлично! Сложные описания все еще следуют основным правилам глагола 'to be'.",
            incorrectFeedback: "Incorrect. 'He' always requires 'is' regardless of complexity.",
            incorrectFeedbackRu: "Неправильно. 'He' всегда требует 'is' независимо от сложности."
        },
        {
            question: "Choose the best way to introduce family members:",
            questionRu: "Выберите лучший способ представить членов семьи:",
            sentence: "My parents ___ in their fifties and they ___ Lebanese.",
            options: [
                "are, are",
                "is, are",
                "are, is",
                "am, are"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Parents' is plural, so both verbs are 'are'.",
            correctFeedbackRu: "Отлично! 'Parents' - множественное число, поэтому оба глагола 'are'.",
            incorrectFeedback: "Incorrect. 'Parents' is plural and needs 'are' twice.",
            incorrectFeedbackRu: "Неправильно. 'Parents' - множественное число и требует 'are' дважды."
        },
        {
            question: "Select the correct way to compare ages and backgrounds:",
            questionRu: "Выберите правильный способ сравнить возраст и происхождение:",
            options: [
                "I am older than her, but we are both Polish.",
                "I are older than her, but we are both Polish.",
                "I am older than her, but we is both Polish.",
                "I am older than her, but we am both Polish."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I am' for yourself, 'we are' for the group.",
            correctFeedbackRu: "Отлично! 'I am' для себя, 'we are' для группы.",
            incorrectFeedback: "Incorrect. Use 'I am' and 'we are' for these subjects.",
            incorrectFeedbackRu: "Неправильно. Используйте 'I am' и 'we are' для этих подлежащих."
        },
        {
            question: "Choose the right form for professional introduction:",
            questionRu: "Выберите правильную форму для профессионального представления:",
            sentence: "The new manager ___ 42 years old and she ___ Australian.",
            options: [
                "is, is",
                "are, is",
                "is, are",
                "am, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Both references to the same person use 'is'.",
            correctFeedbackRu: "Отлично! Оба упоминания одного и того же человека используют 'is'.",
            incorrectFeedback: "Incorrect. Both 'manager' and 'she' are singular and need 'is'.",
            incorrectFeedbackRu: "Неправильно. И 'manager', и 'she' - единственное число и требуют 'is'."
        },
        {
            question: "Select the best way to describe international colleagues:",
            questionRu: "Выберите лучший способ описать международных коллег:",
            options: [
                "Our team members are all different ages and nationalities.",
                "Our team members is all different ages and nationalities.",
                "Our team members am all different ages and nationalities.",
                "Our team members be all different ages and nationalities."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Team members' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Team members' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Team members' is plural and requires 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Team members' - множественное число и требует 'are'."
        },
        {
            question: "Choose the correct way to ask about both age and origin:",
            questionRu: "Выберите правильный способ спросить и о возрасте, и о происхождении:",
            options: [
                "How old are you and where are you from?",
                "How old is you and where is you from?",
                "How old are you and where is you from?",
                "How old is you and where are you from?"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Both questions correctly use 'are you'.",
            correctFeedbackRu: "Отлично! Оба вопроса правильно используют 'are you'.",
            incorrectFeedback: "Incorrect. Both questions should use 'are you'.",
            incorrectFeedbackRu: "Неправильно. Оба вопроса должны использовать 'are you'."
        },
        {
            question: "Select the best complete introduction with multiple details:",
            questionRu: "Выберите лучшее полное представление с множественными деталями:",
            options: [
                "I am 30, originally from Mexico, but now I am Canadian too.",
                "I are 30, originally from Mexico, but now I are Canadian too.",
                "I am 30, originally from Mexico, but now I is Canadian too.",
                "I is 30, originally from Mexico, but now I am Canadian too."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! All references to yourself correctly use 'I am'.",
            correctFeedbackRu: "Отлично! Все упоминания о себе правильно используют 'I am'.",
            incorrectFeedback: "Incorrect. All instances with 'I' should use 'am'.",
            incorrectFeedbackRu: "Неправильно. Все случаи с 'I' должны использовать 'am'."
        }
    ]
};

/* ============================================
Page 4: Questions and negative forms with age and nationality
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page4'] = {
    title: "'To Be' with ages and nationalities - Questions and negative forms with age and nationality",
    multipleChoice: [
        {
            question: "Choose the correct negative form about age:",
            questionRu: "Выберите правильную отрицательную форму о возрасте:",
            options: [
                "I am not 25 years old.",
                "I not am 25 years old.",
                "I am no 25 years old.",
                "I don't am 25 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! The negative form is 'am not' after the subject.",
            correctFeedbackRu: "Отлично! Отрицательная форма - 'am not' после подлежащего.",
            incorrectFeedback: "Incorrect. The proper negative is 'I am not'.",
            incorrectFeedbackRu: "Неправильно. Правильное отрицание - 'I am not'."
        },
        {
            question: "Select the correct question about someone's nationality:",
            questionRu: "Выберите правильный вопрос о чьей-то национальности:",
            options: [
                "Is she German?",
                "Are she German?",
                "Am she German?",
                "Be she German?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Questions with 'she' start with 'Is she...?'",
            correctFeedbackRu: "Правильно! Вопросы с 'she' начинаются с 'Is she...?'",
            incorrectFeedback: "Incorrect. Questions about 'she' begin with 'Is she'.",
            incorrectFeedbackRu: "Неправильно. Вопросы о 'she' начинаются с 'Is she'."
        },
        {
            question: "Select the correct question about age:",
            questionRu: "Выберите правильный вопрос о возрасте:",
            options: [
                "Are they teenagers?",
                "Is they teenagers?",
                "Am they teenagers?",
                "Be they teenagers?"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Questions with 'they' start with 'Are they...?'",
            correctFeedbackRu: "Отлично! Вопросы с 'they' начинаются с 'Are they...?'",
            incorrectFeedback: "Incorrect. Questions about 'they' begin with 'Are they'.",
            incorrectFeedbackRu: "Неправильно. Вопросы о 'they' начинаются с 'Are they'."
        },
        {
            question: "Choose the correct negative about origin:",
            questionRu: "Выберите правильное отрицание о происхождении:",
            sentence: "We ___ from the same country.",
            options: [
                "are not",
                "not are",
                "no are",
                "don't are"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! The negative form with 'we' is 'are not'.",
            correctFeedbackRu: "Правильно! Отрицательная форма с 'we' - это 'are not'.",
            incorrectFeedback: "Incorrect. Use 'are not' for negative statements with 'we'.",
            incorrectFeedbackRu: "Неправильно. Используйте 'are not' для отрицательных утверждений с 'we'."
        },
        {
            question: "Select the best yes/no question about both age and nationality:",
            questionRu: "Выберите лучший вопрос да/нет о возрасте и национальности:",
            options: [
                "Is your sister 20 and Korean?",
                "Are your sister 20 and Korean?",
                "Am your sister 20 and Korean?",
                "Be your sister 20 and Korean?"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Your sister' is singular, so use 'Is'.",
            correctFeedbackRu: "Отлично! 'Your sister' - единственное число, поэтому используйте 'Is'.",
            incorrectFeedback: "Incorrect. 'Your sister' requires 'Is' at the beginning.",
            incorrectFeedbackRu: "Неправильно. 'Your sister' требует 'Is' в начале."
        },
        {
            question: "Choose the correct short negative answer:",
            questionRu: "Выберите правильный краткий отрицательный ответ:",
            sentence: "Are you 18? No, ___.",
            options: [
                "I'm not",
                "I not",
                "I no",
                "I don't"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Short negative answers use 'I'm not' (I am not).",
            correctFeedbackRu: "Отлично! Краткие отрицательные ответы используют 'I'm not' (I am not).",
            incorrectFeedback: "Incorrect. The proper short answer is 'I'm not'.",
            incorrectFeedbackRu: "Неправильно. Правильный краткий ответ - 'I'm not'."
        },
        {
            question: "Select the correct question about multiple people:",
            questionRu: "Выберите правильный вопрос о нескольких людях:",
            options: [
                "Are your parents from India?",
                "Is your parents from India?",
                "Am your parents from India?",
                "Be your parents from India?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Parents' is plural, so questions start with 'Are'.",
            correctFeedbackRu: "Правильно! 'Parents' - множественное число, вопросы начинаются с 'Are'.",
            incorrectFeedback: "Incorrect. 'Parents' is plural and needs 'Are' in questions.",
            incorrectFeedbackRu: "Неправильно. 'Parents' - множественное число и требует 'Are' в вопросах."
        },
        {
            question: "Choose the right negative form with contractions:",
            questionRu: "Выберите правильную отрицательную форму с сокращениями:",
            options: [
                "She isn't 30, she's actually 25.",
                "She not is 30, she's actually 25.",
                "She no is 30, she's actually 25.",
                "She doesn't is 30, she's actually 25."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Isn't' is the contraction of 'is not'.",
            correctFeedbackRu: "Отлично! 'Isn't' - это сокращение от 'is not'.",
            incorrectFeedback: "Incorrect. Use 'isn't' as the contraction for 'is not'.",
            incorrectFeedbackRu: "Неправильно. Используйте 'isn't' как сокращение для 'is not'."
        },
        {
            question: "Select the correct question word order:",
            questionRu: "Выберите правильный порядок слов в вопросе:",
            options: [
                "Where are you originally from?",
                "Where you are originally from?",
                "Originally where are you from?",
                "From where originally are you?"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Question words come first, then the verb, then the subject.",
            correctFeedbackRu: "Отлично! Вопросительные слова идут первыми, затем глагол, затем подлежащее.",
            incorrectFeedback: "Incorrect. The correct order is: Where + are + you + originally from?",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: Where + are + you + originally from?"
        },
        {
            question: "Choose the best negative response to a complex question:",
            questionRu: "Выберите лучший отрицательный ответ на сложный вопрос:",
            options: [
                "No, they aren't both 30 and Spanish.",
                "No, they not are both 30 and Spanish.",
                "No, they no are both 30 and Spanish.",
                "No, they don't are both 30 and Spanish."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Aren't' is the contraction for 'are not'.",
            correctFeedbackRu: "Отлично! 'Aren't' - это сокращение от 'are not'.",
            incorrectFeedback: "Incorrect. Use 'aren't' for negative answers with 'they'.",
            incorrectFeedbackRu: "Неправильно. Используйте 'aren't' для отрицательных ответов с 'they'."
        }
    ]
};

/* ============================================
Page 5: Simple age comparisons and family members
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page5'] = {
    title: "'To Be' with ages and nationalities - Simple age comparisons and family members",
    multipleChoice: [
        {
            question: "Choose the correct form to compare ages:",
            questionRu: "Выберите правильную форму для сравнения возрастов:",
            sentence: "My sister ___ younger than me.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'My sister' is third person singular, so use 'is'.",
            correctFeedbackRu: "Правильно! 'My sister' - третье лицо единственного числа, используйте 'is'.",
            incorrectFeedback: "Incorrect. 'My sister' requires 'is' for comparisons.",
            incorrectFeedbackRu: "Неправильно. 'My sister' требует 'is' для сравнений."
        },
        {
            question: "Select the correct sentence about family age:",
            questionRu: "Выберите правильное предложение о возрасте в семье:",
            options: [
                "Our children are 5 and 8 years old.",
                "Our children is 5 and 8 years old.",
                "Our children am 5 and 8 years old.",
                "Our children be 5 and 8 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Children' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Children' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Children' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Children' - множественное число и требует 'are'."
        },
        {
            question: "Choose the right form for describing your age relationship:",
            questionRu: "Выберите правильную форму для описания возрастных отношений:",
            sentence: "I ___ the oldest in my family.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Use 'I am' when describing your position in the family.",
            correctFeedbackRu: "Отлично! Используйте 'I am' при описании своего положения в семье.",
            incorrectFeedback: "Incorrect. 'I' always takes 'am'.",
            incorrectFeedbackRu: "Неправильно. 'I' всегда требует 'am'."
        },
        {
            question: "Select the correct way to talk about grandparents:",
            questionRu: "Выберите правильный способ говорить о дедушках и бабушках:",
            options: [
                "My grandmother is 75 years old.",
                "My grandmother are 75 years old.",
                "My grandmother am 75 years old.",
                "My grandmother be 75 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Grandmother' is singular, so use 'is'.",
            correctFeedbackRu: "Правильно! 'Grandmother' - единственное число, используйте 'is'.",
            incorrectFeedback: "Incorrect. 'Grandmother' is singular and needs 'is'.",
            incorrectFeedbackRu: "Неправильно. 'Grandmother' - единственное число и требует 'is'."
        },
        {
            question: "Choose the correct form for describing twins:",
            questionRu: "Выберите правильную форму для описания близнецов:",
            sentence: "The twins ___ exactly the same age.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Twins' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Twins' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Twins' is plural and requires 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Twins' - множественное число и требует 'are'."
        },
        {
            question: "Select the best way to describe a young family member:",
            questionRu: "Выберите лучший способ описать молодого члена семьи:",
            options: [
                "My little brother is only 3 years old.",
                "My little brother are only 3 years old.",
                "My little brother am only 3 years old.",
                "My little brother be only 3 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Even with 'little' and 'only', use 'is' with singular subjects.",
            correctFeedbackRu: "Отлично! Даже с 'little' и 'only' используйте 'is' с подлежащими в единственном числе.",
            incorrectFeedback: "Incorrect. 'My little brother' is singular and needs 'is'.",
            incorrectFeedbackRu: "Неправильно. 'My little brother' - единственное число и требует 'is'."
        },
        {
            question: "Choose the right form for talking about age difference:",
            questionRu: "Выберите правильную форму для разговора о разнице в возрасте:",
            sentence: "We ___ 10 years apart in age.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'We' always takes 'are'.",
            correctFeedbackRu: "Правильно! 'We' всегда требует 'are'.",
            incorrectFeedback: "Incorrect. 'We' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'We' - множественное число и требует 'are'."
        },
        {
            question: "Select the correct sentence about a relative's age:",
            questionRu: "Выберите правильное предложение о возрасте родственника:",
            options: [
                "My uncle is in his forties.",
                "My uncle are in his forties.",
                "My uncle am in his forties.",
                "My uncle be in his forties."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Uncle' is singular, so use 'is'.",
            correctFeedbackRu: "Отлично! 'Uncle' - единственное число, используйте 'is'.",
            incorrectFeedback: "Incorrect. 'Uncle' is singular and requires 'is'.",
            incorrectFeedbackRu: "Неправильно. 'Uncle' - единственное число и требует 'is'."
        },
        {
            question: "Choose the best way to describe family age range:",
            questionRu: "Выберите лучший способ описать возрастной диапазон семьи:",
            sentence: "All my cousins ___ teenagers.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Cousins' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Cousins' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Cousins' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Cousins' - множественное число и требует 'are'."
        },
        {
            question: "Select the correct way to talk about being the same age:",
            questionRu: "Выберите правильный способ сказать об одинаковом возрасте:",
            options: [
                "My friend and I are the same age.",
                "My friend and I is the same age.",
                "My friend and I am the same age.",
                "My friend and I be the same age."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'My friend and I' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'My friend and I' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'My friend and I' is plural and requires 'are'.",
            incorrectFeedbackRu: "Неправильно. 'My friend and I' - множественное число и требует 'are'."
        }
    ]
};

/* ============================================
Page 6: Countries, cities and where people live
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page6'] = {
    title: "'To Be' with ages and nationalities - Countries, cities and where people live",
    multipleChoice: [
        {
            question: "Choose the correct way to say where you live:",
            questionRu: "Выберите правильный способ сказать, где вы живете:",
            sentence: "I ___ from Tokyo, Japan.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am from' to say where you come from.",
            correctFeedbackRu: "Правильно! Используйте 'I am from' чтобы сказать откуда вы.",
            incorrectFeedback: "Incorrect. 'I' requires 'am' when talking about origin.",
            incorrectFeedbackRu: "Неправильно. 'I' требует 'am' при разговоре о происхождении."
        },
        {
            question: "Select the correct sentence about living in a city:",
            questionRu: "Выберите правильное предложение о жизни в городе:",
            options: [
                "She is from London, England.",
                "She are from London, England.",
                "She am from London, England.",
                "She be from London, England."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'She is from' is correct for third person singular.",
            correctFeedbackRu: "Отлично! 'She is from' правильно для третьего лица единственного числа.",
            incorrectFeedback: "Incorrect. 'She' always takes 'is' when talking about origin.",
            incorrectFeedbackRu: "Неправильно. 'She' всегда требует 'is' при разговоре о происхождении."
        },
        {
            question: "Choose the right form for describing where friends are from:",
            questionRu: "Выберите правильную форму для описания откуда друзья:",
            sentence: "My friends ___ from different countries.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Friends' is plural, so use 'are from'.",
            correctFeedbackRu: "Отлично! 'Friends' - множественное число, используйте 'are from'.",
            incorrectFeedback: "Incorrect. 'Friends' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Friends' - множественное число и требует 'are'."
        },
        {
            question: "Select the correct way to ask about someone's home country:",
            questionRu: "Выберите правильный способ спросить о родной стране:",
            options: [
                "Where is he from?",
                "Where are he from?",
                "Where am he from?",
                "Where be he from?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Questions about 'he' start with 'Where is he from?'",
            correctFeedbackRu: "Правильно! Вопросы о 'he' начинаются с 'Where is he from?'",
            incorrectFeedback: "Incorrect. Questions about 'he' use 'Where is he from?'",
            incorrectFeedbackRu: "Неправильно. Вопросы о 'he' используют 'Where is he from?'"
        },
        {
            question: "Choose the best way to describe your family's origin:",
            questionRu: "Выберите лучший способ описать происхождение вашей семьи:",
            sentence: "We ___ all from small towns.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'We' always takes 'are'.",
            correctFeedbackRu: "Отлично! 'We' всегда требует 'are'.",
            incorrectFeedback: "Incorrect. 'We' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'We' - множественное число и требует 'are'."
        },
        {
            question: "Select the correct sentence about living in different places:",
            questionRu: "Выберите правильное предложение о жизни в разных местах:",
            options: [
                "He is originally from Paris but now he lives in New York.",
                "He are originally from Paris but now he lives in New York.",
                "He am originally from Paris but now he lives in New York.",
                "He be originally from Paris but now he lives in New York."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'He is originally from' shows where someone was born.",
            correctFeedbackRu: "Отлично! 'He is originally from' показывает где кто-то родился.",
            incorrectFeedback: "Incorrect. 'He' requires 'is' even with 'originally'.",
            incorrectFeedbackRu: "Неправильно. 'He' требует 'is' даже с 'originally'."
        },
        {
            question: "Choose the right form to describe a group's origins:",
            questionRu: "Выберите правильную форму для описания происхождения группы:",
            sentence: "The students ___ from Europe and Asia.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Students' is plural, so use 'are from'.",
            correctFeedbackRu: "Правильно! 'Students' - множественное число, используйте 'are from'.",
            incorrectFeedback: "Incorrect. 'Students' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Students' - множественное число и требует 'are'."
        },
        {
            question: "Select the best way to talk about your hometown:",
            questionRu: "Выберите лучший способ рассказать о родном городе:",
            options: [
                "I am from a small village in the mountains.",
                "I are from a small village in the mountains.",
                "I is from a small village in the mountains.",
                "I be from a small village in the mountains."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I am from' is correct for describing your hometown.",
            correctFeedbackRu: "Отлично! 'I am from' правильно для описания родного города.",
            incorrectFeedback: "Incorrect. Always use 'I am from' when talking about your origin.",
            incorrectFeedbackRu: "Неправильно. Всегда используйте 'I am from' при разговоре о происхождении."
        },
        {
            question: "Choose the correct way to describe where your teacher is from:",
            questionRu: "Выберите правильный способ описать откуда ваш учитель:",
            sentence: "Our teacher ___ from Canada.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Teacher' is singular, so use 'is from'.",
            correctFeedbackRu: "Отлично! 'Teacher' - единственное число, используйте 'is from'.",
            incorrectFeedback: "Incorrect. 'Teacher' is singular and requires 'is'.",
            incorrectFeedbackRu: "Неправильно. 'Teacher' - единственное число и требует 'is'."
        },
        {
            question: "Select the right form for asking about multiple people:",
            questionRu: "Выберите правильную форму для вопроса о нескольких людях:",
            options: [
                "Where are your parents from?",
                "Where is your parents from?",
                "Where am your parents from?",
                "Where be your parents from?"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Parents' is plural, so questions start with 'Where are'.",
            correctFeedbackRu: "Отлично! 'Parents' - множественное число, вопросы начинаются с 'Where are'.",
            incorrectFeedback: "Incorrect. 'Parents' is plural and needs 'Where are' in questions.",
            incorrectFeedbackRu: "Неправильно. 'Parents' - множественное число и требует 'Where are' в вопросах."
        }
    ]
};

/* ============================================
Page 7: Mixed practice with age, nationality and basic information
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page7'] = {
    title: "'To Be' with ages and nationalities - Mixed practice with age, nationality and basic information",
    multipleChoice: [
        {
            question: "Choose the correct forms for a complete introduction:",
            questionRu: "Выберите правильные формы для полного представления:",
            sentence: "Hi! I ___ Maria, I ___ 24, and I ___ from Spain.",
            options: [
                "am, am, am",
                "is, am, am",
                "am, is, am",
                "am, am, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! All three parts use 'I am' for name, age, and origin.",
            correctFeedbackRu: "Отлично! Все три части используют 'I am' для имени, возраста и происхождения.",
            incorrectFeedback: "Incorrect. All three statements about yourself need 'am'.",
            incorrectFeedbackRu: "Неправильно. Все три утверждения о себе требуют 'am'."
        },
        {
            question: "Select the correct way to introduce someone else:",
            questionRu: "Выберите правильный способ представить кого-то еще:",
            options: [
                "This is John, he is 19, and he is American.",
                "This are John, he are 19, and he are American.",
                "This am John, he am 19, and he am American.",
                "This is John, he are 19, and he is American."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! All references to 'John/he' correctly use 'is'.",
            correctFeedbackRu: "Отлично! Все упоминания 'John/he' правильно используют 'is'.",
            incorrectFeedback: "Incorrect. 'This is' and 'he is' are correct for introductions.",
            incorrectFeedbackRu: "Неправильно. 'This is' и 'he is' правильны для представлений."
        },
        {
            question: "Choose the right forms for describing a couple:",
            questionRu: "Выберите правильные формы для описания пары:",
            sentence: "They ___ both 27 years old and they ___ from different countries.",
            options: [
                "are, are",
                "is, is",
                "am, am",
                "are, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'They' requires 'are' for both age and origin.",
            correctFeedbackRu: "Отлично! 'They' требует 'are' и для возраста, и для происхождения.",
            incorrectFeedback: "Incorrect. 'They' is plural and needs 'are' in both cases.",
            incorrectFeedbackRu: "Неправильно. 'They' - множественное число и требует 'are' в обоих случаях."
        },
        {
            question: "Select the best way to ask for basic information:",
            questionRu: "Выберите лучший способ спросить основную информацию:",
            options: [
                "What is your name and how old are you?",
                "What are your name and how old are you?",
                "What is your name and how old is you?",
                "What are your name and how old is you?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'What is your name' and 'how old are you' are both right.",
            correctFeedbackRu: "Правильно! 'What is your name' и 'how old are you' оба правильны.",
            incorrectFeedback: "Incorrect. Use 'What is your name' and 'how old are you'.",
            incorrectFeedbackRu: "Неправильно. Используйте 'What is your name' и 'how old are you'."
        },
        {
            question: "Choose the correct negative forms:",
            questionRu: "Выберите правильные отрицательные формы:",
            sentence: "She ___ not 25, she ___ not French.",
            options: [
                "is, is",
                "are, are",
                "am, am",
                "is, are"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Both negative statements about 'she' use 'is not'.",
            correctFeedbackRu: "Отлично! Оба отрицательных утверждения о 'she' используют 'is not'.",
            incorrectFeedback: "Incorrect. 'She' requires 'is not' for both age and nationality.",
            incorrectFeedbackRu: "Неправильно. 'She' требует 'is not' и для возраста, и для национальности."
        },
        {
            question: "Select the right way to describe your family background:",
            questionRu: "Выберите правильный способ описать семейное происхождение:",
            options: [
                "We are all from the same city but different ages.",
                "We is all from the same city but different ages.",
                "We am all from the same city but different ages.",
                "We be all from the same city but different ages."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'We are' is correct for family descriptions.",
            correctFeedbackRu: "Отлично! 'We are' правильно для описания семьи.",
            incorrectFeedback: "Incorrect. 'We' always takes 'are' in descriptions.",
            incorrectFeedbackRu: "Неправильно. 'We' всегда требует 'are' в описаниях."
        },
        {
            question: "Choose the best short answer to a question:",
            questionRu: "Выберите лучший краткий ответ на вопрос:",
            sentence: "Are you and your sister from Italy? Yes, ___.",
            options: [
                "we are",
                "we is",
                "we am",
                "we be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Short positive answers with 'we' use 'we are'.",
            correctFeedbackRu: "Отлично! Краткие положительные ответы с 'we' используют 'we are'.",
            incorrectFeedback: "Incorrect. The proper short answer is 'we are'.",
            incorrectFeedbackRu: "Неправильно. Правильный краткий ответ - 'we are'."
        },
        {
            question: "Select the correct way to describe age and profession:",
            questionRu: "Выберите правильный способ описать возраст и профессию:",
            sentence: "My doctor ___ 45 years old and she ___ very experienced.",
            options: [
                "is, is",
                "are, are",
                "am, am",
                "is, are"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Both descriptions of 'doctor/she' use 'is'.",
            correctFeedbackRu: "Отлично! Оба описания 'doctor/she' используют 'is'.",
            incorrectFeedback: "Incorrect. Both 'doctor' and 'she' are singular and need 'is'.",
            incorrectFeedbackRu: "Неправильно. И 'doctor', и 'she' - единственное число и требуют 'is'."
        },
        {
            question: "Choose the right forms for talking about classmates:",
            questionRu: "Выберите правильные формы для разговора об одноклассниках:",
            sentence: "My classmates ___ from many countries and they ___ all friendly.",
            options: [
                "are, are",
                "is, is",
                "am, am",
                "are, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Classmates' and 'they' both require 'are'.",
            correctFeedbackRu: "Отлично! 'Classmates' и 'they' оба требуют 'are'.",
            incorrectFeedback: "Incorrect. Both 'classmates' and 'they' are plural and need 'are'.",
            incorrectFeedbackRu: "Неправильно. И 'classmates', и 'they' - множественное число и требуют 'are'."
        },
        {
            question: "Select the best complete response to introduction questions:",
            questionRu: "Выберите лучший полный ответ на вопросы представления:",
            options: [
                "I am Sarah, I am 22 years old, and I am from Australia.",
                "I are Sarah, I are 22 years old, and I are from Australia.",
                "I is Sarah, I is 22 years old, and I is from Australia.",
                "I am Sarah, I is 22 years old, and I are from Australia."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! All three parts correctly use 'I am' for complete introduction.",
            correctFeedbackRu: "Отлично! Все три части правильно используют 'I am' для полного представления.",
            incorrectFeedback: "Incorrect. All statements about yourself should use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Все утверждения о себе должны использовать 'I am'."
        }
    ]
};

/* ============================================
Page 8: Describing groups and communities
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page8'] = {
    title: "'To Be' with ages and nationalities - Describing groups and communities",
    multipleChoice: [
        {
            question: "Choose the correct form to describe your class:",
            questionRu: "Выберите правильную форму для описания вашего класса:",
            sentence: "Most students in our class ___ between 18 and 22 years old.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Students' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Students' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Students' is plural and requires 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Students' - множественное число и требует 'are'."
        },
        {
            question: "Select the best way to describe your neighborhood:",
            questionRu: "Выберите лучший способ описать ваш район:",
            options: [
                "The people in my neighborhood are from many different countries.",
                "The people in my neighborhood is from many different countries.",
                "The people in my neighborhood am from many different countries.",
                "The people in my neighborhood be from many different countries."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'People' is plural, so use 'are from'.",
            correctFeedbackRu: "Отлично! 'People' - множественное число, используйте 'are from'.",
            incorrectFeedback: "Incorrect. 'People' is always plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'People' всегда множественное число и требует 'are'."
        },
        {
            question: "Choose the right form for describing a sports team:",
            questionRu: "Выберите правильную форму для описания спортивной команды:",
            sentence: "Our football team captain ___ 21 years old.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Captain' is singular, so use 'is'.",
            correctFeedbackRu: "Правильно! 'Captain' - единственное число, используйте 'is'.",
            incorrectFeedback: "Incorrect. 'Captain' is singular and requires 'is'.",
            incorrectFeedbackRu: "Неправильно. 'Captain' - единственное число и требует 'is'."
        },
        {
            question: "Select the correct way to describe club members:",
            questionRu: "Выберите правильный способ описать членов клуба:",
            options: [
                "All the club members are young adults.",
                "All the club members is young adults.",
                "All the club members am young adults.",
                "All the club members be young adults."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Members' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Members' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Members' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Members' - множественное число и требует 'are'."
        },
        {
            question: "Choose the best form for describing your workplace:",
            questionRu: "Выберите лучшую форму для описания вашего рабочего места:",
            sentence: "My boss ___ very young - she ___ only 28.",
            options: [
                "is, is",
                "are, are",
                "am, am",
                "is, are"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Both 'boss' and 'she' are singular and use 'is'.",
            correctFeedbackRu: "Отлично! И 'boss', и 'she' - единственное число и используют 'is'.",
            incorrectFeedback: "Incorrect. Both 'boss' and 'she' are singular and need 'is'.",
            incorrectFeedbackRu: "Неправильно. И 'boss', и 'she' - единственное число и требуют 'is'."
        },
        {
            question: "Select the right way to talk about your community:",
            questionRu: "Выберите правильный способ рассказать о вашем сообществе:",
            sentence: "The families on our street ___ from different cultures.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Families' is plural, so use 'are from'.",
            correctFeedbackRu: "Отлично! 'Families' - множественное число, используйте 'are from'.",
            incorrectFeedback: "Incorrect. 'Families' is plural and requires 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Families' - множественное число и требует 'are'."
        },
        {
            question: "Choose the correct form for describing age groups:",
            questionRu: "Выберите правильную форму для описания возрастных групп:",
            options: [
                "Most teenagers in our town are between 13 and 19 years old.",
                "Most teenagers in our town is between 13 and 19 years old.",
                "Most teenagers in our town am between 13 and 19 years old.",
                "Most teenagers in our town be between 13 and 19 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Teenagers' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Teenagers' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Teenagers' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Teenagers' - множественное число и требует 'are'."
        },
        {
            question: "Select the best way to describe a group leader:",
            questionRu: "Выберите лучший способ описать лидера группы:",
            sentence: "The group leader ___ 30 years old and very experienced.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Leader' is singular, so use 'is'.",
            correctFeedbackRu: "Правильно! 'Leader' - единственное число, используйте 'is'.",
            incorrectFeedback: "Incorrect. 'Leader' is singular and requires 'is'.",
            incorrectFeedbackRu: "Неправильно. 'Leader' - единственное число и требует 'is'."
        },
        {
            question: "Choose the right form for describing international groups:",
            questionRu: "Выберите правильную форму для описания международных групп:",
            sentence: "The volunteers ___ from 15 different countries.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Volunteers' is plural, so use 'are from'.",
            correctFeedbackRu: "Отлично! 'Volunteers' - множественное число, используйте 'are from'.",
            incorrectFeedback: "Incorrect. 'Volunteers' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Volunteers' - множественное число и требует 'are'."
        },
        {
            question: "Select the correct way to describe your study group:",
            questionRu: "Выберите правильный способ описать вашу учебную группу:",
            options: [
                "Everyone in our study group is about 20 years old.",
                "Everyone in our study group are about 20 years old.",
                "Everyone in our study group am about 20 years old.",
                "Everyone in our study group be about 20 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Everyone' is singular, so use 'is'.",
            correctFeedbackRu: "Отлично! 'Everyone' - единственное число, используйте 'is'.",
            incorrectFeedback: "Incorrect. 'Everyone' is singular and requires 'is'.",
            incorrectFeedbackRu: "Неправильно. 'Everyone' - единственное число и требует 'is'."
        }
    ]
};

/* ============================================
Page 9: Professional and social contexts
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page9'] = {
    title: "'To Be' with ages and nationalities - Professional and social contexts",
    multipleChoice: [
        {
            question: "Choose the correct form for workplace introductions:",
            questionRu: "Выберите правильную форму для представления на работе:",
            sentence: "The new employee ___ 26 years old and she ___ from Germany.",
            options: [
                "is, is",
                "are, are",
                "am, am",
                "is, are"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Both descriptions of the same person use 'is'.",
            correctFeedbackRu: "Отлично! Оба описания одного и того же человека используют 'is'.",
            incorrectFeedback: "Incorrect. Both 'employee' and 'she' are singular and need 'is'.",
            incorrectFeedbackRu: "Неправильно. И 'employee', и 'she' - единственное число и требуют 'is'."
        },
        {
            question: "Select the best way to describe your colleagues:",
            questionRu: "Выберите лучший способ описать ваших коллег:",
            options: [
                "My colleagues are all professionals in their thirties.",
                "My colleagues is all professionals in their thirties.",
                "My colleagues am all professionals in their thirties.",
                "My colleagues be all professionals in their thirties."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Colleagues' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Colleagues' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Colleagues' is plural and requires 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Colleagues' - множественное число и требует 'are'."
        },
        {
            question: "Choose the right form for describing a meeting:",
            questionRu: "Выберите правильную форму для описания встречи:",
            sentence: "The meeting participants ___ from different departments.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Participants' is plural, so use 'are from'.",
            correctFeedbackRu: "Правильно! 'Participants' - множественное число, используйте 'are from'.",
            incorrectFeedback: "Incorrect. 'Participants' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Participants' - множественное число и требует 'are'."
        },
        {
            question: "Select the correct way to ask about work experience:",
            questionRu: "Выберите правильный способ спросить о рабочем опыте:",
            options: [
                "How old is the company director?",
                "How old are the company director?",
                "How old am the company director?",
                "How old be the company director?"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Questions about 'director' start with 'How old is'.",
            correctFeedbackRu: "Отлично! Вопросы о 'director' начинаются с 'How old is'.",
            incorrectFeedback: "Incorrect. 'Director' is singular, so use 'How old is'.",
            incorrectFeedbackRu: "Неправильно. 'Director' - единственное число, используйте 'How old is'."
        },
        {
            question: "Choose the best form for describing a conference:",
            questionRu: "Выберите лучшую форму для описания конференции:",
            sentence: "All the speakers ___ experts and they ___ very knowledgeable.",
            options: [
                "are, are",
                "is, is",
                "am, am",
                "are, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Both 'speakers' and 'they' are plural and use 'are'.",
            correctFeedbackRu: "Отлично! И 'speakers', и 'they' - множественное число и используют 'are'.",
            incorrectFeedback: "Incorrect. Both 'speakers' and 'they' are plural and need 'are'.",
            incorrectFeedbackRu: "Неправильно. И 'speakers', и 'they' - множественное число и требуют 'are'."
        },
        {
            question: "Select the right way to describe professional background:",
            questionRu: "Выберите правильный способ описать профессиональное происхождение:",
            sentence: "Our CEO ___ originally from Japan but now she lives in New York.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'CEO' is singular, so use 'is originally from'.",
            correctFeedbackRu: "Отлично! 'CEO' - единственное число, используйте 'is originally from'.",
            incorrectFeedback: "Incorrect. 'CEO' is singular and requires 'is'.",
            incorrectFeedbackRu: "Неправильно. 'CEO' - единственное число и требует 'is'."
        },
        {
            question: "Choose the correct form for describing client information:",
            questionRu: "Выберите правильную форму для описания информации о клиенте:",
            options: [
                "The client is 45 years old and very successful in business.",
                "The client are 45 years old and very successful in business.",
                "The client am 45 years old and very successful in business.",
                "The client be 45 years old and very successful in business."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Client' is singular, so use 'is'.",
            correctFeedbackRu: "Правильно! 'Client' - единственное число, используйте 'is'.",
            incorrectFeedback: "Incorrect. 'Client' is singular and needs 'is'.",
            incorrectFeedbackRu: "Неправильно. 'Client' - единственное число и требует 'is'."
        },
        {
            question: "Select the best way to describe team diversity:",
            questionRu: "Выберите лучший способ описать разнообразие команды:",
            sentence: "Our project team members ___ from five different continents.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Members' is plural, so use 'are from'.",
            correctFeedbackRu: "Отлично! 'Members' - множественное число, используйте 'are from'.",
            incorrectFeedback: "Incorrect. 'Members' is plural and requires 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Members' - множественное число и требует 'are'."
        },
        {
            question: "Choose the right form for describing business partners:",
            questionRu: "Выберите правильную форму для описания деловых партнеров:",
            sentence: "Both business partners ___ in their fifties and very experienced.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Partners' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Partners' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Partners' is plural and needs 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Partners' - множественное число и требует 'are'."
        },
        {
            question: "Select the correct way to introduce a guest speaker:",
            questionRu: "Выберите правильный способ представить приглашенного докладчика:",
            options: [
                "Today's guest speaker is 38 years old and originally from France.",
                "Today's guest speaker are 38 years old and originally from France.",
                "Today's guest speaker am 38 years old and originally from France.",
                "Today's guest speaker be 38 years old and originally from France."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Speaker' is singular, so use 'is'.",
            correctFeedbackRu: "Отлично! 'Speaker' - единственное число, используйте 'is'.",
            incorrectFeedback: "Incorrect. 'Speaker' is singular and requires 'is'.",
            incorrectFeedbackRu: "Неправильно. 'Speaker' - единственное число и требует 'is'."
        }
    ]
};

/* ============================================
Page 10: Advanced combinations and real-life scenarios
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page10'] = {
    title: "'To Be' with ages and nationalities - Advanced combinations and real-life scenarios",
    multipleChoice: [
        {
            question: "Choose the correct forms for a complex introduction:",
            questionRu: "Выберите правильные формы для сложного представления:",
            sentence: "This ___ my grandmother, she ___ 78 years old, and she ___ originally from Poland.",
            options: [
                "is, is, is",
                "are, are, are",
                "am, am, am",
                "is, are, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! All three statements about grandmother use 'is'.",
            correctFeedbackRu: "Отлично! Все три утверждения о бабушке используют 'is'.",
            incorrectFeedback: "Incorrect. All references to grandmother need 'is'.",
            incorrectFeedbackRu: "Неправильно. Все упоминания бабушки требуют 'is'."
        },
        {
            question: "Select the best way to correct wrong information:",
            questionRu: "Выберите лучший способ исправить неверную информацию:",
            options: [
                "No, they are not both 25 - one is 25 and one is 27.",
                "No, they not are both 25 - one is 25 and one is 27.",
                "No, they no are both 25 - one is 25 and one is 27.",
                "No, they don't are both 25 - one is 25 and one is 27."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Are not' is the correct negative form with 'they'.",
            correctFeedbackRu: "Отлично! 'Are not' - правильная отрицательная форма с 'they'.",
            incorrectFeedback: "Incorrect. Use 'are not' for negative statements with 'they'.",
            incorrectFeedbackRu: "Неправильно. Используйте 'are not' для отрицательных утверждений с 'they'."
        },
        {
            question: "Choose the right forms for describing cultural background:",
            questionRu: "Выберите правильные формы для описания культурного происхождения:",
            sentence: "I ___ half Japanese and half Brazilian, so I ___ familiar with both cultures.",
            options: [
                "am, am",
                "is, is",
                "are, are",
                "am, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Both statements about yourself use 'I am'.",
            correctFeedbackRu: "Отлично! Оба утверждения о себе используют 'I am'.",
            incorrectFeedback: "Incorrect. Both statements with 'I' need 'am'.",
            incorrectFeedbackRu: "Неправильно. Оба утверждения с 'I' требуют 'am'."
        },
        {
            question: "Select the correct way to describe age-related characteristics:",
            questionRu: "Выберите правильный способ описать возрастные характеристики:",
            options: [
                "Young people today are very tech-savvy and globally minded.",
                "Young people today is very tech-savvy and globally minded.",
                "Young people today am very tech-savvy and globally minded.",
                "Young people today be very tech-savvy and globally minded."
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Young people' is plural, so use 'are'.",
            correctFeedbackRu: "Отлично! 'Young people' - множественное число, используйте 'are'.",
            incorrectFeedback: "Incorrect. 'Young people' is plural and requires 'are'.",
            incorrectFeedbackRu: "Неправильно. 'Young people' - множественное число и требует 'are'."
        },
        {
            question: "Choose the best form for comparing generations:",
            questionRu: "Выберите лучшую форму для сравнения поколений:",
            sentence: "My parents ___ from the baby boomer generation and I ___ from generation Z.",
            options: [
                "are, am",
                "is, is",
                "are, are",
                "is, am"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Parents' is plural (are) and 'I' is singular (am).",
            correctFeedbackRu: "Отлично! 'Parents' - множественное число (are), а 'I' - единственное число (am).",
            incorrectFeedback: "Incorrect. 'Parents' needs 'are' and 'I' needs 'am'.",
            incorrectFeedbackRu: "Неправильно. 'Parents' требует 'are', а 'I' требует 'am'."
        },
        {
            question: "Select the right way to ask about someone's background:",
            questionRu: "Выберите правильный способ спросить о чьем-то происхождении:",
            options: [
                "Where are you originally from and how long have you been here?",
                "Where is you originally from and how long have you been here?",
                "Where am you originally from and how long have you been here?",
                "Where be you originally from and how long have you been here?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Questions to 'you' use 'Where are you'.",
            correctFeedbackRu: "Правильно! Вопросы к 'you' используют 'Where are you'.",
            incorrectFeedback: "Incorrect. Questions to 'you' start with 'Where are you'.",
            incorrectFeedbackRu: "Неправильно. Вопросы к 'you' начинаются с 'Where are you'."
        },
        {
            question: "Choose the correct forms for describing a multicultural event:",
            questionRu: "Выберите правильные формы для описания мультикультурного мероприятия:",
            sentence: "The festival organizers ___ from 20 different countries and they ___ all volunteers.",
            options: [
                "are, are",
                "is, is",
                "am, am",
                "are, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Both 'organizers' and 'they' are plural and use 'are'.",
            correctFeedbackRu: "Отлично! И 'organizers', и 'they' - множественное число и используют 'are'.",
            incorrectFeedback: "Incorrect. Both 'organizers' and 'they' are plural and need 'are'.",
            incorrectFeedbackRu: "Неправильно. И 'organizers', и 'they' - множественное число и требуют 'are'."
        },
        {
            question: "Select the best way to describe life experience:",
            questionRu: "Выберите лучший способ описать жизненный опыт:",
            sentence: "At 50, he ___ very wise and experienced in international business.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'He' is singular, so use 'is'.",
            correctFeedbackRu: "Отлично! 'He' - единственное число, используйте 'is'.",
            incorrectFeedback: "Incorrect. 'He' is singular and requires 'is'.",
            incorrectFeedbackRu: "Неправильно. 'He' - единственное число и требует 'is'."
        },
        {
            question: "Choose the right forms for describing global connections:",
            questionRu: "Выберите правильные формы для описания глобальных связей:",
            sentence: "We ___ all connected through social media, even though we ___ from different continents.",
            options: [
                "are, are",
                "is, is",
                "am, am",
                "are, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Both uses of 'we' require 'are'.",
            correctFeedbackRu: "Отлично! Оба использования 'we' требуют 'are'.",
            incorrectFeedback: "Incorrect. 'We' is plural and needs 'are' in both cases.",
            incorrectFeedbackRu: "Неправильно. 'We' - множественное число и требует 'are' в обоих случаях."
        },
        {
            question: "Select the best complete summary using all learned structures:",
            questionRu: "Выберите лучшее полное резюме, используя все изученные структуры:",
            options: [
                "I am 25, originally from Mexico, but now I live in Canada and I am learning English.",
                "I are 25, originally from Mexico, but now I live in Canada and I are learning English.",
                "I is 25, originally from Mexico, but now I live in Canada and I is learning English.",
                "I am 25, originally from Mexico, but now I live in Canada and I are learning English."
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! This sentence combines age, nationality, current location, and activity - all using correct 'I am' forms!",
            correctFeedbackRu: "Отлично! Это предложение сочетает возраст, национальность, текущее местоположение и деятельность - все с правильными формами 'I am'!",
            incorrectFeedback: "Incorrect. All statements about yourself should consistently use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Все утверждения о себе должны последовательно использовать 'I am'."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("'to be' exercises data loaded successfully!");

/* =============================================================================== */
/* ===========================Fill in the Gaps Exercises========================== */

/* ============================================
Page 1: Basic personal information with age
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page1'] = {
    title: "'To Be' with ages and nationalities - Basic personal information with age",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My sister ____ 17 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'sister', we use 'is' for age statements.",
            correctFeedbackRu: "Правильно! С 'sister' мы используем 'is' для утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'sister', we need to use 'is' for age.",
            incorrectFeedbackRu: "Неправильно. С 'sister' нужно использовать 'is' для возраста."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ 24 years old today.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we always use 'am' for age.",
            correctFeedbackRu: "Правильно! С 'I' мы всегда используем 'am' для возраста.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для утверждений о возрасте."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My parents ____ in their fifties.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'parents' (plural), we use 'are' for age descriptions.",
            correctFeedbackRu: "Правильно! С 'parents' (множественное число) мы используем 'are' для описания возраста.",
            incorrectFeedback: "Incorrect. With 'parents', we need to use 'are' for age.",
            incorrectFeedbackRu: "Неправильно. С 'parents' нужно использовать 'are' для возраста."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ almost 30 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' even with words like 'almost'.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' даже со словами как 'almost'.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is' для утверждений о возрасте."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "You ____ very young!",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are' for age descriptions.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' для описания возраста.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' for age comments.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' для комментариев о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The baby ____ only 6 months old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'baby' (singular), we use 'is' for age.",
            correctFeedbackRu: "Правильно! С 'baby' (единственное число) мы используем 'is' для возраста.",
            incorrectFeedback: "Incorrect. With 'baby', we need to use 'is' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'baby' нужно использовать 'is' для утверждений о возрасте."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ all teenagers.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for group age descriptions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для описания возраста группы.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' для утверждений о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My brother ____ 21 today.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'brother', we use 'is' for age statements.",
            correctFeedbackRu: "Правильно! С 'brother' мы используем 'is' для утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'brother', we need to use 'is' for age.",
            incorrectFeedbackRu: "Неправильно. С 'brother' нужно использовать 'is' для возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ both 19 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' even when talking about the same age.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' даже при разговоре об одинаковом возрасте.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' для утверждений о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My grandmother ____ 85 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'grandmother', we use 'is' for age statements.",
            correctFeedbackRu: "Правильно! С 'grandmother' мы используем 'is' для утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'grandmother', we need to use 'is' for age.",
            incorrectFeedbackRu: "Неправильно. С 'grandmother' нужно использовать 'is' для возраста."
        }
    ]
};

/* ============================================
Page 2: Nationalities and countries of origin
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page2'] = {
    title: "'To Be' with ages and nationalities - Nationalities and countries of origin",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My friend ____ from Italy.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'friend' (singular), we use 'is' for origin.",
            correctFeedbackRu: "Правильно! С 'friend' (единственное число) мы используем 'is' для происхождения.",
            incorrectFeedback: "Incorrect. With 'friend', we need to use 'is' when talking about origin.",
            incorrectFeedbackRu: "Неправильно. С 'friend' нужно использовать 'is' при разговоре о происхождении."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ Brazilian.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we use 'am' for nationality.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' для национальности.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for nationality.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ Canadian.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for nationality.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для национальности.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' for nationality.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' для национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "We ____ from Mexico.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for origin.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для происхождения.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' when talking about origin.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' при разговоре о происхождении."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "He ____ Korean.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for nationality.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для национальности.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is' for nationality.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is' для национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ from Germany, right?",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are' for origin questions.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' для вопросов о происхождении.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' when asking about origin.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' при вопросах о происхождении."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ all Spanish.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for nationality.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для национальности.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' for nationality.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно используют 'are' для национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My teacher ____ from Australia.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'teacher' (singular), we use 'is' for origin.",
            correctFeedbackRu: "Правильно! С 'teacher' (единственное число) мы используем 'is' для происхождения.",
            incorrectFeedback: "Incorrect. With 'teacher', we need to use 'is' when talking about origin.",
            incorrectFeedbackRu: "Неправильно. С 'teacher' нужно использовать 'is' при разговоре о происхождении."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The students ____ from different countries.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'students' (plural), we use 'are' for origin.",
            correctFeedbackRu: "Правильно! С 'students' (множественное число) мы используем 'are' для происхождения.",
            incorrectFeedback: "Incorrect. With 'students', we need to use 'are' when talking about origin.",
            incorrectFeedbackRu: "Неправильно. С 'students' нужно использовать 'are' при разговоре о происхождении."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ originally from China.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' even with 'originally'.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' даже с 'originally'.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' for origin statements.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' для утверждений о происхождении."
        }
    ]
};

/* ============================================
Page 3: Combining age and nationality information
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page3'] = {
    title: "'To Be' with ages and nationalities - Combining age and nationality information",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ 26 and I ____ Polish.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Both parts use 'am' because the subject is 'I'.",
            correctFeedbackRu: "Правильно! Обе части используют 'am', потому что подлежащее 'I'.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for both age and nationality.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' и для возраста, и для национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My cousin ____ 23 years old and she ____ Turkish.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Both 'cousin' and 'she' use 'is'.",
            correctFeedbackRu: "Правильно! И 'cousin', и 'she' используют 'is'.",
            incorrectFeedback: "Incorrect. Both 'cousin' and 'she' are singular and need 'is'.",
            incorrectFeedbackRu: "Неправильно. И 'cousin', и 'she' - единственное число и требуют 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ both 20 and they ____ from Japan.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Both parts use 'are' because the subject is 'they'.",
            correctFeedbackRu: "Правильно! Обе части используют 'are', потому что подлежащее 'they'.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' for both age and origin.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' и для возраста, и для происхождения."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ 35 years old and originally from Russia.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for combined age and origin information.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для комбинированной информации о возрасте и происхождении.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is' for combined statements.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is' для комбинированных утверждений."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "You ____ 22 and you ____ Vietnamese, right?",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Both parts use 'are' when asking about 'you'.",
            correctFeedbackRu: "Правильно! Обе части используют 'are' при вопросе о 'you'.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' for both age and nationality questions.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' и для вопросов о возрасте, и для национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "We ____ all in our twenties and we ____ international students.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Both parts use 'are' because the subject is 'we'.",
            correctFeedbackRu: "Правильно! Обе части используют 'are', потому что подлежащее 'we'.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' for both age and description.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' и для возраста, и для описания."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The new student ____ 18 and she ____ from Brazil.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Both 'student' and 'she' are singular and use 'is'.",
            correctFeedbackRu: "Правильно! И 'student', и 'she' - единственное число и используют 'is'.",
            incorrectFeedback: "Incorrect. Both 'student' and 'she' are singular and need 'is'.",
            incorrectFeedbackRu: "Неправильно. И 'student', и 'she' - единственное число и требуют 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My neighbors ____ young and they ____ from different countries.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Both 'neighbors' and 'they' are plural and use 'are'.",
            correctFeedbackRu: "Правильно! И 'neighbors', и 'they' - множественное число и используют 'are'.",
            incorrectFeedback: "Incorrect. Both 'neighbors' and 'they' are plural and need 'are'.",
            incorrectFeedbackRu: "Неправильно. И 'neighbors', и 'they' - множественное число и требуют 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My father ____ 55 years old and he ____ Greek.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Both 'father' and 'he' are singular and use 'is'.",
            correctFeedbackRu: "Правильно! И 'father', и 'he' - единственное число и используют 'is'.",
            incorrectFeedback: "Incorrect. Both 'father' and 'he' are singular and need 'is'.",
            incorrectFeedbackRu: "Неправильно. И 'father', и 'he' - единственное число и требуют 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The twins ____ 16 and they ____ both from Sweden.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Both 'twins' and 'they' are plural and use 'are'.",
            correctFeedbackRu: "Правильно! И 'twins', и 'they' - множественное число и используют 'are'.",
            incorrectFeedback: "Incorrect. Both 'twins' and 'they' are plural and need 'are'.",
            incorrectFeedbackRu: "Неправильно. И 'twins', и 'they' - множественное число и требуют 'are'."
        }
    ]
};

/* ============================================
Page 4: Questions and negative forms
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page4'] = {
    title: "'To Be' with ages and nationalities - Questions and negative forms",
    fillGaps: [
        {
            question: "Complete the question with the correct form of 'to be':",
            questionRu: "Заполните вопрос правильной формой глагола 'to be':",
            sentence: "____ you 18 years old?",
            correctAnswer: "Are",
            options: ["Am", "Is", "Are", "Be"],
            correctFeedback: "Correct! Questions with 'you' start with 'Are'.",
            correctFeedbackRu: "Правильно! Вопросы с 'you' начинаются с 'Are'.",
            incorrectFeedback: "Incorrect. Questions about 'you' should start with 'Are'.",
            incorrectFeedbackRu: "Неправильно. Вопросы о 'you' должны начинаться с 'Are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ not from England.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Negative sentences with 'she' use 'is not'.",
            correctFeedbackRu: "Правильно! Отрицательные предложения с 'she' используют 'is not'.",
            incorrectFeedback: "Incorrect. With 'she', we use 'is not' for negative statements.",
            incorrectFeedbackRu: "Неправильно. С 'she' мы используем 'is not' для отрицательных утверждений."
        },
        {
            question: "Complete the question with the correct form of 'to be':",
            questionRu: "Заполните вопрос правильной формой глагола 'to be':",
            sentence: "____ he Italian?",
            correctAnswer: "Is",
            options: ["Am", "Is", "Are", "Be"],
            correctFeedback: "Correct! Questions with 'he' start with 'Is'.",
            correctFeedbackRu: "Правильно! Вопросы с 'he' начинаются с 'Is'.",
            incorrectFeedback: "Incorrect. Questions about 'he' should start with 'Is'.",
            incorrectFeedbackRu: "Неправильно. Вопросы о 'he' должны начинаться с 'Is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ not 25 years old.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Negative sentences with 'I' use 'am not'.",
            correctFeedbackRu: "Правильно! Отрицательные предложения с 'I' используют 'am not'.",
            incorrectFeedback: "Incorrect. With 'I', we use 'am not' for negative statements.",
            incorrectFeedbackRu: "Неправильно. С 'I' мы используем 'am not' для отрицательных утверждений."
        },
        {
            question: "Complete the question with the correct form of 'to be':",
            questionRu: "Заполните вопрос правильной формой глагола 'to be':",
            sentence: "____ they from France?",
            correctAnswer: "Are",
            options: ["Am", "Is", "Are", "Be"],
            correctFeedback: "Correct! Questions with 'they' start with 'Are'.",
            correctFeedbackRu: "Правильно! Вопросы с 'they' начинаются с 'Are'.",
            incorrectFeedback: "Incorrect. Questions about 'they' should start with 'Are'.",
            incorrectFeedbackRu: "Неправильно. Вопросы о 'they' должны начинаться с 'Are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "We ____ not teenagers anymore.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Negative sentences with 'we' use 'are not'.",
            correctFeedbackRu: "Правильно! Отрицательные предложения с 'we' используют 'are not'.",
            incorrectFeedback: "Incorrect. With 'we', we use 'are not' for negative statements.",
            incorrectFeedbackRu: "Неправильно. С 'we' мы используем 'are not' для отрицательных утверждений."
        },
        {
            question: "Complete the question with the correct form of 'to be':",
            questionRu: "Заполните вопрос правильной формой глагола 'to be':",
            sentence: "____ she 30 years old?",
            correctAnswer: "Is",
            options: ["Am", "Is", "Are", "Be"],
            correctFeedback: "Correct! Questions with 'she' start with 'Is'.",
            correctFeedbackRu: "Правильно! Вопросы с 'she' начинаются с 'Is'.",
            incorrectFeedback: "Incorrect. Questions about 'she' should start with 'Is'.",
            incorrectFeedbackRu: "Неправильно. Вопросы о 'she' должны начинаться с 'Is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ not from Spain.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Negative sentences with 'he' use 'is not'.",
            correctFeedbackRu: "Правильно! Отрицательные предложения с 'he' используют 'is not'.",
            incorrectFeedback: "Incorrect. With 'he', we use 'is not' for negative statements.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы используем 'is not' для отрицательных утверждений."
        },
        {
            question: "Complete the question with the correct form of 'to be':",
            questionRu: "Заполните вопрос правильной формой глагола 'to be':",
            sentence: "____ your parents young?",
            correctAnswer: "Are",
            options: ["Am", "Is", "Are", "Be"],
            correctFeedback: "Correct! Questions with 'parents' (plural) start with 'Are'.",
            correctFeedbackRu: "Правильно! Вопросы с 'parents' (множественное число) начинаются с 'Are'.",
            incorrectFeedback: "Incorrect. Questions about 'parents' should start with 'Are'.",
            incorrectFeedbackRu: "Неправильно. Вопросы о 'parents' должны начинаться с 'Are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ not from the same country.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Negative sentences with 'they' use 'are not'.",
            correctFeedbackRu: "Правильно! Отрицательные предложения с 'they' используют 'are not'.",
            incorrectFeedback: "Incorrect. With 'they', we use 'are not' for negative statements.",
            incorrectFeedbackRu: "Неправильно. С 'they' мы используем 'are not' для отрицательных утверждений."
        }
    ]
};

/* ============================================
Page 5: Family members and relationships
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page5'] = {
    title: "'To Be' with ages and nationalities - Family members and relationships",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My uncle ____ 45 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'uncle' (singular), we use 'is' for age.",
            correctFeedbackRu: "Правильно! С 'uncle' (единственное число) мы используем 'is' для возраста.",
            incorrectFeedback: "Incorrect. With 'uncle', we need to use 'is' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'uncle' нужно использовать 'is' для утверждений о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My cousins ____ all from Canada.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'cousins' (plural), we use 'are' for origin.",
            correctFeedbackRu: "Правильно! С 'cousins' (множественное число) мы используем 'are' для происхождения.",
            incorrectFeedback: "Incorrect. With 'cousins', we need to use 'are' for origin statements.",
            incorrectFeedbackRu: "Неправильно. С 'cousins' нужно использовать 'are' для утверждений о происхождении."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My aunt ____ Portuguese.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'aunt' (singular), we use 'is' for nationality.",
            correctFeedbackRu: "Правильно! С 'aunt' (единственное число) мы используем 'is' для национальности.",
            incorrectFeedback: "Incorrect. With 'aunt', we need to use 'is' for nationality.",
            incorrectFeedbackRu: "Неправильно. С 'aunt' нужно использовать 'is' для национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My grandparents ____ in their eighties.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'grandparents' (plural), we use 'are' for age.",
            correctFeedbackRu: "Правильно! С 'grandparents' (множественное число) мы используем 'are' для возраста.",
            incorrectFeedback: "Incorrect. With 'grandparents', we need to use 'are' for age descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'grandparents' нужно использовать 'are' для описания возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My nephew ____ only 8 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'nephew' (singular), we use 'is' for age.",
            correctFeedbackRu: "Правильно! С 'nephew' (единственное число) мы используем 'is' для возраста.",
            incorrectFeedback: "Incorrect. With 'nephew', we need to use 'is' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'nephew' нужно использовать 'is' для утверждений о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My nieces ____ both American.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'nieces' (plural), we use 'are' for nationality.",
            correctFeedbackRu: "Правильно! С 'nieces' (множественное число) мы используем 'are' для национальности.",
            incorrectFeedback: "Incorrect. With 'nieces', we need to use 'are' for nationality.",
            incorrectFeedbackRu: "Неправильно. С 'nieces' нужно использовать 'are' для национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My stepfather ____ from Ireland.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'stepfather' (singular), we use 'is' for origin.",
            correctFeedbackRu: "Правильно! С 'stepfather' (единственное число) мы используем 'is' для происхождения.",
            incorrectFeedback: "Incorrect. With 'stepfather', we need to use 'is' for origin statements.",
            incorrectFeedbackRu: "Неправильно. С 'stepfather' нужно использовать 'is' для утверждений о происхождении."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My siblings ____ all adults now.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'siblings' (plural), we use 'are' for age descriptions.",
            correctFeedbackRu: "Правильно! С 'siblings' (множественное число) мы используем 'are' для описания возраста.",
            incorrectFeedback: "Incorrect. With 'siblings', we need to use 'are' for age descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'siblings' нужно использовать 'are' для описания возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My mother-in-law ____ 58 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'mother-in-law' (singular), we use 'is' for age.",
            correctFeedbackRu: "Правильно! С 'mother-in-law' (единственное число) мы используем 'is' для возраста.",
            incorrectFeedback: "Incorrect. With 'mother-in-law', we need to use 'is' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'mother-in-law' нужно использовать 'is' для утверждений о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My in-laws ____ from different countries.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'in-laws' (plural), we use 'are' for origin.",
            correctFeedbackRu: "Правильно! С 'in-laws' (множественное число) мы используем 'are' для происхождения.",
            incorrectFeedback: "Incorrect. With 'in-laws', we need to use 'are' for origin statements.",
            incorrectFeedbackRu: "Неправильно. С 'in-laws' нужно использовать 'are' для утверждений о происхождении."
        }
    ]
};

/* ============================================
Page 6: Professional and social contexts
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page6'] = {
    title: "'To Be' with ages and nationalities - Professional and social contexts",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My boss ____ 40 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'boss' (singular), we use 'is' for age.",
            correctFeedbackRu: "Правильно! С 'boss' (единственное число) мы используем 'is' для возраста.",
            incorrectFeedback: "Incorrect. With 'boss', we need to use 'is' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'boss' нужно использовать 'is' для утверждений о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My colleagues ____ from many different countries.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'colleagues' (plural), we use 'are' for origin.",
            correctFeedbackRu: "Правильно! С 'colleagues' (множественное число) мы используем 'are' для происхождения.",
            incorrectFeedback: "Incorrect. With 'colleagues', we need to use 'are' for origin statements.",
            incorrectFeedbackRu: "Неправильно. С 'colleagues' нужно использовать 'are' для утверждений о происхождении."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The manager ____ Canadian.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'manager' (singular), we use 'is' for nationality.",
            correctFeedbackRu: "Правильно! С 'manager' (единственное число) мы используем 'is' для национальности.",
            incorrectFeedback: "Incorrect. With 'manager', we need to use 'is' for nationality.",
            incorrectFeedbackRu: "Неправильно. С 'manager' нужно использовать 'is' для национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The employees ____ all in their twenties.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'employees' (plural), we use 'are' for age descriptions.",
            correctFeedbackRu: "Правильно! С 'employees' (множественное число) мы используем 'are' для описания возраста.",
            incorrectFeedback: "Incorrect. With 'employees', we need to use 'are' for age descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'employees' нужно использовать 'are' для описания возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The director ____ from Germany.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'director' (singular), we use 'is' for origin.",
            correctFeedbackRu: "Правильно! С 'director' (единственное число) мы используем 'is' для происхождения.",
            incorrectFeedback: "Incorrect. With 'director', we need to use 'is' for origin statements.",
            incorrectFeedbackRu: "Неправильно. С 'director' нужно использовать 'is' для утверждений о происхождении."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My classmates ____ 19 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'classmates' (plural), we use 'are' for age.",
            correctFeedbackRu: "Правильно! С 'classmates' (множественное число) мы используем 'are' для возраста.",
            incorrectFeedback: "Incorrect. With 'classmates', we need to use 'are' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'classmates' нужно использовать 'are' для утверждений о возрасте."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The secretary ____ 29 and very efficient.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'secretary' (singular), we use 'is' for age and description.",
            correctFeedbackRu: "Правильно! С 'secretary' (единственное число) мы используем 'is' для возраста и описания.",
            incorrectFeedback: "Incorrect. With 'secretary', we need to use 'is' for combined statements.",
            incorrectFeedbackRu: "Неправильно. С 'secretary' нужно использовать 'is' для комбинированных утверждений."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The team members ____ from different backgrounds.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'team members' (plural), we use 'are' for background descriptions.",
            correctFeedbackRu: "Правильно! С 'team members' (множественное число) мы используем 'are' для описания происхождения.",
            incorrectFeedback: "Incorrect. With 'team members', we need to use 'are' for background descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'team members' нужно использовать 'are' для описания происхождения."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The client ____ 50 years old and very demanding.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'client' (singular), we use 'is' for age and characteristics.",
            correctFeedbackRu: "Правильно! С 'client' (единственное число) мы используем 'is' для возраста и характеристик.",
            incorrectFeedback: "Incorrect. With 'client', we need to use 'is' for descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'client' нужно использовать 'is' для описаний."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The interns ____ all university students.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'interns' (plural), we use 'are' for descriptions.",
            correctFeedbackRu: "Правильно! С 'interns' (множественное число) мы используем 'are' для описаний.",
            incorrectFeedback: "Incorrect. With 'interns', we need to use 'are' for descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'interns' нужно использовать 'are' для описаний."
        }
    ]
};

/* ============================================
Page 7: Age ranges and approximate ages
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page7'] = {
    title: "'To Be' with ages and nationalities - ge ranges and approximate ages",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ about 35 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' even with approximate ages.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' даже с приблизительным возрастом.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' for approximate ages.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' для приблизительного возраста."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ around 25 years old.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we use 'am' for approximate age statements.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' для приблизительных утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for age expressions.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для выражения возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ in their early twenties.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for age range descriptions.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для описания возрастного диапазона.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' for age ranges.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' для возрастных диапазонов."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ somewhere between 40 and 45.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for age range estimates.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для оценки возрастного диапазона.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is' for age estimates.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is' для оценки возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ all in our late teens.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for group age descriptions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для описания возраста группы.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' for group age ranges.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' для возрастных диапазонов группы."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ probably in your thirties.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are' for age guesses.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' для предположений о возрасте.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' for age assumptions.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' для предположений о возрасте."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My neighbor ____ roughly 60 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'neighbor' (singular), we use 'is' for rough age estimates.",
            correctFeedbackRu: "Правильно! С 'neighbor' (единственное число) мы используем 'is' для приблизительной оценки возраста.",
            incorrectFeedback: "Incorrect. With 'neighbor', we need to use 'is' for age estimates.",
            incorrectFeedbackRu: "Неправильно. С 'neighbor' нужно использовать 'is' для оценки возраста."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The children ____ between 8 and 12 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'children' (plural), we use 'are' for age ranges.",
            correctFeedbackRu: "Правильно! С 'children' (множественное число) мы используем 'are' для возрастных диапазонов.",
            incorrectFeedback: "Incorrect. With 'children', we need to use 'are' for age ranges.",
            incorrectFeedbackRu: "Неправильно. С 'children' нужно использовать 'are' для возрастных диапазонов."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ nearly 50 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' even with words like 'nearly'.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' даже со словами как 'nearly'.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' for approximate ages.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' для приблизительного возраста."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The teenagers ____ all around 16 or 17.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'teenagers' (plural), we use 'are' for approximate ages.",
            correctFeedbackRu: "Правильно! С 'teenagers' (множественное число) мы используем 'are' для приблизительного возраста.",
            incorrectFeedback: "Incorrect. With 'teenagers', we need to use 'are' for age descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'teenagers' нужно использовать 'are' для описания возраста."
        }
    ]
};

/* ============================================
Page 8: Mixed nationalities and cultural backgrounds
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page8'] = {
    title: "'To Be' with ages and nationalities - Mixed nationalities and cultural backgrounds",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ half Japanese and half American.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we use 'am' for mixed heritage descriptions.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' для описания смешанного происхождения.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for heritage statements.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для утверждений о происхождении."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ originally from India but now Australian.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for dual nationality descriptions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для описания двойного гражданства.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' for nationality changes.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' для изменений гражданства."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ all multicultural.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for cultural descriptions.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для культурных описаний.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' for cultural statements.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' для культурных утверждений."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ both British and Nigerian.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for dual nationality.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для двойного гражданства.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is' for multiple nationalities.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is' для множественных национальностей."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ from mixed cultural backgrounds.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for background descriptions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для описания происхождения.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' for cultural backgrounds.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' для культурного происхождения."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ part French, part Italian, right?",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are' for heritage questions.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' для вопросов о происхождении.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' for heritage questions.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' для вопросов о происхождении."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My friend ____ ethnically Korean but born in America.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'friend' (singular), we use 'is' for ethnic descriptions.",
            correctFeedbackRu: "Правильно! С 'friend' (единственное число) мы используем 'is' для этнических описаний.",
            incorrectFeedback: "Incorrect. With 'friend', we need to use 'is' for ethnic identity.",
            incorrectFeedbackRu: "Неправильно. С 'friend' нужно использовать 'is' для этнической принадлежности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The students ____ from diverse ethnic groups.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'students' (plural), we use 'are' for diversity descriptions.",
            correctFeedbackRu: "Правильно! С 'students' (множественное число) мы используем 'are' для описания разнообразия.",
            incorrectFeedback: "Incorrect. With 'students', we need to use 'are' for group descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'students' нужно использовать 'are' для описания группы."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ culturally Chinese but legally Canadian.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for complex identity descriptions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для сложных описаний идентичности.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' for identity statements.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' для утверждений об идентичности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The community members ____ from various ethnic origins.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'community members' (plural), we use 'are' for origin descriptions.",
            correctFeedbackRu: "Правильно! С 'community members' (множественное число) мы используем 'are' для описания происхождения.",
            incorrectFeedback: "Incorrect. With 'community members', we need to use 'are' for origin statements.",
            incorrectFeedbackRu: "Неправильно. С 'community members' нужно использовать 'are' для утверждений о происхождении."
        }
    ]
};

/* ============================================
Page 9: Advanced age and life stage descriptions
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page9'] = {
    title: "'To Be' with ages and nationalities - Advanced age and life stage descriptions",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ at the age when people start thinking about career changes.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we use 'am' for life stage descriptions.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' для описания жизненных этапов.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for life stage statements.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для утверждений о жизненных этапах."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ old enough to vote but not old enough to drink.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for age-related capabilities.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для возрастных возможностей.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' for age comparisons.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' для возрастных сравнений."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ at retirement age.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for life stage descriptions.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для описания жизненных этапов.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' for age stages.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' для возрастных этапов."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ too young to understand these problems.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for age-related understanding.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для возрастного понимания.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is' for age limitations.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is' для возрастных ограничений."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ all at different life stages.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for group life stage descriptions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для описания жизненных этапов группы.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' for group descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' для групповых описаний."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ mature for your age.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are' for maturity descriptions.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' для описания зрелости.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' for maturity statements.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' для утверждений о зрелости."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My grandfather ____ wise beyond his years.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'grandfather' (singular), we use 'is' for wisdom descriptions.",
            correctFeedbackRu: "Правильно! С 'grandfather' (единственное число) мы используем 'is' для описания мудрости.",
            incorrectFeedback: "Incorrect. With 'grandfather', we need to use 'is' for character descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'grandfather' нужно использовать 'is' для описания характера."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The elderly residents ____ all over 80 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'residents' (plural), we use 'are' for age descriptions.",
            correctFeedbackRu: "Правильно! С 'residents' (множественное число) мы используем 'are' для описания возраста.",
            incorrectFeedback: "Incorrect. With 'residents', we need to use 'are' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'residents' нужно использовать 'are' для утверждений о возрасте."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ young at heart despite being 70.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for personality descriptions related to age.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для описания личности, связанной с возрастом.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' for character statements.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' для утверждений о характере."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The middle-aged professionals ____ all experienced in their fields.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'professionals' (plural), we use 'are' for experience descriptions.",
            correctFeedbackRu: "Правильно! С 'professionals' (множественное число) мы используем 'are' для описания опыта.",
            incorrectFeedback: "Incorrect. With 'professionals', we need to use 'are' for group descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'professionals' нужно использовать 'are' для групповых описаний."
        }
    ]
};

/* ============================================
Page 10: Complex real-life scenarios and review
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page10'] = {
    title: "'To Be' with ages and nationalities - Complex real-life scenarios and review",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The international conference delegates ____ from 50 different countries.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'delegates' (plural), we use 'are' for origin descriptions.",
            correctFeedbackRu: "Правильно! С 'delegates' (множественное число) мы используем 'are' для описания происхождения.",
            incorrectFeedback: "Incorrect. With 'delegates', we need to use 'are' for group origin.",
            incorrectFeedbackRu: "Неправильно. С 'delegates' нужно использовать 'are' для происхождения группы."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ proud to represent my country at this young age.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we use 'am' for emotional statements about age.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' для эмоциональных утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for personal statements.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для личных утверждений."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The ambassador ____ 55 years old and very diplomatic.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'ambassador' (singular), we use 'is' for combined age and character.",
            correctFeedbackRu: "Правильно! С 'ambassador' (единственное число) мы используем 'is' для комбинированного возраста и характера.",
            incorrectFeedback: "Incorrect. With 'ambassador', we need to use 'is' for descriptions.",
            incorrectFeedbackRu: "Неправильно. С 'ambassador' нужно использовать 'is' для описаний."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "We ____ all global citizens in today's world.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for collective identity statements.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для утверждений о коллективной идентичности.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' for group identity.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' для групповой идентичности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "You ____ never too old to learn about other cultures.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are' for age-related advice.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' для советов, связанных с возрастом.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' for general statements.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' для общих утверждений."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The elderly gentleman ____ 89 and still learning new languages.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'gentleman' (singular), we use 'is' for age and activity descriptions.",
            correctFeedbackRu: "Правильно! С 'gentleman' (единственное число) мы используем 'is' для описания возраста и деятельности.",
            incorrectFeedback: "Incorrect. With 'gentleman', we need to use 'is' for combined statements.",
            incorrectFeedbackRu: "Неправильно. С 'gentleman' нужно использовать 'is' для комбинированных утверждений."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The exchange students ____ all between 20 and 25 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'students' (plural), we use 'are' for age range descriptions.",
            correctFeedbackRu: "Правильно! С 'students' (множественное число) мы используем 'are' для описания возрастного диапазона.",
            incorrectFeedback: "Incorrect. With 'students', we need to use 'are' for group age ranges.",
            incorrectFeedbackRu: "Неправильно. С 'students' нужно использовать 'are' для возрастных диапазонов группы."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ multilingual and multicultural at the same time.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for multiple characteristic descriptions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для описания множественных характеристик.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' for multiple traits.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' для множественных черт."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The generation gap ____ smaller when people understand each other's cultures.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'gap' (singular), we use 'is' for abstract concept descriptions.",
            correctFeedbackRu: "Правильно! С 'gap' (единственное число) мы используем 'is' для описания абстрактных концепций.",
            incorrectFeedback: "Incorrect. With 'gap', we need to use 'is' for abstract concepts.",
            incorrectFeedbackRu: "Неправильно. С 'gap' нужно использовать 'is' для абстрактных концепций."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "All the participants ____ ready to share their stories about age and culture.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Perfect! With 'participants' (plural), we use 'are' for readiness statements. You've completed all Fill in the Gaps exercises!",
            correctFeedbackRu: "Отлично! С 'participants' (множественное число) мы используем 'are' для утверждений о готовности. Вы завершили все упражнения Fill in the Gaps!",
            incorrectFeedback: "Incorrect. With 'participants', we need to use 'are' for group readiness.",
            incorrectFeedbackRu: "Неправильно. С 'participants' нужно использовать 'are' для готовности группы."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Verb 'to be' Fill in the Gaps exercises data loaded successfully!");

/* =============================================================================== */
/* =========================Sentence Building Exercises=========================== */

/* ============================================
Page 1: Basic introductions with age
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page1'] = {
    title: "'To Be' with ages and nationalities - Basic introductions with age",
    sentenceBuilding: [
        {
            question: "Form a sentence about your sister's age:",
            questionRu: "Составьте предложение о возрасте вашей сестры:",
            words: ["My", "sister", "is", "20", "years", "old"],
            correctAnswer: "My sister is 20 years old.",
            correctFeedback: "Excellent! 'My sister is 20 years old' correctly describes her age.",
            correctFeedbackRu: "Отлично! 'My sister is 20 years old' правильно описывает её возраст.",
            incorrectFeedback: "Remember: My sister + is + age + years old.",
            incorrectFeedbackRu: "Помните: My sister + is + возраст + years old."
        },
        {
            question: "Create a sentence about your brother:",
            questionRu: "Составьте предложение о вашем брате:",
            words: ["My", "brother", "is", "15", "years", "old"],
            correctAnswer: "My brother is 15 years old.",
            correctFeedback: "Perfect! 'My brother is 15 years old' is the correct way to state his age.",
            correctFeedbackRu: "Идеально! 'My brother is 15 years old' - правильный способ указать его возраст.",
            incorrectFeedback: "Use: My brother + is + age + years old.",
            incorrectFeedbackRu: "Используйте: My brother + is + возраст + years old."
        },
        {
            question: "Form a sentence about your age today:",
            questionRu: "Составьте предложение о своем возрасте сегодня:",
            words: ["I", "am", "18", "years", "old", "today"],
            correctAnswer: "I am 18 years old today.",
            correctFeedback: "Great! 'I am 18 years old today' shows it's your birthday or current age.",
            correctFeedbackRu: "Отлично! 'I am 18 years old today' показывает, что сегодня ваш день рождения или текущий возраст.",
            incorrectFeedback: "Remember: I + am + age + years old + today.",
            incorrectFeedbackRu: "Помните: I + am + возраст + years old + today."
        },
        {
            question: "Create a sentence about your friend's age:",
            questionRu: "Составьте предложение о возрасте вашего друга:",
            words: ["My", "friend", "is", "23", "years", "old"],
            correctAnswer: "My friend is 23 years old.",
            correctFeedback: "Excellent! 'My friend is 23 years old' correctly states their age.",
            correctFeedbackRu: "Отлично! 'My friend is 23 years old' правильно указывает их возраст.",
            incorrectFeedback: "Follow: My friend + is + age + years old.",
            incorrectFeedbackRu: "Следуйте: My friend + is + возраст + years old."
        },
        {
            question: "Form a sentence about your parents' age:",
            questionRu: "Составьте предложение о возрасте ваших родителей:",
            words: ["My", "parents", "are", "45", "years", "old"],
            correctAnswer: "My parents are 45 years old.",
            correctFeedback: "Perfect! 'My parents are 45 years old' uses 'are' for plural subjects.",
            correctFeedbackRu: "Идеально! 'My parents are 45 years old' использует 'are' для подлежащих во множественном числе.",
            incorrectFeedback: "Remember: My parents + are + age + years old.",
            incorrectFeedbackRu: "Помните: My parents + are + возраст + years old."
        },
        {
            question: "Create a sentence about your teacher:",
            questionRu: "Составьте предложение о вашем учителе:",
            words: ["My", "teacher", "is", "35", "years", "old"],
            correctAnswer: "My teacher is 35 years old.",
            correctFeedback: "Great! 'My teacher is 35 years old' correctly describes their age.",
            correctFeedbackRu: "Отлично! 'My teacher is 35 years old' правильно описывает их возраст.",
            incorrectFeedback: "Use: My teacher + is + age + years old.",
            incorrectFeedbackRu: "Используйте: My teacher + is + возраст + years old."
        },
        {
            question: "Form a sentence about your grandmother:",
            questionRu: "Составьте предложение о вашей бабушке:",
            words: ["My", "grandmother", "is", "70", "years", "old"],
            correctAnswer: "My grandmother is 70 years old.",
            correctFeedback: "Excellent! 'My grandmother is 70 years old' properly states her age.",
            correctFeedbackRu: "Отлично! 'My grandmother is 70 years old' правильно указывает её возраст.",
            incorrectFeedback: "Follow: My grandmother + is + age + years old.",
            incorrectFeedbackRu: "Следуйте: My grandmother + is + возраст + years old."
        },
        {
            question: "Create a sentence about your classmates:",
            questionRu: "Составьте предложение о ваших одноклассниках:",
            words: ["My", "classmates", "are", "17", "years", "old"],
            correctAnswer: "My classmates are 17 years old.",
            correctFeedback: "Perfect! 'My classmates are 17 years old' uses 'are' for multiple people.",
            correctFeedbackRu: "Идеально! 'My classmates are 17 years old' использует 'are' для нескольких людей.",
            incorrectFeedback: "Remember: My classmates + are + age + years old.",
            incorrectFeedbackRu: "Помните: My classmates + are + возраст + years old."
        },
        {
            question: "Form a sentence about your cousin:",
            questionRu: "Составьте предложение о вашем двоюродном брате/сестре:",
            words: ["My", "cousin", "is", "12", "years", "old"],
            correctAnswer: "My cousin is 12 years old.",
            correctFeedback: "Great! 'My cousin is 12 years old' correctly expresses their age.",
            correctFeedbackRu: "Отлично! 'My cousin is 12 years old' правильно выражает их возраст.",
            incorrectFeedback: "Use: My cousin + is + age + years old.",
            incorrectFeedbackRu: "Используйте: My cousin + is + возраст + years old."
        },
        {
            question: "Create a sentence about your neighbors:",
            questionRu: "Составьте предложение о ваших соседях:",
            words: ["My", "neighbors", "are", "50", "years", "old"],
            correctAnswer: "My neighbors are 50 years old.",
            correctFeedback: "Excellent! 'My neighbors are 50 years old' uses 'are' for plural subjects.",
            correctFeedbackRu: "Отлично! 'My neighbors are 50 years old' использует 'are' для подлежащих во множественном числе.",
            incorrectFeedback: "Remember: My neighbors + are + age + years old.",
            incorrectFeedbackRu: "Помните: My neighbors + are + возраст + years old."
        }
    ]
};

/* ============================================
Page 2: Basic nationality statements
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page2'] = {
    title: "'To Be' with ages and nationalities - Basic nationality statements",
    sentenceBuilding: [
        {
            question: "Form a sentence about your nationality:",
            questionRu: "Составьте предложение о вашей национальности:",
            words: ["I", "am", "Chinese"],
            correctAnswer: "I am Chinese.",
            correctFeedback: "Perfect! 'I am Chinese' correctly states your nationality.",
            correctFeedbackRu: "Идеально! 'I am Chinese' правильно указывает вашу национальность.",
            incorrectFeedback: "Remember: I + am + nationality.",
            incorrectFeedbackRu: "Помните: I + am + национальность."
        },
        {
            question: "Create a sentence about your friend's nationality:",
            questionRu: "Составьте предложение о национальности вашего друга:",
            words: ["My", "friend", "is", "Russian"],
            correctAnswer: "My friend is Russian.",
            correctFeedback: "Excellent! 'My friend is Russian' properly describes their nationality.",
            correctFeedbackRu: "Отлично! 'My friend is Russian' правильно описывает их национальность.",
            incorrectFeedback: "Use: My friend + is + nationality.",
            incorrectFeedbackRu: "Используйте: My friend + is + национальность."
        },
        {
            question: "Form a sentence about your teacher's origin:",
            questionRu: "Составьте предложение о происхождении вашего учителя:",
            words: ["My", "teacher", "is", "from", "England"],
            correctAnswer: "My teacher is from England.",
            correctFeedback: "Great! 'My teacher is from England' shows where they come from.",
            correctFeedbackRu: "Отлично! 'My teacher is from England' показывает откуда они родом.",
            incorrectFeedback: "Follow: My teacher + is + from + country.",
            incorrectFeedbackRu: "Следуйте: My teacher + is + from + страна."
        },
        {
            question: "Create a sentence about your origin:",
            questionRu: "Составьте предложение о вашем происхождении:",
            words: ["I", "am", "from", "Mexico"],
            correctAnswer: "I am from Mexico.",
            correctFeedback: "Perfect! 'I am from Mexico' correctly states where you're from.",
            correctFeedbackRu: "Идеально! 'I am from Mexico' правильно указывает откуда вы родом.",
            incorrectFeedback: "Remember: I + am + from + country.",
            incorrectFeedbackRu: "Помните: I + am + from + страна."
        },
        {
            question: "Form a sentence about your sister's nationality:",
            questionRu: "Составьте предложение о национальности вашей сестры:",
            words: ["My", "sister", "is", "Indian"],
            correctAnswer: "My sister is Indian.",
            correctFeedback: "Excellent! 'My sister is Indian' properly states her nationality.",
            correctFeedbackRu: "Отлично! 'My sister is Indian' правильно указывает её национальность.",
            incorrectFeedback: "Use: My sister + is + nationality.",
            incorrectFeedbackRu: "Используйте: My sister + is + национальность."
        },
        {
            question: "Create a sentence about your parents' origin:",
            questionRu: "Составьте предложение о происхождении ваших родителей:",
            words: ["My", "parents", "are", "from", "Korea"],
            correctAnswer: "My parents are from Korea.",
            correctFeedback: "Great! 'My parents are from Korea' uses 'are' for plural subjects.",
            correctFeedbackRu: "Отлично! 'My parents are from Korea' использует 'are' для подлежащих во множественном числе.",
            incorrectFeedback: "Remember: My parents + are + from + country.",
            incorrectFeedbackRu: "Помните: My parents + are + from + страна."
        },
        {
            question: "Form a sentence about your brother's nationality:",
            questionRu: "Составьте предложение о национальности вашего брата:",
            words: ["My", "brother", "is", "German"],
            correctAnswer: "My brother is German.",
            correctFeedback: "Perfect! 'My brother is German' correctly describes his nationality.",
            correctFeedbackRu: "Идеально! 'My brother is German' правильно описывает его национальность.",
            incorrectFeedback: "Follow: My brother + is + nationality.",
            incorrectFeedbackRu: "Следуйте: My brother + is + национальность."
        },
        {
            question: "Create a sentence about your classmates' origin:",
            questionRu: "Составьте предложение о происхождении ваших одноклассников:",
            words: ["My", "classmates", "are", "from", "different", "countries"],
            correctAnswer: "My classmates are from different countries.",
            correctFeedback: "Excellent! 'My classmates are from different countries' shows diversity.",
            correctFeedbackRu: "Отлично! 'My classmates are from different countries' показывает разнообразие.",
            incorrectFeedback: "Use: My classmates + are + from + different countries.",
            incorrectFeedbackRu: "Используйте: My classmates + are + from + different countries."
        },
        {
            question: "Form a sentence about your grandmother's origin:",
            questionRu: "Составьте предложение о происхождении вашей бабушки:",
            words: ["My", "grandmother", "is", "from", "Italy"],
            correctAnswer: "My grandmother is from Italy.",
            correctFeedback: "Great! 'My grandmother is from Italy' properly states her origin.",
            correctFeedbackRu: "Отлично! 'My grandmother is from Italy' правильно указывает её происхождение.",
            incorrectFeedback: "Remember: My grandmother + is + from + country.",
            incorrectFeedbackRu: "Помните: My grandmother + is + from + страна."
        },
        {
            question: "Create a sentence about your family's nationality:",
            questionRu: "Составьте предложение о национальности вашей семьи:",
            words: ["We", "are", "all", "Brazilian"],
            correctAnswer: "We are all Brazilian.",
            correctFeedback: "Perfect! 'We are all Brazilian' shows the family's shared nationality.",
            correctFeedbackRu: "Идеально! 'We are all Brazilian' показывает общую национальность семьи.",
            incorrectFeedback: "Follow: We + are + all + nationality.",
            incorrectFeedbackRu: "Следуйте: We + are + all + национальность."
        }
    ]
};

/* ============================================
Page 3: Combining age and nationality information
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page3'] = {
    title: "'To Be' with ages and nationalities - Combining age and nationality information",
    sentenceBuilding: [
        {
            question: "Form a sentence with age and nationality about yourself:",
            questionRu: "Составьте предложение с возрастом и национальностью о себе:",
            words: ["I", "am", "19", "and", "I", "am", "Canadian"],
            correctAnswer: "I am 19 and I am Canadian.",
            correctFeedback: "Excellent! 'I am 19 and I am Canadian' combines both pieces of information.",
            correctFeedbackRu: "Отлично! 'I am 19 and I am Canadian' объединяет обе части информации.",
            incorrectFeedback: "Remember: I am + age + and I am + nationality.",
            incorrectFeedbackRu: "Помните: I am + возраст + and I am + национальность."
        },
        {
            question: "Create a sentence about your friend with age and origin:",
            questionRu: "Составьте предложение о вашем друге с возрастом и происхождением:",
            words: ["My", "friend", "is", "22", "and", "she", "is", "from", "Japan"],
            correctAnswer: "My friend is 22 and she is from Japan.",
            correctFeedback: "Perfect! This sentence gives complete information about your friend.",
            correctFeedbackRu: "Идеально! Это предложение дает полную информацию о вашем друге.",
            incorrectFeedback: "Use: My friend is + age + and she is from + country.",
            incorrectFeedbackRu: "Используйте: My friend is + возраст + and she is from + страна."
        },
        {
            question: "Form a sentence about your brother with age and nationality:",
            questionRu: "Составьте предложение о вашем брате с возрастом и национальностью:",
            words: ["My", "brother", "is", "16", "and", "he", "is", "Australian"],
            correctAnswer: "My brother is 16 and he is Australian.",
            correctFeedback: "Great! This combines age and nationality information perfectly.",
            correctFeedbackRu: "Отлично! Это идеально сочетает информацию о возрасте и национальности.",
            incorrectFeedback: "Follow: My brother is + age + and he is + nationality.",
            incorrectFeedbackRu: "Следуйте: My brother is + возраст + and he is + национальность."
        },
        {
            question: "Create a sentence about your sister with age and origin:",
            questionRu: "Составьте предложение о вашей сестре с возрастом и происхождением:",
            words: ["My", "sister", "is", "25", "and", "she", "is", "from", "France"],
            correctAnswer: "My sister is 25 and she is from France.",
            correctFeedback: "Excellent! This provides complete information about your sister.",
            correctFeedbackRu: "Отлично! Это предоставляет полную информацию о вашей сестре.",
            incorrectFeedback: "Remember: My sister is + age + and she is from + country.",
            incorrectFeedbackRu: "Помните: My sister is + возраст + and she is from + страна."
        },
        {
            question: "Form a sentence about your parents with age and nationality:",
            questionRu: "Составьте предложение о ваших родителях с возрастом и национальностью:",
            words: ["My", "parents", "are", "48", "and", "they", "are", "Turkish"],
            correctAnswer: "My parents are 48 and they are Turkish.",
            correctFeedback: "Perfect! This sentence correctly uses 'are' for plural subjects.",
            correctFeedbackRu: "Идеально! Это предложение правильно использует 'are' для подлежащих во множественном числе.",
            incorrectFeedback: "Use: My parents are + age + and they are + nationality.",
            incorrectFeedbackRu: "Используйте: My parents are + возраст + and they are + национальность."
        },
        {
            question: "Create a sentence about your teacher with age and origin:",
            questionRu: "Составьте предложение о вашем учителе с возрастом и происхождением:",
            words: ["My", "teacher", "is", "33", "and", "she", "is", "from", "Spain"],
            correctAnswer: "My teacher is 33 and she is from Spain.",
            correctFeedback: "Great! This gives complete information about your teacher.",
            correctFeedbackRu: "Отлично! Это дает полную информацию о вашем учителе.",
            incorrectFeedback: "Follow: My teacher is + age + and she is from + country.",
            incorrectFeedbackRu: "Следуйте: My teacher is + возраст + and she is from + страна."
        },
        {
            question: "Form a sentence about your cousin with age and nationality:",
            questionRu: "Составьте предложение о вашем двоюродном брате/сестре с возрастом и национальностью:",
            words: ["My", "cousin", "is", "14", "and", "he", "is", "Greek"],
            correctAnswer: "My cousin is 14 and he is Greek.",
            correctFeedback: "Excellent! This combines age and nationality information well.",
            correctFeedbackRu: "Отлично! Это хорошо сочетает информацию о возрасте и национальности.",
            incorrectFeedback: "Remember: My cousin is + age + and he is + nationality.",
            incorrectFeedbackRu: "Помните: My cousin is + возраст + and he is + национальность."
        },
        {
            question: "Create a sentence about your grandparents with age and origin:",
            questionRu: "Составьте предложение о ваших дедушке и бабушке с возрастом и происхождением:",
            words: ["My", "grandparents", "are", "75", "and", "they", "are", "from", "Poland"],
            correctAnswer: "My grandparents are 75 and they are from Poland.",
            correctFeedback: "Perfect! This uses 'are' correctly for plural subjects.",
            correctFeedbackRu: "Идеально! Это правильно использует 'are' для подлежащих во множественном числе.",
            incorrectFeedback: "Use: My grandparents are + age + and they are from + country.",
            incorrectFeedbackRu: "Используйте: My grandparents are + возраст + and they are from + страна."
        },
        {
            question: "Form a sentence about your neighbor with age and nationality:",
            questionRu: "Составьте предложение о вашем соседе с возрастом и национальностью:",
            words: ["My", "neighbor", "is", "41", "and", "he", "is", "Egyptian"],
            correctAnswer: "My neighbor is 41 and he is Egyptian.",
            correctFeedback: "Great! This provides complete information about your neighbor.",
            correctFeedbackRu: "Отлично! Это предоставляет полную информацию о вашем соседе.",
            incorrectFeedback: "Follow: My neighbor is + age + and he is + nationality.",
            incorrectFeedbackRu: "Следуйте: My neighbor is + возраст + and he is + национальность."
        },
        {
            question: "Create a sentence about yourself with detailed information:",
            questionRu: "Составьте предложение о себе с подробной информацией:",
            words: ["I", "am", "21", "years", "old", "and", "I", "am", "from", "Thailand"],
            correctAnswer: "I am 21 years old and I am from Thailand.",
            correctFeedback: "Excellent! This is a complete self-introduction with age and origin.",
            correctFeedbackRu: "Отлично! Это полное самопредставление с возрастом и происхождением.",
            incorrectFeedback: "Remember: I am + age + years old + and I am from + country.",
            incorrectFeedbackRu: "Помните: I am + возраст + years old + and I am from + страна."
        }
    ]
};

/* ============================================
Page 4: Questions and negative forms
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page4'] = {
    title: "'To Be' with ages and nationalities - Questions and negative forms",
    sentenceBuilding: [
        {
            question: "Form a question about someone's age:",
            questionRu: "Составьте вопрос о чьем-то возрасте:",
            words: ["How", "old", "are", "you"],
            correctAnswer: "How old are you?",
            correctFeedback: "Perfect! 'How old are you?' is the standard way to ask about age.",
            correctFeedbackRu: "Идеально! 'How old are you?' - стандартный способ спросить о возрасте.",
            incorrectFeedback: "Remember: How old + are + you + ?",
            incorrectFeedbackRu: "Помните: How old + are + you + ?"
        },
        {
            question: "Create a question about nationality:",
            questionRu: "Составьте вопрос о национальности:",
            words: ["Are", "you", "Korean"],
            correctAnswer: "Are you Korean?",
            correctFeedback: "Excellent! 'Are you Korean?' is a proper yes/no question about nationality.",
            correctFeedbackRu: "Отлично! 'Are you Korean?' - правильный вопрос да/нет о национальности.",
            incorrectFeedback: "Use: Are + you + nationality + ?",
            incorrectFeedbackRu: "Используйте: Are + you + национальность + ?"
        },
        {
            question: "Form a negative sentence about age:",
            questionRu: "Составьте отрицательное предложение о возрасте:",
            words: ["I", "am", "not", "30", "years", "old"],
            correctAnswer: "I am not 30 years old.",
            correctFeedback: "Great! 'I am not 30 years old' correctly negates the age statement.",
            correctFeedbackRu: "Отлично! 'I am not 30 years old' правильно отрицает утверждение о возрасте.",
            incorrectFeedback: "Remember: I + am + not + age + years old.",
            incorrectFeedbackRu: "Помните: I + am + not + возраст + years old."
        },
        {
            question: "Create a question about origin:",
            questionRu: "Составьте вопрос о происхождении:",
            words: ["Is", "she", "from", "Brazil"],
            correctAnswer: "Is she from Brazil?",
            correctFeedback: "Perfect! 'Is she from Brazil?' asks about someone's country of origin.",
            correctFeedbackRu: "Идеально! 'Is she from Brazil?' спрашивает о стране происхождения.",
            incorrectFeedback: "Follow: Is + she + from + country + ?",
            incorrectFeedbackRu: "Следуйте: Is + she + from + страна + ?"
        },
        {
            question: "Form a negative sentence about nationality:",
            questionRu: "Составьте отрицательное предложение о национальности:",
            words: ["He", "is", "not", "American"],
            correctAnswer: "He is not American.",
            correctFeedback: "Excellent! 'He is not American' correctly negates nationality.",
            correctFeedbackRu: "Отлично! 'He is not American' правильно отрицает национальность.",
            incorrectFeedback: "Use: He + is + not + nationality.",
            incorrectFeedbackRu: "Используйте: He + is + not + национальность."
        },
        {
            question: "Create a question about someone's age:",
            questionRu: "Составьте вопрос о чьем-то возрасте:",
            words: ["Is", "your", "sister", "18", "years", "old"],
            correctAnswer: "Is your sister 18 years old?",
            correctFeedback: "Great! This asks about a specific person's specific age.",
            correctFeedbackRu: "Отлично! Это спрашивает о конкретном возрасте конкретного человека.",
            incorrectFeedback: "Remember: Is + your sister + age + years old + ?",
            incorrectFeedbackRu: "Помните: Is + your sister + возраст + years old + ?"
        },
        {
            question: "Form a negative sentence about origin:",
            questionRu: "Составьте отрицательное предложение о происхождении:",
            words: ["We", "are", "not", "from", "China"],
            correctAnswer: "We are not from China.",
            correctFeedback: "Perfect! 'We are not from China' negates the origin statement.",
            correctFeedbackRu: "Идеально! 'We are not from China' отрицает утверждение о происхождении.",
            incorrectFeedback: "Follow: We + are + not + from + country.",
            incorrectFeedbackRu: "Следуйте: We + are + not + from + страна."
        },
        {
            question: "Create a question about multiple people:",
            questionRu: "Составьте вопрос о нескольких людях:",
            words: ["Are", "they", "from", "the", "same", "country"],
            correctAnswer: "Are they from the same country?",
            correctFeedback: "Excellent! This asks about the origin of multiple people.",
            correctFeedbackRu: "Отлично! Это спрашивает о происхождении нескольких людей.",
            incorrectFeedback: "Use: Are + they + from + the same country + ?",
            incorrectFeedbackRu: "Используйте: Are + they + from + the same country + ?"
        },
        {
            question: "Form a negative sentence with contractions:",
            questionRu: "Составьте отрицательное предложение с сокращениями:",
            words: ["She", "isn't", "25", "years", "old"],
            correctAnswer: "She isn't 25 years old.",
            correctFeedback: "Great! 'She isn't 25 years old' uses the contraction form.",
            correctFeedbackRu: "Отлично! 'She isn't 25 years old' использует сокращенную форму.",
            incorrectFeedback: "Remember: She + isn't + age + years old.",
            incorrectFeedbackRu: "Помните: She + isn't + возраст + years old."
        },
        {
            question: "Create a question about age range:",
            questionRu: "Составьте вопрос о возрастном диапазоне:",
            words: ["Are", "you", "both", "teenagers"],
            correctAnswer: "Are you both teenagers?",
            correctFeedback: "Perfect! This asks about the age group of two people.",
            correctFeedbackRu: "Идеально! Это спрашивает о возрастной группе двух людей.",
            incorrectFeedback: "Follow: Are + you + both + age group + ?",
            incorrectFeedbackRu: "Следуйте: Are + you + both + возрастная группа + ?"
        }
    ]
};

/* ============================================
Page 5: Family relationships and descriptions
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page5'] = {
    title: "'To Be' with ages and nationalities - Family relationships",
    sentenceBuilding: [
        {
            question: "Form a sentence about your uncle:",
            questionRu: "Составьте предложение о вашем дяде:",
            words: ["My", "uncle", "is", "42", "and", "very", "kind"],
            correctAnswer: "My uncle is 42 and very kind.",
            correctFeedback: "Excellent! This combines age with a personality description.",
            correctFeedbackRu: "Отлично! Это сочетает возраст с описанием личности.",
            incorrectFeedback: "Remember: My uncle + is + age + and + adjective.",
            incorrectFeedbackRu: "Помните: My uncle + is + возраст + and + прилагательное."
        },
        {
            question: "Create a sentence about your aunt and nationality:",
            questionRu: "Составьте предложение о вашей тете и национальности:",
            words: ["My", "aunt", "is", "Swedish", "and", "35", "years", "old"],
            correctAnswer: "My aunt is Swedish and 35 years old.",
            correctFeedback: "Perfect! This combines nationality and age information.",
            correctFeedbackRu: "Идеально! Это сочетает информацию о национальности и возрасте.",
            incorrectFeedback: "Use: My aunt + is + nationality + and + age + years old.",
            incorrectFeedbackRu: "Используйте: My aunt + is + национальность + and + возраст + years old."
        },
        {
            question: "Form a sentence about your cousins:",
            questionRu: "Составьте предложение о ваших двоюродных братьях/сестрах:",
            words: ["My", "cousins", "are", "twins", "and", "they", "are", "20"],
            correctAnswer: "My cousins are twins and they are 20.",
            correctFeedback: "Great! This describes both the relationship and age.",
            correctFeedbackRu: "Отлично! Это описывает и отношения, и возраст.",
            incorrectFeedback: "Follow: My cousins + are + relationship + and + they are + age.",
            incorrectFeedbackRu: "Следуйте: My cousins + are + отношение + and + they are + возраст."
        },
        {
            question: "Create a sentence about your nephew:",
            questionRu: "Составьте предложение о вашем племяннике:",
            words: ["My", "nephew", "is", "only", "5", "years", "old"],
            correctAnswer: "My nephew is only 5 years old.",
            correctFeedback: "Excellent! 'Only' emphasizes how young he is.",
            correctFeedbackRu: "Отлично! 'Only' подчеркивает, как он мал.",
            incorrectFeedback: "Remember: My nephew + is + only + age + years old.",
            incorrectFeedbackRu: "Помните: My nephew + is + only + возраст + years old."
        },
        {
            question: "Form a sentence about your niece and origin:",
            questionRu: "Составьте предложение о вашей племяннице и происхождении:",
            words: ["My", "niece", "is", "from", "Canada", "and", "she", "is", "8"],
            correctAnswer: "My niece is from Canada and she is 8.",
            correctFeedback: "Perfect! This gives both origin and age information.",
            correctFeedbackRu: "Идеально! Это дает информацию и о происхождении, и о возрасте.",
            incorrectFeedback: "Use: My niece + is + from + country + and + she is + age.",
            incorrectFeedbackRu: "Используйте: My niece + is + from + страна + and + she is + возраст."
        },
        {
            question: "Create a sentence about your grandfather:",
            questionRu: "Составьте предложение о вашем дедушке:",
            words: ["My", "grandfather", "is", "78", "and", "still", "active"],
            correctAnswer: "My grandfather is 78 and still active.",
            correctFeedback: "Great! This shows age with a positive characteristic.",
            correctFeedbackRu: "Отлично! Это показывает возраст с положительной характеристикой.",
            incorrectFeedback: "Follow: My grandfather + is + age + and + still + adjective.",
            incorrectFeedbackRu: "Следуйте: My grandfather + is + возраст + and + still + прилагательное."
        },
        {
            question: "Form a sentence about your stepmother:",
            questionRu: "Составьте предложение о вашей мачехе:",
            words: ["My", "stepmother", "is", "Irish", "and", "very", "friendly"],
            correctAnswer: "My stepmother is Irish and very friendly.",
            correctFeedback: "Excellent! This combines nationality with personality.",
            correctFeedbackRu: "Отлично! Это сочетает национальность с личностными качествами.",
            incorrectFeedback: "Remember: My stepmother + is + nationality + and + very + adjective.",
            incorrectFeedbackRu: "Помните: My stepmother + is + национальность + and + very + прилагательное."
        },
        {
            question: "Create a sentence about your siblings:",
            questionRu: "Составьте предложение о ваших братьях и сестрах:",
            words: ["My", "siblings", "are", "all", "adults", "now"],
            correctAnswer: "My siblings are all adults now.",
            correctFeedback: "Perfect! This describes the life stage of multiple family members.",
            correctFeedbackRu: "Идеально! Это описывает жизненный этап нескольких членов семьи.",
            incorrectFeedback: "Use: My siblings + are + all + life stage + now.",
            incorrectFeedbackRu: "Используйте: My siblings + are + all + жизненный этап + now."
        },
        {
            question: "Form a sentence about your in-laws:",
            questionRu: "Составьте предложение о ваших родственниках со стороны супруга:",
            words: ["My", "in-laws", "are", "from", "different", "backgrounds"],
            correctAnswer: "My in-laws are from different backgrounds.",
            correctFeedback: "Great! This describes diversity in extended family.",
            correctFeedbackRu: "Отлично! Это описывает разнообразие в расширенной семье.",
            incorrectFeedback: "Follow: My in-laws + are + from + different + backgrounds.",
            incorrectFeedbackRu: "Следуйте: My in-laws + are + from + different + backgrounds."
        },
        {
            question: "Create a sentence about age comparison in family:",
            questionRu: "Составьте предложение о сравнении возраста в семье:",
            words: ["I", "am", "older", "than", "my", "sister"],
            correctAnswer: "I am older than my sister.",
            correctFeedback: "Excellent! This compares ages within the family.",
            correctFeedbackRu: "Отлично! Это сравнивает возраста в семье.",
            incorrectFeedback: "Remember: I + am + older than + family member.",
            incorrectFeedbackRu: "Помните: I + am + older than + член семьи."
        }
    ]
};

/* ============================================
Page 6: Professional and educational contexts
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page6'] = {
    title: "'To Be' with ages and nationalities - Professional and educational contexts",
    sentenceBuilding: [
        {
            question: "Form a sentence about your boss:",
            questionRu: "Составьте предложение о вашем начальнике:",
            words: ["My", "boss", "is", "45", "and", "very", "experienced"],
            correctAnswer: "My boss is 45 and very experienced.",
            correctFeedback: "Excellent! This combines age with professional qualities.",
            correctFeedbackRu: "Отлично! Это сочетает возраст с профессиональными качествами.",
            incorrectFeedback: "Remember: My boss + is + age + and + very + adjective.",
            incorrectFeedbackRu: "Помните: My boss + is + возраст + and + very + прилагательное."
        },
        {
            question: "Create a sentence about your colleagues:",
            questionRu: "Составьте предложение о ваших коллегах:",
            words: ["My", "colleagues", "are", "from", "many", "different", "countries"],
            correctAnswer: "My colleagues are from many different countries.",
            correctFeedback: "Perfect! This describes workplace diversity.",
            correctFeedbackRu: "Идеально! Это описывает разнообразие на рабочем месте.",
            incorrectFeedback: "Use: My colleagues + are + from + many different countries.",
            incorrectFeedbackRu: "Используйте: My colleagues + are + from + many different countries."
        },
        {
            question: "Form a sentence about your manager and nationality:",
            questionRu: "Составьте предложение о вашем менеджере и национальности:",
            words: ["Our", "manager", "is", "Indian", "and", "speaks", "three", "languages"],
            correctAnswer: "Our manager is Indian and speaks three languages.",
            correctFeedback: "Great! This combines nationality with language skills.",
            correctFeedbackRu: "Отлично! Это сочетает национальность с языковыми навыками.",
            incorrectFeedback: "Follow: Our manager + is + nationality + and + speaks + languages.",
            incorrectFeedbackRu: "Следуйте: Our manager + is + национальность + and + speaks + языки."
        },
        {
            question: "Create a sentence about your professor:",
            questionRu: "Составьте предложение о вашем профессоре:",
            words: ["My", "professor", "is", "60", "and", "still", "teaching"],
            correctAnswer: "My professor is 60 and still teaching.",
            correctFeedback: "Excellent! This shows continued professional activity with age.",
            correctFeedbackRu: "Отлично! Это показывает продолжающуюся профессиональную деятельность с возрастом.",
            incorrectFeedback: "Remember: My professor + is + age + and + still + activity.",
            incorrectFeedbackRu: "Помните: My professor + is + возраст + and + still + деятельность."
        },
        {
            question: "Form a sentence about your study group:",
            questionRu: "Составьте предложение о вашей учебной группе:",
            words: ["Our", "study", "group", "members", "are", "all", "international", "students"],
            correctAnswer: "Our study group members are all international students.",
            correctFeedback: "Perfect! This describes the composition of your study group.",
            correctFeedbackRu: "Идеально! Это описывает состав вашей учебной группы.",
            incorrectFeedback: "Use: Our study group members + are + all + type of students.",
            incorrectFeedbackRu: "Используйте: Our study group members + are + all + тип студентов."
        },
        {
            question: "Create a sentence about your supervisor and origin:",
            questionRu: "Составьте предложение о вашем руководителе и происхождении:",
            words: ["My", "supervisor", "is", "from", "Germany", "and", "very", "organized"],
            correctAnswer: "My supervisor is from Germany and very organized.",
            correctFeedback: "Great! This combines origin with work characteristics.",
            correctFeedbackRu: "Отлично! Это сочетает происхождение с рабочими характеристиками.",
            incorrectFeedback: "Follow: My supervisor + is + from + country + and + very + adjective.",
            incorrectFeedbackRu: "Следуйте: My supervisor + is + from + страна + and + very + прилагательное."
        },
        {
            question: "Form a sentence about your department:",
            questionRu: "Составьте предложение о вашем отделе:",
            words: ["The", "people", "in", "my", "department", "are", "mostly", "young", "professionals"],
            correctAnswer: "The people in my department are mostly young professionals.",
            correctFeedback: "Excellent! This describes the age and professional status of your colleagues.",
            correctFeedbackRu: "Отлично! Это описывает возраст и профессиональный статус ваших коллег.",
            incorrectFeedback: "Remember: The people in my department + are + mostly + description.",
            incorrectFeedbackRu: "Помните: The people in my department + are + mostly + описание."
        },
        {
            question: "Create a sentence about your client:",
            questionRu: "Составьте предложение о вашем клиенте:",
            words: ["Our", "main", "client", "is", "Japanese", "and", "very", "punctual"],
            correctAnswer: "Our main client is Japanese and very punctual.",
            correctFeedback: "Perfect! This links nationality with business characteristics.",
            correctFeedbackRu: "Идеально! Это связывает национальность с деловыми характеристиками.",
            incorrectFeedback: "Use: Our main client + is + nationality + and + very + adjective.",
            incorrectFeedbackRu: "Используйте: Our main client + is + национальность + and + very + прилагательное."
        },
        {
            question: "Form a sentence about your team:",
            questionRu: "Составьте предложение о вашей команде:",
            words: ["Our", "team", "is", "small", "but", "very", "efficient"],
            correctAnswer: "Our team is small but very efficient.",
            correctFeedback: "Great! This contrasts size with performance quality.",
            correctFeedbackRu: "Отлично! Это противопоставляет размер с качеством работы.",
            incorrectFeedback: "Follow: Our team + is + size + but + very + adjective.",
            incorrectFeedbackRu: "Следуйте: Our team + is + размер + but + very + прилагательное."
        },
        {
            question: "Create a sentence about your workplace diversity:",
            questionRu: "Составьте предложение о разнообразии на вашем рабочем месте:",
            words: ["We", "are", "all", "from", "different", "cultural", "backgrounds"],
            correctAnswer: "We are all from different cultural backgrounds.",
            correctFeedback: "Excellent! This emphasizes workplace cultural diversity.",
            correctFeedbackRu: "Отлично! Это подчеркивает культурное разнообразие на рабочем месте.",
            incorrectFeedback: "Remember: We + are + all + from + different cultural backgrounds.",
            incorrectFeedbackRu: "Помните: We + are + all + from + different cultural backgrounds."
        }
    ]
};

/* ============================================
Page 7: Age ranges and life stages
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page7'] = {
    title: "'To Be' with ages and nationalities - Age ranges and life stages",
    sentenceBuilding: [
        {
            question: "Form a sentence about being in your twenties:",
            questionRu: "Составьте предложение о том, что вам двадцать с чем-то лет:",
            words: ["I", "am", "in", "my", "mid-twenties"],
            correctAnswer: "I am in my mid-twenties.",
            correctFeedback: "Excellent! 'I am in my mid-twenties' describes your age range perfectly.",
            correctFeedbackRu: "Отлично! 'I am in my mid-twenties' отлично описывает ваш возрастной диапазон.",
            incorrectFeedback: "Remember: I + am + in my + age range.",
            incorrectFeedbackRu: "Помните: I + am + in my + возрастной диапазон."
        },
        {
            question: "Create a sentence about someone being young:",
            questionRu: "Составьте предложение о том, что кто-то молод:",
            words: ["She", "is", "too", "young", "to", "drive"],
            correctAnswer: "She is too young to drive.",
            correctFeedback: "Perfect! This connects age with capability restrictions.",
            correctFeedbackRu: "Идеально! Это связывает возраст с ограничениями способностей.",
            incorrectFeedback: "Use: She + is + too young + to + activity.",
            incorrectFeedbackRu: "Используйте: She + is + too young + to + деятельность."
        },
        {
            question: "Form a sentence about elderly people:",
            questionRu: "Составьте предложение о пожилых людях:",
            words: ["My", "grandparents", "are", "in", "their", "eighties"],
            correctAnswer: "My grandparents are in their eighties.",
            correctFeedback: "Great! This describes elderly people using decade references.",
            correctFeedbackRu: "Отлично! Это описывает пожилых людей, используя ссылки на десятилетия.",
            incorrectFeedback: "Follow: My grandparents + are + in their + decade.",
            incorrectFeedbackRu: "Следуйте: My grandparents + are + in their + десятилетие."
        },
        {
            question: "Create a sentence about being old enough:",
            questionRu: "Составьте предложение о том, что достаточно взрослый:",
            words: ["He", "is", "old", "enough", "to", "vote"],
            correctAnswer: "He is old enough to vote.",
            correctFeedback: "Excellent! This shows age-related rights and responsibilities.",
            correctFeedbackRu: "Отлично! Это показывает права и обязанности, связанные с возрастом.",
            incorrectFeedback: "Remember: He + is + old enough + to + activity.",
            incorrectFeedbackRu: "Помните: He + is + old enough + to + деятельность."
        },
        {
            question: "Form a sentence about approximate age:",
            questionRu: "Составьте предложение о приблизительном возрасте:",
            words: ["She", "is", "around", "50", "years", "old"],
            correctAnswer: "She is around 50 years old.",
            correctFeedback: "Perfect! 'Around' shows you're giving an approximate age.",
            correctFeedbackRu: "Идеально! 'Around' показывает, что вы даете приблизительный возраст.",
            incorrectFeedback: "Use: She + is + around + age + years old.",
            incorrectFeedbackRu: "Используйте: She + is + around + возраст + years old."
        },
        {
            question: "Create a sentence about being the same age:",
            questionRu: "Составьте предложение об одинаковом возрасте:",
            words: ["We", "are", "the", "same", "age"],
            correctAnswer: "We are the same age.",
            correctFeedback: "Great! This compares ages showing they are equal.",
            correctFeedbackRu: "Отлично! Это сравнивает возраста, показывая, что они равны.",
            incorrectFeedback: "Follow: We + are + the same age.",
            incorrectFeedbackRu: "Следуйте: We + are + the same age."
        },
        {
            question: "Form a sentence about being middle-aged:",
            questionRu: "Составьте предложение о среднем возрасте:",
            words: ["My", "parents", "are", "middle-aged", "but", "very", "active"],
            correctAnswer: "My parents are middle-aged but very active.",
            correctFeedback: "Excellent! This contrasts age category with energy level.",
            correctFeedbackRu: "Отлично! Это противопоставляет возрастную категорию с уровнем энергии.",
            incorrectFeedback: "Remember: My parents + are + age category + but + very + adjective.",
            incorrectFeedbackRu: "Помните: My parents + are + возрастная категория + but + very + прилагательное."
        },
        {
            question: "Create a sentence about age difference:",
            questionRu: "Составьте предложение о разнице в возрасте:",
            words: ["I", "am", "three", "years", "younger", "than", "him"],
            correctAnswer: "I am three years younger than him.",
            correctFeedback: "Perfect! This gives a specific age difference comparison.",
            correctFeedbackRu: "Идеально! Это дает конкретное сравнение разности возрастов.",
            incorrectFeedback: "Use: I + am + number + years + younger/older + than + person.",
            incorrectFeedbackRu: "Используйте: I + am + число + years + younger/older + than + человек."
        },
        {
            question: "Form a sentence about retirement age:",
            questionRu: "Составьте предложение о пенсионном возрасте:",
            words: ["He", "is", "close", "to", "retirement", "age"],
            correctAnswer: "He is close to retirement age.",
            correctFeedback: "Great! This describes approaching a life milestone.",
            correctFeedbackRu: "Отлично! Это описывает приближение к жизненной вехе.",
            incorrectFeedback: "Follow: He + is + close to + life stage.",
            incorrectFeedbackRu: "Следуйте: He + is + close to + жизненный этап."
        },
        {
            question: "Create a sentence about teenage years:",
            questionRu: "Составьте предложение о подростковых годах:",
            words: ["They", "are", "both", "still", "in", "their", "teens"],
            correctAnswer: "They are both still in their teens.",
            correctFeedback: "Excellent! This describes the teenage life stage for multiple people.",
            correctFeedbackRu: "Отлично! Это описывает подростковый этап жизни для нескольких людей.",
            incorrectFeedback: "Remember: They + are + both + still + in their teens.",
            incorrectFeedbackRu: "Помните: They + are + both + still + in their teens."
        }
    ]
};

/* ============================================
Page 8: Cultural backgrounds and mixed heritage
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page8'] = {
    title: "'To Be' with ages and nationalities - Cultural backgrounds",
    sentenceBuilding: [
        {
            question: "Form a sentence about mixed heritage:",
            questionRu: "Составьте предложение о смешанном происхождении:",
            words: ["I", "am", "half", "Chinese", "and", "half", "British"],
            correctAnswer: "I am half Chinese and half British.",
            correctFeedback: "Excellent! This describes dual heritage perfectly.",
            correctFeedbackRu: "Отлично! Это прекрасно описывает двойное происхождение.",
            incorrectFeedback: "Remember: I + am + half + nationality + and + half + nationality.",
            incorrectFeedbackRu: "Помните: I + am + half + национальность + and + half + национальность."
        },
        {
            question: "Create a sentence about original nationality:",
            questionRu: "Составьте предложение об изначальной национальности:",
            words: ["She", "is", "originally", "from", "Vietnam", "but", "now", "American"],
            correctAnswer: "She is originally from Vietnam but now American.",
            correctFeedback: "Perfect! This shows nationality change over time.",
            correctFeedbackRu: "Идеально! Это показывает изменение национальности со временем.",
            incorrectFeedback: "Use: She + is + originally from + country + but now + nationality.",
            incorrectFeedbackRu: "Используйте: She + is + originally from + страна + but now + национальность."
        },
        {
            question: "Form a sentence about cultural identity:",
            questionRu: "Составьте предложение о культурной идентичности:",
            words: ["We", "are", "culturally", "diverse", "but", "united"],
            correctAnswer: "We are culturally diverse but united.",
            correctFeedback: "Great! This contrasts diversity with unity.",
            correctFeedbackRu: "Отлично! Это противопоставляет разнообразие с единством.",
            incorrectFeedback: "Follow: We + are + culturally + adjective + but + adjective.",
            incorrectFeedbackRu: "Следуйте: We + are + culturally + прилагательное + but + прилагательное."
        },
        {
            question: "Create a sentence about being multicultural:",
            questionRu: "Составьте предложение о мультикультурности:",
            words: ["My", "family", "is", "very", "multicultural", "and", "international"],
            correctAnswer: "My family is very multicultural and international.",
            correctFeedback: "Excellent! This emphasizes cultural diversity within family.",
            correctFeedbackRu: "Отлично! Это подчеркивает культурное разнообразие в семье.",
            incorrectFeedback: "Remember: My family + is + very + adjective + and + adjective.",
            incorrectFeedbackRu: "Помните: My family + is + very + прилагательное + and + прилагательное."
        },
        {
            question: "Form a sentence about ethnic background:",
            questionRu: "Составьте предложение об этническом происхождении:",
            words: ["He", "is", "ethnically", "Korean", "but", "born", "in", "Australia"],
            correctAnswer: "He is ethnically Korean but born in Australia.",
            correctFeedback: "Perfect! This distinguishes ethnic heritage from birthplace.",
            correctFeedbackRu: "Идеально! Это различает этническое происхождение от места рождения.",
            incorrectFeedback: "Use: He + is + ethnically + nationality + but + born in + country.",
            incorrectFeedbackRu: "Используйте: He + is + ethnically + национальность + but + born in + страна."
        },
        {
            question: "Create a sentence about language heritage:",
            questionRu: "Составьте предложение о языковом наследии:",
            words: ["She", "is", "bilingual", "and", "proud", "of", "both", "cultures"],
            correctAnswer: "She is bilingual and proud of both cultures.",
            correctFeedback: "Great! This connects language ability with cultural pride.",
            correctFeedbackRu: "Отлично! Это связывает языковые способности с культурной гордостью.",
            incorrectFeedback: "Follow: She + is + language ability + and + proud of + cultures.",
            incorrectFeedbackRu: "Следуйте: She + is + языковая способность + and + proud of + культуры."
        },
        {
            question: "Form a sentence about citizenship:",
            questionRu: "Составьте предложение о гражданстве:",
            words: ["I", "am", "a", "dual", "citizen", "of", "Canada", "and", "Ireland"],
            correctAnswer: "I am a dual citizen of Canada and Ireland.",
            correctFeedback: "Excellent! This describes legal nationality status.",
            correctFeedbackRu: "Отлично! Это описывает правовой статус гражданства.",
            incorrectFeedback: "Remember: I + am + a dual citizen + of + country + and + country.",
            incorrectFeedbackRu: "Помните: I + am + a dual citizen + of + страна + and + страна."
        },
        {
            question: "Create a sentence about international background:",
            questionRu: "Составьте предложение о международном происхождении:",
            words: ["Our", "children", "are", "truly", "global", "citizens"],
            correctAnswer: "Our children are truly global citizens.",
            correctFeedback: "Perfect! This describes modern international identity.",
            correctFeedbackRu: "Идеально! Это описывает современную международную идентичность.",
            incorrectFeedback: "Use: Our children + are + truly + type of citizens.",
            incorrectFeedbackRu: "Используйте: Our children + are + truly + тип граждан."
        },
        {
            question: "Form a sentence about cultural connection:",
            questionRu: "Составьте предложение о культурной связи:",
            words: ["We", "are", "still", "connected", "to", "our", "roots"],
            correctAnswer: "We are still connected to our roots.",
            correctFeedback: "Great! This shows maintaining cultural heritage.",
            correctFeedbackRu: "Отлично! Это показывает сохранение культурного наследия.",
            incorrectFeedback: "Follow: We + are + still + connected to + our roots.",
            incorrectFeedbackRu: "Следуйте: We + are + still + connected to + our roots."
        },
        {
            question: "Create a sentence about immigration background:",
            questionRu: "Составьте предложение об иммиграционном происхождении:",
            words: ["My", "parents", "are", "first-generation", "immigrants", "from", "Pakistan"],
            correctAnswer: "My parents are first-generation immigrants from Pakistan.",
            correctFeedback: "Excellent! This describes immigration generation and origin.",
            correctFeedbackRu: "Отлично! Это описывает поколение иммигрантов и происхождение.",
            incorrectFeedback: "Remember: My parents + are + generation + immigrants + from + country.",
            incorrectFeedbackRu: "Помните: My parents + are + поколение + immigrants + from + страна."
        }
    ]
};

/* ============================================
Page 9: Complex descriptions and social contexts
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page9'] = {
    title: "'To Be' with ages and nationalities - Complex descriptions",
    sentenceBuilding: [
        {
            question: "Form a sentence about generation differences:",
            questionRu: "Составьте предложение о различиях поколений:",
            words: ["We", "are", "from", "different", "generations", "but", "understand", "each", "other"],
            correctAnswer: "We are from different generations but understand each other.",
            correctFeedback: "Excellent! This bridges generational gaps with understanding.",
            correctFeedbackRu: "Отлично! Это преодолевает разрыв поколений через понимание.",
            incorrectFeedback: "Remember: We + are + from different generations + but + understand each other.",
            incorrectFeedbackRu: "Помните: We + are + from different generations + but + understand each other."
        },
        {
            question: "Create a sentence about age and wisdom:",
            questionRu: "Составьте предложение о возрасте и мудрости:",
            words: ["He", "is", "young", "but", "very", "wise", "for", "his", "age"],
            correctAnswer: "He is young but very wise for his age.",
            correctFeedback: "Perfect! This contrasts chronological age with maturity.",
            correctFeedbackRu: "Идеально! Это противопоставляет хронологический возраст с зрелостью.",
            incorrectFeedback: "Use: He + is + young + but + very wise + for his age.",
            incorrectFeedbackRu: "Используйте: He + is + young + but + very wise + for his age."
        },
        {
            question: "Form a sentence about community diversity:",
            questionRu: "Составьте предложение о разнообразии сообщества:",
            words: ["Our", "neighborhood", "is", "home", "to", "people", "from", "many", "nations"],
            correctAnswer: "Our neighborhood is home to people from many nations.",
            correctFeedback: "Great! This describes multicultural community composition.",
            correctFeedbackRu: "Отлично! Это описывает состав мультикультурного сообщества.",
            incorrectFeedback: "Follow: Our neighborhood + is + home to + people from many nations.",
            incorrectFeedbackRu: "Следуйте: Our neighborhood + is + home to + people from many nations."
        },
        {
            question: "Create a sentence about age and technology:",
            questionRu: "Составьте предложение о возрасте и технологиях:",
            words: ["She", "is", "70", "but", "very", "good", "with", "technology"],
            correctAnswer: "She is 70 but very good with technology.",
            correctFeedback: "Excellent! This challenges age stereotypes about technology.",
            correctFeedbackRu: "Отлично! Это бросает вызов возрастным стереотипам о технологиях.",
            incorrectFeedback: "Remember: She + is + age + but + very good with + skill.",
            incorrectFeedbackRu: "Помните: She + is + возраст + but + very good with + навык."
        },
        {
            question: "Form a sentence about educational background:",
            questionRu: "Составьте предложение об образовательном происхождении:",
            words: ["The", "students", "are", "from", "different", "educational", "systems"],
            correctAnswer: "The students are from different educational systems.",
            correctFeedback: "Perfect! This describes educational diversity in a group.",
            correctFeedbackRu: "Идеально! Это описывает образовательное разнообразие в группе.",
            incorrectFeedback: "Use: The students + are + from + different educational systems.",
            incorrectFeedbackRu: "Используйте: The students + are + from + different educational systems."
        },
        {
            question: "Create a sentence about age and career:",
            questionRu: "Составьте предложение о возрасте и карьере:",
            words: ["I", "am", "35", "and", "starting", "a", "new", "career"],
            correctAnswer: "I am 35 and starting a new career.",
            correctFeedback: "Great! This shows career changes are possible at any age.",
            correctFeedbackRu: "Отлично! Это показывает, что смена карьеры возможна в любом возрасте.",
            incorrectFeedback: "Follow: I + am + age + and + starting + new activity.",
            incorrectFeedbackRu: "Следуйте: I + am + возраст + and + starting + новая деятельность."
        },
        {
            question: "Form a sentence about social inclusion:",
            questionRu: "Составьте предложение о социальной интеграции:",
            words: ["Everyone", "is", "welcome", "here", "regardless", "of", "age", "or", "background"],
            correctAnswer: "Everyone is welcome here regardless of age or background.",
            correctFeedback: "Excellent! This promotes inclusive community values.",
            correctFeedbackRu: "Отлично! Это продвигает инклюзивные ценности сообщества.",
            incorrectFeedback: "Remember: Everyone + is + welcome + regardless of + factors.",
            incorrectFeedbackRu: "Помните: Everyone + is + welcome + regardless of + факторы."
        },
        {
            question: "Create a sentence about cultural adaptation:",
            questionRu: "Составьте предложение о культурной адаптации:",
            words: ["We", "are", "slowly", "adapting", "to", "the", "local", "culture"],
            correctAnswer: "We are slowly adapting to the local culture.",
            correctFeedback: "Perfect! This describes the gradual process of cultural integration.",
            correctFeedbackRu: "Идеально! Это описывает постепенный процесс культурной интеграции.",
            incorrectFeedback: "Use: We + are + slowly + adapting to + the local culture.",
            incorrectFeedbackRu: "Используйте: We + are + slowly + adapting to + the local culture."
        },
        {
            question: "Form a sentence about age and learning:",
            questionRu: "Составьте предложение о возрасте и обучении:",
            words: ["They", "are", "never", "too", "old", "to", "learn", "something", "new"],
            correctAnswer: "They are never too old to learn something new.",
            correctFeedback: "Great! This promotes lifelong learning regardless of age.",
            correctFeedbackRu: "Отлично! Это продвигает обучение на протяжении всей жизни независимо от возраста.",
            incorrectFeedback: "Follow: They + are + never too old + to + learn something new.",
            incorrectFeedbackRu: "Следуйте: They + are + never too old + to + learn something new."
        },
        {
            question: "Create a sentence about global connections:",
            questionRu: "Составьте предложение о глобальных связях:",
            words: ["We", "are", "all", "connected", "in", "this", "global", "world"],
            correctAnswer: "We are all connected in this global world.",
            correctFeedback: "Excellent! This emphasizes global unity and interconnectedness.",
            correctFeedbackRu: "Отлично! Это подчеркивает глобальное единство и взаимосвязанность.",
            incorrectFeedback: "Remember: We + are + all + connected + in this global world.",
            incorrectFeedbackRu: "Помните: We + are + all + connected + in this global world."
        }
    ]
};

/* ============================================
Page 10: Complete introductions and real-life scenarios
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page10'] = {
    title: "'To Be' with ages and nationalities -Real-life scenarios",
    sentenceBuilding: [
        {
            question: "Form a complete self-introduction with all details:",
            questionRu: "Составьте полное самопредставление со всеми деталями:",
            words: ["Hello", "I", "am", "Maria", "I", "am", "28", "and", "I", "am", "from", "Argentina"],
            correctAnswer: "Hello, I am Maria, I am 28 and I am from Argentina.",
            correctFeedback: "Excellent! This is a perfect complete introduction with name, age, and origin.",
            correctFeedbackRu: "Отлично! Это идеальное полное представление с именем, возрастом и происхождением.",
            incorrectFeedback: "Remember: Hello, I am + name, I am + age + and I am from + country.",
            incorrectFeedbackRu: "Помните: Hello, I am + имя, I am + возраст + and I am from + страна."
        },
        {
            question: "Create a sentence introducing someone else completely:",
            questionRu: "Составьте предложение, полностью представляющее кого-то другого:",
            words: ["This", "is", "my", "friend", "Alex", "he", "is", "31", "and", "very", "talented"],
            correctAnswer: "This is my friend Alex, he is 31 and very talented.",
            correctFeedback: "Perfect! This introduces someone with relationship, name, age, and qualities.",
            correctFeedbackRu: "Идеально! Это представляет кого-то с отношением, именем, возрастом и качествами.",
            incorrectFeedback: "Use: This is my + relationship + name, he is + age + and + adjective.",
            incorrectFeedbackRu: "Используйте: This is my + отношение + имя, he is + возраст + and + прилагательное."
        },
        {
            question: "Form a sentence about family diversity:",
            questionRu: "Составьте предложение о семейном разнообразии:",
            words: ["We", "are", "a", "family", "of", "four", "from", "three", "different", "countries"],
            correctAnswer: "We are a family of four from three different countries.",
            correctFeedback: "Great! This describes complex modern family composition.",
            correctFeedbackRu: "Отлично! Это описывает сложный состав современной семьи.",
            incorrectFeedback: "Follow: We + are + a family of + number + from + different countries.",
            incorrectFeedbackRu: "Следуйте: We + are + a family of + число + from + different countries."
        },
        {
            question: "Create a sentence about workplace introduction:",
            questionRu: "Составьте предложение о представлении на рабочем месте:",
            words: ["I", "am", "the", "new", "manager", "and", "I", "am", "excited", "to", "work", "here"],
            correctAnswer: "I am the new manager and I am excited to work here.",
            correctFeedback: "Excellent! This combines professional role with personal feelings.",
            correctFeedbackRu: "Отлично! Это сочетает профессиональную роль с личными чувствами.",
            incorrectFeedback: "Remember: I am + the + position + and I am + feeling + to + activity.",
            incorrectFeedbackRu: "Помните: I am + the + должность + and I am + чувство + to + деятельность."
        },
        {
            question: "Form a sentence about international friendship:",
            questionRu: "Составьте предложение о международной дружбе:",
            words: ["My", "best", "friends", "are", "from", "five", "different", "continents"],
            correctAnswer: "My best friends are from five different continents.",
            correctFeedback: "Perfect! This shows global connections and friendships.",
            correctFeedbackRu: "Идеально! Это показывает глобальные связи и дружбу.",
            incorrectFeedback: "Use: My best friends + are + from + number + different continents.",
            incorrectFeedbackRu: "Используйте: My best friends + are + from + число + different continents."
        },
        {
            question: "Create a sentence about age and aspirations:",
            questionRu: "Составьте предложение о возрасте и стремлениях:",
            words: ["At", "22", "I", "am", "ready", "to", "change", "the", "world"],
            correctAnswer: "At 22, I am ready to change the world.",
            correctFeedback: "Great! This connects age with ambitious goals.",
            correctFeedbackRu: "Отлично! Это связывает возраст с амбициозными целями.",
            incorrectFeedback: "Follow: At + age, I am + ready to + goal.",
            incorrectFeedbackRu: "Следуйте: At + возраст, I am + ready to + цель."
        },
        {
            question: "Form a sentence about community belonging:",
            questionRu: "Составьте предложение о принадлежности к сообществу:",
            words: ["We", "are", "proud", "members", "of", "this", "diverse", "community"],
            correctAnswer: "We are proud members of this diverse community.",
            correctFeedback: "Excellent! This expresses community pride and belonging.",
            correctFeedbackRu: "Отлично! Это выражает гордость за сообщество и принадлежность к нему.",
            incorrectFeedback: "Remember: We + are + proud members + of + this + type of community.",
            incorrectFeedbackRu: "Помните: We + are + proud members + of + this + тип сообщества."
        },
        {
            question: "Create a sentence about age and experience:",
            questionRu: "Составьте предложение о возрасте и опыте:",
            words: ["She", "is", "only", "25", "but", "already", "very", "experienced"],
            correctAnswer: "She is only 25 but already very experienced.",
            correctFeedback: "Perfect! This contrasts young age with advanced experience.",
            correctFeedbackRu: "Идеально! Это противопоставляет молодой возраст с богатым опытом.",
            incorrectFeedback: "Use: She + is + only + age + but + already + very + adjective.",
            incorrectFeedbackRu: "Используйте: She + is + only + возраст + but + already + very + прилагательное."
        },
        {
            question: "Form a sentence about universal human connection:",
            questionRu: "Составьте предложение о всеобщей человеческой связи:",
            words: ["Despite", "our", "differences", "we", "are", "all", "human", "beings"],
            correctAnswer: "Despite our differences, we are all human beings.",
            correctFeedback: "Great! This emphasizes unity despite diversity.",
            correctFeedbackRu: "Отлично! Это подчеркивает единство несмотря на разнообразие.",
            incorrectFeedback: "Follow: Despite + our differences, we + are + all + human beings.",
            incorrectFeedbackRu: "Следуйте: Despite + our differences, we + are + all + human beings."
        },
        {
            question: "Create a final sentence celebrating diversity and unity:",
            questionRu: "Составьте финальное предложение, празднующее разнообразие и единство:",
            words: ["Together", "we", "are", "stronger", "regardless", "of", "our", "ages", "or", "origins"],
            correctAnswer: "Together, we are stronger regardless of our ages or origins.",
            correctFeedback: "Excellent! This is a perfect conclusion celebrating unity in diversity. You've completed all 10 pages of Sentence Building exercises!",
            correctFeedbackRu: "Отлично! Это идеальное заключение, празднующее единство в разнообразии. Вы завершили все 10 страниц упражнений Sentence Building!",
            incorrectFeedback: "Remember: Together, we + are + stronger + regardless of + our differences.",
            incorrectFeedbackRu: "Помните: Together, we + are + stronger + regardless of + our differences."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Verb 'to be' Fill in the Gaps exercises data loaded successfully!");