/* =============================================================================== */
/* =========================Multiple Choice Exercises============================= */

// Initialize grammar exercises object if it doesn't exist
window.grammarExercises = window.grammarExercises || {};

// Initialize topic hierarchy
window.grammarExercises['to-be'] = window.grammarExercises['to-be'] || {};

/* ============================================
Page 1: Basic introductions with names
============================================ */
window.grammarExercises['to-be']['to-be-with-names-page1'] = {
    title: "Basic Name Introductions",
    multipleChoice: [
        {
            question: "Choose the correct form of 'to be' for self-introduction:",
            questionRu: "Выберите правильную форму глагола 'to be' для самопредставления:",
            sentence: "Hello, ___ Michael.",
            options: [
                "I am", // Correct answer first
                "I is",
                "I are",
                "I be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'I am' for self-introduction.",
            correctFeedbackRu: "Правильно! Мы используем 'I am' для самопредставления.",
            incorrectFeedback: "Incorrect. When introducing yourself, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. При представлении себя, используйте 'I am'."
        },
        {
            question: "Select the correct introduction:",
            questionRu: "Выберите правильное представление:",
            options: [
                "Hi, I am Emma.",
                "Hi, I is Emma.",
                "Hi, I are Emma.",
                "Hi, I be Emma."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'I am' is the proper form for introducing yourself.",
            correctFeedbackRu: "Правильно! 'I am' - это правильная форма для самопредставления.",
            incorrectFeedback: "Incorrect. When introducing yourself, use 'I am' followed by your name.",
            incorrectFeedbackRu: "Неправильно. При представлении себя, используйте 'I am' и затем ваше имя."
        },
        {
            question: "Choose the correct form of 'to be' for introducing someone:",
            questionRu: "Выберите правильную форму 'to be' для представления кого-то:",
            sentence: "This ___ my colleague, Lisa.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! We use 'is' with the subject 'This' when introducing someone.",
            correctFeedbackRu: "Правильно! Мы используем 'is' с подлежащим 'This' при представлении кого-то.",
            incorrectFeedback: "Incorrect. When introducing someone with 'This', we use 'is'.",
            incorrectFeedbackRu: "Неправильно. При представлении кого-то с 'This', мы используем 'is'."
        },
        {
            question: "Complete the sentence correctly:",
            questionRu: "Завершите предложение правильно:",
            sentence: "My name ___ Alexander.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'My name is' is the standard way to state your name.",
            correctFeedbackRu: "Правильно! 'My name is' - это стандартный способ назвать свое имя.",
            incorrectFeedback: "Incorrect. With 'my name', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my name' мы всегда используем 'is'."
        },
        {
            question: "Select the correct way to introduce your friend:",
            questionRu: "Выберите правильный способ представить своего друга:",
            options: [
                "She is Anna, my best friend.",
                "She am Anna, my best friend.",
                "She are Anna, my best friend.",
                "She be Anna, my best friend."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'she' when introducing someone.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'she' при представлении кого-то.",
            incorrectFeedback: "Incorrect. With 'she', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' мы всегда используем 'is'."
        },
        {
            question: "Choose the correct group introduction:",
            questionRu: "Выберите правильное групповое представление:",
            sentence: "We ___ Tom and Jerry.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! With 'we', use 'are' when introducing a group.",
            correctFeedbackRu: "Правильно! С 'we' используйте 'are' при представлении группы.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Complete the introduction:",
            questionRu: "Завершите представление:",
            sentence: "He ___ David from accounting.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'he' when introducing someone.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'he' при представлении кого-то.",
            incorrectFeedback: "Incorrect. With 'he', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы всегда используем 'is'."
        },
        {
            question: "Select the correct formal introduction:",
            questionRu: "Выберите правильное формальное представление:",
            options: [
                "I am Dr. Martinez.",
                "I is Dr. Martinez.",
                "I are Dr. Martinez.",
                "I be Dr. Martinez."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'I am' is used for formal self-introductions with titles.",
            correctFeedbackRu: "Правильно! 'I am' используется для формального самопредставления с титулами.",
            incorrectFeedback: "Incorrect. For formal introductions with titles, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для формальных представлений с титулами используйте 'I am'."
        },
        {
            question: "Choose the correct way to introduce multiple people:",
            questionRu: "Выберите правильный способ представить нескольких людей:",
            sentence: "They ___ Sarah and Mark.",
            options: [
                "are",
                "is",
                "am",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'they' when introducing multiple people.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'they' при представлении нескольких людей.",
            incorrectFeedback: "Incorrect. With 'they', we always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' мы всегда используем 'are'."
        },
        {
            question: "Complete the casual introduction:",
            questionRu: "Завершите неформальное представление:",
            sentence: "Hey, this ___ my brother Jake.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'this' in casual introductions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'this' в неформальных представлениях.",
            incorrectFeedback: "Incorrect. With 'this', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' мы всегда используем 'is'."
        }
    ]
};

/* ============================================
Page 2: Professional introductions with names
============================================ */
window.grammarExercises['to-be']['to-be-with-names-page2'] = {
    title: "Professional Name Introductions",
    multipleChoice: [
        {
            question: "Choose the correct professional introduction:",
            questionRu: "Выберите правильное профессиональное представление:",
            sentence: "Good morning, I ___ Robert Johnson, your new manager.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for professional self-introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для профессионального самопредставления.",
            incorrectFeedback: "Incorrect. In professional settings, use 'I am' for self-introduction.",
            incorrectFeedbackRu: "Неправильно. В профессиональной обстановке используйте 'I am' для самопредставления."
        },
        {
            question: "Select the correct way to introduce your supervisor:",
            questionRu: "Выберите правильный способ представить своего руководителя:",
            options: [
                "This is Ms. Williams, our department head.",
                "This am Ms. Williams, our department head.",
                "This are Ms. Williams, our department head.",
                "This be Ms. Williams, our department head."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'This is' when introducing someone in a professional context.",
            correctFeedbackRu: "Правильно! Используйте 'This is' при представлении кого-то в профессиональном контексте.",
            incorrectFeedback: "Incorrect. For professional introductions, use 'This is'.",
            incorrectFeedbackRu: "Неправильно. Для профессиональных представлений используйте 'This is'."
        },
        {
            question: "Complete the team introduction:",
            questionRu: "Завершите представление команды:",
            sentence: "She ___ Katherine Brown, our lead designer.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'she' in professional introductions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'she' в профессиональных представлениях.",
            incorrectFeedback: "Incorrect. With 'she', always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' всегда используйте 'is'."
        },
        {
            question: "Choose the correct client introduction:",
            questionRu: "Выберите правильное представление клиента:",
            sentence: "He ___ Mr. Thompson from Global Industries.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'he' when introducing clients.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'he' при представлении клиентов.",
            incorrectFeedback: "Incorrect. With 'he', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы всегда используем 'is'."
        },
        {
            question: "Select the correct board introduction:",
            questionRu: "Выберите правильное представление правления:",
            options: [
                "They are the board members: Mr. Davis and Mrs. Chen.",
                "They is the board members: Mr. Davis and Mrs. Chen.",
                "They am the board members: Mr. Davis and Mrs. Chen.",
                "They be the board members: Mr. Davis and Mrs. Chen."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'they' for multiple people.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'they' для нескольких людей.",
            incorrectFeedback: "Incorrect. With 'they', we always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' мы всегда используем 'are'."
        },
        {
            question: "Complete the conference introduction:",
            questionRu: "Завершите представление на конференции:",
            sentence: "Our keynote speaker ___ Dr. Patricia Green.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with singular subjects like 'speaker'.",
            correctFeedbackRu: "Правильно! Используйте 'is' с подлежащими в единственном числе, как 'speaker'.",
            incorrectFeedback: "Incorrect. With singular subjects, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе используйте 'is'."
        },
        {
            question: "Choose the correct vendor introduction:",
            questionRu: "Выберите правильное представление поставщика:",
            sentence: "The project coordinator ___ James Miller.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with job titles followed by names.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями, за которыми следуют имена.",
            incorrectFeedback: "Incorrect. With job titles, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностями используйте 'is'."
        },
        {
            question: "Select the correct partnership introduction:",
            questionRu: "Выберите правильное представление партнерства:",
            options: [
                "We are partners: Susan Lee and Daniel White.",
                "We is partners: Susan Lee and Daniel White.",
                "We am partners: Susan Lee and Daniel White.",
                "We be partners: Susan Lee and Daniel White."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'we' when introducing partnerships.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'we' при представлении партнерства.",
            incorrectFeedback: "Incorrect. With 'we', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' всегда используйте 'are'."
        },
        {
            question: "Complete the consultant introduction:",
            questionRu: "Завершите представление консультанта:",
            sentence: "The financial advisor ___ Mr. Richard Garcia.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with professional titles and names.",
            correctFeedbackRu: "Правильно! Используйте 'is' с профессиональными титулами и именами.",
            incorrectFeedback: "Incorrect. With professional titles, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С профессиональными титулами используйте 'is'."
        },
        {
            question: "Choose the correct executive introduction:",
            questionRu: "Выберите правильное представление руководителя:",
            sentence: "Our CEO ___ Ms. Helen Rodriguez.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with executive titles and names.",
            correctFeedbackRu: "Правильно! Используйте 'is' с исполнительными титулами и именами.",
            incorrectFeedback: "Incorrect. With executive titles, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С исполнительными титулами используйте 'is'."
        }
    ]
};

/* ============================================
Page 3: Family and friend introductions with names
============================================ */
window.grammarExercises['to-be']['to-be-with-names-page3'] = {
    title: "Family and Friend Name Introductions",
    multipleChoice: [
        {
            question: "Choose the correct way to introduce your mother:",
            questionRu: "Выберите правильный способ представить свою мать:",
            options: [
                "This is my mom, Carol.",
                "This am my mom, Carol.",
                "This are my mom, Carol.",
                "This be my mom, Carol."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'This is' when introducing family members.",
            correctFeedbackRu: "Правильно! Используйте 'This is' при представлении членов семьи.",
            incorrectFeedback: "Incorrect. For family introductions, use 'This is'.",
            incorrectFeedbackRu: "Неправильно. Для представления семьи используйте 'This is'."
        },
        {
            question: "Complete the brother introduction:",
            questionRu: "Завершите представление брата:",
            sentence: "My brother ___ Kevin.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'my brother' followed by a name.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'my brother', за которым следует имя.",
            incorrectFeedback: "Incorrect. With family relationships, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С семейными отношениями используйте 'is'."
        },
        {
            question: "Select the correct sister introduction:",
            questionRu: "Выберите правильное представление сестры:",
            sentence: "She ___ my sister Monica.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'she' in family introductions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'she' при представлении семьи.",
            incorrectFeedback: "Incorrect. With 'she', always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' всегда используйте 'is'."
        },
        {
            question: "Choose the correct cousin introduction:",
            questionRu: "Выберите правильное представление двоюродного брата:",
            sentence: "He ___ my cousin Peter.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'he' when introducing male relatives.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'he' при представлении родственников мужского пола.",
            incorrectFeedback: "Incorrect. With 'he', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы всегда используем 'is'."
        },
        {
            question: "Complete the grandparents introduction:",
            questionRu: "Завершите представление дедушки и бабушки:",
            options: [
                "They are my grandparents, George and Martha.",
                "They is my grandparents, George and Martha.",
                "They am my grandparents, George and Martha.",
                "They be my grandparents, George and Martha."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'they' for multiple family members.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'they' для нескольких членов семьи.",
            incorrectFeedback: "Incorrect. With 'they', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' всегда используйте 'are'."
        },
        {
            question: "Select the correct best friend introduction:",
            questionRu: "Выберите правильное представление лучшего друга:",
            sentence: "My best friend ___ Rachel.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'my best friend' and a name.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'my best friend' и именем.",
            incorrectFeedback: "Incorrect. With friend relationships, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С дружескими отношениями используйте 'is'."
        },
        {
            question: "Choose the correct roommate introduction:",
            questionRu: "Выберите правильное представление соседа по комнате:",
            sentence: "This ___ my roommate Jessica.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'this' for roommate introductions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'this' для представления соседа по комнате.",
            incorrectFeedback: "Incorrect. With 'this', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' мы всегда используем 'is'."
        },
        {
            question: "Complete the neighbor introduction:",
            questionRu: "Завершите представление соседа:",
            sentence: "Our neighbor ___ Mr. Anderson.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'our neighbor' and a name.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'our neighbor' и именем.",
            incorrectFeedback: "Incorrect. With singular subjects like 'neighbor', use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе, как 'neighbor', используйте 'is'."
        },
        {
            question: "Select the correct friend group introduction:",
            questionRu: "Выберите правильное представление группы друзей:",
            options: [
                "We are college friends: Amy, Ben, and Chris.",
                "We is college friends: Amy, Ben, and Chris.",
                "We am college friends: Amy, Ben, and Chris.",
                "We be college friends: Amy, Ben, and Chris."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'we' for group introductions.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'we' для групповых представлений.",
            incorrectFeedback: "Incorrect. With 'we', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' всегда используйте 'are'."
        },
        {
            question: "Choose the correct spouse introduction:",
            questionRu: "Выберите правильное представление супруга:",
            sentence: "My husband ___ Jonathan.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'my husband' and a name.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'my husband' и именем.",
            incorrectFeedback: "Incorrect. With family relationships, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С семейными отношениями используйте 'is'."
        }
    ]
};

/* ============================================
Page 4: Formal and academic introductions with names
============================================ */
window.grammarExercises['to-be']['to-be-with-names-page4'] = {
    title: "Formal and Academic Name Introductions",
    multipleChoice: [
        {
            question: "Choose the correct academic introduction:",
            questionRu: "Выберите правильное академическое представление:",
            sentence: "I ___ Professor Williams from the History Department.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for formal academic self-introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для формального академического самопредставления.",
            incorrectFeedback: "Incorrect. For academic introductions, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для академических представлений используйте 'I am'."
        },
        {
            question: "Select the correct dean introduction:",
            questionRu: "Выберите правильное представление декана:",
            options: [
                "This is Dean Mitchell, head of our faculty.",
                "This am Dean Mitchell, head of our faculty.",
                "This are Dean Mitchell, head of our faculty.",
                "This be Dean Mitchell, head of our faculty."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'This is' for formal academic introductions.",
            correctFeedbackRu: "Правильно! Используйте 'This is' для формальных академических представлений.",
            incorrectFeedback: "Incorrect. For formal introductions, use 'This is'.",
            incorrectFeedbackRu: "Неправильно. Для формальных представлений используйте 'This is'."
        },
        {
            question: "Complete the student introduction:",
            questionRu: "Завершите представление студента:",
            sentence: "She ___ Dr. Sandra Foster, our guest lecturer.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'she' for academic titles.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'she' для академических титулов.",
            incorrectFeedback: "Incorrect. With 'she', always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' всегда используйте 'is'."
        },
        {
            question: "Choose the correct researcher introduction:",
            questionRu: "Выберите правильное представление исследователя:",
            sentence: "He ___ Dr. Marcus Chen, leading researcher in biochemistry.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'he' for professional academic titles.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'he' для профессиональных академических титулов.",
            incorrectFeedback: "Incorrect. With 'he', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы всегда используем 'is'."
        },
        {
            question: "Select the correct committee introduction:",
            questionRu: "Выберите правильное представление комитета:",
            options: [
                "They are committee members: Dr. Adams and Dr. Taylor.",
                "They is committee members: Dr. Adams and Dr. Taylor.",
                "They am committee members: Dr. Adams and Dr. Taylor.",
                "They be committee members: Dr. Adams and Dr. Taylor."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'they' for multiple academics.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'they' для нескольких академиков.",
            incorrectFeedback: "Incorrect. With 'they', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' всегда используйте 'are'."
        },
        {
            question: "Complete the chancellor introduction:",
            questionRu: "Завершите представление канцлера:",
            sentence: "Our chancellor ___ Dr. Elizabeth Parker.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with academic leadership titles.",
            correctFeedbackRu: "Правильно! Используйте 'is' с титулами академического руководства.",
            incorrectFeedback: "Incorrect. With leadership titles, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С руководящими титулами используйте 'is'."
        },
        {
            question: "Choose the correct librarian introduction:",
            questionRu: "Выберите правильное представление библиотекаря:",
            sentence: "The head librarian ___ Ms. Patricia Wong.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with academic staff positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями академического персонала.",
            incorrectFeedback: "Incorrect. With staff positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностями персонала используйте 'is'."
        },
        {
            question: "Select the correct research team introduction:",
            questionRu: "Выберите правильное представление исследовательской команды:",
            options: [
                "We are the research team: Dr. Kumar, Dr. Smith, and Dr. Lopez.",
                "We is the research team: Dr. Kumar, Dr. Smith, and Dr. Lopez.",
                "We am the research team: Dr. Kumar, Dr. Smith, and Dr. Lopez.",
                "We be the research team: Dr. Kumar, Dr. Smith, and Dr. Lopez."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'we' for academic team introductions.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'we' для представления академической команды.",
            incorrectFeedback: "Incorrect. With 'we', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' всегда используйте 'are'."
        },
        {
            question: "Complete the visiting scholar introduction:",
            questionRu: "Завершите представление приглашенного ученого:",
            sentence: "Our visiting scholar ___ Professor Nakamura from Tokyo University.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with visiting academic positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями приглашенных академиков.",
            incorrectFeedback: "Incorrect. With academic positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С академическими должностями используйте 'is'."
        },
        {
            question: "Choose the correct department head introduction:",
            questionRu: "Выберите правильное представление заведующего кафедрой:",
            sentence: "The department head ___ Dr. Victoria Reynolds.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with department leadership positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с руководящими должностями кафедры.",
            incorrectFeedback: "Incorrect. With department positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностями кафедры используйте 'is'."
        }
    ]
};

/* ============================================
Page 5: Simple daily introductions with names
============================================ */
window.grammarExercises['to-be']['to-be-with-names-page5'] = {
    title: "Daily Life Name Introductions",
    multipleChoice: [
        {
            question: "Choose the correct introduction at a store:",
            questionRu: "Выберите правильное представление в магазине:",
            sentence: "Hi, I ___ Lucy. How can I help you?",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' when introducing yourself to customers.",
            correctFeedbackRu: "Правильно! Используйте 'I am' при представлении себя покупателям.",
            incorrectFeedback: "Incorrect. When helping customers, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. При обслуживании покупателей используйте 'I am'."
        },
        {
            question: "Select the correct neighbor introduction:",
            questionRu: "Выберите правильное представление соседа:",
            options: [
                "This is Frank, he lives next door.",
                "This am Frank, he lives next door.",
                "This are Frank, he lives next door.",
                "This be Frank, he lives next door."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'This is' when introducing neighbors.",
            correctFeedbackRu: "Правильно! Используйте 'This is' при представлении соседей.",
            incorrectFeedback: "Incorrect. For neighbor introductions, use 'This is'.",
            incorrectFeedbackRu: "Неправильно. Для представления соседей используйте 'This is'."
        },
        {
            question: "Complete the babysitter introduction:",
            questionRu: "Завершите представление няни:",
            sentence: "She ___ Maria, our babysitter.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'she' for service provider introductions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'she' для представления поставщиков услуг.",
            incorrectFeedback: "Incorrect. With 'she', always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' всегда используйте 'is'."
        },
        {
            question: "Choose the correct delivery person introduction:",
            questionRu: "Выберите правильное представление курьера:",
            sentence: "He ___ Tom from the pizza place.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'he' for service introductions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'he' для представления сервисов.",
            incorrectFeedback: "Incorrect. With 'he', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы всегда используем 'is'."
        },
        {
            question: "Select the correct gym introduction:",
            questionRu: "Выберите правильное представление в спортзале:",
            options: [
                "We are new members: Paul and Kate.",
                "We is new members: Paul and Kate.",
                "We am new members: Paul and Kate.",
                "We be new members: Paul and Kate."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'we' for group memberships.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'we' для группового членства.",
            incorrectFeedback: "Incorrect. With 'we', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' всегда используйте 'are'."
        },
        {
            question: "Complete the dog walker introduction:",
            questionRu: "Завершите представление выгульщика собак:",
            sentence: "The dog walker ___ Jenny.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with job titles and names.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями и именами.",
            incorrectFeedback: "Incorrect. With job titles, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностями используйте 'is'."
        },
        {
            question: "Choose the correct café introduction:",
            questionRu: "Выберите правильное представление в кафе:",
            sentence: "My name ___ Alice. Welcome to our café!",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'my name' for service greetings.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'my name' для приветствия в сфере услуг.",
            incorrectFeedback: "Incorrect. With 'my name', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my name' мы всегда используем 'is'."
        },
        {
            question: "Select the correct park introduction:",
            questionRu: "Выберите правильное представление в парке:",
            options: [
                "They are our kids: Sophie and Max.",
                "They is our kids: Sophie and Max.",
                "They am our kids: Sophie and Max.",
                "They be our kids: Sophie and Max."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'they' for multiple children.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'they' для нескольких детей.",
            incorrectFeedback: "Incorrect. With 'they', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' всегда используйте 'are'."
        },
        {
            question: "Complete the hairdresser introduction:",
            questionRu: "Завершите представление парикмахера:",
            sentence: "Your stylist today ___ Nicole.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with service provider titles.",
            correctFeedbackRu: "Правильно! Используйте 'is' с титулами поставщиков услуг.",
            incorrectFeedback: "Incorrect. With service titles, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С сервисными титулами используйте 'is'."
        },
        {
            question: "Choose the correct taxi introduction:",
            questionRu: "Выберите правильное представление в такси:",
            sentence: "I ___ Carlos, your driver today.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for driver self-introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для самопредставления водителя.",
            incorrectFeedback: "Incorrect. For driver introductions, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для представления водителя используйте 'I am'."
        }
    ]
};

/* ============================================
Page 6: School and classroom introductions with names
============================================ */
window.grammarExercises['to-be']['to-be-with-names-page6'] = {
    title: "School and Classroom Name Introductions",
    multipleChoice: [
        {
            question: "Choose the correct teacher introduction:",
            questionRu: "Выберите правильное представление учителя:",
            sentence: "Good morning! I ___ Mrs. Johnson, your English teacher.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for teacher self-introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для самопредставления учителя.",
            incorrectFeedback: "Incorrect. Teachers use 'I am' for introductions.",
            incorrectFeedbackRu: "Неправильно. Учителя используют 'I am' для представления."
        },
        {
            question: "Select the correct new student introduction:",
            questionRu: "Выберите правильное представление нового студента:",
            options: [
                "This is Emma, our new student from Canada.",
                "This am Emma, our new student from Canada.",
                "This are Emma, our new student from Canada.",
                "This be Emma, our new student from Canada."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'This is' when introducing new students.",
            correctFeedbackRu: "Правильно! Используйте 'This is' при представлении новых студентов.",
            incorrectFeedback: "Incorrect. For student introductions, use 'This is'.",
            incorrectFeedbackRu: "Неправильно. Для представления студентов используйте 'This is'."
        },
        {
            question: "Complete the principal introduction:",
            questionRu: "Завершите представление директора:",
            sentence: "She ___ Miss Garcia, our school principal.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'she' for school staff.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'she' для школьного персонала.",
            incorrectFeedback: "Incorrect. With 'she', always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' всегда используйте 'is'."
        },
        {
            question: "Choose the correct PE teacher introduction:",
            questionRu: "Выберите правильное представление учителя физкультуры:",
            sentence: "He ___ Coach Miller from the sports department.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'he' for coach introductions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'he' для представления тренера.",
            incorrectFeedback: "Incorrect. With 'he', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы всегда используем 'is'."
        },
        {
            question: "Select the correct classmate introduction:",
            questionRu: "Выберите правильное представление одноклассников:",
            options: [
                "They are my classmates: Ben and Lisa.",
                "They is my classmates: Ben and Lisa.",
                "They am my classmates: Ben and Lisa.",
                "They be my classmates: Ben and Lisa."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'they' for multiple classmates.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'they' для нескольких одноклассников.",
            incorrectFeedback: "Incorrect. With 'they', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' всегда используйте 'are'."
        },
        {
            question: "Complete the librarian introduction:",
            questionRu: "Завершите представление библиотекаря:",
            sentence: "The school librarian ___ Mr. Brown.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with school staff positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями школьного персонала.",
            incorrectFeedback: "Incorrect. With staff positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностями персонала используйте 'is'."
        },
        {
            question: "Choose the correct student self-introduction:",
            questionRu: "Выберите правильное самопредставление студента:",
            sentence: "Hello everyone, I ___ Alex from Grade 5.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for student self-introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для самопредставления студента.",
            incorrectFeedback: "Incorrect. Students use 'I am' for self-introduction.",
            incorrectFeedbackRu: "Неправильно. Студенты используют 'I am' для самопредставления."
        },
        {
            question: "Select the correct lunch lady introduction:",
            questionRu: "Выберите правильное представление работницы столовой:",
            options: [
                "We are the lunch staff: Mary and Susan.",
                "We is the lunch staff: Mary and Susan.",
                "We am the lunch staff: Mary and Susan.",
                "We be the lunch staff: Mary and Susan."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'we' for staff teams.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'we' для команд персонала.",
            incorrectFeedback: "Incorrect. With 'we', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' всегда используйте 'are'."
        },
        {
            question: "Complete the janitor introduction:",
            questionRu: "Завершите представление уборщика:",
            sentence: "Our janitor ___ Mr. Wilson.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with school worker positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями школьных работников.",
            incorrectFeedback: "Incorrect. With worker positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностями работников используйте 'is'."
        },
        {
            question: "Choose the correct art teacher introduction:",
            questionRu: "Выберите правильное представление учителя рисования:",
            sentence: "Your art teacher today ___ Ms. Taylor.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with teacher assignments.",
            correctFeedbackRu: "Правильно! Используйте 'is' с назначениями учителей.",
            incorrectFeedback: "Incorrect. With teacher assignments, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С назначениями учителей используйте 'is'."
        }
    ]
};

/* ============================================
Page 7: Simple social event introductions with names
============================================ */
window.grammarExercises['to-be']['to-be-with-names-page7'] = {
    title: "Social Event Name Introductions",
    multipleChoice: [
        {
            question: "Choose the correct party introduction:",
            questionRu: "Выберите правильное представление на вечеринке:",
            sentence: "Hi! I ___ Steve. Welcome to my birthday party!",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' when introducing yourself at parties.",
            correctFeedbackRu: "Правильно! Используйте 'I am' при представлении себя на вечеринках.",
            incorrectFeedback: "Incorrect. At parties, use 'I am' for self-introduction.",
            incorrectFeedbackRu: "Неправильно. На вечеринках используйте 'I am' для самопредставления."
        },
        {
            question: "Select the correct wedding introduction:",
            questionRu: "Выберите правильное представление на свадьбе:",
            options: [
                "This is Amanda, the bride's sister.",
                "This am Amanda, the bride's sister.",
                "This are Amanda, the bride's sister.",
                "This be Amanda, the bride's sister."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'This is' for wedding introductions.",
            correctFeedbackRu: "Правильно! Используйте 'This is' для представлений на свадьбе.",
            incorrectFeedback: "Incorrect. At weddings, use 'This is'.",
            incorrectFeedbackRu: "Неправильно. На свадьбах используйте 'This is'."
        },
        {
            question: "Complete the dinner party introduction:",
            questionRu: "Завершите представление на званом ужине:",
            sentence: "She ___ Helen, our host for tonight.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'she' for host introductions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'she' для представления хозяйки.",
            incorrectFeedback: "Incorrect. With 'she', always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' всегда используйте 'is'."
        },
        {
            question: "Choose the correct barbecue introduction:",
            questionRu: "Выберите правильное представление на барбекю:",
            sentence: "He ___ Rick, our neighbor who organized this.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'he' for event organizers.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'he' для организаторов мероприятий.",
            incorrectFeedback: "Incorrect. With 'he', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы всегда используем 'is'."
        },
        {
            question: "Select the correct game night introduction:",
            questionRu: "Выберите правильное представление на игровом вечере:",
            options: [
                "We are tonight's game partners: Jake and Mia.",
                "We is tonight's game partners: Jake and Mia.",
                "We am tonight's game partners: Jake and Mia.",
                "We be tonight's game partners: Jake and Mia."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'we' for game partnerships.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'we' для игровых партнерств.",
            incorrectFeedback: "Incorrect. With 'we', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' всегда используйте 'are'."
        },
        {
            question: "Complete the book club introduction:",
            questionRu: "Завершите представление в книжном клубе:",
            sentence: "The book club leader ___ Diana.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with club leadership positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с руководящими должностями клуба.",
            incorrectFeedback: "Incorrect. With leadership positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С руководящими должностями используйте 'is'."
        },
        {
            question: "Choose the correct picnic introduction:",
            questionRu: "Выберите правильное представление на пикнике:",
            sentence: "My name ___ Greg. I brought the sandwiches!",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'my name' at casual events.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'my name' на неформальных мероприятиях.",
            incorrectFeedback: "Incorrect. With 'my name', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my name' мы всегда используем 'is'."
        },
        {
            question: "Select the correct holiday party introduction:",
            questionRu: "Выберите правильное представление на праздничной вечеринке:",
            options: [
                "They are our special guests: Mr. and Mrs. Davis.",
                "They is our special guests: Mr. and Mrs. Davis.",
                "They am our special guests: Mr. and Mrs. Davis.",
                "They be our special guests: Mr. and Mrs. Davis."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'they' for special guests.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'they' для особых гостей.",
            incorrectFeedback: "Incorrect. With 'they', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' всегда используйте 'are'."
        },
        {
            question: "Complete the movie night introduction:",
            questionRu: "Завершите представление на киновечере:",
            sentence: "Our movie expert tonight ___ Cindy.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with expert roles at events.",
            correctFeedbackRu: "Правильно! Используйте 'is' с экспертными ролями на мероприятиях.",
            incorrectFeedback: "Incorrect. With expert roles, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С экспертными ролями используйте 'is'."
        },
        {
            question: "Choose the correct karaoke introduction:",
            questionRu: "Выберите правильное представление на караоке:",
            sentence: "I ___ Tony, your karaoke host for tonight!",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for entertainment host introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для представления ведущего развлечений.",
            incorrectFeedback: "Incorrect. Entertainment hosts use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Ведущие развлечений используют 'I am'."
        }
    ]
};

/* ============================================
Page 8: Simple hobby and activity introductions with names
============================================ */
window.grammarExercises['to-be']['to-be-with-names-page8'] = {
    title: "Hobby and Activity Name Introductions",
    multipleChoice: [
        {
            question: "Choose the correct sports introduction:",
            questionRu: "Выберите правильное представление в спорте:",
            sentence: "Hi! I ___ Mark, the soccer coach.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' when introducing yourself as a coach.",
            correctFeedbackRu: "Правильно! Используйте 'I am' при представлении себя как тренера.",
            incorrectFeedback: "Incorrect. Coaches use 'I am' for self-introduction.",
            incorrectFeedbackRu: "Неправильно. Тренеры используют 'I am' для самопредставления."
        },
        {
            question: "Select the correct music class introduction:",
            questionRu: "Выберите правильное представление на уроке музыки:",
            options: [
                "This is Anna, she plays the piano.",
                "This am Anna, she plays the piano.",
                "This are Anna, she plays the piano.",
                "This be Anna, she plays the piano."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'This is' when introducing someone's musical talent.",
            correctFeedbackRu: "Правильно! Используйте 'This is' при представлении музыкального таланта.",
            incorrectFeedback: "Incorrect. For talent introductions, use 'This is'.",
            incorrectFeedbackRu: "Неправильно. Для представления таланта используйте 'This is'."
        },
        {
            question: "Complete the dance class introduction:",
            questionRu: "Завершите представление на уроке танца:",
            sentence: "She ___ Linda, our dance instructor.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'she' for instructor introductions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'she' для представления инструктора.",
            incorrectFeedback: "Incorrect. With 'she', always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' всегда используйте 'is'."
        },
        {
            question: "Choose the correct art club introduction:",
            questionRu: "Выберите правильное представление в художественном клубе:",
            sentence: "He ___ Kevin, he loves painting.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'he' for hobby descriptions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'he' для описания хобби.",
            incorrectFeedback: "Incorrect. With 'he', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы всегда используем 'is'."
        },
        {
            question: "Select the correct swimming team introduction:",
            questionRu: "Выберите правильное представление команды пловцов:",
            options: [
                "We are the swimming team: Peter and Jane.",
                "We is the swimming team: Peter and Jane.",
                "We am the swimming team: Peter and Jane.",
                "We be the swimming team: Peter and Jane."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'we' for team introductions.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'we' для представления команды.",
            incorrectFeedback: "Incorrect. With 'we', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' всегда используйте 'are'."
        },
        {
            question: "Complete the chess club introduction:",
            questionRu: "Завершите представление шахматного клуба:",
            sentence: "The chess champion ___ Sophie.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with champion titles.",
            correctFeedbackRu: "Правильно! Используйте 'is' с титулами чемпионов.",
            incorrectFeedback: "Incorrect. With champion titles, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С титулами чемпионов используйте 'is'."
        },
        {
            question: "Choose the correct photography club introduction:",
            questionRu: "Выберите правильное представление в фотоклубе:",
            sentence: "My name ___ Robert. I take nature photos.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'my name' in hobby contexts.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'my name' в контексте хобби.",
            incorrectFeedback: "Incorrect. With 'my name', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my name' мы всегда используем 'is'."
        },
        {
            question: "Select the correct cooking class introduction:",
            questionRu: "Выберите правильное представление на уроке кулинарии:",
            options: [
                "They are cooking partners: Sam and Emma.",
                "They is cooking partners: Sam and Emma.",
                "They am cooking partners: Sam and Emma.",
                "They be cooking partners: Sam and Emma."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'they' for cooking partnerships.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'they' для кулинарных партнерств.",
            incorrectFeedback: "Incorrect. With 'they', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' всегда используйте 'are'."
        },
        {
            question: "Complete the guitar lesson introduction:",
            questionRu: "Завершите представление на уроке гитары:",
            sentence: "Our guitar teacher ___ Mr. Collins.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with music teacher positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями учителей музыки.",
            incorrectFeedback: "Incorrect. With teacher positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностями учителей используйте 'is'."
        },
        {
            question: "Choose the correct book reading introduction:",
            questionRu: "Выберите правильное представление на чтении книг:",
            sentence: "I ___ Nancy. I love reading mystery books.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for hobby self-introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для самопредставления с хобби.",
            incorrectFeedback: "Incorrect. For hobby introductions, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для представления хобби используйте 'I am'."
        }
    ]
};

/* ============================================
Page 9: Simple travel and vacation introductions with names
============================================ */
window.grammarExercises['to-be']['to-be-with-names-page9'] = {
    title: "Travel and Vacation Name Introductions",
    multipleChoice: [
        {
            question: "Choose the correct hotel introduction:",
            questionRu: "Выберите правильное представление в отеле:",
            sentence: "Good evening! I ___ Jessica from the front desk.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for hotel staff introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для представления персонала отеля.",
            incorrectFeedback: "Incorrect. Hotel staff use 'I am' for introductions.",
            incorrectFeedbackRu: "Неправильно. Персонал отеля использует 'I am' для представления."
        },
        {
            question: "Select the correct tour guide introduction:",
            questionRu: "Выберите правильное представление экскурсовода:",
            options: [
                "This is Marcus, our city tour guide.",
                "This am Marcus, our city tour guide.",
                "This are Marcus, our city tour guide.",
                "This be Marcus, our city tour guide."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'This is' when introducing tour guides.",
            correctFeedbackRu: "Правильно! Используйте 'This is' при представлении экскурсоводов.",
            incorrectFeedback: "Incorrect. For guide introductions, use 'This is'.",
            incorrectFeedbackRu: "Неправильно. Для представления гидов используйте 'This is'."
        },
        {
            question: "Complete the airport introduction:",
            questionRu: "Завершите представление в аэропорту:",
            sentence: "She ___ Rachel, our flight attendant today.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'she' for airline staff.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'she' для персонала авиакомпании.",
            incorrectFeedback: "Incorrect. With 'she', always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' всегда используйте 'is'."
        },
        {
            question: "Choose the correct restaurant introduction:",
            questionRu: "Выберите правильное представление в ресторане:",
            sentence: "He ___ Carlos, your waiter for this evening.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'he' for restaurant staff.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'he' для персонала ресторана.",
            incorrectFeedback: "Incorrect. With 'he', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы всегда используем 'is'."
        },
        {
            question: "Select the correct travel buddy introduction:",
            questionRu: "Выберите правильное представление попутчиков:",
            options: [
                "We are travel partners: Lisa and Mike.",
                "We is travel partners: Lisa and Mike.",
                "We am travel partners: Lisa and Mike.",
                "We be travel partners: Lisa and Mike."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'we' for travel partnerships.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'we' для туристических партнерств.",
            incorrectFeedback: "Incorrect. With 'we', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' всегда используйте 'are'."
        },
        {
            question: "Complete the taxi driver introduction:",
            questionRu: "Завершите представление водителя такси:",
            sentence: "The taxi driver ___ Mr. Ahmed.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with driver positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями водителей.",
            incorrectFeedback: "Incorrect. With driver positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностями водителей используйте 'is'."
        },
        {
            question: "Choose the correct cruise introduction:",
            questionRu: "Выберите правильное представление на круизе:",
            sentence: "My name ___ Captain Williams. Welcome aboard!",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'my name' for captain introductions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'my name' для представления капитана.",
            incorrectFeedback: "Incorrect. With 'my name', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my name' мы всегда используем 'is'."
        },
        {
            question: "Select the correct beach introduction:",
            questionRu: "Выберите правильное представление на пляже:",
            options: [
                "They are lifeguards: Tom and Sarah.",
                "They is lifeguards: Tom and Sarah.",
                "They am lifeguards: Tom and Sarah.",
                "They be lifeguards: Tom and Sarah."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'they' for multiple lifeguards.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'they' для нескольких спасателей.",
            incorrectFeedback: "Incorrect. With 'they', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' всегда используйте 'are'."
        },
        {
            question: "Complete the museum introduction:",
            questionRu: "Завершите представление в музее:",
            sentence: "Our museum director ___ Dr. Thompson.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with museum staff positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями музейного персонала.",
            incorrectFeedback: "Incorrect. With museum positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С музейными должностями используйте 'is'."
        },
        {
            question: "Choose the correct camping introduction:",
            questionRu: "Выберите правильное представление в кемпинге:",
            sentence: "I ___ Forest Ranger Kelly. Stay safe in the woods!",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for ranger self-introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для самопредставления рейнджера.",
            incorrectFeedback: "Incorrect. Rangers use 'I am' for introductions.",
            incorrectFeedbackRu: "Неправильно. Рейнджеры используют 'I am' для представления."
        }
    ]
};

/* ============================================
Page 10: Simple mixed review introductions with names
============================================ */
window.grammarExercises['to-be']['to-be-with-names-page10'] = {
    title: "Mixed Review Name Introductions",
    multipleChoice: [
        {
            question: "Choose the correct doctor introduction:",
            questionRu: "Выберите правильное представление врача:",
            sentence: "Good morning! I ___ Dr. Anderson, your dentist.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for medical professional introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для представления медицинских специалистов.",
            incorrectFeedback: "Incorrect. Medical professionals use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Медицинские специалисты используют 'I am'."
        },
        {
            question: "Select the correct pet introduction:",
            questionRu: "Выберите правильное представление домашнего животного:",
            options: [
                "This is Buddy, my golden retriever.",
                "This am Buddy, my golden retriever.",
                "This are Buddy, my golden retriever.",
                "This be Buddy, my golden retriever."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'This is' when introducing pets.",
            correctFeedbackRu: "Правильно! Используйте 'This is' при представлении домашних животных.",
            incorrectFeedback: "Incorrect. For pet introductions, use 'This is'.",
            incorrectFeedbackRu: "Неправильно. Для представления питомцев используйте 'This is'."
        },
        {
            question: "Complete the store manager introduction:",
            questionRu: "Завершите представление менеджера магазина:",
            sentence: "She ___ Ms. Rodriguez, the store manager.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'she' for management positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'she' для руководящих должностей.",
            incorrectFeedback: "Incorrect. With 'she', always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' всегда используйте 'is'."
        },
        {
            question: "Choose the correct mechanic introduction:",
            questionRu: "Выберите правильное представление механика:",
            sentence: "He ___ Joe, he fixes cars at the garage.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'he' for job descriptions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'he' для описания работы.",
            incorrectFeedback: "Incorrect. With 'he', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' мы всегда используем 'is'."
        },
        {
            question: "Select the correct twins introduction:",
            questionRu: "Выберите правильное представление близнецов:",
            options: [
                "We are twins: Amy and Andy.",
                "We is twins: Amy and Andy.",
                "We am twins: Amy and Andy.",
                "We be twins: Amy and Andy."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'we' for twin introductions.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'we' для представления близнецов.",
            incorrectFeedback: "Incorrect. With 'we', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' всегда используйте 'are'."
        },
        {
            question: "Complete the mailman introduction:",
            questionRu: "Завершите представление почтальона:",
            sentence: "The mailman ___ Mr. Davis.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with service worker positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями работников сферы услуг.",
            incorrectFeedback: "Incorrect. With worker positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностями работников используйте 'is'."
        },
        {
            question: "Choose the correct farmer introduction:",
            questionRu: "Выберите правильное представление фермера:",
            sentence: "My name ___ William. I grow vegetables.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with 'my name' for occupation descriptions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с 'my name' для описания профессии.",
            incorrectFeedback: "Incorrect. With 'my name', we always use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my name' мы всегда используем 'is'."
        },
        {
            question: "Select the correct volunteer introduction:",
            questionRu: "Выберите правильное представление волонтеров:",
            options: [
                "They are volunteers: Grace and Henry.",
                "They is volunteers: Grace and Henry.",
                "They am volunteers: Grace and Henry.",
                "They be volunteers: Grace and Henry."
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'are' with 'they' for volunteer groups.",
            correctFeedbackRu: "Правильно! Используйте 'are' с 'they' для групп волонтеров.",
            incorrectFeedback: "Incorrect. With 'they', always use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' всегда используйте 'are'."
        },
        {
            question: "Complete the firefighter introduction:",
            questionRu: "Завершите представление пожарного:",
            sentence: "Our local firefighter ___ Captain Miller.",
            options: [
                "is",
                "am",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'is' with emergency service positions.",
            correctFeedbackRu: "Правильно! Используйте 'is' с должностями экстренных служб.",
            incorrectFeedback: "Incorrect. With service positions, use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностями служб используйте 'is'."
        },
        {
            question: "Choose the correct baker introduction:",
            questionRu: "Выберите правильное представление пекаря:",
            sentence: "I ___ Maria. I bake fresh bread every morning.",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Use 'I am' for professional self-descriptions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для профессионального самоописания.",
            incorrectFeedback: "Incorrect. For professional descriptions, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для профессиональных описаний используйте 'I am'."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Verb 'to be' exercises data loaded successfully!");

/* =============================================================================== */
/* ===========================Fill in the Gaps Exercises========================== */

/* ============================================
Page 1: Basic name introductions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-gap-page1'] = {
    title: "Basic Name Introductions",
    fillGaps: [
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "Hello, I ____ Daniel.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! When introducing yourself, we use 'I am' followed by your name.",
            correctFeedbackRu: "Правильно! При представлении себя мы используем 'I am', затем ваше имя.",
            incorrectFeedback: "Incorrect. With 'I', we need to use 'am' for self-introduction.",
            incorrectFeedbackRu: "Неправильно. С 'I' нужно использовать 'am' для самопредставления."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "This ____ my sister Catherine.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this' when introducing someone, we use 'is'.",
            correctFeedbackRu: "Правильно! С 'this' при представлении кого-либо используем 'is'.",
            incorrectFeedback: "Incorrect. With 'this' when introducing someone, we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' при представлении кого-либо нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My name ____ Oliver.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'my name', we always use 'is'.",
            correctFeedbackRu: "Правильно! С 'my name' мы всегда используем 'is'.",
            incorrectFeedback: "Incorrect. With 'my name', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my name' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "She ____ Victoria, my new friend.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' when introducing someone.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' при представлении кого-либо.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "He ____ Benjamin from next door.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for personal introductions.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для личных представлений.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "We ____ Isabella and Christopher.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' when introducing ourselves as a group.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' при представлении себя как группы.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "They ____ Nicholas and Samantha.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' when introducing multiple people.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' при представлении нескольких людей.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Nice to meet you! I ____ Elizabeth.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'I am' for polite self-introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для вежливого самопредставления.",
            incorrectFeedback: "Incorrect. For polite introductions, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для вежливых представлений используйте 'I am'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "This ____ Jonathan, he lives here.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this', we use 'is' for neighbor introductions.",
            correctFeedbackRu: "Правильно! С 'this' мы используем 'is' для представления соседей.",
            incorrectFeedback: "Incorrect. With 'this', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The new student ____ Stephanie.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With singular subjects like 'student', we use 'is'.",
            correctFeedbackRu: "Правильно! С подлежащими в единственном числе, как 'student', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With singular subjects, we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими в единственном числе нужно использовать 'is'."
        }
    ]
};

/* ============================================
Page 2: Professional name introductions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-gap-page2'] = {
    title: "Professional Name Introductions",
    fillGaps: [
        {
            question: "Complete the business introduction with the correct form of 'to be':",
            questionRu: "Завершите деловое представление правильной формой глагола 'to be':",
            sentence: "Good morning, I ____ Mr. Harrison, the project manager.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'I am' for professional self-introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для профессионального самопредставления.",
            incorrectFeedback: "Incorrect. For professional introductions, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для профессиональных представлений используйте 'I am'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "This ____ Ms. Clarke, our HR director.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this', we use 'is' for professional introductions.",
            correctFeedbackRu: "Правильно! С 'this' мы используем 'is' для профессиональных представлений.",
            incorrectFeedback: "Incorrect. With 'this', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ Dr. Mitchell, our chief medical officer.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for executive introductions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для представления руководителей.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ Attorney Wilson from the legal department.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for professional titles.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для профессиональных титулов.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is'."
        },
        {
            question: "Complete the team introduction with the correct form of 'to be':",
            questionRu: "Завершите представление команды правильной формой глагола 'to be':",
            sentence: "We ____ the marketing team: Andrea and Marcus.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for team introductions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для представления команды.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ our consultants: Dr. Adams and Mr. Foster.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for multiple professionals.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для нескольких профессионалов.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The CEO ____ Mrs. Campbell.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With job titles like 'CEO', we use 'is'.",
            correctFeedbackRu: "Правильно! С должностными титулами, как 'CEO', мы используем 'is'.",
            incorrectFeedback: "Incorrect. With job titles, we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С должностными титулами нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My supervisor ____ Mr. Peterson.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'my supervisor', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'my supervisor' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'my supervisor', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my supervisor' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "Our guest speaker today ____ Professor Evans.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'our guest speaker', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'our guest speaker' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'our guest speaker', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'our guest speaker' нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The department heads ____ Ms. Taylor and Mr. Brooks.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With plural subjects like 'department heads', we use 'are'.",
            correctFeedbackRu: "Правильно! С подлежащими во множественном числе, как 'department heads', мы используем 'are'.",
            incorrectFeedback: "Incorrect. With plural subjects, we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С подлежащими во множественном числе нужно использовать 'are'."
        }
    ]
};

/* ============================================
Page 3: Family and friend name introductions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-gap-page3'] = {
    title: "Family and Friend Name Introductions",
    fillGaps: [
        {
            question: "Complete the family introduction with the correct form of 'to be':",
            questionRu: "Завершите семейное представление правильной формой глагола 'to be':",
            sentence: "Hi everyone, I ____ Rebecca, Tom's wife.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Use 'I am' for family relationship introductions.",
            correctFeedbackRu: "Правильно! Используйте 'I am' для представления семейных отношений.",
            incorrectFeedback: "Incorrect. For family introductions, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для семейных представлений используйте 'I am'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "This ____ my daughter Ashley.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this', we use 'is' for family member introductions.",
            correctFeedbackRu: "Правильно! С 'this' мы используем 'is' для представления членов семьи.",
            incorrectFeedback: "Incorrect. With 'this', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ my cousin Jennifer.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for female relative introductions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для представления родственниц.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ my uncle Patrick.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for male relative introductions.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для представления родственников.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "We ____ the Johnson family: Robert and Linda.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for family introductions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для семейных представлений.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ my grandparents: Harold and Margaret.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for multiple family members.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для нескольких членов семьи.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "My best friend ____ Amanda.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'my best friend', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'my best friend' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'my best friend', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my best friend' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Our neighbors ____ the Williams family.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'our neighbors', we use 'are'.",
            correctFeedbackRu: "Правильно! С 'our neighbors' мы используем 'are'.",
            incorrectFeedback: "Incorrect. With 'our neighbors', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'our neighbors' нужно использовать 'are'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "The babysitter ____ Crystal.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the babysitter', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the babysitter' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the babysitter', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the babysitter' нужно использовать 'is'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My roommates ____ Tyler and Brandon.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'my roommates', we use 'are' for multiple people.",
            correctFeedbackRu: "Правильно! С 'my roommates' мы используем 'are' для нескольких людей.",
            incorrectFeedback: "Incorrect. With 'my roommates', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'my roommates' нужно использовать 'are'."
        }
    ]
};

/* ============================================
Page 4: School and classroom name introductions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-gap-page4'] = {
    title: "School and Classroom Name Introductions",
    fillGaps: [
        {
            question: "Complete the teacher introduction with the correct form of 'to be':",
            questionRu: "Завершите представление учителя правильной формой глагола 'to be':",
            sentence: "Good morning class! I ____ Miss Anderson, your new teacher.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Teachers use 'I am' when introducing themselves to students.",
            correctFeedbackRu: "Правильно! Учителя используют 'I am' при представлении себя ученикам.",
            incorrectFeedback: "Incorrect. Teachers use 'I am' for classroom introductions.",
            incorrectFeedbackRu: "Неправильно. Учителя используют 'I am' для представления в классе."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "This ____ Matthew, he just transferred here.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this', we use 'is' for student introductions.",
            correctFeedbackRu: "Правильно! С 'this' мы используем 'is' для представления студентов.",
            incorrectFeedback: "Incorrect. With 'this', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ Principal Washington.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for school administrator introductions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для представления школьной администрации.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ Coach Thompson from the gym.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for coach introductions.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для представления тренеров.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "We ____ lab partners: Grace and William.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for student partnerships.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для студенческих партнерств.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ exchange students: Hiroshi and Maria.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for multiple students.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для нескольких студентов.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The school nurse ____ Mrs. Robinson.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the school nurse', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the school nurse' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the school nurse', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the school nurse' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "My study buddy ____ Hannah.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'my study buddy', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'my study buddy' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'my study buddy', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'my study buddy' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "Our class representatives ____ Noah and Sophia.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'our class representatives', we use 'are' for multiple people.",
            correctFeedbackRu: "Правильно! С 'our class representatives' мы используем 'are' для нескольких людей.",
            incorrectFeedback: "Incorrect. With 'our class representatives', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'our class representatives' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The substitute teacher ____ Mr. Garcia.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the substitute teacher', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the substitute teacher' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the substitute teacher', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the substitute teacher' нужно использовать 'is'."
        }
    ]
};

/* ============================================
Page 5: Daily life and service name introductions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-gap-page5'] = {
    title: "Daily Life and Service Name Introductions",
    fillGaps: [
        {
            question: "Complete the shop introduction with the correct form of 'to be':",
            questionRu: "Завершите представление в магазине правильной формой глагола 'to be':",
            sentence: "Hello! I ____ Sophie, welcome to our store.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Shop assistants use 'I am' when greeting customers.",
            correctFeedbackRu: "Правильно! Продавцы используют 'I am' при приветствии покупателей.",
            incorrectFeedback: "Incorrect. Shop assistants use 'I am' for customer greetings.",
            incorrectFeedbackRu: "Неправильно. Продавцы используют 'I am' для приветствия покупателей."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "This ____ Ryan, our delivery driver.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this', we use 'is' for service worker introductions.",
            correctFeedbackRu: "Правильно! С 'this' мы используем 'is' для представления работников сферы услуг.",
            incorrectFeedback: "Incorrect. With 'this', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ Melissa, the hairdresser.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for service professional introductions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для представления специалистов сферы услуг.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ Derek, the plumber.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for tradesman introductions.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для представления мастеров.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "We ____ cleaning crew: Janet and Eddie.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for service team introductions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для представления команды услуг.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ security guards: Frank and Brenda.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for multiple security staff.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для нескольких охранников.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The pharmacist ____ Dr. Kim.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the pharmacist', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the pharmacist' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the pharmacist', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the pharmacist' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Our electrician ____ Victor.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'our electrician', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'our electrician' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'our electrician', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'our electrician' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "The grocery cashiers ____ Tina and Carl.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the grocery cashiers', we use 'are' for multiple workers.",
            correctFeedbackRu: "Правильно! С 'the grocery cashiers' мы используем 'are' для нескольких работников.",
            incorrectFeedback: "Incorrect. With 'the grocery cashiers', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'the grocery cashiers' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The bank teller ____ Monica.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the bank teller', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the bank teller' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the bank teller', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the bank teller' нужно использовать 'is'."
        }
    ]
};

/* ============================================
Page 6: Travel and entertainment name introductions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-gap-page6'] = {
    title: "Travel and Entertainment Name Introductions",
    fillGaps: [
        {
            question: "Complete the hotel introduction with the correct form of 'to be':",
            questionRu: "Завершите представление в отеле правильной формой глагола 'to be':",
            sentence: "Welcome to our hotel! I ____ Brian, your concierge.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Hotel staff use 'I am' when introducing themselves to guests.",
            correctFeedbackRu: "Правильно! Персонал отеля использует 'I am' при представлении себя гостям.",
            incorrectFeedback: "Incorrect. Hotel staff use 'I am' for guest introductions.",
            incorrectFeedbackRu: "Неправильно. Персонал отеля использует 'I am' для представления гостям."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "This ____ Valerie, your tour guide today.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this', we use 'is' for tour guide introductions.",
            correctFeedbackRu: "Правильно! С 'this' мы используем 'is' для представления экскурсоводов.",
            incorrectFeedback: "Incorrect. With 'this', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ Captain Stevens, your pilot.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for airline crew introductions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для представления экипажа самолета.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ Chef Antonio from the restaurant.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for chef introductions.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для представления шеф-поваров.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "We ____ cruise directors: Maxwell and Chloe.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for entertainment staff introductions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для представления развлекательного персонала.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ ski instructors: Klaus and Ingrid.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for multiple instructors.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для нескольких инструкторов.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The museum curator ____ Dr. Phillips.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the museum curator', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the museum curator' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the museum curator', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the museum curator' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Our travel agent ____ Denise.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'our travel agent', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'our travel agent' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'our travel agent', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'our travel agent' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "The theater ushers ____ Gerald and Priscilla.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the theater ushers', we use 'are' for multiple staff members.",
            correctFeedbackRu: "Правильно! С 'the theater ushers' мы используем 'are' для нескольких сотрудников.",
            incorrectFeedback: "Incorrect. With 'the theater ushers', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'the theater ushers' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The spa therapist ____ Serena.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the spa therapist', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the spa therapist' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the spa therapist', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the spa therapist' нужно использовать 'is'."
        }
    ]
};

/* ============================================
Page 7: Sports and hobby name introductions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-gap-page7'] = {
    title: "Sports and Hobby Name Introductions",
    fillGaps: [
        {
            question: "Complete the sports introduction with the correct form of 'to be':",
            questionRu: "Завершите спортивное представление правильной формой глагола 'to be':",
            sentence: "Hi team! I ____ Coach Williams, your new basketball coach.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Coaches use 'I am' when introducing themselves to teams.",
            correctFeedbackRu: "Правильно! Тренеры используют 'I am' при представлении себя командам.",
            incorrectFeedback: "Incorrect. Coaches use 'I am' for team introductions.",
            incorrectFeedbackRu: "Неправильно. Тренеры используют 'I am' для представления командам."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "This ____ Marcus, he plays tennis professionally.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this', we use 'is' for athlete introductions.",
            correctFeedbackRu: "Правильно! С 'this' мы используем 'is' для представления спортсменов.",
            incorrectFeedback: "Incorrect. With 'this', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ Natalie, the swimming instructor.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for sports instructor introductions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для представления спортивных инструкторов.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ Ethan, he teaches guitar lessons.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for music teacher introductions.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для представления учителей музыки.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "We ____ dance partners: Isabella and Lucas.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for activity partnerships.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для партнерства в деятельности.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ yoga instructors: Maya and Jordan.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for multiple instructors.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для нескольких инструкторов.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The art teacher ____ Ms. Rodriguez.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the art teacher', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the art teacher' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the art teacher', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the art teacher' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Our chess champion ____ Theodore.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'our chess champion', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'our chess champion' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'our chess champion', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'our chess champion' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "The volleyball players ____ Zoe and Austin.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the volleyball players', we use 'are' for multiple athletes.",
            correctFeedbackRu: "Правильно! С 'the volleyball players' мы используем 'are' для нескольких спортсменов.",
            incorrectFeedback: "Incorrect. With 'the volleyball players', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'the volleyball players' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The drama club president ____ Scarlett.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the drama club president', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the drama club president' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the drama club president', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the drama club president' нужно использовать 'is'."
        }
    ]
};

/* ============================================
Page 8: Health and medical name introductions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-gap-page8'] = {
    title: "Health and Medical Name Introductions",
    fillGaps: [
        {
            question: "Complete the medical introduction with the correct form of 'to be':",
            questionRu: "Завершите медицинское представление правильной формой глагола 'to be':",
            sentence: "Good afternoon! I ____ Dr. Bennett, your family doctor.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Doctors use 'I am' when introducing themselves to patients.",
            correctFeedbackRu: "Правильно! Врачи используют 'I am' при представлении себя пациентам.",
            incorrectFeedback: "Incorrect. Doctors use 'I am' for patient introductions.",
            incorrectFeedbackRu: "Неправильно. Врачи используют 'I am' для представления пациентам."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "This ____ Nurse Patricia, she will take your blood pressure.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this', we use 'is' for nurse introductions.",
            correctFeedbackRu: "Правильно! С 'this' мы используем 'is' для представления медсестер.",
            incorrectFeedback: "Incorrect. With 'this', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ Dr. Morgan, the pediatrician.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for specialist doctor introductions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для представления врачей-специалистов.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ Therapist Kevin, he helps with physical therapy.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for therapist introductions.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для представления терапевтов.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "We ____ emergency responders: Paramedic Jake and EMT Lily.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for medical team introductions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для представления медицинской команды.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ dental assistants: Carmen and Wesley.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for multiple dental staff.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для нескольких стоматологических сотрудников.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The surgeon ____ Dr. Hamilton.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the surgeon', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the surgeon' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the surgeon', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the surgeon' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Our nutritionist ____ Samantha.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'our nutritionist', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'our nutritionist' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'our nutritionist', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'our nutritionist' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "The hospital administrators ____ Mr. Fletcher and Mrs. Stone.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the hospital administrators', we use 'are' for multiple staff.",
            correctFeedbackRu: "Правильно! С 'the hospital administrators' мы используем 'are' для нескольких сотрудников.",
            incorrectFeedback: "Incorrect. With 'the hospital administrators', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'the hospital administrators' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The optometrist ____ Dr. Chen.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the optometrist', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the optometrist' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the optometrist', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the optometrist' нужно использовать 'is'."
        }
    ]
};

/* ============================================
Page 9: Community and volunteer name introductions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-gap-page9'] = {
    title: "Community and Volunteer Name Introductions",
    fillGaps: [
        {
            question: "Complete the volunteer introduction with the correct form of 'to be':",
            questionRu: "Завершите представление волонтера правильной формой глагола 'to be':",
            sentence: "Hello everyone! I ____ Volunteer Coordinator Sarah.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Volunteer coordinators use 'I am' when introducing themselves.",
            correctFeedbackRu: "Правильно! Координаторы волонтеров используют 'I am' при представлении себя.",
            incorrectFeedback: "Incorrect. Volunteer coordinators use 'I am' for introductions.",
            incorrectFeedbackRu: "Неправильно. Координаторы волонтеров используют 'I am' для представления."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "This ____ Pastor Michael from the local church.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this', we use 'is' for religious leader introductions.",
            correctFeedbackRu: "Правильно! С 'this' мы используем 'is' для представления религиозных лидеров.",
            incorrectFeedback: "Incorrect. With 'this', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ Mayor Thompson, our city mayor.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for government official introductions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для представления государственных чиновников.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ Firefighter Captain Rodriguez.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for emergency service introductions.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для представления экстренных служб.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "We ____ community organizers: Elena and Marcus.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for community team introductions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для представления общественной команды.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ neighborhood watch captains: Bill and Janet.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for multiple community leaders.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для нескольких общественных лидеров.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The library director ____ Ms. Foster.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the library director', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the library director' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the library director', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the library director' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Our social worker ____ Christina.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'our social worker', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'our social worker' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'our social worker', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'our social worker' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "The charity volunteers ____ Patricia and Raymond.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the charity volunteers', we use 'are' for multiple volunteers.",
            correctFeedbackRu: "Правильно! С 'the charity volunteers' мы используем 'are' для нескольких волонтеров.",
            incorrectFeedback: "Incorrect. With 'the charity volunteers', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'the charity volunteers' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The youth counselor ____ Mr. Jackson.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the youth counselor', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the youth counselor' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the youth counselor', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the youth counselor' нужно использовать 'is'."
        }
    ]
};

/* ============================================
Page 10: Mixed review name introductions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-gap-page10'] = {
    title: "Mixed Review Name Introductions",
    fillGaps: [
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "Nice to meet you! I ____ Rachel, the event coordinator.",
            correctAnswer: "am",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! Event coordinators use 'I am' for professional introductions.",
            correctFeedbackRu: "Правильно! Координаторы мероприятий используют 'I am' для профессиональных представлений.",
            incorrectFeedback: "Incorrect. For professional introductions, use 'I am'.",
            incorrectFeedbackRu: "Неправильно. Для профессиональных представлений используйте 'I am'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "This ____ Felix, my pet parrot.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'this', we use 'is' for pet introductions.",
            correctFeedbackRu: "Правильно! С 'this' мы используем 'is' для представления домашних животных.",
            incorrectFeedback: "Incorrect. With 'this', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'this' нужно использовать 'is'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "She ____ Accountant Barbara from the finance department.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'she', we use 'is' for professional role introductions.",
            correctFeedbackRu: "Правильно! С 'she' мы используем 'is' для представления профессиональных ролей.",
            incorrectFeedback: "Incorrect. With 'she', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'she' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "He ____ Mechanic Larry, he repairs motorcycles.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'he', we use 'is' for tradesman introductions.",
            correctFeedbackRu: "Правильно! С 'he' мы используем 'is' для представления мастеров.",
            incorrectFeedback: "Incorrect. With 'he', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'he' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "We ____ newlyweds: Katherine and Vincent.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'we', we use 'are' for couple introductions.",
            correctFeedbackRu: "Правильно! С 'we' мы используем 'are' для представления пар.",
            incorrectFeedback: "Incorrect. With 'we', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'we' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "They ____ food critics: Gordon and Julia.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'they', we use 'are' for multiple professionals.",
            correctFeedbackRu: "Правильно! С 'they' мы используем 'are' для нескольких профессионалов.",
            incorrectFeedback: "Incorrect. With 'they', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'they' нужно использовать 'are'."
        },
        {
            question: "Complete the sentence with the correct form of 'to be':",
            questionRu: "Заполните предложение правильной формой глагола 'to be':",
            sentence: "The gardener ____ Mr. Thompson.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the gardener', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the gardener' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the gardener', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the gardener' нужно использовать 'is'."
        },
        {
            question: "Fill in the gap with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "Our photographer ____ Stephanie.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'our photographer', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'our photographer' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'our photographer', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'our photographer' нужно использовать 'is'."
        },
        {
            question: "Complete the introduction with the correct form of 'to be':",
            questionRu: "Завершите представление правильной формой глагола 'to be':",
            sentence: "The new neighbors ____ Mr. and Mrs. Palmer.",
            correctAnswer: "are",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the new neighbors', we use 'are' for multiple people.",
            correctFeedbackRu: "Правильно! С 'the new neighbors' мы используем 'are' для нескольких людей.",
            incorrectFeedback: "Incorrect. With 'the new neighbors', we need to use 'are'.",
            incorrectFeedbackRu: "Неправильно. С 'the new neighbors' нужно использовать 'are'."
        },
        {
            question: "Fill in the blank with the correct form of 'to be':",
            questionRu: "Заполните пропуск правильной формой глагола 'to be':",
            sentence: "The weather reporter ____ Ms. Davis.",
            correctAnswer: "is",
            options: ["am", "is", "are", "be"],
            correctFeedback: "Correct! With 'the weather reporter', we use 'is'.",
            correctFeedbackRu: "Правильно! С 'the weather reporter' мы используем 'is'.",
            incorrectFeedback: "Incorrect. With 'the weather reporter', we need to use 'is'.",
            incorrectFeedbackRu: "Неправильно. С 'the weather reporter' нужно использовать 'is'."
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
Page 1: Basic subject + be + complement
============================================ */
window.grammarExercises['to-be']['to-be-with-names-sentence-page1'] = {
    title: "Basic subject + be + complement", sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "am", "a", "student"],
            correctAnswer: "I am a student.",
            correctFeedback: "Excellent! 'I am a student' is correct. Use 'am' with the subject 'I'.",
            correctFeedbackRu: "Отлично! 'I am a student' верно. Используйте 'am' с подлежащим 'I'.",
            incorrectFeedback: "Not quite. Remember to use 'am' with 'I' and follow the correct word order: subject + verb + complement.",
            incorrectFeedbackRu: "Не совсем так. Не забывайте использовать 'am' с 'I' и следовать правильному порядку слов: подлежащее + глагол + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she", "is", "teacher", "a"],
            correctAnswer: "She is a teacher.",
            correctFeedback: "Great job! 'She is a teacher' is correct. Use 'is' with the subject 'she'.",
            correctFeedbackRu: "Отличная работа! 'She is a teacher' верно. Используйте 'is' с подлежащим 'she'.",
            incorrectFeedback: "Try again. The correct word order is: subject (she) + verb (is) + article (a) + complement (teacher).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок слов: подлежащее (she) + глагол (is) + артикль (a) + дополнение (teacher)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["you", "are", "friend", "my"],
            correctAnswer: "You are my friend.",
            correctFeedback: "Perfect! 'You are my friend' is correct. Use 'are' with the subject 'you'.",
            correctFeedbackRu: "Идеально! 'You are my friend' верно. Используйте 'are' с подлежащим 'you'.",
            incorrectFeedback: "Not quite right. The correct order is: You (subject) + are (verb) + my (possessive) + friend (noun).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: You (подлежащее) + are (глагол) + my (притяжательное) + friend (существительное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["he", "is", "doctor", "a"],
            correctAnswer: "He is a doctor.",
            correctFeedback: "Well done! 'He is a doctor' is correct. Use 'is' with the subject 'he'.",
            correctFeedbackRu: "Отлично сделано! 'He is a doctor' верно. Используйте 'is' с подлежащим 'he'.",
            incorrectFeedback: "Not correct. Remember the proper word order: subject (he) + verb (is) + article (a) + noun (doctor).",
            incorrectFeedbackRu: "Неверно. Помните правильный порядок слов: подлежащее (he) + глагол (is) + артикль (a) + существительное (doctor)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["we", "are", "students"],
            correctAnswer: "We are students.",
            correctFeedback: "Great! 'We are students' is the correct form. Use 'are' with the subject 'we'.",
            correctFeedbackRu: "Отлично! 'We are students' - правильная форма. Используйте 'are' с подлежащим 'we'.",
            incorrectFeedback: "Not correct. The right word order is: We (subject) + are (verb) + students (complement).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: We (подлежащее) + are (глагол) + students (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["they", "are", "friends", "my"],
            correctAnswer: "They are my friends.",
            correctFeedback: "Perfect! 'They are my friends' is correct. Use 'are' with the subject 'they'.",
            correctFeedbackRu: "Идеально! 'They are my friends' верно. Используйте 'are' с подлежащим 'they'.",
            incorrectFeedback: "Try again. The correct order is: They (subject) + are (verb) + my (possessive) + friends (noun).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: They (подлежащее) + are (глагол) + my (притяжательное) + friends (существительное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it", "is", "book", "a"],
            correctAnswer: "It is a book.",
            correctFeedback: "Great job! 'It is a book' is correct. Use 'is' with the subject 'it'.",
            correctFeedbackRu: "Отличная работа! 'It is a book' верно. Используйте 'is' с подлежащим 'it'.",
            incorrectFeedback: "Not quite right. Remember the correct word order: It (subject) + is (verb) + a (article) + book (noun).",
            incorrectFeedbackRu: "Не совсем правильно. Помните правильный порядок слов: It (подлежащее) + is (глагол) + a (артикль) + book (существительное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Peter", "is", "engineer", "an"],
            correctAnswer: "Peter is an engineer.",
            correctFeedback: "Correct! 'Peter is an engineer' is right. Use 'is' with singular subjects like 'Peter'.",
            correctFeedbackRu: "Правильно! 'Peter is an engineer' верно. Используйте 'is' с подлежащими в единственном числе, как 'Peter'.",
            incorrectFeedback: "Try again. The correct word order is: Peter (subject) + is (verb) + an (article) + engineer (complement).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок слов: Peter (подлежащее) + is (глагол) + an (артикль) + engineer (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Mary", "and", "John", "are", "teachers"],
            correctAnswer: "Mary and John are teachers.",
            correctFeedback: "Perfect! 'Mary and John are teachers' is correct. Use 'are' with plural subjects.",
            correctFeedbackRu: "Идеально! 'Mary and John are teachers' верно. Используйте 'are' с подлежащими во множественном числе.",
            incorrectFeedback: "Not quite right. The correct order is: Mary and John (compound subject) + are (verb) + teachers (complement).",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: Mary and John (составное подлежащее) + are (глагол) + teachers (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "happy", "am"],
            correctAnswer: "I am happy.",
            correctFeedback: "Very good! 'I am happy' is correct. Use 'am' with the subject 'I'.",
            correctFeedbackRu: "Очень хорошо! 'I am happy' верно. Используйте 'am' с подлежащим 'I'.",
            incorrectFeedback: "Try again. The correct word order is: I (subject) + am (verb) + happy (adjective).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок слов: I (подлежащее) + am (глагол) + happy (прилагательное)."
        }
    ]
};

/* ============================================
Page 2: Names, professions, and descriptions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-sentence-page2'] = {
    title: "Names, professions, and descriptions",sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["my", "name", "is", "John"],
            correctAnswer: "My name is John.",
            correctFeedback: "Excellent! 'My name is John' is correct. The verb 'is' matches with the singular subject 'name'.",
            correctFeedbackRu: "Отлично! 'My name is John' верно. Глагол 'is' согласуется с подлежащим в единственном числе 'name'.",
            incorrectFeedback: "Not right. Remember the correct word order: My (possessive) + name (subject) + is (verb) + John (complement).",
            incorrectFeedbackRu: "Неверно. Помните правильный порядок слов: My (притяжательное) + name (подлежащее) + is (глагол) + John (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she", "teacher", "an", "English", "is"],
            correctAnswer: "She is an English teacher.",
            correctFeedback: "Perfect! 'She is an English teacher' is correct. Use 'is' with 'she'.",
            correctFeedbackRu: "Идеально! 'She is an English teacher' верно. Используйте 'is' с 'she'.",
            incorrectFeedback: "Not quite. The correct word order is: She (subject) + is (verb) + an (article) + English (adjective) + teacher (noun).",
            incorrectFeedbackRu: "Не совсем так. Правильный порядок слов: She (подлежащее) + is (глагол) + an (артикль) + English (прилагательное) + teacher (существительное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["they", "are", "doctors", "good"],
            correctAnswer: "They are good doctors.",
            correctFeedback: "Great job! 'They are good doctors' is correct. Use 'are' with 'they'.",
            correctFeedbackRu: "Отличная работа! 'They are good doctors' верно. Используйте 'are' с 'they'.",
            incorrectFeedback: "Not right. The correct word order is: They (subject) + are (verb) + good (adjective) + doctors (noun).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: They (подлежащее) + are (глагол) + good (прилагательное) + doctors (существительное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Tom", "and", "I", "friends", "are"],
            correctAnswer: "Tom and I are friends.",
            correctFeedback: "Excellent! 'Tom and I are friends' is correct. Use 'are' with plural subjects.",
            correctFeedbackRu: "Отлично! 'Tom and I are friends' верно. Используйте 'are' с подлежащими во множественном числе.",
            incorrectFeedback: "Try again. The correct order is: Tom and I (compound subject) + are (verb) + friends (complement).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: Tom and I (составное подлежащее) + are (глагол) + friends (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["you", "student", "a", "good", "are"],
            correctAnswer: "You are a good student.",
            correctFeedback: "Well done! 'You are a good student' is correct. Use 'are' with 'you'.",
            correctFeedbackRu: "Отлично сделано! 'You are a good student' верно. Используйте 'are' с 'you'.",
            incorrectFeedback: "Not quite right. The correct order is: You (subject) + are (verb) + a (article) + good (adjective) + student (noun).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: You (подлежащее) + are (глагол) + a (артикль) + good (прилагательное) + student (существительное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["David", "engineer", "an", "is"],
            correctAnswer: "David is an engineer.",
            correctFeedback: "Perfect! 'David is an engineer' is correct. Use 'is' with singular proper nouns.",
            correctFeedbackRu: "Идеально! 'David is an engineer' верно. Используйте 'is' с именами собственными в единственном числе.",
            incorrectFeedback: "Try again. The correct order is: David (subject) + is (verb) + an (article) + engineer (complement).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: David (подлежащее) + is (глагол) + an (артикль) + engineer (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["we", "classmates", "are"],
            correctAnswer: "We are classmates.",
            correctFeedback: "Great job! 'We are classmates' is correct. Use 'are' with 'we'.",
            correctFeedbackRu: "Отличная работа! 'We are classmates' верно. Используйте 'are' с 'we'.",
            incorrectFeedback: "Not correct. The right word order is: We (subject) + are (verb) + classmates (complement).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: We (подлежащее) + are (глагол) + classmates (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["his", "name", "is", "Michael"],
            correctAnswer: "His name is Michael.",
            correctFeedback: "Excellent! 'His name is Michael' is correct. Use 'is' with singular subjects like 'name'.",
            correctFeedbackRu: "Отлично! 'His name is Michael' верно. Используйте 'is' с подлежащими в единственном числе, как 'name'.",
            incorrectFeedback: "Try again. The correct order is: His (possessive) + name (subject) + is (verb) + Michael (complement).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: His (притяжательное) + name (подлежащее) + is (глагол) + Michael (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she", "doctor", "good", "a", "is"],
            correctAnswer: "She is a good doctor.",
            correctFeedback: "Perfect! 'She is a good doctor' is correct. Use 'is' with 'she'.",
            correctFeedbackRu: "Идеально! 'She is a good doctor' верно. Используйте 'is' с 'she'.",
            incorrectFeedback: "Not right. The correct order is: She (subject) + is (verb) + a (article) + good (adjective) + doctor (noun).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: She (подлежащее) + is (глагол) + a (артикль) + good (прилагательное) + doctor (существительное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["their", "names", "are", "Tom", "and", "Lisa"],
            correctAnswer: "Their names are Tom and Lisa.",
            correctFeedback: "Well done! 'Their names are Tom and Lisa' is correct. Use 'are' with plural subjects like 'names'.",
            correctFeedbackRu: "Отлично сделано! 'Their names are Tom and Lisa' верно. Используйте 'are' с подлежащими во множественном числе, как 'names'.",
            incorrectFeedback: "Not quite right. The correct order is: Their (possessive) + names (subject) + are (verb) + Tom and Lisa (complement).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: Their (притяжательное) + names (подлежащее) + are (глагол) + Tom and Lisa (дополнение)."
        }
    ]
};

/* ============================================
Page 3: Personal information with to be
============================================ */
window.grammarExercises['to-be']['to-be-with-names-sentence-page3'] = {
    title: "Personal information with to be",sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "25", "years", "old", "am"],
            correctAnswer: "I am 25 years old.",
            correctFeedback: "Excellent! 'I am 25 years old' is correct. Use 'am' with the subject 'I'.",
            correctFeedbackRu: "Отлично! 'I am 25 years old' верно. Используйте 'am' с подлежащим 'I'.",
            incorrectFeedback: "Not quite. The correct word order is: I (subject) + am (verb) + 25 years old (age expression).",
            incorrectFeedbackRu: "Не совсем так. Правильный порядок слов: I (подлежащее) + am (глагол) + 25 years old (выражение возраста)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she", "from", "Russia", "is"],
            correctAnswer: "She is from Russia.",
            correctFeedback: "Perfect! 'She is from Russia' is correct. Use 'is' with the subject 'she'.",
            correctFeedbackRu: "Идеально! 'She is from Russia' верно. Используйте 'is' с подлежащим 'she'.",
            incorrectFeedback: "Try again. The correct order is: She (subject) + is (verb) + from Russia (prepositional phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: She (подлежащее) + is (глагол) + from Russia (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["we", "are", "in", "the", "same", "class"],
            correctAnswer: "We are in the same class.",
            correctFeedback: "Great job! 'We are in the same class' is correct. Use 'are' with the subject 'we'.",
            correctFeedbackRu: "Отличная работа! 'We are in the same class' верно. Используйте 'are' с подлежащим 'we'.",
            incorrectFeedback: "Not right. The correct order is: We (subject) + are (verb) + in the same class (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: We (подлежащее) + are (глагол) + in the same class (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["they", "are", "students", "university"],
            correctAnswer: "They are university students.",
            correctFeedback: "Perfect! 'They are university students' is correct. 'University' acts as an adjective here.",
            correctFeedbackRu: "Идеально! 'They are university students' верно. 'University' действует здесь как прилагательное.",
            incorrectFeedback: "Try again. The correct order is: They (subject) + are (verb) + university (adjective) + students (noun).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: They (подлежащее) + are (глагол) + university (прилагательное) + students (существительное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["his", "email", "is", "john@example.com"],
            correctAnswer: "His email is john@example.com.",
            correctFeedback: "Excellent! 'His email is john@example.com' is correct. 'Email' is a singular subject that takes 'is'.",
            correctFeedbackRu: "Отлично! 'His email is john@example.com' верно. 'Email' - подлежащее в единственном числе, которое принимает 'is'.",
            incorrectFeedback: "Not quite right. The correct order is: His (possessive) + email (subject) + is (verb) + john@example.com (complement).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: His (притяжательное) + email (подлежащее) + is (глагол) + john@example.com (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["you", "are", "in", "my", "group"],
            correctAnswer: "You are in my group.",
            correctFeedback: "Well done! 'You are in my group' is correct. Use 'are' with the subject 'you'.",
            correctFeedbackRu: "Отлично сделано! 'You are in my group' верно. Используйте 'are' с подлежащим 'you'.",
            incorrectFeedback: "Not correct. The right word order is: You (subject) + are (verb) + in my group (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: You (подлежащее) + are (глагол) + in my group (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Peter", "is", "30", "years", "old"],
            correctAnswer: "Peter is 30 years old.",
            correctFeedback: "Perfect! 'Peter is 30 years old' is correct. Use 'is' with singular names.",
            correctFeedbackRu: "Идеально! 'Peter is 30 years old' верно. Используйте 'is' с именами в единственном числе.",
            incorrectFeedback: "Try again. The correct order is: Peter (subject) + is (verb) + 30 years old (age expression).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: Peter (подлежащее) + is (глагол) + 30 years old (выражение возраста)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["we", "are", "from", "different", "countries"],
            correctAnswer: "We are from different countries.",
            correctFeedback: "Great job! 'We are from different countries' is correct. Use 'are' with the subject 'we'.",
            correctFeedbackRu: "Отличная работа! 'We are from different countries' верно. Используйте 'are' с подлежащим 'we'.",
            incorrectFeedback: "Not right. The correct order is: We (subject) + are (verb) + from different countries (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: We (подлежащее) + are (глагол) + from different countries (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she", "is", "an", "architect", "experienced"],
            correctAnswer: "She is an experienced architect.",
            correctFeedback: "Perfect! 'She is an experienced architect' is correct. The adjective comes before the noun.",
            correctFeedbackRu: "Идеально! 'She is an experienced architect' верно. Прилагательное стоит перед существительным.",
            incorrectFeedback: "Not quite. The correct word order is: She (subject) + is (verb) + an (article) + experienced (adjective) + architect (noun).",
            incorrectFeedbackRu: "Не совсем так. Правильный порядок слов: She (подлежащее) + is (глагол) + an (артикль) + experienced (прилагательное) + architect (существительное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it", "is", "my", "phone", "number"],
            correctAnswer: "It is my phone number.",
            correctFeedback: "Excellent! 'It is my phone number' is correct. Use 'is' with 'it'.",
            correctFeedbackRu: "Отлично! 'It is my phone number' верно. Используйте 'is' с 'it'.",
            incorrectFeedback: "Try again. The correct order is: It (subject) + is (verb) + my phone number (complement).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: It (подлежащее) + is (глагол) + my phone number (дополнение)."
        }
    ]
};

/* ============================================
Page 4: Nationalities and languages
============================================ */
window.grammarExercises['to-be']['to-be-with-names-sentence-page4'] = {
    title: "Nationalities and languages",sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "am", "American"],
            correctAnswer: "I am American.",
            correctFeedback: "Excellent! 'I am American' is correct. Use 'am' with the subject 'I'.",
            correctFeedbackRu: "Отлично! 'I am American' верно. Используйте 'am' с подлежащим 'I'.",
            incorrectFeedback: "Not quite right. The correct order is: I (subject) + am (verb) + American (nationality).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: I (подлежащее) + am (глагол) + American (национальность)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["they", "are", "French"],
            correctAnswer: "They are French.",
            correctFeedback: "Perfect! 'They are French' is correct. Use 'are' with the subject 'they'.",
            correctFeedbackRu: "Идеально! 'They are French' верно. Используйте 'are' с подлежащим 'they'.",
            incorrectFeedback: "Try again. The correct word order is: They (subject) + are (verb) + French (nationality).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок слов: They (подлежащее) + are (глагол) + French (национальность)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she", "is", "Russian"],
            correctAnswer: "She is Russian.",
            correctFeedback: "Great job! 'She is Russian' is correct. Use 'is' with the subject 'she'.",
            correctFeedbackRu: "Отличная работа! 'She is Russian' верно. Используйте 'is' с подлежащим 'she'.",
            incorrectFeedback: "Not right. The correct order is: She (subject) + is (verb) + Russian (nationality).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: She (подлежащее) + is (глагол) + Russian (национальность)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["we", "are", "from", "Brazil"],
            correctAnswer: "We are from Brazil.",
            correctFeedback: "Perfect! 'We are from Brazil' is correct. Use 'are' with 'we'.",
            correctFeedbackRu: "Идеально! 'We are from Brazil' верно. Используйте 'are' с 'we'.",
            incorrectFeedback: "Try again. The correct order is: We (subject) + are (verb) + from Brazil (prepositional phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: We (подлежащее) + are (глагол) + from Brazil (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["he", "is", "Spanish"],
            correctAnswer: "He is Spanish.",
            correctFeedback: "Excellent! 'He is Spanish' is correct. Use 'is' with the subject 'he'.",
            correctFeedbackRu: "Отлично! 'He is Spanish' верно. Используйте 'is' с подлежащим 'he'.",
            incorrectFeedback: "Not quite right. The correct order is: He (subject) + is (verb) + Spanish (nationality).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: He (подлежащее) + is (глагол) + Spanish (национальность)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["you", "are", "English"],
            correctAnswer: "You are English.",
            correctFeedback: "Well done! 'You are English' is correct. Use 'are' with the subject 'you'.",
            correctFeedbackRu: "Отлично сделано! 'You are English' верно. Используйте 'are' с подлежащим 'you'.",
            incorrectFeedback: "Not correct. The right word order is: You (subject) + are (verb) + English (nationality).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: You (подлежащее) + are (глагол) + English (национальность)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she", "is", "from", "Germany"],
            correctAnswer: "She is from Germany.",
            correctFeedback: "Perfect! 'She is from Germany' is correct. Use 'is' with the subject 'she'.",
            correctFeedbackRu: "Идеально! 'She is from Germany' верно. Используйте 'is' с подлежащим 'she'.",
            incorrectFeedback: "Try again. The correct order is: She (subject) + is (verb) + from Germany (prepositional phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: She (подлежащее) + is (глагол) + from Germany (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["my", "parents", "are", "Italian"],
            correctAnswer: "My parents are Italian.",
            correctFeedback: "Great job! 'My parents are Italian' is correct. Use 'are' with plural subjects like 'parents'.",
            correctFeedbackRu: "Отличная работа! 'My parents are Italian' верно. Используйте 'are' с подлежащими во множественном числе, как 'parents'.",
            incorrectFeedback: "Not right. The correct order is: My (possessive) + parents (subject) + are (verb) + Italian (nationality).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: My (притяжательное) + parents (подлежащее) + are (глагол) + Italian (национальность)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it", "is", "a", "Chinese", "restaurant"],
            correctAnswer: "It is a Chinese restaurant.",
            correctFeedback: "Perfect! 'It is a Chinese restaurant' is correct. 'Chinese' acts as an adjective here.",
            correctFeedbackRu: "Идеально! 'It is a Chinese restaurant' верно. 'Chinese' действует здесь как прилагательное.",
            incorrectFeedback: "Not quite right. The correct order is: It (subject) + is (verb) + a (article) + Chinese (adjective) + restaurant (noun).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: It (подлежащее) + is (глагол) + a (артикль) + Chinese (прилагательное) + restaurant (существительное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "am", "from", "Canada"],
            correctAnswer: "I am from Canada.",
            correctFeedback: "Excellent! 'I am from Canada' is correct. Use 'am' with the subject 'I'.",
            correctFeedbackRu: "Отлично! 'I am from Canada' верно. Используйте 'am' с подлежащим 'I'.",
            incorrectFeedback: "Try again. The correct order is: I (subject) + am (verb) + from Canada (prepositional phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: I (подлежащее) + am (глагол) + from Canada (предложное словосочетание)."
        }
    ]
};

/* ============================================
Page 5: Location and position
============================================ */
window.grammarExercises['to-be']['to-be-with-names-sentence-page5'] = {
    title: "Location and position",sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["the", "book", "is", "on", "the", "table"],
            correctAnswer: "The book is on the table.",
            correctFeedback: "Excellent! 'The book is on the table' is correct. Use 'is' with singular subjects like 'book'.",
            correctFeedbackRu: "Отлично! 'The book is on the table' верно. Используйте 'is' с подлежащими в единственном числе, как 'book'.",
            incorrectFeedback: "Not quite right. The correct order is: The book (subject) + is (verb) + on the table (prepositional phrase).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: The book (подлежащее) + is (глагол) + on the table (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["we", "are", "at", "school", "now"],
            correctAnswer: "We are at school now.",
            correctFeedback: "Perfect! 'We are at school now' is correct. Use 'are' with the subject 'we'.",
            correctFeedbackRu: "Идеально! 'We are at school now' верно. Используйте 'are' с подлежащим 'we'.",
            incorrectFeedback: "Try again. The correct order is: We (subject) + are (verb) + at school (prepositional phrase) + now (adverb).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: We (подлежащее) + are (глагол) + at school (предложное словосочетание) + now (наречие)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["they", "are", "in", "the", "garden"],
            correctAnswer: "They are in the garden.",
            correctFeedback: "Great job! 'They are in the garden' is correct. Use 'are' with the subject 'they'.",
            correctFeedbackRu: "Отличная работа! 'They are in the garden' верно. Используйте 'are' с подлежащим 'they'.",
            incorrectFeedback: "Not right. The correct order is: They (subject) + are (verb) + in the garden (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: They (подлежащее) + are (глагол) + in the garden (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "am", "at", "home", "today"],
            correctAnswer: "I am at home today.",
            correctFeedback: "Perfect! 'I am at home today' is correct. Use 'am' with the subject 'I'.",
            correctFeedbackRu: "Идеально! 'I am at home today' верно. Используйте 'am' с подлежащим 'I'.",
            incorrectFeedback: "Not quite right. The correct order is: I (subject) + am (verb) + at home (prepositional phrase) + today (adverb).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: I (подлежащее) + am (глагол) + at home (предложное словосочетание) + today (наречие)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she", "is", "in", "the", "kitchen", "now"],
            correctAnswer: "She is in the kitchen now.",
            correctFeedback: "Excellent! 'She is in the kitchen now' is correct. Use 'is' with the subject 'she'.",
            correctFeedbackRu: "Отлично! 'She is in the kitchen now' верно. Используйте 'is' с подлежащим 'she'.",
            incorrectFeedback: "Try again. The correct order is: She (subject) + is (verb) + in the kitchen (prepositional phrase) + now (adverb).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: She (подлежащее) + is (глагол) + in the kitchen (предложное словосочетание) + now (наречие)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["my", "bag", "is", "under", "the", "desk"],
            correctAnswer: "My bag is under the desk.",
            correctFeedback: "Well done! 'My bag is under the desk' is correct. Use 'is' with singular subjects like 'bag'.",
            correctFeedbackRu: "Отлично сделано! 'My bag is under the desk' верно. Используйте 'is' с подлежащими в единственном числе, как 'bag'.",
            incorrectFeedback: "Not correct. The right word order is: My bag (subject) + is (verb) + under the desk (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: My bag (подлежащее) + is (глагол) + under the desk (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["the", "children", "are", "in", "the", "classroom"],
            correctAnswer: "The children are in the classroom.",
            correctFeedback: "Perfect! 'The children are in the classroom' is correct. Use 'are' with plural subjects like 'children'.",
            correctFeedbackRu: "Идеально! 'The children are in the classroom' верно. Используйте 'are' с подлежащими во множественном числе, как 'children'.",
            incorrectFeedback: "Try again. The correct order is: The children (subject) + are (verb) + in the classroom (prepositional phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: The children (подлежащее) + are (глагол) + in the classroom (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["he", "is", "behind", "the", "door"],
            correctAnswer: "He is behind the door.",
            correctFeedback: "Great job! 'He is behind the door' is correct. Use 'is' with the subject 'he'.",
            correctFeedbackRu: "Отличная работа! 'He is behind the door' верно. Используйте 'is' с подлежащим 'he'.",
            incorrectFeedback: "Not right. The correct order is: He (subject) + is (verb) + behind the door (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: He (подлежащее) + is (глагол) + behind the door (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["you", "are", "next", "to", "me"],
            correctAnswer: "You are next to me.",
            correctFeedback: "Perfect! 'You are next to me' is correct. Use 'are' with the subject 'you'.",
            correctFeedbackRu: "Идеально! 'You are next to me' верно. Используйте 'are' с подлежащим 'you'.",
            incorrectFeedback: "Not quite right. The correct order is: You (subject) + are (verb) + next to me (prepositional phrase).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: You (подлежащее) + are (глагол) + next to me (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it", "is", "on", "the", "shelf"],
            correctAnswer: "It is on the shelf.",
            correctFeedback: "Excellent! 'It is on the shelf' is correct. Use 'is' with the subject 'it'.",
            correctFeedbackRu: "Отлично! 'It is on the shelf' верно. Используйте 'is' с подлежащим 'it'.",
            incorrectFeedback: "Try again. The correct order is: It (subject) + is (verb) + on the shelf (prepositional phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: It (подлежащее) + is (глагол) + on the shelf (предложное словосочетание)."
        }
    ]
};

/* ============================================
Page 6: Adjectives with to be
============================================ */
window.grammarExercises['to-be']['to-be-with-names-sentence-page6'] = {
    title: "Adjectives with to be",sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "am", "happy"],
            correctAnswer: "I am happy.",
            correctFeedback: "Excellent! 'I am happy' is correct. Use 'am' with the subject 'I'.",
            correctFeedbackRu: "Отлично! 'I am happy' верно. Используйте 'am' с подлежащим 'I'.",
            incorrectFeedback: "Not quite right. The correct order is: I (subject) + am (verb) + happy (adjective).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: I (подлежащее) + am (глагол) + happy (прилагательное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she", "is", "beautiful"],
            correctAnswer: "She is beautiful.",
            correctFeedback: "Perfect! 'She is beautiful' is correct. Use 'is' with the subject 'she'.",
            correctFeedbackRu: "Идеально! 'She is beautiful' верно. Используйте 'is' с подлежащим 'she'.",
            incorrectFeedback: "Try again. The correct word order is: She (subject) + is (verb) + beautiful (adjective).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок слов: She (подлежащее) + is (глагол) + beautiful (прилагательное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["they", "are", "tired", "very"],
            correctAnswer: "They are very tired.",
            correctFeedback: "Great job! 'They are very tired' is correct. The adverb 'very' goes before the adjective 'tired'.",
            correctFeedbackRu: "Отличная работа! 'They are very tired' верно. Наречие 'very' идет перед прилагательным 'tired'.",
            incorrectFeedback: "Not right. The correct order is: They (subject) + are (verb) + very (adverb) + tired (adjective).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: They (подлежащее) + are (глагол) + very (наречие) + tired (прилагательное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["we", "are", "ready", "for", "the", "test"],
            correctAnswer: "We are ready for the test.",
            correctFeedback: "Perfect! 'We are ready for the test' is correct. Use 'are' with the subject 'we'.",
            correctFeedbackRu: "Идеально! 'We are ready for the test' верно. Используйте 'are' с подлежащим 'we'.",
            incorrectFeedback: "Not quite right. The correct order is: We (subject) + are (verb) + ready (adjective) + for the test (prepositional phrase).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: We (подлежащее) + are (глагол) + ready (прилагательное) + for the test (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["the", "coffee", "is", "hot"],
            correctAnswer: "The coffee is hot.",
            correctFeedback: "Excellent! 'The coffee is hot' is correct. Use 'is' with singular subjects like 'coffee'.",
            correctFeedbackRu: "Отлично! 'The coffee is hot' верно. Используйте 'is' с подлежащими в единственном числе, как 'coffee'.",
            incorrectFeedback: "Try again. The correct order is: The coffee (subject) + is (verb) + hot (adjective).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: The coffee (подлежащее) + is (глагол) + hot (прилагательное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["you", "are", "right"],
            correctAnswer: "You are right.",
            correctFeedback: "Well done! 'You are right' is correct. Use 'are' with the subject 'you'.",
            correctFeedbackRu: "Отлично сделано! 'You are right' верно. Используйте 'are' с подлежащим 'you'.",
            incorrectFeedback: "Not correct. The right word order is: You (subject) + are (verb) + right (adjective).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: You (подлежащее) + are (глагол) + right (прилагательное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["his", "car", "is", "new"],
            correctAnswer: "His car is new.",
            correctFeedback: "Perfect! 'His car is new' is correct. Use 'is' with singular subjects like 'car'.",
            correctFeedbackRu: "Идеально! 'His car is new' верно. Используйте 'is' с подлежащими в единственном числе, как 'car'.",
            incorrectFeedback: "Try again. The correct order is: His car (subject) + is (verb) + new (adjective).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: His car (подлежащее) + is (глагол) + new (прилагательное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["the", "students", "are", "intelligent"],
            correctAnswer: "The students are intelligent.",
            correctFeedback: "Great job! 'The students are intelligent' is correct. Use 'are' with plural subjects like 'students'.",
            correctFeedbackRu: "Отличная работа! 'The students are intelligent' верно. Используйте 'are' с подлежащими во множественном числе, как 'students'.",
            incorrectFeedback: "Not right. The correct order is: The students (subject) + are (verb) + intelligent (adjective).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: The students (подлежащее) + are (глагол) + intelligent (прилагательное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["he", "is", "very", "strong"],
            correctAnswer: "He is very strong.",
            correctFeedback: "Perfect! 'He is very strong' is correct. The adverb 'very' goes before the adjective 'strong'.",
            correctFeedbackRu: "Идеально! 'He is very strong' верно. Наречие 'very' идет перед прилагательным 'strong'.",
            incorrectFeedback: "Not quite right. The correct order is: He (subject) + is (verb) + very (adverb) + strong (adjective).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: He (подлежащее) + is (глагол) + very (наречие) + strong (прилагательное)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it", "is", "cold", "today"],
            correctAnswer: "It is cold today.",
            correctFeedback: "Excellent! 'It is cold today' is correct. Use 'is' with the subject 'it'.",
            correctFeedbackRu: "Отлично! 'It is cold today' верно. Используйте 'is' с подлежащим 'it'.",
            incorrectFeedback: "Try again. The correct order is: It (subject) + is (verb) + cold (adjective) + today (adverb).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: It (подлежащее) + is (глагол) + cold (прилагательное) + today (наречие)."
        }
    ]
};

/* ============================================
Page 7: Possessions and relationships
============================================ */
window.grammarExercises['to-be']['to-be-with-names-sentence-page7'] = {
    title: "Possessions and relationships",sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["this", "is", "my", "book"],
            correctAnswer: "This is my book.",
            correctFeedback: "Excellent! 'This is my book' is correct. Use 'is' with the subject 'this'.",
            correctFeedbackRu: "Отлично! 'This is my book' верно. Используйте 'is' с подлежащим 'this'.",
            incorrectFeedback: "Not quite right. The correct order is: This (subject) + is (verb) + my book (possessive phrase).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: This (подлежащее) + is (глагол) + my book (притяжательное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["these", "are", "your", "keys"],
            correctAnswer: "These are your keys.",
            correctFeedback: "Perfect! 'These are your keys' is correct. Use 'are' with the plural subject 'these'.",
            correctFeedbackRu: "Идеально! 'These are your keys' верно. Используйте 'are' с подлежащим во множественном числе 'these'.",
            incorrectFeedback: "Try again. The correct word order is: These (subject) + are (verb) + your keys (possessive phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок слов: These (подлежащее) + are (глагол) + your keys (притяжательное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she", "is", "my", "sister"],
            correctAnswer: "She is my sister.",
            correctFeedback: "Great job! 'She is my sister' is correct. Use 'is' with the subject 'she'.",
            correctFeedbackRu: "Отличная работа! 'She is my sister' верно. Используйте 'is' с подлежащим 'she'.",
            incorrectFeedback: "Not right. The correct order is: She (subject) + is (verb) + my sister (possessive phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: She (подлежащее) + is (глагол) + my sister (притяжательное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["we", "are", "cousins"],
            correctAnswer: "We are cousins.",
            correctFeedback: "Perfect! 'We are cousins' is correct. Use 'are' with the subject 'we'.",
            correctFeedbackRu: "Идеально! 'We are cousins' верно. Используйте 'are' с подлежащим 'we'.",
            incorrectFeedback: "Not quite right. The correct order is: We (subject) + are (verb) + cousins (complement).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: We (подлежащее) + are (глагол) + cousins (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["that", "is", "their", "car"],
            correctAnswer: "That is their car.",
            correctFeedback: "Excellent! 'That is their car' is correct. Use 'is' with the subject 'that'.",
            correctFeedbackRu: "Отлично! 'That is their car' верно. Используйте 'is' с подлежащим 'that'.",
            incorrectFeedback: "Try again. The correct order is: That (subject) + is (verb) + their car (possessive phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: That (подлежащее) + is (глагол) + their car (притяжательное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["they", "are", "my", "parents"],
            correctAnswer: "They are my parents.",
            correctFeedback: "Well done! 'They are my parents' is correct. Use 'are' with the subject 'they'.",
            correctFeedbackRu: "Отлично сделано! 'They are my parents' верно. Используйте 'are' с подлежащим 'they'.",
            incorrectFeedback: "Not correct. The right word order is: They (subject) + are (verb) + my parents (possessive phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: They (подлежащее) + are (глагол) + my parents (притяжательное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["the", "dog", "is", "ours"],
            correctAnswer: "The dog is ours.",
            correctFeedback: "Perfect! 'The dog is ours' is correct. Use 'is' with singular subjects like 'dog'.",
            correctFeedbackRu: "Идеально! 'The dog is ours' верно. Используйте 'is' с подлежащими в единственном числе, как 'dog'.",
            incorrectFeedback: "Try again. The correct order is: The dog (subject) + is (verb) + ours (possessive pronoun).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: The dog (подлежащее) + is (глагол) + ours (притяжательное местоимение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["he", "is", "John's", "brother"],
            correctAnswer: "He is John's brother.",
            correctFeedback: "Great job! 'He is John's brother' is correct. Use 'is' with the subject 'he'.",
            correctFeedbackRu: "Отличная работа! 'He is John's brother' верно. Используйте 'is' с подлежащим 'he'.",
            incorrectFeedback: "Not right. The correct order is: He (subject) + is (verb) + John's brother (possessive phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: He (подлежащее) + is (глагол) + John's brother (притяжательное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["these", "books", "are", "mine"],
            correctAnswer: "These books are mine.",
            correctFeedback: "Perfect! 'These books are mine' is correct. Use 'are' with plural subjects like 'books'.",
            correctFeedbackRu: "Идеально! 'These books are mine' верно. Используйте 'are' с подлежащими во множественном числе, как 'books'.",
            incorrectFeedback: "Not quite right. The correct order is: These books (subject) + are (verb) + mine (possessive pronoun).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: These books (подлежащее) + are (глагол) + mine (притяжательное местоимение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Peter", "is", "my", "friend's", "father"],
            correctAnswer: "Peter is my friend's father.",
            correctFeedback: "Perfect! 'Peter is my friend's father' is correct. Use 'is' with singular proper nouns.",
            correctFeedbackRu: "Идеально! 'Peter is my friend's father' верно. Используйте 'is' с именами собственными в единственном числе.",
            incorrectFeedback: "Not quite right. The correct order is: Peter (subject) + is (verb) + my friend's father (possessive phrase).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: Peter (подлежащее) + is (глагол) + my friend's father (притяжательное словосочетание)."
        }
    ]
};
/* ============================================
Page 8: Time and weather expressions
============================================ */
window.grammarExercises['to-be']['to-be-with-names-sentence-page8'] = {
    title: "Time and weather expressions",sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it", "is", "ten", "o'clock"],
            correctAnswer: "It is ten o'clock.",
            correctFeedback: "Excellent! 'It is ten o'clock' is correct. Use 'is' with the subject 'it'.",
            correctFeedbackRu: "Отлично! 'It is ten o'clock' верно. Используйте 'is' с подлежащим 'it'.",
            incorrectFeedback: "Not quite right. The correct order is: It (subject) + is (verb) + ten o'clock (time expression).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: It (подлежащее) + is (глагол) + ten o'clock (выражение времени)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["today", "is", "Monday"],
            correctAnswer: "Today is Monday.",
            correctFeedback: "Perfect! 'Today is Monday' is correct. Use 'is' with the subject 'today'.",
            correctFeedbackRu: "Идеально! 'Today is Monday' верно. Используйте 'is' с подлежащим 'today'.",
            incorrectFeedback: "Try again. The correct word order is: Today (subject) + is (verb) + Monday (day of the week).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок слов: Today (подлежащее) + is (глагол) + Monday (день недели)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it", "is", "time", "for", "lunch"],
            correctAnswer: "It is time for lunch.",
            correctFeedback: "Great job! 'It is time for lunch' is correct. Use 'is' with the subject 'it'.",
            correctFeedbackRu: "Отличная работа! 'It is time for lunch' верно. Используйте 'is' с подлежащим 'it'.",
            incorrectFeedback: "Not right. The correct order is: It (subject) + is (verb) + time for lunch (complement).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: It (подлежащее) + is (глагол) + time for lunch (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["the", "weather", "is", "nice", "today"],
            correctAnswer: "The weather is nice today.",
            correctFeedback: "Perfect! 'The weather is nice today' is correct. Use 'is' with singular subjects like 'weather'.",
            correctFeedbackRu: "Идеально! 'The weather is nice today' верно. Используйте 'is' с подлежащими в единственном числе, как 'weather'.",
            incorrectFeedback: "Not quite right. The correct order is: The weather (subject) + is (verb) + nice (adjective) + today (adverb).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: The weather (подлежащее) + is (глагол) + nice (прилагательное) + today (наречие)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it", "is", "spring", "now"],
            correctAnswer: "It is spring now.",
            correctFeedback: "Excellent! 'It is spring now' is correct. Use 'is' with the subject 'it'.",
            correctFeedbackRu: "Отлично! 'It is spring now' верно. Используйте 'is' с подлежащим 'it'.",
            incorrectFeedback: "Try again. The correct order is: It (subject) + is (verb) + spring (season) + now (adverb).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: It (подлежащее) + is (глагол) + spring (время года) + now (наречие)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["they", "are", "on", "vacation", "this", "week"],
            correctAnswer: "They are on vacation this week.",
            correctFeedback: "Well done! 'They are on vacation this week' is correct. Use 'are' with the subject 'they'.",
            correctFeedbackRu: "Отлично сделано! 'They are on vacation this week' верно. Используйте 'are' с подлежащим 'they'.",
            incorrectFeedback: "Not correct. The right word order is: They (subject) + are (verb) + on vacation (prepositional phrase) + this week (time expression).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: They (подлежащее) + are (глагол) + on vacation (предложное словосочетание) + this week (выражение времени)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it", "is", "rainy", "outside"],
            correctAnswer: "It is rainy outside.",
            correctFeedback: "Perfect! 'It is rainy outside' is correct. Use 'is' with the subject 'it'.",
            correctFeedbackRu: "Идеально! 'It is rainy outside' верно. Используйте 'is' с подлежащим 'it'.",
            incorrectFeedback: "Try again. The correct order is: It (subject) + is (verb) + rainy (adjective) + outside (adverb).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: It (подлежащее) + is (глагол) + rainy (прилагательное) + outside (наречие)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["our", "appointment", "is", "at", "two", "o'clock"],
            correctAnswer: "Our appointment is at two o'clock.",
            correctFeedback: "Great job! 'Our appointment is at two o'clock' is correct. Use 'is' with singular subjects like 'appointment'.",
            correctFeedbackRu: "Отличная работа! 'Our appointment is at two o'clock' верно. Используйте 'is' с подлежащими в единственном числе, как 'appointment'.",
            incorrectFeedback: "Not right. The correct order is: Our appointment (subject) + is (verb) + at two o'clock (time expression).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: Our appointment (подлежащее) + is (глагол) + at two o'clock (выражение времени)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["the", "days", "are", "long", "in", "summer"],
            correctAnswer: "The days are long in summer.",
            correctFeedback: "Perfect! 'The days are long in summer' is correct. Use 'are' with plural subjects like 'days'.",
            correctFeedbackRu: "Идеально! 'The days are long in summer' верно. Используйте 'are' с подлежащими во множественном числе, как 'days'.",
            incorrectFeedback: "Not quite right. The correct order is: The days (subject) + are (verb) + long (adjective) + in summer (prepositional phrase).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: The days (подлежащее) + are (глагол) + long (прилагательное) + in summer (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it", "is", "a", "beautiful", "day"],
            correctAnswer: "It is a beautiful day.",
            correctFeedback: "Excellent! 'It is a beautiful day' is correct. Use 'is' with the subject 'it'.",
            correctFeedbackRu: "Отлично! 'It is a beautiful day' верно. Используйте 'is' с подлежащим 'it'.",
            incorrectFeedback: "Try again. The correct order is: It (subject) + is (verb) + a beautiful day (complement).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: It (подлежащее) + is (глагол) + a beautiful day (дополнение)."
        }
    ]
};

/* ============================================
Page 9: 'There is' and 'There are'
============================================ */
window.grammarExercises['to-be']['to-be-with-names-sentence-page9'] = {
    title: "'There is' and 'There are'",sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there", "is", "a", "book", "on", "the", "table"],
            correctAnswer: "There is a book on the table.",
            correctFeedback: "Excellent! 'There is a book on the table' is correct. Use 'is' with singular subjects like 'a book'.",
            correctFeedbackRu: "Отлично! 'There is a book on the table' верно. Используйте 'is' с подлежащими в единственном числе, как 'a book'.",
            incorrectFeedback: "Not quite right. The correct order is: There is (existential phrase) + a book (subject) + on the table (prepositional phrase).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: There is (экзистенциальная фраза) + a book (подлежащее) + on the table (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there", "are", "many", "students", "in", "the", "classroom"],
            correctAnswer: "There are many students in the classroom.",
            correctFeedback: "Perfect! 'There are many students in the classroom' is correct. Use 'are' with plural subjects like 'students'.",
            correctFeedbackRu: "Идеально! 'There are many students in the classroom' верно. Используйте 'are' с подлежащими во множественном числе, как 'students'.",
            incorrectFeedback: "Try again. The correct word order is: There are (existential phrase) + many students (subject) + in the classroom (prepositional phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок слов: There are (экзистенциальная фраза) + many students (подлежащее) + in the classroom (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there", "is", "some", "milk", "in", "the", "fridge"],
            correctAnswer: "There is some milk in the fridge.",
            correctFeedback: "Great job! 'There is some milk in the fridge' is correct. Use 'is' with uncountable nouns like 'milk'.",
            correctFeedbackRu: "Отличная работа! 'There is some milk in the fridge' верно. Используйте 'is' с неисчисляемыми существительными, как 'milk'.",
            incorrectFeedback: "Not right. The correct order is: There is (existential phrase) + some milk (subject) + in the fridge (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: There is (экзистенциальная фраза) + some milk (подлежащее) + in the fridge (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there", "are", "five", "people", "at", "the", "meeting"],
            correctAnswer: "There are five people at the meeting.",
            correctFeedback: "Perfect! 'There are five people at the meeting' is correct. Use 'are' with plural subjects like 'people'.",
            correctFeedbackRu: "Идеально! 'There are five people at the meeting' верно. Используйте 'are' с подлежащими во множественном числе, как 'people'.",
            incorrectFeedback: "Not quite right. The correct order is: There are (existential phrase) + five people (subject) + at the meeting (prepositional phrase).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: There are (экзистенциальная фраза) + five people (подлежащее) + at the meeting (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there", "is", "a", "problem", "with", "my", "computer"],
            correctAnswer: "There is a problem with my computer.",
            correctFeedback: "Excellent! 'There is a problem with my computer' is correct. Use 'is' with singular subjects like 'a problem'.",
            correctFeedbackRu: "Отлично! 'There is a problem with my computer' верно. Используйте 'is' с подлежащими в единственном числе, как 'a problem'.",
            incorrectFeedback: "Try again. The correct order is: There is (existential phrase) + a problem (subject) + with my computer (prepositional phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: There is (экзистенциальная фраза) + a problem (подлежащее) + with my computer (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there", "are", "some", "apples", "on", "the", "table"],
            correctAnswer: "There are some apples on the table.",
            correctFeedback: "Well done! 'There are some apples on the table' is correct. Use 'are' with plural subjects like 'apples'.",
            correctFeedbackRu: "Отлично сделано! 'There are some apples on the table' верно. Используйте 'are' с подлежащими во множественном числе, как 'apples'.",
            incorrectFeedback: "Not correct. The right word order is: There are (existential phrase) + some apples (subject) + on the table (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: There are (экзистенциальная фраза) + some apples (подлежащее) + on the table (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there", "is", "a", "cat", "in", "the", "garden"],
            correctAnswer: "There is a cat in the garden.",
            correctFeedback: "Perfect! 'There is a cat in the garden' is correct. Use 'is' with singular subjects like 'a cat'.",
            correctFeedbackRu: "Идеально! 'There is a cat in the garden' верно. Используйте 'is' с подлежащими в единственном числе, как 'a cat'.",
            incorrectFeedback: "Try again. The correct order is: There is (existential phrase) + a cat (subject) + in the garden (prepositional phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: There is (экзистенциальная фраза) + a cat (подлежащее) + in the garden (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there", "are", "two", "bathrooms", "in", "the", "house"],
            correctAnswer: "There are two bathrooms in the house.",
            correctFeedback: "Great job! 'There are two bathrooms in the house' is correct. Use 'are' with plural subjects like 'bathrooms'.",
            correctFeedbackRu: "Отличная работа! 'There are two bathrooms in the house' верно. Используйте 'are' с подлежащими во множественном числе, как 'bathrooms'.",
            incorrectFeedback: "Not right. The correct order is: There are (existential phrase) + two bathrooms (subject) + in the house (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: There are (экзистенциальная фраза) + two bathrooms (подлежащее) + in the house (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there", "is", "coffee", "in", "the", "cup"],
            correctAnswer: "There is coffee in the cup.",
            correctFeedback: "Perfect! 'There is coffee in the cup' is correct. Use 'is' with uncountable nouns like 'coffee'.",
            correctFeedbackRu: "Идеально! 'There is coffee in the cup' верно. Используйте 'is' с неисчисляемыми существительными, как 'coffee'.",
            incorrectFeedback: "Not quite right. The correct order is: There is (existential phrase) + coffee (subject) + in the cup (prepositional phrase).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: There is (экзистенциальная фраза) + coffee (подлежащее) + in the cup (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there", "are", "many", "books", "on", "the", "shelf"],
            correctAnswer: "There are many books on the shelf.",
            correctFeedback: "Excellent! 'There are many books on the shelf' is correct. Use 'are' with plural subjects like 'books'.",
            correctFeedbackRu: "Отлично! 'There are many books on the shelf' верно. Используйте 'are' с подлежащими во множественном числе, как 'books'.",
            incorrectFeedback: "Try again. The correct order is: There are (existential phrase) + many books (subject) + on the shelf (prepositional phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: There are (экзистенциальная фраза) + many books (подлежащее) + on the shelf (предложное словосочетание)."
        }
    ]
};
/* ============================================
Page 10: Contractions with 'to be'
============================================ */
window.grammarExercises['to-be']['to-be-with-names-sentence-page10'] = {
    title: "Contractions with 'to be'",sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "a", "student"],
            correctAnswer: "I'm a student.",
            correctFeedback: "Excellent! 'I'm a student' is correct. 'I'm' is the contraction of 'I am'.",
            correctFeedbackRu: "Отлично! 'I'm a student' верно. 'I'm' - это сокращение от 'I am'.",
            incorrectFeedback: "Not quite right. The correct order is: I'm (contraction of I am) + a student (complement).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: I'm (сокращение от I am) + a student (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["she's", "my", "sister"],
            correctAnswer: "She's my sister.",
            correctFeedback: "Perfect! 'She's my sister' is correct. 'She's' is the contraction of 'She is'.",
            correctFeedbackRu: "Идеально! 'She's my sister' верно. 'She's' - это сокращение от 'She is'.",
            incorrectFeedback: "Try again. The correct word order is: She's (contraction of She is) + my sister (possessive phrase).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок слов: She's (сокращение от She is) + my sister (притяжательное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["they're", "from", "Spain"],
            correctAnswer: "They're from Spain.",
            correctFeedback: "Great job! 'They're from Spain' is correct. 'They're' is the contraction of 'They are'.",
            correctFeedbackRu: "Отличная работа! 'They're from Spain' верно. 'They're' - это сокращение от 'They are'.",
            incorrectFeedback: "Not right. The correct order is: They're (contraction of They are) + from Spain (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: They're (сокращение от They are) + from Spain (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["we're", "happy", "today"],
            correctAnswer: "We're happy today.",
            correctFeedback: "Perfect! 'We're happy today' is correct. 'We're' is the contraction of 'We are'.",
            correctFeedbackRu: "Идеально! 'We're happy today' верно. 'We're' - это сокращение от 'We are'.",
            incorrectFeedback: "Not quite right. The correct order is: We're (contraction of We are) + happy (adjective) + today (adverb).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: We're (сокращение от We are) + happy (прилагательное) + today (наречие)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["it's", "cold", "outside"],
            correctAnswer: "It's cold outside.",
            correctFeedback: "Excellent! 'It's cold outside' is correct. 'It's' is the contraction of 'It is'.",
            correctFeedbackRu: "Отлично! 'It's cold outside' верно. 'It's' - это сокращение от 'It is'.",
            incorrectFeedback: "Try again. The correct order is: It's (contraction of It is) + cold (adjective) + outside (adverb).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: It's (сокращение от It is) + cold (прилагательное) + outside (наречие)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["you're", "late", "again"],
            correctAnswer: "You're late again.",
            correctFeedback: "Well done! 'You're late again' is correct. 'You're' is the contraction of 'You are'.",
            correctFeedbackRu: "Отлично сделано! 'You're late again' верно. 'You're' - это сокращение от 'You are'.",
            incorrectFeedback: "Not correct. The right word order is: You're (contraction of You are) + late (adjective) + again (adverb).",
            incorrectFeedbackRu: "Неверно. Правильный порядок слов: You're (сокращение от You are) + late (прилагательное) + again (наречие)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["he's", "an", "engineer"],
            correctAnswer: "He's an engineer.",
            correctFeedback: "Perfect! 'He's an engineer' is correct. 'He's' is the contraction of 'He is'.",
            correctFeedbackRu: "Идеально! 'He's an engineer' верно. 'He's' - это сокращение от 'He is'.",
            incorrectFeedback: "Try again. The correct order is: He's (contraction of He is) + an engineer (complement).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: He's (сокращение от He is) + an engineer (дополнение)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["there's", "a", "cat", "under", "the", "table"],
            correctAnswer: "There's a cat under the table.",
            correctFeedback: "Great job! 'There's a cat under the table' is correct. 'There's' is the contraction of 'There is'.",
            correctFeedbackRu: "Отличная работа! 'There's a cat under the table' верно. 'There's' - это сокращение от 'There is'.",
            incorrectFeedback: "Not right. The correct order is: There's (contraction of There is) + a cat (subject) + under the table (prepositional phrase).",
            incorrectFeedbackRu: "Неверно. Правильный порядок: There's (сокращение от There is) + a cat (подлежащее) + under the table (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "from", "Canada"],
            correctAnswer: "I'm from Canada.",
            correctFeedback: "Perfect! 'I'm from Canada' is correct. 'I'm' is the contraction of 'I am'.",
            correctFeedbackRu: "Идеально! 'I'm from Canada' верно. 'I'm' - это сокращение от 'I am'.",
            incorrectFeedback: "Not quite right. The correct order is: I'm (contraction of I am) + from Canada (prepositional phrase).",
            incorrectFeedbackRu: "Не совсем правильно. Верный порядок: I'm (сокращение от I am) + from Canada (предложное словосочетание)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["they're", "in", "the", "garden", "now"],
            correctAnswer: "They're in the garden now.",
            correctFeedback: "Excellent! 'They're in the garden now' is correct. 'They're' is the contraction of 'They are'.",
            correctFeedbackRu: "Отлично! 'They're in the garden now' верно. 'They're' - это сокращение от 'They are'.",
            incorrectFeedback: "Try again. The correct order is: They're (contraction of They are) + in the garden (prepositional phrase) + now (adverb).",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: They're (сокращение от They are) + in the garden (предложное словосочетание) + now (наречие)."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Verb 'to be' sentence building exercises data loaded successfully!");