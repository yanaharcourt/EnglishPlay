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

/* ============================================
Page 3: Polite indirect questions - Complex situations and sensitive topics
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-page3'] = {
    title: "Polite indirect questions - Complex situations",
    multipleChoice: [
        {
            question: "Choose the most tactful way to inquire about a sensitive matter:",
            questionRu: "Выберите самый тактичный способ расспросить о деликатном вопросе:",
            sentence: "I hope this isn't too personal, but I was curious ___ you decided to change careers.",
            options: [
                "why",
                "why did",
                "did why",
                "how come"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I hope this isn't too personal, but I was curious why you decided to change careers' shows sensitivity while maintaining proper indirect question structure.",
            correctFeedbackRu: "Отлично! 'I hope this isn't too personal, but I was curious why you decided to change careers' показывает деликатность, сохраняя правильную структуру косвенного вопроса.",
            incorrectFeedback: "You're being wonderfully sensitive! Just remember that indirect questions keep normal word order. After 'I was curious,' we say 'why you decided' - no inversion needed.",
            incorrectFeedbackRu: "Вы замечательно деликатны! Просто помните, что косвенные вопросы сохраняют обычный порядок слов. После 'I was curious' мы говорим 'why you decided' - инверсия не нужна."
        },
        {
            question: "Select the most diplomatic approach for a difficult conversation:",
            questionRu: "Выберите самый дипломатичный подход для сложного разговора:",
            sentence: "Would you feel comfortable sharing ___ led to this unfortunate situation?",
            options: [
                "what",
                "what has",
                "has what",
                "that what"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Would you feel comfortable sharing what led to this unfortunate situation?' acknowledges the difficulty while giving the person control over whether to respond.",
            correctFeedbackRu: "Отлично! 'Would you feel comfortable sharing what led to this unfortunate situation?' признает сложность, давая человеку контроль над тем, отвечать ли.",
            incorrectFeedback: "Your diplomatic instincts are spot on! You're giving them the choice to share or not. Just keep that smooth indirect question flow: 'what led to this situation' maintains natural word order.",
            incorrectFeedbackRu: "Ваши дипломатические инстинкты точны! Вы даете им выбор поделиться или нет. Просто поддерживайте плавный поток косвенного вопроса: 'what led to this situation' сохраняет естественный порядок слов."
        },
        {
            question: "Complete the respectful inquiry about a complex policy:",
            questionRu: "Дополните уважительный запрос о сложной политике:",
            sentence: "I was hoping you could explain ___ this new regulation affects our department.",
            options: [
                "how",
                "how does",
                "does how",
                "in what way"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I was hoping you could explain how this new regulation affects our department' is professional and shows you value their expertise in navigating complex policies.",
            correctFeedbackRu: "Отлично! 'I was hoping you could explain how this new regulation affects our department' профессионально и показывает, что вы цените их экспертизу в навигации сложных политик.",
            incorrectFeedback: "Great professional approach! You're acknowledging their expertise with complex regulations. Remember to keep indirect question structure simple: 'how this regulation affects' flows naturally without question word order.",
            incorrectFeedbackRu: "Отличный профессиональный подход! Вы признаете их экспертизу в сложных регуляциях. Помните о простой структуре косвенного вопроса: 'how this regulation affects' течет естественно без вопросительного порядка слов."
        },
        {
            question: "Choose the most appropriate way to address a controversial topic:",
            questionRu: "Выберите самый подходящий способ затронуть спорную тему:",
            sentence: "I realize this might be a sensitive subject, but could you help me understand ___ the board reached this conclusion?",
            options: [
                "how",
                "how did",
                "did how",
                "the way"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I realize this might be a sensitive subject, but could you help me understand how the board reached this conclusion?' shows awareness of sensitivity while seeking understanding.",
            correctFeedbackRu: "Отлично! 'I realize this might be a sensitive subject, but could you help me understand how the board reached this conclusion?' показывает понимание деликатности, стремясь к пониманию.",
            incorrectFeedback: "You're handling this controversial topic with real skill! Acknowledging sensitivity upfront is wise. Just maintain that indirect question structure: 'how the board reached this conclusion' keeps the conversational flow smooth.",
            incorrectFeedbackRu: "Вы обращаетесь с этой спорной темой с настоящим мастерством! Признание деликатности заранее мудро. Просто поддерживайте структуру косвенного вопроса: 'how the board reached this conclusion' сохраняет плавность разговора."
        },
        {
            question: "Select the most considerate phrasing for a personal matter:",
            questionRu: "Выберите самую деликатную формулировку для личного вопроса:",
            sentence: "If you don't mind my asking, ___ you're planning to relocate affects the entire team's future.",
            options: [
                "whether",
                "whether are",
                "are whether",
                "if are"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If you don't mind my asking, whether you're planning to relocate affects the entire team's future' shows consideration for privacy while addressing legitimate team concerns.",
            correctFeedbackRu: "Отлично! 'If you don't mind my asking, whether you're planning to relocate affects the entire team's future' показывает уважение к приватности, затрагивая законные командные заботы.",
            incorrectFeedback: "You're being incredibly thoughtful about privacy! The phrase 'if you don't mind my asking' shows real emotional intelligence. Keep the indirect question smooth: 'whether you're planning to relocate' maintains natural flow.",
            incorrectFeedbackRu: "Вы невероятно внимательны к приватности! Фраза 'if you don't mind my asking' показывает настоящий эмоциональный интеллект. Поддерживайте плавность косвенного вопроса: 'whether you're planning to relocate' сохраняет естественный поток."
        },
        {
            question: "Complete the careful approach to a financial discussion:",
            questionRu: "Дополните осторожный подход к финансовому обсуждению:",
            sentence: "I don't want to pry, but I was wondering ___ the budget cuts might impact our current projects.",
            options: [
                "how",
                "how will",
                "will how",
                "in which way"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I don't want to pry, but I was wondering how the budget cuts might impact our current projects' balances respect for confidentiality with legitimate project concerns.",
            correctFeedbackRu: "Отлично! 'I don't want to pry, but I was wondering how the budget cuts might impact our current projects' балансирует уважение к конфиденциальности с законными заботами о проектах.",
            incorrectFeedback: "Perfect instinct to acknowledge you're being careful about sensitive financial information! Your consideration is admirable. Just keep that indirect question flowing: 'how the budget cuts might impact' sounds natural and professional.",
            incorrectFeedbackRu: "Идеальный инстинкт признать, что вы осторожны с деликатной финансовой информацией! Ваша деликатность восхитительна. Просто поддерживайте поток косвенного вопроса: 'how the budget cuts might impact' звучит естественно и профессионально."
        },
        {
            question: "Choose the most empathetic way to address a difficult situation:",
            questionRu: "Выберите самый эмпатичный способ обратиться к сложной ситуации:",
            sentence: "I can imagine this is stressful, but would you be willing to share ___ we can best support you during this transition?",
            options: [
                "how",
                "how can",
                "can how",
                "what way"
            ],
            correctAnswer: 0,
            correctFeedback: "Beautiful! 'I can imagine this is stressful, but would you be willing to share how we can best support you during this transition?' shows genuine empathy and focuses on helping rather than prying.",
            correctFeedbackRu: "Прекрасно! 'I can imagine this is stressful, but would you be willing to share how we can best support you during this transition?' показывает искреннее сочувствие и фокусируется на помощи, а не на любопытстве.",
            incorrectFeedback: "Your empathy is wonderful! Acknowledging their stress and offering support shows real emotional intelligence. Just maintain that gentle indirect question structure: 'how we can best support you' keeps the caring tone intact.",
            incorrectFeedbackRu: "Ваше сочувствие замечательно! Признание их стресса и предложение поддержки показывает настоящий эмоциональный интеллект. Просто поддерживайте мягкую структуру косвенного вопроса: 'how we can best support you' сохраняет заботливый тон."
        },
        {
            question: "Select the most professional approach to a strategic question:",
            questionRu: "Выберите самый профессиональный подход к стратегическому вопросу:",
            sentence: "Given the complexity of the situation, I was hoping to understand ___ the leadership team plans to address these challenges.",
            options: [
                "how",
                "how does",
                "does how",
                "the way how"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Given the complexity of the situation, I was hoping to understand how the leadership team plans to address these challenges' shows strategic thinking and respect for leadership decisions.",
            correctFeedbackRu: "Отлично! 'Given the complexity of the situation, I was hoping to understand how the leadership team plans to address these challenges?' показывает стратегическое мышление и уважение к решениям руководства.",
            incorrectFeedback: "Outstanding strategic awareness! You're acknowledging complexity while seeking understanding of leadership decisions. Keep that professional indirect question flow: 'how the leadership team plans' maintains the respectful, consultative tone.",
            incorrectFeedbackRu: "Выдающееся стратегическое понимание! Вы признаете сложность, стремясь понять решения руководства. Поддерживайте профессиональный поток косвенного вопроса: 'how the leadership team plans' сохраняет уважительный, консультативный тон."
        },
        {
            question: "Complete the delicate inquiry about a controversial decision:",
            questionRu: "Дополните деликатный запрос о спорном решении:",
            sentence: "I understand this was a difficult decision, but could you possibly shed some light on ___ factors influenced the final outcome?",
            options: [
                "which",
                "which were",
                "were which",
                "what kind of"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I understand this was a difficult decision, but could you possibly shed some light on which factors influenced the final outcome?' acknowledges the difficulty while respectfully seeking insight.",
            correctFeedbackRu: "Отлично! 'I understand this was a difficult decision, but could you possibly shed some light on which factors influenced the final outcome?' признает сложность, уважительно стремясь к пониманию.",
            incorrectFeedback: "Exceptional emotional intelligence! You're acknowledging the difficulty of their decision before asking. Just keep that indirect question structure flowing smoothly: 'which factors influenced' maintains the respectful, understanding tone you've established.",
            incorrectFeedbackRu: "Исключительный эмоциональный интеллект! Вы признаете сложность их решения перед вопросом. Просто поддерживайте плавную структуру косвенного вопроса: 'which factors influenced' сохраняет уважительный, понимающий тон, который вы установили."
        },
        {
            question: "Choose the most appropriate closing for a sensitive discussion:",
            questionRu: "Выберите самое подходящее завершение для деликатного обсуждения:",
            sentence: "Thank you for being so open. As we conclude, may I ask ___ there's anything else you'd like us to be aware of moving forward?",
            options: [
                "if",
                "whether",
                "that",
                "what else"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent conclusion! 'Thank you for being so open. As we conclude, may I ask if there's anything else you'd like us to be aware of moving forward?' shows gratitude and ensures nothing important is missed.",
            correctFeedbackRu: "Отличное завершение! 'Thank you for being so open. As we conclude, may I ask if there's anything else you'd like us to be aware of moving forward?' показывает благодарность и гарантирует, что ничего важного не упущено.",
            incorrectFeedback: "Beautiful way to close a sensitive conversation! Thanking them for openness and checking for additional concerns shows real professionalism. While 'whether' could work, 'if' creates a warmer, more conversational tone for this caring conclusion.",
            incorrectFeedbackRu: "Прекрасный способ завершить деликатный разговор! Благодарность за открытость и проверка дополнительных забот показывает настоящий профессионализм. Хотя 'whether' могло бы работать, 'if' создает более теплый, разговорный тон для этого заботливого завершения."
        }
    ]
};

/* ============================================
Page 4: Polite indirect questions - Academic and research contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-page4'] = {
    title: "Polite indirect questions - Academic contexts",
    multipleChoice: [
        {
            question: "Select the most scholarly approach to requesting information:",
            questionRu: "Выберите самый академический подход к запросу информации:",
            sentence: "I would be most grateful if you could illuminate ___ methodology was employed in your research.",
            options: [
                "which",
                "which was",
                "was which",
                "what kind"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I would be most grateful if you could illuminate which methodology was employed in your research' demonstrates sophisticated academic discourse and respect for scholarly work.",
            correctFeedbackRu: "Отлично! 'I would be most grateful if you could illuminate which methodology was employed in your research' демонстрирует изощренный академический дискурс и уважение к научной работе.",
            incorrectFeedback: "Your academic tone is impeccable! 'Illuminate' shows real scholarly sophistication. Just remember that indirect questions maintain statement word order: 'which methodology was employed' flows naturally without question inversion.",
            incorrectFeedbackRu: "Ваш академический тон безупречен! 'Illuminate' показывает настоящую научную изощренность. Просто помните, что косвенные вопросы сохраняют порядок слов утверждения: 'which methodology was employed' течет естественно без вопросительной инверсии."
        },
        {
            question: "Complete the scholarly inquiry:",
            questionRu: "Дополните научный запрос:",
            sentence: "Would it be possible to ascertain ____ data collection period spanned for this longitudinal study?",
            correctAnswer: "how long the",
            options: ["how long the", "how long did the", "what period the", "which time the"],
            correctFeedback: "Excellent! 'How long the' is correct for asking about duration in formal academic contexts while maintaining proper indirect question structure.",
            correctFeedbackRu: "Отлично! 'How long the' правильно для вопросов о продолжительности в формальных академических контекстах, сохраняя правильную структуру косвенного вопроса.",
            incorrectFeedback: "Outstanding scholarly vocabulary! 'Ascertain' shows real academic sophistication. Remember that indirect questions use statement word order: 'how long the data collection period spanned'.",
            incorrectFeedbackRu: "Выдающаяся научная лексика! 'Ascertain' показывает настоящую академическую изощренность. Помните, что косвенные вопросы используют порядок слов утверждения: 'how long the data collection period spanned'."
        },
        {
            question: "Complete the research-focused question:",
            questionRu: "Дополните вопрос, ориентированный на исследование:",
            sentence: "I'm particularly interested in understanding ___ variables were controlled for in your experimental design.",
            options: [
                "which",
                "which were",
                "were which",
                "what type of"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I'm particularly interested in understanding which variables were controlled for in your experimental design' demonstrates genuine scholarly curiosity and methodological awareness.",
            correctFeedbackRu: "Отлично! 'I'm particularly interested in understanding which variables were controlled for in your experimental design' демонстрирует искреннее научное любопытство и методологическое понимание.",
            incorrectFeedback: "Your methodological awareness is impressive! Asking about controlled variables shows real research sophistication. Maintain that academic indirect question flow: 'which variables were controlled' keeps the scholarly discussion moving smoothly.",
            incorrectFeedbackRu: "Ваше методологическое понимание впечатляет! Вопрос о контролируемых переменных показывает настоящую исследовательскую изощренность. Поддерживайте академический поток косвенного вопроса: 'which variables were controlled' поддерживает плавность научного обсуждения."
        },
        {
            question: "Select the most appropriate scholarly phrasing:",
            questionRu: "Выберите наиболее подходящую научную формулировку:",
            sentence: "Could you elaborate on ___ statistical significance was determined in your analysis?",
            options: [
                "how",
                "how was",
                "was how",
                "the way in which"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Could you elaborate on how statistical significance was determined in your analysis?' shows sophisticated understanding of research methodology and statistical concepts.",
            correctFeedbackRu: "Отлично! 'Could you elaborate on how statistical significance was determined in your analysis?' показывает изощренное понимание исследовательской методологии и статистических концепций.",
            incorrectFeedback: "Excellent statistical awareness! Asking about significance determination shows real research literacy. Keep that scholarly indirect question structure: 'how statistical significance was determined' maintains the academic precision you're demonstrating.",
            incorrectFeedbackRu: "Отличное статистическое понимание! Вопрос об определении значимости показывает настоящую исследовательскую грамотность. Поддерживайте научную структуру косвенного вопроса: 'how statistical significance was determined' сохраняет академическую точность, которую вы демонстрируете."
        },
        {
            question: "Choose the most academic approach to a theoretical question:",
            questionRu: "Выберите самый академический подход к теоретическому вопросу:",
            sentence: "I was curious to explore ___ theoretical framework underpins your hypothesis formation.",
            options: [
                "which",
                "which does",
                "does which",
                "what type of"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I was curious to explore which theoretical framework underpins your hypothesis formation' demonstrates deep engagement with theoretical foundations and research logic.",
            correctFeedbackRu: "Отлично! 'I was curious to explore which theoretical framework underpins your hypothesis formation' демонстрирует глубокое понимание теоретических основ и исследовательской логики.",
            incorrectFeedback: "Outstanding theoretical engagement! Your interest in theoretical frameworks shows sophisticated academic thinking. Maintain that scholarly indirect question style: 'which theoretical framework underpins' flows naturally in academic discourse.",
            incorrectFeedbackRu: "Выдающееся теоретическое понимание! Ваш интерес к теоретическим рамкам показывает изощренное академическое мышление. Поддерживайте научный стиль косвенного вопроса: 'which theoretical framework underpins' течет естественно в академическом дискурсе."
        },
        {
            question: "Complete the peer review inquiry:",
            questionRu: "Дополните запрос экспертной оценки:",
            sentence: "Would you mind clarifying ____ peer review process was conducted for this publication?",
            correctAnswer: "how the",
            options: ["how the", "how was the", "in what manner the", "the way the"],
            correctFeedback: "Excellent! 'How the' is correct for asking about academic publishing processes while maintaining scholarly formality.",
            correctFeedbackRu: "Отлично! 'How the' правильно для вопросов о процессах академической публикации, сохраняя научную формальность.",
            incorrectFeedback: "Excellent awareness of academic publishing! We use 'how the peer review process was conducted' to ask about publication standards.",
            incorrectFeedbackRu: "Отличное понимание академической публикации! Мы используем 'how the peer review process was conducted' для вопросов о стандартах публикации."
        },
        {
            question: "Select the most scholarly approach to discussing limitations:",
            questionRu: "Выберите самый научный подход к обсуждению ограничений:",
            sentence: "I would appreciate your perspective on ___ limitations might affect the generalizability of these findings.",
            options: [
                "what",
                "what do",
                "do what",
                "which type of"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I would appreciate your perspective on what limitations might affect the generalizability of these findings' demonstrates sophisticated understanding of research validity and scope.",
            correctFeedbackRu: "Отлично! 'I would appreciate your perspective on what limitations might affect the generalizability of these findings' демонстрирует изощренное понимание валидности и масштаба исследования.",
            incorrectFeedback: "Outstanding methodological awareness! Discussing generalizability shows real research sophistication. Your indirect question flows perfectly: 'what limitations might affect' maintains the scholarly tone while exploring critical research considerations.",
            incorrectFeedbackRu: "Выдающееся методологическое понимание! Обсуждение обобщаемости показывает настоящую исследовательскую изощренность. Ваш косвенный вопрос течет идеально: 'what limitations might affect' сохраняет научный тон, исследуя критические исследовательские соображения."
        },
        {
            question: "Choose the most appropriate conference presentation inquiry:",
            questionRu: "Выберите самый подходящий запрос о конференционной презентации:",
            sentence: "Could you share your insights on ___ audience reception was gauged during your keynote presentation?",
            options: [
                "how",
                "how was",
                "was how",
                "the method by which"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Could you share your insights on how audience reception was gauged during your keynote presentation?' shows interest in presentation effectiveness and audience engagement strategies.",
            correctFeedbackRu: "Отлично! 'Could you share your insights on how audience reception was gauged during your keynote presentation?' показывает интерес к эффективности презентации и стратегиям вовлечения аудитории.",
            incorrectFeedback: "Excellent presentation awareness! Your interest in audience reception shows sophisticated understanding of academic communication. Keep that indirect question academic: 'how audience reception was gauged' maintains scholarly discussion flow.",
            incorrectFeedbackRu: "Отличное понимание презентации! Ваш интерес к восприятию аудитории показывает изощренное понимание академической коммуникации. Поддерживайте академический косвенный вопрос: 'how audience reception was gauged' сохраняет поток научного обсуждения."
        },
        {
            question: "Complete the interdisciplinary collaboration question:",
            questionRu: "Дополните вопрос о междисциплинарном сотрудничестве:",
            sentence: "I'm keen to understand ___ cross-disciplinary expertise was integrated into your research team.",
            options: [
                "how",
                "how was",
                "was how",
                "the process by which"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I'm keen to understand how cross-disciplinary expertise was integrated into your research team' demonstrates appreciation for collaborative research and methodological diversity.",
            correctFeedbackRu: "Отлично! 'I'm keen to understand how cross-disciplinary expertise was integrated into your research team' демонстрирует понимание совместных исследований и методологического разнообразия.",
            incorrectFeedback: "Outstanding collaborative awareness! Your interest in cross-disciplinary integration shows sophisticated understanding of modern research approaches. Maintain that academic indirect question structure: 'how cross-disciplinary expertise was integrated' flows naturally in scholarly discourse.",
            incorrectFeedbackRu: "Выдающееся понимание сотрудничества! Ваш интерес к междисциплинарной интеграции показывает изощренное понимание современных исследовательских подходов. Поддерживайте академическую структуру косвенного вопроса: 'how cross-disciplinary expertise was integrated' течет естественно в научном дискурсе."
        },
        {
            question: "Select the most appropriate grant funding inquiry:",
            questionRu: "Выберите самый подходящий запрос о грантовом финансировании:",
            sentence: "Would it be appropriate to inquire ___ funding mechanisms supported this extensive longitudinal research?",
            options: [
                "which",
                "which did",
                "did which",
                "what type of"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Would it be appropriate to inquire which funding mechanisms supported this extensive longitudinal research?' shows awareness of research funding realities and respect for disclosure boundaries.",
            correctFeedbackRu: "Отлично! 'Would it be appropriate to inquire which funding mechanisms supported this extensive longitudinal research?' показывает понимание реалий исследовательского финансирования и уважение к границам раскрытия.",
            incorrectFeedback: "Excellent academic diplomacy! Asking if it's appropriate to inquire shows real sensitivity to funding disclosure protocols. Your indirect question structure is perfect: 'which funding mechanisms supported' maintains scholarly professionalism while respecting boundaries.",
            incorrectFeedbackRu: "Отличная академическая дипломатия! Вопрос о том, уместно ли спрашивать, показывает настоящую чувствительность к протоколам раскрытия финансирования. Ваша структура косвенного вопроса идеальна: 'which funding mechanisms supported' сохраняет научный профессионализм, уважая границы."
        }
    ]
};

/* ============================================
Page 5: Polite indirect questions - International and cultural contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-page5'] = {
    title: "Polite indirect questions - International contexts",
    multipleChoice: [
        {
            question: "Choose the most culturally sensitive approach:",
            questionRu: "Выберите самый культурно чувствительный подход:",
            sentence: "I hope I'm not overstepping cultural boundaries by asking ___ traditional ceremonies are typically conducted in your community.",
            options: [
                "how",
                "how are",
                "are how",
                "the manner in which"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I hope I'm not overstepping cultural boundaries by asking how traditional ceremonies are typically conducted in your community' shows remarkable cultural sensitivity and genuine respect for traditions.",
            correctFeedbackRu: "Отлично! 'I hope I'm not overstepping cultural boundaries by asking how traditional ceremonies are typically conducted in your community' показывает замечательную культурную чувствительность и искреннее уважение к традициям.",
            incorrectFeedback: "Outstanding cultural awareness! Your concern about overstepping boundaries shows real respect for cultural differences. Maintain that sensitive indirect question flow: 'how traditional ceremonies are conducted' preserves the respectful tone you've established.",
            incorrectFeedbackRu: "Выдающееся культурное понимание! Ваша забота о переходе границ показывает настоящее уважение к культурным различиям. Поддерживайте деликатный поток косвенного вопроса: 'how traditional ceremonies are conducted' сохраняет уважительный тон, который вы установили."
        },
        {
            question: "Select the most appropriate diplomatic inquiry:",
            questionRu: "Выберите самый подходящий дипломатический запрос:",
            sentence: "Would you feel comfortable explaining ___ your government's recent policy shift might impact international relations?",
            options: [
                "how",
                "how might",
                "might how",
                "in what ways"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Would you feel comfortable explaining how your government's recent policy shift might impact international relations?' demonstrates diplomatic tact while addressing significant geopolitical matters.",
            correctFeedbackRu: "Отлично! 'Would you feel comfortable explaining how your government's recent policy shift might impact international relations?' демонстрирует дипломатический такт, затрагивая важные геополитические вопросы.",
            incorrectFeedback: "Exceptional diplomatic instincts! Asking if they feel comfortable shows real sensitivity to potentially sensitive political topics. Your indirect question structure maintains diplomatic grace: 'how your government's policy shift might impact' keeps the discussion professional and respectful.",
            incorrectFeedbackRu: "Исключительные дипломатические инстинкты! Вопрос о том, комфортно ли им, показывает настоящую чувствительность к потенциально деликатным политическим темам. Ваша структура косвенного вопроса сохраняет дипломатическую грацию: 'how your government's policy shift might impact' поддерживает профессиональное и уважительное обсуждение."
        },
        {
            question: "Complete the cross-cultural business inquiry:",
            questionRu: "Дополните межкультурный деловой запрос:",
            sentence: "I'd be grateful to understand ___ business etiquette differs between our respective cultures during negotiations.",
            options: [
                "how",
                "how does",
                "does how",
                "the ways in which"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I'd be grateful to understand how business etiquette differs between our respective cultures during negotiations' shows cultural intelligence and commitment to successful international business relationships.",
            correctFeedbackRu: "Отлично! 'I'd be grateful to understand how business etiquette differs between our respective cultures during negotiations' показывает культурный интеллект и приверженность успешным международным деловым отношениям.",
            incorrectFeedback: "Outstanding cultural business awareness! Your focus on etiquette differences shows real international business sophistication. Keep that cross-cultural indirect question flowing: 'how business etiquette differs' demonstrates respect for cultural nuances in professional settings.",
            incorrectFeedbackRu: "Выдающееся культурное деловое понимание! Ваш фокус на различиях этикета показывает настоящую международную деловую изощренность. Поддерживайте межкультурный поток косвенного вопроса: 'how business etiquette differs' демонстрирует уважение к культурным нюансам в профессиональных условиях."
        },
        {
            question: "Choose the most respectful approach to religious inquiry:",
            questionRu: "Выберите самый уважительный подход к религиозному запросу:",
            sentence: "If it's not too personal, I was wondering ___ religious observances influence daily life in your region.",
            options: [
                "how",
                "how do",
                "do how",
                "the extent to which"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If it's not too personal, I was wondering how religious observances influence daily life in your region' shows exceptional sensitivity to religious privacy while expressing genuine cultural interest.",
            correctFeedbackRu: "Отлично! 'If it's not too personal, I was wondering how religious observances influence daily life in your region' показывает исключительную чувствительность к религиозной приватности, выражая искренний культурный интерес.",
            incorrectFeedback: "Beautiful religious sensitivity! Acknowledging that this might be personal shows real respect for spiritual privacy. Your indirect question maintains that respectful tone: 'how religious observances influence daily life' keeps the inquiry gentle and non-intrusive.",
            incorrectFeedbackRu: "Прекрасная религиозная чувствительность! Признание того, что это может быть личным, показывает настоящее уважение к духовной приватности. Ваш косвенный вопрос сохраняет уважительный тон: 'how religious observances influence daily life' поддерживает мягкий и ненавязчивый запрос."
        },
        {
            question: "Select the most appropriate multicultural workplace question:",
            questionRu: "Выберите самый подходящий вопрос для мультикультурного рабочего места:",
            sentence: "I was hoping to learn ___ cultural communication styles might be affecting our team dynamics.",
            options: [
                "whether",
                "whether are",
                "are whether",
                "if are"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I was hoping to learn whether cultural communication styles might be affecting our team dynamics' demonstrates cultural intelligence and commitment to inclusive team management.",
            correctFeedbackRu: "Отлично! 'I was hoping to learn whether cultural communication styles might be affecting our team dynamics' демонстрирует культурный интеллект и приверженность инклюзивному управлению командой.",
            incorrectFeedback: "Outstanding multicultural leadership awareness! Your focus on communication styles shows real understanding of diverse workplace dynamics. Your indirect question structure is perfect: 'whether cultural communication styles might be affecting' maintains professional sensitivity to cultural differences.",
            incorrectFeedbackRu: "Выдающееся понимание мультикультурного руководства! Ваш фокус на стилях общения показывает настоящее понимание разнообразной рабочей динамики. Ваша структура косвенного вопроса идеальна: 'whether cultural communication styles might be affecting' сохраняет профессиональную чувствительность к культурным различиям."
        },
        {
            question: "Complete the international education inquiry:",
            questionRu: "Дополните запрос о международном образовании:",
            sentence: "Could you help me understand ___ educational systems in your country prepare students for global careers?",
            options: [
                "how",
                "how do",
                "do how",
                "the methods by which"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Could you help me understand how educational systems in your country prepare students for global careers?' shows interest in international educational approaches and global workforce preparation.",
            correctFeedbackRu: "Отлично! 'Could you help me understand how educational systems in your country prepare students for global careers?' показывает интерес к международным образовательным подходам и подготовке глобальной рабочей силы.",
            incorrectFeedback: "Excellent global education awareness! Your interest in international educational systems shows sophisticated understanding of global career preparation. Maintain that educational indirect question flow: 'how educational systems prepare students' demonstrates respect for different educational philosophies.",
            incorrectFeedbackRu: "Отличное понимание глобального образования! Ваш интерес к международным образовательным системам показывает изощренное понимание подготовки глобальной карьеры. Поддерживайте образовательный поток косвенного вопроса: 'how educational systems prepare students' демонстрирует уважение к различным образовательным философиям."
        },
        {
            question: "Choose the most sensitive approach to discussing social issues:",
            questionRu: "Выберите самый деликатный подход к обсуждению социальных проблем:",
            sentence: "I realize this is a complex topic, but I was curious ___ social movements in your country address inequality.",
            options: [
                "how",
                "how do",
                "do how",
                "the approaches that"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I realize this is a complex topic, but I was curious how social movements in your country address inequality' acknowledges complexity while showing genuine interest in social justice approaches.",
            correctFeedbackRu: "Отлично! 'I realize this is a complex topic, but I was curious how social movements in your country address inequality' признает сложность, проявляя искренний интерес к подходам социальной справедливости.",
            incorrectFeedback: "Outstanding social awareness! Acknowledging complexity shows real sensitivity to potentially divisive social topics. Your indirect question maintains respectful discourse: 'how social movements address inequality' keeps the discussion constructive and educational.",
            incorrectFeedbackRu: "Выдающееся социальное понимание! Признание сложности показывает настоящую чувствительность к потенциально спорным социальным темам. Ваш косвенный вопрос сохраняет уважительный дискурс: 'how social movements address inequality' поддерживает конструктивное и образовательное обсуждение."
        },
        {
            question: "Select the most appropriate environmental policy question:",
            questionRu: "Выберите самый подходящий вопрос об экологической политике:",
            sentence: "Would you mind sharing your perspective on ___ environmental policies are being implemented to address climate challenges?",
            options: [
                "which",
                "which are",
                "are which",
                "what types of"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Would you mind sharing your perspective on which environmental policies are being implemented to address climate challenges?' demonstrates global environmental awareness and respect for national policy approaches.",
            correctFeedbackRu: "Отлично! 'Would you mind sharing your perspective on which environmental policies are being implemented to address climate challenges?' демонстрирует глобальное экологическое понимание и уважение к национальным политическим подходам.",
            incorrectFeedback: "Excellent environmental consciousness! Your interest in climate policy implementation shows sophisticated understanding of global environmental challenges. Keep that policy-focused indirect question structure: 'which environmental policies are being implemented' maintains professional discussion of international environmental cooperation.",
            incorrectFeedbackRu: "Отличное экологическое сознание! Ваш интерес к реализации климатической политики показывает изощренное понимание глобальных экологических вызовов. Поддерживайте политически ориентированную структуру косвенного вопроса: 'which environmental policies are being implemented' сохраняет профессиональное обсуждение международного экологического сотрудничества."
        },
        {
            question: "Complete the cross-cultural innovation inquiry:",
            questionRu: "Дополните межкультурный инновационный запрос:",
            sentence: "I'm fascinated to discover ___ innovation cultures differ across various technological hubs globally.",
            options: [
                "how",
                "how do",
                "do how",
                "the ways that"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I'm fascinated to discover how innovation cultures differ across various technological hubs globally' shows appreciation for diverse approaches to technological development and cultural innovation styles.",
            correctFeedbackRu: "Отлично! 'I'm fascinated to discover how innovation cultures differ across various technological hubs globally' показывает понимание разнообразных подходов к технологическому развитию и культурных стилей инноваций.",
            incorrectFeedback: "Outstanding global innovation awareness! Your fascination with diverse innovation cultures shows sophisticated understanding of international technological development. Your indirect question flows perfectly: 'how innovation cultures differ' demonstrates genuine appreciation for cultural diversity in technological advancement.",
            incorrectFeedbackRu: "Выдающееся понимание глобальных инноваций! Ваше увлечение разнообразными культурами инноваций показывает изощренное понимание международного технологического развития. Ваш косвенный вопрос течет идеально: 'how innovation cultures differ' демонстрирует искреннее понимание культурного разнообразия в технологическом прогрессе."
        },
        {
            question: "Choose the most respectful conclusion for international dialogue:",
            questionRu: "Выберите самое уважительное завершение для международного диалога:",
            sentence: "As we conclude this enriching cultural exchange, may I ask ___ there are other aspects of your heritage you'd be willing to share?",
            options: [
                "if",
                "whether",
                "that",
                "what other"
            ],
            correctAnswer: 0,
            correctFeedback: "Beautiful conclusion! 'As we conclude this enriching cultural exchange, may I ask if there are other aspects of your heritage you'd be willing to share?' shows deep appreciation for cultural learning and respect for personal sharing boundaries.",
            correctFeedbackRu: "Прекрасное завершение! 'As we conclude this enriching cultural exchange, may I ask if there are other aspects of your heritage you'd be willing to share?' показывает глубокое понимание культурного обучения и уважение к границам личного обмена.",
            incorrectFeedback: "Exceptional cultural diplomacy! Calling it an 'enriching cultural exchange' shows real appreciation for cross-cultural learning. While 'whether' could work, 'if' creates a warmer, more conversational tone that's perfect for this kind of meaningful cultural conclusion.",
            incorrectFeedbackRu: "Исключительная культурная дипломатия! Называя это 'обогащающим культурным обменом', вы показываете настоящее понимание межкультурного обучения. Хотя 'whether' могло бы работать, 'if' создает более теплый, разговорный тон, который идеален для такого значимого культурного завершения."
        }
    ]
};

/* ============================================
Page 7: Polite indirect questions - Legal and financial advisory contexts (Complete)
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-page7'] = {
    title: "Polite indirect questions - Legal and financial contexts",
    multipleChoice: [
        {
            question: "Select the most appropriate legal consultation approach:",
            questionRu: "Выберите самый подходящий подход для юридической консультации:",
            sentence: "I was wondering if you could clarify ___ statute of limitations applies to this particular contractual dispute.",
            options: [
                "which",
                "which does",
                "does which",
                "what type of"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I was wondering if you could clarify which statute of limitations applies to this particular contractual dispute' demonstrates sophisticated legal awareness and understanding of procedural requirements.",
            correctFeedbackRu: "Отлично! 'I was wondering if you could clarify which statute of limitations applies to this particular contractual dispute' демонстрирует изощренное правовое понимание и понимание процедурных требований.",
            incorrectFeedback: "Outstanding legal literacy! Your understanding of statutes of limitations and contractual disputes shows real legal sophistication. Maintain that legal indirect question structure: 'which statute of limitations applies' demonstrates informed legal consultation engagement.",
            incorrectFeedbackRu: "Выдающаяся правовая грамотность! Ваше понимание сроков исковой давности и договорных споров показывает настоящую правовую изощренность. Поддерживайте правовую структуру косвенного вопроса: 'which statute of limitations applies' демонстрирует информированное участие в правовых консультациях."
        },
        {
            question: "Choose the most tactful financial planning inquiry:",
            questionRu: "Выберите самый тактичный запрос о финансовом планировании:",
            sentence: "Would you feel comfortable advising me on ___ investment diversification strategies might mitigate portfolio volatility?",
            options: [
                "which",
                "which might",
                "might which",
                "what types of"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Would you feel comfortable advising me on which investment diversification strategies might mitigate portfolio volatility?' shows sophisticated financial literacy and respect for professional advisory boundaries.",
            correctFeedbackRu: "Отлично! 'Would you feel comfortable advising me on which investment diversification strategies might mitigate portfolio volatility?' показывает изощренную финансовую грамотность и уважение к границам профессионального консультирования.",
            incorrectFeedback: "Excellent financial sophistication! Your understanding of diversification and portfolio volatility shows real investment literacy. Asking if they feel comfortable shows respect for fiduciary responsibilities. Your indirect question maintains professional financial discourse: 'which investment diversification strategies might mitigate' demonstrates informed wealth management engagement.",
            incorrectFeedbackRu: "Отличная финансовая изощренность! Ваше понимание диверсификации и волатильности портфеля показывает настоящую инвестиционную грамотность. Вопрос о том, комфортно ли им, показывает уважение к фидуциарным обязанностям. Ваш косвенный вопрос сохраняет профессиональный финансовый дискурс: 'which investment diversification strategies might mitigate' демонстрирует информированное участие в управлении богатством."
        },
        {
            question: "Complete the estate planning consultation:",
            questionRu: "Дополните консультацию по планированию наследства:",
            sentence: "Could you help me understand ___ trust structures would be most advantageous for minimizing estate tax liabilities?",
            options: [
                "which",
                "which would",
                "would which",
                "what kind of"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could you help me understand which trust structures would be most advantageous for minimizing estate tax liabilities?' demonstrates sophisticated estate planning awareness and understanding of tax optimization strategies.",
            correctFeedbackRu: "Отлично! 'Could you help me understand which trust structures would be most advantageous for minimizing estate tax liabilities?' демонстрирует изощренное понимание планирования наследства и понимание стратегий налоговой оптимизации.",
            incorrectFeedback: "Outstanding estate planning literacy! Your understanding of trust structures and tax liabilities shows real wealth preservation sophistication. Keep that financial indirect question professional: 'which trust structures would be most advantageous' demonstrates informed estate planning engagement.",
            incorrectFeedbackRu: "Выдающаяся грамотность в планировании наследства! Ваше понимание структур трастов и налоговых обязательств показывает настоящую изощренность в сохранении богатства. Поддерживайте профессиональный финансовый косвенный вопрос: 'which trust structures would be most advantageous' демонстрирует информированное участие в планировании наследства."
        },
        {
            question: "Select the most appropriate intellectual property inquiry:",
            questionRu: "Выберите самый подходящий запрос об интеллектуальной собственности:",
            sentence: "I'd appreciate your guidance on ___ patent protection mechanisms would be most suitable for this innovative technology.",
            options: [
                "which",
                "which would",
                "would which",
                "what types of"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I'd appreciate your guidance on which patent protection mechanisms would be most suitable for this innovative technology' shows sophisticated intellectual property awareness and understanding of innovation protection strategies.",
            correctFeedbackRu: "Отлично! 'I'd appreciate your guidance on which patent protection mechanisms would be most suitable for this innovative technology' показывает изощренное понимание интеллектуальной собственности и понимание стратегий защиты инноваций.",
            incorrectFeedback: "Excellent IP sophistication! Your understanding of patent protection mechanisms shows real innovation law literacy. Your indirect question maintains professional legal discourse: 'which patent protection mechanisms would be most suitable' demonstrates informed intellectual property strategy engagement.",
            incorrectFeedbackRu: "Отличная изощренность в ИС! Ваше понимание механизмов патентной защиты показывает настоящую грамотность в инновационном праве. Ваш косвенный вопрос сохраняет профессиональный правовой дискурс: 'which patent protection mechanisms would be most suitable' демонстрирует информированное участие в стратегии интеллектуальной собственности."
        },
        {
            question: "Choose the most sensitive corporate compliance question:",
            questionRu: "Выберите самый деликатный вопрос о корпоративном соответствии:",
            sentence: "Given the evolving regulatory landscape, could you advise ___ compliance protocols our organization should prioritize?",
            options: [
                "which",
                "which should",
                "should which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Given the evolving regulatory landscape, could you advise which compliance protocols our organization should prioritize?' demonstrates sophisticated regulatory awareness and proactive compliance management.",
            correctFeedbackRu: "Отлично! 'Given the evolving regulatory landscape, could you advise which compliance protocols our organization should prioritize?' демонстрирует изощренное понимание регулирования и проактивное управление соответствием.",
            incorrectFeedback: "Outstanding regulatory sophistication! Your awareness of evolving regulatory landscapes shows real compliance intelligence. Your indirect question maintains professional corporate discourse: 'which compliance protocols our organization should prioritize' demonstrates informed corporate governance engagement.",
            incorrectFeedbackRu: "Выдающаяся регуляторная изощренность! Ваше понимание развивающихся регуляторных ландшафтов показывает настоящий интеллект соответствия. Ваш косвенный вопрос сохраняет профессиональный корпоративный дискурс: 'which compliance protocols our organization should prioritize' демонстрирует информированное участие в корпоративном управлении."
        },
        {
            question: "Complete the international business law inquiry:",
            questionRu: "Дополните запрос о международном бизнес-праве:",
            sentence: "I was hoping to understand ___ jurisdictional challenges might arise when expanding operations internationally.",
            options: [
                "which",
                "which might",
                "might which",
                "what types of"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I was hoping to understand which jurisdictional challenges might arise when expanding operations internationally' shows sophisticated international business law awareness and strategic planning considerations.",
            correctFeedbackRu: "Отлично! 'I was hoping to understand which jurisdictional challenges might arise when expanding operations internationally' показывает изощренное понимание международного бизнес-права и соображения стратегического планирования.",
            incorrectFeedback: "Excellent international law sophistication! Your awareness of jurisdictional challenges shows real global business intelligence. Keep that international legal indirect question structure professional: 'which jurisdictional challenges might arise' demonstrates informed international expansion planning.",
            incorrectFeedbackRu: "Отличная международная правовая изощренность! Ваше понимание юрисдикционных вызовов показывает настоящий глобальный деловой интеллект. Поддерживайте профессиональную международную правовую структуру косвенного вопроса: 'which jurisdictional challenges might arise' демонстрирует информированное планирование международной экспансии."
        },
        {
            question: "Select the most appropriate risk management consultation:",
            questionRu: "Выберите самую подходящую консультацию по управлению рисками:",
            sentence: "Could you elaborate on ___ risk mitigation strategies would be most effective for our industry sector?",
            options: [
                "which",
                "which would",
                "would which",
                "what kinds of"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could you elaborate on which risk mitigation strategies would be most effective for our industry sector?' demonstrates sophisticated risk management awareness and sector-specific strategic thinking.",
            correctFeedbackRu: "Отлично! 'Could you elaborate on which risk mitigation strategies would be most effective for our industry sector?' демонстрирует изощренное понимание управления рисками и секторно-специфическое стратегическое мышление.",
            incorrectFeedback: "Outstanding risk management sophistication! Your focus on industry-specific strategies shows real business intelligence. Your indirect question maintains professional risk discourse: 'which risk mitigation strategies would be most effective' demonstrates informed enterprise risk management engagement.",
            incorrectFeedbackRu: "Выдающаяся изощренность в управлении рисками! Ваш фокус на отраслевых стратегиях показывает настоящий деловой интеллект. Ваш косвенный вопрос сохраняет профессиональный дискурс рисков: 'which risk mitigation strategies would be most effective' демонстрирует информированное участие в управлении корпоративными рисками."
        },
        {
            question: "Choose the most tactful merger and acquisition question:",
            questionRu: "Выберите самый тактичный вопрос о слияниях и поглощениях:",
            sentence: "Would it be appropriate to discuss ___ due diligence procedures are typically required for transactions of this magnitude?",
            options: [
                "which",
                "which are",
                "are which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Would it be appropriate to discuss which due diligence procedures are typically required for transactions of this magnitude?' shows sophisticated M&A awareness while respecting confidentiality protocols.",
            correctFeedbackRu: "Отлично! 'Would it be appropriate to discuss which due diligence procedures are typically required for transactions of this magnitude?' показывает изощренное понимание M&A, уважая протоколы конфиденциальности.",
            incorrectFeedback: "Excellent M&A sophistication! Asking if it's appropriate shows real understanding of transaction confidentiality. Your understanding of due diligence and transaction magnitude shows sophisticated deal-making awareness. Your indirect question maintains professional M&A discourse while respecting sensitive commercial information.",
            incorrectFeedbackRu: "Отличная изощренность в M&A! Вопрос о том, уместно ли это, показывает настоящее понимание конфиденциальности сделок. Ваше понимание должной осмотрительности и масштаба сделок показывает изощренное понимание заключения сделок. Ваш косвенный вопрос сохраняет профессиональный дискурс M&A, уважая деликатную коммерческую информацию."
        },
        {
            question: "Complete the tax advisory consultation:",
            questionRu: "Дополните консультацию по налоговому консультированию:",
            sentence: "I'd be grateful for your insights on ___ tax optimization strategies remain compliant with current regulatory frameworks.",
            options: [
                "which",
                "which do",
                "do which",
                "what types of"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I'd be grateful for your insights on which tax optimization strategies remain compliant with current regulatory frameworks' demonstrates sophisticated tax planning awareness and commitment to legal compliance.",
            correctFeedbackRu: "Отлично! 'I'd be grateful for your insights on which tax optimization strategies remain compliant with current regulatory frameworks' демонстрирует изощренное понимание налогового планирования и приверженность правовому соответствию.",
            incorrectFeedback: "Outstanding tax sophistication! Your focus on compliance with regulatory frameworks shows real tax intelligence and ethical business practices. Your indirect question maintains professional tax discourse: 'which tax optimization strategies remain compliant' demonstrates informed and responsible tax planning engagement.",
            incorrectFeedbackRu: "Выдающаяся налоговая изощренность! Ваш фокус на соответствии регуляторным рамкам показывает настоящий налоговый интеллект и этичные деловые практики. Ваш косвенный вопрос сохраняет профессиональный налоговый дискурс: 'which tax optimization strategies remain compliant' демонстрирует информированное и ответственное участие в налоговом планировании."
        },
        {
            question: "Select the most appropriate securities regulation inquiry:",
            questionRu: "Выберите самый подходящий запрос о регулировании ценных бумаг:",
            sentence: "Given the complexity of securities regulations, could you clarify ___ disclosure requirements apply to our upcoming public offering?",
            options: [
                "which",
                "which do",
                "do which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Given the complexity of securities regulations, could you clarify which disclosure requirements apply to our upcoming public offering?' demonstrates sophisticated securities law awareness and understanding of public company obligations.",
            correctFeedbackRu: "Отлично! 'Given the complexity of securities regulations, could you clarify which disclosure requirements apply to our upcoming public offering?' демонстрирует изощренное понимание права ценных бумаг и понимание обязательств публичных компаний.",
            incorrectFeedback: "Excellent securities law sophistication! Your understanding of disclosure requirements and public offerings shows real capital markets intelligence. Your indirect question maintains professional securities discourse: 'which disclosure requirements apply' demonstrates informed public company governance engagement.",
            incorrectFeedbackRu: "Отличная изощренность в праве ценных бумаг! Ваше понимание требований к раскрытию информации и публичным предложениям показывает настоящий интеллект рынков капитала. Ваш косвенный вопрос сохраняет профессиональный дискурс ценных бумаг: 'which disclosure requirements apply' демонстрирует информированное участие в управлении публичными компаниями."
        }
    ]
};

/* ============================================
Page 8: Polite indirect questions - Technology and innovation contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-page8'] = {
    title: "Polite indirect questions - Technology and innovation contexts",
    multipleChoice: [
        {
            question: "Select the most appropriate tech startup inquiry:",
            questionRu: "Выберите самый подходящий запрос о технологическом стартапе:",
            sentence: "I'm curious to understand ___ artificial intelligence algorithms are being integrated into your platform architecture.",
            options: [
                "how",
                "how are",
                "are how",
                "the methods by which"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I'm curious to understand how artificial intelligence algorithms are being integrated into your platform architecture' demonstrates sophisticated technical awareness and understanding of AI implementation strategies.",
            correctFeedbackRu: "Отлично! 'I'm curious to understand how artificial intelligence algorithms are being integrated into your platform architecture' демонстрирует изощренное техническое понимание и понимание стратегий внедрения ИИ.",
            incorrectFeedback: "Outstanding technical sophistication! Your understanding of AI algorithms and platform architecture shows real technological literacy. Maintain that tech-focused indirect question structure: 'how artificial intelligence algorithms are being integrated' demonstrates informed technology discussion engagement.",
            incorrectFeedbackRu: "Выдающаяся техническая изощренность! Ваше понимание алгоритмов ИИ и архитектуры платформы показывает настоящую технологическую грамотность. Поддерживайте технически ориентированную структуру косвенного вопроса: 'how artificial intelligence algorithms are being integrated' демонстрирует информированное участие в технологических обсуждениях."
        },
        {
            question: "Choose the most diplomatic data privacy inquiry:",
            questionRu: "Выберите самый дипломатичный запрос о конфиденциальности данных:",
            sentence: "Would you mind explaining ___ data encryption protocols ensure user privacy protection across your cloud infrastructure?",
            options: [
                "how",
                "how do",
                "do how",
                "the ways in which"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Would you mind explaining how data encryption protocols ensure user privacy protection across your cloud infrastructure?' shows sophisticated cybersecurity awareness and commitment to digital privacy standards.",
            correctFeedbackRu: "Отлично! 'Would you mind explaining how data encryption protocols ensure user privacy protection across your cloud infrastructure?' показывает изощренное понимание кибербезопасности и приверженность стандартам цифровой конфиденциальности.",
            incorrectFeedback: "Excellent cybersecurity consciousness! Your understanding of encryption protocols and cloud infrastructure shows real digital security literacy. Your indirect question maintains professional tech discourse: 'how data encryption protocols ensure user privacy protection' demonstrates informed cybersecurity engagement.",
            incorrectFeedbackRu: "Отличное сознание кибербезопасности! Ваше понимание протоколов шифрования и облачной инфраструктуры показывает настоящую грамотность в цифровой безопасности. Ваш косвенный вопрос сохраняет профессиональный технологический дискурс: 'how data encryption protocols ensure user privacy protection' демонстрирует информированное участие в кибербезопасности."
        },
        {
            question: "Complete the blockchain technology consultation:",
            questionRu: "Дополните консультацию по технологии блокчейн:",
            sentence: "Could you elaborate on ___ consensus mechanisms your blockchain network employs to maintain transaction integrity?",
            options: [
                "which",
                "which does",
                "does which",
                "what types of"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could you elaborate on which consensus mechanisms your blockchain network employs to maintain transaction integrity?' demonstrates sophisticated blockchain understanding and knowledge of distributed ledger technologies.",
            correctFeedbackRu: "Отлично! 'Could you elaborate on which consensus mechanisms your blockchain network employs to maintain transaction integrity?' демонстрирует изощренное понимание блокчейна и знание технологий распределенного реестра.",
            incorrectFeedback: "Outstanding blockchain expertise! Your understanding of consensus mechanisms and transaction integrity shows real distributed systems knowledge. Keep that blockchain indirect question technical: 'which consensus mechanisms your network employs' demonstrates informed cryptocurrency and DLT engagement.",
            incorrectFeedbackRu: "Выдающаяся экспертиза блокчейна! Ваше понимание механизмов консенсуса и целостности транзакций показывает настоящие знания распределенных систем. Поддерживайте техническую блокчейн структуру косвенного вопроса: 'which consensus mechanisms your network employs' демонстрирует информированное участие в криптовалютах и DLT."
        },
        {
            question: "Select the most appropriate machine learning inquiry:",
            questionRu: "Выберите самый подходящий запрос о машинном обучении:",
            sentence: "I was wondering ___ neural network architectures prove most effective for your predictive analytics applications.",
            options: [
                "which",
                "which do",
                "do which",
                "what kinds of"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I was wondering which neural network architectures prove most effective for your predictive analytics applications' shows sophisticated machine learning awareness and understanding of AI model optimization.",
            correctFeedbackRu: "Отлично! 'I was wondering which neural network architectures prove most effective for your predictive analytics applications' показывает изощренное понимание машинного обучения и понимание оптимизации моделей ИИ.",
            incorrectFeedback: "Excellent AI sophistication! Your understanding of neural networks and predictive analytics shows real machine learning expertise. Your indirect question maintains technical precision: 'which neural network architectures prove most effective' demonstrates informed AI development engagement.",
            incorrectFeedbackRu: "Отличная изощренность в ИИ! Ваше понимание нейронных сетей и предиктивной аналитики показывает настоящую экспертизу в машинном обучении. Ваш косвенный вопрос сохраняет техническую точность: 'which neural network architectures prove most effective' демонстрирует информированное участие в разработке ИИ."
        },
        {
            question: "Choose the most sensitive quantum computing question:",
            questionRu: "Выберите самый деликатный вопрос о квантовых вычислениях:",
            sentence: "Would it be appropriate to discuss ___ quantum algorithms your research team is developing for cryptographic applications?",
            options: [
                "which",
                "which are",
                "are which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Would it be appropriate to discuss which quantum algorithms your research team is developing for cryptographic applications?' shows sophisticated quantum computing awareness while respecting research confidentiality.",
            correctFeedbackRu: "Отлично! 'Would it be appropriate to discuss which quantum algorithms your research team is developing for cryptographic applications?' показывает изощренное понимание квантовых вычислений, уважая конфиденциальность исследований.",
            incorrectFeedback: "Outstanding quantum sophistication! Asking if it's appropriate shows real understanding of research sensitivity in quantum computing. Your understanding of quantum algorithms and cryptographic applications demonstrates cutting-edge technological awareness. This field often involves confidential breakthrough research.",
            incorrectFeedbackRu: "Выдающаяся квантовая изощренность! Вопрос о том, уместно ли это, показывает настоящее понимание чувствительности исследований в квантовых вычислениях. Ваше понимание квантовых алгоритмов и криптографических применений демонстрирует передовое технологическое понимание. Эта область часто включает конфиденциальные прорывные исследования."
        },
        {
            question: "Complete the IoT security assessment:",
            questionRu: "Дополните оценку безопасности IoT:",
            sentence: "I'd appreciate your insights on ___ cybersecurity measures protect Internet of Things devices from potential vulnerabilities.",
            options: [
                "which",
                "which do",
                "do which",
                "what types of"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I'd appreciate your insights on which cybersecurity measures protect Internet of Things devices from potential vulnerabilities' demonstrates sophisticated IoT security awareness and understanding of connected device protection.",
            correctFeedbackRu: "Отлично! 'I'd appreciate your insights on which cybersecurity measures protect Internet of Things devices from potential vulnerabilities' демонстрирует изощренное понимание безопасности IoT и понимание защиты подключенных устройств.",
            incorrectFeedback: "Excellent IoT security consciousness! Your understanding of connected device vulnerabilities shows real cybersecurity sophistication in emerging technologies. Your indirect question maintains technical security discourse: 'which cybersecurity measures protect IoT devices' demonstrates informed smart technology security engagement.",
            incorrectFeedbackRu: "Отличное сознание безопасности IoT! Ваше понимание уязвимостей подключенных устройств показывает настоящую изощренность кибербезопасности в новых технологиях. Ваш косвенный вопрос сохраняет технический дискурс безопасности: 'which cybersecurity measures protect IoT devices' демонстрирует информированное участие в безопасности умных технологий."
        },
        {
            question: "Select the most appropriate software development methodology question:",
            questionRu: "Выберите самый подходящий вопрос о методологии разработки программного обеспечения:",
            sentence: "Could you help me understand ___ agile frameworks your development teams implement for continuous integration workflows?",
            options: [
                "which",
                "which do",
                "do which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could you help me understand which agile frameworks your development teams implement for continuous integration workflows?' shows sophisticated software development awareness and understanding of modern DevOps practices.",
            correctFeedbackRu: "Отлично! 'Could you help me understand which agile frameworks your development teams implement for continuous integration workflows?' показывает изощренное понимание разработки программного обеспечения и понимание современных практик DevOps.",
            incorrectFeedback: "Outstanding software development sophistication! Your understanding of agile frameworks and CI workflows shows real modern development methodology expertise. Your indirect question maintains professional dev discourse: 'which agile frameworks your teams implement' demonstrates informed software engineering engagement.",
            incorrectFeedbackRu: "Выдающаяся изощренность в разработке ПО! Ваше понимание agile фреймворков и CI рабочих процессов показывает настоящую экспертизу современных методологий разработки. Ваш косвенный вопрос сохраняет профессиональный дискурс разработки: 'which agile frameworks your teams implement' демонстрирует информированное участие в программной инженерии."
        },
        {
            question: "Choose the most tactful cloud computing migration inquiry:",
            questionRu: "Выберите самый тактичный запрос о миграции в облачные вычисления:",
            sentence: "I was hoping to learn ___ containerization strategies facilitate your transition to microservices architecture.",
            options: [
                "how",
                "how do",
                "do how",
                "the methods that"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I was hoping to learn how containerization strategies facilitate your transition to microservices architecture' demonstrates sophisticated cloud computing understanding and knowledge of modern application deployment patterns.",
            correctFeedbackRu: "Отлично! 'I was hoping to learn how containerization strategies facilitate your transition to microservices architecture' демонстрирует изощренное понимание облачных вычислений и знание современных паттернов развертывания приложений.",
            incorrectFeedback: "Excellent cloud architecture awareness! Your understanding of containerization and microservices shows real modern infrastructure expertise. Your indirect question maintains technical cloud discourse: 'how containerization strategies facilitate your transition' demonstrates informed cloud migration engagement.",
            incorrectFeedbackRu: "Отличное понимание облачной архитектуры! Ваше понимание контейнеризации и микросервисов показывает настоящую экспертизу современной инфраструктуры. Ваш косвенный вопрос сохраняет технический облачный дискурс: 'how containerization strategies facilitate your transition' демонстрирует информированное участие в миграции в облако."
        },
        {
            question: "Complete the augmented reality development question:",
            questionRu: "Дополните вопрос о разработке дополненной реальности:",
            sentence: "Could you share your perspective on ___ rendering engines optimize performance for immersive AR experiences?",
            options: [
                "which",
                "which do",
                "do which",
                "what types of"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could you share your perspective on which rendering engines optimize performance for immersive AR experiences?' shows sophisticated augmented reality development awareness and understanding of graphics optimization technologies.",
            correctFeedbackRu: "Отлично! 'Could you share your perspective on which rendering engines optimize performance for immersive AR experiences?' показывает изощренное понимание разработки дополненной реальности и понимание технологий оптимизации графики.",
            incorrectFeedback: "Outstanding AR development sophistication! Your understanding of rendering engines and immersive experiences shows real extended reality expertise. Your indirect question maintains cutting-edge tech discourse: 'which rendering engines optimize performance' demonstrates informed AR/VR development engagement.",
            incorrectFeedbackRu: "Выдающаяся изощренность в разработке AR! Ваше понимание движков рендеринга и иммерсивных опытов показывает настоящую экспертизу расширенной реальности. Ваш косвенный вопрос сохраняет передовой технологический дискурс: 'which rendering engines optimize performance' демонстрирует информированное участие в разработке AR/VR."
        },
        {
            question: "Select the most appropriate edge computing infrastructure question:",
            questionRu: "Выберите самый подходящий вопрос об инфраструктуре периферийных вычислений:",
            sentence: "I'm fascinated to discover ___ edge computing nodes reduce latency while maintaining data processing efficiency.",
            options: [
                "how",
                "how do",
                "do how",
                "the ways that"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I'm fascinated to discover how edge computing nodes reduce latency while maintaining data processing efficiency' demonstrates sophisticated distributed computing awareness and understanding of performance optimization strategies.",
            correctFeedbackRu: "Отлично! 'I'm fascinated to discover how edge computing nodes reduce latency while maintaining data processing efficiency' демонстрирует изощренное понимание распределенных вычислений и понимание стратегий оптимизации производительности.",
            incorrectFeedback: "Excellent edge computing expertise! Your fascination with latency reduction and processing efficiency shows real distributed systems understanding. Your indirect question maintains advanced infrastructure discourse: 'how edge computing nodes reduce latency' demonstrates informed next-generation computing engagement.",
            incorrectFeedbackRu: "Отличная экспертиза в периферийных вычислениях! Ваше увлечение сокращением задержек и эффективностью обработки показывает настоящее понимание распределенных систем. Ваш косвенный вопрос сохраняет продвинутый инфраструктурный дискурс: 'how edge computing nodes reduce latency' демонстрирует информированное участие в вычислениях следующего поколения."
        }
    ]
};

/* ============================================
Page 9: Polite indirect questions - Environmental and sustainability contexts (Complete)
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-page9'] = {
    title: "Polite indirect questions - Environmental and sustainability contexts",
    multipleChoice: [
        {
            question: "Select the most appropriate climate action inquiry:",
            questionRu: "Выберите самый подходящий запрос о климатических действиях:",
            sentence: "I was wondering if you could explain ___ carbon offset programs effectively neutralize corporate greenhouse gas emissions.",
            options: [
                "how",
                "how do",
                "do how",
                "the mechanisms by which"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'I was wondering if you could explain how carbon offset programs effectively neutralize corporate greenhouse gas emissions' demonstrates sophisticated environmental awareness and understanding of climate mitigation strategies.",
            correctFeedbackRu: "Отлично! 'I was wondering if you could explain how carbon offset programs effectively neutralize corporate greenhouse gas emissions' демонстрирует изощренное экологическое понимание и понимание стратегий смягчения климатических изменений.",
            incorrectFeedback: "Outstanding environmental consciousness! Your understanding of carbon offsets and greenhouse gas neutralization shows real climate action literacy. Your indirect question maintains professional sustainability discourse: 'how carbon offset programs effectively neutralize emissions' demonstrates informed environmental policy engagement.",
            incorrectFeedbackRu: "Выдающееся экологическое сознание! Ваше понимание углеродных компенсаций и нейтрализации парниковых газов показывает настоящую грамотность в климатических действиях. Ваш косвенный вопрос сохраняет профессиональный дискурс устойчивости: 'how carbon offset programs effectively neutralize emissions' демонстрирует информированное участие в экологической политике."
        },
        {
            question: "Choose the most diplomatic renewable energy consultation:",
            questionRu: "Выберите самую дипломатичную консультацию по возобновляемой энергии:",
            sentence: "Would you feel comfortable discussing ___ solar panel efficiency rates compare across different photovoltaic technologies?",
            options: [
                "how",
                "how do",
                "do how",
                "the ways in which"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Would you feel comfortable discussing how solar panel efficiency rates compare across different photovoltaic technologies?' shows sophisticated renewable energy awareness and understanding of clean technology performance metrics.",
            correctFeedbackRu: "Отлично! 'Would you feel comfortable discussing how solar panel efficiency rates compare across different photovoltaic technologies?' показывает изощренное понимание возобновляемой энергии и понимание метрик производительности чистых технологий.",
            incorrectFeedback: "Excellent renewable energy sophistication! Your understanding of photovoltaic efficiency shows real clean technology expertise. Asking if they feel comfortable shows respect for technical expertise boundaries. Your indirect question maintains professional green energy discourse while demonstrating informed sustainable technology engagement.",
            incorrectFeedbackRu: "Отличная изощренность в возобновляемой энергии! Ваше понимание эффективности фотовольтаики показывает настоящую экспертизу в чистых технологиях. Вопрос о том, комфортно ли им, показывает уважение к границам технической экспертизы. Ваш косвенный вопрос сохраняет профессиональный дискурс зеленой энергии, демонстрируя информированное участие в устойчивых технологиях."
        },
        {
            question: "Complete the circular economy implementation inquiry:",
            questionRu: "Дополните запрос о внедрении циркулярной экономики:",
            sentence: "Could you help me understand ___ waste-to-resource conversion processes contribute to sustainable manufacturing cycles?",
            options: [
                "how",
                "how do",
                "do how",
                "the methods by which"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could you help me understand how waste-to-resource conversion processes contribute to sustainable manufacturing cycles?' demonstrates sophisticated circular economy awareness and understanding of resource optimization strategies.",
            correctFeedbackRu: "Отлично! 'Could you help me understand how waste-to-resource conversion processes contribute to sustainable manufacturing cycles?' демонстрирует изощренное понимание циркулярной экономики и понимание стратегий оптимизации ресурсов.",
            incorrectFeedback: "Outstanding circular economy expertise! Your understanding of waste-to-resource conversion shows real sustainability innovation knowledge. Your indirect question maintains professional environmental discourse: 'how waste-to-resource processes contribute to sustainable cycles' demonstrates informed circular economy engagement.",
            incorrectFeedbackRu: "Выдающаяся экспертиза циркулярной экономики! Ваше понимание конверсии отходов в ресурсы показывает настоящие знания инноваций устойчивости. Ваш косвенный вопрос сохраняет профессиональный экологический дискурс: 'how waste-to-resource processes contribute to sustainable cycles' демонстрирует информированное участие в циркулярной экономике."
        },
        {
            question: "Select the most appropriate biodiversity conservation question:",
            questionRu: "Выберите самый подходящий вопрос о сохранении биоразнообразия:",
            sentence: "I'd appreciate your guidance on ___ ecosystem restoration projects balance environmental protection with economic development needs.",
            options: [
                "how",
                "how do",
                "do how",
                "the approaches that"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I'd appreciate your guidance on how ecosystem restoration projects balance environmental protection with economic development needs' shows sophisticated conservation awareness and understanding of sustainable development challenges.",
            correctFeedbackRu: "Отлично! 'I'd appreciate your guidance on how ecosystem restoration projects balance environmental protection with economic development needs' показывает изощренное понимание сохранения и понимание вызовов устойчивого развития.",
            incorrectFeedback: "Excellent conservation sophistication! Your understanding of ecosystem restoration and development balance shows real environmental policy expertise. Your indirect question maintains professional conservation discourse: 'how ecosystem restoration projects balance protection with development' demonstrates informed sustainable development engagement.",
            incorrectFeedbackRu: "Отличная изощренность в сохранении! Ваше понимание восстановления экосистем и баланса развития показывает настоящую экспертизу экологической политики. Ваш косвенный вопрос сохраняет профессиональный дискурс сохранения: 'how ecosystem restoration projects balance protection with development' демонстрирует информированное участие в устойчивом развитии."
        },
        {
            question: "Choose the most sensitive water resource management approach:",
            questionRu: "Выберите самый деликатный подход к управлению водными ресурсами:",
            sentence: "Would it be appropriate to explore ___ desalination technologies address freshwater scarcity while minimizing environmental impact?",
            options: [
                "how",
                "how do",
                "do how",
                "the ways that"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Would it be appropriate to explore how desalination technologies address freshwater scarcity while minimizing environmental impact?' demonstrates sophisticated water resource awareness while respecting environmental complexity.",
            correctFeedbackRu: "Отлично! 'Would it be appropriate to explore how desalination technologies address freshwater scarcity while minimizing environmental impact?' демонстрирует изощренное понимание водных ресурсов, уважая экологическую сложность.",
            incorrectFeedback: "Outstanding water resource sophistication! Asking if it's appropriate shows real understanding of environmental sensitivity around water access issues. Your understanding of desalination and environmental impact shows sophisticated water technology awareness. This topic often involves complex regional and environmental considerations.",
            incorrectFeedbackRu: "Выдающаяся изощренность в водных ресурсах! Вопрос о том, уместно ли это, показывает настоящее понимание экологической чувствительности вокруг вопросов доступа к воде. Ваше понимание опреснения и экологического воздействия показывает изощренное понимание водных технологий. Эта тема часто включает сложные региональные и экологические соображения."
        },
        {
            question: "Complete the sustainable agriculture consultation:",
            questionRu: "Дополните консультацию по устойчивому сельскому хозяйству:",
            sentence: "I was hoping to learn ___ precision farming techniques optimize crop yields while reducing chemical fertilizer dependencies.",
            options: [
                "how",
                "how do",
                "do how",
                "the methods that"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I was hoping to learn how precision farming techniques optimize crop yields while reducing chemical fertilizer dependencies' shows sophisticated agricultural sustainability awareness and understanding of food security solutions.",
            correctFeedbackRu: "Отлично! 'I was hoping to learn how precision farming techniques optimize crop yields while reducing chemical fertilizer dependencies' показывает изощренное понимание устойчивости сельского хозяйства и понимание решений продовольственной безопасности.",
            incorrectFeedback: "Excellent sustainable agriculture awareness! Your understanding of precision farming and fertilizer reduction shows real agricultural innovation knowledge. Your indirect question maintains professional agtech discourse: 'how precision farming techniques optimize yields while reducing dependencies' demonstrates informed sustainable food production engagement.",
            incorrectFeedbackRu: "Отличное понимание устойчивого сельского хозяйства! Ваше понимание точного земледелия и сокращения удобрений показывает настоящие знания сельскохозяйственных инноваций. Ваш косвенный вопрос сохраняет профессиональный дискурс агротехнологий: 'how precision farming techniques optimize yields while reducing dependencies' демонстрирует информированное участие в устойчивом производстве продуктов питания."
        },
        {
            question: "Select the most appropriate green building certification question:",
            questionRu: "Выберите самый подходящий вопрос о сертификации зеленых зданий:",
            sentence: "Could you clarify ___ LEED certification standards ensure energy efficiency throughout building lifecycle management?",
            options: [
                "how",
                "how do",
                "do how",
                "the criteria by which"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could you clarify how LEED certification standards ensure energy efficiency throughout building lifecycle management?' demonstrates sophisticated green building awareness and understanding of sustainable construction practices.",
            correctFeedbackRu: "Отлично! 'Could you clarify how LEED certification standards ensure energy efficiency throughout building lifecycle management?' демонстрирует изощренное понимание зеленых зданий и понимание практик устойчивого строительства.",
            incorrectFeedback: "Outstanding sustainable construction expertise! Your understanding of LEED standards and lifecycle management shows real green building intelligence. Your indirect question maintains professional sustainable architecture discourse: 'how LEED standards ensure efficiency throughout lifecycle management' demonstrates informed green construction engagement.",
            incorrectFeedbackRu: "Выдающаяся экспертиза устойчивого строительства! Ваше понимание стандартов LEED и управления жизненным циклом показывает настоящий интеллект зеленых зданий. Ваш косвенный вопрос сохраняет профессиональный дискурс устойчивой архитектуры: 'how LEED standards ensure efficiency throughout lifecycle management' демонстрирует информированное участие в зеленом строительстве."
        },
        {
            question: "Choose the most tactful climate adaptation strategy inquiry:",
            questionRu: "Выберите самый тактичный запрос о стратегиях адаптации к климату:",
            sentence: "I'm interested to understand ___ coastal communities develop resilience against sea level rise projections.",
            options: [
                "how",
                "how do",
                "do how",
                "the strategies that"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I'm interested to understand how coastal communities develop resilience against sea level rise projections' shows sophisticated climate adaptation awareness and understanding of community vulnerability assessments.",
            correctFeedbackRu: "Отлично! 'I'm interested to understand how coastal communities develop resilience against sea level rise projections' показывает изощренное понимание адаптации к климату и понимание оценок уязвимости сообществ.",
            incorrectFeedback: "Excellent climate resilience sophistication! Your understanding of coastal vulnerability and sea level rise shows real climate science literacy. Your indirect question maintains professional climate adaptation discourse: 'how coastal communities develop resilience' demonstrates informed climate change preparedness engagement.",
            incorrectFeedbackRu: "Отличная изощренность в климатической устойчивости! Ваше понимание прибрежной уязвимости и повышения уровня моря показывает настоящую грамотность в климатических науках. Ваш косвенный вопрос сохраняет профессиональный дискурс адаптации к климату: 'how coastal communities develop resilience' демонстрирует информированное участие в подготовке к изменению климата."
        },
        {
            question: "Complete the environmental impact assessment question:",
            questionRu: "Дополните вопрос об оценке воздействия на окружающую среду:",
            sentence: "Could you elaborate on ___ life cycle assessments measure environmental footprints across supply chain operations?",
            options: [
                "how",
                "how do",
                "do how",
                "the methodologies that"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could you elaborate on how life cycle assessments measure environmental footprints across supply chain operations?' demonstrates sophisticated environmental analysis awareness and understanding of sustainability measurement frameworks.",
            correctFeedbackRu: "Отлично! 'Could you elaborate on how life cycle assessments measure environmental footprints across supply chain operations?' демонстрирует изощренное понимание экологического анализа и понимание рамок измерения устойчивости.",
            incorrectFeedback: "Outstanding environmental assessment expertise! Your understanding of LCA and supply chain footprints shows real sustainability measurement knowledge. Your indirect question maintains professional environmental science discourse: 'how life cycle assessments measure footprints across operations' demonstrates informed environmental accounting engagement.",
            incorrectFeedbackRu: "Выдающаяся экспертиза экологической оценки! Ваше понимание LCA и следов цепочки поставок показывает настоящие знания измерения устойчивости. Ваш косвенный вопрос сохраняет профессиональный дискурс экологических наук: 'how life cycle assessments measure footprints across operations' демонстрирует информированное участие в экологическом учете."
        }
    ]
};

/* ============================================
Page 10: Polite indirect questions - Advanced diplomatic and crisis management contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-page10'] = {
    title: "Polite indirect questions - Advanced diplomatic and crisis management contexts",
    multipleChoice: [
        {
            question: "Select the most appropriate crisis communication approach:",
            questionRu: "Выберите самый подходящий подход к кризисной коммуникации:",
            sentence: "Given the urgency of this situation, could you help me understand ___ stakeholder communication protocols should be activated immediately?",
            options: [
                "which",
                "which should",
                "should which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Given the urgency of this situation, could you help me understand which stakeholder communication protocols should be activated immediately?' demonstrates sophisticated crisis management awareness while maintaining professional composure under pressure.",
            correctFeedbackRu: "Отлично! 'Given the urgency of this situation, could you help me understand which stakeholder communication protocols should be activated immediately?' демонстрирует изощренное понимание антикризисного управления, сохраняя профессиональное самообладание под давлением.",
            incorrectFeedback: "Outstanding crisis leadership! Acknowledging urgency while seeking structured protocol guidance shows real emergency management sophistication. Your indirect question maintains professional crisis discourse: 'which stakeholder communication protocols should be activated' demonstrates informed crisis response engagement even under pressure.",
            incorrectFeedbackRu: "Выдающееся кризисное лидерство! Признание срочности при поиске структурированного руководства по протоколам показывает настоящую изощренность в управлении чрезвычайными ситуациями. Ваш косвенный вопрос сохраняет профессиональный кризисный дискурс: 'which stakeholder communication protocols should be activated' демонстрирует информированное участие в антикризисном реагировании даже под давлением."
        },
        {
            question: "Choose the most diplomatic conflict resolution inquiry:",
            questionRu: "Выберите самый дипломатичный запрос о разрешении конфликтов:",
            sentence: "I realize this is an extremely sensitive matter, but would you be willing to share ___ mediation strategies have proven effective in similar inter-departmental disputes?",
            options: [
                "which",
                "which have",
                "have which",
                "what types of"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I realize this is an extremely sensitive matter, but would you be willing to share which mediation strategies have proven effective in similar inter-departmental disputes?' shows exceptional diplomatic skill and understanding of organizational conflict resolution.",
            correctFeedbackRu: "Отлично! 'I realize this is an extremely sensitive matter, but would you be willing to share which mediation strategies have proven effective in similar inter-departmental disputes?' показывает исключительное дипломатическое мастерство и понимание организационного разрешения конфликтов.",
            incorrectFeedback: "Exceptional diplomatic intelligence! Acknowledging extreme sensitivity while asking if they're willing to share shows remarkable emotional intelligence. Your understanding of mediation strategies and inter-departmental dynamics demonstrates sophisticated organizational psychology awareness. This level of tact is crucial in workplace conflict resolution.",
            incorrectFeedbackRu: "Исключительный дипломатический интеллект! Признание крайней чувствительности при вопросе о готовности поделиться показывает замечательный эмоциональный интеллект. Ваше понимание стратегий медиации и межведомственной динамики демонстрирует изощренное понимание организационной психологии. Такой уровень такта критически важен в разрешении рабочих конфликтов."
        },
        {
            question: "Complete the emergency response coordination question:",
            questionRu: "Дополните вопрос о координации экстренного реагирования:",
            sentence: "Under these challenging circumstances, I was hoping to clarify ___ evacuation procedures align with current safety regulations and building codes.",
            options: [
                "how",
                "how do",
                "do how",
                "the ways that"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Under these challenging circumstances, I was hoping to clarify how evacuation procedures align with current safety regulations and building codes' demonstrates sophisticated emergency preparedness awareness and commitment to regulatory compliance during crisis situations.",
            correctFeedbackRu: "Отлично! 'Under these challenging circumstances, I was hoping to clarify how evacuation procedures align with current safety regulations and building codes' демонстрирует изощренное понимание готовности к чрезвычайным ситуациям и приверженность соблюдению нормативных требований во время кризисных ситуаций.",
            incorrectFeedback: "Outstanding emergency management expertise! Your focus on evacuation alignment with regulations shows real safety leadership under pressure. Your indirect question maintains professional emergency discourse: 'how evacuation procedures align with current regulations' demonstrates informed crisis preparedness even in challenging circumstances.",
            incorrectFeedbackRu: "Выдающаяся экспертиза управления чрезвычайными ситуациями! Ваш фокус на соответствии эвакуации нормативам показывает настоящее лидерство в безопасности под давлением. Ваш косвенный вопрос сохраняет профессиональный дискурс экстренных ситуаций: 'how evacuation procedures align with current regulations' демонстрирует информированную готовность к кризису даже в сложных обстоятельствах."
        },
        {
            question: "Select the most appropriate reputation management approach:",
            questionRu: "Выберите самый подходящий подход к управлению репутацией:",
            sentence: "In light of recent public scrutiny, could you advise ___ public relations strategies might help rebuild stakeholder confidence effectively?",
            options: [
                "which",
                "which might",
                "might which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'In light of recent public scrutiny, could you advise which public relations strategies might help rebuild stakeholder confidence effectively?' shows sophisticated reputation management awareness and understanding of strategic communications during difficult periods.",
            correctFeedbackRu: "Отлично! 'In light of recent public scrutiny, could you advise which public relations strategies might help rebuild stakeholder confidence effectively?' показывает изощренное понимание управления репутацией и понимание стратегических коммуникаций в сложные периоды.",
            incorrectFeedback: "Excellent strategic communications sophistication! Your understanding of reputation recovery and stakeholder confidence shows real corporate communications expertise. Your indirect question maintains professional PR discourse: 'which public relations strategies might help rebuild confidence' demonstrates informed crisis communications engagement during reputation challenges.",
            incorrectFeedbackRu: "Отличная изощренность стратегических коммуникаций! Ваше понимание восстановления репутации и доверия заинтересованных сторон показывает настоящую экспертизу корпоративных коммуникаций. Ваш косвенный вопрос сохраняет профессиональный PR дискурс: 'which public relations strategies might help rebuild confidence' демонстрирует информированное участие в кризисных коммуникациях во время репутационных вызовов."
        },
        {
            question: "Choose the most sensitive whistleblower protection inquiry:",
            questionRu: "Выберите самый деликатный запрос о защите осведомителей:",
            sentence: "This is obviously a delicate situation, but I wonder ___ confidentiality measures protect individuals who report compliance violations.",
            options: [
                "which",
                "which do",
                "do which",
                "what types of"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'This is obviously a delicate situation, but I wonder which confidentiality measures protect individuals who report compliance violations' demonstrates sophisticated understanding of corporate governance and employee protection protocols.",
            correctFeedbackRu: "Отлично! 'This is obviously a delicate situation, but I wonder which confidentiality measures protect individuals who report compliance violations' демонстрирует изощренное понимание корпоративного управления и протоколов защиты сотрудников.",
            incorrectFeedback: "Outstanding ethical leadership awareness! Acknowledging the delicate nature while inquiring about protection measures shows real corporate responsibility understanding. Your focus on confidentiality and compliance violations demonstrates sophisticated workplace ethics knowledge. This area requires exceptional sensitivity to protect vulnerable employees.",
            incorrectFeedbackRu: "Выдающееся понимание этического лидерства! Признание деликатной природы при запросе о мерах защиты показывает настоящее понимание корпоративной ответственности. Ваш фокус на конфиденциальности и нарушениях соответствия демонстрирует изощренные знания рабочей этики. Эта область требует исключительной чувствительности для защиты уязвимых сотрудников."
        },
        {
            question: "Complete the international incident response question:",
            questionRu: "Дополните вопрос о реагировании на международные инциденты:",
            sentence: "Given the cross-border implications, I was wondering ___ diplomatic channels should be engaged to address this multinational crisis.",
            options: [
                "which",
                "which should",
                "should which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Given the cross-border implications, I was wondering which diplomatic channels should be engaged to address this multinational crisis' shows sophisticated international relations awareness and understanding of diplomatic protocol during global emergencies.",
            correctFeedbackRu: "Отлично! 'Given the cross-border implications, I was wondering which diplomatic channels should be engaged to address this multinational crisis' показывает изощренное понимание международных отношений и понимание дипломатического протокола во время глобальных чрезвычайных ситуаций.",
            incorrectFeedback: "Excellent international crisis sophistication! Your understanding of cross-border implications and diplomatic engagement shows real global governance expertise. Your indirect question maintains professional international discourse: 'which diplomatic channels should be engaged' demonstrates informed multinational crisis management during complex geopolitical situations.",
            incorrectFeedbackRu: "Отличная изощренность в международном кризисе! Ваше понимание трансграничных последствий и дипломатического взаимодействия показывает настоящую экспертизу глобального управления. Ваш косвенный вопрос сохраняет профессиональный международный дискурс: 'which diplomatic channels should be engaged' демонстрирует информированное управление многонациональным кризисом в сложных геополитических ситуациях."
        },
        {
            question: "Select the most appropriate board governance crisis question:",
            questionRu: "Выберите самый подходящий вопрос о кризисе корпоративного управления:",
            sentence: "Under these extraordinary circumstances, would it be appropriate to discuss ___ fiduciary responsibilities require immediate board intervention?",
            options: [
                "which",
                "which do",
                "do which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Under these extraordinary circumstances, would it be appropriate to discuss which fiduciary responsibilities require immediate board intervention?' demonstrates sophisticated corporate governance awareness while respecting board confidentiality protocols.",
            correctFeedbackRu: "Отлично! 'Under these extraordinary circumstances, would it be appropriate to discuss which fiduciary responsibilities require immediate board intervention?' демонстрирует изощренное понимание корпоративного управления, уважая протоколы конфиденциальности совета директоров.",
            incorrectFeedback: "Outstanding corporate governance sophistication! Asking if it's appropriate under extraordinary circumstances shows real understanding of board protocol sensitivity. Your knowledge of fiduciary responsibilities demonstrates advanced corporate law awareness. Board interventions require exceptional procedural sensitivity and legal precision.",
            incorrectFeedbackRu: "Выдающаяся изощренность корпоративного управления! Вопрос о том, уместно ли это в экстраординарных обстоятельствах, показывает настоящее понимание чувствительности протокола совета директоров. Ваше знание фидуциарных обязанностей демонстрирует продвинутое понимание корпоративного права. Вмешательства совета директоров требуют исключительной процедурной чувствительности и правовой точности."
        },
        {
            question: "Choose the most tactful insider trading compliance inquiry:",
            questionRu: "Выберите самый тактичный запрос о соблюдении требований по инсайдерской торговле:",
            sentence: "I realize this involves highly sensitive financial information, but could you clarify ___ trading restrictions apply during material information disclosure periods?",
            options: [
                "which",
                "which do",
                "do which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'I realize this involves highly sensitive financial information, but could you clarify which trading restrictions apply during material information disclosure periods?' shows sophisticated securities law awareness and commitment to regulatory compliance.",
            correctFeedbackRu: "Отлично! 'I realize this involves highly sensitive financial information, but could you clarify which trading restrictions apply during material information disclosure periods?' показывает изощренное понимание права ценных бумаг и приверженность соблюдению нормативных требований.",
            incorrectFeedback: "Excellent securities compliance sophistication! Acknowledging highly sensitive financial information shows real understanding of market regulation sensitivity. Your knowledge of trading restrictions and material disclosure demonstrates advanced financial law expertise. This area requires exceptional regulatory precision and ethical awareness.",
            incorrectFeedbackRu: "Отличная изощренность соблюдения ценных бумаг! Признание крайне чувствительной финансовой информации показывает настоящее понимание чувствительности рыночного регулирования. Ваше знание торговых ограничений и существенного раскрытия демонстрирует продвинутую экспертизу финансового права. Эта область требует исключительной регуляторной точности и этической осведомленности."
        },
        {
            question: "Complete the data breach notification protocol question:",
            questionRu: "Дополните вопрос о протоколе уведомления о нарушении данных:",
            sentence: "Considering the potential privacy violations, I was hoping to understand ___ notification timelines are mandated by current data protection regulations.",
            options: [
                "which",
                "which are",
                "are which",
                "what specific"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Considering the potential privacy violations, I was hoping to understand which notification timelines are mandated by current data protection regulations' demonstrates sophisticated cybersecurity incident response awareness and regulatory compliance understanding.",
            correctFeedbackRu: "Отлично! 'Considering the potential privacy violations, I was hoping to understand which notification timelines are mandated by current data protection regulations' демонстрирует изощренное понимание реагирования на инциденты кибербезопасности и понимание соблюдения нормативных требований.",
            incorrectFeedback: "Outstanding data protection expertise! Your understanding of privacy violations and regulatory timelines shows real cybersecurity law sophistication. Your indirect question maintains professional data security discourse: 'which notification timelines are mandated' demonstrates informed data breach response during critical privacy incidents.",
            incorrectFeedbackRu: "Выдающаяся экспертиза защиты данных! Ваше понимание нарушений конфиденциальности и регуляторных сроков показывает настоящую изощренность в праве кибербезопасности. Ваш косвенный вопрос сохраняет профессиональный дискурс безопасности данных: 'which notification timelines are mandated' демонстрирует информированное реагирование на нарушение данных во время критических инцидентов конфиденциальности."
        },
        {
            question: "Select the most appropriate executive succession crisis approach:",
            questionRu: "Выберите самый подходящий подход к кризису исполнительного преемственности:",
            sentence: "In this unprecedented leadership transition situation, may I ask ___ succession planning protocols ensure organizational continuity during executive changes?",
            options: [
                "how",
                "how do",
                "do how",
                "the mechanisms that"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'In this unprecedented leadership transition situation, may I ask how succession planning protocols ensure organizational continuity during executive changes?' shows sophisticated executive governance awareness and understanding of leadership crisis management.",
            correctFeedbackRu: "Отлично! 'In this unprecedented leadership transition situation, may I ask how succession planning protocols ensure organizational continuity during executive changes?' показывает изощренное понимание исполнительного управления и понимание управления лидерским кризисом.",
            incorrectFeedback: "Excellent executive governance sophistication! Acknowledging unprecedented circumstances while focusing on continuity shows real organizational leadership understanding. Your knowledge of succession planning demonstrates advanced corporate governance expertise. Executive transitions require exceptional strategic planning and stakeholder management during uncertainty.",
            incorrectFeedbackRu: "Отличная изощренность исполнительного управления! Признание беспрецедентных обстоятельств с фокусом на преемственность показывает настоящее понимание организационного лидерства. Ваше знание планирования преемственности демонстрирует продвинутую экспертизу корпоративного управления. Исполнительные переходы требуют исключительного стратегического планирования и управления заинтересованными сторонами во время неопределенности."
        }
    ]
};

/* =============================================================================== */
/* ===========================Fill in the Gaps Exercises========================== */

/* ============================================
Page 1: Polite indirect questions - Basic forms 
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-gap-page1'] = {
    title: "Polite indirect questions - Basic forms",
    fillGaps: [
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "Could you tell me ____ the library closes today?",
            correctAnswer: "when",
            options: ["when", "when does", "does when", "what time does"],
            correctFeedback: "Excellent! 'When' is correct because indirect questions use normal word order without auxiliary verbs.",
            correctFeedbackRu: "Отлично! 'When' правильно, потому что косвенные вопросы используют обычный порядок слов без вспомогательных глаголов.",
            incorrectFeedback: "Remember, indirect questions don't use question word order. After 'Could you tell me,' we use 'when the library closes' - like a statement.",
            incorrectFeedbackRu: "Помните, косвенные вопросы не используют вопросительный порядок слов. После 'Could you tell me' мы используем 'when the library closes' - как утверждение."
        },
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "I was wondering ____ you could help me with this project.",
            correctAnswer: "if",
            options: ["if", "that", "whether", "what"],
            correctFeedback: "Perfect! 'If' is correct for yes/no indirect questions and sounds natural in conversational English.",
            correctFeedbackRu: "Отлично! 'If' правильно для косвенных вопросов да/нет и звучит естественно в разговорном английском.",
            incorrectFeedback: "Great attempt! For yes/no questions in indirect speech, we use 'if' or 'whether'. 'If' is more common in spoken English.",
            incorrectFeedbackRu: "Хорошая попытка! Для вопросов да/нет в косвенной речи мы используем 'if' или 'whether'. 'If' более распространено в разговорном английском."
        },
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "Do you happen to know ____ this bus goes to the city center?",
            correctAnswer: "whether",
            options: ["whether", "that", "which", "how"],
            correctFeedback: "Excellent! 'Whether' is perfect for formal yes/no indirect questions, asking if the bus goes there or not.",
            correctFeedbackRu: "Отлично! 'Whether' идеально подходит для формальных косвенных вопросов да/нет, спрашивая, идет ли автобус туда или нет.",
            incorrectFeedback: "Think about what we're asking! This is a yes/no question - does the bus go there or not? Use 'whether' for formal indirect yes/no questions.",
            incorrectFeedbackRu: "Подумайте о том, что мы спрашиваем! Это вопрос да/нет - идет ли автобус туда или нет? Используйте 'whether' для формальных косвенных вопросов да/нет."
        },
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "Would you mind telling me ____ floor the reception is on?",
            correctAnswer: "which",
            options: ["which", "which is", "what", "where"],
            correctFeedback: "Perfect! 'Which' is correct when asking for a specific choice among options (floors), and we keep normal word order.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретном выборе среди вариантов (этажи), и мы сохраняем обычный порядок слов.",
            incorrectFeedback: "Good thinking! We need 'which' because we're asking about a specific floor from the available options. Remember: no question inversion in indirect questions.",
            incorrectFeedbackRu: "Хорошо думаете! Нам нужно 'which', потому что мы спрашиваем о конкретном этаже из доступных вариантов. Помните: нет вопросительной инверсии в косвенных вопросах."
        },
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "I'd like to know ____ much this ticket costs.",
            correctAnswer: "how",
            options: ["how", "how much", "what", "which"],
            correctFeedback: "Excellent! 'How' is correct because 'much' already appears in the sentence after the gap.",
            correctFeedbackRu: "Отлично! 'How' правильно, потому что 'much' уже появляется в предложении после пропуска.",
            incorrectFeedback: "Look carefully! Since 'much' is already in the sentence, we only need 'how' to complete 'how much this ticket costs'.",
            incorrectFeedbackRu: "Смотрите внимательно! Поскольку 'much' уже есть в предложении, нам нужно только 'how' для завершения 'how much this ticket costs'."
        },
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "Could you possibly explain ____ this machine works?",
            correctAnswer: "how",
            options: ["how", "how does", "does how", "the way"],
            correctFeedback: "Perfect! 'How' is correct because indirect questions maintain normal sentence structure without auxiliary verbs.",
            correctFeedbackRu: "Отлично! 'How' правильно, потому что косвенные вопросы сохраняют обычную структуру предложения без вспомогательных глаголов.",
            incorrectFeedback: "Remember the key rule: indirect questions use statement word order. After 'explain,' we say 'how this machine works' - no inversion needed.",
            incorrectFeedbackRu: "Помните ключевое правило: косвенные вопросы используют порядок слов утверждения. После 'explain' мы говорим 'how this machine works' - инверсия не нужна."
        },
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "I wonder ____ there are any vegetarian options on the menu.",
            correctAnswer: "if",
            options: ["if", "that", "whether", "what"],
            correctFeedback: "Excellent! 'If' is perfect for this yes/no question about the existence of vegetarian options.",
            correctFeedbackRu: "Отлично! 'If' идеально подходит для этого вопроса да/нет о наличии вегетарианских вариантов.",
            incorrectFeedback: "Good instinct! This asks whether vegetarian options exist or not - a yes/no question. 'If' is the most natural choice here.",
            incorrectFeedbackRu: "Хороший инстинкт! Это спрашивает, существуют ли вегетарианские варианты или нет - вопрос да/нет. 'If' здесь самый естественный выбор."
        },
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "Do you know ____ languages are spoken in this region?",
            correctAnswer: "which",
            options: ["which", "which are", "what", "how many"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific languages from a known set of possibilities.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных языках из известного набора возможностей.",
            incorrectFeedback: "Think about specificity! 'Which' works best because we're asking about specific languages from the languages that exist in that region.",
            incorrectFeedbackRu: "Подумайте о специфичности! 'Which' работает лучше всего, потому что мы спрашиваем о конкретных языках из языков, которые существуют в том регионе."
        },
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "Would it be possible to find out ____ the conference starts tomorrow?",
            correctAnswer: "when",
            options: ["when", "when does", "what time does", "at what time"],
            correctFeedback: "Excellent! 'When' is correct because we maintain normal word order in indirect questions.",
            correctFeedbackRu: "Отлично! 'When' правильно, потому что мы сохраняем обычный порядок слов в косвенных вопросах.",
            incorrectFeedback: "Remember: indirect questions follow statement structure. After 'find out,' we use 'when the conference starts' without question inversion.",
            incorrectFeedbackRu: "Помните: косвенные вопросы следуют структуре утверждения. После 'find out' мы используем 'when the conference starts' без вопросительной инверсии."
        },
        {
            question: "Complete the polite indirect question:",
            questionRu: "Дополните вежливый косвенный вопрос:",
            sentence: "I'm curious to know ____ you decided to study abroad.",
            correctAnswer: "why",
            options: ["why", "why did", "the reason why", "how come"],
            correctFeedback: "Perfect! 'Why' is correct because indirect questions use normal word order without auxiliary verbs like 'did'.",
            correctFeedbackRu: "Отлично! 'Why' правильно, потому что косвенные вопросы используют обычный порядок слов без вспомогательных глаголов типа 'did'.",
            incorrectFeedback: "Great curiosity! Just remember that indirect questions don't need 'did'. We say 'why you decided' using normal statement order.",
            incorrectFeedbackRu: "Отличное любопытство! Просто помните, что косвенные вопросы не нуждаются в 'did'. Мы говорим 'why you decided', используя обычный порядок утверждения."
        }
    ]
};

/* ============================================
Page 2: Polite indirect questions - Professional contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-gap-page2'] = {
    title: "Polite indirect questions - Professional contexts",
    fillGaps: [
        {
            question: "Complete the professional inquiry:",
            questionRu: "Дополните профессиональный запрос:",
            sentence: "I was hoping you could clarify ____ the deadline has been extended for this project.",
            correctAnswer: "whether",
            options: ["whether", "that", "if", "when"],
            correctFeedback: "Excellent! 'Whether' is perfect for formal professional contexts when asking yes/no questions.",
            correctFeedbackRu: "Отлично! 'Whether' идеально подходит для формальных профессиональных контекстов при задании вопросов да/нет.",
            incorrectFeedback: "Good professional instinct! While 'if' could work, 'whether' sounds more formal and professional in business contexts.",
            incorrectFeedbackRu: "Хороший профессиональный инстинкт! Хотя 'if' могло бы работать, 'whether' звучит более формально и профессионально в деловых контекстах."
        },
        {
            question: "Complete the professional inquiry:",
            questionRu: "Дополните профессиональный запрос:",
            sentence: "Could you help me understand ____ the new policy affects our department's budget allocation?",
            correctAnswer: "how",
            options: ["how", "how does", "in what way", "the way"],
            correctFeedback: "Perfect! 'How' is correct because we maintain normal word order in indirect questions about processes or methods.",
            correctFeedbackRu: "Отлично! 'How' правильно, потому что мы сохраняем обычный порядок слов в косвенных вопросах о процессах или методах.",
            incorrectFeedback: "Excellent business awareness! Remember that indirect questions don't use auxiliary verbs. We say 'how the policy affects' without 'does'.",
            incorrectFeedbackRu: "Отличное деловое понимание! Помните, что косвенные вопросы не используют вспомогательные глаголы. Мы говорим 'how the policy affects' без 'does'."
        },
        {
            question: "Complete the professional inquiry:",
            questionRu: "Дополните профессиональный запрос:",
            sentence: "I'd appreciate it if you could advise me on ____ candidates we should interview first.",
            correctAnswer: "which",
            options: ["which", "which should", "what", "who"],
            correctFeedback: "Excellent! 'Which' is correct when selecting specific candidates from a group of applicants.",
            correctFeedbackRu: "Отлично! 'Which' правильно при выборе конкретных кандидатов из группы претендентов.",
            incorrectFeedback: "Good hiring instincts! 'Which' works best because we're choosing specific candidates from the available pool of applicants.",
            incorrectFeedbackRu: "Хорошие инстинкты найма! 'Which' работает лучше всего, потому что мы выбираем конкретных кандидатов из доступного пула претендентов."
        },
        {
            question: "Complete the professional inquiry:",
            questionRu: "Дополните профессиональный запрос:",
            sentence: "Would you mind explaining ____ the quarterly report should be formatted according to company standards?",
            correctAnswer: "how",
            options: ["how", "how should", "in which way", "the method"],
            correctFeedback: "Perfect! 'How' is correct for asking about methods or procedures in professional contexts.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о методах или процедурах в профессиональных контекстах.",
            incorrectFeedback: "Great attention to standards! In indirect questions, we use 'how the report should be formatted' without additional auxiliaries.",
            incorrectFeedbackRu: "Отличное внимание к стандартам! В косвенных вопросах мы используем 'how the report should be formatted' без дополнительных вспомогательных глаголов."
        },
        {
            question: "Complete the professional inquiry:",
            questionRu: "Дополните профессиональный запрос:",
            sentence: "I was wondering ____ departments will be affected by the upcoming reorganization.",
            correctAnswer: "which",
            options: ["which", "which will", "what", "how many"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific departments from the existing organizational structure.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных отделах из существующей организационной структуры.",
            incorrectFeedback: "Smart organizational thinking! 'Which' is best because we're asking about specific departments from the company's current structure.",
            incorrectFeedbackRu: "Умное организационное мышление! 'Which' лучше всего, потому что мы спрашиваем о конкретных отделах из текущей структуры компании."
        },
        {
            question: "Complete the professional inquiry:",
            questionRu: "Дополните профессиональный запрос:",
            sentence: "Could you possibly inform me ____ the board meeting has been rescheduled?",
            correctAnswer: "whether",
            options: ["whether", "if", "that", "when"],
            correctFeedback: "Perfect! 'Whether' is ideal for formal business inquiries about yes/no questions regarding scheduling.",
            correctFeedbackRu: "Отлично! 'Whether' идеально подходит для формальных деловых запросов о вопросах да/нет относительно планирования.",
            incorrectFeedback: "Excellent board meeting awareness! 'Whether' sounds more professional than 'if' in formal corporate communications.",
            incorrectFeedbackRu: "Отличное понимание заседаний правления! 'Whether' звучит более профессионально, чем 'if' в формальных корпоративных коммуникациях."
        },
        {
            question: "Complete the professional inquiry:",
            questionRu: "Дополните профессиональный запрос:",
            sentence: "I'd be grateful if you could let me know ____ long the approval process typically takes.",
            correctAnswer: "how",
            options: ["how", "how much", "what time", "which time"],
            correctFeedback: "Excellent! 'How' is correct because 'long' already appears in the sentence, forming 'how long'.",
            correctFeedbackRu: "Отлично! 'How' правильно, потому что 'long' уже появляется в предложении, образуя 'how long'.",
            incorrectFeedback: "Good process awareness! Since 'long' is already there, we only need 'how' to ask about duration: 'how long the process takes'.",
            incorrectFeedbackRu: "Хорошее понимание процесса! Поскольку 'long' уже там, нам нужно только 'how' для вопроса о продолжительности: 'how long the process takes'."
        },
        {
            question: "Complete the professional inquiry:",
            questionRu: "Дополните профессиональный запрос:",
            sentence: "Would it be possible to clarify ____ team members are responsible for client communications?",
            correctAnswer: "which",
            options: ["which", "which are", "what", "who"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific team members from the existing team structure.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных членах команды из существующей структуры команды.",
            incorrectFeedback: "Great team coordination thinking! 'Which' works best because we're identifying specific people from the known team members.",
            incorrectFeedbackRu: "Отличное мышление координации команды! 'Which' работает лучше всего, потому что мы определяем конкретных людей из известных членов команды."
        },
        {
            question: "Complete the professional inquiry:",
            questionRu: "Дополните профессиональный запрос:",
            sentence: "I was hoping to understand ____ the new software integrates with our existing systems.",
            correctAnswer: "how",
            options: ["how", "how does", "the way", "in what manner"],
            correctFeedback: "Excellent! 'How' is correct for asking about technical integration processes in professional contexts.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах технической интеграции в профессиональных контекстах.",
            incorrectFeedback: "Great technical awareness! In indirect questions, we say 'how the software integrates' using normal statement word order.",
            incorrectFeedbackRu: "Отличное техническое понимание! В косвенных вопросах мы говорим 'how the software integrates', используя обычный порядок слов утверждения."
        },
        {
            question: "Complete the professional inquiry:",
            questionRu: "Дополните профессиональный запрос:",
            sentence: "Could you advise me on ____ performance metrics we should prioritize this quarter?",
            correctAnswer: "which",
            options: ["which", "which should", "what", "what type of"],
            correctFeedback: "Perfect! 'Which' is correct when selecting specific metrics from available performance indicators.",
            correctFeedbackRu: "Отлично! 'Which' правильно при выборе конкретных метрик из доступных показателей производительности.",
            incorrectFeedback: "Excellent performance management thinking! 'Which' is ideal because we're choosing specific metrics from the available options.",
            incorrectFeedbackRu: "Отличное мышление управления производительностью! 'Which' идеально, потому что мы выбираем конкретные метрики из доступных вариантов."
        }
    ]
};

/* ============================================
Page 3: Polite indirect questions - Academic and complex situations
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-gap-page3'] = {
    title: "Polite indirect questions - Academic and complex situations",
    fillGaps: [
        {
            question: "Complete the academic inquiry:",
            questionRu: "Дополните академический запрос:",
            sentence: "I would be most grateful if you could illuminate ____ theoretical framework underpins your research methodology.",
            correctAnswer: "which",
            options: ["which", "which does", "what", "what type of"],
            correctFeedback: "Excellent! 'Which' is correct when asking about a specific theoretical framework from established academic theories.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретной теоретической рамке из установленных академических теорий.",
            incorrectFeedback: "Outstanding academic discourse! 'Which' works best because we're identifying a specific framework from existing theoretical options.",
            incorrectFeedbackRu: "Выдающийся академический дискурс! 'Which' работает лучше всего, потому что мы определяем конкретную рамку из существующих теоретических вариантов."
        },
        {
            question: "Complete the academic inquiry:",
            questionRu: "Дополните академический запрос:",
            sentence: "Could you elaborate on ____ statistical significance was determined in your data analysis?",
            correctAnswer: "how",
            options: ["how", "how was", "the method by which", "in what way"],
            correctFeedback: "Perfect! 'How' is correct for asking about analytical methods and procedures in academic contexts.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов об аналитических методах и процедурах в академических контекстах.",
            incorrectFeedback: "Excellent methodological awareness! In indirect questions, we use 'how statistical significance was determined' without auxiliary verbs.",
            incorrectFeedbackRu: "Отличное методологическое понимание! В косвенных вопросах мы используем 'how statistical significance was determined' без вспомогательных глаголов."
        },
        {
            question: "Complete the academic inquiry:",
            questionRu: "Дополните академический запрос:",
            sentence: "I'm particularly interested in understanding ____ variables were controlled for in your experimental design.",
            correctAnswer: "which",
            options: ["which", "which were", "what", "what type of"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific variables from the range of possible experimental controls.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных переменных из диапазона возможных экспериментальных контролей.",
            incorrectFeedback: "Outstanding experimental design understanding! 'Which' is ideal because we're asking about specific controlled variables.",
            incorrectFeedbackRu: "Выдающееся понимание экспериментального дизайна! 'Which' идеально, потому что мы спрашиваем о конкретных контролируемых переменных."
        },
        {
            question: "Complete the complex inquiry:",
            questionRu: "Дополните сложный запрос:",
            sentence: "I realize this is an extremely sensitive matter, but would you be willing to share ____ mediation strategies have proven effective?",
            correctAnswer: "which",
            options: ["which", "which have", "what", "what type of"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific strategies from established mediation approaches.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных стратегиях из установленных подходов медиации.",
            incorrectFeedback: "Exceptional diplomatic sensitivity! 'Which' works best because we're selecting from existing mediation strategies that have been tested.",
            incorrectFeedbackRu: "Исключительная дипломатическая чувствительность! 'Which' работает лучше всего, потому что мы выбираем из существующих стратегий медиации, которые были протестированы."
        },
        {
            question: "Complete the complex inquiry:",
            questionRu: "Дополните сложный запрос:",
            sentence: "Given the complexity of the situation, I was hoping to understand ____ factors contributed to this unprecedented outcome.",
            correctAnswer: "which",
            options: ["which", "which did", "what", "what kind of"],
            correctFeedback: "Excellent! 'Which' is correct when identifying specific factors from the complex situation's contributing elements.",
            correctFeedbackRu: "Отлично! 'Which' правильно при определении конкретных факторов из способствующих элементов сложной ситуации.",
            incorrectFeedback: "Outstanding analytical thinking! 'Which' is best because we're identifying specific contributing factors from the situation's complexity.",
            incorrectFeedbackRu: "Выдающееся аналитическое мышление! 'Which' лучше всего, потому что мы определяем конкретные способствующие факторы из сложности ситуации."
        },
        {
            question: "Complete the complex inquiry:",
            questionRu: "Дополните сложный запрос:",
            sentence: "I don't want to pry, but I was wondering ____ the recent policy changes might affect long-term strategic planning.",
            correctAnswer: "how",
            options: ["how", "how might", "in what way", "the manner in which"],
            correctFeedback: "Perfect! 'How' is correct for asking about the impact and effects of policy changes on strategic processes.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о влиянии и эффектах изменений политики на стратегические процессы.",
            incorrectFeedback: "Excellent strategic awareness! Your consideration is admirable. In indirect questions, we use 'how the changes might affect' without additional auxiliaries.",
            incorrectFeedbackRu: "Отличное стратегическое понимание! Ваша деликатность восхитительна. В косвенных вопросах мы используем 'how the changes might affect' без дополнительных вспомогательных слов."
        },
        {
            question: "Complete the complex inquiry:",
            questionRu: "Дополните сложный запрос:",
            sentence: "Would it be appropriate to explore ____ alternative solutions might address these systemic challenges?",
            correctAnswer: "which",
            options: ["which", "which might", "what", "what type of"],
            correctFeedback: "Excellent! 'Which' is correct when exploring specific alternatives from potential solution options.",
            correctFeedbackRu: "Отлично! 'Which' правильно при исследовании конкретных альтернатив из потенциальных вариантов решений.",
            incorrectFeedback: "Outstanding systems thinking! 'Which' works best because we're exploring specific solutions from the range of possible alternatives.",
            incorrectFeedbackRu: "Выдающееся системное мышление! 'Which' работает лучше всего, потому что мы исследуем конкретные решения из диапазона возможных альтернатив."
        },
        {
            question: "Complete the complex inquiry:",
            questionRu: "Дополните сложный запрос:",
            sentence: "I can imagine this is stressful, but would you be willing to share ____ we can best support you during this transition?",
            correctAnswer: "how",
            options: ["how", "how can", "in what way", "the ways"],
            correctFeedback: "Perfect! 'How' is correct for asking about methods of support and assistance during difficult transitions.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о методах поддержки и помощи во время сложных переходов.",
            incorrectFeedback: "Beautiful empathy! Your consideration for their stress shows real emotional intelligence. We use 'how we can support' in indirect questions.",
            incorrectFeedbackRu: "Прекрасная эмпатия! Ваша забота об их стрессе показывает настоящий эмоциональный интеллект. Мы используем 'how we can support' в косвенных вопросах."
        },
        {
            question: "Complete the complex inquiry:",
            questionRu: "Дополните сложный запрос:",
            sentence: "I hope this isn't too personal, but I was curious ____ you decided to pursue this particular career path.",
            correctAnswer: "why",
            options: ["why", "why did", "the reason why", "how come"],
            correctFeedback: "Excellent! 'Why' is correct for asking about reasons and motivations in personal yet professional contexts.",
            correctFeedbackRu: "Отлично! 'Why' правильно для вопросов о причинах и мотивациях в личных, но профессиональных контекстах.",
            incorrectFeedback: "Wonderful personal interest balanced with professionalism! In indirect questions, we use 'why you decided' without auxiliary verbs.",
            incorrectFeedbackRu: "Замечательный личный интерес, сбалансированный с профессионализмом! В косвенных вопросах мы используем 'why you decided' без вспомогательных глаголов."
        },
        {
            question: "Complete the complex inquiry:",
            questionRu: "Дополните сложный запрос:",
            sentence: "Under these challenging circumstances, I was hoping to clarify ____ evacuation procedures align with current safety regulations.",
            correctAnswer: "how",
            options: ["how", "how do", "in what way", "the manner in which"],
            correctFeedback: "Perfect! 'How' is correct for asking about alignment and compliance processes during emergency situations.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах соответствия и согласования во время чрезвычайных ситуаций.",
            incorrectFeedback: "Outstanding emergency preparedness awareness! In indirect questions during crisis situations, we maintain normal word order: 'how procedures align'.",
            incorrectFeedbackRu: "Выдающееся понимание готовности к чрезвычайным ситуациям! В косвенных вопросах во время кризисных ситуаций мы сохраняем обычный порядок слов: 'how procedures align'."
        }
    ]
};

/* ============================================
Page 4: Polite indirect questions - Healthcare and technical contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-gap-page4'] = {
    title: "Polite indirect questions - Healthcare and technical contexts",
    fillGaps: [
        {
            question: "Complete the medical consultation inquiry:",
            questionRu: "Дополните запрос медицинской консультации:",
            sentence: "I was wondering if you could explain ____ these symptoms might be interconnected with my current medication regimen.",
            correctAnswer: "how",
            options: ["how", "how could", "in what way", "the manner in which"],
            correctFeedback: "Excellent! 'How' is correct for asking about medical connections and interactions between symptoms and treatments.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о медицинских связях и взаимодействиях между симптомами и лечением.",
            incorrectFeedback: "Outstanding patient advocacy! In medical indirect questions, we use 'how these symptoms might be interconnected' to ask about relationships.",
            incorrectFeedbackRu: "Выдающаяся защита пациентов! В медицинских косвенных вопросах мы используем 'how these symptoms might be interconnected' для вопросов о взаимосвязях."
        },
        {
            question: "Complete the healthcare inquiry:",
            questionRu: "Дополните запрос о здравоохранении:",
            sentence: "Could you help me understand ____ preventive screenings would be most beneficial given my family medical history?",
            correctAnswer: "which",
            options: ["which", "which would", "what", "what types of"],
            correctFeedback: "Perfect! 'Which' is correct when selecting specific screenings from available preventive care options.",
            correctFeedbackRu: "Отлично! 'Which' правильно при выборе конкретных обследований из доступных вариантов профилактической помощи.",
            incorrectFeedback: "Excellent preventive health awareness! 'Which' works best because we're choosing specific screenings from medical recommendations.",
            incorrectFeedbackRu: "Отличное понимание профилактического здоровья! 'Which' работает лучше всего, потому что мы выбираем конкретные обследования из медицинских рекомендаций."
        },
        {
            question: "Complete the technical consultation:",
            questionRu: "Дополните техническую консультацию:",
            sentence: "I'm curious to understand ____ artificial intelligence algorithms are being integrated into your platform architecture.",
            correctAnswer: "how",
            options: ["how", "how are", "the methods by which", "in what manner"],
            correctFeedback: "Excellent! 'How' is correct for asking about technical implementation processes and integration methods.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах технической реализации и методах интеграции.",
            incorrectFeedback: "Outstanding technical sophistication! In indirect questions about AI integration, we say 'how algorithms are being integrated' without auxiliaries.",
            incorrectFeedbackRu: "Выдающаяся техническая изощренность! В косвенных вопросах об интеграции ИИ мы говорим 'how algorithms are being integrated' без вспомогательных глаголов."
        },
        {
            question: "Complete the cybersecurity inquiry:",
            questionRu: "Дополните запрос о кибербезопасности:",
            sentence: "Would you mind explaining ____ data encryption protocols ensure user privacy protection across your cloud infrastructure?",
            correctAnswer: "how",
            options: ["how", "how do", "the ways in which", "the methods that"],
            correctFeedback: "Perfect! 'How' is correct for asking about security mechanisms and protection processes in technical contexts.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о механизмах безопасности и процессах защиты в технических контекстах.",
            incorrectFeedback: "Excellent cybersecurity consciousness! We use 'how data encryption protocols ensure protection' in indirect questions about security.",
            incorrectFeedbackRu: "Отличное сознание кибербезопасности! Мы используем 'how data encryption protocols ensure protection' в косвенных вопросах о безопасности."
        },
        {
            question: "Complete the pharmaceutical consultation:",
            questionRu: "Дополните фармацевтическую консультацию:",
            sentence: "Could you clarify ____ potential drug interactions I should monitor while taking these concurrent medications?",
            correctAnswer: "which",
            options: ["which", "which should", "what", "what types of"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific interactions from possible medication combinations.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных взаимодействиях из возможных комбинаций лекарств.",
            incorrectFeedback: "Outstanding pharmaceutical literacy! 'Which' is ideal because we're identifying specific drug interactions from potential risks.",
            incorrectFeedbackRu: "Выдающаяся фармацевтическая грамотность! 'Which' идеально, потому что мы определяем конкретные лекарственные взаимодействия из потенциальных рисков."
        },
        {
            question: "Complete the blockchain technology inquiry:",
            questionRu: "Дополните запрос о технологии блокчейн:",
            sentence: "Could you elaborate on ____ consensus mechanisms your blockchain network employs to maintain transaction integrity?",
            correctAnswer: "which",
            options: ["which", "which does", "what", "what types of"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific consensus mechanisms from established blockchain protocols.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных механизмах консенсуса из установленных блокчейн протоколов.",
            incorrectFeedback: "Outstanding blockchain expertise! 'Which' works best because we're selecting from existing consensus mechanism options.",
            incorrectFeedbackRu: "Выдающаяся экспертиза блокчейна! 'Which' работает лучше всего, потому что мы выбираем из существующих вариантов механизмов консенсуса."
        },
        {
            question: "Complete the machine learning inquiry:",
            questionRu: "Дополните запрос о машинном обучении:",
            sentence: "I was wondering ____ neural network architectures prove most effective for your predictive analytics applications.",
            correctAnswer: "which",
            options: ["which", "which do", "what", "what kinds of"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific architectures from available neural network designs.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных архитектурах из доступных дизайнов нейронных сетей.",
            incorrectFeedback: "Excellent AI sophistication! 'Which' is perfect because we're choosing specific neural network architectures from ML options.",
            incorrectFeedbackRu: "Отличная изощренность в ИИ! 'Which' идеально, потому что мы выбираем конкретные архитектуры нейронных сетей из вариантов МО."
        },
        {
            question: "Complete the rehabilitation inquiry:",
            questionRu: "Дополните запрос о реабилитации:",
            sentence: "I'd be grateful to know ____ milestones indicate successful recovery during this rehabilitation phase.",
            correctAnswer: "which",
            options: ["which", "which do", "what", "what types of"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific milestones from established recovery indicators.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных этапах из установленных показателей восстановления.",
            incorrectFeedback: "Outstanding rehabilitation engagement! 'Which' is ideal because we're identifying specific recovery milestones from medical standards.",
            incorrectFeedbackRu: "Выдающееся участие в реабилитации! 'Which' идеально, потому что мы определяем конкретные этапы восстановления из медицинских стандартов."
        },
        {
            question: "Complete the IoT security inquiry:",
            questionRu: "Дополните запрос о безопасности IoT:",
            sentence: "I'd appreciate your insights on ____ cybersecurity measures protect Internet of Things devices from potential vulnerabilities.",
            correctAnswer: "which",
            options: ["which", "which do", "what", "what types of"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific security measures from IoT protection protocols.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных мерах безопасности из протоколов защиты IoT.",
            incorrectFeedback: "Excellent IoT security consciousness! 'Which' works best because we're selecting from established cybersecurity measures.",
            incorrectFeedbackRu: "Отличное сознание безопасности IoT! 'Which' работает лучше всего, потому что мы выбираем из установленных мер кибербезопасности."
        },
        {
            question: "Complete the telemedicine inquiry:",
            questionRu: "Дополните запрос о телемедицине:",
            sentence: "Given the limitations of virtual consultations, could you explain ____ assessments can be accurately conducted remotely?",
            correctAnswer: "which",
            options: ["which", "which can", "what", "what kind of"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific assessments from available telemedicine capabilities.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных оценках из доступных возможностей телемедицины.",
            incorrectFeedback: "Excellent telemedicine awareness! 'Which' is perfect because we're identifying specific assessments from remote consultation options.",
            incorrectFeedbackRu: "Отличное понимание телемедицины! 'Which' идеально, потому что мы определяем конкретные оценки из вариантов дистанционных консультаций."
        }
    ]
};

/* ============================================
Page 5: Polite indirect questions - Environmental and legal contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-gap-page5'] = {
    title: "Polite indirect questions - Environmental and legal contexts",
    fillGaps: [
        {
            question: "Complete the environmental consultation:",
            questionRu: "Дополните экологическую консультацию:",
            sentence: "I was wondering if you could explain ____ carbon offset programs effectively neutralize corporate greenhouse gas emissions.",
            correctAnswer: "how",
            options: ["how", "how do", "the mechanisms by which", "in what way"],
            correctFeedback: "Excellent! 'How' is correct for asking about environmental processes and climate mitigation mechanisms.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов об экологических процессах и механизмах смягчения климата.",
            incorrectFeedback: "Outstanding environmental consciousness! In indirect questions about climate action, we use 'how programs effectively neutralize emissions'.",
            incorrectFeedbackRu: "Выдающееся экологическое сознание! В косвенных вопросах о климатических действиях мы используем 'how programs effectively neutralize emissions'."
        },
        {
            question: "Complete the legal consultation:",
            questionRu: "Дополните юридическую консультацию:",
            sentence: "I was wondering if you could clarify ____ statute of limitations applies to this particular contractual dispute.",
            correctAnswer: "which",
            options: ["which", "which does", "what", "what type of"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific statutes from applicable legal frameworks.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных статутах из применимых правовых рамок.",
            incorrectFeedback: "Outstanding legal literacy! 'Which' works best because we're identifying a specific statute from legal options.",
            incorrectFeedbackRu: "Выдающаяся правовая грамотность! 'Which' работает лучше всего, потому что мы определяем конкретный статут из правовых вариантов."
        },
        {
            question: "Complete the renewable energy inquiry:",
            questionRu: "Дополните запрос о возобновляемой энергии:",
            sentence: "Would you feel comfortable discussing ____ solar panel efficiency rates compare across different photovoltaic technologies?",
            correctAnswer: "how",
            options: ["how", "how do", "the ways in which", "in what manner"],
            correctFeedback: "Excellent! 'How' is correct for asking about comparisons and performance metrics in renewable energy contexts.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о сравнениях и метриках производительности в контекстах возобновляемой энергии.",
            incorrectFeedback: "Excellent renewable energy sophistication! We use 'how solar panel efficiency rates compare' in technical comparisons.",
            incorrectFeedbackRu: "Отличная изощренность в возобновляемой энергии! Мы используем 'how solar panel efficiency rates compare' в технических сравнениях."
        },
        {
            question: "Complete the financial advisory inquiry:",
            questionRu: "Дополните финансово-консультационный запрос:",
            sentence: "Would you feel comfortable advising me on ____ investment diversification strategies might mitigate portfolio volatility?",
            correctAnswer: "which",
            options: ["which", "which might", "what", "what types of"],
            correctFeedback: "Perfect! 'Which' is correct when selecting specific strategies from available investment approaches.",
            correctFeedbackRu: "Отлично! 'Which' правильно при выборе конкретных стратегий из доступных инвестиционных подходов.",
            incorrectFeedback: "Excellent financial sophistication! 'Which' is ideal because we're choosing specific diversification strategies from investment options.",
            incorrectFeedbackRu: "Отличная финансовая изощренность! 'Which' идеально, потому что мы выбираем конкретные стратегии диверсификации из инвестиционных вариантов."
        },
        {
            question: "Complete the circular economy inquiry:",
            questionRu: "Дополните запрос о циркулярной экономике:",
            sentence: "Could you help me understand ____ waste-to-resource conversion processes contribute to sustainable manufacturing cycles?",
            correctAnswer: "how",
            options: ["how", "how do", "the methods by which", "in what ways"],
            correctFeedback: "Excellent! 'How' is correct for asking about sustainability processes and resource optimization methods.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах устойчивости и методах оптимизации ресурсов.",
            incorrectFeedback: "Outstanding circular economy expertise! We use 'how waste-to-resource processes contribute' to ask about sustainability mechanisms.",
            incorrectFeedbackRu: "Выдающаяся экспертиза циркулярной экономики! Мы используем 'how waste-to-resource processes contribute' для вопросов о механизмах устойчивости."
        },
        {
            question: "Complete the intellectual property inquiry:",
            questionRu: "Дополните запрос об интеллектуальной собственности:",
            sentence: "I'd appreciate your guidance on ____ patent protection mechanisms would be most suitable for this innovative technology.",
            correctAnswer: "which",
            options: ["which", "which would", "what", "what types of"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific protection mechanisms from available patent options.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных механизмах защиты из доступных патентных вариантов.",
            incorrectFeedback: "Excellent IP sophistication! 'Which' works best because we're selecting specific patent mechanisms from legal protection options.",
            incorrectFeedbackRu: "Отличная изощренность в ИС! 'Which' работает лучше всего, потому что мы выбираем конкретные патентные механизмы из вариантов правовой защиты."
        },
        {
            question: "Complete the biodiversity inquiry:",
            questionRu: "Дополните запрос о биоразнообразии:",
            sentence: "I'd appreciate your guidance on ____ ecosystem restoration projects balance environmental protection with economic development needs.",
            correctAnswer: "how",
            options: ["how", "how do", "the approaches that", "the methods by which"],
            correctFeedback: "Excellent! 'How' is correct for asking about balancing processes and sustainable development approaches.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах балансирования и подходах устойчивого развития.",
            incorrectFeedback: "Excellent conservation sophistication! We use 'how ecosystem restoration projects balance' to ask about sustainability approaches.",
            incorrectFeedbackRu: "Отличная изощренность в сохранении! Мы используем 'how ecosystem restoration projects balance' для вопросов о подходах устойчивости."
        },
        {
            question: "Complete the corporate compliance inquiry:",
            questionRu: "Дополните запрос о корпоративном соответствии:",
            sentence: "Given the evolving regulatory landscape, could you advise ____ compliance protocols our organization should prioritize?",
            correctAnswer: "which",
            options: ["which", "which should", "what", "what specific"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific protocols from available compliance frameworks.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных протоколах из доступных рамок соответствия.",
            incorrectFeedback: "Outstanding regulatory sophistication! 'Which' is ideal because we're selecting specific compliance protocols from regulatory options.",
            incorrectFeedbackRu: "Выдающаяся регуляторная изощренность! 'Which' идеально, потому что мы выбираем конкретные протоколы соответствия из регуляторных вариантов."
        },
        {
            question: "Complete the sustainable agriculture inquiry:",
            questionRu: "Дополните запрос об устойчивом сельском хозяйстве:",
            sentence: "I was hoping to learn ____ precision farming techniques optimize crop yields while reducing chemical fertilizer dependencies.",
            correctAnswer: "how",
            options: ["how", "how do", "the methods that", "the ways in which"],
            correctFeedback: "Excellent! 'How' is correct for asking about agricultural optimization processes and sustainable farming methods.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах сельскохозяйственной оптимизации и методах устойчивого земледелия.",
            incorrectFeedback: "Excellent sustainable agriculture awareness! We use 'how precision farming techniques optimize yields' to ask about agricultural innovation.",
            incorrectFeedbackRu: "Отличное понимание устойчивого сельского хозяйства! Мы используем 'how precision farming techniques optimize yields' для вопросов о сельскохозяйственных инновациях."
        },
        {
            question: "Complete the tax advisory inquiry:",
            questionRu: "Дополните налогово-консультационный запрос:",
            sentence: "I'd be grateful for your insights on ____ tax optimization strategies remain compliant with current regulatory frameworks.",
            correctAnswer: "which",
            options: ["which", "which do", "what", "what types of"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific strategies from compliant tax optimization options.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных стратегиях из соответствующих вариантов налоговой оптимизации.",
            incorrectFeedback: "Outstanding tax sophistication! 'Which' works best because we're selecting specific optimization strategies from legal options.",
            incorrectFeedbackRu: "Выдающаяся налоговая изощренность! 'Which' работает лучше всего, потому что мы выбираем конкретные стратегии оптимизации из законных вариантов."
        }
    ]
};

/* ============================================
Page 6: Polite indirect questions - International and diplomatic contexts (Fill in the Gaps)
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-gap-page6'] = {
    title: "Polite indirect questions - International and diplomatic contexts",
    fillGaps: [
        {
            question: "Complete the diplomatic inquiry:",
            questionRu: "Дополните дипломатический запрос:",
            sentence: "I hope I'm not overstepping cultural boundaries by asking ____ traditional ceremonies are typically conducted in your community.",
            correctAnswer: "how",
            options: ["how", "how are", "the manner in which", "in what way"],
            correctFeedback: "Excellent! 'How' is correct for asking about cultural processes while showing exceptional sensitivity to cultural boundaries.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о культурных процессах, проявляя исключительную чувствительность к культурным границам.",
            incorrectFeedback: "Outstanding cultural awareness! Your concern about boundaries shows real respect. We use 'how traditional ceremonies are conducted' in cultural inquiries.",
            incorrectFeedbackRu: "Выдающееся культурное понимание! Ваша забота о границах показывает настоящее уважение. Мы используем 'how traditional ceremonies are conducted' в культурных запросах."
        },
        {
            question: "Complete the international business inquiry:",
            questionRu: "Дополните международный деловой запрос:",
            sentence: "I'd be grateful to understand ____ business etiquette differs between our respective cultures during negotiations.",
            correctAnswer: "how",
            options: ["how", "how does", "the ways in which", "in what ways"],
            correctFeedback: "Perfect! 'How' is correct for asking about cultural differences and business protocol comparisons.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о культурных различиях и сравнениях деловых протоколов.",
            incorrectFeedback: "Outstanding cultural business awareness! We use 'how business etiquette differs' to ask about cross-cultural professional practices.",
            incorrectFeedbackRu: "Выдающееся культурное деловое понимание! Мы используем 'how business etiquette differs' для вопросов о межкультурных профессиональных практиках."
        },
        {
            question: "Complete the international relations inquiry:",
            questionRu: "Дополните запрос о международных отношениях:",
            sentence: "Would you feel comfortable explaining ____ your government's recent policy shift might impact international relations?",
            correctAnswer: "how",
            options: ["how", "how might", "in what ways", "the manner in which"],
            correctFeedback: "Excellent! 'How' is correct for asking about geopolitical impacts while showing diplomatic sensitivity.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о геополитических воздействиях, проявляя дипломатическую чувствительность.",
            incorrectFeedback: "Exceptional diplomatic instincts! Asking if they feel comfortable shows sensitivity. We say 'how your government's policy shift might impact relations'.",
            incorrectFeedbackRu: "Исключительные дипломатические инстинкты! Вопрос о том, комфортно ли им, показывает чувствительность. Мы говорим 'how your government's policy shift might impact relations'."
        },
        {
            question: "Complete the multicultural workplace inquiry:",
            questionRu: "Дополните запрос о мультикультурном рабочем месте:",
            sentence: "I was hoping to learn ____ cultural communication styles might be affecting our team dynamics.",
            correctAnswer: "whether",
            options: ["whether", "if", "how", "that"],
            correctFeedback: "Perfect! 'Whether' is correct for formal workplace inquiries about potential cultural influences on team performance.",
            correctFeedbackRu: "Отлично! 'Whether' правильно для формальных рабочих запросов о потенциальных культурных влияниях на производительность команды.",
            incorrectFeedback: "Outstanding multicultural leadership awareness! 'Whether' is more formal than 'if' for professional discussions about cultural impacts.",
            incorrectFeedbackRu: "Выдающееся понимание мультикультурного лидерства! 'Whether' более формально, чем 'if' для профессиональных обсуждений культурных воздействий."
        },
        {
            question: "Complete the international education inquiry:",
            questionRu: "Дополните запрос о международном образовании:",
            sentence: "Could you help me understand ____ educational systems in your country prepare students for global careers?",
            correctAnswer: "how",
            options: ["how", "how do", "the methods by which", "in what manner"],
            correctFeedback: "Excellent! 'How' is correct for asking about educational processes and global workforce preparation methods.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов об образовательных процессах и методах подготовки глобальной рабочей силы.",
            incorrectFeedback: "Excellent global education awareness! We use 'how educational systems prepare students' to ask about international educational approaches.",
            incorrectFeedbackRu: "Отличное понимание глобального образования! Мы используем 'how educational systems prepare students' для вопросов о международных образовательных подходах."
        },
        {
            question: "Complete the cultural exchange inquiry:",
            questionRu: "Дополните запрос о культурном обмене:",
            sentence: "If it's not too personal, I was wondering ____ religious observances influence daily life in your region.",
            correctAnswer: "how",
            options: ["how", "how do", "the extent to which", "in what ways"],
            correctFeedback: "Perfect! 'How' is correct for asking about religious influences while showing exceptional respect for spiritual privacy.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о религиозных влияниях, проявляя исключительное уважение к духовной приватности.",
            incorrectFeedback: "Beautiful religious sensitivity! Acknowledging this might be personal shows real respect. We say 'how religious observances influence daily life'.",
            incorrectFeedbackRu: "Прекрасная религиозная чувствительность! Признание того, что это может быть личным, показывает настоящее уважение. Мы говорим 'how religious observances influence daily life'."
        },
        {
            question: "Complete the cross-border inquiry:",
            questionRu: "Дополните трансграничный запрос:",
            sentence: "Given the cross-border implications, I was wondering ____ diplomatic channels should be engaged to address this multinational crisis.",
            correctAnswer: "which",
            options: ["which", "which should", "what", "what specific"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific diplomatic channels from available international communication options.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных дипломатических каналах из доступных вариантов международной коммуникации.",
            incorrectFeedback: "Excellent international crisis sophistication! 'Which' works best because we're selecting specific diplomatic channels from international options.",
            incorrectFeedbackRu: "Отличная изощренность в международном кризисе! 'Which' работает лучше всего, потому что мы выбираем конкретные дипломатические каналы из международных вариантов."
        },
        {
            question: "Complete the global innovation inquiry:",
            questionRu: "Дополните запрос о глобальных инновациях:",
            sentence: "I'm fascinated to discover ____ innovation cultures differ across various technological hubs globally.",
            correctAnswer: "how",
            options: ["how", "how do", "the ways that", "in what manner"],
            correctFeedback: "Perfect! 'How' is correct for asking about cultural differences in innovation and technological development approaches.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о культурных различиях в инновациях и подходах технологического развития.",
            incorrectFeedback: "Outstanding global innovation awareness! Your fascination shows genuine interest. We say 'how innovation cultures differ across technological hubs'.",
            incorrectFeedbackRu: "Выдающееся понимание глобальных инноваций! Ваше увлечение показывает искренний интерес. Мы говорим 'how innovation cultures differ across technological hubs'."
        },
        {
            question: "Complete the environmental policy inquiry:",
            questionRu: "Дополните запрос об экологической политике:",
            sentence: "Would you mind sharing your perspective on ____ environmental policies are being implemented to address climate challenges?",
            correctAnswer: "which",
            options: ["which", "which are", "what", "what types of"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific policies from available environmental policy frameworks.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных политиках из доступных рамок экологической политики.",
            incorrectFeedback: "Excellent environmental consciousness! 'Which' is ideal because we're asking about specific environmental policies from policy options.",
            incorrectFeedbackRu: "Отличное экологическое сознание! 'Which' идеально, потому что мы спрашиваем о конкретных экологических политиках из вариантов политик."
        },
        {
            question: "Complete the international dialogue conclusion:",
            questionRu: "Дополните завершение международного диалога:",
            sentence: "As we conclude this enriching cultural exchange, may I ask ____ there are other aspects of your heritage you'd be willing to share?",
            correctAnswer: "if",
            options: ["if", "whether", "that", "what other"],
            correctFeedback: "Perfect! 'If' is correct for creating a warm, conversational tone while concluding meaningful cultural exchanges.",
            correctFeedbackRu: "Отлично! 'If' правильно для создания теплого, разговорного тона при завершении значимых культурных обменов.",
            incorrectFeedback: "Exceptional cultural diplomacy! Calling it an 'enriching cultural exchange' shows real appreciation. 'If' creates a warmer tone than 'whether'.",
            incorrectFeedbackRu: "Исключительная культурная дипломатия! Называя это 'обогащающим культурным обменом', вы показываете настоящее понимание. 'If' создает более теплый тон, чем 'whether'."
        }
    ]
};

/* ============================================
Page 7: Polite indirect questions - Crisis management and advanced professional contexts (Fill in the Gaps)
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-gap-page7'] = {
    title: "Polite indirect questions - Crisis management and advanced professional contexts",
    fillGaps: [
        {
            question: "Complete the crisis communication inquiry:",
            questionRu: "Дополните запрос кризисной коммуникации:",
            sentence: "Given the urgency of this situation, could you help me understand ____ stakeholder communication protocols should be activated immediately?",
            correctAnswer: "which",
            options: ["which", "which should", "what", "what specific"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific protocols from established crisis management procedures.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных протоколах из установленных процедур антикризисного управления.",
            incorrectFeedback: "Outstanding crisis leadership! Acknowledging urgency while seeking structured guidance shows real emergency management sophistication.",
            incorrectFeedbackRu: "Выдающееся кризисное лидерство! Признание срочности при поиске структурированного руководства показывает настоящую изощренность управления чрезвычайными ситуациями."
        },
        {
            question: "Complete the reputation management inquiry:",
            questionRu: "Дополните запрос об управлении репутацией:",
            sentence: "In light of recent public scrutiny, could you advise ____ public relations strategies might help rebuild stakeholder confidence effectively?",
            correctAnswer: "which",
            options: ["which", "which might", "what", "what specific"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific strategies from available reputation recovery approaches.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных стратегиях из доступных подходов восстановления репутации.",
            incorrectFeedback: "Excellent strategic communications sophistication! 'Which' works best because we're selecting from established PR recovery strategies.",
            incorrectFeedbackRu: "Отличная изощренность стратегических коммуникаций! 'Which' работает лучше всего, потому что мы выбираем из установленных стратегий восстановления PR."
        },
        {
            question: "Complete the whistleblower protection inquiry:",
            questionRu: "Дополните запрос о защите осведомителей:",
            sentence: "This is obviously a delicate situation, but I wonder ____ confidentiality measures protect individuals who report compliance violations.",
            correctAnswer: "which",
            options: ["which", "which do", "what", "what types of"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific measures from available employee protection protocols.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных мерах из доступных протоколов защиты сотрудников.",
            incorrectFeedback: "Outstanding ethical leadership awareness! Acknowledging delicacy shows real sensitivity to vulnerable employee protection needs.",
            incorrectFeedbackRu: "Выдающееся понимание этического лидерства! Признание деликатности показывает настоящую чувствительность к потребностям защиты уязвимых сотрудников."
        },
        {
            question: "Complete the board governance inquiry:",
            questionRu: "Дополните запрос о корпоративном управлении:",
            sentence: "Under these extraordinary circumstances, would it be appropriate to discuss ____ fiduciary responsibilities require immediate board intervention?",
            correctAnswer: "which",
            options: ["which", "which do", "what", "what specific"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific responsibilities from fiduciary duty frameworks.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных обязанностях из рамок фидуциарных обязательств.",
            incorrectFeedback: "Outstanding corporate governance sophistication! Asking if it's appropriate shows real understanding of board protocol sensitivity.",
            incorrectFeedbackRu: "Выдающаяся изощренность корпоративного управления! Вопрос о том, уместно ли это, показывает настоящее понимание чувствительности протокола совета директоров."
        },
        {
            question: "Complete the data breach notification inquiry:",
            questionRu: "Дополните запрос о уведомлении о нарушении данных:",
            sentence: "Considering the potential privacy violations, I was hoping to understand ____ notification timelines are mandated by current data protection regulations.",
            correctAnswer: "which",
            options: ["which", "which are", "what", "what specific"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific timelines from regulatory notification requirements.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных сроках из регуляторных требований уведомления.",
            incorrectFeedback: "Outstanding data protection expertise! 'Which' works best because we're identifying specific notification timelines from regulatory frameworks.",
            incorrectFeedbackRu: "Выдающаяся экспертиза защиты данных! 'Which' работает лучше всего, потому что мы определяем конкретные сроки уведомления из регуляторных рамок."
        },
        {
            question: "Complete the executive succession inquiry:",
            questionRu: "Дополните запрос о исполнительном преемстве:",
            sentence: "In this unprecedented leadership transition situation, may I ask ____ succession planning protocols ensure organizational continuity during executive changes?",
            correctAnswer: "how",
            options: ["how", "how do", "the mechanisms that", "in what way"],
            correctFeedback: "Perfect! 'How' is correct for asking about succession processes and organizational continuity mechanisms.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах преемственности и механизмах организационной непрерывности.",
            incorrectFeedback: "Excellent executive governance sophistication! We use 'how succession planning protocols ensure continuity' during leadership transitions.",
            incorrectFeedbackRu: "Отличная изощренность исполнительного управления! Мы используем 'how succession planning protocols ensure continuity' во время переходов лидерства."
        },
        {
            question: "Complete the insider trading compliance inquiry:",
            questionRu: "Дополните запрос о соблюдении требований по инсайдерской торговле:",
            sentence: "I realize this involves highly sensitive financial information, but could you clarify ____ trading restrictions apply during material information disclosure periods?",
            correctAnswer: "which",
            options: ["which", "which do", "what", "what specific"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific restrictions from securities compliance frameworks.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных ограничениях из рамок соблюдения ценных бумаг.",
            incorrectFeedback: "Excellent securities compliance sophistication! 'Which' is ideal because we're identifying specific trading restrictions from regulatory requirements.",
            incorrectFeedbackRu: "Отличная изощренность соблюдения ценных бумаг! 'Which' идеально, потому что мы определяем конкретные торговые ограничения из регуляторных требований."
        },
        {
            question: "Complete the merger due diligence inquiry:",
            questionRu: "Дополните запрос о должной осмотрительности при слиянии:",
            sentence: "Would it be appropriate to discuss ____ due diligence procedures are typically required for transactions of this magnitude?",
            correctAnswer: "which",
            options: ["which", "which are", "what", "what specific"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific procedures from established M&A due diligence frameworks.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных процедурах из установленных рамок должной осмотрительности M&A.",
            incorrectFeedback: "Excellent M&A sophistication! Asking if it's appropriate shows real understanding of transaction confidentiality protocols.",
            incorrectFeedbackRu: "Отличная изощренность в M&A! Вопрос о том, уместно ли это, показывает настоящее понимание протоколов конфиденциальности сделок."
        },
        {
            question: "Complete the regulatory compliance inquiry:",
            questionRu: "Дополните запрос о соблюдении нормативных требований:",
            sentence: "Given the complexity of securities regulations, could you clarify ____ disclosure requirements apply to our upcoming public offering?",
            correctAnswer: "which",
            options: ["which", "which do", "what", "what specific"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific requirements from public company disclosure frameworks.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных требованиях из рамок раскрытия информации публичных компаний.",
            incorrectFeedback: "Excellent securities law sophistication! 'Which' works best because we're identifying specific disclosure requirements from regulatory options.",
            incorrectFeedbackRu: "Отличная изощренность в праве ценных бумаг! 'Which' работает лучше всего, потому что мы определяем конкретные требования раскрытия из регуляторных вариантов."
        },
        {
            question: "Complete the international business law inquiry:",
            questionRu: "Дополните запрос о международном бизнес-праве:",
            sentence: "I was hoping to understand ____ jurisdictional challenges might arise when expanding operations internationally.",
            correctAnswer: "which",
            options: ["which", "which might", "what", "what types of"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific challenges from potential international legal complications.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных вызовах из потенциальных международных правовых осложнений.",
            incorrectFeedback: "Excellent international law sophistication! 'Which' is ideal because we're identifying specific jurisdictional challenges from global expansion risks.",
            incorrectFeedbackRu: "Отличная международная правовая изощренность! 'Which' идеально, потому что мы определяем конкретные юрисдикционные вызовы из рисков глобальной экспансии."
        }
    ]
};

/* ============================================
Page 8: Polite indirect questions - Research and academic excellence contexts (Fill in the Gaps)
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-gap-page8'] = {
    title: "Polite indirect questions - Research and academic excellence contexts",
    fillGaps: [
        {
            question: "Complete the scholarly inquiry:",
            questionRu: "Дополните научный запрос:",
            sentence: "Would it be possible to ascertain ____ data collection period spanned for this longitudinal study?",
            correctAnswer: "how long the",
            options: ["how long the", "how long did the", "what period the", "which time the"],
            correctFeedback: "Excellent! 'How long the' is correct for asking about duration in formal academic contexts while maintaining proper indirect question structure.",
            correctFeedbackRu: "Отлично! 'How long the' правильно для вопросов о продолжительности в формальных академических контекстах, сохраняя правильную структуру косвенного вопроса.",
            incorrectFeedback: "Outstanding scholarly vocabulary! 'Ascertain' shows real academic sophistication. Remember that indirect questions use statement word order: 'how long the data collection period spanned'.",
            incorrectFeedbackRu: "Выдающаяся научная лексика! 'Ascertain' показывает настоящую академическую изощренность. Помните, что косвенные вопросы используют порядок слов утверждения: 'how long the data collection period spanned'."
        },
        {
            question: "Complete the research methodology inquiry:",
            questionRu: "Дополните запрос о методологии исследования:",
            sentence: "I would appreciate your perspective on ____ limitations might affect the generalizability of these findings.",
            correctAnswer: "what",
            options: ["what", "what do", "which", "which type of"],
            correctFeedback: "Perfect! 'What' is correct for asking about research limitations in general terms without specifying particular types.",
            correctFeedbackRu: "Отлично! 'What' правильно для вопросов об ограничениях исследования в общих терминах без указания конкретных типов.",
            incorrectFeedback: "Outstanding methodological awareness! 'What' works best because we're asking about limitations in general rather than specific predetermined types.",
            incorrectFeedbackRu: "Выдающееся методологическое понимание! 'What' работает лучше всего, потому что мы спрашиваем об ограничениях в общем, а не о конкретных предопределенных типах."
        },
        {
            question: "Complete the peer review inquiry:",
            questionRu: "Дополните запрос экспертной оценки:",
            sentence: "Would you mind clarifying ____ peer review process was conducted for this publication?",
            correctAnswer: "how the",
            options: ["how the", "how was the", "in what manner the", "which way the"],
            correctFeedback: "Excellent! 'How the' is correct for asking about academic publishing processes while maintaining scholarly formality.",
            correctFeedbackRu: "Отлично! 'How the' правильно для вопросов о процессах академической публикации, сохраняя научную формальность.",
            incorrectFeedback: "Excellent awareness of academic publishing! We use 'how the peer review process was conducted' to ask about publication standards.",
            incorrectFeedbackRu: "Отличное понимание академической публикации! Мы используем 'how the peer review process was conducted' для вопросов о стандартах публикации."
        },
        {
            question: "Complete the conference presentation inquiry:",
            questionRu: "Дополните запрос о конференционной презентации:",
            sentence: "Could you share your insights on ____ audience reception was gauged during your keynote presentation?",
            correctAnswer: "how",
            options: ["how", "how was", "the method by which", "in what way"],
            correctFeedback: "Perfect! 'How' is correct for asking about presentation effectiveness and audience engagement measurement methods.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов об эффективности презентации и методах измерения вовлечения аудитории.",
            incorrectFeedback: "Excellent presentation awareness! We say 'how audience reception was gauged' to ask about presentation impact assessment.",
            incorrectFeedbackRu: "Отличное понимание презентации! Мы говорим 'how audience reception was gauged' для вопросов об оценке воздействия презентации."
        },
        {
            question: "Complete the interdisciplinary collaboration inquiry:",
            questionRu: "Дополните запрос о междисциплинарном сотрудничестве:",
            sentence: "I'm keen to understand ____ cross-disciplinary expertise was integrated into your research team.",
            correctAnswer: "how",
            options: ["how", "how was", "the process by which", "in what manner"],
            correctFeedback: "Excellent! 'How' is correct for asking about collaborative research processes and methodological diversity integration.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах совместных исследований и интеграции методологического разнообразия.",
            incorrectFeedback: "Outstanding collaborative awareness! We use 'how cross-disciplinary expertise was integrated' to ask about interdisciplinary research methods.",
            incorrectFeedbackRu: "Выдающееся понимание сотрудничества! Мы используем 'how cross-disciplinary expertise was integrated' для вопросов о междисциплинарных методах исследования."
        },
        {
            question: "Complete the grant funding inquiry:",
            questionRu: "Дополните запрос о грантовом финансировании:",
            sentence: "Would it be appropriate to inquire ____ funding mechanisms supported this extensive longitudinal research?",
            correctAnswer: "which",
            options: ["which", "which did", "what", "what type of"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific funding sources from available research support options.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных источниках финансирования из доступных вариантов поддержки исследований.",
            incorrectFeedback: "Excellent academic diplomacy! Asking if it's appropriate shows sensitivity to funding disclosure protocols. 'Which' works best for specific funding mechanisms.",
            incorrectFeedbackRu: "Отличная академическая дипломатия! Вопрос о том, уместно ли это, показывает чувствительность к протоколам раскрытия финансирования. 'Which' работает лучше всего для конкретных механизмов финансирования."
        },
        {
            question: "Complete the theoretical framework inquiry:",
            questionRu: "Дополните запрос о теоретической рамке:",
            sentence: "I was curious to explore ____ theoretical paradigms informed your hypothesis development process.",
            correctAnswer: "which",
            options: ["which", "which did", "what", "what types of"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific paradigms from established theoretical frameworks in academic research.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных парадигмах из установленных теоретических рамок в академических исследованиях.",
            incorrectFeedback: "Outstanding theoretical engagement! 'Which' is ideal because we're asking about specific theoretical paradigms from academic frameworks.",
            incorrectFeedbackRu: "Выдающееся теоретическое понимание! 'Which' идеально, потому что мы спрашиваем о конкретных теоретических парадигмах из академических рамок."
        },
        {
            question: "Complete the research ethics inquiry:",
            questionRu: "Дополните запрос об этике исследований:",
            sentence: "Could you elaborate on ____ ethical approval procedures were followed throughout this human subjects research?",
            correctAnswer: "which",
            options: ["which", "which were", "what", "what specific"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific ethical procedures from established research ethics protocols.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных этических процедурах из установленных протоколов этики исследований.",
            incorrectFeedback: "Excellent research ethics awareness! 'Which' works best because we're asking about specific ethical approval procedures from research standards.",
            incorrectFeedbackRu: "Отличное понимание этики исследований! 'Which' работает лучше всего, потому что мы спрашиваем о конкретных процедурах этического одобрения из стандартов исследований."
        },
        {
            question: "Complete the publication strategy inquiry:",
            questionRu: "Дополните запрос о стратегии публикации:",
            sentence: "I was hoping to learn ____ dissemination strategies you employed to maximize research impact across academic communities.",
            correctAnswer: "which",
            options: ["which", "which did", "what", "what types of"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific strategies from available academic dissemination approaches.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных стратегиях из доступных подходов академического распространения.",
            incorrectFeedback: "Outstanding academic impact awareness! 'Which' is perfect because we're selecting specific dissemination strategies from research communication options.",
            incorrectFeedbackRu: "Выдающееся понимание академического воздействия! 'Which' идеально, потому что мы выбираем конкретные стратегии распространения из вариантов коммуникации исследований."
        },
        {
            question: "Complete the collaborative research inquiry:",
            questionRu: "Дополните запрос о совместных исследованиях:",
            sentence: "Would you be willing to share ____ international partnerships enhanced the scope of your research program?",
            correctAnswer: "how",
            options: ["how", "how did", "the ways in which", "in what manner"],
            correctFeedback: "Perfect! 'How' is correct for asking about enhancement processes and collaborative research development methods.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах улучшения и методах развития совместных исследований.",
            incorrectFeedback: "Excellent international collaboration awareness! We use 'how international partnerships enhanced the scope' to ask about research enhancement.",
            incorrectFeedbackRu: "Отличное понимание международного сотрудничества! Мы используем 'how international partnerships enhanced the scope' для вопросов об улучшении исследований."
        }
    ]
};

/* ============================================
Page 9: Polite indirect questions - Innovation and future-oriented contexts (Fill in the Gaps)
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-gap-page9'] = {
    title: "Polite indirect questions - Innovation and future-oriented contexts",
    fillGaps: [
        {
            question: "Complete the quantum computing inquiry:",
            questionRu: "Дополните запрос о квантовых вычислениях:",
            sentence: "Would it be appropriate to discuss ____ quantum algorithms your research team is developing for cryptographic applications?",
            correctAnswer: "which",
            options: ["which", "which are", "what", "what specific"],
            correctFeedback: "Excellent! 'Which' is correct when asking about specific algorithms from quantum computing research while respecting confidentiality.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных алгоритмах из исследований квантовых вычислений, уважая конфиденциальность.",
            incorrectFeedback: "Outstanding quantum sophistication! Asking if it's appropriate shows understanding of research sensitivity in cutting-edge quantum development.",
            incorrectFeedbackRu: "Выдающаяся квантовая изощренность! Вопрос о том, уместно ли это, показывает понимание чувствительности исследований в передовой квантовой разработке."
        },
        {
            question: "Complete the software development inquiry:",
            questionRu: "Дополните запрос о разработке программного обеспечения:",
            sentence: "Could you help me understand ____ agile frameworks your development teams implement for continuous integration workflows?",
            correctAnswer: "which",
            options: ["which", "which do", "what", "what specific"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific frameworks from available agile development methodologies.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных фреймворках из доступных гибких методологий разработки.",
            incorrectFeedback: "Outstanding software development sophistication! 'Which' works best because we're selecting from established agile framework options.",
            incorrectFeedbackRu: "Выдающаяся изощренность в разработке ПО! 'Which' работает лучше всего, потому что мы выбираем из установленных вариантов agile фреймворков."
        },
        {
            question: "Complete the cloud migration inquiry:",
            questionRu: "Дополните запрос о миграции в облако:",
            sentence: "I was hoping to learn ____ containerization strategies facilitate your transition to microservices architecture.",
            correctAnswer: "how",
            options: ["how", "how do", "the methods that", "in what way"],
            correctFeedback: "Excellent! 'How' is correct for asking about cloud computing processes and modern application deployment strategies.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах облачных вычислений и стратегиях развертывания современных приложений.",
            incorrectFeedback: "Excellent cloud architecture awareness! We use 'how containerization strategies facilitate your transition' to ask about infrastructure modernization.",
            incorrectFeedbackRu: "Отличное понимание облачной архитектуры! Мы используем 'how containerization strategies facilitate your transition' для вопросов о модернизации инфраструктуры."
        },
        {
            question: "Complete the augmented reality inquiry:",
            questionRu: "Дополните запрос о дополненной реальности:",
            sentence: "Could you share your perspective on ____ rendering engines optimize performance for immersive AR experiences?",
            correctAnswer: "which",
            options: ["which", "which do", "what", "what types of"],
            correctFeedback: "Perfect! 'Which' is correct when asking about specific engines from available AR development technologies.",
            correctFeedbackRu: "Отлично! 'Which' правильно при вопросе о конкретных движках из доступных технологий разработки AR.",
            incorrectFeedback: "Outstanding AR development sophistication! 'Which' is ideal because we're selecting from existing rendering engine options for AR applications.",
            incorrectFeedbackRu: "Выдающаяся изощренность в разработке AR! 'Which' идеально, потому что мы выбираем из существующих вариантов движков рендеринга для AR приложений."
        },
        {
            question: "Complete the edge computing inquiry:",
            questionRu: "Дополните запрос о периферийных вычислениях:",
            sentence: "I'm fascinated to discover ____ edge computing nodes reduce latency while maintaining data processing efficiency.",
            correctAnswer: "how",
            options: ["how", "how do", "the ways that", "in what manner"],
            correctFeedback: "Excellent! 'How' is correct for asking about distributed computing processes and performance optimization mechanisms.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах распределенных вычислений и механизмах оптимизации производительности.",
            incorrectFeedback: "Excellent edge computing expertise! Your fascination shows genuine interest. We say 'how edge computing nodes reduce latency'.",
            incorrectFeedbackRu: "Отличная экспертиза в периферийных вычислениях! Ваше увлечение показывает искренний интерес. Мы говорим 'how edge computing nodes reduce latency'."
        },
        {
            question: "Complete the sustainable technology inquiry:",
            questionRu: "Дополните запрос об устойчивых технологиях:",
            sentence: "Could you clarify ____ LEED certification standards ensure energy efficiency throughout building lifecycle management?",
            correctAnswer: "how",
            options: ["how", "how do", "the criteria by which", "in what way"],
            correctFeedback: "Perfect! 'How' is correct for asking about green building processes and sustainable construction standards.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах зеленого строительства и стандартах устойчивого строительства.",
            incorrectFeedback: "Outstanding sustainable construction expertise! We use 'how LEED standards ensure efficiency' to ask about green building certification.",
            incorrectFeedbackRu: "Выдающаяся экспертиза устойчивого строительства! Мы используем 'how LEED standards ensure efficiency' для вопросов о сертификации зеленых зданий."
        },
        {
            question: "Complete the climate adaptation inquiry:",
            questionRu: "Дополните запрос об адаптации к климату:",
            sentence: "I'm interested to understand ____ coastal communities develop resilience against sea level rise projections.",
            correctAnswer: "how",
            options: ["how", "how do", "the strategies that", "in what ways"],
            correctFeedback: "Excellent! 'How' is correct for asking about climate adaptation processes and community resilience development methods.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах адаптации к климату и методах развития устойчивости сообществ.",
            incorrectFeedback: "Excellent climate resilience sophistication! We say 'how coastal communities develop resilience' to ask about adaptation strategies.",
            incorrectFeedbackRu: "Отличная изощренность в климатической устойчивости! Мы говорим 'how coastal communities develop resilience' для вопросов о стратегиях адаптации."
        },
        {
            question: "Complete the biotechnology innovation inquiry:",
            questionRu: "Дополните запрос о биотехнологических инновациях:",
            sentence: "Would you mind discussing ____ gene editing technologies are being applied to address hereditary disease prevention?",
            correctAnswer: "how",
            options: ["how", "how are", "the methods by which", "in what manner"],
            correctFeedback: "Perfect! 'How' is correct for asking about biotechnology applications and medical innovation processes.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о применениях биотехнологий и процессах медицинских инноваций.",
            incorrectFeedback: "Outstanding biotechnology awareness! We use 'how gene editing technologies are being applied' to ask about medical innovation applications.",
            incorrectFeedbackRu: "Выдающееся понимание биотехнологий! Мы используем 'how gene editing technologies are being applied' для вопросов о применениях медицинских инноваций."
        },
        {
            question: "Complete the space technology inquiry:",
            questionRu: "Дополните запрос о космических технологиях:",
            sentence: "I was wondering ____ satellite constellation projects contribute to global internet connectivity infrastructure development.",
            correctAnswer: "how",
            options: ["how", "how do", "the ways in which", "in what manner"],
            correctFeedback: "Excellent! 'How' is correct for asking about space technology contributions and telecommunications infrastructure processes.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о вкладе космических технологий и процессах телекоммуникационной инфраструктуры.",
            incorrectFeedback: "Outstanding space technology sophistication! We say 'how satellite constellation projects contribute' to ask about connectivity development.",
            incorrectFeedbackRu: "Выдающаяся изощренность в космических технологиях! Мы говорим 'how satellite constellation projects contribute' для вопросов о развитии связности."
        },
        {
            question: "Complete the future mobility inquiry:",
            questionRu: "Дополните запрос о будущей мобильности:",
            sentence: "Could you elaborate on ____ autonomous vehicle systems integrate artificial intelligence for real-time decision-making processes?",
            correctAnswer: "how",
            options: ["how", "how do", "the mechanisms by which", "in what way"],
            correctFeedback: "Perfect! 'How' is correct for asking about integration processes and AI-driven transportation technology development.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах интеграции и развитии транспортных технологий на основе ИИ.",
            incorrectFeedback: "Excellent autonomous vehicle expertise! We use 'how autonomous vehicle systems integrate AI' to ask about smart transportation technology.",
            incorrectFeedbackRu: "Отличная экспертиза автономных транспортных средств! Мы используем 'how autonomous vehicle systems integrate AI' для вопросов об умных транспортных технологиях."
        }
    ]
};

/* ============================================
Page 10: Polite indirect questions - Advanced ethical and philosophical contexts (Fill in the Gaps)
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-gap-page10'] = {
    title: "Polite indirect questions - Advanced ethical and philosophical contexts",
    fillGaps: [
        {
            question: "Complete the bioethics inquiry:",
            questionRu: "Дополните запрос по биоэтике:",
            sentence: "I realize this touches on profound ethical considerations, but could you share your perspective on ____ artificial intelligence should be regulated in medical decision-making processes?",
            correctAnswer: "whether",
            options: ["whether", "if", "how", "that"],
            correctFeedback: "Excellent! 'Whether' is correct for formal ethical discussions about AI regulation in healthcare, showing appropriate gravity for the topic.",
            correctFeedbackRu: "Отлично! 'Whether' правильно для формальных этических обсуждений о регулировании ИИ в здравоохранении, показывая соответствующую серьезность темы.",
            incorrectFeedback: "Outstanding ethical sensitivity! Acknowledging profound considerations shows real philosophical awareness. 'Whether' is more formal than 'if' for serious ethical discussions.",
            incorrectFeedbackRu: "Выдающаяся этическая чувствительность! Признание глубоких соображений показывает настоящее философское понимание. 'Whether' более формально, чем 'if' для серьезных этических обсуждений."
        },
        {
            question: "Complete the environmental philosophy inquiry:",
            questionRu: "Дополните запрос по экологической философии:",
            sentence: "Given the complexity of intergenerational justice, I was hoping to understand ____ future generations' rights should influence contemporary environmental policy decisions.",
            correctAnswer: "how",
            options: ["how", "how should", "in what way", "the extent to which"],
            correctFeedback: "Perfect! 'How' is correct for asking about the influence mechanisms of intergenerational ethics on policy development.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о механизмах влияния межпоколенческой этики на разработку политики.",
            incorrectFeedback: "Excellent philosophical sophistication! Your understanding of intergenerational justice shows deep ethical thinking. We use 'how future generations' rights should influence policy'.",
            incorrectFeedbackRu: "Отличная философская изощренность! Ваше понимание межпоколенческой справедливости показывает глубокое этическое мышление. Мы используем 'how future generations' rights should influence policy'."
        },
        {
            question: "Complete the technological ethics inquiry:",
            questionRu: "Дополните запрос по технологической этике:",
            sentence: "I wonder if you might elaborate on ____ privacy rights should be balanced against national security interests in digital surveillance systems.",
            correctAnswer: "how",
            options: ["how", "how should", "the ways in which", "in what manner"],
            correctFeedback: "Excellent! 'How' is correct for asking about ethical balancing processes in complex privacy and security considerations.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о процессах этического балансирования в сложных соображениях приватности и безопасности.",
            incorrectFeedback: "Outstanding digital ethics awareness! Your question addresses fundamental tensions between privacy and security. We say 'how privacy rights should be balanced'.",
            incorrectFeedbackRu: "Выдающееся понимание цифровой этики! Ваш вопрос затрагивает фундаментальные напряжения между приватностью и безопасностью. Мы говорим 'how privacy rights should be balanced'."
        },
        {
            question: "Complete the social justice inquiry:",
            questionRu: "Дополните запрос о социальной справедливости:",
            sentence: "This is undoubtedly a sensitive topic, but I was curious ____ algorithmic bias in hiring systems perpetuates workplace inequality.",
            correctAnswer: "whether",
            options: ["whether", "if", "how", "that"],
            correctFeedback: "Perfect! 'Whether' is correct for formal inquiries about the existence of algorithmic bias effects in employment systems.",
            correctFeedbackRu: "Отлично! 'Whether' правильно для формальных запросов о существовании эффектов алгоритмической предвзятости в системах трудоустройства.",
            incorrectFeedback: "Excellent social justice sensitivity! Acknowledging sensitivity shows awareness of discrimination issues. 'Whether' works best for questions about bias existence.",
            incorrectFeedbackRu: "Отличная чувствительность к социальной справедливости! Признание чувствительности показывает понимание вопросов дискриминации. 'Whether' работает лучше всего для вопросов о существовании предвзятости."
        },
        {
            question: "Complete the medical ethics inquiry:",
            questionRu: "Дополните запрос по медицинской этике:",
            sentence: "I hope I'm approaching this respectfully, but could you help me understand ____ informed consent protocols should evolve for genetic modification therapies?",
            correctAnswer: "how",
            options: ["how", "how should", "in what ways", "the manner in which"],
            correctFeedback: "Excellent! 'How' is correct for asking about the evolution of ethical protocols in cutting-edge medical treatments.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов об эволюции этических протоколов в передовых медицинских лечениях.",
            incorrectFeedback: "Outstanding medical ethics awareness! Your respectful approach shows understanding of genetic therapy sensitivity. We use 'how informed consent protocols should evolve'.",
            incorrectFeedbackRu: "Выдающееся понимание медицинской этики! Ваш уважительный подход показывает понимание чувствительности генной терапии. Мы используем 'how informed consent protocols should evolve'."
        },
        {
            question: "Complete the corporate responsibility inquiry:",
            questionRu: "Дополните запрос о корпоративной ответственности:",
            sentence: "Given the global impact of multinational corporations, I was wondering ____ corporate social responsibility initiatives should be mandated versus remaining voluntary.",
            correctAnswer: "whether",
            options: ["whether", "if", "how", "that"],
            correctFeedback: "Perfect! 'Whether' is correct for formal discussions about corporate regulation and mandatory versus voluntary approaches.",
            correctFeedbackRu: "Отлично! 'Whether' правильно для формальных обсуждений о корпоративном регулировании и обязательных против добровольных подходов.",
            incorrectFeedback: "Excellent corporate ethics awareness! Your understanding of global impact shows sophisticated business ethics thinking. 'Whether' is ideal for mandate discussions.",
            incorrectFeedbackRu: "Отличное понимание корпоративной этики! Ваше понимание глобального воздействия показывает изощренное мышление деловой этики. 'Whether' идеально для обсуждений мандатов."
        },
        {
            question: "Complete the educational philosophy inquiry:",
            questionRu: "Дополните запрос по философии образования:",
            sentence: "I'd be grateful for your thoughts on ____ educational equity can be achieved when socioeconomic disparities create unequal learning opportunities.",
            correctAnswer: "how",
            options: ["how", "how can", "the methods by which", "in what ways"],
            correctFeedback: "Excellent! 'How' is correct for asking about achieving educational equity despite socioeconomic challenges and systemic inequalities.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о достижении образовательного равенства несмотря на социально-экономические вызовы и системные неравенства.",
            incorrectFeedback: "Outstanding educational equity awareness! Your understanding of socioeconomic disparities shows deep social consciousness. We say 'how educational equity can be achieved'.",
            incorrectFeedbackRu: "Выдающееся понимание образовательного равенства! Ваше понимание социально-экономических различий показывает глубокое социальное сознание. Мы говорим 'how educational equity can be achieved'."
        },
        {
            question: "Complete the research ethics inquiry:",
            questionRu: "Дополните запрос об этике исследований:",
            sentence: "This involves considerable ethical complexity, but I wonder ____ dual-use research should be regulated when scientific discoveries have both beneficial and potentially harmful applications.",
            correctAnswer: "whether",
            options: ["whether", "if", "how", "that"],
            correctFeedback: "Perfect! 'Whether' is correct for formal discussions about regulating research with dual-use potential in scientific ethics.",
            correctFeedbackRu: "Отлично! 'Whether' правильно для формальных обсуждений о регулировании исследований с потенциалом двойного использования в научной этике.",
            incorrectFeedback: "Excellent research ethics sophistication! Acknowledging ethical complexity shows deep understanding of dual-use research dilemmas. 'Whether' works best for regulation questions.",
            incorrectFeedbackRu: "Отличная изощренность в этике исследований! Признание этической сложности показывает глубокое понимание дилемм исследований двойного использования. 'Whether' работает лучше всего для вопросов регулирования."
        },
        {
            question: "Complete the digital rights inquiry:",
            questionRu: "Дополните запрос о цифровых правах:",
            sentence: "I realize this raises fundamental questions about human dignity, but could you share your perspective on ____ artificial consciousness should be granted legal personhood status?",
            correctAnswer: "whether",
            options: ["whether", "if", "how", "that"],
            correctFeedback: "Excellent! 'Whether' is correct for formal philosophical discussions about AI consciousness and legal personhood in advanced ethics.",
            correctFeedbackRu: "Отлично! 'Whether' правильно для формальных философских обсуждений о сознании ИИ и правовой личности в продвинутой этике.",
            incorrectFeedback: "Outstanding philosophical depth! Your awareness of human dignity questions shows exceptional ethical thinking about AI consciousness and legal rights.",
            incorrectFeedbackRu: "Выдающаяся философская глубина! Ваше понимание вопросов человеческого достоинства показывает исключительное этическое мышление о сознании ИИ и правовых правах."
        },
        {
            question: "Complete the global ethics inquiry:",
            questionRu: "Дополните запрос по глобальной этике:",
            sentence: "As we navigate these unprecedented ethical frontiers, may I ask ____ humanity should collectively approach the governance of transformative technologies that transcend national boundaries?",
            correctAnswer: "how",
            options: ["how", "how should", "in what manner", "the ways in which"],
            correctFeedback: "Perfect! 'How' is correct for asking about collective approaches to global governance of transformative technologies in philosophical contexts.",
            correctFeedbackRu: "Отлично! 'How' правильно для вопросов о коллективных подходах к глобальному управлению трансформационными технологиями в философских контекстах.",
            incorrectFeedback: "Exceptional global ethics awareness! Your recognition of unprecedented frontiers shows sophisticated understanding of humanity's collective technological challenges.",
            incorrectFeedbackRu: "Исключительное понимание глобальной этики! Ваше признание беспрецедентных границ показывает изощренное понимание коллективных технологических вызовов человечества."
        }
    ]
};


/* =============================================================================== */
/* =========================Sentence Building Exercises=========================== */

/* ============================================
Page 1: Polite indirect questions - Basic forms
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-sentence-page1'] = {
    title: "Polite indirect questions - Basic forms",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "tell", "me", "where", "the", "station", "is?"],
            correctAnswer: "Could you tell me where the station is?",
            correctFeedback: "Perfect! 'Could you tell me where the station is?' is correct. Excellent use of indirect question word order!",
            correctFeedbackRu: "Отлично! 'Could you tell me where the station is?' верно. Превосходное использование порядка слов косвенного вопроса!",
            incorrectFeedback: "Try again. Remember: Could + you + tell me + question word + subject + verb + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + tell me + вопросительное слово + подлежащее + глагол + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "wondering", "if", "you", "could", "help", "me."],
            correctAnswer: "I was wondering if you could help me.",
            correctFeedback: "Excellent! 'I was wondering if you could help me.' is correct. Great polite expression for making requests!",
            correctFeedbackRu: "Отлично! 'I was wondering if you could help me.' верно. Отличное вежливое выражение для просьб!",
            incorrectFeedback: "Try again. Remember: I + was wondering + if + you + could + verb + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was wondering + if + you + could + глагол + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Do", "you", "know", "what", "time", "it", "is?"],
            correctAnswer: "Do you know what time it is?",
            correctFeedback: "Perfect! 'Do you know what time it is?' is correct. Excellent indirect question structure!",
            correctFeedbackRu: "Отлично! 'Do you know what time it is?' верно. Превосходная структура косвенного вопроса!",
            incorrectFeedback: "Try again. Remember: Do + you + know + what + time + it + is + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Do + you + know + what + time + it + is + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "you", "mind", "telling", "me", "how", "to", "get", "there?"],
            correctAnswer: "Would you mind telling me how to get there?",
            correctFeedback: "Excellent! 'Would you mind telling me how to get there?' is correct. Very polite way to ask for directions!",
            correctFeedbackRu: "Отлично! 'Would you mind telling me how to get there?' верно. Очень вежливый способ спросить дорогу!",
            incorrectFeedback: "Try again. Remember: Would + you + mind + telling me + how + to + verb + there + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + you + mind + telling me + how + to + глагол + there + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'd", "like", "to", "know", "when", "the", "meeting", "starts."],
            correctAnswer: "I'd like to know when the meeting starts.",
            correctFeedback: "Perfect! 'I'd like to know when the meeting starts.' is correct. Great formal way to request information!",
            correctFeedbackRu: "Отлично! 'I'd like to know when the meeting starts.' верно. Отличный формальный способ запросить информацию!",
            incorrectFeedback: "Try again. Remember: I'd + like + to + know + when + the + meeting + starts.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'd + like + to + know + when + the + meeting + starts."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "possibly", "explain", "why", "this", "happened?"],
            correctAnswer: "Could you possibly explain why this happened?",
            correctFeedback: "Excellent! 'Could you possibly explain why this happened?' is correct. Very polite and formal request!",
            correctFeedbackRu: "Отлично! 'Could you possibly explain why this happened?' верно. Очень вежливая и формальная просьба!",
            incorrectFeedback: "Try again. Remember: Could + you + possibly + explain + why + this + happened + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + possibly + explain + why + this + happened + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "wonder", "if", "there", "are", "any", "seats", "available."],
            correctAnswer: "I wonder if there are any seats available.",
            correctFeedback: "Perfect! 'I wonder if there are any seats available.' is correct. Great way to politely inquire about availability!",
            correctFeedbackRu: "Отлично! 'I wonder if there are any seats available.' верно. Отличный способ вежливо узнать о наличии!",
            incorrectFeedback: "Try again. Remember: I + wonder + if + there + are + any + seats + available.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + wonder + if + there + are + any + seats + available."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "it", "be", "possible", "to", "find", "out", "who", "is", "responsible?"],
            correctAnswer: "Would it be possible to find out who is responsible?",
            correctFeedback: "Excellent! 'Would it be possible to find out who is responsible?' is correct. Very diplomatic and professional!",
            correctFeedbackRu: "Отлично! 'Would it be possible to find out who is responsible?' верно. Очень дипломатично и профессионально!",
            incorrectFeedback: "Try again. Remember: Would + it + be + possible + to + find out + who + is + responsible + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + it + be + possible + to + find out + who + is + responsible + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Do", "you", "happen", "to", "know", "whether", "the", "store", "is", "open?"],
            correctAnswer: "Do you happen to know whether the store is open?",
            correctFeedback: "Perfect! 'Do you happen to know whether the store is open?' is correct. Excellent polite inquiry!",
            correctFeedbackRu: "Отлично! 'Do you happen to know whether the store is open?' верно. Превосходный вежливый запрос!",
            incorrectFeedback: "Try again. Remember: Do + you + happen + to + know + whether + the + store + is + open + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Do + you + happen + to + know + whether + the + store + is + open + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "curious", "to", "know", "which", "option", "you", "prefer."],
            correctAnswer: "I'm curious to know which option you prefer.",
            correctFeedback: "Excellent! 'I'm curious to know which option you prefer.' is correct. Great way to express polite interest!",
            correctFeedbackRu: "Отлично! 'I'm curious to know which option you prefer.' верно. Отличный способ выразить вежливый интерес!",
            incorrectFeedback: "Try again. Remember: I'm + curious + to + know + which + option + you + prefer.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'm + curious + to + know + which + option + you + prefer."
        }
    ]
};

/* ============================================
Page 2: Polite indirect questions - Professional contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-sentence-page2'] = {
    title: "Polite indirect questions - Professional contexts",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "hoping", "you", "could", "clarify", "when", "the", "deadline", "is."],
            correctAnswer: "I was hoping you could clarify when the deadline is.",
            correctFeedback: "Perfect! 'I was hoping you could clarify when the deadline is.' is correct. Professional and courteous!",
            correctFeedbackRu: "Отлично! 'I was hoping you could clarify when the deadline is.' верно. Профессионально и учтиво!",
            incorrectFeedback: "Try again. Remember: I + was hoping + you + could + clarify + when + the + deadline + is.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was hoping + you + could + clarify + when + the + deadline + is."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "help", "me", "understand", "how", "the", "system", "works?"],
            correctAnswer: "Could you help me understand how the system works?",
            correctFeedback: "Excellent! 'Could you help me understand how the system works?' is correct. Great professional inquiry!",
            correctFeedbackRu: "Отлично! 'Could you help me understand how the system works?' верно. Отличный профессиональный запрос!",
            incorrectFeedback: "Try again. Remember: Could + you + help me + understand + how + the + system + works + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + help me + understand + how + the + system + works + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'd", "appreciate", "it", "if", "you", "could", "advise", "me", "on", "which", "approach", "to", "take."],
            correctAnswer: "I'd appreciate it if you could advise me on which approach to take.",
            correctFeedback: "Perfect! 'I'd appreciate it if you could advise me on which approach to take.' is correct. Very professional!",
            correctFeedbackRu: "Отлично! 'I'd appreciate it if you could advise me on which approach to take.' верно. Очень профессионально!",
            incorrectFeedback: "Try again. Remember: I'd + appreciate it + if + you + could + advise me + on + which + approach + to + take.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'd + appreciate it + if + you + could + advise me + on + which + approach + to + take."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "you", "mind", "explaining", "why", "the", "project", "was", "delayed?"],
            correctAnswer: "Would you mind explaining why the project was delayed?",
            correctFeedback: "Excellent! 'Would you mind explaining why the project was delayed?' is correct. Diplomatic business inquiry!",
            correctFeedbackRu: "Отлично! 'Would you mind explaining why the project was delayed?' верно. Дипломатичный деловой запрос!",
            incorrectFeedback: "Try again. Remember: Would + you + mind + explaining + why + the + project + was + delayed + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + you + mind + explaining + why + the + project + was + delayed + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "wondering", "whether", "the", "budget", "has", "been", "approved."],
            correctAnswer: "I was wondering whether the budget has been approved.",
            correctFeedback: "Perfect! 'I was wondering whether the budget has been approved.' is correct. Professional and tactful!",
            correctFeedbackRu: "Отлично! 'I was wondering whether the budget has been approved.' верно. Профессионально и тактично!",
            incorrectFeedback: "Try again. Remember: I + was wondering + whether + the + budget + has + been + approved.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was wondering + whether + the + budget + has + been + approved."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "possibly", "inform", "me", "what", "the", "next", "steps", "are?"],
            correctAnswer: "Could you possibly inform me what the next steps are?",
            correctFeedback: "Excellent! 'Could you possibly inform me what the next steps are?' is correct. Very professional and polite!",
            correctFeedbackRu: "Отлично! 'Could you possibly inform me what the next steps are?' верно. Очень профессионально и вежливо!",
            incorrectFeedback: "Try again. Remember: Could + you + possibly + inform me + what + the + next + steps + are + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + possibly + inform me + what + the + next + steps + are + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'd", "be", "grateful", "if", "you", "could", "let", "me", "know", "who", "is", "in", "charge."],
            correctAnswer: "I'd be grateful if you could let me know who is in charge.",
            correctFeedback: "Perfect! 'I'd be grateful if you could let me know who is in charge.' is correct. Excellent professional courtesy!",
            correctFeedbackRu: "Отлично! 'I'd be grateful if you could let me know who is in charge.' верно. Превосходная профессиональная учтивость!",
            incorrectFeedback: "Try again. Remember: I'd + be + grateful + if + you + could + let me know + who + is + in + charge.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'd + be + grateful + if + you + could + let me know + who + is + in + charge."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "it", "be", "possible", "to", "clarify", "which", "department", "handles", "this?"],
            correctAnswer: "Would it be possible to clarify which department handles this?",
            correctFeedback: "Excellent! 'Would it be possible to clarify which department handles this?' is correct. Professional and diplomatic!",
            correctFeedbackRu: "Отлично! 'Would it be possible to clarify which department handles this?' верно. Профессионально и дипломатично!",
            incorrectFeedback: "Try again. Remember: Would + it + be + possible + to + clarify + which + department + handles + this + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + it + be + possible + to + clarify + which + department + handles + this + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "hoping", "to", "understand", "how", "the", "new", "policy", "affects", "our", "team."],
            correctAnswer: "I was hoping to understand how the new policy affects our team.",
            correctFeedback: "Perfect! 'I was hoping to understand how the new policy affects our team.' is correct. Great team-focused inquiry!",
            correctFeedbackRu: "Отлично! 'I was hoping to understand how the new policy affects our team.' верно. Отличный командно-ориентированный запрос!",
            incorrectFeedback: "Try again. Remember: I + was hoping + to + understand + how + the + new + policy + affects + our + team.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was hoping + to + understand + how + the + new + policy + affects + our + team."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Do", "you", "know", "whether", "the", "conference", "room", "is", "available?"],
            correctAnswer: "Do you know whether the conference room is available?",
            correctFeedback: "Excellent! 'Do you know whether the conference room is available?' is correct. Professional scheduling inquiry!",
            correctFeedbackRu: "Отлично! 'Do you know whether the conference room is available?' верно. Профессиональный запрос о расписании!",
            incorrectFeedback: "Try again. Remember: Do + you + know + whether + the + conference + room + is + available + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Do + you + know + whether + the + conference + room + is + available + ?"
        }
    ]
};

/* ============================================
Page 3: Polite indirect questions - Academic and complex contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-sentence-page3'] = {
    title: "Polite indirect questions - Academic and complex contexts",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "would", "be", "most", "grateful", "if", "you", "could", "illuminate", "which", "methodology", "was", "employed."],
            correctAnswer: "I would be most grateful if you could illuminate which methodology was employed.",
            correctFeedback: "Perfect! 'I would be most grateful if you could illuminate which methodology was employed.' is correct. Excellent academic discourse!",
            correctFeedbackRu: "Отлично! 'I would be most grateful if you could illuminate which methodology was employed.' верно. Превосходный академический дискурс!",
            incorrectFeedback: "Try again. Remember: I + would + be + most + grateful + if + you + could + illuminate + which + methodology + was + employed.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + would + be + most + grateful + if + you + could + illuminate + which + methodology + was + employed."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "elaborate", "on", "how", "statistical", "significance", "was", "determined?"],
            correctAnswer: "Could you elaborate on how statistical significance was determined?",
            correctFeedback: "Excellent! 'Could you elaborate on how statistical significance was determined?' is correct. Outstanding research inquiry!",
            correctFeedbackRu: "Отлично! 'Could you elaborate on how statistical significance was determined?' верно. Выдающийся исследовательский запрос!",
            incorrectFeedback: "Try again. Remember: Could + you + elaborate + on + how + statistical + significance + was + determined + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + elaborate + on + how + statistical + significance + was + determined + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "particularly", "interested", "in", "understanding", "which", "variables", "were", "controlled", "for."],
            correctAnswer: "I'm particularly interested in understanding which variables were controlled for.",
            correctFeedback: "Perfect! 'I'm particularly interested in understanding which variables were controlled for.' is correct. Sophisticated research focus!",
            correctFeedbackRu: "Отлично! 'I'm particularly interested in understanding which variables were controlled for.' верно. Изощренный исследовательский фокус!",
            incorrectFeedback: "Try again. Remember: I'm + particularly + interested + in + understanding + which + variables + were + controlled + for.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'm + particularly + interested + in + understanding + which + variables + were + controlled + for."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "realize", "this", "is", "an", "extremely", "sensitive", "matter,", "but", "would", "you", "be", "willing", "to", "share", "which", "strategies", "have", "proven", "effective?"],
            correctAnswer: "I realize this is an extremely sensitive matter, but would you be willing to share which strategies have proven effective?",
            correctFeedback: "Excellent! 'I realize this is an extremely sensitive matter, but would you be willing to share which strategies have proven effective?' is correct. Exceptional diplomatic sensitivity!",
            correctFeedbackRu: "Отлично! 'I realize this is an extremely sensitive matter, but would you be willing to share which strategies have proven effective?' верно. Исключительная дипломатическая чувствительность!",
            incorrectFeedback: "Try again. Remember: I + realize + this + is + an + extremely + sensitive + matter, + but + would + you + be + willing + to + share + which + strategies + have + proven + effective + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + realize + this + is + an + extremely + sensitive + matter, + but + would + you + be + willing + to + share + which + strategies + have + proven + effective + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Given", "the", "complexity", "of", "the", "situation,", "I", "was", "hoping", "to", "understand", "which", "factors", "contributed", "to", "this", "outcome."],
            correctAnswer: "Given the complexity of the situation, I was hoping to understand which factors contributed to this outcome.",
            correctFeedback: "Perfect! 'Given the complexity of the situation, I was hoping to understand which factors contributed to this outcome.' is correct. Outstanding analytical approach!",
            correctFeedbackRu: "Отлично! 'Given the complexity of the situation, I was hoping to understand which factors contributed to this outcome.' верно. Выдающийся аналитический подход!",
            incorrectFeedback: "Try again. Remember: Given + the + complexity + of + the + situation, + I + was + hoping + to + understand + which + factors + contributed + to + this + outcome.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Given + the + complexity + of + the + situation, + I + was + hoping + to + understand + which + factors + contributed + to + this + outcome."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "don't", "want", "to", "pry,", "but", "I", "was", "wondering", "how", "the", "changes", "might", "affect", "planning."],
            correctAnswer: "I don't want to pry, but I was wondering how the changes might affect planning.",
            correctFeedback: "Excellent! 'I don't want to pry, but I was wondering how the changes might affect planning.' is correct. Perfect balance of curiosity and respect!",
            correctFeedbackRu: "Отлично! 'I don't want to pry, but I was wondering how the changes might affect planning.' верно. Идеальный баланс любопытства и уважения!",
            incorrectFeedback: "Try again. Remember: I + don't + want + to + pry, + but + I + was + wondering + how + the + changes + might + affect + planning.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + don't + want + to + pry, + but + I + was + wondering + how + the + changes + might + affect + planning."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "it", "be", "appropriate", "to", "explore", "which", "solutions", "might", "address", "these", "challenges?"],
            correctAnswer: "Would it be appropriate to explore which solutions might address these challenges?",
            correctFeedback: "Perfect! 'Would it be appropriate to explore which solutions might address these challenges?' is correct. Excellent diplomatic inquiry!",
            correctFeedbackRu: "Отлично! 'Would it be appropriate to explore which solutions might address these challenges?' верно. Превосходный дипломатический запрос!",
            incorrectFeedback: "Try again. Remember: Would + it + be + appropriate + to + explore + which + solutions + might + address + these + challenges + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + it + be + appropriate + to + explore + which + solutions + might + address + these + challenges + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "can", "imagine", "this", "is", "stressful,", "but", "would", "you", "be", "willing", "to", "share", "how", "we", "can", "support", "you?"],
            correctAnswer: "I can imagine this is stressful, but would you be willing to share how we can support you?",
            correctFeedback: "Excellent! 'I can imagine this is stressful, but would you be willing to share how we can support you?' is correct. Beautiful empathy and support!",
            correctFeedbackRu: "Отлично! 'I can imagine this is stressful, but would you be willing to share how we can support you?' верно. Прекрасная эмпатия и поддержка!",
            incorrectFeedback: "Try again. Remember: I + can + imagine + this + is + stressful, + but + would + you + be + willing + to + share + how + we + can + support + you + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + can + imagine + this + is + stressful, + but + would + you + be + willing + to + share + how + we + can + support + you + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "hope", "this", "isn't", "too", "personal,", "but", "I", "was", "curious", "why", "you", "decided", "to", "pursue", "this", "path."],
            correctAnswer: "I hope this isn't too personal, but I was curious why you decided to pursue this path.",
            correctFeedback: "Perfect! 'I hope this isn't too personal, but I was curious why you decided to pursue this path.' is correct. Wonderful personal interest with professional respect!",
            correctFeedbackRu: "Отлично! 'I hope this isn't too personal, but I was curious why you decided to pursue this path.' верно. Замечательный личный интерес с профессиональным уважением!",
            incorrectFeedback: "Try again. Remember: I + hope + this + isn't + too + personal, + but + I + was + curious + why + you + decided + to + pursue + this + path.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + hope + this + isn't + too + personal, + but + I + was + curious + why + you + decided + to + pursue + this + path."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Under", "these", "challenging", "circumstances,", "I", "was", "hoping", "to", "clarify", "how", "procedures", "align", "with", "regulations."],
            correctAnswer: "Under these challenging circumstances, I was hoping to clarify how procedures align with regulations.",
            correctFeedback: "Excellent! 'Under these challenging circumstances, I was hoping to clarify how procedures align with regulations.' is correct. Outstanding crisis management awareness!",
            correctFeedbackRu: "Отлично! 'Under these challenging circumstances, I was hoping to clarify how procedures align with regulations.' верно. Выдающееся понимание антикризисного управления!",
            incorrectFeedback: "Try again. Remember: Under + these + challenging + circumstances, + I + was + hoping + to + clarify + how + procedures + align + with + regulations.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Under + these + challenging + circumstances, + I + was + hoping + to + clarify + how + procedures + align + with + regulations."
        }
    ]
};

/* ============================================
Page 4: Polite indirect questions - Healthcare and technical contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-sentence-page4'] = {
    title: "Polite indirect questions - Healthcare and technical contexts",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "wondering", "if", "you", "could", "explain", "how", "these", "symptoms", "might", "be", "interconnected."],
            correctAnswer: "I was wondering if you could explain how these symptoms might be interconnected.",
            correctFeedback: "Perfect! 'I was wondering if you could explain how these symptoms might be interconnected.' is correct. Excellent medical consultation approach!",
            correctFeedbackRu: "Отлично! 'I was wondering if you could explain how these symptoms might be interconnected.' верно. Превосходный подход к медицинской консультации!",
            incorrectFeedback: "Try again. Remember: I + was wondering + if + you + could + explain + how + these + symptoms + might + be + interconnected.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was wondering + if + you + could + explain + how + these + symptoms + might + be + interconnected."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "help", "me", "understand", "which", "preventive", "screenings", "would", "be", "most", "beneficial?"],
            correctAnswer: "Could you help me understand which preventive screenings would be most beneficial?",
            correctFeedback: "Excellent! 'Could you help me understand which preventive screenings would be most beneficial?' is correct. Outstanding preventive health awareness!",
            correctFeedbackRu: "Отлично! 'Could you help me understand which preventive screenings would be most beneficial?' верно. Выдающееся понимание профилактического здоровья!",
            incorrectFeedback: "Try again. Remember: Could + you + help me + understand + which + preventive + screenings + would + be + most + beneficial + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + help me + understand + which + preventive + screenings + would + be + most + beneficial + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "curious", "to", "understand", "how", "artificial", "intelligence", "algorithms", "are", "being", "integrated", "into", "your", "platform."],
            correctAnswer: "I'm curious to understand how artificial intelligence algorithms are being integrated into your platform.",
            correctFeedback: "Perfect! 'I'm curious to understand how artificial intelligence algorithms are being integrated into your platform.' is correct. Sophisticated technical inquiry!",
            correctFeedbackRu: "Отлично! 'I'm curious to understand how artificial intelligence algorithms are being integrated into your platform.' верно. Изощренный технический запрос!",
            incorrectFeedback: "Try again. Remember: I'm + curious + to + understand + how + artificial + intelligence + algorithms + are + being + integrated + into + your + platform.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'm + curious + to + understand + how + artificial + intelligence + algorithms + are + being + integrated + into + your + platform."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "you", "mind", "explaining", "how", "data", "encryption", "protocols", "ensure", "user", "privacy", "protection?"],
            correctAnswer: "Would you mind explaining how data encryption protocols ensure user privacy protection?",
            correctFeedback: "Excellent! 'Would you mind explaining how data encryption protocols ensure user privacy protection?' is correct. Outstanding cybersecurity awareness!",
            correctFeedbackRu: "Отлично! 'Would you mind explaining how data encryption protocols ensure user privacy protection?' верно. Выдающееся понимание кибербезопасности!",
            incorrectFeedback: "Try again. Remember: Would + you + mind + explaining + how + data + encryption + protocols + ensure + user + privacy + protection + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + you + mind + explaining + how + data + encryption + protocols + ensure + user + privacy + protection + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "clarify", "which", "potential", "drug", "interactions", "I", "should", "monitor", "while", "taking", "these", "medications?"],
            correctAnswer: "Could you clarify which potential drug interactions I should monitor while taking these medications?",
            correctFeedback: "Perfect! 'Could you clarify which potential drug interactions I should monitor while taking these medications?' is correct. Excellent pharmaceutical awareness!",
            correctFeedbackRu: "Отлично! 'Could you clarify which potential drug interactions I should monitor while taking these medications?' верно. Превосходное фармацевтическое понимание!",
            incorrectFeedback: "Try again. Remember: Could + you + clarify + which + potential + drug + interactions + I + should + monitor + while + taking + these + medications + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + clarify + which + potential + drug + interactions + I + should + monitor + while + taking + these + medications + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "elaborate", "on", "which", "consensus", "mechanisms", "your", "blockchain", "network", "employs?"],
            correctAnswer: "Could you elaborate on which consensus mechanisms your blockchain network employs?",
            correctFeedback: "Excellent! 'Could you elaborate on which consensus mechanisms your blockchain network employs?' is correct. Outstanding blockchain expertise!",
            correctFeedbackRu: "Отлично! 'Could you elaborate on which consensus mechanisms your blockchain network employs?' верно. Выдающаяся экспертиза блокчейна!",
            incorrectFeedback: "Try again. Remember: Could + you + elaborate + on + which + consensus + mechanisms + your + blockchain + network + employs + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + elaborate + on + which + consensus + mechanisms + your + blockchain + network + employs + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "wondering", "which", "neural", "network", "architectures", "prove", "most", "effective", "for", "your", "applications."],
            correctAnswer: "I was wondering which neural network architectures prove most effective for your applications.",
            correctFeedback: "Perfect! 'I was wondering which neural network architectures prove most effective for your applications.' is correct. Sophisticated AI understanding!",
            correctFeedbackRu: "Отлично! 'I was wondering which neural network architectures prove most effective for your applications.' верно. Изощренное понимание ИИ!",
            incorrectFeedback: "Try again. Remember: I + was wondering + which + neural + network + architectures + prove + most + effective + for + your + applications.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was wondering + which + neural + network + architectures + prove + most + effective + for + your + applications."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'd", "be", "grateful", "to", "know", "which", "milestones", "indicate", "successful", "recovery", "during", "this", "phase."],
            correctAnswer: "I'd be grateful to know which milestones indicate successful recovery during this phase.",
            correctFeedback: "Excellent! 'I'd be grateful to know which milestones indicate successful recovery during this phase.' is correct. Outstanding rehabilitation engagement!",
            correctFeedbackRu: "Отлично! 'I'd be grateful to know which milestones indicate successful recovery during this phase.' верно. Выдающееся участие в реабилитации!",
            incorrectFeedback: "Try again. Remember: I'd + be + grateful + to + know + which + milestones + indicate + successful + recovery + during + this + phase.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'd + be + grateful + to + know + which + milestones + indicate + successful + recovery + during + this + phase."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'd", "appreciate", "your", "insights", "on", "which", "cybersecurity", "measures", "protect", "IoT", "devices", "from", "vulnerabilities."],
            correctAnswer: "I'd appreciate your insights on which cybersecurity measures protect IoT devices from vulnerabilities.",
            correctFeedback: "Perfect! 'I'd appreciate your insights on which cybersecurity measures protect IoT devices from vulnerabilities.' is correct. Excellent IoT security consciousness!",
            correctFeedbackRu: "Отлично! 'I'd appreciate your insights on which cybersecurity measures protect IoT devices from vulnerabilities.' верно. Превосходное сознание безопасности IoT!",
            incorrectFeedback: "Try again. Remember: I'd + appreciate + your + insights + on + which + cybersecurity + measures + protect + IoT + devices + from + vulnerabilities.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'd + appreciate + your + insights + on + which + cybersecurity + measures + protect + IoT + devices + from + vulnerabilities."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Given", "the", "limitations", "of", "virtual", "consultations,", "could", "you", "explain", "which", "assessments", "can", "be", "conducted", "remotely?"],
            correctAnswer: "Given the limitations of virtual consultations, could you explain which assessments can be conducted remotely?",
            correctFeedback: "Excellent! 'Given the limitations of virtual consultations, could you explain which assessments can be conducted remotely?' is correct. Outstanding telemedicine awareness!",
            correctFeedbackRu: "Отлично! 'Given the limitations of virtual consultations, could you explain which assessments can be conducted remotely?' верно. Выдающееся понимание телемедицины!",
            incorrectFeedback: "Try again. Remember: Given + the + limitations + of + virtual + consultations, + could + you + explain + which + assessments + can + be + conducted + remotely + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Given + the + limitations + of + virtual + consultations, + could + you + explain + which + assessments + can + be + conducted + remotely + ?"
        }
    ]
};

/* ============================================
Page 5: Polite indirect questions - Environmental and legal expertise contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-sentence-page5'] = {
    title: "Polite indirect questions - Environmental and legal expertise contexts",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "wondering", "if", "you", "could", "explain", "how", "carbon", "offset", "programs", "effectively", "neutralize", "emissions."],
            correctAnswer: "I was wondering if you could explain how carbon offset programs effectively neutralize emissions.",
            correctFeedback: "Perfect! 'I was wondering if you could explain how carbon offset programs effectively neutralize emissions.' is correct. Outstanding environmental consciousness!",
            correctFeedbackRu: "Отлично! 'I was wondering if you could explain how carbon offset programs effectively neutralize emissions.' верно. Выдающееся экологическое сознание!",
            incorrectFeedback: "Try again. Remember: I + was wondering + if + you + could + explain + how + carbon + offset + programs + effectively + neutralize + emissions.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was wondering + if + you + could + explain + how + carbon + offset + programs + effectively + neutralize + emissions."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "wondering", "if", "you", "could", "clarify", "which", "statute", "of", "limitations", "applies", "to", "this", "dispute."],
            correctAnswer: "I was wondering if you could clarify which statute of limitations applies to this dispute.",
            correctFeedback: "Excellent! 'I was wondering if you could clarify which statute of limitations applies to this dispute.' is correct. Outstanding legal literacy!",
            correctFeedbackRu: "Отлично! 'I was wondering if you could clarify which statute of limitations applies to this dispute.' верно. Выдающаяся правовая грамотность!",
            incorrectFeedback: "Try again. Remember: I + was wondering + if + you + could + clarify + which + statute + of + limitations + applies + to + this + dispute.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was wondering + if + you + could + clarify + which + statute + of + limitations + applies + to + this + dispute."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "you", "feel", "comfortable", "discussing", "how", "solar", "panel", "efficiency", "rates", "compare", "across", "technologies?"],
            correctAnswer: "Would you feel comfortable discussing how solar panel efficiency rates compare across technologies?",
            correctFeedback: "Perfect! 'Would you feel comfortable discussing how solar panel efficiency rates compare across technologies?' is correct. Excellent renewable energy sophistication!",
            correctFeedbackRu: "Отлично! 'Would you feel comfortable discussing how solar panel efficiency rates compare across technologies?' верно. Превосходная изощренность в возобновляемой энергии!",
            incorrectFeedback: "Try again. Remember: Would + you + feel + comfortable + discussing + how + solar + panel + efficiency + rates + compare + across + technologies + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + you + feel + comfortable + discussing + how + solar + panel + efficiency + rates + compare + across + technologies + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "you", "feel", "comfortable", "advising", "me", "on", "which", "investment", "strategies", "might", "mitigate", "portfolio", "volatility?"],
            correctAnswer: "Would you feel comfortable advising me on which investment strategies might mitigate portfolio volatility?",
            correctFeedback: "Excellent! 'Would you feel comfortable advising me on which investment strategies might mitigate portfolio volatility?' is correct. Outstanding financial sophistication!",
            correctFeedbackRu: "Отлично! 'Would you feel comfortable advising me on which investment strategies might mitigate portfolio volatility?' верно. Выдающаяся финансовая изощренность!",
            incorrectFeedback: "Try again. Remember: Would + you + feel + comfortable + advising + me + on + which + investment + strategies + might + mitigate + portfolio + volatility + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + you + feel + comfortable + advising + me + on + which + investment + strategies + might + mitigate + portfolio + volatility + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "help", "me", "understand", "how", "waste-to-resource", "conversion", "processes", "contribute", "to", "sustainable", "cycles?"],
            correctAnswer: "Could you help me understand how waste-to-resource conversion processes contribute to sustainable cycles?",
            correctFeedback: "Perfect! 'Could you help me understand how waste-to-resource conversion processes contribute to sustainable cycles?' is correct. Outstanding circular economy expertise!",
            correctFeedbackRu: "Отлично! 'Could you help me understand how waste-to-resource conversion processes contribute to sustainable cycles?' верно. Выдающаяся экспертиза циркулярной экономики!",
            incorrectFeedback: "Try again. Remember: Could + you + help me + understand + how + waste-to-resource + conversion + processes + contribute + to + sustainable + cycles + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + help me + understand + how + waste-to-resource + conversion + processes + contribute + to + sustainable + cycles + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'd", "appreciate", "your", "guidance", "on", "which", "patent", "protection", "mechanisms", "would", "be", "most", "suitable", "for", "this", "technology."],
            correctAnswer: "I'd appreciate your guidance on which patent protection mechanisms would be most suitable for this technology.",
            correctFeedback: "Excellent! 'I'd appreciate your guidance on which patent protection mechanisms would be most suitable for this technology.' is correct. Outstanding IP sophistication!",
            correctFeedbackRu: "Отлично! 'I'd appreciate your guidance on which patent protection mechanisms would be most suitable for this technology.' верно. Выдающаяся изощренность в ИС!",
            incorrectFeedback: "Try again. Remember: I'd + appreciate + your + guidance + on + which + patent + protection + mechanisms + would + be + most + suitable + for + this + technology.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'd + appreciate + your + guidance + on + which + patent + protection + mechanisms + would + be + most + suitable + for + this + technology."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'd", "appreciate", "your", "guidance", "on", "how", "ecosystem", "restoration", "projects", "balance", "environmental", "protection", "with", "development", "needs."],
            correctAnswer: "I'd appreciate your guidance on how ecosystem restoration projects balance environmental protection with development needs.",
            correctFeedback: "Perfect! 'I'd appreciate your guidance on how ecosystem restoration projects balance environmental protection with development needs.' is correct. Excellent conservation sophistication!",
            correctFeedbackRu: "Отлично! 'I'd appreciate your guidance on how ecosystem restoration projects balance environmental protection with development needs.' верно. Превосходная изощренность в сохранении!",
            incorrectFeedback: "Try again. Remember: I'd + appreciate + your + guidance + on + how + ecosystem + restoration + projects + balance + environmental + protection + with + development + needs.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'd + appreciate + your + guidance + on + how + ecosystem + restoration + projects + balance + environmental + protection + with + development + needs."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Given", "the", "evolving", "regulatory", "landscape,", "could", "you", "advise", "which", "compliance", "protocols", "our", "organization", "should", "prioritize?"],
            correctAnswer: "Given the evolving regulatory landscape, could you advise which compliance protocols our organization should prioritize?",
            correctFeedback: "Excellent! 'Given the evolving regulatory landscape, could you advise which compliance protocols our organization should prioritize?' is correct. Outstanding regulatory sophistication!",
            correctFeedbackRu: "Отлично! 'Given the evolving regulatory landscape, could you advise which compliance protocols our organization should prioritize?' верно. Выдающаяся регуляторная изощренность!",
            incorrectFeedback: "Try again. Remember: Given + the + evolving + regulatory + landscape, + could + you + advise + which + compliance + protocols + our + organization + should + prioritize + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Given + the + evolving + regulatory + landscape, + could + you + advise + which + compliance + protocols + our + organization + should + prioritize + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "hoping", "to", "learn", "how", "precision", "farming", "techniques", "optimize", "crop", "yields", "while", "reducing", "dependencies."],
            correctAnswer: "I was hoping to learn how precision farming techniques optimize crop yields while reducing dependencies.",
            correctFeedback: "Perfect! 'I was hoping to learn how precision farming techniques optimize crop yields while reducing dependencies.' is correct. Excellent sustainable agriculture awareness!",
            correctFeedbackRu: "Отлично! 'I was hoping to learn how precision farming techniques optimize crop yields while reducing dependencies.' верно. Превосходное понимание устойчивого сельского хозяйства!",
            incorrectFeedback: "Try again. Remember: I + was hoping + to + learn + how + precision + farming + techniques + optimize + crop + yields + while + reducing + dependencies.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was hoping + to + learn + how + precision + farming + techniques + optimize + crop + yields + while + reducing + dependencies."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'd", "be", "grateful", "for", "your", "insights", "on", "which", "tax", "optimization", "strategies", "remain", "compliant", "with", "regulations."],
            correctAnswer: "I'd be grateful for your insights on which tax optimization strategies remain compliant with regulations.",
            correctFeedback: "Excellent! 'I'd be grateful for your insights on which tax optimization strategies remain compliant with regulations.' is correct. Outstanding tax sophistication!",
            correctFeedbackRu: "Отлично! 'I'd be grateful for your insights on which tax optimization strategies remain compliant with regulations.' верно. Выдающаяся налоговая изощренность!",
            incorrectFeedback: "Try again. Remember: I'd + be + grateful + for + your + insights + on + which + tax + optimization + strategies + remain + compliant + with + regulations.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'd + be + grateful + for + your + insights + on + which + tax + optimization + strategies + remain + compliant + with + regulations."
        }
    ]
};

/* ============================================
Page 6: Polite indirect questions - International and diplomatic contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-sentence-page6'] = {
    title: "Polite indirect questions - International and diplomatic contexts",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "hope", "I'm", "not", "overstepping", "cultural", "boundaries", "by", "asking", "how", "traditional", "ceremonies", "are", "typically", "conducted."],
            correctAnswer: "I hope I'm not overstepping cultural boundaries by asking how traditional ceremonies are typically conducted.",
            correctFeedback: "Perfect! 'I hope I'm not overstepping cultural boundaries by asking how traditional ceremonies are typically conducted.' is correct. Exceptional cultural sensitivity!",
            correctFeedbackRu: "Отлично! 'I hope I'm not overstepping cultural boundaries by asking how traditional ceremonies are typically conducted.' верно. Исключительная культурная чувствительность!",
            incorrectFeedback: "Try again. Remember: I + hope + I'm + not + overstepping + cultural + boundaries + by + asking + how + traditional + ceremonies + are + typically + conducted.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + hope + I'm + not + overstepping + cultural + boundaries + by + asking + how + traditional + ceremonies + are + typically + conducted."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'd", "be", "grateful", "to", "understand", "how", "business", "etiquette", "differs", "between", "our", "respective", "cultures", "during", "negotiations."],
            correctAnswer: "I'd be grateful to understand how business etiquette differs between our respective cultures during negotiations.",
            correctFeedback: "Excellent! 'I'd be grateful to understand how business etiquette differs between our respective cultures during negotiations.' is correct. Outstanding cultural business awareness!",
            correctFeedbackRu: "Отлично! 'I'd be grateful to understand how business etiquette differs between our respective cultures during negotiations.' верно. Выдающееся культурное деловое понимание!",
            incorrectFeedback: "Try again. Remember: I'd + be + grateful + to + understand + how + business + etiquette + differs + between + our + respective + cultures + during + negotiations.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'd + be + grateful + to + understand + how + business + etiquette + differs + between + our + respective + cultures + during + negotiations."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "you", "feel", "comfortable", "explaining", "how", "your", "government's", "policy", "shift", "might", "impact", "international", "relations?"],
            correctAnswer: "Would you feel comfortable explaining how your government's policy shift might impact international relations?",
            correctFeedback: "Perfect! 'Would you feel comfortable explaining how your government's policy shift might impact international relations?' is correct. Exceptional diplomatic tact!",
            correctFeedbackRu: "Отлично! 'Would you feel comfortable explaining how your government's policy shift might impact international relations?' верно. Исключительный дипломатический такт!",
            incorrectFeedback: "Try again. Remember: Would + you + feel + comfortable + explaining + how + your + government's + policy + shift + might + impact + international + relations + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + you + feel + comfortable + explaining + how + your + government's + policy + shift + might + impact + international + relations + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "hoping", "to", "learn", "whether", "cultural", "communication", "styles", "might", "be", "affecting", "our", "team", "dynamics."],
            correctAnswer: "I was hoping to learn whether cultural communication styles might be affecting our team dynamics.",
            correctFeedback: "Excellent! 'I was hoping to learn whether cultural communication styles might be affecting our team dynamics.' is correct. Outstanding multicultural leadership awareness!",
            correctFeedbackRu: "Отлично! 'I was hoping to learn whether cultural communication styles might be affecting our team dynamics.' верно. Выдающееся понимание мультикультурного лидерства!",
            incorrectFeedback: "Try again. Remember: I + was hoping + to + learn + whether + cultural + communication + styles + might + be + affecting + our + team + dynamics.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was hoping + to + learn + whether + cultural + communication + styles + might + be + affecting + our + team + dynamics."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "help", "me", "understand", "how", "educational", "systems", "in", "your", "country", "prepare", "students", "for", "global", "careers?"],
            correctAnswer: "Could you help me understand how educational systems in your country prepare students for global careers?",
            correctFeedback: "Perfect! 'Could you help me understand how educational systems in your country prepare students for global careers?' is correct. Excellent global education awareness!",
            correctFeedbackRu: "Отлично! 'Could you help me understand how educational systems in your country prepare students for global careers?' верно. Превосходное понимание глобального образования!",
            incorrectFeedback: "Try again. Remember: Could + you + help me + understand + how + educational + systems + in + your + country + prepare + students + for + global + careers + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + help me + understand + how + educational + systems + in + your + country + prepare + students + for + global + careers + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "it's", "not", "too", "personal,", "I", "was", "wondering", "how", "religious", "observances", "influence", "daily", "life", "in", "your", "region."],
            correctAnswer: "If it's not too personal, I was wondering how religious observances influence daily life in your region.",
            correctFeedback: "Excellent! 'If it's not too personal, I was wondering how religious observances influence daily life in your region.' is correct. Beautiful religious sensitivity!",
            correctFeedbackRu: "Отлично! 'If it's not too personal, I was wondering how religious observances influence daily life in your region.' верно. Прекрасная религиозная чувствительность!",
            incorrectFeedback: "Try again. Remember: If + it's + not + too + personal, + I + was wondering + how + religious + observances + influence + daily + life + in + your + region.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + it's + not + too + personal, + I + was wondering + how + religious + observances + influence + daily + life + in + your + region."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Given", "the", "cross-border", "implications,", "I", "was", "wondering", "which", "diplomatic", "channels", "should", "be", "engaged", "to", "address", "this", "crisis."],
            correctAnswer: "Given the cross-border implications, I was wondering which diplomatic channels should be engaged to address this crisis.",
            correctFeedback: "Perfect! 'Given the cross-border implications, I was wondering which diplomatic channels should be engaged to address this crisis.' is correct. Excellent international crisis sophistication!",
            correctFeedbackRu: "Отлично! 'Given the cross-border implications, I was wondering which diplomatic channels should be engaged to address this crisis.' верно. Превосходная изощренность в международном кризисе!",
            incorrectFeedback: "Try again. Remember: Given + the + cross-border + implications, + I + was wondering + which + diplomatic + channels + should + be + engaged + to + address + this + crisis.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Given + the + cross-border + implications, + I + was wondering + which + diplomatic + channels + should + be + engaged + to + address + this + crisis."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "fascinated", "to", "discover", "how", "innovation", "cultures", "differ", "across", "various", "technological", "hubs", "globally."],
            correctAnswer: "I'm fascinated to discover how innovation cultures differ across various technological hubs globally.",
            correctFeedback: "Excellent! 'I'm fascinated to discover how innovation cultures differ across various technological hubs globally.' is correct. Outstanding global innovation awareness!",
            correctFeedbackRu: "Отлично! 'I'm fascinated to discover how innovation cultures differ across various technological hubs globally.' верно. Выдающееся понимание глобальных инноваций!",
            incorrectFeedback: "Try again. Remember: I'm + fascinated + to + discover + how + innovation + cultures + differ + across + various + technological + hubs + globally.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'm + fascinated + to + discover + how + innovation + cultures + differ + across + various + technological + hubs + globally."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "you", "mind", "sharing", "your", "perspective", "on", "which", "environmental", "policies", "are", "being", "implemented", "to", "address", "climate", "challenges?"],
            correctAnswer: "Would you mind sharing your perspective on which environmental policies are being implemented to address climate challenges?",
            correctFeedback: "Perfect! 'Would you mind sharing your perspective on which environmental policies are being implemented to address climate challenges?' is correct. Excellent environmental consciousness!",
            correctFeedbackRu: "Отлично! 'Would you mind sharing your perspective on which environmental policies are being implemented to address climate challenges?' верно. Превосходное экологическое сознание!",
            incorrectFeedback: "Try again. Remember: Would + you + mind + sharing + your + perspective + on + which + environmental + policies + are + being + implemented + to + address + climate + challenges + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + you + mind + sharing + your + perspective + on + which + environmental + policies + are + being + implemented + to + address + climate + challenges + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["As", "we", "conclude", "this", "enriching", "cultural", "exchange,", "may", "I", "ask", "if", "there", "are", "other", "aspects", "of", "your", "heritage", "you'd", "be", "willing", "to", "share?"],
            correctAnswer: "As we conclude this enriching cultural exchange, may I ask if there are other aspects of your heritage you'd be willing to share?",
            correctFeedback: "Excellent! 'As we conclude this enriching cultural exchange, may I ask if there are other aspects of your heritage you'd be willing to share?' is correct. Exceptional cultural diplomacy!",
            correctFeedbackRu: "Отлично! 'As we conclude this enriching cultural exchange, may I ask if there are other aspects of your heritage you'd be willing to share?' верно. Исключительная культурная дипломатия!",
            incorrectFeedback: "Try again. Remember: As + we + conclude + this + enriching + cultural + exchange, + may + I + ask + if + there + are + other + aspects + of + your + heritage + you'd + be + willing + to + share + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: As + we + conclude + this + enriching + cultural + exchange, + may + I + ask + if + there + are + other + aspects + of + your + heritage + you'd + be + willing + to + share + ?"
        }
    ]
};

/* ============================================
Page 7: Polite indirect questions - Crisis management and advanced professional contexts
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-sentence-page7'] = {
    title: "Polite indirect questions - Crisis management and advanced professional contexts",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Given", "the", "urgency", "of", "this", "situation,", "could", "you", "help", "me", "understand", "which", "stakeholder", "communication", "protocols", "should", "be", "activated?"],
            correctAnswer: "Given the urgency of this situation, could you help me understand which stakeholder communication protocols should be activated?",
            correctFeedback: "Perfect! 'Given the urgency of this situation, could you help me understand which stakeholder communication protocols should be activated?' is correct. Outstanding crisis leadership!",
            correctFeedbackRu: "Отлично! 'Given the urgency of this situation, could you help me understand which stakeholder communication protocols should be activated?' верно. Выдающееся кризисное лидерство!",
            incorrectFeedback: "Try again. Remember: Given + the + urgency + of + this + situation, + could + you + help me + understand + which + stakeholder + communication + protocols + should + be + activated + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Given + the + urgency + of + this + situation, + could + you + help me + understand + which + stakeholder + communication + protocols + should + be + activated + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["In", "light", "of", "recent", "public", "scrutiny,", "could", "you", "advise", "which", "public", "relations", "strategies", "might", "help", "rebuild", "confidence?"],
            correctAnswer: "In light of recent public scrutiny, could you advise which public relations strategies might help rebuild confidence?",
            correctFeedback: "Excellent! 'In light of recent public scrutiny, could you advise which public relations strategies might help rebuild confidence?' is correct. Excellent strategic communications sophistication!",
            correctFeedbackRu: "Отлично! 'In light of recent public scrutiny, could you advise which public relations strategies might help rebuild confidence?' верно. Превосходная изощренность стратегических коммуникаций!",
            incorrectFeedback: "Try again. Remember: In + light + of + recent + public + scrutiny, + could + you + advise + which + public + relations + strategies + might + help + rebuild + confidence + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: In + light + of + recent + public + scrutiny, + could + you + advise + which + public + relations + strategies + might + help + rebuild + confidence + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["This", "is", "obviously", "a", "delicate", "situation,", "but", "I", "wonder", "which", "confidentiality", "measures", "protect", "individuals", "who", "report", "violations."],
            correctAnswer: "This is obviously a delicate situation, but I wonder which confidentiality measures protect individuals who report violations.",
            correctFeedback: "Perfect! 'This is obviously a delicate situation, but I wonder which confidentiality measures protect individuals who report violations.' is correct. Outstanding ethical leadership awareness!",
            correctFeedbackRu: "Отлично! 'This is obviously a delicate situation, but I wonder which confidentiality measures protect individuals who report violations.' верно. Выдающееся понимание этического лидерства!",
            incorrectFeedback: "Try again. Remember: This + is + obviously + a + delicate + situation, + but + I + wonder + which + confidentiality + measures + protect + individuals + who + report + violations.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: This + is + obviously + a + delicate + situation, + but + I + wonder + which + confidentiality + measures + protect + individuals + who + report + violations."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Under", "these", "extraordinary", "circumstances,", "would", "it", "be", "appropriate", "to", "discuss", "which", "fiduciary", "responsibilities", "require", "immediate", "intervention?"],
            correctAnswer: "Under these extraordinary circumstances, would it be appropriate to discuss which fiduciary responsibilities require immediate intervention?",
            correctFeedback: "Excellent! 'Under these extraordinary circumstances, would it be appropriate to discuss which fiduciary responsibilities require immediate intervention?' is correct. Outstanding corporate governance sophistication!",
            correctFeedbackRu: "Отлично! 'Under these extraordinary circumstances, would it be appropriate to discuss which fiduciary responsibilities require immediate intervention?' верно. Выдающаяся изощренность корпоративного управления!",
            incorrectFeedback: "Try again. Remember: Under + these + extraordinary + circumstances, + would + it + be + appropriate + to + discuss + which + fiduciary + responsibilities + require + immediate + intervention + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Under + these + extraordinary + circumstances, + would + it + be + appropriate + to + discuss + which + fiduciary + responsibilities + require + immediate + intervention + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Considering", "the", "potential", "privacy", "violations,", "I", "was", "hoping", "to", "understand", "which", "notification", "timelines", "are", "mandated", "by", "regulations."],
            correctAnswer: "Considering the potential privacy violations, I was hoping to understand which notification timelines are mandated by regulations.",
            correctFeedback: "Perfect! 'Considering the potential privacy violations, I was hoping to understand which notification timelines are mandated by regulations.' is correct. Outstanding data protection expertise!",
            correctFeedbackRu: "Отлично! 'Considering the potential privacy violations, I was hoping to understand which notification timelines are mandated by regulations.' верно. Выдающаяся экспертиза защиты данных!",
            incorrectFeedback: "Try again. Remember: Considering + the + potential + privacy + violations, + I + was hoping + to + understand + which + notification + timelines + are + mandated + by + regulations.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Considering + the + potential + privacy + violations, + I + was hoping + to + understand + which + notification + timelines + are + mandated + by + regulations."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["In", "this", "unprecedented", "leadership", "transition", "situation,", "may", "I", "ask", "how", "succession", "planning", "protocols", "ensure", "organizational", "continuity?"],
            correctAnswer: "In this unprecedented leadership transition situation, may I ask how succession planning protocols ensure organizational continuity?",
            correctFeedback: "Excellent! 'In this unprecedented leadership transition situation, may I ask how succession planning protocols ensure organizational continuity?' is correct. Excellent executive governance sophistication!",
            correctFeedbackRu: "Отлично! 'In this unprecedented leadership transition situation, may I ask how succession planning protocols ensure organizational continuity?' верно. Превосходная изощренность исполнительного управления!",
            incorrectFeedback: "Try again. Remember: In + this + unprecedented + leadership + transition + situation, + may + I + ask + how + succession + planning + protocols + ensure + organizational + continuity + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: In + this + unprecedented + leadership + transition + situation, + may + I + ask + how + succession + planning + protocols + ensure + organizational + continuity + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "realize", "this", "involves", "highly", "sensitive", "financial", "information,", "but", "could", "you", "clarify", "which", "trading", "restrictions", "apply", "during", "disclosure", "periods?"],
            correctAnswer: "I realize this involves highly sensitive financial information, but could you clarify which trading restrictions apply during disclosure periods?",
            correctFeedback: "Perfect! 'I realize this involves highly sensitive financial information, but could you clarify which trading restrictions apply during disclosure periods?' is correct. Excellent securities compliance sophistication!",
            correctFeedbackRu: "Отлично! 'I realize this involves highly sensitive financial information, but could you clarify which trading restrictions apply during disclosure periods?' верно. Превосходная изощренность соблюдения ценных бумаг!",
            incorrectFeedback: "Try again. Remember: I + realize + this + involves + highly + sensitive + financial + information, + but + could + you + clarify + which + trading + restrictions + apply + during + disclosure + periods + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + realize + this + involves + highly + sensitive + financial + information, + but + could + you + clarify + which + trading + restrictions + apply + during + disclosure + periods + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "it", "be", "appropriate", "to", "discuss", "which", "due", "diligence", "procedures", "are", "typically", "required", "for", "transactions", "of", "this", "magnitude?"],
            correctAnswer: "Would it be appropriate to discuss which due diligence procedures are typically required for transactions of this magnitude?",
            correctFeedback: "Excellent! 'Would it be appropriate to discuss which due diligence procedures are typically required for transactions of this magnitude?' is correct. Excellent M&A sophistication!",
            correctFeedbackRu: "Отлично! 'Would it be appropriate to discuss which due diligence procedures are typically required for transactions of this magnitude?' верно. Превосходная изощренность в M&A!",
            incorrectFeedback: "Try again. Remember: Would + it + be + appropriate + to + discuss + which + due + diligence + procedures + are + typically + required + for + transactions + of + this + magnitude + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + it + be + appropriate + to + discuss + which + due + diligence + procedures + are + typically + required + for + transactions + of + this + magnitude + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Given", "the", "complexity", "of", "securities", "regulations,", "could", "you", "clarify", "which", "disclosure", "requirements", "apply", "to", "our", "upcoming", "public", "offering?"],
            correctAnswer: "Given the complexity of securities regulations, could you clarify which disclosure requirements apply to our upcoming public offering?",
            correctFeedback: "Perfect! 'Given the complexity of securities regulations, could you clarify which disclosure requirements apply to our upcoming public offering?' is correct. Excellent securities law sophistication!",
            correctFeedbackRu: "Отлично! 'Given the complexity of securities regulations, could you clarify which disclosure requirements apply to our upcoming public offering?' верно. Превосходная изощренность в праве ценных бумаг!",
            incorrectFeedback: "Try again. Remember: Given + the + complexity + of + securities + regulations, + could + you + clarify + which + disclosure + requirements + apply + to + our + upcoming + public + offering + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Given + the + complexity + of + securities + regulations, + could + you + clarify + which + disclosure + requirements + apply + to + our + upcoming + public + offering + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "hoping", "to", "understand", "which", "jurisdictional", "challenges", "might", "arise", "when", "expanding", "operations", "internationally."],
            correctAnswer: "I was hoping to understand which jurisdictional challenges might arise when expanding operations internationally.",
            correctFeedback: "Excellent! 'I was hoping to understand which jurisdictional challenges might arise when expanding operations internationally.' is correct. Excellent international law sophistication!",
            correctFeedbackRu: "Отлично! 'I was hoping to understand which jurisdictional challenges might arise when expanding operations internationally.' верно. Превосходная международная правовая изощренность!",
            incorrectFeedback: "Try again. Remember: I + was hoping + to + understand + which + jurisdictional + challenges + might + arise + when + expanding + operations + internationally.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was hoping + to + understand + which + jurisdictional + challenges + might + arise + when + expanding + operations + internationally."
        }
    ]
};

/* ============================================
Page 8: Polite indirect questions - Research and academic excellence contexts (Sentence Building)
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-sentence-page8'] = {
    title: "Polite indirect questions - Research and academic excellence contexts",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "it", "be", "possible", "to", "ascertain", "how", "long", "the", "data", "collection", "period", "spanned", "for", "this", "longitudinal", "study?"],
            correctAnswer: "Would it be possible to ascertain how long the data collection period spanned for this longitudinal study?",
            correctFeedback: "Perfect! 'Would it be possible to ascertain how long the data collection period spanned for this longitudinal study?' is correct. Outstanding scholarly vocabulary!",
            correctFeedbackRu: "Отлично! 'Would it be possible to ascertain how long the data collection period spanned for this longitudinal study?' верно. Выдающаяся научная лексика!",
            incorrectFeedback: "Try again. Remember: Would + it + be + possible + to + ascertain + how + long + the + data + collection + period + spanned + for + this + longitudinal + study + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + it + be + possible + to + ascertain + how + long + the + data + collection + period + spanned + for + this + longitudinal + study + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "would", "appreciate", "your", "perspective", "on", "what", "limitations", "might", "affect", "the", "generalizability", "of", "these", "findings."],
            correctAnswer: "I would appreciate your perspective on what limitations might affect the generalizability of these findings.",
            correctFeedback: "Excellent! 'I would appreciate your perspective on what limitations might affect the generalizability of these findings.' is correct. Outstanding methodological awareness!",
            correctFeedbackRu: "Отлично! 'I would appreciate your perspective on what limitations might affect the generalizability of these findings.' верно. Выдающееся методологическое понимание!",
            incorrectFeedback: "Try again. Remember: I + would + appreciate + your + perspective + on + what + limitations + might + affect + the + generalizability + of + these + findings.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + would + appreciate + your + perspective + on + what + limitations + might + affect + the + generalizability + of + these + findings."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "you", "mind", "clarifying", "how", "the", "peer", "review", "process", "was", "conducted", "for", "this", "publication?"],
            correctAnswer: "Would you mind clarifying how the peer review process was conducted for this publication?",
            correctFeedback: "Perfect! 'Would you mind clarifying how the peer review process was conducted for this publication?' is correct. Excellent awareness of academic publishing!",
            correctFeedbackRu: "Отлично! 'Would you mind clarifying how the peer review process was conducted for this publication?' верно. Превосходное понимание академической публикации!",
            incorrectFeedback: "Try again. Remember: Would + you + mind + clarifying + how + the + peer + review + process + was + conducted + for + this + publication + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + you + mind + clarifying + how + the + peer + review + process + was + conducted + for + this + publication + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "share", "your", "insights", "on", "how", "audience", "reception", "was", "gauged", "during", "your", "keynote", "presentation?"],
            correctAnswer: "Could you share your insights on how audience reception was gauged during your keynote presentation?",
            correctFeedback: "Excellent! 'Could you share your insights on how audience reception was gauged during your keynote presentation?' is correct. Excellent presentation awareness!",
            correctFeedbackRu: "Отлично! 'Could you share your insights on how audience reception was gauged during your keynote presentation?' верно. Превосходное понимание презентации!",
            incorrectFeedback: "Try again. Remember: Could + you + share + your + insights + on + how + audience + reception + was + gauged + during + your + keynote + presentation + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + share + your + insights + on + how + audience + reception + was + gauged + during + your + keynote + presentation + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "keen", "to", "understand", "how", "cross-disciplinary", "expertise", "was", "integrated", "into", "your", "research", "team."],
            correctAnswer: "I'm keen to understand how cross-disciplinary expertise was integrated into your research team.",
            correctFeedback: "Perfect! 'I'm keen to understand how cross-disciplinary expertise was integrated into your research team.' is correct. Outstanding collaborative awareness!",
            correctFeedbackRu: "Отлично! 'I'm keen to understand how cross-disciplinary expertise was integrated into your research team.' верно. Выдающееся понимание сотрудничества!",
            incorrectFeedback: "Try again. Remember: I'm + keen + to + understand + how + cross-disciplinary + expertise + was + integrated + into + your + research + team.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'm + keen + to + understand + how + cross-disciplinary + expertise + was + integrated + into + your + research + team."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "it", "be", "appropriate", "to", "inquire", "which", "funding", "mechanisms", "supported", "this", "extensive", "longitudinal", "research?"],
            correctAnswer: "Would it be appropriate to inquire which funding mechanisms supported this extensive longitudinal research?",
            correctFeedback: "Excellent! 'Would it be appropriate to inquire which funding mechanisms supported this extensive longitudinal research?' is correct. Excellent academic diplomacy!",
            correctFeedbackRu: "Отлично! 'Would it be appropriate to inquire which funding mechanisms supported this extensive longitudinal research?' верно. Превосходная академическая дипломатия!",
            incorrectFeedback: "Try again. Remember: Would + it + be + appropriate + to + inquire + which + funding + mechanisms + supported + this + extensive + longitudinal + research + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + it + be + appropriate + to + inquire + which + funding + mechanisms + supported + this + extensive + longitudinal + research + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "curious", "to", "explore", "which", "theoretical", "paradigms", "informed", "your", "hypothesis", "development", "process."],
            correctAnswer: "I was curious to explore which theoretical paradigms informed your hypothesis development process.",
            correctFeedback: "Perfect! 'I was curious to explore which theoretical paradigms informed your hypothesis development process.' is correct. Outstanding theoretical engagement!",
            correctFeedbackRu: "Отлично! 'I was curious to explore which theoretical paradigms informed your hypothesis development process.' верно. Выдающееся теоретическое понимание!",
            incorrectFeedback: "Try again. Remember: I + was + curious + to + explore + which + theoretical + paradigms + informed + your + hypothesis + development + process.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was + curious + to + explore + which + theoretical + paradigms + informed + your + hypothesis + development + process."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "elaborate", "on", "which", "ethical", "approval", "procedures", "were", "followed", "throughout", "this", "human", "subjects", "research?"],
            correctAnswer: "Could you elaborate on which ethical approval procedures were followed throughout this human subjects research?",
            correctFeedback: "Excellent! 'Could you elaborate on which ethical approval procedures were followed throughout this human subjects research?' is correct. Excellent research ethics awareness!",
            correctFeedbackRu: "Отлично! 'Could you elaborate on which ethical approval procedures were followed throughout this human subjects research?' верно. Превосходное понимание этики исследований!",
            incorrectFeedback: "Try again. Remember: Could + you + elaborate + on + which + ethical + approval + procedures + were + followed + throughout + this + human + subjects + research + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + elaborate + on + which + ethical + approval + procedures + were + followed + throughout + this + human + subjects + research + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "hoping", "to", "learn", "which", "dissemination", "strategies", "you", "employed", "to", "maximize", "research", "impact", "across", "academic", "communities."],
            correctAnswer: "I was hoping to learn which dissemination strategies you employed to maximize research impact across academic communities.",
            correctFeedback: "Perfect! 'I was hoping to learn which dissemination strategies you employed to maximize research impact across academic communities.' is correct. Outstanding academic impact awareness!",
            correctFeedbackRu: "Отлично! 'I was hoping to learn which dissemination strategies you employed to maximize research impact across academic communities.' верно. Выдающееся понимание академического воздействия!",
            incorrectFeedback: "Try again. Remember: I + was hoping + to + learn + which + dissemination + strategies + you + employed + to + maximize + research + impact + across + academic + communities.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was hoping + to + learn + which + dissemination + strategies + you + employed + to + maximize + research + impact + across + academic + communities."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "you", "be", "willing", "to", "share", "how", "international", "partnerships", "enhanced", "the", "scope", "of", "your", "research", "program?"],
            correctAnswer: "Would you be willing to share how international partnerships enhanced the scope of your research program?",
            correctFeedback: "Excellent! 'Would you be willing to share how international partnerships enhanced the scope of your research program?' is correct. Excellent international collaboration awareness!",
            correctFeedbackRu: "Отлично! 'Would you be willing to share how international partnerships enhanced the scope of your research program?' верно. Превосходное понимание международного сотрудничества!",
            incorrectFeedback: "Try again. Remember: Would + you + be + willing + to + share + how + international + partnerships + enhanced + the + scope + of + your + research + program + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + you + be + willing + to + share + how + international + partnerships + enhanced + the + scope + of + your + research + program + ?"
        }
    ]
};

/* ============================================
Page 9: Polite indirect questions - Innovation and future-oriented contexts (Sentence Building)
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-sentence-page9'] = {
    title: "Polite indirect questions - Innovation and future-oriented contexts",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "it", "be", "appropriate", "to", "discuss", "which", "quantum", "algorithms", "your", "research", "team", "is", "developing", "for", "cryptographic", "applications?"],
            correctAnswer: "Would it be appropriate to discuss which quantum algorithms your research team is developing for cryptographic applications?",
            correctFeedback: "Perfect! 'Would it be appropriate to discuss which quantum algorithms your research team is developing for cryptographic applications?' is correct. Outstanding quantum sophistication!",
            correctFeedbackRu: "Отлично! 'Would it be appropriate to discuss which quantum algorithms your research team is developing for cryptographic applications?' верно. Выдающаяся квантовая изощренность!",
            incorrectFeedback: "Try again. Remember: Would + it + be + appropriate + to + discuss + which + quantum + algorithms + your + research + team + is + developing + for + cryptographic + applications + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + it + be + appropriate + to + discuss + which + quantum + algorithms + your + research + team + is + developing + for + cryptographic + applications + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "help", "me", "understand", "which", "agile", "frameworks", "your", "development", "teams", "implement", "for", "continuous", "integration", "workflows?"],
            correctAnswer: "Could you help me understand which agile frameworks your development teams implement for continuous integration workflows?",
            correctFeedback: "Excellent! 'Could you help me understand which agile frameworks your development teams implement for continuous integration workflows?' is correct. Outstanding software development sophistication!",
            correctFeedbackRu: "Отлично! 'Could you help me understand which agile frameworks your development teams implement for continuous integration workflows?' верно. Выдающаяся изощренность в разработке ПО!",
            incorrectFeedback: "Try again. Remember: Could + you + help me + understand + which + agile + frameworks + your + development + teams + implement + for + continuous + integration + workflows + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + help me + understand + which + agile + frameworks + your + development + teams + implement + for + continuous + integration + workflows + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "hoping", "to", "learn", "how", "containerization", "strategies", "facilitate", "your", "transition", "to", "microservices", "architecture."],
            correctAnswer: "I was hoping to learn how containerization strategies facilitate your transition to microservices architecture.",
            correctFeedback: "Perfect! 'I was hoping to learn how containerization strategies facilitate your transition to microservices architecture.' is correct. Excellent cloud architecture awareness!",
            correctFeedbackRu: "Отлично! 'I was hoping to learn how containerization strategies facilitate your transition to microservices architecture.' верно. Превосходное понимание облачной архитектуры!",
            incorrectFeedback: "Try again. Remember: I + was hoping + to + learn + how + containerization + strategies + facilitate + your + transition + to + microservices + architecture.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was hoping + to + learn + how + containerization + strategies + facilitate + your + transition + to + microservices + architecture."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "share", "your", "perspective", "on", "which", "rendering", "engines", "optimize", "performance", "for", "immersive", "AR", "experiences?"],
            correctAnswer: "Could you share your perspective on which rendering engines optimize performance for immersive AR experiences?",
            correctFeedback: "Excellent! 'Could you share your perspective on which rendering engines optimize performance for immersive AR experiences?' is correct. Outstanding AR development sophistication!",
            correctFeedbackRu: "Отлично! 'Could you share your perspective on which rendering engines optimize performance for immersive AR experiences?' верно. Выдающаяся изощренность в разработке AR!",
            incorrectFeedback: "Try again. Remember: Could + you + share + your + perspective + on + which + rendering + engines + optimize + performance + for + immersive + AR + experiences + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + share + your + perspective + on + which + rendering + engines + optimize + performance + for + immersive + AR + experiences + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "fascinated", "to", "discover", "how", "edge", "computing", "nodes", "reduce", "latency", "while", "maintaining", "data", "processing", "efficiency."],
            correctAnswer: "I'm fascinated to discover how edge computing nodes reduce latency while maintaining data processing efficiency.",
            correctFeedback: "Perfect! 'I'm fascinated to discover how edge computing nodes reduce latency while maintaining data processing efficiency.' is correct. Excellent edge computing expertise!",
            correctFeedbackRu: "Отлично! 'I'm fascinated to discover how edge computing nodes reduce latency while maintaining data processing efficiency.' верно. Превосходная экспертиза в периферийных вычислениях!",
            incorrectFeedback: "Try again. Remember: I'm + fascinated + to + discover + how + edge + computing + nodes + reduce + latency + while + maintaining + data + processing + efficiency.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'm + fascinated + to + discover + how + edge + computing + nodes + reduce + latency + while + maintaining + data + processing + efficiency."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "clarify", "how", "LEED", "certification", "standards", "ensure", "energy", "efficiency", "throughout", "building", "lifecycle", "management?"],
            correctAnswer: "Could you clarify how LEED certification standards ensure energy efficiency throughout building lifecycle management?",
            correctFeedback: "Excellent! 'Could you clarify how LEED certification standards ensure energy efficiency throughout building lifecycle management?' is correct. Outstanding sustainable construction expertise!",
            correctFeedbackRu: "Отлично! 'Could you clarify how LEED certification standards ensure energy efficiency throughout building lifecycle management?' верно. Выдающаяся экспертиза устойчивого строительства!",
            incorrectFeedback: "Try again. Remember: Could + you + clarify + how + LEED + certification + standards + ensure + energy + efficiency + throughout + building + lifecycle + management + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + clarify + how + LEED + certification + standards + ensure + energy + efficiency + throughout + building + lifecycle + management + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'm", "interested", "to", "understand", "how", "coastal", "communities", "develop", "resilience", "against", "sea", "level", "rise", "projections."],
            correctAnswer: "I'm interested to understand how coastal communities develop resilience against sea level rise projections.",
            correctFeedback: "Perfect! 'I'm interested to understand how coastal communities develop resilience against sea level rise projections.' is correct. Excellent climate resilience sophistication!",
            correctFeedbackRu: "Отлично! 'I'm interested to understand how coastal communities develop resilience against sea level rise projections.' верно. Превосходная изощренность в климатической устойчивости!",
            incorrectFeedback: "Try again. Remember: I'm + interested + to + understand + how + coastal + communities + develop + resilience + against + sea + level + rise + projections.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'm + interested + to + understand + how + coastal + communities + develop + resilience + against + sea + level + rise + projections."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Would", "you", "mind", "discussing", "how", "gene", "editing", "technologies", "are", "being", "applied", "to", "address", "hereditary", "disease", "prevention?"],
            correctAnswer: "Would you mind discussing how gene editing technologies are being applied to address hereditary disease prevention?",
            correctFeedback: "Excellent! 'Would you mind discussing how gene editing technologies are being applied to address hereditary disease prevention?' is correct. Outstanding biotechnology awareness!",
            correctFeedbackRu: "Отлично! 'Would you mind discussing how gene editing technologies are being applied to address hereditary disease prevention?' верно. Выдающееся понимание биотехнологий!",
            incorrectFeedback: "Try again. Remember: Would + you + mind + discussing + how + gene + editing + technologies + are + being + applied + to + address + hereditary + disease + prevention + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Would + you + mind + discussing + how + gene + editing + technologies + are + being + applied + to + address + hereditary + disease + prevention + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "was", "wondering", "how", "satellite", "constellation", "projects", "contribute", "to", "global", "internet", "connectivity", "infrastructure", "development."],
            correctAnswer: "I was wondering how satellite constellation projects contribute to global internet connectivity infrastructure development.",
            correctFeedback: "Perfect! 'I was wondering how satellite constellation projects contribute to global internet connectivity infrastructure development.' is correct. Outstanding space technology sophistication!",
            correctFeedbackRu: "Отлично! 'I was wondering how satellite constellation projects contribute to global internet connectivity infrastructure development.' верно. Выдающаяся изощренность в космических технологиях!",
            incorrectFeedback: "Try again. Remember: I + was wondering + how + satellite + constellation + projects + contribute + to + global + internet + connectivity + infrastructure + development.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + was wondering + how + satellite + constellation + projects + contribute + to + global + internet + connectivity + infrastructure + development."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Could", "you", "elaborate", "on", "how", "autonomous", "vehicle", "systems", "integrate", "artificial", "intelligence", "for", "real-time", "decision-making", "processes?"],
            correctAnswer: "Could you elaborate on how autonomous vehicle systems integrate artificial intelligence for real-time decision-making processes?",
            correctFeedback: "Excellent! 'Could you elaborate on how autonomous vehicle systems integrate artificial intelligence for real-time decision-making processes?' is correct. Excellent autonomous vehicle expertise!",
            correctFeedbackRu: "Отлично! 'Could you elaborate on how autonomous vehicle systems integrate artificial intelligence for real-time decision-making processes?' верно. Превосходная экспертиза автономных транспортных средств!",
            incorrectFeedback: "Try again. Remember: Could + you + elaborate + on + how + autonomous + vehicle + systems + integrate + artificial + intelligence + for + real-time + decision-making + processes + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Could + you + elaborate + on + how + autonomous + vehicle + systems + integrate + artificial + intelligence + for + real-time + decision-making + processes + ?"
        }
    ]
};

/* ============================================
Page 10: Polite indirect questions - Advanced ethical and philosophical contexts (Sentence Building)
============================================ */
window.grammarExercises['questions']['polite-indirect-questions-sentence-page10'] = {
    title: "Polite indirect questions - Advanced ethical and philosophical contexts",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "realize", "this", "touches", "on", "profound", "ethical", "considerations,", "but", "could", "you", "share", "your", "perspective", "on", "whether", "artificial", "intelligence", "should", "be", "regulated", "in", "medical", "decision-making?"],
            correctAnswer: "I realize this touches on profound ethical considerations, but could you share your perspective on whether artificial intelligence should be regulated in medical decision-making?",
            correctFeedback: "Perfect! 'I realize this touches on profound ethical considerations, but could you share your perspective on whether artificial intelligence should be regulated in medical decision-making?' is correct. Outstanding ethical sensitivity!",
            correctFeedbackRu: "Отлично! 'I realize this touches on profound ethical considerations, but could you share your perspective on whether artificial intelligence should be regulated in medical decision-making?' верно. Выдающаяся этическая чувствительность!",
            incorrectFeedback: "Try again. Remember: I + realize + this + touches + on + profound + ethical + considerations, + but + could + you + share + your + perspective + on + whether + artificial + intelligence + should + be + regulated + in + medical + decision-making + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + realize + this + touches + on + profound + ethical + considerations, + but + could + you + share + your + perspective + on + whether + artificial + intelligence + should + be + regulated + in + medical + decision-making + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Given", "the", "complexity", "of", "intergenerational", "justice,", "I", "was", "hoping", "to", "understand", "how", "future", "generations'", "rights", "should", "influence", "contemporary", "environmental", "policy", "decisions."],
            correctAnswer: "Given the complexity of intergenerational justice, I was hoping to understand how future generations' rights should influence contemporary environmental policy decisions.",
            correctFeedback: "Excellent! 'Given the complexity of intergenerational justice, I was hoping to understand how future generations' rights should influence contemporary environmental policy decisions.' is correct. Excellent philosophical sophistication!",
            correctFeedbackRu: "Отлично! 'Given the complexity of intergenerational justice, I was hoping to understand how future generations' rights should influence contemporary environmental policy decisions.' верно. Превосходная философская изощренность!",
            incorrectFeedback: "Try again. Remember: Given + the + complexity + of + intergenerational + justice, + I + was hoping + to + understand + how + future + generations' + rights + should + influence + contemporary + environmental + policy + decisions.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Given + the + complexity + of + intergenerational + justice, + I + was hoping + to + understand + how + future + generations' + rights + should + influence + contemporary + environmental + policy + decisions."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "wonder", "if", "you", "might", "elaborate", "on", "how", "privacy", "rights", "should", "be", "balanced", "against", "national", "security", "interests", "in", "digital", "surveillance", "systems."],
            correctAnswer: "I wonder if you might elaborate on how privacy rights should be balanced against national security interests in digital surveillance systems.",
            correctFeedback: "Perfect! 'I wonder if you might elaborate on how privacy rights should be balanced against national security interests in digital surveillance systems.' is correct. Outstanding digital ethics awareness!",
            correctFeedbackRu: "Отлично! 'I wonder if you might elaborate on how privacy rights should be balanced against national security interests in digital surveillance systems.' верно. Выдающееся понимание цифровой этики!",
            incorrectFeedback: "Try again. Remember: I + wonder + if + you + might + elaborate + on + how + privacy + rights + should + be + balanced + against + national + security + interests + in + digital + surveillance + systems.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + wonder + if + you + might + elaborate + on + how + privacy + rights + should + be + balanced + against + national + security + interests + in + digital + surveillance + systems."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["This", "is", "undoubtedly", "a", "sensitive", "topic,", "but", "I", "was", "curious", "whether", "algorithmic", "bias", "in", "hiring", "systems", "perpetuates", "workplace", "inequality."],
            correctAnswer: "This is undoubtedly a sensitive topic, but I was curious whether algorithmic bias in hiring systems perpetuates workplace inequality.",
            correctFeedback: "Excellent! 'This is undoubtedly a sensitive topic, but I was curious whether algorithmic bias in hiring systems perpetuates workplace inequality.' is correct. Excellent social justice sensitivity!",
            correctFeedbackRu: "Отлично! 'This is undoubtedly a sensitive topic, but I was curious whether algorithmic bias in hiring systems perpetuates workplace inequality.' верно. Превосходная чувствительность к социальной справедливости!",
            incorrectFeedback: "Try again. Remember: This + is + undoubtedly + a + sensitive + topic, + but + I + was + curious + whether + algorithmic + bias + in + hiring + systems + perpetuates + workplace + inequality.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: This + is + undoubtedly + a + sensitive + topic, + but + I + was + curious + whether + algorithmic + bias + in + hiring + systems + perpetuates + workplace + inequality."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "hope", "I'm", "approaching", "this", "respectfully,", "but", "could", "you", "help", "me", "understand", "how", "informed", "consent", "protocols", "should", "evolve", "for", "genetic", "modification", "therapies?"],
            correctAnswer: "I hope I'm approaching this respectfully, but could you help me understand how informed consent protocols should evolve for genetic modification therapies?",
            correctFeedback: "Perfect! 'I hope I'm approaching this respectfully, but could you help me understand how informed consent protocols should evolve for genetic modification therapies?' is correct. Outstanding medical ethics awareness!",
            correctFeedbackRu: "Отлично! 'I hope I'm approaching this respectfully, but could you help me understand how informed consent protocols should evolve for genetic modification therapies?' верно. Выдающееся понимание медицинской этики!",
            incorrectFeedback: "Try again. Remember: I + hope + I'm + approaching + this + respectfully, + but + could + you + help me + understand + how + informed + consent + protocols + should + evolve + for + genetic + modification + therapies + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + hope + I'm + approaching + this + respectfully, + but + could + you + help me + understand + how + informed + consent + protocols + should + evolve + for + genetic + modification + therapies + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Given", "the", "global", "impact", "of", "multinational", "corporations,", "I", "was", "wondering", "whether", "corporate", "social", "responsibility", "initiatives", "should", "be", "mandated", "versus", "remaining", "voluntary."],
            correctAnswer: "Given the global impact of multinational corporations, I was wondering whether corporate social responsibility initiatives should be mandated versus remaining voluntary.",
            correctFeedback: "Excellent! 'Given the global impact of multinational corporations, I was wondering whether corporate social responsibility initiatives should be mandated versus remaining voluntary.' is correct. Excellent corporate ethics awareness!",
            correctFeedbackRu: "Отлично! 'Given the global impact of multinational corporations, I was wondering whether corporate social responsibility initiatives should be mandated versus remaining voluntary.' верно. Превосходное понимание корпоративной этики!",
            incorrectFeedback: "Try again. Remember: Given + the + global + impact + of + multinational + corporations, + I + was wondering + whether + corporate + social + responsibility + initiatives + should + be + mandated + versus + remaining + voluntary.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Given + the + global + impact + of + multinational + corporations, + I + was wondering + whether + corporate + social + responsibility + initiatives + should + be + mandated + versus + remaining + voluntary."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I'd", "be", "grateful", "for", "your", "thoughts", "on", "how", "educational", "equity", "can", "be", "achieved", "when", "socioeconomic", "disparities", "create", "unequal", "learning", "opportunities."],
            correctAnswer: "I'd be grateful for your thoughts on how educational equity can be achieved when socioeconomic disparities create unequal learning opportunities.",
            correctFeedback: "Perfect! 'I'd be grateful for your thoughts on how educational equity can be achieved when socioeconomic disparities create unequal learning opportunities.' is correct. Outstanding educational equity awareness!",
            correctFeedbackRu: "Отлично! 'I'd be grateful for your thoughts on how educational equity can be achieved when socioeconomic disparities create unequal learning opportunities.' верно. Выдающееся понимание образовательного равенства!",
            incorrectFeedback: "Try again. Remember: I'd + be + grateful + for + your + thoughts + on + how + educational + equity + can + be + achieved + when + socioeconomic + disparities + create + unequal + learning + opportunities.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I'd + be + grateful + for + your + thoughts + on + how + educational + equity + can + be + achieved + when + socioeconomic + disparities + create + unequal + learning + opportunities."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["This", "involves", "considerable", "ethical", "complexity,", "but", "I", "wonder", "whether", "dual-use", "research", "should", "be", "regulated", "when", "scientific", "discoveries", "have", "both", "beneficial", "and", "harmful", "applications."],
            correctAnswer: "This involves considerable ethical complexity, but I wonder whether dual-use research should be regulated when scientific discoveries have both beneficial and harmful applications.",
            correctFeedback: "Excellent! 'This involves considerable ethical complexity, but I wonder whether dual-use research should be regulated when scientific discoveries have both beneficial and harmful applications.' is correct. Excellent research ethics sophistication!",
            correctFeedbackRu: "Отлично! 'This involves considerable ethical complexity, but I wonder whether dual-use research should be regulated when scientific discoveries have both beneficial and harmful applications.' верно. Превосходная изощренность в этике исследований!",
            incorrectFeedback: "Try again. Remember: This + involves + considerable + ethical + complexity, + but + I + wonder + whether + dual-use + research + should + be + regulated + when + scientific + discoveries + have + both + beneficial + and + harmful + applications.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: This + involves + considerable + ethical + complexity, + but + I + wonder + whether + dual-use + research + should + be + regulated + when + scientific + discoveries + have + both + beneficial + and + harmful + applications."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "realize", "this", "raises", "fundamental", "questions", "about", "human", "dignity,", "but", "could", "you", "share", "your", "perspective", "on", "whether", "artificial", "consciousness", "should", "be", "granted", "legal", "personhood", "status?"],
            correctAnswer: "I realize this raises fundamental questions about human dignity, but could you share your perspective on whether artificial consciousness should be granted legal personhood status?",
            correctFeedback: "Perfect! 'I realize this raises fundamental questions about human dignity, but could you share your perspective on whether artificial consciousness should be granted legal personhood status?' is correct. Outstanding philosophical depth!",
            correctFeedbackRu: "Отлично! 'I realize this raises fundamental questions about human dignity, but could you share your perspective on whether artificial consciousness should be granted legal personhood status?' верно. Выдающаяся философская глубина!",
            incorrectFeedback: "Try again. Remember: I + realize + this + raises + fundamental + questions + about + human + dignity, + but + could + you + share + your + perspective + on + whether + artificial + consciousness + should + be + granted + legal + personhood + status + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: I + realize + this + raises + fundamental + questions + about + human + dignity, + but + could + you + share + your + perspective + on + whether + artificial + consciousness + should + be + granted + legal + personhood + status + ?"
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["As", "we", "navigate", "these", "unprecedented", "ethical", "frontiers,", "may", "I", "ask", "how", "humanity", "should", "collectively", "approach", "the", "governance", "of", "transformative", "technologies", "that", "transcend", "national", "boundaries?"],
            correctAnswer: "As we navigate these unprecedented ethical frontiers, may I ask how humanity should collectively approach the governance of transformative technologies that transcend national boundaries?",
            correctFeedback: "Excellent! 'As we navigate these unprecedented ethical frontiers, may I ask how humanity should collectively approach the governance of transformative technologies that transcend national boundaries?' is correct. Exceptional global ethics awareness!",
            correctFeedbackRu: "Отлично! 'As we navigate these unprecedented ethical frontiers, may I ask how humanity should collectively approach the governance of transformative technologies that transcend national boundaries?' верно. Исключительное понимание глобальной этики!",
            incorrectFeedback: "Try again. Remember: As + we + navigate + these + unprecedented + ethical + frontiers, + may + I + ask + how + humanity + should + collectively + approach + the + governance + of + transformative + technologies + that + transcend + national + boundaries + ?",
            incorrectFeedbackRu: "Попробуйте снова. Помните: As + we + navigate + these + unprecedented + ethical + frontiers, + may + I + ask + how + humanity + should + collectively + approach + the + governance + of + transformative + technologies + that + transcend + national + boundaries + ?"
        }
    ]
};