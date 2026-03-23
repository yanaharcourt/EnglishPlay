/* ============================================
Initialize Grammar Exercises Object Structure
============================================ */
if (!window.grammarExercises) { window.grammarExercises = {}; }
if (!window.grammarExercises.passive) { window.grammarExercises.passive = {}; }

/* ============================================
Page 1: Coffee Production
============================================ */
window.grammarExercises['passive']['process-description-page1'] = {
    title: "Process Description - Coffee Production",
    multipleChoice: [
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную форму пассивного залога:",
            sentence: "Coffee beans _____ in tropical regions at high altitudes where rainfall is plentiful.",
            options: ["are grown", "is grown", "grow"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are grown' is the present simple passive (are/is + past participle). We use it here to describe a general fact about where coffee comes from. 'Coffee beans' is plural, so the auxiliary must be 'are', not 'is'.",
            correctFeedbackRu: "Правильно! 'Are grown' — пассивный залог Present Simple (are/is + причастие прошедшего времени). Используем его для описания общего факта. 'Coffee beans' — множественное число, поэтому вспомогательный глагол — 'are', а не 'is'.",
            incorrectFeedback: "The passive voice is formed with be + past participle. 'Coffee beans' is plural, so you need 'are grown', not 'is grown'. The active form 'grow' would mean the beans grow themselves with no human involvement implied.",
            incorrectFeedbackRu: "Пассивный залог образуется с be + причастие прошедшего времени. 'Coffee beans' — множественное число, поэтому нужно 'are grown', а не 'is grown'. Активная форма 'grow' означала бы, что зёрна растут сами по себе."
        },
        {
            question: "Select the correct form to complete the process description:",
            questionRu: "Выберите правильную форму для завершения описания процесса:",
            sentence: "After harvesting, the outer fruit _____ to expose the coffee beans inside.",
            options: ["is removed", "are removed", "removes"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is removed' — present simple passive, singular subject. 'The outer fruit' is singular, so we use 'is'. In process descriptions, we often leave out the agent (by someone) when it is not important who performs the action — the focus is on the process itself.",
            correctFeedbackRu: "Правильно! 'Is removed' — пассивный залог Present Simple, единственное число. 'The outer fruit' — единственное число, поэтому 'is'. В описаниях процессов мы часто опускаем агента, когда исполнитель не важен — фокус на самом процессе.",
            incorrectFeedback: "'The outer fruit' is a singular noun — use 'is removed', not 'are removed'. 'Removes' is active voice (someone removes it), but in process writing we prefer the passive to keep the focus on what happens, not who does it.",
            incorrectFeedbackRu: "'The outer fruit' — единственное число, используем 'is removed', а не 'are removed'. 'Removes' — активный залог, но в описаниях процессов предпочтительнее пассивный залог, чтобы сосредоточиться на том, что происходит."
        },
        {
            question: "Complete the sentence with the correct passive structure:",
            questionRu: "Дополните предложение правильной пассивной структурой:",
            sentence: "The beans _____ in large rotating drums to develop their characteristic flavour.",
            options: ["are roasted", "is roasted", "roast"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are roasted' — present simple passive, plural subject ('the beans'). Notice how the purpose is expressed with 'to + infinitive' (to develop their characteristic flavour). This pattern — passive verb + to + infinitive of purpose — is very common in process descriptions.",
            correctFeedbackRu: "Правильно! 'Are roasted' — пассивный залог Present Simple, множественное число. Обратите: цель выражается с 'to + инфинитив'. Паттерн «пассивный глагол + to + инфинитив цели» очень распространён в описаниях процессов.",
            incorrectFeedback: "'The beans' is plural, so you need 'are roasted', not 'is roasted'. The active form 'roast' would mean the beans roast themselves, which makes no sense here. Use the passive to show that someone deliberately performs this action.",
            incorrectFeedbackRu: "'The beans' — множественное число, поэтому 'are roasted', а не 'is roasted'. Активная форма 'roast' означала бы, что зёрна обжаривают сами себя. Используйте пассивный залог, чтобы показать, что кто-то намеренно совершает это действие."
        },
        {
            question: "Choose the correct form for this step in the process:",
            questionRu: "Выберите правильную форму для этого шага в процессе:",
            sentence: "Once roasted, the beans _____ and packaged within hours to preserve their freshness.",
            options: ["are ground", "are grinded", "is ground"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are ground' — plural subject, irregular past participle. The verb 'grind' is irregular: grind / ground / ground. 'Grinded' does not exist — never add -ed to irregular verbs. This sentence also shows the pattern 'Once + past participle, subject + passive verb', which is typical in process writing.",
            correctFeedbackRu: "Правильно! 'Are ground' — множественное число, неправильное причастие. Глагол 'grind' неправильный: grind / ground / ground. 'Grinded' не существует — никогда не добавляйте -ed к неправильным глаголам. Предложение также показывает типичный паттерн: 'Once + причастие, подлежащее + пассивный глагол'.",
            incorrectFeedback: "'Grinded' does not exist in English — 'grind' is irregular, so the past participle is 'ground'. The subject 'the beans' is plural, so the auxiliary is 'are', not 'is'. The correct form is 'are ground'.",
            incorrectFeedbackRu: "'Grinded' не существует — 'grind' неправильный глагол, причастие — 'ground'. Подлежащее 'the beans' — множественное число, вспомогательный глагол — 'are', а не 'is'."
        },
        {
            question: "Select the correct passive voice option:",
            questionRu: "Выберите правильный вариант пассивного залога:",
            sentence: "Quality checks _____ at several stages of the production process.",
            options: ["are carried out", "is carried out", "are carrying out"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are carried out' — present simple passive of the phrasal verb 'carry out'. When a phrasal verb is used in the passive, the particle stays attached to the verb: 'carried out', not just 'carried'. The subject 'quality checks' is plural, so we use 'are'.",
            correctFeedbackRu: "Правильно! 'Are carried out' — пассивный залог Present Simple от фразового глагола 'carry out'. В пассивном залоге частица остаётся при глаголе: 'carried out', а не просто 'carried'. Подлежащее 'quality checks' — множественное число, поэтому 'are'.",
            incorrectFeedback: "'Quality checks' is plural — use 'are', not 'is'. 'Are carrying out' is present continuous active, meaning the checks are actively doing something. For a routine process step, use present simple passive: 'are carried out'.",
            incorrectFeedbackRu: "'Quality checks' — множественное число, используем 'are', а не 'is'. 'Are carrying out' — активный Present Continuous. Для рутинного шага процесса используйте пассивный залог Present Simple: 'are carried out'."
        },
        {
            question: "Choose the correct passive construction:",
            questionRu: "Выберите правильную пассивную конструкцию:",
            sentence: "The coffee _____ into different grades based on bean size and quality.",
            options: ["is sorted", "are sorted", "is been sorted"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is sorted' — 'the coffee' is uncountable and treated as singular, so we use 'is'. Note that 'is been sorted' is grammatically impossible in English — you cannot combine 'is' with 'been' this way. Present simple passive is simply 'is/are + past participle'.",
            correctFeedbackRu: "Правильно! 'Is sorted' — 'the coffee' несчитаемое, единственное число, поэтому 'is'. 'Is been sorted' грамматически невозможно — нельзя сочетать 'is' с 'been' таким образом. Present Simple Passive — просто 'is/are + причастие прошедшего времени'.",
            incorrectFeedback: "'The coffee' is uncountable — it takes a singular verb: 'is sorted', not 'are sorted'. The form 'is been sorted' does not exist. Present simple passive = is/are + past participle. Present perfect passive = has/have been + past participle. Do not mix these structures.",
            incorrectFeedbackRu: "'The coffee' несчитаемое — принимает глагол единственного числа: 'is sorted', а не 'are sorted'. 'Is been sorted' не существует. Present Simple Passive = is/are + причастие. Present Perfect Passive = has/have been + причастие. Не смешивайте эти структуры."
        },
        {
            question: "Complete the process description with the correct form:",
            questionRu: "Дополните описание процесса правильной формой:",
            sentence: "Freshly picked coffee cherries _____ to the processing facility within 24 hours.",
            options: ["are transported", "is transported", "transported"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are transported' — present simple passive, plural subject ('coffee cherries'). The phrase 'within 24 hours' indicates the time limit for this regular step. 'Transported' alone, without the auxiliary 'are', cannot function as a present passive verb.",
            correctFeedbackRu: "Правильно! 'Are transported' — пассивный залог Present Simple, множественное число ('coffee cherries'). Фраза 'within 24 hours' указывает временной лимит. 'Transported' без вспомогательного 'are' не может быть пассивным глаголом в настоящем времени.",
            incorrectFeedback: "'Coffee cherries' is plural — use 'are transported'. 'Transported' alone (without an auxiliary) cannot be the main verb in a present sentence — it reads as a past simple passive or an adjective, neither of which fits here.",
            incorrectFeedbackRu: "'Coffee cherries' — множественное число, используем 'are transported'. 'Transported' без вспомогательного глагола не может быть главным глаголом в настоящем времени."
        },
        {
            question: "Select the correct option to describe what happens to the coffee:",
            questionRu: "Выберите правильный вариант, описывающий, что происходит с кофе:",
            sentence: "The roasted beans _____ in airtight containers to prevent exposure to air and moisture.",
            options: ["are stored", "is stored", "have been storing"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are stored' — present simple passive, plural subject. The purpose 'to prevent exposure to air and moisture' explains why this step is done. We use present simple passive for standard procedures that are always carried out this way.",
            correctFeedbackRu: "Правильно! 'Are stored' — пассивный залог Present Simple, множественное число. Цель 'to prevent exposure' объясняет, почему выполняется этот шаг. Present Simple Passive используется для стандартных процедур.",
            incorrectFeedback: "'The roasted beans' is plural — use 'are', not 'is'. 'Have been storing' is present perfect continuous active — it describes an action in progress over time, not a standard process step. Use present simple passive 'are stored' for routine procedures.",
            incorrectFeedbackRu: "'The roasted beans' — множественное число, используем 'are', а не 'is'. 'Have been storing' — активный Present Perfect Continuous, не подходящий для стандартного шага. Используйте 'are stored' для рутинных процедур."
        },
        {
            question: "Choose the correct passive structure for the process:",
            questionRu: "Выберите правильную пассивную структуру для описания процесса:",
            sentence: "Defective beans _____ by hand before the coffee is packaged.",
            options: ["are removed", "is removed", "are removing"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are removed' — plural subject ('defective beans'). The phrase 'by hand' tells us the method used. Note the difference: 'by hand' describes how the action is done; 'by workers' would name who does it. Both use 'by', but they serve different grammatical purposes.",
            correctFeedbackRu: "Правильно! 'Are removed' — множественное число. 'By hand' описывает метод. Разница: 'by hand' = как делается; 'by workers' = кто делает. Оба используют 'by', но служат разным целям.",
            incorrectFeedback: "'Defective beans' is plural — use 'are removed', not 'is removed'. 'Are removing' is present continuous active — the beans would be removing something. The passive 'are removed' correctly shows that the beans receive the action.",
            incorrectFeedbackRu: "'Defective beans' — множественное число, используем 'are removed', а не 'is removed'. 'Are removing' — активный Present Continuous. Пассивное 'are removed' показывает, что зёрна получают действие."
        },
        {
            question: "Select the correct passive form for the final step:",
            questionRu: "Выберите правильную форму пассивного залога для последнего шага:",
            sentence: "Finally, the packaged coffee _____ to wholesalers and retailers around the world.",
            options: ["is distributed", "are distributed", "is distribute"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is distributed' — singular subject ('the packaged coffee'). The word 'finally' is a common sequence marker in process descriptions. Other typical markers are: first, then, next, after that, subsequently. 'Is distribute' is wrong — after 'is' you always need the past participle, not the base form.",
            correctFeedbackRu: "Правильно! 'Is distributed' — единственное число. 'Finally' — типичный маркер последовательности. Другие маркеры: first, then, next, after that, subsequently. 'Is distribute' неверно — после 'is' всегда нужно причастие прошедшего времени, а не базовая форма.",
            incorrectFeedback: "'The packaged coffee' is singular (uncountable) — use 'is', not 'are'. 'Is distribute' is incorrect: the passive requires the past participle 'distributed', not the base form 'distribute'. The base form only follows modal verbs (can, will, should, etc.).",
            incorrectFeedbackRu: "'The packaged coffee' — единственное число, используем 'is', а не 'are'. 'Is distribute' неверно: пассивный залог требует причастие 'distributed', а не базовую форму. Базовая форма следует только за модальными глаголами."
        }
    ]
};

/* ============================================
Page 2: Oil Refining
============================================ */
window.grammarExercises['passive']['process-description-page2'] = {
    title: "Process Description - Oil Refining",
    multipleChoice: [
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную форму пассивного залога:",
            sentence: "Crude oil _____ from underground reservoirs using large drilling rigs.",
            options: ["is extracted", "are extracted", "is extracting"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is extracted' — present simple passive, singular subject ('crude oil'). 'Crude oil' is an uncountable noun, so it always takes a singular verb. In technical process descriptions, the passive is preferred because we focus on the process, not on the company or workers performing it.",
            correctFeedbackRu: "Правильно! 'Is extracted' — пассивный залог Present Simple, единственное число ('crude oil'). 'Crude oil' — несчитаемое существительное, поэтому всегда принимает глагол единственного числа. В технических описаниях пассивный залог предпочтителен, так как фокус на процессе.",
            incorrectFeedback: "'Crude oil' is uncountable and singular — use 'is extracted', not 'are extracted'. 'Is extracting' is present continuous passive, used for temporary actions happening right now. For a standard, ongoing industrial process, use present simple passive.",
            incorrectFeedbackRu: "'Crude oil' несчитаемое, единственное число — используем 'is extracted', а не 'are extracted'. 'Is extracting' — пассивный Present Continuous, используется для временных действий. Для стандартного промышленного процесса используйте Present Simple Passive."
        },
        {
            question: "Select the correct form to describe the next step:",
            questionRu: "Выберите правильную форму для описания следующего шага:",
            sentence: "The oil _____ to a refinery by pipeline or tanker ship.",
            options: ["is transported", "are transported", "is transport"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is transported' — singular subject ('the oil'). Note: 'by pipeline or tanker ship' describes the method, not the agent. In passive sentences, 'by + person/company' introduces the agent, but 'by + means' describes how something is done.",
            correctFeedbackRu: "Правильно! 'Is transported' — единственное число ('the oil'). 'By pipeline or tanker ship' описывает метод, а не агента. В пассивных предложениях 'by + человек/компания' вводит агента, а 'by + средство' описывает способ действия.",
            incorrectFeedback: "'The oil' is singular — use 'is', not 'are'. 'Is transport' is wrong: after 'is' you need the past participle 'transported', not the base form 'transport'. The base form only comes after modal verbs like 'can' or 'will'.",
            incorrectFeedbackRu: "'The oil' — единственное число, используем 'is'. 'Is transport' неверно: после 'is' нужно причастие 'transported', а не базовая форма. Базовая форма следует только за модальными глаголами."
        },
        {
            question: "Complete the process description correctly:",
            questionRu: "Правильно дополните описание процесса:",
            sentence: "At the refinery, the crude oil _____ into its component parts through a process called fractional distillation.",
            options: ["is separated", "are separated", "is separating"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is separated' — singular subject. The phrase 'through a process called fractional distillation' names the technique used. This structure — 'through a process called + name' — is common in academic and technical writing to introduce specialist terminology.",
            correctFeedbackRu: "Правильно! 'Is separated' — единственное число. Фраза 'through a process called fractional distillation' называет используемую технику. Эта структура распространена в академическом письме для введения специальных терминов.",
            incorrectFeedback: "'The crude oil' is singular — use 'is separated', not 'are separated'. 'Is separating' is present continuous passive, implying a temporary action currently in progress. In a process description, use present simple passive for regular, ongoing steps.",
            incorrectFeedbackRu: "'The crude oil' — единственное число, используем 'is separated', а не 'are separated'. 'Is separating' — пассивный Present Continuous, подразумевает временное текущее действие. В описании процессов используйте Present Simple Passive."
        },
        {
            question: "Choose the correct passive option:",
            questionRu: "Выберите правильный пассивный вариант:",
            sentence: "During distillation, the oil _____ to extremely high temperatures inside a distillation tower.",
            options: ["is heated", "are heated", "is heating"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is heated' — singular. 'During distillation' is a time phrase showing at which stage this happens. It is typical in process descriptions to use 'during + noun phrase' to indicate a specific stage, rather than writing 'while it is being distilled'.",
            correctFeedbackRu: "Правильно! 'Is heated' — единственное число. 'During distillation' — временная фраза, показывающая, на каком этапе это происходит. Типично для описаний процессов использовать 'during + именная группа' для указания конкретного этапа.",
            incorrectFeedback: "'The oil' is singular — use 'is'. 'Is heating' is present continuous passive, which describes a temporary action currently happening. A regular step in an industrial process is better described with present simple passive: 'is heated'.",
            incorrectFeedbackRu: "'The oil' — единственное число, используем 'is'. 'Is heating' — пассивный Present Continuous для временного действия. Регулярный шаг промышленного процесса лучше описывается Present Simple Passive: 'is heated'."
        },
        {
            question: "Select the correct form to describe what happens to each fraction:",
            questionRu: "Выберите правильную форму, описывающую, что происходит с каждой фракцией:",
            sentence: "The lighter fractions, such as petrol and kerosene, _____ off at the top of the tower.",
            options: ["are drawn", "is drawn", "are drew"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are drawn' — plural subject ('the lighter fractions'). The irregular past participle of 'draw' is 'drawn', not 'drew'. 'Drew' is the simple past tense — it cannot be used to form the passive. The passive always uses the past participle, not the simple past.",
            correctFeedbackRu: "Правильно! 'Are drawn' — множественное число. Неправильное причастие прошедшего времени от 'draw' — 'drawn', а не 'drew'. 'Drew' — простое прошедшее время, оно не используется для образования пассивного залога. Пассивный залог всегда использует причастие прошедшего времени.",
            incorrectFeedback: "'The lighter fractions' is plural — use 'are', not 'is'. 'Are drew' is impossible: to form the passive, you need the past participle 'drawn', not the simple past 'drew'. These are two different forms of the irregular verb 'draw'.",
            incorrectFeedbackRu: "'The lighter fractions' — множественное число, используем 'are', а не 'is'. 'Are drew' невозможно: для образования пассива нужно причастие 'drawn', а не простое прошедшее 'drew'."
        },
        {
            question: "Choose the correct passive form for this step:",
            questionRu: "Выберите правильную форму пассивного залога для этого шага:",
            sentence: "Impurities such as sulphur _____ from the oil in a process called desulphurisation.",
            options: ["are removed", "is removed", "removed"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are removed' — the main subject is 'impurities' (plural). When 'such as' introduces examples after a plural noun, the verb agrees with the main noun ('impurities'), not with the examples. 'Removed' alone cannot be the main verb without an auxiliary.",
            correctFeedbackRu: "Правильно! 'Are removed' — главное подлежащее 'impurities' (множественное число). Когда 'such as' вводит примеры, глагол согласуется с главным существительным, а не с примерами. 'Removed' без вспомогательного глагола не может быть главным глаголом.",
            incorrectFeedback: "The main subject is 'impurities' (plural), so use 'are'. 'Such as sulphur' is just an example and doesn't change the subject number. 'Removed' alone without 'are' cannot function as a present passive verb in this sentence.",
            incorrectFeedbackRu: "Главное подлежащее — 'impurities' (множественное число), используем 'are'. 'Such as sulphur' — просто пример, не меняющий число. 'Removed' без 'are' не может быть пассивным глаголом в настоящем времени."
        },
        {
            question: "Complete the sentence about refinery by-products:",
            questionRu: "Дополните предложение о побочных продуктах нефтепереработки:",
            sentence: "Heavy residues from the distillation process _____ as fuel for industrial boilers.",
            options: ["are used", "is used", "are using"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are used' — plural subject ('heavy residues'). The phrase 'are used as' tells us the function. Note the useful distinction: 'used as + noun' describes a function (used as fuel), while 'used for + -ing' describes a purpose (used for heating buildings).",
            correctFeedbackRu: "Правильно! 'Are used' — множественное число ('heavy residues'). 'Are used as' описывает функцию. Полезное различие: 'used as + существительное' описывает функцию, а 'used for + -ing' описывает цель.",
            incorrectFeedback: "'Heavy residues' is plural — use 'are'. 'Are using' is present continuous active, meaning the residues are actively using something themselves. The passive 'are used' correctly shows that someone uses the residues for fuel.",
            incorrectFeedbackRu: "'Heavy residues' — множественное число, используем 'are'. 'Are using' — активный Present Continuous, означает, что остатки сами что-то используют. Пассивное 'are used' правильно показывает, что кто-то использует остатки."
        },
        {
            question: "Select the correct passive construction:",
            questionRu: "Выберите правильную пассивную конструкцию:",
            sentence: "The refined products _____ in large storage tanks before distribution.",
            options: ["are held", "is held", "are holding"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are held' — plural subject ('the refined products'). 'Hold' here means 'store or keep'. The time phrase 'before distribution' is a typical sequence marker in process descriptions, showing the order of steps.",
            correctFeedbackRu: "Правильно! 'Are held' — множественное число. 'Hold' здесь означает 'хранить'. Временная фраза 'before distribution' — типичный маркер последовательности в описаниях процессов.",
            incorrectFeedback: "'The refined products' is plural — use 'are'. 'Are holding' is present continuous active — the products are holding something. The passive 'are held' shows the products receive the action of being stored.",
            incorrectFeedbackRu: "'The refined products' — множественное число, используем 'are'. 'Are holding' — активный Present Continuous. Пассивное 'are held' показывает, что продукты получают действие хранения."
        },
        {
            question: "Choose the correct form for this safety procedure:",
            questionRu: "Выберите правильную форму для этой процедуры безопасности:",
            sentence: "All emissions from the refinery _____ before they are released into the atmosphere.",
            options: ["are treated", "is treated", "treat"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are treated' — plural subject ('all emissions'). Notice that both clauses use passive voice: 'are treated' and 'are released'. This is consistent because in both cases we focus on what happens to the emissions, not on who treats or releases them.",
            correctFeedbackRu: "Правильно! 'Are treated' — множественное число ('all emissions'). Оба придаточных используют пассивный залог: 'are treated' и 'are released'. Это последовательно, так как в обоих случаях мы сосредоточены на том, что происходит с выбросами.",
            incorrectFeedback: "'All emissions' is plural — use 'are treated', not 'is treated'. The active form 'treat' would mean the emissions treat something else. The passive 'are treated' correctly shows the emissions receive the treatment.",
            incorrectFeedbackRu: "'All emissions' — множественное число, используем 'are treated', а не 'is treated'. Активная форма 'treat' означала бы, что выбросы сами что-то обрабатывают."
        },
        {
            question: "Select the final step described in the correct passive form:",
            questionRu: "Выберите последний шаг в правильной форме пассивного залога:",
            sentence: "The finished petroleum products _____ to petrol stations and airports through an extensive pipeline network.",
            options: ["are delivered", "is delivered", "are deliver"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are delivered' — plural subject ('the finished petroleum products'). 'Through an extensive pipeline network' describes the means of delivery. This shows how process descriptions explain not just what happens, but also how it happens.",
            correctFeedbackRu: "Правильно! 'Are delivered' — множественное число. 'Through an extensive pipeline network' описывает способ доставки. Описания процессов объясняют не только что происходит, но и как.",
            incorrectFeedback: "'The finished petroleum products' is plural — use 'are'. 'Are deliver' is impossible: after 'are' you need the past participle 'delivered', not the base form 'deliver'. The base form follows modal verbs (can deliver, will deliver), not 'are'.",
            incorrectFeedbackRu: "'The finished petroleum products' — множественное число, используем 'are'. 'Are deliver' невозможно: после 'are' нужно причастие 'delivered', а не базовая форма."
        }
    ]
};

/* ============================================
Page 3: Glass Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-page3'] = {
    title: "Process Description - Glass Manufacturing",
    multipleChoice: [
        {
            question: "Choose the correct passive form for this manufacturing process:",
            questionRu: "Выберите правильную форму пассивного залога для этого производственного процесса:",
            sentence: "Sand, limestone, and soda ash _____ together in precise proportions to make glass.",
            options: ["are mixed", "is mixed", "mixed"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are mixed' — three items joined by 'and' form a plural subject, so the auxiliary is 'are'. The phrase 'in precise proportions' emphasises the controlled, exact nature of industrial manufacturing, which is typical of B2-level process descriptions.",
            correctFeedbackRu: "Правильно! 'Are mixed' — три элемента, соединённые 'and', образуют множественное число, вспомогательный глагол — 'are'. Фраза 'in precise proportions' подчёркивает точный, контролируемый характер производства.",
            incorrectFeedback: "Sand, limestone, and soda ash are three items joined by 'and', forming a plural subject — use 'are mixed'. 'Mixed' alone without an auxiliary cannot function as the main present passive verb.",
            incorrectFeedbackRu: "Sand, limestone, and soda ash — три элемента, соединённые 'and', образующие множественное число — используем 'are mixed'. 'Mixed' без вспомогательного глагола не может быть главным пассивным глаголом в настоящем времени."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную форму пассивного залога:",
            sentence: "The raw material mixture _____ in a furnace at temperatures exceeding 1,500 degrees Celsius.",
            options: ["is melted", "are melted", "is melt"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is melted' — 'the raw material mixture' is singular. Although the mixture contains many materials, 'mixture' is a singular noun. The extreme temperature detail adds scientific precision, which is characteristic of process descriptions at B2 level.",
            correctFeedbackRu: "Правильно! 'Is melted' — 'the raw material mixture' — единственное число. Хотя смесь содержит много материалов, 'mixture' — существительное единственного числа.",
            incorrectFeedback: "'The raw material mixture' is singular — use 'is', not 'are'. 'Is melt' is wrong: after 'is' you need the past participle 'melted', not the base form 'melt'.",
            incorrectFeedbackRu: "'The raw material mixture' — единственное число, используем 'is', а не 'are'. 'Is melt' неверно: после 'is' нужно причастие 'melted', а не базовая форма."
        },
        {
            question: "Complete the description of the shaping process:",
            questionRu: "Дополните описание процесса формовки:",
            sentence: "The molten glass _____ into moulds or blown into shape, depending on the type of product required.",
            options: ["is poured", "are poured", "is pouring"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is poured' — singular subject. Note the expression 'depending on' — it is used in process descriptions to show that the method varies according to conditions. The structure 'depending on + noun' is more formal than 'it depends on what product is needed'.",
            correctFeedbackRu: "Правильно! 'Is poured' — единственное число. 'Depending on' используется для обозначения того, что метод варьируется в зависимости от условий. Эта структура более формальна.",
            incorrectFeedback: "'The molten glass' is singular — use 'is poured', not 'are poured'. 'Is pouring' is present continuous passive, describing a temporary current action, not a regular step in a manufacturing process.",
            incorrectFeedbackRu: "'The molten glass' — единственное число, используем 'is poured', а не 'are poured'. 'Is pouring' — пассивный Present Continuous, описывает временное действие, а не регулярный шаг производства."
        },
        {
            question: "Choose the correct form for describing the annealing stage:",
            questionRu: "Выберите правильную форму для описания этапа отжига:",
            sentence: "After shaping, the glass _____ slowly in a special oven called an annealing lehr.",
            options: ["is cooled", "are cooled", "is been cooled"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is cooled' — singular subject ('the glass'). The adverb 'slowly' sits between the auxiliary and the past participle — this word order is perfectly acceptable in passive constructions. 'Is been cooled' is not a valid structure in English.",
            correctFeedbackRu: "Правильно! 'Is cooled' — единственное число. Наречие 'slowly' стоит между вспомогательным и причастием — это допустимый порядок слов. 'Is been cooled' — недопустимая структура в английском языке.",
            incorrectFeedback: "'The glass' is singular — use 'is', not 'are'. 'Is been cooled' does not exist: present simple passive = 'is cooled'; present perfect passive = 'has been cooled'. Never combine 'is' with 'been' in this way.",
            incorrectFeedbackRu: "'The glass' — единственное число, используем 'is'. 'Is been cooled' не существует: Present Simple Passive = 'is cooled'; Present Perfect Passive = 'has been cooled'. Никогда не сочетайте 'is' с 'been' таким образом."
        },
        {
            question: "Select the correct passive option:",
            questionRu: "Выберите правильный пассивный вариант:",
            sentence: "The finished glass panels _____ for cracks and imperfections using laser scanning technology.",
            options: ["are inspected", "is inspected", "are inspecting"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are inspected' — plural subject ('the finished glass panels'). The phrase 'using laser scanning technology' is a participial phrase describing the method. In process descriptions, 'using + noun' is a concise way to say 'by means of + noun'.",
            correctFeedbackRu: "Правильно! 'Are inspected' — множественное число. 'Using laser scanning technology' — причастный оборот, описывающий метод. В описаниях процессов 'using + существительное' — краткий способ сказать 'by means of + существительное'.",
            incorrectFeedback: "'The finished glass panels' is plural — use 'are'. 'Are inspecting' is present continuous active — the panels would be inspecting something else. The passive 'are inspected' correctly shows the panels receive the action of inspection.",
            incorrectFeedbackRu: "'The finished glass panels' — множественное число, используем 'are'. 'Are inspecting' — активный Present Continuous. Пассивное 'are inspected' показывает, что панели получают действие проверки."
        },
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную форму пассивного залога:",
            sentence: "Any glass that fails the quality inspection _____ and the raw materials are recycled.",
            options: ["is rejected", "are rejected", "is rejecting"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is rejected' — the main subject is 'any glass' (singular uncountable). The relative clause 'that fails the quality inspection' modifies 'glass' but does not change its number. This is a complex noun phrase, but the head noun 'glass' is always singular.",
            correctFeedbackRu: "Правильно! 'Is rejected' — главное подлежащее 'any glass' (единственное число). Придаточное предложение 'that fails the quality inspection' уточняет 'glass', но не меняет его число.",
            incorrectFeedback: "The main subject is 'any glass' (uncountable, singular) — use 'is'. The clause 'that fails' modifies the subject but does not make it plural. 'Is rejecting' is present continuous passive, not suitable for a regular process step.",
            incorrectFeedbackRu: "Главное подлежащее — 'any glass' (несчитаемое, единственное число) — используем 'is'. Придаточное 'that fails' уточняет подлежащее, но не делает его множественным числом."
        },
        {
            question: "Complete the sentence about glass cutting:",
            questionRu: "Дополните предложение о резке стекла:",
            sentence: "Large sheets of glass _____ into standard sizes using automated cutting machines.",
            options: ["are cut", "is cut", "are cutted"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are cut' — plural subject ('large sheets of glass'). 'Cut' is an irregular verb where all three forms are identical: cut / cut / cut. 'Are cutted' is wrong — never add -ed to an irregular verb. Check the past participle before forming the passive.",
            correctFeedbackRu: "Правильно! 'Are cut' — множественное число. 'Cut' — неправильный глагол, у которого все три формы одинаковы: cut / cut / cut. 'Are cutted' неверно — никогда не добавляйте -ed к неправильным глаголам.",
            incorrectFeedback: "'Large sheets of glass' is plural — use 'are'. 'Are cutted' is wrong because 'cut' is irregular — its past participle is 'cut', the same as its base form. Adding -ed creates a non-existent word.",
            incorrectFeedbackRu: "'Large sheets of glass' — множественное число, используем 'are'. 'Are cutted' неверно: 'cut' неправильный глагол, его причастие прошедшего времени — 'cut'. Добавление -ed создаёт несуществующее слово."
        },
        {
            question: "Select the correct passive structure:",
            questionRu: "Выберите правильную пассивную структуру:",
            sentence: "Special coatings _____ to the glass surface to improve scratch resistance and UV protection.",
            options: ["are applied", "is applied", "are apply"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are applied' — plural subject ('special coatings'). The infinitive 'to improve scratch resistance and UV protection' expresses purpose. Using 'to + infinitive' for purpose is very common in technical process descriptions and is a key B2 structure.",
            correctFeedbackRu: "Правильно! 'Are applied' — множественное число. Инфинитив 'to improve scratch resistance and UV protection' выражает цель. 'To + инфинитив' для цели очень распространён в технических описаниях.",
            incorrectFeedback: "'Special coatings' is plural — use 'are'. 'Are apply' is not grammatically possible: after 'are' you need the past participle 'applied', not the base form 'apply'.",
            incorrectFeedbackRu: "'Special coatings' — множественное число, используем 'are'. 'Are apply' грамматически невозможно: после 'are' нужно причастие 'applied', а не базовая форма."
        },
        {
            question: "Choose the correct form for describing packaging:",
            questionRu: "Выберите правильную форму для описания упаковки:",
            sentence: "The glass products _____ in protective materials and loaded onto pallets for shipment.",
            options: ["are wrapped", "is wrapped", "wrapped"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are wrapped' — plural subject. Notice the parallel structure: 'are wrapped...and loaded'. Both verbs are passive and share the same auxiliary 'are'. In lists of passive actions, the auxiliary does not need to be repeated before each verb.",
            correctFeedbackRu: "Правильно! 'Are wrapped' — множественное число. Обратите на параллельную структуру: 'are wrapped...and loaded'. Оба глагола пассивные и используют общий 'are'. В списке пассивных действий вспомогательный не нужно повторять.",
            incorrectFeedback: "'The glass products' is plural — use 'are'. 'Wrapped' alone without 'are' cannot be the present passive main verb. Without 'are', it functions as an adjective or past simple, neither of which fits here.",
            incorrectFeedbackRu: "'The glass products' — множественное число, используем 'are'. 'Wrapped' без 'are' не может быть пассивным глаголом в настоящем времени. Без 'are' 'wrapped' функционирует как прилагательное или Past Simple."
        },
        {
            question: "Select the correct passive option for the final step:",
            questionRu: "Выберите правильный пассивный вариант для последнего шага:",
            sentence: "Detailed records of each batch _____ to ensure traceability throughout the supply chain.",
            options: ["are kept", "is kept", "are keeping"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are kept' — plural subject ('detailed records'). 'Keep' is irregular: keep / kept / kept. The purpose clause 'to ensure traceability throughout the supply chain' uses formal vocabulary typical of B2 process descriptions in manufacturing contexts.",
            correctFeedbackRu: "Правильно! 'Are kept' — множественное число. 'Keep' неправильный: keep / kept / kept. Целевое предложение 'to ensure traceability throughout the supply chain' использует формальную лексику, типичную для B2.",
            incorrectFeedback: "'Detailed records' is plural — use 'are'. 'Are keeping' is present continuous active — the records are actively keeping something. The passive 'are kept' shows the records receive the action. 'Keep' is irregular — past participle is 'kept', not 'keeped'.",
            incorrectFeedbackRu: "'Detailed records' — множественное число, используем 'are'. 'Are keeping' — активный Present Continuous. Пассивное 'are kept' показывает, что записи получают действие. 'Keep' неправильный — причастие 'kept'."
        }
    ]
};

/* ============================================
Page 4: Water Treatment
============================================ */
window.grammarExercises['passive']['process-description-page4'] = {
    title: "Process Description - Water Treatment",
    multipleChoice: [
        {
            question: "Choose the correct passive form for this water treatment step:",
            questionRu: "Выберите правильную форму пассивного залога для этого шага водоочистки:",
            sentence: "Raw water _____ from rivers or underground aquifers and pumped to the treatment plant.",
            options: ["is collected", "are collected", "is collect"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is collected' — 'raw water' is uncountable and singular. Notice the parallel passive structure: 'is collected...and pumped'. The second verb 'pumped' shares the auxiliary 'is' from the first clause — this avoids unnecessary repetition.",
            correctFeedbackRu: "Правильно! 'Is collected' — 'raw water' несчитаемое, единственное число. Параллельная структура: 'is collected...and pumped'. Второй глагол 'pumped' использует 'is' из первого предложения — это избегает ненужного повторения.",
            incorrectFeedback: "'Raw water' is uncountable and singular — use 'is collected'. 'Is collect' is wrong: after 'is' you must use the past participle 'collected', not the base form. Base forms follow modal verbs, not 'is/are'.",
            incorrectFeedbackRu: "'Raw water' несчитаемое, единственное число — используем 'is collected'. 'Is collect' неверно: после 'is' нужно причастие 'collected', а не базовая форма."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную форму пассивного залога:",
            sentence: "Large debris such as leaves and branches _____ by metal screens at the intake stage.",
            options: ["is removed", "are removed", "removes"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is removed' — 'debris' looks like a plural noun but is actually uncountable and always takes a singular verb. This is a common mistake. Compare: 'the debris is' (correct) vs. 'the debris are' (incorrect). The agent 'by metal screens' shows what performs the action.",
            correctFeedbackRu: "Правильно! 'Is removed' — 'debris' выглядит как множественное число, но на самом деле несчитаемое и всегда принимает глагол единственного числа. Это распространённая ошибка. 'By metal screens' показывает, что выполняет действие.",
            incorrectFeedback: "'Debris' is uncountable — it always takes a singular verb. Use 'is removed', not 'are removed'. This is a tricky word because it looks plural. Remember: the passive agent is introduced with 'by + noun'.",
            incorrectFeedbackRu: "'Debris' несчитаемое — всегда принимает глагол единственного числа. Используем 'is removed', а не 'are removed'. Это сложное слово, так как выглядит как множественное число."
        },
        {
            question: "Complete the description of the coagulation process:",
            questionRu: "Дополните описание процесса коагуляции:",
            sentence: "Chemical coagulants _____ to the water to cause tiny particles to clump together.",
            options: ["are added", "is added", "add"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are added' — plural subject ('chemical coagulants'). The pattern 'cause + object + to + infinitive' (cause tiny particles to clump) is common in scientific explanations. Using the passive here avoids saying who adds them, keeping the focus on the process.",
            correctFeedbackRu: "Правильно! 'Are added' — множественное число. Паттерн 'cause + дополнение + to + инфинитив' распространён в научных объяснениях. Пассивный залог позволяет не указывать, кто добавляет, сосредоточиваясь на процессе.",
            incorrectFeedback: "'Chemical coagulants' is plural — use 'are'. 'Add' is active voice (someone adds them). The passive 'are added' is preferred in process descriptions because we want to focus on what happens, not on who does it.",
            incorrectFeedbackRu: "'Chemical coagulants' — множественное число, используем 'are'. 'Add' — активный залог. Пассивное 'are added' предпочтительнее в описаниях процессов, так как мы фокусируемся на том, что происходит."
        },
        {
            question: "Choose the correct form for the sedimentation stage:",
            questionRu: "Выберите правильную форму для этапа осаждения:",
            sentence: "The clumped particles _____ to sink to the bottom of large settlement tanks during sedimentation.",
            options: ["are allowed", "is allowed", "allow"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are allowed' — plural subject ('the clumped particles'). The structure 'subject + is/are + allowed + to + infinitive' is a passive construction with 'allow'. This pattern — passive with 'allow', 'require', 'expect' — is very common in formal process descriptions.",
            correctFeedbackRu: "Правильно! 'Are allowed' — множественное число. Структура 'subject + is/are + allowed + to + infinitive' — пассивная конструкция с 'allow'. Этот паттерн — пассив с 'allow', 'require', 'expect' — очень распространён в формальных описаниях.",
            incorrectFeedback: "'The clumped particles' is plural — use 'are', not 'is'. 'Allow' is active voice. The passive of 'allow someone to do something' is 'subject + is/are + allowed to do something'.",
            incorrectFeedbackRu: "'The clumped particles' — множественное число, используем 'are', а не 'is'. 'Allow' — активный залог. Пассив от 'allow someone to do something' — 'subject + is/are + allowed to do something'."
        },
        {
            question: "Select the correct passive option for the filtration step:",
            questionRu: "Выберите правильный пассивный вариант для этапа фильтрации:",
            sentence: "The water _____ through layers of sand and gravel to remove remaining fine particles.",
            options: ["is passed", "are passed", "is past"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is passed' — singular subject ('the water'). Important note: 'past' is an adjective or preposition (e.g., 'it is past midnight'), not the past participle of 'pass'. The past participle of the verb 'pass' is 'passed', not 'past'.",
            correctFeedbackRu: "Правильно! 'Is passed' — единственное число. Важно: 'past' — прилагательное или предлог, а не причастие прошедшего времени от 'pass'. Причастие прошедшего времени от глагола 'pass' — 'passed', а не 'past'.",
            incorrectFeedback: "'The water' is singular — use 'is'. 'Is past' is wrong: 'past' is not the past participle of the verb 'pass'. They are completely different words. 'Past' means 'previous' or 'beyond'; 'passed' is the verb form used in the passive.",
            incorrectFeedbackRu: "'The water' — единственное число, используем 'is'. 'Is past' неверно: 'past' — не причастие от глагола 'pass'. Это совершенно разные слова. 'Past' означает 'прошлый' или 'мимо'; 'passed' — глагольная форма."
        },
        {
            question: "Choose the correct passive construction for the disinfection stage:",
            questionRu: "Выберите правильную пассивную конструкцию для этапа дезинфекции:",
            sentence: "Chlorine or ultraviolet light _____ to kill any remaining bacteria and pathogens.",
            options: ["is used", "are used", "using"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is used' — when two subjects are joined by 'or', the verb agrees with the noun closest to it ('ultraviolet light' — singular). This is different from 'and', where two subjects always require a plural verb. With 'or/nor', match the verb to the nearer subject.",
            correctFeedbackRu: "Правильно! 'Is used' — когда два подлежащих соединены 'or', глагол согласуется с ближайшим существительным ('ultraviolet light' — единственное число). Это отличается от 'and', где два подлежащих всегда требуют множественное число.",
            incorrectFeedback: "When subjects are joined by 'or', the verb agrees with the nearest subject. Here that is 'ultraviolet light' (singular), so use 'is used'. 'Using' is a participle or gerund, not a finite verb — it cannot stand alone as the main verb.",
            incorrectFeedbackRu: "Когда подлежащие соединены 'or', глагол согласуется с ближайшим. Здесь это 'ultraviolet light' (единственное число), поэтому 'is used'. 'Using' — причастие или герундий, не может быть главным глаголом."
        },
        {
            question: "Complete the sentence about pH adjustment:",
            questionRu: "Дополните предложение о регулировке pH:",
            sentence: "The pH level of the water _____ before it is released into the distribution network.",
            options: ["is adjusted", "are adjusted", "is adjusting"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is adjusted' — singular subject ('the pH level'). The time clause 'before it is released' also uses present simple passive. In time clauses (before, after, when, as soon as), we use present simple even when describing future or habitual events.",
            correctFeedbackRu: "Правильно! 'Is adjusted' — единственное число. Временное придаточное 'before it is released' также использует Present Simple Passive. Во временных придаточных мы используем Present Simple, даже описывая будущие или привычные события.",
            incorrectFeedback: "'The pH level' is singular — use 'is adjusted'. 'Is adjusting' is present continuous passive, used for temporary ongoing actions. For a routine, controlled step in a process, present simple passive is the correct choice.",
            incorrectFeedbackRu: "'The pH level' — единственное число, используем 'is adjusted'. 'Is adjusting' — пассивный Present Continuous для временных действий. Для рутинного, контролируемого шага процесса правильный выбор — Present Simple Passive."
        },
        {
            question: "Select the correct passive form for this monitoring activity:",
            questionRu: "Выберите правильную форму пассивного залога для этой деятельности по мониторингу:",
            sentence: "Water samples _____ continuously throughout the treatment process to monitor quality.",
            options: ["are tested", "is tested", "are test"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are tested' — plural subject ('water samples'). The adverb 'continuously' can be placed between the auxiliary and past participle (are continuously tested) or after the past participle (are tested continuously). Both positions are grammatically correct.",
            correctFeedbackRu: "Правильно! 'Are tested' — множественное число. Наречие 'continuously' может стоять между вспомогательным и причастием (are continuously tested) или после причастия (are tested continuously). Оба положения грамматически верны.",
            incorrectFeedback: "'Water samples' is plural — use 'are'. 'Are test' is impossible: after 'are' you need the past participle 'tested', not the base form. Never use a base form after 'is' or 'are' in passive constructions.",
            incorrectFeedbackRu: "'Water samples' — множественное число, используем 'are'. 'Are test' невозможно: после 'are' нужно причастие 'tested', а не базовая форма."
        },
        {
            question: "Choose the correct passive option:",
            questionRu: "Выберите правильный пассивный вариант:",
            sentence: "Fluoride _____ in small quantities in some countries to help prevent tooth decay.",
            options: ["is added", "are added", "added"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is added' — 'fluoride' is an uncountable noun, always singular. The phrase 'in some countries' shows that this practice is not universal — a useful detail that distinguishes careful, accurate process descriptions from overly general ones.",
            correctFeedbackRu: "Правильно! 'Is added' — 'fluoride' несчитаемое, всегда единственное число. 'In some countries' показывает, что эта практика не универсальна — полезная деталь для точного описания процессов.",
            incorrectFeedback: "'Fluoride' is uncountable — it takes a singular verb: 'is added', not 'are added'. 'Added' alone cannot function as the present passive main verb — it needs the auxiliary 'is' to make a complete passive structure.",
            incorrectFeedbackRu: "'Fluoride' несчитаемое — принимает глагол единственного числа: 'is added', а не 'are added'. 'Added' само по себе не может быть пассивным глаголом в настоящем — ему нужен 'is'."
        },
        {
            question: "Select the correct form for the final distribution step:",
            questionRu: "Выберите правильную форму для последнего шага распределения:",
            sentence: "Once treatment is complete, the purified water _____ through underground pipes to homes and businesses.",
            options: ["is pumped", "are pumped", "is been pumped"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is pumped' — singular subject. The time clause 'once treatment is complete' uses present simple in a time clause — correct for habitual sequences. 'Is been pumped' does not exist: present simple passive = 'is pumped'; present perfect passive = 'has been pumped'.",
            correctFeedbackRu: "Правильно! 'Is pumped' — единственное число. Временное придаточное 'once treatment is complete' использует Present Simple — верно для привычных последовательностей. 'Is been pumped' не существует: Present Simple Passive = 'is pumped'; Present Perfect Passive = 'has been pumped'.",
            incorrectFeedback: "'The purified water' is singular — use 'is'. 'Is been pumped' is not valid English. The passive voice forms are: present simple = is/are + past participle; present continuous = is/are + being + past participle. 'Is been' is not a recognised structure.",
            incorrectFeedbackRu: "'The purified water' — единственное число, используем 'is'. 'Is been pumped' — недопустимый английский. Формы пассива: Present Simple = is/are + причастие; Present Continuous = is/are + being + причастие. 'Is been' не является признанной структурой."
        }
    ]
};

/* ============================================
Page 5: Paper Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-page5'] = {
    title: "Process Description - Paper Manufacturing",
    multipleChoice: [
        {
            question: "Choose the correct passive form for the first step:",
            questionRu: "Выберите правильную форму пассивного залога для первого шага:",
            sentence: "Trees _____ in sustainably managed forests and transported to the paper mill.",
            options: ["are felled", "is felled", "are fell"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are felled' — plural subject ('trees'). 'Fell' here is used as a verb meaning 'to cut down a tree' — it is different from 'fall'. The past participle is 'felled'. The parallel structure 'are felled...and transported' shows two consecutive steps sharing the same auxiliary.",
            correctFeedbackRu: "Правильно! 'Are felled' — множественное число. 'Fell' здесь — глагол со значением 'срубить дерево', он отличается от 'fall'. Причастие прошедшего времени — 'felled'. Параллельная структура 'are felled...and transported' показывает два шага с общим вспомогательным.",
            incorrectFeedback: "'Trees' is plural — use 'are'. 'Are fell' is impossible: 'fell' is the simple past of 'fall', not a past participle. To form the passive of 'to fell a tree', use 'are felled' (past participle with -ed).",
            incorrectFeedbackRu: "'Trees' — множественное число, используем 'are'. 'Are fell' невозможно: 'fell' — простое прошедшее от 'fall', а не причастие. Для пассива от 'to fell a tree' используем 'are felled'."
        },
        {
            question: "Select the correct passive form for the debarking stage:",
            questionRu: "Выберите правильную форму пассивного залога для этапа окорки:",
            sentence: "The bark _____ from the logs using high-pressure water jets or rotating drums.",
            options: ["is stripped", "are stripped", "is stripping"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is stripped' — singular subject ('the bark'). The phrase 'using high-pressure water jets or rotating drums' is a participial phrase describing the method. In process descriptions, 'using + noun phrase' is a concise alternative to 'by means of + noun phrase'.",
            correctFeedbackRu: "Правильно! 'Is stripped' — единственное число ('the bark'). 'Using high-pressure water jets or rotating drums' — причастный оборот, описывающий метод. 'Using + именная группа' — краткая альтернатива 'by means of'.",
            incorrectFeedback: "'The bark' is singular — use 'is', not 'are'. 'Is stripping' is present continuous passive, implying a temporary ongoing action. For a standard manufacturing step, use present simple passive: 'is stripped'.",
            incorrectFeedbackRu: "'The bark' — единственное число, используем 'is', а не 'are'. 'Is stripping' — пассивный Present Continuous для временного действия. Для стандартного производственного шага используйте Present Simple Passive: 'is stripped'."
        },
        {
            question: "Complete the description of the pulping process:",
            questionRu: "Дополните описание процесса получения целлюлозы:",
            sentence: "The debarked wood _____ into small chips before it enters the pulping stage.",
            options: ["is chipped", "are chipped", "is chipping"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is chipped' — singular subject ('the debarked wood'). The time clause 'before it enters the pulping stage' uses 'it' to refer back to 'the debarked wood' — using a pronoun avoids repeating the full noun phrase and makes the writing more fluent.",
            correctFeedbackRu: "Правильно! 'Is chipped' — единственное число. В придаточном 'before it enters' местоимение 'it' отсылает к 'the debarked wood' — использование местоимения делает текст более плавным.",
            incorrectFeedback: "'The debarked wood' is singular — use 'is'. 'Is chipping' is present continuous passive, not appropriate for a regular process step. Use present simple passive 'is chipped' for routine industrial procedures.",
            incorrectFeedbackRu: "'The debarked wood' — единственное число, используем 'is'. 'Is chipping' — пассивный Present Continuous, не подходящий для регулярного шага. Используйте Present Simple Passive 'is chipped'."
        },
        {
            question: "Choose the correct passive construction for the pulping stage:",
            questionRu: "Выберите правильную пассивную конструкцию для этапа производства целлюлозы:",
            sentence: "The wood chips _____ with chemicals and water to break down the fibres.",
            options: ["are treated", "is treated", "are treating"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are treated' — plural subject ('the wood chips'). 'Treated with' in the passive means chemical substances are applied to something. Compare: 'treated with chemicals' (passive — someone applies chemicals to the chips) vs. 'treats the chips with chemicals' (active).",
            correctFeedbackRu: "Правильно! 'Are treated' — множественное число. 'Treated with' означает, что химические вещества наносятся на что-либо. Сравните: 'treated with chemicals' (пассив) и 'treats the chips with chemicals' (актив).",
            incorrectFeedback: "'The wood chips' is plural — use 'are'. 'Are treating' is present continuous active — the chips are treating something. The passive 'are treated' correctly shows the chips receive the treatment.",
            incorrectFeedbackRu: "'The wood chips' — множественное число, используем 'are'. 'Are treating' — активный Present Continuous. Пассивное 'are treated' правильно показывает, что чипсы получают обработку."
        },
        {
            question: "Select the correct form for this bleaching step:",
            questionRu: "Выберите правильную форму для этого этапа отбеливания:",
            sentence: "The pulp _____ several times to achieve the desired brightness and whiteness.",
            options: ["is bleached", "are bleached", "bleached"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is bleached' — singular subject ('the pulp'). The adverb 'several times' indicates frequency, supporting the use of present simple for a repeated action. 'Bleached' alone without 'is' cannot function as the main present passive verb.",
            correctFeedbackRu: "Правильно! 'Is bleached' — единственное число. 'Several times' указывает на частоту, что поддерживает использование Present Simple. 'Bleached' без 'is' не может быть пассивным глаголом в настоящем времени.",
            incorrectFeedback: "'The pulp' is singular (uncountable) — use 'is', not 'are'. 'Bleached' alone without the auxiliary 'is' cannot be the main verb in a present tense sentence — it reads as an adjective or past simple.",
            incorrectFeedbackRu: "'The pulp' — единственное число (несчитаемое), используем 'is', а не 'are'. 'Bleached' без вспомогательного 'is' не может быть главным глаголом в настоящем времени."
        },
        {
            question: "Choose the correct passive option for forming the paper sheet:",
            questionRu: "Выберите правильный пассивный вариант для формирования листа бумаги:",
            sentence: "The pulp mixture _____ onto a moving wire mesh screen where water drains away.",
            options: ["is sprayed", "are sprayed", "is spray"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is sprayed' — singular subject ('the pulp mixture'). The relative clause 'where water drains away' describes the location. Notice that 'drains' is active voice — water drains naturally without being controlled, so active voice is appropriate there.",
            correctFeedbackRu: "Правильно! 'Is sprayed' — единственное число. Придаточное 'where water drains away' описывает местоположение. 'Drains' — активный залог: вода стекает естественно, без контроля, поэтому активный залог уместен.",
            incorrectFeedback: "'The pulp mixture' is singular — use 'is'. 'Is spray' is wrong: after 'is' you need the past participle 'sprayed', not the base form 'spray'. Base forms only follow modal verbs.",
            incorrectFeedbackRu: "'The pulp mixture' — единственное число, используем 'is'. 'Is spray' неверно: после 'is' нужно причастие 'sprayed', а не базовая форма."
        },
        {
            question: "Complete the sentence about pressing and drying:",
            questionRu: "Дополните предложение о прессовании и сушке:",
            sentence: "Excess water _____ out of the paper sheet by heavy rollers in the press section.",
            options: ["is squeezed", "are squeezed", "is squeezing"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is squeezed' — 'excess water' is uncountable and singular. The agent 'by heavy rollers' names the tool that performs the action. When the agent is a machine or tool rather than a person, we still use 'by' in the passive.",
            correctFeedbackRu: "Правильно! 'Is squeezed' — 'excess water' несчитаемое, единственное число. 'By heavy rollers' называет инструмент. Когда агент — машина или инструмент, а не человек, в пассивном залоге мы всё равно используем 'by'.",
            incorrectFeedback: "'Excess water' is uncountable and singular — use 'is'. 'Is squeezing' is present continuous passive, implying a temporary action. For a regular manufacturing step, present simple passive 'is squeezed' is more appropriate.",
            incorrectFeedbackRu: "'Excess water' несчитаемое, единственное число — используем 'is'. 'Is squeezing' — пассивный Present Continuous для временного действия. Для регулярного производственного шага уместнее Present Simple Passive 'is squeezed'."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную форму пассивного залога:",
            sentence: "The paper _____ over heated cylinders to remove the remaining moisture.",
            options: ["is passed", "are passed", "is past"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is passed' — singular subject ('the paper'). Again, remember: 'past' is not the past participle of 'pass'. The past participle is 'passed'. 'To remove the remaining moisture' is a purpose infinitive — a key structure in process descriptions.",
            correctFeedbackRu: "Правильно! 'Is passed' — единственное число. Помните: 'past' — не причастие от 'pass'. Причастие прошедшего времени — 'passed'. 'To remove the remaining moisture' — инфинитив цели, ключевая структура в описаниях процессов.",
            incorrectFeedback: "'The paper' is singular — use 'is'. 'Is past' is wrong: 'past' (meaning previous or beyond) is not the past participle of 'pass'. The correct past participle is 'passed'. These two words are not related.",
            incorrectFeedbackRu: "'The paper' — единственное число, используем 'is'. 'Is past' неверно: 'past' (прошлый или за пределами) — не причастие от 'pass'. Правильное причастие — 'passed'. Эти два слова не связаны."
        },
        {
            question: "Choose the correct passive option for surface treatment:",
            questionRu: "Выберите правильный пассивный вариант для обработки поверхности:",
            sentence: "A smooth surface finish _____ by applying a coating of starch or chalk to the paper.",
            options: ["is achieved", "are achieved", "is achieve"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is achieved' — singular subject ('a smooth surface finish'). The method is expressed with 'by + -ing': 'by applying a coating'. This 'by + gerund' structure explains how a result is brought about — it is different from 'by + agent' (who does it).",
            correctFeedbackRu: "Правильно! 'Is achieved' — единственное число. Метод выражен с 'by + -ing': 'by applying a coating'. Структура 'by + герундий' объясняет, как достигается результат, в отличие от 'by + агент' (кто это делает).",
            incorrectFeedback: "'A smooth surface finish' is singular — use 'is'. 'Is achieve' is wrong: the passive requires the past participle 'achieved', not the base form. Note also the 'by + gerund' structure (by applying), which describes the method used.",
            incorrectFeedbackRu: "'A smooth surface finish' — единственное число, используем 'is'. 'Is achieve' неверно: пассив требует причастия 'achieved', а не базовой формы. Также обратите на структуру 'by + герундий', описывающую метод."
        },
        {
            question: "Select the correct passive form for the final step:",
            questionRu: "Выберите правильную форму пассивного залога для последнего шага:",
            sentence: "The finished paper _____ into reels of various widths and dispatched to printing companies.",
            options: ["is wound", "are wound", "is winded"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is wound' — singular subject. Important: 'wind' (to roll up) has the irregular past participle 'wound' (rhymes with 'found'). 'Winded' means out of breath and is a completely different word. Irregular verbs like 'wind/wound/wound' must be memorised.",
            correctFeedbackRu: "Правильно! 'Is wound' — единственное число. Важно: 'wind' (наматывать) имеет неправильное причастие 'wound' (рифмуется с 'found'). 'Winded' означает 'запыхавшийся' — совершенно другое слово.",
            incorrectFeedback: "'The finished paper' is singular — use 'is'. 'Is winded' is wrong: the past participle of 'wind' (to roll/coil) is 'wound', not 'winded'. 'Winded' means short of breath and is unrelated. Always verify irregular past participles before forming the passive.",
            incorrectFeedbackRu: "'The finished paper' — единственное число, используем 'is'. 'Is winded' неверно: причастие от 'wind' (наматывать) — 'wound', а не 'winded'. 'Winded' означает 'запыхавшийся' и не связано. Всегда проверяйте неправильные причастия."
        }
    ]
};
/* ============================================
Page 6: Chocolate Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-page6'] = {
    title: "Process Description - Chocolate Manufacturing",
    multipleChoice: [
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную форму пассивного залога:",
            sentence: "Cacao pods _____ by hand from the cacao trees when they are fully ripe.",
            options: ["are harvested", "is harvested", "are harvest"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are harvested' — plural subject ('cacao pods'). The agent 'by hand' indicates the method (manual labour). The time clause 'when they are fully ripe' uses present simple to describe the condition for harvesting — a standard detail in accurate process descriptions.",
            correctFeedbackRu: "Правильно! 'Are harvested' — множественное число. 'By hand' указывает метод (ручной труд). 'When they are fully ripe' использует Present Simple для описания условия — стандартная деталь точных описаний процессов.",
            incorrectFeedback: "'Cacao pods' is plural — use 'are'. 'Are harvest' is impossible: after 'are' you need the past participle 'harvested', not the base form 'harvest'. Base forms only come after modal verbs.",
            incorrectFeedbackRu: "'Cacao pods' — множественное число, используем 'are'. 'Are harvest' невозможно: после 'are' нужно причастие 'harvested', а не базовая форма."
        },
        {
            question: "Select the correct form for the fermentation stage:",
            questionRu: "Выберите правильную форму для этапа ферментации:",
            sentence: "The cacao beans _____ under banana leaves for up to a week to develop their flavour.",
            options: ["are fermented", "is fermented", "are fermenting"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are fermented' — plural subject. The duration 'for up to a week' combined with the purpose 'to develop their flavour' gives both the time and reason for this step. This combination is typical of detailed, B2-level process descriptions.",
            correctFeedbackRu: "Правильно! 'Are fermented' — множественное число. Продолжительность 'for up to a week' в сочетании с целью 'to develop their flavour' даёт время и причину. Эта комбинация типична для детальных описаний уровня B2.",
            incorrectFeedback: "'The cacao beans' is plural — use 'are'. 'Are fermenting' is present continuous active — the beans are fermenting something else. The passive 'are fermented' shows the beans receive the action and emphasises deliberate human control over the process.",
            incorrectFeedbackRu: "'The cacao beans' — множественное число, используем 'are'. 'Are fermenting' — активный Present Continuous. Пассивное 'are fermented' показывает намеренный контроль над процессом."
        },
        {
            question: "Complete the process description correctly:",
            questionRu: "Правильно дополните описание процесса:",
            sentence: "After fermentation, the beans _____ in the sun or in drying chambers for several days.",
            options: ["are dried", "is dried", "dry"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are dried' — plural subject. 'After fermentation' is a sequence marker. The two options ('in the sun or in drying chambers') show the method can vary. Using the passive here emphasises that the drying is deliberately controlled, not simply natural evaporation.",
            correctFeedbackRu: "Правильно! 'Are dried' — множественное число. 'After fermentation' — маркер последовательности. Два варианта показывают, что метод может варьироваться. Пассивный залог подчёркивает намеренный контроль, а не просто естественное испарение.",
            incorrectFeedback: "'The beans' is plural — use 'are'. 'Dry' is active voice (the beans dry naturally). Using the passive 'are dried' signals that the drying is a deliberate, controlled step in the process, not a natural event.",
            incorrectFeedbackRu: "'The beans' — множественное число, используем 'are'. 'Dry' — активный залог (зёрна сохнут естественно). Пассивное 'are dried' сигнализирует о намеренном, контролируемом шаге."
        },
        {
            question: "Choose the correct passive construction:",
            questionRu: "Выберите правильную пассивную конструкцию:",
            sentence: "The dried beans _____ in bags and shipped to chocolate factories in other countries.",
            options: ["are packed", "is packed", "are packing"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are packed' — plural subject. The parallel structure 'are packed...and shipped' uses two passive verbs sharing the auxiliary 'are'. This efficient structure avoids repetition and is typical of formal written process descriptions.",
            correctFeedbackRu: "Правильно! 'Are packed' — множественное число. Параллельная структура 'are packed...and shipped' использует два пассивных глагола с общим 'are'. Это эффективная структура, типичная для формальных описаний процессов.",
            incorrectFeedback: "'The dried beans' is plural — use 'are'. 'Are packing' is present continuous active — the beans are packing something. The passive 'are packed' shows the beans receive the action of being packaged.",
            incorrectFeedbackRu: "'The dried beans' — множественное число, используем 'are'. 'Are packing' — активный Present Continuous. Пассивное 'are packed' показывает, что зёрна получают действие."
        },
        {
            question: "Select the correct passive form for the roasting stage:",
            questionRu: "Выберите правильную форму пассивного залога для этапа обжарки:",
            sentence: "At the factory, the beans _____ to bring out their complex chocolate flavours.",
            options: ["are roasted", "is roasted", "have been roasting"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are roasted' — plural subject. The phrasal verb 'bring out' here means 'enhance or intensify a quality'. 'Have been roasting' is present perfect continuous active — it describes an action in progress over time, not a standard process step.",
            correctFeedbackRu: "Правильно! 'Are roasted' — множественное число. 'Bring out' означает 'усилить качество'. 'Have been roasting' — активный Present Perfect Continuous, описывает действие в процессе, а не стандартный шаг.",
            incorrectFeedback: "'The beans' is plural — use 'are'. 'Have been roasting' is present perfect continuous active, which describes a prolonged ongoing action, not a routine industrial step. Use present simple passive 'are roasted' for standard procedures.",
            incorrectFeedbackRu: "'The beans' — множественное число, используем 'are'. 'Have been roasting' — активный Present Perfect Continuous, описывает длительное действие, а не рутинный шаг. Используйте 'are roasted'."
        },
        {
            question: "Complete the grinding step correctly:",
            questionRu: "Правильно дополните шаг измельчения:",
            sentence: "The roasted beans _____ into a thick liquid called chocolate liquor.",
            options: ["are ground", "are grounded", "is ground"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are ground' — irregular past participle ('grind / ground / ground'). 'Are grounded' is a different word: 'grounded' means 'not allowed to fly' or 'having a stable foundation'. Always verify irregular past participles — confusing 'ground' and 'grounded' is a common B2-level error.",
            correctFeedbackRu: "Правильно! 'Are ground' — неправильное причастие ('grind / ground / ground'). 'Are grounded' — другое слово: 'grounded' означает 'не имеющий права летать' или 'заземлённый'. Всегда проверяйте неправильные причастия.",
            incorrectFeedback: "'Are grounded' is wrong — 'grounded' is the past participle of 'ground' (adjective) meaning earthed/not flying, not of 'grind'. The verb 'grind' (to crush) has the irregular past participle 'ground'. The subject 'the roasted beans' is plural, so use 'are'.",
            incorrectFeedbackRu: "'Are grounded' неверно — 'grounded' — причастие от 'ground' (прилагательного) со значением 'заземлённый', а не от 'grind'. Глагол 'grind' (измельчать) имеет неправильное причастие 'ground'."
        },
        {
            question: "Choose the correct passive option for the conching step:",
            questionRu: "Выберите правильный пассивный вариант для этапа конширования:",
            sentence: "The chocolate mixture _____ continuously for several hours in a process called conching.",
            options: ["is stirred", "are stirred", "is stirring"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is stirred' — singular ('the chocolate mixture'). The adverb 'continuously' follows the auxiliary. The phrase 'in a process called conching' introduces the technical name — the structure 'in a process called + name' is a useful B2 pattern for naming industrial techniques.",
            correctFeedbackRu: "Правильно! 'Is stirred' — единственное число. 'Continuously' следует за вспомогательным. 'In a process called conching' вводит техническое название — полезный паттерн для обозначения промышленных техник.",
            incorrectFeedback: "'The chocolate mixture' is singular — use 'is'. 'Is stirring' is present continuous passive, emphasising a temporary current action. A standard manufacturing step in a process description should use present simple passive: 'is stirred'.",
            incorrectFeedbackRu: "'The chocolate mixture' — единственное число, используем 'is'. 'Is stirring' — пассивный Present Continuous, подчёркивает временное действие. Стандартный шаг производства должен использовать Present Simple Passive: 'is stirred'."
        },
        {
            question: "Select the correct passive form for tempering:",
            questionRu: "Выберите правильную форму пассивного залога для темперирования:",
            sentence: "The chocolate _____ to precise temperatures to ensure it sets with the right texture and shine.",
            options: ["is tempered", "are tempered", "is tempering"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is tempered' — singular subject ('the chocolate'). The purpose clause 'to ensure it sets with the right texture and shine' explains why tempering is done. Note that 'sets' (hardens) is in the active voice — solidification happens naturally once the right temperature is reached.",
            correctFeedbackRu: "Правильно! 'Is tempered' — единственное число. Целевое предложение объясняет, зачем выполняется темперирование. 'Sets' (затвердевает) — активный залог: затвердевание происходит естественно при правильной температуре.",
            incorrectFeedback: "'The chocolate' is singular — use 'is'. 'Is tempering' is present continuous passive — not suitable for a regular process step. Present simple passive 'is tempered' correctly describes this controlled, routine procedure.",
            incorrectFeedbackRu: "'The chocolate' — единственное число, используем 'is'. 'Is tempering' — пассивный Present Continuous, не подходящий для регулярного шага. Present Simple Passive 'is tempered' правильно описывает эту рутинную процедуру."
        },
        {
            question: "Choose the correct form for the moulding step:",
            questionRu: "Выберите правильную форму для этапа формовки:",
            sentence: "The liquid chocolate _____ into moulds and allowed to set at a controlled temperature.",
            options: ["is poured", "are poured", "is been poured"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is poured' — singular subject. The construction 'is poured...and allowed to set' shows two consecutive passive actions sharing the auxiliary 'is'. 'Is been poured' is not valid — present simple passive = 'is poured'; present perfect passive = 'has been poured'.",
            correctFeedbackRu: "Правильно! 'Is poured' — единственное число. 'Is poured...and allowed to set' показывает два последовательных пассивных действия с общим 'is'. 'Is been poured' недопустимо: Present Simple Passive = 'is poured'; Present Perfect Passive = 'has been poured'.",
            incorrectFeedback: "'The liquid chocolate' is singular — use 'is'. 'Is been poured' does not exist in English grammar. The two passive tenses to know are: present simple ('is poured') and present perfect ('has been poured'). Never combine 'is' with 'been'.",
            incorrectFeedbackRu: "'The liquid chocolate' — единственное число, используем 'is'. 'Is been poured' не существует. Два пассивных времени: Present Simple ('is poured') и Present Perfect ('has been poured'). Никогда не сочетайте 'is' с 'been'."
        },
        {
            question: "Select the correct passive option for packaging:",
            questionRu: "Выберите правильный пассивный вариант для упаковки:",
            sentence: "Each chocolate bar _____ for weight, appearance, and quality before it leaves the factory.",
            options: ["is checked", "are checked", "is checking"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is checked' — 'each chocolate bar' is singular. The determiner 'each' always takes a singular verb, even when referring to many items. 'Each bar is checked' means every individual bar goes through quality control. Compare: 'All bars are checked' (plural) vs. 'Each bar is checked' (singular).",
            correctFeedbackRu: "Правильно! 'Is checked' — 'each chocolate bar' — единственное число. 'Each' всегда принимает глагол единственного числа. Сравните: 'All bars are checked' (множественное) vs. 'Each bar is checked' (единственное).",
            incorrectFeedback: "'Each' always takes a singular verb — use 'is checked', not 'are checked'. This is an important grammar rule: 'each/every + noun' = singular verb. 'Is checking' is present continuous passive, not suitable for a regular process step.",
            incorrectFeedbackRu: "'Each' всегда принимает глагол единственного числа — используем 'is checked', а не 'are checked'. Важное правило: 'each/every + существительное' = глагол единственного числа."
        }
    ]
};

/* ============================================
Page 7: Steel Production
============================================ */
window.grammarExercises['passive']['process-description-page7'] = {
    title: "Process Description - Steel Production",
    multipleChoice: [
        {
            question: "Choose the correct passive form for this industrial process:",
            questionRu: "Выберите правильную форму пассивного залога для этого промышленного процесса:",
            sentence: "Iron ore _____ from open-pit mines or underground mines across the world.",
            options: ["is mined", "are mined", "is mining"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is mined' — 'iron ore' is uncountable and singular. Note that 'mine' is used here as a verb meaning 'to extract from the ground', not as the noun 'a place where minerals are extracted'. Context clarifies meaning.",
            correctFeedbackRu: "Правильно! 'Is mined' — 'iron ore' несчитаемое, единственное число. 'Mine' здесь — глагол со значением 'добывать из земли', а не существительное 'шахта'. Контекст прояснят значение.",
            incorrectFeedback: "'Iron ore' is uncountable — it uses a singular verb: 'is mined'. 'Is mining' is present continuous passive, used for temporary ongoing actions, not regular industrial processes. Always use present simple passive for standard process descriptions.",
            incorrectFeedbackRu: "'Iron ore' несчитаемое — принимает глагол единственного числа: 'is mined'. 'Is mining' — пассивный Present Continuous для временных действий. Для стандартных описаний процессов всегда используйте Present Simple Passive."
        },
        {
            question: "Select the correct passive form:",
            questionRu: "Выберите правильную форму пассивного залога:",
            sentence: "The ore _____ to remove impurities before it is smelted in a blast furnace.",
            options: ["is processed", "are processed", "is been processed"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is processed' — 'the ore' is singular. The sentence 'before it is smelted' uses 'it' to refer to 'the ore' and 'is smelted' is also present simple passive. Consistent tense and voice throughout makes process descriptions clear.",
            correctFeedbackRu: "Правильно! 'Is processed' — 'the ore' единственного числа. 'Before it is smelted' использует Present Simple Passive. Последовательное использование одного времени и залога делает описания процессов чёткими.",
            incorrectFeedback: "'The ore' is singular — use 'is'. 'Is been processed' is not valid English. Present simple passive = 'is processed'. Present perfect passive = 'has been processed'. Do not combine 'is' with 'been'.",
            incorrectFeedbackRu: "'The ore' — единственное число, используем 'is'. 'Is been processed' недопустим. Present Simple Passive = 'is processed'. Present Perfect Passive = 'has been processed'. Не сочетайте 'is' с 'been'."
        },
        {
            question: "Complete the blast furnace description:",
            questionRu: "Дополните описание доменной печи:",
            sentence: "In the blast furnace, the iron ore _____ with coke and limestone at very high temperatures.",
            options: ["is combined", "are combined", "is combining"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is combined' — singular subject. 'Combined with' in the passive describes materials being mixed or joined. Note: 'with' introduces the other material being added; 'by' would introduce the agent performing the action. These are different uses of prepositions in passive sentences.",
            correctFeedbackRu: "Правильно! 'Is combined' — единственное число. 'Combined with' в пассивном залоге описывает смешивание материалов. 'With' вводит другой добавляемый материал; 'by' вводил бы агента. Это разные использования предлогов.",
            incorrectFeedback: "'The iron ore' is singular — use 'is'. 'Is combining' is present continuous passive, describing an ongoing temporary action. In a description of a regular industrial process, use present simple passive: 'is combined'.",
            incorrectFeedbackRu: "'The iron ore' — единственное число, используем 'is'. 'Is combining' — пассивный Present Continuous для временного действия. Для регулярного промышленного процесса используйте Present Simple Passive: 'is combined'."
        },
        {
            question: "Choose the correct passive form for this steelmaking step:",
            questionRu: "Выберите правильную форму пассивного залога для этого шага производства стали:",
            sentence: "The molten iron _____ into a furnace where most of the carbon is burned off.",
            options: ["is transferred", "are transferred", "is transfer"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is transferred' — singular subject. The relative clause 'where most of the carbon is burned off' contains another passive construction. 'Burned off' is a phrasal verb in the passive — the particle 'off' stays with the verb in passive constructions.",
            correctFeedbackRu: "Правильно! 'Is transferred' — единственное число. Придаточное 'where most of the carbon is burned off' содержит ещё одну пассивную конструкцию. 'Burned off' — фразовый глагол в пассивном залоге, частица 'off' остаётся при глаголе.",
            incorrectFeedback: "'The molten iron' is singular — use 'is'. 'Is transfer' is incorrect: after 'is' you need the past participle 'transferred', not the base form 'transfer'. The pattern is always: is/are + past participle.",
            incorrectFeedbackRu: "'The molten iron' — единственное число, используем 'is'. 'Is transfer' неверно: после 'is' нужно причастие 'transferred', а не базовая форма."
        },
        {
            question: "Select the correct passive form for the oxygen injection step:",
            questionRu: "Выберите правильную форму пассивного залога для этапа кислородного дутья:",
            sentence: "Pure oxygen _____ into the molten iron to reduce the carbon content and produce steel.",
            options: ["is blown", "are blown", "is blowing"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is blown' — 'pure oxygen' is uncountable and singular. 'Blow' is irregular: blow / blew / blown. The purpose is expressed with 'to reduce the carbon content and produce steel' — two infinitives joined by 'and' and sharing the same 'to'.",
            correctFeedbackRu: "Правильно! 'Is blown' — 'pure oxygen' несчитаемое, единственное число. 'Blow' неправильный: blow / blew / blown. Цель выражена с 'to reduce...and produce' — два инфинитива, соединённых 'and'.",
            incorrectFeedback: "'Pure oxygen' is uncountable and singular — use 'is'. 'Blow' is irregular: its past participle is 'blown', not 'blowed'. 'Is blowing' is present continuous passive — not suitable for a controlled industrial step.",
            incorrectFeedbackRu: "'Pure oxygen' несчитаемое, единственное число — используем 'is'. 'Blow' неправильный: причастие — 'blown', а не 'blowed'. 'Is blowing' — пассивный Present Continuous, не подходящий для контролируемого промышленного шага."
        },
        {
            question: "Complete the sentence about alloying:",
            questionRu: "Дополните предложение о легировании:",
            sentence: "Specific alloying elements such as chromium or nickel _____ depending on the type of steel required.",
            options: ["are added", "is added", "adding"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are added' — the main subject is 'alloying elements' (plural). 'Such as chromium or nickel' provides examples and does not change the subject number. The phrase 'depending on the type required' adds conditionality, which is typical in realistic process descriptions.",
            correctFeedbackRu: "Правильно! 'Are added' — главное подлежащее 'alloying elements' (множественное число). 'Such as chromium or nickel' даёт примеры и не меняет число подлежащего. 'Depending on the type required' добавляет условность.",
            incorrectFeedback: "The main subject is 'alloying elements' (plural) — use 'are'. 'Such as chromium or nickel' is an example phrase and doesn't change the verb. 'Adding' is a gerund/participle and cannot be the main verb of the sentence.",
            incorrectFeedbackRu: "Главное подлежащее — 'alloying elements' (множественное число), используем 'are'. 'Such as chromium or nickel' — пример, не меняющий глагол. 'Adding' — герундий, не может быть главным глаголом."
        },
        {
            question: "Choose the correct passive option:",
            questionRu: "Выберите правильный пассивный вариант:",
            sentence: "The molten steel _____ into continuous casting machines to form slabs, blooms, or billets.",
            options: ["is fed", "are fed", "is feeding"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is fed' — singular subject ('the molten steel'). 'Feed' is irregular: feed / fed / fed. 'Fed into' in the passive means material is directed into a machine. The technical vocabulary 'slabs, blooms, or billets' reflects the precision expected in B2 process descriptions.",
            correctFeedbackRu: "Правильно! 'Is fed' — единственное число. 'Feed' неправильный: feed / fed / fed. 'Fed into' означает, что материал направляется в машину. Техническая лексика 'slabs, blooms, or billets' отражает точность, ожидаемую на уровне B2.",
            incorrectFeedback: "'The molten steel' is singular — use 'is'. 'Feed' is irregular: its past participle is 'fed', not 'feeded'. 'Is feeding' is present continuous passive — not appropriate for a regular process step.",
            incorrectFeedbackRu: "'The molten steel' — единственное число, используем 'is'. 'Feed' неправильный: причастие — 'fed', а не 'feeded'. 'Is feeding' — пассивный Present Continuous, не подходящий для регулярного шага."
        },
        {
            question: "Select the correct passive form for rolling:",
            questionRu: "Выберите правильную форму пассивного залога для прокатки:",
            sentence: "Steel slabs _____ through a series of rollers to reduce their thickness.",
            options: ["are passed", "is passed", "are passing"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are passed' — plural subject ('steel slabs'). The structure 'passive verb + through/into/over + noun + to + infinitive of purpose' is very typical of technical process descriptions and worth learning as a productive pattern.",
            correctFeedbackRu: "Правильно! 'Are passed' — множественное число. Структура 'пассивный глагол + through/into/over + существительное + to + инфинитив цели' очень типична для технических описаний процессов.",
            incorrectFeedback: "'Steel slabs' is plural — use 'are'. 'Are passing' is present continuous active — the slabs are passing through on their own. In an industrial process, slabs don't move independently; machinery controls them. Use the passive to show this control.",
            incorrectFeedbackRu: "'Steel slabs' — множественное число, используем 'are'. 'Are passing' — активный Present Continuous. В промышленном процессе слябы не движутся самостоятельно. Пассивный залог показывает этот контроль."
        },
        {
            question: "Complete the sentence about heat treatment:",
            questionRu: "Дополните предложение о термической обработке:",
            sentence: "Certain types of steel _____ to improve their mechanical properties such as hardness and flexibility.",
            options: ["are heat-treated", "is heat-treated", "are heat-treating"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are heat-treated' — plural subject ('certain types of steel'). Hyphenated compound verbs like 'heat-treat', 'cold-roll', and 'air-dry' keep the hyphen in all forms. The phrase 'such as hardness and flexibility' gives concrete examples of properties — a useful B2 vocabulary pattern.",
            correctFeedbackRu: "Правильно! 'Are heat-treated' — множественное число. Составные глаголы с дефисом, такие как 'heat-treat', сохраняют дефис во всех формах. 'Such as hardness and flexibility' приводит примеры свойств.",
            incorrectFeedback: "'Certain types of steel' is plural — use 'are'. 'Is heat-treated' uses singular 'is', which doesn't agree with the plural subject. 'Are heat-treating' is active continuous — the steel would be treating something.",
            incorrectFeedbackRu: "'Certain types of steel' — множественное число, используем 'are'. 'Is heat-treated' использует единственное число, не согласующееся с подлежащим. 'Are heat-treating' — активный Continuous."
        },
        {
            question: "Choose the correct passive form for the final quality stage:",
            questionRu: "Выберите правильную форму пассивного залога для последнего этапа контроля качества:",
            sentence: "The steel products _____ according to international standards before they are approved for sale.",
            options: ["are tested", "is tested", "are been tested"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are tested' — plural subject. The formal phrase 'according to international standards' means 'in line with official requirements'. The time clause 'before they are approved for sale' also uses present simple passive, maintaining consistent tense and voice.",
            correctFeedbackRu: "Правильно! 'Are tested' — множественное число. 'According to international standards' означает 'в соответствии с официальными требованиями'. Придаточное 'before they are approved' также использует Present Simple Passive.",
            incorrectFeedback: "'The steel products' is plural — use 'are'. 'Are been tested' is not valid English. Present simple passive = 'are tested'; present perfect passive = 'have been tested'. These are two different tenses with different meanings — never mix their structures.",
            incorrectFeedbackRu: "'The steel products' — множественное число, используем 'are'. 'Are been tested' недопустим. Present Simple Passive = 'are tested'; Present Perfect Passive = 'have been tested'. Не смешивайте их структуры."
        }
    ]
};

/* ============================================
Page 8: Industrial Bread Baking
============================================ */
window.grammarExercises['passive']['process-description-page8'] = {
    title: "Process Description - Industrial Bread Baking",
    multipleChoice: [
        {
            question: "Choose the correct passive form:",
            questionRu: "Выберите правильную форму пассивного залога:",
            sentence: "The ingredients, including flour, water, yeast, and salt, _____ automatically by computer-controlled machines.",
            options: ["are weighed", "is weighed", "are weighing"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are weighed' — the main subject is 'the ingredients' (plural). 'Including flour, water, yeast, and salt' is a parenthetical phrase in commas — it provides examples but does not change the plural subject. The agent 'by computer-controlled machines' shows what performs the action.",
            correctFeedbackRu: "Правильно! 'Are weighed' — главное подлежащее 'the ingredients' (множественное число). 'Including flour, water, yeast, and salt' — вводная фраза в запятых, которая не меняет число подлежащего. 'By computer-controlled machines' показывает, что выполняет действие.",
            incorrectFeedback: "'The ingredients' is plural — use 'are'. The 'including...' phrase lists examples but does not change the subject number. 'Are weighing' is active continuous, meaning the ingredients are weighing something. Use passive 'are weighed'.",
            incorrectFeedbackRu: "'The ingredients' — множественное число, используем 'are'. Фраза 'including...' не меняет число подлежащего. 'Are weighing' — активный Continuous. Используйте пассивное 'are weighed'."
        },
        {
            question: "Select the correct passive option for mixing:",
            questionRu: "Выберите правильный пассивный вариант для замеса:",
            sentence: "The weighed ingredients _____ into a large mixing bowl and combined for approximately ten minutes.",
            options: ["are placed", "is placed", "were placed"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are placed' — plural subject. 'Are placed...and combined' — two passive verbs sharing the auxiliary 'are'. The duration 'for approximately ten minutes' is a common process description phrase indicating how long a step takes.",
            correctFeedbackRu: "Правильно! 'Are placed' — множественное число. 'Are placed...and combined' — два пассивных глагола с общим 'are'. 'For approximately ten minutes' — распространённая фраза, указывающая продолжительность шага.",
            incorrectFeedback: "'The weighed ingredients' is plural — use 'are'. 'Were placed' is past simple passive — it describes what happened at a specific past time, not a regular current process. For a standard process description, use present simple passive.",
            incorrectFeedbackRu: "'The weighed ingredients' — множественное число, используем 'are'. 'Were placed' — Past Simple Passive, описывает конкретный прошлый момент. Для стандартного описания процессов используйте Present Simple Passive."
        },
        {
            question: "Complete the description of the dough preparation:",
            questionRu: "Дополните описание приготовления теста:",
            sentence: "The dough _____ in a warm environment for about an hour until it doubles in size.",
            options: ["is left", "are left", "is leaving"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is left' — singular subject ('the dough'). The construction 'is left to rise / is left in a warm environment' uses passive with 'leave' to mean 'allowed to remain in a certain state'. 'Until it doubles in size' is a natural result clause using present simple.",
            correctFeedbackRu: "Правильно! 'Is left' — единственное число. 'Is left in a warm environment' — пассив с 'leave' означает 'позволить оставаться в определённом состоянии'. 'Until it doubles in size' — придаточное результата в Present Simple.",
            incorrectFeedback: "'The dough' is singular (uncountable) — use 'is', not 'are'. 'Is leaving' is present continuous passive, implying a temporary action. Present simple passive 'is left' correctly describes this controlled, routine stage.",
            incorrectFeedbackRu: "'The dough' — единственное число (несчитаемое), используем 'is', а не 'are'. 'Is leaving' — пассивный Present Continuous для временного действия. Present Simple Passive 'is left' правильно описывает этот рутинный этап."
        },
        {
            question: "Choose the correct passive form for the shaping stage:",
            questionRu: "Выберите правильную форму пассивного залога для этапа формовки:",
            sentence: "After proving, the dough _____ into portions and shaped by automated equipment.",
            options: ["is divided", "are divided", "is been divided"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is divided' — singular subject ('the dough'). 'After proving' uses the noun 'proving' (the process of allowing dough to rise). The parallel passive 'is divided...and shaped' shows two steps in the same stage sharing the auxiliary 'is'.",
            correctFeedbackRu: "Правильно! 'Is divided' — единственное число. 'After proving' использует существительное 'proving' (процесс расстойки теста). Параллельный пассив 'is divided...and shaped' показывает два шага с общим 'is'.",
            incorrectFeedback: "'The dough' is singular — use 'is'. 'Is been divided' is not valid English grammar. Present simple passive = 'is divided'. Present perfect passive = 'has been divided'. Never write 'is been + past participle'.",
            incorrectFeedbackRu: "'The dough' — единственное число, используем 'is'. 'Is been divided' недопустима в английской грамматике. Present Simple Passive = 'is divided'. Никогда не пишите 'is been + причастие'."
        },
        {
            question: "Select the correct passive option for the second proving stage:",
            questionRu: "Выберите правильный пассивный вариант для второго этапа расстойки:",
            sentence: "The shaped loaves _____ in a warm, humid proving chamber for a second time.",
            options: ["are placed", "is placed", "placed"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are placed' — plural subject ('the shaped loaves'). 'For a second time' indicates this is a repeated proving stage — bread typically proves twice. The descriptors 'warm, humid' show the controlled conditions, which is characteristic of precise technical writing.",
            correctFeedbackRu: "Правильно! 'Are placed' — множественное число. 'For a second time' указывает на повторный этап расстойки. 'Warm, humid' описывает контролируемые условия — характерно для точного технического письма.",
            incorrectFeedback: "'The shaped loaves' is plural — use 'are'. 'Placed' alone cannot function as the present passive main verb — it needs the auxiliary 'are'. Without 'are', 'placed' reads as an adjective or past simple, neither of which fits a present process description.",
            incorrectFeedbackRu: "'The shaped loaves' — множественное число, используем 'are'. 'Placed' без вспомогательного 'are' не может быть пассивным глаголом в настоящем времени."
        },
        {
            question: "Choose the correct passive form for the baking stage:",
            questionRu: "Выберите правильную форму пассивного залога для этапа выпечки:",
            sentence: "The loaves _____ in tunnel ovens at temperatures of around 230 degrees Celsius.",
            options: ["are baked", "is baked", "are baking"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are baked' — plural subject ('the loaves'). 'In tunnel ovens' names the specific industrial equipment. Giving the precise temperature (230 degrees Celsius) is characteristic of technical writing. B2 learners should be able to include this level of scientific detail.",
            correctFeedbackRu: "Правильно! 'Are baked' — множественное число. 'In tunnel ovens' называет конкретное оборудование. Точное указание температуры характерно для технического письма уровня B2.",
            incorrectFeedback: "'The loaves' is plural — use 'are'. 'Are baking' is active continuous — the loaves would be baking something else. The passive 'are baked' correctly shows that heat acts on the loaves — they receive the action.",
            incorrectFeedbackRu: "'The loaves' — множественное число, используем 'are'. 'Are baking' — активный Continuous. Пассивное 'are baked' правильно показывает, что жар воздействует на хлебы."
        },
        {
            question: "Complete the cooling stage description:",
            questionRu: "Дополните описание этапа охлаждения:",
            sentence: "Immediately after baking, the loaves _____ on conveyor belts for at least 90 minutes.",
            options: ["are cooled", "is cooled", "are being cooled"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are cooled' — plural subject. The time phrase 'immediately after baking' signals the start of a new step. 'Are being cooled' is present continuous passive, implying a temporary action right now — not how we describe a regular process step.",
            correctFeedbackRu: "Правильно! 'Are cooled' — множественное число. 'Immediately after baking' сигнализирует о начале нового шага. 'Are being cooled' — пассивный Present Continuous, подразумевает временное действие сейчас, а не регулярный шаг.",
            incorrectFeedback: "'The loaves' is plural — use 'are'. 'Are being cooled' is present continuous passive — it describes a temporary action currently happening, not a routine industrial step. Use present simple passive 'are cooled' for regular process stages.",
            incorrectFeedbackRu: "'The loaves' — множественное число, используем 'are'. 'Are being cooled' — пассивный Present Continuous для временного действия. Используйте Present Simple Passive 'are cooled' для регулярных этапов."
        },
        {
            question: "Select the correct form for the slicing step:",
            questionRu: "Выберите правильную форму для этапа нарезки:",
            sentence: "Once cooled, the loaves _____ into uniform slices by a high-speed slicing machine.",
            options: ["are cut", "are cutted", "is cut"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are cut' — plural subject. 'Cut' is irregular: cut / cut / cut (all three forms are identical). 'Are cutted' does not exist. The time clause 'once cooled' is a reduced passive clause — the full form would be 'once they are cooled'.",
            correctFeedbackRu: "Правильно! 'Are cut' — множественное число. 'Cut' неправильный: cut / cut / cut (все три формы одинаковы). 'Are cutted' не существует. 'Once cooled' — сокращённое пассивное придаточное.",
            incorrectFeedback: "'The loaves' is plural — use 'are'. 'Are cutted' is wrong: 'cut' is irregular and its past participle is 'cut', the same as its base form. Never add -ed to irregular verbs.",
            incorrectFeedbackRu: "'The loaves' — множественное число, используем 'are'. 'Are cutted' неверно: 'cut' неправильный глагол, его причастие — 'cut'. Никогда не добавляйте -ed к неправильным глаголам."
        },
        {
            question: "Choose the correct passive option for packaging:",
            questionRu: "Выберите правильный пассивный вариант для упаковки:",
            sentence: "The sliced bread _____ in plastic bags which are then sealed automatically.",
            options: ["is wrapped", "are wrapped", "is wrapping"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is wrapped' — 'the sliced bread' is singular (uncountable). The relative clause 'which are then sealed automatically' describes what happens to the bags. 'Automatically' emphasises the machine-driven nature of industrial packaging.",
            correctFeedbackRu: "Правильно! 'Is wrapped' — 'the sliced bread' — единственное число (несчитаемое). Придаточное 'which are then sealed automatically' описывает, что происходит с пакетами. 'Automatically' подчёркивает машинный характер упаковки.",
            incorrectFeedback: "'The sliced bread' is uncountable and singular — use 'is', not 'are'. 'Is wrapping' is present continuous passive — not appropriate for a regular manufacturing step. Use present simple passive 'is wrapped'.",
            incorrectFeedbackRu: "'The sliced bread' несчитаемое, единственное число — используем 'is', а не 'are'. 'Is wrapping' — пассивный Present Continuous, не подходящий для регулярного шага."
        },
        {
            question: "Select the correct passive form for the final step:",
            questionRu: "Выберите правильную форму пассивного залога для последнего шага:",
            sentence: "Each packaged loaf _____ with a best-before date and delivered to supermarkets within hours.",
            options: ["is stamped", "are stamped", "is stamping"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is stamped' — 'each packaged loaf' takes a singular verb. 'Each' always requires a singular verb. The parallel structure 'is stamped...and delivered' shows two final steps. 'Within hours' emphasises the speed and efficiency of the industrial process.",
            correctFeedbackRu: "Правильно! 'Is stamped' — 'each packaged loaf' требует глагол единственного числа. 'Each' всегда требует единственное число. Параллельная структура 'is stamped...and delivered' показывает два финальных шага.",
            incorrectFeedback: "'Each packaged loaf' requires a singular verb — use 'is'. 'Each' and 'every' always take singular verbs: 'each loaf is' (correct), 'each loaf are' (wrong). 'Is stamping' is present continuous passive, not appropriate here.",
            incorrectFeedbackRu: "'Each packaged loaf' требует глагол единственного числа — используем 'is'. 'Each' и 'every' всегда принимают единственное число. 'Is stamping' — пассивный Present Continuous, неуместный здесь."
        }
    ]
};

/* ============================================
Page 9: Wine Production
============================================ */
window.grammarExercises['passive']['process-description-page9'] = {
    title: "Process Description - Wine Production",
    multipleChoice: [
        {
            question: "Choose the correct passive form for the harvesting stage:",
            questionRu: "Выберите правильную форму пассивного залога для этапа сбора урожая:",
            sentence: "The grapes _____ either by hand or by mechanical harvesters, depending on the vineyard.",
            options: ["are picked", "is picked", "are pick"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are picked' — plural subject ('the grapes'). 'Either...or' introduces two alternative methods. 'Depending on the vineyard' shows that the choice of method varies — this kind of conditional detail is typical of realistic, accurate process descriptions at B2 level.",
            correctFeedbackRu: "Правильно! 'Are picked' — множественное число. 'Either...or' вводит два метода. 'Depending on the vineyard' показывает, что выбор метода варьируется — типичная деталь реалистичных описаний уровня B2.",
            incorrectFeedback: "'The grapes' is plural — use 'are'. 'Are pick' is impossible: after 'are' you need the past participle 'picked', not the base form 'pick'. Base forms follow modal verbs, not 'is/are'.",
            incorrectFeedbackRu: "'The grapes' — множественное число, используем 'are'. 'Are pick' невозможно: после 'are' нужно причастие 'picked', а не базовая форма."
        },
        {
            question: "Select the correct passive form for the sorting stage:",
            questionRu: "Выберите правильную форму пассивного залога для этапа сортировки:",
            sentence: "At the winery, the harvested grapes _____ to remove damaged fruit and unwanted leaves.",
            options: ["are sorted", "is sorted", "are sort"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are sorted' — plural subject. The past participle 'harvested' is used here as an adjective to describe the grapes. Using 'past participle + noun' as a pre-modifier (e.g., 'harvested grapes', 'refined products', 'processed materials') is a very common pattern in B2 process descriptions.",
            correctFeedbackRu: "Правильно! 'Are sorted' — множественное число. Причастие 'harvested' используется как прилагательное-определение. Паттерн 'причастие + существительное' ('harvested grapes', 'refined products') очень распространён в описаниях уровня B2.",
            incorrectFeedback: "'The harvested grapes' is plural — use 'are'. 'Are sort' is impossible: after 'are' you need the past participle 'sorted', not the base form. This is a fundamental rule of passive voice formation.",
            incorrectFeedbackRu: "'The harvested grapes' — множественное число, используем 'are'. 'Are sort' невозможно: после 'are' нужно причастие 'sorted', а не базовая форма."
        },
        {
            question: "Complete the crushing step:",
            questionRu: "Дополните этап дробления:",
            sentence: "The sorted grapes _____ to extract the juice, which is known as 'must'.",
            options: ["are crushed", "is crushed", "are crushing"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are crushed' — plural subject. The relative clause 'which is known as must' uses the passive structure 'is known as' to introduce a technical term. 'Be known as' in the passive is a very useful B2 structure for defining or naming something in formal writing.",
            correctFeedbackRu: "Правильно! 'Are crushed' — множественное число. 'Which is known as must' использует 'is known as' для введения технического термина. 'Be known as' в пассиве — полезная структура B2 для определения или наименования.",
            incorrectFeedback: "'The sorted grapes' is plural — use 'are'. 'Are crushing' is present continuous active — the grapes are crushing something. The passive 'are crushed' correctly shows the grapes receive the action and that the process is deliberately controlled.",
            incorrectFeedbackRu: "'The sorted grapes' — множественное число, используем 'are'. 'Are crushing' — активный Continuous. Пассивное 'are crushed' показывает, что виноград получает действие и процесс контролируется."
        },
        {
            question: "Choose the correct passive form for fermentation:",
            questionRu: "Выберите правильную форму пассивного залога для ферментации:",
            sentence: "Yeast _____ to the must to begin the fermentation process, which converts sugar into alcohol.",
            options: ["is added", "are added", "is adding"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is added' — 'yeast' is uncountable and singular. The relative clause 'which converts sugar into alcohol' uses active voice because fermentation is a natural chemical reaction — no one controls this conversion, so active is more appropriate.",
            correctFeedbackRu: "Правильно! 'Is added' — 'yeast' несчитаемое, единственное число. 'Which converts sugar into alcohol' — активный залог: ферментация — естественная химическая реакция, которую никто не контролирует.",
            incorrectFeedback: "'Yeast' is uncountable and singular — use 'is', not 'are'. 'Is adding' is present continuous passive — not suitable for a routine winemaking step. Use present simple passive 'is added' to describe this standard procedure.",
            incorrectFeedbackRu: "'Yeast' несчитаемое, единственное число — используем 'is', а не 'are'. 'Is adding' — пассивный Present Continuous. Используйте Present Simple Passive 'is added'."
        },
        {
            question: "Select the correct passive option for the pressing stage:",
            questionRu: "Выберите правильный пассивный вариант для этапа прессования:",
            sentence: "After fermentation, the wine _____ from the grape skins and seeds.",
            options: ["is separated", "are separated", "is separate"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is separated' — 'the wine' is singular. 'Separated from' describes the physical separation of the liquid from the solids. Note: 'from' here describes the source or origin of separation, not the passive agent — it is different from 'by + agent'.",
            correctFeedbackRu: "Правильно! 'Is separated' — 'the wine' единственного числа. 'Separated from' описывает физическое отделение. 'From' описывает источник разделения, а не агента — это отличается от 'by + агент'.",
            incorrectFeedback: "'The wine' is singular — use 'is'. 'Is separate' is wrong: 'separate' is an adjective (meaning apart/different), not the past participle of the verb 'separate'. The past participle of the verb is 'separated'.",
            incorrectFeedbackRu: "'The wine' — единственное число, используем 'is'. 'Is separate' неверно: 'separate' — прилагательное, а не причастие глагола. Причастие прошедшего времени от глагола — 'separated'."
        },
        {
            question: "Complete the clarification step correctly:",
            questionRu: "Правильно дополните этап осветления:",
            sentence: "The wine _____ through filters to remove any remaining particles and achieve clarity.",
            options: ["is passed", "are passed", "is past"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is passed' — singular. As in earlier exercises, remember that 'past' and 'passed' are completely different words. 'Past' is an adjective or preposition; 'passed' is the past tense/past participle of the verb 'pass'. They are not interchangeable.",
            correctFeedbackRu: "Правильно! 'Is passed' — единственное число. Как в предыдущих упражнениях: 'past' и 'passed' — разные слова. 'Past' — прилагательное или предлог; 'passed' — форма глагола 'pass'. Они не взаимозаменяемы.",
            incorrectFeedback: "'The wine' is singular — use 'is'. 'Is past' is wrong: 'past' (meaning previous/beyond) is not the past participle of 'pass'. The correct past participle is 'passed'. These two words have completely different meanings and functions.",
            incorrectFeedbackRu: "'The wine' — единственное число, используем 'is'. 'Is past' неверно: 'past' — не причастие от 'pass'. Правильное причастие — 'passed'. Эти слова имеют разные значения и функции."
        },
        {
            question: "Choose the correct passive form for the ageing stage:",
            questionRu: "Выберите правильную форму пассивного залога для этапа выдержки:",
            sentence: "Premium wines _____ in oak barrels for months or even years to develop complexity.",
            options: ["are aged", "is aged", "are ageing"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are aged' — plural subject ('premium wines'). The duration 'for months or even years' shows the variability. Using the passive 'are aged' rather than the active 'age' emphasises that this is a deliberate human decision to store wine in oak — not simply natural ageing.",
            correctFeedbackRu: "Правильно! 'Are aged' — множественное число. Продолжительность 'for months or even years' показывает вариативность. Пассивное 'are aged' подчёркивает намеренное решение хранить вино в дубе, а не просто естественное старение.",
            incorrectFeedback: "'Premium wines' is plural — use 'are'. 'Are ageing' is present continuous active, implying this is happening right now temporarily. In a process description, use present simple passive 'are aged' for a standard, ongoing production stage.",
            incorrectFeedbackRu: "'Premium wines' — множественное число, используем 'are'. 'Are ageing' — активный Present Continuous. В описании процессов используйте Present Simple Passive 'are aged'."
        },
        {
            question: "Select the correct form for the bottling description:",
            questionRu: "Выберите правильную форму для описания розлива:",
            sentence: "The wine _____ into bottles using automated bottling lines at high speed.",
            options: ["is bottled", "are bottled", "is bottle"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is bottled' — singular subject ('the wine'). 'Using automated bottling lines' is a participial phrase describing the method — more concise than writing 'by means of automated bottling lines'. 'At high speed' describes the rate of production.",
            correctFeedbackRu: "Правильно! 'Is bottled' — единственное число. 'Using automated bottling lines' — причастный оборот, описывающий метод — более кратко, чем 'by means of'. 'At high speed' описывает скорость производства.",
            incorrectFeedback: "'The wine' is singular — use 'is'. 'Is bottle' is wrong: after 'is' you need the past participle 'bottled', not the base form 'bottle'. The passive structure is always: is/are + past participle.",
            incorrectFeedbackRu: "'The wine' — единственное число, используем 'is'. 'Is bottle' неверно: после 'is' нужно причастие 'bottled', а не базовая форма. Структура пассива: is/are + причастие прошедшего времени."
        },
        {
            question: "Choose the correct passive option for labelling:",
            questionRu: "Выберите правильный пассивный вариант для маркировки:",
            sentence: "Each bottle _____ with a label containing information about the vintage, region, and alcohol content.",
            options: ["is fitted", "are fitted", "is fitting"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is fitted' — 'each bottle' requires a singular verb. 'Fitted with' means 'provided or equipped with'. The participial phrase 'containing information about...' modifies 'label' and adds detail about what the label shows — a natural way to add information without a relative clause.",
            correctFeedbackRu: "Правильно! 'Is fitted' — 'each bottle' требует единственное число. 'Fitted with' означает 'снабжённый'. 'Containing information about...' уточняет 'label' — естественный способ добавить информацию без придаточного предложения.",
            incorrectFeedback: "'Each bottle' requires a singular verb: 'is'. 'Are fitted' uses plural 'are', which doesn't agree with 'each'. 'Is fitting' is present continuous passive, not suitable for a regular process step.",
            incorrectFeedbackRu: "'Each bottle' требует единственное число: 'is'. 'Are fitted' использует множественное 'are', не согласующееся с 'each'. 'Is fitting' — пассивный Present Continuous, неуместный здесь."
        },
        {
            question: "Select the correct passive form for the final distribution step:",
            questionRu: "Выберите правильную форму пассивного залога для последнего шага распределения:",
            sentence: "The labelled bottles _____ in wooden cases and distributed to wine merchants worldwide.",
            options: ["are packed", "is packed", "are been packed"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are packed' — plural subject ('the labelled bottles'). The parallel structure 'are packed...and distributed' covers two final steps. 'Wine merchants worldwide' is a concise phrase combining the recipients and their geographical scope, neatly closing the process description.",
            correctFeedbackRu: "Правильно! 'Are packed' — множественное число. Параллельная структура охватывает два финальных шага. 'Wine merchants worldwide' — краткая фраза, аккуратно завершающая описание процесса.",
            incorrectFeedback: "'The labelled bottles' is plural — use 'are'. 'Are been packed' is not valid English. Present simple passive = 'are packed'; present perfect passive = 'have been packed'. Never combine 'are' with 'been' in this way.",
            incorrectFeedbackRu: "'The labelled bottles' — множественное число, используем 'are'. 'Are been packed' недопустим. Present Simple Passive = 'are packed'; Present Perfect Passive = 'have been packed'. Никогда не сочетайте 'are' с 'been'."
        }
    ]
};

/* ============================================
Page 10: Cement Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-page10'] = {
    title: "Process Description - Cement Manufacturing",
    multipleChoice: [
        {
            question: "Choose the correct passive form for the quarrying stage:",
            questionRu: "Выберите правильную форму пассивного залога для этапа карьерных работ:",
            sentence: "Limestone, the main raw material for cement, _____ from open quarries using explosives and heavy machinery.",
            options: ["is extracted", "are extracted", "is been extracted"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is extracted' — 'limestone' is uncountable and singular. The appositive phrase 'the main raw material for cement' is set off by commas and adds information without affecting the subject number. 'Is been extracted' does not exist in English.",
            correctFeedbackRu: "Правильно! 'Is extracted' — 'limestone' несчитаемое, единственное число. Аппозитивная фраза 'the main raw material for cement' выделена запятыми и не влияет на число подлежащего. 'Is been extracted' не существует.",
            incorrectFeedback: "'Limestone' is uncountable and singular — use 'is'. The phrase 'the main raw material for cement' in commas is just extra information — it doesn't change the subject. 'Is been extracted' is not a valid structure: use 'is extracted' for present simple passive.",
            incorrectFeedbackRu: "'Limestone' несчитаемое, единственное число — используем 'is'. Фраза в запятых — дополнительная информация, не меняющая число подлежащего. 'Is been extracted' недопустима: используем 'is extracted' для Present Simple Passive."
        },
        {
            question: "Select the correct passive form for crushing:",
            questionRu: "Выберите правильную форму пассивного залога для дробления:",
            sentence: "The extracted limestone _____ into smaller pieces in a series of jaw and impact crushers.",
            options: ["is broken", "are broken", "is broke"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is broken' — singular subject. 'Break' is irregular: break / broke / broken. 'Is broke' is wrong — 'broke' is the simple past, not the past participle. The passive always requires the past participle, not the simple past. This is one of the most important irregular verbs to know.",
            correctFeedbackRu: "Правильно! 'Is broken' — единственное число. 'Break' неправильный: break / broke / broken. 'Is broke' неверно — 'broke' простое прошедшее, а не причастие. Пассив всегда требует причастие прошедшего времени, а не Past Simple.",
            incorrectFeedback: "'Is broke' is wrong: 'broke' is the past simple form of 'break', not the past participle. The past participle is 'broken'. To form the passive, always use the past participle: 'is broken', not 'is broke'.",
            incorrectFeedbackRu: "'Is broke' неверно: 'broke' — форма Past Simple от 'break', а не причастие. Причастие прошедшего времени — 'broken'. Для образования пассива всегда используйте причастие: 'is broken', а не 'is broke'."
        },
        {
            question: "Complete the pre-heating description:",
            questionRu: "Дополните описание предварительного нагрева:",
            sentence: "The crushed materials _____ in a pre-heater tower before entering the kiln.",
            options: ["are heated", "is heated", "are heating"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are heated' — plural subject ('the crushed materials'). The phrase 'before entering the kiln' is a reduced clause using a gerund. The full form would be 'before they enter the kiln'. Both are grammatically correct, but the gerund form is more formal and concise.",
            correctFeedbackRu: "Правильно! 'Are heated' — множественное число. 'Before entering the kiln' — сокращённое придаточное с герундием. Полная форма: 'before they enter the kiln'. Оба верны, но форма с герундием более формальна.",
            incorrectFeedback: "'The crushed materials' is plural — use 'are'. 'Are heating' is present continuous active — the materials are heating something else. The passive 'are heated' correctly shows the materials receive the heat as part of the industrial process.",
            incorrectFeedbackRu: "'The crushed materials' — множественное число, используем 'are'. 'Are heating' — активный Continuous. Пассивное 'are heated' правильно показывает, что материалы получают тепло."
        },
        {
            question: "Choose the correct passive form for the kiln stage:",
            questionRu: "Выберите правильную форму пассивного залога для этапа обжига:",
            sentence: "Inside the rotary kiln, the materials _____ to temperatures of up to 1,450 degrees Celsius.",
            options: ["are subjected", "is subjected", "subjected"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are subjected' — plural subject. 'Subjected to' is a formal passive expression meaning 'exposed to or made to experience'. The pattern 'be subjected to + noun' is very useful in B2 academic writing: 'subjected to heat', 'subjected to pressure', 'subjected to testing'.",
            correctFeedbackRu: "Правильно! 'Are subjected' — множественное число. 'Subjected to' — формальное пассивное выражение, означающее 'подвергаться воздействию'. Паттерн 'be subjected to + существительное' очень полезен в академическом письме уровня B2.",
            incorrectFeedback: "'The materials' is plural — use 'are'. 'Subjected' alone without 'are' cannot be the main present passive verb. 'Subjected to' is a useful academic phrase meaning 'made to experience or undergo' — learn it as a set expression.",
            incorrectFeedbackRu: "'The materials' — множественное число, используем 'are'. 'Subjected' без 'are' не может быть главным пассивным глаголом в настоящем. 'Subjected to' — полезная академическая фраза."
        },
        {
            question: "Select the correct passive form for clinker formation:",
            questionRu: "Выберите правильную форму пассивного залога для образования клинкера:",
            sentence: "As a result of the high temperatures, a new substance called clinker _____ inside the kiln.",
            options: ["is formed", "are formed", "is forming"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is formed' — 'a new substance called clinker' is singular. 'Called clinker' is a reduced relative clause ('which is called clinker') used as a post-modifier. This concise use of reduced clauses is characteristic of B2-level academic writing.",
            correctFeedbackRu: "Правильно! 'Is formed' — 'a new substance called clinker' — единственное число. 'Called clinker' — сокращённое придаточное. Лаконичное использование сокращённых придаточных характерно для академического письма уровня B2.",
            incorrectFeedback: "'A new substance called clinker' is a singular noun phrase — use 'is'. 'Is forming' is present continuous passive — not appropriate for a regular process step. Use present simple passive 'is formed' to describe this standard industrial result.",
            incorrectFeedbackRu: "'A new substance called clinker' — именная группа единственного числа, используем 'is'. 'Is forming' — пассивный Present Continuous. Используйте Present Simple Passive 'is formed'."
        },
        {
            question: "Complete the cooling stage description:",
            questionRu: "Дополните описание этапа охлаждения:",
            sentence: "The hot clinker _____ rapidly by air as it exits the kiln.",
            options: ["is cooled", "are cooled", "is cool"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is cooled' — singular subject. The agent 'by air' shows what cools the clinker. 'Is cool' uses 'cool' as an adjective (meaning low temperature), not as the past participle of the verb. The adjective 'cool' and the past participle 'cooled' are different forms.",
            correctFeedbackRu: "Правильно! 'Is cooled' — единственное число. 'By air' показывает, что охлаждает клинкер. 'Is cool' использует 'cool' как прилагательное (низкая температура), а не как причастие от глагола. Прилагательное 'cool' и причастие 'cooled' — разные формы.",
            incorrectFeedback: "'The hot clinker' is singular — use 'is'. 'Is cool' would mean 'the clinker has a cool/low temperature' — it uses 'cool' as an adjective. Here we need the past participle 'cooled' to form the passive: 'is cooled' = deliberately cooled by air.",
            incorrectFeedbackRu: "'The hot clinker' — единственное число, используем 'is'. 'Is cool' означало бы 'клинкер холодный' — 'cool' как прилагательное. Здесь нужно причастие 'cooled': 'is cooled' = намеренно охлаждается воздухом."
        },
        {
            question: "Choose the correct passive form for the grinding stage:",
            questionRu: "Выберите правильную форму пассивного залога для этапа помола:",
            sentence: "The cooled clinker _____ with a small amount of gypsum in large ball mills.",
            options: ["is ground", "are ground", "is grinded"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is ground' — singular. 'Grind' is irregular: grind / ground / ground. 'Is grinded' does not exist. 'Ground with gypsum' means the clinker and gypsum are processed together. 'In large ball mills' names the type of industrial grinding equipment.",
            correctFeedbackRu: "Правильно! 'Is ground' — единственное число. 'Grind' неправильный: grind / ground / ground. 'Is grinded' не существует. 'Ground with gypsum' означает, что клинкер и гипс обрабатываются вместе.",
            incorrectFeedback: "'The cooled clinker' is singular — use 'is'. 'Is grinded' is wrong: 'grind' is irregular, so its past participle is 'ground', not 'grinded'. This is the same irregular verb that appeared earlier in this exercise set — grind / ground / ground.",
            incorrectFeedbackRu: "'The cooled clinker' — единственное число, используем 'is'. 'Is grinded' неверно: 'grind' неправильный, причастие — 'ground', а не 'grinded'. Это тот же неправильный глагол: grind / ground / ground."
        },
        {
            question: "Select the correct passive option for the storage stage:",
            questionRu: "Выберите правильный пассивный вариант для этапа хранения:",
            sentence: "The resulting fine powder _____ into large silos for storage.",
            options: ["is transferred", "are transferred", "is transferring"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is transferred' — singular subject ('the resulting fine powder'). The adjective 'resulting' means 'produced as a result of the previous step' — a common expression for linking stages in a process description. 'Into large silos' describes the destination.",
            correctFeedbackRu: "Правильно! 'Is transferred' — единственное число. 'Resulting' означает 'произведённый в результате предыдущего шага' — распространённое выражение для связи этапов в описании. 'Into large silos' описывает место назначения.",
            incorrectFeedback: "'The resulting fine powder' is singular — use 'is'. 'Is transferring' is present continuous passive, not appropriate for a standard process step. Use present simple passive 'is transferred' to describe regular industrial procedures.",
            incorrectFeedbackRu: "'The resulting fine powder' — единственное число, используем 'is'. 'Is transferring' — пассивный Present Continuous, неуместный для стандартного шага. Используйте Present Simple Passive 'is transferred'."
        },
        {
            question: "Choose the correct passive form for quality testing:",
            questionRu: "Выберите правильную форму пассивного залога для контроля качества:",
            sentence: "Samples from each batch _____ in the laboratory to verify strength, composition, and setting time.",
            options: ["are analysed", "is analysed", "are analyse"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Are analysed' — the main noun is 'samples' (plural). The prepositional phrase 'from each batch' modifies 'samples' but doesn't change the subject number. Note the British English spelling 'analysed' (American: 'analyzed'). The purpose infinitive lists specific qualities being checked.",
            correctFeedbackRu: "Правильно! 'Are analysed' — главное существительное 'samples' (множественное число). 'From each batch' уточняет 'samples', но не меняет число. Британское написание 'analysed' (американское: 'analyzed'). Инфинитив цели перечисляет проверяемые качества.",
            incorrectFeedback: "The main subject is 'samples' (plural) — use 'are'. 'From each batch' is a modifier, not a change to the subject number. 'Are analyse' is impossible: after 'are' you need the past participle 'analysed', not the base form.",
            incorrectFeedbackRu: "Главное подлежащее — 'samples' (множественное число), используем 'are'. 'From each batch' — уточнение, не меняющее число. 'Are analyse' невозможно: после 'are' нужно причастие 'analysed', а не базовая форма."
        },
        {
            question: "Select the correct passive form for the final distribution step:",
            questionRu: "Выберите правильную форму пассивного залога для последнего шага распределения:",
            sentence: "Once approved, the cement _____ into bags or bulk tankers and dispatched to construction sites.",
            options: ["is loaded", "are loaded", "is loading"],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Is loaded' — singular subject ('the cement'). 'Once approved' is a reduced passive clause meaning 'once it has been approved'. The parallel structure 'is loaded...and dispatched' neatly completes the process. You've completed all 100 multiple choice exercises for Process Description!",
            correctFeedbackRu: "Правильно! 'Is loaded' — единственное число. 'Once approved' — сокращённое пассивное придаточное, означающее 'once it has been approved'. Параллельная структура 'is loaded...and dispatched' аккуратно завершает процесс. Вы завершили все 100 упражнений для Process Description!",
            incorrectFeedback: "'The cement' is singular — use 'is'. 'Are loaded' uses plural 'are', which doesn't agree with a singular subject. 'Is loading' is present continuous passive, not appropriate for a regular process step.",
            incorrectFeedbackRu: "'The cement' — единственное число, используем 'is'. 'Are loaded' использует множественное 'are', не согласующееся с единственным числом. 'Is loading' — пассивный Present Continuous, неуместный здесь."
        }
    ]
};

/* =============================================================================== */
/* ===========================Fill in the Gaps Exercises========================== */

/* ============================================
Page 1: Fill in the Gaps - Coffee Production
============================================ */
window.grammarExercises['passive']['process-description-gap-page1'] = {
    title: "Process Description - Coffee Production",
    fillGaps: [
        {
            question: "Complete the sentence with the correct passive form:",
            questionRu: "Заполните предложение правильной формой пассивного залога:",
            sentence: "Coffee plants ____ in rows on hillside plantations to maximise sun exposure.",
            correctAnswer: "are cultivated",
            options: ["are cultivated", "is cultivated", "cultivated", "are cultivating"],
            correctFeedback: "Correct! 'Are cultivated' is the present simple passive (are + past participle). 'Coffee plants' is plural, so the auxiliary must be 'are'. In process descriptions, present simple passive is used for regular, ongoing steps.",
            correctFeedbackRu: "Правильно! 'Are cultivated' — пассивный залог Present Simple (are + причастие прошедшего времени). 'Coffee plants' — множественное число, поэтому вспомогательный — 'are'. В описаниях процессов Present Simple Passive используется для регулярных шагов.",
            incorrectFeedback: "The subject 'coffee plants' is plural, so use 'are cultivated'. 'Cultivated' alone has no auxiliary verb, so it cannot be the main passive verb in present simple. 'Is cultivated' would require a singular subject.",
            incorrectFeedbackRu: "Подлежащее 'coffee plants' — множественное число, используем 'are cultivated'. 'Cultivated' без вспомогательного не может быть главным пассивным глаголом. 'Is cultivated' требует единственного числа."
        },
        {
            question: "Fill in the gap with the correct passive form:",
            questionRu: "Заполните пропуск правильной формой пассивного залога:",
            sentence: "Each ripe coffee cherry ____ carefully to avoid damaging the surrounding unripe fruit.",
            correctAnswer: "is picked",
            options: ["is picked", "are picked", "picks", "is picking"],
            correctFeedback: "Correct! 'Is picked' — present simple passive, singular subject. 'Each cherry' takes a singular verb because 'each' always requires a singular form. The adverb 'carefully' describes how the action is performed and sits naturally after the passive verb.",
            correctFeedbackRu: "Правильно! 'Is picked' — Present Simple Passive, единственное число. 'Each cherry' принимает глагол единственного числа, потому что 'each' всегда требует единственного числа. Наречие 'carefully' описывает, как выполняется действие.",
            incorrectFeedback: "'Each cherry' requires a singular verb — use 'is picked', not 'are picked'. Remember: 'each' + noun always takes a singular verb. 'Picks' is active voice (the cherry picks something), and 'is picking' is present continuous passive, not suitable for a routine process.",
            incorrectFeedbackRu: "'Each cherry' требует единственное число — используем 'is picked', а не 'are picked'. 'Each' + существительное всегда принимает единственное число. 'Picks' — активный залог, 'is picking' — Present Continuous Passive, не подходящий для рутинного процесса."
        },
        {
            question: "Complete the sentence about pulping:",
            questionRu: "Дополните предложение об удалении мякоти:",
            sentence: "The harvested cherries ____ through a pulping machine to remove the outer skin.",
            correctAnswer: "are passed",
            options: ["are passed", "is passed", "pass", "are past"],
            correctFeedback: "Correct! 'Are passed' — plural subject ('the harvested cherries'). Remember that 'past' is not the past participle of 'pass' — it is a separate adjective/preposition. The past participle of 'pass' is always 'passed'.",
            correctFeedbackRu: "Правильно! 'Are passed' — множественное число ('the harvested cherries'). Помните: 'past' — не причастие от 'pass', это отдельное прилагательное/предлог. Причастие прошедшего времени от 'pass' — всегда 'passed'.",
            incorrectFeedback: "'The harvested cherries' is plural — use 'are passed'. 'Are past' is wrong because 'past' (meaning previous or beyond) is not the past participle of 'pass'. These are completely different words.",
            incorrectFeedbackRu: "'The harvested cherries' — множественное число, используем 'are passed'. 'Are past' неверно: 'past' — не причастие от 'pass'. Это совершенно разные слова."
        },
        {
            question: "Fill in the gap with the correct form:",
            questionRu: "Заполните пропуск правильной формой:",
            sentence: "The wet beans ____ in large tanks of water for up to 48 hours during wet processing.",
            correctAnswer: "are soaked",
            options: ["are soaked", "is soaked", "soaked", "are soaking"],
            correctFeedback: "Correct! 'Are soaked' — plural subject ('the wet beans'). The duration 'for up to 48 hours' indicates how long this step lasts — a typical process description detail. 'Are soaking' is present continuous active, meaning the beans soak themselves, which is less precise.",
            correctFeedbackRu: "Правильно! 'Are soaked' — множественное число. Продолжительность 'for up to 48 hours' указывает, сколько длится шаг. 'Are soaking' — активный Present Continuous, означает, что зёрна сами себя замачивают, что менее точно.",
            incorrectFeedback: "'The wet beans' is plural — use 'are soaked'. 'Soaked' alone without an auxiliary cannot be the main present passive verb. 'Are soaking' is active voice, implying the beans are soaking something, not that they are being soaked.",
            incorrectFeedbackRu: "'The wet beans' — множественное число, используем 'are soaked'. 'Soaked' без вспомогательного не может быть главным пассивным глаголом. 'Are soaking' — активный залог."
        },
        {
            question: "Complete the sentence about drying:",
            questionRu: "Дополните предложение о сушке:",
            sentence: "After washing, the coffee beans ____ on raised drying beds under the sun.",
            correctAnswer: "are spread",
            options: ["are spread", "are spreaded", "is spread", "spread"],
            correctFeedback: "Correct! 'Are spread' — 'spread' is an irregular verb: spread / spread / spread (all forms are identical). 'Spreaded' does not exist. 'On raised drying beds' describes the location, and 'under the sun' describes the method — both are common process description details.",
            correctFeedbackRu: "Правильно! 'Are spread' — 'spread' неправильный глагол: spread / spread / spread (все формы одинаковы). 'Spreaded' не существует. 'On raised drying beds' описывает место, 'under the sun' — метод.",
            incorrectFeedback: "'Spreaded' does not exist — 'spread' is an irregular verb and its past participle is 'spread', the same as its base form. The subject 'the coffee beans' is plural, so use 'are spread', not 'is spread'.",
            incorrectFeedbackRu: "'Spreaded' не существует — 'spread' неправильный глагол, его причастие — 'spread'. Подлежащее 'the coffee beans' — множественное число, используем 'are spread', а не 'is spread'."
        },
        {
            question: "Fill in the gap about milling:",
            questionRu: "Заполните пропуск о переработке:",
            sentence: "The dried parchment layer ____ from the beans in a process called hulling.",
            correctAnswer: "is removed",
            options: ["is removed", "are removed", "removes", "is removing"],
            correctFeedback: "Correct! 'Is removed' — 'the dried parchment layer' is singular. The phrase 'in a process called hulling' names the technique. This structure — 'in a process called + name' — is a standard B2 pattern for introducing technical terminology in process descriptions.",
            correctFeedbackRu: "Правильно! 'Is removed' — 'the dried parchment layer' — единственное число. 'In a process called hulling' называет технику. Эта структура — стандартный паттерн B2 для введения технической терминологии.",
            incorrectFeedback: "'The dried parchment layer' is a singular noun phrase — use 'is removed'. 'Removes' is active voice. 'Is removing' is present continuous passive, not suitable for describing a standard production stage.",
            incorrectFeedbackRu: "'The dried parchment layer' — именная группа единственного числа, используем 'is removed'. 'Removes' — активный залог. 'Is removing' — Present Continuous Passive, не подходящий для стандартного этапа производства."
        },
        {
            question: "Complete the sentence about sorting:",
            questionRu: "Дополните предложение о сортировке:",
            sentence: "Green coffee beans ____ by size and weight using mechanical sorting equipment.",
            correctAnswer: "are separated",
            options: ["are separated", "is separated", "are separate", "separated"],
            correctFeedback: "Correct! 'Are separated' — plural subject ('green coffee beans'). 'By size and weight' describes the criteria used. 'Using mechanical sorting equipment' is a participial phrase naming the method. Note: 'are separate' is wrong because 'separate' here is an adjective, not the past participle of the verb.",
            correctFeedbackRu: "Правильно! 'Are separated' — множественное число. 'By size and weight' описывает критерии. 'Using mechanical sorting equipment' называет метод. 'Are separate' неверно: 'separate' здесь — прилагательное, а не причастие.",
            incorrectFeedback: "'Green coffee beans' is plural — use 'are separated'. 'Separated' alone needs the auxiliary 'are' to function as a present passive verb. 'Are separate' uses 'separate' as an adjective (meaning different/apart), not as a verb form.",
            incorrectFeedbackRu: "'Green coffee beans' — множественное число, используем 'are separated'. 'Separated' нуждается в 'are' для пассива. 'Are separate' использует 'separate' как прилагательное, а не глагольную форму."
        },
        {
            question: "Fill in the gap about exporting:",
            questionRu: "Заполните пропуск об экспорте:",
            sentence: "The green coffee ____ in 60-kilogram jute sacks before it is shipped abroad.",
            correctAnswer: "is bagged",
            options: ["is bagged", "are bagged", "bags", "is bag"],
            correctFeedback: "Correct! 'Is bagged' — 'the green coffee' is uncountable and singular. The time clause 'before it is shipped abroad' uses present simple passive again, maintaining consistent tense throughout. 'Is bag' is wrong because after 'is' you need the past participle 'bagged', not the base form.",
            correctFeedbackRu: "Правильно! 'Is bagged' — 'the green coffee' несчитаемое, единственное число. Придаточное 'before it is shipped' снова использует Present Simple Passive. 'Is bag' неверно: после 'is' нужно причастие 'bagged', а не базовая форма.",
            incorrectFeedback: "'The green coffee' is uncountable and singular — use 'is'. 'Is bag' is incorrect: the passive requires the past participle 'bagged', not the base form 'bag'. The base form only follows modal verbs.",
            incorrectFeedbackRu: "'The green coffee' несчитаемое, единственное число — используем 'is'. 'Is bag' неверно: пассив требует причастие 'bagged', а не базовую форму."
        },
        {
            question: "Complete the sentence about blending:",
            questionRu: "Дополните предложение о смешивании:",
            sentence: "Beans from different origins ____ together to create a consistent flavour profile.",
            correctAnswer: "are blended",
            options: ["are blended", "is blended", "blend", "are blending"],
            correctFeedback: "Correct! 'Are blended' — plural subject ('beans from different origins'). Note that the prepositional phrase 'from different origins' modifies 'beans' but does not change its plural number. 'To create a consistent flavour profile' is a purpose infinitive.",
            correctFeedbackRu: "Правильно! 'Are blended' — множественное число ('beans from different origins'). Предложная фраза 'from different origins' уточняет 'beans', но не меняет его число. 'To create a consistent flavour profile' — инфинитив цели.",
            incorrectFeedback: "The main subject is 'beans' (plural) — use 'are blended'. The phrase 'from different origins' is a modifier and doesn't affect the subject number. 'Are blending' is active, meaning the beans blend themselves.",
            incorrectFeedbackRu: "Главное подлежащее — 'beans' (множественное число), используем 'are blended'. 'From different origins' — уточнение, не меняющее число. 'Are blending' — активный залог."
        },
        {
            question: "Fill in the gap about packaging for retail:",
            questionRu: "Заполните пропуск об упаковке для розничной продажи:",
            sentence: "The roasted and blended coffee ____ into airtight foil bags fitted with a one-way valve.",
            correctAnswer: "is sealed",
            options: ["is sealed", "are sealed", "seals", "sealed"],
            correctFeedback: "Correct! 'Is sealed' — 'the roasted and blended coffee' is singular (uncountable). 'Fitted with a one-way valve' is a reduced relative clause describing the bags. 'Sealed' alone without 'is' cannot be the main present passive verb in this sentence.",
            correctFeedbackRu: "Правильно! 'Is sealed' — 'the roasted and blended coffee' — единственное число (несчитаемое). 'Fitted with a one-way valve' — сокращённое придаточное, описывающее пакеты. 'Sealed' без 'is' не может быть пассивным глаголом.",
            incorrectFeedback: "'The roasted and blended coffee' is uncountable — use 'is sealed'. 'Sealed' without the auxiliary 'is' functions as an adjective or past simple, not as a present passive verb. The full passive structure requires: is/are + past participle.",
            incorrectFeedbackRu: "'The roasted and blended coffee' несчитаемое — используем 'is sealed'. 'Sealed' без 'is' функционирует как прилагательное или Past Simple, а не пассивный глагол. Полная пассивная структура требует: is/are + причастие."
        }
    ]
};

/* ============================================
Page 2: Fill in the Gaps - Oil Refining
============================================ */
window.grammarExercises['passive']['process-description-gap-page2'] = {
    title: "Process Description - Oil Refining",
    fillGaps: [
        {
            question: "Complete the sentence with the correct passive form:",
            questionRu: "Заполните предложение правильной формой пассивного залога:",
            sentence: "Seismic surveys ____ to identify potential oil-bearing rock formations underground.",
            correctAnswer: "are conducted",
            options: ["are conducted", "is conducted", "conducted", "conduct"],
            correctFeedback: "Correct! 'Are conducted' — 'seismic surveys' is plural. 'To identify potential oil-bearing rock formations' is a purpose infinitive, which is a standard structure in formal process descriptions for explaining why a step is performed.",
            correctFeedbackRu: "Правильно! 'Are conducted' — 'seismic surveys' — множественное число. 'To identify...' — инфинитив цели, стандартная структура в формальных описаниях для объяснения цели шага.",
            incorrectFeedback: "'Seismic surveys' is plural — use 'are conducted'. 'Conducted' alone without 'are' cannot serve as the present passive main verb. 'Conduct' is active voice (surveys conduct something).",
            incorrectFeedbackRu: "'Seismic surveys' — множественное число, используем 'are conducted'. 'Conducted' без 'are' не может быть пассивным глаголом. 'Conduct' — активный залог."
        },
        {
            question: "Fill in the gap with the correct passive form:",
            questionRu: "Заполните пропуск правильной формой:",
            sentence: "Once a suitable reservoir is located, a well ____ through the rock to reach the oil.",
            correctAnswer: "is drilled",
            options: ["is drilled", "are drilled", "drills", "is drilling"],
            correctFeedback: "Correct! 'Is drilled' — 'a well' is singular. The time clause 'once a suitable reservoir is located' uses present simple passive in a subordinate clause — correct for time clauses describing a habitual sequence. 'Is drilling' is present continuous passive, implying a temporary current action.",
            correctFeedbackRu: "Правильно! 'Is drilled' — 'a well' — единственное число. 'Once a suitable reservoir is located' — Present Simple Passive в придаточном времени. 'Is drilling' — Present Continuous Passive для временного действия.",
            incorrectFeedback: "'A well' is singular — use 'is drilled'. 'Is drilling' is present continuous passive, used for temporary ongoing actions, not for describing a standard process step. Present simple passive 'is drilled' is correct here.",
            incorrectFeedbackRu: "'A well' — единственное число, используем 'is drilled'. 'Is drilling' — Present Continuous Passive для временных действий. Present Simple Passive 'is drilled' верен здесь."
        },
        {
            question: "Complete the sentence about initial processing:",
            questionRu: "Дополните предложение о начальной обработке:",
            sentence: "Gas and water ____ from the oil at the wellhead before transportation begins.",
            correctAnswer: "are separated",
            options: ["are separated", "is separated", "separated", "are separate"],
            correctFeedback: "Correct! 'Are separated' — 'gas and water' are two items joined by 'and', forming a plural subject. This is different from 'or', where the verb agrees with the nearest noun. With 'and', the verb is always plural. 'Are separate' uses 'separate' as an adjective, not as a verb.",
            correctFeedbackRu: "Правильно! 'Are separated' — 'gas and water' — два элемента, соединённых 'and', множественное число. С 'and' глагол всегда во множественном числе. 'Are separate' использует 'separate' как прилагательное.",
            incorrectFeedback: "'Gas and water' are two items joined by 'and' — this always makes a plural subject, so use 'are separated'. 'Separated' alone needs the auxiliary to form a present passive. 'Are separate' uses 'separate' as an adjective (meaning apart), not as a passive verb.",
            incorrectFeedbackRu: "'Gas and water' — два элемента с 'and', всегда множественное число, используем 'are separated'. 'Separated' нуждается в вспомогательном глаголе. 'Are separate' использует прилагательное, а не глагол."
        },
        {
            question: "Fill in the gap about the distillation column:",
            questionRu: "Заполните пропуск о колонне дистилляции:",
            sentence: "Inside the distillation column, the crude oil mixture ____ into fractions by their different boiling points.",
            correctAnswer: "is divided",
            options: ["is divided", "are divided", "divides", "is been divided"],
            correctFeedback: "Correct! 'Is divided' — 'the crude oil mixture' is singular. 'Is been divided' is not valid English — never combine 'is' with 'been'. Present simple passive = 'is/are + past participle'; present perfect passive = 'has/have been + past participle'.",
            correctFeedbackRu: "Правильно! 'Is divided' — 'the crude oil mixture' — единственное число. 'Is been divided' недопустим — никогда не сочетайте 'is' с 'been'. Present Simple Passive = 'is/are + причастие'; Present Perfect Passive = 'has/have been + причастие'.",
            incorrectFeedback: "'The crude oil mixture' is singular — use 'is divided'. 'Is been divided' does not exist in English. The two passive structures are: 'is divided' (present simple) and 'has been divided' (present perfect). Do not combine 'is' with 'been'.",
            incorrectFeedbackRu: "'The crude oil mixture' — единственное число, используем 'is divided'. 'Is been divided' не существует. Две пассивные структуры: 'is divided' (Present Simple) и 'has been divided' (Present Perfect). Не сочетайте 'is' с 'been'."
        },
        {
            question: "Complete the sentence about residual products:",
            questionRu: "Дополните предложение об остаточных продуктах:",
            sentence: "Bitumen and other heavy residues ____ at the base of the distillation tower.",
            correctAnswer: "are collected",
            options: ["are collected", "is collected", "collect", "collected"],
            correctFeedback: "Correct! 'Are collected' — plural subject ('bitumen and other heavy residues'). Two nouns joined by 'and' always form a plural subject. 'Collected' alone has no auxiliary verb, so it cannot serve as the present passive main verb.",
            correctFeedbackRu: "Правильно! 'Are collected' — два существительных с 'and' образуют множественное число. 'Collected' без вспомогательного не может быть пассивным глаголом в настоящем времени.",
            incorrectFeedback: "'Bitumen and other heavy residues' is a plural subject (two things joined by 'and') — use 'are'. 'Collected' without 'are' cannot function as a present passive verb — it would read as a past simple or adjective.",
            incorrectFeedbackRu: "'Bitumen and other heavy residues' — множественное число (два предмета с 'and'), используем 'are'. 'Collected' без 'are' не может быть пассивным глаголом в настоящем времени."
        },
        {
            question: "Fill in the gap about the cracking process:",
            questionRu: "Заполните пропуск о процессе крекинга:",
            sentence: "In catalytic cracking, heavy oil fractions ____ into lighter, more valuable products.",
            correctAnswer: "are broken down",
            options: ["are broken down", "is broken down", "break down", "are broke down"],
            correctFeedback: "Correct! 'Are broken down' — the phrasal verb 'break down' in the passive keeps both parts: 'broken down'. The past participle of 'break' is 'broken', not 'broke'. Phrasal verbs in the passive always retain their particle after the past participle.",
            correctFeedbackRu: "Правильно! 'Are broken down' — фразовый глагол 'break down' в пассиве сохраняет обе части: 'broken down'. Причастие от 'break' — 'broken', а не 'broke'. Фразовые глаголы в пассиве всегда сохраняют частицу.",
            incorrectFeedback: "'Heavy oil fractions' is plural — use 'are'. 'Are broke down' is wrong: the past participle of 'break' is 'broken', not 'broke'. 'Broke' is only the simple past tense. With phrasal verbs in the passive, keep the particle: 'broken down', not just 'broken'.",
            incorrectFeedbackRu: "'Heavy oil fractions' — множественное число, используем 'are'. 'Are broke down' неверно: причастие от 'break' — 'broken', а не 'broke'. 'Broke' — только Past Simple. С фразовыми глаголами в пассиве сохраняйте частицу: 'broken down'."
        },
        {
            question: "Complete the sentence about blending:",
            questionRu: "Дополните предложение о смешивании:",
            sentence: "Various petroleum products ____ together to meet specific performance specifications.",
            correctAnswer: "are blended",
            options: ["are blended", "is blended", "are blend", "blended"],
            correctFeedback: "Correct! 'Are blended' — 'various petroleum products' is plural. 'To meet specific performance specifications' is a purpose infinitive explaining the reason for blending. 'Are blend' is impossible — after 'are' you always need the past participle 'blended', not the base form.",
            correctFeedbackRu: "Правильно! 'Are blended' — множественное число. 'To meet specific performance specifications' — инфинитив цели. 'Are blend' невозможно — после 'are' всегда нужно причастие 'blended', а не базовая форма.",
            incorrectFeedback: "'Various petroleum products' is plural — use 'are'. 'Are blend' is not grammatically possible: after 'are' you must use the past participle 'blended'. Base forms only follow modal verbs (can, will, should), not 'is/are'.",
            incorrectFeedbackRu: "'Various petroleum products' — множественное число, используем 'are'. 'Are blend' грамматически невозможно: после 'are' нужно причастие 'blended'. Базовая форма следует только за модальными глаголами."
        },
        {
            question: "Fill in the gap about safety testing:",
            questionRu: "Заполните пропуск о проверке безопасности:",
            sentence: "Each batch of refined fuel ____ for flash point, viscosity, and contamination levels.",
            correctAnswer: "is tested",
            options: ["is tested", "are tested", "tests", "is test"],
            correctFeedback: "Correct! 'Is tested' — 'each batch' requires a singular verb because 'each' always takes singular agreement. 'Is test' is wrong: after 'is' you need the past participle 'tested', not the base form 'test'. The list 'flash point, viscosity, and contamination levels' names the properties being checked.",
            correctFeedbackRu: "Правильно! 'Is tested' — 'each batch' требует единственное число, так как 'each' всегда требует согласования в единственном числе. 'Is test' неверно: после 'is' нужно причастие 'tested'. Список называет проверяемые свойства.",
            incorrectFeedback: "'Each batch' requires a singular verb: 'is tested'. 'Is test' is wrong because the passive requires the past participle form 'tested', not the base form. Remember: passive = is/are + past participle, not is/are + base form.",
            incorrectFeedbackRu: "'Each batch' требует единственное число: 'is tested'. 'Is test' неверно: пассив требует причастие 'tested', а не базовую форму. Пассив = is/are + причастие прошедшего времени."
        },
        {
            question: "Complete the sentence about storage:",
            questionRu: "Дополните предложение о хранении:",
            sentence: "Refined petroleum products ____ in colour-coded tanks to prevent accidental mixing.",
            correctAnswer: "are stored",
            options: ["are stored", "is stored", "store", "are store"],
            correctFeedback: "Correct! 'Are stored' — plural subject. 'In colour-coded tanks' describes where the products are kept, and 'to prevent accidental mixing' explains why. 'Are store' is impossible — after 'are' you always need the past participle 'stored', not the base form.",
            correctFeedbackRu: "Правильно! 'Are stored' — множественное число. 'In colour-coded tanks' описывает место хранения, 'to prevent accidental mixing' объясняет цель. 'Are store' невозможно — после 'are' нужно причастие 'stored'.",
            incorrectFeedback: "'Refined petroleum products' is plural — use 'are stored'. 'Are store' is not grammatically possible: after 'are' you must use the past participle 'stored'. The base form 'store' only follows modal verbs.",
            incorrectFeedbackRu: "'Refined petroleum products' — множественное число, используем 'are stored'. 'Are store' грамматически невозможно: после 'are' нужно причастие 'stored'."
        },
        {
            question: "Fill in the gap about environmental controls:",
            questionRu: "Заполните пропуск об экологическом контроле:",
            sentence: "Waste gases from the refining process ____ through scrubbers before being released.",
            correctAnswer: "are filtered",
            options: ["are filtered", "is filtered", "filtered", "are filter"],
            correctFeedback: "Correct! 'Are filtered' — 'waste gases' is plural. The phrase 'before being released' is a gerund clause ('before + being + past participle') — a formal structure used to describe the sequence of actions without repeating the subject.",
            correctFeedbackRu: "Правильно! 'Are filtered' — 'waste gases' — множественное число. 'Before being released' — герундийное придаточное ('before + being + причастие') — формальная структура для описания последовательности без повторения подлежащего.",
            incorrectFeedback: "'Waste gases' is plural — use 'are filtered'. 'Are filter' is impossible: after 'are' you need the past participle 'filtered', not the base form. Note also 'before being released' — this is a passive gerund clause, very useful in formal process descriptions.",
            incorrectFeedbackRu: "'Waste gases' — множественное число, используем 'are filtered'. 'Are filter' невозможно: после 'are' нужно причастие 'filtered'. Также обратите на 'before being released' — пассивная герундийная конструкция."
        }
    ]
};

/* ============================================
Page 3: Fill in the Gaps - Glass Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-gap-page3'] = {
    title: "Process Description - Glass Manufacturing",
    fillGaps: [
        {
            question: "Complete the sentence with the correct passive form:",
            questionRu: "Заполните предложение правильной формой пассивного залога:",
            sentence: "Raw silica sand ____ to remove moisture before it is fed into the furnace.",
            correctAnswer: "is dried",
            options: ["is dried", "are dried", "dries", "is dry"],
            correctFeedback: "Correct! 'Is dried' — 'raw silica sand' is uncountable and singular. 'Is dry' is wrong because 'dry' as an adjective describes a state (the sand is dry), not the process of drying. The past participle of the verb 'dry' is 'dried', which forms the passive.",
            correctFeedbackRu: "Правильно! 'Is dried' — 'raw silica sand' несчитаемое, единственное число. 'Is dry' неверно: 'dry' как прилагательное описывает состояние, а не процесс. Причастие от глагола 'dry' — 'dried'.",
            incorrectFeedback: "'Raw silica sand' is uncountable and singular — use 'is'. 'Is dry' uses 'dry' as an adjective (meaning not wet), not as the past participle of the verb 'dry'. The verb form needed here is the past participle 'dried' to form the passive.",
            incorrectFeedbackRu: "'Raw silica sand' несчитаемое, единственное число — используем 'is'. 'Is dry' использует 'dry' как прилагательное, а не причастие глагола. Нужна форма причастия 'dried'."
        },
        {
            question: "Fill in the gap about the batch house:",
            questionRu: "Заполните пропуск о смесительном отделении:",
            sentence: "The raw materials ____ by automated conveyor systems to reduce human error.",
            correctAnswer: "are weighed",
            options: ["are weighed", "is weighed", "weigh", "are weighing"],
            correctFeedback: "Correct! 'Are weighed' — 'the raw materials' is plural. The agent 'by automated conveyor systems' tells us what performs the weighing. When the agent is a machine or automated system, we still use 'by' in the passive, just as we would for a human agent.",
            correctFeedbackRu: "Правильно! 'Are weighed' — 'the raw materials' — множественное число. 'By automated conveyor systems' называет агента — машину. С машиной-агентом мы используем 'by' так же, как с человеком-агентом.",
            incorrectFeedback: "'The raw materials' is plural — use 'are weighed'. 'Are weighing' is active continuous, meaning the materials are weighing something. The passive 'are weighed' correctly shows the materials receive the action of being weighed.",
            incorrectFeedbackRu: "'The raw materials' — множественное число, используем 'are weighed'. 'Are weighing' — активный Continuous. Пассивное 'are weighed' показывает, что материалы получают действие взвешивания."
        },
        {
            question: "Complete the sentence about the furnace:",
            questionRu: "Дополните предложение о печи:",
            sentence: "The batch mixture ____ continuously for up to 24 hours until it becomes molten.",
            correctAnswer: "is heated",
            options: ["is heated", "are heated", "is heat", "heats"],
            correctFeedback: "Correct! 'Is heated' — 'the batch mixture' is singular. 'Is heat' is wrong because after 'is' you need the past participle 'heated', not the base form 'heat'. The duration 'for up to 24 hours' and result clause 'until it becomes molten' add precise detail typical of B2 process descriptions.",
            correctFeedbackRu: "Правильно! 'Is heated' — 'the batch mixture' — единственное число. 'Is heat' неверно: после 'is' нужно причастие 'heated', а не базовая форма. Продолжительность и результат добавляют точность.",
            incorrectFeedback: "'The batch mixture' is singular — use 'is'. 'Is heat' is incorrect: the passive requires 'is/are + past participle'. The past participle of 'heat' is 'heated'. The base form 'heat' only follows modal verbs.",
            incorrectFeedbackRu: "'The batch mixture' — единственное число, используем 'is'. 'Is heat' неверно: пассив требует 'is/are + причастие'. Причастие от 'heat' — 'heated'."
        },
        {
            question: "Fill in the gap about forming float glass:",
            questionRu: "Заполните пропуск о производстве флоат-стекла:",
            sentence: "In the float process, the molten glass ____ onto a bath of liquid tin to form flat sheets.",
            correctAnswer: "is poured",
            options: ["is poured", "are poured", "is pour", "pours"],
            correctFeedback: "Correct! 'Is poured' — 'the molten glass' is singular. 'Is pour' is wrong because after 'is' you need the past participle 'poured', not the base form 'pour'. The phrase 'onto a bath of liquid tin' describes the specific method used in float glass production.",
            correctFeedbackRu: "Правильно! 'Is poured' — 'the molten glass' — единственное число. 'Is pour' неверно: после 'is' нужно причастие 'poured'. 'Onto a bath of liquid tin' описывает специфику метода флоат-стекла.",
            incorrectFeedback: "'The molten glass' is singular — use 'is poured'. 'Is pour' is incorrect: after 'is' you always need the past participle, not the base form. The base form only follows modal verbs like 'can', 'will', 'should'.",
            incorrectFeedbackRu: "'The molten glass' — единственное число, используем 'is poured'. 'Is pour' неверно: после 'is' всегда нужно причастие. Базовая форма следует только за модальными глаголами."
        },
        {
            question: "Complete the sentence about the tin bath:",
            questionRu: "Дополните предложение о ванне с оловом:",
            sentence: "As the glass floats across the tin surface, its thickness ____ by adjustable rollers.",
            correctAnswer: "is controlled",
            options: ["is controlled", "are controlled", "controls", "is controlling"],
            correctFeedback: "Correct! 'Is controlled' — 'its thickness' is singular. The time clause 'as the glass floats across the tin surface' uses active voice because the floating is a natural physical process — no one controls it. The thickness, however, is deliberately controlled, hence the passive.",
            correctFeedbackRu: "Правильно! 'Is controlled' — 'its thickness' — единственное число. 'As the glass floats' — активный залог, потому что плавание — естественный физический процесс. Толщина намеренно контролируется, отсюда пассивный залог.",
            incorrectFeedback: "'Its thickness' is singular — use 'is controlled'. 'Is controlling' is present continuous passive, implying a temporary action. For a regular manufacturing control step, use present simple passive: 'is controlled'.",
            incorrectFeedbackRu: "'Its thickness' — единственное число, используем 'is controlled'. 'Is controlling' — Present Continuous Passive для временного действия. Для регулярного контроля используйте Present Simple Passive: 'is controlled'."
        },
        {
            question: "Fill in the gap about the lehr oven:",
            questionRu: "Заполните пропуск о печи отжига:",
            sentence: "The glass ribbon ____ through a tunnel-like lehr oven over a period of several hours.",
            correctAnswer: "is drawn",
            options: ["is drawn", "are drawn", "is drew", "draws"],
            correctFeedback: "Correct! 'Is drawn' — 'the glass ribbon' is singular. 'Draw' is irregular: draw / drew / drawn. 'Is drew' is wrong because 'drew' is the simple past, not the past participle. The passive always uses the past participle, never the simple past.",
            correctFeedbackRu: "Правильно! 'Is drawn' — 'the glass ribbon' — единственное число. 'Draw' неправильный: draw / drew / drawn. 'Is drew' неверно: 'drew' — Past Simple, а не причастие. Пассив всегда использует причастие, а не Past Simple.",
            incorrectFeedback: "'Is drew' is incorrect: 'drew' is the simple past of 'draw', not the past participle. The past participle is 'drawn'. The passive voice requires: is/are + past participle (drawn), never is/are + simple past (drew).",
            incorrectFeedbackRu: "'Is drew' неверно: 'drew' — Past Simple от 'draw', а не причастие. Причастие — 'drawn'. Пассивный залог требует: is/are + причастие ('drawn'), а не is/are + Past Simple ('drew')."
        },
        {
            question: "Complete the sentence about edge trimming:",
            questionRu: "Дополните предложение об обрезке краёв:",
            sentence: "The rough edges of the glass ribbon ____ automatically to produce clean, straight sides.",
            correctAnswer: "are trimmed",
            options: ["are trimmed", "is trimmed", "trim", "are trimming"],
            correctFeedback: "Correct! 'Are trimmed' — 'the rough edges' is plural. The purpose 'to produce clean, straight sides' uses 'to + infinitive', which is the standard structure in B2 process descriptions for explaining the goal of each step.",
            correctFeedbackRu: "Правильно! 'Are trimmed' — 'the rough edges' — множественное число. 'To produce clean, straight sides' — 'to + инфинитив' цели, стандартная структура B2 для объяснения цели шага.",
            incorrectFeedback: "'The rough edges' is plural — use 'are trimmed'. 'Are trimming' is active continuous, meaning the edges are trimming something. The passive 'are trimmed' shows the edges receive the action of trimming from automated machinery.",
            incorrectFeedbackRu: "'The rough edges' — множественное число, используем 'are trimmed'. 'Are trimming' — активный Continuous. Пассивное 'are trimmed' показывает, что края получают действие обрезки."
        },
        {
            question: "Fill in the gap about breakage detection:",
            questionRu: "Заполните пропуск об обнаружении трещин:",
            sentence: "Micro-cracks and stress points in the glass ____ by optical sensors before cutting.",
            correctAnswer: "are detected",
            options: ["are detected", "is detected", "detected", "are detecting"],
            correctFeedback: "Correct! 'Are detected' — 'micro-cracks and stress points' is plural (two things joined by 'and'). The agent 'by optical sensors' names the technology used. 'Detected' alone without 'are' cannot function as the present passive main verb.",
            correctFeedbackRu: "Правильно! 'Are detected' — 'micro-cracks and stress points' — множественное число (два предмета с 'and'). 'By optical sensors' называет используемую технологию. 'Detected' без 'are' не может быть пассивным глаголом.",
            incorrectFeedback: "'Micro-cracks and stress points' is plural (two items joined by 'and') — use 'are detected'. 'Detected' without 'are' cannot be the main present passive verb — it needs the auxiliary to complete the passive structure.",
            incorrectFeedbackRu: "'Micro-cracks and stress points' — множественное число (два предмета с 'and'), используем 'are detected'. 'Detected' без 'are' не может быть главным пассивным глаголом."
        },
        {
            question: "Complete the sentence about tin coating:",
            questionRu: "Дополните предложение о покрытии оловом:",
            sentence: "A thin metallic coating ____ to one surface of the glass to create mirror glass.",
            correctAnswer: "is applied",
            options: ["is applied", "are applied", "applies", "applied"],
            correctFeedback: "Correct! 'Is applied' — 'a thin metallic coating' is singular. 'Applied' alone without 'is' cannot be the main present passive verb. The prepositional phrase 'to one surface of the glass' describes where the coating goes — 'to + surface' is common in manufacturing descriptions.",
            correctFeedbackRu: "Правильно! 'Is applied' — 'a thin metallic coating' — единственное число. 'Applied' без 'is' не может быть пассивным глаголом. 'To one surface of the glass' описывает место нанесения.",
            incorrectFeedback: "'A thin metallic coating' is singular — use 'is applied'. 'Applied' alone without the auxiliary 'is' cannot serve as a present passive verb — it reads as a past simple or adjective without the auxiliary.",
            incorrectFeedbackRu: "'A thin metallic coating' — единственное число, используем 'is applied'. 'Applied' без вспомогательного 'is' читается как Past Simple или прилагательное."
        },
        {
            question: "Fill in the gap about final packaging:",
            questionRu: "Заполните пропуск об итоговой упаковке:",
            sentence: "Glass sheets ____ between protective foam layers and secured in wooden crates for transport.",
            correctAnswer: "are placed",
            options: ["are placed", "is placed", "place", "are placing"],
            correctFeedback: "Correct! 'Are placed' — 'glass sheets' is plural. The parallel structure 'are placed...and secured' shows two consecutive passive actions sharing the auxiliary 'are'. When listing passive actions, the auxiliary does not need to be repeated before each verb.",
            correctFeedbackRu: "Правильно! 'Are placed' — 'glass sheets' — множественное число. Параллельная структура 'are placed...and secured' показывает два пассивных действия с общим 'are'. При перечислении пассивных действий вспомогательный не нужно повторять.",
            incorrectFeedback: "'Glass sheets' is plural — use 'are placed'. 'Are placing' is active continuous — the sheets are placing something. The parallel passive 'are placed...and secured' correctly shows two steps where the glass sheets receive both actions.",
            incorrectFeedbackRu: "'Glass sheets' — множественное число, используем 'are placed'. 'Are placing' — активный Continuous. Параллельный пассив 'are placed...and secured' правильно показывает два шага."
        }
    ]
};

/* ============================================
Page 4: Fill in the Gaps - Water Treatment
============================================ */
window.grammarExercises['passive']['process-description-gap-page4'] = {
    title: "Process Description - Water Treatment",
    fillGaps: [
        {
            question: "Complete the sentence with the correct passive form:",
            questionRu: "Заполните предложение правильной формой пассивного залога:",
            sentence: "Intake water from rivers ____ by a series of bar screens to catch large objects.",
            correctAnswer: "is filtered",
            options: ["is filtered", "are filtered", "filters", "is filter"],
            correctFeedback: "Correct! 'Is filtered' — 'intake water' is uncountable and singular. 'Is filter' is wrong because after 'is' you need the past participle 'filtered', not the base form 'filter'. 'By a series of bar screens' names the agent — the equipment performing the filtering.",
            correctFeedbackRu: "Правильно! 'Is filtered' — 'intake water' несчитаемое, единственное число. 'Is filter' неверно: после 'is' нужно причастие 'filtered'. 'By a series of bar screens' называет агента — оборудование.",
            incorrectFeedback: "'Intake water' is uncountable and singular — use 'is filtered'. 'Is filter' is incorrect: after 'is' you always use the past participle 'filtered', not the base form. The base form only follows modal verbs.",
            incorrectFeedbackRu: "'Intake water' несчитаемое, единственное число — используем 'is filtered'. 'Is filter' неверно: после 'is' всегда используется причастие 'filtered'."
        },
        {
            question: "Fill in the gap about aeration:",
            questionRu: "Заполните пропуск об аэрации:",
            sentence: "The pre-screened water ____ with oxygen in the aeration tank to remove dissolved iron.",
            correctAnswer: "is enriched",
            options: ["is enriched", "are enriched", "enriches", "is enriching"],
            correctFeedback: "Correct! 'Is enriched' — 'the pre-screened water' is singular. 'Enriched with' in the passive means 'supplied with or given more of something'. 'Is enriching' is present continuous passive — used for temporary actions, not standard process steps.",
            correctFeedbackRu: "Правильно! 'Is enriched' — 'the pre-screened water' — единственное число. 'Enriched with' в пассиве означает 'обогащён чем-либо'. 'Is enriching' — Present Continuous Passive для временных действий.",
            incorrectFeedback: "'The pre-screened water' is singular — use 'is enriched'. 'Is enriching' is present continuous passive, implying a temporary current action. For a regular process step, use present simple passive: 'is enriched'.",
            incorrectFeedbackRu: "'The pre-screened water' — единственное число, используем 'is enriched'. 'Is enriching' — Present Continuous Passive для временного действия. Для регулярного шага используйте Present Simple Passive."
        },
        {
            question: "Complete the sentence about flocculation:",
            questionRu: "Дополните предложение о флокуляции:",
            sentence: "The water and coagulant mixture ____ slowly in flocculation tanks to form larger particles called flocs.",
            correctAnswer: "is stirred",
            options: ["is stirred", "are stirred", "stirs", "is stirring"],
            correctFeedback: "Correct! 'Is stirred' — 'the water and coagulant mixture' refers to one combined mixture, so it is singular. Even though 'water and coagulant' contains two ingredients, 'mixture' is the head noun and is singular. The purpose clause 'to form larger particles' explains why stirring is done.",
            correctFeedbackRu: "Правильно! 'Is stirred' — 'the water and coagulant mixture' — одна объединённая смесь, единственное число. Хотя 'water and coagulant' содержит два ингредиента, 'mixture' — главное существительное, единственного числа.",
            incorrectFeedback: "'The water and coagulant mixture' — the head noun is 'mixture' (singular), so use 'is stirred'. Even though 'water and coagulant' describes two components, the whole thing is one mixture. 'Is stirring' is present continuous passive, not appropriate here.",
            incorrectFeedbackRu: "В 'the water and coagulant mixture' главное существительное 'mixture' — единственное число, используем 'is stirred'. 'Is stirring' — Present Continuous Passive, неуместный здесь."
        },
        {
            question: "Fill in the gap about the settling process:",
            questionRu: "Заполните пропуск о процессе осаждения:",
            sentence: "The flocs that form in the water ____ under gravity into the bottom of the settling tanks.",
            correctAnswer: "are drawn",
            options: ["are drawn", "is drawn", "are drew", "draw"],
            correctFeedback: "Correct! 'Are drawn' — 'the flocs that form in the water' — the head noun is 'flocs' (plural). The relative clause 'that form in the water' modifies 'flocs' but doesn't change its plural number. 'Are drew' is impossible: 'drew' is the simple past of 'draw', not the past participle 'drawn'.",
            correctFeedbackRu: "Правильно! 'Are drawn' — главное существительное 'flocs' — множественное число. Придаточное 'that form in the water' уточняет 'flocs', не меняя число. 'Are drew' невозможно: 'drew' — Past Simple, а не причастие 'drawn'.",
            incorrectFeedback: "The main subject is 'flocs' (plural) — use 'are drawn'. 'Are drew' is wrong: the passive requires the past participle 'drawn', not the simple past 'drew'. Always check the main noun, not the relative clause, to determine the verb number.",
            incorrectFeedbackRu: "Главное подлежащее — 'flocs' (множественное число), используем 'are drawn'. 'Are drew' неверно: пассив требует причастие 'drawn', а не Past Simple 'drew'."
        },
        {
            question: "Complete the sentence about rapid sand filtration:",
            questionRu: "Дополните предложение о быстрой песчаной фильтрации:",
            sentence: "Remaining suspended particles ____ as the water trickles through layers of sand and gravel.",
            correctAnswer: "are trapped",
            options: ["are trapped", "is trapped", "trap", "are trap"],
            correctFeedback: "Correct! 'Are trapped' — 'remaining suspended particles' is plural. 'Are trap' is impossible: after 'are' you must use the past participle 'trapped', not the base form 'trap'. The time clause 'as the water trickles through' uses active voice because the trickling is a natural action.",
            correctFeedbackRu: "Правильно! 'Are trapped' — 'remaining suspended particles' — множественное число. 'Are trap' невозможно: после 'are' нужно причастие 'trapped'. 'As the water trickles through' — активный залог, так как течение — естественное действие.",
            incorrectFeedback: "'Remaining suspended particles' is plural — use 'are trapped'. 'Are trap' is not grammatically possible: after 'are' you need the past participle 'trapped', not the base form. This is a fundamental rule of passive voice.",
            incorrectFeedbackRu: "'Remaining suspended particles' — множественное число, используем 'are trapped'. 'Are trap' грамматически невозможно: после 'are' нужно причастие 'trapped'."
        },
        {
            question: "Fill in the gap about activated carbon treatment:",
            questionRu: "Заполните пропуск об обработке активированным углем:",
            sentence: "Unpleasant tastes and odours ____ by passing the water through activated carbon filters.",
            correctAnswer: "are removed",
            options: ["are removed", "is removed", "are remove", "remove"],
            correctFeedback: "Correct! 'Are removed' — 'unpleasant tastes and odours' is plural (two things joined by 'and'). The method is expressed with 'by + -ing' (by passing the water through), showing how the removal is achieved — a 'by + gerund' structure explains the method.",
            correctFeedbackRu: "Правильно! 'Are removed' — 'unpleasant tastes and odours' — множественное число (два предмета с 'and'). Метод выражен с 'by + -ing', показывая, как достигается удаление.",
            incorrectFeedback: "'Unpleasant tastes and odours' is plural (two items joined by 'and') — use 'are removed'. 'Are remove' is impossible: after 'are' you need the past participle 'removed', not the base form.",
            incorrectFeedbackRu: "'Unpleasant tastes and odours' — множественное число (два предмета с 'and'), используем 'are removed'. 'Are remove' невозможно: после 'are' нужно причастие 'removed'."
        },
        {
            question: "Complete the sentence about UV treatment:",
            questionRu: "Дополните предложение об УФ-обработке:",
            sentence: "The filtered water ____ to ultraviolet light to destroy any remaining micro-organisms.",
            correctAnswer: "is exposed",
            options: ["is exposed", "are exposed", "exposed", "is exposing"],
            correctFeedback: "Correct! 'Is exposed' — 'the filtered water' is singular. 'Exposed to' in the passive means 'subjected to or brought into contact with'. 'Exposed' alone without 'is' cannot function as the main present passive verb — it needs the auxiliary.",
            correctFeedbackRu: "Правильно! 'Is exposed' — 'the filtered water' — единственное число. 'Exposed to' в пассиве означает 'подвергнутый воздействию'. 'Exposed' без 'is' не может быть главным пассивным глаголом.",
            incorrectFeedback: "'The filtered water' is singular — use 'is exposed'. 'Exposed' alone without 'is' functions as an adjective or past simple, not as a present passive main verb. The full structure requires: is + past participle.",
            incorrectFeedbackRu: "'The filtered water' — единственное число, используем 'is exposed'. 'Exposed' без 'is' функционирует как прилагательное или Past Simple. Полная структура требует: is + причастие."
        },
        {
            question: "Fill in the gap about reservoir storage:",
            questionRu: "Заполните пропуск о хранении в резервуарах:",
            sentence: "Treated water ____ in covered service reservoirs to protect it from contamination.",
            correctAnswer: "is held",
            options: ["is held", "are held", "holds", "is hold"],
            correctFeedback: "Correct! 'Is held' — 'treated water' is uncountable and singular. 'Is hold' is wrong because 'hold' is the base form, not the past participle. The past participle of 'hold' is 'held' (irregular: hold / held / held). 'Is held' here means 'is kept or stored'.",
            correctFeedbackRu: "Правильно! 'Is held' — 'treated water' несчитаемое, единственное число. 'Is hold' неверно: 'hold' — базовая форма, а не причастие. Причастие от 'hold' — 'held' (неправильный: hold / held / held). 'Is held' означает 'хранится'.",
            incorrectFeedback: "'Treated water' is uncountable and singular — use 'is'. 'Is hold' is incorrect: 'hold' is an irregular verb and its past participle is 'held', not 'hold'. The passive requires: is + past participle (held).",
            incorrectFeedbackRu: "'Treated water' несчитаемое, единственное число — используем 'is'. 'Is hold' неверно: 'hold' неправильный глагол, причастие — 'held'. Пассив требует: is + причастие (held)."
        },
        {
            question: "Complete the sentence about pressure maintenance:",
            questionRu: "Дополните предложение об обслуживании давления:",
            sentence: "Sufficient pressure in the distribution pipes ____ by pumping stations located throughout the network.",
            correctAnswer: "is maintained",
            options: ["is maintained", "are maintained", "maintains", "is maintain"],
            correctFeedback: "Correct! 'Is maintained' — 'sufficient pressure' is singular (uncountable). The agent 'by pumping stations located throughout the network' contains a past participle 'located' used as an adjective to describe the stations. This kind of reduced relative clause is common in B2 academic writing.",
            correctFeedbackRu: "Правильно! 'Is maintained' — 'sufficient pressure' — единственное число (несчитаемое). 'By pumping stations located throughout the network' содержит 'located' как прилагательное. Такое сокращённое придаточное типично для академического письма B2.",
            incorrectFeedback: "'Sufficient pressure' is uncountable and singular — use 'is maintained'. 'Is maintain' is wrong: the passive needs the past participle 'maintained', not the base form 'maintain'.",
            incorrectFeedbackRu: "'Sufficient pressure' несчитаемое, единственное число — используем 'is maintained'. 'Is maintain' неверно: пассив требует причастие 'maintained'."
        },
        {
            question: "Fill in the gap about monitoring:",
            questionRu: "Заполните пропуск о мониторинге:",
            sentence: "The quality of drinking water ____ against the standards set by national health authorities.",
            correctAnswer: "is checked",
            options: ["is checked", "are checked", "checks", "is checking"],
            correctFeedback: "Correct! 'Is checked' — 'the quality of drinking water' — the head noun is 'quality' (singular). The prepositional phrase 'of drinking water' modifies 'quality' but does not change its singular number. 'Against the standards' means 'in comparison with the standards'.",
            correctFeedbackRu: "Правильно! 'Is checked' — в 'the quality of drinking water' главное существительное 'quality' — единственное число. 'Of drinking water' уточняет 'quality', не меняя число. 'Against the standards' означает 'в сравнении со стандартами'.",
            incorrectFeedback: "The main subject is 'the quality' (singular) — use 'is checked'. The phrase 'of drinking water' is a modifier; it does not change the subject number. Always identify the head noun to determine the correct verb form.",
            incorrectFeedbackRu: "Главное подлежащее — 'the quality' (единственное число), используем 'is checked'. 'Of drinking water' — уточнение, не меняющее число. Всегда определяйте главное существительное."
        }
    ]
};

/* ============================================
Page 5: Fill in the Gaps - Paper Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-gap-page5'] = {
    title: "Process Description - Paper Manufacturing",
    fillGaps: [
        {
            question: "Complete the sentence with the correct passive form:",
            questionRu: "Заполните предложение правильной формой пассивного залога:",
            sentence: "Timber from certified forests ____ to the paper mill on flatbed trucks.",
            correctAnswer: "is delivered",
            options: ["is delivered", "are delivered", "delivers", "is deliver"],
            correctFeedback: "Correct! 'Is delivered' — 'timber' is an uncountable noun and is always singular. 'Is deliver' is wrong: after 'is' you need the past participle 'delivered', not the base form 'deliver'. The phrase 'from certified forests' modifies 'timber' but does not change its number.",
            correctFeedbackRu: "Правильно! 'Is delivered' — 'timber' несчитаемое, всегда единственное число. 'Is deliver' неверно: после 'is' нужно причастие 'delivered'. 'From certified forests' уточняет 'timber', не меняя число.",
            incorrectFeedback: "'Timber' is uncountable and singular — use 'is delivered'. 'Is deliver' is incorrect: the passive structure requires the past participle 'delivered', not the base form. Base forms follow modal verbs, not 'is/are'.",
            incorrectFeedbackRu: "'Timber' несчитаемое, единственное число — используем 'is delivered'. 'Is deliver' неверно: пассивная структура требует причастие 'delivered'."
        },
        {
            question: "Fill in the gap about log storage:",
            questionRu: "Заполните пропуск о хранении брёвен:",
            sentence: "Logs ____ in large outdoor stockpiles and kept moist to prevent the wood from drying out.",
            correctAnswer: "are stored",
            options: ["are stored", "is stored", "stored", "are storing"],
            correctFeedback: "Correct! 'Are stored' — 'logs' is plural. The parallel passive structure 'are stored...and kept' shows two actions sharing the auxiliary 'are'. The purpose 'to prevent the wood from drying out' uses 'prevent + noun + from + -ing', a useful B2 structure.",
            correctFeedbackRu: "Правильно! 'Are stored' — 'logs' — множественное число. Параллельная пассивная структура 'are stored...and kept' показывает два действия с общим 'are'. 'Prevent + существительное + from + -ing' — полезная структура B2.",
            incorrectFeedback: "'Logs' is plural — use 'are stored'. 'Stored' alone without the auxiliary 'are' cannot serve as the main present passive verb. 'Are storing' is active continuous — the logs are storing something.",
            incorrectFeedbackRu: "'Logs' — множественное число, используем 'are stored'. 'Stored' без 'are' не может быть пассивным глаголом. 'Are storing' — активный Continuous."
        },
        {
            question: "Complete the sentence about chip screening:",
            questionRu: "Дополните предложение о сортировке щепы:",
            sentence: "Oversized and undersized chips ____ out and recycled or returned to the chipping stage.",
            correctAnswer: "are screened",
            options: ["are screened", "is screened", "screen", "are screening"],
            correctFeedback: "Correct! 'Are screened' — 'oversized and undersized chips' is plural (two types joined by 'and'). 'Screened out' is a phrasal verb in the passive — the particle 'out' stays with 'screened'. The parallel structure 'are screened...and recycled or returned' lists three outcomes.",
            correctFeedbackRu: "Правильно! 'Are screened' — 'oversized and undersized chips' — множественное число. 'Screened out' — фразовый глагол в пассиве, частица 'out' остаётся. Параллельная структура перечисляет три исхода.",
            incorrectFeedback: "'Oversized and undersized chips' is plural — use 'are screened'. 'Are screening' is active, meaning the chips are screening something. The passive 'are screened' shows the chips receive the action of being sorted.",
            incorrectFeedbackRu: "'Oversized and undersized chips' — множественное число, используем 'are screened'. 'Are screening' — активный залог. Пассивное 'are screened' показывает, что чипсы получают действие сортировки."
        },
        {
            question: "Fill in the gap about chemical pulping:",
            questionRu: "Заполните пропуск о химическом производстве целлюлозы:",
            sentence: "In the Kraft process, wood chips ____ in a pressurised vessel called a digester.",
            correctAnswer: "are cooked",
            options: ["are cooked", "is cooked", "cook", "cooked"],
            correctFeedback: "Correct! 'Are cooked' — 'wood chips' is plural. 'Cooked' here is used in its industrial sense of 'processed with heat and chemicals'. 'Cooked' alone without 'are' cannot function as the main present passive verb — it would read as a past simple.",
            correctFeedbackRu: "Правильно! 'Are cooked' — 'wood chips' — множественное число. 'Cooked' используется в промышленном смысле 'обрабатывается с теплом и химикатами'. 'Cooked' без 'are' не может быть пассивным глаголом — читается как Past Simple.",
            incorrectFeedback: "'Wood chips' is plural — use 'are cooked'. 'Cooked' alone without 'are' cannot be the present passive main verb — without the auxiliary, it reads as an adjective or past simple. The passive structure requires: are + past participle.",
            incorrectFeedbackRu: "'Wood chips' — множественное число, используем 'are cooked'. 'Cooked' без 'are' читается как прилагательное или Past Simple. Пассивная структура требует: are + причастие."
        },
        {
            question: "Complete the sentence about washing the pulp:",
            questionRu: "Дополните предложение о промывке целлюлозы:",
            sentence: "The cooked pulp ____ thoroughly to remove the spent cooking chemicals.",
            correctAnswer: "is washed",
            options: ["is washed", "are washed", "washes", "is washing"],
            correctFeedback: "Correct! 'Is washed' — 'the cooked pulp' is singular (uncountable). The adverb 'thoroughly' describes how the washing is done and sits naturally between the auxiliary and the past participle or after the full passive verb. 'Is washing' is present continuous passive, not suitable here.",
            correctFeedbackRu: "Правильно! 'Is washed' — 'the cooked pulp' — единственное число (несчитаемое). 'Thoroughly' описывает, как выполняется промывка. 'Is washing' — Present Continuous Passive, неуместный здесь.",
            incorrectFeedback: "'The cooked pulp' is uncountable and singular — use 'is washed'. 'Is washing' is present continuous passive — it describes a temporary action currently happening, not a standard process step.",
            incorrectFeedbackRu: "'The cooked pulp' несчитаемое, единственное число — используем 'is washed'. 'Is washing' — Present Continuous Passive для временного действия."
        },
        {
            question: "Fill in the gap about refining:",
            questionRu: "Заполните пропуск об облагораживании:",
            sentence: "The pulp fibres ____ between metal discs to improve their bonding properties.",
            correctAnswer: "are refined",
            options: ["are refined", "is refined", "refine", "are refining"],
            correctFeedback: "Correct! 'Are refined' — 'the pulp fibres' is plural. 'Between metal discs' describes the location where refining occurs. 'To improve their bonding properties' is a purpose infinitive. Using 'to + infinitive' for purpose is a key feature of B2 process descriptions.",
            correctFeedbackRu: "Правильно! 'Are refined' — 'the pulp fibres' — множественное число. 'Between metal discs' описывает место. 'To improve their bonding properties' — инфинитив цели, ключевая черта B2.",
            incorrectFeedback: "'The pulp fibres' is plural — use 'are refined'. 'Are refining' is active continuous — the fibres are refining something. The passive 'are refined' correctly shows the fibres receive the action of being processed by the discs.",
            incorrectFeedbackRu: "'The pulp fibres' — множественное число, используем 'are refined'. 'Are refining' — активный Continuous. Пассивное 'are refined' правильно показывает, что волокна получают действие."
        },
        {
            question: "Complete the sentence about the headbox:",
            questionRu: "Дополните предложение о напорном ящике:",
            sentence: "The diluted pulp suspension ____ evenly across the full width of the moving wire mesh.",
            correctAnswer: "is distributed",
            options: ["is distributed", "are distributed", "distributes", "is distributing"],
            correctFeedback: "Correct! 'Is distributed' — 'the diluted pulp suspension' is singular. The adverb 'evenly' describes how the distribution is done. 'Across the full width of the moving wire mesh' describes where — both are typical process description details at B2 level.",
            correctFeedbackRu: "Правильно! 'Is distributed' — 'the diluted pulp suspension' — единственное число. 'Evenly' описывает способ. 'Across the full width' описывает место — типичные детали описания процессов B2.",
            incorrectFeedback: "'The diluted pulp suspension' is singular — use 'is distributed'. 'Is distributing' is present continuous passive, implying a temporary current action. For a standard manufacturing step, use present simple passive.",
            incorrectFeedbackRu: "'The diluted pulp suspension' — единственное число, используем 'is distributed'. 'Is distributing' — Present Continuous Passive. Для стандартного производственного шага используйте Present Simple Passive."
        },
        {
            question: "Fill in the gap about the drying cylinders:",
            questionRu: "Заполните пропуск о сушильных цилиндрах:",
            sentence: "The wet paper web ____ around a series of steam-heated drying cylinders.",
            correctAnswer: "is wrapped",
            options: ["is wrapped", "are wrapped", "wraps", "is wrapping"],
            correctFeedback: "Correct! 'Is wrapped' — 'the wet paper web' is singular. 'Around a series of steam-heated drying cylinders' describes the path the paper takes. The compound adjective 'steam-heated' uses a hyphen because it modifies 'drying cylinders' as a unit.",
            correctFeedbackRu: "Правильно! 'Is wrapped' — 'the wet paper web' — единственное число. 'Around a series of steam-heated drying cylinders' описывает путь бумаги. Составное прилагательное 'steam-heated' пишется через дефис.",
            incorrectFeedback: "'The wet paper web' is singular — use 'is wrapped'. 'Wraps' is active voice (the web wraps itself). The passive 'is wrapped' shows that the machinery controls this action. 'Is wrapping' is present continuous passive, not suitable for a routine step.",
            incorrectFeedbackRu: "'The wet paper web' — единственное число, используем 'is wrapped'. 'Wraps' — активный залог. 'Is wrapping' — Present Continuous Passive, неуместный для рутинного шага."
        },
        {
            question: "Complete the sentence about calendering:",
            questionRu: "Дополните предложение о каландрировании:",
            sentence: "The dried paper ____ between polished steel rollers to achieve a smooth, uniform surface.",
            correctAnswer: "is compressed",
            options: ["is compressed", "are compressed", "compresses", "compressed"],
            correctFeedback: "Correct! 'Is compressed' — 'the dried paper' is singular. 'Between polished steel rollers' describes the method. 'To achieve a smooth, uniform surface' is a purpose infinitive. 'Compressed' alone without 'is' cannot function as the main present passive verb.",
            correctFeedbackRu: "Правильно! 'Is compressed' — 'the dried paper' — единственное число. 'Between polished steel rollers' описывает метод. 'Compressed' без 'is' не может быть пассивным глаголом.",
            incorrectFeedback: "'The dried paper' is singular (uncountable) — use 'is compressed'. 'Compressed' alone without 'is' cannot be the present passive main verb — it reads as an adjective or past simple without the auxiliary.",
            incorrectFeedbackRu: "'The dried paper' несчитаемое, единственное число — используем 'is compressed'. 'Compressed' без 'is' читается как прилагательное или Past Simple."
        },
        {
            question: "Fill in the gap about the reel section:",
            questionRu: "Заполните пропуск о секции намотки:",
            sentence: "At the end of the paper machine, the continuous sheet ____ onto large reels for further processing.",
            correctAnswer: "is wound",
            options: ["is wound", "are wound", "is winded", "winds"],
            correctFeedback: "Correct! 'Is wound' — 'the continuous sheet' is singular. 'Wind' is irregular: wind / wound / wound. 'Is winded' is wrong — 'winded' (out of breath) is a completely different word from 'wound' (past participle of 'wind' meaning to coil). These must not be confused.",
            correctFeedbackRu: "Правильно! 'Is wound' — 'the continuous sheet' — единственное число. 'Wind' неправильный: wind / wound / wound. 'Is winded' неверно: 'winded' (запыхавшийся) — совершенно другое слово. Их нельзя путать.",
            incorrectFeedback: "'The continuous sheet' is singular — use 'is wound'. 'Is winded' is wrong: 'winded' means short of breath and is unrelated to the verb 'wind' (to coil). The irregular past participle of 'wind' (to coil/roll) is 'wound'. Do not confuse these two words.",
            incorrectFeedbackRu: "'The continuous sheet' — единственное число, используем 'is wound'. 'Is winded' неверно: 'winded' означает 'запыхавшийся', не связанный с глаголом 'wind' (наматывать). Причастие от 'wind' (наматывать) — 'wound'."
        }
    ]
};

/* ============================================
Page 6: Fill in the Gaps - Chocolate Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-gap-page6'] = {
    title: "Process Description - Chocolate Manufacturing",
    fillGaps: [
        {
            question: "Complete the sentence with the correct passive form:",
            questionRu: "Заполните предложение правильной формой пассивного залога:",
            sentence: "Ripe cacao pods ____ from the trunk and main branches of the tree with a sharp blade.",
            correctAnswer: "are cut",
            options: ["are cut", "is cut", "are cutted", "cut"],
            correctFeedback: "Correct! 'Are cut' — 'ripe cacao pods' is plural. 'Cut' is an irregular verb where all three forms are identical: cut / cut / cut. 'Are cutted' does not exist — never add -ed to irregular verbs. 'With a sharp blade' describes the instrument used.",
            correctFeedbackRu: "Правильно! 'Are cut' — 'ripe cacao pods' — множественное число. 'Cut' — неправильный глагол, все три формы одинаковы: cut / cut / cut. 'Are cutted' не существует. 'With a sharp blade' описывает используемый инструмент.",
            incorrectFeedback: "'Ripe cacao pods' is plural — use 'are cut'. 'Are cutted' is wrong: 'cut' is irregular and its past participle is 'cut', not 'cutted'. Never add -ed to irregular verbs. Check past participles carefully before forming the passive.",
            incorrectFeedbackRu: "'Ripe cacao pods' — множественное число, используем 'are cut'. 'Are cutted' неверно: 'cut' неправильный глагол, причастие — 'cut'. Никогда не добавляйте -ed к неправильным глаголам."
        },
        {
            question: "Fill in the gap about pod opening:",
            questionRu: "Заполните пропуск об открытии стручков:",
            sentence: "Each harvested pod ____ open with a machete to access the seeds inside.",
            correctAnswer: "is split",
            options: ["is split", "are split", "is splits", "splits"],
            correctFeedback: "Correct! 'Is split' — 'each harvested pod' is singular ('each' always takes a singular verb). 'Split' is another irregular verb where all three forms are identical: split / split / split. 'Is splits' is impossible — the passive is 'is/are + past participle', not 'is + verb-s'.",
            correctFeedbackRu: "Правильно! 'Is split' — 'each harvested pod' — единственное число ('each' всегда принимает единственное число). 'Split' — неправильный глагол, все три формы одинаковы: split / split / split. 'Is splits' невозможно.",
            incorrectFeedback: "'Each pod' requires a singular verb — use 'is split'. 'Split' is irregular: its past participle is 'split', not 'splitted'. 'Is splits' is not a valid form — the passive is 'is + past participle', never 'is + verb + -s'.",
            incorrectFeedbackRu: "'Each pod' требует единственное число — используем 'is split'. 'Split' неправильный: причастие — 'split'. 'Is splits' недопустимо — пассив: 'is + причастие'."
        },
        {
            question: "Complete the sentence about the winnowing stage:",
            questionRu: "Дополните предложение об этапе провеивания:",
            sentence: "After roasting, the brittle shells ____ away from the nibs using a current of air.",
            correctAnswer: "are blown",
            options: ["are blown", "is blown", "are blowed", "blow"],
            correctFeedback: "Correct! 'Are blown' — 'the brittle shells' is plural. 'Blow' is irregular: blow / blew / blown. 'Are blowed' does not exist — the past participle is 'blown', not 'blowed'. 'Away from the nibs' describes the direction — 'blown away from' is a phrasal verb in the passive.",
            correctFeedbackRu: "Правильно! 'Are blown' — 'the brittle shells' — множественное число. 'Blow' неправильный: blow / blew / blown. 'Are blowed' не существует — причастие 'blown'. 'Away from the nibs' описывает направление.",
            incorrectFeedback: "'The brittle shells' is plural — use 'are blown'. 'Are blowed' is wrong: 'blow' is irregular and its past participle is 'blown', not 'blowed'. The correct form is 'are blown'.",
            incorrectFeedbackRu: "'The brittle shells' — множественное число, используем 'are blown'. 'Are blowed' неверно: 'blow' неправильный глагол, причастие — 'blown'."
        },
        {
            question: "Fill in the gap about grinding the nibs:",
            questionRu: "Заполните пропуск об измельчении какао-крупки:",
            sentence: "The cocoa nibs ____ between heavy stone or steel rollers until they form a paste.",
            correctAnswer: "are ground",
            options: ["are ground", "is ground", "are grinded", "ground"],
            correctFeedback: "Correct! 'Are ground' — 'the cocoa nibs' is plural. 'Grind' is irregular: grind / ground / ground. 'Are grinded' does not exist. The result clause 'until they form a paste' uses present simple active because the paste forms naturally as a result of the grinding process.",
            correctFeedbackRu: "Правильно! 'Are ground' — 'the cocoa nibs' — множественное число. 'Grind' неправильный: grind / ground / ground. 'Are grinded' не существует. 'Until they form a paste' — активный Present Simple, потому что паста образуется естественно.",
            incorrectFeedback: "'The cocoa nibs' is plural — use 'are ground'. 'Are grinded' does not exist: 'grind' is irregular, so the past participle is 'ground', not 'grinded'. Never add -ed to an irregular verb.",
            incorrectFeedbackRu: "'The cocoa nibs' — множественное число, используем 'are ground'. 'Are grinded' не существует: 'grind' неправильный, причастие — 'ground'."
        },
        {
            question: "Complete the sentence about pressing:",
            questionRu: "Дополните предложение о прессовании:",
            sentence: "Cocoa butter ____ from the paste under high pressure to produce cocoa powder.",
            correctAnswer: "is extracted",
            options: ["is extracted", "are extracted", "extracts", "is extracting"],
            correctFeedback: "Correct! 'Is extracted' — 'cocoa butter' is uncountable and singular. 'To produce cocoa powder' is a purpose infinitive. Note that 'from the paste' (source) uses 'from', while the agent in a passive would use 'by'. These are different uses of prepositions.",
            correctFeedbackRu: "Правильно! 'Is extracted' — 'cocoa butter' несчитаемое, единственное число. 'To produce cocoa powder' — инфинитив цели. 'From the paste' (источник) использует 'from', а агент в пассиве — 'by'. Это разные использования предлогов.",
            incorrectFeedback: "'Cocoa butter' is uncountable and singular — use 'is extracted'. 'Is extracting' is present continuous passive, not appropriate for a standard process step. Use present simple passive: 'is extracted'.",
            incorrectFeedbackRu: "'Cocoa butter' несчитаемое, единственное число — используем 'is extracted'. 'Is extracting' — Present Continuous Passive, неуместный для стандартного шага."
        },
        {
            question: "Fill in the gap about mixing ingredients:",
            questionRu: "Заполните пропуск о смешивании ингредиентов:",
            sentence: "Cocoa butter, sugar, and milk powder ____ to the chocolate liquor in precise quantities.",
            correctAnswer: "are added",
            options: ["are added", "is added", "add", "are adding"],
            correctFeedback: "Correct! 'Are added' — 'cocoa butter, sugar, and milk powder' are three items joined by 'and', forming a plural subject. 'In precise quantities' emphasises the controlled nature of the process. 'Are adding' is active continuous, meaning the ingredients are adding something.",
            correctFeedbackRu: "Правильно! 'Are added' — три компонента с 'and', множественное число. 'In precise quantities' подчёркивает контролируемый характер процесса. 'Are adding' — активный Continuous.",
            incorrectFeedback: "Three items joined by 'and' always form a plural subject — use 'are added'. 'Are adding' is active, meaning the ingredients are actively adding something to something else. The passive 'are added' shows the ingredients receive the action of being put in.",
            incorrectFeedbackRu: "Три компонента с 'and' всегда образуют множественное число — используем 'are added'. 'Are adding' — активный залог. Пассивное 'are added' показывает, что ингредиенты получают действие добавления."
        },
        {
            question: "Complete the sentence about refining:",
            questionRu: "Дополните предложение об облагораживании:",
            sentence: "The chocolate mixture ____ repeatedly between rollers to reduce the particle size.",
            correctAnswer: "is refined",
            options: ["is refined", "are refined", "refines", "is refining"],
            correctFeedback: "Correct! 'Is refined' — 'the chocolate mixture' is singular. The adverb 'repeatedly' tells us this happens more than once. 'To reduce the particle size' is a purpose infinitive. 'Is refining' is present continuous passive — not suitable for describing a routine manufacturing step.",
            correctFeedbackRu: "Правильно! 'Is refined' — 'the chocolate mixture' — единственное число. 'Repeatedly' говорит, что это происходит неоднократно. 'To reduce the particle size' — инфинитив цели. 'Is refining' — Present Continuous Passive.",
            incorrectFeedback: "'The chocolate mixture' is singular — use 'is refined'. 'Is refining' is present continuous passive, used for temporary actions. For a regular manufacturing step repeated each time, use present simple passive: 'is refined'.",
            incorrectFeedbackRu: "'The chocolate mixture' — единственное число, используем 'is refined'. 'Is refining' — Present Continuous Passive для временных действий. Для регулярного шага используйте Present Simple Passive."
        },
        {
            question: "Fill in the gap about wrapping:",
            questionRu: "Заполните пропуск об обёртке:",
            sentence: "Each individual chocolate bar ____ in foil and then in a branded outer wrapper.",
            correctAnswer: "is wrapped",
            options: ["is wrapped", "are wrapped", "wraps", "is wrap"],
            correctFeedback: "Correct! 'Is wrapped' — 'each individual chocolate bar' is singular. 'Each' always requires a singular verb. 'Is wrap' is wrong: after 'is' you need the past participle 'wrapped', not the base form 'wrap'. 'In foil and then in a branded outer wrapper' describes the two layers of packaging.",
            correctFeedbackRu: "Правильно! 'Is wrapped' — 'each individual chocolate bar' — единственное число. 'Each' всегда требует единственного числа. 'Is wrap' неверно: после 'is' нужно причастие 'wrapped'.",
            incorrectFeedback: "'Each individual chocolate bar' requires a singular verb because 'each' always takes singular agreement. Use 'is wrapped'. 'Is wrap' is incorrect: the passive needs the past participle 'wrapped', not the base form 'wrap'.",
            incorrectFeedbackRu: "'Each individual chocolate bar' требует единственное число, так как 'each' всегда принимает единственное число. Используем 'is wrapped'. 'Is wrap' неверно: пассив требует причастие 'wrapped'."
        },
        {
            question: "Complete the sentence about quality grading:",
            questionRu: "Дополните предложение о контроле качества:",
            sentence: "Finished products ____ into premium, standard, and economy grades for different markets.",
            correctAnswer: "are classified",
            options: ["are classified", "is classified", "classify", "are classifying"],
            correctFeedback: "Correct! 'Are classified' — 'finished products' is plural. 'Into premium, standard, and economy grades' describes the categories. 'For different markets' explains the purpose. 'Are classifying' is active, meaning the products classify something — this makes no sense here.",
            correctFeedbackRu: "Правильно! 'Are classified' — 'finished products' — множественное число. 'Into premium, standard, and economy grades' описывает категории. 'Are classifying' — активный залог, означает, что продукты что-то классифицируют.",
            incorrectFeedback: "'Finished products' is plural — use 'are classified'. 'Are classifying' is active continuous — the products are classifying something, which makes no sense. The passive 'are classified' correctly shows the products receive the action of being sorted into categories.",
            incorrectFeedbackRu: "'Finished products' — множественное число, используем 'are classified'. 'Are classifying' — активный Continuous. Пассивное 'are classified' показывает, что продукты получают действие сортировки."
        },
        {
            question: "Fill in the gap about dispatch:",
            questionRu: "Заполните пропуск об отправке:",
            sentence: "Boxes of finished chocolate products ____ to refrigerated distribution centres in insulated lorries.",
            correctAnswer: "are shipped",
            options: ["are shipped", "is shipped", "ship", "are ship"],
            correctFeedback: "Correct! 'Are shipped' — 'boxes of finished chocolate products' — the head noun is 'boxes' (plural). The prepositional phrase 'of finished chocolate products' modifies 'boxes' but does not change its plural number. 'Are ship' is impossible: after 'are' you need the past participle 'shipped'.",
            correctFeedbackRu: "Правильно! 'Are shipped' — главное существительное 'boxes' — множественное число. 'Of finished chocolate products' уточняет 'boxes', не меняя число. 'Are ship' невозможно: после 'are' нужно причастие 'shipped'.",
            incorrectFeedback: "The main subject is 'boxes' (plural) — use 'are shipped'. The phrase 'of finished chocolate products' is a modifier and doesn't change the subject number. 'Are ship' is not grammatically possible: after 'are' you always need the past participle.",
            incorrectFeedbackRu: "Главное подлежащее — 'boxes' (множественное число), используем 'are shipped'. 'Of finished chocolate products' — уточнение, не меняющее число."
        }
    ]
};

/* ============================================
Page 7: Fill in the Gaps - Steel Production
============================================ */
window.grammarExercises['passive']['process-description-gap-page7'] = {
    title: "Process Description - Steel Production",
    fillGaps: [
        {
            question: "Complete the sentence with the correct passive form:",
            questionRu: "Заполните предложение правильной формой пассивного залога:",
            sentence: "Iron ore ____ from the earth and crushed to reduce its size before processing.",
            correctAnswer: "is extracted",
            options: ["is extracted", "are extracted", "extracts", "is extract"],
            correctFeedback: "Correct! 'Is extracted' — 'iron ore' is uncountable and singular. The parallel structure 'is extracted...and crushed' shows two steps sharing the auxiliary 'is'. 'Is extract' is wrong: after 'is' you need the past participle 'extracted', not the base form.",
            correctFeedbackRu: "Правильно! 'Is extracted' — 'iron ore' несчитаемое, единственное число. Параллельная структура 'is extracted...and crushed' показывает два шага с общим 'is'. 'Is extract' неверно: нужно причастие 'extracted'.",
            incorrectFeedback: "'Iron ore' is uncountable and singular — use 'is extracted'. 'Is extract' is incorrect: the passive needs the past participle 'extracted', not the base form. Base forms only follow modal verbs.",
            incorrectFeedbackRu: "'Iron ore' несчитаемое, единственное число — используем 'is extracted'. 'Is extract' неверно: пассив требует причастие 'extracted'."
        },
        {
            question: "Fill in the gap about sintering:",
            questionRu: "Заполните пропуск об агломерации:",
            sentence: "Fine iron ore particles ____ into larger lumps called sinter before entering the blast furnace.",
            correctAnswer: "are fused",
            options: ["are fused", "is fused", "fuse", "fused"],
            correctFeedback: "Correct! 'Are fused' — 'fine iron ore particles' is plural. 'Called sinter' is a reduced relative clause used as a post-modifier. 'Fused' alone without 'are' cannot function as the main present passive verb — the auxiliary is required.",
            correctFeedbackRu: "Правильно! 'Are fused' — 'fine iron ore particles' — множественное число. 'Called sinter' — сокращённое придаточное. 'Fused' без 'are' не может быть пассивным глаголом — нужен вспомогательный.",
            incorrectFeedback: "'Fine iron ore particles' is plural — use 'are fused'. 'Fused' alone without the auxiliary 'are' cannot be the main present passive verb — it would read as a past simple or adjective.",
            incorrectFeedbackRu: "'Fine iron ore particles' — множественное число, используем 'are fused'. 'Fused' без 'are' читается как Past Simple или прилагательное."
        },
        {
            question: "Complete the sentence about reducing the iron:",
            questionRu: "Дополните предложение о восстановлении железа:",
            sentence: "Oxygen ____ from the iron ore by the carbon monoxide produced from burning coke.",
            correctAnswer: "is removed",
            options: ["is removed", "are removed", "removed", "is removing"],
            correctFeedback: "Correct! 'Is removed' — 'oxygen' is uncountable and singular. The agent 'by the carbon monoxide produced from burning coke' contains a past participle 'produced' used as an adjective — a compact way to add detail typical of B2 process descriptions.",
            correctFeedbackRu: "Правильно! 'Is removed' — 'oxygen' несчитаемое, единственное число. 'By the carbon monoxide produced from burning coke' содержит 'produced' как прилагательное — компактный способ добавить детали, типичный для B2.",
            incorrectFeedback: "'Oxygen' is uncountable and singular — use 'is removed'. 'Is removing' is present continuous passive, not suitable for a standard chemical process step. Use present simple passive 'is removed'.",
            incorrectFeedbackRu: "'Oxygen' несчитаемое, единственное число — используем 'is removed'. 'Is removing' — Present Continuous Passive. Используйте Present Simple Passive 'is removed'."
        },
        {
            question: "Fill in the gap about tapping the furnace:",
            questionRu: "Заполните пропуск о выпуске из печи:",
            sentence: "Molten iron ____ from the blast furnace periodically through an opening called a taphole.",
            correctAnswer: "is tapped",
            options: ["is tapped", "are tapped", "taps", "is tapping"],
            correctFeedback: "Correct! 'Is tapped' — 'molten iron' is uncountable and singular. 'Through an opening called a taphole' describes the route — 'called a taphole' is another reduced relative clause. The adverb 'periodically' indicates this is a regular but not continuous action.",
            correctFeedbackRu: "Правильно! 'Is tapped' — 'molten iron' несчитаемое, единственное число. 'Through an opening called a taphole' описывает путь. 'Periodically' указывает, что это регулярное, но не непрерывное действие.",
            incorrectFeedback: "'Molten iron' is uncountable and singular — use 'is tapped'. 'Is tapping' is present continuous passive, implying a temporary current action. 'Periodically' shows this is a regular but intermittent step — use present simple passive.",
            incorrectFeedbackRu: "'Molten iron' несчитаемое, единственное число — используем 'is tapped'. 'Is tapping' — Present Continuous Passive. 'Periodically' показывает, что это регулярный, но периодический шаг."
        },
        {
            question: "Complete the sentence about removing slag:",
            questionRu: "Дополните предложение об удалении шлака:",
            sentence: "The slag that floats on top of the molten iron ____ off before steelmaking begins.",
            correctAnswer: "is skimmed",
            options: ["is skimmed", "are skimmed", "skims", "is skimming"],
            correctFeedback: "Correct! 'Is skimmed' — the main subject is 'the slag' (singular, uncountable). The relative clause 'that floats on top of the molten iron' modifies 'the slag' but does not change its singular number. 'Skimmed off' is a phrasal verb used in the passive.",
            correctFeedbackRu: "Правильно! 'Is skimmed' — главное подлежащее 'the slag' (единственное число, несчитаемое). Придаточное 'that floats on top' уточняет 'the slag', не меняя число. 'Skimmed off' — фразовый глагол в пассиве.",
            incorrectFeedback: "The main subject is 'the slag' (singular) — use 'is skimmed'. The relative clause 'that floats...' modifies the subject but doesn't change its number. 'Is skimming' is present continuous passive, not suitable here.",
            incorrectFeedbackRu: "Главное подлежащее — 'the slag' (единственное число), используем 'is skimmed'. Придаточное не меняет число. 'Is skimming' — Present Continuous Passive."
        },
        {
            question: "Fill in the gap about the Basic Oxygen Furnace:",
            questionRu: "Заполните пропуск о кислородно-конверторном производстве:",
            sentence: "Carbon and other unwanted elements ____ by injecting a supersonic jet of oxygen.",
            correctAnswer: "are eliminated",
            options: ["are eliminated", "is eliminated", "eliminate", "eliminated"],
            correctFeedback: "Correct! 'Are eliminated' — 'carbon and other unwanted elements' is plural (two things joined by 'and'). 'By injecting a supersonic jet of oxygen' uses 'by + gerund' to describe the method. This 'by + -ing' structure explains how the result is achieved.",
            correctFeedbackRu: "Правильно! 'Are eliminated' — 'carbon and other unwanted elements' — множественное число (два предмета с 'and'). 'By injecting a supersonic jet of oxygen' — 'by + герундий' описывает метод.",
            incorrectFeedback: "'Carbon and other unwanted elements' is plural (two items joined by 'and') — use 'are eliminated'. 'Eliminated' alone without the auxiliary cannot be the main present passive verb.",
            incorrectFeedbackRu: "'Carbon and other unwanted elements' — множественное число (два предмета с 'and'), используем 'are eliminated'. 'Eliminated' без вспомогательного не может быть пассивным глаголом."
        },
        {
            question: "Complete the sentence about secondary metallurgy:",
            questionRu: "Дополните предложение о вторичной металлургии:",
            sentence: "The chemical composition of the steel ____ precisely in a ladle furnace before casting.",
            correctAnswer: "is adjusted",
            options: ["is adjusted", "are adjusted", "adjusts", "is adjusting"],
            correctFeedback: "Correct! 'Is adjusted' — 'the chemical composition' is singular. The adverb 'precisely' describes how finely the adjustment is made. 'Before casting' is a time phrase showing sequence. 'Is adjusting' is present continuous passive, not suitable for a regular process step.",
            correctFeedbackRu: "Правильно! 'Is adjusted' — 'the chemical composition' — единственное число. 'Precisely' описывает точность. 'Before casting' — временная фраза последовательности. 'Is adjusting' — Present Continuous Passive.",
            incorrectFeedback: "'The chemical composition' is singular — use 'is adjusted'. 'Is adjusting' is present continuous passive, describing a temporary action. For a standard process step, use present simple passive: 'is adjusted'.",
            incorrectFeedbackRu: "'The chemical composition' — единственное число, используем 'is adjusted'. 'Is adjusting' — Present Continuous Passive для временного действия. Для стандартного шага используйте Present Simple Passive."
        },
        {
            question: "Fill in the gap about continuous casting:",
            questionRu: "Заполните пропуск о непрерывном литье:",
            sentence: "Liquid steel ____ into a water-cooled mould at the top of the continuous caster.",
            correctAnswer: "is poured",
            options: ["is poured", "are poured", "pours", "is pour"],
            correctFeedback: "Correct! 'Is poured' — 'liquid steel' is uncountable and singular. 'Is pour' is wrong because the passive requires the past participle 'poured', not the base form 'pour'. 'Into a water-cooled mould' describes the direction and destination of the pouring.",
            correctFeedbackRu: "Правильно! 'Is poured' — 'liquid steel' несчитаемое, единственное число. 'Is pour' неверно: пассив требует причастие 'poured'. 'Into a water-cooled mould' описывает направление.",
            incorrectFeedback: "'Liquid steel' is uncountable and singular — use 'is poured'. 'Is pour' is incorrect: the passive requires the past participle 'poured', not the base form 'pour'. Base forms only follow modal verbs.",
            incorrectFeedbackRu: "'Liquid steel' несчитаемое, единственное число — используем 'is poured'. 'Is pour' неверно: пассив требует причастие 'poured'."
        },
        {
            question: "Complete the sentence about descaling:",
            questionRu: "Дополните предложение об удалении окалины:",
            sentence: "The surface of the steel slab ____ with high-pressure water jets to remove the oxide scale.",
            correctAnswer: "is cleaned",
            options: ["is cleaned", "are cleaned", "cleans", "is cleaning"],
            correctFeedback: "Correct! 'Is cleaned' — 'the surface of the steel slab' — the head noun is 'surface' (singular). The phrase 'of the steel slab' modifies 'surface' but doesn't change its singular number. 'With high-pressure water jets' describes the instrument or method.",
            correctFeedbackRu: "Правильно! 'Is cleaned' — главное существительное 'surface' — единственное число. 'Of the steel slab' уточняет 'surface', не меняя число. 'With high-pressure water jets' описывает инструмент или метод.",
            incorrectFeedback: "The main subject is 'the surface' (singular) — use 'is cleaned'. The phrase 'of the steel slab' is a modifier; it does not affect the subject number. Always identify the head noun to determine the verb form.",
            incorrectFeedbackRu: "Главное подлежащее — 'the surface' (единственное число), используем 'is cleaned'. 'Of the steel slab' — уточнение, не влияющее на число."
        },
        {
            question: "Fill in the gap about coiling:",
            questionRu: "Заполните пропуск о намотке в рулон:",
            sentence: "After rolling, the hot steel strip ____ into coils while it is still at an elevated temperature.",
            correctAnswer: "is wound",
            options: ["is wound", "are wound", "is winded", "winds"],
            correctFeedback: "Correct! 'Is wound' — 'the hot steel strip' is singular. Irregular verb: wind / wound / wound. 'Is winded' is completely wrong — 'winded' means short of breath and has nothing to do with the verb 'wind' meaning to coil. The time clause 'while it is still at an elevated temperature' uses present simple.",
            correctFeedbackRu: "Правильно! 'Is wound' — 'the hot steel strip' — единственное число. Неправильный глагол: wind / wound / wound. 'Is winded' абсолютно неверно — 'winded' означает 'запыхавшийся', не связан с 'wind' (наматывать).",
            incorrectFeedback: "'The hot steel strip' is singular — use 'is wound'. 'Is winded' is wrong: 'winded' describes being short of breath and is a completely different word from 'wound', the past participle of 'wind' (to coil). Do not confuse them.",
            incorrectFeedbackRu: "'The hot steel strip' — единственное число, используем 'is wound'. 'Is winded' неверно: 'winded' — запыхавшийся, совершенно другое слово. Не путайте с 'wound' — причастием от 'wind' (наматывать)."
        }
    ]
};

/* ============================================
Page 8: Fill in the Gaps - Industrial Bread Baking
============================================ */
window.grammarExercises['passive']['process-description-gap-page8'] = {
    title: "Process Description - Industrial Bread Baking",
    fillGaps: [
        {
            question: "Complete the sentence with the correct passive form:",
            questionRu: "Заполните предложение правильной формой пассивного залога:",
            sentence: "High-protein wheat flour ____ from specialised mills certified for food production.",
            correctAnswer: "is sourced",
            options: ["is sourced", "are sourced", "sources", "is source"],
            correctFeedback: "Correct! 'Is sourced' — 'high-protein wheat flour' is uncountable and singular. 'Is source' is wrong: after 'is' you need the past participle 'sourced', not the base form 'source'. 'From specialised mills' describes the origin — 'sourced from' is a formal passive expression meaning 'obtained from'.",
            correctFeedbackRu: "Правильно! 'Is sourced' — 'high-protein wheat flour' несчитаемое, единственное число. 'Is source' неверно: после 'is' нужно причастие 'sourced'. 'From specialised mills' описывает источник — 'sourced from' означает 'получено из'.",
            incorrectFeedback: "'High-protein wheat flour' is uncountable and singular — use 'is sourced'. 'Is source' is incorrect: the passive requires the past participle 'sourced', not the base form. Base forms follow modal verbs, not 'is/are'.",
            incorrectFeedbackRu: "'High-protein wheat flour' несчитаемое, единственное число — используем 'is sourced'. 'Is source' неверно: пассив требует причастие 'sourced'."
        },
        {
            question: "Fill in the gap about sieving:",
            questionRu: "Заполните пропуск о просеивании:",
            sentence: "All dry ingredients ____ through a fine sieve to remove lumps and foreign bodies.",
            correctAnswer: "are passed",
            options: ["are passed", "is passed", "pass", "are past"],
            correctFeedback: "Correct! 'Are passed' — 'all dry ingredients' is plural. Remember: 'past' is never the past participle of 'pass'. 'Through a fine sieve' describes the path. 'To remove lumps and foreign bodies' is a purpose infinitive — a standard B2 structure in process descriptions.",
            correctFeedbackRu: "Правильно! 'Are passed' — 'all dry ingredients' — множественное число. 'Past' никогда не является причастием от 'pass'. 'Through a fine sieve' описывает путь. 'To remove lumps and foreign bodies' — инфинитив цели.",
            incorrectFeedback: "'All dry ingredients' is plural — use 'are passed'. 'Are past' is wrong: 'past' is not the past participle of 'pass' — they are completely different words. The past participle is always 'passed'.",
            incorrectFeedbackRu: "'All dry ingredients' — множественное число, используем 'are passed'. 'Are past' неверно: 'past' — не причастие от 'pass'. Причастие — всегда 'passed'."
        },
        {
            question: "Complete the sentence about water temperature:",
            questionRu: "Дополните предложение о температуре воды:",
            sentence: "The water used in the dough ____ to a controlled temperature to activate the yeast.",
            correctAnswer: "is heated",
            options: ["is heated", "are heated", "heats", "is heat"],
            correctFeedback: "Correct! 'Is heated' — 'the water' is uncountable and singular. 'Is heat' is wrong: the passive needs the past participle 'heated', not the base form 'heat'. 'To a controlled temperature' describes the target. 'To activate the yeast' is a purpose infinitive.",
            correctFeedbackRu: "Правильно! 'Is heated' — 'the water' несчитаемое, единственное число. 'Is heat' неверно: пассив требует причастие 'heated'. 'To a controlled temperature' описывает цель. 'To activate the yeast' — инфинитив цели.",
            incorrectFeedback: "'The water' is uncountable and singular — use 'is heated'. 'Is heat' is incorrect: you need the past participle 'heated' after 'is', not the base form. Base forms only follow modal verbs.",
            incorrectFeedbackRu: "'The water' несчитаемое, единственное число — используем 'is heated'. 'Is heat' неверно: после 'is' нужно причастие 'heated'."
        },
        {
            question: "Fill in the gap about bulk fermentation:",
            questionRu: "Заполните пропуск о брожении теста:",
            sentence: "The mixed dough ____ in large troughs at a carefully regulated temperature.",
            correctAnswer: "is fermented",
            options: ["is fermented", "are fermented", "ferments", "is fermenting"],
            correctFeedback: "Correct! 'Is fermented' — 'the mixed dough' is singular (uncountable). 'In large troughs' describes the location. 'At a carefully regulated temperature' describes the controlled conditions. 'Carefully regulated' shows that temperature control is deliberate, supporting the use of the passive.",
            correctFeedbackRu: "Правильно! 'Is fermented' — 'the mixed dough' — единственное число (несчитаемое). 'In large troughs' описывает место. 'At a carefully regulated temperature' — контролируемые условия, поддерживая использование пассива.",
            incorrectFeedback: "'The mixed dough' is uncountable and singular — use 'is fermented'. 'Is fermenting' is present continuous passive — describes a temporary action. For a standard process step, use present simple passive: 'is fermented'.",
            incorrectFeedbackRu: "'The mixed dough' несчитаемое, единственное число — используем 'is fermented'. 'Is fermenting' — Present Continuous Passive. Для стандартного шага используйте Present Simple Passive."
        },
        {
            question: "Complete the sentence about the divider:",
            questionRu: "Дополните предложение о делителе теста:",
            sentence: "The fermented dough ____ into equal portions by a volumetric dough divider.",
            correctAnswer: "is divided",
            options: ["is divided", "are divided", "divides", "is been divided"],
            correctFeedback: "Correct! 'Is divided' — 'the fermented dough' is singular. The agent 'by a volumetric dough divider' names the specific machine. 'Is been divided' is not valid English — present simple passive = 'is divided'; present perfect passive = 'has been divided'.",
            correctFeedbackRu: "Правильно! 'Is divided' — 'the fermented dough' — единственное число. 'By a volumetric dough divider' называет конкретную машину. 'Is been divided' недопустим: Present Simple Passive = 'is divided'; Present Perfect Passive = 'has been divided'.",
            incorrectFeedback: "'The fermented dough' is singular — use 'is divided'. 'Is been divided' does not exist: never combine 'is' with 'been'. Present simple passive = 'is divided'. Present perfect passive = 'has been divided'.",
            incorrectFeedbackRu: "'The fermented dough' — единственное число, используем 'is divided'. 'Is been divided' не существует. Present Simple Passive = 'is divided'. Present Perfect Passive = 'has been divided'."
        },
        {
            question: "Fill in the gap about moulding:",
            questionRu: "Заполните пропуск о формовке:",
            sentence: "Each dough portion ____ into the final loaf shape by a moulding machine.",
            correctAnswer: "is formed",
            options: ["is formed", "are formed", "forms", "formed"],
            correctFeedback: "Correct! 'Is formed' — 'each dough portion' is singular. The agent 'by a moulding machine' names the equipment. 'Formed' alone without 'is' cannot be the present passive main verb — the auxiliary is essential for the passive structure.",
            correctFeedbackRu: "Правильно! 'Is formed' — 'each dough portion' — единственное число. 'By a moulding machine' называет оборудование. 'Formed' без 'is' не может быть пассивным глаголом — вспомогательный необходим.",
            incorrectFeedback: "'Each dough portion' is singular ('each' always takes singular) — use 'is formed'. 'Formed' without the auxiliary 'is' reads as a past simple or adjective, not a present passive verb.",
            incorrectFeedbackRu: "'Each dough portion' — единственное число ('each' всегда единственное число), используем 'is formed'. 'Formed' без 'is' читается как Past Simple или прилагательное."
        },
        {
            question: "Complete the sentence about the prover:",
            questionRu: "Дополните предложение о расстоечном шкафу:",
            sentence: "The shaped loaves ____ through a humidity-controlled tunnel prover on a conveyor belt.",
            correctAnswer: "are conveyed",
            options: ["are conveyed", "is conveyed", "convey", "are conveying"],
            correctFeedback: "Correct! 'Are conveyed' — 'the shaped loaves' is plural. 'Through a humidity-controlled tunnel prover' describes the path. The compound adjective 'humidity-controlled' requires a hyphen. 'Are conveying' is active — the loaves are conveying something.",
            correctFeedbackRu: "Правильно! 'Are conveyed' — 'the shaped loaves' — множественное число. 'Through a humidity-controlled tunnel prover' описывает путь. Составное прилагательное 'humidity-controlled' требует дефиса. 'Are conveying' — активный залог.",
            incorrectFeedback: "'The shaped loaves' is plural — use 'are conveyed'. 'Are conveying' is active continuous — the loaves are conveying something. The passive 'are conveyed' correctly shows the loaves are moved through the prover by the conveyor system.",
            incorrectFeedbackRu: "'The shaped loaves' — множественное число, используем 'are conveyed'. 'Are conveying' — активный Continuous. Пассивное 'are conveyed' показывает, что хлебы перемещаются системой."
        },
        {
            question: "Fill in the gap about the oven:",
            questionRu: "Заполните пропуск о духовке:",
            sentence: "Steam ____ into the oven chamber at the start of baking to create a crisp crust.",
            correctAnswer: "is injected",
            options: ["is injected", "are injected", "injects", "is inject"],
            correctFeedback: "Correct! 'Is injected' — 'steam' is uncountable and singular. 'Is inject' is wrong: the passive requires the past participle 'injected', not the base form. 'To create a crisp crust' is a purpose infinitive. 'At the start of baking' is a time phrase indicating when this happens.",
            correctFeedbackRu: "Правильно! 'Is injected' — 'steam' несчитаемое, единственное число. 'Is inject' неверно: пассив требует причастие 'injected'. 'To create a crisp crust' — инфинитив цели. 'At the start of baking' — временная фраза.",
            incorrectFeedback: "'Steam' is uncountable and singular — use 'is injected'. 'Is inject' is wrong: after 'is' you need the past participle 'injected'. Base forms do not follow 'is/are' in the passive.",
            incorrectFeedbackRu: "'Steam' несчитаемое, единственное число — используем 'is injected'. 'Is inject' неверно: после 'is' нужно причастие 'injected'."
        },
        {
            question: "Complete the sentence about metal detection:",
            questionRu: "Дополните предложение о металлодетекции:",
            sentence: "Every packaged loaf ____ through a metal detector as a mandatory food safety measure.",
            correctAnswer: "is passed",
            options: ["is passed", "are passed", "is past", "passes"],
            correctFeedback: "Correct! 'Is passed' — 'every packaged loaf' is singular ('every' always takes singular). 'Is past' is wrong: 'past' is not the past participle of 'pass'. 'As a mandatory food safety measure' explains the reason using 'as + noun phrase', which is an alternative to 'to + infinitive'.",
            correctFeedbackRu: "Правильно! 'Is passed' — 'every packaged loaf' — единственное число ('every' всегда единственное). 'Is past' неверно: 'past' — не причастие от 'pass'. 'As a mandatory food safety measure' объясняет причину с 'as + именная группа'.",
            incorrectFeedback: "'Every packaged loaf' requires a singular verb ('every' always takes singular agreement). Use 'is passed'. 'Is past' is wrong: 'past' is not the past participle of 'pass' — these are completely different words.",
            incorrectFeedbackRu: "'Every packaged loaf' требует единственное число ('every' всегда единственное). Используем 'is passed'. 'Is past' неверно: 'past' — не причастие от 'pass'."
        },
        {
            question: "Fill in the gap about dispatch:",
            questionRu: "Заполните пропуск об отправке:",
            sentence: "Pallets of finished bread ____ in refrigerated lorries and delivered to stores overnight.",
            correctAnswer: "are loaded",
            options: ["are loaded", "is loaded", "load", "are loading"],
            correctFeedback: "Correct! 'Are loaded' — 'pallets of finished bread' — the head noun is 'pallets' (plural). The parallel structure 'are loaded...and delivered' shows two final steps sharing the auxiliary 'are'. 'Overnight' tells us when this happens — an important logistical detail.",
            correctFeedbackRu: "Правильно! 'Are loaded' — главное существительное 'pallets' — множественное число. Параллельная структура 'are loaded...and delivered' показывает два финальных шага с общим 'are'. 'Overnight' указывает время.",
            incorrectFeedback: "The main subject is 'pallets' (plural) — use 'are loaded'. 'Are loading' is active continuous, meaning the pallets are loading something. The passive 'are loaded' correctly shows the pallets receive the action of being loaded.",
            incorrectFeedbackRu: "Главное подлежащее — 'pallets' (множественное число), используем 'are loaded'. 'Are loading' — активный Continuous. Пассивное 'are loaded' правильно показывает, что поддоны получают действие."
        }
    ]
};

/* ============================================
Page 9: Fill in the Gaps - Wine Production
============================================ */
window.grammarExercises['passive']['process-description-gap-page9'] = {
    title: "Process Description - Wine Production",
    fillGaps: [
        {
            question: "Complete the sentence with the correct passive form:",
            questionRu: "Заполните предложение правильной формой пассивного залога:",
            sentence: "The vineyard soil ____ for mineral content and drainage capacity before planting.",
            correctAnswer: "is tested",
            options: ["is tested", "are tested", "tests", "is test"],
            correctFeedback: "Correct! 'Is tested' — 'the vineyard soil' is uncountable and singular. 'Is test' is wrong: after 'is' you need the past participle 'tested', not the base form. 'For mineral content and drainage capacity' lists what is being checked — 'tested for' is a common passive expression in scientific descriptions.",
            correctFeedbackRu: "Правильно! 'Is tested' — 'the vineyard soil' несчитаемое, единственное число. 'Is test' неверно: после 'is' нужно причастие 'tested'. 'For mineral content and drainage capacity' перечисляет, что проверяется.",
            incorrectFeedback: "'The vineyard soil' is uncountable and singular — use 'is tested'. 'Is test' is incorrect: the passive requires the past participle 'tested', not the base form 'test'. Base forms follow modal verbs, not 'is'.",
            incorrectFeedbackRu: "'The vineyard soil' несчитаемое, единственное число — используем 'is tested'. 'Is test' неверно: пассив требует причастие 'tested'."
        },
        {
            question: "Fill in the gap about canopy management:",
            questionRu: "Заполните пропуск об управлении кроной:",
            sentence: "The vine's leaves and shoots ____ regularly during the growing season to control yield.",
            correctAnswer: "are trimmed",
            options: ["are trimmed", "is trimmed", "trim", "trimmed"],
            correctFeedback: "Correct! 'Are trimmed' — 'the vine's leaves and shoots' is plural (two things joined by 'and'). 'During the growing season' is a time phrase, and 'to control yield' is a purpose infinitive. 'Trimmed' alone without 'are' cannot function as the present passive main verb.",
            correctFeedbackRu: "Правильно! 'Are trimmed' — 'the vine's leaves and shoots' — множественное число (два предмета с 'and'). 'During the growing season' — временная фраза, 'to control yield' — инфинитив цели. 'Trimmed' без 'are' не может быть пассивным глаголом.",
            incorrectFeedback: "'Leaves and shoots' is plural (two things joined by 'and') — use 'are trimmed'. 'Trimmed' without the auxiliary 'are' cannot be the main present passive verb — it reads as an adjective or past simple.",
            incorrectFeedbackRu: "'Leaves and shoots' — множественное число (два предмета с 'and'), используем 'are trimmed'. 'Trimmed' без 'are' читается как прилагательное или Past Simple."
        },
        {
            question: "Complete the sentence about destemming:",
            questionRu: "Дополните предложение об удалении гребней:",
            sentence: "The harvested grape bunches ____ from their stalks before crushing begins.",
            correctAnswer: "are removed",
            options: ["are removed", "is removed", "remove", "are remove"],
            correctFeedback: "Correct! 'Are removed' — 'the harvested grape bunches' is plural. 'From their stalks' uses 'from' to describe the source of separation — different from 'by' which introduces the passive agent. 'Are remove' is impossible: after 'are' you need the past participle 'removed'.",
            correctFeedbackRu: "Правильно! 'Are removed' — 'the harvested grape bunches' — множественное число. 'From their stalks' описывает источник разделения, отличаясь от 'by' (агент). 'Are remove' невозможно: после 'are' нужно причастие 'removed'.",
            incorrectFeedback: "'The harvested grape bunches' is plural — use 'are removed'. 'Are remove' is impossible: the passive requires the past participle 'removed' after 'are', never the base form.",
            incorrectFeedbackRu: "'The harvested grape bunches' — множественное число, используем 'are removed'. 'Are remove' невозможно: пассив требует причастие 'removed' после 'are'."
        },
        {
            question: "Fill in the gap about sulphur treatment:",
            questionRu: "Заполните пропуск об обработке серой:",
            sentence: "A small amount of sulphur dioxide ____ to the must to protect it from oxidation.",
            correctAnswer: "is added",
            options: ["is added", "are added", "adds", "is adding"],
            correctFeedback: "Correct! 'Is added' — 'a small amount of sulphur dioxide' — the head noun is 'amount' (singular). Even though sulphur dioxide is being described, 'amount' controls the agreement. 'To protect it from oxidation' is a purpose infinitive. 'Is adding' is present continuous passive.",
            correctFeedbackRu: "Правильно! 'Is added' — главное существительное 'amount' — единственное число. Хотя описывается диоксид серы, 'amount' управляет согласованием. 'To protect it from oxidation' — инфинитив цели. 'Is adding' — Present Continuous Passive.",
            incorrectFeedback: "The main subject is 'a small amount' (singular) — use 'is added'. 'Amount' is a singular noun that controls verb agreement, even when followed by a plural modifier ('of sulphur dioxide'). Use 'is', not 'are'.",
            incorrectFeedbackRu: "Главное подлежащее — 'a small amount' (единственное число), используем 'is added'. 'Amount' — существительное единственного числа, управляющее согласованием, даже перед множественным дополнением."
        },
        {
            question: "Complete the sentence about maceration:",
            questionRu: "Дополните предложение о мацерации:",
            sentence: "For red wine, the grape skins ____ in contact with the juice to extract colour and tannins.",
            correctAnswer: "are kept",
            options: ["are kept", "is kept", "keep", "are keeping"],
            correctFeedback: "Correct! 'Are kept' — 'the grape skins' is plural. 'Keep' is irregular: keep / kept / kept. 'In contact with the juice' describes the condition. 'To extract colour and tannins' is a purpose infinitive explaining why this step is done. 'Are keeping' is active continuous.",
            correctFeedbackRu: "Правильно! 'Are kept' — 'the grape skins' — множественное число. 'Keep' неправильный: keep / kept / kept. 'In contact with the juice' описывает условие. 'To extract colour and tannins' — инфинитив цели. 'Are keeping' — активный Continuous.",
            incorrectFeedback: "'The grape skins' is plural — use 'are kept'. 'Keep' is irregular: its past participle is 'kept'. 'Are keeping' is active, meaning the skins are keeping something. The passive 'are kept' shows the skins are deliberately maintained in contact with the juice.",
            incorrectFeedbackRu: "'The grape skins' — множественное число, используем 'are kept'. 'Keep' неправильный: причастие — 'kept'. 'Are keeping' — активный залог. Пассивное 'are kept' показывает намеренное удержание кожицы в контакте с соком."
        },
        {
            question: "Fill in the gap about racking:",
            questionRu: "Заполните пропуск о переливке:",
            sentence: "The young wine ____ from one vessel to another to separate it from the dead yeast cells.",
            correctAnswer: "is transferred",
            options: ["is transferred", "are transferred", "transfers", "is transferring"],
            correctFeedback: "Correct! 'Is transferred' — 'the young wine' is singular. 'From one vessel to another' describes the direction of transfer. 'To separate it from the dead yeast cells' is a purpose infinitive. 'Is transferring' is present continuous passive, not suitable for a routine winemaking step.",
            correctFeedbackRu: "Правильно! 'Is transferred' — 'the young wine' — единственное число. 'From one vessel to another' описывает направление. 'To separate it from the dead yeast cells' — инфинитив цели. 'Is transferring' — Present Continuous Passive.",
            incorrectFeedback: "'The young wine' is singular — use 'is transferred'. 'Is transferring' is present continuous passive, implying a temporary action. For a routine winemaking step, use present simple passive: 'is transferred'.",
            incorrectFeedbackRu: "'The young wine' — единственное число, используем 'is transferred'. 'Is transferring' — Present Continuous Passive. Для рутинного шага используйте Present Simple Passive."
        },
        {
            question: "Complete the sentence about fining:",
            questionRu: "Дополните предложение об оклейке:",
            sentence: "Fining agents such as bentonite clay ____ to the wine to attract and remove unwanted compounds.",
            correctAnswer: "are added",
            options: ["are added", "is added", "add", "are adding"],
            correctFeedback: "Correct! 'Are added' — the main subject is 'fining agents' (plural). 'Such as bentonite clay' provides an example and does not change the subject number. The infinitive 'to attract and remove unwanted compounds' gives the dual purpose of the fining agents.",
            correctFeedbackRu: "Правильно! 'Are added' — главное подлежащее 'fining agents' (множественное число). 'Such as bentonite clay' — пример, не меняющий число. Инфинитив 'to attract and remove unwanted compounds' даёт двойную цель.",
            incorrectFeedback: "The main subject is 'fining agents' (plural) — use 'are added'. 'Such as bentonite clay' is an example phrase and doesn't change the verb number. 'Are adding' is active, meaning the agents are adding something to something else.",
            incorrectFeedbackRu: "Главное подлежащее — 'fining agents' (множественное число), используем 'are added'. 'Such as bentonite clay' — пример, не меняющий число."
        },
        {
            question: "Fill in the gap about cold stabilisation:",
            questionRu: "Заполните пропуск о холодной стабилизации:",
            sentence: "The wine ____ to near-freezing temperatures for several weeks to prevent tartrate crystals forming.",
            correctAnswer: "is chilled",
            options: ["is chilled", "are chilled", "chills", "is chill"],
            correctFeedback: "Correct! 'Is chilled' — 'the wine' is singular. 'Is chill' is wrong: 'chill' used after 'is' must be the past participle 'chilled', not the base form or the adjective 'chill' (meaning cold/calm). 'To prevent tartrate crystals forming' uses 'prevent + noun + -ing' — a B2 structure.",
            correctFeedbackRu: "Правильно! 'Is chilled' — 'the wine' — единственное число. 'Is chill' неверно: после 'is' нужно причастие 'chilled', а не базовая форма или прилагательное 'chill'. 'To prevent tartrate crystals forming' — структура B2: 'prevent + существительное + -ing'.",
            incorrectFeedback: "'The wine' is singular — use 'is chilled'. 'Is chill' is wrong: 'chill' as an adjective means cold or relaxed, but here we need the past participle 'chilled' to form the passive. The base form or adjective cannot follow 'is' in a passive construction.",
            incorrectFeedbackRu: "'The wine' — единственное число, используем 'is chilled'. 'Is chill' неверно: 'chill' как прилагательное означает 'холодный/спокойный', но здесь нужно причастие 'chilled'."
        },
        {
            question: "Complete the sentence about bottling line sanitisation:",
            questionRu: "Дополните предложение о санитарной обработке линии разлива:",
            sentence: "All bottling equipment ____ with steam and chemical sanitisers before production starts.",
            correctAnswer: "is cleaned",
            options: ["is cleaned", "are cleaned", "cleans", "is cleaning"],
            correctFeedback: "Correct! 'Is cleaned' — 'all bottling equipment' — 'equipment' is an uncountable noun, always singular even though it refers to multiple items. 'With steam and chemical sanitisers' describes the instruments used. 'Before production starts' is a time clause using present simple active.",
            correctFeedbackRu: "Правильно! 'Is cleaned' — 'all bottling equipment' — 'equipment' несчитаемое, всегда единственное число, даже если относится ко многим предметам. 'With steam and chemical sanitisers' описывает используемые средства.",
            incorrectFeedback: "'All bottling equipment' — 'equipment' is uncountable and always singular, even though it refers to many items. Use 'is cleaned', not 'are cleaned'. Uncountable nouns always take singular verbs: equipment, furniture, information, news.",
            incorrectFeedbackRu: "'All bottling equipment' — 'equipment' несчитаемое, всегда единственное число, даже при множественном значении. Используем 'is cleaned'. Несчитаемые существительные всегда принимают единственное число: equipment, furniture, information, news."
        },
        {
            question: "Fill in the gap about cork insertion:",
            questionRu: "Заполните пропуск о вставке пробки:",
            sentence: "Natural or synthetic corks ____ into the bottle necks under controlled pressure.",
            correctAnswer: "are inserted",
            options: ["are inserted", "is inserted", "insert", "are insert"],
            correctFeedback: "Correct! 'Are inserted' — 'natural or synthetic corks' is plural. 'Are insert' is impossible: after 'are' you must use the past participle 'inserted', not the base form 'insert'. 'Under controlled pressure' describes the conditions under which the insertion takes place.",
            correctFeedbackRu: "Правильно! 'Are inserted' — 'natural or synthetic corks' — множественное число. 'Are insert' невозможно: после 'are' нужно причастие 'inserted'. 'Under controlled pressure' описывает условия.",
            incorrectFeedback: "'Natural or synthetic corks' is plural — use 'are inserted'. 'Are insert' is not grammatically possible: after 'are' you always need the past participle 'inserted', not the base form 'insert'.",
            incorrectFeedbackRu: "'Natural or synthetic corks' — множественное число, используем 'are inserted'. 'Are insert' грамматически невозможно: после 'are' всегда нужно причастие 'inserted'."
        }
    ]
};

/* ============================================
Page 10: Fill in the Gaps - Cement Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-gap-page10'] = {
    title: "Process Description - Cement Manufacturing",
    fillGaps: [
        {
            question: "Complete the sentence with the correct passive form:",
            questionRu: "Заполните предложение правильной формой пассивного залога:",
            sentence: "Rock samples from the quarry ____ to determine the chemical composition before extraction.",
            correctAnswer: "are analysed",
            options: ["are analysed", "is analysed", "analysed", "are analyse"],
            correctFeedback: "Correct! 'Are analysed' — 'rock samples' is plural. 'To determine the chemical composition' is a purpose infinitive. 'Are analyse' is impossible: after 'are' you must use the past participle 'analysed', not the base form 'analyse'. Note the British spelling 'analysed' (American: 'analyzed').",
            correctFeedbackRu: "Правильно! 'Are analysed' — 'rock samples' — множественное число. 'To determine the chemical composition' — инфинитив цели. 'Are analyse' невозможно: после 'are' нужно причастие 'analysed'. Британское написание 'analysed' (американское: 'analyzed').",
            incorrectFeedback: "'Rock samples' is plural — use 'are analysed'. 'Are analyse' is impossible: after 'are' you always need the past participle, not the base form. 'Analysed' alone without 'are' cannot function as the present passive main verb.",
            incorrectFeedbackRu: "'Rock samples' — множественное число, используем 'are analysed'. 'Are analyse' невозможно: после 'are' нужно причастие. 'Analysed' без 'are' не может быть пассивным глаголом."
        },
        {
            question: "Fill in the gap about blasting:",
            questionRu: "Заполните пропуск о взрывных работах:",
            sentence: "Holes ____ in the rock face and filled with explosives before the blast.",
            correctAnswer: "are drilled",
            options: ["are drilled", "is drilled", "drill", "are drilling"],
            correctFeedback: "Correct! 'Are drilled' — 'holes' is plural. The parallel passive 'are drilled...and filled' shows two steps sharing the auxiliary 'are'. 'Before the blast' is a time phrase. 'Are drilling' is active — the holes are drilling something, which makes no sense.",
            correctFeedbackRu: "Правильно! 'Are drilled' — 'holes' — множественное число. Параллельный пассив 'are drilled...and filled' показывает два шага с общим 'are'. 'Before the blast' — временная фраза. 'Are drilling' — активный залог.",
            incorrectFeedback: "'Holes' is plural — use 'are drilled'. 'Are drilling' is active — the holes are drilling something, which doesn't make sense. The passive 'are drilled' shows the holes receive the action of being drilled.",
            incorrectFeedbackRu: "'Holes' — множественное число, используем 'are drilled'. 'Are drilling' — активный залог. Пассивное 'are drilled' показывает, что отверстия получают действие бурения."
        },
        {
            question: "Complete the sentence about primary crushing:",
            questionRu: "Дополните предложение о первичном дроблении:",
            sentence: "Large limestone boulders ____ to pieces of about 150mm in primary jaw crushers.",
            correctAnswer: "are reduced",
            options: ["are reduced", "is reduced", "reduce", "are reducing"],
            correctFeedback: "Correct! 'Are reduced' — 'large limestone boulders' is plural. 'To pieces of about 150mm' describes the target size — giving measurements is a typical B2 process description detail. 'Are reducing' is active continuous, meaning the boulders are reducing something.",
            correctFeedbackRu: "Правильно! 'Are reduced' — 'large limestone boulders' — множественное число. 'To pieces of about 150mm' описывает целевой размер — указание размеров типично для B2. 'Are reducing' — активный Continuous.",
            incorrectFeedback: "'Large limestone boulders' is plural — use 'are reduced'. 'Are reducing' is active, meaning the boulders are reducing something else. The passive 'are reduced' correctly shows the boulders receive the action of being reduced in size.",
            incorrectFeedbackRu: "'Large limestone boulders' — множественное число, используем 'are reduced'. 'Are reducing' — активный залог. Пассивное 'are reduced' правильно показывает, что булыжники уменьшаются в размере."
        },
        {
            question: "Fill in the gap about proportioning:",
            questionRu: "Заполните пропуск о дозировании:",
            sentence: "The correct proportions of limestone, clay, and other materials ____ according to a precise formula.",
            correctAnswer: "are calculated",
            options: ["are calculated", "is calculated", "calculated", "are calculating"],
            correctFeedback: "Correct! 'Are calculated' — 'the correct proportions of limestone, clay, and other materials' — the head noun is 'proportions' (plural). 'According to a precise formula' is a formal phrase meaning 'following a formula'. 'Calculated' alone without 'are' cannot be the present passive main verb.",
            correctFeedbackRu: "Правильно! 'Are calculated' — главное существительное 'proportions' — множественное число. 'According to a precise formula' — формальная фраза. 'Calculated' без 'are' не может быть пассивным глаголом.",
            incorrectFeedback: "The main subject is 'proportions' (plural) — use 'are calculated'. 'Calculated' without 'are' cannot be the present passive main verb. 'According to a precise formula' means 'following an exact formula' — a useful B2 phrase.",
            incorrectFeedbackRu: "Главное подлежащее — 'proportions' (множественное число), используем 'are calculated'. 'Calculated' без 'are' не может быть пассивным глаголом."
        },
        {
            question: "Complete the sentence about raw meal preparation:",
            questionRu: "Дополните предложение о подготовке сырьевой муки:",
            sentence: "The blended raw materials ____ to a fine powder called 'raw meal' in large grinding mills.",
            correctAnswer: "are ground",
            options: ["are ground", "is ground", "are grinded", "ground"],
            correctFeedback: "Correct! 'Are ground' — 'the blended raw materials' is plural. Irregular verb: grind / ground / ground. 'Are grinded' does not exist. 'Called raw meal' is a reduced relative clause. 'Ground' alone without 'are' cannot be the main present passive verb.",
            correctFeedbackRu: "Правильно! 'Are ground' — 'the blended raw materials' — множественное число. Неправильный глагол: grind / ground / ground. 'Are grinded' не существует. 'Called raw meal' — сокращённое придаточное. 'Ground' без 'are' не может быть пассивным глаголом.",
            incorrectFeedback: "'The blended raw materials' is plural — use 'are ground'. 'Are grinded' does not exist: 'grind' is irregular, so its past participle is 'ground'. 'Ground' without the auxiliary 'are' cannot be the present passive main verb.",
            incorrectFeedbackRu: "'The blended raw materials' — множественное число, используем 'are ground'. 'Are grinded' не существует: 'grind' неправильный, причастие — 'ground'."
        },
        {
            question: "Fill in the gap about preheating:",
            questionRu: "Заполните пропуск о предварительном нагреве:",
            sentence: "The raw meal ____ progressively in a multi-stage cyclone preheater tower.",
            correctAnswer: "is heated",
            options: ["is heated", "are heated", "heats", "is heat"],
            correctFeedback: "Correct! 'Is heated' — 'the raw meal' is uncountable and singular. 'Progressively' describes the gradual nature of the heating. 'Is heat' is wrong: the passive requires the past participle 'heated' after 'is', not the base form. 'In a multi-stage cyclone preheater tower' names the equipment.",
            correctFeedbackRu: "Правильно! 'Is heated' — 'the raw meal' несчитаемое, единственное число. 'Progressively' описывает постепенный нагрев. 'Is heat' неверно: пассив требует причастие 'heated'. 'In a multi-stage cyclone preheater tower' называет оборудование.",
            incorrectFeedback: "'The raw meal' is uncountable and singular — use 'is heated'. 'Is heat' is incorrect: after 'is' you need the past participle 'heated', not the base form 'heat'.",
            incorrectFeedbackRu: "'The raw meal' несчитаемое, единственное число — используем 'is heated'. 'Is heat' неверно: после 'is' нужно причастие 'heated'."
        },
        {
            question: "Complete the sentence about clinker cooling:",
            questionRu: "Дополните предложение об охлаждении клинкера:",
            sentence: "The hot clinker ____ rapidly in a grate cooler to recover heat energy and improve quality.",
            correctAnswer: "is quenched",
            options: ["is quenched", "are quenched", "quenches", "is quenching"],
            correctFeedback: "Correct! 'Is quenched' — 'the hot clinker' is singular. 'To recover heat energy and improve quality' lists two purposes joined by 'and' — both share the same 'to'. 'Quench' means to cool rapidly, typically used in industrial and metallurgical contexts at B2 level.",
            correctFeedbackRu: "Правильно! 'Is quenched' — 'the hot clinker' — единственное число. 'To recover heat energy and improve quality' перечисляет две цели с общим 'to'. 'Quench' означает 'резко охладить', типично для промышленного контекста B2.",
            incorrectFeedback: "'The hot clinker' is singular — use 'is quenched'. 'Is quenching' is present continuous passive, implying a temporary action. For a standard industrial cooling step, use present simple passive: 'is quenched'.",
            incorrectFeedbackRu: "'The hot clinker' — единственное число, используем 'is quenched'. 'Is quenching' — Present Continuous Passive. Для стандартного шага охлаждения используйте Present Simple Passive."
        },
        {
            question: "Fill in the gap about cement storage:",
            questionRu: "Заполните пропуск о хранении цемента:",
            sentence: "The finished cement ____ in sealed silos to protect it from moisture until it is dispatched.",
            correctAnswer: "is stored",
            options: ["is stored", "are stored", "stores", "is store"],
            correctFeedback: "Correct! 'Is stored' — 'the finished cement' is uncountable and singular. 'Is store' is wrong: after 'is' you need the past participle 'stored', not the base form. The time clause 'until it is dispatched' uses present simple passive again, maintaining consistency throughout.",
            correctFeedbackRu: "Правильно! 'Is stored' — 'the finished cement' несчитаемое, единственное число. 'Is store' неверно: после 'is' нужно причастие 'stored'. 'Until it is dispatched' снова использует Present Simple Passive.",
            incorrectFeedback: "'The finished cement' is uncountable and singular — use 'is stored'. 'Is store' is incorrect: the passive requires the past participle 'stored' after 'is'. Base forms do not follow 'is' in passive constructions.",
            incorrectFeedbackRu: "'The finished cement' несчитаемое, единственное число — используем 'is stored'. 'Is store' неверно: пассив требует причастие 'stored' после 'is'."
        },
        {
            question: "Complete the sentence about bulk delivery:",
            questionRu: "Дополните предложение о оптовой доставке:",
            sentence: "Bulk cement ____ pneumatically into specially designed tanker lorries for delivery to construction sites.",
            correctAnswer: "is blown",
            options: ["is blown", "are blown", "is blowed", "blows"],
            correctFeedback: "Correct! 'Is blown' — 'bulk cement' is uncountable and singular. Irregular verb: blow / blew / blown. 'Is blowed' does not exist. 'Pneumatically' (using compressed air) is an adverb describing the method. 'Into specially designed tanker lorries' describes the destination.",
            correctFeedbackRu: "Правильно! 'Is blown' — 'bulk cement' несчитаемое, единственное число. Неправильный глагол: blow / blew / blown. 'Is blowed' не существует. 'Pneumatically' (с помощью сжатого воздуха) — наречие, описывающее метод.",
            incorrectFeedback: "'Bulk cement' is uncountable and singular — use 'is blown'. 'Is blowed' does not exist: 'blow' is irregular and its past participle is 'blown'. Never add -ed to an irregular verb.",
            incorrectFeedbackRu: "'Bulk cement' несчитаемое, единственное число — используем 'is blown'. 'Is blowed' не существует: 'blow' неправильный, причастие — 'blown'."
        },
        {
            question: "Fill in the gap about environmental certification:",
            questionRu: "Заполните пропуск об экологической сертификации:",
            sentence: "The cement plant's emissions and energy consumption ____ against environmental regulations annually. You've completed all 100 Fill in the Gaps exercises for Process Description!",
            correctAnswer: "are measured",
            options: ["are measured", "is measured", "measure", "measured"],
            correctFeedback: "Correct! 'Are measured' — 'the cement plant's emissions and energy consumption' — two things joined by 'and', making a plural subject. 'Against environmental regulations' means 'in comparison with regulations'. 'Annually' is an adverb showing frequency — typical for monitoring activities in process descriptions.",
            correctFeedbackRu: "Правильно! 'Are measured' — 'emissions and energy consumption' — два предмета с 'and', множественное число. 'Against environmental regulations' означает 'в сравнении с нормами'. 'Annually' — наречие частоты, типичное для деятельности по мониторингу.",
            incorrectFeedback: "'Emissions and energy consumption' is plural (two things joined by 'and') — use 'are measured'. 'Measured' alone without the auxiliary cannot be the present passive main verb — it reads as an adjective or past simple.",
            incorrectFeedbackRu: "'Emissions and energy consumption' — множественное число (два предмета с 'and'), используем 'are measured'. 'Measured' без вспомогательного читается как прилагательное или Past Simple."
        }
    ]
};

/* =============================================================================== */
/* =========================Sentence Building Exercises=========================== */

/* ============================================
Page 1: Sentence Building - Coffee Production
============================================ */
window.grammarExercises['passive']['process-description-sentence-page1'] = {
    title: "Process Description - Coffee Production",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Coffee", "seedlings", "are", "planted", "in", "shaded", "nurseries", "for", "the", "first", "year."],
            correctAnswer: "Coffee seedlings are planted in shaded nurseries for the first year.",
            correctFeedback: "Correct! 'Coffee seedlings are planted' — present simple passive, plural subject. Structure: subject + are + past participle + prepositional phrases. The phrase 'for the first year' indicates the duration of this initial stage.",
            correctFeedbackRu: "Правильно! 'Coffee seedlings are planted' — пассивный залог Present Simple, множественное число. Структура: подлежащее + are + причастие прошедшего времени + предложные фразы.",
            incorrectFeedback: "Remember: plural subject + are + past participle. 'Coffee seedlings are planted in shaded nurseries for the first year.' Check the word order: subject first, then the passive verb, then the location and time phrases.",
            incorrectFeedbackRu: "Помните: множественное число + are + причастие прошедшего времени. Порядок слов: сначала подлежащее, затем пассивный глагол, затем фразы места и времени."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "ripe", "cherries", "are", "collected", "by", "trained", "pickers", "during", "the", "harvest", "season."],
            correctAnswer: "The ripe cherries are collected by trained pickers during the harvest season.",
            correctFeedback: "Correct! 'Are collected by trained pickers' — present simple passive with an agent ('by + noun phrase'). The agent tells us who performs the action. 'During the harvest season' is a time phrase placed at the end.",
            correctFeedbackRu: "Правильно! 'Are collected by trained pickers' — Present Simple Passive с агентом ('by + именная группа'). Агент показывает, кто выполняет действие. 'During the harvest season' — временная фраза в конце.",
            incorrectFeedback: "Remember: subject + are + past participle + by + agent + time phrase. 'The ripe cherries are collected by trained pickers during the harvest season.' The 'by + agent' phrase follows the passive verb directly.",
            incorrectFeedbackRu: "Помните: подлежащее + are + причастие + by + агент + временная фраза. Фраза 'by + агент' следует непосредственно за пассивным глаголом."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "coffee", "pulp", "is", "removed", "using", "a", "mechanical", "depulping", "machine."],
            correctAnswer: "The coffee pulp is removed using a mechanical depulping machine.",
            correctFeedback: "Correct! 'Is removed' — singular subject ('the coffee pulp' is uncountable). 'Using a mechanical depulping machine' is a participial phrase describing the method. This is more concise than writing 'by means of a mechanical depulping machine'.",
            correctFeedbackRu: "Правильно! 'Is removed' — единственное число ('the coffee pulp' несчитаемое). 'Using a mechanical depulping machine' — причастный оборот, описывающий метод. Это более кратко, чем 'by means of'.",
            incorrectFeedback: "Check the subject: 'the coffee pulp' is uncountable and singular, so use 'is removed'. Structure: singular subject + is + past participle + participial phrase (using + noun).",
            incorrectFeedbackRu: "Проверьте подлежащее: 'the coffee pulp' несчитаемое, единственное число, используем 'is removed'. Структура: единственное число + is + причастие + причастный оборот."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Parchment-covered", "beans", "are", "soaked", "in", "clean", "water", "to", "remove", "remaining", "fruit", "residue."],
            correctAnswer: "Parchment-covered beans are soaked in clean water to remove remaining fruit residue.",
            correctFeedback: "Correct! 'Are soaked' — plural subject ('parchment-covered beans'). 'In clean water' is the location. 'To remove remaining fruit residue' is a purpose infinitive — the 'to + infinitive' structure is a key B2 pattern for stating the goal of each process step.",
            correctFeedbackRu: "Правильно! 'Are soaked' — множественное число. 'In clean water' — место. 'To remove remaining fruit residue' — инфинитив цели. Структура 'to + инфинитив' — ключевой паттерн B2 для указания цели шага.",
            incorrectFeedback: "Remember: plural subject + are + past participle + location + purpose infinitive. 'Parchment-covered beans are soaked in clean water to remove remaining fruit residue.' The purpose infinitive (to + verb) comes at the end.",
            incorrectFeedbackRu: "Помните: множественное число + are + причастие + место + инфинитив цели. Инфинитив цели (to + глагол) ставится в конце."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "moisture", "content", "is", "measured", "at", "regular", "intervals", "during", "the", "drying", "process."],
            correctAnswer: "The moisture content is measured at regular intervals during the drying process.",
            correctFeedback: "Correct! 'Is measured' — singular subject ('the moisture content'). 'At regular intervals' is a frequency phrase. 'During the drying process' is a time phrase. In process descriptions, two prepositional phrases can follow the passive verb — the shorter one usually comes first.",
            correctFeedbackRu: "Правильно! 'Is measured' — единственное число. 'At regular intervals' — фраза частоты. 'During the drying process' — временная фраза. В описаниях процессов после пассивного глагола могут следовать две предложные фразы.",
            incorrectFeedback: "Check the word order: subject + is + past participle + 'at regular intervals' + 'during the drying process'. The moisture content is measured at regular intervals during the drying process.",
            incorrectFeedbackRu: "Проверьте порядок слов: подлежащее + is + причастие + 'at regular intervals' + 'during the drying process'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Hulled", "green", "beans", "are", "graded", "according", "to", "screen", "size", "and", "density."],
            correctAnswer: "Hulled green beans are graded according to screen size and density.",
            correctFeedback: "Correct! 'Are graded' — plural subject. 'According to screen size and density' is the criterion phrase. 'Graded according to' is a common passive structure in process descriptions meaning 'sorted based on specific criteria'.",
            correctFeedbackRu: "Правильно! 'Are graded' — множественное число. 'According to screen size and density' — фраза критерия. 'Graded according to' — распространённая пассивная структура, означающая 'отсортировано по критериям'.",
            incorrectFeedback: "Remember: plural subject + are + past participle + 'according to' + criteria. 'Hulled green beans are graded according to screen size and density.' The phrase 'according to' introduces the sorting criteria.",
            incorrectFeedbackRu: "Помните: множественное число + are + причастие + 'according to' + критерии. Фраза 'according to' вводит критерии сортировки."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Defects", "are", "identified", "and", "removed", "by", "trained", "quality", "control", "operators."],
            correctAnswer: "Defects are identified and removed by trained quality control operators.",
            correctFeedback: "Correct! 'Are identified and removed' — two passive verbs sharing the auxiliary 'are'. When listing two passive actions, the auxiliary is not repeated: 'are identified and removed', not 'are identified and are removed'. The agent 'by trained quality control operators' applies to both verbs.",
            correctFeedbackRu: "Правильно! 'Are identified and removed' — два пассивных глагола с общим 'are'. При перечислении двух пассивных действий вспомогательный не повторяется. Агент 'by trained quality control operators' относится к обоим глаголам.",
            incorrectFeedback: "Two passive verbs can share one auxiliary: 'are identified and removed'. Do not repeat 'are' before 'removed'. Structure: subject + are + past participle + and + past participle + by + agent.",
            incorrectFeedbackRu: "Два пассивных глагола могут использовать один вспомогательный: 'are identified and removed'. Не повторяйте 'are' перед 'removed'. Структура: подлежащее + are + причастие + and + причастие + by + агент."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "beans", "are", "roasted", "at", "temperatures", "between", "180", "and", "240", "degrees", "Celsius."],
            correctAnswer: "The beans are roasted at temperatures between 180 and 240 degrees Celsius.",
            correctFeedback: "Correct! 'Are roasted' — plural subject. 'At temperatures between 180 and 240 degrees Celsius' gives the specific technical parameters. Including precise measurements is a hallmark of B2-level process descriptions and makes the text more authoritative.",
            correctFeedbackRu: "Правильно! 'Are roasted' — множественное число. 'At temperatures between 180 and 240 degrees Celsius' — конкретные технические параметры. Точные измерения — признак описаний уровня B2.",
            incorrectFeedback: "Structure: subject + are + past participle + 'at temperatures between X and Y degrees Celsius'. 'The beans are roasted at temperatures between 180 and 240 degrees Celsius.' Place the temperature range after 'at'.",
            incorrectFeedbackRu: "Структура: подлежащее + are + причастие + 'at temperatures between X and Y degrees Celsius'. Диапазон температур ставится после 'at'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "roasting", "process", "is", "monitored", "continuously", "to", "ensure", "consistent", "quality."],
            correctAnswer: "The roasting process is monitored continuously to ensure consistent quality.",
            correctFeedback: "Correct! 'Is monitored' — singular subject ('the roasting process'). The adverb 'continuously' follows the passive verb. 'To ensure consistent quality' is a purpose infinitive. Adverbs in passive sentences can come after the full passive verb or between the auxiliary and past participle.",
            correctFeedbackRu: "Правильно! 'Is monitored' — единственное число. Наречие 'continuously' следует за пассивным глаголом. 'To ensure consistent quality' — инфинитив цели. Наречия в пассивных предложениях могут стоять после пассивного глагола или между вспомогательным и причастием.",
            incorrectFeedback: "Structure: singular subject + is + past participle + adverb + purpose infinitive. 'The roasting process is monitored continuously to ensure consistent quality.' The adverb 'continuously' comes after the passive verb here.",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + наречие + инфинитив цели. Наречие 'continuously' ставится после пассивного глагола."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Ground", "coffee", "is", "sealed", "in", "nitrogen-flushed", "packaging", "to", "extend", "its", "shelf", "life."],
            correctAnswer: "Ground coffee is sealed in nitrogen-flushed packaging to extend its shelf life.",
            correctFeedback: "Correct! 'Is sealed' — 'ground coffee' is uncountable and singular. 'In nitrogen-flushed packaging' describes the type of container. 'To extend its shelf life' is a purpose infinitive. The compound adjective 'nitrogen-flushed' requires a hyphen because it modifies 'packaging' as a unit.",
            correctFeedbackRu: "Правильно! 'Is sealed' — 'ground coffee' несчитаемое, единственное число. 'In nitrogen-flushed packaging' описывает тип контейнера. Составное прилагательное 'nitrogen-flushed' пишется через дефис.",
            incorrectFeedback: "Check: 'ground coffee' is uncountable — use 'is sealed'. Structure: uncountable subject + is + past participle + 'in' + location + purpose infinitive. 'Ground coffee is sealed in nitrogen-flushed packaging to extend its shelf life.'",
            incorrectFeedbackRu: "Проверьте: 'ground coffee' несчитаемое — используем 'is sealed'. Структура: несчитаемое + is + причастие + 'in' + место + инфинитив цели."
        }
    ]
};

/* ============================================
Page 2: Sentence Building - Oil Refining
============================================ */
window.grammarExercises['passive']['process-description-sentence-page2'] = {
    title: "Process Description - Oil Refining",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Geological", "surveys", "are", "conducted", "before", "any", "drilling", "operations", "begin."],
            correctAnswer: "Geological surveys are conducted before any drilling operations begin.",
            correctFeedback: "Correct! 'Are conducted' — plural subject ('geological surveys'). 'Before any drilling operations begin' is a time clause using present simple active — correct because the drilling begins naturally as part of the sequence, without being controlled.",
            correctFeedbackRu: "Правильно! 'Are conducted' — множественное число. 'Before any drilling operations begin' — придаточное времени с Present Simple активным: бурение начинается естественно как часть последовательности.",
            incorrectFeedback: "Structure: plural subject + are + past participle + time clause. 'Geological surveys are conducted before any drilling operations begin.' In time clauses with 'before', use present simple (begin), not future.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + придаточное времени. Во временных придаточных с 'before' используйте Present Simple (begin), а не будущее время."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Crude", "oil", "is", "pumped", "from", "the", "reservoir", "to", "the", "surface", "under", "natural", "pressure."],
            correctAnswer: "Crude oil is pumped from the reservoir to the surface under natural pressure.",
            correctFeedback: "Correct! 'Is pumped' — 'crude oil' is uncountable and singular. 'From the reservoir to the surface' shows the direction of movement. 'Under natural pressure' describes the mechanism. In process descriptions, 'from X to Y' efficiently describes the path of a material.",
            correctFeedbackRu: "Правильно! 'Is pumped' — 'crude oil' несчитаемое, единственное число. 'From the reservoir to the surface' показывает направление. 'Under natural pressure' описывает механизм.",
            incorrectFeedback: "Check: 'crude oil' is uncountable — use 'is pumped'. Structure: uncountable subject + is + past participle + 'from X to Y' + 'under' + method. Place direction phrases before the mechanism phrase.",
            incorrectFeedbackRu: "Проверьте: 'crude oil' несчитаемое — используем 'is pumped'. Структура: несчитаемое + is + причастие + 'from X to Y' + 'under' + механизм."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Dissolved", "gases", "are", "separated", "from", "the", "crude", "oil", "in", "a", "gas-oil", "separator."],
            correctAnswer: "Dissolved gases are separated from the crude oil in a gas-oil separator.",
            correctFeedback: "Correct! 'Are separated' — plural subject ('dissolved gases'). 'Separated from' uses 'from' to describe the source of separation — different from 'by', which introduces the passive agent. 'In a gas-oil separator' names the equipment. The compound noun 'gas-oil separator' is hyphenated.",
            correctFeedbackRu: "Правильно! 'Are separated' — множественное число. 'Separated from' использует 'from' для источника разделения, в отличие от 'by' (агент). 'In a gas-oil separator' называет оборудование.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'from' + source + 'in' + equipment. 'Dissolved gases are separated from the crude oil in a gas-oil separator.' Note: 'from' describes the source, not the agent.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'from' + источник + 'in' + оборудование. 'From' описывает источник, а не агента."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Wax", "is", "removed", "from", "lubricating", "oil", "fractions", "through", "a", "chilling", "and", "filtering", "process."],
            correctAnswer: "Wax is removed from lubricating oil fractions through a chilling and filtering process.",
            correctFeedback: "Correct! 'Is removed' — 'wax' is uncountable and singular. 'From lubricating oil fractions' describes the source. 'Through a chilling and filtering process' uses 'through' to describe the method — 'through a process' is a standard expression in B2 process descriptions.",
            correctFeedbackRu: "Правильно! 'Is removed' — 'wax' несчитаемое, единственное число. 'Through a chilling and filtering process' использует 'through' для описания метода — стандартное выражение в описаниях B2.",
            incorrectFeedback: "Check: 'wax' is uncountable — use 'is removed'. Structure: uncountable subject + is + past participle + 'from' + source + 'through' + method. 'Wax is removed from lubricating oil fractions through a chilling and filtering process.'",
            incorrectFeedbackRu: "Проверьте: 'wax' несчитаемое — используем 'is removed'. Структура: несчитаемое + is + причастие + 'from' + источник + 'through' + метод."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Petrol", "is", "produced", "by", "blending", "several", "different", "hydrocarbon", "fractions", "together."],
            correctAnswer: "Petrol is produced by blending several different hydrocarbon fractions together.",
            correctFeedback: "Correct! 'Is produced' — 'petrol' is uncountable and singular. 'By blending several different hydrocarbon fractions together' uses 'by + gerund' to describe the method. This 'by + -ing' structure explains how the result is achieved — distinct from 'by + agent' (by workers).",
            correctFeedbackRu: "Правильно! 'Is produced' — 'petrol' несчитаемое, единственное число. 'By blending' использует 'by + герундий' для описания метода. Эта структура объясняет, как достигается результат.",
            incorrectFeedback: "Check: 'petrol' is uncountable — use 'is produced'. The 'by + gerund' structure (by blending) describes the method. Structure: uncountable subject + is + past participle + 'by' + gerund + object + adverb.",
            incorrectFeedbackRu: "Проверьте: 'petrol' несчитаемое — используем 'is produced'. Структура 'by + герундий' (by blending) описывает метод."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Hydrogen", "is", "used", "to", "upgrade", "lower-quality", "oil", "fractions", "in", "a", "process", "called", "hydrocracking."],
            correctAnswer: "Hydrogen is used to upgrade lower-quality oil fractions in a process called hydrocracking.",
            correctFeedback: "Correct! 'Is used to upgrade' — 'hydrogen' is uncountable and singular. 'To upgrade' is a purpose infinitive. 'In a process called hydrocracking' introduces the technical name — 'in a process called + name' is a standard B2 pattern for naming specific industrial techniques.",
            correctFeedbackRu: "Правильно! 'Is used to upgrade' — 'hydrogen' несчитаемое. 'To upgrade' — инфинитив цели. 'In a process called hydrocracking' вводит техническое название — стандартный паттерн B2.",
            incorrectFeedback: "Structure: uncountable subject + is + used + to + infinitive + object + 'in a process called' + name. 'Hydrogen is used to upgrade lower-quality oil fractions in a process called hydrocracking.'",
            incorrectFeedbackRu: "Структура: несчитаемое + is + used + to + инфинитив + дополнение + 'in a process called' + название."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Liquid", "petroleum", "gas", "is", "stored", "under", "pressure", "in", "large", "spherical", "tanks."],
            correctAnswer: "Liquid petroleum gas is stored under pressure in large spherical tanks.",
            correctFeedback: "Correct! 'Is stored' — 'liquid petroleum gas' is uncountable and singular. 'Under pressure' describes the condition of storage. 'In large spherical tanks' describes the location. Both are prepositional phrases following the passive verb — conditions typically come before location.",
            correctFeedbackRu: "Правильно! 'Is stored' — несчитаемое, единственное число. 'Under pressure' описывает условие хранения. 'In large spherical tanks' — место. Условия обычно ставятся перед местом.",
            incorrectFeedback: "Structure: uncountable subject + is + past participle + condition + location. 'Liquid petroleum gas is stored under pressure in large spherical tanks.' The condition phrase ('under pressure') precedes the location phrase ('in large spherical tanks').",
            incorrectFeedbackRu: "Структура: несчитаемое + is + причастие + условие + место. Фраза условия ('under pressure') предшествует фразе места."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Fuel", "additives", "are", "introduced", "at", "the", "blending", "stage", "to", "improve", "engine", "performance."],
            correctAnswer: "Fuel additives are introduced at the blending stage to improve engine performance.",
            correctFeedback: "Correct! 'Are introduced' — plural subject ('fuel additives'). 'At the blending stage' is a process stage marker. 'To improve engine performance' is a purpose infinitive. Using 'at the [stage name] stage' is a standard B2 phrase for indicating where in the process something happens.",
            correctFeedbackRu: "Правильно! 'Are introduced' — множественное число. 'At the blending stage' — маркер этапа. 'To improve engine performance' — инфинитив цели. 'At the [название] stage' — стандартная фраза B2.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'at the [stage] stage' + purpose infinitive. 'Fuel additives are introduced at the blending stage to improve engine performance.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'at the [этап] stage' + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "temperature", "of", "each", "fraction", "is", "recorded", "automatically", "by", "digital", "sensors."],
            correctAnswer: "The temperature of each fraction is recorded automatically by digital sensors.",
            correctFeedback: "Correct! 'Is recorded' — the head noun is 'temperature' (singular). 'Of each fraction' is a modifier and doesn't change the verb. 'Automatically' is an adverb after the passive verb. 'By digital sensors' names the agent — in technical writing, machines and sensors are commonly named as agents.",
            correctFeedbackRu: "Правильно! 'Is recorded' — главное существительное 'temperature' (единственное число). 'Of each fraction' — уточнение, не меняющее глагол. 'Automatically' — наречие после пассивного глагола.",
            incorrectFeedback: "The head noun is 'temperature' (singular), not 'fraction' — use 'is recorded'. Structure: 'the temperature of each fraction' + is + past participle + adverb + 'by' + agent. 'The temperature of each fraction is recorded automatically by digital sensors.'",
            incorrectFeedbackRu: "Главное существительное — 'temperature' (единственное число) — используем 'is recorded'. Структура: 'the temperature of each fraction' + is + причастие + наречие + 'by' + агент."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Spent", "catalysts", "are", "regenerated", "in", "a", "separate", "unit", "to", "restore", "their", "activity."],
            correctAnswer: "Spent catalysts are regenerated in a separate unit to restore their activity.",
            correctFeedback: "Correct! 'Are regenerated' — plural subject ('spent catalysts'). 'In a separate unit' describes the location. 'To restore their activity' is a purpose infinitive — 'restore activity' means 'bring back to full working efficiency'. This is typical B2 vocabulary for industrial maintenance processes.",
            correctFeedbackRu: "Правильно! 'Are regenerated' — множественное число. 'In a separate unit' — место. 'To restore their activity' — инфинитив цели. 'Restore activity' означает 'восстановить эффективность работы'.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'in' + location + purpose infinitive. 'Spent catalysts are regenerated in a separate unit to restore their activity.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'in' + место + инфинитив цели."
        }
    ]
};

/* ============================================
Page 3: Sentence Building - Glass Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-sentence-page3'] = {
    title: "Process Description - Glass Manufacturing",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Silica", "sand", "is", "tested", "for", "purity", "before", "it", "enters", "the", "production", "process."],
            correctAnswer: "Silica sand is tested for purity before it enters the production process.",
            correctFeedback: "Correct! 'Is tested' — 'silica sand' is uncountable and singular. 'For purity' describes what is being checked — 'tested for + quality' is a standard passive expression. 'Before it enters the production process' is a time clause with present simple active.",
            correctFeedbackRu: "Правильно! 'Is tested' — 'silica sand' несчитаемое, единственное число. 'For purity' описывает, что проверяется. 'Before it enters' — придаточное времени с Present Simple активным.",
            incorrectFeedback: "Check: 'silica sand' is uncountable — use 'is tested'. Structure: uncountable subject + is + past participle + 'for' + quality + time clause. 'Silica sand is tested for purity before it enters the production process.'",
            incorrectFeedbackRu: "Проверьте: 'silica sand' несчитаемое — используем 'is tested'. Структура: несчитаемое + is + причастие + 'for' + качество + придаточное времени."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "furnace", "temperature", "is", "maintained", "at", "over", "1,600", "degrees", "Celsius", "at", "all", "times."],
            correctAnswer: "The furnace temperature is maintained at over 1,600 degrees Celsius at all times.",
            correctFeedback: "Correct! 'Is maintained' — singular subject ('the furnace temperature'). 'At over 1,600 degrees Celsius' gives the precise target. 'At all times' is a frequency expression meaning 'continuously'. Using 'at all times' instead of 'always' is more formal and suitable for technical descriptions.",
            correctFeedbackRu: "Правильно! 'Is maintained' — единственное число. 'At over 1,600 degrees Celsius' — точный параметр. 'At all times' — формальное выражение частоты, более подходящее для технических описаний.",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'at' + temperature + 'at all times'. 'The furnace temperature is maintained at over 1,600 degrees Celsius at all times.' Place 'at all times' at the end of the sentence.",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'at' + температура + 'at all times'. 'At all times' ставится в конце предложения."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Flat", "glass", "is", "produced", "by", "floating", "molten", "glass", "on", "a", "bath", "of", "molten", "tin."],
            correctAnswer: "Flat glass is produced by floating molten glass on a bath of molten tin.",
            correctFeedback: "Correct! 'Is produced' — 'flat glass' is uncountable and singular. 'By floating molten glass on a bath of molten tin' uses 'by + gerund' to explain the method. This structure tells us how something is produced, not who produces it.",
            correctFeedbackRu: "Правильно! 'Is produced' — 'flat glass' несчитаемое, единственное число. 'By floating...on a bath of molten tin' использует 'by + герундий' для объяснения метода.",
            incorrectFeedback: "Check: 'flat glass' is uncountable — use 'is produced'. The 'by + gerund' structure (by floating) explains the method. Structure: uncountable subject + is + past participle + 'by' + gerund + object + preposition phrase.",
            incorrectFeedbackRu: "Проверьте: 'flat glass' несчитаемое — используем 'is produced'. Структура 'by + герундий' объясняет метод."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Glass", "bottles", "are", "formed", "by", "blowing", "compressed", "air", "into", "a", "molten", "glass", "gob."],
            correctAnswer: "Glass bottles are formed by blowing compressed air into a molten glass gob.",
            correctFeedback: "Correct! 'Are formed' — plural subject ('glass bottles'). 'By blowing compressed air into a molten glass gob' uses 'by + gerund' to describe the specific technique. 'A glass gob' is the technical term for the measured amount of molten glass used to make one bottle.",
            correctFeedbackRu: "Правильно! 'Are formed' — множественное число. 'By blowing compressed air into a molten glass gob' — 'by + герундий' для описания техники. 'A glass gob' — технический термин.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'by' + gerund + object + 'into' + location. 'Glass bottles are formed by blowing compressed air into a molten glass gob.' The 'by + gerund' explains the technique.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'by' + герундий + дополнение + 'into' + место."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "glass", "surface", "is", "treated", "with", "a", "metallic", "oxide", "coating", "while", "still", "hot."],
            correctAnswer: "The glass surface is treated with a metallic oxide coating while still hot.",
            correctFeedback: "Correct! 'Is treated' — singular subject ('the glass surface'). 'Treated with' introduces the material applied. 'While still hot' is a reduced time clause — the full form would be 'while it is still hot'. Reduced clauses omitting the subject and auxiliary are common in formal process writing.",
            correctFeedbackRu: "Правильно! 'Is treated' — единственное число. 'Treated with' вводит применяемый материал. 'While still hot' — сокращённое придаточное времени. Полная форма: 'while it is still hot'.",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'with' + material + 'while still hot'. 'The glass surface is treated with a metallic oxide coating while still hot.' 'While still hot' is a reduced time clause (= while it is still hot).",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'with' + материал + 'while still hot'. 'While still hot' — сокращённое придаточное (= while it is still hot)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Tempered", "glass", "is", "produced", "by", "heating", "and", "then", "rapidly", "cooling", "the", "glass", "surface."],
            correctAnswer: "Tempered glass is produced by heating and then rapidly cooling the glass surface.",
            correctFeedback: "Correct! 'Is produced' — 'tempered glass' is uncountable and singular. 'By heating and then rapidly cooling the glass surface' shows two steps in a sequence using parallel gerunds: 'by heating and cooling'. The adverb 'rapidly' modifies the second gerund.",
            correctFeedbackRu: "Правильно! 'Is produced' — несчитаемое. 'By heating and then rapidly cooling' показывает два шага с параллельными герундиями. Наречие 'rapidly' уточняет второй герундий.",
            incorrectFeedback: "Structure: uncountable subject + is + past participle + 'by' + gerund + 'and then' + adverb + gerund + object. 'Tempered glass is produced by heating and then rapidly cooling the glass surface.'",
            incorrectFeedbackRu: "Структура: несчитаемое + is + причастие + 'by' + герундий + 'and then' + наречие + герундий + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Broken", "glass", "is", "collected", "separately", "and", "returned", "to", "the", "furnace", "as", "cullet."],
            correctAnswer: "Broken glass is collected separately and returned to the furnace as cullet.",
            correctFeedback: "Correct! 'Is collected...and returned' — two passive verbs sharing the auxiliary 'is'. 'As cullet' means 'in the form of cullet' — cullet is recycled broken glass used in glass manufacturing. 'As + noun' at the end describes how the material is re-used.",
            correctFeedbackRu: "Правильно! 'Is collected...and returned' — два пассивных глагола с общим 'is'. 'As cullet' означает 'в виде бита'. 'As + существительное' описывает форму повторного использования.",
            incorrectFeedback: "Two passive verbs share one auxiliary 'is': 'is collected and returned'. Do not repeat 'is'. Structure: uncountable subject + is + past participle + adverb + and + past participle + 'to' + location + 'as' + material.",
            incorrectFeedbackRu: "Два пассивных глагола используют один 'is': 'is collected and returned'. Не повторяйте 'is'. Структура: несчитаемое + is + причастие + наречие + and + причастие + 'to' + место + 'as' + материал."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Each", "glass", "panel", "is", "marked", "with", "a", "unique", "batch", "code", "for", "traceability", "purposes."],
            correctAnswer: "Each glass panel is marked with a unique batch code for traceability purposes.",
            correctFeedback: "Correct! 'Is marked' — 'each glass panel' is singular ('each' always takes singular). 'Marked with' introduces what is applied. 'For traceability purposes' explains the reason — 'for + noun + purposes' is a formal phrase meaning 'in order to ensure traceability'.",
            correctFeedbackRu: "Правильно! 'Is marked' — 'each glass panel' — единственное число ('each' всегда единственное). 'For traceability purposes' — формальная фраза, означающая 'для обеспечения прослеживаемости'.",
            incorrectFeedback: "'Each glass panel' requires a singular verb — use 'is marked'. Structure: 'each' + noun + is + past participle + 'with' + detail + 'for' + purpose + 'purposes'.",
            incorrectFeedbackRu: "'Each glass panel' требует единственное число — используем 'is marked'. Структура: 'each' + существительное + is + причастие + 'with' + деталь + 'for' + цель + 'purposes'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Insulated", "glass", "units", "are", "assembled", "in", "a", "clean", "room", "to", "prevent", "dust", "contamination."],
            correctAnswer: "Insulated glass units are assembled in a clean room to prevent dust contamination.",
            correctFeedback: "Correct! 'Are assembled' — plural subject ('insulated glass units'). 'In a clean room' describes the controlled environment. 'To prevent dust contamination' is a purpose infinitive. The structure 'in a clean room' is standard in manufacturing and laboratory contexts.",
            correctFeedbackRu: "Правильно! 'Are assembled' — множественное число. 'In a clean room' описывает контролируемую среду. 'To prevent dust contamination' — инфинитив цели.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'in' + environment + purpose infinitive. 'Insulated glass units are assembled in a clean room to prevent dust contamination.' Place the location before the purpose.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'in' + среда + инфинитив цели. Место ставится перед целью."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Waste", "heat", "from", "the", "furnace", "is", "recovered", "and", "used", "to", "preheat", "the", "incoming", "batch."],
            correctAnswer: "Waste heat from the furnace is recovered and used to preheat the incoming batch.",
            correctFeedback: "Correct! 'Is recovered and used' — two passive verbs sharing 'is'. 'Waste heat' is uncountable and singular. 'From the furnace' is a modifier. 'To preheat the incoming batch' is a purpose infinitive — recovering waste heat to preheat materials is a key energy efficiency measure in industry.",
            correctFeedbackRu: "Правильно! 'Is recovered and used' — два пассивных глагола с общим 'is'. 'Waste heat' несчитаемое, единственное число. 'To preheat the incoming batch' — инфинитив цели — рекуперация тепла является ключевой мерой энергоэффективности.",
            incorrectFeedback: "Two passive verbs share 'is': 'is recovered and used'. Structure: uncountable subject + is + past participle + and + past participle + purpose infinitive. 'Waste heat from the furnace is recovered and used to preheat the incoming batch.'",
            incorrectFeedbackRu: "Два пассивных глагола используют 'is': 'is recovered and used'. Структура: несчитаемое + is + причастие + and + причастие + инфинитив цели."
        }
    ]
};

/* ============================================
Page 4: Sentence Building - Water Treatment
============================================ */
window.grammarExercises['passive']['process-description-sentence-page4'] = {
    title: "Process Description - Water Treatment",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Water", "is", "abstracted", "from", "rivers", "and", "groundwater", "sources", "according", "to", "licensed", "volumes."],
            correctAnswer: "Water is abstracted from rivers and groundwater sources according to licensed volumes.",
            correctFeedback: "Correct! 'Is abstracted' — 'water' is uncountable and singular. 'From rivers and groundwater sources' names the sources. 'According to licensed volumes' means 'in compliance with permitted amounts' — 'according to' is a formal preposition common in technical and regulatory contexts.",
            correctFeedbackRu: "Правильно! 'Is abstracted' — 'water' несчитаемое, единственное число. 'According to licensed volumes' означает 'в соответствии с разрешёнными объёмами' — 'according to' — формальный предлог.",
            incorrectFeedback: "Check: 'water' is uncountable — use 'is abstracted'. Structure: uncountable subject + is + past participle + 'from' + sources + 'according to' + limit. 'Water is abstracted from rivers and groundwater sources according to licensed volumes.'",
            incorrectFeedbackRu: "Проверьте: 'water' несчитаемое — используем 'is abstracted'. Структура: несчитаемое + is + причастие + 'from' + источники + 'according to' + лимит."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Fine", "particles", "are", "removed", "from", "the", "water", "by", "a", "process", "called", "micro-filtration."],
            correctAnswer: "Fine particles are removed from the water by a process called micro-filtration.",
            correctFeedback: "Correct! 'Are removed' — plural subject ('fine particles'). 'By a process called micro-filtration' names the method using the structure 'by a process called + name'. This is a useful B2 alternative to simply writing 'using micro-filtration'.",
            correctFeedbackRu: "Правильно! 'Are removed' — множественное число. 'By a process called micro-filtration' называет метод. Это полезная альтернатива B2 к просто 'using micro-filtration'.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'from' + source + 'by a process called' + name. 'Fine particles are removed from the water by a process called micro-filtration.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'from' + источник + 'by a process called' + название."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Alum", "is", "added", "to", "the", "water", "in", "controlled", "doses", "to", "trigger", "the", "coagulation", "process."],
            correctAnswer: "Alum is added to the water in controlled doses to trigger the coagulation process.",
            correctFeedback: "Correct! 'Is added' — 'alum' is uncountable and singular. 'To the water' describes the destination. 'In controlled doses' describes the quantity. 'To trigger the coagulation process' is a purpose infinitive. Quantity phrases typically come before purpose phrases.",
            correctFeedbackRu: "Правильно! 'Is added' — 'alum' несчитаемое, единственное число. 'To the water' — место назначения. 'In controlled doses' — количество. 'To trigger' — инфинитив цели. Фразы количества обычно предшествуют фразам цели.",
            incorrectFeedback: "Check: 'alum' is uncountable — use 'is added'. Structure: uncountable subject + is + past participle + 'to the water' + 'in' + quantity + purpose infinitive. 'Alum is added to the water in controlled doses to trigger the coagulation process.'",
            incorrectFeedbackRu: "Проверьте: 'alum' несчитаемое — используем 'is added'. Структура: несчитаемое + is + причастие + 'to the water' + 'in' + количество + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "settled", "sludge", "is", "collected", "at", "the", "bottom", "of", "the", "tank", "and", "treated", "separately."],
            correctAnswer: "The settled sludge is collected at the bottom of the tank and treated separately.",
            correctFeedback: "Correct! 'Is collected...and treated' — two passive verbs sharing 'is'. 'At the bottom of the tank' describes the location. 'Separately' is an adverb after the second passive verb. The two steps are joined by 'and' without repeating the auxiliary.",
            correctFeedbackRu: "Правильно! 'Is collected...and treated' — два пассивных глагола с общим 'is'. 'At the bottom of the tank' — место. 'Separately' — наречие после второго пассивного глагола.",
            incorrectFeedback: "Two passive verbs share 'is': 'is collected and treated'. Do not repeat 'is' before 'treated'. Structure: subject + is + past participle + location + and + past participle + adverb.",
            incorrectFeedbackRu: "Два пассивных глагола используют 'is': 'is collected and treated'. Не повторяйте 'is' перед 'treated'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Ozone", "is", "sometimes", "used", "as", "an", "alternative", "disinfectant", "to", "reduce", "chemical", "by-products."],
            correctAnswer: "Ozone is sometimes used as an alternative disinfectant to reduce chemical by-products.",
            correctFeedback: "Correct! 'Is sometimes used' — 'ozone' is uncountable and singular. The adverb 'sometimes' comes between the auxiliary 'is' and the past participle 'used'. 'As an alternative disinfectant' describes the role. 'To reduce chemical by-products' is a purpose infinitive.",
            correctFeedbackRu: "Правильно! 'Is sometimes used' — 'ozone' несчитаемое. Наречие 'sometimes' стоит между 'is' и 'used'. 'As an alternative disinfectant' описывает роль. 'To reduce chemical by-products' — инфинитив цели.",
            incorrectFeedback: "Adverbs of frequency (sometimes, often, always) go between the auxiliary and the past participle: 'is sometimes used'. Structure: uncountable subject + is + adverb + past participle + 'as' + role + purpose infinitive.",
            incorrectFeedbackRu: "Наречия частоты (sometimes, often, always) стоят между вспомогательным и причастием: 'is sometimes used'. Структура: несчитаемое + is + наречие + причастие + 'as' + роль + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Nitrates", "and", "phosphates", "are", "removed", "from", "the", "water", "in", "a", "tertiary", "treatment", "stage."],
            correctAnswer: "Nitrates and phosphates are removed from the water in a tertiary treatment stage.",
            correctFeedback: "Correct! 'Are removed' — 'nitrates and phosphates' is plural (two items joined by 'and'). 'From the water' describes the source. 'In a tertiary treatment stage' names the stage of treatment. 'Tertiary' means third — after primary and secondary treatment.",
            correctFeedbackRu: "Правильно! 'Are removed' — два предмета с 'and', множественное число. 'In a tertiary treatment stage' называет этап. 'Tertiary' означает 'третичный' — после первичной и вторичной обработки.",
            incorrectFeedback: "Structure: plural subject (X and Y) + are + past participle + 'from the water' + 'in' + stage. 'Nitrates and phosphates are removed from the water in a tertiary treatment stage.'",
            incorrectFeedbackRu: "Структура: множественное число (X and Y) + are + причастие + 'from the water' + 'in' + этап."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Treated", "water", "is", "regularly", "tested", "against", "over", "fifty", "quality", "parameters."],
            correctAnswer: "Treated water is regularly tested against over fifty quality parameters.",
            correctFeedback: "Correct! 'Is regularly tested' — 'treated water' is uncountable and singular. 'Regularly' comes between the auxiliary 'is' and the past participle 'tested'. 'Against over fifty quality parameters' means 'in comparison with more than fifty standards' — a precise detail typical of B2 technical descriptions.",
            correctFeedbackRu: "Правильно! 'Is regularly tested' — несчитаемое. 'Regularly' стоит между 'is' и 'tested'. 'Against over fifty quality parameters' означает 'в сравнении с более чем пятьюдесятью стандартами'.",
            incorrectFeedback: "The adverb 'regularly' goes between 'is' and 'tested'. Structure: uncountable subject + is + adverb + past participle + 'against' + comparison standard.",
            incorrectFeedbackRu: "Наречие 'regularly' стоит между 'is' и 'tested'. Структура: несчитаемое + is + наречие + причастие + 'against' + стандарт сравнения."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Water", "pressure", "in", "the", "mains", "is", "maintained", "at", "a", "minimum", "of", "one", "bar."],
            correctAnswer: "Water pressure in the mains is maintained at a minimum of one bar.",
            correctFeedback: "Correct! 'Is maintained' — the head noun is 'water pressure' (singular). 'In the mains' modifies 'water pressure' but doesn't change it. 'At a minimum of one bar' gives the precise technical requirement. 'The mains' is the term for the main water supply pipes.",
            correctFeedbackRu: "Правильно! 'Is maintained' — главное существительное 'water pressure' (единственное число). 'In the mains' уточняет, не меняя число. 'At a minimum of one bar' — точное техническое требование.",
            incorrectFeedback: "The head noun is 'water pressure' (singular) — use 'is maintained'. Structure: 'water pressure in the mains' + is + past participle + 'at a minimum of' + measurement.",
            incorrectFeedbackRu: "Главное существительное — 'water pressure' (единственное число), используем 'is maintained'. Структура: 'water pressure in the mains' + is + причастие + 'at a minimum of' + измерение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "results", "of", "all", "water", "quality", "tests", "are", "published", "annually", "in", "a", "public", "report."],
            correctAnswer: "The results of all water quality tests are published annually in a public report.",
            correctFeedback: "Correct! 'Are published' — the head noun is 'results' (plural). 'Of all water quality tests' is a modifier. 'Annually' is an adverb after the passive verb. 'In a public report' describes where the results appear. Transparency in reporting is shown by 'published' and 'public report'.",
            correctFeedbackRu: "Правильно! 'Are published' — главное существительное 'results' (множественное число). 'Annually' — наречие после пассивного глагола. 'In a public report' описывает место публикации.",
            incorrectFeedback: "The head noun is 'results' (plural) — use 'are published'. Structure: 'the results of all water quality tests' + are + past participle + adverb + 'in' + document.",
            incorrectFeedbackRu: "Главное существительное — 'results' (множественное число), используем 'are published'. Структура: 'the results of all water quality tests' + are + причастие + наречие + 'in' + документ."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Sludge", "is", "treated", "by", "anaerobic", "digestion", "to", "produce", "biogas", "as", "a", "by-product."],
            correctAnswer: "Sludge is treated by anaerobic digestion to produce biogas as a by-product.",
            correctFeedback: "Correct! 'Is treated' — 'sludge' is uncountable and singular. 'By anaerobic digestion' names the treatment method as the agent. 'To produce biogas' is a purpose infinitive. 'As a by-product' uses 'as + noun' to describe the secondary output — a common structure when describing industrial outputs.",
            correctFeedbackRu: "Правильно! 'Is treated' — 'sludge' несчитаемое. 'By anaerobic digestion' называет метод обработки агентом. 'To produce biogas' — инфинитив цели. 'As a by-product' — 'as + существительное' описывает вторичный продукт.",
            incorrectFeedback: "Check: 'sludge' is uncountable — use 'is treated'. Structure: uncountable subject + is + past participle + 'by' + method + purpose infinitive + 'as' + by-product.",
            incorrectFeedbackRu: "Проверьте: 'sludge' несчитаемое — используем 'is treated'. Структура: несчитаемое + is + причастие + 'by' + метод + инфинитив цели + 'as' + побочный продукт."
        }
    ]
};

/* ============================================
Page 5: Sentence Building - Paper Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-sentence-page5'] = {
    title: "Process Description - Paper Manufacturing",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Wood", "is", "sourced", "exclusively", "from", "forests", "certified", "by", "the", "FSC."],
            correctAnswer: "Wood is sourced exclusively from forests certified by the FSC.",
            correctFeedback: "Correct! 'Is sourced' — 'wood' is uncountable and singular. 'Exclusively' is an adverb after the passive verb. 'From forests certified by the FSC' — 'certified by the FSC' is a reduced relative clause ('that are certified by the FSC') used as a post-modifier.",
            correctFeedbackRu: "Правильно! 'Is sourced' — 'wood' несчитаемое. 'Exclusively' — наречие. 'Certified by the FSC' — сокращённое придаточное ('that are certified by the FSC') как постмодификатор.",
            incorrectFeedback: "Check: 'wood' is uncountable — use 'is sourced'. Structure: uncountable subject + is + past participle + adverb + 'from' + noun + reduced relative clause. 'Wood is sourced exclusively from forests certified by the FSC.'",
            incorrectFeedbackRu: "Проверьте: 'wood' несчитаемое — используем 'is sourced'. Структура: несчитаемое + is + причастие + наречие + 'from' + существительное + сокращённое придаточное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "wood", "chips", "are", "screened", "to", "ensure", "a", "uniform", "size", "before", "pulping."],
            correctAnswer: "The wood chips are screened to ensure a uniform size before pulping.",
            correctFeedback: "Correct! 'Are screened' — plural subject ('the wood chips'). 'To ensure a uniform size' is a purpose infinitive. 'Before pulping' uses a gerund after 'before' — this is a concise alternative to 'before the pulping process begins'.",
            correctFeedbackRu: "Правильно! 'Are screened' — множественное число. 'To ensure a uniform size' — инфинитив цели. 'Before pulping' использует герундий — краткая альтернатива 'before the pulping process begins'.",
            incorrectFeedback: "Structure: plural subject + are + past participle + purpose infinitive + 'before' + gerund. 'The wood chips are screened to ensure a uniform size before pulping.' The purpose infinitive precedes the time phrase.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + инфинитив цели + 'before' + герундий. Инфинитив цели предшествует временной фразе."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Chemicals", "are", "recovered", "and", "recycled", "at", "the", "end", "of", "the", "Kraft", "process."],
            correctAnswer: "Chemicals are recovered and recycled at the end of the Kraft process.",
            correctFeedback: "Correct! 'Are recovered and recycled' — plural subject, two passive verbs sharing 'are'. 'At the end of the Kraft process' is a time/sequence phrase. 'The Kraft process' is properly capitalised as it is a named industrial process.",
            correctFeedbackRu: "Правильно! 'Are recovered and recycled' — множественное число, два пассивных глагола с общим 'are'. 'At the end of the Kraft process' — фраза времени/последовательности.",
            incorrectFeedback: "Two passive verbs share 'are': 'are recovered and recycled'. Structure: plural subject + are + past participle + and + past participle + time phrase. 'Chemicals are recovered and recycled at the end of the Kraft process.'",
            incorrectFeedbackRu: "Два пассивных глагола используют 'are': 'are recovered and recycled'. Структура: множественное число + are + причастие + and + причастие + временная фраза."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "pulp", "is", "washed", "countercurrently", "to", "maximise", "the", "recovery", "of", "spent", "chemicals."],
            correctAnswer: "The pulp is washed countercurrently to maximise the recovery of spent chemicals.",
            correctFeedback: "Correct! 'Is washed' — 'the pulp' is uncountable and singular. 'Countercurrently' is a technical adverb meaning 'in the opposite direction to the flow'. 'To maximise the recovery of spent chemicals' is a purpose infinitive. Technical adverbs like this are typical in B2 industrial descriptions.",
            correctFeedbackRu: "Правильно! 'Is washed' — 'the pulp' несчитаемое. 'Countercurrently' — технический наречие. 'To maximise the recovery of spent chemicals' — инфинитив цели.",
            incorrectFeedback: "Check: 'the pulp' is uncountable — use 'is washed'. Structure: uncountable subject + is + past participle + adverb + purpose infinitive. 'The pulp is washed countercurrently to maximise the recovery of spent chemicals.'",
            incorrectFeedbackRu: "Проверьте: 'the pulp' несчитаемое — используем 'is washed'. Структура: несчитаемое + is + причастие + наречие + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "paper", "web", "is", "supported", "by", "a", "series", "of", "felt", "blankets", "through", "the", "press", "section."],
            correctAnswer: "The paper web is supported by a series of felt blankets through the press section.",
            correctFeedback: "Correct! 'Is supported' — 'the paper web' is singular. 'By a series of felt blankets' names the agent — the mechanism providing the support. 'Through the press section' describes the location/path. The agent 'by' phrase typically follows the passive verb directly.",
            correctFeedbackRu: "Правильно! 'Is supported' — 'the paper web' — единственное число. 'By a series of felt blankets' называет агента. 'Through the press section' описывает место/путь.",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'by' + agent + 'through' + location. 'The paper web is supported by a series of felt blankets through the press section.' The agent phrase follows the passive verb.",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'by' + агент + 'through' + место. Фраза агента следует за пассивным глаголом."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Starch", "is", "applied", "to", "both", "surfaces", "of", "the", "paper", "to", "improve", "its", "printability."],
            correctAnswer: "Starch is applied to both surfaces of the paper to improve its printability.",
            correctFeedback: "Correct! 'Is applied' — 'starch' is uncountable and singular. 'To both surfaces of the paper' describes where it is applied — 'to both surfaces' is more precise than just 'to the paper'. 'To improve its printability' is a purpose infinitive using a technical noun 'printability'.",
            correctFeedbackRu: "Правильно! 'Is applied' — 'starch' несчитаемое. 'To both surfaces of the paper' описывает место. 'To improve its printability' — инфинитив цели с техническим существительным.",
            incorrectFeedback: "Check: 'starch' is uncountable — use 'is applied'. Structure: uncountable subject + is + past participle + 'to both surfaces of the paper' + purpose infinitive.",
            incorrectFeedbackRu: "Проверьте: 'starch' несчитаемое — используем 'is applied'. Структура: несчитаемое + is + причастие + 'to both surfaces of the paper' + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Parent", "reels", "are", "converted", "into", "smaller", "rolls", "or", "cut", "sheets", "on", "the", "converting", "line."],
            correctAnswer: "Parent reels are converted into smaller rolls or cut sheets on the converting line.",
            correctFeedback: "Correct! 'Are converted' — plural subject ('parent reels'). 'Into smaller rolls or cut sheets' describes what the reels are turned into — 'converted into' shows transformation. 'On the converting line' names the specific part of the factory where this happens.",
            correctFeedbackRu: "Правильно! 'Are converted' — множественное число. 'Into smaller rolls or cut sheets' описывает результат трансформации. 'Converted into' показывает превращение. 'On the converting line' называет участок.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'into' + products + 'on' + location. 'Parent reels are converted into smaller rolls or cut sheets on the converting line.' 'Converted into' describes transformation.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'into' + продукты + 'on' + место."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Paper", "products", "are", "wrapped", "in", "moisture-proof", "packaging", "before", "being", "warehoused."],
            correctAnswer: "Paper products are wrapped in moisture-proof packaging before being warehoused.",
            correctFeedback: "Correct! 'Are wrapped' — plural subject. 'In moisture-proof packaging' describes the material. 'Before being warehoused' is a passive gerund clause — 'before being + past participle' is a formal structure used to show sequence without repeating the subject.",
            correctFeedbackRu: "Правильно! 'Are wrapped' — множественное число. 'Before being warehoused' — пассивный герундийный оборот. Структура 'before being + причастие' — формальная для показа последовательности без повторения подлежащего.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'in' + material + 'before being' + past participle. 'Before being warehoused' is a passive gerund clause — more formal than 'before they are warehoused'.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'in' + материал + 'before being' + причастие. 'Before being warehoused' — пассивный герундийный оборот."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Every", "production", "batch", "is", "assigned", "a", "unique", "reference", "number", "for", "quality", "tracking."],
            correctAnswer: "Every production batch is assigned a unique reference number for quality tracking.",
            correctFeedback: "Correct! 'Is assigned' — 'every production batch' is singular ('every' always takes singular). 'Is assigned a unique reference number' — 'assign' can take two objects: the passive subject ('batch') and the thing given ('a unique reference number'). 'For quality tracking' explains the purpose.",
            correctFeedbackRu: "Правильно! 'Is assigned' — 'every production batch' — единственное число ('every' всегда единственное). 'Assign' может принимать два дополнения. 'For quality tracking' объясняет цель.",
            incorrectFeedback: "'Every production batch' requires a singular verb — use 'is assigned'. Structure: 'every' + noun + is + past participle + object + 'for' + purpose. 'Every production batch is assigned a unique reference number for quality tracking.'",
            incorrectFeedbackRu: "'Every production batch' требует единственное число — используем 'is assigned'. Структура: 'every' + существительное + is + причастие + дополнение + 'for' + цель."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Wastewater", "from", "the", "paper", "mill", "is", "treated", "on-site", "before", "being", "discharged."],
            correctAnswer: "Wastewater from the paper mill is treated on-site before being discharged.",
            correctFeedback: "Correct! 'Is treated' — 'wastewater' is uncountable and singular. 'From the paper mill' is a modifier. 'On-site' is an adverb hyphenated when used as an adverb. 'Before being discharged' is a passive gerund clause — 'before being + past participle' is a formal B2 structure showing sequence without repeating the subject.",
            correctFeedbackRu: "Правильно! 'Is treated' — 'wastewater' несчитаемое. 'On-site' — наречие с дефисом. 'Before being discharged' — пассивный герундийный оборот. Структура 'before being + причастие' — формальная B2 для последовательности.",
            incorrectFeedback: "Check: 'wastewater' is uncountable — use 'is treated'. Structure: uncountable subject + is + past participle + adverb + 'before being' + past participle. 'Before being discharged' is a passive gerund clause.",
            incorrectFeedbackRu: "Проверьте: 'wastewater' несчитаемое — используем 'is treated'. Структура: несчитаемое + is + причастие + наречие + 'before being' + причастие."
        }
    ]
};

/* ============================================
Page 6: Sentence Building - Chocolate Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-sentence-page6'] = {
    title: "Process Description - Chocolate Manufacturing",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Cacao", "trees", "are", "grown", "within", "20", "degrees", "of", "the", "equator", "in", "tropical", "climates."],
            correctAnswer: "Cacao trees are grown within 20 degrees of the equator in tropical climates.",
            correctFeedback: "Correct! 'Are grown' — plural subject ('cacao trees'). 'Within 20 degrees of the equator' is a precise geographical phrase showing the narrow climate zone. 'In tropical climates' further describes the growing conditions. Both prepositional phrases follow the passive verb.",
            correctFeedbackRu: "Правильно! 'Are grown' — множественное число. 'Within 20 degrees of the equator' — точная географическая фраза. 'In tropical climates' описывает условия роста. Обе предложные фразы следуют за пассивным глаголом.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'within' + geographical range + 'in' + climate description. 'Cacao trees are grown within 20 degrees of the equator in tropical climates.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'within' + географический диапазон + 'in' + описание климата."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "cacao", "beans", "are", "dried", "to", "a", "moisture", "content", "of", "around", "seven", "percent."],
            correctAnswer: "The cacao beans are dried to a moisture content of around seven percent.",
            correctFeedback: "Correct! 'Are dried' — plural subject ('the cacao beans'). 'To a moisture content of around seven percent' gives the precise target — 'to a [measurement] of [value]' is a standard B2 structure for describing the endpoint of a drying or reduction process.",
            correctFeedbackRu: "Правильно! 'Are dried' — множественное число. 'To a moisture content of around seven percent' — точный целевой показатель. 'To a [измерение] of [значение]' — стандартная структура B2 для конечной точки процесса.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'to a' + measurement + 'of' + value. 'The cacao beans are dried to a moisture content of around seven percent.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'to a' + измерение + 'of' + значение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "cocoa", "mass", "is", "pressed", "to", "separate", "the", "cocoa", "butter", "from", "the", "solids."],
            correctAnswer: "The cocoa mass is pressed to separate the cocoa butter from the solids.",
            correctFeedback: "Correct! 'Is pressed' — 'the cocoa mass' is singular. 'To separate the cocoa butter from the solids' is a purpose infinitive. 'Separate X from Y' is a standard expression for describing the division of two substances — the active verb in the infinitive is appropriate here.",
            correctFeedbackRu: "Правильно! 'Is pressed' — единственное число. 'To separate the cocoa butter from the solids' — инфинитив цели. 'Separate X from Y' — стандартное выражение для разделения двух веществ.",
            incorrectFeedback: "Structure: singular subject + is + past participle + purpose infinitive ('to separate X from Y'). 'The cocoa mass is pressed to separate the cocoa butter from the solids.'",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + инфинитив цели ('to separate X from Y')."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Milk", "powder", "is", "added", "to", "produce", "milk", "chocolate", "with", "a", "milder", "flavour."],
            correctAnswer: "Milk powder is added to produce milk chocolate with a milder flavour.",
            correctFeedback: "Correct! 'Is added' — 'milk powder' is uncountable and singular. 'To produce milk chocolate' is a purpose infinitive. 'With a milder flavour' is a result description using a comparative adjective. Comparatives ('milder', 'smoother', 'darker') are common in describing industrial outcomes.",
            correctFeedbackRu: "Правильно! 'Is added' — 'milk powder' несчитаемое. 'To produce milk chocolate' — инфинитив цели. 'With a milder flavour' использует сравнительное прилагательное для описания результата.",
            incorrectFeedback: "Check: 'milk powder' is uncountable — use 'is added'. Structure: uncountable subject + is + past participle + purpose infinitive + 'with' + comparative result.",
            incorrectFeedbackRu: "Проверьте: 'milk powder' несчитаемое — используем 'is added'. Структура: несчитаемое + is + причастие + инфинитив цели + 'with' + сравнительный результат."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "chocolate", "is", "aerated", "by", "injecting", "nitrogen", "bubbles", "to", "create", "a", "lighter", "texture."],
            correctAnswer: "The chocolate is aerated by injecting nitrogen bubbles to create a lighter texture.",
            correctFeedback: "Correct! 'Is aerated' — 'the chocolate' is singular. 'By injecting nitrogen bubbles' uses 'by + gerund' to describe the method. 'To create a lighter texture' is a purpose infinitive. Both method and purpose follow the passive verb, with method before purpose.",
            correctFeedbackRu: "Правильно! 'Is aerated' — единственное число. 'By injecting nitrogen bubbles' — 'by + герундий' для описания метода. 'To create a lighter texture' — инфинитив цели. Метод ставится перед целью.",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'by' + gerund + object + purpose infinitive. 'The chocolate is aerated by injecting nitrogen bubbles to create a lighter texture.' Method phrase precedes purpose phrase.",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'by' + герундий + дополнение + инфинитив цели. Фраза метода предшествует фразе цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "finished", "chocolate", "is", "kept", "in", "temperature-controlled", "warehouses", "at", "around", "18", "degrees", "Celsius."],
            correctAnswer: "The finished chocolate is kept in temperature-controlled warehouses at around 18 degrees Celsius.",
            correctFeedback: "Correct! 'Is kept' — 'the finished chocolate' is singular. 'In temperature-controlled warehouses' describes the storage location. 'At around 18 degrees Celsius' gives the precise temperature requirement. The compound adjective 'temperature-controlled' requires a hyphen.",
            correctFeedbackRu: "Правильно! 'Is kept' — единственное число. 'In temperature-controlled warehouses' — место хранения. 'At around 18 degrees Celsius' — точное температурное требование.",
            incorrectFeedback: "Check: 'the finished chocolate' is singular — use 'is kept'. Structure: singular subject + is + past participle + 'in' + location + 'at' + temperature. 'The finished chocolate is kept in temperature-controlled warehouses at around 18 degrees Celsius.'",
            incorrectFeedbackRu: "Проверьте: единственное число — используем 'is kept'. Структура: единственное число + is + причастие + 'in' + место + 'at' + температура."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Traceability", "records", "are", "maintained", "throughout", "the", "supply", "chain", "from", "farm", "to", "factory."],
            correctAnswer: "Traceability records are maintained throughout the supply chain from farm to factory.",
            correctFeedback: "Correct! 'Are maintained' — plural subject ('traceability records'). 'Throughout the supply chain' describes the scope. 'From farm to factory' is an idiomatic phrase showing the full span of the process. This 'from X to Y' structure efficiently describes a complete range.",
            correctFeedbackRu: "Правильно! 'Are maintained' — множественное число. 'Throughout the supply chain' описывает охват. 'From farm to factory' — идиоматическая фраза, показывающая полный диапазон процесса.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'throughout' + scope + 'from' + start + 'to' + end. 'Traceability records are maintained throughout the supply chain from farm to factory.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'throughout' + охват + 'from' + начало + 'to' + конец."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Cocoa", "beans", "are", "certified", "as", "fair-trade", "to", "guarantee", "ethical", "sourcing", "standards."],
            correctAnswer: "Cocoa beans are certified as fair-trade to guarantee ethical sourcing standards.",
            correctFeedback: "Correct! 'Are certified' — plural subject ('cocoa beans'). 'As fair-trade' describes the certification category — 'certified as + category' is a standard passive structure. 'To guarantee ethical sourcing standards' is a purpose infinitive with formal vocabulary typical of B2.",
            correctFeedbackRu: "Правильно! 'Are certified' — множественное число. 'As fair-trade' описывает категорию сертификации. 'To guarantee ethical sourcing standards' — инфинитив цели с формальной лексикой B2.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'as' + certification category + purpose infinitive. 'Cocoa beans are certified as fair-trade to guarantee ethical sourcing standards.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'as' + категория сертификации + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Individual", "chocolates", "are", "placed", "into", "boxes", "by", "robotic", "arms", "at", "high", "speed."],
            correctAnswer: "Individual chocolates are placed into boxes by robotic arms at high speed.",
            correctFeedback: "Correct! 'Are placed' — plural subject ('individual chocolates'). 'Into boxes' describes the destination. 'By robotic arms' names the agent — a machine as agent is common in industrial descriptions. 'At high speed' describes the rate — placed at the end as a manner phrase.",
            correctFeedbackRu: "Правильно! 'Are placed' — множественное число. 'Into boxes' — место назначения. 'By robotic arms' называет агента-машину. 'At high speed' описывает скорость — ставится в конце как фраза образа действия.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'into' + destination + 'by' + agent + 'at' + rate. 'Individual chocolates are placed into boxes by robotic arms at high speed.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'into' + назначение + 'by' + агент + 'at' + скорость."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["All", "packaging", "materials", "are", "selected", "to", "comply", "with", "food-contact", "safety", "regulations."],
            correctAnswer: "All packaging materials are selected to comply with food-contact safety regulations.",
            correctFeedback: "Correct! 'Are selected' — plural subject ('all packaging materials'). 'To comply with food-contact safety regulations' is a purpose infinitive. 'Comply with' means 'meet or follow the requirements of'. This verb + preposition combination is essential B2 vocabulary in regulatory contexts.",
            correctFeedbackRu: "Правильно! 'Are selected' — множественное число. 'To comply with food-contact safety regulations' — инфинитив цели. 'Comply with' означает 'соответствовать требованиям' — важная лексика B2 в регуляторном контексте.",
            incorrectFeedback: "Structure: plural subject + are + past participle + purpose infinitive ('to comply with' + regulations). 'All packaging materials are selected to comply with food-contact safety regulations.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + инфинитив цели ('to comply with' + нормы)."
        }
    ]
};

/* ============================================
Page 7: Sentence Building - Steel Production
============================================ */
window.grammarExercises['passive']['process-description-sentence-page7'] = {
    title: "Process Description - Steel Production",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Steel", "scrap", "is", "collected", "from", "various", "industries", "and", "recycled", "into", "new", "steel."],
            correctAnswer: "Steel scrap is collected from various industries and recycled into new steel.",
            correctFeedback: "Correct! 'Is collected...and recycled' — two passive verbs sharing 'is'. 'From various industries' describes the source. 'Into new steel' describes the transformation. 'Recycled into' shows transformation — a key vocabulary item for describing circular processes.",
            correctFeedbackRu: "Правильно! 'Is collected...and recycled' — два пассивных глагола с общим 'is'. 'Recycled into' показывает трансформацию — ключевая лексика для круговых процессов.",
            incorrectFeedback: "Two passive verbs share 'is': 'is collected and recycled'. Structure: uncountable subject + is + past participle + 'from' + source + and + past participle + 'into' + product.",
            incorrectFeedbackRu: "Два пассивных глагола используют 'is': 'is collected and recycled'. Структура: несчитаемое + is + причастие + 'from' + источник + and + причастие + 'into' + продукт."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Pellets", "of", "iron", "ore", "are", "produced", "to", "make", "the", "blast", "furnace", "feed", "more", "uniform."],
            correctAnswer: "Pellets of iron ore are produced to make the blast furnace feed more uniform.",
            correctFeedback: "Correct! 'Are produced' — the head noun is 'pellets' (plural). 'Of iron ore' is a modifier. 'To make the blast furnace feed more uniform' is a purpose infinitive using 'make + object + adjective' — a useful B2 structure for describing improvements.",
            correctFeedbackRu: "Правильно! 'Are produced' — главное существительное 'pellets' (множественное число). 'To make the blast furnace feed more uniform' — инфинитив цели со структурой 'make + дополнение + прилагательное'.",
            incorrectFeedback: "The head noun is 'pellets' (plural) — use 'are produced'. Structure: 'pellets of iron ore' + are + past participle + 'to make' + object + comparative adjective.",
            incorrectFeedbackRu: "Главное существительное — 'pellets' (множественное число), используем 'are produced'. Структура: 'pellets of iron ore' + are + причастие + 'to make' + дополнение + сравнительное прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Pig", "iron", "is", "converted", "into", "steel", "by", "reducing", "its", "carbon", "content", "significantly."],
            correctAnswer: "Pig iron is converted into steel by reducing its carbon content significantly.",
            correctFeedback: "Correct! 'Is converted' — 'pig iron' is uncountable and singular. 'Into steel' describes the result of the conversion. 'By reducing its carbon content significantly' uses 'by + gerund' to explain the method. The adverb 'significantly' follows the object.",
            correctFeedbackRu: "Правильно! 'Is converted' — 'pig iron' несчитаемое. 'Into steel' — результат конверсии. 'By reducing its carbon content significantly' — 'by + герундий' для метода.",
            incorrectFeedback: "Check: 'pig iron' is uncountable — use 'is converted'. Structure: uncountable subject + is + past participle + 'into' + product + 'by' + gerund + object + adverb.",
            incorrectFeedbackRu: "Проверьте: 'pig iron' несчитаемое — используем 'is converted'. Структура: несчитаемое + is + причастие + 'into' + продукт + 'by' + герундий + дополнение + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "steel", "composition", "is", "verified", "by", "a", "spectrometer", "before", "casting", "begins."],
            correctAnswer: "The steel composition is verified by a spectrometer before casting begins.",
            correctFeedback: "Correct! 'Is verified' — singular subject ('the steel composition'). 'By a spectrometer' names the instrument as agent. 'Before casting begins' is a time clause — using present simple active 'begins' in a time clause is grammatically correct.",
            correctFeedbackRu: "Правильно! 'Is verified' — единственное число. 'By a spectrometer' называет инструмент агентом. 'Before casting begins' — придаточное времени с Present Simple активным.",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'by' + instrument + time clause. 'The steel composition is verified by a spectrometer before casting begins.' In time clauses, use present simple (begins), not future.",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'by' + инструмент + придаточное времени. Во временных придаточных используйте Present Simple."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Steel", "bars", "are", "quenched", "in", "water", "or", "oil", "to", "achieve", "the", "desired", "hardness."],
            correctAnswer: "Steel bars are quenched in water or oil to achieve the desired hardness.",
            correctFeedback: "Correct! 'Are quenched' — plural subject ('steel bars'). 'In water or oil' presents two alternative quenching media. 'To achieve the desired hardness' is a purpose infinitive. 'The desired hardness' uses 'desired' as an adjective meaning 'the hardness that is wanted'.",
            correctFeedbackRu: "Правильно! 'Are quenched' — множественное число. 'In water or oil' — два альтернативных средства закалки. 'The desired hardness' использует 'desired' как прилагательное.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'in' + medium + purpose infinitive. 'Steel bars are quenched in water or oil to achieve the desired hardness.' 'In water or oil' gives alternative options.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'in' + среда + инфинитив цели. 'In water or oil' — альтернативные варианты."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Stainless", "steel", "is", "produced", "by", "adding", "at", "least", "10.5", "percent", "chromium", "to", "the", "steel."],
            correctAnswer: "Stainless steel is produced by adding at least 10.5 percent chromium to the steel.",
            correctFeedback: "Correct! 'Is produced' — 'stainless steel' is uncountable and singular. 'By adding at least 10.5 percent chromium to the steel' explains the method with precise measurements. Specific percentages and quantities are a hallmark of accurate B2 process descriptions.",
            correctFeedbackRu: "Правильно! 'Is produced' — 'stainless steel' несчитаемое. 'By adding at least 10.5 percent chromium' объясняет метод с точными измерениями. Конкретные проценты — признак точных описаний B2.",
            incorrectFeedback: "Check: 'stainless steel' is uncountable — use 'is produced'. Structure: uncountable subject + is + past participle + 'by adding' + quantity + element + 'to the steel'.",
            incorrectFeedbackRu: "Проверьте: 'stainless steel' несчитаемое — используем 'is produced'. Структура: несчитаемое + is + причастие + 'by adding' + количество + элемент + 'to the steel'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Hot-rolled", "steel", "coils", "are", "pickled", "in", "acid", "to", "remove", "the", "oxide", "scale."],
            correctAnswer: "Hot-rolled steel coils are pickled in acid to remove the oxide scale.",
            correctFeedback: "Correct! 'Are pickled' — plural subject ('hot-rolled steel coils'). 'In acid' describes the medium used. 'To remove the oxide scale' is a purpose infinitive. 'Pickled' here is a technical term meaning 'treated with acid' — unrelated to food pickling but sharing the same verb.",
            correctFeedbackRu: "Правильно! 'Are pickled' — множественное число. 'In acid' описывает среду. 'To remove the oxide scale' — инфинитив цели. 'Pickled' — технический термин 'обработанный кислотой'.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'in' + medium + purpose infinitive. 'Hot-rolled steel coils are pickled in acid to remove the oxide scale.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'in' + среда + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Steel", "sheets", "are", "cut", "to", "exact", "dimensions", "and", "stacked", "on", "pallets", "for", "dispatch."],
            correctAnswer: "Steel sheets are cut to exact dimensions and stacked on pallets for dispatch.",
            correctFeedback: "Correct! 'Are cut...and stacked' — two passive verbs sharing 'are'. 'To exact dimensions' describes the target measurement. 'On pallets' describes the stacking location. 'For dispatch' is a purpose phrase using 'for + noun' — an alternative to 'to + infinitive'.",
            correctFeedbackRu: "Правильно! 'Are cut...and stacked' — два пассивных глагола с общим 'are'. 'For dispatch' — фраза цели с 'for + существительное' — альтернатива 'to + инфинитив'.",
            incorrectFeedback: "Two passive verbs share 'are': 'are cut and stacked'. Structure: plural subject + are + past participle + 'to' + target + and + past participle + 'on' + location + 'for' + purpose.",
            incorrectFeedbackRu: "Два пассивных глагола используют 'are': 'are cut and stacked'. Структура: множественное число + are + причастие + 'to' + цель + and + причастие + 'on' + место + 'for' + цель."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "mechanical", "properties", "of", "each", "batch", "are", "documented", "in", "a", "mill", "test", "certificate."],
            correctAnswer: "The mechanical properties of each batch are documented in a mill test certificate.",
            correctFeedback: "Correct! 'Are documented' — the head noun is 'properties' (plural). 'Of each batch' is a modifier. 'In a mill test certificate' describes where the documentation appears. A 'mill test certificate' is an official document in steel manufacturing proving the steel meets specifications.",
            correctFeedbackRu: "Правильно! 'Are documented' — главное существительное 'properties' (множественное число). 'In a mill test certificate' описывает место документирования. 'Mill test certificate' — официальный документ в производстве стали.",
            incorrectFeedback: "The head noun is 'properties' (plural) — use 'are documented'. Structure: 'the mechanical properties of each batch' + are + past participle + 'in' + document.",
            incorrectFeedbackRu: "Главное существительное — 'properties' (множественное число), используем 'are documented'. Структура: 'the mechanical properties of each batch' + are + причастие + 'in' + документ."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Wire", "rod", "is", "drawn", "through", "dies", "of", "decreasing", "diameter", "to", "produce", "thinner", "wire."],
            correctAnswer: "Wire rod is drawn through dies of decreasing diameter to produce thinner wire.",
            correctFeedback: "Correct! 'Is drawn' — 'wire rod' is uncountable and singular. 'Draw' is irregular: draw / drew / drawn. 'Through dies of decreasing diameter' describes the path and method. 'To produce thinner wire' is a purpose infinitive with a comparative adjective — 'thinner' shows the result of the process.",
            correctFeedbackRu: "Правильно! 'Is drawn' — 'wire rod' несчитаемое. 'Draw' неправильный: draw / drew / drawn. 'Through dies of decreasing diameter' описывает путь и метод. 'To produce thinner wire' — инфинитив цели со сравнительным прилагательным.",
            incorrectFeedback: "Check: 'wire rod' is uncountable — use 'is drawn'. 'Draw' is irregular (past participle: drawn). Structure: uncountable subject + is + past participle + 'through' + path + purpose infinitive.",
            incorrectFeedbackRu: "Проверьте: 'wire rod' несчитаемое — используем 'is drawn'. 'Draw' неправильный (причастие: drawn). Структура: несчитаемое + is + причастие + 'through' + путь + инфинитив цели."
        }
    ]
};

/* ============================================
Page 8: Sentence Building - Industrial Bread Baking
============================================ */
window.grammarExercises['passive']['process-description-sentence-page8'] = {
    title: "Process Description - Industrial Bread Baking",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "flour", "is", "sifted", "through", "a", "fine", "mesh", "screen", "to", "aerate", "it", "before", "mixing."],
            correctAnswer: "The flour is sifted through a fine mesh screen to aerate it before mixing.",
            correctFeedback: "Correct! 'Is sifted' — 'the flour' is uncountable and singular. 'Through a fine mesh screen' describes the method. 'To aerate it' is a purpose infinitive. 'Before mixing' is a time phrase using a gerund — more concise than 'before the mixing begins'.",
            correctFeedbackRu: "Правильно! 'Is sifted' — 'the flour' несчитаемое. 'Through a fine mesh screen' — метод. 'To aerate it' — инфинитив цели. 'Before mixing' — временная фраза с герундием.",
            incorrectFeedback: "Check: 'the flour' is uncountable — use 'is sifted'. Structure: uncountable subject + is + past participle + 'through' + tool + purpose infinitive + 'before' + gerund.",
            incorrectFeedbackRu: "Проверьте: 'the flour' несчитаемое — используем 'is sifted'. Структура: несчитаемое + is + причастие + 'through' + инструмент + инфинитив цели + 'before' + герундий."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "yeast", "is", "activated", "by", "mixing", "it", "with", "warm", "water", "and", "a", "small", "amount", "of", "sugar."],
            correctAnswer: "The yeast is activated by mixing it with warm water and a small amount of sugar.",
            correctFeedback: "Correct! 'Is activated' — 'the yeast' is uncountable and singular. 'By mixing it with warm water and a small amount of sugar' uses 'by + gerund' to describe the activation method. This explains the biochemical trigger for yeast activity.",
            correctFeedbackRu: "Правильно! 'Is activated' — 'the yeast' несчитаемое. 'By mixing it with warm water and a small amount of sugar' — 'by + герундий' для метода активации.",
            incorrectFeedback: "Check: 'the yeast' is uncountable — use 'is activated'. The 'by + gerund' structure explains the method. Structure: uncountable subject + is + past participle + 'by' + gerund + object + 'with' + ingredients.",
            incorrectFeedbackRu: "Проверьте: 'the yeast' несчитаемое — используем 'is activated'. Структура 'by + герундий' объясняет метод."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "dough", "is", "mixed", "in", "a", "spiral", "mixer", "for", "twelve", "minutes", "at", "low", "speed."],
            correctAnswer: "The dough is mixed in a spiral mixer for twelve minutes at low speed.",
            correctFeedback: "Correct! 'Is mixed' — 'the dough' is uncountable and singular. 'In a spiral mixer' names the equipment. 'For twelve minutes' is the duration. 'At low speed' describes the setting. Three details in sequence — equipment, duration, speed — is typical of precise technical writing.",
            correctFeedbackRu: "Правильно! 'Is mixed' — 'the dough' несчитаемое. 'In a spiral mixer' называет оборудование. 'For twelve minutes' — продолжительность. 'At low speed' — режим. Три детали подряд типичны для точного технического письма.",
            incorrectFeedback: "Check: 'the dough' is uncountable — use 'is mixed'. Structure: uncountable subject + is + past participle + 'in' + equipment + 'for' + duration + 'at' + setting.",
            incorrectFeedbackRu: "Проверьте: 'the dough' несчитаемое — используем 'is mixed'. Структура: несчитаемое + is + причастие + 'in' + оборудование + 'for' + продолжительность + 'at' + режим."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Dough", "portions", "are", "rounded", "into", "smooth", "balls", "before", "being", "placed", "in", "tins."],
            correctAnswer: "Dough portions are rounded into smooth balls before being placed in tins.",
            correctFeedback: "Correct! 'Are rounded' — plural subject ('dough portions'). 'Into smooth balls' describes the shape. 'Before being placed in tins' is a passive gerund clause — 'before being + past participle' is a formal B2 structure used to show sequence without repeating the subject.",
            correctFeedbackRu: "Правильно! 'Are rounded' — множественное число. 'Before being placed in tins' — пассивный герундийный оборот. Структура 'before being + причастие' — формальная B2 для показа последовательности.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'into' + shape + 'before being' + past participle + location. 'Before being placed in tins' is a passive gerund clause showing sequence.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'into' + форма + 'before being' + причастие + место."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "oven", "temperature", "is", "adjusted", "automatically", "to", "compensate", "for", "load", "variations."],
            correctAnswer: "The oven temperature is adjusted automatically to compensate for load variations.",
            correctFeedback: "Correct! 'Is adjusted' — singular subject ('the oven temperature'). 'Automatically' follows the passive verb. 'To compensate for load variations' is a purpose infinitive — 'compensate for' means 'to make up for or counteract'. This shows sophisticated process control vocabulary.",
            correctFeedbackRu: "Правильно! 'Is adjusted' — единственное число. 'Automatically' следует за пассивным глаголом. 'To compensate for load variations' — инфинитив цели. 'Compensate for' означает 'компенсировать'.",
            incorrectFeedback: "Structure: singular subject + is + past participle + adverb + purpose infinitive. 'The oven temperature is adjusted automatically to compensate for load variations.' The adverb follows the passive verb here.",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + наречие + инфинитив цели. Наречие следует за пассивным глаголом."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Baked", "loaves", "are", "inverted", "onto", "cooling", "conveyors", "to", "prevent", "condensation", "on", "the", "base."],
            correctAnswer: "Baked loaves are inverted onto cooling conveyors to prevent condensation on the base.",
            correctFeedback: "Correct! 'Are inverted' — plural subject ('baked loaves'). 'Onto cooling conveyors' describes the destination — 'inverted onto' means turned upside down onto. 'To prevent condensation on the base' is a purpose infinitive explaining the technical reason for inversion.",
            correctFeedbackRu: "Правильно! 'Are inverted' — множественное число. 'Onto cooling conveyors' — место назначения. 'To prevent condensation on the base' — инфинитив цели, объясняющий техническую причину.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'onto' + destination + purpose infinitive. 'Baked loaves are inverted onto cooling conveyors to prevent condensation on the base.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'onto' + назначение + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "internal", "temperature", "of", "each", "loaf", "is", "checked", "to", "confirm", "it", "is", "fully", "baked."],
            correctAnswer: "The internal temperature of each loaf is checked to confirm it is fully baked.",
            correctFeedback: "Correct! 'Is checked' — the head noun is 'temperature' (singular). 'Of each loaf' is a modifier — 'each' here is part of the modifier, not the subject, so it doesn't affect the verb. 'To confirm it is fully baked' is a purpose infinitive containing a passive clause.",
            correctFeedbackRu: "Правильно! 'Is checked' — главное существительное 'temperature' (единственное число). 'Of each loaf' — уточнение. 'To confirm it is fully baked' — инфинитив цели с пассивным придаточным.",
            incorrectFeedback: "The head noun is 'temperature' (singular) — use 'is checked'. Structure: 'the internal temperature of each loaf' + is + past participle + purpose infinitive containing a passive clause.",
            incorrectFeedbackRu: "Главное существительное — 'temperature' (единственное число), используем 'is checked'. Структура: 'the internal temperature of each loaf' + is + причастие + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Sliced", "bread", "is", "packed", "in", "recyclable", "bags", "labelled", "with", "nutritional", "information."],
            correctAnswer: "Sliced bread is packed in recyclable bags labelled with nutritional information.",
            correctFeedback: "Correct! 'Is packed' — 'sliced bread' is uncountable and singular. 'In recyclable bags' describes the packaging material. 'Labelled with nutritional information' is a reduced relative clause ('that are labelled with nutritional information') used as a post-modifier for 'bags'.",
            correctFeedbackRu: "Правильно! 'Is packed' — 'sliced bread' несчитаемое. 'In recyclable bags' — упаковочный материал. 'Labelled with nutritional information' — сокращённое придаточное для 'bags'.",
            incorrectFeedback: "Check: 'sliced bread' is uncountable — use 'is packed'. Structure: uncountable subject + is + past participle + 'in' + packaging + reduced relative clause (past participle + 'with' + detail).",
            incorrectFeedbackRu: "Проверьте: 'sliced bread' несчитаемое — используем 'is packed'. Структура: несчитаемое + is + причастие + 'in' + упаковка + сокращённое придаточное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Deliveries", "are", "scheduled", "and", "dispatched", "according", "to", "a", "daily", "route", "plan."],
            correctAnswer: "Deliveries are scheduled and dispatched according to a daily route plan.",
            correctFeedback: "Correct! 'Are scheduled and dispatched' — two passive verbs sharing 'are'. 'According to a daily route plan' means 'in line with a planned schedule'. 'According to' is a formal preposition in process descriptions meaning 'following or in compliance with'.",
            correctFeedbackRu: "Правильно! 'Are scheduled and dispatched' — два пассивных глагола с общим 'are'. 'According to a daily route plan' означает 'в соответствии с плановым расписанием'.",
            incorrectFeedback: "Two passive verbs share 'are': 'are scheduled and dispatched'. Structure: plural subject + are + past participle + and + past participle + 'according to' + plan.",
            incorrectFeedbackRu: "Два пассивных глагола используют 'are': 'are scheduled and dispatched'. Структура: множественное число + are + причастие + and + причастие + 'according to' + план."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Returns", "and", "unsold", "stock", "are", "collected", "and", "redirected", "to", "food", "bank", "programmes."],
            correctAnswer: "Returns and unsold stock are collected and redirected to food bank programmes.",
            correctFeedback: "Correct! 'Are collected and redirected' — two passive verbs sharing 'are'. 'Returns and unsold stock' is plural (two items joined by 'and'). 'To food bank programmes' describes the destination. Redirecting surplus food is a key sustainability practice described effectively with the passive.",
            correctFeedbackRu: "Правильно! 'Are collected and redirected' — два пассивных глагола с общим 'are'. 'Returns and unsold stock' — множественное число (два предмета с 'and'). 'To food bank programmes' — место назначения.",
            incorrectFeedback: "Two passive verbs share 'are': 'are collected and redirected'. 'Returns and unsold stock' is plural (two items with 'and'). Structure: plural subject + are + past participle + and + past participle + 'to' + destination.",
            incorrectFeedbackRu: "Два пассивных глагола используют 'are': 'are collected and redirected'. 'Returns and unsold stock' — множественное число. Структура: множественное число + are + причастие + and + причастие + 'to' + место назначения."
        }
    ]
};

/* ============================================
Page 9: Sentence Building - Wine Production
============================================ */
window.grammarExercises['passive']['process-description-sentence-page9'] = {
    title: "Process Description - Wine Production",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Grapes", "are", "harvested", "at", "peak", "ripeness", "to", "achieve", "the", "optimal", "sugar-acid", "balance."],
            correctAnswer: "Grapes are harvested at peak ripeness to achieve the optimal sugar-acid balance.",
            correctFeedback: "Correct! 'Are harvested' — plural subject ('grapes'). 'At peak ripeness' describes the condition at harvest. 'To achieve the optimal sugar-acid balance' is a purpose infinitive using technical vocabulary. 'Peak ripeness' and 'sugar-acid balance' are both B2-level technical terms.",
            correctFeedbackRu: "Правильно! 'Are harvested' — множественное число. 'At peak ripeness' описывает состояние при сборе. 'To achieve the optimal sugar-acid balance' — инфинитив цели с технической лексикой.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'at' + condition + purpose infinitive. 'Grapes are harvested at peak ripeness to achieve the optimal sugar-acid balance.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'at' + условие + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["White", "grapes", "are", "pressed", "immediately", "after", "harvesting", "to", "avoid", "skin", "contact."],
            correctAnswer: "White grapes are pressed immediately after harvesting to avoid skin contact.",
            correctFeedback: "Correct! 'Are pressed' — plural subject ('white grapes'). 'Immediately after harvesting' is a time phrase using a gerund — 'immediately after + gerund' is a B2 structure showing two closely sequenced actions. 'To avoid skin contact' is a purpose infinitive.",
            correctFeedbackRu: "Правильно! 'Are pressed' — множественное число. 'Immediately after harvesting' — временная фраза с герундием. 'Immediately after + герундий' — структура B2 для двух последовательных действий.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'immediately after' + gerund + purpose infinitive. 'White grapes are pressed immediately after harvesting to avoid skin contact.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'immediately after' + герундий + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "fermentation", "temperature", "is", "controlled", "precisely", "to", "influence", "the", "wine's", "aroma", "profile."],
            correctAnswer: "The fermentation temperature is controlled precisely to influence the wine's aroma profile.",
            correctFeedback: "Correct! 'Is controlled' — singular subject ('the fermentation temperature'). 'Precisely' follows the passive verb as an adverb. 'To influence the wine's aroma profile' is a purpose infinitive. 'Aroma profile' is a technical term for the combination of scents in a wine.",
            correctFeedbackRu: "Правильно! 'Is controlled' — единственное число. 'Precisely' — наречие после пассивного глагола. 'To influence the wine's aroma profile' — инфинитив цели.",
            incorrectFeedback: "Structure: singular subject + is + past participle + adverb + purpose infinitive. 'The fermentation temperature is controlled precisely to influence the wine's aroma profile.'",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + наречие + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Malolactic", "fermentation", "is", "encouraged", "in", "red", "wines", "to", "reduce", "their", "acidity."],
            correctAnswer: "Malolactic fermentation is encouraged in red wines to reduce their acidity.",
            correctFeedback: "Correct! 'Is encouraged' — 'malolactic fermentation' is singular (it is one process). 'In red wines' describes which wines this applies to. 'To reduce their acidity' is a purpose infinitive. 'Malolactic fermentation' converts sharp malic acid into softer lactic acid.",
            correctFeedbackRu: "Правильно! 'Is encouraged' — 'malolactic fermentation' — единственное число (один процесс). 'In red wines' описывает, к каким винам это относится. 'To reduce their acidity' — инфинитив цели.",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'in' + wines + purpose infinitive. 'Malolactic fermentation is encouraged in red wines to reduce their acidity.'",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'in' + вина + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "wine", "is", "tested", "for", "residual", "sugar", "to", "determine", "its", "final", "sweetness", "level."],
            correctAnswer: "The wine is tested for residual sugar to determine its final sweetness level.",
            correctFeedback: "Correct! 'Is tested' — 'the wine' is singular. 'For residual sugar' describes what is being measured — 'tested for + substance' is a standard passive expression in analytical contexts. 'To determine its final sweetness level' is a purpose infinitive.",
            correctFeedbackRu: "Правильно! 'Is tested' — 'the wine' — единственное число. 'For residual sugar' описывает, что измеряется. 'To determine its final sweetness level' — инфинитив цели.",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'for' + substance + purpose infinitive. 'The wine is tested for residual sugar to determine its final sweetness level.'",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'for' + вещество + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Wines", "are", "blended", "from", "different", "grape", "varieties", "to", "achieve", "a", "more", "complex", "flavour."],
            correctAnswer: "Wines are blended from different grape varieties to achieve a more complex flavour.",
            correctFeedback: "Correct! 'Are blended' — plural subject ('wines'). 'From different grape varieties' describes the source components. 'To achieve a more complex flavour' is a purpose infinitive with a comparative adjective 'more complex'. Comparatives are used to describe the improvement created by blending.",
            correctFeedbackRu: "Правильно! 'Are blended' — множественное число. 'From different grape varieties' — исходные компоненты. 'To achieve a more complex flavour' — инфинитив цели со сравнительным прилагательным.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'from' + source + purpose infinitive (with comparative). 'Wines are blended from different grape varieties to achieve a more complex flavour.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'from' + источник + инфинитив цели (со сравнительным)."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "wine", "is", "tasted", "by", "a", "panel", "of", "trained", "sensory", "evaluators", "before", "release."],
            correctAnswer: "The wine is tasted by a panel of trained sensory evaluators before release.",
            correctFeedback: "Correct! 'Is tasted' — 'the wine' is singular. 'By a panel of trained sensory evaluators' names a complex agent. 'Before release' is a concise time phrase — 'before release' is shorter than 'before it is released'. This kind of noun phrase is common in formal process descriptions.",
            correctFeedbackRu: "Правильно! 'Is tasted' — 'the wine' — единственное число. 'By a panel of trained sensory evaluators' — сложная именная группа агента. 'Before release' — краткая временная фраза.",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'by' + complex agent + 'before' + noun. 'The wine is tasted by a panel of trained sensory evaluators before release.'",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'by' + сложный агент + 'before' + существительное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Bottles", "are", "stored", "horizontally", "to", "keep", "the", "cork", "moist", "and", "prevent", "oxidation."],
            correctAnswer: "Bottles are stored horizontally to keep the cork moist and prevent oxidation.",
            correctFeedback: "Correct! 'Are stored' — plural subject ('bottles'). 'Horizontally' is an adverb. 'To keep the cork moist and prevent oxidation' contains two purpose infinitives joined by 'and' — both share the same 'to'. Two-purpose infinitives joined with 'and' are efficient and typical at B2 level.",
            correctFeedbackRu: "Правильно! 'Are stored' — множественное число. 'Horizontally' — наречие. 'To keep the cork moist and prevent oxidation' — два инфинитива цели с общим 'to'.",
            incorrectFeedback: "Structure: plural subject + are + past participle + adverb + 'to' + infinitive 1 + and + infinitive 2. Both purpose infinitives share one 'to': 'to keep...and prevent...'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + наречие + 'to' + инфинитив 1 + and + инфинитив 2. Оба инфинитива цели используют один 'to'."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Export", "wines", "are", "certified", "by", "an", "official", "body", "before", "being", "cleared", "for", "customs."],
            correctAnswer: "Export wines are certified by an official body before being cleared for customs.",
            correctFeedback: "Correct! 'Are certified' — plural subject ('export wines'). 'By an official body' names the certifying agent. 'Before being cleared for customs' is a passive gerund clause — 'before being + past participle' is a formal B2 structure. This is the last sentence building exercise for Wine Production.",
            correctFeedbackRu: "Правильно! 'Are certified' — множественное число. 'By an official body' называет агента сертификации. 'Before being cleared for customs' — пассивный герундийный оборот.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'by' + agent + 'before being' + past participle + 'for' + purpose. 'Before being cleared for customs' is a formal passive gerund clause.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'by' + агент + 'before being' + причастие + 'for' + цель."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Vintage", "charts", "are", "compiled", "annually", "to", "record", "the", "quality", "of", "each", "harvest."],
            correctAnswer: "Vintage charts are compiled annually to record the quality of each harvest.",
            correctFeedback: "Correct! 'Are compiled' — plural subject ('vintage charts'). 'Annually' is a frequency adverb placed after the passive verb. 'To record the quality of each harvest' is a purpose infinitive. 'Vintage charts' document the growing conditions and resulting wine quality for each year.",
            correctFeedbackRu: "Правильно! 'Are compiled' — множественное число. 'Annually' — наречие частоты после пассивного глагола. 'To record the quality of each harvest' — инфинитив цели. 'Vintage charts' документируют условия выращивания и качество вина.",
            incorrectFeedback: "Structure: plural subject + are + past participle + adverb + purpose infinitive. 'Vintage charts are compiled annually to record the quality of each harvest.' The adverb 'annually' comes after the passive verb.",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + наречие + инфинитив цели. Наречие 'annually' ставится после пассивного глагола."
        }
    ]
};

/* ============================================
Page 10: Sentence Building - Cement Manufacturing
============================================ */
window.grammarExercises['passive']['process-description-sentence-page10'] = {
    title: "Process Description - Cement Manufacturing",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Limestone", "is", "quarried", "from", "open-cast", "mines", "using", "controlled", "blasting", "techniques."],
            correctAnswer: "Limestone is quarried from open-cast mines using controlled blasting techniques.",
            correctFeedback: "Correct! 'Is quarried' — 'limestone' is uncountable and singular. 'From open-cast mines' describes the source. 'Using controlled blasting techniques' is a participial phrase naming the method. This 'using + noun phrase' structure describes the tool or method without saying who uses it.",
            correctFeedbackRu: "Правильно! 'Is quarried' — 'limestone' несчитаемое. 'From open-cast mines' — источник. 'Using controlled blasting techniques' — причастный оборот, называющий метод.",
            incorrectFeedback: "Check: 'limestone' is uncountable — use 'is quarried'. Structure: uncountable subject + is + past participle + 'from' + source + 'using' + method.",
            incorrectFeedbackRu: "Проверьте: 'limestone' несчитаемое — используем 'is quarried'. Структура: несчитаемое + is + причастие + 'from' + источник + 'using' + метод."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "raw", "materials", "are", "blended", "in", "the", "correct", "proportions", "to", "produce", "the", "right", "clinker", "chemistry."],
            correctAnswer: "The raw materials are blended in the correct proportions to produce the right clinker chemistry.",
            correctFeedback: "Correct! 'Are blended' — plural subject ('the raw materials'). 'In the correct proportions' describes how precisely the blending is done. 'To produce the right clinker chemistry' is a purpose infinitive. 'Clinker chemistry' refers to the chemical composition of the clinker.",
            correctFeedbackRu: "Правильно! 'Are blended' — множественное число. 'In the correct proportions' описывает точность смешивания. 'To produce the right clinker chemistry' — инфинитив цели.",
            incorrectFeedback: "Structure: plural subject + are + past participle + 'in the correct proportions' + purpose infinitive. 'The raw materials are blended in the correct proportions to produce the right clinker chemistry.'",
            incorrectFeedbackRu: "Структура: множественное число + are + причастие + 'in the correct proportions' + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "kiln", "is", "fired", "with", "a", "variety", "of", "fuels", "including", "coal,", "gas,", "and", "waste-derived", "materials."],
            correctAnswer: "The kiln is fired with a variety of fuels including coal, gas, and waste-derived materials.",
            correctFeedback: "Correct! 'Is fired' — 'the kiln' is singular. 'With a variety of fuels' describes the energy source. 'Including coal, gas, and waste-derived materials' is a parenthetical phrase listing examples — 'including' introduces examples without changing the sentence structure.",
            correctFeedbackRu: "Правильно! 'Is fired' — 'the kiln' — единственное число. 'With a variety of fuels' описывает источник энергии. 'Including coal, gas, and waste-derived materials' — вводная фраза с примерами.",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'with a variety of fuels' + 'including' + examples. 'The kiln is fired with a variety of fuels including coal, gas, and waste-derived materials.'",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'with a variety of fuels' + 'including' + примеры."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Clinker", "is", "combined", "with", "gypsum", "in", "a", "ratio", "of", "approximately", "95", "to", "5."],
            correctAnswer: "Clinker is combined with gypsum in a ratio of approximately 95 to 5.",
            correctFeedback: "Correct! 'Is combined' — 'clinker' is uncountable and singular. 'With gypsum' introduces the other material — 'combined with' shows two materials being mixed. 'In a ratio of approximately 95 to 5' gives the precise proportion. Using ratios is a hallmark of technical process descriptions.",
            correctFeedbackRu: "Правильно! 'Is combined' — 'clinker' несчитаемое. 'With gypsum' вводит второй материал. 'In a ratio of approximately 95 to 5' — точная пропорция. Использование соотношений — признак технических описаний.",
            incorrectFeedback: "Check: 'clinker' is uncountable — use 'is combined'. Structure: uncountable subject + is + past participle + 'with' + material + 'in a ratio of' + proportion.",
            incorrectFeedbackRu: "Проверьте: 'clinker' несчитаемое — используем 'is combined'. Структура: несчитаемое + is + причастие + 'with' + материал + 'in a ratio of' + соотношение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "cement", "fineness", "is", "adjusted", "to", "control", "the", "rate", "at", "which", "it", "sets."],
            correctAnswer: "The cement fineness is adjusted to control the rate at which it sets.",
            correctFeedback: "Correct! 'Is adjusted' — singular subject ('the cement fineness'). 'To control the rate at which it sets' is a purpose infinitive containing a relative clause ('at which it sets'). 'The rate at which' is a formal relative clause structure that replaces 'how quickly'.",
            correctFeedbackRu: "Правильно! 'Is adjusted' — единственное число. 'To control the rate at which it sets' — инфинитив цели с придаточным ('at which it sets'). 'The rate at which' — формальная структура, заменяющая 'how quickly'.",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'to control the rate at which it sets'. 'The cement fineness is adjusted to control the rate at which it sets.' 'At which' introduces a formal relative clause.",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'to control the rate at which it sets'. 'At which' вводит формальное придаточное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Bags", "of", "cement", "are", "stacked", "on", "pallets", "and", "shrink-wrapped", "to", "protect", "against", "moisture."],
            correctAnswer: "Bags of cement are stacked on pallets and shrink-wrapped to protect against moisture.",
            correctFeedback: "Correct! 'Are stacked...and shrink-wrapped' — two passive verbs sharing 'are'. 'On pallets' describes the location. 'To protect against moisture' is a purpose infinitive — 'protect against' means 'prevent damage from'. Both verbs share the same purpose.",
            correctFeedbackRu: "Правильно! 'Are stacked...and shrink-wrapped' — два пассивных глагола с общим 'are'. 'On pallets' — место. 'To protect against moisture' — инфинитив цели. 'Protect against' означает 'защитить от'.",
            incorrectFeedback: "Two passive verbs share 'are': 'are stacked and shrink-wrapped'. Structure: plural subject + are + past participle + location + and + past participle + purpose infinitive.",
            incorrectFeedbackRu: "Два пассивных глагола используют 'are': 'are stacked and shrink-wrapped'. Структура: множественное число + are + причастие + место + and + причастие + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Bulk", "cement", "is", "transported", "in", "pressurised", "tankers", "to", "maintain", "product", "integrity."],
            correctAnswer: "Bulk cement is transported in pressurised tankers to maintain product integrity.",
            correctFeedback: "Correct! 'Is transported' — 'bulk cement' is uncountable and singular. 'In pressurised tankers' describes the transport method. 'To maintain product integrity' is a purpose infinitive — 'product integrity' means the cement stays uncontaminated and fit for purpose.",
            correctFeedbackRu: "Правильно! 'Is transported' — 'bulk cement' несчитаемое. 'In pressurised tankers' описывает метод транспортировки. 'To maintain product integrity' — инфинитив цели.",
            incorrectFeedback: "Check: 'bulk cement' is uncountable — use 'is transported'. Structure: uncountable subject + is + past participle + 'in' + transport method + purpose infinitive.",
            incorrectFeedbackRu: "Проверьте: 'bulk cement' несчитаемое — используем 'is transported'. Структура: несчитаемое + is + причастие + 'in' + метод транспортировки + инфинитив цели."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Carbon", "emissions", "from", "the", "plant", "are", "offset", "through", "investment", "in", "renewable", "energy", "projects."],
            correctAnswer: "Carbon emissions from the plant are offset through investment in renewable energy projects.",
            correctFeedback: "Correct! 'Are offset' — the head noun is 'emissions' (plural). 'From the plant' is a modifier. 'Through investment in renewable energy projects' describes the method — 'through + noun' describes a means or mechanism, similar to 'by + noun'.",
            correctFeedbackRu: "Правильно! 'Are offset' — главное существительное 'emissions' (множественное число). 'Through investment in renewable energy projects' описывает метод — 'through + существительное' описывает средство.",
            incorrectFeedback: "The head noun is 'emissions' (plural) — use 'are offset'. Structure: 'carbon emissions from the plant' + are + past participle + 'through' + method.",
            incorrectFeedbackRu: "Главное существительное — 'emissions' (множественное число), используем 'are offset'. Структура: 'carbon emissions from the plant' + are + причастие + 'through' + метод."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Dust", "and", "nitrogen", "oxides", "are", "captured", "by", "electrostatic", "precipitators", "before", "release."],
            correctAnswer: "Dust and nitrogen oxides are captured by electrostatic precipitators before release.",
            correctFeedback: "Correct! 'Are captured' — 'dust and nitrogen oxides' is plural (two items joined by 'and'). 'By electrostatic precipitators' names the technical equipment as agent. 'Before release' is a concise noun phrase replacing 'before they are released' — formal and economical.",
            correctFeedbackRu: "Правильно! 'Are captured' — 'dust and nitrogen oxides' — множественное число (два предмета с 'and'). 'By electrostatic precipitators' называет техническое оборудование агентом. 'Before release' — краткая именная группа вместо 'before they are released'.",
            incorrectFeedback: "Two items joined by 'and' form a plural subject — use 'are captured'. Structure: plural subject + are + past participle + 'by' + equipment + 'before' + noun. 'Dust and nitrogen oxides are captured by electrostatic precipitators before release.'",
            incorrectFeedbackRu: "Два предмета с 'and' образуют множественное число — используем 'are captured'. Структура: множественное число + are + причастие + 'by' + оборудование + 'before' + существительное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "entire", "manufacturing", "process", "is", "documented", "in", "compliance", "with", "ISO", "9001", "standards."],
            correctAnswer: "The entire manufacturing process is documented in compliance with ISO 9001 standards.",
            correctFeedback: "Correct! 'Is documented' — singular subject ('the entire manufacturing process'). 'In compliance with ISO 9001 standards' means 'in line with international quality management standards'. This formal phrase — 'in compliance with + standards' — is a key expression in B2 industrial and regulatory contexts. You've completed all 100 Sentence Building exercises for Process Description!",
            correctFeedbackRu: "Правильно! 'Is documented' — единственное число. 'In compliance with ISO 9001 standards' означает 'в соответствии со стандартами международного управления качеством'. Вы завершили все 100 упражнений Sentence Building для Process Description!",
            incorrectFeedback: "Structure: singular subject + is + past participle + 'in compliance with' + standards. 'The entire manufacturing process is documented in compliance with ISO 9001 standards.' 'In compliance with' means 'following' or 'in line with'.",
            incorrectFeedbackRu: "Структура: единственное число + is + причастие + 'in compliance with' + стандарты. 'In compliance with' означает 'в соответствии с'."
        }
    ]
};