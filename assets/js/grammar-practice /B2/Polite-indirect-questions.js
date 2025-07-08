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
Page 1: Polite indirect questions - Basic forms and introductory phrases
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-page1'] = {
    title: "Polite indirect questions - Basic forms",
    multipleChoice: [
        {
            question: "Choose the correct polite indirect question:",
            questionRu: "Выберите правильный вежливый косвенный вопрос:",
            sentence: "Could you tell me ___ the nearest bank is?",
            options: [
                "where",
                "where is",
                "is where",
                "where does"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! In indirect questions, we use normal word order, so 'Could you tell me where the nearest bank is?' is correct.",
            correctFeedbackRu: "Отлично! В косвенных вопросах мы используем обычный порядок слов, поэтому 'Could you tell me where the nearest bank is?' правильно.",
            incorrectFeedback: "Remember, indirect questions don't use question word order. After 'Could you tell me,' we keep the normal sentence structure: subject + verb.",
            incorrectFeedbackRu: "Помните, косвенные вопросы не используют вопросительный порядок слов. После 'Could you tell me' мы сохраняем обычную структуру предложения: подлежащее + сказуемое."
        },
        {
            question: "Select the most polite way to ask:",
            questionRu: "Выберите самый вежливый способ спросить:",
            sentence: "I was wondering ___ you could help me with this problem.",
            options: [
                "if",
                "that",
                "whether",
                "what"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I was wondering if you could help me' is a very polite way to make a request. It sounds less direct and more considerate.",
            correctFeedbackRu: "Отлично! 'I was wondering if you could help me' - очень вежливый способ обратиться с просьбой. Это звучит менее прямо и более деликатно.",
            incorrectFeedback: "Great thinking! While 'whether' could work in some contexts, 'if' is the most natural choice here. 'I was wondering if...' is a classic polite expression that makes requests sound more considerate and less demanding.",
            incorrectFeedbackRu: "Хорошо мыслите! Хотя 'whether' могло бы работать в некоторых контекстах, 'if' здесь самый естественный выбор. 'I was wondering if...' - классическое вежливое выражение, которое делает просьбы более деликатными и менее требовательными."
        },
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "Do you happen to know ___ time the meeting starts?",
            options: [
                "what",
                "what time",
                "when",
                "which"
            ],
            correctAnswer: 0,
            correctFeedback: "Right! 'Do you happen to know what time the meeting starts?' is perfectly polite. 'What' works because 'time' is already mentioned in the question.",
            correctFeedbackRu: "Правильно! 'Do you happen to know what time the meeting starts?' совершенно вежливо. 'What' работает, потому что 'time' уже упомянуто в вопросе.",
            incorrectFeedback: "Close! Since we already have 'time' in the question, we just need 'what' before it. 'Do you happen to know what time...' flows naturally without repeating 'time' twice.",
            incorrectFeedbackRu: "Близко! Поскольку у нас уже есть 'time' в вопросе, нам просто нужно 'what' перед ним. 'Do you happen to know what time...' звучит естественно, не повторяя 'time' дважды."
        },
        {
            question: "Choose the correct indirect question structure:",
            questionRu: "Выберите правильную структуру косвенного вопроса:",
            sentence: "Would you mind telling me ___ train leaves next?",
            options: [
                "which",
                "which train",
                "what train",
                "that train"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Would you mind telling me which train leaves next?' uses the correct structure. 'Which' asks for a specific choice among options.",
            correctFeedbackRu: "Отлично! 'Would you mind telling me which train leaves next?' использует правильную структуру. 'Which' спрашивает о конкретном выборе среди вариантов.",
            incorrectFeedback: "Think about efficiency! Since 'train' appears right after in 'leaves next,' we only need 'which' to introduce the indirect question. It's more concise and natural to say 'which train leaves' than to repeat 'train' unnecessarily.",
            incorrectFeedbackRu: "Подумайте об эффективности! Поскольку 'train' появляется сразу после в 'leaves next,' нам нужно только 'which' для введения косвенного вопроса. Более краткое и естественное говорить 'which train leaves', чем ненужно повторять 'train'."
        },
        {
            question: "Select the most appropriate polite question:",
            questionRu: "Выберите наиболее подходящий вежливый вопрос:",
            sentence: "I'd like to know ___ this document needs to be signed.",
            options: [
                "whether",
                "if",
                "that",
                "what"
            ],
            correctAnswer: 0,
            correctFeedback: "Great choice! 'I'd like to know whether this document needs to be signed' sounds formal and professional. 'Whether' is perfect for yes/no questions in formal contexts.",
            correctFeedbackRu: "Отличный выбор! 'I'd like to know whether this document needs to be signed' звучит формально и профессионально. 'Whether' идеально подходит для вопросов да/нет в формальных контекстах.",
            incorrectFeedback: "Good thinking! While 'if' could work here, 'whether' is more formal and professional-sounding. In business contexts, 'whether' often sounds more polished than 'if', especially in written communication.",
            incorrectFeedbackRu: "Хорошо мыслите! Хотя 'if' могло бы подойти здесь, 'whether' звучит более формально и профессионально. В деловых контекстах 'whether' часто звучит более изысканно, чем 'if', особенно в письменном общении."
        },
        {
            question: "Complete the polite inquiry:",
            questionRu: "Дополните вежливый запрос:",
            sentence: "Could you possibly tell me ___ much this costs?",
            options: [
                "how",
                "how much",
                "what",
                "which"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could you possibly tell me how much this costs?' is perfectly polite. The word 'much' is already included after the blank.",
            correctFeedbackRu: "Отлично! 'Could you possibly tell me how much this costs?' совершенно вежливо. Слово 'much' уже включено после пропуска.",
            incorrectFeedback: "Look carefully at the sentence! Since 'much' already appears after the blank, we only need 'how' to complete the question. 'How much this costs' is the correct indirect question form.",
            incorrectFeedbackRu: "Внимательно посмотрите на предложение! Поскольку 'much' уже появляется после пропуска, нам нужно только 'how' для завершения вопроса. 'How much this costs' - правильная форма косвенного вопроса."
        },
        {
            question: "Choose the correct polite question form:",
            questionRu: "Выберите правильную форму вежливого вопроса:",
            sentence: "I wonder ___ you've finished the report yet.",
            options: [
                "if",
                "that",
                "what",
                "when"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I wonder if you've finished the report yet' is a gentle way to ask about progress. It shows interest without being pushy.",
            correctFeedbackRu: "Отлично! 'I wonder if you've finished the report yet' - мягкий способ спросить о прогрессе. Это показывает интерес, не будучи навязчивым.",
            incorrectFeedback: "Almost there! Since this is asking a yes/no question (finished or not finished), we need 'if' to introduce the indirect question. 'I wonder if...' is a gentle way to inquire about something.",
            incorrectFeedbackRu: "Почти правильно! Поскольку это вопрос да/нет (закончено или не закончено), нам нужно 'if' для введения косвенного вопроса. 'I wonder if...' - мягкий способ что-то выяснить."
        },
        {
            question: "Select the appropriate indirect question:",
            questionRu: "Выберите подходящий косвенный вопрос:",
            sentence: "Do you know ___ the office will be open tomorrow?",
            options: [
                "if",
                "that",
                "what time",
                "how"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Do you know if the office will be open tomorrow?' asks about whether something will happen. 'If' is perfect for yes/no questions.",
            correctFeedbackRu: "Правильно! 'Do you know if the office will be open tomorrow?' спрашивает о том, произойдет ли что-то. 'If' идеально подходит для вопросов да/нет.",
            incorrectFeedback: "Think about what we're asking! This is a yes/no question - will the office be open or not? For yes/no indirect questions, we use 'if' or 'whether'. 'What time' would ask about a specific time, but that's not what this question is about.",
            incorrectFeedbackRu: "Подумайте о том, что мы спрашиваем! Это вопрос да/нет - будет ли офис открыт или нет? Для косвенных вопросов да/нет мы используем 'if' или 'whether'. 'What time' спрашивало бы о конкретном времени, но это не то, о чем этот вопрос."
        },
        {
            question: "Complete the formal request:",
            questionRu: "Дополните официальную просьбу:",
            sentence: "I was hoping you could tell me ___ applications should be submitted.",
            options: [
                "where",
                "where are",
                "are where",
                "where do"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I was hoping you could tell me where applications should be submitted' maintains proper indirect question word order. Very professional!",
            correctFeedbackRu: "Отлично! 'I was hoping you could tell me where applications should be submitted' сохраняет правильный порядок слов в косвенном вопросе. Очень профессионально!",
            incorrectFeedback: "Remember the golden rule of indirect questions: keep normal sentence word order! After the introductory phrase 'I was hoping you could tell me,' we use 'where applications should be submitted' - just like a regular statement.",
            incorrectFeedbackRu: "Помните золотое правило косвенных вопросов: сохраняйте обычный порядок слов предложения! После вводной фразы 'I was hoping you could tell me' мы используем 'where applications should be submitted' - как в обычном утверждении."
        },
        {
            question: "Choose the most polite option:",
            questionRu: "Выберите самый вежливый вариант:",
            sentence: "Would it be possible to find out ___ the deadline is?",
            options: [
                "when",
                "when is",
                "is when",
                "what time"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Would it be possible to find out when the deadline is?' is extremely polite and professional. It shows respect for the other person's time and authority.",
            correctFeedbackRu: "Отлично! 'Would it be possible to find out when the deadline is?' чрезвычайно вежливо и профессионально. Это показывает уважение к времени и авторитету другого человека.",
            incorrectFeedback: "You're being wonderfully polite with that phrase! Just remember that after 'find out,' we use normal word order in indirect questions. So it's 'when the deadline is' rather than 'when is the deadline.'",
            incorrectFeedbackRu: "Вы замечательно вежливы с этой фразой! Просто помните, что после 'find out' мы используем обычный порядок слов в косвенных вопросах. Поэтому это 'when the deadline is', а не 'when is the deadline'."
        }
    ]
};

/* ============================================
Page 2: Polite indirect questions - Advanced forms and professional contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-page2'] = {
    title: "Polite indirect questions - Professional contexts",
    multipleChoice: [
        {
            question: "Select the most professional inquiry:",
            questionRu: "Выберите самый профессиональный запрос:",
            sentence: "I was wondering ___ you might have time for a brief meeting this week.",
            options: [
                "if",
                "that",
                "whether",
                "when"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent choice! 'I was wondering if you might have time' is perfectly professional and considerate. It shows respect for the other person's schedule.",
            correctFeedbackRu: "Отличный выбор! 'I was wondering if you might have time' совершенно профессионально и деликатно. Это показывает уважение к расписанию другого человека.",
            incorrectFeedback: "You're thinking well! While 'whether' could work, 'if' is more natural in conversational contexts. 'I was wondering if...' creates a gentle, non-demanding tone that's perfect for professional requests.",
            incorrectFeedbackRu: "Вы хорошо мыслите! Хотя 'whether' могло бы подойти, 'if' более естественно в разговорных контекстах. 'I was wondering if...' создает мягкий, ненастойчивый тон, который идеален для профессиональных просьб."
        },
        {
            question: "Complete the diplomatic question:",
            questionRu: "Дополните дипломатичный вопрос:",
            sentence: "Could you help me understand ___ this process typically takes?",
            options: [
                "how long",
                "how long time",
                "what time",
                "how much time"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Could you help me understand how long this process typically takes?' is professional and shows you value their expertise while asking for information.",
            correctFeedbackRu: "Отлично! 'Could you help me understand how long this process typically takes?' профессионально и показывает, что вы цените их экспертизу, спрашивая информацию.",
            incorrectFeedback: "Great diplomatic approach! 'How long' is the most natural way to ask about duration. We don't need to add 'time' after 'how long' because it's already implied in the question.",
            incorrectFeedbackRu: "Отличный дипломатический подход! 'How long' - самый естественный способ спросить о продолжительности. Нам не нужно добавлять 'time' после 'how long', потому что это уже подразумевается в вопросе."
        },
        {
            question: "Choose the most respectful way to ask:",
            questionRu: "Выберите самый уважительный способ спросить:",
            sentence: "I hope you don't mind me asking ___ the decision will be announced.",
            options: [
                "when",
                "when will",
                "will when",
                "what time will"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I hope you don't mind me asking when the decision will be announced' is very respectful and acknowledges that you're asking for potentially sensitive information.",
            correctFeedbackRu: "Отлично! 'I hope you don't mind me asking when the decision will be announced' очень уважительно и признает, что вы спрашиваете потенциально деликатную информацию.",
            incorrectFeedback: "You're being wonderfully respectful! Just remember that indirect questions follow normal sentence order. After 'asking,' we say 'when the decision will be announced' - just like making a statement.",
            incorrectFeedbackRu: "Вы замечательно уважительны! Просто помните, что косвенные вопросы следуют обычному порядку предложения. После 'asking' мы говорим 'when the decision will be announced' - как при утверждении."
        },
        {
            question: "Select the appropriate business inquiry:",
            questionRu: "Выберите подходящий деловой запрос:",
            sentence: "Would you be able to clarify ___ documents are required for the application?",
            options: [
                "which",
                "which are",
                "what",
                "that"
            ],
            correctAnswer: 0,
            correctFeedback: "Great choice! 'Would you be able to clarify which documents are required?' is professional and shows you're asking for specific guidance among options.",
            correctFeedbackRu: "Отличный выбор! 'Would you be able to clarify which documents are required?' профессионально и показывает, что вы просите конкретное руководство среди вариантов.",
            incorrectFeedback: "Good business instinct! 'Which' is perfect when asking about specific items from a set of options. It sounds more precise and professional than 'what' in this context, showing you understand there are specific requirements.",
            incorrectFeedbackRu: "Хороший деловой инстинкт! 'Which' идеально подходит при вопросе о конкретных элементах из набора вариантов. Это звучит более точно и профессионально, чем 'what' в этом контексте, показывая, что вы понимаете, что есть конкретные требования."
        },
        {
            question: "Complete the courteous request:",
            questionRu: "Дополните учтивую просьбу:",
            sentence: "I'd be grateful if you could let me know ___ the budget allows for this project.",
            options: [
                "whether",
                "if",
                "that",
                "how much"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I'd be grateful if you could let me know whether the budget allows for this project' is perfectly formal and professional for financial discussions.",
            correctFeedbackRu: "Отлично! 'I'd be grateful if you could let me know whether the budget allows for this project' совершенно формально и профессионально для финансовых обсуждений.",
            incorrectFeedback: "Beautiful courtesy! Both 'whether' and 'if' work here, but 'whether' sounds more formal and professional, especially in business contexts involving money and budgets. It adds that extra touch of formality that's appreciated in financial discussions.",
            incorrectFeedbackRu: "Прекрасная учтивость! И 'whether', и 'if' работают здесь, но 'whether' звучит более формально и профессионально, особенно в деловых контекстах, связанных с деньгами и бюджетами. Это добавляет тот дополнительный штрих формальности, который ценится в финансовых обсуждениях."
        },
        {
            question: "Choose the most tactful approach:",
            questionRu: "Выберите самый тактичный подход:",
            sentence: "I wonder if you might be able to advise me on ___ this situation should be handled.",
            options: [
                "how",
                "how is",
                "is how",
                "what way"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I wonder if you might be able to advise me on how this situation should be handled' is extremely tactful and shows you value their judgment and expertise.",
            correctFeedbackRu: "Отлично! 'I wonder if you might be able to advise me on how this situation should be handled' чрезвычайно тактично и показывает, что вы цените их суждение и экспертизу.",
            incorrectFeedback: "You're being wonderfully tactful! Remember that in indirect questions, we maintain normal sentence structure. So after 'advise me on,' we say 'how this situation should be handled' - keeping the natural flow of a statement.",
            incorrectFeedbackRu: "Вы замечательно тактичны! Помните, что в косвенных вопросах мы сохраняем обычную структуру предложения. Поэтому после 'advise me on' мы говорим 'how this situation should be handled' - сохраняя естественный поток утверждения."
        },
        {
            question: "Select the professional follow-up:",
            questionRu: "Выберите профессиональное продолжение:",
            sentence: "Could you possibly update me on ___ progress has been made so far?",
            options: [
                "what",
                "what has",
                "has what",
                "which"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could you possibly update me on what progress has been made so far?' is professional and shows genuine interest in the project without being demanding.",
            correctFeedbackRu: "Отлично! 'Could you possibly update me on what progress has been made so far?' профессионально и показывает искренний интерес к проекту, не будучи требовательным.",
            incorrectFeedback: "Great professional instinct! Just keep that smooth indirect question flow going. After 'update me on,' we use normal word order: 'what progress has been made' - just like describing something rather than asking directly.",
            incorrectFeedbackRu: "Отличный профессиональный инстинкт! Просто поддерживайте плавный поток косвенного вопроса. После 'update me on' мы используем обычный порядок слов: 'what progress has been made' - как при описании чего-то, а не при прямом вопросе."
        },
        {
            question: "Complete the diplomatic inquiry:",
            questionRu: "Дополните дипломатичный запрос:",
            sentence: "Would it be appropriate to ask ___ the next steps might be?",
            options: [
                "what",
                "what are",
                "are what",
                "which are"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Would it be appropriate to ask what the next steps might be?' shows exceptional diplomatic skill and respect for protocol.",
            correctFeedbackRu: "Отлично! 'Would it be appropriate to ask what the next steps might be?' показывает исключительное дипломатическое мастерство и уважение к протоколу.",
            incorrectFeedback: "Your diplomatic skills are impressive! You're showing great respect by asking if it's even appropriate to ask. Just remember the indirect question rule: normal word order. So it's 'what the next steps might be' - flowing like a natural statement.",
            incorrectFeedbackRu: "Ваши дипломатические навыки впечатляющие! Вы проявляете большое уважение, спрашивая, уместно ли вообще спрашивать. Просто помните правило косвенного вопроса: обычный порядок слов. Поэтому это 'what the next steps might be' - текущий как естественное утверждение."
        },
        {
            question: "Choose the most considerate phrasing:",
            questionRu: "Выберите самую деликатную формулировку:",
            sentence: "I hope I'm not overstepping by asking ___ timeline we're working with.",
            options: [
                "what",
                "what is",
                "is what",
                "which"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I hope I'm not overstepping by asking what timeline we're working with' shows remarkable consideration and professional awareness of boundaries.",
            correctFeedbackRu: "Отлично! 'I hope I'm not overstepping by asking what timeline we're working with' показывает замечательную деликатность и профессиональное понимание границ.",
            incorrectFeedback: "You're being incredibly considerate! That phrase shows real professional emotional intelligence. Just maintain that smooth indirect question style: 'what timeline we're working with' keeps the natural sentence flow without question inversion.",
            incorrectFeedbackRu: "Вы невероятно деликатны! Эта фраза показывает настоящий профессиональный эмоциональный интеллект. Просто сохраняйте этот плавный стиль косвенного вопроса: 'what timeline we're working with' сохраняет естественный поток предложения без вопросительной инверсии."
        },
        {
            question: "Select the appropriate closing inquiry:",
            questionRu: "Выберите подходящий заключительный запрос:",
            sentence: "Before we finish, may I ask ___ there are any other concerns to address?",
            options: [
                "if",
                "that",
                "whether",
                "what"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Before we finish, may I ask if there are any other concerns to address?' is an excellent way to conclude a meeting professionally and thoroughly.",
            correctFeedbackRu: "Отлично! 'Before we finish, may I ask if there are any other concerns to address?' - отличный способ профессионально и тщательно завершить встречу.",
            incorrectFeedback: "Excellent meeting management! You're showing real professionalism by checking for remaining concerns. While 'whether' could work, 'if' is more natural in spoken English and creates a warmer, more approachable tone for closing discussions.",
            incorrectFeedbackRu: "Отличное управление встречей! Вы проявляете настоящий профессионализм, проверяя оставшиеся проблемы. Хотя 'whether' могло бы работать, 'if' более естественно в разговорном английском и создает более теплый, доступный тон для завершения обсуждений."
        }
    ]
};

/* =============================================================================== */
/* ===========================Fill in the Gaps Exercises========================== */

/* =============================================================================== */
/* =========================Sentence Building Exercises=========================== */
