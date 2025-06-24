/* ============================================
Initialize Grammar Exercises Object Structure
============================================ */
if (!window.grammarExercises) {
    window.grammarExercises = {};
}
if (!window.grammarExercises.modals) {
    window.grammarExercises.modals = {};
}

/* =============================================================================== */
/* ===========================Multiple Choice Exercises=========================== */

/* ============================================
Page 1: Permission with Can/May - Basic Permission Requests
============================================ */
window.grammarExercises['modals']['permission-can-may-page1'] = {
    title: "Permission with Can/May - Basic Permission Requests",
    multipleChoice: [
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I go to the bathroom, please?",
            options: [
                "Can",
                "Could",
                "May",
                "All are correct"
            ],
            correctAnswer: 3,
            correctFeedback: "Correct! All three forms (Can, Could, May) are acceptable for asking permission, with 'May' being the most formal.",
            correctFeedbackRu: "Правильно! Все три формы (Can, Could, May) приемлемы для просьбы разрешения, при этом 'May' является наиболее формальным.",
            incorrectFeedback: "Actually, all three options are correct for asking permission. 'Can' is informal, 'Could' is polite, and 'May' is formal.",
            incorrectFeedbackRu: "На самом деле, все три варианта правильны для просьбы разрешения. 'Can' неформальный, 'Could' вежливый, а 'May' формальный."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I come in?",
            options: [
                "Can",
                "May",
                "Could",
                "All are correct"
            ],
            correctAnswer: 3,
            correctFeedback: "Excellent! All forms are correct for asking permission to enter. The choice depends on the level of formality.",
            correctFeedbackRu: "Отлично! Все формы правильны для просьбы разрешения войти. Выбор зависит от уровня формальности.",
            incorrectFeedback: "All options are correct! 'Can' is casual, 'May' is formal, and 'Could' is polite.",
            incorrectFeedbackRu: "Все варианты правильны! 'Can' неформальный, 'May' формальный, а 'Could' вежливый."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we leave early today?",
            options: [
                "Can",
                "May",
                "Must",
                "Should"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can we leave early today?' is the most natural way to ask for permission in informal situations.",
            correctFeedbackRu: "Правильно! 'Can we leave early today?' - самый естественный способ спросить разрешение в неформальных ситуациях.",
            incorrectFeedback: "Use 'Can' for informal permission requests. 'May' is too formal here, 'Must' shows obligation, and 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для неформальных просьб разрешения. 'May' здесь слишком формально, 'Must' показывает обязательство, а 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I borrow your pen?",
            options: [
                "Can",
                "Will",
                "Would",
                "Shall"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can I borrow your pen?' is the standard way to ask permission to use someone's things.",
            correctFeedbackRu: "Идеально! 'Can I borrow your pen?' - стандартный способ спросить разрешение использовать чужие вещи.",
            incorrectFeedback: "Use 'Can' for permission requests. 'Will' and 'Would' are for offers/requests, 'Shall' is formal and rarely used.",
            incorrectFeedbackRu: "Используйте 'Can' для просьб разрешения. 'Will' и 'Would' для предложений/просьб, 'Shall' формальный и редко используется."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I sit here?",
            options: [
                "May",
                "Must",
                "Need",
                "Have to"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'May I sit here?' is a polite and formal way to ask for permission to sit.",
            correctFeedbackRu: "Отлично! 'May I sit here?' - вежливый и формальный способ спросить разрешение сесть.",
            incorrectFeedback: "Use 'May' for polite permission requests. 'Must', 'Need', and 'Have to' express obligation, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливых просьб разрешения. 'Must', 'Need' и 'Have to' выражают обязательство, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we open the window?",
            options: [
                "Can",
                "Should",
                "Would",
                "Could"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can we open the window?' is the most direct way to ask for permission in everyday situations.",
            correctFeedbackRu: "Правильно! 'Can we open the window?' - самый прямой способ спросить разрешение в повседневных ситуациях.",
            incorrectFeedback: "Use 'Can' for permission. 'Should' suggests advice, 'Would' is for polite requests, 'Could' is more polite but 'Can' is more common.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения. 'Should' предлагает совет, 'Would' для вежливых просьб, 'Could' более вежливо, но 'Can' более распространено."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I use your phone?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can I use your phone?' is the correct way to ask permission to use someone's phone.",
            correctFeedbackRu: "Идеально! 'Can I use your phone?' - правильный способ спросить разрешение использовать чужой телефон.",
            incorrectFeedback: "Use 'Can' for permission requests. 'Will' is for future actions, 'Am' and 'Do' don't work in this context.",
            incorrectFeedbackRu: "Используйте 'Can' для просьб разрешения. 'Will' для будущих действий, 'Am' и 'Do' не подходят в этом контексте."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I take a photo here?",
            options: [
                "May",
                "Must",
                "Need",
                "Might"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'May I take a photo here?' is a polite way to ask for permission, especially in formal places.",
            correctFeedbackRu: "Отлично! 'May I take a photo here?' - вежливый способ спросить разрешение, особенно в формальных местах.",
            incorrectFeedback: "Use 'May' for polite permission. 'Must' and 'Need' express obligation, 'Might' expresses possibility, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливого разрешения. 'Must' и 'Need' выражают обязательство, 'Might' выражает возможность, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we go now?",
            options: [
                "Can",
                "Are",
                "Have",
                "Did"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can we go now?' is the right way to ask permission to leave in informal situations.",
            correctFeedbackRu: "Правильно! 'Can we go now?' - правильный способ спросить разрешение уйти в неформальных ситуациях.",
            incorrectFeedback: "Use 'Can' for permission requests. 'Are', 'Have', and 'Did' are not modal verbs for permission.",
            incorrectFeedbackRu: "Используйте 'Can' для просьб разрешения. 'Are', 'Have' и 'Did' не являются модальными глаголами для разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I ask you a question?",
            options: [
                "May",
                "Will",
                "Am",
                "Shall"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'May I ask you a question?' is a polite and formal way to request permission to ask something.",
            correctFeedbackRu: "Идеально! 'May I ask you a question?' - вежливый и формальный способ попросить разрешение что-то спросить.",
            incorrectFeedback: "Use 'May' for polite permission requests. 'Will' is for future actions, 'Am' doesn't fit, 'Shall' is too formal and rare.",
            incorrectFeedbackRu: "Используйте 'May' для вежливых просьб разрешения. 'Will' для будущих действий, 'Am' не подходит, 'Shall' слишком формально и редко."
        }
    ]
};

/* ============================================
Page 2: Permission with Can/May - Polite Responses and Situations
============================================ */
window.grammarExercises['modals']['permission-can-may-page2'] = {
    title: "Permission with Can/May - Polite Responses and Situations",
    multipleChoice: [
        {
            question: "Choose the correct response to: 'Can I help you?'",
            questionRu: "Выберите правильный ответ на: 'Can I help you?'",
            sentence: "A: Can I help you? B: _____",
            options: [
                "Yes, you can.",
                "Yes, please.",
                "No, you can't.",
                "Maybe you can."
            ],
            correctAnswer: 1,
            correctFeedback: "Correct! 'Yes, please' is the most natural and polite response to an offer of help.",
            correctFeedbackRu: "Правильно! 'Yes, please' - самый естественный и вежливый ответ на предложение помощи.",
            incorrectFeedback: "While 'Yes, you can' is grammatically correct, 'Yes, please' sounds more natural and polite in this context.",
            incorrectFeedbackRu: "Хотя 'Yes, you can' грамматически правильно, 'Yes, please' звучит более естественно и вежливо в этом контексте."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I have some water, please?",
            options: [
                "Can",
                "Should",
                "Must",
                "Would"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can I have some water, please?' is the standard way to politely ask for something.",
            correctFeedbackRu: "Идеально! 'Can I have some water, please?' - стандартный способ вежливо попросить что-то.",
            incorrectFeedback: "Use 'Can' for polite requests. 'Should' gives advice, 'Must' shows obligation, 'Would' is less common for simple requests.",
            incorrectFeedbackRu: "Используйте 'Can' для вежливых просьб. 'Should' дает совет, 'Must' показывает обязательство, 'Would' менее распространено для простых просьб."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we park here?",
            options: [
                "Can",
                "Will",
                "Are",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can we park here?' asks for permission to park in a specific place.",
            correctFeedbackRu: "Отлично! 'Can we park here?' спрашивает разрешение припарковаться в определенном месте.",
            incorrectFeedback: "Use 'Can' for permission questions. 'Will', 'Are', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении. 'Will', 'Are' и 'Do' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I turn off the light?",
            options: [
                "May",
                "Must",
                "Need",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May I turn off the light?' is a polite way to ask permission before changing something in the room.",
            correctFeedbackRu: "Правильно! 'May I turn off the light?' - вежливый способ спросить разрешение перед тем, как что-то изменить в комнате.",
            incorrectFeedback: "Use 'May' for polite permission. 'Must', 'Need', and 'Have' express obligation or necessity, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливого разрешения. 'Must', 'Need' и 'Have' выражают обязательство или необходимость, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I look at your book?",
            options: [
                "Can",
                "Will",
                "Am",
                "Should"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can I look at your book?' politely asks for permission to see someone's book.",
            correctFeedbackRu: "Идеально! 'Can I look at your book?' вежливо спрашивает разрешение посмотреть чужую книгу.",
            incorrectFeedback: "Use 'Can' for permission requests. 'Will' is for future actions, 'Am' doesn't fit, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для просьб разрешения. 'Will' для будущих действий, 'Am' не подходит, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we eat here?",
            options: [
                "Can",
                "Do",
                "Are",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can we eat here?' asks for permission to eat in a specific place.",
            correctFeedbackRu: "Отлично! 'Can we eat here?' спрашивает разрешение есть в определенном месте.",
            incorrectFeedback: "Use 'Can' for permission questions. 'Do', 'Are', and 'Have' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении. 'Do', 'Are' и 'Have' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I close the door?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May I close the door?' is a polite way to ask permission before closing a door.",
            correctFeedbackRu: "Правильно! 'May I close the door?' - вежливый способ спросить разрешение перед тем, как закрыть дверь.",
            incorrectFeedback: "Use 'May' for polite permission. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'May' для вежливого разрешения. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I try this on?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can I try this on?' is the standard way to ask permission to try clothes in a store.",
            correctFeedbackRu: "Идеально! 'Can I try this on?' - стандартный способ спросить разрешение примерить одежду в магазине.",
            incorrectFeedback: "Use 'Can' for permission in shopping situations. 'Will', 'Am', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения в магазинных ситуациях. 'Will', 'Am' и 'Do' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we play music?",
            options: [
                "Can",
                "Are",
                "Have",
                "Did"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can we play music?' asks for permission to play music, especially important in shared spaces.",
            correctFeedbackRu: "Отлично! 'Can we play music?' спрашивает разрешение включить музыку, особенно важно в общих пространствах.",
            incorrectFeedback: "Use 'Can' for permission questions. 'Are', 'Have', and 'Did' are not modal verbs for permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении. 'Are', 'Have' и 'Did' не являются модальными глаголами для разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I check my email quickly?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May I check my email quickly?' politely asks for permission to use time for a quick task.",
            correctFeedbackRu: "Правильно! 'May I check my email quickly?' вежливо спрашивает разрешение потратить время на быструю задачу.",
            incorrectFeedback: "Use 'May' for polite permission requests. 'Must', 'Should', and 'Need' express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливых просьб разрешения. 'Must', 'Should' и 'Need' выражают обязательство или совет, а не разрешение."
        }
    ]
};

/* ============================================
Page 3: Permission with Can/May - Formal and Informal Situations
============================================ */
window.grammarExercises['modals']['permission-can-may-page3'] = {
    title: "Permission with Can/May - Formal and Informal Situations",
    multipleChoice: [
        {
            question: "Choose the most appropriate modal for a formal situation:",
            questionRu: "Выберите наиболее подходящий модальный глагол для формальной ситуации:",
            sentence: "_____ I interrupt you for a moment? (speaking to your boss)",
            options: [
                "Can",
                "May",
                "Could",
                "Both May and Could"
            ],
            correctAnswer: 3,
            correctFeedback: "Excellent! Both 'May' and 'Could' are appropriate for formal situations. 'May' is more formal, 'Could' is very polite.",
            correctFeedbackRu: "Отлично! И 'May', и 'Could' подходят для формальных ситуаций. 'May' более формально, 'Could' очень вежливо.",
            incorrectFeedback: "In formal situations, 'Can' is too casual. 'May' and 'Could' are both appropriate for speaking to a boss.",
            incorrectFeedbackRu: "В формальных ситуациях 'Can' слишком неформально. 'May' и 'Could' оба подходят для разговора с начальником."
        },
        {
            question: "Choose the most informal way to ask permission:",
            questionRu: "Выберите наиболее неформальный способ спросить разрешение:",
            sentence: "_____ I borrow this? (speaking to a friend)",
            options: [
                "May",
                "Could",
                "Can",
                "Might"
            ],
            correctAnswer: 2,
            correctFeedback: "Perfect! 'Can' is the most informal and casual way to ask permission, perfect for friends.",
            correctFeedbackRu: "Идеально! 'Can' - самый неформальный и непринужденный способ спросить разрешение, идеально для друзей.",
            incorrectFeedback: "'Can' is the most casual option. 'May' is formal, 'Could' is polite, 'Might' expresses possibility, not permission.",
            incorrectFeedbackRu: "'Can' - самый неформальный вариант. 'May' формальный, 'Could' вежливый, 'Might' выражает возможность, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I speak to the manager, please? (in a store)",
            options: [
                "Can",
                "May",
                "Could",
                "All are correct"
            ],
            correctAnswer: 3,
            correctFeedback: "Correct! All three are appropriate in a store setting, with varying levels of formality.",
            correctFeedbackRu: "Правильно! Все три подходят в магазинной обстановке с разными уровнями формальности.",
            incorrectFeedback: "All options work in this context. Customer service situations accept 'Can' (casual), 'May' (formal), and 'Could' (polite).",
            incorrectFeedbackRu: "Все варианты работают в этом контексте. Ситуации обслуживания клиентов принимают 'Can' (неформально), 'May' (формально) и 'Could' (вежливо)."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we sit down? (at a restaurant)",
            options: [
                "Can",
                "Will",
                "Should",
                "Must"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can we sit down?' is appropriate for asking permission to be seated at a restaurant.",
            correctFeedbackRu: "Отлично! 'Can we sit down?' подходит для просьбы разрешения сесть в ресторане.",
            incorrectFeedback: "Use 'Can' for permission. 'Will' is for future actions, 'Should' gives advice, 'Must' shows obligation.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения. 'Will' для будущих действий, 'Should' дает совет, 'Must' показывает обязательство."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I make a suggestion? (in a meeting)",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'May I make a suggestion?' is formal and appropriate for business meetings.",
            correctFeedbackRu: "Идеально! 'May I make a suggestion?' формально и подходит для деловых встреч.",
            incorrectFeedback: "Use 'May' for formal permission in meetings. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'May' для формального разрешения на встречах. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I get you anything? (waiter to customer)",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I get you anything?' is the standard polite offer from service staff.",
            correctFeedbackRu: "Правильно! 'Can I get you anything?' - стандартное вежливое предложение от обслуживающего персонала.",
            incorrectFeedback: "Use 'Can' for polite offers in service situations. 'Must', 'Should', and 'Need' don't work for offers.",
            incorrectFeedbackRu: "Используйте 'Can' для вежливых предложений в сервисных ситуациях. 'Must', 'Should' и 'Need' не подходят для предложений."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I come to your office tomorrow? (student to teacher)",
            options: [
                "Can",
                "May",
                "Could",
                "All are correct"
            ],
            correctAnswer: 3,
            correctFeedback: "Excellent! All three are appropriate when a student speaks to a teacher, showing different levels of formality.",
            correctFeedbackRu: "Отлично! Все три подходят, когда студент говорит с учителем, показывая разные уровни формальности.",
            incorrectFeedback: "All options are correct in academic settings. Students can use 'Can' (casual), 'May' (formal), or 'Could' (polite).",
            incorrectFeedbackRu: "Все варианты правильны в академической обстановке. Студенты могут использовать 'Can' (неформально), 'May' (формально) или 'Could' (вежливо)."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we take a break? (colleague to colleague)",
            options: [
                "Can",
                "Will",
                "Are",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we take a break?' is informal and appropriate between colleagues.",
            correctFeedbackRu: "Идеально! 'Can we take a break?' неформально и подходит между коллегами.",
            incorrectFeedback: "Use 'Can' for permission between equals. 'Will', 'Are', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения между равными. 'Will', 'Are' и 'Do' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I pay by card? (customer to cashier)",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I pay by card?' asks for permission to use a specific payment method.",
            correctFeedbackRu: "Отлично! 'Can I pay by card?' спрашивает разрешение использовать определенный способ оплаты.",
            incorrectFeedback: "Use 'Can' for permission questions about payment. 'Must', 'Should', and 'Need' express obligation, not permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении на оплату. 'Must', 'Should' и 'Need' выражают обязательство, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I ask for your advice? (formal situation)",
            options: [
                "May",
                "Can",
                "Will",
                "Am"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'May I ask for your advice?' is appropriately formal and polite for seeking guidance.",
            correctFeedbackRu: "Идеально! 'May I ask for your advice?' подходяще формально и вежливо для просьбы совета.",
            incorrectFeedback: "Use 'May' for formal permission requests. 'Can' is too casual, 'Will' is for future actions, 'Am' doesn't fit.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб разрешения. 'Can' слишком неформально, 'Will' для будущих действий, 'Am' не подходит."
        }
    ]
};
/* ============================================
Page 4: Permission with Can/May - School and Work Situations
============================================ */
window.grammarExercises['modals']['permission-can-may-page4'] = {
    title: "Permission with Can/May - School and Work Situations",
    multipleChoice: [
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I submit my homework tomorrow?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I submit my homework tomorrow?' asks for permission to hand in work on a different day.",
            correctFeedbackRu: "Правильно! 'Can I submit my homework tomorrow?' спрашивает разрешение сдать работу в другой день.",
            incorrectFeedback: "Use 'Can' for permission requests. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для просьб разрешения. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we start the meeting now?",
            options: [
                "Can",
                "Will",
                "Are",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we start the meeting now?' asks for permission to begin the meeting.",
            correctFeedbackRu: "Идеально! 'Can we start the meeting now?' спрашивает разрешение начать встречу.",
            incorrectFeedback: "Use 'Can' for permission questions. 'Will', 'Are', and 'Have' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении. 'Will', 'Are' и 'Have' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I use the computer in the library?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'May I use the computer in the library?' is polite and formal for public spaces.",
            correctFeedbackRu: "Отлично! 'May I use the computer in the library?' вежливо и формально для общественных мест.",
            incorrectFeedback: "Use 'May' for polite permission in formal places like libraries. Other options express obligation or advice.",
            incorrectFeedbackRu: "Используйте 'May' для вежливого разрешения в формальных местах, таких как библиотеки. Другие варианты выражают обязательство или совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I print this document?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I print this document?' asks for permission to use the printer.",
            correctFeedbackRu: "Правильно! 'Can I print this document?' спрашивает разрешение использовать принтер.",
            incorrectFeedback: "Use 'Can' for permission to use equipment. 'Will', 'Am', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения использовать оборудование. 'Will', 'Am' и 'Do' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we finish early today?",
            options: [
                "Can",
                "Are",
                "Have",
                "Did"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we finish early today?' asks for permission to end work or class earlier than usual.",
            correctFeedbackRu: "Идеально! 'Can we finish early today?' спрашивает разрешение закончить работу или урок раньше обычного.",
            incorrectFeedback: "Use 'Can' for permission questions. 'Are', 'Have', and 'Did' are not modal verbs for permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении. 'Are', 'Have' и 'Did' не являются модальными глаголами для разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I work from home tomorrow?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'May I work from home tomorrow?' is appropriately formal for workplace requests.",
            correctFeedbackRu: "Отлично! 'May I work from home tomorrow?' подходяще формально для рабочих просьб.",
            incorrectFeedback: "Use 'May' for formal permission requests at work. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб разрешения на работе. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I take notes during the presentation?",
            options: [
                "Can",
                "Will",
                "Am",
                "Should"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I take notes during the presentation?' asks for permission to write during someone's talk.",
            correctFeedbackRu: "Правильно! 'Can I take notes during the presentation?' спрашивает разрешение писать во время чьего-то выступления.",
            incorrectFeedback: "Use 'Can' for permission requests. 'Will' is for future actions, 'Am' doesn't fit, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для просьб разрешения. 'Will' для будущих действий, 'Am' не подходит, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we discuss this later?",
            options: [
                "Can",
                "Are",
                "Have",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we discuss this later?' asks for permission to postpone a conversation.",
            correctFeedbackRu: "Идеально! 'Can we discuss this later?' спрашивает разрешение отложить разговор.",
            incorrectFeedback: "Use 'Can' for permission to change plans. 'Are', 'Have', and 'Do' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения изменить планы. 'Are', 'Have' и 'Do' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I attend the training session?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'May I attend the training session?' is formal and polite for professional requests.",
            correctFeedbackRu: "Отлично! 'May I attend the training session?' формально и вежливо для профессиональных просьб.",
            incorrectFeedback: "Use 'May' for formal permission in professional settings. Other options express obligation or advice.",
            incorrectFeedbackRu: "Используйте 'May' для формального разрешения в профессиональной обстановке. Другие варианты выражают обязательство или совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I see your project?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I see your project?' asks for permission to look at someone's work.",
            correctFeedbackRu: "Правильно! 'Can I see your project?' спрашивает разрешение посмотреть на чью-то работу.",
            incorrectFeedback: "Use 'Can' for permission to see or examine something. 'Will', 'Am', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения посмотреть или изучить что-то. 'Will', 'Am' и 'Do' не подходят для просьб разрешения."
        }
    ]
};

/* ============================================
Page 5: Permission with Can/May - Family and Home Situations
============================================ */
window.grammarExercises['modals']['permission-can-may-page5'] = {
    title: "Permission with Can/May - Family and Home Situations",
    multipleChoice: [
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I watch TV after dinner?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I watch TV after dinner?' is a typical family permission request.",
            correctFeedbackRu: "Правильно! 'Can I watch TV after dinner?' - типичная семейная просьба разрешения.",
            incorrectFeedback: "Use 'Can' for family permission requests. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для семейных просьб разрешения. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we order pizza tonight?",
            options: [
                "Can",
                "Will",
                "Are",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we order pizza tonight?' asks family members for permission to choose dinner.",
            correctFeedbackRu: "Идеально! 'Can we order pizza tonight?' спрашивает у членов семьи разрешение выбрать ужин.",
            incorrectFeedback: "Use 'Can' for family decisions and permissions. 'Will', 'Are', and 'Have' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для семейных решений и разрешений. 'Will', 'Are' и 'Have' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I invite my friend over?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I invite my friend over?' asks for permission to bring someone home.",
            correctFeedbackRu: "Отлично! 'Can I invite my friend over?' спрашивает разрешение привести кого-то домой.",
            incorrectFeedback: "Use 'Can' for permission to invite people. 'Must' and 'Need' express obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения пригласить людей. 'Must' и 'Need' выражают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I use the washing machine?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I use the washing machine?' asks for permission to use household appliances.",
            correctFeedbackRu: "Правильно! 'Can I use the washing machine?' спрашивает разрешение использовать бытовую технику.",
            incorrectFeedback: "Use 'Can' for permission to use appliances at home. 'Will', 'Am', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения использовать технику дома. 'Will', 'Am' и 'Do' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we change the channel?",
            options: [
                "Can",
                "Are",
                "Have",
                "Did"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we change the channel?' politely asks family members for permission to switch TV programs.",
            correctFeedbackRu: "Идеально! 'Can we change the channel?' вежливо спрашивает у членов семьи разрешение переключить телевизионные программы.",
            incorrectFeedback: "Use 'Can' for permission in family situations. 'Are', 'Have', and 'Did' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения в семейных ситуациях. 'Are', 'Have' и 'Did' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I sleep in your room tonight?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I sleep in your room tonight?' asks for permission for temporary sleeping arrangements.",
            correctFeedbackRu: "Отлично! 'Can I sleep in your room tonight?' спрашивает разрешение для временных условий сна.",
            incorrectFeedback: "Use 'Can' for permission requests about living arrangements. Other options express obligation or advice.",
            incorrectFeedbackRu: "Используйте 'Can' для просьб разрешения о жилищных условиях. Другие варианты выражают обязательство или совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I cook something for myself?",
            options: [
                "Can",
                "Will",
                "Am",
                "Should"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I cook something for myself?' asks for permission to use the kitchen.",
            correctFeedbackRu: "Правильно! 'Can I cook something for myself?' спрашивает разрешение использовать кухню.",
            incorrectFeedback: "Use 'Can' for permission to use shared spaces. 'Will' is for future actions, 'Am' doesn't fit, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения использовать общие пространства. 'Will' для будущих действий, 'Am' не подходит, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we play games in the living room?",
            options: [
                "Can",
                "Are",
                "Have",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we play games in the living room?' asks for permission to use the family space for activities.",
            correctFeedbackRu: "Идеально! 'Can we play games in the living room?' спрашивает разрешение использовать семейное пространство для деятельности.",
            incorrectFeedback: "Use 'Can' for permission to use family spaces. 'Are', 'Have', and 'Do' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения использовать семейные пространства. 'Are', 'Have' и 'Do' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I take a shower now?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I take a shower now?' asks for permission to use the bathroom at a specific time.",
            correctFeedbackRu: "Отлично! 'Can I take a shower now?' спрашивает разрешение использовать ванную комнату в определенное время.",
            incorrectFeedback: "Use 'Can' for permission to use shared facilities. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения использовать общие удобства. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I keep my bicycle in the garage?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I keep my bicycle in the garage?' asks for permission to store something in a family space.",
            correctFeedbackRu: "Правильно! 'Can I keep my bicycle in the garage?' спрашивает разрешение хранить что-то в семейном пространстве.",
            incorrectFeedback: "Use 'Can' for permission to store things in shared spaces. 'Will', 'Am', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения хранить вещи в общих пространствах. 'Will', 'Am' и 'Do' не подходят для просьб разрешения."
        }
    ]
};

/* ============================================
Page 6: Permission with Can/May - Public Places and Travel
============================================ */
window.grammarExercises['modals']['permission-can-may-page6'] = {
    title: "Permission with Can/May - Public Places and Travel",
    multipleChoice: [
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I take photos in the museum?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May I take photos in the museum?' is appropriately formal for cultural institutions.",
            correctFeedbackRu: "Правильно! 'May I take photos in the museum?' подходяще формально для культурных учреждений.",
            incorrectFeedback: "Use 'May' for formal permission in public cultural places. Other options express obligation or advice.",
            incorrectFeedbackRu: "Используйте 'May' для формального разрешения в общественных культурных местах. Другие варианты выражают обязательство или совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we smoke here?",
            options: [
                "Can",
                "Will",
                "Are",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we smoke here?' asks about permission for specific activities in public places.",
            correctFeedbackRu: "Идеально! 'Can we smoke here?' спрашивает о разрешении для определенных действий в общественных местах.",
            incorrectFeedback: "Use 'Can' for permission questions in public. 'Will', 'Are', and 'Have' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении в общественных местах. 'Will', 'Are' и 'Have' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I bring my bag on the plane?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I bring my bag on the plane?' asks about airline permission and regulations.",
            correctFeedbackRu: "Отлично! 'Can I bring my bag on the plane?' спрашивает о разрешении авиакомпании и правилах.",
            incorrectFeedback: "Use 'Can' for permission questions about travel rules. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении касательно правил путешествий. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we enter the building?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May we enter the building?' is polite and formal for requesting access to restricted areas.",
            correctFeedbackRu: "Правильно! 'May we enter the building?' вежливо и формально для просьбы доступа к ограниченным зонам.",
            incorrectFeedback: "Use 'May' for formal permission to enter places. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для формального разрешения войти в места. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I use the public WiFi?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can I use the public WiFi?' asks for permission to access internet services.",
            correctFeedbackRu: "Идеально! 'Can I use the public WiFi?' спрашивает разрешение получить доступ к интернет-услугам.",
            incorrectFeedback: "Use 'Can' for permission to use public services. 'Will', 'Am', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения использовать общественные услуги. 'Will', 'Am' и 'Do' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we picnic in this park?",
            options: [
                "Can",
                "Are",
                "Have",
                "Did"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can we picnic in this park?' asks about permission for activities in public recreational areas.",
            correctFeedbackRu: "Отлично! 'Can we picnic in this park?' спрашивает о разрешении для деятельности в общественных зонах отдыха.",
            incorrectFeedback: "Use 'Can' for permission in public spaces. 'Are', 'Have', and 'Did' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения в общественных пространствах. 'Are', 'Have' и 'Did' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I check in early at the hotel?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May I check in early at the hotel?' is polite and formal for hotel service requests.",
            correctFeedbackRu: "Правильно! 'May I check in early at the hotel?' вежливо и формально для просьб об отельных услугах.",
            incorrectFeedback: "Use 'May' for formal requests in service industries. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб в сфере услуг. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we swim in this lake?",
            options: [
                "Can",
                "Will",
                "Are",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we swim in this lake?' asks about permission and safety for water activities.",
            correctFeedbackRu: "Идеально! 'Can we swim in this lake?' спрашивает о разрешении и безопасности для водных активностей.",
            incorrectFeedback: "Use 'Can' for permission questions about outdoor activities. 'Will', 'Are', and 'Have' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении касательно активностей на открытом воздухе. 'Will', 'Are' и 'Have' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I get a map of the city?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I get a map of the city?' asks for permission to obtain tourist information.",
            correctFeedbackRu: "Отлично! 'Can I get a map of the city?' спрашивает разрешение получить туристическую информацию.",
            incorrectFeedback: "Use 'Can' for requests to obtain things or services. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'Can' для просьб получить вещи или услуги. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we visit the cathedral tomorrow?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May we visit the cathedral tomorrow?' is appropriately formal for religious or cultural sites.",
            correctFeedbackRu: "Правильно! 'May we visit the cathedral tomorrow?' подходяще формально для религиозных или культурных мест.",
            incorrectFeedback: "Use 'May' for formal permission to visit important cultural or religious places. Other options express obligation or advice.",
            incorrectFeedbackRu: "Используйте 'May' для формального разрешения посетить важные культурные или религиозные места. Другие варианты выражают обязательство или совет."
        }
    ]
};

/* ============================================
Page 7: Permission with Can/May - Health and Emergency Situations
============================================ */
window.grammarExercises['modals']['permission-can-may-page7'] = {
    title: "Permission with Can/May - Health and Emergency Situations",
    multipleChoice: [
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I see the doctor today?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I see the doctor today?' asks for permission to schedule or have a medical appointment.",
            correctFeedbackRu: "Правильно! 'Can I see the doctor today?' спрашивает разрешение назначить или провести медицинскую консультацию.",
            incorrectFeedback: "Use 'Can' for permission to see healthcare professionals. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения обратиться к медицинским работникам. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we call an ambulance?",
            options: [
                "Can",
                "Will",
                "Are",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we call an ambulance?' asks for permission to make emergency calls when someone needs help.",
            correctFeedbackRu: "Идеально! 'Can we call an ambulance?' спрашивает разрешение сделать экстренные звонки, когда кому-то нужна помощь.",
            incorrectFeedback: "Use 'Can' for permission in emergency situations. 'Will', 'Are', and 'Have' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения в экстренных ситуациях. 'Will', 'Are' и 'Have' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I take medicine for my headache?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I take medicine for my headache?' asks for permission to use medication.",
            correctFeedbackRu: "Отлично! 'Can I take medicine for my headache?' спрашивает разрешение использовать лекарства.",
            incorrectFeedback: "Use 'Can' for permission to take medicine. 'Must' and 'Need' show obligation, 'Should' gives medical advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения принимать лекарства. 'Must' и 'Need' показывают обязательство, 'Should' дает медицинские советы."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we stay home when we are sick?",
            options: [
                "Can",
                "Will",
                "Are",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can we stay home when we are sick?' asks for permission to take time off for health reasons.",
            correctFeedbackRu: "Правильно! 'Can we stay home when we are sick?' спрашивает разрешение взять выходной по состоянию здоровья.",
            incorrectFeedback: "Use 'Can' for permission to take sick leave. 'Will', 'Are', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения взять больничный. 'Will', 'Are' и 'Do' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I rest for a few minutes?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'May I rest for a few minutes?' is a polite way to ask for permission to take a break for health reasons.",
            correctFeedbackRu: "Идеально! 'May I rest for a few minutes?' - вежливый способ спросить разрешение сделать перерыв по состоянию здоровья.",
            incorrectFeedback: "Use 'May' for polite permission requests about health needs. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливых просьб разрешения о потребностях здоровья. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I get a glass of water? I feel dizzy.",
            options: [
                "Can",
                "Will",
                "Am",
                "Should"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I get a glass of water? I feel dizzy.' asks for permission to get help when feeling unwell.",
            correctFeedbackRu: "Отлично! 'Can I get a glass of water? I feel dizzy.' спрашивает разрешение получить помощь при плохом самочувствии.",
            incorrectFeedback: "Use 'Can' for permission when you need help for health reasons. 'Will' is for future actions, 'Am' doesn't fit, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения, когда вам нужна помощь по состоянию здоровья. 'Will' для будущих действий, 'Am' не подходит, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we visit the patient in the hospital?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May we visit the patient in the hospital?' is appropriately formal for hospital visiting permission.",
            correctFeedbackRu: "Правильно! 'May we visit the patient in the hospital?' подходяще формально для разрешения на посещение больницы.",
            incorrectFeedback: "Use 'May' for formal permission in medical facilities. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для формального разрешения в медицинских учреждениях. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I use the first aid kit?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can I use the first aid kit?' asks for permission to access emergency medical supplies.",
            correctFeedbackRu: "Идеально! 'Can I use the first aid kit?' спрашивает разрешение получить доступ к экстренным медицинским принадлежностям.",
            incorrectFeedback: "Use 'Can' for permission to use emergency equipment. 'Will', 'Am', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения использовать экстренное оборудование. 'Will', 'Am' и 'Do' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we stop here? Someone needs help.",
            options: [
                "Can",
                "Are",
                "Have",
                "Did"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can we stop here? Someone needs help.' asks for permission to help in emergency situations.",
            correctFeedbackRu: "Отлично! 'Can we stop here? Someone needs help.' спрашивает разрешение помочь в экстренных ситуациях.",
            incorrectFeedback: "Use 'Can' for permission to help others in emergencies. 'Are', 'Have', and 'Did' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения помочь другим в экстренных ситуациях. 'Are', 'Have' и 'Did' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I leave work early? I have a doctor's appointment.",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May I leave work early? I have a doctor's appointment.' is formal and appropriate for workplace health requests.",
            correctFeedbackRu: "Правильно! 'May I leave work early? I have a doctor's appointment.' формально и подходяще для рабочих просьб о здоровье.",
            incorrectFeedback: "Use 'May' for formal permission requests at work for health reasons. Other options express obligation or advice.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб разрешения на работе по причинам здоровья. Другие варианты выражают обязательство или совет."
        }
    ]
};

/* ============================================
Page 8: Permission with Can/May - Technology and Communication
============================================ */
window.grammarExercises['modals']['permission-can-may-page8'] = {
    title: "Permission with Can/May - Technology and Communication",
    multipleChoice: [
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I charge my phone here?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I charge my phone here?' asks for permission to use electrical outlets for personal devices.",
            correctFeedbackRu: "Правильно! 'Can I charge my phone here?' спрашивает разрешение использовать электрические розетки для личных устройств.",
            incorrectFeedback: "Use 'Can' for permission to use technology facilities. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения использовать технологические средства. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we use our laptops during the flight?",
            options: [
                "Can",
                "Will",
                "Are",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we use our laptops during the flight?' asks about airline technology policies.",
            correctFeedbackRu: "Идеально! 'Can we use our laptops during the flight?' спрашивает о правилах авиакомпании касательно технологий.",
            incorrectFeedback: "Use 'Can' for permission questions about technology use. 'Will', 'Are', and 'Have' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении использовать технологии. 'Will', 'Are' и 'Have' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I send you a message later?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I send you a message later?' asks for permission to contact someone through digital communication.",
            correctFeedbackRu: "Отлично! 'Can I send you a message later?' спрашивает разрешение связаться с кем-то через цифровую связь.",
            incorrectFeedback: "Use 'Can' for permission to communicate digitally. 'Will' is for future actions, 'Am' doesn't fit, 'Do' doesn't work for permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения общаться в цифровом формате. 'Will' для будущих действий, 'Am' не подходит, 'Do' не работает для разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we connect to the internet?",
            options: [
                "Can",
                "Are",
                "Have",
                "Did"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can we connect to the internet?' asks for permission to access online services.",
            correctFeedbackRu: "Правильно! 'Can we connect to the internet?' спрашивает разрешение получить доступ к онлайн-услугам.",
            incorrectFeedback: "Use 'Can' for permission to access technology services. 'Are', 'Have', and 'Did' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения получить доступ к технологическим услугам. 'Are', 'Have' и 'Did' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I record this conversation?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'May I record this conversation?' is appropriately formal for asking permission to record audio.",
            correctFeedbackRu: "Идеально! 'May I record this conversation?' подходяще формально для просьбы разрешения записать аудио.",
            incorrectFeedback: "Use 'May' for formal permission to record. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для формального разрешения записывать. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I download this app on your phone?",
            options: [
                "Can",
                "Will",
                "Am",
                "Should"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I download this app on your phone?' asks for permission to install software on someone's device.",
            correctFeedbackRu: "Отлично! 'Can I download this app on your phone?' спрашивает разрешение установить программное обеспечение на чужое устройство.",
            incorrectFeedback: "Use 'Can' for permission to modify someone's technology. 'Will' is for future actions, 'Am' doesn't fit, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения изменить чужие технологии. 'Will' для будущих действий, 'Am' не подходит, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we make a video call now?",
            options: [
                "Can",
                "Are",
                "Have",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can we make a video call now?' asks for permission to start digital communication.",
            correctFeedbackRu: "Правильно! 'Can we make a video call now?' спрашивает разрешение начать цифровое общение.",
            incorrectFeedback: "Use 'Can' for permission to initiate digital communication. 'Are', 'Have', and 'Do' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения начать цифровое общение. 'Are', 'Have' и 'Do' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I share this file with you?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'May I share this file with you?' is polite and appropriate for digital file sharing.",
            correctFeedbackRu: "Идеально! 'May I share this file with you?' вежливо и подходяще для обмена цифровыми файлами.",
            incorrectFeedback: "Use 'May' for polite permission in digital sharing. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливого разрешения в цифровом обмене. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we turn on the speakers?",
            options: [
                "Can",
                "Will",
                "Are",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can we turn on the speakers?' asks for permission to use audio equipment that might affect others.",
            correctFeedbackRu: "Отлично! 'Can we turn on the speakers?' спрашивает разрешение использовать аудиооборудование, которое может повлиять на других.",
            incorrectFeedback: "Use 'Can' for permission to use audio equipment. 'Will', 'Are', and 'Have' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения использовать аудиооборудование. 'Will', 'Are' и 'Have' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I access your email account?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May I access your email account?' is formally appropriate for requesting access to private digital accounts.",
            correctFeedbackRu: "Правильно! 'May I access your email account?' формально подходяще для просьбы доступа к частным цифровым аккаунтам.",
            incorrectFeedback: "Use 'May' for formal permission to access private digital information. Other options express obligation or advice.",
            incorrectFeedbackRu: "Используйте 'May' для формального разрешения получить доступ к частной цифровой информации. Другие варианты выражают обязательство или совет."
        }
    ]
};

/* ============================================
Page 9: Permission with Can/May - Shopping and Money Situations
============================================ */
window.grammarExercises['modals']['permission-can-may-page9'] = {
    title: "Permission with Can/May - Shopping and Money Situations",
    multipleChoice: [
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I return this shirt? It doesn't fit.",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I return this shirt? It doesn't fit.' asks for permission to return merchandise in a store.",
            correctFeedbackRu: "Правильно! 'Can I return this shirt? It doesn't fit.' спрашивает разрешение вернуть товар в магазине.",
            incorrectFeedback: "Use 'Can' for permission in shopping situations. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения в торговых ситуациях. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we get a discount on these shoes?",
            options: [
                "Can",
                "Will",
                "Are",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we get a discount on these shoes?' asks for permission to receive a price reduction.",
            correctFeedbackRu: "Идеально! 'Can we get a discount on these shoes?' спрашивает разрешение получить скидку на цену.",
            incorrectFeedback: "Use 'Can' for permission questions about pricing. 'Will', 'Are', and 'Have' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении касательно цен. 'Will', 'Are' и 'Have' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I exchange this for a different size?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'May I exchange this for a different size?' is polite and formal for customer service requests.",
            correctFeedbackRu: "Отлично! 'May I exchange this for a different size?' вежливо и формально для просьб к службе поддержки клиентов.",
            incorrectFeedback: "Use 'May' for polite permission in formal shopping situations. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливого разрешения в формальных торговых ситуациях. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I see the receipt, please?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I see the receipt, please?' asks for permission to view purchase documentation.",
            correctFeedbackRu: "Правильно! 'Can I see the receipt, please?' спрашивает разрешение посмотреть документы о покупке.",
            incorrectFeedback: "Use 'Can' for permission to see documents. 'Will', 'Am', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения посмотреть документы. 'Will', 'Am' и 'Do' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we pay in cash?",
            options: [
                "Can",
                "Are",
                "Have",
                "Did"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we pay in cash?' asks for permission to use a specific payment method.",
            correctFeedbackRu: "Идеально! 'Can we pay in cash?' спрашивает разрешение использовать определенный способ оплаты.",
            incorrectFeedback: "Use 'Can' for permission about payment methods. 'Are', 'Have', and 'Did' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения о способах оплаты. 'Are', 'Have' и 'Did' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I get a bag for these items?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'May I get a bag for these items?' is polite for requesting shopping bags from store staff.",
            correctFeedbackRu: "Отлично! 'May I get a bag for these items?' вежливо для просьбы пакетов у персонала магазина.",
            incorrectFeedback: "Use 'May' for polite requests for store services. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливых просьб магазинных услуг. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I check the price of this jacket?",
            options: [
                "Can",
                "Will",
                "Am",
                "Should"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I check the price of this jacket?' asks for permission to find out cost information.",
            correctFeedbackRu: "Правильно! 'Can I check the price of this jacket?' спрашивает разрешение узнать информацию о стоимости.",
            incorrectFeedback: "Use 'Can' for permission to check information. 'Will' is for future actions, 'Am' doesn't fit, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения проверить информацию. 'Will' для будущих действий, 'Am' не подходит, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we buy this on sale?",
            options: [
                "Can",
                "Are",
                "Have",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we buy this on sale?' asks for permission to purchase items at discounted prices.",
            correctFeedbackRu: "Идеально! 'Can we buy this on sale?' спрашивает разрешение купить товары по сниженным ценам.",
            incorrectFeedback: "Use 'Can' for permission to make purchases. 'Are', 'Have', and 'Do' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения совершать покупки. 'Are', 'Have' и 'Do' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I get my money back?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I get my money back?' asks for permission to receive a refund for returned items.",
            correctFeedbackRu: "Отлично! 'Can I get my money back?' спрашивает разрешение получить возврат денег за возвращенные товары.",
            incorrectFeedback: "Use 'Can' for permission to get refunds. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения получить возврат денег. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we use this coupon today?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May we use this coupon today?' is appropriately polite for asking about promotional offers.",
            correctFeedbackRu: "Правильно! 'May we use this coupon today?' подходяще вежливо для вопросов о рекламных предложениях.",
            incorrectFeedback: "Use 'May' for polite permission about discounts and offers. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливого разрешения о скидках и предложениях. Другие варианты выражают обязательство или совет, а не разрешение."
        }
    ]
};

/* ============================================
Page 10: Permission with Can/May - Mixed Review and Common Expressions
============================================ */
window.grammarExercises['modals']['permission-can-may-page10'] = {
    title: "Permission with Can/May - Mixed Review and Common Expressions",
    multipleChoice: [
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I help you with that heavy bag?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I help you with that heavy bag?' is a polite offer to assist someone.",
            correctFeedbackRu: "Правильно! 'Can I help you with that heavy bag?' - вежливое предложение помочь кому-то.",
            incorrectFeedback: "Use 'Can' for polite offers to help. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для вежливых предложений помощи. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we walk on the grass in this park?",
            options: [
                "Can",
                "Will",
                "Are",
                "Have"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we walk on the grass in this park?' asks about park rules and permissions.",
            correctFeedbackRu: "Идеально! 'Can we walk on the grass in this park?' спрашивает о правилах парка и разрешениях.",
            incorrectFeedback: "Use 'Can' for permission questions about public space rules. 'Will', 'Are', and 'Have' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов о разрешении касательно правил общественных мест. 'Will', 'Are' и 'Have' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I give you my opinion?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'May I give you my opinion?' is polite and formal for offering personal thoughts.",
            correctFeedbackRu: "Отлично! 'May I give you my opinion?' вежливо и формально для предложения личных мыслей.",
            incorrectFeedback: "Use 'May' for polite permission to share opinions. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливого разрешения поделиться мнениями. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I turn up the volume?",
            options: [
                "Can",
                "Will",
                "Am",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Can I turn up the volume?' asks for permission to increase sound levels.",
            correctFeedbackRu: "Правильно! 'Can I turn up the volume?' спрашивает разрешение увеличить уровень звука.",
            incorrectFeedback: "Use 'Can' for permission to adjust shared equipment. 'Will', 'Am', and 'Do' don't work for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения настроить общее оборудование. 'Will', 'Am' и 'Do' не подходят для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we meet at your house instead?",
            options: [
                "Can",
                "Are",
                "Have",
                "Did"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can we meet at your house instead?' asks for permission to change meeting plans.",
            correctFeedbackRu: "Идеально! 'Can we meet at your house instead?' спрашивает разрешение изменить планы встречи.",
            incorrectFeedback: "Use 'Can' for permission to change plans. 'Are', 'Have', and 'Did' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения изменить планы. 'Are', 'Have' и 'Did' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I tell you a secret?",
            options: [
                "Can",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can I tell you a secret?' asks for permission to share private information.",
            correctFeedbackRu: "Отлично! 'Can I tell you a secret?' спрашивает разрешение поделиться личной информацией.",
            incorrectFeedback: "Use 'Can' for permission to share information. 'Must' and 'Need' show obligation, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения поделиться информацией. 'Must' и 'Need' показывают обязательство, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we change the topic of conversation?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May we change the topic of conversation?' is polite for suggesting a different discussion subject.",
            correctFeedbackRu: "Правильно! 'May we change the topic of conversation?' вежливо для предложения другой темы обсуждения.",
            incorrectFeedback: "Use 'May' for polite permission to change conversation topics. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для вежливого разрешения сменить темы разговора. Другие варианты выражают обязательство или совет, а не разрешение."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I fix this problem for you?",
            options: [
                "Can",
                "Will",
                "Am",
                "Should"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Can I fix this problem for you?' offers help and asks for permission to solve an issue.",
            correctFeedbackRu: "Идеально! 'Can I fix this problem for you?' предлагает помощь и спрашивает разрешение решить проблему.",
            incorrectFeedback: "Use 'Can' for offers to help with problems. 'Will' is for future actions, 'Am' doesn't fit, 'Should' gives advice.",
            incorrectFeedbackRu: "Используйте 'Can' для предложений помочь с проблемами. 'Will' для будущих действий, 'Am' не подходит, 'Should' дает совет."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ we bring our children to the party?",
            options: [
                "Can",
                "Are",
                "Have",
                "Do"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Can we bring our children to the party?' asks for permission to include family members in social events.",
            correctFeedbackRu: "Отлично! 'Can we bring our children to the party?' спрашивает разрешение включить членов семьи в общественные мероприятия.",
            incorrectFeedback: "Use 'Can' for permission about social invitations. 'Are', 'Have', and 'Do' are not used for asking permission.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения касательно общественных приглашений. 'Are', 'Have' и 'Do' не используются для просьб разрешения."
        },
        {
            question: "Choose the correct modal verb:",
            questionRu: "Выберите правильный модальный глагол:",
            sentence: "_____ I congratulate you on your success?",
            options: [
                "May",
                "Must",
                "Should",
                "Need"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'May I congratulate you on your success?' is formally polite for expressing congratulations.",
            correctFeedbackRu: "Правильно! 'May I congratulate you on your success?' формально вежливо для выражения поздравлений.",
            incorrectFeedback: "Use 'May' for formal permission to express congratulations. Other options express obligation or advice, not permission.",
            incorrectFeedbackRu: "Используйте 'May' для формального разрешения выразить поздравления. Другие варианты выражают обязательство или совет, а не разрешение."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Permission with Can/May Multiple Choice Pages 1-10 loaded successfully!");
console.log("===== PERMISSION CAN/MAY: MULTIPLE CHOICE PAGES 1-10 LOADED =====");

/* =============================================================================== */
/* ===========================Fill in the Gaps Exercises========================== */

/* ============================================
Page 1: Permission with Can/May - Basic Permission Requests Fill Gaps
============================================ */
window.grammarExercises['modals']['permission-can-may-gap-page1'] = {
    title: "Permission with Can/May - Basic Permission Requests",
    fillGaps: [
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I open the window? It's very hot in here.",
            correctAnswer: "Can",
            options: ["Can", "May", "Could", "Should"],
            correctFeedback: "Excellent! 'Can' is correct for informal permission requests in everyday situations.",
            correctFeedbackRu: "Отлично! 'Can' правильно для неформальных просьб разрешения в повседневных ситуациях.",
            incorrectFeedback: "Try again. Use 'Can' for casual permission requests. 'May' is more formal.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных просьб разрешения. 'May' более формально."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have a glass of water, please?",
            correctAnswer: "Can",
            options: ["Can", "May", "Must", "Should"],
            correctFeedback: "Perfect! 'Can' is the most natural choice for polite requests in everyday situations.",
            correctFeedbackRu: "Идеально! 'Can' - самый естественный выбор для вежливых просьб в повседневных ситуациях.",
            incorrectFeedback: "Use 'Can' for common polite requests. This is a standard expression.",
            incorrectFeedbackRu: "Используйте 'Can' для обычных вежливых просьб. Это стандартное выражение."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we sit at this table?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Correct! 'Can' is appropriate for asking permission to use public seating.",
            correctFeedbackRu: "Правильно! 'Can' подходит для просьбы разрешения использовать общественные места для сидения.",
            incorrectFeedback: "Try again. Use 'Can' for permission to sit in public places like restaurants.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для разрешения сесть в общественных местах, таких как рестораны."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I speak to you for a moment?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is more polite and formal for requesting someone's time.",
            correctFeedbackRu: "Отлично! 'May' более вежливо и формально для просьбы чьего-то времени.",
            incorrectFeedback: "Use 'May' for polite, formal requests to speak with someone.",
            incorrectFeedbackRu: "Используйте 'May' для вежливых, формальных просьб поговорить с кем-то."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I leave my bag here while I shop?",
            correctAnswer: "Can",
            options: ["Can", "May", "Must", "Need"],
            correctFeedback: "Perfect! 'Can' is correct for asking permission to leave personal items somewhere.",
            correctFeedbackRu: "Идеально! 'Can' правильно для просьбы разрешения оставить личные вещи где-то.",
            incorrectFeedback: "Try again. Use 'Can' for permission to store things temporarily.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для разрешения временно хранить вещи."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we take a photo together?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Correct! 'Can' is natural for requesting permission for photos with friends.",
            correctFeedbackRu: "Правильно! 'Can' естественно для просьбы разрешения сфотографироваться с друзьями.",
            incorrectFeedback: "Use 'Can' for casual permission requests like taking photos.",
            incorrectFeedbackRu: "Используйте 'Can' для обычных просьб разрешения, таких как фотографирование."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I interrupt you, Professor Smith?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Excellent! 'May' is appropriately formal when speaking to professors or authorities.",
            correctFeedbackRu: "Отлично! 'May' подходяще формально при разговоре с профессорами или авторитетными лицами.",
            incorrectFeedback: "Use 'May' for formal situations with professors, teachers, or other authorities.",
            incorrectFeedbackRu: "Используйте 'May' для формальных ситуаций с профессорами, учителями или другими авторитетными лицами."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I help you carry those books?",
            correctAnswer: "Can",
            options: ["Can", "May", "Should", "Must"],
            correctFeedback: "Perfect! 'Can' is correct for offering help in a friendly way.",
            correctFeedbackRu: "Идеально! 'Can' правильно для предложения помощи дружелюбным способом.",
            incorrectFeedback: "Try again. Use 'Can' when offering to help someone.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can', когда предлагаете кому-то помощь."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we play outside after lunch?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Correct! 'Can' is appropriate for children asking parents for permission to play.",
            correctFeedbackRu: "Правильно! 'Can' подходит для детей, спрашивающих у родителей разрешение играть.",
            incorrectFeedback: "Use 'Can' for family permission requests, especially for activities like playing.",
            incorrectFeedbackRu: "Используйте 'Can' для семейных просьб разрешения, особенно для таких действий, как игры."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I enter the building, sir?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is formal and respectful when addressing security or officials.",
            correctFeedbackRu: "Отлично! 'May' формально и уважительно при обращении к охране или официальным лицам.",
            incorrectFeedback: "Use 'May' for formal permission requests to authorities or security personnel.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб разрешения к властям или службе безопасности."
        }
    ]
};

/* ============================================
Page 2: Permission with Can/May - School and Work Fill Gaps
============================================ */
window.grammarExercises['modals']['permission-can-may-gap-page2'] = {
    title: "Permission with Can/May - School and Work",
    fillGaps: [
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I borrow a pen from you?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'Can' is natural for borrowing everyday items from classmates or colleagues.",
            correctFeedbackRu: "Идеально! 'Can' естественно для заимствования повседневных предметов у одноклассников или коллег.",
            incorrectFeedback: "Try again. Use 'Can' for casual requests to borrow things.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных просьб одолжить что-то."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I submit this assignment tomorrow?",
            correctAnswer: "May",
            options: ["Can", "May", "Must", "Should"],
            correctFeedback: "Excellent! 'May' is more formal and appropriate for academic requests to teachers.",
            correctFeedbackRu: "Отлично! 'May' более формально и подходяще для академических просьб к учителям.",
            incorrectFeedback: "Use 'May' for formal requests to teachers about assignments and deadlines.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб к учителям о заданиях и сроках."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we work in groups for this project?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Correct! 'Can' is appropriate for asking about work arrangements with classmates.",
            correctFeedbackRu: "Правильно! 'Can' подходит для вопросов о рабочих договоренностях с одноклассниками.",
            incorrectFeedback: "Try again. Use 'Can' for permission about group work and collaboration.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для разрешения на групповую работу и сотрудничество."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I share my presentation with the class?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'May' is formal and polite for requesting to present to the class.",
            correctFeedbackRu: "Идеально! 'May' формально и вежливо для просьбы презентовать классу.",
            incorrectFeedback: "Use 'May' for formal classroom presentations and academic activities.",
            incorrectFeedbackRu: "Используйте 'May' для формальных классных презентаций и академических мероприятий."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I use the computer in the lab?",
            correctAnswer: "Can",
            options: ["Can", "May", "Must", "Need"],
            correctFeedback: "Excellent! 'Can' is correct for asking permission to use school equipment.",
            correctFeedbackRu: "Отлично! 'Can' правильно для просьбы разрешения использовать школьное оборудование.",
            incorrectFeedback: "Try again. Use 'Can' for permission to use shared facilities like computer labs.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для разрешения использовать общие удобства, такие как компьютерные лаборатории."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we have extra time to finish this test?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'May' is appropriately formal for requesting extensions from teachers.",
            correctFeedbackRu: "Правильно! 'May' подходяще формально для просьбы продления времени у учителей.",
            incorrectFeedback: "Use 'May' for formal requests about test time and academic deadlines.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб о времени тестирования и академических сроках."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I check my email during break?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Perfect! 'Can' is casual and appropriate for personal activities during breaks.",
            correctFeedbackRu: "Идеально! 'Can' неформально и подходяще для личных дел во время перерывов.",
            incorrectFeedback: "Try again. Use 'Can' for casual permission during break times.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычного разрешения во время перерывов."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we schedule a meeting for next week?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Excellent! 'Can' is appropriate for planning meetings with colleagues.",
            correctFeedbackRu: "Отлично! 'Can' подходит для планирования встреч с коллегами.",
            incorrectFeedback: "Use 'Can' for permission to arrange meetings and appointments.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения организовать встречи и назначения."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I ask you about the homework assignment?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'May' is polite and formal for asking teachers about assignments.",
            correctFeedbackRu: "Правильно! 'May' вежливо и формально для вопросов учителям о заданиях.",
            incorrectFeedback: "Use 'May' for polite questions to teachers about schoolwork.",
            incorrectFeedbackRu: "Используйте 'May' для вежливых вопросов учителям о школьной работе."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we leave our books in the classroom?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Perfect! 'Can' is appropriate for asking about storing personal items at school.",
            correctFeedbackRu: "Идеально! 'Can' подходит для вопросов о хранении личных вещей в школе.",
            incorrectFeedback: "Try again. Use 'Can' for permission to store things in shared spaces.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для разрешения хранить вещи в общих пространствах."
        }
    ]
};

/* ============================================
Page 3: Permission with Can/May - Home and Family Fill Gaps
============================================ */
window.grammarExercises['modals']['permission-can-may-gap-page3'] = {
    title: "Permission with Can/May - Home and Family",
    fillGaps: [
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have some ice cream after dinner?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'Can' is natural for children asking parents for treats.",
            correctFeedbackRu: "Идеально! 'Can' естественно для детей, просящих у родителей лакомства.",
            incorrectFeedback: "Try again. Use 'Can' for casual family requests about food and treats.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных семейных просьб о еде и угощениях."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we watch a movie tonight?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Excellent! 'Can' is appropriate for family entertainment decisions.",
            correctFeedbackRu: "Отлично! 'Can' подходит для семейных развлекательных решений.",
            incorrectFeedback: "Use 'Can' for casual family requests about entertainment activities.",
            incorrectFeedbackRu: "Используйте 'Can' для обычных семейных просьб о развлекательных мероприятиях."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I stay up late this weekend?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'Can' is casual and appropriate for family bedtime negotiations.",
            correctFeedbackRu: "Правильно! 'Can' неформально и подходяще для семейных переговоров о времени сна.",
            incorrectFeedback: "Try again. Use 'Can' for casual permission about bedtime and weekend activities.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычного разрешения о времени сна и выходных мероприятиях."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I make a sandwich for myself?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Perfect! 'Can' is natural for asking family permission to use the kitchen.",
            correctFeedbackRu: "Идеально! 'Can' естественно для просьбы семейного разрешения использовать кухню.",
            incorrectFeedback: "Use 'Can' for casual permission to use shared family spaces like the kitchen.",
            incorrectFeedbackRu: "Используйте 'Can' для обычного разрешения использовать общие семейные пространства, такие как кухня."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we have pizza for lunch?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Excellent! 'Can' is appropriate for family meal suggestions and requests.",
            correctFeedbackRu: "Отлично! 'Can' подходит для семейных предложений и просьб о еде.",
            incorrectFeedback: "Try again. Use 'Can' for casual family food choices and meal planning.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных семейных выборов еды и планирования питания."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I use your laptop for my homework?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'Can' is casual and appropriate for borrowing family members' belongings.",
            correctFeedbackRu: "Правильно! 'Can' неформально и подходяще для заимствования вещей членов семьи.",
            incorrectFeedback: "Use 'Can' for permission to borrow things from family members.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения одолжить вещи у членов семьи."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we rearrange the furniture in the living room?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Perfect! 'Can' is appropriate for family discussions about home changes.",
            correctFeedbackRu: "Идеально! 'Can' подходит для семейных обсуждений изменений дома.",
            incorrectFeedback: "Try again. Use 'Can' for permission to make changes to shared family spaces.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для разрешения внести изменения в общие семейные пространства."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I invite my cousin for dinner?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'Can' is natural for asking family permission to invite guests.",
            correctFeedbackRu: "Отлично! 'Can' естественно для просьбы семейного разрешения пригласить гостей.",
            incorrectFeedback: "Use 'Can' for casual family requests about inviting friends and relatives.",
            incorrectFeedbackRu: "Используйте 'Can' для обычных семейных просьб о приглашении друзей и родственников."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we plant flowers in the garden?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Correct! 'Can' is appropriate for family activities and home improvement projects.",
            correctFeedbackRu: "Правильно! 'Can' подходит для семейных мероприятий и проектов улучшения дома.",
            incorrectFeedback: "Try again. Use 'Can' for permission about gardening and home projects.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для разрешения о садоводстве и домашних проектах."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I help you with the cooking?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'Can' is natural for offering help with family activities like cooking.",
            correctFeedbackRu: "Идеально! 'Can' естественно для предложения помощи в семейных делах, таких как готовка.",
            incorrectFeedback: "Use 'Can' when offering to help family members with household tasks.",
            incorrectFeedbackRu: "Используйте 'Can', когда предлагаете помочь членам семьи с домашними делами."
        }
    ]
};

/* ============================================
Page 4: Permission with Can/May - Public Places Fill Gaps
============================================ */
window.grammarExercises['modals']['permission-can-may-gap-page4'] = {
    title: "Permission with Can/May - Public Places",
    fillGaps: [
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I take pictures inside the museum, sir?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is formal and respectful when addressing museum staff or security.",
            correctFeedbackRu: "Отлично! 'May' формально и уважительно при обращении к персоналу музея или охране.",
            incorrectFeedback: "Use 'May' for formal permission requests to authorities in cultural institutions.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб разрешения к властям в культурных учреждениях."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we sit on this bench in the park?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Perfect! 'Can' is casual and appropriate for using public park facilities.",
            correctFeedbackRu: "Идеально! 'Can' неформально и подходяще для использования общественных парковых удобств.",
            incorrectFeedback: "Try again. Use 'Can' for casual permission in public recreational areas.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычного разрешения в общественных зонах отдыха."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I ask where the restroom is, please?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'May' is polite and formal for asking strangers for directions.",
            correctFeedbackRu: "Правильно! 'May' вежливо и формально для вопросов незнакомцам о направлениях.",
            incorrectFeedback: "Use 'May' for polite requests to strangers in public places.",
            incorrectFeedbackRu: "Используйте 'May' для вежливых просьб к незнакомцам в общественных местах."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we eat our lunch here at the picnic table?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Excellent! 'Can' is appropriate for asking about using public picnic facilities.",
            correctFeedbackRu: "Отлично! 'Can' подходит для вопросов об использовании общественных мест для пикника.",
            incorrectFeedback: "Try again. Use 'Can' for permission to use public facilities like picnic tables.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для разрешения использовать общественные удобства, такие как столы для пикника."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I check out these books from the library?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Perfect! 'Can' is standard for library service requests about borrowing books.",
            correctFeedbackRu: "Идеально! 'Can' стандартно для библиотечных просьб об одалживании книг.",
            incorrectFeedback: "Use 'Can' for routine library services like checking out books.",
            incorrectFeedbackRu: "Используйте 'Can' для обычных библиотечных услуг, таких как выдача книг."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we walk through this part of the building, officer?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'May' is respectful and formal when addressing security officers.",
            correctFeedbackRu: "Правильно! 'May' уважительно и формально при обращении к офицерам безопасности.",
            incorrectFeedback: "Use 'May' for formal permission requests to security personnel or officers.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб разрешения к персоналу безопасности или офицерам."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I get a map of the city at the information desk?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'Can' is natural for requesting tourist services and information.",
            correctFeedbackRu: "Отлично! 'Can' естественно для просьб туристических услуг и информации.",
            incorrectFeedback: "Try again. Use 'Can' for standard tourist information requests.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для стандартных туристических информационных просьб."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we feed the ducks in this pond?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Perfect! 'Can' is appropriate for asking about activities allowed in public parks.",
            correctFeedbackRu: "Идеально! 'Can' подходит для вопросов о разрешенных действиях в общественных парках.",
            incorrectFeedback: "Use 'Can' for permission about recreational activities in public spaces.",
            incorrectFeedbackRu: "Используйте 'Can' для разрешения на развлекательные мероприятия в общественных местах."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have access to the WiFi password, madam?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'May' is polite and formal when requesting services from staff.",
            correctFeedbackRu: "Правильно! 'May' вежливо и формально при просьбе услуг у персонала.",
            incorrectFeedback: "Use 'May' for formal requests to service staff in public places.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб к обслуживающему персоналу в общественных местах."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we use this playground equipment with our children?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Excellent! 'Can' is casual and appropriate for family activities in public playgrounds.",
            correctFeedbackRu: "Отлично! 'Can' неформально и подходяще для семейных мероприятий на общественных игровых площадках.",
            incorrectFeedback: "Try again. Use 'Can' for permission about using public recreational facilities.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для разрешения использовать общественные развлекательные удобства."
        }
    ]
};

/* ============================================
Page 5: Permission with Can/May - Travel and Transportation Fill Gaps
============================================ */
window.grammarExercises['modals']['permission-can-may-gap-page5'] = {
    title: "Permission with Can/May - Travel and Transportation",
    fillGaps: [
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I see your boarding pass, please?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is formal and professional for airline staff requests.",
            correctFeedbackRu: "Отлично! 'May' формально и профессионально для просьб персонала авиакомпании.",
            incorrectFeedback: "Use 'May' for formal requests from airline or transportation staff.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб от персонала авиакомпании или транспорта."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we put our bags in the overhead compartment?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Perfect! 'Can' is natural for asking about airplane storage procedures.",
            correctFeedbackRu: "Идеально! 'Can' естественно для вопросов о процедурах хранения в самолете.",
            incorrectFeedback: "Try again. Use 'Can' for routine questions about airplane facilities.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных вопросов об удобствах самолета."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I change my seat to one by the window?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'Can' is appropriate for passenger requests about seating arrangements.",
            correctFeedbackRu: "Правильно! 'Can' подходит для пассажирских просьб о размещении мест.",
            incorrectFeedback: "Use 'Can' for requests about travel accommodations and seat changes.",
            incorrectFeedbackRu: "Используйте 'Can' для просьб о транспортных удобствах и смене мест."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we board the train now, conductor?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Excellent! 'May' is respectful and formal when addressing train officials.",
            correctFeedbackRu: "Отлично! 'May' уважительно и формально при обращении к железнодорожным официальным лицам.",
            incorrectFeedback: "Use 'May' for formal permission requests to transportation officials.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб разрешения к транспортным официальным лицам."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I keep my small bag with me during the flight?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Perfect! 'Can' is standard for questions about carry-on luggage policies.",
            correctFeedbackRu: "Идеально! 'Can' стандартно для вопросов о правилах ручной клади.",
            incorrectFeedback: "Try again. Use 'Can' for routine luggage and travel policy questions.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных вопросов о багаже и правилах путешествий."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we get off the bus at the next stop, driver?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Correct! 'Can' is appropriate for routine requests to bus drivers.",
            correctFeedbackRu: "Правильно! 'Can' подходит для обычных просьб к водителям автобусов.",
            incorrectFeedback: "Use 'Can' for standard public transportation requests.",
            incorrectFeedbackRu: "Используйте 'Can' для стандартных просьб общественного транспорта."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I check in for my flight at this counter?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'Can' is natural for airport service desk inquiries.",
            correctFeedbackRu: "Отлично! 'Can' естественно для запросов к служебным стойкам аэропорта.",
            incorrectFeedback: "Try again. Use 'Can' for routine airport check-in procedures.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных процедур регистрации в аэропорту."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we reserve seats together on this train?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Perfect! 'Can' is appropriate for booking and reservation requests.",
            correctFeedbackRu: "Идеально! 'Can' подходит для просьб о бронировании и резервации.",
            incorrectFeedback: "Use 'Can' for travel booking and seat reservation requests.",
            incorrectFeedbackRu: "Используйте 'Can' для просьб о бронировании путешествий и резервации мест."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have your passport and ticket, sir?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'May' is professional and formal for official document requests.",
            correctFeedbackRu: "Правильно! 'May' профессионально и формально для официальных просьб документов.",
            incorrectFeedback: "Use 'May' for formal requests for official documents and identification.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб официальных документов и удостоверений личности."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we bring food and drinks on this bus?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Excellent! 'Can' is casual and appropriate for asking about transportation rules.",
            correctFeedbackRu: "Отлично! 'Can' неформально и подходяще для вопросов о правилах транспорта.",
            incorrectFeedback: "Try again. Use 'Can' for questions about what's allowed on public transport.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для вопросов о том, что разрешено в общественном транспорте."
        }
    ]
};

/* ============================================
Page 6: Permission with Can/May - Shopping and Services Fill Gaps
============================================ */
window.grammarExercises['modals']['permission-can-may-gap-page6'] = {
    title: "Permission with Can/May - Shopping and Services",
    fillGaps: [
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I try on this dress before buying it?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'Can' is standard for trying on clothes in stores.",
            correctFeedbackRu: "Идеально! 'Can' стандартно для примерки одежды в магазинах.",
            incorrectFeedback: "Try again. Use 'Can' for routine shopping activities like trying on clothes.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных покупательских действий, таких как примерка одежды."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we speak to the manager about this problem?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Excellent! 'May' is polite and formal for requesting to speak with management.",
            correctFeedbackRu: "Отлично! 'May' вежливо и формально для просьбы поговорить с руководством.",
            incorrectFeedback: "Use 'May' for formal requests to speak with managers or supervisors.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб поговорить с менеджерами или руководителями."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I exchange this shirt for a different color?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Correct! 'Can' is appropriate for routine store exchange requests.",
            correctFeedbackRu: "Правильно! 'Can' подходит для обычных просьб обмена в магазине.",
            incorrectFeedback: "Try again. Use 'Can' for standard store services like exchanges and returns.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для стандартных магазинных услуг, таких как обмен и возврат."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we pay with a credit card here?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Perfect! 'Can' is standard for asking about accepted payment methods.",
            correctFeedbackRu: "Идеально! 'Can' стандартно для вопросов о принятых способах оплаты.",
            incorrectFeedback: "Use 'Can' for routine questions about payment options in stores.",
            incorrectFeedbackRu: "Используйте 'Can' для обычных вопросов о вариантах оплаты в магазинах."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have the receipt for this purchase, please?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is polite and formal for requesting receipts from cashiers.",
            correctFeedbackRu: "Отлично! 'May' вежливо и формально для просьбы чеков у кассиров.",
            incorrectFeedback: "Use 'May' for polite requests to store staff for receipts and documents.",
            incorrectFeedbackRu: "Используйте 'May' для вежливых просьб к персоналу магазина о чеках и документах."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we get a discount if we buy more than one item?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Correct! 'Can' is appropriate for asking about store discounts and deals.",
            correctFeedbackRu: "Правильно! 'Can' подходит для вопросов о скидках и предложениях магазина.",
            incorrectFeedback: "Try again. Use 'Can' for questions about pricing and discount opportunities.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для вопросов о ценах и возможностях скидок."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I speak to someone about opening a bank account?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'May' is formal and appropriate for banking and financial services.",
            correctFeedbackRu: "Идеально! 'May' формально и подходяще для банковских и финансовых услуг.",
            incorrectFeedback: "Use 'May' for formal requests in banks and financial institutions.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб в банках и финансовых учреждениях."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we look at the menu before ordering?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Excellent! 'Can' is casual and natural for restaurant requests.",
            correctFeedbackRu: "Отлично! 'Can' неформально и естественно для ресторанных просьб.",
            incorrectFeedback: "Try again. Use 'Can' for routine restaurant activities like viewing menus.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных ресторанных действий, таких как просмотр меню."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I make an appointment with the doctor for next week?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Correct! 'Can' is standard for scheduling appointments with healthcare providers.",
            correctFeedbackRu: "Правильно! 'Can' стандартно для назначения встреч с поставщиками медицинских услуг.",
            incorrectFeedback: "Use 'Can' for routine appointment scheduling in medical and professional services.",
            incorrectFeedbackRu: "Используйте 'Can' для обычного назначения встреч в медицинских и профессиональных услугах."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we have a table for four people, please?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Perfect! 'Can' is natural for restaurant seating requests.",
            correctFeedbackRu: "Идеально! 'Can' естественно для ресторанных просьб о размещении.",
            incorrectFeedback: "Try again. Use 'Can' for standard restaurant reservation and seating requests.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для стандартных ресторанных просьб о бронировании и размещении."
        }
    ]
};

/* ============================================
Page 7: Permission with Can/May - Technology and Communication Fill Gaps
============================================ */
window.grammarExercises['modals']['permission-can-may-gap-page7'] = {
    title: "Permission with Can/May - Technology and Communication",
    fillGaps: [
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I plug in my phone charger here?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'Can' is casual and appropriate for everyday requests to use electrical outlets.",
            correctFeedbackRu: "Идеально! 'Can' неформально и подходяще для повседневных просьб использовать электрические розетки.",
            incorrectFeedback: "Try again. Use 'Can' for routine requests about using electrical equipment.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных просьб об использовании электрического оборудования."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have your permission to record this meeting, Dr. Johnson?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is formal and respectful when asking doctors or professionals for permission to record.",
            correctFeedbackRu: "Отлично! 'May' формально и уважительно при просьбе у врачей или профессионалов разрешения записывать.",
            incorrectFeedback: "Use 'May' for formal permission requests involving recording in professional settings.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб разрешения на запись в профессиональной обстановке."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we connect our laptop to this projector?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Correct! 'Can' is appropriate for asking about using shared technology equipment.",
            correctFeedbackRu: "Правильно! 'Can' подходит для вопросов об использовании общего технологического оборудования.",
            incorrectFeedback: "Try again. Use 'Can' for routine questions about connecting devices and equipment.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных вопросов о подключении устройств и оборудования."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I access your computer system, Administrator?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'May' is formal and appropriate when requesting access from IT administrators.",
            correctFeedbackRu: "Идеально! 'May' формально и подходяще при просьбе доступа у IT-администраторов.",
            incorrectFeedback: "Use 'May' for formal requests involving computer systems and IT security.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб, касающихся компьютерных систем и IT-безопасности."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we send you the documents by email today?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Excellent! 'Can' is natural for asking about sending documents electronically.",
            correctFeedbackRu: "Отлично! 'Can' естественно для вопросов об отправке документов электронным способом.",
            incorrectFeedback: "Try again. Use 'Can' for routine questions about electronic communication.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных вопросов об электронной связи."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I download this software on the company computer?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Correct! 'Can' is appropriate for asking colleagues about installing software at work.",
            correctFeedbackRu: "Правильно! 'Can' подходит для вопросов коллегам об установке программного обеспечения на работе.",
            incorrectFeedback: "Use 'Can' for questions about software installation in workplace settings.",
            incorrectFeedbackRu: "Используйте 'Can' для вопросов об установке программного обеспечения в рабочей обстановке."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we test the microphone before the presentation begins?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Perfect! 'Can' is natural for requesting to test equipment before events.",
            correctFeedbackRu: "Идеально! 'Can' естественно для просьб протестировать оборудование перед мероприятиями.",
            incorrectFeedback: "Try again. Use 'Can' for routine equipment testing and preparation requests.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных просьб тестирования оборудования и подготовки."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have your phone number to contact you later?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'Can' is casual and friendly for asking for personal contact information.",
            correctFeedbackRu: "Отлично! 'Can' неформально и дружелюбно для просьбы личной контактной информации.",
            incorrectFeedback: "Use 'Can' for casual requests for contact information from friends or colleagues.",
            incorrectFeedbackRu: "Используйте 'Can' для обычных просьб контактной информации у друзей или коллег."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we use video calling for our next business meeting, Mr. Smith?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'May' is formal and professional for business meeting arrangements with superiors.",
            correctFeedbackRu: "Правильно! 'May' формально и профессионально для деловых встреч с начальством.",
            incorrectFeedback: "Use 'May' for formal business requests when addressing superiors by title.",
            incorrectFeedbackRu: "Используйте 'May' для формальных деловых просьб при обращении к начальству по титулу."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I share this photo album with my family online?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Perfect! 'Can' is casual and appropriate for personal social media activities with family.",
            correctFeedbackRu: "Идеально! 'Can' неформально и подходяще для личной деятельности в социальных сетях с семьей.",
            incorrectFeedback: "Try again. Use 'Can' for personal online sharing and social media activities.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для личного онлайн-обмена и деятельности в социальных сетях."
        }
    ]
};

/* ============================================
Page 8: Permission with Can/May - Health and Emergency Fill Gaps
============================================ */
window.grammarExercises['modals']['permission-can-may-gap-page8'] = {
    title: "Permission with Can/May - Health and Emergency",
    fillGaps: [
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I make an emergency call from your phone?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'Can' is direct and appropriate for urgent emergency situations.",
            correctFeedbackRu: "Идеально! 'Can' прямо и подходяще для срочных экстренных ситуаций.",
            incorrectFeedback: "Try again. Use 'Can' for urgent requests in emergency situations.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для срочных просьб в экстренных ситуациях."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I schedule my next appointment with you, Doctor Williams?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is formal and respectful when speaking directly to medical professionals.",
            correctFeedbackRu: "Отлично! 'May' формально и уважительно при прямом разговоре с медицинскими профессионалами.",
            incorrectFeedback: "Use 'May' for formal requests when addressing doctors and medical professionals directly.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб при прямом обращении к врачам и медицинским профессионалам."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we get some medicine for headaches at this pharmacy?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Correct! 'Can' is natural for asking about available medications at pharmacies.",
            correctFeedbackRu: "Правильно! 'Can' естественно для вопросов о доступных лекарствах в аптеках.",
            incorrectFeedback: "Try again. Use 'Can' for routine inquiries about pharmacy services and medications.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных запросов о фармацевтических услугах и лекарствах."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I take a sick day from work tomorrow?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Perfect! 'Can' is appropriate for routine workplace requests about sick leave.",
            correctFeedbackRu: "Идеально! 'Can' подходит для обычных рабочих просьб о больничном.",
            incorrectFeedback: "Use 'Can' for standard workplace requests about taking time off for health reasons.",
            incorrectFeedbackRu: "Используйте 'Can' для стандартных рабочих просьб о выходном по состоянию здоровья."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we visit the patient in room 205, Nurse?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is formal and respectful when asking hospital staff for visiting permission.",
            correctFeedbackRu: "Отлично! 'May' формально и уважительно при просьбе у больничного персонала разрешения на посещение.",
            incorrectFeedback: "Use 'May' for formal requests to medical staff in hospital settings.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб к медицинскому персоналу в больничной обстановке."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I get a bandage for this small cut?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Correct! 'Can' is casual and appropriate for basic first aid requests.",
            correctFeedbackRu: "Правильно! 'Can' неформально и подходяще для основных просьб первой помощи.",
            incorrectFeedback: "Try again. Use 'Can' for routine first aid and basic medical supply requests.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычной первой помощи и основных просьб медицинских принадлежностей."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we call someone to help with this injury?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Perfect! 'Can' is direct and appropriate for coordinating help in injury situations.",
            correctFeedbackRu: "Идеально! 'Can' прямо и подходяще для координации помощи в ситуациях травм.",
            incorrectFeedback: "Use 'Can' for practical coordination requests during medical emergencies.",
            incorrectFeedbackRu: "Используйте 'Can' для практических просьб координации во время медицинских чрезвычайных ситуаций."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have access to my medical records, please?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is formal and appropriate for requesting access to official medical documents.",
            correctFeedbackRu: "Отлично! 'May' формально и подходяще для просьбы доступа к официальным медицинским документам.",
            incorrectFeedback: "Use 'May' for formal requests involving official medical records and documentation.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб, касающихся официальных медицинских записей и документации."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we find a place to rest for a few minutes?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Correct! 'Can' is casual and natural for finding basic comfort during health needs.",
            correctFeedbackRu: "Правильно! 'Can' неформально и естественно для поиска основного комфорта при потребностях здоровья.",
            incorrectFeedback: "Try again. Use 'Can' for casual requests about finding rest areas and comfort.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных просьб о поиске зон отдыха и комфорта."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I speak with the head nurse about my mother's condition, please?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'May' is formal and respectful when requesting to speak with senior medical staff.",
            correctFeedbackRu: "Идеально! 'May' формально и уважительно при просьбе поговорить со старшим медицинским персоналом.",
            incorrectFeedback: "Use 'May' for formal requests to speak with senior healthcare professionals.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб поговорить со старшими медицинскими работниками."
        }
    ]
};

/* ============================================
Page 9: Permission with Can/May - Mixed Formal and Informal Fill Gaps
============================================ */
window.grammarExercises['modals']['permission-can-may-gap-page9'] = {
    title: "Permission with Can/May - Mixed Formal and Informal",
    fillGaps: [
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have your autograph, please, Ms. Johnson?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is formal and respectful when addressing someone by title for a special request.",
            correctFeedbackRu: "Отлично! 'May' формально и уважительно при обращении к кому-то по титулу для особой просьбы.",
            incorrectFeedback: "Use 'May' for formal requests when addressing people by title, especially for special favors.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб при обращении к людям по титулу, особенно для особых одолжений."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we turn off the air conditioning? It's too cold.",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Perfect! 'Can' is casual and appropriate for everyday comfort adjustments with friends or family.",
            correctFeedbackRu: "Идеально! 'Can' неформально и подходяще для повседневных корректировок комфорта с друзьями или семьей.",
            incorrectFeedback: "Try again. Use 'Can' for casual requests about comfort settings in informal situations.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных просьб о настройках комфорта в неформальных ситуациях."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I present my research findings to the committee, Chairman?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is formal and appropriate when addressing a chairman or committee leader.",
            correctFeedbackRu: "Отлично! 'May' формально и подходяще при обращении к председателю или руководителю комитета.",
            incorrectFeedback: "Use 'May' for formal academic or professional presentations to authority figures.",
            incorrectFeedbackRu: "Используйте 'May' для формальных академических или профессиональных презентаций авторитетным лицам."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we share this pizza? I'm really hungry.",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Correct! 'Can' is casual and natural for sharing food among friends or family.",
            correctFeedbackRu: "Правильно! 'Can' неформально и естественно для деления еды между друзьями или семьей.",
            incorrectFeedback: "Try again. Use 'Can' for informal food sharing requests among peers.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для неформальных просьб деления еды между сверстниками."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I submit my application for the scholarship, Dean Martinez?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Perfect! 'May' is formal and respectful when addressing academic administrators by title.",
            correctFeedbackRu: "Идеально! 'May' формально и уважительно при обращении к академическим администраторам по титулу.",
            incorrectFeedback: "Use 'May' for formal academic requests when addressing deans and senior university staff.",
            incorrectFeedbackRu: "Используйте 'May' для формальных академических просьб при обращении к деканам и старшему персоналу университета."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I borrow your umbrella? It started raining.",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'Can' is natural for urgent, practical requests between friends or acquaintances.",
            correctFeedbackRu: "Отлично! 'Can' естественно для срочных, практических просьб между друзьями или знакомыми.",
            incorrectFeedback: "Use 'Can' for casual, urgent requests for help with immediate practical needs.",
            incorrectFeedbackRu: "Используйте 'Can' для обычных, срочных просьб помощи с немедленными практическими потребностями."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we discuss the contract details with you, Mr. Thompson?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Correct! 'May' is professional and formal for business discussions with clients or partners.",
            correctFeedbackRu: "Правильно! 'May' профессионально и формально для деловых обсуждений с клиентами или партнерами.",
            incorrectFeedback: "Use 'May' for formal business discussions when addressing clients or partners by surname.",
            incorrectFeedbackRu: "Используйте 'May' для формальных деловых обсуждений при обращении к клиентам или партнерам по фамилии."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we change the TV channel? This show is boring.",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Perfect! 'Can' is casual and appropriate for entertainment choices among family or friends.",
            correctFeedbackRu: "Идеально! 'Can' неформально и подходяще для развлекательных выборов среди семьи или друзей.",
            incorrectFeedback: "Try again. Use 'Can' for informal entertainment and media choices in casual settings.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для неформальных развлекательных и медиа-выборов в обычной обстановке."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have a moment of your time, Judge Roberts?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is appropriately formal and respectful when addressing judges or legal officials.",
            correctFeedbackRu: "Отлично! 'May' подходяще формально и уважительно при обращении к судьям или юридическим официальным лицам.",
            incorrectFeedback: "Use 'May' for formal requests to legal authorities and high-ranking officials.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб к юридическим властям и высокопоставленным официальным лицам."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we pick some flowers from your garden?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Correct! 'Can' is casual and friendly for requests between neighbors or friends about garden activities.",
            correctFeedbackRu: "Правильно! 'Can' неформально и дружелюбно для просьб между соседями или друзьями о садовых мероприятиях.",
            incorrectFeedback: "Try again. Use 'Can' for casual requests between friends about outdoor activities.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных просьб между друзьями о мероприятиях на открытом воздухе."
        }
    ]
};

/* ============================================
Page 10: Permission with Can/May - Final Review and Special Situations Fill Gaps
============================================ */
window.grammarExercises['modals']['permission-can-may-gap-page10'] = {
    title: "Permission with Can/May - Final Review",
    fillGaps: [
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I offer you some advice about this problem?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'Can' is warm and friendly when offering help or advice to friends.",
            correctFeedbackRu: "Идеально! 'Can' тепло и дружелюбно при предложении помощи или совета друзьям.",
            incorrectFeedback: "Try again. Use 'Can' for friendly offers of help and advice in casual relationships.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для дружеских предложений помощи и советов в обычных отношениях."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we have your signature on this legal document, Attorney Williams?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Excellent! 'May' is formal and professional for legal document requests to attorneys.",
            correctFeedbackRu: "Отлично! 'May' формально и профессионально для просьб юридических документов к адвокатам.",
            incorrectFeedback: "Use 'May' for formal legal requests when addressing legal professionals by title.",
            incorrectFeedbackRu: "Используйте 'May' для формальных юридических просьб при обращении к юридическим профессионалам по титулу."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I pet your dog? He looks so friendly.",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Correct! 'Can' is casual and natural for asking permission about pets in everyday situations.",
            correctFeedbackRu: "Правильно! 'Can' неформально и естественно для просьбы разрешения о домашних животных в повседневных ситуациях.",
            incorrectFeedback: "Try again. Use 'Can' for casual requests about interacting with pets or animals.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных просьб о взаимодействии с домашними животными."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we arrange a private meeting, Senator Johnson?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Perfect! 'May' is appropriately formal when requesting meetings with government officials.",
            correctFeedbackRu: "Идеально! 'May' подходяще формально при просьбе встреч с правительственными официальными лицами.",
            incorrectFeedback: "Use 'May' for formal requests to high-ranking government officials and politicians.",
            incorrectFeedbackRu: "Используйте 'May' для формальных просьб к высокопоставленным правительственным официальным лицам и политикам."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we build a sandcastle here on the beach?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Are"],
            correctFeedback: "Excellent! 'Can' is casual and appropriate for family beach activities and fun.",
            correctFeedbackRu: "Отлично! 'Can' неформально и подходяще для семейных пляжных мероприятий и веселья.",
            incorrectFeedback: "Try again. Use 'Can' for casual family recreational activities in public spaces.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных семейных развлекательных мероприятий в общественных местах."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I request an extension for this assignment, Professor Davis?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Am"],
            correctFeedback: "Correct! 'May' is formal and respectful for academic requests to professors.",
            correctFeedbackRu: "Правильно! 'May' формально и уважительно для академических просьб к профессорам.",
            incorrectFeedback: "Use 'May' for formal academic requests when addressing professors by title.",
            incorrectFeedbackRu: "Используйте 'May' для формальных академических просьб при обращении к профессорам по титулу."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we make some noise? We're celebrating a birthday.",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'Can' is friendly and appropriate for asking neighbors about celebration activities.",
            correctFeedbackRu: "Идеально! 'Can' дружелюбно и подходяще для вопросов соседям о праздничных мероприятиях.",
            incorrectFeedback: "Try again. Use 'Can' for casual requests about celebrations and social activities.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных просьб о празднованиях и социальных мероприятиях."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have the honor of introducing you, Ambassador Clark?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Excellent! 'May' is extremely formal and respectful for diplomatic and ceremonial situations.",
            correctFeedbackRu: "Отлично! 'May' чрезвычайно формально и уважительно для дипломатических и церемониальных ситуаций.",
            incorrectFeedback: "Use 'May' for highly formal diplomatic and ceremonial requests to ambassadors.",
            incorrectFeedbackRu: "Используйте 'May' для очень формальных дипломатических и церемониальных просьб к послам."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ we use this empty table for our board game?",
            correctAnswer: "Can",
            options: ["Can", "May", "Will", "Do"],
            correctFeedback: "Correct! 'Can' is casual and natural for using public spaces for games and activities.",
            correctFeedbackRu: "Правильно! 'Can' неформально и естественно для использования общественных мест для игр и мероприятий.",
            incorrectFeedback: "Try again. Use 'Can' for casual requests about using public facilities for recreational activities.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'Can' для обычных просьб об использовании общественных удобств для развлекательных мероприятий."
        },
        {
            question: "Complete the sentence with 'can' or 'may':",
            questionRu: "Заполните предложение словом 'can' или 'may':",
            sentence: "____ I have the privilege of asking you one final question, Your Honor?",
            correctAnswer: "May",
            options: ["Can", "May", "Will", "Should"],
            correctFeedback: "Perfect! 'May' is extremely formal and respectful when addressing judges with 'Your Honor.'",
            correctFeedbackRu: "Идеально! 'May' чрезвычайно формально и уважительно при обращении к судьям с 'Your Honor.'",
            incorrectFeedback: "Use 'May' for highly formal legal situations when addressing judges with formal titles.",
            incorrectFeedbackRu: "Используйте 'May' для очень формальных юридических ситуаций при обращении к судьям с формальными титулами."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Permission with Can/May Fill Gaps Pages 1-10 loaded successfully!");
console.log("===== PERMISSION CAN/MAY: FILL GAPS PAGES 1-10 LOADED =====");

/* =============================================================================== */
/* =========================Sentence Building Exercises=========================== */

/* ============================================
Page 1: Permission with Can/May - Basic Permission Sentence Building
============================================ */
window.grammarExercises['modals']['permission-can-may-sentence-page1'] = {
    title: "Permission with Can/May - Basic Permission",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "go", "out", "tonight?"],
            correctAnswer: "Can I go out tonight?",
            correctFeedback: "Perfect! 'Can I go out tonight?' is correct. Great use of 'Can' for informal permission!",
            correctFeedbackRu: "Отлично! 'Can I go out tonight?' верно. Прекрасное использование 'Can' для неформального разрешения!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + adverb + tonight + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + наречие + tonight + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "come", "in?"],
            correctAnswer: "May I come in?",
            correctFeedback: "Excellent! 'May I come in?' is correct. Perfect formal permission request!",
            correctFeedbackRu: "Отлично! 'May I come in?' верно. Идеальная формальная просьба разрешения!",
            incorrectFeedback: "Try again. Remember: May + I + verb + preposition + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + предлог + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "eat", "lunch", "here?"],
            correctAnswer: "Can we eat lunch here?",
            correctFeedback: "Correct! 'Can we eat lunch here?' is perfect for asking permission about dining locations!",
            correctFeedbackRu: "Правильно! 'Can we eat lunch here?' идеально для просьбы разрешения о местах приема пищи!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + object + here + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + объект + here + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "ask", "a", "question?"],
            correctAnswer: "May I ask a question?",
            correctFeedback: "Perfect! 'May I ask a question?' is formal and polite for classroom situations!",
            correctFeedbackRu: "Идеально! 'May I ask a question?' формально и вежливо для классных ситуаций!",
            incorrectFeedback: "Try again. Remember: May + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "use", "your", "phone?"],
            correctAnswer: "Can I use your phone?",
            correctFeedback: "Excellent! 'Can I use your phone?' is great for requesting to borrow personal items!",
            correctFeedbackRu: "Отлично! 'Can I use your phone?' прекрасно для просьбы одолжить личные вещи!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "we", "sit", "down?"],
            correctAnswer: "May we sit down?",
            correctFeedback: "Correct! 'May we sit down?' is polite and formal for requesting seating permission!",
            correctFeedbackRu: "Правильно! 'May we sit down?' вежливо и формально для просьбы разрешения сесть!",
            incorrectFeedback: "Try again. Remember: May + we + verb + adverb + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + we + глагол + наречие + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "open", "the", "window?"],
            correctAnswer: "Can I open the window?",
            correctFeedback: "Perfect! 'Can I open the window?' is natural for requesting environmental changes!",
            correctFeedbackRu: "Идеально! 'Can I open the window?' естественно для просьб изменения окружающей среды!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "help", "you?"],
            correctAnswer: "May I help you?",
            correctFeedback: "Excellent! 'May I help you?' is formal and polite for offering assistance!",
            correctFeedbackRu: "Отлично! 'May I help you?' формально и вежливо для предложения помощи!",
            incorrectFeedback: "Try again. Remember: May + I + verb + pronoun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + местоимение + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "play", "games", "here?"],
            correctAnswer: "Can we play games here?",
            correctFeedback: "Correct! 'Can we play games here?' is perfect for asking about recreational activities!",
            correctFeedbackRu: "Правильно! 'Can we play games here?' идеально для вопросов о развлекательных мероприятиях!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + noun + here + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + существительное + here + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "take", "this", "seat?"],
            correctAnswer: "May I take this seat?",
            correctFeedback: "Perfect! 'May I take this seat?' is polite and formal for requesting specific seating!",
            correctFeedbackRu: "Идеально! 'May I take this seat?' вежливо и формально для просьбы определенного места!",
            incorrectFeedback: "Try again. Remember: May + I + verb + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + указательное + существительное + ?"
        }
    ]
};

/* ============================================
Page 2: Permission with Can/May - Family and Friends Sentence Building
============================================ */
window.grammarExercises['modals']['permission-can-may-sentence-page2'] = {
    title: "Permission with Can/May - Family and Friends",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "watch", "TV", "now?"],
            correctAnswer: "Can I watch TV now?",
            correctFeedback: "Perfect! 'Can I watch TV now?' is natural for family entertainment requests!",
            correctFeedbackRu: "Идеально! 'Can I watch TV now?' естественно для семейных развлекательных просьб!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + object + now + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + объект + now + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "order", "pizza", "tonight?"],
            correctAnswer: "Can we order pizza tonight?",
            correctFeedback: "Excellent! 'Can we order pizza tonight?' is great for family meal planning!",
            correctFeedbackRu: "Отлично! 'Can we order pizza tonight?' прекрасно для семейного планирования питания!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + object + tonight + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + объект + tonight + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "invite", "my", "friend?"],
            correctAnswer: "Can I invite my friend?",
            correctFeedback: "Correct! 'Can I invite my friend?' is perfect for asking family permission about guests!",
            correctFeedbackRu: "Правильно! 'Can I invite my friend?' идеально для просьбы семейного разрешения о гостях!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "stay", "up", "late?"],
            correctAnswer: "Can I stay up late?",
            correctFeedback: "Perfect! 'Can I stay up late?' is natural for bedtime negotiations with family!",
            correctFeedbackRu: "Идеально! 'Can I stay up late?' естественно для переговоров о времени сна с семьей!",
            incorrectFeedback: "Try again. Remember: Can + I + phrasal verb + adjective + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + фразовый глагол + прилагательное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "go", "to", "the", "park?"],
            correctAnswer: "Can we go to the park?",
            correctFeedback: "Excellent! 'Can we go to the park?' is great for family outing requests!",
            correctFeedbackRu: "Отлично! 'Can we go to the park?' прекрасно для просьб семейных прогулок!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + to + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + to + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "have", "some", "cookies?"],
            correctAnswer: "Can I have some cookies?",
            correctFeedback: "Correct! 'Can I have some cookies?' is perfect for asking family for snacks!",
            correctFeedbackRu: "Правильно! 'Can I have some cookies?' идеально для просьбы у семьи закусок!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + quantifier + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + квантификатор + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "listen", "to", "music?"],
            correctAnswer: "Can we listen to music?",
            correctFeedback: "Perfect! 'Can we listen to music?' is natural for family entertainment choices!",
            correctFeedbackRu: "Идеально! 'Can we listen to music?' естественно для семейных развлекательных выборов!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + to + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + to + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "borrow", "your", "book?"],
            correctAnswer: "Can I borrow your book?",
            correctFeedback: "Excellent! 'Can I borrow your book?' is great for requesting to use family members' things!",
            correctFeedbackRu: "Отлично! 'Can I borrow your book?' прекрасно для просьбы использовать вещи членов семьи!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "make", "dinner", "together?"],
            correctAnswer: "Can we make dinner together?",
            correctFeedback: "Correct! 'Can we make dinner together?' is perfect for family cooking activities!",
            correctFeedbackRu: "Правильно! 'Can we make dinner together?' идеально для семейных кулинарных мероприятий!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + object + together + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + объект + together + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "sleep", "in", "tomorrow?"],
            correctAnswer: "Can I sleep in tomorrow?",
            correctFeedback: "Perfect! 'Can I sleep in tomorrow?' is natural for weekend morning negotiations!",
            correctFeedbackRu: "Идеально! 'Can I sleep in tomorrow?' естественно для выходных утренних переговоров!",
            incorrectFeedback: "Try again. Remember: Can + I + phrasal verb + tomorrow + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + фразовый глагол + tomorrow + ?"
        }
    ]
};

/* ============================================
Page 3: Permission with Can/May - School and Work Sentence Building
============================================ */
window.grammarExercises['modals']['permission-can-may-sentence-page3'] = {
    title: "Permission with Can/May - School and Work",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "leave", "early", "today?"],
            correctAnswer: "May I leave early today?",
            correctFeedback: "Perfect! 'May I leave early today?' is formal and appropriate for workplace requests!",
            correctFeedbackRu: "Идеально! 'May I leave early today?' формально и подходяще для рабочих просьб!",
            incorrectFeedback: "Try again. Remember: May + I + verb + adverb + today + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + наречие + today + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "share", "my", "notes?"],
            correctAnswer: "Can I share my notes?",
            correctFeedback: "Excellent! 'Can I share my notes?' is great for offering help to classmates!",
            correctFeedbackRu: "Отлично! 'Can I share my notes?' прекрасно для предложения помощи одноклассникам!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "we", "present", "our", "project?"],
            correctAnswer: "May we present our project?",
            correctFeedback: "Correct! 'May we present our project?' is formal and perfect for classroom presentations!",
            correctFeedbackRu: "Правильно! 'May we present our project?' формально и идеально для классных презентаций!",
            incorrectFeedback: "Try again. Remember: May + we + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + we + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "work", "from", "home?"],
            correctAnswer: "Can I work from home?",
            correctFeedback: "Perfect! 'Can I work from home?' is natural for modern workplace flexibility requests!",
            correctFeedbackRu: "Идеально! 'Can I work from home?' естественно для современных просьб гибкости рабочего места!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + from + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + from + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "make", "a", "suggestion?"],
            correctAnswer: "May I make a suggestion?",
            correctFeedback: "Excellent! 'May I make a suggestion?' is formal and polite for contributing ideas!",
            correctFeedbackRu: "Отлично! 'May I make a suggestion?' формально и вежливо для внесения идей!",
            incorrectFeedback: "Try again. Remember: May + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "take", "a", "break?"],
            correctAnswer: "Can we take a break?",
            correctFeedback: "Correct! 'Can we take a break?' is perfect for requesting rest time at work or school!",
            correctFeedbackRu: "Правильно! 'Can we take a break?' идеально для просьбы времени отдыха на работе или в школе!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "attend", "the", "meeting?"],
            correctAnswer: "May I attend the meeting?",
            correctFeedback: "Perfect! 'May I attend the meeting?' is formal and appropriate for professional settings!",
            correctFeedbackRu: "Идеально! 'May I attend the meeting?' формально и подходяще для профессиональной обстановки!",
            incorrectFeedback: "Try again. Remember: May + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "check", "my", "email?"],
            correctAnswer: "Can I check my email?",
            correctFeedback: "Excellent! 'Can I check my email?' is natural for requesting brief personal time!",
            correctFeedbackRu: "Отлично! 'Can I check my email?' естественно для просьбы краткого личного времени!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "we", "schedule", "another", "meeting?"],
            correctAnswer: "May we schedule another meeting?",
            correctFeedback: "Correct! 'May we schedule another meeting?' is formal and professional for business planning!",
            correctFeedbackRu: "Правильно! 'May we schedule another meeting?' формально и профессионально для деловых планов!",
            incorrectFeedback: "Try again. Remember: May + we + verb + determiner + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + we + глагол + определитель + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "submit", "this", "assignment?"],
            correctAnswer: "Can I submit this assignment?",
            correctFeedback: "Perfect! 'Can I submit this assignment?' is great for academic deadline questions!",
            correctFeedbackRu: "Идеально! 'Can I submit this assignment?' прекрасно для академических вопросов о сроках!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + указательное + существительное + ?"
        }
    ]
};

/* ============================================
Page 4: Permission with Can/May - Public Places Sentence Building
============================================ */
window.grammarExercises['modals']['permission-can-may-sentence-page4'] = {
    title: "Permission with Can/May - Public Places",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "enter", "the", "building?"],
            correctAnswer: "May I enter the building?",
            correctFeedback: "Perfect! 'May I enter the building?' is formal and appropriate for official buildings!",
            correctFeedbackRu: "Идеально! 'May I enter the building?' формально и подходяще для официальных зданий!",
            incorrectFeedback: "Try again. Remember: May + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "walk", "on", "the", "grass?"],
            correctAnswer: "Can we walk on the grass?",
            correctFeedback: "Excellent! 'Can we walk on the grass?' is natural for asking about park rules!",
            correctFeedbackRu: "Отлично! 'Can we walk on the grass?' естественно для вопросов о правилах парка!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + on + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + on + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "take", "photos", "here?"],
            correctAnswer: "May I take photos here?",
            correctFeedback: "Correct! 'May I take photos here?' is polite and formal for museums and public places!",
            correctFeedbackRu: "Правильно! 'May I take photos here?' вежливо и формально для музеев и общественных мест!",
            incorrectFeedback: "Try again. Remember: May + I + verb + noun + here + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + существительное + here + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "feed", "the", "birds?"],
            correctAnswer: "Can we feed the birds?",
            correctFeedback: "Perfect! 'Can we feed the birds?' is great for asking about park activities!",
            correctFeedbackRu: "Идеально! 'Can we feed the birds?' прекрасно для вопросов о парковых мероприятиях!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "use", "the", "restroom?"],
            correctAnswer: "May I use the restroom?",
            correctFeedback: "Excellent! 'May I use the restroom?' is polite and formal for public facilities!",
            correctFeedbackRu: "Отлично! 'May I use the restroom?' вежливо и формально для общественных удобств!",
            incorrectFeedback: "Try again. Remember: May + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "park", "our", "car", "here?"],
            correctAnswer: "Can we park our car here?",
            correctFeedback: "Correct! 'Can we park our car here?' is natural for asking about parking permission!",
            correctFeedbackRu: "Правильно! 'Can we park our car here?' естественно для вопросов о разрешении парковки!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + possessive + noun + here + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + притяжательное + существительное + here + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "see", "the", "menu?"],
            correctAnswer: "May I see the menu?",
            correctFeedback: "Perfect! 'May I see the menu?' is polite and formal for restaurant requests!",
            correctFeedbackRu: "Идеально! 'May I see the menu?' вежливо и формально для ресторанных просьб!",
            incorrectFeedback: "Try again. Remember: May + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "swim", "in", "this", "pool?"],
            correctAnswer: "Can we swim in this pool?",
            correctFeedback: "Excellent! 'Can we swim in this pool?' is great for asking about recreational facilities!",
            correctFeedbackRu: "Отлично! 'Can we swim in this pool?' прекрасно для вопросов о развлекательных удобствах!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + in + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + in + указательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "get", "some", "information?"],
            correctAnswer: "May I get some information?",
            correctFeedback: "Correct! 'May I get some information?' is formal and polite for tourist inquiries!",
            correctFeedbackRu: "Правильно! 'May I get some information?' формально и вежливо для туристических запросов!",
            incorrectFeedback: "Try again. Remember: May + I + verb + quantifier + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + квантификатор + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "sit", "at", "this", "table?"],
            correctAnswer: "Can we sit at this table?",
            correctFeedback: "Perfect! 'Can we sit at this table?' is natural for restaurant and café seating!",
            correctFeedbackRu: "Идеально! 'Can we sit at this table?' естественно для размещения в ресторанах и кафе!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + at + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + at + указательное + существительное + ?"
        }
    ]
};

/* ============================================
Page 5: Permission with Can/May - Shopping and Services Sentence Building
============================================ */
window.grammarExercises['modals']['permission-can-may-sentence-page5'] = {
    title: "Permission with Can/May - Shopping and Services",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "try", "this", "on?"],
            correctAnswer: "Can I try this on?",
            correctFeedback: "Perfect! 'Can I try this on?' is standard for trying clothes in stores!",
            correctFeedbackRu: "Идеально! 'Can I try this on?' стандартно для примерки одежды в магазинах!",
            incorrectFeedback: "Try again. Remember: Can + I + phrasal verb + pronoun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + фразовый глагол + местоимение + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "speak", "to", "the", "manager?"],
            correctAnswer: "May I speak to the manager?",
            correctFeedback: "Excellent! 'May I speak to the manager?' is formal and polite for customer service!",
            correctFeedbackRu: "Отлично! 'May I speak to the manager?' формально и вежливо для обслуживания клиентов!",
            incorrectFeedback: "Try again. Remember: May + I + verb + to + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + to + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "pay", "by", "credit", "card?"],
            correctAnswer: "Can we pay by credit card?",
            correctFeedback: "Correct! 'Can we pay by credit card?' is natural for asking about payment methods!",
            correctFeedbackRu: "Правильно! 'Can we pay by credit card?' естественно для вопросов о способах оплаты!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + by + adjective + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + by + прилагательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "return", "this", "item?"],
            correctAnswer: "May I return this item?",
            correctFeedback: "Perfect! 'May I return this item?' is polite and formal for store returns!",
            correctFeedbackRu: "Идеально! 'May I return this item?' вежливо и формально для возвратов в магазине!",
            incorrectFeedback: "Try again. Remember: May + I + verb + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + указательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "get", "a", "receipt?"],
            correctAnswer: "Can I get a receipt?",
            correctFeedback: "Excellent! 'Can I get a receipt?' is natural for requesting purchase documentation!",
            correctFeedbackRu: "Отлично! 'Can I get a receipt?' естественно для просьбы документов о покупке!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "we", "see", "different", "sizes?"],
            correctAnswer: "May we see different sizes?",
            correctFeedback: "Correct! 'May we see different sizes?' is polite for requesting clothing options!",
            correctFeedbackRu: "Правильно! 'May we see different sizes?' вежливо для просьбы вариантов одежды!",
            incorrectFeedback: "Try again. Remember: May + we + verb + adjective + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + we + глагол + прилагательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "have", "a", "bag?"],
            correctAnswer: "Can I have a bag?",
            correctFeedback: "Perfect! 'Can I have a bag?' is standard for requesting shopping bags!",
            correctFeedbackRu: "Идеально! 'Can I have a bag?' стандартно для просьбы пакетов для покупок!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "exchange", "this", "product?"],
            correctAnswer: "May I exchange this product?",
            correctFeedback: "Excellent! 'May I exchange this product?' is formal and appropriate for store services!",
            correctFeedbackRu: "Отлично! 'May I exchange this product?' формально и подходяще для магазинных услуг!",
            incorrectFeedback: "Try again. Remember: May + I + verb + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + указательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "get", "a", "discount?"],
            correctAnswer: "Can we get a discount?",
            correctFeedback: "Correct! 'Can we get a discount?' is natural for asking about price reductions!",
            correctFeedbackRu: "Правильно! 'Can we get a discount?' естественно для вопросов о снижении цен!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "check", "the", "price?"],
            correctAnswer: "May I check the price?",
            correctFeedback: "Perfect! 'May I check the price?' is polite for asking about cost information!",
            correctFeedbackRu: "Идеально! 'May I check the price?' вежливо для вопросов об информации о стоимости!",
            incorrectFeedback: "Try again. Remember: May + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + артикль + существительное + ?"
        }
    ]
};

/* ============================================
Page 6: Permission with Can/May - Technology and Communication Sentence Building
============================================ */
window.grammarExercises['modals']['permission-can-may-sentence-page6'] = {
    title: "Permission with Can/May - Technology and Communication",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "charge", "my", "phone?"],
            correctAnswer: "Can I charge my phone?",
            correctFeedback: "Perfect! 'Can I charge my phone?' is natural for requesting to use electrical outlets!",
            correctFeedbackRu: "Идеально! 'Can I charge my phone?' естественно для просьбы использовать электрические розетки!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "record", "this", "call?"],
            correctAnswer: "May I record this call?",
            correctFeedback: "Excellent! 'May I record this call?' is formal and appropriate for business communication!",
            correctFeedbackRu: "Отлично! 'May I record this call?' формально и подходяще для деловой связи!",
            incorrectFeedback: "Try again. Remember: May + I + verb + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + указательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "connect", "to", "WiFi?"],
            correctAnswer: "Can we connect to WiFi?",
            correctFeedback: "Correct! 'Can we connect to WiFi?' is standard for asking about internet access!",
            correctFeedbackRu: "Правильно! 'Can we connect to WiFi?' стандартно для вопросов о доступе в интернет!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + to + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + to + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "send", "you", "an", "email?"],
            correctAnswer: "May I send you an email?",
            correctFeedback: "Perfect! 'May I send you an email?' is polite for requesting digital communication!",
            correctFeedbackRu: "Идеально! 'May I send you an email?' вежливо для просьбы цифровой связи!",
            incorrectFeedback: "Try again. Remember: May + I + verb + pronoun + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + местоимение + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "use", "this", "computer?"],
            correctAnswer: "Can I use this computer?",
            correctFeedback: "Excellent! 'Can I use this computer?' is natural for requesting to use shared devices!",
            correctFeedbackRu: "Отлично! 'Can I use this computer?' естественно для просьбы использовать общие устройства!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + указательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "we", "make", "a", "video", "call?"],
            correctAnswer: "May we make a video call?",
            correctFeedback: "Correct! 'May we make a video call?' is formal for business communication requests!",
            correctFeedbackRu: "Правильно! 'May we make a video call?' формально для просьб деловой связи!",
            incorrectFeedback: "Try again. Remember: May + we + verb + article + adjective + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + we + глагол + артикль + прилагательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "download", "this", "app?"],
            correctAnswer: "Can I download this app?",
            correctFeedback: "Perfect! 'Can I download this app?' is standard for requesting software installation!",
            correctFeedbackRu: "Идеально! 'Can I download this app?' стандартно для просьбы установки программного обеспечения!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + указательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "share", "this", "file?"],
            correctAnswer: "May I share this file?",
            correctFeedback: "Excellent! 'May I share this file?' is polite for digital file sharing requests!",
            correctFeedbackRu: "Отлично! 'May I share this file?' вежливо для просьб обмена цифровыми файлами!",
            incorrectFeedback: "Try again. Remember: May + I + verb + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + указательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "turn", "on", "the", "speakers?"],
            correctAnswer: "Can we turn on the speakers?",
            correctFeedback: "Correct! 'Can we turn on the speakers?' is natural for requesting to use audio equipment!",
            correctFeedbackRu: "Правильно! 'Can we turn on the speakers?' естественно для просьбы использовать аудиооборудование!",
            incorrectFeedback: "Try again. Remember: Can + we + phrasal verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + фразовый глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "access", "your", "network?"],
            correctAnswer: "May I access your network?",
            correctFeedback: "Perfect! 'May I access your network?' is formal and appropriate for IT security requests!",
            correctFeedbackRu: "Идеально! 'May I access your network?' формально и подходяще для просьб IT-безопасности!",
            incorrectFeedback: "Try again. Remember: May + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + притяжательное + существительное + ?"
        }
    ]
};

/* ============================================
Page 7: Permission with Can/May - Travel and Transportation Sentence Building
============================================ */
window.grammarExercises['modals']['permission-can-may-sentence-page7'] = {
    title: "Permission with Can/May - Travel and Transportation",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "see", "your", "ticket?"],
            correctAnswer: "May I see your ticket?",
            correctFeedback: "Perfect! 'May I see your ticket?' is formal and appropriate for transportation staff requests!",
            correctFeedbackRu: "Идеально! 'May I see your ticket?' формально и подходяще для просьб персонала транспорта!",
            incorrectFeedback: "Try again. Remember: May + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "board", "the", "plane", "now?"],
            correctAnswer: "Can we board the plane now?",
            correctFeedback: "Excellent! 'Can we board the plane now?' is natural for asking about boarding procedures!",
            correctFeedbackRu: "Отлично! 'Can we board the plane now?' естественно для вопросов о процедурах посадки!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + article + noun + now + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + артикль + существительное + now + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "change", "my", "seat?"],
            correctAnswer: "May I change my seat?",
            correctFeedback: "Correct! 'May I change my seat?' is polite and formal for airline requests!",
            correctFeedbackRu: "Правильно! 'May I change my seat?' вежливо и формально для просьб авиакомпании!",
            incorrectFeedback: "Try again. Remember: May + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "take", "the", "bus?"],
            correctAnswer: "Can we take the bus?",
            correctFeedback: "Perfect! 'Can we take the bus?' is natural for asking about public transportation!",
            correctFeedbackRu: "Идеально! 'Can we take the bus?' естественно для вопросов об общественном транспорте!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "check", "in", "early?"],
            correctAnswer: "May I check in early?",
            correctFeedback: "Excellent! 'May I check in early?' is formal and polite for hotel requests!",
            correctFeedbackRu: "Отлично! 'May I check in early?' формально и вежливо для просьб отеля!",
            incorrectFeedback: "Try again. Remember: May + I + phrasal verb + adverb + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + фразовый глагол + наречие + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "bring", "our", "luggage?"],
            correctAnswer: "Can we bring our luggage?",
            correctFeedback: "Correct! 'Can we bring our luggage?' is standard for travel baggage questions!",
            correctFeedbackRu: "Правильно! 'Can we bring our luggage?' стандартно для вопросов о багаже в путешествии!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "have", "your", "passport?"],
            correctAnswer: "May I have your passport?",
            correctFeedback: "Perfect! 'May I have your passport?' is formal and appropriate for immigration officers!",
            correctFeedbackRu: "Идеально! 'May I have your passport?' формально и подходяще для иммиграционных офицеров!",
            incorrectFeedback: "Try again. Remember: May + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "get", "off", "here?"],
            correctAnswer: "Can we get off here?",
            correctFeedback: "Excellent! 'Can we get off here?' is natural for asking about bus and train stops!",
            correctFeedbackRu: "Отлично! 'Can we get off here?' естественно для вопросов об автобусных и железнодорожных остановках!",
            incorrectFeedback: "Try again. Remember: Can + we + phrasal verb + here + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + фразовый глагол + here + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "book", "a", "taxi?"],
            correctAnswer: "May I book a taxi?",
            correctFeedback: "Correct! 'May I book a taxi?' is polite and formal for transportation services!",
            correctFeedbackRu: "Правильно! 'May I book a taxi?' вежливо и формально для транспортных услуг!",
            incorrectFeedback: "Try again. Remember: May + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "reserve", "these", "seats?"],
            correctAnswer: "Can we reserve these seats?",
            correctFeedback: "Perfect! 'Can we reserve these seats?' is standard for booking transportation seating!",
            correctFeedbackRu: "Идеально! 'Can we reserve these seats?' стандартно для бронирования мест в транспорте!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + указательное + существительное + ?"
        }
    ]
};

/* ============================================
Page 8: Permission with Can/May - Health and Emergency Sentence Building
============================================ */
window.grammarExercises['modals']['permission-can-may-sentence-page8'] = {
    title: "Permission with Can/May - Health and Emergency",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "call", "a", "doctor?"],
            correctAnswer: "Can I call a doctor?",
            correctFeedback: "Perfect! 'Can I call a doctor?' is direct and appropriate for emergency situations!",
            correctFeedbackRu: "Идеально! 'Can I call a doctor?' прямо и подходяще для экстренных ситуаций!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "schedule", "an", "appointment?"],
            correctAnswer: "May I schedule an appointment?",
            correctFeedback: "Excellent! 'May I schedule an appointment?' is formal and polite for medical services!",
            correctFeedbackRu: "Отлично! 'May I schedule an appointment?' формально и вежливо для медицинских услуг!",
            incorrectFeedback: "Try again. Remember: May + I + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "visit", "the", "patient?"],
            correctAnswer: "Can we visit the patient?",
            correctFeedback: "Correct! 'Can we visit the patient?' is natural for asking about hospital visiting!",
            correctFeedbackRu: "Правильно! 'Can we visit the patient?' естественно для вопросов о больничных посещениях!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "take", "some", "medicine?"],
            correctAnswer: "May I take some medicine?",
            correctFeedback: "Perfect! 'May I take some medicine?' is polite for asking permission about medication!",
            correctFeedbackRu: "Идеально! 'May I take some medicine?' вежливо для просьбы разрешения о лекарствах!",
            incorrectFeedback: "Try again. Remember: May + I + verb + quantifier + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + квантификатор + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "get", "some", "help?"],
            correctAnswer: "Can I get some help?",
            correctFeedback: "Excellent! 'Can I get some help?' is direct and appropriate for requesting assistance!",
            correctFeedbackRu: "Отлично! 'Can I get some help?' прямо и подходяще для просьбы помощи!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + quantifier + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + квантификатор + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "we", "call", "an", "ambulance?"],
            correctAnswer: "May we call an ambulance?",
            correctFeedback: "Correct! 'May we call an ambulance?' is formal and appropriate for emergency requests!",
            correctFeedbackRu: "Правильно! 'May we call an ambulance?' формально и подходяще для экстренных просьб!",
            incorrectFeedback: "Try again. Remember: May + we + verb + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + we + глагол + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "rest", "for", "a", "moment?"],
            correctAnswer: "Can I rest for a moment?",
            correctFeedback: "Perfect! 'Can I rest for a moment?' is natural for requesting brief recovery time!",
            correctFeedbackRu: "Идеально! 'Can I rest for a moment?' естественно для просьбы краткого времени восстановления!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + for + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + for + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "speak", "to", "a", "nurse?"],
            correctAnswer: "May I speak to a nurse?",
            correctFeedback: "Excellent! 'May I speak to a nurse?' is formal and polite for hospital requests!",
            correctFeedbackRu: "Отлично! 'May I speak to a nurse?' формально и вежливо для больничных просьб!",
            incorrectFeedback: "Try again. Remember: May + I + verb + to + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + to + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "stay", "with", "him?"],
            correctAnswer: "Can we stay with him?",
            correctFeedback: "Correct! 'Can we stay with him?' is natural for asking about accompanying patients!",
            correctFeedbackRu: "Правильно! 'Can we stay with him?' естественно для вопросов о сопровождении пациентов!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + with + pronoun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + with + местоимение + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "use", "the", "first", "aid", "kit?"],
            correctAnswer: "May I use the first aid kit?",
            correctFeedback: "Perfect! 'May I use the first aid kit?' is formal and appropriate for emergency equipment!",
            correctFeedbackRu: "Идеально! 'May I use the first aid kit?' формально и подходяще для экстренного оборудования!",
            incorrectFeedback: "Try again. Remember: May + I + verb + article + adjective + noun + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + артикль + прилагательное + существительное + существительное + ?"
        }
    ]
};

/* ============================================
Page 9: Permission with Can/May - Mixed Social Situations Sentence Building
============================================ */
window.grammarExercises['modals']['permission-can-may-sentence-page9'] = {
    title: "Permission with Can/May - Mixed Social Situations",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "tell", "you", "something?"],
            correctAnswer: "Can I tell you something?",
            correctFeedback: "Perfect! 'Can I tell you something?' is casual and friendly for sharing information!",
            correctFeedbackRu: "Идеально! 'Can I tell you something?' неформально и дружелюбно для обмена информацией!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + pronoun + pronoun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + местоимение + местоимение + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "introduce", "my", "friend?"],
            correctAnswer: "May I introduce my friend?",
            correctFeedback: "Excellent! 'May I introduce my friend?' is formal and polite for social introductions!",
            correctFeedbackRu: "Отлично! 'May I introduce my friend?' формально и вежливо для социальных представлений!",
            incorrectFeedback: "Try again. Remember: May + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "dance", "to", "this", "song?"],
            correctAnswer: "Can we dance to this song?",
            correctFeedback: "Correct! 'Can we dance to this song?' is natural for party and social activities!",
            correctFeedbackRu: "Правильно! 'Can we dance to this song?' естественно для вечеринок и социальных мероприятий!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + to + demonstrative + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + to + указательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "give", "you", "my", "number?"],
            correctAnswer: "May I give you my number?",
            correctFeedback: "Perfect! 'May I give you my number?' is polite for sharing contact information!",
            correctFeedbackRu: "Идеально! 'May I give you my number?' вежливо для обмена контактной информацией!",
            incorrectFeedback: "Try again. Remember: May + I + verb + pronoun + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + местоимение + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "join", "your", "group?"],
            correctAnswer: "Can I join your group?",
            correctFeedback: "Excellent! 'Can I join your group?' is friendly for asking to participate in activities!",
            correctFeedbackRu: "Отлично! 'Can I join your group?' дружелюбно для просьбы участвовать в мероприятиях!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "we", "celebrate", "your", "birthday?"],
            correctAnswer: "May we celebrate your birthday?",
            correctFeedback: "Correct! 'May we celebrate your birthday?' is formal and thoughtful for special occasions!",
            correctFeedbackRu: "Правильно! 'May we celebrate your birthday?' формально и внимательно для особых случаев!",
            incorrectFeedback: "Try again. Remember: May + we + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + we + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "take", "your", "picture?"],
            correctAnswer: "Can I take your picture?",
            correctFeedback: "Perfect! 'Can I take your picture?' is casual and friendly for photography requests!",
            correctFeedbackRu: "Идеально! 'Can I take your picture?' неформально и дружелюбно для просьб фотографирования!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "offer", "you", "some", "tea?"],
            correctAnswer: "May I offer you some tea?",
            correctFeedback: "Excellent! 'May I offer you some tea?' is formal and hospitable for hosting guests!",
            correctFeedbackRu: "Отлично! 'May I offer you some tea?' формально и гостеприимно для приема гостей!",
            incorrectFeedback: "Try again. Remember: May + I + verb + pronoun + quantifier + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + местоимение + квантификатор + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "meet", "again", "tomorrow?"],
            correctAnswer: "Can we meet again tomorrow?",
            correctFeedback: "Correct! 'Can we meet again tomorrow?' is natural for planning future social meetings!",
            correctFeedbackRu: "Правильно! 'Can we meet again tomorrow?' естественно для планирования будущих социальных встреч!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + adverb + tomorrow + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + наречие + tomorrow + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "compliment", "your", "dress?"],
            correctAnswer: "May I compliment your dress?",
            correctFeedback: "Perfect! 'May I compliment your dress?' is formal and polite for giving compliments!",
            correctFeedbackRu: "Идеально! 'May I compliment your dress?' формально и вежливо для выражения комплиментов!",
            incorrectFeedback: "Try again. Remember: May + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + притяжательное + существительное + ?"
        }
    ]
};

/* ============================================
Page 10: Permission with Can/May - Final Review Mixed Situations Sentence Building
============================================ */
window.grammarExercises['modals']['permission-can-may-sentence-page10'] = {
    title: "Permission with Can/May - Final Review Mixed Situations",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "give", "you", "a", "hug?"],
            correctAnswer: "Can I give you a hug?",
            correctFeedback: "Perfect! 'Can I give you a hug?' is warm and casual for expressing affection!",
            correctFeedbackRu: "Идеально! 'Can I give you a hug?' тепло и неформально для выражения привязанности!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + pronoun + article + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + местоимение + артикль + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "congratulate", "you", "personally?"],
            correctAnswer: "May I congratulate you personally?",
            correctFeedback: "Excellent! 'May I congratulate you personally?' is formal and respectful for special achievements!",
            correctFeedbackRu: "Отлично! 'May I congratulate you personally?' формально и уважительно для особых достижений!",
            incorrectFeedback: "Try again. Remember: May + I + verb + pronoun + adverb + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + местоимение + наречие + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "play", "one", "more", "game?"],
            correctAnswer: "Can we play one more game?",
            correctFeedback: "Correct! 'Can we play one more game?' is friendly for extending fun activities!",
            correctFeedbackRu: "Правильно! 'Can we play one more game?' дружелюбно для продления веселых мероприятий!",
            incorrectFeedback: "Try again. Remember: Can + we + verb + number + adjective + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + глагол + число + прилагательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "express", "my", "gratitude?"],
            correctAnswer: "May I express my gratitude?",
            correctFeedback: "Perfect! 'May I express my gratitude?' is formal and elegant for showing appreciation!",
            correctFeedbackRu: "Идеально! 'May I express my gratitude?' формально и элегантно для выражения благодарности!",
            incorrectFeedback: "Try again. Remember: May + I + verb + possessive + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + притяжательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "walk", "you", "home?"],
            correctAnswer: "Can I walk you home?",
            correctFeedback: "Excellent! 'Can I walk you home?' is caring and protective for offering safe accompaniment!",
            correctFeedbackRu: "Отлично! 'Can I walk you home?' заботливо и защитно для предложения безопасного сопровождения!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + pronoun + adverb + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + местоимение + наречие + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "we", "discuss", "this", "privately?"],
            correctAnswer: "May we discuss this privately?",
            correctFeedback: "Correct! 'May we discuss this privately?' is formal and appropriate for confidential conversations!",
            correctFeedbackRu: "Правильно! 'May we discuss this privately?' формально и подходяще для конфиденциальных разговоров!",
            incorrectFeedback: "Try again. Remember: May + we + verb + demonstrative + adverb + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + we + глагол + указательное + наречие + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "I", "trust", "you", "completely?"],
            correctAnswer: "Can I trust you completely?",
            correctFeedback: "Perfect! 'Can I trust you completely?' is direct and honest for building relationships!",
            correctFeedbackRu: "Идеально! 'Can I trust you completely?' прямо и честно для построения отношений!",
            incorrectFeedback: "Try again. Remember: Can + I + verb + pronoun + adverb + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + I + глагол + местоимение + наречие + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "wish", "you", "good", "luck?"],
            correctAnswer: "May I wish you good luck?",
            correctFeedback: "Excellent! 'May I wish you good luck?' is formal and kind for expressing best wishes!",
            correctFeedbackRu: "Отлично! 'May I wish you good luck?' формально и добро для выражения наилучших пожеланий!",
            incorrectFeedback: "Try again. Remember: May + I + verb + pronoun + adjective + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + местоимение + прилагательное + существительное + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Can", "we", "start", "over", "again?"],
            correctAnswer: "Can we start over again?",
            correctFeedback: "Correct! 'Can we start over again?' is hopeful for giving relationships second chances!",
            correctFeedbackRu: "Правильно! 'Can we start over again?' надежно для предоставления отношениям второго шанса!",
            incorrectFeedback: "Try again. Remember: Can + we + phrasal verb + adverb + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Can + we + фразовый глагол + наречие + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["May", "I", "have", "this", "final", "dance?"],
            correctAnswer: "May I have this final dance?",
            correctFeedback: "Perfect! 'May I have this final dance?' is romantic and formal for special moments!",
            correctFeedbackRu: "Идеально! 'May I have this final dance?' романтично и формально для особых моментов!",
            incorrectFeedback: "Try again. Remember: May + I + verb + demonstrative + adjective + noun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: May + I + глагол + указательное + прилагательное + существительное + ?"
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Permission with Can/May Sentence Building Pages 1-10 loaded successfully!");
console.log("===== PERMISSION CAN/MAY: SENTENCE BUILDING PAGES 1-10 LOADED =====");