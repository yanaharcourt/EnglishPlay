/* ============================================
Initialize Grammar Exercises Object Structure
============================================ */
if (!window.grammarExercises) {
    window.grammarExercises = {};
}
if (!window.grammarExercises.questions) {
    window.grammarExercises.questions = {};
}

/* ============================================
Page 1: Question Tags - Basic Present and Past
============================================ */
window.grammarExercises['questions']['question-tags-page1'] = {
    title: "Question Tags - Basic Present and Past",
    multipleChoice: [
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You're coming to the party, _____?",
            options: [
                "aren't you",
                "are you",
                "don't you",
                "isn't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'You're coming to the party, aren't you?' is perfect. When the main clause is positive, we use a negative question tag!",
            correctFeedbackRu: "Фантастически! 'You're coming to the party, aren't you?' идеально. Когда главная часть положительная, мы используем отрицательный разделительный вопрос!",
            incorrectFeedback: "Almost there! **Remember the golden rule: positive statement + negative tag.** Since 'You're coming' is positive, we need the negative 'aren't you' to balance it out. It's like a grammatical see-saw!",
            incorrectFeedbackRu: "Почти правильно! **Помните золотое правило: положительное утверждение + отрицательный тег.** Поскольку 'You're coming' положительное, нам нужно отрицательное 'aren't you' для баланса. Это как грамматические качели!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "She doesn't like coffee, _____?",
            options: [
                "does she",
                "doesn't she",
                "is she",
                "isn't she"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'She doesn't like coffee, does she?' is spot on. Negative statement needs a positive tag - you've got the rhythm down!",
            correctFeedbackRu: "Отлично! 'She doesn't like coffee, does she?' точно в цель. Отрицательное утверждение нуждается в положительном теге - вы поняли ритм!",
            incorrectFeedback: "Not quite right! **Think opposite attract.** Since 'doesn't like' is negative, we need the positive 'does she' to create that perfect question tag balance.",
            incorrectFeedbackRu: "Не совсем правильно! **Думайте - противоположности притягиваются.** Поскольку 'doesn't like' отрицательное, нам нужно положительное 'does she' для создания идеального баланса разделительного вопроса."
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "It's a beautiful day, _____?",
            options: [
                "isn't it",
                "is it",
                "doesn't it",
                "does it"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'It's a beautiful day, isn't it?' captures that lovely feeling of sharing appreciation for good weather. Natural and correct!",
            correctFeedbackRu: "Идеально! 'It's a beautiful day, isn't it?' передает прекрасное чувство разделения благодарности за хорошую погоду. Естественно и правильно!",
            incorrectFeedback: "Close, but not quite! **'It's' means 'it is' - so we need 'isn't it' to flip it.** Weather comments with question tags are super common in English conversation!",
            incorrectFeedbackRu: "Близко, но не совсем! **'It's' означает 'it is' - поэтому нам нужно 'isn't it' чтобы перевернуть это.** Комментарии о погоде с разделительными вопросами очень распространены в английском разговоре!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You haven't finished your homework, _____?",
            options: [
                "have you",
                "haven't you",
                "do you",
                "don't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'You haven't finished your homework, have you?' is exactly right. The present perfect 'haven't' flips to 'have' beautifully!",
            correctFeedbackRu: "Блестяще! 'You haven't finished your homework, have you?' совершенно правильно. Present perfect 'haven't' красиво переворачивается в 'have'!",
            incorrectFeedback: "Think again! **Present perfect needs present perfect in the tag too.** 'Haven't finished' is negative, so we need positive 'have you' to complete the tag.",
            incorrectFeedbackRu: "Подумайте еще раз! **Present perfect нуждается в present perfect и в теге тоже.** 'Haven't finished' отрицательное, поэтому нам нужно положительное 'have you' для завершения тега."
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "They went to the cinema last night, _____?",
            options: [
                "didn't they",
                "did they",
                "weren't they",
                "were they"
            ],
            correctAnswer: 0,
            correctFeedback: "Wonderful! 'They went to the cinema last night, didn't they?' is perfect. Past simple 'went' needs 'didn't' in the tag - you're mastering this!",
            correctFeedbackRu: "Замечательно! 'They went to the cinema last night, didn't they?' идеально. Past simple 'went' нуждается в 'didn't' в теге - вы осваиваете это!",
            incorrectFeedback: "Not quite there! **Past simple verbs like 'went' need 'did/didn't' in question tags.** Since 'went' is positive, we need negative 'didn't they' to balance things out.",
            incorrectFeedbackRu: "Не совсем там! **Глаголы в past simple как 'went' нуждаются в 'did/didn't' в разделительных вопросах.** Поскольку 'went' положительное, нам нужно отрицательное 'didn't they' для баланса."
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You can swim, _____?",
            options: [
                "can't you",
                "can you",
                "don't you",
                "do you"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'You can swim, can't you?' is exactly right. Modal verbs like 'can' create their own question tags - so natural!",
            correctFeedbackRu: "Фантастически! 'You can swim, can't you?' совершенно правильно. Модальные глаголы как 'can' создают свои собственные разделительные вопросы - так естественно!",
            incorrectFeedback: "Think modal! **'Can' is a modal verb, so it makes its own question tag.** Positive 'can' becomes negative 'can't' in the tag - keep the same modal!",
            incorrectFeedbackRu: "Думайте модально! **'Can' - это модальный глагол, поэтому он создает свой собственный разделительный вопрос.** Положительное 'can' становится отрицательным 'can't' в теге - сохраняйте тот же модальный глагол!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Sarah wasn't at the meeting, _____?",
            options: [
                "was she",
                "wasn't she",
                "did she",
                "didn't she"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Sarah wasn't at the meeting, was she?' is perfect. The negative 'wasn't' flips to positive 'was' - you're getting the hang of this!",
            correctFeedbackRu: "Отлично! 'Sarah wasn't at the meeting, was she?' идеально. Отрицательное 'wasn't' переворачивается в положительное 'was' - вы схватываете это!",
            incorrectFeedback: "Almost! **'Wasn't' is the past form of 'be', so we need 'was' in the tag.** Negative statement needs positive tag - 'wasn't' becomes 'was she'.",
            incorrectFeedbackRu: "Почти! **'Wasn't' - это прошедшая форма 'be', поэтому нам нужно 'was' в теге.** Отрицательное утверждение нуждается в положительном теге - 'wasn't' становится 'was she'."
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "We should leave now, _____?",
            options: [
                "shouldn't we",
                "should we",
                "don't we",
                "do we"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'We should leave now, shouldn't we?' is spot on. Modal 'should' creates its own tag - this sounds so natural in conversation!",
            correctFeedbackRu: "Блестяще! 'We should leave now, shouldn't we?' точно в цель. Модальный 'should' создает свой собственный тег - это звучит так естественно в разговоре!",
            incorrectFeedback: "Think modally! **'Should' is a modal, so it makes its own question tag.** Positive 'should' becomes negative 'shouldn't' - keep it in the modal family!",
            incorrectFeedbackRu: "Думайте модально! **'Should' - это модальный глагол, поэтому он создает свой собственный разделительный вопрос.** Положительное 'should' становится отрицательным 'shouldn't' - держите это в модальной семье!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The movie didn't start on time, _____?",
            options: [
                "did it",
                "didn't it",
                "was it",
                "wasn't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'The movie didn't start on time, did it?' is exactly right. You've mastered the negative-to-positive flip with past simple!",
            correctFeedbackRu: "Идеально! 'The movie didn't start on time, did it?' совершенно правильно. Вы освоили переворот от отрицательного к положительному с past simple!",
            incorrectFeedback: "Not quite! **'Didn't start' is past simple negative, so we need 'did' positive.** Remember: negative statement + positive tag = perfect question tag!",
            incorrectFeedbackRu: "Не совсем! **'Didn't start' - это past simple отрицательное, поэтому нам нужно 'did' положительное.** Помните: отрицательное утверждение + положительный тег = идеальный разделительный вопрос!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You'll help me with this project, _____?",
            options: [
                "won't you",
                "will you",
                "don't you",
                "do you"
            ],
            correctAnswer: 0,
            correctFeedback: "Wonderful! 'You'll help me with this project, won't you?' is perfect. Future 'will' creates its own tag - sounds like a friendly request!",
            correctFeedbackRu: "Замечательно! 'You'll help me with this project, won't you?' идеально. Будущее 'will' создает свой собственный тег - звучит как дружеская просьба!",
            incorrectFeedback: "Think future! **'You'll' means 'you will' - so we need 'won't' to flip it.** Future tense creates its own question tags with will/won't.",
            incorrectFeedbackRu: "Думайте о будущем! **'You'll' означает 'you will' - поэтому нам нужно 'won't' чтобы перевернуть это.** Будущее время создает свои собственные разделительные вопросы с will/won't."
        }
    ]
};

/* ============================================
Page 2: Question Tags - Present Perfect and Modals
============================================ */
window.grammarExercises['questions']['question-tags-page2'] = {
    title: "Question Tags - Present Perfect and Modals",
    multipleChoice: [
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You've been to Paris, _____?",
            options: [
                "haven't you",
                "have you",
                "don't you",
                "didn't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'You've been to Paris, haven't you?' is perfect. Present perfect experience sounds so natural with question tags!",
            correctFeedbackRu: "Отлично! 'You've been to Paris, haven't you?' идеально. Опыт в present perfect звучит так естественно с разделительными вопросами!",
            incorrectFeedback: "Almost there! **'You've' is 'you have' - present perfect positive needs 'haven't' negative.** Present perfect keeps its own auxiliary in the tag!",
            incorrectFeedbackRu: "Почти там! **'You've' это 'you have' - present perfect положительное нуждается в 'haven't' отрицательном.** Present perfect сохраняет свой собственный вспомогательный глагол в теге!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "She couldn't find her keys, _____?",
            options: [
                "could she",
                "couldn't she",
                "did she",
                "didn't she"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'She couldn't find her keys, could she?' is spot on. Modal 'could' stays in the question tag - very natural!",
            correctFeedbackRu: "Блестяще! 'She couldn't find her keys, could she?' точно в цель. Модальный 'could' остается в разделительном вопросе - очень естественно!",
            incorrectFeedback: "Think modal magic! **'Couldn't' is negative modal, so we need positive 'could' in the tag.** Modals always create their own question tags!",
            incorrectFeedbackRu: "Думайте о модальной магии! **'Couldn't' - это отрицательный модальный глагол, поэтому нам нужно положительное 'could' в теге.** Модальные глаголы всегда создают свои собственные разделительные вопросы!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "They haven't called yet, _____?",
            options: [
                "have they",
                "haven't they",
                "do they",
                "don't they"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'They haven't called yet, have they?' captures that waiting feeling perfectly. Present perfect negative flips to positive beautifully!",
            correctFeedbackRu: "Идеально! 'They haven't called yet, have they?' прекрасно передает чувство ожидания. Present perfect отрицательное красиво переворачивается в положительное!",
            incorrectFeedback: "Not quite! **'Haven't called' is present perfect negative, so we need 'have' positive.** Keep the same tense family in question tags!",
            incorrectFeedbackRu: "Не совсем! **'Haven't called' - это present perfect отрицательное, поэтому нам нужно 'have' положительное.** Сохраняйте ту же семью времен в разделительных вопросах!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You must be tired, _____?",
            options: [
                "mustn't you",
                "must you",
                "aren't you",
                "are you"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'You must be tired, mustn't you?' is perfect. Modal 'must' creates its own tag - shows real concern for someone!",
            correctFeedbackRu: "Фантастически! 'You must be tired, mustn't you?' идеально. Модальный 'must' создает свой собственный тег - показывает реальную заботу о ком-то!",
            incorrectFeedback: "Think modal! **'Must' is a modal of certainty, so it makes its own question tag.** Positive 'must' becomes negative 'mustn't' - keep it modal!",
            incorrectFeedbackRu: "Думайте модально! **'Must' - это модальный глагол уверенности, поэтому он создает свой собственный разделительный вопрос.** Положительное 'must' становится отрицательным 'mustn't' - держите это модальным!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "He's never been abroad, _____?",
            options: [
                "has he",
                "hasn't he",
                "is he",
                "isn't he"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'He's never been abroad, has he?' is perfect. 'Never' makes it negative, so we need positive 'has he' - great catch!",
            correctFeedbackRu: "Отлично! 'He's never been abroad, has he?' идеально. 'Never' делает это отрицательным, поэтому нам нужно положительное 'has he' - отличная хватка!",
            incorrectFeedback: "Tricky one! **'Never' is a negative word, making the whole statement negative.** So we need positive 'has he' to balance it out. Watch out for hidden negatives!",
            incorrectFeedbackRu: "Хитрый! **'Never' - это отрицательное слово, делающее все утверждение отрицательным.** Поэтому нам нужно положительное 'has he' для баланса. Остерегайтесь скрытых отрицаний!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "We won't be late, _____?",
            options: [
                "will we",
                "won't we",
                "are we",
                "aren't we"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'We won't be late, will we?' is exactly right. Future negative 'won't' flips to positive 'will' - sounds reassuring!",
            correctFeedbackRu: "Блестяще! 'We won't be late, will we?' совершенно правильно. Будущее отрицательное 'won't' переворачивается в положительное 'will' - звучит обнадеживающе!",
            incorrectFeedback: "Think future! **'Won't' is 'will not' - future negative needs 'will' positive.** Future tense always uses will/won't in question tags!",
            incorrectFeedbackRu: "Думайте о будущем! **'Won't' это 'will not' - будущее отрицательное нуждается в 'will' положительном.** Будущее время всегда использует will/won't в разделительных вопросах!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You'd rather stay home, _____?",
            options: [
                "wouldn't you",
                "would you",
                "don't you",
                "do you"
            ],
            correctAnswer: 0,
            correctFeedback: "Wonderful! 'You'd rather stay home, wouldn't you?' is perfect. 'Would rather' creates its own tag - sounds like understanding someone's preference!",
            correctFeedbackRu: "Замечательно! 'You'd rather stay home, wouldn't you?' идеально. 'Would rather' создает свой собственный тег - звучит как понимание чьих-то предпочтений!",
            incorrectFeedback: "Think preference! **'You'd rather' means 'you would rather' - so we need 'wouldn't' to flip it.** 'Would rather' always uses would/wouldn't in tags!",
            incorrectFeedbackRu: "Думайте о предпочтении! **'You'd rather' означает 'you would rather' - поэтому нам нужно 'wouldn't' чтобы перевернуть это.** 'Would rather' всегда использует would/wouldn't в тегах!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Nobody has seen my phone, _____?",
            options: [
                "have they",
                "haven't they",
                "has nobody",
                "do they"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Nobody has seen my phone, have they?' is perfect. 'Nobody' is negative, and we use 'they' for indefinite pronouns - very advanced!",
            correctFeedbackRu: "Отлично! 'Nobody has seen my phone, have they?' идеально. 'Nobody' отрицательное, и мы используем 'they' для неопределенных местоимений - очень продвинуто!",
            incorrectFeedback: "Tricky! **'Nobody' is negative, so we need positive 'have'.** Plus, indefinite pronouns like 'nobody' use 'they' in question tags. Double grammar rule!",
            incorrectFeedbackRu: "Хитро! **'Nobody' отрицательное, поэтому нам нужно положительное 'have'.** Плюс, неопределенные местоимения как 'nobody' используют 'they' в разделительных вопросах. Двойное грамматическое правило!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "She's already finished her work, _____?",
            options: [
                "hasn't she",
                "has she",
                "isn't she",
                "is she"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'She's already finished her work, hasn't she?' is spot on. 'Already' + present perfect is so natural with question tags!",
            correctFeedbackRu: "Фантастически! 'She's already finished her work, hasn't she?' точно в цель. 'Already' + present perfect так естественно с разделительными вопросами!",
            incorrectFeedback: "Think perfect! **'She's finished' is 'she has finished' - present perfect positive needs 'hasn't' negative.** Don't let contractions confuse you!",
            incorrectFeedbackRu: "Думайте о совершенном! **'She's finished' это 'she has finished' - present perfect положительное нуждается в 'hasn't' отрицательном.** Не позволяйте сокращениям сбивать вас с толку!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You might come to the party, _____?",
            options: [
                "mightn't you",
                "might you",
                "don't you",
                "won't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'You might come to the party, mightn't you?' is perfect. Modal 'might' creates its own tag - shows you're hoping they'll come!",
            correctFeedbackRu: "Блестяще! 'You might come to the party, mightn't you?' идеально. Модальный 'might' создает свой собственный тег - показывает, что вы надеетесь, что они придут!",
            incorrectFeedback: "Think possibility! **'Might' is a modal of possibility, so it makes its own question tag.** Positive 'might' becomes negative 'mightn't' - keep it modal!",
            incorrectFeedbackRu: "Думайте о возможности! **'Might' - это модальный глагол возможности, поэтому он создает свой собственный разделительный вопрос.** Положительное 'might' становится отрицательным 'mightn't' - держите это модальным!"
        }
    ]
};

/* ============================================
Page 3: Question Tags - Complex and Advanced Structures
============================================ */
window.grammarExercises['questions']['question-tags-page3'] = {
    title: "Question Tags - Complex and Advanced Structures",
    multipleChoice: [
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Everyone enjoyed the presentation, _____?",
            options: [
                "didn't they",
                "didn't everyone",
                "doesn't everyone",
                "don't they"
            ],
            correctAnswer: 0,
            correctFeedback: "Outstanding! 'Everyone enjoyed the presentation, didn't they?' is perfect. Indefinite pronouns like 'everyone' take 'they' in question tags - masterful!",
            correctFeedbackRu: "Выдающе! 'Everyone enjoyed the presentation, didn't they?' идеально. Неопределенные местоимения как 'everyone' берут 'they' в разделительных вопросах - мастерски!",
            incorrectFeedback: "Think collective! **Indefinite pronouns like 'everyone' are treated as singular but use 'they' in question tags.** It's one of English's quirky rules - 'everyone' = 'they' in tags!",
            incorrectFeedbackRu: "Думайте коллективно! **Неопределенные местоимения как 'everyone' рассматриваются как единственное число, но используют 'they' в разделительных вопросах.** Это одно из причудливых правил английского - 'everyone' = 'they' в тегах!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "There's nothing we can do about it, _____?",
            options: [
                "is there",
                "isn't there",
                "is it",
                "isn't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'There's nothing we can do about it, is there?' is exactly right. 'Nothing' makes it negative, so we need positive 'is there' - advanced thinking!",
            correctFeedbackRu: "Блестяще! 'There's nothing we can do about it, is there?' совершенно правильно. 'Nothing' делает это отрицательным, поэтому нам нужно положительное 'is there' - продвинутое мышление!",
            incorrectFeedback: "Tricky structure! **'There's nothing' = negative because of 'nothing', so we need positive 'is there'.** 'There' structures keep 'there' in the question tag too!",
            incorrectFeedbackRu: "Хитрая структура! **'There's nothing' = отрицательное из-за 'nothing', поэтому нам нужно положительное 'is there'.** Структуры с 'There' сохраняют 'there' и в разделительном вопросе тоже!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "I'm being too demanding, _____?",
            options: [
                "aren't I",
                "am I not",
                "don't I",
                "isn't I"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I'm being too demanding, aren't I?' is perfect. The contraction 'I'm' uses 'aren't I' - one of English's most elegant exceptions!",
            correctFeedbackRu: "Отлично! 'I'm being too demanding, aren't I?' идеально. Сокращение 'I'm' использует 'aren't I' - одно из самых элегантных исключений английского!",
            incorrectFeedback: "Special case! **'I am' becomes 'aren't I' in question tags, not 'am I not'.** This is a standard, accepted form in modern English - embrace the exception!",
            incorrectFeedbackRu: "Особый случай! **'I am' становится 'aren't I' в разделительных вопросах, не 'am I not'.** Это стандартная, принятая форма в современном английском - примите исключение!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Let's grab some coffee before the meeting, _____?",
            options: [
                "shall we",
                "let's we",
                "will we",
                "don't we"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'Let's grab some coffee before the meeting, shall we?' is spot on. 'Let's' always pairs with 'shall we' - sounds so naturally inviting!",
            correctFeedbackRu: "Фантастически! 'Let's grab some coffee before the meeting, shall we?' точно в цель. 'Let's' всегда сочетается с 'shall we' - звучит так естественно приглашающе!",
            incorrectFeedback: "Think suggestion! **'Let's' (let us) always uses 'shall we' in question tags.** It's a fixed pattern for making polite suggestions and invitations!",
            incorrectFeedbackRu: "Думайте о предложении! **'Let's' (let us) всегда использует 'shall we' в разделительных вопросах.** Это фиксированный шаблон для вежливых предложений и приглашений!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Someone left their umbrella here, _____?",
            options: [
                "didn't they",
                "didn't someone",
                "hasn't someone",
                "haven't they"
            ],
            correctAnswer: 0,
            correctFeedback: "Outstanding! 'Someone left their umbrella here, didn't they?' is perfect. 'Someone' uses 'they' in tags, and 'left' needs 'didn't' - B2 level mastery!",
            correctFeedbackRu: "Выдающе! 'Someone left their umbrella here, didn't they?' идеально. 'Someone' использует 'they' в тегах, и 'left' нуждается в 'didn't' - мастерство уровня B2!",
            incorrectFeedback: "Complex pronoun rule! **'Someone' is singular but takes 'they' in question tags.** Plus, past simple 'left' needs 'didn't' - double grammar challenge!",
            incorrectFeedbackRu: "Сложное правило местоимений! **'Someone' единственное число, но берет 'they' в разделительных вопросах.** Плюс, past simple 'left' нуждается в 'didn't' - двойной грамматический вызов!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You'd better not be late, _____?",
            options: [
                "had you",
                "hadn't you",
                "wouldn't you",
                "would you"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'You'd better not be late, had you?' is exactly right. 'Had better' creates its own tag with 'had' - sophisticated structure!",
            correctFeedbackRu: "Блестяще! 'You'd better not be late, had you?' совершенно правильно. 'Had better' создает свой собственный тег с 'had' - изощренная структура!",
            incorrectFeedback: "Think advice structure! **'You'd better' = 'you had better', so the tag uses 'had'.** Since the statement contains 'not', we use positive 'had you' - advanced!",
            incorrectFeedbackRu: "Думайте о структуре совета! **'You'd better' = 'you had better', поэтому тег использует 'had'.** Поскольку утверждение содержит 'not', мы используем положительное 'had you' - продвинуто!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Nothing seems to be working properly, _____?",
            options: [
                "does it",
                "doesn't it",
                "is it",
                "isn't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Nothing seems to be working properly, does it?' is perfect. 'Nothing' + 'seems' (present simple) needs 'does' - you've cracked the code!",
            correctFeedbackRu: "Отлично! 'Nothing seems to be working properly, does it?' идеально. 'Nothing' + 'seems' (present simple) нуждается в 'does' - вы разгадали код!",
            incorrectFeedback: "Double challenge! **'Nothing' makes it negative, and 'seems' is present simple, so we need positive 'does it'.** Watch for both the negative word and the main verb!",
            incorrectFeedbackRu: "Двойной вызов! **'Nothing' делает это отрицательным, и 'seems' - это present simple, поэтому нам нужно положительное 'does it'.** Следите и за отрицательным словом, и за главным глаголом!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "I don't suppose you've seen my keys anywhere, _____?",
            options: [
                "have you",
                "haven't you",
                "do you",
                "don't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Masterful! 'I don't suppose you've seen my keys anywhere, have you?' is exactly right. Focus on 'you've seen' - present perfect needs 'have' - brilliant analysis!",
            correctFeedbackRu: "Мастерски! 'I don't suppose you've seen my keys anywhere, have you?' совершенно правильно. Сосредоточьтесь на 'you've seen' - present perfect нуждается в 'have' - блестящий анализ!",
            incorrectFeedback: "Focus on the main clause! **The question tag relates to 'you've seen' (present perfect positive), not 'I don't suppose'.** Advanced sentence parsing - look for the embedded question!",
            incorrectFeedbackRu: "Сосредоточьтесь на главном предложении! **Разделительный вопрос относится к 'you've seen' (present perfect положительное), а не 'I don't suppose'.** Продвинутый анализ предложения - ищите встроенный вопрос!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Hardly anyone came to the event, _____?",
            options: [
                "did they",
                "didn't they",
                "came they",
                "did anyone"
            ],
            correctAnswer: 0,
            correctFeedback: "Outstanding! 'Hardly anyone came to the event, did they?' is perfect. 'Hardly' is negative, 'anyone' becomes 'they', and past simple needs 'did' - triple mastery!",
            correctFeedbackRu: "Выдающе! 'Hardly anyone came to the event, did they?' идеально. 'Hardly' отрицательное, 'anyone' становится 'they', и past simple нуждается в 'did' - тройное мастерство!",
            incorrectFeedback: "Triple grammar rule! **'Hardly' = negative, 'anyone' = 'they' in tags, 'came' = past simple needs 'did'.** You're tackling advanced negative adverbs!",
            incorrectFeedbackRu: "Тройное грамматическое правило! **'Hardly' = отрицательное, 'anyone' = 'they' в тегах, 'came' = past simple нуждается в 'did'.** Вы разбираетесь с продвинутыми отрицательными наречиями!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You used to live in London, _____?",
            options: [
                "didn't you",
                "used you",
                "usedn't you",
                "don't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'You used to live in London, didn't you?' is exactly right. 'Used to' behaves like past simple in question tags - perfect understanding of this tricky structure!",
            correctFeedbackRu: "Блестяще! 'You used to live in London, didn't you?' совершенно правильно. 'Used to' ведет себя как past simple в разделительных вопросах - идеальное понимание этой хитрой структуры!",
            incorrectFeedback: "Tricky structure! **'Used to' forms question tags with 'did/didn't', just like regular past simple verbs.** It's a special case that follows past simple rules!",
            incorrectFeedbackRu: "Хитрая структура! **'Used to' формирует разделительные вопросы с 'did/didn't', как и обычные глаголы в past simple.** Это особый случай, который следует правилам past simple!"
        }
    ]
};

/* ============================================
Page 4: Question Tags - Embedded Questions and Complex Modals
============================================ */
window.grammarExercises['questions']['question-tags-page4'] = {
    title: "Question Tags - Embedded Questions and Complex Modals",
    multipleChoice: [
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You wouldn't mind helping me move this weekend, _____?",
            options: [
                "would you",
                "wouldn't you",
                "do you",
                "don't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'You wouldn't mind helping me move this weekend, would you?' is exactly right. Polite requests with 'wouldn't mind' create such considerate communication!",
            correctFeedbackRu: "Идеально! 'You wouldn't mind helping me move this weekend, would you?' совершенно правильно. Вежливые просьбы с 'wouldn't mind' создают такое деликатное общение!",
            incorrectFeedback: "Think polite request! **'Wouldn't mind' is negative conditional, so we need positive 'would you'.** This structure makes requests sound incredibly courteous!",
            incorrectFeedbackRu: "Думайте о вежливой просьбе! **'Wouldn't mind' - это отрицательное условное, поэтому нам нужно положительное 'would you'.** Эта структура делает просьбы невероятно учтивыми!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "There couldn't have been a better solution, _____?",
            options: [
                "could there",
                "couldn't there",
                "was there",
                "wasn't there"
            ],
            correctAnswer: 0,
            correctFeedback: "Exceptional! 'There couldn't have been a better solution, could there?' is flawless. Complex modal perfect with 'there' structure - you're operating at advanced level!",
            correctFeedbackRu: "Исключительно! 'There couldn't have been a better solution, could there?' безупречно. Сложная модальная перфектная форма со структурой 'there' - вы работаете на продвинутом уровне!",
            incorrectFeedback: "Advanced modal perfect! **'Couldn't have been' is negative modal perfect, needs positive 'could there'.** Plus, 'there' structures keep 'there' in the tag!",
            incorrectFeedbackRu: "Продвинутая модальная перфектная форма! **'Couldn't have been' - это отрицательная модальная перфектная форма, нуждается в положительном 'could there'.** Плюс, структуры с 'there' сохраняют 'there' в теге!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Few people understand the complexity of the issue, _____?",
            options: [
                "do they",
                "don't they",
                "few they",
                "many they"
            ],
            correctAnswer: 0,
            correctFeedback: "Masterful! 'Few people understand the complexity of the issue, do they?' is perfect. 'Few' has negative meaning, so positive tag needed - sophisticated grammar sense!",
            correctFeedbackRu: "Мастерски! 'Few people understand the complexity of the issue, do they?' идеально. 'Few' имеет отрицательное значение, поэтому нужен положительный тег - изощренное грамматическое чутье!",
            incorrectFeedback: "Subtle negative! **'Few' means 'not many' - it's negative in meaning, so we need positive 'do they'.** These quantity words can be tricky - 'few' = negative feeling!",
            incorrectFeedbackRu: "Тонкое отрицание! **'Few' означает 'немного' - это отрицательное по значению, поэтому нам нужно положительное 'do they'.** Эти слова количества могут быть хитрыми - 'few' = отрицательное ощущение!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You don't think she'll be upset about the change, _____?",
            options: [
                "do you",
                "don't you",
                "will she",
                "won't she"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'You don't think she'll be upset about the change, do you?' is exactly right. The tag relates to 'you don't think', not the embedded clause - expert analysis!",
            correctFeedbackRu: "Блестяще! 'You don't think she'll be upset about the change, do you?' совершенно правильно. Тег относится к 'you don't think', а не к встроенному предложению - экспертный анализ!",
            incorrectFeedback: "Focus on the main verb! **The question tag relates to 'you don't think' (negative), so we need positive 'do you'.** Don't get distracted by the embedded 'she'll be upset'!",
            incorrectFeedbackRu: "Сосредоточьтесь на главном глаголе! **Разделительный вопрос относится к 'you don't think' (отрицательное), поэтому нам нужно положительное 'do you'.** Не отвлекайтесь на встроенное 'she'll be upset'!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Neither of them has responded to my email, _____?",
            options: [
                "have they",
                "has they",
                "haven't they",
                "hasn't neither"
            ],
            correctAnswer: 0,
            correctFeedback: "Outstanding! 'Neither of them has responded to my email, have they?' is perfect. 'Neither' is negative, singular becomes plural 'they' in tags - advanced grammar!",
            correctFeedbackRu: "Выдающе! 'Neither of them has responded to my email, have they?' идеально. 'Neither' отрицательное, единственное число становится множественным 'they' в тегах - продвинутая грамматика!",
            incorrectFeedback: "Complex subject! **'Neither' is negative, so positive tag needed. 'Neither of them' = 'they' in question tags.** Present perfect 'has' becomes 'have' with 'they'!",
            incorrectFeedbackRu: "Сложное подлежащее! **'Neither' отрицательное, поэтому нужен положительный тег. 'Neither of them' = 'they' в разделительных вопросах.** Present perfect 'has' становится 'have' с 'they'!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You ought to have told me earlier, _____?",
            options: [
                "oughtn't you",
                "shouldn't you",
                "didn't you",
                "haven't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Exceptional! 'You ought to have told me earlier, oughtn't you?' is perfect. 'Ought to' creates its own question tag - you've mastered this rare modal!",
            correctFeedbackRu: "Исключительно! 'You ought to have told me earlier, oughtn't you?' идеально. 'Ought to' создает свой собственный разделительный вопрос - вы освоили этот редкий модальный глагол!",
            incorrectFeedback: "Rare modal! **'Ought to' forms its own question tag with 'oughtn't'.** It's like 'should' but creates its own tag pattern - quite sophisticated!",
            incorrectFeedbackRu: "Редкий модальный глагол! **'Ought to' формирует свой собственный разделительный вопрос с 'oughtn't'.** Это как 'should', но создает свой собственный шаблон тега - довольно изощренно!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Scarcely anyone saw the mistake, _____?",
            options: [
                "did they",
                "didn't they",
                "saw they", 
                "did anyone"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'Scarcely anyone saw the mistake, did they?' is exactly right. 'Scarcely' is negative, 'anyone' becomes 'they', past simple needs 'did' - masterful!",
            correctFeedbackRu: "Блестяще! 'Scarcely anyone saw the mistake, did they?' совершенно правильно. 'Scarcely' отрицательное, 'anyone' становится 'they', past simple нуждается в 'did' - мастерски!",
            incorrectFeedback: "Advanced negative adverb! **'Scarcely' means 'barely/hardly' - it's negative, so positive tag needed.** 'Anyone' = 'they' and past simple 'saw' = 'did'!",
            incorrectFeedbackRu: "Продвинутое отрицательное наречие! **'Scarcely' означает 'едва/с трудом' - это отрицательное, поэтому нужен положительный тег.** 'Anyone' = 'they' и past simple 'saw' = 'did'!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "I'm not supposed to know about the surprise party, _____?",
            options: [
                "am I",
                "aren't I",
                "do I",
                "don't I"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I'm not supposed to know about the surprise party, am I?' is exactly right. Double negative becomes positive - you've navigated this complex structure beautifully!",
            correctFeedbackRu: "Идеально! 'I'm not supposed to know about the surprise party, am I?' совершенно правильно. Двойное отрицание становится положительным - вы прекрасно справились с этой сложной структурой!",
            incorrectFeedback: "Double negative logic! **'I'm not supposed' is negative, so we need positive 'am I'.** Complex because 'I am' usually becomes 'aren't I', but here the main clause is already negative!",
            incorrectFeedbackRu: "Логика двойного отрицания! **'I'm not supposed' отрицательное, поэтому нам нужно положительное 'am I'.** Сложно, потому что 'I am' обычно становится 'aren't I', но здесь главное предложение уже отрицательное!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You realize how important this meeting is, _____?",
            options: [
                "don't you",
                "do you",
                "realize you",
                "aren't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'You realize how important this meeting is, don't you?' is perfect. Present simple 'realize' (positive) needs 'don't you' - sounds like gentle emphasis!",
            correctFeedbackRu: "Отлично! 'You realize how important this meeting is, don't you?' идеально. Present simple 'realize' (положительное) нуждается в 'don't you' - звучит как мягкое подчеркивание!",
            incorrectFeedback: "Straightforward pattern! **'You realize' is present simple positive, so negative 'don't you' needed.** This structure often adds gentle emphasis to statements!",
            incorrectFeedbackRu: "Прямолинейный шаблон! **'You realize' - это present simple положительное, поэтому нужно отрицательное 'don't you'.** Эта структура часто добавляет мягкое подчеркивание к утверждениям!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "There's no point in arguing about this anymore, _____?",
            options: [
                "is there",
                "isn't there",
                "is it",
                "isn't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Masterful! 'There's no point in arguing about this anymore, is there?' is flawless. 'No point' makes it negative with 'there' structure - you've conquered advanced patterns!",
            correctFeedbackRu: "Мастерски! 'There's no point in arguing about this anymore, is there?' безупречно. 'No point' делает это отрицательным со структурой 'there' - вы покорили продвинутые шаблоны!",
            incorrectFeedback: "Complex 'there' structure! **'There's no point' = negative because of 'no', so positive 'is there' needed.** 'There' structures always keep 'there' in the question tag!",
            incorrectFeedbackRu: "Сложная структура с 'there'! **'There's no point' = отрицательное из-за 'no', поэтому нужно положительное 'is there'.** Структуры с 'There' всегда сохраняют 'there' в разделительном вопросе!"
        }
    ]
};

/* ============================================
Page 5: Question Tags - Mixed Tenses and Real-Life Situations
============================================ */
window.grammarExercises['questions']['question-tags-page5'] = {
    title: "Question Tags - Mixed Tenses and Real-Life Situations",
    multipleChoice: [
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The train leaves at 8:30, _____?",
            options: [
                "doesn't it",
                "does it",
                "isn't it",
                "won't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'The train leaves at 8:30, doesn't it?' is exactly right. Present simple for timetables uses 'does/doesn't' - great for travel conversations!",
            correctFeedbackRu: "Идеально! 'The train leaves at 8:30, doesn't it?' совершенно правильно. Present simple для расписаний использует 'does/doesn't' - отлично для разговоров о путешествиях!",
            incorrectFeedback: "Think timetable! **'Leaves' is present simple (even for future events in schedules), so we need 'doesn't it'.** Timetables always use present simple with does/doesn't tags!",
            incorrectFeedbackRu: "Думайте о расписании! **'Leaves' - это present simple (даже для будущих событий в расписаниях), поэтому нам нужно 'doesn't it'.** Расписания всегда используют present simple с тегами does/doesn't!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Your brother works in marketing, _____?",
            options: [
                "doesn't he",
                "does he",
                "isn't he",
                "is he"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Your brother works in marketing, doesn't he?' is spot on. Present simple jobs and professions sound so natural with question tags!",
            correctFeedbackRu: "Отлично! 'Your brother works in marketing, doesn't he?' точно в цель. Present simple для работ и профессий звучит так естественно с разделительными вопросами!",
            incorrectFeedback: "Work talk! **'Works' is present simple positive, so we need negative 'doesn't he'.** Perfect for asking about people's jobs and careers!",
            incorrectFeedbackRu: "Разговор о работе! **'Works' - это present simple положительное, поэтому нам нужно отрицательное 'doesn't he'.** Идеально для расспросов о работе и карьере людей!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "We're meeting at the coffee shop tomorrow, _____?",
            options: [
                "aren't we",
                "are we",
                "don't we",
                "do we"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'We're meeting at the coffee shop tomorrow, aren't we?' is perfect. Present continuous for future arrangements sounds so natural!",
            correctFeedbackRu: "Фантастически! 'We're meeting at the coffee shop tomorrow, aren't we?' идеально. Present continuous для будущих договоренностей звучит так естественно!",
            incorrectFeedback: "Future arrangement! **'We're meeting' is present continuous for planned future, so 'aren't we' is perfect.** Great for confirming social plans!",
            incorrectFeedbackRu: "Будущая договоренность! **'We're meeting' - это present continuous для запланированного будущего, поэтому 'aren't we' идеально.** Отлично для подтверждения социальных планов!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The weather has been terrible lately, _____?",
            options: [
                "hasn't it",
                "has it",
                "isn't it",
                "doesn't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'The weather has been terrible lately, hasn't it?' is exactly right. Present perfect with 'lately' is perfect for recent experiences!",
            correctFeedbackRu: "Блестяще! 'The weather has been terrible lately, hasn't it?' совершенно правильно. Present perfect с 'lately' идеально для недавнего опыта!",
            incorrectFeedback: "Recent experience! **'Has been' is present perfect positive, so 'hasn't it' is needed.** 'Lately' is a classic present perfect time word!",
            incorrectFeedbackRu: "Недавний опыт! **'Has been' - это present perfect положительное, поэтому нужно 'hasn't it'.** 'Lately' - это классическое слово времени для present perfect!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You didn't forget to lock the door, _____?",
            options: [
                "did you",
                "didn't you",
                "do you",
                "don't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'You didn't forget to lock the door, did you?' is exactly right. Sounds like a concerned but hopeful question about home security!",
            correctFeedbackRu: "Идеально! 'You didn't forget to lock the door, did you?' совершенно правильно. Звучит как обеспокоенный, но полный надежды вопрос о домашней безопасности!",
            incorrectFeedback: "Security check! **'Didn't forget' is past simple negative, so positive 'did you' is needed.** Perfect for double-checking important things!",
            incorrectFeedbackRu: "Проверка безопасности! **'Didn't forget' - это past simple отрицательное, поэтому нужно положительное 'did you'.** Идеально для перепроверки важных вещей!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The children are playing in the garden, _____?",
            options: [
                "aren't they",
                "are they",
                "don't they",
                "do they"
            ],
            correctAnswer: 0,
            correctFeedback: "Wonderful! 'The children are playing in the garden, aren't they?' is perfect. Present continuous for what's happening right now sounds so warm and observant!",
            correctFeedbackRu: "Замечательно! 'The children are playing in the garden, aren't they?' идеально. Present continuous для того, что происходит прямо сейчас, звучит так тепло и внимательно!",
            incorrectFeedback: "Right now action! **'Are playing' is present continuous positive, so 'aren't they' is perfect.** Great for talking about what's happening at this moment!",
            incorrectFeedbackRu: "Действие прямо сейчас! **'Are playing' - это present continuous положительное, поэтому 'aren't they' идеально.** Отлично для разговора о том, что происходит в данный момент!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You'll call me when you arrive, _____?",
            options: [
                "won't you",
                "will you",
                "don't you",
                "do you"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'You'll call me when you arrive, won't you?' is spot on. Future promises and commitments sound so reassuring with question tags!",
            correctFeedbackRu: "Отлично! 'You'll call me when you arrive, won't you?' точно в цель. Будущие обещания и обязательства звучат так обнадеживающе с разделительными вопросами!",
            incorrectFeedback: "Future promise! **'You'll call' means 'you will call' - future positive needs 'won't you'.** Perfect for making sure someone will do something!",
            incorrectFeedbackRu: "Будущее обещание! **'You'll call' означает 'you will call' - будущее положительное нуждается в 'won't you'.** Идеально для убеждения, что кто-то что-то сделает!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The movie was really entertaining, _____?",
            options: [
                "wasn't it",
                "was it",
                "didn't it",
                "did it"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'The movie was really entertaining, wasn't it?' is perfect. Past simple with adjectives is ideal for sharing opinions about experiences!",
            correctFeedbackRu: "Фантастически! 'The movie was really entertaining, wasn't it?' идеально. Past simple с прилагательными идеально для обмена мнениями об опыте!",
            incorrectFeedback: "Opinion sharing! **'Was entertaining' is past simple 'be' positive, so 'wasn't it' is needed.** Perfect for discussing movies, books, and experiences!",
            incorrectFeedbackRu: "Обмен мнениями! **'Was entertaining' - это past simple 'be' положительное, поэтому нужно 'wasn't it'.** Идеально для обсуждения фильмов, книг и впечатлений!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "We need to buy some groceries, _____?",
            options: [
                "don't we",
                "do we",
                "need we",
                "needn't we"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'We need to buy some groceries, don't we?' is exactly right. 'Need' as a regular verb uses 'do/don't' - perfect for discussing daily tasks!",
            correctFeedbackRu: "Блестяще! 'We need to buy some groceries, don't we?' совершенно правильно. 'Need' как обычный глагол использует 'do/don't' - идеально для обсуждения ежедневных задач!",
            incorrectFeedback: "Daily necessity! **'Need' here is a regular verb (not modal), so it uses 'do/don't' in question tags.** Great for household planning conversations!",
            incorrectFeedbackRu: "Ежедневная необходимость! **'Need' здесь обычный глагол (не модальный), поэтому использует 'do/don't' в разделительных вопросах.** Отлично для разговоров о домашнем планировании!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Your sister lives near the university, _____?",
            options: [
                "doesn't she",
                "does she",
                "isn't she",
                "is she"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Your sister lives near the university, doesn't she?' is exactly right. Present simple for where people live is so useful for getting to know someone!",
            correctFeedbackRu: "Идеально! 'Your sister lives near the university, doesn't she?' совершенно правильно. Present simple для того, где люди живут, так полезно для знакомства с кем-то!",
            incorrectFeedback: "Location talk! **'Lives' is present simple positive, so 'doesn't she' is perfect.** Great for conversations about where family and friends live!",
            incorrectFeedbackRu: "Разговор о местоположении! **'Lives' - это present simple положительное, поэтому 'doesn't she' идеально.** Отлично для разговоров о том, где живут семья и друзья!"
        }
    ]
};

/* ============================================
Page 6: Question Tags - Modal Verbs and Abilities
============================================ */
window.grammarExercises['questions']['question-tags-page6'] = {
    title: "Question Tags - Modal Verbs and Abilities",
    multipleChoice: [
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You can speak French quite well, _____?",
            options: [
                "can't you",
                "can you",
                "don't you",
                "do you"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'You can speak French quite well, can't you?' is perfect. Modal 'can' for abilities sounds so natural with question tags!",
            correctFeedbackRu: "Отлично! 'You can speak French quite well, can't you?' идеально. Модальный 'can' для способностей звучит так естественно с разделительными вопросами!",
            incorrectFeedback: "Ability talk! **'Can speak' is modal positive, so 'can't you' is needed.** Perfect for discussing languages and skills!",
            incorrectFeedbackRu: "Разговор о способностях! **'Can speak' - это модальный положительный, поэтому нужно 'can't you'.** Идеально для обсуждения языков и навыков!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "We should visit that new restaurant, _____?",
            options: [
                "shouldn't we",
                "should we",
                "don't we",
                "do we"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'We should visit that new restaurant, shouldn't we?' is spot on. 'Should' for suggestions creates such enthusiastic invitations!",
            correctFeedbackRu: "Фантастически! 'We should visit that new restaurant, shouldn't we?' точно в цель. 'Should' для предложений создает такие энтузиастичные приглашения!",
            incorrectFeedback: "Great suggestion! **'Should visit' is modal positive, so 'shouldn't we' is perfect.** This structure makes suggestions sound exciting and inclusive!",
            incorrectFeedbackRu: "Отличное предложение! **'Should visit' - это модальный положительный, поэтому 'shouldn't we' идеально.** Эта структура делает предложения захватывающими и включающими!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "He couldn't solve the problem yesterday, _____?",
            options: [
                "could he",
                "couldn't he",
                "did he",
                "didn't he"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'He couldn't solve the problem yesterday, could he?' is exactly right. Past ability with 'could/couldn't' stays modal in tags!",
            correctFeedbackRu: "Блестяще! 'He couldn't solve the problem yesterday, could he?' совершенно правильно. Прошлые способности с 'could/couldn't' остаются модальными в тегах!",
            incorrectFeedback: "Past ability! **'Couldn't solve' is past modal negative, so 'could he' is needed.** Modal verbs keep their modal form in question tags!",
            incorrectFeedbackRu: "Прошлые способности! **'Couldn't solve' - это прошлый модальный отрицательный, поэтому нужно 'could he'.** Модальные глаголы сохраняют свою модальную форму в разделительных вопросах!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You would like to come with us, _____?",
            options: [
                "wouldn't you",
                "would you",
                "don't you",
                "do you"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'You would like to come with us, wouldn't you?' is exactly right. 'Would like' for polite invitations sounds so welcoming!",
            correctFeedbackRu: "Идеально! 'You would like to come with us, wouldn't you?' совершенно правильно. 'Would like' для вежливых приглашений звучит так приветливо!",
            incorrectFeedback: "Polite invitation! **'Would like' is modal positive, so 'wouldn't you' is perfect.** This makes invitations sound warm and considerate!",
            incorrectFeedbackRu: "Вежливое приглашение! **'Would like' - это модальный положительный, поэтому 'wouldn't you' идеально.** Это делает приглашения теплыми и внимательными!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The children may go to the park later, _____?",
            options: [
                "mayn't they",
                "may they",
                "don't they",
                "won't they"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'The children may go to the park later, mayn't they?' is perfect. 'May' for possibility creates its own question tag - advanced modal usage!",
            correctFeedbackRu: "Отлично! 'The children may go to the park later, mayn't they?' идеально. 'May' для возможности создает свой собственный разделительный вопрос - продвинутое использование модального глагола!",
            incorrectFeedback: "Possibility talk! **'May go' is modal positive, so 'mayn't they' is needed.** 'May' keeps its modal form in question tags for possibilities!",
            incorrectFeedbackRu: "Разговор о возможности! **'May go' - это модальный положительный, поэтому нужно 'mayn't they'.** 'May' сохраняет свою модальную форму в разделительных вопросах для возможностей!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "We mustn't be late for the appointment, _____?",
            options: [
                "must we",
                "mustn't we",
                "do we",
                "don't we"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'We mustn't be late for the appointment, must we?' is spot on. 'Mustn't' for prohibition flips to positive 'must we' perfectly!",
            correctFeedbackRu: "Фантастически! 'We mustn't be late for the appointment, must we?' точно в цель. 'Mustn't' для запрета переворачивается в положительное 'must we' идеально!",
            incorrectFeedback: "Strong obligation! **'Mustn't be' is modal negative, so 'must we' is needed.** Perfect for emphasizing important deadlines and rules!",
            incorrectFeedbackRu: "Сильное обязательство! **'Mustn't be' - это модальный отрицательный, поэтому нужно 'must we'.** Идеально для подчеркивания важных сроков и правил!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You will be able to join us for dinner, _____?",
            options: [
                "won't you",
                "will you",
                "can't you",
                "can you"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'You will be able to join us for dinner, won't you?' is exactly right. 'Will be able to' uses 'will/won't' in tags - future ability!",
            correctFeedbackRu: "Блестяще! 'You will be able to join us for dinner, won't you?' совершенно правильно. 'Will be able to' использует 'will/won't' в тегах - будущая способность!",
            incorrectFeedback: "Future ability! **'Will be able to' uses 'will' as the auxiliary, so 'won't you' is needed.** Perfect for making dinner plans and social arrangements!",
            incorrectFeedbackRu: "Будущая способность! **'Will be able to' использует 'will' как вспомогательный глагол, поэтому нужно 'won't you'.** Идеально для планирования ужинов и социальных встреч!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "She might not want to participate, _____?",
            options: [
                "might she",
                "mightn't she",
                "does she",
                "doesn't she"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'She might not want to participate, might she?' is exactly right. 'Might not' is negative, so positive 'might she' balances it beautifully!",
            correctFeedbackRu: "Идеально! 'She might not want to participate, might she?' совершенно правильно. 'Might not' отрицательное, поэтому положительное 'might she' прекрасно балансирует это!",
            incorrectFeedback: "Uncertain possibility! **'Might not want' is modal negative, so 'might she' is needed.** Great for discussing uncertain situations with sensitivity!",
            incorrectFeedbackRu: "Неопределенная возможность! **'Might not want' - это модальный отрицательный, поэтому нужно 'might she'.** Отлично для обсуждения неопределенных ситуаций с деликатностью!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You had to work late yesterday, _____?",
            options: [
                "didn't you",
                "had you",
                "hadn't you",
                "don't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'You had to work late yesterday, didn't you?' is perfect. 'Had to' for past necessity uses 'did/didn't' in question tags - very practical!",
            correctFeedbackRu: "Отлично! 'You had to work late yesterday, didn't you?' идеально. 'Had to' для прошлой необходимости использует 'did/didn't' в разделительных вопросах - очень практично!",
            incorrectFeedback: "Past necessity! **'Had to work' is past necessity, but uses 'didn't you' in tags, not 'hadn't'.** This structure is perfect for discussing work obligations!",
            incorrectFeedbackRu: "Прошлая необходимость! **'Had to work' - это прошлая необходимость, но использует 'didn't you' в тегах, не 'hadn't'.** Эта структура идеальна для обсуждения рабочих обязательств!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "We could try that new coffee place downtown, _____?",
            options: [
                "couldn't we",
                "could we",
                "don't we",
                "do we"
            ],
            correctAnswer: 0,
            correctFeedback: "Wonderful! 'We could try that new coffee place downtown, couldn't we?' is spot on. 'Could' for suggestions sounds so open and inviting!",
            correctFeedbackRu: "Замечательно! 'We could try that new coffee place downtown, couldn't we?' точно в цель. 'Could' для предложений звучит так открыто и приглашающе!",
            incorrectFeedback: "Gentle suggestion! **'Could try' is modal positive, so 'couldn't we' is perfect.** This makes suggestions sound casual and non-pressuring!",
            incorrectFeedbackRu: "Мягкое предложение! **'Could try' - это модальный положительный, поэтому 'couldn't we' идеально.** Это делает предложения случайными и не давящими!"
        }
    ]
};

/* ============================================
Page 7: Question Tags - Passive Voice and Complex Structures
============================================ */
window.grammarExercises['questions']['question-tags-page7'] = {
    title: "Question Tags - Passive Voice and Complex Structures",
    multipleChoice: [
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The report was submitted on time, _____?",
            options: [
                "wasn't it",
                "was it",
                "didn't it",
                "did it"
            ],
            correctAnswer: 0,
            correctFeedback: "Outstanding! 'The report was submitted on time, wasn't it?' is perfect. Passive voice with 'was' creates clean, professional-sounding question tags!",
            correctFeedbackRu: "Выдающе! 'The report was submitted on time, wasn't it?' идеально. Пассивный залог с 'was' создает четкие, профессионально звучащие разделительные вопросы!",
            incorrectFeedback: "Think passive structure! **'Was submitted' is passive voice using 'be', so the question tag uses 'wasn't it'.** Focus on the auxiliary 'was', not the past participle 'submitted'!",
            incorrectFeedbackRu: "Думайте о пассивной структуре! **'Was submitted' - это пассивный залог, использующий 'be', поэтому разделительный вопрос использует 'wasn't it'.** Сосредоточьтесь на вспомогательном 'was', а не на причастии 'submitted'!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The documents haven't been reviewed yet, _____?",
            options: [
                "have they",
                "haven't they",
                "are they",
                "aren't they"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'The documents haven't been reviewed yet, have they?' is exactly right. Present perfect passive negative needs positive 'have they' - sophisticated grammar mastery!",
            correctFeedbackRu: "Блестяще! 'The documents haven't been reviewed yet, have they?' совершенно правильно. Present perfect пассивный отрицательный нуждается в положительном 'have they' - изощренное грамматическое мастерство!",
            incorrectFeedback: "Complex passive! **'Haven't been reviewed' is present perfect passive negative, so 'have they' is needed.** The auxiliary 'have' carries the question tag, not 'be'!",
            incorrectFeedbackRu: "Сложный пассив! **'Haven't been reviewed' - это present perfect пассивный отрицательный, поэтому нужно 'have they'.** Вспомогательный 'have' несет разделительный вопрос, не 'be'!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The problem should have been addressed earlier, _____?",
            options: [
                "shouldn't it",
                "should it",
                "wasn't it",
                "was it"
            ],
            correctAnswer: 0,
            correctFeedback: "Exceptional! 'The problem should have been addressed earlier, shouldn't it?' is flawless. Modal perfect passive - you're operating at the highest grammatical level!",
            correctFeedbackRu: "Исключительно! 'The problem should have been addressed earlier, shouldn't it?' безупречно. Модальная перфектная пассивная форма - вы работаете на высшем грамматическом уровне!",
            incorrectFeedback: "Advanced construction! **'Should have been' is modal perfect passive, and 'should' carries the question tag.** The modal takes precedence over the passive structure!",
            incorrectFeedbackRu: "Продвинутая конструкция! **'Should have been' - это модальная перфектная пассивная форма, и 'should' несет разделительный вопрос.** Модальный глагол имеет приоритет над пассивной структурой!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "All the arrangements are being made by the organizers, _____?",
            options: [
                "aren't they",
                "are they",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Masterful! 'All the arrangements are being made by the organizers, aren't they?' is perfect. Present continuous passive with plural subject - advanced structure navigation!",
            correctFeedbackRu: "Мастерски! 'All the arrangements are being made by the organizers, aren't they?' идеально. Present continuous пассивный с множественным подлежащим - навигация по продвинутой структуре!",
            incorrectFeedback: "Continuous passive! **'Are being made' is present continuous passive, and 'arrangements' is plural, so 'aren't they' is correct.** Watch for both the passive and the plural!",
            incorrectFeedbackRu: "Продолжительный пассив! **'Are being made' - это present continuous пассивный, и 'arrangements' множественное число, поэтому 'aren't they' правильно.** Следите и за пассивом, и за множественным числом!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The decision will be announced tomorrow, _____?",
            options: [
                "won't it",
                "will it",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'The decision will be announced tomorrow, won't it?' is spot on. Future passive maintains the 'will' in question tags - professional communication at its finest!",
            correctFeedbackRu: "Отлично! 'The decision will be announced tomorrow, won't it?' точно в цель. Будущий пассив сохраняет 'will' в разделительных вопросах - профессиональное общение в лучшем виде!",
            incorrectFeedback: "Future passive! **'Will be announced' is future passive, and 'will' carries the question tag.** The modal 'will' takes priority in the tag formation!",
            incorrectFeedbackRu: "Будущий пассив! **'Will be announced' - это будущий пассив, и 'will' несет разделительный вопрос.** Модальный 'will' имеет приоритет в формировании тега!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Little progress has been made so far, _____?",
            options: [
                "has it",
                "hasn't it",
                "has there",
                "hasn't there"
            ],
            correctAnswer: 0,
            correctFeedback: "Outstanding! 'Little progress has been made so far, has it?' is perfect. 'Little' has negative meaning with present perfect passive - you've mastered subtle grammar nuances!",
            correctFeedbackRu: "Выдающе! 'Little progress has been made so far, has it?' идеально. 'Little' имеет отрицательное значение с present perfect пассивным - вы освоили тонкие грамматические нюансы!",
            incorrectFeedback: "Subtle negative! **'Little progress' means 'not much progress' - negative meaning with present perfect passive needs positive 'has it'.** Watch for hidden negatives in complex structures!",
            incorrectFeedbackRu: "Тонкое отрицание! **'Little progress' означает 'немного прогресса' - отрицательное значение с present perfect пассивным нуждается в положительном 'has it'.** Следите за скрытыми отрицаниями в сложных структурах!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The new policy hasn't been implemented properly, _____?",
            options: [
                "has it",
                "hasn't it",
                "is it",
                "isn't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'The new policy hasn't been implemented properly, has it?' is exactly right. Present perfect passive negative creates powerful emphasis on incomplete actions!",
            correctFeedbackRu: "Блестяще! 'The new policy hasn't been implemented properly, has it?' совершенно правильно. Present perfect пассивный отрицательный создает мощное подчеркивание незавершенных действий!",
            incorrectFeedback: "Critical assessment! **'Hasn't been implemented' is present perfect passive negative, so 'has it' is needed.** Perfect for discussing policy and procedural issues!",
            incorrectFeedbackRu: "Критическая оценка! **'Hasn't been implemented' - это present perfect пассивный отрицательный, поэтому нужно 'has it'.** Идеально для обсуждения политических и процедурных вопросов!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Several mistakes were discovered during the audit, _____?",
            options: [
                "weren't they",
                "were they",
                "didn't they",
                "did they"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Several mistakes were discovered during the audit, weren't they?' is exactly right. Passive voice with plural subject requires careful attention to agreement!",
            correctFeedbackRu: "Идеально! 'Several mistakes were discovered during the audit, weren't they?' совершенно правильно. Пассивный залог с множественным подлежащим требует внимательного отношения к согласованию!",
            incorrectFeedback: "Plural passive! **'Mistakes were discovered' is past passive with plural subject, so 'weren't they' is correct.** The auxiliary 'were' becomes 'weren't' in the tag!",
            incorrectFeedbackRu: "Множественный пассив! **'Mistakes were discovered' - это прошедший пассив с множественным подлежащим, поэтому 'weren't they' правильно.** Вспомогательный 'were' становится 'weren't' в теге!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Nothing can be done about the situation now, _____?",
            options: [
                "can it",
                "can't it",
                "is it",
                "isn't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Exceptional! 'Nothing can be done about the situation now, can it?' is flawless. 'Nothing' with modal passive creates sophisticated negative construction!",
            correctFeedbackRu: "Исключительно! 'Nothing can be done about the situation now, can it?' безупречно. 'Nothing' с модальным пассивом создает изощренную отрицательную конструкцию!",
            incorrectFeedback: "Complex negative modal! **'Nothing can be done' has 'nothing' (negative) with modal passive, so positive 'can it' is needed.** Triple grammar challenge mastered!",
            incorrectFeedbackRu: "Сложный отрицательный модальный! **'Nothing can be done' имеет 'nothing' (отрицательное) с модальным пассивом, поэтому нужно положительное 'can it'.** Тройной грамматический вызов освоен!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The data must be analyzed more carefully, _____?",
            options: [
                "mustn't it",
                "must it",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Masterful! 'The data must be analyzed more carefully, mustn't it?' is perfect. Modal passive with necessity creates authoritative, professional communication!",
            correctFeedbackRu: "Мастерски! 'The data must be analyzed more carefully, mustn't it?' идеально. Модальный пассив с необходимостью создает авторитетное, профессиональное общение!",
            incorrectFeedback: "Necessity in passive! **'Must be analyzed' is modal passive with necessity, so 'mustn't it' is correct.** The modal 'must' governs the question tag formation!",
            incorrectFeedbackRu: "Необходимость в пассиве! **'Must be analyzed' - это модальный пассив с необходимостью, поэтому 'mustn't it' правильно.** Модальный 'must' управляет формированием разделительного вопроса!"
        }
    ]
};

/* ============================================
Page 8: Question Tags - Academic and Professional Contexts
============================================ */
window.grammarExercises['questions']['question-tags-page8'] = {
    title: "Question Tags - Academic and Professional Contexts",
    multipleChoice: [
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The research indicates significant correlations, _____?",
            options: [
                "doesn't it",
                "does it",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Outstanding! 'The research indicates significant correlations, doesn't it?' is perfect. Academic discourse with present simple creates authoritative question tags!",
            correctFeedbackRu: "Выдающе! 'The research indicates significant correlations, doesn't it?' идеально. Академический дискурс с present simple создает авторитетные разделительные вопросы!",
            incorrectFeedback: "Academic language! **'Indicates' is present simple positive, so 'doesn't it' is needed.** Perfect for discussing research findings and academic conclusions!",
            incorrectFeedbackRu: "Академический язык! **'Indicates' - это present simple положительное, поэтому нужно 'doesn't it'.** Идеально для обсуждения результатов исследований и академических выводов!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You wouldn't object to working overtime this week, _____?",
            options: [
                "would you",
                "wouldn't you",
                "do you",
                "don't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'You wouldn't object to working overtime this week, would you?' is exactly right. Professional diplomacy through conditional question tags - masterful workplace communication!",
            correctFeedbackRu: "Блестяще! 'You wouldn't object to working overtime this week, would you?' совершенно правильно. Профессиональная дипломатия через условные разделительные вопросы - мастерское рабочее общение!",
            incorrectFeedback: "Diplomatic request! **'Wouldn't object' is conditional negative, so 'would you' is needed.** This structure makes workplace requests sound incredibly tactful!",
            incorrectFeedbackRu: "Дипломатическая просьба! **'Wouldn't object' - это условное отрицательное, поэтому нужно 'would you'.** Эта структура делает рабочие просьбы невероятно тактичными!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The methodology appears to be flawed, _____?",
            options: [
                "doesn't it",
                "does it",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Exceptional! 'The methodology appears to be flawed, doesn't it?' is perfect. Academic critique with 'appears' creates sophisticated, measured criticism!",
            correctFeedbackRu: "Исключительно! 'The methodology appears to be flawed, doesn't it?' идеально. Академическая критика с 'appears' создает изощренную, взвешенную критику!",
            incorrectFeedback: "Academic critique! **'Appears to be' uses 'appears' as the main verb, so 'doesn't it' is correct.** Perfect for scholarly discussion and peer review!",
            incorrectFeedbackRu: "Академическая критика! **'Appears to be' использует 'appears' как главный глагол, поэтому 'doesn't it' правильно.** Идеально для научных дискуссий и экспертной оценки!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Neither approach has yielded satisfactory results, _____?",
            options: [
                "has it",
                "hasn't it",
                "have they",
                "haven't they"
            ],
            correctAnswer: 0,
            correctFeedback: "Masterful! 'Neither approach has yielded satisfactory results, has it?' is flawless. 'Neither' creates negative meaning with singular reference - advanced academic language!",
            correctFeedbackRu: "Мастерски! 'Neither approach has yielded satisfactory results, has it?' безупречно. 'Neither' создает отрицательное значение с единственным числом - продвинутый академический язык!",
            incorrectFeedback: "Complex subject! **'Neither approach' is negative and singular, so positive 'has it' is needed.** 'Neither' refers back to singular 'it' in academic contexts!",
            incorrectFeedbackRu: "Сложное подлежащее! **'Neither approach' отрицательное и единственное число, поэтому нужно положительное 'has it'.** 'Neither' относится к единственному 'it' в академических контекстах!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The proposal deserves serious consideration, _____?",
            options: [
                "doesn't it",
                "does it",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'The proposal deserves serious consideration, doesn't it?' is spot on. Professional evaluation language with present simple creates persuasive emphasis!",
            correctFeedbackRu: "Отлично! 'The proposal deserves serious consideration, doesn't it?' точно в цель. Язык профессиональной оценки с present simple создает убедительное подчеркивание!",
            incorrectFeedback: "Professional evaluation! **'Deserves' is present simple positive, so 'doesn't it' is correct.** Perfect for business meetings and proposal discussions!",
            incorrectFeedbackRu: "Профессиональная оценка! **'Deserves' - это present simple положительное, поэтому 'doesn't it' правильно.** Идеально для деловых встреч и обсуждения предложений!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The findings contradict our initial hypothesis, _____?",
            options: [
                "don't they",
                "do they",
                "aren't they",
                "are they"
            ],
            correctAnswer: 0,
            correctFeedback: "Outstanding! 'The findings contradict our initial hypothesis, don't they?' is perfect. Scientific discourse with plural subjects requires precise agreement!",
            correctFeedbackRu: "Выдающе! 'The findings contradict our initial hypothesis, don't they?' идеально. Научный дискурс с множественными подлежащими требует точного согласования!",
            incorrectFeedback: "Scientific analysis! **'Findings contradict' is present simple positive with plural subject, so 'don't they' is correct.** Essential for research presentations!",
            incorrectFeedbackRu: "Научный анализ! **'Findings contradict' - это present simple положительное с множественным подлежащим, поэтому 'don't they' правильно.** Необходимо для представления исследований!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Rarely do we encounter such comprehensive documentation, _____?",
            options: [
                "do we",
                "don't we",
                "rarely we",
                "are we"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'Rarely do we encounter such comprehensive documentation, do we?' is exactly right. Inverted structure with 'rarely' maintains sophisticated formal register!",
            correctFeedbackRu: "Блестяще! 'Rarely do we encounter such comprehensive documentation, do we?' совершенно правильно. Инвертированная структура с 'rarely' поддерживает изощренный официальный регистр!",
            incorrectFeedback: "Formal inversion! **'Rarely do we' is inverted negative structure, so positive 'do we' is needed.** This creates highly formal, professional emphasis!",
            incorrectFeedbackRu: "Формальная инверсия! **'Rarely do we' - это инвертированная отрицательная структура, поэтому нужно положительное 'do we'.** Это создает очень формальное, профессиональное подчеркивание!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The implications of this discovery extend far beyond our field, _____?",
            options: [
                "don't they",
                "do they",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Exceptional! 'The implications of this discovery extend far beyond our field, don't they?' is perfect. Complex academic language with plural subjects and abstract concepts!",
            correctFeedbackRu: "Исключительно! 'The implications of this discovery extend far beyond our field, don't they?' идеально. Сложный академический язык с множественными подлежащими и абстрактными концепциями!",
            incorrectFeedback: "Abstract academic language! **'Implications extend' is present simple positive with plural subject, so 'don't they' is correct.** Perfect for discussing research impact!",
            incorrectFeedbackRu: "Абстрактный академический язык! **'Implications extend' - это present simple положительное с множественным подлежащим, поэтому 'don't they' правильно.** Идеально для обсуждения влияния исследований!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You don't suppose the committee will approve the budget increase, _____?",
            options: [
                "do you",
                "don't you",
                "will they",
                "won't they"
            ],
            correctAnswer: 0,
            correctFeedback: "Masterful! 'You don't suppose the committee will approve the budget increase, do you?' is flawless. The tag relates to 'you don't suppose' - sophisticated embedded structure analysis!",
            correctFeedbackRu: "Мастерски! 'You don't suppose the committee will approve the budget increase, do you?' безупречно. Тег относится к 'you don't suppose' - изощренный анализ встроенной структуры!",
            incorrectFeedback: "Embedded professional query! **The question tag relates to 'you don't suppose' (negative), so 'do you' is needed.** Don't be distracted by the embedded clause about the committee!",
            incorrectFeedbackRu: "Встроенный профессиональный запрос! **Разделительный вопрос относится к 'you don't suppose' (отрицательное), поэтому нужно 'do you'.** Не отвлекайтесь на встроенное предложение о комитете!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The conference organizers have overlooked several important details, _____?",
            options: [
                "haven't they",
                "have they",
                "don't they",
                "do they"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'The conference organizers have overlooked several important details, haven't they?' is exactly right. Professional criticism using present perfect creates tactful but pointed feedback!",
            correctFeedbackRu: "Идеально! 'The conference organizers have overlooked several important details, haven't they?' совершенно правильно. Профессиональная критика, использующая present perfect, создает тактичную, но точную обратную связь!",
            incorrectFeedback: "Professional feedback! **'Have overlooked' is present perfect positive with plural subject, so 'haven't they' is correct.** Perfect for constructive criticism in meetings!",
            incorrectFeedbackRu: "Профессиональная обратная связь! **'Have overlooked' - это present perfect положительное с множественным подлежащим, поэтому 'haven't they' правильно.** Идеально для конструктивной критики на встречах!"
        }
    ]
};

/* ============================================
Page 9: Question Tags - Everyday Conversations and Social Situations
============================================ */
window.grammarExercises['questions']['question-tags-page9'] = {
    title: "Question Tags - Everyday Conversations and Social Situations",
    multipleChoice: [
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The food at this restaurant tastes amazing, _____?",
            options: [
                "doesn't it",
                "does it",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'The food at this restaurant tastes amazing, doesn't it?' is exactly right. Sharing positive experiences with present simple creates such warm conversation!",
            correctFeedbackRu: "Идеально! 'The food at this restaurant tastes amazing, doesn't it?' совершенно правильно. Обмен положительным опытом с present simple создает такой теплый разговор!",
            incorrectFeedback: "Food appreciation! **'Tastes amazing' is present simple positive, so 'doesn't it' is needed.** Perfect for restaurant conversations and food reviews!",
            incorrectFeedbackRu: "Оценка еды! **'Tastes amazing' - это present simple положительное, поэтому нужно 'doesn't it'.** Идеально для ресторанных разговоров и обзоров еды!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You're not serious about quitting your job, _____?",
            options: [
                "are you",
                "aren't you",
                "do you",
                "don't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'You're not serious about quitting your job, are you?' is spot on. Shows concern and disbelief in such a natural, caring way!",
            correctFeedbackRu: "Отлично! 'You're not serious about quitting your job, are you?' точно в цель. Показывает беспокойство и недоверие таким естественным, заботливым способом!",
            incorrectFeedback: "Concerned reaction! **'You're not serious' is negative with 'be', so 'are you' is needed.** Perfect for expressing surprise about big life decisions!",
            incorrectFeedbackRu: "Обеспокоенная реакция! **'You're not serious' отрицательное с 'be', поэтому нужно 'are you'.** Идеально для выражения удивления по поводу важных жизненных решений!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The concert starts at seven tonight, _____?",
            options: [
                "doesn't it",
                "does it",
                "isn't it",
                "won't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'The concert starts at seven tonight, doesn't it?' is perfect. Present simple for scheduled events makes confirmation sound so natural!",
            correctFeedbackRu: "Фантастически! 'The concert starts at seven tonight, doesn't it?' идеально. Present simple для запланированных событий делает подтверждение таким естественным!",
            incorrectFeedback: "Event scheduling! **'Starts' is present simple for scheduled events, so 'doesn't it' is correct.** Great for confirming entertainment plans!",
            incorrectFeedbackRu: "Планирование событий! **'Starts' - это present simple для запланированных событий, поэтому 'doesn't it' правильно.** Отлично для подтверждения планов развлечений!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "Your parents live in the countryside, _____?",
            options: [
                "don't they",
                "do they",
                "aren't they",
                "are they"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'Your parents live in the countryside, don't they?' is exactly right. Perfect for getting to know someone and their family background!",
            correctFeedbackRu: "Блестяще! 'Your parents live in the countryside, don't they?' совершенно правильно. Идеально для знакомства с кем-то и их семейным происхождением!",
            incorrectFeedback: "Family background! **'Parents live' is present simple positive with plural subject, so 'don't they' is needed.** Great for personal conversations!",
            incorrectFeedbackRu: "Семейное происхождение! **'Parents live' - это present simple положительное с множественным подлежащим, поэтому нужно 'don't they'.** Отлично для личных разговоров!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "We had a great time at the party last night, _____?",
            options: [
                "didn't we",
                "did we",
                "weren't we",
                "were we"
            ],
            correctAnswer: 0,
            correctFeedback: "Wonderful! 'We had a great time at the party last night, didn't we?' is perfect. Sharing happy memories with past simple sounds so warm and inclusive!",
            correctFeedbackRu: "Замечательно! 'We had a great time at the party last night, didn't we?' идеально. Обмен счастливыми воспоминаниями с past simple звучит так тепло и включающе!",
            incorrectFeedback: "Happy memories! **'Had a great time' is past simple positive, so 'didn't we' is needed.** Perfect for reminiscing about good times together!",
            incorrectFeedbackRu: "Счастливые воспоминания! **'Had a great time' - это past simple положительное, поэтому нужно 'didn't we'.** Идеально для воспоминаний о хороших временах вместе!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You're planning to study abroad next year, _____?",
            options: [
                "aren't you",
                "are you",
                "don't you",
                "do you"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'You're planning to study abroad next year, aren't you?' is exactly right. Present continuous for future plans sounds so encouraging and interested!",
            correctFeedbackRu: "Идеально! 'You're planning to study abroad next year, aren't you?' совершенно правильно. Present continuous для будущих планов звучит так ободряюще и заинтересованно!",
            incorrectFeedback: "Future educational plans! **'You're planning' is present continuous positive, so 'aren't you' is needed.** Great for discussing academic and career goals!",
            incorrectFeedbackRu: "Будущие образовательные планы! **'You're planning' - это present continuous положительное, поэтому нужно 'aren't you'.** Отлично для обсуждения академических и карьерных целей!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The weather hasn't been very good this week, _____?",
            options: [
                "has it",
                "hasn't it",
                "is it",
                "isn't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'The weather hasn't been very good this week, has it?' is spot on. Present perfect negative with time periods creates perfect small talk!",
            correctFeedbackRu: "Отлично! 'The weather hasn't been very good this week, has it?' точно в цель. Present perfect отрицательное с периодами времени создает идеальный светский разговор!",
            incorrectFeedback: "Weather small talk! **'Hasn't been' is present perfect negative, so 'has it' is needed.** Perfect conversation starter about recent weather patterns!",
            incorrectFeedbackRu: "Светская беседа о погоде! **'Hasn't been' - это present perfect отрицательное, поэтому нужно 'has it'.** Идеальное начало разговора о недавних погодных условиях!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You don't mind if I open the window, _____?",
            options: [
                "do you",
                "don't you",
                "mind you",
                "would you"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'You don't mind if I open the window, do you?' is perfect. Polite requests with 'don't mind' sound so considerate and courteous!",
            correctFeedbackRu: "Фантастически! 'You don't mind if I open the window, do you?' идеально. Вежливые просьбы с 'don't mind' звучат так внимательно и учтиво!",
            incorrectFeedback: "Polite request! **'You don't mind' is negative with present simple, so 'do you' is needed.** Perfect for asking permission in social situations!",
            incorrectFeedbackRu: "Вежливая просьба! **'You don't mind' отрицательное с present simple, поэтому нужно 'do you'.** Идеально для просьбы разрешения в социальных ситуациях!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "This song brings back so many memories, _____?",
            options: [
                "doesn't it",
                "does it",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'This song brings back so many memories, doesn't it?' is exactly right. Sharing nostalgic moments with present simple creates such emotional connection!",
            correctFeedbackRu: "Блестяще! 'This song brings back so many memories, doesn't it?' совершенно правильно. Обмен ностальгическими моментами с present simple создает такую эмоциональную связь!",
            incorrectFeedback: "Nostalgic sharing! **'Brings back' is present simple positive, so 'doesn't it' is needed.** Perfect for emotional conversations about music and memories!",
            incorrectFeedbackRu: "Ностальгический обмен! **'Brings back' - это present simple положительное, поэтому нужно 'doesn't it'.** Идеально для эмоциональных разговоров о музыке и воспоминаниях!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You've never been to Italy before, _____?",
            options: [
                "have you",
                "haven't you",
                "did you",
                "didn't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'You've never been to Italy before, have you?' is exactly right. 'Never' makes it negative with present perfect - great for travel conversations!",
            correctFeedbackRu: "Идеально! 'You've never been to Italy before, have you?' совершенно правильно. 'Never' делает это отрицательным с present perfect - отлично для разговоров о путешествиях!",
            incorrectFeedback: "Travel experience! **'Never been' is present perfect negative (because of 'never'), so 'have you' is needed.** Perfect for discussing travel experiences!",
            incorrectFeedbackRu: "Опыт путешествий! **'Never been' - это present perfect отрицательное (из-за 'never'), поэтому нужно 'have you'.** Идеально для обсуждения опыта путешествий!"
        }
    ]
};

/* ============================================
Page 10: Question Tags - Personal Opinions and Feelings
============================================ */
window.grammarExercises['questions']['question-tags-page10'] = {
    title: "Question Tags - Personal Opinions and Feelings",
    multipleChoice: [
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You think the new teacher is really good, _____?",
            options: [
                "don't you",
                "do you",
                "aren't you",
                "are you"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'You think the new teacher is really good, don't you?' is perfect. Discussing opinions with 'think' creates such engaging personal conversations!",
            correctFeedbackRu: "Отлично! 'You think the new teacher is really good, don't you?' идеально. Обсуждение мнений с 'think' создает такие увлекательные личные разговоры!",
            incorrectFeedback: "Opinion sharing! **'You think' is present simple positive, so 'don't you' is needed.** Perfect for discussing personal views and impressions!",
            incorrectFeedbackRu: "Обмен мнениями! **'You think' - это present simple положительное, поэтому нужно 'don't you'.** Идеально для обсуждения личных взглядов и впечатлений!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The movie was quite disappointing, _____?",
            options: [
                "wasn't it",
                "was it",
                "didn't it",
                "did it"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'The movie was quite disappointing, wasn't it?' is spot on. Sharing critical opinions with past simple creates honest, relatable discussions!",
            correctFeedbackRu: "Фантастически! 'The movie was quite disappointing, wasn't it?' точно в цель. Обмен критическими мнениями с past simple создает честные, понятные дискуссии!",
            incorrectFeedback: "Critical review! **'Was disappointing' is past simple 'be' positive, so 'wasn't it' is needed.** Great for discussing entertainment and cultural experiences!",
            incorrectFeedbackRu: "Критический обзор! **'Was disappointing' - это past simple 'be' положительное, поэтому нужно 'wasn't it'.** Отлично для обсуждения развлечений и культурного опыта!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You don't really believe that story, _____?",
            options: [
                "do you",
                "don't you",
                "believe you",
                "are you"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'You don't really believe that story, do you?' is exactly right. Expressing doubt with question tags sounds so natural and conversational!",
            correctFeedbackRu: "Блестяще! 'You don't really believe that story, do you?' совершенно правильно. Выражение сомнения с разделительными вопросами звучит так естественно и разговорно!",
            incorrectFeedback: "Expressing doubt! **'Don't really believe' is negative, so 'do you' is needed.** Perfect for questioning unlikely stories and claims!",
            incorrectFeedbackRu: "Выражение сомнения! **'Don't really believe' отрицательное, поэтому нужно 'do you'.** Идеально для сомнения в неправдоподобных историях и утверждениях!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "It feels strange to be back home after so long, _____?",
            options: [
                "doesn't it",
                "does it",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'It feels strange to be back home after so long, doesn't it?' is exactly right. Sharing emotional experiences creates such meaningful connections!",
            correctFeedbackRu: "Идеально! 'It feels strange to be back home after so long, doesn't it?' совершенно правильно. Обмен эмоциональным опытом создает такие значимые связи!",
            incorrectFeedback: "Emotional reflection! **'Feels strange' is present simple positive, so 'doesn't it' is needed.** Perfect for sharing deep personal feelings!",
            incorrectFeedbackRu: "Эмоциональное размышление! **'Feels strange' - это present simple положительное, поэтому нужно 'doesn't it'.** Идеально для обмена глубокими личными чувствами!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You're feeling much better today, _____?",
            options: [
                "aren't you",
                "are you",
                "don't you",
                "do you"
            ],
            correctAnswer: 0,
            correctFeedback: "Wonderful! 'You're feeling much better today, aren't you?' is perfect. Checking on someone's wellbeing with present continuous shows such genuine care!",
            correctFeedbackRu: "Замечательно! 'You're feeling much better today, aren't you?' идеально. Проверка самочувствия кого-то с present continuous показывает такую искреннюю заботу!",
            incorrectFeedback: "Health check-in! **'You're feeling' is present continuous positive, so 'aren't you' is needed.** Perfect for showing care about someone's health!",
            incorrectFeedbackRu: "Проверка здоровья! **'You're feeling' - это present continuous положительное, поэтому нужно 'aren't you'.** Идеально для проявления заботы о чьем-то здоровье!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "This situation doesn't seem fair to me, _____?",
            options: [
                "does it",
                "doesn't it",
                "is it",
                "isn't it"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'This situation doesn't seem fair to me, does it?' is spot on. Expressing concerns about fairness creates important social discussions!",
            correctFeedbackRu: "Отлично! 'This situation doesn't seem fair to me, does it?' точно в цель. Выражение беспокойства о справедливости создает важные социальные дискуссии!",
            incorrectFeedback: "Social justice concern! **'Doesn't seem' is negative, so 'does it' is needed.** Perfect for discussing fairness and social issues!",
            incorrectFeedbackRu: "Беспокойство о социальной справедливости! **'Doesn't seem' отрицательное, поэтому нужно 'does it'.** Идеально для обсуждения справедливости и социальных вопросов!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You've always wanted to learn how to play guitar, _____?",
            options: [
                "haven't you",
                "have you",
                "don't you",
                "do you"
            ],
            correctAnswer: 0,
            correctFeedback: "Fantastic! 'You've always wanted to learn how to play guitar, haven't you?' is perfect. Discussing long-term dreams with present perfect sounds so encouraging!",
            correctFeedbackRu: "Фантастически! 'You've always wanted to learn how to play guitar, haven't you?' идеально. Обсуждение долгосрочных мечт с present perfect звучит так ободряюще!",
            incorrectFeedback: "Lifelong dreams! **'You've always wanted' is present perfect positive, so 'haven't you' is needed.** Great for discussing personal aspirations and hobbies!",
            incorrectFeedbackRu: "Мечты всей жизни! **'You've always wanted' - это present perfect положительное, поэтому нужно 'haven't you'.** Отлично для обсуждения личных стремлений и хобби!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "The new shopping center looks impressive, _____?",
            options: [
                "doesn't it",
                "does it",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'The new shopping center looks impressive, doesn't it?' is exactly right. Commenting on local developments with present simple creates great community conversations!",
            correctFeedbackRu: "Блестяще! 'The new shopping center looks impressive, doesn't it?' совершенно правильно. Комментирование местных событий с present simple создает отличные разговоры в сообществе!",
            incorrectFeedback: "Local observations! **'Looks impressive' is present simple positive, so 'doesn't it' is needed.** Perfect for discussing changes in your neighborhood!",
            incorrectFeedbackRu: "Местные наблюдения! **'Looks impressive' - это present simple положительное, поэтому нужно 'doesn't it'.** Идеально для обсуждения изменений в вашем районе!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "You wouldn't want to miss this opportunity, _____?",
            options: [
                "would you",
                "wouldn't you",
                "do you",
                "don't you"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'You wouldn't want to miss this opportunity, would you?' is exactly right. Gentle persuasion with conditional forms sounds so encouraging and supportive!",
            correctFeedbackRu: "Идеально! 'You wouldn't want to miss this opportunity, would you?' совершенно правильно. Мягкое убеждение с условными формами звучит так ободряюще и поддерживающе!",
            incorrectFeedback: "Gentle persuasion! **'Wouldn't want' is conditional negative, so 'would you' is needed.** Perfect for encouraging someone to take positive action!",
            incorrectFeedbackRu: "Мягкое убеждение! **'Wouldn't want' - это условное отрицательное, поэтому нужно 'would you'.** Идеально для поощрения кого-то к позитивным действиям!"
        },
        {
            question: "Choose the correct question tag:",
            questionRu: "Выберите правильный разделительный вопрос:",
            sentence: "It's been a challenging year for everyone, _____?",
            options: [
                "hasn't it",
                "has it",
                "isn't it",
                "is it"
            ],
            correctAnswer: 0,
            correctFeedback: "Wonderful! 'It's been a challenging year for everyone, hasn't it?' is perfect. Acknowledging shared difficulties with present perfect creates empathy and connection!",
            correctFeedbackRu: "Замечательно! 'It's been a challenging year for everyone, hasn't it?' идеально. Признание общих трудностей с present perfect создает эмпатию и связь!",
            incorrectFeedback: "Shared experience! **'It's been' means 'it has been' - present perfect positive, so 'hasn't it' is needed.** Perfect for acknowledging collective challenges!",
            incorrectFeedbackRu: "Общий опыт! **'It's been' означает 'it has been' - present perfect положительное, поэтому нужно 'hasn't it'.** Идеально для признания коллективных вызовов!"
        }
    ]
};

/* =============================================================================== */
/* ===========================Fill in the Gaps Exercises========================== */

/* ============================================
Page 1: Question Tags - Basic Present and Past
============================================ */
window.grammarExercises['questions']['question-tags-gap-page1'] = {
    title: "Question Tags - Basic Present and Past",
    fillGaps: [
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You like chocolate, ____?",
            correctAnswer: "don't you",
            options: ["don't you", "do you", "aren't you", "are you"],
            correctFeedback: "Perfect! 'Don't you' is correct because 'like' is present simple positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Don't you' правильно, потому что 'like' - это present simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Remember the rule: positive statement needs negative question tag. 'You like' is positive, so use 'don't you'.",
            incorrectFeedbackRu: "Помните правило: положительное утверждение нуждается в отрицательном разделительном вопросе. 'You like' положительное, поэтому используйте 'don't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "She isn't coming today, ____?",
            correctAnswer: "is she",
            options: ["is she", "isn't she", "does she", "doesn't she"],
            correctFeedback: "Excellent! 'Is she' is correct because 'isn't coming' is negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Is she' правильно, потому что 'isn't coming' отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Think opposites! 'Isn't coming' is negative, so the question tag should be positive: 'is she'.",
            incorrectFeedbackRu: "Думайте о противоположностях! 'Isn't coming' отрицательное, поэтому разделительный вопрос должен быть положительным: 'is she'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "They went to Paris last summer, ____?",
            correctAnswer: "didn't they",
            options: ["didn't they", "did they", "weren't they", "were they"],
            correctFeedback: "Fantastic! 'Didn't they' is correct because 'went' is past simple positive, so we need negative question tag with 'did'.",
            correctFeedbackRu: "Фантастически! 'Didn't they' правильно, потому что 'went' - это past simple положительное, поэтому нам нужен отрицательный разделительный вопрос с 'did'.",
            incorrectFeedback: "Past simple verbs like 'went' use 'did/didn't' in question tags. Since 'went' is positive, use 'didn't they'.",
            incorrectFeedbackRu: "Глаголы в past simple как 'went' используют 'did/didn't' в разделительных вопросах. Поскольку 'went' положительное, используйте 'didn't they'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The weather is nice today, ____?",
            correctAnswer: "isn't it",
            options: ["isn't it", "is it", "doesn't it", "does it"],
            correctFeedback: "Perfect! 'Isn't it' is correct because 'is nice' uses the verb 'be', and positive becomes negative in question tags.",
            correctFeedbackRu: "Идеально! 'Isn't it' правильно, потому что 'is nice' использует глагол 'be', и положительное становится отрицательным в разделительных вопросах.",
            incorrectFeedback: "With the verb 'be', the question tag uses the same verb. 'Is nice' is positive, so use negative 'isn't it'.",
            incorrectFeedbackRu: "С глаголом 'be' разделительный вопрос использует тот же глагол. 'Is nice' положительное, поэтому используйте отрицательное 'isn't it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You can drive a car, ____?",
            correctAnswer: "can't you",
            options: ["can't you", "can you", "don't you", "do you"],
            correctFeedback: "Excellent! 'Can't you' is correct because modal verbs like 'can' create their own question tags.",
            correctFeedbackRu: "Отлично! 'Can't you' правильно, потому что модальные глаголы как 'can' создают свои собственные разделительные вопросы.",
            incorrectFeedback: "Modal verbs like 'can' make their own question tags. 'Can drive' is positive, so use 'can't you'.",
            incorrectFeedbackRu: "Модальные глаголы как 'can' создают свои собственные разделительные вопросы. 'Can drive' положительное, поэтому используйте 'can't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "He doesn't work here anymore, ____?",
            correctAnswer: "does he",
            options: ["does he", "doesn't he", "is he", "isn't he"],
            correctFeedback: "Great! 'Does he' is correct because 'doesn't work' is negative present simple, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Does he' правильно, потому что 'doesn't work' - это отрицательное present simple, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Remember: negative statement needs positive tag. 'Doesn't work' is negative, so use 'does he'.",
            incorrectFeedbackRu: "Помните: отрицательное утверждение нуждается в положительном теге. 'Doesn't work' отрицательное, поэтому используйте 'does he'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "We should leave soon, ____?",
            correctAnswer: "shouldn't we",
            options: ["shouldn't we", "should we", "don't we", "do we"],
            correctFeedback: "Perfect! 'Shouldn't we' is correct because 'should' is a modal verb that creates its own question tag.",
            correctFeedbackRu: "Идеально! 'Shouldn't we' правильно, потому что 'should' - это модальный глагол, который создает свой собственный разделительный вопрос.",
            incorrectFeedback: "Modal verbs like 'should' form their own question tags. 'Should leave' is positive, so use 'shouldn't we'.",
            incorrectFeedbackRu: "Модальные глаголы как 'should' формируют свои собственные разделительные вопросы. 'Should leave' положительное, поэтому используйте 'shouldn't we'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You have finished your homework, ____?",
            correctAnswer: "haven't you",
            options: ["haven't you", "have you", "don't you", "do you"],
            correctFeedback: "Excellent! 'Haven't you' is correct because 'have finished' is present perfect positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Haven't you' правильно, потому что 'have finished' - это present perfect положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Present perfect uses 'have/haven't' in question tags. 'Have finished' is positive, so use 'haven't you'.",
            incorrectFeedbackRu: "Present perfect использует 'have/haven't' в разделительных вопросах. 'Have finished' положительное, поэтому используйте 'haven't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "It wasn't very expensive, ____?",
            correctAnswer: "was it",
            options: ["was it", "wasn't it", "did it", "didn't it"],
            correctFeedback: "Fantastic! 'Was it' is correct because 'wasn't expensive' is negative past 'be', so we need positive question tag.",
            correctFeedbackRu: "Фантастически! 'Was it' правильно, потому что 'wasn't expensive' - это отрицательное прошедшее 'be', поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Past tense 'be' forms its own question tags. 'Wasn't expensive' is negative, so use positive 'was it'.",
            incorrectFeedbackRu: "Прошедшее время 'be' формирует свои собственные разделительные вопросы. 'Wasn't expensive' отрицательное, поэтому используйте положительное 'was it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You will help me with this, ____?",
            correctAnswer: "won't you",
            options: ["won't you", "will you", "don't you", "do you"],
            correctFeedback: "Perfect! 'Won't you' is correct because 'will help' is future positive, so we need negative question tag with 'will'.",
            correctFeedbackRu: "Идеально! 'Won't you' правильно, потому что 'will help' - это будущее положительное, поэтому нам нужен отрицательный разделительный вопрос с 'will'.",
            incorrectFeedback: "Future tense uses 'will/won't' in question tags. 'Will help' is positive, so use 'won't you'.",
            incorrectFeedbackRu: "Будущее время использует 'will/won't' в разделительных вопросах. 'Will help' положительное, поэтому используйте 'won't you'."
        }
    ]
};

/* ============================================
Page 2: Question Tags - Intermediate Structures
============================================ */
window.grammarExercises['questions']['question-tags-gap-page2'] = {
    title: "Question Tags - Intermediate Structures",
    fillGaps: [
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "There are many people here, ____?",
            correctAnswer: "aren't there",
            options: ["aren't there", "are there", "isn't there", "is there"],
            correctFeedback: "Excellent! 'Aren't there' is correct because 'there are' structures keep 'there' in the question tag.",
            correctFeedbackRu: "Отлично! 'Aren't there' правильно, потому что структуры 'there are' сохраняют 'there' в разделительном вопросе.",
            incorrectFeedback: "'There are' structures always use 'there' in the question tag. Since it's positive, use 'aren't there'.",
            incorrectFeedbackRu: "Структуры 'There are' всегда используют 'there' в разделительном вопросе. Поскольку это положительное, используйте 'aren't there'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "She has been working hard, ____?",
            correctAnswer: "hasn't she",
            options: ["hasn't she", "has she", "isn't she", "is she"],
            correctFeedback: "Perfect! 'Hasn't she' is correct because 'has been working' is present perfect continuous positive.",
            correctFeedbackRu: "Идеально! 'Hasn't she' правильно, потому что 'has been working' - это present perfect continuous положительное.",
            incorrectFeedback: "Present perfect continuous uses 'has/hasn't' in question tags. 'Has been working' is positive, so use 'hasn't she'.",
            incorrectFeedbackRu: "Present perfect continuous использует 'has/hasn't' в разделительных вопросах. 'Has been working' положительное, поэтому используйте 'hasn't she'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Let's go to the cinema tonight, ____?",
            correctAnswer: "shall we",
            options: ["shall we", "will we", "don't we", "do we"],
            correctFeedback: "Fantastic! 'Shall we' is correct because 'Let's' always pairs with 'shall we' in question tags.",
            correctFeedbackRu: "Фантастически! 'Shall we' правильно, потому что 'Let's' всегда сочетается с 'shall we' в разделительных вопросах.",
            incorrectFeedback: "'Let's' is a special case that always uses 'shall we' as the question tag, regardless of other rules.",
            incorrectFeedbackRu: "'Let's' - это особый случай, который всегда использует 'shall we' как разделительный вопрос, независимо от других правил."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You could speak French when you were younger, ____?",
            correctAnswer: "couldn't you",
            options: ["couldn't you", "could you", "didn't you", "did you"],
            correctFeedback: "Great! 'Couldn't you' is correct because 'could speak' is past modal positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Couldn't you' правильно, потому что 'could speak' - это прошедший модальный положительный, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Past modal verbs like 'could' form their own question tags. 'Could speak' is positive, so use 'couldn't you'.",
            incorrectFeedbackRu: "Прошедшие модальные глаголы как 'could' формируют свои собственные разделительные вопросы. 'Could speak' положительное, поэтому используйте 'couldn't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "There isn't much time left, ____?",
            correctAnswer: "is there",
            options: ["is there", "isn't there", "does there", "doesn't there"],
            correctFeedback: "Excellent! 'Is there' is correct because 'there isn't' is negative, so we need positive question tag with 'there'.",
            correctFeedbackRu: "Отлично! 'Is there' правильно, потому что 'there isn't' отрицательное, поэтому нам нужен положительный разделительный вопрос с 'there'.",
            incorrectFeedback: "'There isn't' structures keep 'there' in the question tag. Since it's negative, use positive 'is there'.",
            incorrectFeedbackRu: "Структуры 'There isn't' сохраняют 'there' в разделительном вопросе. Поскольку это отрицательное, используйте положительное 'is there'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Everyone likes pizza, ____?",
            correctAnswer: "don't they",
            options: ["don't they", "do they", "doesn't everyone", "does everyone"],
            correctFeedback: "Perfect! 'Don't they' is correct because 'everyone' takes 'they' in question tags, and 'likes' is present simple positive.",
            correctFeedbackRu: "Идеально! 'Don't they' правильно, потому что 'everyone' берет 'they' в разделительных вопросах, и 'likes' - это present simple положительное.",
            incorrectFeedback: "Indefinite pronouns like 'everyone' use 'they' in question tags. 'Everyone likes' is positive, so use 'don't they'.",
            incorrectFeedbackRu: "Неопределенные местоимения как 'everyone' используют 'they' в разделительных вопросах. 'Everyone likes' положительное, поэтому используйте 'don't they'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You haven't seen my keys anywhere, ____?",
            correctAnswer: "have you",
            options: ["have you", "haven't you", "do you", "don't you"],
            correctFeedback: "Fantastic! 'Have you' is correct because 'haven't seen' is present perfect negative, so we need positive question tag.",
            correctFeedbackRu: "Фантастически! 'Have you' правильно, потому что 'haven't seen' - это present perfect отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Present perfect negative needs positive question tag. 'Haven't seen' is negative, so use 'have you'.",
            incorrectFeedbackRu: "Present perfect отрицательное нуждается в положительном разделительном вопросе. 'Haven't seen' отрицательное, поэтому используйте 'have you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "I'm right about this, ____?",
            correctAnswer: "aren't I",
            options: ["aren't I", "am I", "don't I", "do I"],
            correctFeedback: "Excellent! 'Aren't I' is correct because 'I'm' (I am) uses the special form 'aren't I' in question tags.",
            correctFeedbackRu: "Отлично! 'Aren't I' правильно, потому что 'I'm' (I am) использует особую форму 'aren't I' в разделительных вопросах.",
            incorrectFeedback: "'I am' has a special question tag form: 'aren't I'. This is the standard accepted form in English.",
            incorrectFeedbackRu: "'I am' имеет особую форму разделительного вопроса: 'aren't I'. Это стандартная принятая форма в английском языке."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Nobody called while I was out, ____?",
            correctAnswer: "did they",
            options: ["did they", "didn't they", "called they", "didn't nobody"],
            correctFeedback: "Great! 'Did they' is correct because 'nobody' is negative and takes 'they' in question tags, with past simple 'called'.",
            correctFeedbackRu: "Отлично! 'Did they' правильно, потому что 'nobody' отрицательное и берет 'they' в разделительных вопросах, с past simple 'called'.",
            incorrectFeedback: "'Nobody' is negative and uses 'they' in question tags. Past simple 'called' needs 'did', so use 'did they'.",
            incorrectFeedbackRu: "'Nobody' отрицательное и использует 'they' в разделительных вопросах. Past simple 'called' нуждается в 'did', поэтому используйте 'did they'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You would like some coffee, ____?",
            correctAnswer: "wouldn't you",
            options: ["wouldn't you", "would you", "don't you", "do you"],
            correctFeedback: "Perfect! 'Wouldn't you' is correct because 'would like' is conditional positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Wouldn't you' правильно, потому что 'would like' - это условное положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "'Would like' is a conditional form that uses 'would/wouldn't' in question tags. 'Would like' is positive, so use 'wouldn't you'.",
            incorrectFeedbackRu: "'Would like' - это условная форма, которая использует 'would/wouldn't' в разделительных вопросах. 'Would like' положительное, поэтому используйте 'wouldn't you'."
        }
    ]
};

/* ============================================
Page 3: Question Tags - Complex Situations
============================================ */
window.grammarExercises['questions']['question-tags-gap-page3'] = {
    title: "Question Tags - Complex Situations",
    fillGaps: [
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Someone left their umbrella here, ____?",
            correctAnswer: "didn't they",
            options: ["didn't they", "did they", "left they", "didn't someone"],
            correctFeedback: "Excellent! 'Didn't they' is correct because 'someone' takes 'they' in question tags, and 'left' is past simple positive.",
            correctFeedbackRu: "Отлично! 'Didn't they' правильно, потому что 'someone' берет 'they' в разделительных вопросах, и 'left' - это past simple положительное.",
            incorrectFeedback: "Indefinite pronouns like 'someone' use 'they' in question tags. 'Left' is past simple positive, so use 'didn't they'.",
            incorrectFeedbackRu: "Неопределенные местоимения как 'someone' используют 'they' в разделительных вопросах. 'Left' - это past simple положительное, поэтому используйте 'didn't they'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Nothing ever goes according to plan, ____?",
            correctAnswer: "does it",
            options: ["does it", "doesn't it", "goes it", "nothing it"],
            correctFeedback: "Perfect! 'Does it' is correct because 'nothing' makes the sentence negative, so we need positive question tag.",
            correctFeedbackRu: "Идеально! 'Does it' правильно, потому что 'nothing' делает предложение отрицательным, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Nothing' is a negative word, so the whole sentence is negative. Use positive 'does it' to balance it.",
            incorrectFeedbackRu: "'Nothing' - это отрицательное слово, поэтому все предложение отрицательное. Используйте положительное 'does it' для баланса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You used to live in London, ____?",
            correctAnswer: "didn't you",
            options: ["didn't you", "used you", "usedn't you", "don't you"],
            correctFeedback: "Fantastic! 'Didn't you' is correct because 'used to' forms question tags like past simple verbs.",
            correctFeedbackRu: "Фантастически! 'Didn't you' правильно, потому что 'used to' формирует разделительные вопросы как глаголы в past simple.",
            incorrectFeedback: "'Used to' is treated like a past simple verb in question tags, so it uses 'did/didn't'.",
            incorrectFeedbackRu: "'Used to' рассматривается как глагол в past simple в разделительных вопросах, поэтому использует 'did/didn't'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "He's never been to Asia, ____?",
            correctAnswer: "has he",
            options: ["has he", "hasn't he", "is he", "isn't he"],
            correctFeedback: "Great! 'Has he' is correct because 'never' makes it negative with present perfect, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Has he' правильно, потому что 'never' делает это отрицательным с present perfect, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Never' is negative, making the whole sentence negative. 'Has been' is present perfect, so use 'has he'.",
            incorrectFeedbackRu: "'Never' отрицательное, делая все предложение отрицательным. 'Has been' - это present perfect, поэтому используйте 'has he'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "We must finish this project today, ____?",
            correctAnswer: "mustn't we",
            options: ["mustn't we", "must we", "don't we", "do we"],
            correctFeedback: "Excellent! 'Mustn't we' is correct because 'must' is a modal verb that forms its own question tags.",
            correctFeedbackRu: "Отлично! 'Mustn't we' правильно, потому что 'must' - это модальный глагол, который формирует свои собственные разделительные вопросы.",
            incorrectFeedback: "Modal verbs like 'must' create their own question tags. 'Must finish' is positive, so use 'mustn't we'.",
            incorrectFeedbackRu: "Модальные глаголы как 'must' создают свои собственные разделительные вопросы. 'Must finish' положительное, поэтому используйте 'mustn't we'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You aren't feeling well today, ____?",
            correctAnswer: "are you",
            options: ["are you", "aren't you", "do you", "don't you"],
            correctFeedback: "Perfect! 'Are you' is correct because 'aren't feeling' is negative present continuous, so we need positive question tag.",
            correctFeedbackRu: "Идеально! 'Are you' правильно, потому что 'aren't feeling' - это отрицательное present continuous, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Aren't feeling' is negative present continuous. Use positive 'are you' to balance the negative statement.",
            incorrectFeedbackRu: "'Aren't feeling' - это отрицательное present continuous. Используйте положительное 'are you' для баланса отрицательного утверждения."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Anyone can learn to cook, ____?",
            correctAnswer: "can't they",
            options: ["can't they", "can they", "can't anyone", "can anyone"],
            correctFeedback: "Fantastic! 'Can't they' is correct because 'anyone' takes 'they' in question tags, and 'can learn' is modal positive.",
            correctFeedbackRu: "Фантастически! 'Can't they' правильно, потому что 'anyone' берет 'they' в разделительных вопросах, и 'can learn' - это модальный положительный.",
            incorrectFeedback: "Indefinite pronouns like 'anyone' use 'they' in question tags. 'Can learn' is modal positive, so use 'can't they'.",
            incorrectFeedbackRu: "Неопределенные местоимения как 'anyone' используют 'they' в разделительных вопросах. 'Can learn' - это модальный положительный, поэтому используйте 'can't they'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The children were playing in the garden, ____?",
            correctAnswer: "weren't they",
            options: ["weren't they", "were they", "didn't they", "did they"],
            correctFeedback: "Great! 'Weren't they' is correct because 'were playing' is past continuous positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Weren't they' правильно, потому что 'were playing' - это past continuous положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Past continuous uses 'was/were' in question tags. 'Were playing' is positive, so use 'weren't they'.",
            incorrectFeedbackRu: "Past continuous использует 'was/were' в разделительных вопросах. 'Were playing' положительное, поэтому используйте 'weren't they'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You won't forget to call me, ____?",
            correctAnswer: "will you",
            options: ["will you", "won't you", "do you", "don't you"],
            correctFeedback: "Excellent! 'Will you' is correct because 'won't forget' is future negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Will you' правильно, потому что 'won't forget' - это будущее отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Won't forget' is future negative. Use positive 'will you' to balance the negative statement.",
            incorrectFeedbackRu: "'Won't forget' - это будущее отрицательное. Используйте положительное 'will you' для баланса отрицательного утверждения."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "He might come to the party later, ____?",
            correctAnswer: "mightn't he",
            options: ["mightn't he", "might he", "won't he", "will he"],
            correctFeedback: "Perfect! 'Mightn't he' is correct because 'might' is a modal verb that creates its own question tag.",
            correctFeedbackRu: "Идеально! 'Mightn't he' правильно, потому что 'might' - это модальный глагол, который создает свой собственный разделительный вопрос.",
            incorrectFeedback: "Modal verbs like 'might' form their own question tags. 'Might come' is positive, so use 'mightn't he'.",
            incorrectFeedbackRu: "Модальные глаголы как 'might' формируют свои собственные разделительные вопросы. 'Might come' положительное, поэтому используйте 'mightn't he'."
        }
    ]
};

/* ============================================
Page 4: Question Tags - Real-Life Situations
============================================ */
window.grammarExercises['questions']['question-tags-gap-page4'] = {
    title: "Question Tags - Real-Life Situations",
    fillGaps: [
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The train arrives at nine o'clock, ____?",
            correctAnswer: "doesn't it",
            options: ["doesn't it", "does it", "isn't it", "won't it"],
            correctFeedback: "Perfect! 'Doesn't it' is correct because 'arrives' is present simple positive for scheduled events.",
            correctFeedbackRu: "Идеально! 'Doesn't it' правильно, потому что 'arrives' - это present simple положительное для запланированных событий.",
            incorrectFeedback: "Timetables use present simple even for future events. 'Arrives' is positive, so use 'doesn't it'.",
            incorrectFeedbackRu: "Расписания используют present simple даже для будущих событий. 'Arrives' положительное, поэтому используйте 'doesn't it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Your parents don't mind if you stay out late, ____?",
            correctAnswer: "do they",
            options: ["do they", "don't they", "mind they", "are they"],
            correctFeedback: "Excellent! 'Do they' is correct because 'don't mind' is negative present simple, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Do they' правильно, потому что 'don't mind' - это отрицательное present simple, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Don't mind' is negative, so use positive 'do they' to balance the statement.",
            incorrectFeedbackRu: "'Don't mind' отрицательное, поэтому используйте положительное 'do they' для баланса утверждения."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "We're having dinner at the new restaurant tonight, ____?",
            correctAnswer: "aren't we",
            options: ["aren't we", "are we", "don't we", "do we"],
            correctFeedback: "Fantastic! 'Aren't we' is correct because 'we're having' is present continuous positive for future plans.",
            correctFeedbackRu: "Фантастически! 'Aren't we' правильно, потому что 'we're having' - это present continuous положительное для будущих планов.",
            incorrectFeedback: "Present continuous for future plans uses 'are/aren't' in question tags. 'We're having' is positive, so use 'aren't we'.",
            incorrectFeedbackRu: "Present continuous для будущих планов использует 'are/aren't' в разделительных вопросах. 'We're having' положительное, поэтому используйте 'aren't we'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The movie hasn't started yet, ____?",
            correctAnswer: "has it",
            options: ["has it", "hasn't it", "is it", "isn't it"],
            correctFeedback: "Great! 'Has it' is correct because 'hasn't started' is present perfect negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Has it' правильно, потому что 'hasn't started' - это present perfect отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Present perfect negative needs positive question tag. 'Hasn't started' is negative, so use 'has it'.",
            incorrectFeedbackRu: "Present perfect отрицательное нуждается в положительном разделительном вопросе. 'Hasn't started' отрицательное, поэтому используйте 'has it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You'll be able to help us move next weekend, ____?",
            correctAnswer: "won't you",
            options: ["won't you", "will you", "can't you", "can you"],
            correctFeedback: "Perfect! 'Won't you' is correct because 'you'll be able' uses 'will' as the auxiliary verb for future ability.",
            correctFeedbackRu: "Идеально! 'Won't you' правильно, потому что 'you'll be able' использует 'will' как вспомогательный глагол для будущей способности.",
            incorrectFeedback: "'Will be able to' uses 'will' as the auxiliary, not 'can'. 'You'll be able' is positive, so use 'won't you'.",
            incorrectFeedbackRu: "'Will be able to' использует 'will' как вспомогательный глагол, не 'can'. 'You'll be able' положительное, поэтому используйте 'won't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "It's quite expensive to eat out these days, ____?",
            correctAnswer: "isn't it",
            options: ["isn't it", "is it", "doesn't it", "does it"],
            correctFeedback: "Excellent! 'Isn't it' is correct because 'it's expensive' uses the verb 'be' and is positive.",
            correctFeedbackRu: "Отлично! 'Isn't it' правильно, потому что 'it's expensive' использует глагол 'be' и является положительным.",
            incorrectFeedback: "'It's expensive' uses the verb 'be'. Since it's positive, use negative 'isn't it'.",
            incorrectFeedbackRu: "'It's expensive' использует глагол 'be'. Поскольку это положительное, используйте отрицательное 'isn't it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You didn't remember to bring your passport, ____?",
            correctAnswer: "did you",
            options: ["did you", "didn't you", "do you", "don't you"],
            correctFeedback: "Fantastic! 'Did you' is correct because 'didn't remember' is past simple negative, so we need positive question tag.",
            correctFeedbackRu: "Фантастически! 'Did you' правильно, потому что 'didn't remember' - это past simple отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Didn't remember' is past simple negative. Use positive 'did you' to balance the statement.",
            incorrectFeedbackRu: "'Didn't remember' - это past simple отрицательное. Используйте положительное 'did you' для баланса утверждения."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The children are sleeping peacefully, ____?",
            correctAnswer: "aren't they",
            options: ["aren't they", "are they", "don't they", "do they"],
            correctFeedback: "Great! 'Aren't they' is correct because 'are sleeping' is present continuous positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Aren't they' правильно, потому что 'are sleeping' - это present continuous положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Present continuous uses 'are/aren't' in question tags. 'Are sleeping' is positive, so use 'aren't they'.",
            incorrectFeedbackRu: "Present continuous использует 'are/aren't' в разделительных вопросах. 'Are sleeping' положительное, поэтому используйте 'aren't they'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You need to finish this report by tomorrow, ____?",
            correctAnswer: "don't you",
            options: ["don't you", "do you", "need you", "needn't you"],
            correctFeedback: "Perfect! 'Don't you' is correct because 'need' here is a regular verb, not a modal, so it uses 'do/don't'.",
            correctFeedbackRu: "Идеально! 'Don't you' правильно, потому что 'need' здесь обычный глагол, не модальный, поэтому использует 'do/don't'.",
            incorrectFeedback: "'Need' as a regular verb uses 'do/don't' in question tags. 'Need to finish' is positive, so use 'don't you'.",
            incorrectFeedbackRu: "'Need' как обычный глагол использует 'do/don't' в разделительных вопросах. 'Need to finish' положительное, поэтому используйте 'don't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Your sister works as a teacher now, ____?",
            correctAnswer: "doesn't she",
            options: ["doesn't she", "does she", "isn't she", "is she"],
            correctFeedback: "Excellent! 'Doesn't she' is correct because 'works' is present simple positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Doesn't she' правильно, потому что 'works' - это present simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "'Works' is present simple positive. Use negative 'doesn't she' to balance the statement.",
            incorrectFeedbackRu: "'Works' - это present simple положительное. Используйте отрицательное 'doesn't she' для баланса утверждения."
        }
    ]
};

/* ============================================
Page 5: Question Tags - Daily Activities and Opinions
============================================ */
window.grammarExercises['questions']['question-tags-gap-page5'] = {
    title: "Question Tags - Daily Activities and Opinions",
    fillGaps: [
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You think this book is really interesting, ____?",
            correctAnswer: "don't you",
            options: ["don't you", "do you", "aren't you", "are you"],
            correctFeedback: "Perfect! 'Don't you' is correct because 'think' is present simple positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Don't you' правильно, потому что 'think' - это present simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "'You think' is present simple positive. Use negative 'don't you' for the question tag.",
            incorrectFeedbackRu: "'You think' - это present simple положительное. Используйте отрицательное 'don't you' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The weather was terrible yesterday, ____?",
            correctAnswer: "wasn't it",
            options: ["wasn't it", "was it", "didn't it", "did it"],
            correctFeedback: "Excellent! 'Wasn't it' is correct because 'was terrible' is past 'be' positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Wasn't it' правильно, потому что 'was terrible' - это прошедшее 'be' положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Past tense 'be' forms its own question tags. 'Was terrible' is positive, so use 'wasn't it'.",
            incorrectFeedbackRu: "Прошедшее время 'be' формирует свои собственные разделительные вопросы. 'Was terrible' положительное, поэтому используйте 'wasn't it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You're not going to quit your job, ____?",
            correctAnswer: "are you",
            options: ["are you", "aren't you", "do you", "don't you"],
            correctFeedback: "Fantastic! 'Are you' is correct because 'you're not going' is negative future with 'be', so we need positive question tag.",
            correctFeedbackRu: "Фантастически! 'Are you' правильно, потому что 'you're not going' - это отрицательное будущее с 'be', поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'You're not going' is negative with 'be'. Use positive 'are you' to balance the statement.",
            incorrectFeedbackRu: "'You're not going' отрицательное с 'be'. Используйте положительное 'are you' для баланса утверждения."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The coffee tastes really good today, ____?",
            correctAnswer: "doesn't it",
            options: ["doesn't it", "does it", "isn't it", "is it"],
            correctFeedback: "Great! 'Doesn't it' is correct because 'tastes good' is present simple positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Doesn't it' правильно, потому что 'tastes good' - это present simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "'Tastes good' is present simple positive. Use negative 'doesn't it' for the question tag.",
            incorrectFeedbackRu: "'Tastes good' - это present simple положительное. Используйте отрицательное 'doesn't it' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You haven't done your shopping yet, ____?",
            correctAnswer: "have you",
            options: ["have you", "haven't you", "do you", "don't you"],
            correctFeedback: "Perfect! 'Have you' is correct because 'haven't done' is present perfect negative, so we need positive question tag.",
            correctFeedbackRu: "Идеально! 'Have you' правильно, потому что 'haven't done' - это present perfect отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Present perfect negative needs positive question tag. 'Haven't done' is negative, so use 'have you'.",
            incorrectFeedbackRu: "Present perfect отрицательное нуждается в положительном разделительном вопросе. 'Haven't done' отрицательное, поэтому используйте 'have you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "She can speak three languages fluently, ____?",
            correctAnswer: "can't she",
            options: ["can't she", "can she", "doesn't she", "does she"],
            correctFeedback: "Excellent! 'Can't she' is correct because 'can speak' is modal positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Can't she' правильно, потому что 'can speak' - это модальный положительный, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Modal verbs like 'can' form their own question tags. 'Can speak' is positive, so use 'can't she'.",
            incorrectFeedbackRu: "Модальные глаголы как 'can' формируют свои собственные разделительные вопросы. 'Can speak' положительное, поэтому используйте 'can't she'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "We walked for hours without stopping, ____?",
            correctAnswer: "didn't we",
            options: ["didn't we", "did we", "weren't we", "were we"],
            correctFeedback: "Fantastic! 'Didn't we' is correct because 'walked' is past simple positive, so we need negative question tag.",
            correctFeedbackRu: "Фантастически! 'Didn't we' правильно, потому что 'walked' - это past simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Past simple verbs use 'did/didn't' in question tags. 'Walked' is positive, so use 'didn't we'.",
            incorrectFeedbackRu: "Глаголы в past simple используют 'did/didn't' в разделительных вопросах. 'Walked' положительное, поэтому используйте 'didn't we'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You wouldn't mind waiting a few more minutes, ____?",
            correctAnswer: "would you",
            options: ["would you", "wouldn't you", "do you", "don't you"],
            correctFeedback: "Great! 'Would you' is correct because 'wouldn't mind' is conditional negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Would you' правильно, потому что 'wouldn't mind' - это условное отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Wouldn't mind' is conditional negative. Use positive 'would you' to balance the statement.",
            incorrectFeedbackRu: "'Wouldn't mind' - это условное отрицательное. Используйте положительное 'would you' для баланса утверждения."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The bus doesn't run on Sundays, ____?",
            correctAnswer: "does it",
            options: ["does it", "doesn't it", "is it", "isn't it"],
            correctFeedback: "Perfect! 'Does it' is correct because 'doesn't run' is present simple negative, so we need positive question tag.",
            correctFeedbackRu: "Идеально! 'Does it' правильно, потому что 'doesn't run' - это present simple отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Doesn't run' is present simple negative. Use positive 'does it' for the question tag.",
            incorrectFeedbackRu: "'Doesn't run' - это present simple отрицательное. Используйте положительное 'does it' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "I'm getting better at playing the guitar, ____?",
            correctAnswer: "aren't I",
            options: ["aren't I", "am I", "don't I", "do I"],
            correctFeedback: "Excellent! 'Aren't I' is correct because 'I'm getting' uses the special form 'aren't I' for 'I am' in question tags.",
            correctFeedbackRu: "Отлично! 'Aren't I' правильно, потому что 'I'm getting' использует особую форму 'aren't I' для 'I am' в разделительных вопросах.",
            incorrectFeedback: "'I am' has a special question tag form: 'aren't I'. This is the accepted standard in English.",
            incorrectFeedbackRu: "'I am' имеет особую форму разделительного вопроса: 'aren't I'. Это принятый стандарт в английском языке."
        }
    ]
};

/* ============================================
Page 6: Question Tags - Social and Travel Situations
============================================ */
window.grammarExercises['questions']['question-tags-gap-page6'] = {
    title: "Question Tags - Social and Travel Situations",
    fillGaps: [
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You've been to that new cafe downtown, ____?",
            correctAnswer: "haven't you",
            options: ["haven't you", "have you", "don't you", "do you"],
            correctFeedback: "Perfect! 'Haven't you' is correct because 'you've been' is present perfect positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Haven't you' правильно, потому что 'you've been' - это present perfect положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Present perfect uses 'have/haven't' in question tags. 'You've been' is positive, so use 'haven't you'.",
            incorrectFeedbackRu: "Present perfect использует 'have/haven't' в разделительных вопросах. 'You've been' положительное, поэтому используйте 'haven't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The hotel room wasn't very clean, ____?",
            correctAnswer: "was it",
            options: ["was it", "wasn't it", "did it", "didn't it"],
            correctFeedback: "Excellent! 'Was it' is correct because 'wasn't very clean' is past 'be' negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Was it' правильно, потому что 'wasn't very clean' - это прошедшее 'be' отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Past tense 'be' forms its own question tags. 'Wasn't clean' is negative, so use positive 'was it'.",
            incorrectFeedbackRu: "Прошедшее время 'be' формирует свои собственные разделительные вопросы. 'Wasn't clean' отрицательное, поэтому используйте положительное 'was it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "We should book our flights soon, ____?",
            correctAnswer: "shouldn't we",
            options: ["shouldn't we", "should we", "don't we", "do we"],
            correctFeedback: "Fantastic! 'Shouldn't we' is correct because 'should book' is modal positive, so we need negative question tag.",
            correctFeedbackRu: "Фантастически! 'Shouldn't we' правильно, потому что 'should book' - это модальный положительный, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Modal verbs like 'should' form their own question tags. 'Should book' is positive, so use 'shouldn't we'.",
            incorrectFeedbackRu: "Модальные глаголы как 'should' формируют свои собственные разделительные вопросы. 'Should book' положительное, поэтому используйте 'shouldn't we'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You're meeting your friends at the airport, ____?",
            correctAnswer: "aren't you",
            options: ["aren't you", "are you", "don't you", "do you"],
            correctFeedback: "Great! 'Aren't you' is correct because 'you're meeting' is present continuous positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Aren't you' правильно, потому что 'you're meeting' - это present continuous положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Present continuous uses 'are/aren't' in question tags. 'You're meeting' is positive, so use 'aren't you'.",
            incorrectFeedbackRu: "Present continuous использует 'are/aren't' в разделительных вопросах. 'You're meeting' положительное, поэтому используйте 'aren't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The party didn't end until very late, ____?",
            correctAnswer: "did it",
            options: ["did it", "didn't it", "was it", "wasn't it"],
            correctFeedback: "Perfect! 'Did it' is correct because 'didn't end' is past simple negative, so we need positive question tag.",
            correctFeedbackRu: "Идеально! 'Did it' правильно, потому что 'didn't end' - это past simple отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Past simple negative needs positive question tag. 'Didn't end' is negative, so use 'did it'.",
            incorrectFeedbackRu: "Past simple отрицательное нуждается в положительном разделительном вопросе. 'Didn't end' отрицательное, поэтому используйте 'did it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "There are so many tourists here in summer, ____?",
            correctAnswer: "aren't there",
            options: ["aren't there", "are there", "isn't there", "is there"],
            correctFeedback: "Excellent! 'Aren't there' is correct because 'there are' structures keep 'there' in the question tag and it's positive.",
            correctFeedbackRu: "Отлично! 'Aren't there' правильно, потому что структуры 'there are' сохраняют 'there' в разделительном вопросе и это положительное.",
            incorrectFeedback: "'There are' structures always use 'there' in the question tag. Since it's positive, use 'aren't there'.",
            incorrectFeedbackRu: "Структуры 'There are' всегда используют 'there' в разделительном вопросе. Поскольку это положительное, используйте 'aren't there'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You couldn't find a good restaurant nearby, ____?",
            correctAnswer: "could you",
            options: ["could you", "couldn't you", "did you", "didn't you"],
            correctFeedback: "Fantastic! 'Could you' is correct because 'couldn't find' is past modal negative, so we need positive question tag.",
            correctFeedbackRu: "Фантастически! 'Could you' правильно, потому что 'couldn't find' - это прошедший модальный отрицательный, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Past modal verbs form their own question tags. 'Couldn't find' is negative, so use positive 'could you'.",
            incorrectFeedbackRu: "Прошедшие модальные глаголы формируют свои собственные разделительные вопросы. 'Couldn't find' отрицательное, поэтому используйте положительное 'could you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "It looks like it's going to rain soon, ____?",
            correctAnswer: "doesn't it",
            options: ["doesn't it", "does it", "isn't it", "is it"],
            correctFeedback: "Great! 'Doesn't it' is correct because 'looks like' is present simple positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Doesn't it' правильно, потому что 'looks like' - это present simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "'Looks like' is present simple positive. Use negative 'doesn't it' for the question tag.",
            incorrectFeedbackRu: "'Looks like' - это present simple положительное. Используйте отрицательное 'doesn't it' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Your vacation was absolutely amazing, ____?",
            correctAnswer: "wasn't it",
            options: ["wasn't it", "was it", "didn't it", "did it"],
            correctFeedback: "Perfect! 'Wasn't it' is correct because 'was amazing' is past 'be' positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Wasn't it' правильно, потому что 'was amazing' - это прошедшее 'be' положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Past tense 'be' forms its own question tags. 'Was amazing' is positive, so use 'wasn't it'.",
            incorrectFeedbackRu: "Прошедшее время 'be' формирует свои собственные разделительные вопросы. 'Was amazing' положительное, поэтому используйте 'wasn't it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You won't be traveling alone this time, ____?",
            correctAnswer: "will you",
            options: ["will you", "won't you", "are you", "aren't you"],
            correctFeedback: "Excellent! 'Will you' is correct because 'won't be traveling' is future negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Will you' правильно, потому что 'won't be traveling' - это будущее отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Future negative needs positive question tag. 'Won't be traveling' is negative, so use 'will you'.",
            incorrectFeedbackRu: "Будущее отрицательное нуждается в положительном разделительном вопросе. 'Won't be traveling' отрицательное, поэтому используйте 'will you'."
        }
    ]
};

/* ============================================
Page 7: Question Tags - Health, Study and Work
============================================ */
window.grammarExercises['questions']['question-tags-gap-page7'] = {
    title: "Question Tags - Health, Study and Work",
    fillGaps: [
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You've been studying English for two years now, ____?",
            correctAnswer: "haven't you",
            options: ["haven't you", "have you", "aren't you", "are you"],
            correctFeedback: "Perfect! 'Haven't you' is correct because 'you've been studying' is present perfect continuous positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Haven't you' правильно, потому что 'you've been studying' - это present perfect continuous положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Present perfect continuous uses 'have/haven't' in question tags. 'You've been studying' is positive, so use 'haven't you'.",
            incorrectFeedbackRu: "Present perfect continuous использует 'have/haven't' в разделительных вопросах. 'You've been studying' положительное, поэтому используйте 'haven't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The doctor said you need more rest, ____?",
            correctAnswer: "didn't he",
            options: ["didn't he", "did he", "doesn't he", "does he"],
            correctFeedback: "Excellent! 'Didn't he' is correct because 'said' is past simple positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Didn't he' правильно, потому что 'said' - это past simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Past simple verbs use 'did/didn't' in question tags. 'Said' is positive, so use 'didn't he'.",
            incorrectFeedbackRu: "Глаголы в past simple используют 'did/didn't' в разделительных вопросах. 'Said' положительное, поэтому используйте 'didn't he'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You're not feeling sick today, ____?",
            correctAnswer: "are you",
            options: ["are you", "aren't you", "do you", "don't you"],
            correctFeedback: "Fantastic! 'Are you' is correct because 'you're not feeling' is present continuous negative, so we need positive question tag.",
            correctFeedbackRu: "Фантастически! 'Are you' правильно, потому что 'you're not feeling' - это present continuous отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'You're not feeling' is present continuous negative. Use positive 'are you' to balance the statement.",
            incorrectFeedbackRu: "'You're not feeling' - это present continuous отрицательное. Используйте положительное 'are you' для баланса утверждения."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The meeting will start at ten o'clock sharp, ____?",
            correctAnswer: "won't it",
            options: ["won't it", "will it", "doesn't it", "does it"],
            correctFeedback: "Great! 'Won't it' is correct because 'will start' is future positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Won't it' правильно, потому что 'will start' - это будущее положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Future tense uses 'will/won't' in question tags. 'Will start' is positive, so use 'won't it'.",
            incorrectFeedbackRu: "Будущее время использует 'will/won't' в разделительных вопросах. 'Will start' положительное, поэтому используйте 'won't it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You had to work overtime last week, ____?",
            correctAnswer: "didn't you",
            options: ["didn't you", "did you", "hadn't you", "had you"],
            correctFeedback: "Perfect! 'Didn't you' is correct because 'had to work' uses 'did/didn't' in question tags, not 'had/hadn't'.",
            correctFeedbackRu: "Идеально! 'Didn't you' правильно, потому что 'had to work' использует 'did/didn't' в разделительных вопросах, не 'had/hadn't'.",
            incorrectFeedback: "'Had to' for obligation uses 'did/didn't' in question tags. 'Had to work' is positive, so use 'didn't you'.",
            incorrectFeedbackRu: "'Had to' для обязательства использует 'did/didn't' в разделительных вопросах. 'Had to work' положительное, поэтому используйте 'didn't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "She isn't coming to the conference next month, ____?",
            correctAnswer: "is she",
            options: ["is she", "isn't she", "does she", "doesn't she"],
            correctFeedback: "Excellent! 'Is she' is correct because 'isn't coming' is present continuous negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Is she' правильно, потому что 'isn't coming' - это present continuous отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Isn't coming' is present continuous negative. Use positive 'is she' for the question tag.",
            incorrectFeedbackRu: "'Isn't coming' - это present continuous отрицательное. Используйте положительное 'is she' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You can work from home on Fridays, ____?",
            correctAnswer: "can't you",
            options: ["can't you", "can you", "don't you", "do you"],
            correctFeedback: "Fantastic! 'Can't you' is correct because 'can work' is modal positive, so we need negative question tag.",
            correctFeedbackRu: "Фантастически! 'Can't you' правильно, потому что 'can work' - это модальный положительный, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Modal verbs like 'can' form their own question tags. 'Can work' is positive, so use 'can't you'.",
            incorrectFeedbackRu: "Модальные глаголы как 'can' формируют свои собственные разделительные вопросы. 'Can work' положительное, поэтому используйте 'can't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The exam wasn't as difficult as expected, ____?",
            correctAnswer: "was it",
            options: ["was it", "wasn't it", "did it", "didn't it"],
            correctFeedback: "Great! 'Was it' is correct because 'wasn't difficult' is past 'be' negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Was it' правильно, потому что 'wasn't difficult' - это прошедшее 'be' отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Past tense 'be' forms its own question tags. 'Wasn't difficult' is negative, so use positive 'was it'.",
            incorrectFeedbackRu: "Прошедшее время 'be' формирует свои собственные разделительные вопросы. 'Wasn't difficult' отрицательное, поэтому используйте положительное 'was it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You've already submitted your assignment, ____?",
            correctAnswer: "haven't you",
            options: ["haven't you", "have you", "don't you", "do you"],
            correctFeedback: "Perfect! 'Haven't you' is correct because 'you've submitted' is present perfect positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Haven't you' правильно, потому что 'you've submitted' - это present perfect положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Present perfect uses 'have/haven't' in question tags. 'You've submitted' is positive, so use 'haven't you'.",
            incorrectFeedbackRu: "Present perfect использует 'have/haven't' в разделительных вопросах. 'You've submitted' положительное, поэтому используйте 'haven't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The new employee seems really nice, ____?",
            correctAnswer: "doesn't he",
            options: ["doesn't he", "does he", "isn't he", "is he"],
            correctFeedback: "Excellent! 'Doesn't he' is correct because 'seems' is present simple positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Doesn't he' правильно, потому что 'seems' - это present simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "'Seems' is present simple positive. Use negative 'doesn't he' for the question tag.",
            incorrectFeedbackRu: "'Seems' - это present simple положительное. Используйте отрицательное 'doesn't he' для разделительного вопроса."
        }
    ]
};

/* ============================================
Page 8: Question Tags Fill in the Gaps - Shopping and Entertainment (B1)
============================================ */
window.grammarExercises['questions']['question-tags-gap-page8'] = {
    title: "Question Tags - Shopping and Entertainment",
    fillGaps: [
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The shop closes at six on weekdays, ____?",
            correctAnswer: "doesn't it",
            options: ["doesn't it", "does it", "isn't it", "is it"],
            correctFeedback: "Perfect! 'Doesn't it' is correct because 'closes' is present simple positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Doesn't it' правильно, потому что 'closes' - это present simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "'Closes' is present simple positive. Use negative 'doesn't it' for the question tag.",
            incorrectFeedbackRu: "'Closes' - это present simple положительное. Используйте отрицательное 'doesn't it' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You haven't bought anything yet, ____?",
            correctAnswer: "have you",
            options: ["have you", "haven't you", "do you", "don't you"],
            correctFeedback: "Excellent! 'Have you' is correct because 'haven't bought' is present perfect negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Have you' правильно, потому что 'haven't bought' - это present perfect отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Present perfect negative needs positive question tag. 'Haven't bought' is negative, so use 'have you'.",
            incorrectFeedbackRu: "Present perfect отрицательное нуждается в положительном разделительном вопросе. 'Haven't bought' отрицательное, поэтому используйте 'have you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The film was quite boring, ____?",
            correctAnswer: "wasn't it",
            options: ["wasn't it", "was it", "didn't it", "did it"],
            correctFeedback: "Fantastic! 'Wasn't it' is correct because 'was boring' is past 'be' positive, so we need negative question tag.",
            correctFeedbackRu: "Фантастически! 'Wasn't it' правильно, потому что 'was boring' - это прошедшее 'be' положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Past tense 'be' forms its own question tags. 'Was boring' is positive, so use 'wasn't it'.",
            incorrectFeedbackRu: "Прошедшее время 'be' формирует свои собственные разделительные вопросы. 'Was boring' положительное, поэтому используйте 'wasn't it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You're going to buy those shoes, ____?",
            correctAnswer: "aren't you",
            options: ["aren't you", "are you", "will you", "won't you"],
            correctFeedback: "Great! 'Aren't you' is correct because 'you're going to buy' uses 'be going to' for future plans.",
            correctFeedbackRu: "Отлично! 'Aren't you' правильно, потому что 'you're going to buy' использует 'be going to' для будущих планов.",
            incorrectFeedback: "'Going to' future uses 'are/aren't' in question tags. 'You're going to buy' is positive, so use 'aren't you'.",
            incorrectFeedbackRu: "Будущее с 'going to' использует 'are/aren't' в разделительных вопросах. 'You're going to buy' положительное, поэтому используйте 'aren't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The concert tickets weren't very expensive, ____?",
            correctAnswer: "were they",
            options: ["were they", "weren't they", "did they", "didn't they"],
            correctFeedback: "Perfect! 'Were they' is correct because 'weren't expensive' is past 'be' negative, so we need positive question tag.",
            correctFeedbackRu: "Идеально! 'Were they' правильно, потому что 'weren't expensive' - это прошедшее 'be' отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Past tense 'be' forms its own question tags. 'Weren't expensive' is negative, so use positive 'were they'.",
            incorrectFeedbackRu: "Прошедшее время 'be' формирует свои собственные разделительные вопросы. 'Weren't expensive' отрицательное, поэтому используйте положительное 'were they'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "We could go shopping this afternoon, ____?",
            correctAnswer: "couldn't we",
            options: ["couldn't we", "could we", "don't we", "do we"],
            correctFeedback: "Excellent! 'Couldn't we' is correct because 'could go' is modal positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Couldn't we' правильно, потому что 'could go' - это модальный положительный, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Modal verbs like 'could' form their own question tags. 'Could go' is positive, so use 'couldn't we'.",
            incorrectFeedbackRu: "Модальные глаголы как 'could' формируют свои собственные разделительные вопросы. 'Could go' положительное, поэтому используйте 'couldn't we'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The new shopping center opens next week, ____?",
            correctAnswer: "doesn't it",
            options: ["doesn't it", "does it", "won't it", "will it"],
            correctFeedback: "Fantastic! 'Doesn't it' is correct because 'opens' is present simple positive for scheduled events.",
            correctFeedbackRu: "Фантастически! 'Doesn't it' правильно, потому что 'opens' - это present simple положительное для запланированных событий.",
            incorrectFeedback: "Scheduled events use present simple even for future. 'Opens' is positive, so use 'doesn't it'.",
            incorrectFeedbackRu: "Запланированные события используют present simple даже для будущего. 'Opens' положительное, поэтому используйте 'doesn't it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You don't usually watch horror movies, ____?",
            correctAnswer: "do you",
            options: ["do you", "don't you", "are you", "aren't you"],
            correctFeedback: "Great! 'Do you' is correct because 'don't usually watch' is present simple negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Do you' правильно, потому что 'don't usually watch' - это present simple отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Don't usually watch' is present simple negative. Use positive 'do you' for the question tag.",
            incorrectFeedbackRu: "'Don't usually watch' - это present simple отрицательное. Используйте положительное 'do you' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The restaurant serves really good food, ____?",
            correctAnswer: "doesn't it",
            options: ["doesn't it", "does it", "isn't it", "is it"],
            correctFeedback: "Perfect! 'Doesn't it' is correct because 'serves' is present simple positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Doesn't it' правильно, потому что 'serves' - это present simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "'Serves' is present simple positive. Use negative 'doesn't it' for the question tag.",
            incorrectFeedbackRu: "'Serves' - это present simple положительное. Используйте отрицательное 'doesn't it' для разделительного вопроса."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You've", "seen", "this", "movie", "before,", "haven't", "you?"],
            correctAnswer: "You've seen this movie before, haven't you?",
            correctFeedback: "Excellent! 'You've seen this movie before, haven't you?' is correct. Great entertainment experience question tag!",
            correctFeedbackRu: "Отлично! 'You've seen this movie before, haven't you?' верно. Отличный разделительный вопрос опыта развлечений!",
            incorrectFeedback: "Try again. Remember: present perfect positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect положительное нуждается в отрицательном разделительном вопросе."
        }
    ]
};

/* ============================================
Page 9: Question Tags Fill in the Gaps - Sports and Hobbies (B1)
============================================ */
window.grammarExercises['questions']['question-tags-gap-page9'] = {
    title: "Question Tags - Sports and Hobbies",
    fillGaps: [
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You play tennis every weekend, ____?",
            correctAnswer: "don't you",
            options: ["don't you", "do you", "aren't you", "are you"],
            correctFeedback: "Perfect! 'Don't you' is correct because 'play' is present simple positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Don't you' правильно, потому что 'play' - это present simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "'Play' is present simple positive. Use negative 'don't you' for the question tag.",
            incorrectFeedbackRu: "'Play' - это present simple положительное. Используйте отрицательное 'don't you' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The game hasn't finished yet, ____?",
            correctAnswer: "has it",
            options: ["has it", "hasn't it", "is it", "isn't it"],
            correctFeedback: "Excellent! 'Has it' is correct because 'hasn't finished' is present perfect negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Has it' правильно, потому что 'hasn't finished' - это present perfect отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Present perfect negative needs positive question tag. 'Hasn't finished' is negative, so use 'has it'.",
            incorrectFeedbackRu: "Present perfect отрицательное нуждается в положительном разделительном вопросе. 'Hasn't finished' отрицательное, поэтому используйте 'has it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "She's been practicing piano for hours, ____?",
            correctAnswer: "hasn't she",
            options: ["hasn't she", "has she", "isn't she", "is she"],
            correctFeedback: "Fantastic! 'Hasn't she' is correct because 'she's been practicing' is present perfect continuous positive, so we need negative question tag.",
            correctFeedbackRu: "Фантастически! 'Hasn't she' правильно, потому что 'she's been practicing' - это present perfect continuous положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Present perfect continuous uses 'has/hasn't' in question tags. 'She's been practicing' is positive, so use 'hasn't she'.",
            incorrectFeedbackRu: "Present perfect continuous использует 'has/hasn't' в разделительных вопросах. 'She's been practicing' положительное, поэтому используйте 'hasn't she'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You can't swim very well, ____?",
            correctAnswer: "can you",
            options: ["can you", "can't you", "do you", "don't you"],
            correctFeedback: "Great! 'Can you' is correct because 'can't swim' is modal negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Can you' правильно, потому что 'can't swim' - это модальный отрицательный, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Modal verbs form their own question tags. 'Can't swim' is negative, so use positive 'can you'.",
            incorrectFeedbackRu: "Модальные глаголы формируют свои собственные разделительные вопросы. 'Can't swim' отрицательное, поэтому используйте положительное 'can you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The team won the championship last year, ____?",
            correctAnswer: "didn't they",
            options: ["didn't they", "did they", "weren't they", "were they"],
            correctFeedback: "Perfect! 'Didn't they' is correct because 'won' is past simple positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Didn't they' правильно, потому что 'won' - это past simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Past simple verbs use 'did/didn't' in question tags. 'Won' is positive, so use 'didn't they'.",
            incorrectFeedbackRu: "Глаголы в past simple используют 'did/didn't' в разделительных вопросах. 'Won' положительное, поэтому используйте 'didn't they'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You're not interested in football, ____?",
            correctAnswer: "are you",
            options: ["are you", "aren't you", "do you", "don't you"],
            correctFeedback: "Excellent! 'Are you' is correct because 'you're not interested' is negative with 'be', so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Are you' правильно, потому что 'you're not interested' отрицательное с 'be', поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'You're not interested' is negative with 'be'. Use positive 'are you' for the question tag.",
            incorrectFeedbackRu: "'You're not interested' отрицательное с 'be'. Используйте положительное 'are you' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "We should go jogging tomorrow morning, ____?",
            correctAnswer: "shouldn't we",
            options: ["shouldn't we", "should we", "don't we", "do we"],
            correctFeedback: "Fantastic! 'Shouldn't we' is correct because 'should go' is modal positive, so we need negative question tag.",
            correctFeedbackRu: "Фантастически! 'Shouldn't we' правильно, потому что 'should go' - это модальный положительный, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Modal verbs like 'should' form their own question tags. 'Should go' is positive, so use 'shouldn't we'.",
            incorrectFeedbackRu: "Модальные глаголы как 'should' формируют свои собственные разделительные вопросы. 'Should go' положительное, поэтому используйте 'shouldn't we'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "The match was really exciting, ____?",
            correctAnswer: "wasn't it",
            options: ["wasn't it", "was it", "didn't it", "did it"],
            correctFeedback: "Great! 'Wasn't it' is correct because 'was exciting' is past 'be' positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Wasn't it' правильно, потому что 'was exciting' - это прошедшее 'be' положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Past tense 'be' forms its own question tags. 'Was exciting' is positive, so use 'wasn't it'.",
            incorrectFeedbackRu: "Прошедшее время 'be' формирует свои собственные разделительные вопросы. 'Was exciting' положительное, поэтому используйте 'wasn't it'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You didn't attend the sports club meeting, ____?",
            correctAnswer: "did you",
            options: ["did you", "didn't you", "were you", "weren't you"],
            correctFeedback: "Perfect! 'Did you' is correct because 'didn't attend' is past simple negative, so we need positive question tag.",
            correctFeedbackRu: "Идеально! 'Did you' правильно, потому что 'didn't attend' - это past simple отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Past simple negative needs positive question tag. 'Didn't attend' is negative, so use 'did you'.",
            incorrectFeedbackRu: "Past simple отрицательное нуждается в положительном разделительном вопросе. 'Didn't attend' отрицательное, поэтому используйте 'did you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Your hobby is collecting stamps, ____?",
            correctAnswer: "isn't it",
            options: ["isn't it", "is it", "doesn't it", "does it"],
            correctFeedback: "Excellent! 'Isn't it' is correct because 'is collecting' uses the verb 'be' and is positive.",
            correctFeedbackRu: "Отлично! 'Isn't it' правильно, потому что 'is collecting' использует глагол 'be' и является положительным.",
            incorrectFeedback: "'Is collecting' uses the verb 'be'. Since it's positive, use negative 'isn't it'.",
            incorrectFeedbackRu: "'Is collecting' использует глагол 'be'. Поскольку это положительное, используйте отрицательное 'isn't it'."
        }
    ]
};

/* ============================================
Page 10: Question Tags Fill in the Gaps - Family and Relationships (B1)
============================================ */
window.grammarExercises['questions']['question-tags-gap-page10'] = {
    title: "Question Tags - Family and Relationships",
    fillGaps: [
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Your brother lives in another city, ____?",
            correctAnswer: "doesn't he",
            options: ["doesn't he", "does he", "isn't he", "is he"],
            correctFeedback: "Perfect! 'Doesn't he' is correct because 'lives' is present simple positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Doesn't he' правильно, потому что 'lives' - это present simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "'Lives' is present simple positive. Use negative 'doesn't he' for the question tag.",
            incorrectFeedbackRu: "'Lives' - это present simple положительное. Используйте отрицательное 'doesn't he' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You haven't met my girlfriend yet, ____?",
            correctAnswer: "have you",
            options: ["have you", "haven't you", "do you", "don't you"],
            correctFeedback: "Excellent! 'Have you' is correct because 'haven't met' is present perfect negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Have you' правильно, потому что 'haven't met' - это present perfect отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Present perfect negative needs positive question tag. 'Haven't met' is negative, so use 'have you'.",
            incorrectFeedbackRu: "Present perfect отрицательное нуждается в положительном разделительном вопросе. 'Haven't met' отрицательное, поэтому используйте 'have you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "She's getting married next month, ____?",
            correctAnswer: "isn't she",
            options: ["isn't she", "is she", "doesn't she", "does she"],
            correctFeedback: "Fantastic! 'Isn't she' is correct because 'she's getting married' is present continuous positive for future arrangements.",
            correctFeedbackRu: "Фантастически! 'Isn't she' правильно, потому что 'she's getting married' - это present continuous положительное для будущих договоренностей.",
            incorrectFeedback: "Present continuous for future arrangements uses 'is/isn't'. 'She's getting married' is positive, so use 'isn't she'.",
            incorrectFeedbackRu: "Present continuous для будущих договоренностей использует 'is/isn't'. 'She's getting married' положительное, поэтому используйте 'isn't she'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Your parents don't live together anymore, ____?",
            correctAnswer: "do they",
            options: ["do they", "don't they", "are they", "aren't they"],
            correctFeedback: "Great! 'Do they' is correct because 'don't live' is present simple negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Do they' правильно, потому что 'don't live' - это present simple отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "'Don't live' is present simple negative. Use positive 'do they' for the question tag.",
            incorrectFeedbackRu: "'Don't live' - это present simple отрицательное. Используйте положительное 'do they' для разделительного вопроса."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "We spent a lovely evening with your family, ____?",
            correctAnswer: "didn't we",
            options: ["didn't we", "did we", "weren't we", "were we"],
            correctFeedback: "Perfect! 'Didn't we' is correct because 'spent' is past simple positive, so we need negative question tag.",
            correctFeedbackRu: "Идеально! 'Didn't we' правильно, потому что 'spent' - это past simple положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Past simple verbs use 'did/didn't' in question tags. 'Spent' is positive, so use 'didn't we'.",
            incorrectFeedbackRu: "Глаголы в past simple используют 'did/didn't' в разделительных вопросах. 'Spent' положительное, поэтому используйте 'didn't we'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "Your sister wasn't very happy about the news, ____?",
            correctAnswer: "was she",
            options: ["was she", "wasn't she", "did she", "didn't she"],
            correctFeedback: "Excellent! 'Was she' is correct because 'wasn't happy' is past 'be' negative, so we need positive question tag.",
            correctFeedbackRu: "Отлично! 'Was she' правильно, потому что 'wasn't happy' - это прошедшее 'be' отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Past tense 'be' forms its own question tags. 'Wasn't happy' is negative, so use positive 'was she'.",
            incorrectFeedbackRu: "Прошедшее время 'be' формирует свои собственные разделительные вопросы. 'Wasn't happy' отрицательное, поэтому используйте положительное 'was she'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You should call your grandmother more often, ____?",
            correctAnswer: "shouldn't you",
            options: ["shouldn't you", "should you", "don't you", "do you"],
            correctFeedback: "Fantastic! 'Shouldn't you' is correct because 'should call' is modal positive, so we need negative question tag.",
            correctFeedbackRu: "Фантастически! 'Shouldn't you' правильно, потому что 'should call' - это модальный положительный, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Modal verbs like 'should' form their own question tags. 'Should call' is positive, so use 'shouldn't you'.",
            incorrectFeedbackRu: "Модальные глаголы как 'should' формируют свои собственные разделительные вопросы. 'Should call' положительное, поэтому используйте 'shouldn't you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "They've been together for five years now, ____?",
            correctAnswer: "haven't they",
            options: ["haven't they", "have they", "aren't they", "are they"],
            correctFeedback: "Great! 'Haven't they' is correct because 'they've been together' is present perfect positive, so we need negative question tag.",
            correctFeedbackRu: "Отлично! 'Haven't they' правильно, потому что 'they've been together' - это present perfect положительное, поэтому нам нужен отрицательный разделительный вопрос.",
            incorrectFeedback: "Present perfect uses 'have/haven't' in question tags. 'They've been together' is positive, so use 'haven't they'.",
            incorrectFeedbackRu: "Present perfect использует 'have/haven't' в разделительных вопросах. 'They've been together' положительное, поэтому используйте 'haven't they'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "You won't forget our anniversary this year, ____?",
            correctAnswer: "will you",
            options: ["will you", "won't you", "do you", "don't you"],
            correctFeedback: "Perfect! 'Will you' is correct because 'won't forget' is future negative, so we need positive question tag.",
            correctFeedbackRu: "Идеально! 'Will you' правильно, потому что 'won't forget' - это будущее отрицательное, поэтому нам нужен положительный разделительный вопрос.",
            incorrectFeedback: "Future negative needs positive question tag. 'Won't forget' is negative, so use 'will you'.",
            incorrectFeedbackRu: "Будущее отрицательное нуждается в положительном разделительном вопросе. 'Won't forget' отрицательное, поэтому используйте 'will you'."
        },
        {
            question: "Complete the sentence with the correct question tag:",
            questionRu: "Заполните предложение правильным разделительным вопросом:",
            sentence: "I'm invited to the wedding too, ____?",
            correctAnswer: "aren't I",
            options: ["aren't I", "am I", "don't I", "do I"],
            correctFeedback: "Excellent! 'Aren't I' is correct because 'I'm invited' uses the special form 'aren't I' for 'I am' in question tags.",
            correctFeedbackRu: "Отлично! 'Aren't I' правильно, потому что 'I'm invited' использует особую форму 'aren't I' для 'I am' в разделительных вопросах.",
            incorrectFeedback: "'I am' has a special question tag form: 'aren't I'. This is the accepted standard in English.",
            incorrectFeedbackRu: "'I am' имеет особую форму разделительного вопроса: 'aren't I'. Это принятый стандарт в английском языке."
        }
    ]
};

/* =============================================================================== */
/* =========================Sentence Building Exercises=========================== */

/* ============================================
Page 1: Question Tags Sentence Building - Basic Present and Past (B1)
============================================ */
window.grammarExercises['questions']['question-tags-sentence-page1'] = {
    title: "Question Tags - Basic Present and Past",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "like", "coffee,", "don't", "you?"],
            correctAnswer: "You like coffee, don't you?",
            correctFeedback: "Perfect! 'You like coffee, don't you?' is correct. Great use of positive statement with negative question tag!",
            correctFeedbackRu: "Отлично! 'You like coffee, don't you?' верно. Прекрасное использование положительного утверждения с отрицательным разделительным вопросом!",
            incorrectFeedback: "Try again. Remember: positive statement + comma + negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: положительное утверждение + запятая + отрицательный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["She", "isn't", "coming", "today,", "is", "she?"],
            correctAnswer: "She isn't coming today, is she?",
            correctFeedback: "Excellent! 'She isn't coming today, is she?' is correct. Perfect balance of negative statement with positive question tag!",
            correctFeedbackRu: "Отлично! 'She isn't coming today, is she?' верно. Идеальный баланс отрицательного утверждения с положительным разделительным вопросом!",
            incorrectFeedback: "Try again. Remember: negative statement + comma + positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: отрицательное утверждение + запятая + положительный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["They", "went", "to", "London", "last", "year,", "didn't", "they?"],
            correctAnswer: "They went to London last year, didn't they?",
            correctFeedback: "Fantastic! 'They went to London last year, didn't they?' is correct. Great use of past simple with 'did' in the question tag!",
            correctFeedbackRu: "Фантастически! 'They went to London last year, didn't they?' верно. Отличное использование past simple с 'did' в разделительном вопросе!",
            incorrectFeedback: "Try again. Remember: past simple verb + comma + didn't + pronoun + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: глагол в past simple + запятая + didn't + местоимение + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "weather", "is", "nice", "today,", "isn't", "it?"],
            correctAnswer: "The weather is nice today, isn't it?",
            correctFeedback: "Great! 'The weather is nice today, isn't it?' is correct. Perfect use of 'be' verb in question tags!",
            correctFeedbackRu: "Отлично! 'The weather is nice today, isn't it?' верно. Идеальное использование глагола 'be' в разделительных вопросах!",
            incorrectFeedback: "Try again. Remember: 'be' verb creates its own question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: глагол 'be' создает свой собственный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "can", "drive", "a", "car,", "can't", "you?"],
            correctAnswer: "You can drive a car, can't you?",
            correctFeedback: "Perfect! 'You can drive a car, can't you?' is correct. Excellent use of modal verb in question tags!",
            correctFeedbackRu: "Идеально! 'You can drive a car, can't you?' верно. Отличное использование модального глагола в разделительных вопросах!",
            incorrectFeedback: "Try again. Remember: modal verbs create their own question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: модальные глаголы создают свои собственные разделительные вопросы."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["He", "doesn't", "work", "here", "anymore,", "does", "he?"],
            correctAnswer: "He doesn't work here anymore, does he?",
            correctFeedback: "Excellent! 'He doesn't work here anymore, does he?' is correct. Great understanding of negative to positive flip!",
            correctFeedbackRu: "Отлично! 'He doesn't work here anymore, does he?' верно. Отличное понимание перехода от отрицательного к положительному!",
            incorrectFeedback: "Try again. Remember: negative statement needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: отрицательное утверждение нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["We", "should", "leave", "soon,", "shouldn't", "we?"],
            correctAnswer: "We should leave soon, shouldn't we?",
            correctFeedback: "Fantastic! 'We should leave soon, shouldn't we?' is correct. Perfect modal verb question tag formation!",
            correctFeedbackRu: "Фантастически! 'We should leave soon, shouldn't we?' верно. Идеальное формирование разделительного вопроса с модальным глаголом!",
            incorrectFeedback: "Try again. Remember: 'should' forms its own question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'should' формирует свой собственный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "have", "finished", "your", "homework,", "haven't", "you?"],
            correctAnswer: "You have finished your homework, haven't you?",
            correctFeedback: "Great! 'You have finished your homework, haven't you?' is correct. Excellent present perfect question tag!",
            correctFeedbackRu: "Отлично! 'You have finished your homework, haven't you?' верно. Отличный разделительный вопрос в present perfect!",
            incorrectFeedback: "Try again. Remember: present perfect uses 'have/haven't' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect использует 'have/haven't' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["It", "wasn't", "very", "expensive,", "was", "it?"],
            correctAnswer: "It wasn't very expensive, was it?",
            correctFeedback: "Perfect! 'It wasn't very expensive, was it?' is correct. Great use of past 'be' in question tags!",
            correctFeedbackRu: "Идеально! 'It wasn't very expensive, was it?' верно. Отличное использование прошедшего 'be' в разделительных вопросах!",
            incorrectFeedback: "Try again. Remember: past 'be' forms its own question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: прошедшее 'be' формирует свой собственный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "will", "help", "me", "with", "this,", "won't", "you?"],
            correctAnswer: "You will help me with this, won't you?",
            correctFeedback: "Excellent! 'You will help me with this, won't you?' is correct. Perfect future tense question tag!",
            correctFeedbackRu: "Отлично! 'You will help me with this, won't you?' верно. Идеальный разделительный вопрос в будущем времени!",
            incorrectFeedback: "Try again. Remember: future with 'will' uses 'will/won't' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: будущее с 'will' использует 'will/won't' в разделительных вопросах."
        }
    ]
};

/* ============================================
Page 2: Question Tags Sentence Building - Complex Structures (B1)
============================================ */
window.grammarExercises['questions']['question-tags-sentence-page2'] = {
    title: "Question Tags - Complex Structures",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["There", "are", "many", "people", "here,", "aren't", "there?"],
            correctAnswer: "There are many people here, aren't there?",
            correctFeedback: "Perfect! 'There are many people here, aren't there?' is correct. Great use of 'there' structures in question tags!",
            correctFeedbackRu: "Идеально! 'There are many people here, aren't there?' верно. Отличное использование структур с 'there' в разделительных вопросах!",
            incorrectFeedback: "Try again. Remember: 'there' structures keep 'there' in the question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: структуры с 'there' сохраняют 'there' в разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["She", "has", "been", "working", "hard,", "hasn't", "she?"],
            correctAnswer: "She has been working hard, hasn't she?",
            correctFeedback: "Excellent! 'She has been working hard, hasn't she?' is correct. Perfect present perfect continuous question tag!",
            correctFeedbackRu: "Отлично! 'She has been working hard, hasn't she?' верно. Идеальный разделительный вопрос в present perfect continuous!",
            incorrectFeedback: "Try again. Remember: present perfect continuous uses 'has/hasn't' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect continuous использует 'has/hasn't' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Let's", "go", "to", "the", "cinema", "tonight,", "shall", "we?"],
            correctAnswer: "Let's go to the cinema tonight, shall we?",
            correctFeedback: "Fantastic! 'Let's go to the cinema tonight, shall we?' is correct. Perfect use of 'Let's' with 'shall we'!",
            correctFeedbackRu: "Фантастически! 'Let's go to the cinema tonight, shall we?' верно. Идеальное использование 'Let's' с 'shall we'!",
            incorrectFeedback: "Try again. Remember: 'Let's' always uses 'shall we' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'Let's' всегда использует 'shall we' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "could", "speak", "French", "when", "you", "were", "younger,", "couldn't", "you?"],
            correctAnswer: "You could speak French when you were younger, couldn't you?",
            correctFeedback: "Great! 'You could speak French when you were younger, couldn't you?' is correct. Excellent past modal question tag!",
            correctFeedbackRu: "Отлично! 'You could speak French when you were younger, couldn't you?' верно. Отличный разделительный вопрос с прошедшим модальным глаголом!",
            incorrectFeedback: "Try again. Remember: past modal verbs form their own question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: прошедшие модальные глаголы формируют свои собственные разделительные вопросы."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["There", "isn't", "much", "time", "left,", "is", "there?"],
            correctAnswer: "There isn't much time left, is there?",
            correctFeedback: "Perfect! 'There isn't much time left, is there?' is correct. Great understanding of negative 'there' structures!",
            correctFeedbackRu: "Идеально! 'There isn't much time left, is there?' верно. Отличное понимание отрицательных структур с 'there'!",
            incorrectFeedback: "Try again. Remember: negative 'there' needs positive question tag with 'there'.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: отрицательное 'there' нуждается в положительном разделительном вопросе с 'there'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Everyone", "likes", "pizza,", "don't", "they?"],
            correctAnswer: "Everyone likes pizza, don't they?",
            correctFeedback: "Excellent! 'Everyone likes pizza, don't they?' is correct. Perfect use of 'they' for indefinite pronouns!",
            correctFeedbackRu: "Отлично! 'Everyone likes pizza, don't they?' верно. Идеальное использование 'they' для неопределенных местоимений!",
            incorrectFeedback: "Try again. Remember: indefinite pronouns like 'everyone' use 'they' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: неопределенные местоимения как 'everyone' используют 'they' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "haven't", "seen", "my", "keys", "anywhere,", "have", "you?"],
            correctAnswer: "You haven't seen my keys anywhere, have you?",
            correctFeedback: "Fantastic! 'You haven't seen my keys anywhere, have you?' is correct. Great present perfect negative question tag!",
            correctFeedbackRu: "Фантастически! 'You haven't seen my keys anywhere, have you?' верно. Отличный отрицательный разделительный вопрос в present perfect!",
            incorrectFeedback: "Try again. Remember: present perfect negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "right", "about", "this,", "aren't", "I?"],
            correctAnswer: "I'm right about this, aren't I?",
            correctFeedback: "Great! 'I'm right about this, aren't I?' is correct. Perfect use of the special 'aren't I' form!",
            correctFeedbackRu: "Отлично! 'I'm right about this, aren't I?' верно. Идеальное использование особой формы 'aren't I'!",
            incorrectFeedback: "Try again. Remember: 'I am' uses the special form 'aren't I' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'I am' использует особую форму 'aren't I' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Nobody", "called", "while", "I", "was", "out,", "did", "they?"],
            correctAnswer: "Nobody called while I was out, did they?",
            correctFeedback: "Perfect! 'Nobody called while I was out, did they?' is correct. Excellent use of 'they' for 'nobody'!",
            correctFeedbackRu: "Идеально! 'Nobody called while I was out, did they?' верно. Отличное использование 'they' для 'nobody'!",
            incorrectFeedback: "Try again. Remember: 'nobody' is negative and uses 'they' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'nobody' отрицательное и использует 'they' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "would", "like", "some", "coffee,", "wouldn't", "you?"],
            correctAnswer: "You would like some coffee, wouldn't you?",
            correctFeedback: "Excellent! 'You would like some coffee, wouldn't you?' is correct. Perfect conditional question tag!",
            correctFeedbackRu: "Отлично! 'You would like some coffee, wouldn't you?' верно. Идеальный условный разделительный вопрос!",
            incorrectFeedback: "Try again. Remember: 'would like' uses 'would/wouldn't' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'would like' использует 'would/wouldn't' в разделительных вопросах."
        }
    ]
};

/* ============================================
Page 3: Question Tags Sentence Building - Real-Life Situations (B1)
============================================ */
window.grammarExercises['questions']['question-tags-sentence-page3'] = {
    title: "Question Tags - Real-Life Situations",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Someone", "left", "their", "umbrella", "here,", "didn't", "they?"],
            correctAnswer: "Someone left their umbrella here, didn't they?",
            correctFeedback: "Perfect! 'Someone left their umbrella here, didn't they?' is correct. Great use of 'they' for 'someone'!",
            correctFeedbackRu: "Идеально! 'Someone left their umbrella here, didn't they?' верно. Отличное использование 'they' для 'someone'!",
            incorrectFeedback: "Try again. Remember: indefinite pronouns like 'someone' use 'they' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: неопределенные местоимения как 'someone' используют 'they' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Nothing", "ever", "goes", "according", "to", "plan,", "does", "it?"],
            correctAnswer: "Nothing ever goes according to plan, does it?",
            correctFeedback: "Excellent! 'Nothing ever goes according to plan, does it?' is correct. Perfect understanding of negative words!",
            correctFeedbackRu: "Отлично! 'Nothing ever goes according to plan, does it?' верно. Идеальное понимание отрицательных слов!",
            incorrectFeedback: "Try again. Remember: 'nothing' makes the sentence negative, so use positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'nothing' делает предложение отрицательным, поэтому используйте положительный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "used", "to", "live", "in", "London,", "didn't", "you?"],
            correctAnswer: "You used to live in London, didn't you?",
            correctFeedback: "Fantastic! 'You used to live in London, didn't you?' is correct. Great understanding of 'used to' question tags!",
            correctFeedbackRu: "Фантастически! 'You used to live in London, didn't you?' верно. Отличное понимание разделительных вопросов с 'used to'!",
            incorrectFeedback: "Try again. Remember: 'used to' forms question tags like past simple verbs.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'used to' формирует разделительные вопросы как глаголы в past simple."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["He's", "never", "been", "to", "Asia,", "has", "he?"],
            correctAnswer: "He's never been to Asia, has he?",
            correctFeedback: "Great! 'He's never been to Asia, has he?' is correct. Perfect use of 'never' making it negative!",
            correctFeedbackRu: "Отлично! 'He's never been to Asia, has he?' верно. Идеальное использование 'never', делающего это отрицательным!",
            incorrectFeedback: "Try again. Remember: 'never' is negative, so use positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'never' отрицательное, поэтому используйте положительный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["We", "must", "finish", "this", "project", "today,", "mustn't", "we?"],
            correctAnswer: "We must finish this project today, mustn't we?",
            correctFeedback: "Perfect! 'We must finish this project today, mustn't we?' is correct. Excellent modal question tag!",
            correctFeedbackRu: "Идеально! 'We must finish this project today, mustn't we?' верно. Отличный модальный разделительный вопрос!",
            incorrectFeedback: "Try again. Remember: modal verbs like 'must' form their own question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: модальные глаголы как 'must' формируют свои собственные разделительные вопросы."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "aren't", "feeling", "well", "today,", "are", "you?"],
            correctAnswer: "You aren't feeling well today, are you?",
            correctFeedback: "Excellent! 'You aren't feeling well today, are you?' is correct. Great present continuous negative question tag!",
            correctFeedbackRu: "Отлично! 'You aren't feeling well today, are you?' верно. Отличный отрицательный разделительный вопрос в present continuous!",
            incorrectFeedback: "Try again. Remember: negative present continuous needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: отрицательное present continuous нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Anyone", "can", "learn", "to", "cook,", "can't", "they?"],
            correctAnswer: "Anyone can learn to cook, can't they?",
            correctFeedback: "Fantastic! 'Anyone can learn to cook, can't they?' is correct. Perfect use of 'they' for 'anyone'!",
            correctFeedbackRu: "Фантастически! 'Anyone can learn to cook, can't they?' верно. Идеальное использование 'they' для 'anyone'!",
            incorrectFeedback: "Try again. Remember: indefinite pronouns like 'anyone' use 'they' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: неопределенные местоимения как 'anyone' используют 'they' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "children", "were", "playing", "in", "the", "garden,", "weren't", "they?"],
            correctAnswer: "The children were playing in the garden, weren't they?",
            correctFeedback: "Great! 'The children were playing in the garden, weren't they?' is correct. Excellent past continuous question tag!",
            correctFeedbackRu: "Отлично! 'The children were playing in the garden, weren't they?' верно. Отличный разделительный вопрос в past continuous!",
            incorrectFeedback: "Try again. Remember: past continuous uses 'was/were' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: past continuous использует 'was/were' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "won't", "forget", "to", "call", "me,", "will", "you?"],
            correctAnswer: "You won't forget to call me, will you?",
            correctFeedback: "Perfect! 'You won't forget to call me, will you?' is correct. Great future negative question tag!",
            correctFeedbackRu: "Идеально! 'You won't forget to call me, will you?' верно. Отличный отрицательный разделительный вопрос в будущем времени!",
            incorrectFeedback: "Try again. Remember: future negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: будущее отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["He", "might", "come", "to", "the", "party", "later,", "mightn't", "he?"],
            correctAnswer: "He might come to the party later, mightn't he?",
            correctFeedback: "Excellent! 'He might come to the party later, mightn't he?' is correct. Perfect modal possibility question tag!",
            correctFeedbackRu: "Отлично! 'He might come to the party later, mightn't he?' верно. Идеальный модальный разделительный вопрос возможности!",
            incorrectFeedback: "Try again. Remember: modal verbs like 'might' form their own question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: модальные глаголы как 'might' формируют свои собственные разделительные вопросы."
        }
    ]
};

/* ============================================
Page 4: Question Tags Sentence Building - Travel and Social Situations (B1)
============================================ */
window.grammarExercises['questions']['question-tags-sentence-page4'] = {
    title: "Question Tags - Travel and Social Situations",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "train", "arrives", "at", "nine", "o'clock,", "doesn't", "it?"],
            correctAnswer: "The train arrives at nine o'clock, doesn't it?",
            correctFeedback: "Perfect! 'The train arrives at nine o'clock, doesn't it?' is correct. Great use of present simple for timetables!",
            correctFeedbackRu: "Идеально! 'The train arrives at nine o'clock, doesn't it?' верно. Отличное использование present simple для расписаний!",
            incorrectFeedback: "Try again. Remember: timetables use present simple even for future events.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: расписания используют present simple даже для будущих событий."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Your", "parents", "don't", "mind", "if", "you", "stay", "out", "late,", "do", "they?"],
            correctAnswer: "Your parents don't mind if you stay out late, do they?",
            correctFeedback: "Excellent! 'Your parents don't mind if you stay out late, do they?' is correct. Perfect negative to positive flip!",
            correctFeedbackRu: "Отлично! 'Your parents don't mind if you stay out late, do they?' верно. Идеальный переход от отрицательного к положительному!",
            incorrectFeedback: "Try again. Remember: negative statement needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: отрицательное утверждение нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["We're", "having", "dinner", "at", "the", "new", "restaurant", "tonight,", "aren't", "we?"],
            correctAnswer: "We're having dinner at the new restaurant tonight, aren't we?",
            correctFeedback: "Fantastic! 'We're having dinner at the new restaurant tonight, aren't we?' is correct. Great future plan with present continuous!",
            correctFeedbackRu: "Фантастически! 'We're having dinner at the new restaurant tonight, aren't we?' верно. Отличный будущий план с present continuous!",
            incorrectFeedback: "Try again. Remember: present continuous for future plans uses 'are/aren't'.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present continuous для будущих планов использует 'are/aren't'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "movie", "hasn't", "started", "yet,", "has", "it?"],
            correctAnswer: "The movie hasn't started yet, has it?",
            correctFeedback: "Great! 'The movie hasn't started yet, has it?' is correct. Perfect present perfect negative question tag!",
            correctFeedbackRu: "Отлично! 'The movie hasn't started yet, has it?' верно. Идеальный отрицательный разделительный вопрос в present perfect!",
            incorrectFeedback: "Try again. Remember: present perfect negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You'll", "be", "able", "to", "help", "us", "move", "next", "weekend,", "won't", "you?"],
            correctAnswer: "You'll be able to help us move next weekend, won't you?",
            correctFeedback: "Perfect! 'You'll be able to help us move next weekend, won't you?' is correct. Excellent future ability question tag!",
            correctFeedbackRu: "Идеально! 'You'll be able to help us move next weekend, won't you?' верно. Отличный разделительный вопрос будущей способности!",
            incorrectFeedback: "Try again. Remember: 'will be able to' uses 'will/won't' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'will be able to' использует 'will/won't' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["It's", "quite", "expensive", "to", "eat", "out", "these", "days,", "isn't", "it?"],
            correctAnswer: "It's quite expensive to eat out these days, isn't it?",
            correctFeedback: "Excellent! 'It's quite expensive to eat out these days, isn't it?' is correct. Great use of 'be' in question tags!",
            correctFeedbackRu: "Отлично! 'It's quite expensive to eat out these days, isn't it?' верно. Отличное использование 'be' в разделительных вопросах!",
            incorrectFeedback: "Try again. Remember: 'be' verb creates its own question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: глагол 'be' создает свой собственный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "didn't", "remember", "to", "bring", "your", "passport,", "did", "you?"],
            correctAnswer: "You didn't remember to bring your passport, did you?",
            correctFeedback: "Fantastic! 'You didn't remember to bring your passport, did you?' is correct. Perfect past simple negative question tag!",
            correctFeedbackRu: "Фантастически! 'You didn't remember to bring your passport, did you?' верно. Идеальный отрицательный разделительный вопрос в past simple!",
            incorrectFeedback: "Try again. Remember: past simple negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: past simple отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "children", "are", "sleeping", "peacefully,", "aren't", "they?"],
            correctAnswer: "The children are sleeping peacefully, aren't they?",
            correctFeedback: "Great! 'The children are sleeping peacefully, aren't they?' is correct. Excellent present continuous question tag!",
            correctFeedbackRu: "Отлично! 'The children are sleeping peacefully, aren't they?' верно. Отличный разделительный вопрос в present continuous!",
            incorrectFeedback: "Try again. Remember: present continuous uses 'are/aren't' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present continuous использует 'are/aren't' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "need", "to", "finish", "this", "report", "by", "tomorrow,", "don't", "you?"],
            correctAnswer: "You need to finish this report by tomorrow, don't you?",
            correctFeedback: "Perfect! 'You need to finish this report by tomorrow, don't you?' is correct. Great use of 'need' as regular verb!",
            correctFeedbackRu: "Идеально! 'You need to finish this report by tomorrow, don't you?' верно. Отличное использование 'need' как обычного глагола!",
            incorrectFeedback: "Try again. Remember: 'need' as regular verb uses 'do/don't' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'need' как обычный глагол использует 'do/don't' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Your", "sister", "works", "as", "a", "teacher", "now,", "doesn't", "she?"],
            correctAnswer: "Your sister works as a teacher now, doesn't she?",
            correctFeedback: "Excellent! 'Your sister works as a teacher now, doesn't she?' is correct. Perfect present simple question tag!",
            correctFeedbackRu: "Отлично! 'Your sister works as a teacher now, doesn't she?' верно. Идеальный разделительный вопрос в present simple!",
            incorrectFeedback: "Try again. Remember: present simple positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple положительное нуждается в отрицательном разделительном вопросе."
        }
    ]
};

/* ============================================
Page 5: Question Tags Sentence Building - Daily Life and Opinions (B1)
============================================ */
window.grammarExercises['questions']['question-tags-sentence-page5'] = {
    title: "Question Tags - Daily Life and Opinions",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "think", "this", "book", "is", "really", "interesting,", "don't", "you?"],
            correctAnswer: "You think this book is really interesting, don't you?",
            correctFeedback: "Perfect! 'You think this book is really interesting, don't you?' is correct. Great opinion-sharing question tag!",
            correctFeedbackRu: "Идеально! 'You think this book is really interesting, don't you?' верно. Отличный разделительный вопрос для обмена мнениями!",
            incorrectFeedback: "Try again. Remember: 'think' is present simple positive, so use negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'think' - это present simple положительное, поэтому используйте отрицательный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "weather", "was", "terrible", "yesterday,", "wasn't", "it?"],
            correctAnswer: "The weather was terrible yesterday, wasn't it?",
            correctFeedback: "Excellent! 'The weather was terrible yesterday, wasn't it?' is correct. Perfect past 'be' question tag!",
            correctFeedbackRu: "Отлично! 'The weather was terrible yesterday, wasn't it?' верно. Идеальный разделительный вопрос с прошедшим 'be'!",
            incorrectFeedback: "Try again. Remember: past 'be' forms its own question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: прошедшее 'be' формирует свой собственный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You're", "not", "going", "to", "quit", "your", "job,", "are", "you?"],
            correctAnswer: "You're not going to quit your job, are you?",
            correctFeedback: "Fantastic! 'You're not going to quit your job, are you?' is correct. Great negative 'going to' future question tag!",
            correctFeedbackRu: "Фантастически! 'You're not going to quit your job, are you?' верно. Отличный отрицательный разделительный вопрос с 'going to'!",
            incorrectFeedback: "Try again. Remember: negative 'going to' needs positive question tag with 'be'.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: отрицательное 'going to' нуждается в положительном разделительном вопросе с 'be'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "coffee", "tastes", "really", "good", "today,", "doesn't", "it?"],
            correctAnswer: "The coffee tastes really good today, doesn't it?",
            correctFeedback: "Great! 'The coffee tastes really good today, doesn't it?' is correct. Perfect sensory verb question tag!",
            correctFeedbackRu: "Отлично! 'The coffee tastes really good today, doesn't it?' верно. Идеальный разделительный вопрос с глаголом восприятия!",
            incorrectFeedback: "Try again. Remember: 'tastes' is present simple positive, so use negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'tastes' - это present simple положительное, поэтому используйте отрицательный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "haven't", "done", "your", "shopping", "yet,", "have", "you?"],
            correctAnswer: "You haven't done your shopping yet, have you?",
            correctFeedback: "Perfect! 'You haven't done your shopping yet, have you?' is correct. Excellent present perfect negative question tag!",
            correctFeedbackRu: "Идеально! 'You haven't done your shopping yet, have you?' верно. Отличный отрицательный разделительный вопрос в present perfect!",
            incorrectFeedback: "Try again. Remember: present perfect negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["She", "can", "speak", "three", "languages", "fluently,", "can't", "she?"],
            correctAnswer: "She can speak three languages fluently, can't she?",
            correctFeedback: "Excellent! 'She can speak three languages fluently, can't she?' is correct. Great modal ability question tag!",
            correctFeedbackRu: "Отлично! 'She can speak three languages fluently, can't she?' верно. Отличный модальный разделительный вопрос способности!",
            incorrectFeedback: "Try again. Remember: modal verbs like 'can' form their own question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: модальные глаголы как 'can' формируют свои собственные разделительные вопросы."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["We", "walked", "for", "hours", "without", "stopping,", "didn't", "we?"],
            correctAnswer: "We walked for hours without stopping, didn't we?",
            correctFeedback: "Fantastic! 'We walked for hours without stopping, didn't we?' is correct. Perfect past simple question tag!",
            correctFeedbackRu: "Фантастически! 'We walked for hours without stopping, didn't we?' верно. Идеальный разделительный вопрос в past simple!",
            incorrectFeedback: "Try again. Remember: past simple positive needs negative question tag with 'did'.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: past simple положительное нуждается в отрицательном разделительном вопросе с 'did'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "wouldn't", "mind", "waiting", "a", "few", "more", "minutes,", "would", "you?"],
            correctAnswer: "You wouldn't mind waiting a few more minutes, would you?",
            correctFeedback: "Great! 'You wouldn't mind waiting a few more minutes, would you?' is correct. Excellent polite request question tag!",
            correctFeedbackRu: "Отлично! 'You wouldn't mind waiting a few more minutes, would you?' верно. Отличный вежливый разделительный вопрос-просьба!",
            incorrectFeedback: "Try again. Remember: conditional negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: условное отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "bus", "doesn't", "run", "on", "Sundays,", "does", "it?"],
            correctAnswer: "The bus doesn't run on Sundays, does it?",
            correctFeedback: "Perfect! 'The bus doesn't run on Sundays, does it?' is correct. Great public transport information question tag!",
            correctFeedbackRu: "Идеально! 'The bus doesn't run on Sundays, does it?' верно. Отличный разделительный вопрос об информации общественного транспорта!",
            incorrectFeedback: "Try again. Remember: present simple negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "getting", "better", "at", "playing", "the", "guitar,", "aren't", "I?"],
            correctAnswer: "I'm getting better at playing the guitar, aren't I?",
            correctFeedback: "Excellent! 'I'm getting better at playing the guitar, aren't I?' is correct. Perfect use of special 'aren't I' form!",
            correctFeedbackRu: "Отлично! 'I'm getting better at playing the guitar, aren't I?' верно. Идеальное использование особой формы 'aren't I'!",
            incorrectFeedback: "Try again. Remember: 'I am' uses the special form 'aren't I' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'I am' использует особую форму 'aren't I' в разделительных вопросах."
        }
    ]
};

/* ============================================
Page 6: Question Tags Sentence Building - Entertainment and Hobbies (B1)
============================================ */
window.grammarExercises['questions']['question-tags-sentence-page6'] = {
    title: "Question Tags - Entertainment and Hobbies",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You've", "been", "to", "that", "new", "cafe", "downtown,", "haven't", "you?"],
            correctAnswer: "You've been to that new cafe downtown, haven't you?",
            correctFeedback: "Perfect! 'You've been to that new cafe downtown, haven't you?' is correct. Great present perfect experience question tag!",
            correctFeedbackRu: "Идеально! 'You've been to that new cafe downtown, haven't you?' верно. Отличный разделительный вопрос опыта в present perfect!",
            incorrectFeedback: "Try again. Remember: present perfect positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "hotel", "room", "wasn't", "very", "clean,", "was", "it?"],
            correctAnswer: "The hotel room wasn't very clean, was it?",
            correctFeedback: "Excellent! 'The hotel room wasn't very clean, was it?' is correct. Perfect past 'be' negative question tag!",
            correctFeedbackRu: "Отлично! 'The hotel room wasn't very clean, was it?' верно. Идеальный отрицательный разделительный вопрос с прошедшим 'be'!",
            incorrectFeedback: "Try again. Remember: past 'be' negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: прошедшее 'be' отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["We", "should", "book", "our", "flights", "soon,", "shouldn't", "we?"],
            correctAnswer: "We should book our flights soon, shouldn't we?",
            correctFeedback: "Fantastic! 'We should book our flights soon, shouldn't we?' is correct. Great modal advice question tag!",
            correctFeedbackRu: "Фантастически! 'We should book our flights soon, shouldn't we?' верно. Отличный модальный разделительный вопрос-совет!",
            incorrectFeedback: "Try again. Remember: modal verbs like 'should' form their own question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: модальные глаголы как 'should' формируют свои собственные разделительные вопросы."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You're", "meeting", "your", "friends", "at", "the", "airport,", "aren't", "you?"],
            correctAnswer: "You're meeting your friends at the airport, aren't you?",
            correctFeedback: "Great! 'You're meeting your friends at the airport, aren't you?' is correct. Perfect future arrangement question tag!",
            correctFeedbackRu: "Отлично! 'You're meeting your friends at the airport, aren't you?' верно. Идеальный разделительный вопрос будущей договоренности!",
            incorrectFeedback: "Try again. Remember: present continuous for future uses 'are/aren't' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present continuous для будущего использует 'are/aren't' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "party", "didn't", "end", "until", "very", "late,", "did", "it?"],
            correctAnswer: "The party didn't end until very late, did it?",
            correctFeedback: "Perfect! 'The party didn't end until very late, did it?' is correct. Excellent past simple negative question tag!",
            correctFeedbackRu: "Идеально! 'The party didn't end until very late, did it?' верно. Отличный отрицательный разделительный вопрос в past simple!",
            incorrectFeedback: "Try again. Remember: past simple negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: past simple отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["There", "are", "so", "many", "tourists", "here", "in", "summer,", "aren't", "there?"],
            correctAnswer: "There are so many tourists here in summer, aren't there?",
            correctFeedback: "Excellent! 'There are so many tourists here in summer, aren't there?' is correct. Great 'there' structure question tag!",
            correctFeedbackRu: "Отлично! 'There are so many tourists here in summer, aren't there?' верно. Отличный разделительный вопрос со структурой 'there'!",
            incorrectFeedback: "Try again. Remember: 'there' structures keep 'there' in the question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: структуры с 'there' сохраняют 'there' в разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "couldn't", "find", "a", "good", "restaurant", "nearby,", "could", "you?"],
            correctAnswer: "You couldn't find a good restaurant nearby, could you?",
            correctFeedback: "Fantastic! 'You couldn't find a good restaurant nearby, could you?' is correct. Perfect past modal negative question tag!",
            correctFeedbackRu: "Фантастически! 'You couldn't find a good restaurant nearby, could you?' верно. Идеальный отрицательный разделительный вопрос с прошедшим модальным глаголом!",
            incorrectFeedback: "Try again. Remember: past modal negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: прошедший модальный отрицательный нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["It", "looks", "like", "it's", "going", "to", "rain", "soon,", "doesn't", "it?"],
            correctAnswer: "It looks like it's going to rain soon, doesn't it?",
            correctFeedback: "Great! 'It looks like it's going to rain soon, doesn't it?' is correct. Perfect weather prediction question tag!",
            correctFeedbackRu: "Отлично! 'It looks like it's going to rain soon, doesn't it?' верно. Идеальный разделительный вопрос предсказания погоды!",
            incorrectFeedback: "Try again. Remember: 'looks like' is present simple positive, so use negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'looks like' - это present simple положительное, поэтому используйте отрицательный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Your", "vacation", "was", "absolutely", "amazing,", "wasn't", "it?"],
            correctAnswer: "Your vacation was absolutely amazing, wasn't it?",
            correctFeedback: "Perfect! 'Your vacation was absolutely amazing, wasn't it?' is correct. Excellent enthusiastic past experience question tag!",
            correctFeedbackRu: "Идеально! 'Your vacation was absolutely amazing, wasn't it?' верно. Отличный восторженный разделительный вопрос о прошлом опыте!",
            incorrectFeedback: "Try again. Remember: past 'be' positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: прошедшее 'be' положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "won't", "be", "traveling", "alone", "this", "time,", "will", "you?"],
            correctAnswer: "You won't be traveling alone this time, will you?",
            correctFeedback: "Excellent! 'You won't be traveling alone this time, will you?' is correct. Great future continuous negative question tag!",
            correctFeedbackRu: "Отлично! 'You won't be traveling alone this time, will you?' верно. Отличный отрицательный разделительный вопрос в future continuous!",
            incorrectFeedback: "Try again. Remember: future negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: будущее отрицательное нуждается в положительном разделительном вопросе."
        }
    ]
};

/* ============================================
Page 7: Question Tags Sentence Building - Work and Study (B1)
============================================ */
window.grammarExercises['questions']['question-tags-sentence-page7'] = {
    title: "Question Tags - Work and Study",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You've", "been", "studying", "English", "for", "two", "years", "now,", "haven't", "you?"],
            correctAnswer: "You've been studying English for two years now, haven't you?",
            correctFeedback: "Perfect! 'You've been studying English for two years now, haven't you?' is correct. Great present perfect continuous duration question tag!",
            correctFeedbackRu: "Идеально! 'You've been studying English for two years now, haven't you?' верно. Отличный разделительный вопрос длительности в present perfect continuous!",
            incorrectFeedback: "Try again. Remember: present perfect continuous positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect continuous положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "doctor", "said", "you", "need", "more", "rest,", "didn't", "he?"],
            correctAnswer: "The doctor said you need more rest, didn't he?",
            correctFeedback: "Excellent! 'The doctor said you need more rest, didn't he?' is correct. Perfect past simple professional advice question tag!",
            correctFeedbackRu: "Отлично! 'The doctor said you need more rest, didn't he?' верно. Идеальный разделительный вопрос профессионального совета в past simple!",
            incorrectFeedback: "Try again. Remember: past simple positive needs negative question tag with 'did'.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: past simple положительное нуждается в отрицательном разделительном вопросе с 'did'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You're", "not", "feeling", "sick", "today,", "are", "you?"],
            correctAnswer: "You're not feeling sick today, are you?",
            correctFeedback: "Fantastic! 'You're not feeling sick today, are you?' is correct. Great health check question tag with present continuous!",
            correctFeedbackRu: "Фантастически! 'You're not feeling sick today, are you?' верно. Отличный разделительный вопрос проверки здоровья с present continuous!",
            incorrectFeedback: "Try again. Remember: negative present continuous needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: отрицательное present continuous нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "meeting", "will", "start", "at", "ten", "o'clock", "sharp,", "won't", "it?"],
            correctAnswer: "The meeting will start at ten o'clock sharp, won't it?",
            correctFeedback: "Great! 'The meeting will start at ten o'clock sharp, won't it?' is correct. Perfect business meeting schedule question tag!",
            correctFeedbackRu: "Отлично! 'The meeting will start at ten o'clock sharp, won't it?' верно. Идеальный разделительный вопрос расписания деловой встречи!",
            incorrectFeedback: "Try again. Remember: future positive needs negative question tag with 'will'.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: будущее положительное нуждается в отрицательном разделительном вопросе с 'will'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "had", "to", "work", "overtime", "last", "week,", "didn't", "you?"],
            correctAnswer: "You had to work overtime last week, didn't you?",
            correctFeedback: "Perfect! 'You had to work overtime last week, didn't you?' is correct. Excellent past obligation question tag!",
            correctFeedbackRu: "Идеально! 'You had to work overtime last week, didn't you?' верно. Отличный разделительный вопрос прошлого обязательства!",
            incorrectFeedback: "Try again. Remember: 'had to' for obligation uses 'did/didn't' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'had to' для обязательства использует 'did/didn't' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["She", "isn't", "coming", "to", "the", "conference", "next", "month,", "is", "she?"],
            correctAnswer: "She isn't coming to the conference next month, is she?",
            correctFeedback: "Excellent! 'She isn't coming to the conference next month, is she?' is correct. Great professional event question tag!",
            correctFeedbackRu: "Отлично! 'She isn't coming to the conference next month, is she?' верно. Отличный разделительный вопрос профессионального мероприятия!",
            incorrectFeedback: "Try again. Remember: negative present continuous needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: отрицательное present continuous нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "can", "work", "from", "home", "on", "Fridays,", "can't", "you?"],
            correctAnswer: "You can work from home on Fridays, can't you?",
            correctFeedback: "Fantastic! 'You can work from home on Fridays, can't you?' is correct. Perfect work flexibility question tag!",
            correctFeedbackRu: "Фантастически! 'You can work from home on Fridays, can't you?' верно. Идеальный разделительный вопрос рабочей гибкости!",
            incorrectFeedback: "Try again. Remember: modal verbs like 'can' form their own question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: модальные глаголы как 'can' формируют свои собственные разделительные вопросы."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "exam", "wasn't", "as", "difficult", "as", "expected,", "was", "it?"],
            correctAnswer: "The exam wasn't as difficult as expected, was it?",
            correctFeedback: "Great! 'The exam wasn't as difficult as expected, was it?' is correct. Excellent academic assessment question tag!",
            correctFeedbackRu: "Отлично! 'The exam wasn't as difficult as expected, was it?' верно. Отличный разделительный вопрос академической оценки!",
            incorrectFeedback: "Try again. Remember: past 'be' negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: прошедшее 'be' отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You've", "already", "submitted", "your", "assignment,", "haven't", "you?"],
            correctAnswer: "You've already submitted your assignment, haven't you?",
            correctFeedback: "Perfect! 'You've already submitted your assignment, haven't you?' is correct. Excellent academic completion question tag!",
            correctFeedbackRu: "Идеально! 'You've already submitted your assignment, haven't you?' верно. Отличный разделительный вопрос завершения учебной работы!",
            incorrectFeedback: "Try again. Remember: present perfect positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "new", "employee", "seems", "really", "nice,", "doesn't", "he?"],
            correctAnswer: "The new employee seems really nice, doesn't he?",
            correctFeedback: "Excellent! 'The new employee seems really nice, doesn't he?' is correct. Great workplace impression question tag!",
            correctFeedbackRu: "Отлично! 'The new employee seems really nice, doesn't he?' верно. Отличный разделительный вопрос впечатления о рабочем месте!",
            incorrectFeedback: "Try again. Remember: 'seems' is present simple positive, so use negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'seems' - это present simple положительное, поэтому используйте отрицательный разделительный вопрос."
        }
    ]
};

/* ============================================
Page 8: Question Tags Sentence Building - Sports and Family (B1)
============================================ */
window.grammarExercises['questions']['question-tags-sentence-page8'] = {
    title: "Question Tags - Sports and Family",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "play", "tennis", "every", "weekend,", "don't", "you?"],
            correctAnswer: "You play tennis every weekend, don't you?",
            correctFeedback: "Perfect! 'You play tennis every weekend, don't you?' is correct. Great sports routine question tag!",
            correctFeedbackRu: "Идеально! 'You play tennis every weekend, don't you?' верно. Отличный разделительный вопрос спортивной рутины!",
            incorrectFeedback: "Try again. Remember: present simple positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "game", "hasn't", "finished", "yet,", "has", "it?"],
            correctAnswer: "The game hasn't finished yet, has it?",
            correctFeedback: "Excellent! 'The game hasn't finished yet, has it?' is correct. Perfect sports event progress question tag!",
            correctFeedbackRu: "Отлично! 'The game hasn't finished yet, has it?' верно. Идеальный разделительный вопрос хода спортивного события!",
            incorrectFeedback: "Try again. Remember: present perfect negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["She's", "been", "practicing", "piano", "for", "hours,", "hasn't", "she?"],
            correctAnswer: "She's been practicing piano for hours, hasn't she?",
            correctFeedback: "Fantastic! 'She's been practicing piano for hours, hasn't she?' is correct. Great hobby dedication question tag!",
            correctFeedbackRu: "Фантастически! 'She's been practicing piano for hours, hasn't she?' верно. Отличный разделительный вопрос увлеченности хобби!",
            incorrectFeedback: "Try again. Remember: present perfect continuous positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect continuous положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "can't", "swim", "very", "well,", "can", "you?"],
            correctAnswer: "You can't swim very well, can you?",
            correctFeedback: "Great! 'You can't swim very well, can you?' is correct. Perfect sports ability limitation question tag!",
            correctFeedbackRu: "Отлично! 'You can't swim very well, can you?' верно. Идеальный разделительный вопрос ограничения спортивной способности!",
            incorrectFeedback: "Try again. Remember: modal negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: модальный отрицательный нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "team", "won", "the", "championship", "last", "year,", "didn't", "they?"],
            correctAnswer: "The team won the championship last year, didn't they?",
            correctFeedback: "Perfect! 'The team won the championship last year, didn't they?' is correct. Excellent sports achievement question tag!",
            correctFeedbackRu: "Идеально! 'The team won the championship last year, didn't they?' верно. Отличный разделительный вопрос спортивного достижения!",
            incorrectFeedback: "Try again. Remember: past simple positive needs negative question tag with 'did'.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: past simple положительное нуждается в отрицательном разделительном вопросе с 'did'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Your", "brother", "lives", "in", "another", "city,", "doesn't", "he?"],
            correctAnswer: "Your brother lives in another city, doesn't he?",
            correctFeedback: "Excellent! 'Your brother lives in another city, doesn't he?' is correct. Great family geography question tag!",
            correctFeedbackRu: "Отлично! 'Your brother lives in another city, doesn't he?' верно. Отличный разделительный вопрос семейной географии!",
            incorrectFeedback: "Try again. Remember: present simple positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "haven't", "met", "my", "girlfriend", "yet,", "have", "you?"],
            correctAnswer: "You haven't met my girlfriend yet, have you?",
            correctFeedback: "Fantastic! 'You haven't met my girlfriend yet, have you?' is correct. Perfect relationship introduction question tag!",
            correctFeedbackRu: "Фантастически! 'You haven't met my girlfriend yet, have you?' верно. Идеальный разделительный вопрос знакомства в отношениях!",
            incorrectFeedback: "Try again. Remember: present perfect negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["She's", "getting", "married", "next", "month,", "isn't", "she?"],
            correctAnswer: "She's getting married next month, isn't she?",
            correctFeedback: "Great! 'She's getting married next month, isn't she?' is correct. Excellent family milestone question tag!",
            correctFeedbackRu: "Отлично! 'She's getting married next month, isn't she?' верно. Отличный разделительный вопрос семейной вехи!",
            incorrectFeedback: "Try again. Remember: present continuous for future arrangements uses 'is/isn't'.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present continuous для будущих договоренностей использует 'is/isn't'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Your", "parents", "don't", "live", "together", "anymore,", "do", "they?"],
            correctAnswer: "Your parents don't live together anymore, do they?",
            correctFeedback: "Perfect! 'Your parents don't live together anymore, do they?' is correct. Sensitive family situation question tag handled well!",
            correctFeedbackRu: "Идеально! 'Your parents don't live together anymore, do they?' верно. Деликатная семейная ситуация в разделительном вопросе обработана хорошо!",
            incorrectFeedback: "Try again. Remember: present simple negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["We", "spent", "a", "lovely", "evening", "with", "your", "family,", "didn't", "we?"],
            correctAnswer: "We spent a lovely evening with your family, didn't we?",
            correctFeedback: "Excellent! 'We spent a lovely evening with your family, didn't we?' is correct. Perfect family gathering memory question tag!",
            correctFeedbackRu: "Отлично! 'We spent a lovely evening with your family, didn't we?' верно. Идеальный разделительный вопрос воспоминания о семейной встрече!",
            incorrectFeedback: "Try again. Remember: past simple positive needs negative question tag with 'did'.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: past simple положительное нуждается в отрицательном разделительном вопросе с 'did'."
        }
    ]
};

/* ============================================
Page 9: Question Tags Sentence Building - Shopping and Entertainment (B1)
============================================ */
window.grammarExercises['questions']['question-tags-sentence-page9'] = {
    title: "Question Tags - Shopping and Entertainment",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "shop", "closes", "at", "six", "on", "weekdays,", "doesn't", "it?"],
            correctAnswer: "The shop closes at six on weekdays, doesn't it?",
            correctFeedback: "Perfect! 'The shop closes at six on weekdays, doesn't it?' is correct. Great shopping schedule question tag!",
            correctFeedbackRu: "Идеально! 'The shop closes at six on weekdays, doesn't it?' верно. Отличный разделительный вопрос расписания магазина!",
            incorrectFeedback: "Try again. Remember: present simple positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "haven't", "bought", "anything", "yet,", "have", "you?"],
            correctAnswer: "You haven't bought anything yet, have you?",
            correctFeedback: "Excellent! 'You haven't bought anything yet, have you?' is correct. Perfect shopping progress question tag!",
            correctFeedbackRu: "Отлично! 'You haven't bought anything yet, have you?' верно. Идеальный разделительный вопрос прогресса покупок!",
            incorrectFeedback: "Try again. Remember: present perfect negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "film", "was", "quite", "boring,", "wasn't", "it?"],
            correctAnswer: "The film was quite boring, wasn't it?",
            correctFeedback: "Fantastic! 'The film was quite boring, wasn't it?' is correct. Great entertainment review question tag!",
            correctFeedbackRu: "Фантастически! 'The film was quite boring, wasn't it?' верно. Отличный разделительный вопрос обзора развлечений!",
            incorrectFeedback: "Try again. Remember: past 'be' positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: прошедшее 'be' положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You're", "going", "to", "buy", "those", "shoes,", "aren't", "you?"],
            correctAnswer: "You're going to buy those shoes, aren't you?",
            correctFeedback: "Great! 'You're going to buy those shoes, aren't you?' is correct. Perfect shopping decision question tag!",
            correctFeedbackRu: "Отлично! 'You're going to buy those shoes, aren't you?' верно. Идеальный разделительный вопрос решения о покупке!",
            incorrectFeedback: "Try again. Remember: 'going to' future uses 'are/aren't' in question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: будущее с 'going to' использует 'are/aren't' в разделительных вопросах."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "concert", "tickets", "weren't", "very", "expensive,", "were", "they?"],
            correctAnswer: "The concert tickets weren't very expensive, were they?",
            correctFeedback: "Perfect! 'The concert tickets weren't very expensive, were they?' is correct. Excellent entertainment value question tag!",
            correctFeedbackRu: "Идеально! 'The concert tickets weren't very expensive, were they?' верно. Отличный разделительный вопрос ценности развлечений!",
            incorrectFeedback: "Try again. Remember: past 'be' negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: прошедшее 'be' отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["We", "could", "go", "shopping", "this", "afternoon,", "couldn't", "we?"],
            correctAnswer: "We could go shopping this afternoon, couldn't we?",
            correctFeedback: "Excellent! 'We could go shopping this afternoon, couldn't we?' is correct. Great suggestion for activity question tag!",
            correctFeedbackRu: "Отлично! 'We could go shopping this afternoon, couldn't we?' верно. Отличный разделительный вопрос предложения активности!",
            incorrectFeedback: "Try again. Remember: modal verbs like 'could' form their own question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: модальные глаголы как 'could' формируют свои собственные разделительные вопросы."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "new", "shopping", "center", "opens", "next", "week,", "doesn't", "it?"],
            correctAnswer: "The new shopping center opens next week, doesn't it?",
            correctFeedback: "Fantastic! 'The new shopping center opens next week, doesn't it?' is correct. Perfect scheduled event question tag!",
            correctFeedbackRu: "Фантастически! 'The new shopping center opens next week, doesn't it?' верно. Идеальный разделительный вопрос запланированного события!",
            incorrectFeedback: "Try again. Remember: scheduled events use present simple even for future.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: запланированные события используют present simple даже для будущего."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "don't", "usually", "watch", "horror", "movies,", "do", "you?"],
            correctAnswer: "You don't usually watch horror movies, do you?",
            correctFeedback: "Great! 'You don't usually watch horror movies, do you?' is correct. Perfect entertainment preference question tag!",
            correctFeedbackRu: "Отлично! 'You don't usually watch horror movies, do you?' верно. Идеальный разделительный вопрос предпочтений в развлечениях!",
            incorrectFeedback: "Try again. Remember: present simple negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "restaurant", "serves", "really", "good", "food,", "doesn't", "it?"],
            correctAnswer: "The restaurant serves really good food, doesn't it?",
            correctFeedback: "Perfect! 'The restaurant serves really good food, doesn't it?' is correct. Excellent dining quality question tag!",
            correctFeedbackRu: "Идеально! 'The restaurant serves really good food, doesn't it?' верно. Отличный разделительный вопрос качества ресторана!",
            incorrectFeedback: "Try again. Remember: present simple positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You've", "already", "seen", "this", "movie", "before,", "haven't", "you?"],
            correctAnswer: "You've already seen this movie before, haven't you?",
            correctFeedback: "Excellent! 'You've already seen this movie before, haven't you?' is correct. Great entertainment experience question tag!",
            correctFeedbackRu: "Отлично! 'You've already seen this movie before, haven't you?' верно. Отличный разделительный вопрос опыта развлечений!",
            incorrectFeedback: "Try again. Remember: present perfect positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect положительное нуждается в отрицательном разделительном вопросе."
        }
    ]
};

/* ============================================
Page 10: Question Tags Sentence Building - Personal Experiences and Feelings (B1)
============================================ */
window.grammarExercises['questions']['question-tags-sentence-page10'] = {
    title: "Question Tags - Personal Experiences and Feelings",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "feel", "much", "better", "today,", "don't", "you?"],
            correctAnswer: "You feel much better today, don't you?",
            correctFeedback: "Perfect! 'You feel much better today, don't you?' is correct. Great health and wellness question tag!",
            correctFeedbackRu: "Идеально! 'You feel much better today, don't you?' верно. Отличный разделительный вопрос здоровья и самочувствия!",
            incorrectFeedback: "Try again. Remember: present simple positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["This", "situation", "doesn't", "seem", "fair", "to", "me,", "does", "it?"],
            correctAnswer: "This situation doesn't seem fair to me, does it?",
            correctFeedback: "Excellent! 'This situation doesn't seem fair to me, does it?' is correct. Perfect personal opinion question tag!",
            correctFeedbackRu: "Отлично! 'This situation doesn't seem fair to me, does it?' верно. Идеальный разделительный вопрос личного мнения!",
            incorrectFeedback: "Try again. Remember: present simple negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You've", "always", "wanted", "to", "learn", "how", "to", "play", "the", "guitar,", "haven't", "you?"],
            correctAnswer: "You've always wanted to learn how to play the guitar, haven't you?",
            correctFeedback: "Fantastic! 'You've always wanted to learn how to play the guitar, haven't you?' is correct. Great lifelong dream question tag!",
            correctFeedbackRu: "Фантастически! 'You've always wanted to learn how to play the guitar, haven't you?' верно. Отличный разделительный вопрос мечты всей жизни!",
            incorrectFeedback: "Try again. Remember: present perfect positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present perfect положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "new", "shopping", "center", "looks", "impressive,", "doesn't", "it?"],
            correctAnswer: "The new shopping center looks impressive, doesn't it?",
            correctFeedback: "Great! 'The new shopping center looks impressive, doesn't it?' is correct. Perfect visual impression question tag!",
            correctFeedbackRu: "Отлично! 'The new shopping center looks impressive, doesn't it?' верно. Идеальный разделительный вопрос визуального впечатления!",
            incorrectFeedback: "Try again. Remember: present simple positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "wouldn't", "want", "to", "miss", "this", "opportunity,", "would", "you?"],
            correctAnswer: "You wouldn't want to miss this opportunity, would you?",
            correctFeedback: "Perfect! 'You wouldn't want to miss this opportunity, would you?' is correct. Excellent persuasive question tag!",
            correctFeedbackRu: "Идеально! 'You wouldn't want to miss this opportunity, would you?' верно. Отличный убедительный разделительный вопрос!",
            incorrectFeedback: "Try again. Remember: conditional negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: условное отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["It's", "been", "a", "challenging", "year", "for", "everyone,", "hasn't", "it?"],
            correctAnswer: "It's been a challenging year for everyone, hasn't it?",
            correctFeedback: "Excellent! 'It's been a challenging year for everyone, hasn't it?' is correct. Great shared experience question tag!",
            correctFeedbackRu: "Отлично! 'It's been a challenging year for everyone, hasn't it?' верно. Отличный разделительный вопрос общего опыта!",
            incorrectFeedback: "Try again. Remember: 'It's been' is present perfect positive, so use negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: 'It's been' - это present perfect положительное, поэтому используйте отрицательный разделительный вопрос."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "don't", "really", "believe", "that", "story,", "do", "you?"],
            correctAnswer: "You don't really believe that story, do you?",
            correctFeedback: "Fantastic! 'You don't really believe that story, do you?' is correct. Perfect skeptical question tag!",
            correctFeedbackRu: "Фантастически! 'You don't really believe that story, do you?' верно. Идеальный скептический разделительный вопрос!",
            incorrectFeedback: "Try again. Remember: present simple negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple отрицательное нуждается в положительном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["It", "feels", "strange", "to", "be", "back", "home", "after", "so", "long,", "doesn't", "it?"],
            correctAnswer: "It feels strange to be back home after so long, doesn't it?",
            correctFeedback: "Great! 'It feels strange to be back home after so long, doesn't it?' is correct. Excellent emotional reflection question tag!",
            correctFeedbackRu: "Отлично! 'It feels strange to be back home after so long, doesn't it?' верно. Отличный разделительный вопрос эмоционального размышления!",
            incorrectFeedback: "Try again. Remember: present simple positive needs negative question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: present simple положительное нуждается в отрицательном разделительном вопросе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "should", "call", "your", "grandmother", "more", "often,", "shouldn't", "you?"],
            correctAnswer: "You should call your grandmother more often, shouldn't you?",
            correctFeedback: "Perfect! 'You should call your grandmother more often, shouldn't you?' is correct. Excellent family advice question tag!",
            correctFeedbackRu: "Идеально! 'You should call your grandmother more often, shouldn't you?' верно. Отличный разделительный вопрос семейного совета!",
            incorrectFeedback: "Try again. Remember: modal verbs like 'should' form their own question tags.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: модальные глаголы как 'should' формируют свои собственные разделительные вопросы."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["You", "won't", "forget", "our", "anniversary", "this", "year,", "will", "you?"],
            correctAnswer: "You won't forget our anniversary this year, will you?",
            correctFeedback: "Excellent! 'You won't forget our anniversary this year, will you?' is correct. Perfect relationship reminder question tag!",
            correctFeedbackRu: "Отлично! 'You won't forget our anniversary this year, will you?' верно. Идеальный разделительный вопрос напоминания об отношениях!",
            incorrectFeedback: "Try again. Remember: future negative needs positive question tag.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: будущее отрицательное нуждается в положительном разделительном вопросе."
        }
    ]
};
