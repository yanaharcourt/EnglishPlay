console.log("===== LOADING AGES AND NATIONALITIES EXERCISES =====");
/* =============================================================================== */
/* =========================Multiple Choice Exercises============================= */

// Initialize grammar exercises object if it doesn't exist
window.grammarExercises = window.grammarExercises || {};

// Initialize topic hierarchy
window.grammarExercises['to-be'] = window.grammarExercises['to-be'] || {};

/* ============================================
Page 1: Basic age expressions
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page1'] = {
    // Multiple Choice exercises only
    multipleChoice: [
        {
            question: "Choose the correct form of the verb 'to be' for age:",
            questionRu: "Выберите правильную форму глагола 'to be' для возраста:",
            sentence: "I ___ 25 years old.",
            options: [
                "am", // Correct answer first
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'am' with 'I' when talking about age.",
            correctFeedbackRu: "Правильно! Мы используем 'am' с 'I' когда говорим о возрасте.",
            incorrectFeedback: "Incorrect. With 'I', we use 'am' for expressing age.",
            incorrectFeedbackRu: "Неправильно. С 'I' мы используем 'am' для выражения возраста."
        },
        {
            question: "Select the correct sentence about age:",
            questionRu: "Выберите правильное предложение о возрасте:",
            options: [
                "She is 30 years old.",
                "She am 30 years old.",
                "She are 30 years old.",
                "She be 30 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is 30 years old' is the proper form.",
            correctFeedbackRu: "Правильно! 'She is 30 years old' - это правильная форма.",
            incorrectFeedback: "Incorrect. Remember that we use 'is' with 'she' when talking about age.",
            incorrectFeedbackRu: "Неправильно. Помните, что мы используем 'is' с 'she' когда говорим о возрасте."
        },
        {
            question: "Choose the correct form of 'to be' for the sentence about age:",
            questionRu: "Выберите правильную форму 'to be' для предложения о возрасте:",
            sentence: "They ___ 18 years old.",
            options: [
                "are",
                "am",
                "is",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'are' with plural subjects like 'they' when talking about age.",
            correctFeedbackRu: "Правильно! Мы используем 'are' с подлежащими во множественном числе, как 'they', когда говорим о возрасте.",
            incorrectFeedback: "Incorrect. With plural subjects like 'they', we use 'are' to express age.",
            incorrectFeedbackRu: "Неправильно. С подлежащими во множественном числе, как 'they', мы используем 'are' для выражения возраста."
        },
        {
            question: "Which of these sentences about age is correct?",
            questionRu: "Какое из этих предложений о возрасте правильное?",
            options: [
                "He is 40 years old.",
                "He are 40 years old.",
                "He am 40 years old.",
                "He be 40 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'He is 40 years old' is the proper form.",
            correctFeedbackRu: "Правильно! 'He is 40 years old' - это правильная форма.",
            incorrectFeedback: "Incorrect. Remember to use 'is' with third person singular (he) when talking about age.",
            incorrectFeedbackRu: "Неправильно. Помните, что нужно использовать 'is' с третьим лицом единственного числа (he) когда говорим о возрасте."
        },
        {
            question: "Choose the sentence with the correct form of 'to be' for age:",
            questionRu: "Выберите предложение с правильной формой глагола 'to be' для возраста:",
            options: [
                "The child is 5 years old.",
                "The child am 5 years old.",
                "The child are 5 years old.",
                "The child be 5 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'is' with singular nouns like 'the child' when expressing age.",
            correctFeedbackRu: "Правильно! Мы используем 'is' с существительными в единственном числе, такими как 'the child', при выражении возраста.",
            incorrectFeedback: "Incorrect. 'The child' is a singular noun and takes 'is' when talking about age.",
            incorrectFeedbackRu: "Неправильно. 'The child' - это существительное в единственном числе, которое требует 'is' при разговоре о возрасте."
        },
        {
            question: "Select the correct age expression:",
            questionRu: "Выберите правильное выражение возраста:",
            options: [
                "You are twenty-two years old.",
                "You am twenty-two years old.",
                "You is twenty-two years old.",
                "You be twenty-two years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'You are twenty-two years old' is the proper form.",
            correctFeedbackRu: "Правильно! 'You are twenty-two years old' - это правильная форма.",
            incorrectFeedback: "Incorrect. The correct form is 'You are' when expressing age.",
            incorrectFeedbackRu: "Неправильно. Правильная форма - 'You are' при выражении возраста."
        },
        {
            question: "Which sentence uses the correct form of 'to be' for age?",
            questionRu: "В каком предложении используется правильная форма 'to be' для возраста?",
            options: [
                "We are in our thirties.",
                "We am in our thirties.",
                "We is in our thirties.",
                "We be in our thirties."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'are' with the subject 'we' when talking about age.",
            correctFeedbackRu: "Правильно! Мы используем 'are' с подлежащим 'we' когда говорим о возрасте.",
            incorrectFeedback: "Incorrect. With 'we', you need to use 'are' when expressing age.",
            incorrectFeedbackRu: "Неправильно. С 'we' вам нужно использовать 'are' при выражении возраста."
        },
        {
            question: "Choose the correct form for an age question:",
            questionRu: "Выберите правильную форму для вопроса о возрасте:",
            sentence: "___ you fifteen years old?",
            options: [
                "Are",
                "Am",
                "Is",
                "Be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'Are' with 'you' in questions about age.",
            correctFeedbackRu: "Правильно! Мы используем 'Are' с 'you' в вопросах о возрасте.",
            incorrectFeedback: "Incorrect. The correct form for 'you' is 'Are you fifteen years old?'",
            incorrectFeedbackRu: "Неправильно. Правильная форма для 'you' - это 'Are you fifteen years old?'"
        },
        {
            question: "Select the correct sentence about age:",
            questionRu: "Выберите правильное предложение о возрасте:",
            options: [
                "My parents are fifty years old.",
                "My parents is fifty years old.",
                "My parents am fifty years old.",
                "My parents be fifty years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Parents' is plural so we use 'are' when expressing age.",
            correctFeedbackRu: "Правильно! 'Parents' - множественное число, поэтому мы используем 'are' при выражении возраста.",
            incorrectFeedback: "Incorrect. 'Parents' is plural, so we need to use 'are' when talking about age.",
            incorrectFeedbackRu: "Неправильно. 'Parents' - множественное число, поэтому нам нужно использовать 'are' при разговоре о возрасте."
        },
        {
            question: "Choose the correct form of 'to be' for the age expression:",
            questionRu: "Выберите правильную форму 'to be' для выражения возраста:",
            sentence: "I ___ almost thirty years old.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With 'I', we use 'am' in age expressions.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' в выражениях возраста.",
            incorrectFeedback: "Incorrect. With 'I', we use 'am' when talking about age.",
            incorrectFeedbackRu: "Неправильно. С 'I' мы используем 'am' когда говорим о возрасте."
        }
    ]
};

/* ============================================
Page 2: Using "to be" with nationalities
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page2'] = {
    multipleChoice: [
        {
            question: "Choose the correct form of 'to be':",
            questionRu: "Выберите правильную форму глагола 'to be':",
            sentence: "I ___ American.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With 'I', we use 'am' when talking about nationality.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' когда говорим о национальности.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' when expressing nationality.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' при выражении национальности."
        },
        {
            question: "Select the correct sentence about nationality:",
            questionRu: "Выберите правильное предложение о национальности:",
            options: [
                "She is French.",
                "She am French.",
                "She are French.",
                "She be French."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is French' is the proper form for expressing nationality.",
            correctFeedbackRu: "Правильно! 'She is French' - это правильная форма для выражения национальности.",
            incorrectFeedback: "Incorrect. Remember that we use 'is' with 'she' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. Помните, что мы используем 'is' с 'she' когда говорим о национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ___ Spanish.",
            options: [
                "are",
                "am",
                "is",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'are' with plural subjects like 'they' when talking about nationality.",
            correctFeedbackRu: "Правильно! Мы используем 'are' с подлежащими во множественном числе, такими как 'they', когда говорим о национальности.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' when expressing nationality.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' при выражении национальности."
        },
        {
            question: "Which sentence is correct?",
            questionRu: "Какое предложение правильное?",
            options: [
                "He is Japanese.",
                "He are Japanese.",
                "He am Japanese.",
                "He be Japanese."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'He is Japanese' is the proper form for expressing nationality.",
            correctFeedbackRu: "Правильно! 'He is Japanese' - это правильная форма для выражения национальности.",
            incorrectFeedback: "Incorrect. Remember to use 'is' with 'he' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. Помните, что нужно использовать 'is' с 'he' когда говорим о национальности."
        },
        {
            question: "Choose the sentence with the correct form of 'to be':",
            questionRu: "Выберите предложение с правильной формой глагола 'to be':",
            options: [
                "The students are Chinese.",
                "The students am Chinese.",
                "The students is Chinese.",
                "The students be Chinese."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'are' with plural nouns like 'students' when expressing nationality.",
            correctFeedbackRu: "Правильно! Мы используем 'are' с существительными во множественном числе, такими как 'students', при выражении национальности.",
            incorrectFeedback: "Incorrect. 'The students' is plural and takes 'are' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. 'The students' - множественное число и требует 'are' при разговоре о национальности."
        },
        {
            question: "Select the correct nationality statement:",
            questionRu: "Выберите правильное утверждение о национальности:",
            options: [
                "You are German.",
                "You am German.",
                "You is German.",
                "You be German."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'You are German' is the proper form for expressing nationality.",
            correctFeedbackRu: "Правильно! 'You are German' - это правильная форма для выражения национальности.",
            incorrectFeedback: "Incorrect. The correct form is 'You are' when expressing nationality.",
            incorrectFeedbackRu: "Неправильно. Правильная форма - 'You are' при выражении национальности."
        },
        {
            question: "Which sentence uses the correct form of 'to be'?",
            questionRu: "В каком предложении используется правильная форма 'to be'?",
            options: [
                "We are Italian.",
                "We am Italian.",
                "We is Italian.",
                "We be Italian."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'are' with the subject 'we' when talking about nationality.",
            correctFeedbackRu: "Правильно! Мы используем 'are' с подлежащим 'we' когда говорим о национальности.",
            incorrectFeedback: "Incorrect. With 'we', you need to use 'are' when expressing nationality.",
            incorrectFeedbackRu: "Неправильно. С 'we' вам нужно использовать 'are' при выражении национальности."
        },
        {
            question: "Choose the correct form for a nationality question:",
            questionRu: "Выберите правильную форму для вопроса о национальности:",
            sentence: "___ she Brazilian?",
            options: [
                "Is",
                "Am",
                "Are",
                "Be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'Is' with 'she' in questions about nationality.",
            correctFeedbackRu: "Правильно! Мы используем 'Is' с 'she' в вопросах о национальности.",
            incorrectFeedback: "Incorrect. The correct form for 'she' is 'Is she Brazilian?'",
            incorrectFeedbackRu: "Неправильно. Правильная форма для 'she' - это 'Is she Brazilian?'"
        },
        {
            question: "Select the correct sentence about nationality:",
            questionRu: "Выберите правильное предложение о национальности:",
            options: [
                "My friends are Russian.",
                "My friends is Russian.",
                "My friends am Russian.",
                "My friends be Russian."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Friends' is plural so we use 'are' when expressing nationality.",
            correctFeedbackRu: "Правильно! 'Friends' - множественное число, поэтому мы используем 'are' при выражении национальности.",
            incorrectFeedback: "Incorrect. 'Friends' is plural, so we need to use 'are' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. 'Friends' - множественное число, поэтому нам нужно использовать 'are' при разговоре о национальности."
        },
        {
            question: "Choose the correct form of 'to be' for the nationality expression:",
            questionRu: "Выберите правильную форму 'to be' для выражения национальности:",
            sentence: "I ___ Canadian.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With 'I', we use 'am' in nationality expressions.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' в выражениях национальности.",
            incorrectFeedback: "Incorrect. With 'I', we use 'am' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С 'I' мы используем 'am' когда говорим о национальности."
        }
    ]
};

/* ============================================
Page 3: Using "to be" with both age and nationality
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page3'] = {
    multipleChoice: [
        {
            question: "Choose the correct form of 'to be':",
            questionRu: "Выберите правильную форму глагола 'to be':",
            sentence: "I ___ 32 years old and I ___ Australian.",
            options: [
                "am, am",
                "is, am",
                "am, is",
                "are, am"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With 'I', we use 'am' for both age and nationality.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' и для возраста, и для национальности.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for both age and nationality.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' и для возраста, и для национальности."
        },
        {
            question: "Select the correct sentence combining age and nationality:",
            questionRu: "Выберите правильное предложение, сочетающее возраст и национальность:",
            options: [
                "She is 25 years old and she is Mexican.",
                "She am 25 years old and she am Mexican.",
                "She are 25 years old and she are Mexican.",
                "She is 25 years old and she am Mexican."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is' is used for both age and nationality.",
            correctFeedbackRu: "Правильно! 'She is' используется и для возраста, и для национальности.",
            incorrectFeedback: "Incorrect. Remember that we use 'is' with 'she' for both age and nationality.",
            incorrectFeedbackRu: "Неправильно. Помните, что мы используем 'is' с 'she' и для возраста, и для национальности."
        },
        {
            question: "Complete the sentence with the correct forms of 'to be':",
            questionRu: "Заполните предложение правильными формами глагола 'to be':",
            sentence: "They ___ 40 years old and they ___ British.",
            options: [
                "are, are",
                "am, are",
                "is, are",
                "are, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With 'they', we use 'are' for both age and nationality.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' и для возраста, и для национальности.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' for both age and nationality.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' и для возраста, и для национальности."
        },
        {
            question: "Which sentence is correct?",
            questionRu: "Какое предложение правильное?",
            options: [
                "He is Indian and he is 28 years old.",
                "He are Indian and he are 28 years old.",
                "He am Indian and he am 28 years old.",
                "He is Indian and he are 28 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'He is' is used for both nationality and age.",
            correctFeedbackRu: "Правильно! 'He is' используется и для национальности, и для возраста.",
            incorrectFeedback: "Incorrect. Remember to use 'is' with 'he' for both nationality and age.",
            incorrectFeedbackRu: "Неправильно. Помните, что нужно использовать 'is' с 'he' и для национальности, и для возраста."
        },
        {
            question: "Choose the sentence with the correct forms of 'to be':",
            questionRu: "Выберите предложение с правильными формами глагола 'to be':",
            options: [
                "The children are Korean and they are 10 years old.",
                "The children is Korean and they is 10 years old.",
                "The children are Korean and they is 10 years old.",
                "The children is Korean and they are 10 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'are' with plural nouns like 'children' for both nationality and age.",
            correctFeedbackRu: "Правильно! Мы используем 'are' с существительными во множественном числе, такими как 'children', и для национальности, и для возраста.",
            incorrectFeedback: "Incorrect. 'The children' is plural and takes 'are' for both nationality and age.",
            incorrectFeedbackRu: "Неправильно. 'The children' - множественное число и требует 'are' и для национальности, и для возраста."
        },
        {
            question: "Select the correct combined statement:",
            questionRu: "Выберите правильное комбинированное утверждение:",
            options: [
                "You are American and you are 19 years old.",
                "You am American and you am 19 years old.",
                "You is American and you is 19 years old.",
                "You are American and you is 19 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'You are' is the proper form for both nationality and age.",
            correctFeedbackRu: "Правильно! 'You are' - это правильная форма и для национальности, и для возраста.",
            incorrectFeedback: "Incorrect. The correct form is 'You are' for both nationality and age.",
            incorrectFeedbackRu: "Неправильно. Правильная форма - 'You are' и для национальности, и для возраста."
        },
        {
            question: "Which sentence uses the correct forms of 'to be'?",
            questionRu: "В каком предложении используются правильные формы 'to be'?",
            options: [
                "We are Polish and we are in our twenties.",
                "We am Polish and we am in our twenties.",
                "We is Polish and we is in our twenties.",
                "We are Polish and we is in our twenties."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'are' with the subject 'we' for both nationality and age.",
            correctFeedbackRu: "Правильно! Мы используем 'are' с подлежащим 'we' и для национальности, и для возраста.",
            incorrectFeedback: "Incorrect. With 'we', you need to use 'are' for both nationality and age.",
            incorrectFeedbackRu: "Неправильно. С 'we' вам нужно использовать 'are' и для национальности, и для возраста."
        },
        {
            question: "Choose the correct form for a combined question:",
            questionRu: "Выберите правильную форму для комбинированного вопроса:",
            sentence: "___ she Brazilian and ___ she 35 years old?",
            options: [
                "Is, is",
                "Am, am",
                "Are, are",
                "Is, are"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'Is' with 'she' in questions about both nationality and age.",
            correctFeedbackRu: "Правильно! Мы используем 'Is' с 'she' в вопросах и о национальности, и о возрасте.",
            incorrectFeedback: "Incorrect. The correct form for 'she' is 'Is' for both nationality and age questions.",
            incorrectFeedbackRu: "Неправильно. Правильная форма для 'she' - это 'Is' для вопросов и о национальности, и о возрасте."
        },
        {
            question: "Select the correct sentence combining nationality and age:",
            questionRu: "Выберите правильное предложение, сочетающее национальность и возраст:",
            options: [
                "My parents are German and they are 55 years old.",
                "My parents is German and they is 55 years old.",
                "My parents are German and they is 55 years old.",
                "My parents is German and they are 55 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Parents' is plural so we use 'are' for both nationality and age.",
            correctFeedbackRu: "Правильно! 'Parents' - множественное число, поэтому мы используем 'are' и для национальности, и для возраста.",
            incorrectFeedback: "Incorrect. 'Parents' is plural, so we need to use 'are' for both nationality and age.",
            incorrectFeedbackRu: "Неправильно. 'Parents' - множественное число, поэтому нам нужно использовать 'are' и для национальности, и для возраста."
        },
        {
            question: "Choose the correct form of 'to be' for the combined expression:",
            questionRu: "Выберите правильную форму 'to be' для комбинированного выражения:",
            sentence: "I ___ Chinese and I ___ 22 years old.",
            options: [
                "am, am",
                "is, is",
                "are, are",
                "am, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With 'I', we use 'am' for both nationality and age expressions.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' и для выражений национальности, и для выражений возраста.",
            incorrectFeedback: "Incorrect. With 'I', we use 'am' for both nationality and age.",
            incorrectFeedbackRu: "Неправильно. С 'I' мы используем 'am' и для национальности, и для возраста."
        }
    ]
};

/* ============================================
Page 4: Using "to be" with different age groups
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page4'] = {
    multipleChoice: [
        {
            question: "Choose the correct form of 'to be' for the age expression:",
            questionRu: "Выберите правильную форму глагола 'to be' для выражения возраста:",
            sentence: "My baby brother ___ one year old.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With singular subjects like 'baby brother', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в единственном числе, как 'baby brother', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With singular subjects like 'baby brother', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе, как 'baby brother', нужно использовать 'is'."
        },
        {
            question: "Choose the correct age expression:",
            questionRu: "Выберите правильное выражение возраста:",
            options: [
                "The twins are five years old.",
                "The twins is five years old.",
                "The twins am five years old.",
                "The twins be five years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'The twins are five years old' is the proper form. Use 'are' with plural subjects.",
            correctFeedbackRu: "Правильно! 'The twins are five years old' - это правильная форма. Используйте 'are' с подлежащими во множественном числе.",
            incorrectFeedback: "Incorrect. With plural subjects like 'twins', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими во множественном числе, как 'twins', нужно использовать 'are'."
        },
        {
            question: "Choose the correct sentence about age:",
            questionRu: "Выберите правильное предложение о возрасте:",
            options: [
                "How old are you?",
                "How old is you?",
                "How old am you?",
                "How old you are?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'How old are you?' is the proper form to ask about age.",
            correctFeedbackRu: "Правильно! 'How old are you?' - это правильная форма вопроса о возрасте.",
            incorrectFeedback: "Incorrect. To ask about age, use 'How old are you?'",
            incorrectFeedbackRu: "Неправильно. Чтобы спросить о возрасте, используйте 'How old are you?'"
        },
        {
            question: "Select the correct response to the question 'How old are you?'",
            questionRu: "Выберите правильный ответ на вопрос 'How old are you?'",
            options: [
                "I am twenty-one years old.",
                "I is twenty-one years old.",
                "I are twenty-one years old.",
                "I have twenty-one years."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'I am twenty-one years old' is the proper response.",
            correctFeedbackRu: "Правильно! 'I am twenty-one years old' - это правильный ответ.",
            incorrectFeedback: "Incorrect. The correct response is 'I am twenty-one years old.'",
            incorrectFeedbackRu: "Неправильно. Правильный ответ - 'I am twenty-one years old.'"
        },
        {
            question: "Choose the correct form of 'to be' for the age expression:",
            questionRu: "Выберите правильную форму глагола 'to be' для выражения возраста:",
            sentence: "My grandparents ___ in their seventies.",
            options: [
                "are",
                "am",
                "is",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With plural subjects like 'grandparents', we use 'are'.",
            correctFeedbackRu: "Правильно! С подлежащими во множественном числе, как 'grandparents', мы используем 'are'.",
            incorrectFeedback: "Incorrect. With plural subjects like 'grandparents', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими во множественном числе, как 'grandparents', нужно использовать 'are'."
        },
        {
            question: "Select the correct age expression:",
            questionRu: "Выберите правильное выражение возраста:",
            options: [
                "He is eighteen years old.",
                "He have eighteen years.",
                "He has eighteen years.",
                "He has eighteen years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'He is eighteen years old' is the proper form in English.",
            correctFeedbackRu: "Правильно! 'He is eighteen years old' - это правильная форма в английском языке.",
            incorrectFeedback: "Incorrect. In English, we say 'He is eighteen years old'.",
            incorrectFeedbackRu: "Неправильно. В английском мы говорим 'He is eighteen years old'."
        },
        {
            question: "Choose the correct sentence about age:",
            questionRu: "Выберите правильное предложение о возрасте:",
            options: [
                "The child is too young for this movie.",
                "The child am too young for this movie.",
                "The child are too young for this movie.",
                "The child be too young for this movie."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'The child is too young for this movie' is the proper form.",
            correctFeedbackRu: "Правильно! 'The child is too young for this movie' - это правильная форма.",
            incorrectFeedback: "Incorrect. With singular subjects like 'child', we use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе, как 'child', мы используем 'is'."
        },
        {
            question: "Select the correct question about age:",
            questionRu: "Выберите правильный вопрос о возрасте:",
            options: [
                "How old is your sister?",
                "How old are your sister?",
                "How old am your sister?",
                "How old your sister is?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'How old is your sister?' is the proper form to ask about someone else's age.",
            correctFeedbackRu: "Правильно! 'How old is your sister?' - это правильная форма вопроса о возрасте другого человека.",
            incorrectFeedback: "Incorrect. To ask about someone else's age, use 'How old is your sister?'",
            incorrectFeedbackRu: "Неправильно. Чтобы спросить о возрасте другого человека, используйте 'How old is your sister?'"
        },
        {
            question: "Choose the correct age expression:",
            questionRu: "Выберите правильное выражение возраста:",
            options: [
                "They are the same age.",
                "They is the same age.",
                "They am the same age.",
                "They have the same age."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'They are the same age' is the proper form.",
            correctFeedbackRu: "Правильно! 'They are the same age' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'they', we use 'are' in expressions about age.",
            incorrectFeedbackRu: "Неправильно. С 'they' мы используем 'are' в выражениях о возрасте."
        },
        {
            question: "Select the correct sentence using 'to be' with age:",
            questionRu: "Выберите правильное предложение с использованием 'to be' с возрастом:",
            options: [
                "I am older than my brother.",
                "I is older than my brother.",
                "I are older than my brother.",
                "I have more age than my brother."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'I am older than my brother' is the proper form for age comparison.",
            correctFeedbackRu: "Правильно! 'I am older than my brother' - это правильная форма для сравнения возраста.",
            incorrectFeedback: "Incorrect. For age comparison with 'I', use 'I am older than...'",
            incorrectFeedbackRu: "Неправильно. Для сравнения возраста с 'I' используйте 'I am older than...'"
        }
    ]
};

/* ============================================
Page 5: Using "to be" with nationalities
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page5'] = {
    multipleChoice: [
        {
            question: "Choose the correct form of 'to be' with nationality:",
            questionRu: "Выберите правильную форму глагола 'to be' с национальностью:",
            sentence: "She ___ Italian.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With third person singular subjects like 'she', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в третьем лице единственного числа, как 'she', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Select the correct sentence about nationality:",
            questionRu: "Выберите правильное предложение о национальности:",
            options: [
                "We are Canadian.",
                "We is Canadian.",
                "We am Canadian.",
                "We be Canadian."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'We are Canadian' is the proper form.",
            correctFeedbackRu: "Правильно! 'We are Canadian' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'we', we use 'are' for nationalities.",
            incorrectFeedbackRu: "Неправильно. С 'we' мы используем 'are' для национальностей."
        },
        {
            question: "Choose the correct form of 'to be' with nationality:",
            questionRu: "Выберите правильную форму глагола 'to be' с национальностью:",
            sentence: "They ___ Mexican.",
            options: [
                "are",
                "am",
                "is",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With plural subjects like 'they', we use 'are'.",
            correctFeedbackRu: "Правильно! С подлежащими во множественном числе, как 'they', мы используем 'are'.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Select the correct statement about nationality:",
            questionRu: "Выберите правильное утверждение о национальности:",
            options: [
                "I am Chinese.",
                "I is Chinese.",
                "I are Chinese.",
                "I be Chinese."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'I am Chinese' is the proper form.",
            correctFeedbackRu: "Правильно! 'I am Chinese' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'I', we use 'am' for nationalities.",
            incorrectFeedbackRu: "Неправильно. С 'I' мы используем 'am' для национальностей."
        },
        {
            question: "Choose the correct form of 'to be' with nationalities:",
            questionRu: "Выберите правильную форму глагола 'to be' с национальностями:",
            sentence: "My parents ___ Irish.",
            options: [
                "are",
                "am",
                "is",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With plural subjects like 'parents', we use 'are'.",
            correctFeedbackRu: "Правильно! С подлежащими во множественном числе, как 'parents', мы используем 'are'.",
            incorrectFeedback: "Incorrect. With 'parents', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'parents' нужно использовать 'are'."
        },
        {
            question: "Select the correct sentence about nationality:",
            questionRu: "Выберите правильное предложение о национальности:",
            options: [
                "He is German.",
                "He are German.",
                "He am German.",
                "He have German nationality."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'He is German' is the proper form.",
            correctFeedbackRu: "Правильно! 'He is German' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'he', we use 'is' for nationalities.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы используем 'is' для национальностей."
        },
        {
            question: "Choose the correct question about nationality:",
            questionRu: "Выберите правильный вопрос о национальности:",
            options: [
                "Are they Spanish?",
                "Is they Spanish?",
                "Am they Spanish?",
                "They are Spanish?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are they Spanish?' is the proper form for a question about nationality with 'they'.",
            correctFeedbackRu: "Правильно! 'Are they Spanish?' - это правильная форма вопроса о национальности с 'they'.",
            incorrectFeedback: "Incorrect. For questions with 'they', use 'Are they...?'",
            incorrectFeedbackRu: "Неправильно. Для вопросов с 'they' используйте 'Are they...?'"
        },
        {
            question: "Select the correct negative sentence about nationality:",
            questionRu: "Выберите правильное отрицательное предложение о национальности:",
            options: [
                "She is not Korean.",
                "She am not Korean.",
                "She are not Korean.",
                "She not is Korean."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is not Korean' is the proper negative form.",
            correctFeedbackRu: "Правильно! 'She is not Korean' - это правильная отрицательная форма.",
            incorrectFeedback: "Incorrect. With 'she', we use 'is not' in negatives.",
            incorrectFeedbackRu: "Неправильно. С 'she' мы используем 'is not' в отрицаниях."
        },
        {
            question: "Choose the correct sentence using 'to be' with nationality:",
            questionRu: "Выберите правильное предложение с использованием 'to be' с национальностью:",
            options: [
                "You are Swedish.",
                "You is Swedish.",
                "You am Swedish.",
                "You be Swedish."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'You are Swedish' is the proper form.",
            correctFeedbackRu: "Правильно! 'You are Swedish' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'you', we use 'are' for nationalities.",
            incorrectFeedbackRu: "Неправильно. С 'you' мы используем 'are' для национальностей."
        },
        {
            question: "Select the correct sentence using 'to be' with nationality:",
            questionRu: "Выберите правильное предложение с использованием 'to be' с национальностью:",
            options: [
                "The students are from different countries.",
                "The students is from different countries.",
                "The students am from different countries.",
                "The students be from different countries."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'The students are from different countries' is the proper form.",
            correctFeedbackRu: "Правильно! 'The students are from different countries' - это правильная форма.",
            incorrectFeedback: "Incorrect. With plural subjects like 'students', we use 'are'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими во множественном числе, как 'students', мы используем 'are'."
        }
    ]
};

/* ============================================
Page 6: Using "to be" with both age and nationality
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page6'] = {
    multipleChoice: [
        {
            question: "Choose the correct forms of 'to be':",
            questionRu: "Выберите правильные формы глагола 'to be':",
            sentence: "I ___ 29 years old and I ___ Australian.",
            options: [
                "am, am",
                "is, am",
                "am, is",
                "are, am"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With 'I', we use 'am' for both age and nationality.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' и для возраста, и для национальности.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for both age and nationality.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' и для возраста, и для национальности."
        },
        {
            question: "Select the correct sentence combining age and nationality:",
            questionRu: "Выберите правильное предложение, сочетающее возраст и национальность:",
            options: [
                "She is 30 years old and she is British.",
                "She am 30 years old and she am British.",
                "She are 30 years old and she are British.",
                "She is 30 years old and she am British."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is 30 years old and she is British' is the proper form.",
            correctFeedbackRu: "Правильно! 'She is 30 years old and she is British' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'she', we use 'is' for both age and nationality.",
            incorrectFeedbackRu: "Неправильно. С 'she' мы используем 'is' и для возраста, и для национальности."
        },
        {
            question: "Choose the correct forms of 'to be':",
            questionRu: "Выберите правильные формы глагола 'to be':",
            sentence: "They ___ 25 years old and they ___ Spanish.",
            options: [
                "are, are",
                "am, are",
                "is, are",
                "are, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With 'they', we use 'are' for both age and nationality.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' и для возраста, и для национальности.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' for both age and nationality.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' и для возраста, и для национальности."
        },
        {
            question: "Select the correct sentence about age and nationality:",
            questionRu: "Выберите правильное предложение о возрасте и национальности:",
            options: [
                "My friend is 22 and he is Japanese.",
                "My friend are 22 and he are Japanese.",
                "My friend is 22 and he are Japanese.",
                "My friend are 22 and he is Japanese."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'My friend is 22 and he is Japanese' is the proper form.",
            correctFeedbackRu: "Правильно! 'My friend is 22 and he is Japanese' - это правильная форма.",
            incorrectFeedback: "Incorrect. With singular subjects like 'my friend' and 'he', we use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе, как 'my friend' и 'he', мы используем 'is'."
        },
        {
            question: "Choose the correct forms of 'to be':",
            questionRu: "Выберите правильные формы глагола 'to be':",
            sentence: "You ___ 40 years old and you ___ Indian.",
            options: [
                "are, are",
                "am, are",
                "is, are",
                "are, is"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With 'you', we use 'are' for both age and nationality.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' и для возраста, и для национальности.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' for both age and nationality.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' и для возраста, и для национальности."
        },
        {
            question: "Select the correct question combining age and nationality:",
            questionRu: "Выберите правильный вопрос, сочетающий возраст и национальность:",
            options: [
                "Is she 35 and is she American?",
                "Is she 35 and are she American?",
                "Are she 35 and is she American?",
                "Are she 35 and are she American?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is she 35 and is she American?' is the proper form.",
            correctFeedbackRu: "Правильно! 'Is she 35 and is she American?' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'she', we use 'is' for both questions about age and nationality.",
            incorrectFeedbackRu: "Неправильно. С 'she' мы используем 'is' для обоих вопросов о возрасте и национальности."
        },
        {
            question: "Choose the correct combined sentence:",
            questionRu: "Выберите правильное комбинированное предложение:",
            options: [
                "We are in our thirties and we are Russian.",
                "We am in our thirties and we am Russian.",
                "We is in our thirties and we is Russian.",
                "We are in our thirties and we is Russian."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'We are in our thirties and we are Russian' is the proper form.",
            correctFeedbackRu: "Правильно! 'We are in our thirties and we are Russian' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'we', we use 'are' for both age decades and nationality.",
            incorrectFeedbackRu: "Неправильно. С 'we' мы используем 'are' и для возрастных десятилетий, и для национальности."
        },
        {
            question: "Select the correct negative sentence about age and nationality:",
            questionRu: "Выберите правильное отрицательное предложение о возрасте и национальности:",
            options: [
                "He is not 50 years old and he is not English.",
                "He am not 50 years old and he am not English.",
                "He are not 50 years old and he are not English.",
                "He not is 50 years old and he not is English."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'He is not 50 years old and he is not English' is the proper negative form.",
            correctFeedbackRu: "Правильно! 'He is not 50 years old and he is not English' - это правильная отрицательная форма.",
            incorrectFeedback: "Incorrect. With 'he', we use 'is not' for both negations.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы используем 'is not' для обоих отрицаний."
        },
        {
            question: "Choose the correct contracted forms in this sentence:",
            questionRu: "Выберите правильные сокращенные формы в этом предложении:",
            options: [
                "She's 27 years old and she's Portuguese.",
                "She's 27 years old and she'r Portuguese.",
                "She'r 27 years old and she's Portuguese.",
                "She'r 27 years old and she'r Portuguese."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She's 27 years old and she's Portuguese' uses the correct contractions for 'She is'.",
            correctFeedbackRu: "Правильно! 'She's 27 years old and she's Portuguese' использует правильные сокращения для 'She is'.",
            incorrectFeedback: "Incorrect. The correct contractions for 'She is' are 'She's' in both cases.",
            incorrectFeedbackRu: "Неправильно. Правильные сокращения для 'She is' - это 'She's' в обоих случаях."
        },
        {
            question: "Select the correct sentence about age and nationality:",
            questionRu: "Выберите правильное предложение о возрасте и национальности:",
            options: [
                "They are teenagers and they are Turkish.",
                "They is teenagers and they is Turkish.",
                "They are teenagers and they is Turkish.",
                "They is teenagers and they are Turkish."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'They are teenagers and they are Turkish' is the proper form.",
            correctFeedbackRu: "Правильно! 'They are teenagers and they are Turkish' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'they', we use 'are' for both describing age groups and nationality.",
            incorrectFeedbackRu: "Неправильно. С 'they' мы используем 'are' и для описания возрастных групп, и для национальности."
        }
    ]
};

/* ============================================
Page 7: Personal information with "to be"
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page7'] = {
    multipleChoice: [
        {
            question: "Choose the correct form of 'to be' for personal information:",
            questionRu: "Выберите правильную форму глагола 'to be' для личной информации:",
            sentence: "My name ___ Sarah.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With singular subjects like 'name', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в единственном числе, как 'name', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'name', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'name' нужно использовать 'is'."
        },
        {
            question: "Select the correct personal information combination:",
            questionRu: "Выберите правильную комбинацию личной информации:",
            options: [
                "I am Peter. I am 34 years old. I am Australian.",
                "I am Peter. I is 34 years old. I am Australian.",
                "I am Peter. I am 34 years old. I is Australian.",
                "I is Peter. I am 34 years old. I am Australian."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'I am Peter. I am 34 years old. I am Australian.' uses 'am' correctly throughout.",
            correctFeedbackRu: "Правильно! 'I am Peter. I am 34 years old. I am Australian.' использует 'am' правильно везде.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' in all three statements.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' во всех трех утверждениях."
        },
        {
            question: "Choose the correct form of 'to be' for personal information:",
            questionRu: "Выберите правильную форму глагола 'to be' для личной информации:",
            sentence: "My telephone number ___ 555-7890.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With singular subjects like 'telephone number', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в единственном числе, как 'telephone number', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'telephone number', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'telephone number' нужно использовать 'is'."
        },
        {
            question: "Select the correct personal information:",
            questionRu: "Выберите правильную личную информацию:",
            options: [
                "She is twenty-six years old.",
                "She has twenty-six years.",
                "She have twenty-six years old.",
                "She is twenty-six years."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is twenty-six years old' is the proper form in English.",
            correctFeedbackRu: "Правильно! 'She is twenty-six years old' - это правильная форма в английском языке.",
            incorrectFeedback: "Incorrect. In English, we say 'She is twenty-six years old'.",
            incorrectFeedbackRu: "Неправильно. В английском мы говорим 'She is twenty-six years old'."
        },
        {
            question: "Choose the correct forms for these personal details:",
            questionRu: "Выберите правильные формы для этих личных данных:",
            options: [
                "Her name is Anna. She is German. She is 28 years old.",
                "Her name is Anna. She am German. She is 28 years old.",
                "Her name are Anna. She is German. She is 28 years old.",
                "Her name is Anna. She is German. She are 28 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Her name is Anna. She is German. She is 28 years old.' uses 'is' correctly throughout.",
            correctFeedbackRu: "Правильно! 'Her name is Anna. She is German. She is 28 years old.' использует 'is' правильно везде.",
            incorrectFeedback: "Incorrect. With singular subjects like 'name' and 'she', we need to use 'is' in all statements.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе, как 'name' и 'she', нужно использовать 'is' во всех утверждениях."
        },
        {
            question: "Select the correct question about personal information:",
            questionRu: "Выберите правильный вопрос о личной информации:",
            options: [
                "What is your nationality?",
                "What are your nationality?",
                "What am your nationality?",
                "What your nationality is?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'What is your nationality?' is the proper question form.",
            correctFeedbackRu: "Правильно! 'What is your nationality?' - это правильная форма вопроса.",
            incorrectFeedback: "Incorrect. The correct question form is 'What is your nationality?'",
            incorrectFeedbackRu: "Неправильно. Правильная форма вопроса - 'What is your nationality?'"
        },
        {
            question: "Choose the correct form of 'to be' for personal information:",
            questionRu: "Выберите правильную форму глагола 'to be' для личной информации:",
            sentence: "Their names ___ Tom and Sarah.",
            options: [
                "are",
                "am",
                "is",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With plural subjects like 'names', we use 'are'.",
            correctFeedbackRu: "Правильно! С подлежащими во множественном числе, как 'names', мы используем 'are'.",
            incorrectFeedback: "Incorrect. With 'names', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'names' нужно использовать 'are'."
        },
        {
            question: "Select the correct personal introduction:",
            questionRu: "Выберите правильное личное представление:",
            options: [
                "Hello! I am Carlos. I am from Mexico. I am twenty years old.",
                "Hello! I is Carlos. I am from Mexico. I am twenty years old.",
                "Hello! I am Carlos. I is from Mexico. I am twenty years old.",
                "Hello! I am Carlos. I am from Mexico. I is twenty years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Hello! I am Carlos. I am from Mexico. I am twenty years old.' uses 'am' correctly throughout.",
            correctFeedbackRu: "Правильно! 'Hello! I am Carlos. I am from Mexico. I am twenty years old.' использует 'am' правильно везде.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' in all statements.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' во всех утверждениях."
        },
        {
            question: "Choose the correct form of 'to be' for personal information:",
            questionRu: "Выберите правильную форму глагола 'to be' для личной информации:",
            sentence: "Our address ___ 123 Main Street.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With singular subjects like 'address', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в единственном числе, как 'address', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'address', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'address' нужно использовать 'is'."
        },
        {
            question: "Select the correct personal information form:",
            questionRu: "Выберите правильную форму личной информации:",
            options: [
                "We are from Canada. We are Canadian.",
                "We are from Canada. We is Canadian.",
                "We is from Canada. We are Canadian.",
                "We is from Canada. We is Canadian."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'We are from Canada. We are Canadian.' uses 'are' correctly throughout.",
            correctFeedbackRu: "Правильно! 'We are from Canada. We are Canadian.' использует 'are' правильно везде.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' in both statements.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' в обоих утверждениях."
        }
    ]
};

/* ============================================
Page 8: Talking about age in different ways
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page8'] = {
    multipleChoice: [
        {
            question: "Choose the correct expression for age decades:",
            questionRu: "Выберите правильное выражение для возрастных десятилетий:",
            options: [
                "She is in her twenties.",
                "She has her twenties.",
                "She is on her twenties.",
                "She has twenties years."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is in her twenties' is the proper form for age decades.",
            correctFeedbackRu: "Правильно! 'She is in her twenties' - это правильная форма для возрастных десятилетий.",
            incorrectFeedback: "Incorrect. To express age decades, we say 'She is in her twenties'.",
            incorrectFeedbackRu: "Неправильно. Для выражения возрастных десятилетий мы говорим 'She is in her twenties'."
        },
        {
            question: "Select the correct age expression:",
            questionRu: "Выберите правильное выражение возраста:",
            options: [
                "They are under 30.",
                "They are below 30.",
                "They have under 30.",
                "They are less than 30 years."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'They are under 30' is the proper form.",
            correctFeedbackRu: "Правильно! 'They are under 30' - это правильная форма.",
            incorrectFeedback: "Incorrect. To express being younger than a certain age, we say 'They are under 30'.",
            incorrectFeedbackRu: "Неправильно. Чтобы выразить, что они моложе определенного возраста, мы говорим 'They are under 30'."
        },
        {
            question: "Choose the correct age expression:",
            questionRu: "Выберите правильное выражение возраста:",
            options: [
                "He is over sixty.",
                "He has over sixty.",
                "He is above sixty years.",
                "He has more than sixty."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'He is over sixty' is the proper form.",
            correctFeedbackRu: "Правильно! 'He is over sixty' - это правильная форма.",
            incorrectFeedback: "Incorrect. To express being older than a certain age, we say 'He is over sixty'.",
            incorrectFeedbackRu: "Неправильно. Чтобы выразить, что он старше определенного возраста, мы говорим 'He is over sixty'."
        },
        {
            question: "Select the correct expression for an approximate age:",
            questionRu: "Выберите правильное выражение для приблизительного возраста:",
            options: [
                "She is about forty years old.",
                "She is around forty years.",
                "She has approximately forty years.",
                "She is almost forty years."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is about forty years old' is the proper form for approximate age.",
            correctFeedbackRu: "Правильно! 'She is about forty years old' - это правильная форма для приблизительного возраста.",
            incorrectFeedback: "Incorrect. For approximate age, we say 'She is about forty years old'.",
            incorrectFeedbackRu: "Неправильно. Для приблизительного возраста мы говорим 'She is about forty years old'."
        },
        {
            question: "Choose the correct age comparison:",
            questionRu: "Выберите правильное сравнение возраста:",
            options: [
                "I am older than my sister.",
                "I am more old than my sister.",
                "I have more age than my sister.",
                "I am elder than my sister."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'I am older than my sister' is the proper form for age comparison.",
            correctFeedbackRu: "Правильно! 'I am older than my sister' - это правильная форма для сравнения возраста.",
            incorrectFeedback: "Incorrect. For age comparison, we say 'I am older than my sister'.",
            incorrectFeedbackRu: "Неправильно. Для сравнения возраста мы говорим 'I am older than my sister'."
        },
        {
            question: "Select the correct sentence about age milestones:",
            questionRu: "Выберите правильное предложение о возрастных рубежах:",
            options: [
                "She is turning thirty next month.",
                "She will have thirty next month.",
                "She becomes thirty next month.",
                "She is getting thirty years next month."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is turning thirty next month' is the proper form.",
            correctFeedbackRu: "Правильно! 'She is turning thirty next month' - это правильная форма.",
            incorrectFeedback: "Incorrect. For upcoming age milestones, we say 'She is turning thirty next month'.",
            incorrectFeedbackRu: "Неправильно. Для предстоящих возрастных рубежей мы говорим 'She is turning thirty next month'."
        },
        {
            question: "Choose the correct question about age range:",
            questionRu: "Выберите правильный вопрос о возрастном диапазоне:",
            options: [
                "What age group are you in?",
                "Which age group you are?",
                "What is your age group?",
                "Which group of age are you?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'What age group are you in?' is the proper question form.",
            correctFeedbackRu: "Правильно! 'What age group are you in?' - это правильная форма вопроса.",
            incorrectFeedback: "Incorrect. The correct question form is 'What age group are you in?'",
            incorrectFeedbackRu: "Неправильно. Правильная форма вопроса - 'What age group are you in?'"
        },
        {
            question: "Select the correct age expression:",
            questionRu: "Выберите правильное выражение возраста:",
            options: [
                "The children are between 5 and 10 years old.",
                "The children have between 5 and 10 years.",
                "The children are from 5 to 10 years.",
                "The children have from 5 to 10 years old."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'The children are between 5 and 10 years old' is the proper form.",
            correctFeedbackRu: "Правильно! 'The children are between 5 and 10 years old' - это правильная форма.",
            incorrectFeedback: "Incorrect. For age ranges, we say 'The children are between 5 and 10 years old'.",
            incorrectFeedbackRu: "Неправильно. Для возрастных диапазонов мы говорим 'The children are between 5 and 10 years old'."
        },
        {
            question: "Choose the correct expression about exact age:",
            questionRu: "Выберите правильное выражение о точном возрасте:",
            options: [
                "He is exactly 42 years old.",
                "He has exactly 42 years.",
                "He is precise 42 years old.",
                "He has exactly 42 years of age."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'He is exactly 42 years old' is the proper form.",
            correctFeedbackRu: "Правильно! 'He is exactly 42 years old' - это правильная форма.",
            incorrectFeedback: "Incorrect. For exact age, we say 'He is exactly 42 years old'.",
            incorrectFeedbackRu: "Неправильно. Для точного возраста мы говорим 'He is exactly 42 years old'."
        },
        {
            question: "Select the correct sentence about same age:",
            questionRu: "Выберите правильное предложение об одинаковом возрасте:",
            options: [
                "We are the same age.",
                "We have the same age.",
                "We are of equal age.",
                "We have equal years."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'We are the same age' is the proper form.",
            correctFeedbackRu: "Правильно! 'We are the same age' - это правильная форма.",
            incorrectFeedback: "Incorrect. To express having the same age, we say 'We are the same age'.",
            incorrectFeedbackRu: "Неправильно. Чтобы выразить одинаковый возраст, мы говорим 'We are the same age'."
        }
    ]
};

/* ============================================
Page 9: Nationality and origin expressions
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page9'] = {
    multipleChoice: [
        {
            question: "Choose the correct expression about nationality:",
            questionRu: "Выберите правильное выражение о национальности:",
            options: [
                "He is Brazilian.",
                "He has Brazilian nationality.",
                "He comes from Brazilian.",
                "He belongs to Brazilian."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'He is Brazilian' is the proper form for expressing nationality.",
            correctFeedbackRu: "Правильно! 'He is Brazilian' - это правильная форма для выражения национальности.",
            incorrectFeedback: "Incorrect. To express nationality, we say 'He is Brazilian'.",
            incorrectFeedbackRu: "Неправильно. Для выражения национальности мы говорим 'He is Brazilian'."
        },
        {
            question: "Select the correct sentence about origin:",
            questionRu: "Выберите правильное предложение о происхождении:",
            options: [
                "She is from Argentina.",
                "She comes of Argentina.",
                "She belongs from Argentina.",
                "She has origin in Argentina."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is from Argentina' is the proper form for expressing origin.",
            correctFeedbackRu: "Правильно! 'She is from Argentina' - это правильная форма для выражения происхождения.",
            incorrectFeedback: "Incorrect. To express country of origin, we say 'She is from Argentina'.",
            incorrectFeedbackRu: "Неправильно. Для выражения страны происхождения мы говорим 'She is from Argentina'."
        },
        {
            question: "Choose the correct nationality question:",
            questionRu: "Выберите правильный вопрос о национальности:",
            options: [
                "What nationality are you?",
                "Which nationality do you have?",
                "What is the nationality of you?",
                "Which is your nationality?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'What nationality are you?' is the proper question form.",
            correctFeedbackRu: "Правильно! 'What nationality are you?' - это правильная форма вопроса.",
            incorrectFeedback: "Incorrect. To ask about nationality, we say 'What nationality are you?'",
            incorrectFeedbackRu: "Неправильно. Чтобы спросить о национальности, мы говорим 'What nationality are you?'"
        },
        {
            question: "Select the correct origin question:",
            questionRu: "Выберите правильный вопрос о происхождении:",
            options: [
                "Where are you from?",
                "From where are you?",
                "Where do you come of?",
                "Where is your origin?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Where are you from?' is the proper question form for asking about origin.",
            correctFeedbackRu: "Правильно! 'Where are you from?' - это правильная форма вопроса о происхождении.",
            incorrectFeedback: "Incorrect. To ask about origin, we say 'Where are you from?'",
            incorrectFeedbackRu: "Неправильно. Чтобы спросить о происхождении, мы говорим 'Where are you from?'"
        },
        {
            question: "Choose the correct dual nationality expression:",
            questionRu: "Выберите правильное выражение о двойной национальности:",
            options: [
                "She is Canadian and American.",
                "She is Canadian-American.",
                "She has Canadian and American nationalities.",
                "She belongs to Canada and America."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is Canadian and American' is the proper form for expressing dual nationality.",
            correctFeedbackRu: "Правильно! 'She is Canadian and American' - это правильная форма для выражения двойной национальности.",
            incorrectFeedback: "Incorrect. To express dual nationality, we say 'She is Canadian and American'.",
            incorrectFeedbackRu: "Неправильно. Для выражения двойной национальности мы говорим 'She is Canadian and American'."
        },
        {
            question: "Select the correct expression about national identity:",
            questionRu: "Выберите правильное выражение о национальной идентичности:",
            options: [
                "They are originally from Mexico.",
                "They have Mexican origins.",
                "They come originally of Mexico.",
                "They originally belong from Mexico."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'They are originally from Mexico' is the proper form.",
            correctFeedbackRu: "Правильно! 'They are originally from Mexico' - это правильная форма.",
            incorrectFeedback: "Incorrect. To express original nationality, we say 'They are originally from Mexico'.",
            incorrectFeedbackRu: "Неправильно. Для выражения исходной национальности мы говорим 'They are originally from Mexico'."
        },
        {
            question: "Choose the correct citizenship expression:",
            questionRu: "Выберите правильное выражение о гражданстве:",
            options: [
                "I am a British citizen.",
                "I have a British citizenship.",
                "I possess British citizenship.",
                "I belong to British citizenship."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'I am a British citizen' is the proper form.",
            correctFeedbackRu: "Правильно! 'I am a British citizen' - это правильная форма.",
            incorrectFeedback: "Incorrect. To express citizenship, we say 'I am a British citizen'.",
            incorrectFeedbackRu: "Неправильно. Для выражения гражданства мы говорим 'I am a British citizen'."
        },
        {
            question: "Select the correct sentence about ethnicity:",
            questionRu: "Выберите правильное предложение об этнической принадлежности:",
            options: [
                "She is of Korean descent.",
                "She has Korean descent.",
                "She comes from Korean descent.",
                "She descends of Korean."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is of Korean descent' is the proper form.",
            correctFeedbackRu: "Правильно! 'She is of Korean descent' - это правильная форма.",
            incorrectFeedback: "Incorrect. To express ethnicity or descent, we say 'She is of Korean descent'.",
            incorrectFeedbackRu: "Неправильно. Для выражения этнической принадлежности или происхождения мы говорим 'She is of Korean descent'."
        },
        {
            question: "Choose the correct expression about living abroad:",
            questionRu: "Выберите правильное выражение о проживании за границей:",
            options: [
                "He is originally Turkish but he lives in Germany now.",
                "He has Turkish origin but he is living in Germany now.",
                "He comes of Turkey but he lives in Germany now.",
                "He belongs from Turkey but he is in Germany now."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'He is originally Turkish but he lives in Germany now' is the proper form.",
            correctFeedbackRu: "Правильно! 'He is originally Turkish but he lives in Germany now' - это правильная форма.",
            incorrectFeedback: "Incorrect. To express nationality with current residence, we say 'He is originally Turkish but he lives in Germany now'.",
            incorrectFeedbackRu: "Неправильно. Для выражения национальности с текущим местом жительства мы говорим 'He is originally Turkish but he lives in Germany now'."
        },
        {
            question: "Select the correct nationality adjective:",
            questionRu: "Выберите правильное прилагательное национальности:",
            options: [
                "She is Dutch. She is from the Netherlands.",
                "She is Netherlands. She is from the Dutch.",
                "She is Netherlandian. She is from the Netherlands.",
                "She is Hollandian. She is from the Netherlands."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'She is Dutch. She is from the Netherlands.' uses the correct nationality adjective.",
            correctFeedbackRu: "Правильно! 'She is Dutch. She is from the Netherlands.' использует правильное прилагательное национальности.",
            incorrectFeedback: "Incorrect. The correct nationality adjective is 'Dutch' for people from the Netherlands.",
            incorrectFeedbackRu: "Неправильно. Правильное прилагательное национальности - 'Dutch' для людей из Нидерландов."
        }
    ]
};

/* ============================================
Page 10: Using 'to be' with ages and nationalities (Talking about yourself)
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-page10'] = {
    multipleChoice: [
        {
            question: "Choose the correct form of 'to be' for talking about yourself:",
            questionRu: "Выберите правильную форму глагола 'to be' для рассказа о себе:",
            sentence: "I ___ 28 years old.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! When talking about your own age, use 'I am' followed by the age and 'years old'.",
            correctFeedbackRu: "Правильно! Когда вы говорите о своем возрасте, используйте 'I am', затем возраст и 'years old'.",
            incorrectFeedback: "Incorrect. When talking about your own age, always use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Когда вы говорите о своем возрасте, всегда используйте 'I am'."
        },
        {
            question: "Select the correct sentence for introducing yourself with nationality:",
            questionRu: "Выберите правильное предложение для представления себя с указанием национальности:",
            options: [
                "I am Spanish.",
                "I is Spanish.",
                "I are Spanish.",
                "I be Spanish."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' followed by your nationality to introduce yourself.",
            correctFeedbackRu: "Правильно! Используйте 'I am' с последующим указанием вашей национальности для представления себя.",
            incorrectFeedback: "Incorrect. When stating your nationality, always use 'I am' followed by the nationality.",
            incorrectFeedbackRu: "Неправильно. При указании вашей национальности всегда используйте 'I am' с последующей национальностью."
        },
        {
            question: "Choose the correct form for introducing both your age and nationality:",
            questionRu: "Выберите правильную форму для представления своего возраста и национальности:",
            options: [
                "I am 32 years old and I am Russian.",
                "I am 32 years old and I is Russian.",
                "I is 32 years old and I am Russian.",
                "I are 32 years old and I am Russian."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' consistently for both age and nationality statements.",
            correctFeedbackRu: "Правильно! Последовательно используйте 'I am' и для возраста, и для национальности.",
            incorrectFeedback: "Incorrect. When talking about yourself, always use 'I am' for both age and nationality.",
            incorrectFeedbackRu: "Неправильно. Когда вы говорите о себе, всегда используйте 'I am' и для возраста, и для национальности."
        },
        {
            question: "Which expression is correct for telling your age in decades?",
            questionRu: "Какое выражение правильно для указания вашего возраста по десятилетиям?",
            options: [
                "I am in my twenties.",
                "I am on my twenties.",
                "I have twenties.",
                "I am twenties."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am in my twenties/thirties/forties' to express your age by decade.",
            correctFeedbackRu: "Правильно! Используйте 'I am in my twenties/thirties/forties' чтобы выразить ваш возраст по десятилетиям.",
            incorrectFeedback: "Incorrect. To express age by decade, use 'I am in my + decade'.",
            incorrectFeedbackRu: "Неправильно. Для выражения возраста по десятилетиям используйте 'I am in my + десятилетие'."
        },
        {
            question: "Select the correct expression for introducing yourself with age:",
            questionRu: "Выберите правильное выражение для представления себя с указанием возраста:",
            options: [
                "My name is John and I am 25 years old.",
                "My name is John and I is 25 years old.",
                "My name is John and I are 25 years old.",
                "My name is John and I have 25 years."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' when talking about your age in a self-introduction.",
            correctFeedbackRu: "Правильно! Используйте 'I am' при указании своего возраста в самопредставлении.",
            incorrectFeedback: "Incorrect. When introducing yourself with your age, use 'I am' followed by the age and 'years old'.",
            incorrectFeedbackRu: "Неправильно. При представлении себя с указанием возраста, используйте 'I am', за которым следует возраст и 'years old'."
        },
        {
            question: "Choose the correct question to ask someone's age politely:",
            questionRu: "Выберите правильный вопрос, чтобы вежливо узнать чей-то возраст:",
            options: [
                "How old are you?",
                "How old is you?",
                "How old am you?",
                "What age have you?"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'How old are you?' is the proper way to ask about someone's age.",
            correctFeedbackRu: "Правильно! 'How old are you?' - это правильный способ спросить о чьем-то возрасте.",
            incorrectFeedback: "Incorrect. To ask about someone's age, use 'How old are you?'",
            incorrectFeedbackRu: "Неправильно. Чтобы спросить о чьем-то возрасте, используйте 'How old are you?'"
        },
        {
            question: "Select the correct sentence for describing your place of origin:",
            questionRu: "Выберите правильное предложение для описания места вашего происхождения:",
            options: [
                "I am from Italy.",
                "I is from Italy.",
                "I are from Italy.",
                "I have from Italy."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am from' followed by your country to express your origin.",
            correctFeedbackRu: "Правильно! Используйте 'I am from' с последующим указанием вашей страны для выражения вашего происхождения.",
            incorrectFeedback: "Incorrect. When stating your place of origin, use 'I am from' followed by the country or place.",
            incorrectFeedbackRu: "Неправильно. При указании места вашего происхождения, используйте 'I am from' с последующим указанием страны или места."
        },
        {
            question: "Choose the correct form for personal information:",
            questionRu: "Выберите правильную форму для личной информации:",
            options: [
                "I am 30 years old and I am a doctor.",
                "I am 30 years old and I is a doctor.",
                "I is 30 years old and I am a doctor.",
                "I is 30 years old and I is a doctor."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' consistently for both age and profession in personal information.",
            correctFeedbackRu: "Правильно! Последовательно используйте 'I am' и для возраста, и для профессии в личной информации.",
            incorrectFeedback: "Incorrect. For personal information statements, use 'I am' consistently for age and profession.",
            incorrectFeedbackRu: "Неправильно. Для утверждений с личной информацией последовательно используйте 'I am' для возраста и профессии."
        },
        {
            question: "Select the correct expression for an exact age:",
            questionRu: "Выберите правильное выражение для точного возраста:",
            options: [
                "I am exactly 42 years old.",
                "I have exactly 42 years.",
                "I have 42 years of age.",
                "I am with 42 years."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am exactly' followed by the age and 'years old' to express an exact age.",
            correctFeedbackRu: "Правильно! Используйте 'I am exactly' с последующим указанием возраста и 'years old' для выражения точного возраста.",
            incorrectFeedback: "Incorrect. To state an exact age, use 'I am exactly' followed by the age and 'years old'.",
            incorrectFeedbackRu: "Неправильно. Чтобы указать точный возраст, используйте 'I am exactly' с последующим указанием возраста и 'years old'."
        },
        {
            question: "Choose the correct statement about both nationality and origin:",
            questionRu: "Выберите правильное утверждение о национальности и происхождении:",
            options: [
                "I am American. I am from New York.",
                "I am American. I is from New York.",
                "I is American. I am from New York.",
                "I is American. I is from New York."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' consistently for both nationality and place of origin.",
            correctFeedbackRu: "Правильно! Последовательно используйте 'I am' и для национальности, и для места происхождения.",
            incorrectFeedback: "Incorrect. When stating both nationality and origin, use 'I am' consistently in both parts.",
            incorrectFeedbackRu: "Неправильно. При указании и национальности, и происхождения, последовательно используйте 'I am' в обеих частях."
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
Page 1: Basic age expressions
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page1'] = {
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ 32 years old.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we use 'am' when expressing age.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' при выражении возраста.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' when talking about age.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' при разговоре о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ Russian.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' to express nationality.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для выражения национальности.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' при разговоре о национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ Japanese.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' when expressing nationality.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' при выражении национальности.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' при разговоре о национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My grandmother ____ 70 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With singular nouns like 'grandmother', we use 'is' to express age.",
            correctFeedbackRu: "Правильно! С существительными в единственном числе, как 'grandmother', мы используем 'is' для выражения возраста.",
            incorrectFeedback: "Incorrect. With singular nouns like 'grandmother', we need to use 'is' when talking about age.",
            incorrectFeedbackRu: "Неправильно. С существительными в единственном числе, как 'grandmother', нужно использовать 'is' при разговоре о возрасте."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ both Italian.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' when expressing nationality.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' при выражении национальности.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' при разговоре о национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ 20 years old, right?",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are' when expressing age.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' при выражении возраста.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' when talking about age.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' при разговоре о возрасте."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "He ____ German.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' to express nationality.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для выражения национальности.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is' при разговоре о национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My parents ____ both 45 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural nouns like 'parents', we use 'are' to express age.",
            correctFeedbackRu: "Правильно! С существительными во множественном числе, как 'parents', мы используем 'are' для выражения возраста.",
            incorrectFeedback: "Incorrect. With plural nouns like 'parents', we need to use 'are' when talking about age.",
            incorrectFeedbackRu: "Неправильно. С существительными во множественном числе, как 'parents', нужно использовать 'are' при разговоре о возрасте."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "How old ____ your brother?",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! In questions about age with singular nouns like 'brother', we use 'is'.",
            correctFeedbackRu: "Правильно! В вопросах о возрасте с существительными в единственном числе, как 'brother', мы используем 'is'.",
            incorrectFeedback: "Incorrect. In questions about age with singular nouns like 'brother', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. В вопросах о возрасте с существительными в единственном числе, как 'brother', нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The students ____ from different countries.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural nouns like 'students', we use 'are' to express origin.",
            correctFeedbackRu: "Правильно! С существительными во множественном числе, как 'students', мы используем 'are' для выражения происхождения.",
            incorrectFeedback: "Incorrect. With plural nouns like 'students', we need to use 'are' when talking about origin.",
            incorrectFeedbackRu: "Неправильно. С существительными во множественном числе, как 'students', нужно использовать 'are' при разговоре о происхождении."
        }
    ]
};

/* ============================================
Page 2: Nationalities with to be
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page2'] = {
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ American.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we use 'am' when expressing nationality.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' при выражении национальности.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' при разговоре о национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ British.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' to express nationality.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для выражения национальности.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' при разговоре о национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ French.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' when expressing nationality.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' при выражении национальности.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' при разговоре о национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My wife ____ Spanish.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With singular nouns like 'wife', we use 'is' to express nationality.",
            correctFeedbackRu: "Правильно! С существительными в единственном числе, как 'wife', мы используем 'is' для выражения национальности.",
            incorrectFeedback: "Incorrect. With singular nouns like 'wife', we need to use 'is' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С существительными в единственном числе, как 'wife', нужно использовать 'is' при разговоре о национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ Canadian.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' when expressing nationality.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' при выражении национальности.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' при разговоре о национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ Italian, right?",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are' when expressing nationality.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' при выражении национальности.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' при разговоре о национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The student ____ Chinese.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With singular nouns like 'student', we use 'is' to express nationality.",
            correctFeedbackRu: "Правильно! С существительными в единственном числе, как 'student', мы используем 'is' для выражения национальности.",
            incorrectFeedback: "Incorrect. With singular nouns like 'student', we need to use 'is' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С существительными в единственном числе, как 'student', нужно использовать 'is' при разговоре о национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My parents ____ Mexican.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural nouns like 'parents', we use 'are' to express nationality.",
            correctFeedbackRu: "Правильно! С существительными во множественном числе, как 'parents', мы используем 'are' для выражения национальности.",
            incorrectFeedback: "Incorrect. With plural nouns like 'parents', we need to use 'are' when talking about nationality.",
            incorrectFeedbackRu: "Неправильно. С существительными во множественном числе, как 'parents', нужно использовать 'are' при разговоре о национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "____ your friend Russian?",
            correctAnswer: "Is",
            options: ["Am", "Is", "Are", "Be"],
            correctFeedback: "Correct! In questions about nationality with singular nouns like 'friend', we use 'Is'.",
            correctFeedbackRu: "Правильно! В вопросах о национальности с существительными в единственном числе, как 'friend', мы используем 'Is'.",
            incorrectFeedback: "Incorrect. In questions about nationality with singular nouns like 'friend', we need to use 'Is'.",
            incorrectFeedbackRu: "Неправильно. В вопросах о национальности с существительными в единственном числе, как 'friend', нужно использовать 'Is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "____ they Japanese?",
            correctAnswer: "Are",
            options: ["Am", "Is", "Are", "Be"],
            correctFeedback: "Correct! In questions about nationality with 'they', we use 'Are'.",
            correctFeedbackRu: "Правильно! В вопросах о национальности с 'they' мы используем 'Are'.",
            incorrectFeedback: "Incorrect. In questions about nationality with 'they', we need to use 'Are'.",
            incorrectFeedbackRu: "Неправильно. В вопросах о национальности с 'they' нужно использовать 'Are'."
        }
    ]
};

/* ============================================
Page 3: Combined age and nationality statements
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page3'] = {
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ 30 years old.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we use 'am' for age statements.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' для утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for age.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для возраста."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ French.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for nationality.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для национальности.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is' for nationality.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is' для национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ 45 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for age statements.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' for age.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' для возраста."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My grandfather ____ 80 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With singular nouns like 'grandfather', we use 'is' for age.",
            correctFeedbackRu: "Правильно! С существительными в единственном числе, как 'grandfather', мы используем 'is' для возраста.",
            incorrectFeedback: "Incorrect. With singular nouns like 'grandfather', we need to use 'is' for age.",
            incorrectFeedbackRu: "Неправильно. С существительными в единственном числе, как 'grandfather', нужно использовать 'is' для возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ both 22 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for age statements.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' for age.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' для возраста."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ Japanese.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are' for nationality.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' для национальности.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' for nationality.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' для национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The twins ____ 16 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural nouns like 'twins', we use 'are' for age.",
            correctFeedbackRu: "Правильно! С существительными во множественном числе, как 'twins', мы используем 'are' для возраста.",
            incorrectFeedback: "Incorrect. With plural nouns like 'twins', we need to use 'are' for age.",
            incorrectFeedbackRu: "Неправильно. С существительными во множественном числе, как 'twins', нужно использовать 'are' для возраста."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My cousin ____ Brazilian.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With singular nouns like 'cousin', we use 'is' for nationality.",
            correctFeedbackRu: "Правильно! С существительными в единственном числе, как 'cousin', мы используем 'is' для национальности.",
            incorrectFeedback: "Incorrect. With singular nouns like 'cousin', we need to use 'is' for nationality.",
            incorrectFeedbackRu: "Неправильно. С существительными в единственном числе, как 'cousin', нужно использовать 'is' для национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "How old ____ your friend?",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! In questions about age with singular nouns like 'friend', we use 'is'.",
            correctFeedbackRu: "Правильно! В вопросах о возрасте с существительными в единственном числе, как 'friend', мы используем 'is'.",
            incorrectFeedback: "Incorrect. In questions about age with singular nouns like 'friend', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. В вопросах о возрасте с существительными в единственном числе, как 'friend', нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "How old ____ they?",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! In questions about age with 'they', we use 'are'.",
            correctFeedbackRu: "Правильно! В вопросах о возрасте с 'they' мы используем 'are'.",
            incorrectFeedback: "Incorrect. In questions about age with 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. В вопросах о возрасте с 'they' нужно использовать 'are'."
        }
    ]
};

/* ============================================
Page 4: Using 'to be' with different age groups
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page4'] = {
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My baby brother ____ one year old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With singular subjects like 'baby brother', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в единственном числе, как 'baby brother', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With singular subjects like 'baby brother', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе, как 'baby brother', нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The twins ____ five years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural subjects like 'twins', we use 'are'.",
            correctFeedbackRu: "Правильно! С подлежащими во множественном числе, как 'twins', мы используем 'are'.",
            incorrectFeedback: "Incorrect. With plural subjects like 'twins', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими во множественном числе, как 'twins', нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "How old ____ you?",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'How old are you?' is the proper form to ask about age.",
            correctFeedbackRu: "Правильно! 'How old are you?' - это правильная форма вопроса о возрасте.",
            incorrectFeedback: "Incorrect. To ask about age, use 'How old are you?'",
            incorrectFeedbackRu: "Неправильно. Чтобы спросить о возрасте, используйте 'How old are you?'"
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ twenty-one years old.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'I am twenty-one years old' is the proper response.",
            correctFeedbackRu: "Правильно! 'I am twenty-one years old' - это правильный ответ.",
            incorrectFeedback: "Incorrect. The correct response is 'I am twenty-one years old.'",
            incorrectFeedbackRu: "Неправильно. Правильный ответ - 'I am twenty-one years old.'"
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My grandparents ____ in their seventies.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural subjects like 'grandparents', we use 'are'.",
            correctFeedbackRu: "Правильно! С подлежащими во множественном числе, как 'grandparents', мы используем 'are'.",
            incorrectFeedback: "Incorrect. With plural subjects like 'grandparents', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими во множественном числе, как 'grandparents', нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ eighteen years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'He is eighteen years old' is the proper form in English.",
            correctFeedbackRu: "Правильно! 'He is eighteen years old' - это правильная форма в английском языке.",
            incorrectFeedback: "Incorrect. In English, we say 'He is eighteen years old'.",
            incorrectFeedbackRu: "Неправильно. В английском мы говорим 'He is eighteen years old'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The child ____ too young for this movie.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'The child is too young for this movie' is the proper form.",
            correctFeedbackRu: "Правильно! 'The child is too young for this movie' - это правильная форма.",
            incorrectFeedback: "Incorrect. With singular subjects like 'child', we use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе, как 'child', мы используем 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "How old ____ your sister?",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'How old is your sister?' is the proper form to ask about someone else's age.",
            correctFeedbackRu: "Правильно! 'How old is your sister?' - это правильная форма вопроса о возрасте другого человека.",
            incorrectFeedback: "Incorrect. To ask about someone else's age, use 'How old is your sister?'",
            incorrectFeedbackRu: "Неправильно. Чтобы спросить о возрасте другого человека, используйте 'How old is your sister?'"
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ the same age.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'They are the same age' is the proper form.",
            correctFeedbackRu: "Правильно! 'They are the same age' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'they', we use 'are' in expressions about age.",
            incorrectFeedbackRu: "Неправильно. С 'they' мы используем 'are' в выражениях о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ older than my brother.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'I am older than my brother' is the proper form for age comparison.",
            correctFeedbackRu: "Правильно! 'I am older than my brother' - это правильная форма для сравнения возраста.",
            incorrectFeedback: "Incorrect. For age comparison with 'I', use 'I am older than...'",
            incorrectFeedbackRu: "Неправильно. Для сравнения возраста с 'I' используйте 'I am older than...'"
        }
    ]
};

/* ============================================
Page 5: Using 'to be' with nationalities 
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page5'] = {
    fillGaps: [
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ Italian.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With third person singular subjects like 'she', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в третьем лице единственного числа, как 'she', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ Canadian.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'We are Canadian' is the proper form.",
            correctFeedbackRu: "Правильно! 'We are Canadian' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'we', we use 'are' for nationalities.",
            incorrectFeedbackRu: "Неправильно. С 'we' мы используем 'are' для национальностей."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ Mexican.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural subjects like 'they', we use 'are'.",
            correctFeedbackRu: "Правильно! С подлежащими во множественном числе, как 'they', мы используем 'are'.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ Chinese.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'I am Chinese' is the proper form.",
            correctFeedbackRu: "Правильно! 'I am Chinese' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'I', we use 'am' for nationalities.",
            incorrectFeedbackRu: "Неправильно. С 'I' мы используем 'am' для национальностей."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My parents ____ Irish.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural subjects like 'parents', we use 'are'.",
            correctFeedbackRu: "Правильно! С подлежащими во множественном числе, как 'parents', мы используем 'are'.",
            incorrectFeedback: "Incorrect. With 'parents', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'parents' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "He ____ German.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'He is German' is the proper form.",
            correctFeedbackRu: "Правильно! 'He is German' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'he', we use 'is' for nationalities.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы используем 'is' для национальностей."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "____ they Spanish?",
            correctAnswer: "Are",
            options: ["Am", "Is", "Are", "Be"],
            correctFeedback: "Correct! 'Are they Spanish?' is the proper form for a question about nationality with 'they'.",
            correctFeedbackRu: "Правильно! 'Are they Spanish?' - это правильная форма вопроса о национальности с 'they'.",
            incorrectFeedback: "Incorrect. For questions with 'they', use 'Are they...?'",
            incorrectFeedbackRu: "Неправильно. Для вопросов с 'they' используйте 'Are they...?'"
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ not Korean.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'She is not Korean' is the proper negative form.",
            correctFeedbackRu: "Правильно! 'She is not Korean' - это правильная отрицательная форма.",
            incorrectFeedback: "Incorrect. With 'she', we use 'is not' in negatives.",
            incorrectFeedbackRu: "Неправильно. С 'she' мы используем 'is not' в отрицаниях."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ Swedish.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'You are Swedish' is the proper form.",
            correctFeedbackRu: "Правильно! 'You are Swedish' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'you', we use 'are' for nationalities.",
            incorrectFeedbackRu: "Неправильно. С 'you' мы используем 'are' для национальностей."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The students ____ from different countries.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'The students are from different countries' is the proper form.",
            correctFeedbackRu: "Правильно! 'The students are from different countries' - это правильная форма.",
            incorrectFeedback: "Incorrect. With plural subjects like 'students', we use 'are'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими во множественном числе, как 'students', мы используем 'are'."
        }
    ]
};

/* ============================================
Page 6: Using 'to be' with both age and nationality
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page6'] = {
    fillGaps: [
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ 29 years old.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we use 'am' for age statements.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am' для утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for age.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ 30 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'She is 30 years old' is the proper form.",
            correctFeedbackRu: "Правильно! 'She is 30 years old' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'she', we use 'is' for age statements.",
            incorrectFeedbackRu: "Неправильно. С 'she' мы используем 'is' для утверждений о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ 25 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for age statements.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are' for age.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are' для возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My friend ____ 22 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'My friend is 22 years old' is the proper form.",
            correctFeedbackRu: "Правильно! 'My friend is 22 years old' - это правильная форма.",
            incorrectFeedback: "Incorrect. With singular subjects like 'my friend', we use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе, как 'my friend', мы используем 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ 40 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are' for age statements.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are' для утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are' for age.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are' для возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "____ she 35 years old?",
            correctAnswer: "Is",
            options: ["Am", "Is", "Are", "Be"],
            correctFeedback: "Correct! 'Is she 35 years old?' is the proper question form.",
            correctFeedbackRu: "Правильно! 'Is she 35 years old?' - это правильная форма вопроса.",
            incorrectFeedback: "Incorrect. With 'she', we use 'Is' for questions about age.",
            incorrectFeedbackRu: "Неправильно. С 'she' мы используем 'Is' для вопросов о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "We ____ in our thirties.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'We are in our thirties' is the proper form.",
            correctFeedbackRu: "Правильно! 'We are in our thirties' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'we', we use 'are' for age decades.",
            incorrectFeedbackRu: "Неправильно. С 'we' мы используем 'are' для возрастных десятилетий."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "He ____ not 50 years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'He is not 50 years old' is the proper negative form.",
            correctFeedbackRu: "Правильно! 'He is not 50 years old' - это правильная отрицательная форма.",
            incorrectFeedback: "Incorrect. With 'he', we use 'is not' for negations.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы используем 'is not' для отрицаний."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ Portuguese.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'She is Portuguese' uses the correct form for nationality.",
            correctFeedbackRu: "Правильно! 'She is Portuguese' использует правильную форму для национальности.",
            incorrectFeedback: "Incorrect. With 'she', we use 'is' for nationality.",
            incorrectFeedbackRu: "Неправильно. С 'she' мы используем 'is' для национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ teenagers.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'They are teenagers' is the proper form.",
            correctFeedbackRu: "Правильно! 'They are teenagers' - это правильная форма.",
            incorrectFeedback: "Incorrect. With 'they', we use 'are' for describing age groups.",
            incorrectFeedbackRu: "Неправильно. С 'they' мы используем 'are' для описания возрастных групп."
        }
    ]
};

/* ============================================
Page 7: Personal information with "to be"
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page7'] = {
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My name ____ Sarah.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With singular subjects like 'name', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в единственном числе, как 'name', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'name', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'name' нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ Peter.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'I am Peter' uses 'am' correctly for self-introduction.",
            correctFeedbackRu: "Правильно! 'I am Peter' правильно использует 'am' для самопредставления.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for names.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для имен."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My telephone number ____ 555-7890.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With singular subjects like 'telephone number', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в единственном числе, как 'telephone number', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'telephone number', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'telephone number' нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ twenty-six years old.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'She is twenty-six years old' is the proper form in English.",
            correctFeedbackRu: "Правильно! 'She is twenty-six years old' - это правильная форма в английском языке.",
            incorrectFeedback: "Incorrect. In English, we say 'She is twenty-six years old'.",
            incorrectFeedbackRu: "Неправильно. В английском мы говорим 'She is twenty-six years old'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "Her name ____ Anna.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'Her name is Anna' uses 'is' correctly with singular subjects.",
            correctFeedbackRu: "Правильно! 'Her name is Anna' правильно использует 'is' с подлежащими в единственном числе.",
            incorrectFeedback: "Incorrect. With singular subjects like 'name', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе, как 'name', нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "What ____ your nationality?",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'What is your nationality?' is the proper question form.",
            correctFeedbackRu: "Правильно! 'What is your nationality?' - это правильная форма вопроса.",
            incorrectFeedback: "Incorrect. The correct question form is 'What is your nationality?'",
            incorrectFeedbackRu: "Неправильно. Правильная форма вопроса - 'What is your nationality?'"
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "Their names ____ Tom and Sarah.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural subjects like 'names', we use 'are'.",
            correctFeedbackRu: "Правильно! С подлежащими во множественном числе, как 'names', мы используем 'are'.",
            incorrectFeedback: "Incorrect. With 'names', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'names' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Hello! I ____ Carlos.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'Hello! I am Carlos' uses 'am' correctly for self-introduction.",
            correctFeedbackRu: "Правильно! 'Hello! I am Carlos' правильно использует 'am' для самопредставления.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for introductions.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для представлений."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "Our address ____ 123 Main Street.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With singular subjects like 'address', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в единственном числе, как 'address', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'address', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'address' нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "We ____ from Canada.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! 'We are from Canada' uses 'are' correctly with plural subjects.",
            correctFeedbackRu: "Правильно! 'We are from Canada' правильно использует 'are' с подлежащими во множественном числе.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are' for origin statements.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' для утверждений о происхождении."
        }
    ]
};

/* ============================================
Page 8: Talking about yourself with ages
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page8'] = {
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ twenty-five years old.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! When talking about your own age, use 'I am' followed by the age and 'years old'.",
            correctFeedbackRu: "Правильно! Когда вы говорите о своем возрасте, используйте 'I am', затем возраст и 'years old'.",
            incorrectFeedback: "Incorrect. When talking about your own age, always use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Когда вы говорите о своем возрасте, всегда используйте 'I am'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Hi, my name is John and I ____ 30 years old.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! In self-introductions, use 'I am' for your age.",
            correctFeedbackRu: "Правильно! В самопредставлении используйте 'I am' для вашего возраста.",
            incorrectFeedback: "Incorrect. In self-introductions, the correct form is 'I am' for your age.",
            incorrectFeedbackRu: "Неправильно. В самопредставлении правильная форма - 'I am' для вашего возраста."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "In our passports, we ____ both 42 years old.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', use 'are' for age statements.",
            correctFeedbackRu: "Правильно! С 'we' используйте 'are' для утверждений о возрасте.",
            incorrectFeedback: "Incorrect. With 'we', you need to use 'are' in age statements.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are' в утверждениях о возрасте."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "How old ____ you?",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! When asking someone about their age, use 'are' with 'you'.",
            correctFeedbackRu: "Правильно! Когда вы спрашиваете кого-то о его возрасте, используйте 'are' с 'you'.",
            incorrectFeedback: "Incorrect. When asking someone about their age, the correct form is 'are' with 'you'.",
            incorrectFeedbackRu: "Неправильно. Когда вы спрашиваете кого-то о его возрасте, правильная форма - 'are' с 'you'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ in my twenties.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'I am' when expressing your age by decade.",
            correctFeedbackRu: "Правильно! Используйте 'I am' при выражении вашего возраста по десятилетиям.",
            incorrectFeedback: "Incorrect. For expressing age by decade, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для выражения возраста по десятилетиям используйте 'I am'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My birthday ____ next week.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'is' with singular nouns like 'birthday'.",
            correctFeedbackRu: "Правильно! Используйте 'is' с существительными в единственном числе, как 'birthday'.",
            incorrectFeedback: "Incorrect. With singular nouns like 'birthday', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С существительными в единственном числе, как 'birthday', нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "You ____ too young to watch this movie.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'are' with 'you' when commenting on someone's age.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'you' при комментировании чьего-либо возраста.",
            incorrectFeedback: "Incorrect. With 'you', use 'are' when commenting on age.",
            incorrectFeedbackRu: "Неправильно. С 'you' используйте 'are' при комментировании возраста."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ older than my sister by two years.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'I am' when comparing your age with others.",
            correctFeedbackRu: "Правильно! Используйте 'I am' при сравнении своего возраста с другими.",
            incorrectFeedback: "Incorrect. For age comparisons with 'I', use 'am'.",
            incorrectFeedbackRu: "Неправильно. Для сравнений возраста с 'I' используйте 'am'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ the same age as our classmates.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'we are' when talking about your age in relation to others.",
            correctFeedbackRu: "Правильно! Используйте 'we are' при разговоре о вашем возрасте по отношению к другим.",
            incorrectFeedback: "Incorrect. With 'we', use 'are' when discussing age relationships.",
            incorrectFeedbackRu: "Неправильно. С 'we' используйте 'are' при обсуждении возрастных отношений."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "How old do you think I ____?",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! In questions about your own age, use 'I am'.",
            correctFeedbackRu: "Правильно! В вопросах о вашем собственном возрасте используйте 'I am'.",
            incorrectFeedback: "Incorrect. In questions about your own age, the correct form is 'I am'.",
            incorrectFeedbackRu: "Неправильно. В вопросах о вашем собственном возрасте правильная форма - 'I am'."
        }
    ]
};

/* ============================================
Page 9: Talking about yourself with nationality
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page9'] = {
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ from Spain.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! When talking about your own country, use 'I am from'.",
            correctFeedbackRu: "Правильно! Когда вы говорите о своей стране, используйте 'I am from'.",
            incorrectFeedback: "Incorrect. When talking about your country of origin, always use 'I am from'.",
            incorrectFeedbackRu: "Неправильно. Когда вы говорите о стране происхождения, всегда используйте 'I am from'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Hello, I ____ Russian.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'I am' when stating your nationality.",
            correctFeedbackRu: "Правильно! Используйте 'I am' при указании вашей национальности.",
            incorrectFeedback: "Incorrect. With 'I', use 'am' when stating your nationality.",
            incorrectFeedbackRu: "Неправильно. С 'I' используйте 'am' при указании вашей национальности."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ Italian.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'we are' for nationality statements about groups.",
            correctFeedbackRu: "Правильно! Используйте 'we are' для утверждений о национальности групп.",
            incorrectFeedback: "Incorrect. With 'we', use 'are' for nationality statements.",
            incorrectFeedbackRu: "Неправильно. С 'we' используйте 'are' для утверждений о национальности."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "What nationality ____ you?",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! When asking about nationality, use 'are' with 'you'.",
            correctFeedbackRu: "Правильно! При вопросе о национальности используйте 'are' с 'you'.",
            incorrectFeedback: "Incorrect. In questions about nationality with 'you', use 'are'.",
            incorrectFeedbackRu: "Неправильно. В вопросах о национальности с 'you' используйте 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My passport shows that I ____ Canadian.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'I am' when referring to your nationality in documents.",
            correctFeedbackRu: "Правильно! Используйте 'I am' при указании вашей национальности в документах.",
            incorrectFeedback: "Incorrect. When referring to your nationality, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. При указании вашей национальности используйте 'I am'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My parents ____ from Mexico.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'are' with 'parents' (plural) for origin statements.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'parents' (множественное число) для утверждений о происхождении.",
            incorrectFeedback: "Incorrect. With 'parents', use 'are' for origin statements.",
            incorrectFeedbackRu: "Неправильно. С 'parents' используйте 'are' для утверждений о происхождении."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My mother ____ French.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'is' with singular subjects like 'mother'.",
            correctFeedbackRu: "Правильно! Используйте 'is' с подлежащими в единственном числе, как 'mother'.",
            incorrectFeedback: "Incorrect. With singular subjects like 'mother', use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе, как 'mother', используйте 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ British, aren't you?",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'are' with 'you' when confirming someone's nationality.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'you' при подтверждении чьей-либо национальности.",
            incorrectFeedback: "Incorrect. In tag questions about nationality with 'you', use 'are'.",
            incorrectFeedbackRu: "Неправильно. В разделительных вопросах о национальности с 'you' используйте 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ not from the same country.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'we are not' or 'we aren't' in negative statements.",
            correctFeedbackRu: "Правильно! Используйте 'we are not' или 'we aren't' в отрицательных утверждениях.",
            incorrectFeedback: "Incorrect. In negative statements with 'we', use 'are not' or 'aren't'.",
            incorrectFeedbackRu: "Неправильно. В отрицательных утверждениях с 'we' используйте 'are not' или 'aren't'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "I ____ proud to be Japanese.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'I am' when expressing feelings about your nationality.",
            correctFeedbackRu: "Правильно! Используйте 'I am' при выражении чувств о вашей национальности.",
            incorrectFeedback: "Incorrect. When expressing feelings with 'I', use 'am'.",
            incorrectFeedbackRu: "Неправильно. При выражении чувств с 'I' используйте 'am'."
        }
    ]
};

/* ============================================
Page 10: Review of all 'to be' affirmative forms
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-gap-page10'] = {
    fillGaps: [
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "I ____ happy today.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'I', we use 'am'.",
            correctFeedbackRu: "Правильно! С 'I' мы используем 'am'.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am'.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ my sister.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "We ____ friends.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are'.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are'.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct contraction:",
            questionRu: "Заполните пропуск правильным сокращением:",
            sentence: "She ____ a doctor.",
            correctAnswer: "She's",
            options: ["She'm", "She's", "She're", "Shes"],
            correctFeedback: "Correct! 'She's' is the contraction of 'She is'.",
            correctFeedbackRu: "Правильно! 'She's' - это сокращение от 'She is'.",
            incorrectFeedback: "Incorrect. 'She's' is the contraction of 'She is'.",
            incorrectFeedbackRu: "Неправильно. 'She's' - это сокращение от 'She is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "There ____ five people in the room.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural nouns like 'five people', we use 'there are'.",
            correctFeedbackRu: "Правильно! С существительными во множественном числе, как 'five people', мы используем 'there are'.",
            incorrectFeedback: "Incorrect. With plural nouns like 'five people', we need to use 'there are'.",
            incorrectFeedbackRu: "Неправильно. С существительными во множественном числе, как 'five people', нужно использовать 'there are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "You ____ my friend.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'you', we use 'are'.",
            correctFeedbackRu: "Правильно! С 'you' мы используем 'are'.",
            incorrectFeedback: "Incorrect. With 'you', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'you' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "It ____ hot today.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'it', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'it' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'it', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'it' нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct contraction:",
            questionRu: "Заполните пропуск правильным сокращением:",
            sentence: "I ____ from America.",
            correctAnswer: "I'm",
            options: ["I'm", "I's", "I're", "Im"],
            correctFeedback: "Correct! 'I'm' is the contraction of 'I am'.",
            correctFeedbackRu: "Правильно! 'I'm' - это сокращение от 'I am'.",
            incorrectFeedback: "Incorrect. 'I'm' is the contraction of 'I am'.",
            incorrectFeedbackRu: "Неправильно. 'I'm' - это сокращение от 'I am'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The cats ____ black.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'cats' (plural noun), we use 'are'.",
            correctFeedbackRu: "Правильно! С 'cats' (существительное во множественном числе) мы используем 'are'.",
            incorrectFeedback: "Incorrect. With 'cats', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'cats' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My name ____ John.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'name' (singular noun), we use 'is'.",
            correctFeedbackRu: "Правильно! С 'name' (существительное в единственном числе) мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'name', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'name' нужно использовать 'is'."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("'to be' exercises data loaded successfully!");

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Verb 'to be' Fill in the Gaps exercises data loaded successfully!");

/* =============================================================================== */
/* =========================Sentence Building Exercises=========================== */

// Initialize grammar exercises object if it doesn't exist
window.grammarExercises = window.grammarExercises || {};

// Initialize topic hierarchy
window.grammarExercises['to-be'] = window.grammarExercises['to-be'] || {};

/* ============================================
Page 1: Basic subject + be + complement
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page1'] = {
    sentenceBuilding: [
        {
            question: "Form a correct sentence about your age:",
            questionRu: "Составьте правильное предложение о своем возрасте:",
            words: ["I", "am", "22", "years", "old"],
            correctAnswer: "I am 22 years old.",
            correctFeedback: "Excellent! 'I am 22 years old' is the correct way to express your age.",
            correctFeedbackRu: "Отлично! 'I am 22 years old' - правильный способ выразить свой возраст.",
            incorrectFeedback: "Remember: I + am + age + years old.",
            incorrectFeedbackRu: "Помните: I + am + возраст + years old."
        },
        {
            question: "Create a sentence about your name:",
            questionRu: "Составьте предложение о своем имени:",
            words: ["my", "name", "is", "Sarah"],
            correctAnswer: "My name is Sarah.",
            correctFeedback: "Perfect! 'My name is Sarah' is the correct way to introduce yourself.",
            correctFeedbackRu: "Идеально! 'My name is Sarah' - правильный способ представиться.",
            incorrectFeedback: "Remember: My + name + is + [your name].",
            incorrectFeedbackRu: "Помните: My + name + is + [ваше имя]."
        },
        {
            question: "Form a sentence about your nationality:",
            questionRu: "Составьте предложение о своей национальности:",
            words: ["I", "am", "American"],
            correctAnswer: "I am American.",
            correctFeedback: "Great! 'I am American' is the correct way to state your nationality.",
            correctFeedbackRu: "Отлично! 'I am American' - правильный способ указать свою национальность.",
            incorrectFeedback: "Remember: I + am + nationality.",
            incorrectFeedbackRu: "Помните: I + am + национальность."
        },
        {
            question: "Create a sentence about where you're from:",
            questionRu: "Составьте предложение о том, откуда вы:",
            words: ["I", "am", "from", "Canada"],
            correctAnswer: "I am from Canada.",
            correctFeedback: "Excellent! 'I am from Canada' correctly expresses your origin.",
            correctFeedbackRu: "Отлично! 'I am from Canada' правильно выражает ваше происхождение.",
            incorrectFeedback: "Remember: I + am + from + country/place.",
            incorrectFeedbackRu: "Помните: I + am + from + страна/место."
        },
        {
            question: "Form a sentence combining age and nationality:",
            questionRu: "Составьте предложение, сочетающее возраст и национальность:",
            words: ["I", "am", "25", "and", "I", "am", "British"],
            correctAnswer: "I am 25 and I am British.",
            correctFeedback: "Perfect! You correctly combined age and nationality information.",
            correctFeedbackRu: "Идеально! Вы правильно объединили информацию о возрасте и национальности.",
            incorrectFeedback: "Remember: I am [age] and I am [nationality].",
            incorrectFeedbackRu: "Помните: I am [возраст] and I am [национальность]."
        },
        {
            question: "Create a sentence about your age decade:",
            questionRu: "Составьте предложение о возрастном десятилетии:",
            words: ["I", "am", "in", "my", "twenties"],
            correctAnswer: "I am in my twenties.",
            correctFeedback: "Great! 'I am in my twenties' is the correct way to express age by decade.",
            correctFeedbackRu: "Отлично! 'I am in my twenties' - правильный способ выразить возраст по десятилетиям.",
            incorrectFeedback: "Remember: I am in my + [decade].",
            incorrectFeedbackRu: "Помните: I am in my + [десятилетие]."
        },
        {
            question: "Form a complete self-introduction:",
            questionRu: "Составьте полное самопредставление:",
            words: ["Hi", "I", "am", "John", "and", "I", "am", "30", "years", "old"],
            correctAnswer: "Hi, I am John and I am 30 years old.",
            correctFeedback: "Excellent! This is a perfect self-introduction with name and age.",
            correctFeedbackRu: "Отлично! Это идеальное самопредставление с именем и возрастом.",
            incorrectFeedback: "Remember: Hi, I am [name] and I am [age] years old.",
            incorrectFeedbackRu: "Помните: Hi, I am [имя] and I am [возраст] years old."
        },
        {
            question: "Create a sentence about exact age:",
            questionRu: "Составьте предложение о точном возрасте:",
            words: ["I", "am", "exactly", "27", "years", "old"],
            correctAnswer: "I am exactly 27 years old.",
            correctFeedback: "Perfect! 'Exactly' emphasizes the precise age.",
            correctFeedbackRu: "Идеально! 'Exactly' подчеркивает точный возраст.",
            incorrectFeedback: "Remember: I am exactly + age + years old.",
            incorrectFeedbackRu: "Помните: I am exactly + возраст + years old."
        },
        {
            question: "Form a sentence about being proud of nationality:",
            questionRu: "Составьте предложение о гордости за национальность:",
            words: ["I", "am", "proud", "to", "be", "Italian"],
            correctAnswer: "I am proud to be Italian.",
            correctFeedback: "Great! This expresses pride in your nationality.",
            correctFeedbackRu: "Отлично! Это выражает гордость за вашу национальность.",
            incorrectFeedback: "Remember: I am proud to be + nationality.",
            incorrectFeedbackRu: "Помните: I am proud to be + национальность."
        },
        {
            question: "Create a complete personal introduction:",
            questionRu: "Составьте полное личное представление:",
            words: ["Hello", "I", "am", "Maria", "I", "am", "from", "Spain", "and", "I", "am", "24"],
            correctAnswer: "Hello, I am Maria, I am from Spain and I am 24.",
            correctFeedback: "Excellent! This is a complete introduction with name, origin, and age.",
            correctFeedbackRu: "Отлично! Это полное представление с именем, происхождением и возрастом.",
            incorrectFeedback: "Remember: Hello, I am [name], I am from [country] and I am [age].",
            incorrectFeedbackRu: "Помните: Hello, I am [имя], I am from [страна] and I am [возраст]."
        }
    ]
};

/* ============================================
Page 2: Names, professions, and descriptions
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page2'] = {
    sentenceBuilding: [
        {
            question: "Form a sentence about someone's age:",
            questionRu: "Составьте предложение о чьем-то возрасте:",
            words: ["She", "is", "27", "years", "old"],
            correctAnswer: "She is 27 years old.",
            correctFeedback: "Excellent! 'She is 27 years old' is correct for talking about someone else's age.",
            correctFeedbackRu: "Отлично! 'She is 27 years old' правильно для разговора о чужом возрасте.",
            incorrectFeedback: "Remember: She + is + age + years old.",
            incorrectFeedbackRu: "Помните: She + is + возраст + years old."
        },
        {
            question: "Form a sentence about nationality:",
            questionRu: "Составьте предложение о национальности:",
            words: ["He", "is", "French"],
            correctAnswer: "He is French.",
            correctFeedback: "Perfect! 'He is French' correctly states his nationality.",
            correctFeedbackRu: "Идеально! 'He is French' правильно указывает его национальность.",
            incorrectFeedback: "Use: He + is + nationality.",
            incorrectFeedbackRu: "Используйте: He + is + национальность."
        },
        {
            question: "Form a sentence about age:",
            questionRu: "Составьте предложение о возрасте:",
            words: ["He", "is", "35", "years", "old"],
            correctAnswer: "He is 35 years old.",
            correctFeedback: "Great! 'He is 35 years old' is the correct form.",
            correctFeedbackRu: "Отлично! 'He is 35 years old' - правильная форма.",
            incorrectFeedback: "Follow this pattern: He + is + age + years old.",
            incorrectFeedbackRu: "Следуйте этой схеме: He + is + возраст + years old."
        },
        {
            question: "Form a sentence about nationality:",
            questionRu: "Составьте предложение о национальности:",
            words: ["She", "is", "Italian"],
            correctAnswer: "She is Italian.",
            correctFeedback: "Excellent! 'She is Italian' expresses her nationality correctly.",
            correctFeedbackRu: "Отлично! 'She is Italian' правильно выражает её национальность.",
            incorrectFeedback: "Remember: She + is + nationality.",
            incorrectFeedbackRu: "Помните: She + is + национальность."
        },
        {
            question: "Form a sentence about age:",
            questionRu: "Составьте предложение о возрасте:",
            words: ["She", "is", "21", "years", "old"],
            correctAnswer: "She is 21 years old.",
            correctFeedback: "Perfect! 'She is 21 years old' is completely right.",
            correctFeedbackRu: "Идеально! 'She is 21 years old' совершенно правильно.",
            incorrectFeedback: "Use this structure: She + is + number + years old.",
            incorrectFeedbackRu: "Используйте эту структуру: She + is + число + years old."
        },
        {
            question: "Form a sentence about nationality:",
            questionRu: "Составьте предложение о национальности:",
            words: ["He", "is", "Spanish"],
            correctAnswer: "He is Spanish.",
            correctFeedback: "Great job! 'He is Spanish' correctly states his nationality.",
            correctFeedbackRu: "Отличная работа! 'He is Spanish' правильно указывает его национальность.",
            incorrectFeedback: "Follow: He + is + nationality.",
            incorrectFeedbackRu: "Следуйте: He + is + национальность."
        },
        {
            question: "Form a sentence about age:",
            questionRu: "Составьте предложение о возрасте:",
            words: ["He", "is", "19", "years", "old"],
            correctAnswer: "He is 19 years old.",
            correctFeedback: "Excellent! 'He is 19 years old' is the correct way to express his age.",
            correctFeedbackRu: "Отлично! 'He is 19 years old' - правильный способ выразить его возраст.",
            incorrectFeedback: "Remember the order: He + is + age + years old.",
            incorrectFeedbackRu: "Помните порядок: He + is + возраст + years old."
        },
        {
            question: "Form a sentence about nationality:",
            questionRu: "Составьте предложение о национальности:",
            words: ["She", "is", "German"],
            correctAnswer: "She is German.",
            correctFeedback: "Perfect! 'She is German' is the right form for nationality.",
            correctFeedbackRu: "Идеально! 'She is German' - правильная форма для национальности.",
            incorrectFeedback: "Use: She + is + nationality.",
            incorrectFeedbackRu: "Используйте: She + is + национальность."
        },
        {
            question: "Form a sentence about age:",
            questionRu: "Составьте предложение о возрасте:",
            words: ["She", "is", "40", "years", "old"],
            correctAnswer: "She is 40 years old.",
            correctFeedback: "Great! 'She is 40 years old' expresses her age perfectly.",
            correctFeedbackRu: "Отлично! 'She is 40 years old' идеально выражает её возраст.",
            incorrectFeedback: "Check the pattern: She + is + age + years old.",
            incorrectFeedbackRu: "Проверьте схему: She + is + возраст + years old."
        },
        {
            question: "Form a sentence about nationality:",
            questionRu: "Составьте предложение о национальности:",
            words: ["He", "is", "Japanese"],
            correctAnswer: "He is Japanese.",
            correctFeedback: "Excellent! 'He is Japanese' correctly describes his nationality.",
            correctFeedbackRu: "Отлично! 'He is Japanese' правильно описывает его национальность.",
            incorrectFeedback: "Remember: He + is + nationality.",
            incorrectFeedbackRu: "Помните: He + is + национальность."
        }
    ]
};

/* ============================================
Page 3: Personal information with to be
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page3'] = {
    sentenceBuilding: [
        {
            question: "Form a sentence about plural subjects and age:",
            questionRu: "Составьте предложение о подлежащих во множественном числе и возрасте:",
            words: ["We", "are", "25", "years", "old"],
            correctAnswer: "We are 25 years old.",
            correctFeedback: "Perfect! 'We are 25 years old' is correct for plural subjects.",
            correctFeedbackRu: "Идеально! 'We are 25 years old' правильно для подлежащих во множественном числе.",
            incorrectFeedback: "Remember: We + are + age + years old.",
            incorrectFeedbackRu: "Помните: We + are + возраст + years old."
        },
        {
            question: "Form a sentence about nationality:",
            questionRu: "Составьте предложение о национальности:",
            words: ["You", "are", "Brazilian"],
            correctAnswer: "You are Brazilian.",
            correctFeedback: "Excellent! 'You are Brazilian' correctly states nationality.",
            correctFeedbackRu: "Отлично! 'You are Brazilian' правильно указывает национальность.",
            incorrectFeedback: "Use: You + are + nationality.",
            incorrectFeedbackRu: "Используйте: You + are + национальность."
        },
        {
            question: "Form a sentence about age:",
            questionRu: "Составьте предложение о возрасте:",
            words: ["They", "are", "30", "years", "old"],
            correctAnswer: "They are 30 years old.",
            correctFeedback: "Great! 'They are 30 years old' is the correct plural form.",
            correctFeedbackRu: "Отлично! 'They are 30 years old' - правильная форма множественного числа.",
            incorrectFeedback: "Follow: They + are + age + years old.",
            incorrectFeedbackRu: "Следуйте: They + are + возраст + years old."
        },
        {
            question: "Form a sentence about nationality:",
            questionRu: "Составьте предложение о национальности:",
            words: ["We", "are", "Mexican"],
            correctAnswer: "We are Mexican.",
            correctFeedback: "Perfect! 'We are Mexican' expresses our nationality correctly.",
            correctFeedbackRu: "Идеально! 'We are Mexican' правильно выражает нашу национальность.",
            incorrectFeedback: "Remember: We + are + nationality.",
            incorrectFeedbackRu: "Помните: We + are + национальность."
        },
        {
            question: "Form a sentence about age:",
            questionRu: "Составьте предложение о возрасте:",
            words: ["You", "are", "22", "years", "old"],
            correctAnswer: "You are 22 years old.",
            correctFeedback: "Excellent! 'You are 22 years old' is the right way to address someone's age.",
            correctFeedbackRu: "Отлично! 'You are 22 years old' - правильный способ обратиться к чьему-то возрасту.",
            incorrectFeedback: "Use this pattern: You + are + age + years old.",
            incorrectFeedbackRu: "Используйте эту схему: You + are + возраст + years old."
        },
        {
            question: "Form a sentence about nationality:",
            questionRu: "Составьте предложение о национальности:",
            words: ["They", "are", "Chinese"],
            correctAnswer: "They are Chinese.",
            correctFeedback: "Great job! 'They are Chinese' correctly describes their nationality.",
            correctFeedbackRu: "Отличная работа! 'They are Chinese' правильно описывает их национальность.",
            incorrectFeedback: "Follow: They + are + nationality.",
            incorrectFeedbackRu: "Следуйте: They + are + национальность."
        },
        {
            question: "Form a sentence about age:",
            questionRu: "Составьте предложение о возрасте:",
            words: ["We", "are", "28", "years", "old"],
            correctAnswer: "We are 28 years old.",
            correctFeedback: "Perfect! 'We are 28 years old' expresses our age correctly.",
            correctFeedbackRu: "Идеально! 'We are 28 years old' правильно выражает наш возраст.",
            incorrectFeedback: "Remember the structure: We + are + age + years old.",
            incorrectFeedbackRu: "Помните структуру: We + are + возраст + years old."
        },
        {
            question: "Form a sentence about nationality:",
            questionRu: "Составьте предложение о национальности:",
            words: ["You", "are", "Korean"],
            correctAnswer: "You are Korean.",
            correctFeedback: "Excellent! 'You are Korean' is the correct form for addressing nationality.",
            correctFeedbackRu: "Отлично! 'You are Korean' - правильная форма для обращения к национальности.",
            incorrectFeedback: "Use: You + are + nationality.",
            incorrectFeedbackRu: "Используйте: You + are + национальность."
        },
        {
            question: "Form a sentence about age:",
            questionRu: "Составьте предложение о возрасте:",
            words: ["They", "are", "35", "years", "old"],
            correctAnswer: "They are 35 years old.",
            correctFeedback: "Great! 'They are 35 years old' is perfectly correct for plural subjects.",
            correctFeedbackRu: "Отлично! 'They are 35 years old' совершенно правильно для подлежащих во множественном числе.",
            incorrectFeedback: "Check this pattern: They + are + age + years old.",
            incorrectFeedbackRu: "Проверьте эту схему: They + are + возраст + years old."
        },
        {
            question: "Form a sentence about nationality:",
            questionRu: "Составьте предложение о национальности:",
            words: ["We", "are", "Indian"],
            correctAnswer: "We are Indian.",
            correctFeedback: "Perfect! 'We are Indian' correctly states our nationality.",
            correctFeedbackRu: "Идеально! 'We are Indian' правильно указывает нашу национальность.",
            incorrectFeedback: "Remember: We + are + nationality.",
            incorrectFeedbackRu: "Помните: We + are + национальность."
        }
    ]
};

/* ============================================
Page 4: Nationalities and languages
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page4'] = {
    sentenceBuilding: [
        {
            question: "Form a sentence with a name and age:",
            questionRu: "Составьте предложение с именем и возрастом:",
            words: ["My", "name", "is", "John", "and", "I", "am", "24", "years", "old"],
            correctAnswer: "My name is John and I am 24 years old.",
            correctFeedback: "Excellent! This sentence combines name and age information perfectly.",
            correctFeedbackRu: "Отлично! Это предложение идеально сочетает информацию об имени и возрасте.",
            incorrectFeedback: "Remember: My name is [name] and I am [age] years old.",
            incorrectFeedbackRu: "Помните: My name is [имя] and I am [возраст] years old."
        },
        {
            question: "Form a sentence about someone with name and nationality:",
            questionRu: "Составьте предложение о ком-то с именем и национальностью:",
            words: ["Her", "name", "is", "Maria", "and", "she", "is", "Spanish"],
            correctAnswer: "Her name is Maria and she is Spanish.",
            correctFeedback: "Perfect! This combines name and nationality information correctly.",
            correctFeedbackRu: "Идеально! Это правильно сочетает информацию об имени и национальности.",
            incorrectFeedback: "Use: Her name is [name] and she is [nationality].",
            incorrectFeedbackRu: "Используйте: Her name is [имя] and she is [национальность]."
        },
        {
            question: "Form a sentence about yourself with age and nationality:",
            questionRu: "Составьте предложение о себе с возрастом и национальностью:",
            words: ["I", "am", "26", "years", "old", "and", "I", "am", "American"],
            correctAnswer: "I am 26 years old and I am American.",
            correctFeedback: "Great! This sentence perfectly combines age and nationality.",
            correctFeedbackRu: "Отлично! Это предложение идеально сочетает возраст и национальность.",
            incorrectFeedback: "Remember: I am [age] years old and I am [nationality].",
            incorrectFeedbackRu: "Помните: I am [возраст] years old and I am [национальность]."
        },
        {
            question: "Form a sentence with name and nationality:",
            questionRu: "Составьте предложение с именем и национальностью:",
            words: ["His", "name", "is", "Pierre", "and", "he", "is", "French"],
            correctAnswer: "His name is Pierre and he is French.",
            correctFeedback: "Excellent! This correctly states both name and nationality.",
            correctFeedbackRu: "Отлично! Это правильно указывает и имя, и национальность.",
            incorrectFeedback: "Follow: His name is [name] and he is [nationality].",
            incorrectFeedbackRu: "Следуйте: His name is [имя] and he is [национальность]."
        },
        {
            question: "Form a sentence about age and nationality:",
            questionRu: "Составьте предложение о возрасте и национальности:",
            words: ["She", "is", "29", "years", "old", "and", "she", "is", "Italian"],
            correctAnswer: "She is 29 years old and she is Italian.",
            correctFeedback: "Perfect! This combines age and nationality information beautifully.",
            correctFeedbackRu: "Идеально! Это прекрасно сочетает информацию о возрасте и национальности.",
            incorrectFeedback: "Use: She is [age] years old and she is [nationality].",
            incorrectFeedbackRu: "Используйте: She is [возраст] years old and she is [национальность]."
        },
        {
            question: "Form a sentence with name and age:",
            questionRu: "Составьте предложение с именем и возрастом:",
            words: ["My", "name", "is", "Sarah", "and", "I", "am", "31", "years", "old"],
            correctAnswer: "My name is Sarah and I am 31 years old.",
            correctFeedback: "Great job! This introduction sentence is perfectly formed.",
            correctFeedbackRu: "Отличная работа! Это представительное предложение идеально сформировано.",
            incorrectFeedback: "Remember the pattern: My name is [name] and I am [age] years old.",
            incorrectFeedbackRu: "Помните схему: My name is [имя] and I am [возраст] years old."
        },
        {
            question: "Form a sentence about someone with age and nationality:",
            questionRu: "Составьте предложение о ком-то с возрастом и национальностью:",
            words: ["He", "is", "33", "years", "old", "and", "he", "is", "German"],
            correctAnswer: "He is 33 years old and he is German.",
            correctFeedback: "Excellent! This describes both his age and nationality correctly.",
            correctFeedbackRu: "Отлично! Это правильно описывает и его возраст, и национальность.",
            incorrectFeedback: "Follow: He is [age] years old and he is [nationality].",
            incorrectFeedbackRu: "Следуйте: He is [возраст] years old and he is [национальность]."
        },
        {
            question: "Form a sentence with name and nationality:",
            questionRu: "Составьте предложение с именем и национальностью:",
            words: ["Her", "name", "is", "Yuki", "and", "she", "is", "Japanese"],
            correctAnswer: "Her name is Yuki and she is Japanese.",
            correctFeedback: "Perfect! This introduces someone with both name and nationality.",
            correctFeedbackRu: "Идеально! Это представляет кого-то с именем и национальностью.",
            incorrectFeedback: "Use: Her name is [name] and she is [nationality].",
            incorrectFeedbackRu: "Используйте: Her name is [имя] and she is [национальность]."
        },
        {
            question: "Form a sentence about yourself:",
            questionRu: "Составьте предложение о себе:",
            words: ["I", "am", "27", "years", "old", "and", "I", "am", "Canadian"],
            correctAnswer: "I am 27 years old and I am Canadian.",
            correctFeedback: "Great! This is a perfect self-introduction with age and nationality.",
            correctFeedbackRu: "Отлично! Это идеальное самопредставление с возрастом и национальностью.",
            incorrectFeedback: "Remember: I am [age] years old and I am [nationality].",
            incorrectFeedbackRu: "Помните: I am [возраст] years old and I am [национальность]."
        },
        {
            question: "Form a sentence with name and age:",
            questionRu: "Составьте предложение с именем и возрастом:",
            words: ["His", "name", "is", "David", "and", "he", "is", "28", "years", "old"],
            correctAnswer: "His name is David and he is 28 years old.",
            correctFeedback: "Excellent! This perfectly introduces someone with name and age.",
            correctFeedbackRu: "Отлично! Это идеально представляет кого-то с именем и возрастом.",
            incorrectFeedback: "Follow: His name is [name] and he is [age] years old.",
            incorrectFeedbackRu: "Следуйте: His name is [имя] and he is [возраст] years old."
        }
    ]
};

/* ============================================
Page 5: Questions with "to be" about age and nationality
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page5'] = {
    sentenceBuilding: [
        {
            question: "Form a question about age:",
            questionRu: "Составьте вопрос о возрасте:",
            words: ["How", "old", "are", "you"],
            correctAnswer: "How old are you?",
            correctFeedback: "Perfect! 'How old are you?' is the standard way to ask about age.",
            correctFeedbackRu: "Идеально! 'How old are you?' - стандартный способ спросить о возрасте.",
            incorrectFeedback: "Remember: How old + are + you + ?",
            incorrectFeedbackRu: "Помните: How old + are + you + ?"
        },
        {
            question: "Form a question about nationality:",
            questionRu: "Составьте вопрос о национальности:",
            words: ["What", "nationality", "are", "you"],
            correctAnswer: "What nationality are you?",
            correctFeedback: "Excellent! 'What nationality are you?' is the correct question form.",
            correctFeedbackRu: "Отлично! 'What nationality are you?' - правильная форма вопроса.",
            incorrectFeedback: "Use: What nationality + are + you + ?",
            incorrectFeedbackRu: "Используйте: What nationality + are + you + ?"
        },
        {
            question: "Form a question about someone's age:",
            questionRu: "Составьте вопрос о чьем-то возрасте:",
            words: ["How", "old", "is", "she"],
            correctAnswer: "How old is she?",
            correctFeedback: "Great! 'How old is she?' is the correct way to ask about someone else's age.",
            correctFeedbackRu: "Отлично! 'How old is she?' - правильный способ спросить о чужом возрасте.",
            incorrectFeedback: "Remember: How old + is + she + ?",
            incorrectFeedbackRu: "Помните: How old + is + she + ?"
        },
        {
            question: "Form a question about nationality:",
            questionRu: "Составьте вопрос о национальности:",
            words: ["Are", "you", "American"],
            correctAnswer: "Are you American?",
            correctFeedback: "Perfect! 'Are you American?' is a direct way to ask about nationality.",
            correctFeedbackRu: "Идеально! 'Are you American?' - прямой способ спросить о национальности.",
            incorrectFeedback: "Use: Are + you + nationality + ?",
            incorrectFeedbackRu: "Используйте: Are + you + национальность + ?"
        },
        {
            question: "Form a question about someone's nationality:",
            questionRu: "Составьте вопрос о чьей-то национальности:",
            words: ["Is", "he", "British"],
            correctAnswer: "Is he British?",
            correctFeedback: "Excellent! 'Is he British?' correctly asks about his nationality.",
            correctFeedbackRu: "Отлично! 'Is he British?' правильно спрашивает о его национальности.",
            incorrectFeedback: "Follow: Is + he + nationality + ?",
            incorrectFeedbackRu: "Следуйте: Is + he + национальность + ?"
        },
        {
            question: "Form a question about age:",
            questionRu: "Составьте вопрос о возрасте:",
            words: ["How", "old", "is", "your", "brother"],
            correctAnswer: "How old is your brother?",
            correctFeedback: "Great! 'How old is your brother?' asks about a family member's age.",
            correctFeedbackRu: "Отлично! 'How old is your brother?' спрашивает о возрасте члена семьи.",
            incorrectFeedback: "Remember: How old + is + your brother + ?",
            incorrectFeedbackRu: "Помните: How old + is + your brother + ?"
        },
        {
            question: "Form a question about nationality:",
            questionRu: "Составьте вопрос о национальности:",
            words: ["Are", "they", "Chinese"],
            correctAnswer: "Are they Chinese?",
            correctFeedback: "Perfect! 'Are they Chinese?' asks about multiple people's nationality.",
            correctFeedbackRu: "Идеально! 'Are they Chinese?' спрашивает о национальности нескольких людей.",
            incorrectFeedback: "Use: Are + they + nationality + ?",
            incorrectFeedbackRu: "Используйте: Are + they + национальность + ?"
        },
        {
            question: "Form a question about age:",
            questionRu: "Составьте вопрос о возрасте:",
            words: ["How", "old", "are", "your", "parents"],
            correctAnswer: "How old are your parents?",
            correctFeedback: "Excellent! 'How old are your parents?' asks about parents' age.",
            correctFeedbackRu: "Отлично! 'How old are your parents?' спрашивает о возрасте родителей.",
            incorrectFeedback: "Follow: How old + are + your parents + ?",
            incorrectFeedbackRu: "Следуйте: How old + are + your parents + ?"
        },
        {
            question: "Form a question about nationality:",
            questionRu: "Составьте вопрос о национальности:",
            words: ["Is", "your", "friend", "Italian"],
            correctAnswer: "Is your friend Italian?",
            correctFeedback: "Great! 'Is your friend Italian?' asks about a friend's nationality.",
            correctFeedbackRu: "Отлично! 'Is your friend Italian?' спрашивает о национальности друга.",
            incorrectFeedback: "Remember: Is + your friend + nationality + ?",
            incorrectFeedbackRu: "Помните: Is + your friend + национальность + ?"
        },
        {
            question: "Form a question about age:",
            questionRu: "Составьте вопрос о возрасте:",
            words: ["How", "old", "is", "he"],
            correctAnswer: "How old is he?",
            correctFeedback: "Perfect! 'How old is he?' is the simple way to ask about a man's age.",
            correctFeedbackRu: "Идеально! 'How old is he?' - простой способ спросить о возрасте мужчины.",
            incorrectFeedback: "Use: How old + is + he + ?",
            incorrectFeedbackRu: "Используйте: How old + is + he + ?"
        }
    ]
};

/* ============================================
Page 6: Negative sentences with "to be" about age and nationality
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page6'] = {
    sentenceBuilding: [
        {
            question: "Form a negative sentence about age:",
            questionRu: "Составьте отрицательное предложение о возрасте:",
            words: ["I", "am", "not", "25", "years", "old"],
            correctAnswer: "I am not 25 years old.",
            correctFeedback: "Perfect! 'I am not 25 years old' correctly negates age information.",
            correctFeedbackRu: "Идеально! 'I am not 25 years old' правильно отрицает информацию о возрасте.",
            incorrectFeedback: "Remember: I + am not + age + years old.",
            incorrectFeedbackRu: "Помните: I + am not + возраст + years old."
        },
        {
            question: "Form a negative sentence about nationality:",
            questionRu: "Составьте отрицательное предложение о национальности:",
            words: ["She", "is", "not", "American"],
            correctAnswer: "She is not American.",
            correctFeedback: "Excellent! 'She is not American' correctly states what nationality she isn't.",
            correctFeedbackRu: "Отлично! 'She is not American' правильно указывает, какой национальности она не является.",
            incorrectFeedback: "Use: She + is not + nationality.",
            incorrectFeedbackRu: "Используйте: She + is not + национальность."
        },
        {
            question: "Form a negative sentence about age:",
            questionRu: "Составьте отрицательное предложение о возрасте:",
            words: ["He", "is", "not", "30", "years", "old"],
            correctAnswer: "He is not 30 years old.",
            correctFeedback: "Great! 'He is not 30 years old' negates his age correctly.",
            correctFeedbackRu: "Отлично! 'He is not 30 years old' правильно отрицает его возраст.",
            incorrectFeedback: "Follow: He + is not + age + years old.",
            incorrectFeedbackRu: "Следуйте: He + is not + возраст + years old."
        },
        {
            question: "Form a negative sentence about nationality:",
            questionRu: "Составьте отрицательное предложение о национальности:",
            words: ["We", "are", "not", "French"],
            correctAnswer: "We are not French.",
            correctFeedback: "Perfect! 'We are not French' correctly negates nationality for plural subjects.",
            correctFeedbackRu: "Идеально! 'We are not French' правильно отрицает национальность для подлежащих во множественном числе.",
            incorrectFeedback: "Remember: We + are not + nationality.",
            incorrectFeedbackRu: "Помните: We + are not + национальность."
        },
        {
            question: "Form a negative sentence about age:",
            questionRu: "Составьте отрицательное предложение о возрасте:",
            words: ["They", "are", "not", "18", "years", "old"],
            correctAnswer: "They are not 18 years old.",
            correctFeedback: "Excellent! 'They are not 18 years old' correctly negates their age.",
            correctFeedbackRu: "Отлично! 'They are not 18 years old' правильно отрицает их возраст.",
            incorrectFeedback: "Use: They + are not + age + years old.",
            incorrectFeedbackRu: "Используйте: They + are not + возраст + years old."
        },
        {
            question: "Form a negative sentence about nationality:",
            questionRu: "Составьте отрицательное предложение о национальности:",
            words: ["You", "are", "not", "German"],
            correctAnswer: "You are not German.",
            correctFeedback: "Great! 'You are not German' correctly negates nationality.",
            correctFeedbackRu: "Отлично! 'You are not German' правильно отрицает национальность.",
            incorrectFeedback: "Follow: You + are not + nationality.",
            incorrectFeedbackRu: "Следуйте: You + are not + национальность."
        },
        {
            question: "Form a negative sentence about age:",
            questionRu: "Составьте отрицательное предложение о возрасте:",
            words: ["I", "am", "not", "40", "years", "old"],
            correctAnswer: "I am not 40 years old.",
            correctFeedback: "Perfect! 'I am not 40 years old' is the correct negative form.",
            correctFeedbackRu: "Идеально! 'I am not 40 years old' - правильная отрицательная форма.",
            incorrectFeedback: "Remember: I + am not + age + years old.",
            incorrectFeedbackRu: "Помните: I + am not + возраст + years old."
        },
        {
            question: "Form a negative sentence about nationality:",
            questionRu: "Составьте отрицательное предложение о национальности:",
            words: ["He", "is", "not", "Spanish"],
            correctAnswer: "He is not Spanish.",
            correctFeedback: "Excellent! 'He is not Spanish' correctly states what he isn't.",
            correctFeedbackRu: "Отлично! 'He is not Spanish' правильно указывает, кем он не является.",
            incorrectFeedback: "Use: He + is not + nationality.",
            incorrectFeedbackRu: "Используйте: He + is not + национальность."
        },
        {
            question: "Form a negative sentence about age:",
            questionRu: "Составьте отрицательное предложение о возрасте:",
            words: ["She", "is", "not", "22", "years", "old"],
            correctAnswer: "She is not 22 years old.",
            correctFeedback: "Great! 'She is not 22 years old' negates her age properly.",
            correctFeedbackRu: "Отлично! 'She is not 22 years old' правильно отрицает её возраст.",
            incorrectFeedback: "Follow: She + is not + age + years old.",
            incorrectFeedbackRu: "Следуйте: She + is not + возраст + years old."
        },
        {
            question: "Form a negative sentence about nationality:",
            questionRu: "Составьте отрицательное предложение о национальности:",
            words: ["They", "are", "not", "Japanese"],
            correctAnswer: "They are not Japanese.",
            correctFeedback: "Perfect! 'They are not Japanese' correctly negates their nationality.",
            correctFeedbackRu: "Идеально! 'They are not Japanese' правильно отрицает их национальность.",
            incorrectFeedback: "Remember: They + are not + nationality.",
            incorrectFeedbackRu: "Помните: They + are not + национальность."
        }
    ]
};

/* ============================================
Page 7: "Where are you from?" sentences and responses
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page7'] = {
    sentenceBuilding: [
        {
            question: "Form a question about origin:",
            questionRu: "Составьте вопрос о происхождении:",
            words: ["Where", "are", "you", "from"],
            correctAnswer: "Where are you from?",
            correctFeedback: "Perfect! 'Where are you from?' is the standard way to ask about someone's origin.",
            correctFeedbackRu: "Идеально! 'Where are you from?' - стандартный способ спросить о чьем-то происхождении.",
            incorrectFeedback: "Remember: Where + are + you + from + ?",
            incorrectFeedbackRu: "Помните: Where + are + you + from + ?"
        },
        {
            question: "Form a response about your origin:",
            questionRu: "Составьте ответ о своем происхождении:",
            words: ["I", "am", "from", "Canada"],
            correctAnswer: "I am from Canada.",
            correctFeedback: "Excellent! 'I am from Canada' is the correct way to state your origin.",
            correctFeedbackRu: "Отлично! 'I am from Canada' - правильный способ указать свое происхождение.",
            incorrectFeedback: "Use: I + am from + country.",
            incorrectFeedbackRu: "Используйте: I + am from + страна."
        },
        {
            question: "Form a question about someone's origin:",
            questionRu: "Составьте вопрос о чьем-то происхождении:",
            words: ["Where", "is", "she", "from"],
            correctAnswer: "Where is she from?",
            correctFeedback: "Great! 'Where is she from?' asks about her place of origin.",
            correctFeedbackRu: "Отлично! 'Where is she from?' спрашивает о месте её происхождения.",
            incorrectFeedback: "Follow: Where + is + she + from + ?",
            incorrectFeedbackRu: "Следуйте: Where + is + she + from + ?"
        },
        {
            question: "Form a response about someone's origin:",
            questionRu: "Составьте ответ о чьем-то происхождении:",
            words: ["He", "is", "from", "Brazil"],
            correctAnswer: "He is from Brazil.",
            correctFeedback: "Perfect! 'He is from Brazil' correctly states his country of origin.",
            correctFeedbackRu: "Идеально! 'He is from Brazil' правильно указывает его страну происхождения.",
            incorrectFeedback: "Remember: He + is from + country.",
            incorrectFeedbackRu: "Помните: He + is from + страна."
        },
        {
            question: "Form a response about origin:",
            questionRu: "Составьте ответ о происхождении:",
            words: ["We", "are", "from", "Australia"],
            correctAnswer: "We are from Australia.",
            correctFeedback: "Excellent! 'We are from Australia' states where you all come from.",
            correctFeedbackRu: "Отлично! 'We are from Australia' указывает, откуда вы все родом.",
            incorrectFeedback: "Use: We + are from + country.",
            incorrectFeedbackRu: "Используйте: We + are from + страна."
        },
        {
            question: "Form a question about multiple people's origin:",
            questionRu: "Составьте вопрос о происхождении нескольких людей:",
            words: ["Where", "are", "they", "from"],
            correctAnswer: "Where are they from?",
            correctFeedback: "Great! 'Where are they from?' asks about multiple people's origin.",
            correctFeedbackRu: "Отлично! 'Where are they from?' спрашивает о происхождении нескольких людей.",
            incorrectFeedback: "Follow: Where + are + they + from + ?",
            incorrectFeedbackRu: "Следуйте: Where + are + they + from + ?"
        },
        {
            question: "Form a response about multiple people's origin:",
            questionRu: "Составьте ответ о происхождении нескольких людей:",
            words: ["They", "are", "from", "Japan"],
            correctAnswer: "They are from Japan.",
            correctFeedback: "Perfect! 'They are from Japan' tells us their country of origin.",
            correctFeedbackRu: "Идеально! 'They are from Japan' сообщает нам их страну происхождения.",
            incorrectFeedback: "Remember: They + are from + country.",
            incorrectFeedbackRu: "Помните: They + are from + страна."
        },
        {
            question: "Form a response about your origin:",
            questionRu: "Составьте ответ о своем происхождении:",
            words: ["I", "am", "from", "Mexico"],
            correctAnswer: "I am from Mexico.",
            correctFeedback: "Excellent! 'I am from Mexico' clearly states your place of origin.",
            correctFeedbackRu: "Отлично! 'I am from Mexico' четко указывает место вашего происхождения.",
            incorrectFeedback: "Use: I + am from + country.",
            incorrectFeedbackRu: "Используйте: I + am from + страна."
        },
        {
            question: "Form a response about someone's origin:",
            questionRu: "Составьте ответ о чьем-то происхождении:",
            words: ["She", "is", "from", "Russia"],
            correctAnswer: "She is from Russia.",
            correctFeedback: "Great! 'She is from Russia' indicates her country of origin.",
            correctFeedbackRu: "Отлично! 'She is from Russia' указывает её страну происхождения.",
            incorrectFeedback: "Follow: She + is from + country.",
            incorrectFeedbackRu: "Следуйте: She + is from + страна."
        },
        {
            question: "Form a response about origin:",
            questionRu: "Составьте ответ о происхождении:",
            words: ["You", "are", "from", "England"],
            correctAnswer: "You are from England.",
            correctFeedback: "Perfect! 'You are from England' states where the person is from.",
            correctFeedbackRu: "Идеально! 'You are from England' указывает, откуда этот человек.",
            incorrectFeedback: "Remember: You + are from + country.",
            incorrectFeedbackRu: "Помните: You + are from + страна."
        }
    ]
};

/* ============================================
Page 8: Contractions with "to be" in age and nationality contexts
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page8'] = {
    sentenceBuilding: [
        {
            question: "Form a sentence using contractions:",
            questionRu: "Составьте предложение, используя сокращения:",
            words: ["I'm", "25", "years", "old"],
            correctAnswer: "I'm 25 years old.",
            correctFeedback: "Perfect! 'I'm 25 years old' uses the contraction 'I'm' (I am) correctly.",
            correctFeedbackRu: "Идеально! 'I'm 25 years old' правильно использует сокращение 'I'm' (I am).",
            incorrectFeedback: "Remember: I'm = I am, so I'm + age + years old.",
            incorrectFeedbackRu: "Помните: I'm = I am, поэтому I'm + возраст + years old."
        },
        {
            question: "Form a sentence using contractions:",
            questionRu: "Составьте предложение, используя сокращения:",
            words: ["She's", "French"],
            correctAnswer: "She's French.",
            correctFeedback: "Excellent! 'She's French' uses the contraction 'She's' (She is) perfectly.",
            correctFeedbackRu: "Отлично! 'She's French' идеально использует сокращение 'She's' (She is).",
            incorrectFeedback: "Use: She's = She is, so She's + nationality.",
            incorrectFeedbackRu: "Используйте: She's = She is, поэтому She's + национальность."
        },
        {
            question: "Form a sentence using contractions:",
            questionRu: "Составьте предложение, используя сокращения:",
            words: ["He's", "30", "years", "old"],
            correctAnswer: "He's 30 years old.",
            correctFeedback: "Great! 'He's 30 years old' correctly uses the contraction 'He's' (He is).",
            correctFeedbackRu: "Отлично! 'He's 30 years old' правильно использует сокращение 'He's' (He is).",
            incorrectFeedback: "Follow: He's = He is, so He's + age + years old.",
            incorrectFeedbackRu: "Следуйте: He's = He is, поэтому He's + возраст + years old."
        },
        {
            question: "Form a sentence using contractions:",
            questionRu: "Составьте предложение, используя сокращения:",
            words: ["We're", "Italian"],
            correctAnswer: "We're Italian.",
            correctFeedback: "Perfect! 'We're Italian' uses the contraction 'We're' (We are) correctly.",
            correctFeedbackRu: "Идеально! 'We're Italian' правильно использует сокращение 'We're' (We are).",
            incorrectFeedback: "Remember: We're = We are, so We're + nationality.",
            incorrectFeedbackRu: "Помните: We're = We are, поэтому We're + национальность."
        },
        {
            question: "Form a sentence using contractions:",
            questionRu: "Составьте предложение, используя сокращения:",
            words: ["You're", "22", "years", "old"],
            correctAnswer: "You're 22 years old.",
            correctFeedback: "Excellent! 'You're 22 years old' uses the contraction 'You're' (You are) perfectly.",
            correctFeedbackRu: "Отлично! 'You're 22 years old' идеально использует сокращение 'You're' (You are).",
            incorrectFeedback: "Use: You're = You are, so You're + age + years old.",
            incorrectFeedbackRu: "Используйте: You're = You are, поэтому You're + возраст + years old."
        },
        {
            question: "Form a sentence using contractions:",
            questionRu: "Составьте предложение, используя сокращения:",
            words: ["They're", "Spanish"],
            correctAnswer: "They're Spanish.",
            correctFeedback: "Great! 'They're Spanish' correctly uses the contraction 'They're' (They are).",
            correctFeedbackRu: "Отлично! 'They're Spanish' правильно использует сокращение 'They're' (They are).",
            incorrectFeedback: "Follow: They're = They are, so They're + nationality.",
            incorrectFeedbackRu: "Следуйте: They're = They are, поэтому They're + национальность."
        },
        {
            question: "Form a sentence using contractions:",
            questionRu: "Составьте предложение, используя сокращения:",
            words: ["I'm", "from", "Germany"],
            correctAnswer: "I'm from Germany.",
            correctFeedback: "Perfect! 'I'm from Germany' uses contractions to state origin naturally.",
            correctFeedbackRu: "Идеально! 'I'm from Germany' использует сокращения для естественного указания происхождения.",
            incorrectFeedback: "Remember: I'm = I am, so I'm from + country.",
            incorrectFeedbackRu: "Помните: I'm = I am, поэтому I'm from + страна."
        },
        {
            question: "Form a sentence using contractions:",
            questionRu: "Составьте предложение, используя сокращения:",
            words: ["She's", "28", "years", "old"],
            correctAnswer: "She's 28 years old.",
            correctFeedback: "Excellent! 'She's 28 years old' perfectly combines contractions with age.",
            correctFeedbackRu: "Отлично! 'She's 28 years old' идеально сочетает сокращения с возрастом.",
            incorrectFeedback: "Use: She's = She is, so She's + age + years old.",
            incorrectFeedbackRu: "Используйте: She's = She is, поэтому She's + возраст + years old."
        },
        {
            question: "Form a sentence using contractions:",
            questionRu: "Составьте предложение, используя сокращения:",
            words: ["He's", "from", "China"],
            correctAnswer: "He's from China.",
            correctFeedback: "Great! 'He's from China' uses contractions to express origin smoothly.",
            correctFeedbackRu: "Отлично! 'He's from China' использует сокращения для плавного выражения происхождения.",
            incorrectFeedback: "Follow: He's = He is, so He's from + country.",
            incorrectFeedbackRu: "Следуйте: He's = He is, поэтому He's from + страна."
        },
        {
            question: "Form a sentence using contractions:",
            questionRu: "Составьте предложение, используя сокращения:",
            words: ["We're", "35", "years", "old"],
            correctAnswer: "We're 35 years old.",
            correctFeedback: "Perfect! 'We're 35 years old' correctly uses contractions for plural subjects.",
            correctFeedbackRu: "Идеально! 'We're 35 years old' правильно использует сокращения для подлежащих во множественном числе.",
            incorrectFeedback: "Remember: We're = We are, so We're + age + years old.",
            incorrectFeedbackRu: "Помните: We're = We are, поэтому We're + возраст + years old."
        }
    ]
};

/* ============================================
Page 9: Age decades and approximate ages
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page9'] = {
    sentenceBuilding: [
        {
            question: "Form a sentence about age decades:",
            questionRu: "Составьте предложение о возрастных десятилетиях:",
            words: ["I", "am", "in", "my", "twenties"],
            correctAnswer: "I am in my twenties.",
            correctFeedback: "Perfect! 'I am in my twenties' is the correct way to express age by decade.",
            correctFeedbackRu: "Идеально! 'I am in my twenties' - правильный способ выразить возраст по десятилетиям.",
            incorrectFeedback: "Remember: I am in my + decade (twenties, thirties, etc.).",
            incorrectFeedbackRu: "Помните: I am in my + десятилетие (twenties, thirties и т.д.)."
        },
        {
            question: "Form a sentence about someone's age decade:",
            questionRu: "Составьте предложение о возрастном десятилетии кого-то:",
            words: ["She", "is", "in", "her", "thirties"],
            correctAnswer: "She is in her thirties.",
            correctFeedback: "Excellent! 'She is in her thirties' correctly expresses her age range.",
            correctFeedbackRu: "Отлично! 'She is in her thirties' правильно выражает её возрастной диапазон.",
            incorrectFeedback: "Use: She is in her + decade.",
            incorrectFeedbackRu: "Используйте: She is in her + десятилетие."
        },
        {
            question: "Form a sentence about age decades:",
            questionRu: "Составьте предложение о возрастных десятилетиях:",
            words: ["He", "is", "in", "his", "forties"],
            correctAnswer: "He is in his forties.",
            correctFeedback: "Great! 'He is in his forties' shows his age range perfectly.",
            correctFeedbackRu: "Отлично! 'He is in his forties' идеально показывает его возрастной диапазон.",
            incorrectFeedback: "Follow: He is in his + decade.",
            incorrectFeedbackRu: "Следуйте: He is in his + десятилетие."
        },
        {
            question: "Form a sentence about approximate age:",
            questionRu: "Составьте предложение о приблизительном возрасте:",
            words: ["I", "am", "about", "25", "years", "old"],
            correctAnswer: "I am about 25 years old.",
            correctFeedback: "Perfect! 'I am about 25 years old' expresses approximate age correctly.",
            correctFeedbackRu: "Идеально! 'I am about 25 years old' правильно выражает приблизительный возраст.",
            incorrectFeedback: "Remember: I am about + age + years old.",
            incorrectFeedbackRu: "Помните: I am about + возраст + years old."
        },
        {
            question: "Form a sentence about age decades:",
            questionRu: "Составьте предложение о возрастных десятилетиях:",
            words: ["We", "are", "in", "our", "fifties"],
            correctAnswer: "We are in our fifties.",
            correctFeedback: "Excellent! 'We are in our fifties' correctly expresses your age range as a group.",
            correctFeedbackRu: "Отлично! 'We are in our fifties' правильно выражает ваш возрастной диапазон как группы.",
            incorrectFeedback: "Use: We are in our + decade.",
            incorrectFeedbackRu: "Используйте: We are in our + десятилетие."
        },
        {
            question: "Form a sentence about approximate age:",
            questionRu: "Составьте предложение о приблизительном возрасте:",
            words: ["She", "is", "around", "30", "years", "old"],
            correctAnswer: "She is around 30 years old.",
            correctFeedback: "Great! 'She is around 30 years old' expresses her approximate age nicely.",
            correctFeedbackRu: "Отлично! 'She is around 30 years old' хорошо выражает её приблизительный возраст.",
            incorrectFeedback: "Follow: She is around + age + years old.",
            incorrectFeedbackRu: "Следуйте: She is around + возраст + years old."
        },
        {
            question: "Form a sentence about age decades:",
            questionRu: "Составьте предложение о возрастных десятилетиях:",
            words: ["They", "are", "in", "their", "sixties"],
            correctAnswer: "They are in their sixties.",
            correctFeedback: "Perfect! 'They are in their sixties' shows their age range clearly.",
            correctFeedbackRu: "Идеально! 'They are in their sixties' четко показывает их возрастной диапазон.",
            incorrectFeedback: "Remember: They are in their + decade.",
            incorrectFeedbackRu: "Помните: They are in their + десятилетие."
        },
        {
            question: "Form a sentence about approximate age:",
            questionRu: "Составьте предложение о приблизительном возрасте:",
            words: ["He", "is", "almost", "40", "years", "old"],
            correctAnswer: "He is almost 40 years old.",
            correctFeedback: "Excellent! 'He is almost 40 years old' shows he's close to that age.",
            correctFeedbackRu: "Отлично! 'He is almost 40 years old' показывает, что он близок к этому возрасту.",
            incorrectFeedback: "Use: He is almost + age + years old.",
            incorrectFeedbackRu: "Используйте: He is almost + возраст + years old."
        },
        {
            question: "Form a sentence about young age:",
            questionRu: "Составьте предложение о молодом возрасте:",
            words: ["I", "am", "in", "my", "early", "twenties"],
            correctAnswer: "I am in my early twenties.",
            correctFeedback: "Great! 'I am in my early twenties' specifies the beginning of that decade.",
            correctFeedbackRu: "Отлично! 'I am in my early twenties' указывает на начало этого десятилетия.",
            incorrectFeedback: "Follow: I am in my early + decade.",
            incorrectFeedbackRu: "Следуйте: I am in my early + десятилетие."
        },
        {
            question: "Form a sentence about later age in decade:",
            questionRu: "Составьте предложение о более позднем возрасте в десятилетии:",
            words: ["She", "is", "in", "her", "late", "thirties"],
            correctAnswer: "She is in her late thirties.",
            correctFeedback: "Perfect! 'She is in her late thirties' shows she's near the end of that decade.",
            correctFeedbackRu: "Идеально! 'She is in her late thirties' показывает, что она близка к концу этого десятилетия.",
            incorrectFeedback: "Remember: She is in her late + decade.",
            incorrectFeedbackRu: "Помните: She is in her late + десятилетие."
        }
    ]
};

/* ============================================
Page 10: Complex sentences with multiple information
============================================ */
window.grammarExercises['to-be']['to-be-with-ages-and-nationalities-sentence-page10'] = {
    sentenceBuilding: [
        {
            question: "Form a complete introduction sentence:",
            questionRu: "Составьте полное представительное предложение:",
            words: ["Hi", "I", "am", "Lisa", "I", "am", "26", "years", "old", "and", "I", "am", "from", "Sweden"],
            correctAnswer: "Hi, I am Lisa, I am 26 years old and I am from Sweden.",
            correctFeedback: "Perfect! This is a complete self-introduction with name, age, and origin.",
            correctFeedbackRu: "Идеально! Это полное самопредставление с именем, возрастом и происхождением.",
            incorrectFeedback: "Remember: Hi, I am [name], I am [age] years old and I am from [country].",
            incorrectFeedbackRu: "Помните: Hi, I am [имя], I am [возраст] years old and I am from [страна]."
        },
        {
            question: "Form a sentence about someone with multiple details:",
            questionRu: "Составьте предложение о ком-то с несколькими деталями:",
            words: ["My", "friend", "Sarah", "is", "29", "years", "old", "and", "she", "is", "Canadian"],
            correctAnswer: "My friend Sarah is 29 years old and she is Canadian.",
            correctFeedback: "Excellent! This sentence includes relationship, name, age, and nationality.",
            correctFeedbackRu: "Отлично! Это предложение включает отношение, имя, возраст и национальность.",
            incorrectFeedback: "Use: My friend [name] is [age] years old and she is [nationality].",
            incorrectFeedbackRu: "Используйте: My friend [имя] is [возраст] years old and she is [национальность]."
        },
        {
            question: "Form a sentence about family members:",
            questionRu: "Составьте предложение о членах семьи:",
            words: ["My", "parents", "are", "in", "their", "fifties", "and", "they", "are", "Italian"],
            correctAnswer: "My parents are in their fifties and they are Italian.",
            correctFeedback: "Great! This describes family members with age range and nationality.",
            correctFeedbackRu: "Отлично! Это описывает членов семьи с возрастным диапазоном и национальностью.",
            incorrectFeedback: "Follow: My parents are in their [decade] and they are [nationality].",
            incorrectFeedbackRu: "Следуйте: My parents are in their [десятилетие] and they are [национальность]."
        },
        {
            question: "Form a question with multiple parts:",
            questionRu: "Составьте вопрос с несколькими частями:",
            words: ["How", "old", "are", "you", "and", "where", "are", "you", "from"],
            correctAnswer: "How old are you and where are you from?",
            correctFeedback: "Perfect! This asks about both age and origin in one question.",
            correctFeedbackRu: "Идеально! Это спрашивает и о возрасте, и о происхождении в одном вопросе.",
            incorrectFeedback: "Remember: How old are you and where are you from?",
            incorrectFeedbackRu: "Помните: How old are you and where are you from?"
        },
        {
            question: "Form a complex response:",
            questionRu: "Составьте сложный ответ:",
            words: ["I", "am", "32", "years", "old", "I", "am", "American", "and", "I", "am", "from", "New", "York"],
            correctAnswer: "I am 32 years old, I am American and I am from New York.",
            correctFeedback: "Excellent! This gives complete personal information in one sentence.",
            correctFeedbackRu: "Отлично! Это дает полную личную информацию в одном предложении.",
            incorrectFeedback: "Use: I am [age] years old, I am [nationality] and I am from [place].",
            incorrectFeedbackRu: "Используйте: I am [возраст] years old, I am [национальность] and I am from [место]."
        },
        {
            question: "Form a sentence about siblings:",
            questionRu: "Составьте предложение о братьях и сестрах:",
            words: ["My", "brother", "is", "25", "years", "old", "and", "my", "sister", "is", "22", "years", "old"],
            correctAnswer: "My brother is 25 years old and my sister is 22 years old.",
            correctFeedback: "Great! This compares the ages of two family members clearly.",
            correctFeedbackRu: "Отлично! Это четко сравнивает возраст двух членов семьи.",
            incorrectFeedback: "Follow: My brother is [age] years old and my sister is [age] years old.",
            incorrectFeedbackRu: "Следуйте: My brother is [возраст] years old and my sister is [возраст] years old."
        },
        {
            question: "Form a sentence about classmates:",
            questionRu: "Составьте предложение об одноклассниках:",
            words: ["We", "are", "all", "in", "our", "twenties", "and", "we", "are", "from", "different", "countries"],
            correctAnswer: "We are all in our twenties and we are from different countries.",
            correctFeedback: "Perfect! This describes a group's age range and diverse origins.",
            correctFeedbackRu: "Идеально! Это описывает возрастной диапазон группы и разнообразное происхождение.",
            incorrectFeedback: "Remember: We are all in our [decade] and we are from different countries.",
            incorrectFeedbackRu: "Помните: We are all in our [десятилетие] and we are from different countries."
        },
        {
            question: "Form a negative sentence with multiple information:",
            questionRu: "Составьте отрицательное предложение с несколькими сведениями:",
            words: ["She", "is", "not", "30", "years", "old", "and", "she", "is", "not", "French"],
            correctAnswer: "She is not 30 years old and she is not French.",
            correctFeedback: "Excellent! This negates both age and nationality information.",
            correctFeedbackRu: "Отлично! Это отрицает информацию и о возрасте, и о национальности.",
            incorrectFeedback: "Use: She is not [age] years old and she is not [nationality].",
            incorrectFeedbackRu: "Используйте: She is not [возраст] years old and she is not [национальность]."
        },
        {
            question: "Form a sentence about age comparison:",
            questionRu: "Составьте предложение о сравнении возраста:",
            words: ["I", "am", "older", "than", "my", "brother", "but", "I", "am", "younger", "than", "my", "sister"],
            correctAnswer: "I am older than my brother but I am younger than my sister.",
            correctFeedback: "Great! This compares your age to multiple family members.",
            correctFeedbackRu: "Отлично! Это сравнивает ваш возраст с несколькими членами семьи.",
            incorrectFeedback: "Follow: I am older than [person] but I am younger than [person].",
            incorrectFeedbackRu: "Следуйте: I am older than [человек] but I am younger than [человек]."
        },
        {
            question: "Form a complete introduction for someone else:",
            questionRu: "Составьте полное представление для кого-то другого:",
            words: ["This", "is", "my", "teacher", "Mr", "Smith", "he", "is", "45", "years", "old", "and", "he", "is", "British"],
            correctAnswer: "This is my teacher Mr. Smith, he is 45 years old and he is British.",
            correctFeedback: "Perfect! This is a complete introduction including relationship, name, age, and nationality.",
            correctFeedbackRu: "Идеально! Это полное представление, включающее отношение, имя, возраст и национальность.",
            incorrectFeedback: "Remember: This is my [relationship] [name], he is [age] years old and he is [nationality].",
            incorrectFeedbackRu: "Помните: This is my [отношение] [имя], he is [возраст] years old and he is [национальность]."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Verb 'to be' Fill in the Gaps exercises data loaded successfully!");