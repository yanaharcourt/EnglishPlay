/* ============================================
Initialize Grammar Exercises Object Structure
============================================ */
if (typeof window.grammarExercises === 'undefined') {
    window.grammarExercises = {};
}
if (!window.grammarExercises['passive']) {
    window.grammarExercises['passive'] = {};
}

/* =============================================================================== */
/* =========================Multiple Choice Exercises============================= */

/* ============================================
Page 1: Present Passive - Everyday Actions and Routines
============================================ */
window.grammarExercises['passive']['present-passive-page1'] = {
    title: "Present Passive - Everyday Actions and Routines",
    multipleChoice: [
        {
            question: "Choose the correct present passive form:",
            questionRu: "Выберите правильную форму настоящего пассивного залога:",
            sentence: "The office _____ every morning before employees arrive.",
            options: [
                "is cleaned",
                "cleans",
                "are cleaned",
                "clean"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is cleaned' is the present passive for a singular subject (the office). Structure: subject + is/are + past participle. We use passive when the focus is on the action, not who does it.",
            correctFeedbackRu: "Правильно! 'Is cleaned' — настоящий пассивный залог для единственного числа (the office). Структура: подлежащее + is/are + причастие прошедшего времени. Пассивный залог используется, когда важно само действие, а не тот, кто его выполняет.",
            incorrectFeedback: "Remember: present passive = is/are + past participle. 'The office' is singular, so use 'is'. The person who cleans isn't important here — the focus is on the office being cleaned.",
            incorrectFeedbackRu: "Помните: настоящий пассивный залог = is/are + причастие прошедшего времени. 'The office' — единственное число, поэтому используйте 'is'. Кто убирает — неважно; важно, что офис убирается."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "These products _____ in factories across the country.",
            options: [
                "are made",
                "is made",
                "makes",
                "make"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Are made' is correct because 'products' is plural, so we use 'are' + past participle. Present passive describes regular or repeated actions.",
            correctFeedbackRu: "Правильно! 'Are made' верно, потому что 'products' — множественное число, поэтому используем 'are' + причастие прошедшего времени. Настоящий пассивный залог описывает регулярные или повторяющиеся действия.",
            incorrectFeedback: "Check the subject: 'products' is plural, so you need 'are', not 'is'. Passive = are + past participle. Don't use the active form 'make' here — the subject receives the action.",
            incorrectFeedbackRu: "Проверьте подлежащее: 'products' — множественное число, поэтому нужно 'are', а не 'is'. Пассивный залог = are + причастие прошедшего времени. Не используйте активную форму 'make' — подлежащее получает действие."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Дополните предложение правильной формой:",
            sentence: "English _____ in many countries around the world.",
            options: [
                "is spoken",
                "are spoken",
                "speaks",
                "spoken"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'English' is uncountable and singular, so we use 'is spoken'. This sentence describes a general fact using present passive.",
            correctFeedbackRu: "Правильно! 'English' — несчитаемое и единственное число, поэтому используем 'is spoken'. Это предложение описывает общий факт с помощью настоящего пассивного залога.",
            incorrectFeedback: "English is a singular subject, so use 'is' + past participle. The passive form 'is spoken' tells us about English as a language — the focus is on the language, not the speakers.",
            incorrectFeedbackRu: "English — подлежащее в единственном числе, поэтому используйте 'is' + причастие прошедшего времени. Пассивная форма 'is spoken' говорит нам об английском языке — фокус на языке, а не на говорящих."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "The letters _____ every day at noon.",
            options: [
                "are delivered",
                "is delivered",
                "delivers",
                "deliver"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Letters' is plural, so we need 'are delivered'. The time expression 'every day' confirms this is a repeated action described in present passive.",
            correctFeedbackRu: "Правильно! 'Letters' — множественное число, поэтому нужно 'are delivered'. Временное выражение 'every day' подтверждает, что это повторяющееся действие, описанное в настоящем пассивном залоге.",
            incorrectFeedback: "'Letters' is plural, so use 'are', not 'is'. The passive 'are delivered' focuses on the letters, not on the delivery person. Active verbs 'delivers/deliver' are wrong in passive sentences.",
            incorrectFeedbackRu: "'Letters' — множественное число, используйте 'are', а не 'is'. Пассивное 'are delivered' акцентирует внимание на письмах, а не на почтальоне. Активные глаголы 'delivers/deliver' неверны в пассивных предложениях."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "The exam results _____ online after two weeks.",
            options: [
                "are published",
                "is published",
                "publish",
                "publishes"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Results' is plural, so we use 'are published'. Present passive is used here because the focus is on the results being published, not on who publishes them.",
            correctFeedbackRu: "Правильно! 'Results' — множественное число, поэтому используем 'are published'. Настоящий пассивный залог используется здесь, потому что важны результаты, а не тот, кто их публикует.",
            incorrectFeedback: "Check: 'results' is plural → 'are' + past participle. The active forms 'publish/publishes' would need a subject doing the action, but here we focus on what happens to the results.",
            incorrectFeedbackRu: "Проверьте: 'results' — множественное число → 'are' + причастие прошедшего времени. Активные формы 'publish/publishes' требуют подлежащего, выполняющего действие, но здесь важно то, что происходит с результатами."
        },
        {
            question: "Choose the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "This type of cheese _____ only in one small village in France.",
            options: [
                "is produced",
                "are produced",
                "produce",
                "producing"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'This type of cheese' is singular, so 'is produced' is correct. The phrase 'only in one village' gives extra information about where the action takes place.",
            correctFeedbackRu: "Правильно! 'This type of cheese' — единственное число, поэтому 'is produced' верно. Фраза 'only in one village' даёт дополнительную информацию о месте действия.",
            incorrectFeedback: "'This type of cheese' is a singular subject — use 'is' + past participle. The passive tells us the cheese is produced (by someone), but who does it isn't important here.",
            incorrectFeedbackRu: "'This type of cheese' — подлежащее в единственном числе — используйте 'is' + причастие прошедшего времени. Пассивный залог говорит нам, что сыр производится (кем-то), но кто именно — неважно."
        },
        {
            question: "Complete the sentence:",
            questionRu: "Дополните предложение:",
            sentence: "New students _____ a welcome guide on their first day.",
            options: [
                "are given",
                "is given",
                "give",
                "gives"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Students' is plural → 'are given'. This is an example of passive with two objects — 'students' is the indirect object that becomes the subject in the passive.",
            correctFeedbackRu: "Правильно! 'Students' — множественное число → 'are given'. Это пример пассива с двумя дополнениями — 'students' — косвенное дополнение, которое становится подлежащим в пассивном залоге.",
            incorrectFeedback: "'Students' is plural, so use 'are given'. This passive sentence means someone gives students the guide, but the focus is on the students receiving it.",
            incorrectFeedbackRu: "'Students' — множественное число, используйте 'are given'. Это пассивное предложение означает, что кто-то даёт студентам путеводитель, но фокус на том, что студенты его получают."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "The building _____ by hundreds of tourists every weekend.",
            options: [
                "is visited",
                "are visited",
                "visits",
                "visit"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The building' is singular → 'is visited'. We know the action is done by tourists — shown with 'by' — but the building is the main focus of the sentence.",
            correctFeedbackRu: "Правильно! 'The building' — единственное число → 'is visited'. Мы знаем, что действие выполняется туристами — показано с помощью 'by' — но здание является главным предметом предложения.",
            incorrectFeedback: "'The building' is singular, so use 'is' + past participle. When we know who does the action, we add 'by + agent'. Here: 'is visited by tourists'.",
            incorrectFeedbackRu: "'The building' — единственное число, используйте 'is' + причастие прошедшего времени. Когда мы знаем, кто выполняет действие, добавляем 'by + исполнитель'. Здесь: 'is visited by tourists'."
        },
        {
            question: "Choose the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "The rules of the game _____ to all players before the match starts.",
            options: [
                "are explained",
                "is explained",
                "explain",
                "explained"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Rules' is plural → 'are explained'. Note the structure: subject + are + past participle. The rules are explained to someone — the passive shows what happens to the rules.",
            correctFeedbackRu: "Правильно! 'Rules' — множественное число → 'are explained'. Обратите внимание на структуру: подлежащее + are + причастие прошедшего времени. Правила объясняются кому-то — пассивный залог показывает, что происходит с правилами.",
            incorrectFeedback: "'Rules' is plural — use 'are' not 'is'. The form 'explained' alone (without 'are') is the past simple active, which doesn't work here.",
            incorrectFeedbackRu: "'Rules' — множественное число — используйте 'are', а не 'is'. Форма 'explained' отдельно (без 'are') — это прошедшее простое активное время, которое здесь не подходит."
        },
        {
            question: "Select the correct form for this sentence:",
            questionRu: "Выберите правильную форму для этого предложения:",
            sentence: "Coffee _____ in many countries, but Brazil produces the most.",
            options: [
                "is grown",
                "are grown",
                "grows",
                "grow"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Coffee' is an uncountable noun and singular, so 'is grown' is correct. The second part of the sentence uses active voice with 'Brazil' as the subject — both structures are possible.",
            correctFeedbackRu: "Правильно! 'Coffee' — несчитаемое существительное и единственное число, поэтому 'is grown' верно. Вторая часть предложения использует активный залог с 'Brazil' в качестве подлежащего — обе структуры возможны.",
            incorrectFeedback: "Coffee is singular and uncountable → 'is grown'. Compare: passive 'Coffee is grown in Brazil' vs active 'Brazil grows coffee'. Both are correct but have different focus.",
            incorrectFeedbackRu: "Coffee — единственное число и несчитаемое → 'is grown'. Сравните: пассивное 'Coffee is grown in Brazil' и активное 'Brazil grows coffee'. Оба верны, но акцент разный."
        }
    ]
};

/* ============================================
Page 2: Present Passive - Work and Technology
============================================ */
window.grammarExercises['passive']['present-passive-page2'] = {
    title: "Present Passive - Work and Technology",
    multipleChoice: [
        {
            question: "Choose the correct present passive form:",
            questionRu: "Выберите правильную форму настоящего пассивного залога:",
            sentence: "All employee emails _____ by the IT department for security reasons.",
            options: [
                "are monitored",
                "is monitored",
                "monitors",
                "monitor"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Emails' is plural → 'are monitored'. The agent 'by the IT department' tells us who performs the monitoring. Structure: are + past participle + by + agent.",
            correctFeedbackRu: "Правильно! 'Emails' — множественное число → 'are monitored'. Исполнитель 'by the IT department' говорит нам, кто осуществляет мониторинг. Структура: are + причастие прошедшего времени + by + исполнитель.",
            incorrectFeedback: "'Emails' is plural — use 'are monitored', not 'is monitored'. The phrase 'by the IT department' is the agent — who does the action. Passive = are + past participle + (by + agent).",
            incorrectFeedbackRu: "'Emails' — множественное число — используйте 'are monitored', а не 'is monitored'. Фраза 'by the IT department' — исполнитель действия. Пассивный залог = are + причастие прошедшего времени + (by + исполнитель)."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "New software _____ by the team before any update is released.",
            options: [
                "is tested",
                "are tested",
                "tests",
                "testing"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Software' is uncountable and treated as singular → 'is tested'. The passive here emphasises that testing happens (before release), not who does it.",
            correctFeedbackRu: "Правильно! 'Software' — несчитаемое и рассматривается как единственное число → 'is tested'. Пассивный залог здесь подчёркивает, что тестирование происходит (перед выпуском), а не кто его выполняет.",
            incorrectFeedback: "Software is singular/uncountable → 'is tested'. The form 'testing' without 'is' is an -ing form, which alone can't be the main verb here.",
            incorrectFeedbackRu: "Software — единственное число/несчитаемое → 'is tested'. Форма 'testing' без 'is' — это -ing форма, которая сама по себе не может быть главным глаголом здесь."
        },
        {
            question: "Complete the sentence correctly:",
            questionRu: "Правильно дополните предложение:",
            sentence: "The company's reports _____ to the head office every month.",
            options: [
                "are sent",
                "is sent",
                "sends",
                "send"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Reports' is plural → 'are sent'. The frequency expression 'every month' confirms this is a regular action. Passive is used because the sender isn't the focus.",
            correctFeedbackRu: "Правильно! 'Reports' — множественное число → 'are sent'. Выражение частотности 'every month' подтверждает, что это регулярное действие. Пассивный залог используется потому, что отправитель не является главным.",
            incorrectFeedback: "'Reports' is plural → 'are sent'. Don't confuse with active 'sends' or 'send' — in passive, the subject receives the action. 'Are sent' means reports go to the head office regularly.",
            incorrectFeedbackRu: "'Reports' — множественное число → 'are sent'. Не путайте с активным 'sends' или 'send' — в пассивном залоге подлежащее получает действие. 'Are sent' означает, что отчёты регулярно поступают в головной офис."
        },
        {
            question: "Choose the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Personal data _____ by strict privacy laws in this country.",
            options: [
                "is protected",
                "are protected",
                "protect",
                "protecting"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Personal data' is treated as singular/uncountable → 'is protected'. The agent 'by strict privacy laws' shows what provides the protection.",
            correctFeedbackRu: "Правильно! 'Personal data' рассматривается как единственное число/несчитаемое → 'is protected'. Исполнитель 'by strict privacy laws' показывает, что обеспечивает защиту.",
            incorrectFeedback: "'Personal data' is singular — use 'is protected'. Note: 'protecting' alone isn't a complete verb. You need 'is protecting' (active) or 'is protected' (passive).",
            incorrectFeedbackRu: "'Personal data' — единственное число — используйте 'is protected'. Обратите внимание: 'protecting' само по себе не является полным глаголом. Нужно 'is protecting' (активный) или 'is protected' (пассивный)."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Meetings _____ every Tuesday afternoon in conference room B.",
            options: [
                "are held",
                "is held",
                "hold",
                "holds"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Meetings' is plural → 'are held'. 'Hold meetings' in active becomes 'meetings are held' in passive. The time and place information stays the same.",
            correctFeedbackRu: "Правильно! 'Meetings' — множественное число → 'are held'. 'Hold meetings' в активном залоге становится 'meetings are held' в пассивном. Информация о времени и месте остаётся прежней.",
            incorrectFeedback: "'Meetings' is plural — use 'are held'. 'Hold' is an irregular verb: hold → held. In passive: are + past participle (held).",
            incorrectFeedbackRu: "'Meetings' — множественное число — используйте 'are held'. 'Hold' — неправильный глагол: hold → held. В пассивном залоге: are + причастие прошедшего времени (held)."
        },
        {
            question: "Choose the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "This machine _____ by two engineers at all times during production.",
            options: [
                "is operated",
                "are operated",
                "operates",
                "operate"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'This machine' is singular → 'is operated'. The agent 'by two engineers' is included because it's important to know who operates it.",
            correctFeedbackRu: "Правильно! 'This machine' — единственное число → 'is operated'. Исполнитель 'by two engineers' включён, потому что важно знать, кто управляет машиной.",
            incorrectFeedback: "'This machine' is singular → 'is operated'. Active: 'Two engineers operate this machine' → Passive: 'This machine is operated by two engineers'.",
            incorrectFeedbackRu: "'This machine' — единственное число → 'is operated'. Активный: 'Two engineers operate this machine' → Пассивный: 'This machine is operated by two engineers'."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Дополните предложение правильной формой:",
            sentence: "Job applications _____ online through the company website.",
            options: [
                "are submitted",
                "is submitted",
                "submits",
                "submit"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Applications' is plural → 'are submitted'. This describes the standard procedure — the focus is on how applications are processed, not who submits them.",
            correctFeedbackRu: "Правильно! 'Applications' — множественное число → 'are submitted'. Это описывает стандартную процедуру — фокус на том, как обрабатываются заявки, а не кто их подаёт.",
            incorrectFeedback: "'Applications' is plural — use 'are submitted'. This is a general rule/procedure, typical for present passive. Active: 'Applicants submit applications' → Passive: 'Applications are submitted'.",
            incorrectFeedbackRu: "'Applications' — множественное число — используйте 'are submitted'. Это общее правило/процедура, типичное для настоящего пассивного залога. Активный: 'Applicants submit applications' → Пассивный: 'Applications are submitted'."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The website _____ every few months to add new content.",
            options: [
                "is updated",
                "are updated",
                "updates",
                "updated"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The website' is singular → 'is updated'. The frequency 'every few months' shows this is a repeated action. Passive is used because who updates it isn't mentioned.",
            correctFeedbackRu: "Правильно! 'The website' — единственное число → 'is updated'. Частотность 'every few months' показывает, что это повторяющееся действие. Пассивный залог используется, потому что тот, кто обновляет, не упоминается.",
            incorrectFeedback: "'The website' is singular — use 'is updated'. 'Updated' alone is the past simple active, not passive. For passive you need the auxiliary verb: is + updated.",
            incorrectFeedbackRu: "'The website' — единственное число — используйте 'is updated'. 'Updated' само по себе — это прошедшее простое активное время, а не пассивный залог. Для пассивного нужен вспомогательный глагол: is + updated."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Salaries _____ directly to the employees' bank accounts.",
            options: [
                "are transferred",
                "is transferred",
                "transfers",
                "transfer"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Salaries' is plural → 'are transferred'. This describes a standard company process. Passive is natural here because we focus on what happens to the salaries.",
            correctFeedbackRu: "Правильно! 'Salaries' — множественное число → 'are transferred'. Это описывает стандартный процесс компании. Пассивный залог здесь естественен, потому что мы фокусируемся на том, что происходит с зарплатами.",
            incorrectFeedback: "'Salaries' is plural — you need 'are transferred'. Think of the transformation: Active 'The company transfers salaries' → Passive 'Salaries are transferred'.",
            incorrectFeedbackRu: "'Salaries' — множественное число — нужно 'are transferred'. Подумайте о трансформации: Активный 'The company transfers salaries' → Пассивный 'Salaries are transferred'."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "A password _____ to confirm every online transaction.",
            options: [
                "is required",
                "are required",
                "requires",
                "require"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'A password' is singular → 'is required'. The passive 'is required' means the system demands a password — no specific person requires it, it's an automatic rule.",
            correctFeedbackRu: "Правильно! 'A password' — единственное число → 'is required'. Пассивное 'is required' означает, что система требует пароль — никакой конкретный человек этого не требует, это автоматическое правило.",
            incorrectFeedback: "'A password' is singular → 'is required'. Passive is very common with rules and requirements: 'A licence is required', 'A fee is charged', etc.",
            incorrectFeedbackRu: "'A password' — единственное число → 'is required'. Пассивный залог очень распространён с правилами и требованиями: 'A licence is required', 'A fee is charged' и т.д."
        }
    ]
};

/* ============================================
Page 3: Present Passive - Food and Shopping
============================================ */
window.grammarExercises['passive']['present-passive-page3'] = {
    title: "Present Passive - Food and Shopping",
    multipleChoice: [
        {
            question: "Choose the correct present passive form:",
            questionRu: "Выберите правильную форму настоящего пассивного залога:",
            sentence: "Fresh bread _____ in the bakery three times a day.",
            options: [
                "is baked",
                "are baked",
                "bakes",
                "bake"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Fresh bread' is uncountable and singular → 'is baked'. The frequency 'three times a day' shows this is a repeated daily action.",
            correctFeedbackRu: "Правильно! 'Fresh bread' — несчитаемое и единственное число → 'is baked'. Частотность 'three times a day' показывает, что это повторяющееся ежедневное действие.",
            incorrectFeedback: "'Fresh bread' is singular/uncountable → 'is baked'. Compare active and passive: 'The baker bakes bread' (active) → 'Bread is baked' (passive). The focus shifts to the bread.",
            incorrectFeedbackRu: "'Fresh bread' — единственное число/несчитаемое → 'is baked'. Сравните активный и пассивный: 'The baker bakes bread' (активный) → 'Bread is baked' (пассивный). Фокус переходит на хлеб."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "All groceries _____ carefully before they reach the supermarket shelves.",
            options: [
                "are inspected",
                "is inspected",
                "inspects",
                "inspect"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Groceries' is plural → 'are inspected'. This describes a quality control process where the inspector isn't important — only the inspection matters.",
            correctFeedbackRu: "Правильно! 'Groceries' — множественное число → 'are inspected'. Это описывает процесс контроля качества, где инспектор не важен — важна только проверка.",
            incorrectFeedback: "'Groceries' is plural — use 'are inspected'. The sentence describes a standard process. Passive is often used for processes and procedures when the 'doer' is unknown or unimportant.",
            incorrectFeedbackRu: "'Groceries' — множественное число — используйте 'are inspected'. Предложение описывает стандартный процесс. Пассивный залог часто используется для процессов и процедур, когда 'исполнитель' неизвестен или неважен."
        },
        {
            question: "Complete the sentence correctly:",
            questionRu: "Правильно дополните предложение:",
            sentence: "The meat _____ at a very high temperature to kill bacteria.",
            options: [
                "is cooked",
                "are cooked",
                "cooks",
                "cook"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'The meat' is singular/uncountable → 'is cooked'. The passive explains that this process happens (it's a cooking requirement), not who cooks it.",
            correctFeedbackRu: "Правильно! 'The meat' — единственное число/несчитаемое → 'is cooked'. Пассивный залог объясняет, что этот процесс происходит (это требование приготовления), а не кто готовит.",
            incorrectFeedback: "'Meat' is singular/uncountable — use 'is cooked'. This describes a method or requirement. In recipes and instructions, passive is very common.",
            incorrectFeedbackRu: "'Meat' — единственное число/несчитаемое — используйте 'is cooked'. Это описывает метод или требование. В рецептах и инструкциях пассивный залог очень распространён."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "These vegetables _____ directly from local farms.",
            options: [
                "are sourced",
                "is sourced",
                "sources",
                "source"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Vegetables' is plural → 'are sourced'. The phrase 'from local farms' tells us where they come from. The passive focuses on the vegetables, not the suppliers.",
            correctFeedbackRu: "Правильно! 'Vegetables' — множественное число → 'are sourced'. Фраза 'from local farms' говорит нам, откуда они. Пассивный залог фокусируется на овощах, а не на поставщиках.",
            incorrectFeedback: "'Vegetables' is plural — use 'are sourced'. Active: 'The shop sources vegetables from local farms' → Passive: 'Vegetables are sourced from local farms'. The focus shifts to the vegetables.",
            incorrectFeedbackRu: "'Vegetables' — множественное число — используйте 'are sourced'. Активный: 'The shop sources vegetables from local farms' → Пассивный: 'Vegetables are sourced from local farms'. Фокус переходит на овощи."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Discount coupons _____ to loyal customers at the end of each month.",
            options: [
                "are sent",
                "is sent",
                "sends",
                "send"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Coupons' is plural → 'are sent'. This describes a regular business practice. We use passive because who sends the coupons isn't the main point.",
            correctFeedbackRu: "Правильно! 'Coupons' — множественное число → 'are sent'. Это описывает регулярную деловую практику. Мы используем пассивный залог, потому что кто отправляет купоны — не главное.",
            incorrectFeedback: "'Coupons' is plural — use 'are sent'. This is a passive sentence with two objects: the coupons (direct) are sent to customers (indirect). In passive, the direct object becomes the subject.",
            incorrectFeedbackRu: "'Coupons' — множественное число — используйте 'are sent'. Это пассивное предложение с двумя дополнениями: купоны (прямое) отправляются клиентам (косвенное). В пассивном залоге прямое дополнение становится подлежащим."
        },
        {
            question: "Choose the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The price of each item _____ on the label.",
            options: [
                "is shown",
                "are shown",
                "shows",
                "show"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The price' is singular → 'is shown'. Passive is used here because who puts the price on the label isn't important — the information on the label is what matters.",
            correctFeedbackRu: "Правильно! 'The price' — единственное число → 'is shown'. Пассивный залог используется здесь, потому что кто ставит цену на этикетку — неважно; важна информация на этикетке.",
            incorrectFeedback: "'The price' is singular → 'is shown'. Compare: 'The label shows the price' (active) → 'The price is shown on the label' (passive). Both are correct, but have different emphasis.",
            incorrectFeedbackRu: "'The price' — единственное число → 'is shown'. Сравните: 'The label shows the price' (активный) → 'The price is shown on the label' (пассивный). Оба верны, но имеют разный акцент."
        },
        {
            question: "Complete the sentence:",
            questionRu: "Дополните предложение:",
            sentence: "Returned items _____ only with a receipt.",
            options: [
                "are accepted",
                "is accepted",
                "accepts",
                "accept"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Items' is plural → 'are accepted'. This describes a shop policy. Passive is typical for rules and conditions: 'are accepted only with a receipt'.",
            correctFeedbackRu: "Правильно! 'Items' — множественное число → 'are accepted'. Это описывает политику магазина. Пассивный залог типичен для правил и условий: 'are accepted only with a receipt'.",
            incorrectFeedback: "'Items' is plural — use 'are accepted'. Shop policies are often written in passive: 'Refunds are given', 'Credit cards are accepted', 'Items are exchanged within 30 days'.",
            incorrectFeedbackRu: "'Items' — множественное число — используйте 'are accepted'. Политики магазинов часто пишутся в пассивном залоге: 'Refunds are given', 'Credit cards are accepted', 'Items are exchanged within 30 days'."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Wine _____ in large wooden barrels for at least one year.",
            options: [
                "is stored",
                "are stored",
                "stores",
                "storing"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Wine' is uncountable and singular → 'is stored'. This describes the wine-making process. In descriptions of processes, passive is very natural.",
            correctFeedbackRu: "Правильно! 'Wine' — несчитаемое и единственное число → 'is stored'. Это описывает процесс виноделия. В описаниях процессов пассивный залог очень естественен.",
            incorrectFeedback: "'Wine' is singular/uncountable → 'is stored'. 'Storing' without a helper verb can't be the main verb. You need: is + storing (active) or is + stored (passive).",
            incorrectFeedbackRu: "'Wine' — единственное число/несчитаемое → 'is stored'. 'Storing' без вспомогательного глагола не может быть главным глаголом. Нужно: is + storing (активный) или is + stored (пассивный)."
        },
        {
            question: "Choose the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Online orders _____ within two business days.",
            options: [
                "are processed",
                "is processed",
                "processes",
                "process"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Orders' is plural → 'are processed'. This is a standard business information statement. Passive is used to describe what happens to the orders.",
            correctFeedbackRu: "Правильно! 'Orders' — множественное число → 'are processed'. Это стандартное деловое информационное заявление. Пассивный залог используется для описания того, что происходит с заказами.",
            incorrectFeedback: "'Orders' is plural — use 'are processed'. This is the kind of sentence you see on shopping websites. Passive is common in formal and business English.",
            incorrectFeedbackRu: "'Orders' — множественное число — используйте 'are processed'. Это предложения, которые можно увидеть на сайтах онлайн-магазинов. Пассивный залог распространён в формальном и деловом английском."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The food _____ in eco-friendly packaging to reduce waste.",
            options: [
                "is packaged",
                "are packaged",
                "packages",
                "packaged"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The food' is singular/uncountable → 'is packaged'. The reason 'to reduce waste' explains why this process happens. Passive focuses on the food, not the packers.",
            correctFeedbackRu: "Правильно! 'The food' — единственное число/несчитаемое → 'is packaged'. Причина 'to reduce waste' объясняет, зачем этот процесс происходит. Пассивный залог фокусируется на еде, а не на упаковщиках.",
            incorrectFeedback: "'Food' is singular/uncountable — use 'is packaged'. 'Packaged' alone is ambiguous — it could be an adjective or past tense. Adding 'is' makes it clearly present passive.",
            incorrectFeedbackRu: "'Food' — единственное число/несчитаемое — используйте 'is packaged'. 'Packaged' само по себе неоднозначно — это может быть прилагательное или прошедшее время. Добавление 'is' делает его явно настоящим пассивным залогом."
        }
    ]
};

/* ============================================
Page 4: Present Passive - Education and Science
============================================ */
window.grammarExercises['passive']['present-passive-page4'] = {
    title: "Present Passive - Education and Science",
    multipleChoice: [
        {
            question: "Choose the correct present passive form:",
            questionRu: "Выберите правильную форму настоящего пассивного залога:",
            sentence: "Students _____ a timetable at the beginning of each academic year.",
            options: [
                "are given",
                "is given",
                "give",
                "gives"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Students' is plural → 'are given'. This passive structure has an indirect object — students receive something. Active: 'The school gives students a timetable' → Passive: 'Students are given a timetable'.",
            correctFeedbackRu: "Правильно! 'Students' — множественное число → 'are given'. Эта пассивная структура имеет косвенное дополнение — студенты что-то получают. Активный: 'The school gives students a timetable' → Пассивный: 'Students are given a timetable'.",
            incorrectFeedback: "'Students' is plural — use 'are given'. This is the passive of a sentence with two objects (give somebody something). The indirect object 'students' becomes the subject.",
            incorrectFeedbackRu: "'Students' — множественное число — используйте 'are given'. Это пассивный залог предложения с двумя дополнениями (give somebody something). Косвенное дополнение 'students' становится подлежащим."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Homework _____ every day by most teachers in this school.",
            options: [
                "is assigned",
                "are assigned",
                "assigns",
                "assign"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Homework' is uncountable and singular → 'is assigned'. The agent 'by most teachers' tells us who assigns it. This is a simple present passive: is + past participle.",
            correctFeedbackRu: "Правильно! 'Homework' — несчитаемое и единственное число → 'is assigned'. Агент 'by most teachers' говорит нам, кто назначает. Это простой настоящий пассивный залог: is + причастие прошедшего времени.",
            incorrectFeedback: "'Homework' is uncountable/singular — use 'is assigned'. This is a simple present passive: is + past participle. Active: 'Teachers assign homework' → Passive: 'Homework is assigned by teachers'.",
            incorrectFeedbackRu: "'Homework' — несчитаемое/единственное число — используйте 'is assigned'. Это простой настоящий пассивный залог: is + причастие прошедшего времени. Активный: 'Teachers assign homework' → Пассивный: 'Homework is assigned by teachers'."
        },
        {
            question: "Complete the sentence correctly:",
            questionRu: "Правильно дополните предложение:",
            sentence: "Experiments _____ under controlled conditions in a science laboratory.",
            options: [
                "are conducted",
                "is conducted",
                "conducts",
                "conducted"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Experiments' is plural → 'are conducted'. The phrase 'under controlled conditions' gives information about how. Passive focuses on experiments, not on scientists.",
            correctFeedbackRu: "Правильно! 'Experiments' — множественное число → 'are conducted'. Фраза 'under controlled conditions' даёт информацию о том, как. Пассивный залог фокусируется на экспериментах, а не на учёных.",
            incorrectFeedback: "'Experiments' is plural — use 'are conducted'. 'Conducted' alone (without 'are') would be past tense active. For present passive you need: are + conducted.",
            incorrectFeedbackRu: "'Experiments' — множественное число — используйте 'are conducted'. 'Conducted' само по себе (без 'are') — прошедшее активное время. Для настоящего пассивного нужно: are + conducted."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "The results of the research _____ in scientific journals.",
            options: [
                "are published",
                "is published",
                "publish",
                "publishing"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The results' is plural → 'are published'. Scientific English frequently uses passive to describe research processes without mentioning who does the work.",
            correctFeedbackRu: "Правильно! 'The results' — множественное число → 'are published'. Научный английский язык часто использует пассивный залог для описания исследовательских процессов, не упоминая, кто выполняет работу.",
            incorrectFeedback: "'The results' is plural — use 'are published'. In academic and scientific writing, passive is extremely common. It emphasises the research over the researchers.",
            incorrectFeedbackRu: "'The results' — множественное число — используйте 'are published'. В академическом и научном письме пассивный залог чрезвычайно распространён. Он акцентирует внимание на исследовании, а не на исследователях."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Students _____ for poor attendance throughout the academic year.",
            options: [
                "are penalised",
                "is penalised",
                "penalise",
                "penalises"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Students' is plural → 'are penalised'. This describes a school rule. Rules and regulations are commonly expressed in passive voice.",
            correctFeedbackRu: "Правильно! 'Students' — множественное число → 'are penalised'. Это описывает школьное правило. Правила и нормы обычно выражаются пассивным залогом.",
            incorrectFeedback: "'Students' is plural — use 'are penalised'. School rules are often written in passive: 'Students are expected to...', 'Cheating is not tolerated', 'Phones are switched off'.",
            incorrectFeedbackRu: "'Students' — множественное число — используйте 'are penalised'. Школьные правила часто пишутся в пассивном залоге: 'Students are expected to...', 'Cheating is not tolerated', 'Phones are switched off'."
        },
        {
            question: "Choose the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The data _____ using special computer software.",
            options: [
                "is analysed",
                "are analysed",
                "analyses",
                "analyse"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The data' is treated as singular in academic English → 'is analysed'. The method 'using special software' explains how the analysis happens.",
            correctFeedbackRu: "Правильно! 'The data' рассматривается как единственное число в академическом английском → 'is analysed'. Метод 'using special software' объясняет, как происходит анализ.",
            incorrectFeedback: "'The data' is treated as singular in academic English → 'is analysed'. This is typical scientific language. Active: 'Researchers analyse the data' → Passive: 'The data is analysed'.",
            incorrectFeedbackRu: "'The data' рассматривается как единственное число в академическом английском → 'is analysed'. Это типичный научный язык. Активный: 'Researchers analyse the data' → Пассивный: 'The data is analysed'."
        },
        {
            question: "Complete the sentence:",
            questionRu: "Дополните предложение:",
            sentence: "New theories _____ by researchers all over the world every year.",
            options: [
                "are developed",
                "is developed",
                "develops",
                "develop"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Theories' is plural → 'are developed'. The agent 'by researchers all over the world' explains who develops them. Including the agent makes the passive more informative.",
            correctFeedbackRu: "Правильно! 'Theories' — множественное число → 'are developed'. Агент 'by researchers all over the world' объясняет, кто их разрабатывает. Включение агента делает пассивный залог более информативным.",
            incorrectFeedback: "'Theories' is plural — use 'are developed'. When the agent is important, include 'by + agent'. Here 'by researchers all over the world' adds valuable information.",
            incorrectFeedbackRu: "'Theories' — множественное число — используйте 'are developed'. Когда агент важен, включайте 'by + агент'. Здесь 'by researchers all over the world' добавляет ценную информацию."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Each student _____ feedback on their essay within one week.",
            options: [
                "is given",
                "are given",
                "gives",
                "give"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Each student' is singular ('each' + singular noun) → 'is given'. This structure is similar to 'Students are given' — but 'each student' is singular.",
            correctFeedbackRu: "Правильно! 'Each student' — единственное число ('each' + существительное в единственном числе) → 'is given'. Эта структура похожа на 'Students are given' — но 'each student' — единственное число.",
            incorrectFeedback: "'Each student' uses singular form — use 'is given'. Remember: each + singular noun → singular verb. 'Each student is given', 'each child is taught', 'each report is checked'.",
            incorrectFeedbackRu: "'Each student' использует форму единственного числа — используйте 'is given'. Помните: each + существительное в единственном числе → глагол единственного числа. 'Each student is given', 'each child is taught', 'each report is checked'."
        },
        {
            question: "Choose the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Books from the library _____ for three weeks at a time.",
            options: [
                "are borrowed",
                "is borrowed",
                "borrows",
                "borrow"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Books' is plural → 'are borrowed'. This describes a library rule. The time limit 'for three weeks' explains how long books can be borrowed.",
            correctFeedbackRu: "Правильно! 'Books' — множественное число → 'are borrowed'. Это описывает библиотечное правило. Ограничение по времени 'for three weeks' объясняет, как долго можно брать книги.",
            incorrectFeedback: "'Books' is plural — use 'are borrowed'. This is a library policy stated in passive. Rules and policies often use passive: 'books are borrowed', 'fines are charged', 'IDs are required'.",
            incorrectFeedbackRu: "'Books' — множественное число — используйте 'are borrowed'. Это библиотечная политика, изложенная в пассивном залоге. Правила и политики часто используют пассивный залог: 'books are borrowed', 'fines are charged', 'IDs are required'."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "A short test _____ at the beginning of every lesson to review vocabulary.",
            options: [
                "is given",
                "are given",
                "gives",
                "giving"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'A short test' is singular → 'is given'. The purpose 'to review vocabulary' explains why. Passive is used because who gives the test (the teacher) isn't important — the test is.",
            correctFeedbackRu: "Правильно! 'A short test' — единственное число → 'is given'. Цель 'to review vocabulary' объясняет, зачем. Пассивный залог используется, потому что кто даёт тест (учитель) — неважно; важен сам тест.",
            incorrectFeedback: "'A short test' is singular — use 'is given'. This is a classroom routine expressed in passive. 'Giving' without 'is' can't be the main verb here.",
            incorrectFeedbackRu: "'A short test' — единственное число — используйте 'is given'. Это классная процедура, выраженная в пассивном залоге. 'Giving' без 'is' не может быть главным глаголом здесь."
        }
    ]
};

/* ============================================
Page 5: Present Passive - Rules and Public Signs
============================================ */
window.grammarExercises['passive']['present-passive-page5'] = {
    title: "Present Passive - Rules and Public Signs",
    multipleChoice: [
        {
            question: "Choose the correct present passive form:",
            questionRu: "Выберите правильную форму настоящего пассивного залога:",
            sentence: "Smoking _____ inside all public buildings.",
            options: [
                "is not allowed",
                "are not allowed",
                "not allows",
                "not allow"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Smoking' is a gerund (verb used as a noun) and singular → 'is not allowed'. This is a typical rule statement in passive. 'Not' goes between 'is' and 'allowed'.",
            correctFeedbackRu: "Правильно! 'Smoking' — герундий (глагол, использованный как существительное) и единственное число → 'is not allowed'. Это типичное заявление о правиле в пассивном залоге. 'Not' стоит между 'is' и 'allowed'.",
            incorrectFeedback: "'Smoking' as a subject is singular — use 'is not allowed'. In negative passive: subject + is/are + not + past participle. 'Not allows/not allow' are active verb forms, not passive.",
            incorrectFeedbackRu: "'Smoking' в качестве подлежащего — единственное число — используйте 'is not allowed'. В отрицательном пассивном залоге: подлежащее + is/are + not + причастие прошедшего времени. 'Not allows/not allow' — активные формы глагола, не пассивные."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Dogs _____ inside this restaurant at any time.",
            options: [
                "are not permitted",
                "is not permitted",
                "not permit",
                "not permits"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Dogs' is plural → 'are not permitted'. This is a restaurant rule. Passive is very common for signs and notices that describe what is or isn't allowed.",
            correctFeedbackRu: "Правильно! 'Dogs' — множественное число → 'are not permitted'. Это правило ресторана. Пассивный залог очень распространён для знаков и объявлений, описывающих, что разрешено или запрещено.",
            incorrectFeedback: "'Dogs' is plural — use 'are not permitted'. Signs and notices often use passive: 'No dogs are allowed', 'Bags are checked', 'Cameras are not permitted'. This is formal rule language.",
            incorrectFeedbackRu: "'Dogs' — множественное число — используйте 'are not permitted'. Знаки и объявления часто используют пассивный залог: 'No dogs are allowed', 'Bags are checked', 'Cameras are not permitted'. Это формальный язык правил."
        },
        {
            question: "Complete the sentence correctly:",
            questionRu: "Правильно дополните предложение:",
            sentence: "Speed limits _____ strictly in school zones.",
            options: [
                "are enforced",
                "is enforced",
                "enforces",
                "enforce"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Speed limits' is plural → 'are enforced'. The adverb 'strictly' tells us how. Passive is used because the police who enforce them aren't mentioned.",
            correctFeedbackRu: "Правильно! 'Speed limits' — множественное число → 'are enforced'. Наречие 'strictly' говорит нам, как. Пассивный залог используется, потому что полиция, которая обеспечивает их соблюдение, не упоминается.",
            incorrectFeedback: "'Speed limits' is plural — use 'are enforced'. The police enforce limits (active), but the focus is on the limits being enforced (passive). 'Strictly' is an adverb placed after the past participle.",
            incorrectFeedbackRu: "'Speed limits' — множественное число — используйте 'are enforced'. Полиция соблюдает ограничения (активный), но фокус на соблюдении ограничений (пассивный). 'Strictly' — наречие, стоящее после причастия прошедшего времени."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "All bags _____ at the entrance to the museum.",
            options: [
                "are checked",
                "is checked",
                "checks",
                "check"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'All bags' is plural → 'are checked'. This is a security procedure. Passive is natural here because the guards who check the bags are not the focus.",
            correctFeedbackRu: "Правильно! 'All bags' — множественное число → 'are checked'. Это процедура безопасности. Пассивный залог здесь естественен, потому что охранники, проверяющие сумки, не являются главными.",
            incorrectFeedback: "'All bags' is plural — use 'are checked'. This is a typical museum security rule. Security staff check bags (active), but 'all bags are checked' (passive) focuses on what happens to every bag.",
            incorrectFeedbackRu: "'All bags' — множественное число — используйте 'are checked'. Это типичное правило безопасности музея. Сотрудники службы безопасности проверяют сумки (активный), но 'all bags are checked' (пассивный) фокусируется на том, что происходит с каждой сумкой."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Visitors _____ not to touch the exhibits.",
            options: [
                "are asked",
                "is asked",
                "asks",
                "ask"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Visitors' is plural → 'are asked'. 'Are asked + to + infinitive' is a very useful passive structure meaning visitors have been requested (politely) not to touch.",
            correctFeedbackRu: "Правильно! 'Visitors' — множественное число → 'are asked'. 'Are asked + to + инфинитив' — очень полезная пассивная структура, означающая, что посетителей (вежливо) попросили не трогать.",
            incorrectFeedback: "'Visitors' is plural — use 'are asked'. The structure 'are asked to...' = 'someone asks them to...'. It's a polite way to state rules: 'Visitors are asked to be quiet'.",
            incorrectFeedbackRu: "'Visitors' — множественное число — используйте 'are asked'. Структура 'are asked to...' = 'кто-то просит их...'. Это вежливый способ указывать правила: 'Visitors are asked to be quiet'."
        },
        {
            question: "Choose the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Mobile phones _____ to switch off during the performance.",
            options: [
                "are required",
                "is required",
                "requires",
                "require"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Mobile phones' is plural → 'are required'. 'Are required to + infinitive' is a formal passive structure for obligations: phones must be switched off.",
            correctFeedbackRu: "Правильно! 'Mobile phones' — множественное число → 'are required'. 'Are required to + инфинитив' — формальная пассивная структура для обязательств: телефоны должны быть выключены.",
            incorrectFeedback: "'Mobile phones' is plural — use 'are required'. This structure means phones must be switched off. Compare: 'Phones are required to be switched off' = 'You must switch off your phone'.",
            incorrectFeedbackRu: "'Mobile phones' — множественное число — используйте 'are required'. Эта структура означает, что телефоны должны быть выключены. Сравните: 'Phones are required to be switched off' = 'You must switch off your phone'."
        },
        {
            question: "Complete the sentence:",
            questionRu: "Дополните предложение:",
            sentence: "Rubbish _____ in the bins provided at each street corner.",
            options: [
                "is collected",
                "are collected",
                "collects",
                "collect"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Rubbish' is uncountable and singular → 'is collected'. The location detail 'at each street corner' adds information. Who collects it (the council) isn't mentioned.",
            correctFeedbackRu: "Правильно! 'Rubbish' — несчитаемое и единственное число → 'is collected'. Деталь местоположения 'at each street corner' добавляет информацию. Кто собирает (совет) — не упоминается.",
            incorrectFeedback: "'Rubbish' is uncountable/singular → 'is collected'. Uncountable nouns always use singular verb forms. More examples: 'water is treated', 'information is provided', 'equipment is checked'.",
            incorrectFeedbackRu: "'Rubbish' — несчитаемое/единственное число → 'is collected'. Несчитаемые существительные всегда используют глаголы в единственном числе. Больше примеров: 'water is treated', 'information is provided', 'equipment is checked'."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Fines _____ for parking in front of fire exits.",
            options: [
                "are issued",
                "is issued",
                "issues",
                "issue"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Fines' is plural → 'are issued'. This is a traffic regulation. Passive is used because the authority (police or council) who issues fines isn't specified.",
            correctFeedbackRu: "Правильно! 'Fines' — множественное число → 'are issued'. Это правило дорожного движения. Пассивный залог используется, потому что орган власти (полиция или совет), который выдаёт штрафы, не указан.",
            incorrectFeedback: "'Fines' is plural — use 'are issued'. When we describe consequences or penalties in rules, passive is typical: 'Fines are issued', 'Cars are towed', 'Licences are suspended'.",
            incorrectFeedbackRu: "'Fines' — множественное число — используйте 'are issued'. Когда мы описываем последствия или наказания в правилах, пассивный залог типичен: 'Fines are issued', 'Cars are towed', 'Licences are suspended'."
        },
        {
            question: "Choose the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "This door _____ shut at all times for safety reasons.",
            options: [
                "is kept",
                "are kept",
                "keeps",
                "keeping"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'This door' is singular → 'is kept'. 'Is kept + adjective' is a common passive structure: 'is kept clean', 'is kept locked', 'is kept shut'. It describes a maintained state.",
            correctFeedbackRu: "Правильно! 'This door' — единственное число → 'is kept'. 'Is kept + прилагательное' — распространённая пассивная структура: 'is kept clean', 'is kept locked', 'is kept shut'. Она описывает поддерживаемое состояние.",
            incorrectFeedback: "'This door' is singular — use 'is kept'. This structure means someone always keeps it shut. 'Keeping' without 'is' can't be the main verb. You need is + kept.",
            incorrectFeedbackRu: "'This door' — единственное число — используйте 'is kept'. Эта структура означает, что кто-то всегда держит её закрытой. 'Keeping' без 'is' не может быть главным глаголом. Нужно is + kept."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The park _____ open to the public every day from 6 am to 10 pm.",
            options: [
                "is kept",
                "are kept",
                "keeps",
                "kept"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The park' is singular → 'is kept'. 'Kept open' is a common expression meaning someone/something maintains it in an open state. The hours give specific information.",
            correctFeedbackRu: "Правильно! 'The park' — единственное число → 'is kept'. 'Kept open' — распространённое выражение, означающее, что кто-то/что-то поддерживает его в открытом состоянии. Часы работы дают конкретную информацию.",
            incorrectFeedback: "'The park' is singular — use 'is kept'. 'Kept' alone without 'is' would be past tense active, which changes the meaning completely. Present passive needs: is/are + past participle.",
            incorrectFeedbackRu: "'The park' — единственное число — используйте 'is kept'. 'Kept' без 'is' — прошедшее активное время, что полностью меняет смысл. Настоящий пассивный залог требует: is/are + причастие прошедшего времени."
        }
    ]
};

/* ============================================
Page 6: Present Passive - Health and Medicine
============================================ */
window.grammarExercises['passive']['present-passive-page6'] = {
    title: "Present Passive - Health and Medicine",
    multipleChoice: [
        {
            question: "Choose the correct present passive form:",
            questionRu: "Выберите правильную форму настоящего пассивного залога:",
            sentence: "Patients _____ in order of arrival at the clinic.",
            options: [
                "are seen",
                "is seen",
                "see",
                "sees"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Patients' is plural → 'are seen'. This describes the clinic procedure. 'Are seen' in medical context means 'are received/examined by a doctor'.",
            correctFeedbackRu: "Правильно! 'Patients' — множественное число → 'are seen'. Это описывает процедуру клиники. 'Are seen' в медицинском контексте означает 'принимаются/осматриваются врачом'.",
            incorrectFeedback: "'Patients' is plural — use 'are seen'. Medical procedures are often described in passive: 'patients are examined', 'blood is tested', 'medicine is prescribed'.",
            incorrectFeedbackRu: "'Patients' — множественное число — используйте 'are seen'. Медицинские процедуры часто описываются в пассивном залоге: 'patients are examined', 'blood is tested', 'medicine is prescribed'."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Blood samples _____ to the laboratory for analysis.",
            options: [
                "are taken",
                "is taken",
                "takes",
                "take"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Blood samples' is plural → 'are taken'. This describes a standard medical procedure. The destination 'to the laboratory' gives us important location information.",
            correctFeedbackRu: "Правильно! 'Blood samples' — множественное число → 'are taken'. Это описывает стандартную медицинскую процедуру. Место назначения 'to the laboratory' даёт нам важную информацию о местоположении.",
            incorrectFeedback: "'Blood samples' is plural — use 'are taken'. 'Take' is irregular: take → took → taken. In present passive: are + taken.",
            incorrectFeedbackRu: "'Blood samples' — множественное число — используйте 'are taken'. 'Take' — неправильный глагол: take → took → taken. В настоящем пассивном залоге: are + taken."
        },
        {
            question: "Complete the sentence correctly:",
            questionRu: "Правильно дополните предложение:",
            sentence: "The vaccine _____ to all children between the ages of one and five.",
            options: [
                "is offered",
                "are offered",
                "offers",
                "offer"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'The vaccine' is singular → 'is offered'. This describes a health service or programme. 'Is offered to' is a passive structure with an indirect object.",
            correctFeedbackRu: "Правильно! 'The vaccine' — единственное число → 'is offered'. Это описывает медицинскую услугу или программу. 'Is offered to' — пассивная структура с косвенным дополнением.",
            incorrectFeedback: "'The vaccine' is singular — use 'is offered'. The structure 'is offered to children' means the health service provides vaccines for children (for free or at low cost).",
            incorrectFeedbackRu: "'The vaccine' — единственное число — используйте 'is offered'. Структура 'is offered to children' означает, что система здравоохранения предоставляет вакцины для детей (бесплатно или по низкой цене)."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Painkillers _____ in many different doses depending on the patient's needs.",
            options: [
                "are prescribed",
                "is prescribed",
                "prescribes",
                "prescribe"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Painkillers' is plural → 'are prescribed'. Medical prescriptions are typically described in passive because the patient receives the prescription (focus on patient/medicine).",
            correctFeedbackRu: "Правильно! 'Painkillers' — множественное число → 'are prescribed'. Медицинские рецепты обычно описываются в пассивном залоге, потому что пациент получает рецепт (фокус на пациенте/лекарстве).",
            incorrectFeedback: "'Painkillers' is plural — use 'are prescribed'. Doctor prescribes painkillers (active) → Painkillers are prescribed by a doctor (passive). The medicine is the focus, not the doctor.",
            incorrectFeedbackRu: "'Painkillers' — множественное число — используйте 'are prescribed'. Врач выписывает обезболивающие (активный) → Painkillers are prescribed by a doctor (пассивный). Лекарство — главный объект, а не врач."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Ambulance services _____ free to all residents of this country.",
            options: [
                "are provided",
                "is provided",
                "provides",
                "provide"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Ambulance services' is plural → 'are provided'. This describes a public health system feature. Passive is used because who provides them (the government/NHS) is less important than the service itself.",
            correctFeedbackRu: "Правильно! 'Ambulance services' — множественное число → 'are provided'. Это описывает особенность системы общественного здравоохранения. Пассивный залог используется, потому что кто предоставляет услуги (правительство/NHS) менее важен, чем сама услуга.",
            incorrectFeedback: "'Ambulance services' is plural — use 'are provided'. Public services are often described in passive: 'services are funded', 'hospitals are maintained', 'care is provided'.",
            incorrectFeedbackRu: "'Ambulance services' — множественное число — используйте 'are provided'. Государственные услуги часто описываются в пассивном залоге: 'services are funded', 'hospitals are maintained', 'care is provided'."
        },
        {
            question: "Choose the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The patient's temperature _____ every four hours throughout the night.",
            options: [
                "is measured",
                "are measured",
                "measures",
                "measuring"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Temperature' is singular → 'is measured'. The frequency 'every four hours' shows this is a repeated medical check. The passive focuses on the patient's temperature, not the nurse.",
            correctFeedbackRu: "Правильно! 'Temperature' — единственное число → 'is measured'. Частотность 'every four hours' показывает, что это повторяющаяся медицинская проверка. Пассивный залог фокусируется на температуре пациента, а не на медсестре.",
            incorrectFeedback: "'Temperature' is singular — use 'is measured'. 'Measuring' alone isn't a complete verb here. The nurse measures temperature (active), but in medical descriptions, passive is more natural.",
            incorrectFeedbackRu: "'Temperature' — единственное число — используйте 'is measured'. 'Measuring' само по себе не является полным глаголом здесь. Медсестра измеряет температуру (активный), но в медицинских описаниях пассивный залог более естественен."
        },
        {
            question: "Complete the sentence:",
            questionRu: "Дополните предложение:",
            sentence: "Appointments _____ by phone or through the hospital website.",
            options: [
                "are made",
                "is made",
                "makes",
                "make"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Appointments' is plural → 'are made'. This describes hospital booking procedures. Two methods are given: by phone or through the website. Passive is used because the patient can use either method.",
            correctFeedbackRu: "Правильно! 'Appointments' — множественное число → 'are made'. Это описывает процедуры записи в больнице. Даны два метода: по телефону или через веб-сайт больницы. Пассивный залог используется, потому что пациент может использовать любой метод.",
            incorrectFeedback: "'Appointments' is plural — use 'are made'. Compare: 'Patients make appointments' (active) → 'Appointments are made' (passive). Passive emphasises the appointment process.",
            incorrectFeedbackRu: "'Appointments' — множественное число — используйте 'are made'. Сравните: 'Patients make appointments' (активный) → 'Appointments are made' (пассивный). Пассивный залог акцентирует внимание на процессе записи."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "New medicines _____ for many years before they reach the public.",
            options: [
                "are tested",
                "is tested",
                "tests",
                "tested"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Medicines' is plural → 'are tested'. This describes the drug development process. The time period 'for many years' shows how long this process takes. Passive is standard in scientific descriptions.",
            correctFeedbackRu: "Правильно! 'Medicines' — множественное число → 'are tested'. Это описывает процесс разработки лекарств. Временной период 'for many years' показывает, сколько времени занимает этот процесс. Пассивный залог стандартен в научных описаниях.",
            incorrectFeedback: "'Medicines' is plural — use 'are tested'. 'Tested' alone is past simple active. For present passive: are + tested. This sentence describes a general process that happens regularly.",
            incorrectFeedbackRu: "'Medicines' — множественное число — используйте 'are tested'. 'Tested' само по себе — прошедшее простое активное время. Для настоящего пассивного залога: are + tested. Это предложение описывает общий процесс, который происходит регулярно."
        },
        {
            question: "Choose the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Medical waste _____ separately from regular household rubbish.",
            options: [
                "is disposed of",
                "are disposed of",
                "disposes of",
                "dispose of"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Medical waste' is singular/uncountable → 'is disposed of'. Note that phrasal verbs in passive keep all parts: 'dispose of' → 'is disposed of'. Don't drop 'of'!",
            correctFeedbackRu: "Правильно! 'Medical waste' — единственное число/несчитаемое → 'is disposed of'. Обратите внимание, что фразовые глаголы в пассивном залоге сохраняют все части: 'dispose of' → 'is disposed of'. Не теряйте 'of'!",
            incorrectFeedback: "'Medical waste' is singular — use 'is disposed of'. Important: phrasal verbs stay together in passive. 'Dispose of' → 'is disposed of'. Other examples: 'looked after' → 'is looked after'.",
            incorrectFeedbackRu: "'Medical waste' — единственное число — используйте 'is disposed of'. Важно: фразовые глаголы остаются вместе в пассивном залоге. 'Dispose of' → 'is disposed of'. Другие примеры: 'looked after' → 'is looked after'."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Patients with serious conditions _____ to a specialist immediately.",
            options: [
                "are referred",
                "is referred",
                "refers",
                "refer"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Patients' is plural → 'are referred'. 'Are referred to a specialist' is a common medical passive. 'Refer' is a regular verb: refer → referred. In passive: are + referred.",
            correctFeedbackRu: "Правильно! 'Patients' — множественное число → 'are referred'. 'Are referred to a specialist' — распространённый медицинский пассивный залог. 'Refer' — правильный глагол: refer → referred. В пассивном залоге: are + referred.",
            incorrectFeedback: "'Patients' is plural — use 'are referred'. GPs refer patients to specialists (active) → Patients are referred to specialists (passive). Medical passive is very natural in English.",
            incorrectFeedbackRu: "'Patients' — множественное число — используйте 'are referred'. Терапевты направляют пациентов к специалистам (активный) → Patients are referred to specialists (пассивный). Медицинский пассивный залог очень естественен в английском."
        }
    ]
};

/* ============================================
Page 7: Present Passive - Environment and Nature
============================================ */
window.grammarExercises['passive']['present-passive-page7'] = {
    title: "Present Passive - Environment and Nature",
    multipleChoice: [
        {
            question: "Choose the correct present passive form:",
            questionRu: "Выберите правильную форму настоящего пассивного залога:",
            sentence: "Thousands of trees _____ every year in this national park.",
            options: [
                "are planted",
                "is planted",
                "plants",
                "plant"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Thousands of trees' is plural → 'are planted'. 'Every year' tells us this is a recurring action. Who plants them (volunteers, park workers) isn't mentioned.",
            correctFeedbackRu: "Правильно! 'Thousands of trees' — множественное число → 'are planted'. 'Every year' говорит нам, что это повторяющееся действие. Кто сажает их (волонтёры, работники парка) — не упоминается.",
            incorrectFeedback: "'Thousands of trees' is plural — use 'are planted'. This describes a conservation programme. Passive is natural when talking about environmental actions without specifying who does them.",
            incorrectFeedbackRu: "'Thousands of trees' — множественное число — используйте 'are planted'. Это описывает программу сохранения природы. Пассивный залог естественен, когда говорим об экологических действиях, не указывая, кто их выполняет."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Plastic waste _____ into the ocean by ships and factories.",
            options: [
                "is dumped",
                "are dumped",
                "dumps",
                "dump"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Plastic waste' is singular/uncountable → 'is dumped'. The agent 'by ships and factories' tells us the source. When the agent is included, it provides important information.",
            correctFeedbackRu: "Правильно! 'Plastic waste' — единственное число/несчитаемое → 'is dumped'. Агент 'by ships and factories' говорит нам об источнике. Когда агент включён, он предоставляет важную информацию.",
            incorrectFeedback: "'Plastic waste' is uncountable/singular → 'is dumped'. Compare active and passive: 'Ships dump plastic waste' (active) → 'Plastic waste is dumped by ships' (passive). Passive puts focus on the waste.",
            incorrectFeedbackRu: "'Plastic waste' — несчитаемое/единственное число → 'is dumped'. Сравните активный и пассивный: 'Ships dump plastic waste' (активный) → 'Plastic waste is dumped by ships' (пассивный). Пассивный залог акцентирует внимание на отходах."
        },
        {
            question: "Complete the sentence correctly:",
            questionRu: "Правильно дополните предложение:",
            sentence: "Endangered animals _____ in special nature reserves around the world.",
            options: [
                "are protected",
                "is protected",
                "protects",
                "protecting"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Endangered animals' is plural → 'are protected'. This describes conservation efforts globally. 'Around the world' shows the wide scope of this action.",
            correctFeedbackRu: "Правильно! 'Endangered animals' — множественное число → 'are protected'. Это описывает природоохранные усилия по всему миру. 'Around the world' показывает широкий охват этого действия.",
            incorrectFeedback: "'Endangered animals' is plural — use 'are protected'. 'Protecting' without 'are' is an -ing form, which alone can't be the main verb in this sentence.",
            incorrectFeedbackRu: "'Endangered animals' — множественное число — используйте 'are protected'. 'Protecting' без 'are' — -ing форма, которая сама по себе не может быть главным глаголом в этом предложении."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Air quality _____ constantly in most major cities.",
            options: [
                "is monitored",
                "are monitored",
                "monitors",
                "monitored"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Air quality' is singular → 'is monitored'. The adverb 'constantly' shows this is a continuous process. Environmental monitoring is a good context for present passive.",
            correctFeedbackRu: "Правильно! 'Air quality' — единственное число → 'is monitored'. Наречие 'constantly' показывает, что это непрерывный процесс. Экологический мониторинг — хороший контекст для настоящего пассивного залога.",
            incorrectFeedback: "'Air quality' is singular — use 'is monitored'. 'Monitored' alone is past simple active. For present passive: is + monitored. The agencies that monitor it aren't the focus.",
            incorrectFeedbackRu: "'Air quality' — единственное число — используйте 'is monitored'. 'Monitored' само по себе — прошедшее простое активное время. Для настоящего пассивного залога: is + monitored. Агентства, которые это отслеживают, не являются главными."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Recycled materials _____ to produce new packaging.",
            options: [
                "are used",
                "is used",
                "uses",
                "use"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Materials' is plural → 'are used'. The purpose 'to produce new packaging' explains why. Passive shows what happens to the recycled materials — they are used for something.",
            correctFeedbackRu: "Правильно! 'Materials' — множественное число → 'are used'. Цель 'to produce new packaging' объясняет, зачем. Пассивный залог показывает, что происходит с переработанными материалами — они используются для чего-то.",
            incorrectFeedback: "'Materials' is plural — use 'are used'. Active: 'Companies use recycled materials' → Passive: 'Recycled materials are used'. The passive focuses on the materials.",
            incorrectFeedbackRu: "'Materials' — множественное число — используйте 'are used'. Активный: 'Companies use recycled materials' → Пассивный: 'Recycled materials are used'. Пассивный залог фокусируется на материалах."
        },
        {
            question: "Choose the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The coastline _____ by rising sea levels and storm erosion.",
            options: [
                "is threatened",
                "are threatened",
                "threatens",
                "threatening"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The coastline' is singular → 'is threatened'. The agent 'by rising sea levels and storm erosion' gives the cause. When two agents are listed, they are joined with 'and'.",
            correctFeedbackRu: "Правильно! 'The coastline' — единственное число → 'is threatened'. Агент 'by rising sea levels and storm erosion' даёт причину. Когда два агента перечислены, они соединяются союзом 'and'.",
            incorrectFeedback: "'The coastline' is singular — use 'is threatened'. 'Threatening' alone is an -ing form used as a main verb without 'is'. You need: is + threatened (passive) or is + threatening (active).",
            incorrectFeedbackRu: "'The coastline' — единственное число — используйте 'is threatened'. 'Threatening' само по себе — -ing форма, используемая как главный глагол без 'is'. Нужно: is + threatened (пассивный) или is + threatening (активный)."
        },
        {
            question: "Complete the sentence:",
            questionRu: "Дополните предложение:",
            sentence: "Fossil fuels _____ for most of the world's energy needs.",
            options: [
                "are burned",
                "is burned",
                "burns",
                "burning"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Fossil fuels' is plural → 'are burned'. The phrase 'for most of the world's energy needs' explains the purpose. This is a factual statement about current global energy use.",
            correctFeedbackRu: "Правильно! 'Fossil fuels' — множественное число → 'are burned'. Фраза 'for most of the world's energy needs' объясняет цель. Это фактическое утверждение о текущем мировом потреблении энергии.",
            incorrectFeedback: "'Fossil fuels' is plural — use 'are burned'. This describes a global fact. 'Burning' without 'are' can't be the main verb. Present passive for facts: are + past participle.",
            incorrectFeedbackRu: "'Fossil fuels' — множественное число — используйте 'are burned'. Это описывает глобальный факт. 'Burning' без 'are' не может быть главным глаголом. Настоящий пассивный залог для фактов: are + причастие прошедшего времени."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Water from mountain streams _____ before it reaches people's homes.",
            options: [
                "is purified",
                "are purified",
                "purifies",
                "purify"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Water' is uncountable and singular → 'is purified'. The clause 'before it reaches people's homes' shows the sequence of events. This is a factual description of water treatment.",
            correctFeedbackRu: "Правильно! 'Water' — несчитаемое и единственное число → 'is purified'. Придаточное предложение 'before it reaches people's homes' показывает последовательность событий. Это фактическое описание очистки воды.",
            incorrectFeedback: "'Water' is uncountable/singular → 'is purified'. Water treatment facilities purify water (active) → Water is purified (passive). The treatment process, not the facility, is the focus.",
            incorrectFeedbackRu: "'Water' — несчитаемое/единственное число → 'is purified'. Водоочистные сооружения очищают воду (активный) → Water is purified (пассивный). Процесс очистки, а не сооружение, является главным."
        },
        {
            question: "Choose the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Carbon emissions _____ by international agreements.",
            options: [
                "are controlled",
                "is controlled",
                "controls",
                "control"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Carbon emissions' is plural → 'are controlled'. The agent 'by international agreements' tells us what limits emissions. This is a factual statement about environmental policy.",
            correctFeedbackRu: "Правильно! 'Carbon emissions' — множественное число → 'are controlled'. Агент 'by international agreements' говорит нам, что ограничивает выбросы. Это фактическое утверждение об экологической политике.",
            incorrectFeedback: "'Carbon emissions' is plural — use 'are controlled'. The phrase 'by international agreements' is the agent (what does the controlling). Passive + by + agent is a complete structure.",
            incorrectFeedbackRu: "'Carbon emissions' — множественное число — используйте 'are controlled'. Фраза 'by international agreements' — это агент (что осуществляет контроль). Пассивный залог + by + агент — полная структура."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Sea turtles _____ on protected beaches during nesting season.",
            options: [
                "are observed",
                "is observed",
                "observes",
                "observed"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Sea turtles' is plural → 'are observed'. The time phrase 'during nesting season' adds context. Scientists observe turtles (active) → Turtles are observed (passive).",
            correctFeedbackRu: "Правильно! 'Sea turtles' — множественное число → 'are observed'. Временная фраза 'during nesting season' добавляет контекст. Учёные наблюдают за черепахами (активный) → Turtles are observed (пассивный).",
            incorrectFeedback: "'Sea turtles' is plural — use 'are observed'. 'Observed' alone is past simple active. For present passive, you need the auxiliary: are + observed.",
            incorrectFeedbackRu: "'Sea turtles' — множественное число — используйте 'are observed'. 'Observed' само по себе — прошедшее простое активное время. Для настоящего пассивного залога нужен вспомогательный глагол: are + observed."
        }
    ]
};

/* ============================================
Page 8: Present Passive - Culture and Entertainment
============================================ */
window.grammarExercises['passive']['present-passive-page8'] = {
    title: "Present Passive - Culture and Entertainment",
    multipleChoice: [
        {
            question: "Choose the correct present passive form:",
            questionRu: "Выберите правильную форму настоящего пассивного залога:",
            sentence: "The film festival _____ every summer in this city.",
            options: [
                "is held",
                "are held",
                "holds",
                "hold"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'The film festival' is singular → 'is held'. 'Is held' is a common passive for events: events are held, concerts are performed, exhibitions are shown.",
            correctFeedbackRu: "Правильно! 'The film festival' — единственное число → 'is held'. 'Is held' — распространённый пассивный залог для мероприятий: events are held, concerts are performed, exhibitions are shown.",
            incorrectFeedback: "'The film festival' is singular — use 'is held'. 'Hold' is irregular: hold → held. In passive: is + held. Events are commonly described in passive: 'is held', 'is organised', 'is attended'.",
            incorrectFeedbackRu: "'The film festival' — единственное число — используйте 'is held'. 'Hold' — неправильный глагол: hold → held. В пассивном залоге: is + held. Мероприятия обычно описываются в пассивном залоге: 'is held', 'is organised', 'is attended'."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Songs from that album _____ by people of all ages.",
            options: [
                "are loved",
                "is loved",
                "loves",
                "love"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Songs' is plural → 'are loved'. The agent 'by people of all ages' tells us who loves them. Emotional responses like love, hate, and admiration are often expressed in passive.",
            correctFeedbackRu: "Правильно! 'Songs' — множественное число → 'are loved'. Агент 'by people of all ages' говорит нам, кто их любит. Эмоциональные реакции, такие как любовь, ненависть и восхищение, часто выражаются в пассивном залоге.",
            incorrectFeedback: "'Songs' is plural — use 'are loved'. Verbs expressing emotions in passive are common: 'is loved', 'is admired', 'is respected', 'is enjoyed'. The agent 'by people' shows who has the feeling.",
            incorrectFeedbackRu: "'Songs' — множественное число — используйте 'are loved'. Глаголы, выражающие эмоции в пассивном залоге, распространены: 'is loved', 'is admired', 'is respected', 'is enjoyed'. Агент 'by people' показывает, кто испытывает чувство."
        },
        {
            question: "Complete the sentence correctly:",
            questionRu: "Правильно дополните предложение:",
            sentence: "New exhibitions _____ at the city gallery every month.",
            options: [
                "are launched",
                "is launched",
                "launches",
                "launching"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Exhibitions' is plural → 'are launched'. The frequency 'every month' confirms a regular pattern. Cultural events and programmes are commonly described using present passive.",
            correctFeedbackRu: "Правильно! 'Exhibitions' — множественное число → 'are launched'. Частотность 'every month' подтверждает регулярную схему. Культурные события и программы обычно описываются с использованием настоящего пассивного залога.",
            incorrectFeedback: "'Exhibitions' is plural — use 'are launched'. 'Launching' without 'are' can't be the main verb. Active: 'The gallery launches exhibitions' → Passive: 'Exhibitions are launched at the gallery'.",
            incorrectFeedbackRu: "'Exhibitions' — множественное число — используйте 'are launched'. 'Launching' без 'are' не может быть главным глаголом. Активный: 'The gallery launches exhibitions' → Пассивный: 'Exhibitions are launched at the gallery'."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "The play _____ in three different languages for international audiences.",
            options: [
                "is performed",
                "are performed",
                "performs",
                "performed"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The play' is singular → 'is performed'. The detail 'in three different languages' shows how. Theatre and arts frequently use passive when describing performances.",
            correctFeedbackRu: "Правильно! 'The play' — единственное число → 'is performed'. Деталь 'in three different languages' показывает, как. Театр и искусство часто используют пассивный залог при описании выступлений.",
            incorrectFeedback: "'The play' is singular — use 'is performed'. 'Performed' alone is past simple active. For present passive: is + performed. The actors perform it, but the play is the focus.",
            incorrectFeedbackRu: "'The play' — единственное число — используйте 'is performed'. 'Performed' само по себе — прошедшее простое активное время. Для настоящего пассивного залога: is + performed. Актёры его исполняют, но пьеса является главным объектом."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "The award ceremony _____ live on national television every year.",
            options: [
                "is broadcast",
                "are broadcast",
                "broadcasts",
                "broadcasting"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'The award ceremony' is singular → 'is broadcast'. Note: 'broadcast' is an irregular verb with the same form in past tense. In passive: is + broadcast.",
            correctFeedbackRu: "Правильно! 'The award ceremony' — единственное число → 'is broadcast'. Обратите внимание: 'broadcast' — неправильный глагол с одинаковой формой в прошедшем времени. В пассивном залоге: is + broadcast.",
            incorrectFeedback: "'The award ceremony' is singular — use 'is broadcast'. 'Broadcast' is irregular: broadcast → broadcast (the past participle is the same as the base form). So passive = is + broadcast.",
            incorrectFeedbackRu: "'The award ceremony' — единственное число — используйте 'is broadcast'. 'Broadcast' — неправильный глагол: broadcast → broadcast (причастие прошедшего времени совпадает с основной формой). Пассивный залог = is + broadcast."
        },
        {
            question: "Choose the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Traditional dances _____ to the next generation by older members of the community.",
            options: [
                "are taught",
                "is taught",
                "teaches",
                "teach"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Traditional dances' is plural → 'are taught'. The agent 'by older members' tells us who teaches. This is a cultural preservation context — passive focuses on what is being preserved.",
            correctFeedbackRu: "Правильно! 'Traditional dances' — множественное число → 'are taught'. Агент 'by older members' говорит нам, кто обучает. Это контекст сохранения культуры — пассивный залог фокусируется на том, что сохраняется.",
            incorrectFeedback: "'Traditional dances' is plural — use 'are taught'. 'Teach' is irregular: teach → taught. In passive: are + taught. The older members teach (active), but the dances are the focus (passive).",
            incorrectFeedbackRu: "'Traditional dances' — множественное число — используйте 'are taught'. 'Teach' — неправильный глагол: teach → taught. В пассивном залоге: are + taught. Старшие члены обучают (активный), но танцы являются главным объектом (пассивный)."
        },
        {
            question: "Complete the sentence:",
            questionRu: "Дополните предложение:",
            sentence: "This famous novel _____ into more than 40 languages worldwide.",
            options: [
                "is translated",
                "are translated",
                "translates",
                "translate"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'This famous novel' is singular → 'is translated'. The number '40 languages' gives impressive detail. Passive is used because who translates it (different translators in different countries) isn't the point.",
            correctFeedbackRu: "Правильно! 'This famous novel' — единственное число → 'is translated'. Число '40 languages' даёт впечатляющую деталь. Пассивный залог используется, потому что кто переводит (разные переводчики в разных странах) — не главное.",
            incorrectFeedback: "'This famous novel' is singular — use 'is translated'. When we talk about books and their reach, passive is common: 'is read by millions', 'is sold everywhere', 'is translated into many languages'.",
            incorrectFeedbackRu: "'This famous novel' — единственное число — используйте 'is translated'. Когда мы говорим о книгах и их охвате, пассивный залог распространён: 'is read by millions', 'is sold everywhere', 'is translated into many languages'."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Concert tickets _____ out within minutes of going on sale.",
            options: [
                "are sold",
                "is sold",
                "sells",
                "sell"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Concert tickets' is plural → 'are sold'. The phrase 'within minutes' emphasises how quickly. 'Are sold out' is a common expression — passive describes what happens to the tickets.",
            correctFeedbackRu: "Правильно! 'Concert tickets' — множественное число → 'are sold'. Фраза 'within minutes' подчёркивает скорость. 'Are sold out' — распространённое выражение — пассивный залог описывает то, что происходит с билетами.",
            incorrectFeedback: "'Concert tickets' is plural — use 'are sold'. Active: 'The venue sells tickets quickly' → Passive: 'Tickets are sold quickly'. Passive focuses on what happens to the tickets.",
            incorrectFeedbackRu: "'Concert tickets' — множественное число — используйте 'are sold'. Активный: 'The venue sells tickets quickly' → Пассивный: 'Tickets are sold quickly'. Пассивный залог фокусируется на том, что происходит с билетами."
        },
        {
            question: "Choose the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Street musicians _____ to perform in the town square at weekends.",
            options: [
                "are invited",
                "is invited",
                "invites",
                "invite"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Street musicians' is plural → 'are invited'. 'Are invited to + infinitive' is a common passive structure. The town council invites them (active), but musicians are the focus (passive).",
            correctFeedbackRu: "Правильно! 'Street musicians' — множественное число → 'are invited'. 'Are invited to + инфинитив' — распространённая пассивная структура. Городской совет приглашает их (активный), но музыканты являются главным объектом (пассивный).",
            incorrectFeedback: "'Street musicians' is plural — use 'are invited'. The structure 'are invited to perform' = 'someone invites them to perform'. This is a polite or formal way to say they perform with permission.",
            incorrectFeedbackRu: "'Street musicians' — множественное число — используйте 'are invited'. Структура 'are invited to perform' = 'кто-то приглашает их выступать'. Это вежливый или формальный способ сказать, что они выступают с разрешения."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The museum's collection _____ by private donors and government grants.",
            options: [
                "is funded",
                "are funded",
                "funds",
                "fund"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The museum's collection' is singular → 'is funded'. Two agents are listed: 'private donors and government grants'. When two or more agents are mentioned, they are joined with 'and'.",
            correctFeedbackRu: "Правильно! 'The museum's collection' — единственное число → 'is funded'. Перечислены два агента: 'private donors and government grants'. Когда упоминаются два или более агента, они соединяются союзом 'and'.",
            incorrectFeedback: "'The museum's collection' is singular — use 'is funded'. The agent 'by private donors and government grants' gives two sources of funding. Multiple agents are possible in passive sentences.",
            incorrectFeedbackRu: "'The museum's collection' — единственное число — используйте 'is funded'. Агент 'by private donors and government grants' даёт два источника финансирования. В пассивных предложениях возможны несколько агентов."
        }
    ]
};

/* ============================================
Page 9: Present Passive - Transport and Travel
============================================ */
window.grammarExercises['passive']['present-passive-page9'] = {
    title: "Present Passive - Transport and Travel",
    multipleChoice: [
        {
            question: "Choose the correct present passive form:",
            questionRu: "Выберите правильную форму настоящего пассивного залога:",
            sentence: "Passports _____ at every international border crossing.",
            options: [
                "are checked",
                "is checked",
                "checks",
                "check"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Passports' is plural → 'are checked'. This describes a standard border control procedure. Passive is natural because the focus is on passports, not on the border officers.",
            correctFeedbackRu: "Правильно! 'Passports' — множественное число → 'are checked'. Это описывает стандартную процедуру пограничного контроля. Пассивный залог естественен, потому что фокус на паспортах, а не на пограничных офицерах.",
            incorrectFeedback: "'Passports' is plural — use 'are checked'. Border procedures are typically described in passive: 'passports are checked', 'bags are scanned', 'visas are stamped'.",
            incorrectFeedbackRu: "'Passports' — множественное число — используйте 'are checked'. Пограничные процедуры обычно описываются в пассивном залоге: 'passports are checked', 'bags are scanned', 'visas are stamped'."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The train service _____ due to maintenance work every Sunday night.",
            options: [
                "is suspended",
                "are suspended",
                "suspends",
                "suspend"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The train service' is singular → 'is suspended'. The time 'every Sunday night' shows regularity. This is the kind of announcement you see on transport websites.",
            correctFeedbackRu: "Правильно! 'The train service' — единственное число → 'is suspended'. Время 'every Sunday night' показывает регулярность. Это вид объявления, который можно увидеть на транспортных сайтах.",
            incorrectFeedback: "'The train service' is singular — use 'is suspended'. Transport announcements use passive: 'services are suspended', 'trains are cancelled', 'routes are diverted'.",
            incorrectFeedbackRu: "'The train service' — единственное число — используйте 'is suspended'. Транспортные объявления используют пассивный залог: 'services are suspended', 'trains are cancelled', 'routes are diverted'."
        },
        {
            question: "Complete the sentence correctly:",
            questionRu: "Правильно дополните предложение:",
            sentence: "Luggage _____ separately from passengers on most flights.",
            options: [
                "is loaded",
                "are loaded",
                "loads",
                "loading"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Luggage' is uncountable and singular → 'is loaded'. This describes an airline procedure. Passive is used because ground staff load luggage but this isn't the important information.",
            correctFeedbackRu: "Правильно! 'Luggage' — несчитаемое и единственное число → 'is loaded'. Это описывает авиационную процедуру. Пассивный залог используется, потому что наземный персонал грузит багаж, но это не является важной информацией.",
            incorrectFeedback: "'Luggage' is uncountable/singular → 'is loaded'. 'Loading' without 'is' can't be the main verb. Airline processes use passive: 'luggage is loaded', 'planes are refuelled', 'tickets are scanned'.",
            incorrectFeedbackRu: "'Luggage' — несчитаемое/единственное число → 'is loaded'. 'Loading' без 'is' не может быть главным глаголом. Авиационные процессы используют пассивный залог: 'luggage is loaded', 'planes are refuelled', 'tickets are scanned'."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Taxis in this city _____ with GPS tracking systems for safety.",
            options: [
                "are equipped",
                "is equipped",
                "equips",
                "equip"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Taxis' is plural → 'are equipped'. The reason 'for safety' explains why. 'Are equipped with' is a common passive structure followed by the item that is included.",
            correctFeedbackRu: "Правильно! 'Taxis' — множественное число → 'are equipped'. Причина 'for safety' объясняет, зачем. 'Are equipped with' — распространённая пассивная структура, за которой следует предмет, который включён.",
            incorrectFeedback: "'Taxis' is plural — use 'are equipped'. The structure 'are equipped with...' means taxis have GPS built in. Compare: 'cars are fitted with airbags', 'rooms are equipped with air conditioning'.",
            incorrectFeedbackRu: "'Taxis' — множественное число — используйте 'are equipped'. Структура 'are equipped with...' означает, что в такси встроен GPS. Сравните: 'cars are fitted with airbags', 'rooms are equipped with air conditioning'."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Flight departure times _____ on the information board in the terminal.",
            options: [
                "are displayed",
                "is displayed",
                "displays",
                "displaying"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Flight departure times' is plural → 'are displayed'. This describes airport information systems. Passive is used because who updates the board (airport staff) isn't important.",
            correctFeedbackRu: "Правильно! 'Flight departure times' — множественное число → 'are displayed'. Это описывает информационные системы аэропорта. Пассивный залог используется, потому что кто обновляет доску (сотрудники аэропорта) — неважно.",
            incorrectFeedback: "'Flight departure times' is plural — use 'are displayed'. 'Displaying' without 'are' is an -ing form, not a main verb. Airport information: 'times are displayed', 'gates are announced', 'delays are shown'.",
            incorrectFeedbackRu: "'Flight departure times' — множественное число — используйте 'are displayed'. 'Displaying' без 'are' — -ing форма, а не главный глагол. Аэропортная информация: 'times are displayed', 'gates are announced', 'delays are shown'."
        },
        {
            question: "Choose the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The bus route _____ twice a year based on passenger demand.",
            options: [
                "is adjusted",
                "are adjusted",
                "adjusts",
                "adjusted"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The bus route' is singular → 'is adjusted'. 'Twice a year' shows regularity. The transport authority adjusts it (active), but the route is the focus (passive).",
            correctFeedbackRu: "Правильно! 'The bus route' — единственное число → 'is adjusted'. 'Twice a year' показывает регулярность. Транспортная служба регулирует его (активный), но маршрут является главным объектом (пассивный).",
            incorrectFeedback: "'The bus route' is singular — use 'is adjusted'. 'Adjusted' alone is past simple active. Present passive = is/are + past participle. Regular changes to services are described in passive.",
            incorrectFeedbackRu: "'The bus route' — единственное число — используйте 'is adjusted'. 'Adjusted' само по себе — прошедшее простое активное время. Настоящий пассивный залог = is/are + причастие прошедшего времени. Регулярные изменения в услугах описываются в пассивном залоге."
        },
        {
            question: "Complete the sentence:",
            questionRu: "Дополните предложение:",
            sentence: "Passengers _____ to show their boarding pass at the gate.",
            options: [
                "are asked",
                "is asked",
                "asks",
                "ask"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Passengers' is plural → 'are asked'. 'Are asked to + infinitive' is a polite passive structure for instructions. Airport staff ask passengers, but the focus is on what passengers need to do.",
            correctFeedbackRu: "Правильно! 'Passengers' — множественное число → 'are asked'. 'Are asked to + инфинитив' — вежливая пассивная структура для инструкций. Сотрудники аэропорта просят пассажиров, но фокус на том, что пассажирам нужно сделать.",
            incorrectFeedback: "'Passengers' is plural — use 'are asked'. 'Are asked to...' = 'someone asks/requests them to...'. This is common in travel announcements and instructions.",
            incorrectFeedbackRu: "'Passengers' — множественное число — используйте 'are asked'. 'Are asked to...' = 'кто-то просит/требует их...'. Это распространено в объявлениях о путешествиях и инструкциях."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "The bridge _____ by thousands of commuters every day.",
            options: [
                "is used",
                "are used",
                "uses",
                "using"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The bridge' is singular → 'is used'. The agent 'by thousands of commuters' tells us who uses it. The number emphasises how heavily it is used.",
            correctFeedbackRu: "Правильно! 'The bridge' — единственное число → 'is used'. Агент 'by thousands of commuters' говорит нам, кто его использует. Число подчёркивает, насколько интенсивно оно используется.",
            incorrectFeedback: "'The bridge' is singular — use 'is used'. 'Using' without 'is' can't be the main verb. When the agent is important for emphasis (thousands!), we include 'by + agent'.",
            incorrectFeedbackRu: "'The bridge' — единственное число — используйте 'is used'. 'Using' без 'is' не может быть главным глаголом. Когда агент важен для акцента (тысячи!), мы включаем 'by + агент'."
        },
        {
            question: "Choose the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Road signs in this country _____ in both local and English.",
            options: [
                "are written",
                "is written",
                "writes",
                "write"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Road signs' is plural → 'are written'. This is a factual statement about multilingual signage. Passive is used because who writes them (the government) isn't the point.",
            correctFeedbackRu: "Правильно! 'Road signs' — множественное число → 'are written'. Это фактическое утверждение о многоязычных указателях. Пассивный залог используется, потому что кто пишет (правительство) — не главное.",
            incorrectFeedback: "'Road signs' is plural — use 'are written'. This describes a fact about infrastructure. Active: 'The government writes signs in two languages' → Passive: 'Signs are written in two languages'.",
            incorrectFeedbackRu: "'Road signs' — множественное число — используйте 'are written'. Это описывает факт об инфраструктуре. Активный: 'The government writes signs in two languages' → Пассивный: 'Signs are written in two languages'."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Free Wi-Fi _____ to all passengers during the train journey.",
            options: [
                "is provided",
                "are provided",
                "provides",
                "provide"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Free Wi-Fi' is singular/uncountable → 'is provided'. This describes a service feature. 'Is provided to passengers' means passengers receive this service as part of their ticket.",
            correctFeedbackRu: "Правильно! 'Free Wi-Fi' — единственное число/несчитаемое → 'is provided'. Это описывает характеристику услуги. 'Is provided to passengers' означает, что пассажиры получают эту услугу как часть своего билета.",
            incorrectFeedback: "'Free Wi-Fi' is singular/uncountable — use 'is provided'. Services to customers are often described in passive: 'meals are served', 'assistance is offered', 'information is given'.",
            incorrectFeedbackRu: "'Free Wi-Fi' — единственное число/несчитаемое — используйте 'is provided'. Услуги для клиентов часто описываются в пассивном залоге: 'meals are served', 'assistance is offered', 'information is given'."
        }
    ]
};

/* ============================================
Page 10: Present Passive - Mixed Contexts (Review)
============================================ */
window.grammarExercises['passive']['present-passive-page10'] = {
    title: "Present Passive - Mixed Contexts (Review)",
    multipleChoice: [
        {
            question: "Choose the correct present passive form:",
            questionRu: "Выберите правильную форму настоящего пассивного залога:",
            sentence: "A new police station _____ in the centre of the town.",
            options: [
                "is being built",
                "are being built",
                "builds",
                "building"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'A new police station' is singular → 'is being built'. This is present continuous passive (is/are + being + past participle), used for actions happening right now or around this period.",
            correctFeedbackRu: "Правильно! 'A new police station' — единственное число → 'is being built'. Это настоящее непрерывное пассивное время (is/are + being + past participle), используемое для действий, происходящих прямо сейчас или в этот период.",
            incorrectFeedback: "This needs present continuous passive: is/are + being + past participle. 'Is being built' = currently under construction. Compare: 'is built' (regularly/generally) vs 'is being built' (right now).",
            incorrectFeedbackRu: "Здесь нужно настоящее непрерывное пассивное время: is/are + being + past participle. 'Is being built' = в настоящее время строится. Сравните: 'is built' (регулярно/в целом) vs 'is being built' (прямо сейчас)."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "The old city walls _____ every ten years to preserve them.",
            options: [
                "are repainted",
                "is repainted",
                "repaints",
                "repaint"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The old city walls' is plural → 'are repainted'. 'Every ten years' shows this is an infrequent but regular action. Passive is used because who does the painting isn't mentioned.",
            correctFeedbackRu: "Правильно! 'The old city walls' — множественное число → 'are repainted'. 'Every ten years' показывает, что это нечастое, но регулярное действие. Пассивный залог используется, потому что тот, кто красит, не упоминается.",
            incorrectFeedback: "'The old city walls' is plural — use 'are repainted'. Even infrequent regular actions use present passive with time expressions: 'every ten years', 'every decade', 'occasionally'.",
            incorrectFeedbackRu: "'The old city walls' — множественное число — используйте 'are repainted'. Даже нечастые регулярные действия используют настоящий пассивный залог с временными выражениями: 'every ten years', 'every decade', 'occasionally'."
        },
        {
            question: "Complete the sentence correctly:",
            questionRu: "Правильно дополните предложение:",
            sentence: "New laws _____ by parliament when there is a change of government.",
            options: [
                "are introduced",
                "is introduced",
                "introduces",
                "introduce"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'New laws' is plural → 'are introduced'. The agent 'by parliament' tells us who does it. Political and legal processes frequently use passive in English.",
            correctFeedbackRu: "Правильно! 'New laws' — множественное число → 'are introduced'. Агент 'by parliament' говорит нам, кто это делает. Политические и правовые процессы часто используют пассивный залог в английском.",
            incorrectFeedback: "'New laws' is plural — use 'are introduced'. Legal and political language uses passive frequently: 'laws are passed', 'bills are voted on', 'policies are implemented'.",
            incorrectFeedbackRu: "'New laws' — множественное число — используйте 'are introduced'. Юридический и политический язык часто использует пассивный залог: 'laws are passed', 'bills are voted on', 'policies are implemented'."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "The national anthem _____ at every international sports event.",
            options: [
                "is played",
                "are played",
                "plays",
                "played"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'The national anthem' is singular → 'is played'. This describes a sporting tradition or protocol. Passive is used because who plays it (a band, recording) isn't the focus.",
            correctFeedbackRu: "Правильно! 'The national anthem' — единственное число → 'is played'. Это описывает спортивную традицию или протокол. Пассивный залог используется, потому что кто её играет (оркестр, запись) — не главное.",
            incorrectFeedback: "'The national anthem' is singular — use 'is played'. 'Played' alone is past simple active. For present passive: is + played. Sports ceremonies use passive: 'is played', 'are presented', 'is awarded'.",
            incorrectFeedbackRu: "'The national anthem' — единственное число — используйте 'is played'. 'Played' само по себе — прошедшее простое активное время. Для настоящего пассивного залога: is + played. Спортивные церемонии используют пассивный залог: 'is played', 'are presented', 'is awarded'."
        },
        {
            question: "Select the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "Vegetables _____ from the garden and taken straight to the kitchen.",
            options: [
                "are picked",
                "is picked",
                "picks",
                "picking"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Vegetables' is plural → 'are picked'. This sentence has two passive verbs coordinated: 'are picked... and taken'. Both describe what happens to the vegetables.",
            correctFeedbackRu: "Правильно! 'Vegetables' — множественное число → 'are picked'. В этом предложении два скоординированных пассивных глагола: 'are picked... and taken'. Оба описывают то, что происходит с овощами.",
            incorrectFeedback: "'Vegetables' is plural — use 'are picked'. Note the second verb 'taken' also needs 'are': 'are picked and (are) taken'. The second 'are' is often omitted when coordinating two passive verbs.",
            incorrectFeedbackRu: "'Vegetables' — множественное число — используйте 'are picked'. Обратите внимание, что второй глагол 'taken' также требует 'are': 'are picked and (are) taken'. Второе 'are' часто опускается при координации двух пассивных глаголов."
        },
        {
            question: "Choose the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Children under 12 _____ a lower admission price at the cinema.",
            options: [
                "are charged",
                "is charged",
                "charges",
                "charge"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Children under 12' is plural → 'are charged'. This describes a cinema pricing policy. 'Are charged a lower price' is a passive structure where a price is applied to the subject.",
            correctFeedbackRu: "Правильно! 'Children under 12' — множественное число → 'are charged'. Это описывает политику ценообразования кинотеатра. 'Are charged a lower price' — пассивная структура, где цена применяется к подлежащему.",
            incorrectFeedback: "'Children under 12' is plural — use 'are charged'. Active: 'The cinema charges children a lower price' → Passive: 'Children are charged a lower price'. The focus shifts to children.",
            incorrectFeedbackRu: "'Children under 12' — множественное число — используйте 'are charged'. Активный: 'The cinema charges children a lower price' → Пассивный: 'Children are charged a lower price'. Фокус переходит на детей."
        },
        {
            question: "Complete the sentence:",
            questionRu: "Дополните предложение:",
            sentence: "The annual report _____ to all shareholders at the end of each financial year.",
            options: [
                "is sent",
                "are sent",
                "sends",
                "sending"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'The annual report' is singular → 'is sent'. 'Is sent to shareholders' is a passive structure where the report goes to the shareholders. Financial and business processes often use passive.",
            correctFeedbackRu: "Правильно! 'The annual report' — единственное число → 'is sent'. 'Is sent to shareholders' — пассивная структура, где отчёт поступает к акционерам. Финансовые и деловые процессы часто используют пассивный залог.",
            incorrectFeedback: "'The annual report' is singular — use 'is sent'. 'Sending' without 'is' can't be the main verb. Business communication passive: 'reports are sent', 'invoices are issued', 'updates are distributed'.",
            incorrectFeedbackRu: "'The annual report' — единственное число — используйте 'is sent'. 'Sending' без 'is' не может быть главным глаголом. Пассивный залог в деловой коммуникации: 'reports are sent', 'invoices are issued', 'updates are distributed'."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную пассивную форму:",
            sentence: "Historic buildings in this area _____ by the local heritage committee.",
            options: [
                "are maintained",
                "is maintained",
                "maintains",
                "maintain"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Historic buildings' is plural → 'are maintained'. The agent 'by the local heritage committee' tells us who is responsible. The buildings are the focus, not the committee.",
            correctFeedbackRu: "Правильно! 'Historic buildings' — множественное число → 'are maintained'. Агент 'by the local heritage committee' говорит нам, кто несёт ответственность. Здания являются главным объектом, а не комитет.",
            incorrectFeedback: "'Historic buildings' is plural — use 'are maintained'. When the agent is important and adds useful information, include 'by + agent'. Here, knowing who maintains them (heritage committee) is relevant.",
            incorrectFeedbackRu: "'Historic buildings' — множественное число — используйте 'are maintained'. Когда агент важен и добавляет полезную информацию, включайте 'by + агент'. Здесь важно знать, кто их обслуживает (комитет по наследию)."
        },
        {
            question: "Choose the correct option:",
            questionRu: "Выберите правильный вариант:",
            sentence: "A prize _____ to the student with the best performance each term.",
            options: [
                "is awarded",
                "are awarded",
                "awards",
                "award"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'A prize' is singular → 'is awarded'. 'Is awarded to' is a passive with an indirect object. The prize (direct object in active) becomes the subject in passive.",
            correctFeedbackRu: "Правильно! 'A prize' — единственное число → 'is awarded'. 'Is awarded to' — пассивный залог с косвенным дополнением. Приз (прямое дополнение в активном залоге) становится подлежащим в пассивном.",
            incorrectFeedback: "'A prize' is singular — use 'is awarded'. Active: 'The school awards a prize to the best student' → Passive: 'A prize is awarded to the best student'. The prize becomes the subject.",
            incorrectFeedbackRu: "'A prize' — единственное число — используйте 'is awarded'. Активный: 'The school awards a prize to the best student' → Пассивный: 'A prize is awarded to the best student'. Приз становится подлежащим."
        },
        {
            question: "Select the correct form:",
            questionRu: "Выберите правильную форму:",
            sentence: "Emergency meetings _____ whenever there is a serious security threat.",
            options: [
                "are called",
                "is called",
                "calls",
                "call"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Emergency meetings' is plural → 'are called'. The conditional clause 'whenever there is a threat' gives the trigger. 'Are called' means someone summons the meetings — passive used because who calls them isn't specified.",
            correctFeedbackRu: "Правильно! 'Emergency meetings' — множественное число → 'are called'. Условное придаточное 'whenever there is a threat' даёт триггер. 'Are called' означает, что кто-то созывает собрания — пассивный залог используется, потому что кто созывает — не указано.",
            incorrectFeedback: "'Emergency meetings' is plural — use 'are called'. Active: 'Leaders call emergency meetings' → Passive: 'Emergency meetings are called'. The focus is on the meetings, not on who calls them.",
            incorrectFeedbackRu: "'Emergency meetings' — множественное число — используйте 'are called'. Активный: 'Leaders call emergency meetings' → Пассивный: 'Emergency meetings are called'. Фокус на собраниях, а не на тех, кто их созывает."
        }
    ]
};

/* =============================================================================== */
/* ===========================Fill in the Gaps Exercises========================== */

/* ============================================
Page 1: Present Passive - Fill in the Gaps - Everyday Life
============================================ */
window.grammarExercises['passive']['present-passive-gap-page1'] = {
    title: "Present Passive - Everyday Life",
    fillGaps: [
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The supermarket ____ at 7 am every morning.",
            correctAnswer: "is opened",
            options: ["is opened", "are opened", "opens", "opened"],
            correctFeedback: "Correct! 'Is opened' is right because 'the supermarket' is singular. Present passive = is/are + past participle. The focus is on the supermarket, not on who opens it.",
            correctFeedbackRu: "Правильно! 'Is opened' верно, потому что 'the supermarket' — единственное число. Настоящий пассивный залог = is/are + причастие прошедшего времени. Фокус на супермаркете, а не на том, кто его открывает.",
            incorrectFeedback: "Think again! 'The supermarket' is singular, so use 'is' + past participle. 'Opened' alone is past simple active. For present passive you need: is + opened.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'The supermarket' — единственное число, поэтому используйте 'is' + причастие прошедшего времени. 'Opened' само по себе — прошедшее простое активное время. Для настоящего пассивного залога нужно: is + opened."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The recycling bins ____ every Thursday morning.",
            correctAnswer: "are emptied",
            options: ["are emptied", "is emptied", "empties", "emptied"],
            correctFeedback: "Right! 'Are emptied' is correct because 'bins' is plural. The structure is: are + past participle. The day 'every Thursday' shows this is a regular action.",
            correctFeedbackRu: "Правильно! 'Are emptied' верно, потому что 'bins' — множественное число. Структура: are + причастие прошедшего времени. День 'every Thursday' показывает, что это регулярное действие.",
            incorrectFeedback: "Not quite! 'Bins' is plural, so use 'are' not 'is'. 'Emptied' alone is past simple. Present passive = are + emptied. The workers empty the bins (active) → The bins are emptied (passive).",
            incorrectFeedbackRu: "Не совсем! 'Bins' — множественное число, поэтому используйте 'are', а не 'is'. 'Emptied' само по себе — прошедшее простое. Настоящий пассивный залог = are + emptied. Рабочие опустошают мусорные баки (активный) → Bins are emptied (пассивный)."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The mail ____ twice a day in this neighbourhood.",
            correctAnswer: "is delivered",
            options: ["is delivered", "are delivered", "delivers", "delivering"],
            correctFeedback: "Correct! 'Is delivered' is right because 'the mail' is uncountable and singular. 'Twice a day' confirms this is a repeated routine action.",
            correctFeedbackRu: "Правильно! 'Is delivered' верно, потому что 'the mail' — несчитаемое и единственное число. 'Twice a day' подтверждает, что это повторяющееся рутинное действие.",
            incorrectFeedback: "Try again! 'Mail' is uncountable, so it's singular → 'is delivered'. 'Delivering' without 'is' can't be the main verb. Present passive: is + delivered.",
            incorrectFeedbackRu: "Попробуйте ещё раз! 'Mail' — несчитаемое, поэтому единственное число → 'is delivered'. 'Delivering' без 'is' не может быть главным глаголом. Настоящий пассивный залог: is + delivered."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "These old clothes ____ to charity every six months.",
            correctAnswer: "are donated",
            options: ["are donated", "is donated", "donate", "donated"],
            correctFeedback: "Right! 'Are donated' is correct because 'clothes' is plural. Passive is used here because who donates them isn't important — the action itself is the focus.",
            correctFeedbackRu: "Правильно! 'Are donated' верно, потому что 'clothes' — множественное число. Пассивный залог используется, потому что кто жертвует — неважно; важно само действие.",
            incorrectFeedback: "Think again! 'Clothes' is plural → 'are donated'. 'Donated' alone is past simple active. The structure you need is: are + donated.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Clothes' — множественное число → 'are donated'. 'Donated' само по себе — прошедшее простое активное. Нужная структура: are + donated."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The broken street lamp ____ by the city council within 24 hours.",
            correctAnswer: "is repaired",
            options: ["is repaired", "are repaired", "repairs", "repaired"],
            correctFeedback: "Correct! 'Is repaired' is right because 'the broken street lamp' is singular. 'By the city council' is the agent — it tells us who does the repairing.",
            correctFeedbackRu: "Правильно! 'Is repaired' верно, потому что 'the broken street lamp' — единственное число. 'By the city council' — агент, который говорит нам, кто делает ремонт.",
            incorrectFeedback: "Not quite! 'The lamp' is singular → 'is repaired'. When the agent is mentioned, use 'by + agent'. 'Repaired' alone is past simple.",
            incorrectFeedbackRu: "Не совсем! 'The lamp' — единственное число → 'is repaired'. Когда агент упоминается, используйте 'by + агент'. 'Repaired' само по себе — прошедшее простое."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Newspapers ____ at the door of each flat in our building.",
            correctAnswer: "are left",
            options: ["are left", "is left", "leaves", "left"],
            correctFeedback: "Right! 'Are left' is correct because 'newspapers' is plural. 'Leave' is irregular: leave → left. Present passive: are + left.",
            correctFeedbackRu: "Правильно! 'Are left' верно, потому что 'newspapers' — множественное число. 'Leave' — неправильный глагол: leave → left. Настоящий пассивный залог: are + left.",
            incorrectFeedback: "Try again! 'Newspapers' is plural → 'are left'. 'Left' alone could be past simple active. Adding 'are' makes it present passive: are + left.",
            incorrectFeedbackRu: "Попробуйте ещё раз! 'Newspapers' — множественное число → 'are left'. 'Left' само по себе может быть прошедшим простым активным. Добавление 'are' делает его настоящим пассивным: are + left."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "This car ____ by my whole family, not just by me.",
            correctAnswer: "is shared",
            options: ["is shared", "are shared", "shares", "sharing"],
            correctFeedback: "Correct! 'Is shared' is right because 'this car' is singular. The agent 'by my whole family' explains who uses it. Passive focuses on the car, not the family.",
            correctFeedbackRu: "Правильно! 'Is shared' верно, потому что 'this car' — единственное число. Агент 'by my whole family' объясняет, кто его использует. Пассивный залог фокусируется на автомобиле, а не на семье.",
            incorrectFeedback: "Think again! 'This car' is singular → 'is shared'. 'Sharing' without 'is' can't be the main verb. For present passive: is + shared.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'This car' — единственное число → 'is shared'. 'Sharing' без 'is' не может быть главным глаголом. Для настоящего пассивного залога: is + shared."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The lawns in the park ____ twice a week during summer.",
            correctAnswer: "are mowed",
            options: ["are mowed", "is mowed", "mows", "mowed"],
            correctFeedback: "Right! 'Are mowed' is correct because 'the lawns' is plural. 'During summer' tells us the season. Present passive: are + mowed.",
            correctFeedbackRu: "Правильно! 'Are mowed' верно, потому что 'the lawns' — множественное число. 'During summer' говорит нам о сезоне. Настоящий пассивный залог: are + mowed.",
            incorrectFeedback: "Not quite! 'Lawns' is plural → 'are mowed'. 'Mowed' alone is past simple. You need the auxiliary 'are' to form present passive: are + mowed.",
            incorrectFeedbackRu: "Не совсем! 'Lawns' — множественное число → 'are mowed'. 'Mowed' само по себе — прошедшее простое. Нужен вспомогательный глагол 'are' для образования настоящего пассивного: are + mowed."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The class register ____ at the start of every lesson.",
            correctAnswer: "is taken",
            options: ["is taken", "are taken", "takes", "taken"],
            correctFeedback: "Correct! 'Is taken' is right because 'the class register' is singular. 'Take' is irregular: take → taken. Present passive: is + taken.",
            correctFeedbackRu: "Правильно! 'Is taken' верно, потому что 'the class register' — единственное число. 'Take' — неправильный глагол: take → taken. Настоящий пассивный залог: is + taken.",
            incorrectFeedback: "Try again! 'The class register' is singular → 'is taken'. 'Taken' alone is the past participle of 'take', but without 'is' it's not passive. You need: is + taken.",
            incorrectFeedbackRu: "Попробуйте ещё раз! 'The class register' — единственное число → 'is taken'. 'Taken' само по себе — причастие прошедшего времени от 'take', но без 'is' это не пассивный залог. Нужно: is + taken."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Hot meals ____ to elderly people in the village every day.",
            correctAnswer: "are brought",
            options: ["are brought", "is brought", "brings", "brought"],
            correctFeedback: "Right! 'Are brought' is correct because 'hot meals' is plural. 'Bring' is irregular: bring → brought. The passive 'are brought to' focuses on the meals, not the volunteers who bring them.",
            correctFeedbackRu: "Правильно! 'Are brought' верно, потому что 'hot meals' — множественное число. 'Bring' — неправильный глагол: bring → brought. Пассивное 'are brought to' фокусируется на блюдах, а не на волонтёрах.",
            incorrectFeedback: "Think again! 'Hot meals' is plural → 'are brought'. 'Bring' is irregular: bring → brought. 'Brought' alone is past simple active — you need 'are' to make it passive.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Hot meals' — множественное число → 'are brought'. 'Bring' — неправильный глагол: bring → brought. 'Brought' само по себе — прошедшее простое активное — нужно 'are', чтобы сделать его пассивным."
        }
    ]
};

/* ============================================
Page 2: Present Passive - Fill in the Gaps - Work and Business
============================================ */
window.grammarExercises['passive']['present-passive-gap-page2'] = {
    title: "Present Passive - Work and Business",
    fillGaps: [
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "All new employees ____ a contract on their first day.",
            correctAnswer: "are given",
            options: ["are given", "is given", "gives", "give"],
            correctFeedback: "Correct! 'Are given' is right because 'all new employees' is plural. Active: 'The company gives employees a contract' → Passive: 'Employees are given a contract'. The indirect object becomes the subject.",
            correctFeedbackRu: "Правильно! 'Are given' верно, потому что 'all new employees' — множественное число. Активный: 'The company gives employees a contract' → Пассивный: 'Employees are given a contract'. Косвенное дополнение становится подлежащим.",
            incorrectFeedback: "Not quite! 'Employees' is plural → 'are given'. Active verb 'gives/give' doesn't work in a passive sentence — the subject receives the action here.",
            incorrectFeedbackRu: "Не совсем! 'Employees' — множественное число → 'are given'. Активный глагол 'gives/give' не работает в пассивном предложении — здесь подлежащее получает действие."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The quarterly budget ____ at the end of each month.",
            correctAnswer: "is reviewed",
            options: ["is reviewed", "are reviewed", "reviews", "reviewed"],
            correctFeedback: "Right! 'Is reviewed' is correct because 'the quarterly budget' is singular. 'At the end of each month' shows regularity. Passive is used because the finance team who reviews it isn't important.",
            correctFeedbackRu: "Правильно! 'Is reviewed' верно, потому что 'the quarterly budget' — единственное число. 'At the end of each month' показывает регулярность. Пассивный залог используется, потому что финансовая команда неважна.",
            incorrectFeedback: "Think again! 'The budget' is singular → 'is reviewed'. 'Reviewed' alone is past simple. For present passive: is + reviewed.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'The budget' — единственное число → 'is reviewed'. 'Reviewed' само по себе — прошедшее простое. Для настоящего пассивного залога: is + reviewed."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Performance reviews ____ twice a year in this company.",
            correctAnswer: "are conducted",
            options: ["are conducted", "is conducted", "conducts", "conducted"],
            correctFeedback: "Correct! 'Are conducted' is right because 'performance reviews' is plural. HR conducts them (active), but the reviews are the focus here (passive).",
            correctFeedbackRu: "Правильно! 'Are conducted' верно, потому что 'performance reviews' — множественное число. HR проводит их (активный), но здесь в центре внимания сами обзоры (пассивный).",
            incorrectFeedback: "Try again! 'Performance reviews' is plural → 'are conducted'. 'Conducted' alone is past simple active. Present passive requires: are + conducted.",
            incorrectFeedbackRu: "Попробуйте ещё раз! 'Performance reviews' — множественное число → 'are conducted'. 'Conducted' само по себе — прошедшее простое активное. Настоящий пассивный залог требует: are + conducted."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Customer feedback ____ seriously by the management team.",
            correctAnswer: "is taken",
            options: ["is taken", "are taken", "takes", "taking"],
            correctFeedback: "Right! 'Is taken' is correct because 'customer feedback' is uncountable and singular. 'Take' is irregular: take → taken. The agent 'by the management team' tells us who takes it seriously.",
            correctFeedbackRu: "Правильно! 'Is taken' верно, потому что 'customer feedback' — несчитаемое и единственное число. 'Take' — неправильный глагол: take → taken. Агент 'by the management team' говорит нам, кто принимает это всерьёз.",
            incorrectFeedback: "Not quite! 'Feedback' is uncountable/singular → 'is taken'. 'Taking' without 'is' can't be the main verb. Present passive: is + taken.",
            incorrectFeedbackRu: "Не совсем! 'Feedback' — несчитаемое/единственное число → 'is taken'. 'Taking' без 'is' не может быть главным глаголом. Настоящий пассивный залог: is + taken."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Invoices ____ to clients within three business days.",
            correctAnswer: "are sent",
            options: ["are sent", "is sent", "sends", "send"],
            correctFeedback: "Correct! 'Are sent' is right because 'invoices' is plural. 'Send' is irregular: send → sent. Present passive: are + sent. This describes a standard business process.",
            correctFeedbackRu: "Правильно! 'Are sent' верно, потому что 'invoices' — множественное число. 'Send' — неправильный глагол: send → sent. Настоящий пассивный залог: are + sent. Это описывает стандартный бизнес-процесс.",
            incorrectFeedback: "Think again! 'Invoices' is plural → 'are sent'. 'Send' is irregular: send → sent. Active verbs 'sends/send' don't work in a passive sentence with this subject.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Invoices' — множественное число → 'are sent'. 'Send' — неправильный глагол: send → sent. Активные глаголы 'sends/send' не работают в пассивном предложении с этим подлежащим."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The company's products ____ to more than 50 countries worldwide.",
            correctAnswer: "are exported",
            options: ["are exported", "is exported", "exports", "exported"],
            correctFeedback: "Right! 'Are exported' is correct because 'the company's products' is plural. This is a factual statement about international trade. Passive is natural because who exports them is less important than the fact of exporting.",
            correctFeedbackRu: "Правильно! 'Are exported' верно, потому что 'the company's products' — множественное число. Это фактическое утверждение о международной торговле. Пассивный залог естественен, потому что кто экспортирует менее важно, чем сам факт экспорта.",
            incorrectFeedback: "Try again! 'Products' is plural → 'are exported'. 'Exported' alone is past simple. You need both parts: are + exported.",
            incorrectFeedbackRu: "Попробуйте ещё раз! 'Products' — множественное число → 'are exported'. 'Exported' само по себе — прошедшее простое. Нужны обе части: are + exported."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Staff meetings ____ every Monday morning before work starts.",
            correctAnswer: "are held",
            options: ["are held", "is held", "holds", "holding"],
            correctFeedback: "Correct! 'Are held' is right because 'staff meetings' is plural. 'Hold' is irregular: hold → held. Present passive: are + held. This describes a regular workplace routine.",
            correctFeedbackRu: "Правильно! 'Are held' верно, потому что 'staff meetings' — множественное число. 'Hold' — неправильный глагол: hold → held. Настоящий пассивный залог: are + held. Это описывает регулярную рабочую рутину.",
            incorrectFeedback: "Not quite! 'Meetings' is plural → 'are held'. 'Hold' is irregular: hold → held. 'Holding' without 'are' can't be the main verb. Use: are + held.",
            incorrectFeedbackRu: "Не совсем! 'Meetings' — множественное число → 'are held'. 'Hold' — неправильный глагол: hold → held. 'Holding' без 'are' не может быть главным глаголом. Используйте: are + held."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Sensitive company data ____ with advanced encryption software.",
            correctAnswer: "is protected",
            options: ["is protected", "are protected", "protects", "protecting"],
            correctFeedback: "Right! 'Is protected' is correct because 'sensitive company data' is uncountable and singular. The method 'with advanced encryption software' tells us how the protection works.",
            correctFeedbackRu: "Правильно! 'Is protected' верно, потому что 'sensitive company data' — несчитаемое и единственное число. Метод 'with advanced encryption software' говорит нам, как работает защита.",
            incorrectFeedback: "Think again! 'Data' is uncountable/singular → 'is protected'. 'Protecting' without 'is' is an -ing form and can't be the main verb here.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Data' — несчитаемое/единственное число → 'is protected'. 'Protecting' без 'is' — -ing форма и не может быть главным глаголом здесь."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Workplace accidents ____ immediately to the health and safety officer.",
            correctAnswer: "are reported",
            options: ["are reported", "is reported", "reports", "reported"],
            correctFeedback: "Correct! 'Are reported' is right because 'workplace accidents' is plural. This describes an obligation — accidents must be reported. Passive is common for rules and requirements.",
            correctFeedbackRu: "Правильно! 'Are reported' верно, потому что 'workplace accidents' — множественное число. Это описывает обязательство — аварии должны быть зарегистрированы. Пассивный залог распространён для правил и требований.",
            incorrectFeedback: "Not quite! 'Accidents' is plural → 'are reported'. 'Reported' alone is past simple. For present passive you need: are + reported.",
            incorrectFeedbackRu: "Не совсем! 'Accidents' — множественное число → 'are reported'. 'Reported' само по себе — прошедшее простое. Для настоящего пассивного залога нужно: are + reported."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The office building ____ cleaned and inspected every weekend.",
            correctAnswer: "is",
            options: ["is", "are", "was", "has"],
            correctFeedback: "Correct! The full form is 'is cleaned' — 'the office building' is singular, so we use 'is'. The word 'cleaned' is already in the sentence. Only the auxiliary 'is' is missing.",
            correctFeedbackRu: "Правильно! Полная форма — 'is cleaned' — 'the office building' — единственное число, поэтому используем 'is'. Слово 'cleaned' уже есть в предложении. Только вспомогательный глагол 'is' отсутствует.",
            incorrectFeedback: "Not quite! The sentence needs the auxiliary verb: 'The office building ___ cleaned'. 'Building' is singular → 'is'. Complete passive: is + cleaned.",
            incorrectFeedbackRu: "Не совсем! Предложению нужен вспомогательный глагол: 'The office building ___ cleaned'. 'Building' — единственное число → 'is'. Полный пассивный залог: is + cleaned."
        }
    ]
};

/* ============================================
Page 3: Present Passive - Fill in the Gaps - Food and Cooking
============================================ */
window.grammarExercises['passive']['present-passive-gap-page3'] = {
    title: "Present Passive - Food and Cooking",
    fillGaps: [
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The soup ____ with fresh herbs before it is served.",
            correctAnswer: "is seasoned",
            options: ["is seasoned", "are seasoned", "seasons", "seasoning"],
            correctFeedback: "Correct! 'Is seasoned' is right because 'the soup' is singular. In recipes and cooking descriptions, passive is very common. Active: 'The cook seasons the soup' → Passive: 'The soup is seasoned'.",
            correctFeedbackRu: "Правильно! 'Is seasoned' верно, потому что 'the soup' — единственное число. В рецептах и описаниях кулинарии пассивный залог очень распространён. Активный: 'The cook seasons the soup' → Пассивный: 'The soup is seasoned'.",
            incorrectFeedback: "Try again! 'The soup' is singular → 'is seasoned'. 'Seasoning' without 'is' is an -ing form. Present passive: is + seasoned.",
            incorrectFeedbackRu: "Попробуйте ещё раз! 'The soup' — единственное число → 'is seasoned'. 'Seasoning' без 'is' — -ing форма. Настоящий пассивный залог: is + seasoned."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The fish ____ in salt and lemon for about 30 minutes.",
            correctAnswer: "is marinated",
            options: ["is marinated", "are marinated", "marinates", "marinated"],
            correctFeedback: "Right! 'Is marinated' is correct because 'the fish' is singular. The time detail '30 minutes' shows how long the process takes. Cooking processes are typically described in passive.",
            correctFeedbackRu: "Правильно! 'Is marinated' верно, потому что 'the fish' — единственное число. Деталь времени '30 minutes' показывает, сколько длится процесс. Кулинарные процессы обычно описываются в пассивном залоге.",
            incorrectFeedback: "Not quite! 'The fish' is singular → 'is marinated'. 'Marinated' alone is past simple. You need both parts: is + marinated.",
            incorrectFeedbackRu: "Не совсем! 'The fish' — единственное число → 'is marinated'. 'Marinated' само по себе — прошедшее простое. Нужны обе части: is + marinated."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The pastries ____ in a wood-fired oven to give them a special flavour.",
            correctAnswer: "are baked",
            options: ["are baked", "is baked", "bakes", "baked"],
            correctFeedback: "Correct! 'Are baked' is right because 'the pastries' is plural. The reason 'to give them a special flavour' explains why this method is used. Passive focuses on the pastries, not on the baker.",
            correctFeedbackRu: "Правильно! 'Are baked' верно, потому что 'the pastries' — множественное число. Причина 'to give them a special flavour' объясняет, зачем используется этот метод. Пассивный залог фокусируется на выпечке, а не на пекаре.",
            incorrectFeedback: "Think again! 'Pastries' is plural → 'are baked'. 'Baked' alone is past simple. For present passive you need: are + baked.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Pastries' — множественное число → 'are baked'. 'Baked' само по себе — прошедшее простое. Для настоящего пассивного залога нужно: are + baked."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Rice ____ as a side dish with most meals in this restaurant.",
            correctAnswer: "is served",
            options: ["is served", "are served", "serves", "served"],
            correctFeedback: "Right! 'Is served' is correct because 'rice' is uncountable and singular. Restaurant descriptions often use passive: 'is served with', 'is prepared with', 'is cooked in'.",
            correctFeedbackRu: "Правильно! 'Is served' верно, потому что 'rice' — несчитаемое и единственное число. Ресторанные описания часто используют пассивный залог: 'is served with', 'is prepared with', 'is cooked in'.",
            incorrectFeedback: "Not quite! 'Rice' is uncountable/singular → 'is served'. 'Served' alone is past simple. The auxiliary 'is' is needed to form present passive.",
            incorrectFeedbackRu: "Не совсем! 'Rice' — несчитаемое/единственное число → 'is served'. 'Served' само по себе — прошедшее простое. Вспомогательный глагол 'is' необходим для образования настоящего пассивного залога."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Olives ____ from the trees by hand every autumn.",
            correctAnswer: "are picked",
            options: ["are picked", "is picked", "picks", "picking"],
            correctFeedback: "Correct! 'Are picked' is right because 'olives' is plural. The season 'every autumn' shows this is a regular annual activity. Passive focuses on the olives, not the pickers.",
            correctFeedbackRu: "Правильно! 'Are picked' верно, потому что 'olives' — множественное число. Сезон 'every autumn' показывает, что это регулярное ежегодное занятие. Пассивный залог фокусируется на оливках, а не на сборщиках.",
            incorrectFeedback: "Try again! 'Olives' is plural → 'are picked'. 'Picking' without 'are' can't be the main verb. Present passive: are + picked.",
            incorrectFeedbackRu: "Попробуйте ещё раз! 'Olives' — множественное число → 'are picked'. 'Picking' без 'are' не может быть главным глаголом. Настоящий пассивный залог: are + picked."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "This cheese ____ in a special cave for at least six months.",
            correctAnswer: "is stored",
            options: ["is stored", "are stored", "stores", "stored"],
            correctFeedback: "Right! 'Is stored' is correct because 'this cheese' is singular. The location 'in a special cave' and the duration 'for at least six months' give details about the storage process.",
            correctFeedbackRu: "Правильно! 'Is stored' верно, потому что 'this cheese' — единственное число. Место 'in a special cave' и продолжительность 'for at least six months' дают подробности о процессе хранения.",
            incorrectFeedback: "Not quite! 'This cheese' is singular → 'is stored'. 'Stored' alone is past simple. For present passive: is + stored.",
            incorrectFeedbackRu: "Не совсем! 'This cheese' — единственное число → 'is stored'. 'Stored' само по себе — прошедшее простое. Для настоящего пассивного залога: is + stored."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The ingredients ____ carefully before they are added to the mixture.",
            correctAnswer: "are measured",
            options: ["are measured", "is measured", "measures", "measured"],
            correctFeedback: "Correct! 'Are measured' is right because 'the ingredients' is plural. 'Before they are added' shows the sequence of steps in a recipe. Both verbs in this sentence are passive.",
            correctFeedbackRu: "Правильно! 'Are measured' верно, потому что 'the ingredients' — множественное число. 'Before they are added' показывает последовательность шагов в рецепте. Оба глагола в этом предложении пассивные.",
            incorrectFeedback: "Think again! 'Ingredients' is plural → 'are measured'. 'Measured' alone is past simple. The complete present passive is: are + measured.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Ingredients' — множественное число → 'are measured'. 'Measured' само по себе — прошедшее простое. Полный настоящий пассивный залог: are + measured."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The bread dough ____ for about an hour before baking.",
            correctAnswer: "is left",
            options: ["is left", "are left", "leaves", "left"],
            correctFeedback: "Right! 'Is left' is correct because 'the bread dough' is singular and uncountable. 'For about an hour' tells us the duration. This is a typical cooking instruction in passive.",
            correctFeedbackRu: "Правильно! 'Is left' верно, потому что 'the bread dough' — единственное число и несчитаемое. 'For about an hour' говорит нам о продолжительности. Это типичная кулинарная инструкция в пассивном залоге.",
            incorrectFeedback: "Not quite! 'The bread dough' is singular → 'is left'. 'Left' alone is ambiguous. 'Is' + left makes it clearly present passive.",
            incorrectFeedbackRu: "Не совсем! 'The bread dough' — единственное число → 'is left'. 'Left' само по себе неоднозначно. 'Is' + left делает его явно настоящим пассивным залогом."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "All dishes in this restaurant ____ with locally grown produce.",
            correctAnswer: "are prepared",
            options: ["are prepared", "is prepared", "prepare", "preparing"],
            correctFeedback: "Correct! 'Are prepared' is right because 'all dishes' is plural. The detail 'with locally grown produce' tells us what ingredients are used. This is typical restaurant menu language.",
            correctFeedbackRu: "Правильно! 'Are prepared' верно, потому что 'all dishes' — множественное число. Деталь 'with locally grown produce' говорит нам, какие ингредиенты используются. Это типичный язык ресторанного меню.",
            incorrectFeedback: "Try again! 'All dishes' is plural → 'are prepared'. 'Preparing' without 'are' can't be the main verb. Present passive: are + prepared.",
            incorrectFeedbackRu: "Попробуйте ещё раз! 'All dishes' — множественное число → 'are prepared'. 'Preparing' без 'are' не может быть главным глаголом. Настоящий пассивный залог: are + prepared."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The salad dressing ____ separately so customers can add it themselves.",
            correctAnswer: "is served",
            options: ["is served", "are served", "serves", "serving"],
            correctFeedback: "Right! 'Is served' is correct because 'the salad dressing' is singular. The reason 'so customers can add it themselves' explains why. Passive is used because who serves it isn't important.",
            correctFeedbackRu: "Правильно! 'Is served' верно, потому что 'the salad dressing' — единственное число. Причина 'so customers can add it themselves' объясняет, почему. Пассивный залог используется, потому что кто подаёт — неважно.",
            incorrectFeedback: "Not quite! 'The salad dressing' is singular → 'is served'. 'Serving' without 'is' is an -ing form. Present passive: is + served.",
            incorrectFeedbackRu: "Не совсем! 'The salad dressing' — единственное число → 'is served'. 'Serving' без 'is' — -ing форма. Настоящий пассивный залог: is + served."
        }
    ]
};

/* ============================================
Page 4: Present Passive - Fill in the Gaps - Education
============================================ */
window.grammarExercises['passive']['present-passive-gap-page4'] = {
    title: "Present Passive - Education",
    fillGaps: [
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The exam papers ____ alphabetically before they are marked.",
            correctAnswer: "are sorted",
            options: ["are sorted", "is sorted", "sorts", "sorted"],
            correctFeedback: "Correct! 'Are sorted' is right because 'the exam papers' is plural. The adverb 'alphabetically' tells us how. Two passive verbs appear in this sentence: 'are sorted' and 'are marked'.",
            correctFeedbackRu: "Правильно! 'Are sorted' верно, потому что 'the exam papers' — множественное число. Наречие 'alphabetically' говорит нам, как. В этом предложении два пассивных глагола: 'are sorted' и 'are marked'.",
            incorrectFeedback: "Think again! 'Exam papers' is plural → 'are sorted'. 'Sorted' alone is past simple. For present passive: are + sorted.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Exam papers' — множественное число → 'are sorted'. 'Sorted' само по себе — прошедшее простое. Для настоящего пассивного залога: are + sorted."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Students' progress ____ by teachers every week using online tools.",
            correctAnswer: "is tracked",
            options: ["is tracked", "are tracked", "tracks", "tracked"],
            correctFeedback: "Right! 'Is tracked' is correct because 'students' progress' is singular. The agent 'by teachers' and the method 'using online tools' give additional details.",
            correctFeedbackRu: "Правильно! 'Is tracked' верно, потому что 'students' progress' — единственное число. Агент 'by teachers' и метод 'using online tools' дают дополнительные детали.",
            incorrectFeedback: "Not quite! 'Progress' is singular → 'is tracked'. 'Tracked' alone is past simple. Present passive: is + tracked.",
            incorrectFeedbackRu: "Не совсем! 'Progress' — единственное число → 'is tracked'. 'Tracked' само по себе — прошедшее простое. Настоящий пассивный залог: is + tracked."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Certificates ____ to students who pass all their exams.",
            correctAnswer: "are awarded",
            options: ["are awarded", "is awarded", "awards", "awarded"],
            correctFeedback: "Correct! 'Are awarded' is right because 'certificates' is plural. This is a passive with an indirect object — students receive the certificates. 'Who pass all their exams' tells us who qualifies.",
            correctFeedbackRu: "Правильно! 'Are awarded' верно, потому что 'certificates' — множественное число. Это пассивный залог с косвенным дополнением — студенты получают сертификаты. 'Who pass all their exams' говорит нам, кто имеет право.",
            incorrectFeedback: "Think again! 'Certificates' is plural → 'are awarded'. 'Awarded' alone is past simple. Present passive: are + awarded.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Certificates' — множественное число → 'are awarded'. 'Awarded' само по себе — прошедшее простое. Настоящий пассивный залог: are + awarded."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Foreign students ____ extra support with the language during their first term.",
            correctAnswer: "are offered",
            options: ["are offered", "is offered", "offers", "offer"],
            correctFeedback: "Right! 'Are offered' is correct because 'foreign students' is plural. This passive structure means the school provides language support for students. 'Are offered' = 'someone offers them'.",
            correctFeedbackRu: "Правильно! 'Are offered' верно, потому что 'foreign students' — множественное число. Эта пассивная структура означает, что школа предоставляет языковую поддержку студентам. 'Are offered' = 'кто-то предлагает им'.",
            incorrectFeedback: "Not quite! 'Foreign students' is plural → 'are offered'. Active verbs 'offers/offer' don't work here — the subject receives the action in a passive sentence.",
            incorrectFeedbackRu: "Не совсем! 'Foreign students' — множественное число → 'are offered'. Активные глаголы 'offers/offer' здесь не работают — подлежащее получает действие в пассивном предложении."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "A school bus ____ to transport students from the nearby villages.",
            correctAnswer: "is used",
            options: ["is used", "are used", "uses", "using"],
            correctFeedback: "Correct! 'Is used' is right because 'a school bus' is singular. The infinitive 'to transport' explains the purpose. Active: 'The school uses a bus' → Passive: 'A bus is used to transport students'.",
            correctFeedbackRu: "Правильно! 'Is used' верно, потому что 'a school bus' — единственное число. Инфинитив 'to transport' объясняет цель. Активный: 'The school uses a bus' → Пассивный: 'A bus is used to transport students'.",
            incorrectFeedback: "Think again! 'A school bus' is singular → 'is used'. 'Using' without 'is' can't be the main verb. Present passive: is + used.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'A school bus' — единственное число → 'is used'. 'Using' без 'is' не может быть главным глаголом. Настоящий пассивный залог: is + used."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The school gym ____ for community events on weekends.",
            correctAnswer: "is rented out",
            options: ["is rented out", "are rented out", "rents out", "rented out"],
            correctFeedback: "Right! 'Is rented out' is correct because 'the school gym' is singular. Phrasal verbs stay together in passive — 'rent out' → 'is rented out'. Don't drop 'out'.",
            correctFeedbackRu: "Правильно! 'Is rented out' верно, потому что 'the school gym' — единственное число. Фразовые глаголы остаются вместе в пассивном залоге — 'rent out' → 'is rented out'. Не теряйте 'out'.",
            incorrectFeedback: "Not quite! 'The school gym' is singular → 'is rented out'. Phrasal verbs keep all their parts in passive: 'rent out' → 'is rented out'. 'Rented out' alone is past simple.",
            incorrectFeedbackRu: "Не совсем! 'The school gym' — единственное число → 'is rented out'. Фразовые глаголы сохраняют все свои части в пассивном залоге: 'rent out' → 'is rented out'. 'Rented out' само по себе — прошедшее простое."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "All written assignments ____ through special software to check for plagiarism.",
            correctAnswer: "are run",
            options: ["are run", "is run", "runs", "run"],
            correctFeedback: "Correct! 'Are run' is right because 'all written assignments' is plural. 'Run' is irregular — the past participle is the same as the base form: run → run. In passive: are + run.",
            correctFeedbackRu: "Правильно! 'Are run' верно, потому что 'all written assignments' — множественное число. 'Run' — неправильный глагол — причастие прошедшего времени совпадает с основной формой: run → run. В пассивном залоге: are + run.",
            incorrectFeedback: "Not quite! 'Assignments' is plural → 'are run'. 'Run' is irregular — it doesn't change (run → run). Present passive: are + run.",
            incorrectFeedbackRu: "Не совсем! 'Assignments' — множественное число → 'are run'. 'Run' — неправильный глагол — он не меняется (run → run). Настоящий пассивный залог: are + run."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The science laboratory ____ with the latest equipment every few years.",
            correctAnswer: "is equipped",
            options: ["is equipped", "are equipped", "equips", "equipping"],
            correctFeedback: "Right! 'Is equipped' is correct because 'the science laboratory' is singular. 'Every few years' shows this is an infrequent but regular update. Passive is used because the focus is on the lab.",
            correctFeedbackRu: "Правильно! 'Is equipped' верно, потому что 'the science laboratory' — единственное число. 'Every few years' показывает, что это нечастое, но регулярное обновление. Пассивный залог используется, потому что фокус на лаборатории.",
            incorrectFeedback: "Think again! 'The science laboratory' is singular → 'is equipped'. 'Equipping' without 'is' can't be the main verb. Present passive: is + equipped.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'The science laboratory' — единственное число → 'is equipped'. 'Equipping' без 'is' не может быть главным глаголом. Настоящий пассивный залог: is + equipped."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Revision notes ____ to all students before the final examination period.",
            correctAnswer: "are distributed",
            options: ["are distributed", "is distributed", "distributes", "distributed"],
            correctFeedback: "Correct! 'Are distributed' is right because 'revision notes' is plural. 'Before the final examination period' shows when this happens. Active: 'The teacher distributes notes' → Passive: 'Notes are distributed to students'.",
            correctFeedbackRu: "Правильно! 'Are distributed' верно, потому что 'revision notes' — множественное число. 'Before the final examination period' показывает, когда это происходит. Активный: 'The teacher distributes notes' → Пассивный: 'Notes are distributed to students'.",
            incorrectFeedback: "Not quite! 'Revision notes' is plural → 'are distributed'. 'Distributed' alone is past simple. For present passive: are + distributed.",
            incorrectFeedbackRu: "Не совсем! 'Revision notes' — множественное число → 'are distributed'. 'Distributed' само по себе — прошедшее простое. Для настоящего пассивного залога: are + distributed."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The school library ____ updated with new books every term.",
            correctAnswer: "is",
            options: ["is", "are", "was", "be"],
            correctFeedback: "Right! The full form is 'is updated' — 'the school library' is singular, so we use 'is'. The word 'updated' is already in the sentence. Only the auxiliary 'is' is missing.",
            correctFeedbackRu: "Правильно! Полная форма — 'is updated' — 'the school library' — единственное число, поэтому используем 'is'. Слово 'updated' уже есть в предложении. Только вспомогательный глагол 'is' отсутствует.",
            incorrectFeedback: "Not quite! The sentence needs the auxiliary verb: 'The school library ___ updated'. 'Library' is singular → 'is'. Complete passive: is + updated.",
            incorrectFeedbackRu: "Не совсем! Предложению нужен вспомогательный глагол: 'The school library ___ updated'. 'Library' — единственное число → 'is'. Полный пассивный залог: is + updated."
        }
    ]
};

/* ============================================
Page 5: Present Passive - Fill in the Gaps - Rules and Signs
============================================ */
window.grammarExercises['passive']['present-passive-gap-page5'] = {
    title: "Present Passive - Rules and Signs",
    fillGaps: [
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Alcohol ____ only to people over 18 years old.",
            correctAnswer: "is sold",
            options: ["is sold", "are sold", "sells", "sold"],
            correctFeedback: "Correct! 'Is sold' is right because 'alcohol' is uncountable and singular. This is a legal rule. Passive is commonly used for laws and regulations.",
            correctFeedbackRu: "Правильно! 'Is sold' верно, потому что 'alcohol' — несчитаемое и единственное число. Это юридическое правило. Пассивный залог обычно используется для законов и правил.",
            incorrectFeedback: "Think again! 'Alcohol' is uncountable/singular → 'is sold'. 'Sold' alone is past simple. For present passive: is + sold.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Alcohol' — несчитаемое/единственное число → 'is sold'. 'Sold' само по себе — прошедшее простое. Для настоящего пассивного залога: is + sold."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Cars ____ on this street between 8 am and 6 pm.",
            correctAnswer: "are not allowed",
            options: ["are not allowed", "is not allowed", "not allow", "not allows"],
            correctFeedback: "Right! 'Are not allowed' is correct because 'cars' is plural. For negative passive: subject + are + not + past participle. This is a typical traffic restriction sign.",
            correctFeedbackRu: "Правильно! 'Are not allowed' верно, потому что 'cars' — множественное число. Для отрицательного пассивного залога: подлежащее + are + not + причастие прошедшего времени. Это типичный знак ограничения дорожного движения.",
            incorrectFeedback: "Not quite! 'Cars' is plural → 'are not allowed'. Negative passive: are + not + past participle. Active verbs 'not allow/not allows' don't work in passive sentences.",
            incorrectFeedbackRu: "Не совсем! 'Cars' — множественное число → 'are not allowed'. Отрицательный пассивный залог: are + not + причастие прошедшего времени. Активные глаголы 'not allow/not allows' не работают в пассивных предложениях."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Visitors ____ to register at the reception desk on arrival.",
            correctAnswer: "are required",
            options: ["are required", "is required", "require", "requiring"],
            correctFeedback: "Correct! 'Are required' is right because 'visitors' is plural. 'Are required to + infinitive' is a formal passive structure meaning visitors must register.",
            correctFeedbackRu: "Правильно! 'Are required' верно, потому что 'visitors' — множественное число. 'Are required to + инфинитив' — формальная пассивная структура, означающая, что посетители должны зарегистрироваться.",
            incorrectFeedback: "Think again! 'Visitors' is plural → 'are required'. 'Requiring' without 'are' can't be the main verb. Present passive: are + required.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Visitors' — множественное число → 'are required'. 'Requiring' без 'are' не может быть главным глаголом. Настоящий пассивный залог: are + required."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Noise complaints ____ seriously by the building management.",
            correctAnswer: "are taken",
            options: ["are taken", "is taken", "takes", "taking"],
            correctFeedback: "Right! 'Are taken' is correct because 'noise complaints' is plural. 'Take seriously' → 'are taken seriously'. The agent 'by the building management' tells us who handles the complaints.",
            correctFeedbackRu: "Правильно! 'Are taken' верно, потому что 'noise complaints' — множественное число. 'Take seriously' → 'are taken seriously'. Агент 'by the building management' говорит нам, кто рассматривает жалобы.",
            incorrectFeedback: "Not quite! 'Noise complaints' is plural → 'are taken'. 'Taking' without 'are' is an -ing form. Present passive: are + taken.",
            incorrectFeedbackRu: "Не совсем! 'Noise complaints' — множественное число → 'are taken'. 'Taking' без 'are' — -ing форма. Настоящий пассивный залог: are + taken."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Safety helmets ____ at all times on this construction site.",
            correctAnswer: "are worn",
            options: ["are worn", "is worn", "wears", "wearing"],
            correctFeedback: "Correct! 'Are worn' is right because 'safety helmets' is plural. 'Wear' is irregular: wear → worn. This is a workplace safety rule expressed in passive.",
            correctFeedbackRu: "Правильно! 'Are worn' верно, потому что 'safety helmets' — множественное число. 'Wear' — неправильный глагол: wear → worn. Это правило охраны труда, выраженное в пассивном залоге.",
            incorrectFeedback: "Not quite! 'Safety helmets' is plural → 'are worn'. 'Wear' is irregular: wear → worn. 'Wearing' without 'are' can't be the main verb here.",
            incorrectFeedbackRu: "Не совсем! 'Safety helmets' — множественное число → 'are worn'. 'Wear' — неправильный глагол: wear → worn. 'Wearing' без 'are' не может быть главным глаголом здесь."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Pets ____ to enter the food hall of this supermarket.",
            correctAnswer: "are not permitted",
            options: ["are not permitted", "is not permitted", "not permit", "not permits"],
            correctFeedback: "Right! 'Are not permitted' is correct because 'pets' is plural. This is a typical supermarket rule. Negative passive for rules: are + not + past participle.",
            correctFeedbackRu: "Правильно! 'Are not permitted' верно, потому что 'pets' — множественное число. Это типичное правило супермаркета. Отрицательный пассивный залог для правил: are + not + причастие прошедшего времени.",
            incorrectFeedback: "Think again! 'Pets' is plural → 'are not permitted'. Active forms 'not permit/not permits' are wrong in passive sentences. Negative passive: are + not + permitted.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Pets' — множественное число → 'are not permitted'. Активные формы 'not permit/not permits' неверны в пассивных предложениях. Отрицательный пассивный залог: are + not + permitted."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The fire exit ____ clear of obstructions at all times.",
            correctAnswer: "is kept",
            options: ["is kept", "are kept", "keeps", "keeping"],
            correctFeedback: "Correct! 'Is kept' is right because 'the fire exit' is singular. 'Is kept + adjective' describes a maintained state: 'is kept clear' means someone always ensures it stays clear.",
            correctFeedbackRu: "Правильно! 'Is kept' верно, потому что 'the fire exit' — единственное число. 'Is kept + прилагательное' описывает поддерживаемое состояние: 'is kept clear' означает, что кто-то всегда обеспечивает его свободным.",
            incorrectFeedback: "Not quite! 'The fire exit' is singular → 'is kept'. 'Keeping' without 'is' can't be the main verb. Present passive: is + kept.",
            incorrectFeedbackRu: "Не совсем! 'The fire exit' — единственное число → 'is kept'. 'Keeping' без 'is' не может быть главным глаголом. Настоящий пассивный залог: is + kept."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Cash payments ____ in this shop. Please use a card.",
            correctAnswer: "are not accepted",
            options: ["are not accepted", "is not accepted", "not accept", "not accepts"],
            correctFeedback: "Right! 'Are not accepted' is correct because 'cash payments' is plural. This is a typical shop notice. Negative passive: are + not + accepted. The instruction 'Please use a card' gives an alternative.",
            correctFeedbackRu: "Правильно! 'Are not accepted' верно, потому что 'cash payments' — множественное число. Это типичное объявление в магазине. Отрицательный пассивный залог: are + not + accepted. Инструкция 'Please use a card' даёт альтернативу.",
            incorrectFeedback: "Think again! 'Cash payments' is plural → 'are not accepted'. Negative passive: are + not + past participle. 'Not accept/not accepts' are active — they don't work in a passive sentence.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Cash payments' — множественное число → 'are not accepted'. Отрицательный пассивный залог: are + not + причастие прошедшего времени. 'Not accept/not accepts' — активные — они не работают в пассивном предложении."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Litter ____ in designated bins only.",
            correctAnswer: "is disposed of",
            options: ["is disposed of", "are disposed of", "disposes of", "dispose of"],
            correctFeedback: "Correct! 'Is disposed of' is right because 'litter' is uncountable and singular. Phrasal verbs keep all parts in passive — 'dispose of' → 'is disposed of'. Don't drop the preposition 'of'.",
            correctFeedbackRu: "Правильно! 'Is disposed of' верно, потому что 'litter' — несчитаемое и единственное число. Фразовые глаголы сохраняют все части в пассивном залоге — 'dispose of' → 'is disposed of'. Не теряйте предлог 'of'.",
            incorrectFeedback: "Not quite! 'Litter' is uncountable/singular → 'is disposed of'. Phrasal verbs stay together in passive: 'dispose of' → 'is disposed of'. Don't forget the preposition 'of'.",
            incorrectFeedbackRu: "Не совсем! 'Litter' — несчитаемое/единственное число → 'is disposed of'. Фразовые глаголы остаются вместе в пассивном залоге: 'dispose of' → 'is disposed of'. Не забывайте предлог 'of'."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The speed limit ____ strictly enforced in this area at all times.",
            correctAnswer: "is",
            options: ["is", "are", "was", "be"],
            correctFeedback: "Right! The full form is 'is strictly enforced' — 'the speed limit' is singular, so we use 'is'. The word 'enforced' is already there; 'is' completes the passive structure.",
            correctFeedbackRu: "Правильно! Полная форма — 'is strictly enforced' — 'the speed limit' — единственное число, поэтому используем 'is'. Слово 'enforced' уже есть; 'is' завершает пассивную структуру.",
            incorrectFeedback: "Think again! 'The speed limit ___ strictly enforced' — you need the auxiliary verb. 'Limit' is singular → 'is'. Full passive: is + strictly enforced.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'The speed limit ___ strictly enforced' — нужен вспомогательный глагол. 'Limit' — единственное число → 'is'. Полный пассивный залог: is + strictly enforced."
        }
    ]
};

/* ============================================
Page 6: Present Passive - Fill in the Gaps - Health and Medicine
============================================ */
window.grammarExercises['passive']['present-passive-gap-page6'] = {
    title: "Present Passive - Health and Medicine",
    fillGaps: [
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Blood pressure ____ at every routine check-up.",
            correctAnswer: "is measured",
            options: ["is measured", "are measured", "measures", "measured"],
            correctFeedback: "Correct! 'Is measured' is right because 'blood pressure' is singular and uncountable. Routine medical procedures are typically described in passive. Active: 'The nurse measures blood pressure' → Passive: 'Blood pressure is measured'.",
            correctFeedbackRu: "Правильно! 'Is measured' верно, потому что 'blood pressure' — единственное число и несчитаемое. Рутинные медицинские процедуры обычно описываются в пассивном залоге. Активный: 'The nurse measures blood pressure' → Пассивный: 'Blood pressure is measured'.",
            incorrectFeedback: "Think again! 'Blood pressure' is singular/uncountable → 'is measured'. 'Measured' alone is past simple. Present passive: is + measured.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Blood pressure' — единственное число/несчитаемое → 'is measured'. 'Measured' само по себе — прошедшее простое. Настоящий пассивный залог: is + measured."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Flu vaccines ____ to high-risk groups free of charge each year.",
            correctAnswer: "are given",
            options: ["are given", "is given", "gives", "give"],
            correctFeedback: "Right! 'Are given' is correct because 'flu vaccines' is plural. 'Are given to high-risk groups' is a passive with an indirect object. Active: 'The health service gives vaccines to groups' → Passive: 'Vaccines are given to groups'.",
            correctFeedbackRu: "Правильно! 'Are given' верно, потому что 'flu vaccines' — множественное число. 'Are given to high-risk groups' — пассивный залог с косвенным дополнением. Активный: 'The health service gives vaccines to groups' → Пассивный: 'Vaccines are given to groups'.",
            incorrectFeedback: "Not quite! 'Flu vaccines' is plural → 'are given'. Active verbs 'gives/give' don't work in passive sentences where the subject receives the action.",
            incorrectFeedbackRu: "Не совсем! 'Flu vaccines' — множественное число → 'are given'. Активные глаголы 'gives/give' не работают в пассивных предложениях, где подлежащее получает действие."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Donations of blood ____ at this hospital 24 hours a day.",
            correctAnswer: "are accepted",
            options: ["are accepted", "is accepted", "accepts", "accepted"],
            correctFeedback: "Correct! 'Are accepted' is right because 'donations' is plural. '24 hours a day' shows this is a continuous service. Passive focuses on the donations and the process.",
            correctFeedbackRu: "Правильно! 'Are accepted' верно, потому что 'donations' — множественное число. '24 hours a day' показывает, что это непрерывная услуга. Пассивный залог фокусируется на пожертвованиях и процессе.",
            incorrectFeedback: "Think again! 'Donations' is plural → 'are accepted'. 'Accepted' alone is past simple. Present passive: are + accepted.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Donations' — множественное число → 'are accepted'. 'Accepted' само по себе — прошедшее простое. Настоящий пассивный залог: are + accepted."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The medical history of each patient ____ before any treatment begins.",
            correctAnswer: "is checked",
            options: ["is checked", "are checked", "checks", "checked"],
            correctFeedback: "Right! 'Is checked' is correct because 'the medical history' is singular. 'Before any treatment begins' shows the sequence. Active: 'Doctors check the history' → Passive: 'The history is checked'.",
            correctFeedbackRu: "Правильно! 'Is checked' верно, потому что 'the medical history' — единственное число. 'Before any treatment begins' показывает последовательность. Активный: 'Doctors check the history' → Пассивный: 'The history is checked'.",
            incorrectFeedback: "Not quite! 'The medical history' is singular → 'is checked'. 'Checked' alone is past simple. For present passive: is + checked.",
            incorrectFeedbackRu: "Не совсем! 'The medical history' — единственное число → 'is checked'. 'Checked' само по себе — прошедшее простое. Для настоящего пассивного залога: is + checked."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Operating theatres ____ thoroughly between each operation.",
            correctAnswer: "are cleaned",
            options: ["are cleaned", "is cleaned", "cleans", "cleaning"],
            correctFeedback: "Correct! 'Are cleaned' is right because 'operating theatres' is plural. 'Thoroughly' tells us how carefully this is done. Hospital hygiene is a typical context for present passive.",
            correctFeedbackRu: "Правильно! 'Are cleaned' верно, потому что 'operating theatres' — множественное число. 'Thoroughly' говорит нам, насколько тщательно это делается. Больничная гигиена — типичный контекст для настоящего пассивного залога.",
            incorrectFeedback: "Think again! 'Operating theatres' is plural → 'are cleaned'. 'Cleaning' without 'are' is an -ing form. Present passive: are + cleaned.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Operating theatres' — множественное число → 'are cleaned'. 'Cleaning' без 'are' — -ing форма. Настоящий пассивный залог: are + cleaned."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Free dental care ____ to all children under the age of 16.",
            correctAnswer: "is provided",
            options: ["is provided", "are provided", "provides", "providing"],
            correctFeedback: "Right! 'Is provided' is correct because 'free dental care' is singular and uncountable. 'Is provided to' is a passive structure showing who receives the service.",
            correctFeedbackRu: "Правильно! 'Is provided' верно, потому что 'free dental care' — единственное число и несчитаемое. 'Is provided to' — пассивная структура, показывающая, кто получает услугу.",
            incorrectFeedback: "Not quite! 'Dental care' is uncountable/singular → 'is provided'. 'Providing' without 'is' can't be the main verb. Present passive: is + provided.",
            incorrectFeedbackRu: "Не совсем! 'Dental care' — несчитаемое/единственное число → 'is provided'. 'Providing' без 'is' не может быть главным глаголом. Настоящий пассивный залог: is + provided."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Prescription medicines ____ only at licensed pharmacies.",
            correctAnswer: "are sold",
            options: ["are sold", "is sold", "sells", "sold"],
            correctFeedback: "Correct! 'Are sold' is right because 'prescription medicines' is plural. This describes a legal regulation. 'Only at licensed pharmacies' specifies where. Passive is common for legal and medical rules.",
            correctFeedbackRu: "Правильно! 'Are sold' верно, потому что 'prescription medicines' — множественное число. Это описывает юридическое регулирование. 'Only at licensed pharmacies' указывает, где. Пассивный залог распространён для юридических и медицинских правил.",
            incorrectFeedback: "Think again! 'Prescription medicines' is plural → 'are sold'. 'Sold' alone is past simple. For present passive: are + sold.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Prescription medicines' — множественное число → 'are sold'. 'Sold' само по себе — прошедшее простое. Для настоящего пассивного залога: are + sold."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The waiting list for this operation ____ regularly to check progress.",
            correctAnswer: "is reviewed",
            options: ["is reviewed", "are reviewed", "reviews", "reviewed"],
            correctFeedback: "Right! 'Is reviewed' is correct because 'the waiting list' is singular. 'Regularly' shows how often. The infinitive 'to check progress' explains the purpose of reviewing.",
            correctFeedbackRu: "Правильно! 'Is reviewed' верно, потому что 'the waiting list' — единственное число. 'Regularly' показывает, как часто. Инфинитив 'to check progress' объясняет цель проверки.",
            incorrectFeedback: "Not quite! 'The waiting list' is singular → 'is reviewed'. 'Reviewed' alone is past simple. Present passive: is + reviewed.",
            incorrectFeedbackRu: "Не совсем! 'The waiting list' — единственное число → 'is reviewed'. 'Reviewed' само по себе — прошедшее простое. Настоящий пассивный залог: is + reviewed."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Used syringes ____ in special sealed containers, not in regular bins.",
            correctAnswer: "are disposed of",
            options: ["are disposed of", "is disposed of", "disposes of", "dispose of"],
            correctFeedback: "Correct! 'Are disposed of' is right because 'used syringes' is plural. The phrasal verb 'dispose of' stays together: are + disposed of. The contrast 'not in regular bins' gives important safety information.",
            correctFeedbackRu: "Правильно! 'Are disposed of' верно, потому что 'used syringes' — множественное число. Фразовый глагол 'dispose of' остаётся вместе: are + disposed of. Контраст 'not in regular bins' даёт важную информацию о безопасности.",
            incorrectFeedback: "Think again! 'Used syringes' is plural → 'are disposed of'. Keep the phrasal verb together: are + disposed of. Don't forget the preposition 'of'.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Used syringes' — множественное число → 'are disposed of'. Держите фразовый глагол вместе: are + disposed of. Не забывайте предлог 'of'."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Emergency calls ____ to the nearest available ambulance team.",
            correctAnswer: "are directed",
            options: ["are directed", "is directed", "directs", "directed"],
            correctFeedback: "Right! 'Are directed' is correct because 'emergency calls' is plural. 'To the nearest available ambulance team' shows where they go. This describes how the emergency system works.",
            correctFeedbackRu: "Правильно! 'Are directed' верно, потому что 'emergency calls' — множественное число. 'To the nearest available ambulance team' показывает, куда они направляются. Это описывает, как работает система экстренной помощи.",
            incorrectFeedback: "Not quite! 'Emergency calls' is plural → 'are directed'. 'Directed' alone is past simple. For present passive: are + directed.",
            incorrectFeedbackRu: "Не совсем! 'Emergency calls' — множественное число → 'are directed'. 'Directed' само по себе — прошедшее простое. Для настоящего пассивного залога: are + directed."
        }
    ]
};

/* ============================================
Page 7: Present Passive - Fill in the Gaps - Environment
============================================ */
window.grammarExercises['passive']['present-passive-gap-page7'] = {
    title: "Present Passive - Environment",
    fillGaps: [
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Rainforest areas ____ at a worrying rate each year.",
            correctAnswer: "are destroyed",
            options: ["are destroyed", "is destroyed", "destroys", "destroyed"],
            correctFeedback: "Correct! 'Are destroyed' is right because 'rainforest areas' is plural. 'At a worrying rate' shows how fast this happens. Passive is used because the agents (companies, farming) are many.",
            correctFeedbackRu: "Правильно! 'Are destroyed' верно, потому что 'rainforest areas' — множественное число. 'At a worrying rate' показывает, как быстро это происходит. Пассивный залог используется, потому что агентов (компании, фермерство) много.",
            incorrectFeedback: "Think again! 'Rainforest areas' is plural → 'are destroyed'. 'Destroyed' alone is past simple. For present passive: are + destroyed.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Rainforest areas' — множественное число → 'are destroyed'. 'Destroyed' само по себе — прошедшее простое. Для настоящего пассивного залога: are + destroyed."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The river water ____ for contaminants before it reaches homes.",
            correctAnswer: "is tested",
            options: ["is tested", "are tested", "tests", "testing"],
            correctFeedback: "Right! 'Is tested' is correct because 'the river water' is singular and uncountable. 'For contaminants' tells us what is being looked for. Passive describes the testing process.",
            correctFeedbackRu: "Правильно! 'Is tested' верно, потому что 'the river water' — единственное число и несчитаемое. 'For contaminants' говорит нам, что ищут. Пассивный залог описывает процесс тестирования.",
            incorrectFeedback: "Not quite! 'River water' is uncountable/singular → 'is tested'. 'Testing' without 'is' is an -ing form. Present passive: is + tested.",
            incorrectFeedbackRu: "Не совсем! 'River water' — несчитаемое/единственное число → 'is tested'. 'Testing' без 'is' — -ing форма. Настоящий пассивный залог: is + tested."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Solar panels ____ on the roofs of new buildings in this area.",
            correctAnswer: "are installed",
            options: ["are installed", "is installed", "installs", "installed"],
            correctFeedback: "Correct! 'Are installed' is right because 'solar panels' is plural. 'On the roofs of new buildings' tells us where. Passive describes what happens to the panels.",
            correctFeedbackRu: "Правильно! 'Are installed' верно, потому что 'solar panels' — множественное число. 'On the roofs of new buildings' говорит нам, где. Пассивный залог описывает то, что происходит с панелями.",
            incorrectFeedback: "Think again! 'Solar panels' is plural → 'are installed'. 'Installed' alone is past simple. For present passive: are + installed.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Solar panels' — множественное число → 'are installed'. 'Installed' само по себе — прошедшее простое. Для настоящего пассивного залога: are + installed."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Food waste ____ into compost to use as garden fertiliser.",
            correctAnswer: "is turned",
            options: ["is turned", "are turned", "turns", "turned"],
            correctFeedback: "Right! 'Is turned' is correct because 'food waste' is singular and uncountable. 'Into compost' tells us the result. 'Is turned into' is a common passive structure for transformation processes.",
            correctFeedbackRu: "Правильно! 'Is turned' верно, потому что 'food waste' — единственное число и несчитаемое. 'Into compost' говорит нам о результате. 'Is turned into' — распространённая пассивная структура для процессов трансформации.",
            incorrectFeedback: "Not quite! 'Food waste' is uncountable/singular → 'is turned'. 'Turned' alone is past simple. Present passive: is + turned (into compost).",
            incorrectFeedbackRu: "Не совсем! 'Food waste' — несчитаемое/единственное число → 'is turned'. 'Turned' само по себе — прошедшее простое. Настоящий пассивный залог: is + turned (into compost)."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Wild birds ____ and released back into the environment after treatment.",
            correctAnswer: "are rescued",
            options: ["are rescued", "is rescued", "rescues", "rescued"],
            correctFeedback: "Correct! 'Are rescued' is right because 'wild birds' is plural. Two passive verbs appear: 'are rescued and (are) released'. Both describe what happens to the birds.",
            correctFeedbackRu: "Правильно! 'Are rescued' верно, потому что 'wild birds' — множественное число. Два пассивных глагола: 'are rescued and (are) released'. Оба описывают то, что происходит с птицами.",
            incorrectFeedback: "Think again! 'Wild birds' is plural → 'are rescued'. 'Rescued' alone is past simple. The sentence needs: are + rescued.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Wild birds' — множественное число → 'are rescued'. 'Rescued' само по себе — прошедшее простое. Предложению нужно: are + rescued."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The national park ____ by rangers to prevent illegal hunting.",
            correctAnswer: "is patrolled",
            options: ["is patrolled", "are patrolled", "patrols", "patrolled"],
            correctFeedback: "Right! 'Is patrolled' is correct because 'the national park' is singular. The agent 'by rangers' tells us who does the patrolling. The purpose 'to prevent illegal hunting' explains why.",
            correctFeedbackRu: "Правильно! 'Is patrolled' верно, потому что 'the national park' — единственное число. Агент 'by rangers' говорит нам, кто патрулирует. Цель 'to prevent illegal hunting' объясняет, почему.",
            incorrectFeedback: "Not quite! 'The national park' is singular → 'is patrolled'. 'Patrolled' alone is past simple. For present passive: is + patrolled.",
            incorrectFeedbackRu: "Не совсем! 'The national park' — единственное число → 'is patrolled'. 'Patrolled' само по себе — прошедшее простое. Для настоящего пассивного залога: is + patrolled."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Pollution levels in the harbour ____ weekly by the environment agency.",
            correctAnswer: "are measured",
            options: ["are measured", "is measured", "measures", "measuring"],
            correctFeedback: "Correct! 'Are measured' is right because 'pollution levels' is plural. 'Weekly' shows the frequency. The agent 'by the environment agency' identifies who is responsible.",
            correctFeedbackRu: "Правильно! 'Are measured' верно, потому что 'pollution levels' — множественное число. 'Weekly' показывает частоту. Агент 'by the environment agency' определяет, кто ответственен.",
            incorrectFeedback: "Think again! 'Pollution levels' is plural → 'are measured'. 'Measuring' without 'are' is an -ing form. Present passive: are + measured.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Pollution levels' — множественное число → 'are measured'. 'Measuring' без 'are' — -ing форма. Настоящий пассивный залог: are + measured."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Plastic bags ____ in many countries because of their environmental impact.",
            correctAnswer: "are banned",
            options: ["are banned", "is banned", "bans", "banned"],
            correctFeedback: "Right! 'Are banned' is correct because 'plastic bags' is plural. This is a factual statement about environmental law. Passive describes what has happened to plastic bags.",
            correctFeedbackRu: "Правильно! 'Are banned' верно, потому что 'plastic bags' — множественное число. Это фактическое утверждение об экологическом законодательстве. Пассивный залог описывает то, что произошло с пластиковыми пакетами.",
            incorrectFeedback: "Not quite! 'Plastic bags' is plural → 'are banned'. 'Banned' alone is past simple. For present passive: are + banned.",
            incorrectFeedbackRu: "Не совсем! 'Plastic bags' — множественное число → 'are banned'. 'Banned' само по себе — прошедшее простое. Для настоящего пассивного залога: are + banned."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Greenhouse gas emissions ____ every year by an international panel of scientists.",
            correctAnswer: "are monitored",
            options: ["are monitored", "is monitored", "monitors", "monitored"],
            correctFeedback: "Correct! 'Are monitored' is right because 'greenhouse gas emissions' is plural. The agent 'by an international panel of scientists' tells us who does this important work.",
            correctFeedbackRu: "Правильно! 'Are monitored' верно, потому что 'greenhouse gas emissions' — множественное число. Агент 'by an international panel of scientists' говорит нам, кто выполняет эту важную работу.",
            incorrectFeedback: "Think again! 'Greenhouse gas emissions' is plural → 'are monitored'. 'Monitored' alone is past simple. Present passive: are + monitored.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Greenhouse gas emissions' — множественное число → 'are monitored'. 'Monitored' само по себе — прошедшее простое. Настоящий пассивный залог: are + monitored."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The local beach ____ of rubbish by volunteers every weekend.",
            correctAnswer: "is cleared",
            options: ["is cleared", "are cleared", "clears", "cleared"],
            correctFeedback: "Right! 'Is cleared' is correct because 'the local beach' is singular. 'By volunteers every weekend' tells us who does it and how often. 'Is cleared of rubbish' means the rubbish is removed.",
            correctFeedbackRu: "Правильно! 'Is cleared' верно, потому что 'the local beach' — единственное число. 'By volunteers every weekend' говорит нам, кто это делает и как часто. 'Is cleared of rubbish' означает, что мусор убирается.",
            incorrectFeedback: "Not quite! 'The local beach' is singular → 'is cleared'. 'Cleared' alone is past simple. For present passive: is + cleared.",
            incorrectFeedbackRu: "Не совсем! 'The local beach' — единственное число → 'is cleared'. 'Cleared' само по себе — прошедшее простое. Для настоящего пассивного залога: is + cleared."
        }
    ]
};

/* ============================================
Page 8: Present Passive - Fill in the Gaps - Culture and Media
============================================ */
window.grammarExercises['passive']['present-passive-gap-page8'] = {
    title: "Present Passive - Culture and Media",
    fillGaps: [
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The evening news ____ at 9 pm on the main channel.",
            correctAnswer: "is broadcast",
            options: ["is broadcast", "are broadcast", "broadcasts", "broadcasting"],
            correctFeedback: "Correct! 'Is broadcast' is right because 'the evening news' is singular. 'Broadcast' is irregular — the past participle is the same as the base form. Present passive: is + broadcast.",
            correctFeedbackRu: "Правильно! 'Is broadcast' верно, потому что 'the evening news' — единственное число. 'Broadcast' — неправильный глагол — причастие прошедшего времени совпадает с основной формой. Настоящий пассивный залог: is + broadcast.",
            incorrectFeedback: "Think again! 'The evening news' is singular → 'is broadcast'. 'Broadcast' is irregular: broadcast → broadcast. 'Broadcasting' without 'is' is an -ing form.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'The evening news' — единственное число → 'is broadcast'. 'Broadcast' — неправильный глагол: broadcast → broadcast. 'Broadcasting' без 'is' — -ing форма."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Thousands of books ____ in public libraries across the country.",
            correctAnswer: "are borrowed",
            options: ["are borrowed", "is borrowed", "borrows", "borrowed"],
            correctFeedback: "Right! 'Are borrowed' is correct because 'thousands of books' is plural. Passive focuses on what happens to the books, not on the borrowers.",
            correctFeedbackRu: "Правильно! 'Are borrowed' верно, потому что 'thousands of books' — множественное число. Пассивный залог фокусируется на том, что происходит с книгами, а не на читателях.",
            incorrectFeedback: "Not quite! 'Thousands of books' is plural → 'are borrowed'. 'Borrowed' alone is past simple. For present passive: are + borrowed.",
            incorrectFeedbackRu: "Не совсем! 'Thousands of books' — множественное число → 'are borrowed'. 'Borrowed' само по себе — прошедшее простое. Для настоящего пассивного залога: are + borrowed."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The artwork ____ by different artists from around the world each year.",
            correctAnswer: "is created",
            options: ["is created", "are created", "creates", "created"],
            correctFeedback: "Correct! 'Is created' is right because 'the artwork' is singular. The agent 'by different artists' identifies who makes it. 'From around the world' tells us the international scope.",
            correctFeedbackRu: "Правильно! 'Is created' верно, потому что 'the artwork' — единственное число. Агент 'by different artists' определяет, кто его создаёт. 'From around the world' говорит нам о международном охвате.",
            incorrectFeedback: "Think again! 'The artwork' is singular → 'is created'. 'Created' alone is past simple. For present passive: is + created.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'The artwork' — единственное число → 'is created'. 'Created' само по себе — прошедшее простое. Для настоящего пассивного залога: is + created."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Film reviews ____ by professional critics before the public release.",
            correctAnswer: "are written",
            options: ["are written", "is written", "writes", "writing"],
            correctFeedback: "Right! 'Are written' is correct because 'film reviews' is plural. The agent 'by professional critics' tells us who writes them. 'Write' is irregular: write → written. Present passive: are + written.",
            correctFeedbackRu: "Правильно! 'Are written' верно, потому что 'film reviews' — множественное число. Агент 'by professional critics' говорит нам, кто их пишет. 'Write' — неправильный глагол: write → written. Настоящий пассивный залог: are + written.",
            incorrectFeedback: "Not quite! 'Film reviews' is plural → 'are written'. 'Write' is irregular: write → written. 'Writing' without 'are' can't be the main verb here.",
            incorrectFeedbackRu: "Не совсем! 'Film reviews' — множественное число → 'are written'. 'Write' — неправильный глагол: write → written. 'Writing' без 'are' не может быть главным глаголом здесь."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "This weekly magazine ____ in 12 countries across Europe.",
            correctAnswer: "is published",
            options: ["is published", "are published", "publishes", "published"],
            correctFeedback: "Correct! 'Is published' is right because 'this weekly magazine' is singular. '12 countries across Europe' tells us the international reach. Passive is used because the publisher is less important than where it reaches.",
            correctFeedbackRu: "Правильно! 'Is published' верно, потому что 'this weekly magazine' — единственное число. '12 countries across Europe' говорит нам о международном охвате. Пассивный залог используется, потому что издатель менее важен, чем охват.",
            incorrectFeedback: "Think again! 'This weekly magazine' is singular → 'is published'. 'Published' alone is past simple. For present passive: is + published.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'This weekly magazine' — единственное число → 'is published'. 'Published' само по себе — прошедшее простое. Для настоящего пассивного залога: is + published."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The winning photograph ____ on the front page of the national newspaper.",
            correctAnswer: "is printed",
            options: ["is printed", "are printed", "prints", "printed"],
            correctFeedback: "Right! 'Is printed' is correct because 'the winning photograph' is singular. 'On the front page' tells us where it appears. Passive focuses on the photograph, not on the newspaper editors.",
            correctFeedbackRu: "Правильно! 'Is printed' верно, потому что 'the winning photograph' — единственное число. 'On the front page' говорит нам, где оно появляется. Пассивный залог фокусируется на фотографии, а не на редакторах.",
            incorrectFeedback: "Not quite! 'The winning photograph' is singular → 'is printed'. 'Printed' alone is past simple. For present passive: is + printed.",
            incorrectFeedbackRu: "Не совсем! 'The winning photograph' — единственное число → 'is printed'. 'Printed' само по себе — прошедшее простое. Для настоящего пассивного залога: is + printed."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Historical documentaries ____ on television to educate the public.",
            correctAnswer: "are shown",
            options: ["are shown", "is shown", "shows", "showing"],
            correctFeedback: "Correct! 'Are shown' is right because 'historical documentaries' is plural. The purpose 'to educate the public' explains why. 'Show' is irregular: show → shown. Present passive: are + shown.",
            correctFeedbackRu: "Правильно! 'Are shown' верно, потому что 'historical documentaries' — множественное число. Цель 'to educate the public' объясняет, почему. 'Show' — неправильный глагол: show → shown. Настоящий пассивный залог: are + shown.",
            incorrectFeedback: "Think again! 'Documentaries' is plural → 'are shown'. 'Show' is irregular: show → shown. 'Showing' without 'are' can't be the main verb here.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Documentaries' — множественное число → 'are shown'. 'Show' — неправильный глагол: show → shown. 'Showing' без 'are' не может быть главным глаголом здесь."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Traditional folk songs ____ at the festival to preserve the local culture.",
            correctAnswer: "are performed",
            options: ["are performed", "is performed", "performs", "performed"],
            correctFeedback: "Right! 'Are performed' is correct because 'traditional folk songs' is plural. The purpose 'to preserve the local culture' explains why this is done. Passive describes what happens at the festival.",
            correctFeedbackRu: "Правильно! 'Are performed' верно, потому что 'traditional folk songs' — множественное число. Цель 'to preserve the local culture' объясняет, зачем это делается. Пассивный залог описывает то, что происходит на фестивале.",
            incorrectFeedback: "Not quite! 'Traditional folk songs' is plural → 'are performed'. 'Performed' alone is past simple. For present passive: are + performed.",
            incorrectFeedbackRu: "Не совсем! 'Traditional folk songs' — множественное число → 'are performed'. 'Performed' само по себе — прошедшее простое. Для настоящего пассивного залога: are + performed."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The gallery's permanent collection ____ free of charge to all visitors.",
            correctAnswer: "is shown",
            options: ["is shown", "are shown", "shows", "shown"],
            correctFeedback: "Correct! 'Is shown' is right because 'the gallery's permanent collection' is singular. 'Free of charge' tells us the cost. Passive is used because who shows it is less important than the fact that it's free.",
            correctFeedbackRu: "Правильно! 'Is shown' верно, потому что 'the gallery's permanent collection' — единственное число. 'Free of charge' говорит нам о стоимости. Пассивный залог используется, потому что кто показывает менее важно, чем факт бесплатности.",
            incorrectFeedback: "Think again! 'The gallery's permanent collection' is singular → 'is shown'. 'Shown' alone is a past participle, but without 'is' it's not passive. You need: is + shown.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'The gallery's permanent collection' — единственное число → 'is shown'. 'Shown' само по себе — причастие прошедшего времени, но без 'is' это не пассивный залог. Нужно: is + shown."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Sports results ____ immediately after the game on the app.",
            correctAnswer: "are updated",
            options: ["are updated", "is updated", "updates", "updated"],
            correctFeedback: "Right! 'Are updated' is correct because 'sports results' is plural. 'Immediately after the game' tells us the timing. Passive is used because who updates the app isn't important — the updates are.",
            correctFeedbackRu: "Правильно! 'Are updated' верно, потому что 'sports results' — множественное число. 'Immediately after the game' говорит нам о времени. Пассивный залог используется, потому что кто обновляет приложение — неважно; важны обновления.",
            incorrectFeedback: "Not quite! 'Sports results' is plural → 'are updated'. 'Updated' alone is past simple. Present passive: are + updated.",
            incorrectFeedbackRu: "Не совсем! 'Sports results' — множественное число → 'are updated'. 'Updated' само по себе — прошедшее простое. Настоящий пассивный залог: are + updated."
        }
    ]
};

/* ============================================
Page 9: Present Passive - Fill in the Gaps - Transport and Travel
============================================ */
window.grammarExercises['passive']['present-passive-gap-page9'] = {
    title: "Present Passive - Transport and Travel",
    fillGaps: [
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Boarding passes ____ at two points before passengers enter the plane.",
            correctAnswer: "are scanned",
            options: ["are scanned", "is scanned", "scans", "scanned"],
            correctFeedback: "Correct! 'Are scanned' is right because 'boarding passes' is plural. 'At two points' tells us where. Airport security procedures are typically described in passive.",
            correctFeedbackRu: "Правильно! 'Are scanned' верно, потому что 'boarding passes' — множественное число. 'At two points' говорит нам, где. Процедуры безопасности аэропорта обычно описываются в пассивном залоге.",
            incorrectFeedback: "Think again! 'Boarding passes' is plural → 'are scanned'. 'Scanned' alone is past simple. For present passive: are + scanned.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Boarding passes' — множественное число → 'are scanned'. 'Scanned' само по себе — прошедшее простое. Для настоящего пассивного залога: are + scanned."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The ferry ____ every hour between the island and the mainland.",
            correctAnswer: "is operated",
            options: ["is operated", "are operated", "operates", "operated"],
            correctFeedback: "Right! 'Is operated' is correct because 'the ferry' is singular. 'Every hour' shows the frequency. Active: 'The company operates the ferry' → Passive: 'The ferry is operated'.",
            correctFeedbackRu: "Правильно! 'Is operated' верно, потому что 'the ferry' — единственное число. 'Every hour' показывает частоту. Активный: 'The company operates the ferry' → Пассивный: 'The ferry is operated'.",
            incorrectFeedback: "Not quite! 'The ferry' is singular → 'is operated'. 'Operated' alone is past simple. For present passive: is + operated.",
            incorrectFeedbackRu: "Не совсем! 'The ferry' — единственное число → 'is operated'. 'Operated' само по себе — прошедшее простое. Для настоящего пассивного залога: is + operated."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Excess baggage charges ____ at the check-in desk, not online.",
            correctAnswer: "are paid",
            options: ["are paid", "is paid", "pays", "paid"],
            correctFeedback: "Correct! 'Are paid' is right because 'excess baggage charges' is plural. 'At the check-in desk, not online' specifies where payment happens. Passive describes how payment is processed.",
            correctFeedbackRu: "Правильно! 'Are paid' верно, потому что 'excess baggage charges' — множественное число. 'At the check-in desk, not online' указывает, где происходит оплата. Пассивный залог описывает, как обрабатывается платёж.",
            incorrectFeedback: "Think again! 'Excess baggage charges' is plural → 'are paid'. 'Paid' alone is past simple. For present passive: are + paid.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Excess baggage charges' — множественное число → 'are paid'. 'Paid' само по себе — прошедшее простое. Для настоящего пассивного залога: are + paid."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Taxi drivers ____ before they are given a licence to work in this city.",
            correctAnswer: "are tested",
            options: ["are tested", "is tested", "tests", "testing"],
            correctFeedback: "Right! 'Are tested' is correct because 'taxi drivers' is plural. Two passive verbs appear: 'are tested' and 'are given'. The word 'before' shows the sequence of events.",
            correctFeedbackRu: "Правильно! 'Are tested' верно, потому что 'taxi drivers' — множественное число. Два пассивных глагола: 'are tested' и 'are given'. Слово 'before' показывает последовательность событий.",
            incorrectFeedback: "Not quite! 'Taxi drivers' is plural → 'are tested'. 'Testing' without 'are' is an -ing form. Present passive: are + tested.",
            incorrectFeedbackRu: "Не совсем! 'Taxi drivers' — множественное число → 'are tested'. 'Testing' без 'are' — -ing форма. Настоящий пассивный залог: are + tested."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Announcements ____ in three languages at this international airport.",
            correctAnswer: "are made",
            options: ["are made", "is made", "makes", "make"],
            correctFeedback: "Correct! 'Are made' is right because 'announcements' is plural. 'In three languages' tells us how. 'Make' is irregular: make → made. Present passive: are + made.",
            correctFeedbackRu: "Правильно! 'Are made' верно, потому что 'announcements' — множественное число. 'In three languages' говорит нам, как. 'Make' — неправильный глагол: make → made. Настоящий пассивный залог: are + made.",
            incorrectFeedback: "Think again! 'Announcements' is plural → 'are made'. 'Make' is irregular: make → made. Active verbs 'makes/make' don't work in a passive sentence.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Announcements' — множественное число → 'are made'. 'Make' — неправильный глагол: make → made. Активные глаголы 'makes/make' не работают в пассивном предложении."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The motorway ____ closed overnight for safety inspections.",
            correctAnswer: "is",
            options: ["is", "are", "was", "has"],
            correctFeedback: "Right! The full form is 'is closed' — 'the motorway' is singular, so we use 'is'. The word 'closed' is in the sentence; 'is' is the missing auxiliary verb to complete the passive.",
            correctFeedbackRu: "Правильно! Полная форма — 'is closed' — 'the motorway' — единственное число, поэтому используем 'is'. Слово 'closed' есть в предложении; 'is' — недостающий вспомогательный глагол для завершения пассивного залога.",
            incorrectFeedback: "Not quite! 'The motorway ___ closed overnight'. 'Motorway' is singular → 'is'. Full passive: is + closed.",
            incorrectFeedbackRu: "Не совсем! 'The motorway ___ closed overnight'. 'Motorway' — единственное число → 'is'. Полный пассивный залог: is + closed."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Taxis in this city ____ with GPS tracking systems for passenger safety.",
            correctAnswer: "are equipped",
            options: ["are equipped", "is equipped", "equips", "equipping"],
            correctFeedback: "Correct! 'Are equipped' is right because 'taxis' is plural. 'With GPS tracking systems' tells us what equipment they have. 'For passenger safety' explains why.",
            correctFeedbackRu: "Правильно! 'Are equipped' верно, потому что 'taxis' — множественное число. 'With GPS tracking systems' говорит нам, каким оборудованием они оснащены. 'For passenger safety' объясняет, почему.",
            incorrectFeedback: "Think again! 'Taxis' is plural → 'are equipped'. 'Equipping' without 'are' is an -ing form. Present passive: are + equipped.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Taxis' — множественное число → 'are equipped'. 'Equipping' без 'are' — -ing форма. Настоящий пассивный залог: are + equipped."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "New road safety measures ____ in towns and cities across the region.",
            correctAnswer: "are introduced",
            options: ["are introduced", "is introduced", "introduces", "introduced"],
            correctFeedback: "Right! 'Are introduced' is correct because 'new road safety measures' is plural. 'In towns and cities across the region' tells us where. This describes an ongoing policy change.",
            correctFeedbackRu: "Правильно! 'Are introduced' верно, потому что 'new road safety measures' — множественное число. 'In towns and cities across the region' говорит нам, где. Это описывает продолжающееся изменение политики.",
            incorrectFeedback: "Not quite! 'New road safety measures' is plural → 'are introduced'. 'Introduced' alone is past simple. For present passive: are + introduced.",
            incorrectFeedbackRu: "Не совсем! 'New road safety measures' — множественное число → 'are introduced'. 'Introduced' само по себе — прошедшее простое. Для настоящего пассивного залога: are + introduced."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Petrol prices ____ by global oil costs and local government taxes.",
            correctAnswer: "are affected",
            options: ["are affected", "is affected", "affects", "affected"],
            correctFeedback: "Correct! 'Are affected' is right because 'petrol prices' is plural. Two agents are given: 'global oil costs' and 'local government taxes'. When two agents are listed, use 'and' to join them.",
            correctFeedbackRu: "Правильно! 'Are affected' верно, потому что 'petrol prices' — множественное число. Даны два агента: 'global oil costs' и 'local government taxes'. Когда два агента перечислены, используйте 'and' для их соединения.",
            incorrectFeedback: "Think again! 'Petrol prices' is plural → 'are affected'. 'Affected' alone is past simple. For present passive: are + affected.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'Petrol prices' — множественное число → 'are affected'. 'Affected' само по себе — прошедшее простое. Для настоящего пассивного залога: are + affected."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Delayed flights ____ to a lounge area where refreshments are available.",
            correctAnswer: "are directed",
            options: ["are directed", "is directed", "directs", "directing"],
            correctFeedback: "Right! 'Are directed' is correct because 'delayed flights' is plural here (referring to passengers of those flights). 'To a lounge area' tells us where. Passive describes what happens to these passengers.",
            correctFeedbackRu: "Правильно! 'Are directed' верно, потому что 'delayed flights' — множественное число (относится к пассажирам этих рейсов). 'To a lounge area' говорит нам, куда. Пассивный залог описывает, что происходит с этими пассажирами.",
            incorrectFeedback: "Not quite! 'Delayed flights' is plural → 'are directed'. 'Directing' without 'are' is an -ing form. Present passive: are + directed.",
            incorrectFeedbackRu: "Не совсем! 'Delayed flights' — множественное число → 'are directed'. 'Directing' без 'are' — -ing форма. Настоящий пассивный залог: are + directed."
        }
    ]
};

/* ============================================
Page 10: Present Passive - Fill in the Gaps - Mixed Contexts (Review)
============================================ */
window.grammarExercises['passive']['present-passive-gap-page10'] = {
    title: "Present Passive - Mixed Contexts (Review)",
    fillGaps: [
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The town hall ____ for weddings and private events.",
            correctAnswer: "is hired out",
            options: ["is hired out", "are hired out", "hires out", "hired out"],
            correctFeedback: "Correct! 'Is hired out' is right because 'the town hall' is singular. The phrasal verb 'hire out' stays together in passive: is + hired out. This describes a regular service the building provides.",
            correctFeedbackRu: "Правильно! 'Is hired out' верно, потому что 'the town hall' — единственное число. Фразовый глагол 'hire out' остаётся вместе в пассивном залоге: is + hired out. Это описывает регулярную услугу, которую предоставляет здание.",
            incorrectFeedback: "Think again! 'The town hall' is singular → 'is hired out'. Phrasal verbs keep all their parts in passive: hire out → is hired out. Don't drop 'out'.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'The town hall' — единственное число → 'is hired out'. Фразовые глаголы сохраняют все свои части в пассивном залоге: hire out → is hired out. Не теряйте 'out'."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Weekly shopping deliveries ____ to elderly residents in the village.",
            correctAnswer: "are made",
            options: ["are made", "is made", "makes", "making"],
            correctFeedback: "Right! 'Are made' is correct because 'weekly shopping deliveries' is plural. Active: 'Volunteers make deliveries' → Passive: 'Deliveries are made'. 'Make' is irregular: make → made.",
            correctFeedbackRu: "Правильно! 'Are made' верно, потому что 'weekly shopping deliveries' — множественное число. Активный: 'Volunteers make deliveries' → Пассивный: 'Deliveries are made'. 'Make' — неправильный глагол: make → made.",
            incorrectFeedback: "Not quite! 'Deliveries' is plural → 'are made'. 'Making' without 'are' is an -ing form. Present passive: are + made.",
            incorrectFeedbackRu: "Не совсем! 'Deliveries' — множественное число → 'are made'. 'Making' без 'are' — -ing форма. Настоящий пассивный залог: are + made."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The park gates ____ locked at sunset every evening.",
            correctAnswer: "are",
            options: ["are", "is", "were", "be"],
            correctFeedback: "Correct! The full form is 'are locked' — 'the park gates' is plural, so we use 'are'. The word 'locked' is already in the sentence; 'are' completes the passive structure.",
            correctFeedbackRu: "Правильно! Полная форма — 'are locked' — 'the park gates' — множественное число, поэтому используем 'are'. Слово 'locked' уже есть в предложении; 'are' завершает пассивную структуру.",
            incorrectFeedback: "Not quite! 'The park gates ___ locked' — 'gates' is plural → 'are'. Full passive: are + locked. The sentence describes a daily routine.",
            incorrectFeedbackRu: "Не совсем! 'The park gates ___ locked' — 'gates' — множественное число → 'are'. Полный пассивный залог: are + locked. Предложение описывает ежедневную рутину."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "This type of pottery ____ using traditional methods by hand.",
            correctAnswer: "is made",
            options: ["is made", "are made", "makes", "made"],
            correctFeedback: "Right! 'Is made' is correct because 'this type of pottery' is singular. The method 'using traditional methods by hand' describes how. Passive focuses on the pottery, not on the potters.",
            correctFeedbackRu: "Правильно! 'Is made' верно, потому что 'this type of pottery' — единственное число. Метод 'using traditional methods by hand' описывает, как. Пассивный залог фокусируется на керамике, а не на гончарах.",
            incorrectFeedback: "Not quite! 'This type of pottery' is singular → 'is made'. 'Made' alone is past simple. For present passive: is + made.",
            incorrectFeedbackRu: "Не совсем! 'This type of pottery' — единственное число → 'is made'. 'Made' само по себе — прошедшее простое. Для настоящего пассивного залога: is + made."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "A monthly community newsletter ____ and distributed to every household.",
            correctAnswer: "is produced",
            options: ["is produced", "are produced", "produces", "produced"],
            correctFeedback: "Correct! 'Is produced' is right because 'a monthly community newsletter' is singular. Two passive verbs share the same subject: 'is produced and distributed'. The second 'is' is omitted because the subject stays the same.",
            correctFeedbackRu: "Правильно! 'Is produced' верно, потому что 'a monthly community newsletter' — единственное число. Два пассивных глагола разделяют одно подлежащее: 'is produced and distributed'. Второе 'is' опускается, поскольку подлежащее остаётся тем же.",
            incorrectFeedback: "Think again! 'A monthly community newsletter' is singular → 'is produced'. 'Produced' alone is past simple. For present passive: is + produced.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'A monthly community newsletter' — единственное число → 'is produced'. 'Produced' само по себе — прошедшее простое. Для настоящего пассивного залога: is + produced."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Lost items ____ in a box at the school reception for one month.",
            correctAnswer: "are kept",
            options: ["are kept", "is kept", "keeps", "keeping"],
            correctFeedback: "Right! 'Are kept' is correct because 'lost items' is plural. 'For one month' tells us the duration. 'Keep' is irregular: keep → kept. Present passive: are + kept.",
            correctFeedbackRu: "Правильно! 'Are kept' верно, потому что 'lost items' — множественное число. 'For one month' говорит нам о продолжительности. 'Keep' — неправильный глагол: keep → kept. Настоящий пассивный залог: are + kept.",
            incorrectFeedback: "Not quite! 'Lost items' is plural → 'are kept'. 'Keep' is irregular: keep → kept. 'Keeping' without 'are' can't be the main verb. Use: are + kept.",
            incorrectFeedbackRu: "Не совсем! 'Lost items' — множественное число → 'are kept'. 'Keep' — неправильный глагол: keep → kept. 'Keeping' без 'are' не может быть главным глаголом. Используйте: are + kept."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The annual prize for the best garden ____ by the local garden club.",
            correctAnswer: "is awarded",
            options: ["is awarded", "are awarded", "awards", "awarded"],
            correctFeedback: "Correct! 'Is awarded' is right because 'the annual prize' is singular. The agent 'by the local garden club' tells us who gives the prize. Passive focuses on the prize, not the award-givers.",
            correctFeedbackRu: "Правильно! 'Is awarded' верно, потому что 'the annual prize' — единственное число. Агент 'by the local garden club' говорит нам, кто даёт приз. Пассивный залог фокусируется на призе, а не на тех, кто его вручает.",
            incorrectFeedback: "Think again! 'The annual prize' is singular → 'is awarded'. 'Awarded' alone is past simple. For present passive: is + awarded.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'The annual prize' — единственное число → 'is awarded'. 'Awarded' само по себе — прошедшее простое. Для настоящего пассивного залога: is + awarded."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "Counterfeit goods ____ at the border by customs officers.",
            correctAnswer: "are seized",
            options: ["are seized", "is seized", "seizes", "seized"],
            correctFeedback: "Right! 'Are seized' is correct because 'counterfeit goods' is plural. The agent 'by customs officers' tells us who performs the action. This describes a regular law enforcement process.",
            correctFeedbackRu: "Правильно! 'Are seized' верно, потому что 'counterfeit goods' — множественное число. Агент 'by customs officers' говорит нам, кто выполняет действие. Это описывает регулярный процесс правоохранительной деятельности.",
            incorrectFeedback: "Not quite! 'Counterfeit goods' is plural → 'are seized'. 'Seized' alone is past simple. For present passive: are + seized.",
            incorrectFeedbackRu: "Не совсем! 'Counterfeit goods' — множественное число → 'are seized'. 'Seized' само по себе — прошедшее простое. Для настоящего пассивного залога: are + seized."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "New residents ____ a welcome pack when they move into the building.",
            correctAnswer: "are given",
            options: ["are given", "is given", "gives", "give"],
            correctFeedback: "Correct! 'Are given' is right because 'new residents' is plural. This is a passive with an indirect object — residents receive the welcome pack. Active: 'The manager gives residents a welcome pack' → Passive: 'Residents are given a welcome pack'.",
            correctFeedbackRu: "Правильно! 'Are given' верно, потому что 'new residents' — множественное число. Это пассивный залог с косвенным дополнением — жильцы получают пакет приветствия. Активный: 'The manager gives residents a welcome pack' → Пассивный: 'Residents are given a welcome pack'.",
            incorrectFeedback: "Think again! 'New residents' is plural → 'are given'. Active verbs 'gives/give' don't work here — the subject receives the welcome pack in a passive sentence.",
            incorrectFeedbackRu: "Подумайте ещё раз! 'New residents' — множественное число → 'are given'. Активные глаголы 'gives/give' здесь не работают — подлежащее получает пакет приветствия в пассивном предложении."
        },
        {
            question: "Complete the sentence with the correct present passive form:",
            questionRu: "Заполните предложение правильной формой настоящего пассивного залога:",
            sentence: "The local swimming pool ____ for cleaning and maintenance every January.",
            correctAnswer: "is closed",
            options: ["is closed", "are closed", "closes", "closing"],
            correctFeedback: "Right! 'Is closed' is correct because 'the local swimming pool' is singular. 'Every January' shows this is an annual event. 'For cleaning and maintenance' explains the reason.",
            correctFeedbackRu: "Правильно! 'Is closed' верно, потому что 'the local swimming pool' — единственное число. 'Every January' показывает, что это ежегодное мероприятие. 'For cleaning and maintenance' объясняет причину.",
            incorrectFeedback: "Not quite! 'The local swimming pool' is singular → 'is closed'. 'Closing' without 'is' is an -ing form. Present passive: is + closed.",
            incorrectFeedbackRu: "Не совсем! 'The local swimming pool' — единственное число → 'is closed'. 'Closing' без 'is' — -ing форма. Настоящий пассивный залог: is + closed."
        },
    ]
};

/* =============================================================================== */
/* =========================Sentence Building Exercises=========================== */

/* ============================================
Page 1: Present Passive - Everyday Actions and Routines
============================================ */
window.grammarExercises['passive']['present-passive-sentence-page1'] = {
    title: "Present Passive - Everyday Actions and Routines",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "office", "is", "cleaned", "every", "morning", "before", "employees", "arrive."],
            correctAnswer: "The office is cleaned every morning before employees arrive.",
            correctFeedback: "Perfect! 'The office is cleaned every morning before employees arrive.' is correct. Present passive = singular subject + is + past participle. The focus is on the office, not the cleaner.",
            correctFeedbackRu: "Отлично! 'The office is cleaned every morning before employees arrive.' верно. Настоящий пассивный залог = подлежащее в ед. числе + is + причастие прошедшего времени. Фокус на офисе, а не на уборщике.",
            incorrectFeedback: "Try again. The structure is: The office + is + cleaned + every morning + before employees arrive.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The office + is + cleaned + every morning + before employees arrive."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["These", "products", "are", "made", "in", "factories", "across", "the", "country."],
            correctAnswer: "These products are made in factories across the country.",
            correctFeedback: "Excellent! 'These products are made in factories across the country.' is correct. Plural subject 'products' takes 'are' + past participle in present passive.",
            correctFeedbackRu: "Отлично! 'These products are made in factories across the country.' верно. Подлежащее во мн. числе 'products' требует 'are' + причастие прошедшего времени в настоящем пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: These products + are + made + in factories + across the country.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: These products + are + made + in factories + across the country."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["English", "is", "spoken", "in", "many", "countries", "around", "the", "world."],
            correctAnswer: "English is spoken in many countries around the world.",
            correctFeedback: "Great! 'English is spoken in many countries around the world.' is correct. 'English' is singular and uncountable, so we use 'is spoken'. This is a general fact in present passive.",
            correctFeedbackRu: "Отлично! 'English is spoken in many countries around the world.' верно. 'English' — единственное число и несчитаемое, поэтому используем 'is spoken'. Это общий факт в настоящем пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: English + is + spoken + in many countries + around the world.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: English + is + spoken + in many countries + around the world."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "letters", "are", "delivered", "every", "day", "at", "noon."],
            correctAnswer: "The letters are delivered every day at noon.",
            correctFeedback: "Perfect! 'The letters are delivered every day at noon.' is correct. 'Letters' is plural → 'are delivered'. The time expression 'every day at noon' shows this is a repeated routine.",
            correctFeedbackRu: "Идеально! 'The letters are delivered every day at noon.' верно. 'Letters' — множественное число → 'are delivered'. Временное выражение 'every day at noon' показывает, что это повторяющаяся рутина.",
            incorrectFeedback: "Try again. The structure is: The letters + are + delivered + every day + at noon.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The letters + are + delivered + every day + at noon."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "exam", "results", "are", "published", "online", "after", "two", "weeks."],
            correctAnswer: "The exam results are published online after two weeks.",
            correctFeedback: "Excellent! 'The exam results are published online after two weeks.' is correct. 'Results' is plural → 'are published'. The focus is on what happens to the results, not who publishes them.",
            correctFeedbackRu: "Отлично! 'The exam results are published online after two weeks.' верно. 'Results' — множественное число → 'are published'. Фокус на том, что происходит с результатами, а не кто их публикует.",
            incorrectFeedback: "Try again. The structure is: The exam results + are + published + online + after two weeks.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The exam results + are + published + online + after two weeks."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["New", "students", "are", "given", "a", "welcome", "guide", "on", "their", "first", "day."],
            correctAnswer: "New students are given a welcome guide on their first day.",
            correctFeedback: "Great! 'New students are given a welcome guide on their first day.' is correct. This is passive with two objects — 'students' is the indirect object that becomes the subject.",
            correctFeedbackRu: "Отлично! 'New students are given a welcome guide on their first day.' верно. Это пассивный залог с двумя дополнениями — 'students' — косвенное дополнение, становящееся подлежащим.",
            incorrectFeedback: "Try again. The structure is: New students + are + given + a welcome guide + on their first day.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: New students + are + given + a welcome guide + on their first day."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "building", "is", "visited", "by", "hundreds", "of", "tourists", "every", "weekend."],
            correctAnswer: "The building is visited by hundreds of tourists every weekend.",
            correctFeedback: "Perfect! 'The building is visited by hundreds of tourists every weekend.' is correct. 'By hundreds of tourists' is the agent telling us who performs the action.",
            correctFeedbackRu: "Идеально! 'The building is visited by hundreds of tourists every weekend.' верно. 'By hundreds of tourists' — агент, говорящий нам, кто выполняет действие.",
            incorrectFeedback: "Try again. The structure is: The building + is + visited + by hundreds of tourists + every weekend.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The building + is + visited + by hundreds of tourists + every weekend."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "rules", "of", "the", "game", "are", "explained", "to", "all", "players", "before", "the", "match."],
            correctAnswer: "The rules of the game are explained to all players before the match.",
            correctFeedback: "Excellent! 'The rules of the game are explained to all players before the match.' is correct. 'Rules' is plural → 'are explained'. The focus is on what happens to the rules.",
            correctFeedbackRu: "Отлично! 'The rules of the game are explained to all players before the match.' верно. 'Rules' — множественное число → 'are explained'. Фокус на том, что происходит с правилами.",
            incorrectFeedback: "Try again. The structure is: The rules of the game + are + explained + to all players + before the match.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The rules of the game + are + explained + to all players + before the match."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Coffee", "is", "grown", "in", "many", "countries,", "but", "Brazil", "produces", "the", "most."],
            correctAnswer: "Coffee is grown in many countries, but Brazil produces the most.",
            correctFeedback: "Great! 'Coffee is grown in many countries, but Brazil produces the most.' is correct. 'Coffee' is singular and uncountable → 'is grown'. The second clause uses active voice with 'Brazil' as subject.",
            correctFeedbackRu: "Отлично! 'Coffee is grown in many countries, but Brazil produces the most.' верно. 'Coffee' — единственное число и несчитаемое → 'is grown'. Второе предложение использует активный залог с 'Brazil' в качестве подлежащего.",
            incorrectFeedback: "Try again. The structure is: Coffee + is + grown + in many countries, + but Brazil + produces + the most.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Coffee + is + grown + in many countries, + but Brazil + produces + the most."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["This", "type", "of", "cheese", "is", "produced", "only", "in", "one", "small", "village", "in", "France."],
            correctAnswer: "This type of cheese is produced only in one small village in France.",
            correctFeedback: "Perfect! 'This type of cheese is produced only in one small village in France.' is correct. 'This type of cheese' is singular → 'is produced'. The word 'only' emphasises how exclusive this is.",
            correctFeedbackRu: "Идеально! 'This type of cheese is produced only in one small village in France.' верно. 'This type of cheese' — единственное число → 'is produced'. Слово 'only' подчёркивает, насколько это исключительно.",
            incorrectFeedback: "Try again. The structure is: This type of cheese + is + produced + only + in one small village + in France.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: This type of cheese + is + produced + only + in one small village + in France."
        }
    ]
};

/* ============================================
Page 2: Present Passive - Work and Technology
============================================ */
window.grammarExercises['passive']['present-passive-sentence-page2'] = {
    title: "Present Passive - Work and Technology",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["All", "employee", "emails", "are", "monitored", "by", "the", "IT", "department", "for", "security", "reasons."],
            correctAnswer: "All employee emails are monitored by the IT department for security reasons.",
            correctFeedback: "Perfect! 'All employee emails are monitored by the IT department for security reasons.' is correct. 'Emails' is plural → 'are monitored'. The agent 'by the IT department' tells us who performs the action.",
            correctFeedbackRu: "Идеально! 'All employee emails are monitored by the IT department for security reasons.' верно. 'Emails' — множественное число → 'are monitored'. Агент 'by the IT department' говорит нам, кто выполняет действие.",
            incorrectFeedback: "Try again. The structure is: All employee emails + are + monitored + by the IT department + for security reasons.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: All employee emails + are + monitored + by the IT department + for security reasons."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "website", "is", "updated", "every", "few", "months", "to", "add", "new", "content."],
            correctAnswer: "The website is updated every few months to add new content.",
            correctFeedback: "Excellent! 'The website is updated every few months to add new content.' is correct. 'The website' is singular → 'is updated'. The frequency 'every few months' shows a repeated action.",
            correctFeedbackRu: "Отлично! 'The website is updated every few months to add new content.' верно. 'The website' — единственное число → 'is updated'. Частотность 'every few months' показывает повторяющееся действие.",
            incorrectFeedback: "Try again. The structure is: The website + is + updated + every few months + to add new content.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The website + is + updated + every few months + to add new content."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Salaries", "are", "transferred", "directly", "to", "the", "employees'", "bank", "accounts."],
            correctAnswer: "Salaries are transferred directly to the employees' bank accounts.",
            correctFeedback: "Great! This sentence is correct. 'Salaries' is plural → 'are transferred'. This describes a standard company process.",
            correctFeedbackRu: "Отлично! Это предложение верно. 'Salaries' — множественное число → 'are transferred'. Это описывает стандартный процесс компании.",
            incorrectFeedback: "Try again. The structure is: Salaries + are + transferred + directly + to the employees' bank accounts.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Salaries + are + transferred + directly + to the employees' bank accounts."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["A", "password", "is", "required", "to", "confirm", "every", "online", "transaction."],
            correctAnswer: "A password is required to confirm every online transaction.",
            correctFeedback: "Perfect! 'A password is required to confirm every online transaction.' is correct. 'A password' is singular → 'is required'. Passive is common for automatic rules and system requirements.",
            correctFeedbackRu: "Идеально! 'A password is required to confirm every online transaction.' верно. 'A password' — единственное число → 'is required'. Пассивный залог распространён для автоматических правил и системных требований.",
            incorrectFeedback: "Try again. The structure is: A password + is + required + to confirm + every online transaction.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: A password + is + required + to confirm + every online transaction."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Applications", "for", "the", "job", "are", "submitted", "through", "the", "company", "website."],
            correctAnswer: "Applications for the job are submitted through the company website.",
            correctFeedback: "Excellent! 'Applications for the job are submitted through the company website.' is correct. 'Applications' is plural → 'are submitted'. This is a standard procedure described in passive.",
            correctFeedbackRu: "Отлично! 'Applications for the job are submitted through the company website.' верно. 'Applications' — множественное число → 'are submitted'. Это стандартная процедура, описанная в пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: Applications for the job + are + submitted + through the company website.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Applications for the job + are + submitted + through the company website."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Staff", "meetings", "are", "held", "every", "Monday", "morning", "before", "work", "starts."],
            correctAnswer: "Staff meetings are held every Monday morning before work starts.",
            correctFeedback: "Great! 'Staff meetings are held every Monday morning before work starts.' is correct. 'Meetings' is plural → 'are held'. 'Hold' is irregular: hold → held.",
            correctFeedbackRu: "Отлично! 'Staff meetings are held every Monday morning before work starts.' верно. 'Meetings' — множественное число → 'are held'. 'Hold' — неправильный глагол: hold → held.",
            incorrectFeedback: "Try again. The structure is: Staff meetings + are + held + every Monday morning + before work starts.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Staff meetings + are + held + every Monday morning + before work starts."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Sensitive", "company", "data", "is", "protected", "with", "advanced", "encryption", "software."],
            correctAnswer: "Sensitive company data is protected with advanced encryption software.",
            correctFeedback: "Perfect! 'Sensitive company data is protected with advanced encryption software.' is correct. 'Data' is uncountable and singular → 'is protected'. The method 'with encryption software' explains how.",
            correctFeedbackRu: "Идеально! 'Sensitive company data is protected with advanced encryption software.' верно. 'Data' — несчитаемое и единственное число → 'is protected'. Метод 'with encryption software' объясняет, как.",
            incorrectFeedback: "Try again. The structure is: Sensitive company data + is + protected + with advanced encryption software.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Sensitive company data + is + protected + with advanced encryption software."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Workplace", "accidents", "are", "reported", "immediately", "to", "the", "health", "and", "safety", "officer."],
            correctAnswer: "Workplace accidents are reported immediately to the health and safety officer.",
            correctFeedback: "Excellent! 'Workplace accidents are reported immediately to the health and safety officer.' is correct. 'Accidents' is plural → 'are reported'. This describes a workplace obligation in passive.",
            correctFeedbackRu: "Отлично! 'Workplace accidents are reported immediately to the health and safety officer.' верно. 'Accidents' — множественное число → 'are reported'. Это описывает рабочее обязательство в пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: Workplace accidents + are + reported + immediately + to the health and safety officer.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Workplace accidents + are + reported + immediately + to the health and safety officer."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "company's", "products", "are", "exported", "to", "more", "than", "50", "countries", "worldwide."],
            correctAnswer: "The company's products are exported to more than 50 countries worldwide.",
            correctFeedback: "Great! 'The company's products are exported to more than 50 countries worldwide.' is correct. 'Products' is plural → 'are exported'. This is a factual statement about international trade.",
            correctFeedbackRu: "Отлично! 'The company's products are exported to more than 50 countries worldwide.' верно. 'Products' — множественное число → 'are exported'. Это фактическое утверждение о международной торговле.",
            incorrectFeedback: "Try again. The structure is: The company's products + are + exported + to more than 50 countries + worldwide.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The company's products + are + exported + to more than 50 countries + worldwide."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Customer", "feedback", "is", "taken", "seriously", "by", "the", "management", "team."],
            correctAnswer: "Customer feedback is taken seriously by the management team.",
            correctFeedback: "Perfect! 'Customer feedback is taken seriously by the management team.' is correct. 'Feedback' is uncountable and singular → 'is taken'. The agent 'by the management team' tells us who acts on it.",
            correctFeedbackRu: "Идеально! 'Customer feedback is taken seriously by the management team.' верно. 'Feedback' — несчитаемое и единственное число → 'is taken'. Агент 'by the management team' говорит нам, кто действует на его основе.",
            incorrectFeedback: "Try again. The structure is: Customer feedback + is + taken + seriously + by the management team.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Customer feedback + is + taken + seriously + by the management team."
        }
    ]
};

/* ============================================
Page 3: Present Passive - Food and Shopping
============================================ */
window.grammarExercises['passive']['present-passive-sentence-page3'] = {
    title: "Present Passive - Food and Shopping",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Fresh", "bread", "is", "baked", "in", "the", "bakery", "three", "times", "a", "day."],
            correctAnswer: "Fresh bread is baked in the bakery three times a day.",
            correctFeedback: "Perfect! 'Fresh bread is baked in the bakery three times a day.' is correct. 'Bread' is uncountable and singular → 'is baked'. The frequency shows this is a repeated daily action.",
            correctFeedbackRu: "Идеально! 'Fresh bread is baked in the bakery three times a day.' верно. 'Bread' — несчитаемое и единственное число → 'is baked'. Частотность показывает, что это повторяющееся ежедневное действие.",
            incorrectFeedback: "Try again. The structure is: Fresh bread + is + baked + in the bakery + three times a day.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Fresh bread + is + baked + in the bakery + three times a day."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["All", "groceries", "are", "inspected", "carefully", "before", "they", "reach", "the", "supermarket", "shelves."],
            correctAnswer: "All groceries are inspected carefully before they reach the supermarket shelves.",
            correctFeedback: "Excellent! 'All groceries are inspected carefully before they reach the supermarket shelves.' is correct. 'Groceries' is plural → 'are inspected'. This describes a quality control process.",
            correctFeedbackRu: "Отлично! 'All groceries are inspected carefully before they reach the supermarket shelves.' верно. 'Groceries' — множественное число → 'are inspected'. Это описывает процесс контроля качества.",
            incorrectFeedback: "Try again. The structure is: All groceries + are + inspected + carefully + before they reach the supermarket shelves.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: All groceries + are + inspected + carefully + before they reach the supermarket shelves."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "meat", "is", "cooked", "at", "a", "very", "high", "temperature", "to", "kill", "bacteria."],
            correctAnswer: "The meat is cooked at a very high temperature to kill bacteria.",
            correctFeedback: "Great! 'The meat is cooked at a very high temperature to kill bacteria.' is correct. 'Meat' is singular and uncountable → 'is cooked'. Passive is very common in recipes and cooking instructions.",
            correctFeedbackRu: "Отлично! 'The meat is cooked at a very high temperature to kill bacteria.' верно. 'Meat' — единственное число и несчитаемое → 'is cooked'. Пассивный залог очень распространён в рецептах и кулинарных инструкциях.",
            incorrectFeedback: "Try again. The structure is: The meat + is + cooked + at a very high temperature + to kill bacteria.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The meat + is + cooked + at a very high temperature + to kill bacteria."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Discount", "coupons", "are", "sent", "to", "loyal", "customers", "at", "the", "end", "of", "each", "month."],
            correctAnswer: "Discount coupons are sent to loyal customers at the end of each month.",
            correctFeedback: "Perfect! 'Discount coupons are sent to loyal customers at the end of each month.' is correct. 'Coupons' is plural → 'are sent'. This describes a regular business practice.",
            correctFeedbackRu: "Идеально! 'Discount coupons are sent to loyal customers at the end of each month.' верно. 'Coupons' — множественное число → 'are sent'. Это описывает регулярную деловую практику.",
            incorrectFeedback: "Try again. The structure is: Discount coupons + are + sent + to loyal customers + at the end of each month.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Discount coupons + are + sent + to loyal customers + at the end of each month."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "price", "of", "each", "item", "is", "shown", "on", "the", "label."],
            correctAnswer: "The price of each item is shown on the label.",
            correctFeedback: "Excellent! 'The price of each item is shown on the label.' is correct. 'The price' is singular → 'is shown'. Passive is used because who puts the price on isn't important.",
            correctFeedbackRu: "Отлично! 'The price of each item is shown on the label.' верно. 'The price' — единственное число → 'is shown'. Пассивный залог используется, потому что кто ставит цену — неважно.",
            incorrectFeedback: "Try again. The structure is: The price of each item + is + shown + on the label.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The price of each item + is + shown + on the label."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Returned", "items", "are", "accepted", "only", "with", "a", "receipt."],
            correctAnswer: "Returned items are accepted only with a receipt.",
            correctFeedback: "Great! 'Returned items are accepted only with a receipt.' is correct. 'Items' is plural → 'are accepted'. This is a typical shop policy written in passive.",
            correctFeedbackRu: "Отлично! 'Returned items are accepted only with a receipt.' верно. 'Items' — множественное число → 'are accepted'. Это типичная политика магазина, написанная в пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: Returned items + are + accepted + only + with a receipt.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Returned items + are + accepted + only + with a receipt."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Wine", "is", "stored", "in", "large", "wooden", "barrels", "for", "at", "least", "one", "year."],
            correctAnswer: "Wine is stored in large wooden barrels for at least one year.",
            correctFeedback: "Perfect! 'Wine is stored in large wooden barrels for at least one year.' is correct. 'Wine' is uncountable and singular → 'is stored'. This describes the wine-making process.",
            correctFeedbackRu: "Идеально! 'Wine is stored in large wooden barrels for at least one year.' верно. 'Wine' — несчитаемое и единственное число → 'is stored'. Это описывает процесс виноделия.",
            incorrectFeedback: "Try again. The structure is: Wine + is + stored + in large wooden barrels + for at least one year.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Wine + is + stored + in large wooden barrels + for at least one year."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Online", "orders", "are", "processed", "within", "two", "business", "days."],
            correctAnswer: "Online orders are processed within two business days.",
            correctFeedback: "Excellent! 'Online orders are processed within two business days.' is correct. 'Orders' is plural → 'are processed'. This is a standard business information statement.",
            correctFeedbackRu: "Отлично! 'Online orders are processed within two business days.' верно. 'Orders' — множественное число → 'are processed'. Это стандартное деловое информационное заявление.",
            incorrectFeedback: "Try again. The structure is: Online orders + are + processed + within two business days.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Online orders + are + processed + within two business days."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["All", "dishes", "in", "this", "restaurant", "are", "prepared", "with", "locally", "grown", "produce."],
            correctAnswer: "All dishes in this restaurant are prepared with locally grown produce.",
            correctFeedback: "Great! 'All dishes in this restaurant are prepared with locally grown produce.' is correct. 'Dishes' is plural → 'are prepared'. This is typical restaurant menu language in passive.",
            correctFeedbackRu: "Отлично! 'All dishes in this restaurant are prepared with locally grown produce.' верно. 'Dishes' — множественное число → 'are prepared'. Это типичный язык ресторанного меню в пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: All dishes + in this restaurant + are + prepared + with locally grown produce.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: All dishes + in this restaurant + are + prepared + with locally grown produce."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "salad", "dressing", "is", "served", "separately", "so", "customers", "can", "add", "it", "themselves."],
            correctAnswer: "The salad dressing is served separately so customers can add it themselves.",
            correctFeedback: "Perfect! 'The salad dressing is served separately so customers can add it themselves.' is correct. 'The salad dressing' is singular → 'is served'. The reason clause explains why.",
            correctFeedbackRu: "Идеально! 'The salad dressing is served separately so customers can add it themselves.' верно. 'The salad dressing' — единственное число → 'is served'. Придаточное причины объясняет, почему.",
            incorrectFeedback: "Try again. The structure is: The salad dressing + is + served + separately + so customers can add it themselves.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The salad dressing + is + served + separately + so customers can add it themselves."
        }
    ]
};

/* ============================================
Page 4: Present Passive - Rules and Regulations
============================================ */
window.grammarExercises['passive']['present-passive-sentence-page4'] = {
    title: "Present Passive - Rules and Regulations",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Smoking", "is", "not", "allowed", "inside", "any", "public", "building."],
            correctAnswer: "Smoking is not allowed inside any public building.",
            correctFeedback: "Perfect! 'Smoking is not allowed inside any public building.' is correct. 'Smoking' as a subject is singular → 'is not allowed'. Negative passive: is + not + past participle.",
            correctFeedbackRu: "Идеально! 'Smoking is not allowed inside any public building.' верно. 'Smoking' в качестве подлежащего — единственное число → 'is not allowed'. Отрицательный пассивный залог: is + not + причастие прошедшего времени.",
            incorrectFeedback: "Try again. The structure is: Smoking + is + not + allowed + inside any public building.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Smoking + is + not + allowed + inside any public building."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Dogs", "are", "not", "permitted", "inside", "this", "restaurant", "at", "any", "time."],
            correctAnswer: "Dogs are not permitted inside this restaurant at any time.",
            correctFeedback: "Excellent! 'Dogs are not permitted inside this restaurant at any time.' is correct. 'Dogs' is plural → 'are not permitted'. This is a typical rule on signs and notices.",
            correctFeedbackRu: "Отлично! 'Dogs are not permitted inside this restaurant at any time.' верно. 'Dogs' — множественное число → 'are not permitted'. Это типичное правило на знаках и объявлениях.",
            incorrectFeedback: "Try again. The structure is: Dogs + are + not + permitted + inside this restaurant + at any time.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Dogs + are + not + permitted + inside this restaurant + at any time."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Speed", "limits", "are", "enforced", "strictly", "in", "school", "zones."],
            correctAnswer: "Speed limits are enforced strictly in school zones.",
            correctFeedback: "Great! 'Speed limits are enforced strictly in school zones.' is correct. 'Speed limits' is plural → 'are enforced'. The adverb 'strictly' tells us how. Passive is used because who enforces them isn't the focus.",
            correctFeedbackRu: "Отлично! 'Speed limits are enforced strictly in school zones.' верно. 'Speed limits' — множественное число → 'are enforced'. Наречие 'strictly' говорит нам, как. Пассивный залог используется, потому что кто обеспечивает соблюдение — не главное.",
            incorrectFeedback: "Try again. The structure is: Speed limits + are + enforced + strictly + in school zones.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Speed limits + are + enforced + strictly + in school zones."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["All", "bags", "are", "checked", "at", "the", "entrance", "to", "the", "museum."],
            correctAnswer: "All bags are checked at the entrance to the museum.",
            correctFeedback: "Perfect! 'All bags are checked at the entrance to the museum.' is correct. 'All bags' is plural → 'are checked'. This is a security procedure where the guards are not the focus.",
            correctFeedbackRu: "Идеально! 'All bags are checked at the entrance to the museum.' верно. 'All bags' — множественное число → 'are checked'. Это процедура безопасности, где охранники не являются главными.",
            incorrectFeedback: "Try again. The structure is: All bags + are + checked + at the entrance + to the museum.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: All bags + are + checked + at the entrance + to the museum."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Visitors", "are", "asked", "not", "to", "touch", "the", "exhibits."],
            correctAnswer: "Visitors are asked not to touch the exhibits.",
            correctFeedback: "Excellent! 'Visitors are asked not to touch the exhibits.' is correct. 'Visitors' is plural → 'are asked'. The structure 'are asked + to + infinitive' is a polite way to state rules.",
            correctFeedbackRu: "Отлично! 'Visitors are asked not to touch the exhibits.' верно. 'Visitors' — множественное число → 'are asked'. Структура 'are asked + to + инфинитив' — вежливый способ указывать правила.",
            incorrectFeedback: "Try again. The structure is: Visitors + are + asked + not to touch + the exhibits.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Visitors + are + asked + not to touch + the exhibits."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Mobile", "phones", "are", "required", "to", "switch", "off", "during", "the", "performance."],
            correctAnswer: "Mobile phones are required to switch off during the performance.",
            correctFeedback: "Great! 'Mobile phones are required to switch off during the performance.' is correct. 'Mobile phones' is plural → 'are required'. This is a formal obligation expressed in passive.",
            correctFeedbackRu: "Отлично! 'Mobile phones are required to switch off during the performance.' верно. 'Mobile phones' — множественное число → 'are required'. Это формальное обязательство, выраженное в пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: Mobile phones + are + required + to switch off + during the performance.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Mobile phones + are + required + to switch off + during the performance."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Fines", "are", "issued", "for", "parking", "in", "front", "of", "fire", "exits."],
            correctAnswer: "Fines are issued for parking in front of fire exits.",
            correctFeedback: "Perfect! 'Fines are issued for parking in front of fire exits.' is correct. 'Fines' is plural → 'are issued'. Passive is typical when describing consequences and penalties in rules.",
            correctFeedbackRu: "Идеально! 'Fines are issued for parking in front of fire exits.' верно. 'Fines' — множественное число → 'are issued'. Пассивный залог типичен при описании последствий и наказаний в правилах.",
            incorrectFeedback: "Try again. The structure is: Fines + are + issued + for parking + in front of fire exits.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Fines + are + issued + for parking + in front of fire exits."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["This", "door", "is", "kept", "shut", "at", "all", "times", "for", "safety", "reasons."],
            correctAnswer: "This door is kept shut at all times for safety reasons.",
            correctFeedback: "Excellent! 'This door is kept shut at all times for safety reasons.' is correct. 'This door' is singular → 'is kept'. 'Is kept + adjective' describes a maintained state.",
            correctFeedbackRu: "Отлично! 'This door is kept shut at all times for safety reasons.' верно. 'This door' — единственное число → 'is kept'. 'Is kept + прилагательное' описывает поддерживаемое состояние.",
            incorrectFeedback: "Try again. The structure is: This door + is + kept + shut + at all times + for safety reasons.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: This door + is + kept + shut + at all times + for safety reasons."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "park", "is", "kept", "open", "to", "the", "public", "every", "day", "from", "6", "am", "to", "10", "pm."],
            correctAnswer: "The park is kept open to the public every day from 6 am to 10 pm.",
            correctFeedback: "Great! 'The park is kept open to the public every day from 6 am to 10 pm.' is correct. 'The park' is singular → 'is kept'. 'Kept open' means someone maintains it in an open state.",
            correctFeedbackRu: "Отлично! 'The park is kept open to the public every day from 6 am to 10 pm.' верно. 'The park' — единственное число → 'is kept'. 'Kept open' означает, что кто-то поддерживает его в открытом состоянии.",
            incorrectFeedback: "Try again. The structure is: The park + is + kept + open + to the public + every day + from 6 am to 10 pm.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The park + is + kept + open + to the public + every day + from 6 am to 10 pm."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Rubbish", "is", "collected", "in", "the", "bins", "provided", "at", "each", "street", "corner."],
            correctAnswer: "Rubbish is collected in the bins provided at each street corner.",
            correctFeedback: "Perfect! 'Rubbish is collected in the bins provided at each street corner.' is correct. 'Rubbish' is uncountable and singular → 'is collected'. The location detail adds useful information.",
            correctFeedbackRu: "Идеально! 'Rubbish is collected in the bins provided at each street corner.' верно. 'Rubbish' — несчитаемое и единственное число → 'is collected'. Деталь местоположения добавляет полезную информацию.",
            incorrectFeedback: "Try again. The structure is: Rubbish + is + collected + in the bins provided + at each street corner.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Rubbish + is + collected + in the bins provided + at each street corner."
        }
    ]
};

/* ============================================
Page 5: Present Passive - Education
============================================ */
window.grammarExercises['passive']['present-passive-sentence-page5'] = {
    title: "Present Passive - Education",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "exam", "papers", "are", "sorted", "alphabetically", "before", "they", "are", "marked."],
            correctAnswer: "The exam papers are sorted alphabetically before they are marked.",
            correctFeedback: "Perfect! 'The exam papers are sorted alphabetically before they are marked.' is correct. 'Exam papers' is plural → 'are sorted'. Two passive verbs appear: 'are sorted' and 'are marked'.",
            correctFeedbackRu: "Идеально! 'The exam papers are sorted alphabetically before they are marked.' верно. 'Exam papers' — множественное число → 'are sorted'. В предложении два пассивных глагола: 'are sorted' и 'are marked'.",
            incorrectFeedback: "Try again. The structure is: The exam papers + are + sorted + alphabetically + before they are marked.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The exam papers + are + sorted + alphabetically + before they are marked."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Students'", "progress", "is", "tracked", "by", "teachers", "every", "week", "using", "online", "tools."],
            correctAnswer: "Students' progress is tracked by teachers every week using online tools.",
            correctFeedback: "Excellent! 'Students' progress is tracked by teachers every week using online tools.' is correct. 'Progress' is singular → 'is tracked'. The agent 'by teachers' and method 'using online tools' give details.",
            correctFeedbackRu: "Отлично! 'Students' progress is tracked by teachers every week using online tools.' верно. 'Progress' — единственное число → 'is tracked'. Агент 'by teachers' и метод 'using online tools' дают детали.",
            incorrectFeedback: "Try again. The structure is: Students' progress + is + tracked + by teachers + every week + using online tools.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Students' progress + is + tracked + by teachers + every week + using online tools."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Certificates", "are", "awarded", "to", "students", "who", "pass", "all", "their", "exams."],
            correctAnswer: "Certificates are awarded to students who pass all their exams.",
            correctFeedback: "Great! 'Certificates are awarded to students who pass all their exams.' is correct. 'Certificates' is plural → 'are awarded'. This is passive with an indirect object — students receive the certificates.",
            correctFeedbackRu: "Отлично! 'Certificates are awarded to students who pass all their exams.' верно. 'Certificates' — множественное число → 'are awarded'. Это пассивный залог с косвенным дополнением — студенты получают сертификаты.",
            incorrectFeedback: "Try again. The structure is: Certificates + are + awarded + to students + who pass all their exams.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Certificates + are + awarded + to students + who pass all their exams."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["New", "textbooks", "are", "given", "to", "every", "student", "at", "the", "start", "of", "the", "academic", "year."],
            correctAnswer: "New textbooks are given to every student at the start of the academic year.",
            correctFeedback: "Perfect! 'New textbooks are given to every student at the start of the academic year.' is correct. 'Textbooks' is plural → 'are given'. The time phrase 'at the start of the academic year' shows when.",
            correctFeedbackRu: "Идеально! 'New textbooks are given to every student at the start of the academic year.' верно. 'Textbooks' — множественное число → 'are given'. Временная фраза 'at the start of the academic year' показывает, когда.",
            incorrectFeedback: "Try again. The structure is: New textbooks + are + given + to every student + at the start of the academic year.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: New textbooks + are + given + to every student + at the start of the academic year."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "library", "is", "used", "by", "both", "students", "and", "teachers", "throughout", "the", "day."],
            correctAnswer: "The library is used by both students and teachers throughout the day.",
            correctFeedback: "Excellent! 'The library is used by both students and teachers throughout the day.' is correct. 'The library' is singular → 'is used'. Two agents are mentioned: students and teachers.",
            correctFeedbackRu: "Отлично! 'The library is used by both students and teachers throughout the day.' верно. 'The library' — единственное число → 'is used'. Упоминаются два агента: студенты и учителя.",
            incorrectFeedback: "Try again. The structure is: The library + is + used + by both students and teachers + throughout the day.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The library + is + used + by both students and teachers + throughout the day."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Homework", "is", "checked", "at", "the", "beginning", "of", "every", "class."],
            correctAnswer: "Homework is checked at the beginning of every class.",
            correctFeedback: "Great! 'Homework is checked at the beginning of every class.' is correct. 'Homework' is uncountable and singular → 'is checked'. This describes a regular classroom routine.",
            correctFeedbackRu: "Отлично! 'Homework is checked at the beginning of every class.' верно. 'Homework' — несчитаемое и единственное число → 'is checked'. Это описывает регулярную классную рутину.",
            incorrectFeedback: "Try again. The structure is: Homework + is + checked + at the beginning + of every class.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Homework + is + checked + at the beginning + of every class."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["School", "reports", "are", "sent", "to", "parents", "at", "the", "end", "of", "each", "term."],
            correctAnswer: "School reports are sent to parents at the end of each term.",
            correctFeedback: "Perfect! 'School reports are sent to parents at the end of each term.' is correct. 'Reports' is plural → 'are sent'. This is a regular school communication described in passive.",
            correctFeedbackRu: "Идеально! 'School reports are sent to parents at the end of each term.' верно. 'Reports' — множественное число → 'are sent'. Это регулярная школьная коммуникация, описанная в пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: School reports + are + sent + to parents + at the end of each term.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: School reports + are + sent + to parents + at the end of each term."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "school", "canteen", "is", "inspected", "by", "health", "officers", "twice", "a", "year."],
            correctAnswer: "The school canteen is inspected by health officers twice a year.",
            correctFeedback: "Excellent! 'The school canteen is inspected by health officers twice a year.' is correct. 'The school canteen' is singular → 'is inspected'. The agent 'by health officers' and frequency 'twice a year' add detail.",
            correctFeedbackRu: "Отлично! 'The school canteen is inspected by health officers twice a year.' верно. 'The school canteen' — единственное число → 'is inspected'. Агент 'by health officers' и частотность 'twice a year' добавляют детали.",
            incorrectFeedback: "Try again. The structure is: The school canteen + is + inspected + by health officers + twice a year.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The school canteen + is + inspected + by health officers + twice a year."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Sports", "equipment", "is", "stored", "in", "a", "locked", "room", "after", "each", "lesson."],
            correctAnswer: "Sports equipment is stored in a locked room after each lesson.",
            correctFeedback: "Great! 'Sports equipment is stored in a locked room after each lesson.' is correct. 'Sports equipment' is uncountable and singular → 'is stored'. The time phrase 'after each lesson' shows when.",
            correctFeedbackRu: "Отлично! 'Sports equipment is stored in a locked room after each lesson.' верно. 'Sports equipment' — несчитаемое и единственное число → 'is stored'. Временная фраза 'after each lesson' показывает, когда.",
            incorrectFeedback: "Try again. The structure is: Sports equipment + is + stored + in a locked room + after each lesson.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Sports equipment + is + stored + in a locked room + after each lesson."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Lost", "items", "are", "kept", "in", "a", "box", "at", "the", "school", "reception", "for", "one", "month."],
            correctAnswer: "Lost items are kept in a box at the school reception for one month.",
            correctFeedback: "Perfect! 'Lost items are kept in a box at the school reception for one month.' is correct. 'Lost items' is plural → 'are kept'. 'Keep' is irregular: keep → kept. The duration 'for one month' is included.",
            correctFeedbackRu: "Идеально! 'Lost items are kept in a box at the school reception for one month.' верно. 'Lost items' — множественное число → 'are kept'. 'Keep' — неправильный глагол: keep → kept. Длительность 'for one month' включена.",
            incorrectFeedback: "Try again. The structure is: Lost items + are + kept + in a box + at the school reception + for one month.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Lost items + are + kept + in a box + at the school reception + for one month."
        }
    ]
};

/* ============================================
Page 6: Present Passive - Health and Medicine
============================================ */
window.grammarExercises['passive']['present-passive-sentence-page6'] = {
    title: "Present Passive - Health and Medicine",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Patients", "are", "seen", "in", "order", "of", "arrival", "at", "the", "clinic."],
            correctAnswer: "Patients are seen in order of arrival at the clinic.",
            correctFeedback: "Perfect! 'Patients are seen in order of arrival at the clinic.' is correct. 'Patients' is plural → 'are seen'. In medical context, 'are seen' means patients are received and examined by a doctor.",
            correctFeedbackRu: "Идеально! 'Patients are seen in order of arrival at the clinic.' верно. 'Patients' — множественное число → 'are seen'. В медицинском контексте 'are seen' означает, что пациентов принимает и осматривает врач.",
            incorrectFeedback: "Try again. The structure is: Patients + are + seen + in order of arrival + at the clinic.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Patients + are + seen + in order of arrival + at the clinic."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Blood", "samples", "are", "taken", "to", "the", "laboratory", "for", "analysis."],
            correctAnswer: "Blood samples are taken to the laboratory for analysis.",
            correctFeedback: "Excellent! 'Blood samples are taken to the laboratory for analysis.' is correct. 'Blood samples' is plural → 'are taken'. 'Take' is irregular: take → taken. This is a standard medical procedure.",
            correctFeedbackRu: "Отлично! 'Blood samples are taken to the laboratory for analysis.' верно. 'Blood samples' — множественное число → 'are taken'. 'Take' — неправильный глагол: take → taken. Это стандартная медицинская процедура.",
            incorrectFeedback: "Try again. The structure is: Blood samples + are + taken + to the laboratory + for analysis.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Blood samples + are + taken + to the laboratory + for analysis."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "vaccine", "is", "offered", "to", "all", "children", "between", "the", "ages", "of", "one", "and", "five."],
            correctAnswer: "The vaccine is offered to all children between the ages of one and five.",
            correctFeedback: "Great! 'The vaccine is offered to all children between the ages of one and five.' is correct. 'The vaccine' is singular → 'is offered'. This describes a public health programme.",
            correctFeedbackRu: "Отлично! 'The vaccine is offered to all children between the ages of one and five.' верно. 'The vaccine' — единственное число → 'is offered'. Это описывает программу общественного здравоохранения.",
            incorrectFeedback: "Try again. The structure is: The vaccine + is + offered + to all children + between the ages of one and five.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The vaccine + is + offered + to all children + between the ages of one and five."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Medicines", "are", "prescribed", "by", "doctors", "and", "dispensed", "by", "pharmacists."],
            correctAnswer: "Medicines are prescribed by doctors and dispensed by pharmacists.",
            correctFeedback: "Perfect! 'Medicines are prescribed by doctors and dispensed by pharmacists.' is correct. 'Medicines' is plural → 'are prescribed'. Two agents are given with two passive verbs in one sentence.",
            correctFeedbackRu: "Идеально! 'Medicines are prescribed by doctors and dispensed by pharmacists.' верно. 'Medicines' — множественное число → 'are prescribed'. Два агента с двумя пассивными глаголами в одном предложении.",
            incorrectFeedback: "Try again. The structure is: Medicines + are + prescribed + by doctors + and dispensed + by pharmacists.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Medicines + are + prescribed + by doctors + and dispensed + by pharmacists."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["All", "medical", "records", "are", "kept", "confidential", "by", "law."],
            correctAnswer: "All medical records are kept confidential by law.",
            correctFeedback: "Excellent! 'All medical records are kept confidential by law.' is correct. 'Medical records' is plural → 'are kept'. The agent 'by law' tells us what requires this. 'Kept + adjective' describes a maintained state.",
            correctFeedbackRu: "Отлично! 'All medical records are kept confidential by law.' верно. 'Medical records' — множественное число → 'are kept'. Агент 'by law' говорит нам, что это требует. 'Kept + прилагательное' описывает поддерживаемое состояние.",
            incorrectFeedback: "Try again. The structure is: All medical records + are + kept + confidential + by law.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: All medical records + are + kept + confidential + by law."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "operating", "theatre", "is", "sterilised", "thoroughly", "after", "every", "procedure."],
            correctAnswer: "The operating theatre is sterilised thoroughly after every procedure.",
            correctFeedback: "Great! 'The operating theatre is sterilised thoroughly after every procedure.' is correct. 'The operating theatre' is singular → 'is sterilised'. The adverb 'thoroughly' tells us how.",
            correctFeedbackRu: "Отлично! 'The operating theatre is sterilised thoroughly after every procedure.' верно. 'The operating theatre' — единственное число → 'is sterilised'. Наречие 'thoroughly' говорит нам, как.",
            incorrectFeedback: "Try again. The structure is: The operating theatre + is + sterilised + thoroughly + after every procedure.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The operating theatre + is + sterilised + thoroughly + after every procedure."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["New", "treatments", "are", "tested", "in", "clinical", "trials", "before", "they", "are", "approved."],
            correctAnswer: "New treatments are tested in clinical trials before they are approved.",
            correctFeedback: "Perfect! 'New treatments are tested in clinical trials before they are approved.' is correct. 'Treatments' is plural → 'are tested'. Two passive verbs appear: 'are tested' and 'are approved'.",
            correctFeedbackRu: "Идеально! 'New treatments are tested in clinical trials before they are approved.' верно. 'Treatments' — множественное число → 'are tested'. Два пассивных глагола: 'are tested' и 'are approved'.",
            incorrectFeedback: "Try again. The structure is: New treatments + are + tested + in clinical trials + before they are approved.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: New treatments + are + tested + in clinical trials + before they are approved."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "patient's", "temperature", "is", "measured", "every", "four", "hours", "by", "the", "nursing", "staff."],
            correctAnswer: "The patient's temperature is measured every four hours by the nursing staff.",
            correctFeedback: "Excellent! 'The patient's temperature is measured every four hours by the nursing staff.' is correct. 'Temperature' is singular → 'is measured'. The frequency and agent both add important information.",
            correctFeedbackRu: "Отлично! 'The patient's temperature is measured every four hours by the nursing staff.' верно. 'Temperature' — единственное число → 'is measured'. Частотность и агент оба добавляют важную информацию.",
            incorrectFeedback: "Try again. The structure is: The patient's temperature + is + measured + every four hours + by the nursing staff.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The patient's temperature + is + measured + every four hours + by the nursing staff."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Ambulances", "are", "sent", "to", "the", "location", "within", "minutes", "of", "an", "emergency", "call."],
            correctAnswer: "Ambulances are sent to the location within minutes of an emergency call.",
            correctFeedback: "Great! 'Ambulances are sent to the location within minutes of an emergency call.' is correct. 'Ambulances' is plural → 'are sent'. This describes an emergency response procedure.",
            correctFeedbackRu: "Отлично! 'Ambulances are sent to the location within minutes of an emergency call.' верно. 'Ambulances' — множественное число → 'are sent'. Это описывает процедуру экстренного реагирования.",
            incorrectFeedback: "Try again. The structure is: Ambulances + are + sent + to the location + within minutes + of an emergency call.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Ambulances + are + sent + to the location + within minutes + of an emergency call."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "hospital", "canteen", "is", "cleaned", "and", "restocked", "every", "morning."],
            correctAnswer: "The hospital canteen is cleaned and restocked every morning.",
            correctFeedback: "Perfect! 'The hospital canteen is cleaned and restocked every morning.' is correct. 'The hospital canteen' is singular → 'is cleaned'. Two passive verbs share the same subject: 'is cleaned and (is) restocked'.",
            correctFeedbackRu: "Идеально! 'The hospital canteen is cleaned and restocked every morning.' верно. 'The hospital canteen' — единственное число → 'is cleaned'. Два пассивных глагола разделяют одно подлежащее: 'is cleaned and (is) restocked'.",
            incorrectFeedback: "Try again. The structure is: The hospital canteen + is + cleaned + and restocked + every morning.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The hospital canteen + is + cleaned + and restocked + every morning."
        }
    ]
};

/* ============================================
Page 7: Present Passive - Environment and Nature
============================================ */
window.grammarExercises['passive']['present-passive-sentence-page7'] = {
    title: "Present Passive - Environment and Nature",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Recycled", "materials", "are", "used", "to", "produce", "new", "packaging."],
            correctAnswer: "Recycled materials are used to produce new packaging.",
            correctFeedback: "Perfect! 'Recycled materials are used to produce new packaging.' is correct. 'Materials' is plural → 'are used'. The purpose 'to produce new packaging' explains why. Passive focuses on the materials.",
            correctFeedbackRu: "Идеально! 'Recycled materials are used to produce new packaging.' верно. 'Materials' — множественное число → 'are used'. Цель 'to produce new packaging' объясняет, зачем. Пассивный залог фокусируется на материалах.",
            incorrectFeedback: "Try again. The structure is: Recycled materials + are + used + to produce + new packaging.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Recycled materials + are + used + to produce + new packaging."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "coastline", "is", "threatened", "by", "rising", "sea", "levels", "and", "storm", "erosion."],
            correctAnswer: "The coastline is threatened by rising sea levels and storm erosion.",
            correctFeedback: "Excellent! 'The coastline is threatened by rising sea levels and storm erosion.' is correct. 'The coastline' is singular → 'is threatened'. Two agents are listed and joined with 'and'.",
            correctFeedbackRu: "Отлично! 'The coastline is threatened by rising sea levels and storm erosion.' верно. 'The coastline' — единственное число → 'is threatened'. Два агента перечислены и соединены 'and'.",
            incorrectFeedback: "Try again. The structure is: The coastline + is + threatened + by rising sea levels + and storm erosion.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The coastline + is + threatened + by rising sea levels + and storm erosion."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Fossil", "fuels", "are", "burned", "for", "most", "of", "the", "world's", "energy", "needs."],
            correctAnswer: "Fossil fuels are burned for most of the world's energy needs.",
            correctFeedback: "Great! 'Fossil fuels are burned for most of the world's energy needs.' is correct. 'Fossil fuels' is plural → 'are burned'. This is a factual statement about current global energy use.",
            correctFeedbackRu: "Отлично! 'Fossil fuels are burned for most of the world's energy needs.' верно. 'Fossil fuels' — множественное число → 'are burned'. Это фактическое утверждение о текущем мировом потреблении энергии.",
            incorrectFeedback: "Try again. The structure is: Fossil fuels + are + burned + for most of the world's energy needs.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Fossil fuels + are + burned + for most of the world's energy needs."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Water", "from", "mountain", "streams", "is", "purified", "before", "it", "reaches", "people's", "homes."],
            correctAnswer: "Water from mountain streams is purified before it reaches people's homes.",
            correctFeedback: "Perfect! 'Water from mountain streams is purified before it reaches people's homes.' is correct. 'Water' is uncountable and singular → 'is purified'. The clause shows the sequence of the water treatment process.",
            correctFeedbackRu: "Идеально! 'Water from mountain streams is purified before it reaches people's homes.' верно. 'Water' — несчитаемое и единственное число → 'is purified'. Придаточное показывает последовательность процесса водоочистки.",
            incorrectFeedback: "Try again. The structure is: Water from mountain streams + is + purified + before it reaches people's homes.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Water from mountain streams + is + purified + before it reaches people's homes."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Carbon", "emissions", "are", "controlled", "by", "international", "agreements."],
            correctAnswer: "Carbon emissions are controlled by international agreements.",
            correctFeedback: "Excellent! 'Carbon emissions are controlled by international agreements.' is correct. 'Carbon emissions' is plural → 'are controlled'. The agent 'by international agreements' tells us what limits them.",
            correctFeedbackRu: "Отлично! 'Carbon emissions are controlled by international agreements.' верно. 'Carbon emissions' — множественное число → 'are controlled'. Агент 'by international agreements' говорит нам, что их ограничивает.",
            incorrectFeedback: "Try again. The structure is: Carbon emissions + are + controlled + by international agreements.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Carbon emissions + are + controlled + by international agreements."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Sea", "turtles", "are", "observed", "on", "protected", "beaches", "during", "nesting", "season."],
            correctAnswer: "Sea turtles are observed on protected beaches during nesting season.",
            correctFeedback: "Great! 'Sea turtles are observed on protected beaches during nesting season.' is correct. 'Sea turtles' is plural → 'are observed'. The time phrase 'during nesting season' adds context.",
            correctFeedbackRu: "Отлично! 'Sea turtles are observed on protected beaches during nesting season.' верно. 'Sea turtles' — множественное число → 'are observed'. Временная фраза 'during nesting season' добавляет контекст.",
            incorrectFeedback: "Try again. The structure is: Sea turtles + are + observed + on protected beaches + during nesting season.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Sea turtles + are + observed + on protected beaches + during nesting season."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Endangered", "species", "are", "protected", "by", "national", "and", "international", "wildlife", "laws."],
            correctAnswer: "Endangered species are protected by national and international wildlife laws.",
            correctFeedback: "Perfect! 'Endangered species are protected by national and international wildlife laws.' is correct. 'Species' is plural → 'are protected'. The agent 'by national and international wildlife laws' explains what protects them.",
            correctFeedbackRu: "Идеально! 'Endangered species are protected by national and international wildlife laws.' верно. 'Species' — множественное число → 'are protected'. Агент 'by national and international wildlife laws' объясняет, что их защищает.",
            incorrectFeedback: "Try again. The structure is: Endangered species + are + protected + by national and international wildlife laws.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Endangered species + are + protected + by national and international wildlife laws."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Plastic", "waste", "is", "collected", "from", "beaches", "by", "volunteer", "groups", "every", "weekend."],
            correctAnswer: "Plastic waste is collected from beaches by volunteer groups every weekend.",
            correctFeedback: "Excellent! 'Plastic waste is collected from beaches by volunteer groups every weekend.' is correct. 'Plastic waste' is uncountable and singular → 'is collected'. Both the agent and frequency are included.",
            correctFeedbackRu: "Отлично! 'Plastic waste is collected from beaches by volunteer groups every weekend.' верно. 'Plastic waste' — несчитаемое и единственное число → 'is collected'. Включены и агент, и частотность.",
            incorrectFeedback: "Try again. The structure is: Plastic waste + is + collected + from beaches + by volunteer groups + every weekend.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Plastic waste + is + collected + from beaches + by volunteer groups + every weekend."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Trees", "are", "planted", "in", "the", "park", "as", "part", "of", "a", "city", "greening", "programme."],
            correctAnswer: "Trees are planted in the park as part of a city greening programme.",
            correctFeedback: "Great! 'Trees are planted in the park as part of a city greening programme.' is correct. 'Trees' is plural → 'are planted'. This describes a regular urban environmental action.",
            correctFeedbackRu: "Отлично! 'Trees are planted in the park as part of a city greening programme.' верно. 'Trees' — множественное число → 'are planted'. Это описывает регулярное городское экологическое действие.",
            incorrectFeedback: "Try again. The structure is: Trees + are + planted + in the park + as part of a city greening programme.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Trees + are + planted + in the park + as part of a city greening programme."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Air", "quality", "is", "monitored", "at", "several", "points", "around", "the", "city", "every", "hour."],
            correctAnswer: "Air quality is monitored at several points around the city every hour.",
            correctFeedback: "Perfect! 'Air quality is monitored at several points around the city every hour.' is correct. 'Air quality' is singular → 'is monitored'. The frequency 'every hour' shows this is a continuous process.",
            correctFeedbackRu: "Идеально! 'Air quality is monitored at several points around the city every hour.' верно. 'Air quality' — единственное число → 'is monitored'. Частотность 'every hour' показывает, что это непрерывный процесс.",
            incorrectFeedback: "Try again. The structure is: Air quality + is + monitored + at several points + around the city + every hour.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Air quality + is + monitored + at several points + around the city + every hour."
        }
    ]
};

/* ============================================
Page 8: Present Passive - Culture and Entertainment
============================================ */
window.grammarExercises['passive']['present-passive-sentence-page8'] = {
    title: "Present Passive - Culture and Entertainment",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "film", "festival", "is", "held", "every", "summer", "in", "this", "city."],
            correctAnswer: "The film festival is held every summer in this city.",
            correctFeedback: "Perfect! 'The film festival is held every summer in this city.' is correct. 'The film festival' is singular → 'is held'. 'Hold' is irregular: hold → held. Events are commonly described in passive.",
            correctFeedbackRu: "Идеально! 'The film festival is held every summer in this city.' верно. 'The film festival' — единственное число → 'is held'. 'Hold' — неправильный глагол: hold → held. Мероприятия обычно описываются в пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: The film festival + is + held + every summer + in this city.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The film festival + is + held + every summer + in this city."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Songs", "from", "that", "album", "are", "loved", "by", "people", "of", "all", "ages."],
            correctAnswer: "Songs from that album are loved by people of all ages.",
            correctFeedback: "Excellent! 'Songs from that album are loved by people of all ages.' is correct. 'Songs' is plural → 'are loved'. The agent 'by people of all ages' shows who loves them. Emotional responses are often expressed in passive.",
            correctFeedbackRu: "Отлично! 'Songs from that album are loved by people of all ages.' верно. 'Songs' — множественное число → 'are loved'. Агент 'by people of all ages' показывает, кто их любит. Эмоциональные реакции часто выражаются в пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: Songs from that album + are + loved + by people of all ages.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Songs from that album + are + loved + by people of all ages."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["New", "exhibitions", "are", "launched", "at", "the", "city", "gallery", "every", "month."],
            correctAnswer: "New exhibitions are launched at the city gallery every month.",
            correctFeedback: "Great! 'New exhibitions are launched at the city gallery every month.' is correct. 'Exhibitions' is plural → 'are launched'. The frequency 'every month' confirms a regular cultural pattern.",
            correctFeedbackRu: "Отлично! 'New exhibitions are launched at the city gallery every month.' верно. 'Exhibitions' — множественное число → 'are launched'. Частотность 'every month' подтверждает регулярную культурную схему.",
            incorrectFeedback: "Try again. The structure is: New exhibitions + are + launched + at the city gallery + every month.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: New exhibitions + are + launched + at the city gallery + every month."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "play", "is", "performed", "in", "three", "different", "languages", "for", "international", "audiences."],
            correctAnswer: "The play is performed in three different languages for international audiences.",
            correctFeedback: "Perfect! 'The play is performed in three different languages for international audiences.' is correct. 'The play' is singular → 'is performed'. Theatre and arts frequently use passive when describing performances.",
            correctFeedbackRu: "Идеально! 'The play is performed in three different languages for international audiences.' верно. 'The play' — единственное число → 'is performed'. Театр и искусство часто используют пассивный залог при описании выступлений.",
            incorrectFeedback: "Try again. The structure is: The play + is + performed + in three different languages + for international audiences.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The play + is + performed + in three different languages + for international audiences."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "award", "ceremony", "is", "broadcast", "live", "on", "national", "television", "every", "year."],
            correctAnswer: "The award ceremony is broadcast live on national television every year.",
            correctFeedback: "Excellent! 'The award ceremony is broadcast live on national television every year.' is correct. 'The award ceremony' is singular → 'is broadcast'. Note: 'broadcast' is irregular — past participle is the same as the base form.",
            correctFeedbackRu: "Отлично! 'The award ceremony is broadcast live on national television every year.' верно. 'The award ceremony' — единственное число → 'is broadcast'. Обратите внимание: 'broadcast' — неправильный глагол — причастие прошедшего времени совпадает с основной формой.",
            incorrectFeedback: "Try again. The structure is: The award ceremony + is + broadcast + live + on national television + every year.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The award ceremony + is + broadcast + live + on national television + every year."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Traditional", "dances", "are", "taught", "to", "the", "next", "generation", "by", "older", "members", "of", "the", "community."],
            correctAnswer: "Traditional dances are taught to the next generation by older members of the community.",
            correctFeedback: "Great! 'Traditional dances are taught to the next generation by older members of the community.' is correct. 'Dances' is plural → 'are taught'. 'Teach' is irregular: teach → taught. This is a cultural preservation context.",
            correctFeedbackRu: "Отлично! 'Traditional dances are taught to the next generation by older members of the community.' верно. 'Dances' — множественное число → 'are taught'. 'Teach' — неправильный глагол: teach → taught. Это контекст сохранения культуры.",
            incorrectFeedback: "Try again. The structure is: Traditional dances + are + taught + to the next generation + by older members of the community.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Traditional dances + are + taught + to the next generation + by older members of the community."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["This", "famous", "novel", "is", "translated", "into", "more", "than", "40", "languages", "worldwide."],
            correctAnswer: "This famous novel is translated into more than 40 languages worldwide.",
            correctFeedback: "Perfect! 'This famous novel is translated into more than 40 languages worldwide.' is correct. 'This famous novel' is singular → 'is translated'. The number '40 languages' emphasises the book's global reach.",
            correctFeedbackRu: "Идеально! 'This famous novel is translated into more than 40 languages worldwide.' верно. 'This famous novel' — единственное число → 'is translated'. Число '40 languages' подчёркивает глобальный охват книги.",
            incorrectFeedback: "Try again. The structure is: This famous novel + is + translated + into more than 40 languages + worldwide.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: This famous novel + is + translated + into more than 40 languages + worldwide."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Tickets", "for", "the", "concert", "are", "sold", "online", "and", "at", "the", "box", "office."],
            correctAnswer: "Tickets for the concert are sold online and at the box office.",
            correctFeedback: "Excellent! 'Tickets for the concert are sold online and at the box office.' is correct. 'Tickets' is plural → 'are sold'. Two locations are given: online and at the box office.",
            correctFeedbackRu: "Отлично! 'Tickets for the concert are sold online and at the box office.' верно. 'Tickets' — множественное число → 'are sold'. Даны два места: онлайн и в кассе.",
            incorrectFeedback: "Try again. The structure is: Tickets for the concert + are + sold + online + and at the box office.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Tickets for the concert + are + sold + online + and at the box office."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "museum", "is", "visited", "by", "thousands", "of", "school", "children", "every", "year."],
            correctAnswer: "The museum is visited by thousands of school children every year.",
            correctFeedback: "Great! 'The museum is visited by thousands of school children every year.' is correct. 'The museum' is singular → 'is visited'. The agent 'by thousands of school children' and frequency 'every year' both add detail.",
            correctFeedbackRu: "Отлично! 'The museum is visited by thousands of school children every year.' верно. 'The museum' — единственное число → 'is visited'. Агент 'by thousands of school children' и частотность 'every year' оба добавляют детали.",
            incorrectFeedback: "Try again. The structure is: The museum + is + visited + by thousands of school children + every year.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The museum + is + visited + by thousands of school children + every year."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Local", "artists", "are", "given", "a", "space", "to", "display", "their", "work", "in", "the", "community", "centre."],
            correctAnswer: "Local artists are given a space to display their work in the community centre.",
            correctFeedback: "Perfect! 'Local artists are given a space to display their work in the community centre.' is correct. 'Local artists' is plural → 'are given'. This is passive with an indirect object — the artists receive the space.",
            correctFeedbackRu: "Идеально! 'Local artists are given a space to display their work in the community centre.' верно. 'Local artists' — множественное число → 'are given'. Это пассивный залог с косвенным дополнением — художники получают пространство.",
            incorrectFeedback: "Try again. The structure is: Local artists + are + given + a space + to display their work + in the community centre.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Local artists + are + given + a space + to display their work + in the community centre."
        }
    ]
};

/* ============================================
Page 9: Present Passive - Travel and Transport
============================================ */
window.grammarExercises['passive']['present-passive-sentence-page9'] = {
    title: "Present Passive - Travel and Transport",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Passports", "are", "checked", "at", "the", "border", "by", "immigration", "officers."],
            correctAnswer: "Passports are checked at the border by immigration officers.",
            correctFeedback: "Perfect! 'Passports are checked at the border by immigration officers.' is correct. 'Passports' is plural → 'are checked'. The agent 'by immigration officers' tells us who checks them.",
            correctFeedbackRu: "Идеально! 'Passports are checked at the border by immigration officers.' верно. 'Passports' — множественное число → 'are checked'. Агент 'by immigration officers' говорит нам, кто их проверяет.",
            incorrectFeedback: "Try again. The structure is: Passports + are + checked + at the border + by immigration officers.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Passports + are + checked + at the border + by immigration officers."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Road", "signs", "in", "this", "country", "are", "written", "in", "both", "local", "and", "English."],
            correctAnswer: "Road signs in this country are written in both local and English.",
            correctFeedback: "Excellent! 'Road signs in this country are written in both local and English.' is correct. 'Road signs' is plural → 'are written'. This is a factual statement about multilingual signage.",
            correctFeedbackRu: "Отлично! 'Road signs in this country are written in both local and English.' верно. 'Road signs' — множественное число → 'are written'. Это фактическое утверждение о многоязычных указателях.",
            incorrectFeedback: "Try again. The structure is: Road signs + in this country + are + written + in both local and English.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Road signs + in this country + are + written + in both local and English."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Free", "Wi-Fi", "is", "provided", "to", "all", "passengers", "during", "the", "train", "journey."],
            correctAnswer: "Free Wi-Fi is provided to all passengers during the train journey.",
            correctFeedback: "Great! 'Free Wi-Fi is provided to all passengers during the train journey.' is correct. 'Free Wi-Fi' is singular and uncountable → 'is provided'. This describes a passenger service feature.",
            correctFeedbackRu: "Отлично! 'Free Wi-Fi is provided to all passengers during the train journey.' верно. 'Free Wi-Fi' — единственное число и несчитаемое → 'is provided'. Это описывает характеристику пассажирского сервиса.",
            incorrectFeedback: "Try again. The structure is: Free Wi-Fi + is + provided + to all passengers + during the train journey.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Free Wi-Fi + is + provided + to all passengers + during the train journey."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Taxis", "in", "this", "city", "are", "equipped", "with", "GPS", "tracking", "systems", "for", "passenger", "safety."],
            correctAnswer: "Taxis in this city are equipped with GPS tracking systems for passenger safety.",
            correctFeedback: "Perfect! 'Taxis in this city are equipped with GPS tracking systems for passenger safety.' is correct. 'Taxis' is plural → 'are equipped'. 'With GPS tracking systems' tells us what equipment they have.",
            correctFeedbackRu: "Идеально! 'Taxis in this city are equipped with GPS tracking systems for passenger safety.' верно. 'Taxis' — множественное число → 'are equipped'. 'With GPS tracking systems' говорит нам, каким оборудованием они оснащены.",
            incorrectFeedback: "Try again. The structure is: Taxis + in this city + are + equipped + with GPS tracking systems + for passenger safety.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Taxis + in this city + are + equipped + with GPS tracking systems + for passenger safety."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Delayed", "flights", "are", "directed", "to", "a", "lounge", "area", "where", "refreshments", "are", "available."],
            correctAnswer: "Delayed flights are directed to a lounge area where refreshments are available.",
            correctFeedback: "Excellent! 'Delayed flights are directed to a lounge area where refreshments are available.' is correct. 'Delayed flights' is plural → 'are directed'. The relative clause explains what is available in the lounge.",
            correctFeedbackRu: "Отлично! 'Delayed flights are directed to a lounge area where refreshments are available.' верно. 'Delayed flights' — множественное число → 'are directed'. Относительное придаточное объясняет, что доступно в лаундже.",
            incorrectFeedback: "Try again. The structure is: Delayed flights + are + directed + to a lounge area + where refreshments are available.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Delayed flights + are + directed + to a lounge area + where refreshments are available."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Announcements", "are", "made", "in", "three", "languages", "at", "this", "international", "airport."],
            correctAnswer: "Announcements are made in three languages at this international airport.",
            correctFeedback: "Great! 'Announcements are made in three languages at this international airport.' is correct. 'Announcements' is plural → 'are made'. 'Make' is irregular: make → made.",
            correctFeedbackRu: "Отлично! 'Announcements are made in three languages at this international airport.' верно. 'Announcements' — множественное число → 'are made'. 'Make' — неправильный глагол: make → made.",
            incorrectFeedback: "Try again. The structure is: Announcements + are + made + in three languages + at this international airport.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Announcements + are + made + in three languages + at this international airport."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Taxi", "drivers", "are", "tested", "before", "they", "are", "given", "a", "licence", "to", "work", "in", "this", "city."],
            correctAnswer: "Taxi drivers are tested before they are given a licence to work in this city.",
            correctFeedback: "Perfect! 'Taxi drivers are tested before they are given a licence to work in this city.' is correct. Two passive verbs appear in one sentence: 'are tested' and 'are given'. The word 'before' shows the sequence.",
            correctFeedbackRu: "Идеально! 'Taxi drivers are tested before they are given a licence to work in this city.' верно. В одном предложении два пассивных глагола: 'are tested' и 'are given'. Слово 'before' показывает последовательность.",
            incorrectFeedback: "Try again. The structure is: Taxi drivers + are + tested + before they are given + a licence + to work in this city.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Taxi drivers + are + tested + before they are given + a licence + to work in this city."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Petrol", "prices", "are", "affected", "by", "global", "oil", "costs", "and", "local", "government", "taxes."],
            correctAnswer: "Petrol prices are affected by global oil costs and local government taxes.",
            correctFeedback: "Excellent! 'Petrol prices are affected by global oil costs and local government taxes.' is correct. 'Petrol prices' is plural → 'are affected'. Two agents are joined with 'and'.",
            correctFeedbackRu: "Отлично! 'Petrol prices are affected by global oil costs and local government taxes.' верно. 'Petrol prices' — множественное число → 'are affected'. Два агента соединены 'and'.",
            incorrectFeedback: "Try again. The structure is: Petrol prices + are + affected + by global oil costs + and local government taxes.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Petrol prices + are + affected + by global oil costs + and local government taxes."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["New", "road", "safety", "measures", "are", "introduced", "in", "towns", "and", "cities", "across", "the", "region."],
            correctAnswer: "New road safety measures are introduced in towns and cities across the region.",
            correctFeedback: "Great! 'New road safety measures are introduced in towns and cities across the region.' is correct. 'Road safety measures' is plural → 'are introduced'. This describes an ongoing policy change.",
            correctFeedbackRu: "Отлично! 'New road safety measures are introduced in towns and cities across the region.' верно. 'Road safety measures' — множественное число → 'are introduced'. Это описывает продолжающееся изменение политики.",
            incorrectFeedback: "Try again. The structure is: New road safety measures + are + introduced + in towns and cities + across the region.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: New road safety measures + are + introduced + in towns and cities + across the region."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "motorway", "is", "closed", "overnight", "for", "safety", "inspections."],
            correctAnswer: "The motorway is closed overnight for safety inspections.",
            correctFeedback: "Perfect! 'The motorway is closed overnight for safety inspections.' is correct. 'The motorway' is singular → 'is closed'. The time 'overnight' and reason 'for safety inspections' complete the sentence.",
            correctFeedbackRu: "Идеально! 'The motorway is closed overnight for safety inspections.' верно. 'The motorway' — единственное число → 'is closed'. Время 'overnight' и причина 'for safety inspections' завершают предложение.",
            incorrectFeedback: "Try again. The structure is: The motorway + is + closed + overnight + for safety inspections.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The motorway + is + closed + overnight + for safety inspections."
        }
    ]
};

/* ============================================
Page 10: Present Passive - Mixed Contexts (Review)
============================================ */
window.grammarExercises['passive']['present-passive-sentence-page10'] = {
    title: "Present Passive - Mixed Contexts (Review)",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "old", "city", "walls", "are", "repainted", "every", "ten", "years", "to", "preserve", "them."],
            correctAnswer: "The old city walls are repainted every ten years to preserve them.",
            correctFeedback: "Perfect! 'The old city walls are repainted every ten years to preserve them.' is correct. 'The old city walls' is plural → 'are repainted'. Even infrequent regular actions use present passive.",
            correctFeedbackRu: "Идеально! 'The old city walls are repainted every ten years to preserve them.' верно. 'The old city walls' — множественное число → 'are repainted'. Даже нечастые регулярные действия используют настоящий пассивный залог.",
            incorrectFeedback: "Try again. The structure is: The old city walls + are + repainted + every ten years + to preserve them.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The old city walls + are + repainted + every ten years + to preserve them."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["New", "laws", "are", "introduced", "by", "parliament", "when", "there", "is", "a", "change", "of", "government."],
            correctAnswer: "New laws are introduced by parliament when there is a change of government.",
            correctFeedback: "Excellent! 'New laws are introduced by parliament when there is a change of government.' is correct. 'New laws' is plural → 'are introduced'. The agent 'by parliament' tells us who does it.",
            correctFeedbackRu: "Отлично! 'New laws are introduced by parliament when there is a change of government.' верно. 'New laws' — множественное число → 'are introduced'. Агент 'by parliament' говорит нам, кто это делает.",
            incorrectFeedback: "Try again. The structure is: New laws + are + introduced + by parliament + when there is a change of government.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: New laws + are + introduced + by parliament + when there is a change of government."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "national", "anthem", "is", "played", "at", "every", "international", "sports", "event."],
            correctAnswer: "The national anthem is played at every international sports event.",
            correctFeedback: "Great! 'The national anthem is played at every international sports event.' is correct. 'The national anthem' is singular → 'is played'. This describes a sporting tradition or protocol.",
            correctFeedbackRu: "Отлично! 'The national anthem is played at every international sports event.' верно. 'The national anthem' — единственное число → 'is played'. Это описывает спортивную традицию или протокол.",
            incorrectFeedback: "Try again. The structure is: The national anthem + is + played + at every international sports event.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The national anthem + is + played + at every international sports event."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Vegetables", "are", "picked", "from", "the", "garden", "and", "taken", "straight", "to", "the", "kitchen."],
            correctAnswer: "Vegetables are picked from the garden and taken straight to the kitchen.",
            correctFeedback: "Perfect! 'Vegetables are picked from the garden and taken straight to the kitchen.' is correct. 'Vegetables' is plural → 'are picked'. Two passive verbs share the same subject: 'are picked and (are) taken'.",
            correctFeedbackRu: "Идеально! 'Vegetables are picked from the garden and taken straight to the kitchen.' верно. 'Vegetables' — множественное число → 'are picked'. Два пассивных глагола разделяют одно подлежащее: 'are picked and (are) taken'.",
            incorrectFeedback: "Try again. The structure is: Vegetables + are + picked + from the garden + and taken + straight to the kitchen.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Vegetables + are + picked + from the garden + and taken + straight to the kitchen."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Children", "under", "12", "are", "charged", "a", "lower", "admission", "price", "at", "the", "cinema."],
            correctAnswer: "Children under 12 are charged a lower admission price at the cinema.",
            correctFeedback: "Excellent! 'Children under 12 are charged a lower admission price at the cinema.' is correct. 'Children under 12' is plural → 'are charged'. This describes a cinema pricing policy in passive.",
            correctFeedbackRu: "Отлично! 'Children under 12 are charged a lower admission price at the cinema.' верно. 'Children under 12' — множественное число → 'are charged'. Это описывает политику ценообразования кинотеатра в пассивном залоге.",
            incorrectFeedback: "Try again. The structure is: Children under 12 + are + charged + a lower admission price + at the cinema.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Children under 12 + are + charged + a lower admission price + at the cinema."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "annual", "report", "is", "sent", "to", "all", "shareholders", "at", "the", "end", "of", "each", "financial", "year."],
            correctAnswer: "The annual report is sent to all shareholders at the end of each financial year.",
            correctFeedback: "Great! 'The annual report is sent to all shareholders at the end of each financial year.' is correct. 'The annual report' is singular → 'is sent'. Financial and business processes often use passive.",
            correctFeedbackRu: "Отлично! 'The annual report is sent to all shareholders at the end of each financial year.' верно. 'The annual report' — единственное число → 'is sent'. Финансовые и деловые процессы часто используют пассивный залог.",
            incorrectFeedback: "Try again. The structure is: The annual report + is + sent + to all shareholders + at the end of each financial year.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The annual report + is + sent + to all shareholders + at the end of each financial year."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Historic", "buildings", "in", "this", "area", "are", "maintained", "by", "the", "local", "heritage", "committee."],
            correctAnswer: "Historic buildings in this area are maintained by the local heritage committee.",
            correctFeedback: "Perfect! 'Historic buildings in this area are maintained by the local heritage committee.' is correct. 'Historic buildings' is plural → 'are maintained'. The agent 'by the local heritage committee' is useful information here.",
            correctFeedbackRu: "Идеально! 'Historic buildings in this area are maintained by the local heritage committee.' верно. 'Historic buildings' — множественное число → 'are maintained'. Агент 'by the local heritage committee' — полезная информация здесь.",
            incorrectFeedback: "Try again. The structure is: Historic buildings + in this area + are + maintained + by the local heritage committee.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Historic buildings + in this area + are + maintained + by the local heritage committee."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["A", "prize", "is", "awarded", "to", "the", "student", "with", "the", "best", "performance", "each", "term."],
            correctAnswer: "A prize is awarded to the student with the best performance each term.",
            correctFeedback: "Excellent! 'A prize is awarded to the student with the best performance each term.' is correct. 'A prize' is singular → 'is awarded'. The prize becomes the subject in passive. The time phrase 'each term' shows regularity.",
            correctFeedbackRu: "Отлично! 'A prize is awarded to the student with the best performance each term.' верно. 'A prize' — единственное число → 'is awarded'. Приз становится подлежащим в пассивном залоге. Временная фраза 'each term' показывает регулярность.",
            incorrectFeedback: "Try again. The structure is: A prize + is + awarded + to the student + with the best performance + each term.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: A prize + is + awarded + to the student + with the best performance + each term."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Emergency", "meetings", "are", "called", "whenever", "there", "is", "a", "serious", "security", "threat."],
            correctAnswer: "Emergency meetings are called whenever there is a serious security threat.",
            correctFeedback: "Great! 'Emergency meetings are called whenever there is a serious security threat.' is correct. 'Emergency meetings' is plural → 'are called'. The conditional clause 'whenever there is a threat' gives the trigger.",
            correctFeedbackRu: "Отлично! 'Emergency meetings are called whenever there is a serious security threat.' верно. 'Emergency meetings' — множественное число → 'are called'. Условное придаточное 'whenever there is a threat' даёт триггер.",
            incorrectFeedback: "Try again. The structure is: Emergency meetings + are + called + whenever there is + a serious security threat.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: Emergency meetings + are + called + whenever there is + a serious security threat."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "annual", "prize", "for", "the", "best", "garden", "is", "awarded", "by", "the", "local", "garden", "club."],
            correctAnswer: "The annual prize for the best garden is awarded by the local garden club.",
            correctFeedback: "Perfect! 'The annual prize for the best garden is awarded by the local garden club.' is correct. 'The annual prize' is singular → 'is awarded'. The agent 'by the local garden club' tells us who gives the prize.",
            correctFeedbackRu: "Идеально! 'The annual prize for the best garden is awarded by the local garden club.' верно. 'The annual prize' — единственное число → 'is awarded'. Агент 'by the local garden club' говорит нам, кто вручает приз.",
            incorrectFeedback: "Try again. The structure is: The annual prize for the best garden + is + awarded + by the local garden club.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: The annual prize for the best garden + is + awarded + by the local garden club."
        }
    ]
};