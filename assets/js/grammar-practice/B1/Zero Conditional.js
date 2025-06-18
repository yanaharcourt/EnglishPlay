/* ============================================
Initialize Grammar Exercises Object Structure
============================================ */
if (!window.grammarExercises) {
    window.grammarExercises = {};
}
if (!window.grammarExercises.conditionals) {
    window.grammarExercises.conditionals = {};
}

/* ============================================
Page 1: Zero Conditional - Natural Laws and Scientific Facts
============================================ */
window.grammarExercises['conditionals']['zero-conditional-page1'] = {
    title: "Natural Laws and Scientific Facts", multipleChoice: [
        {
            question: "Complete the zero conditional sentence:",
            questionRu: "Дополните условное предложение нулевого типа:",
            sentence: "If you ___ water to 100°C, it ___.",
            options: [
                "heat / boils",
                "heated / boil",
                "heat / boil",
                "heating / boils"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'If you heat water to 100°C, it boils' - this is a scientific fact that always happens.",
            correctFeedbackRu: "Правильно! 'If you heat water to 100°C, it boils' - это научный факт, который всегда происходит.",
            incorrectFeedback: "Remember: Zero conditional uses present simple in both parts for facts that are always true.",
            incorrectFeedbackRu: "Помните: условное предложение нулевого типа использует Present Simple в обеих частях для фактов, которые всегда верны."
        },
        {
            question: "Choose the correct zero conditional form:",
            questionRu: "Выберите правильную форму условного предложения нулевого типа:",
            sentence: "When ice ___ in the sun, it ___.",
            options: [
                "stays / melts",
                "stay / melt",
                "stayed / melted",
                "staying / melting"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When ice stays in the sun, it melts' - natural law about ice melting.",
            correctFeedbackRu: "Идеально! 'When ice stays in the sun, it melts' - природный закон о таянии льда.",
            incorrectFeedback: "Incorrect. Use present simple for both parts in zero conditional.",
            incorrectFeedbackRu: "Неправильно. Используйте Present Simple в обеих частях условного предложения нулевого типа."
        },
        {
            question: "Select the correct scientific fact:",
            questionRu: "Выберите правильный научный факт:",
            sentence: "If you ___ sugar in water, it ___.",
            options: [
                "mix / dissolves",
                "mixed / dissolve",
                "mix / dissolve",
                "mixing / dissolved"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If you mix sugar in water, it dissolves' - scientific fact about dissolution.",
            correctFeedbackRu: "Отлично! 'If you mix sugar in water, it dissolves' - научный факт о растворении.",
            incorrectFeedback: "Remember: Zero conditional expresses facts that are always true.",
            incorrectFeedbackRu: "Помните: условное предложение нулевого типа выражает факты, которые всегда верны."
        },
        {
            question: "Complete the natural law:",
            questionRu: "Дополните природный закон:",
            sentence: "When plants ___ enough water, they ___.",
            options: [
                "don't get / die",
                "didn't get / died",
                "don't get / died",
                "doesn't get / dies"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When plants don't get enough water, they die' - biological fact.",
            correctFeedbackRu: "Правильно! 'When plants don't get enough water, they die' - биологический факт.",
            incorrectFeedback: "Use present simple negative form for zero conditional facts.",
            incorrectFeedbackRu: "Используйте отрицательную форму Present Simple для фактов условного предложения нулевого типа."
        },
        {
            question: "Choose the correct physics fact:",
            questionRu: "Выберите правильный физический факт:",
            sentence: "If you ___ an object, it ___ down.",
            options: [
                "drop / falls",
                "dropped / fall",
                "drop / fall",
                "dropping / falls"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If you drop an object, it falls down' - law of gravity.",
            correctFeedbackRu: "Идеально! 'If you drop an object, it falls down' - закон гравитации.",
            incorrectFeedback: "Zero conditional needs present simple in both clauses for universal truths.",
            incorrectFeedbackRu: "Условное предложение нулевого типа требует Present Simple в обеих частях для универсальных истин."
        },
        {
            question: "Complete the chemistry fact:",
            questionRu: "Дополните химический факт:",
            sentence: "If you ___ oil and water, they ___ mix.",
            options: [
                "combine / don't",
                "combined / didn't",
                "combine / didn't",
                "combines / doesn't"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'If you combine oil and water, they don't mix' - chemistry principle.",
            correctFeedbackRu: "Отлично! 'If you combine oil and water, they don't mix' - химический принцип.",
            incorrectFeedback: "Use present simple negative for facts that don't happen in zero conditional.",
            incorrectFeedbackRu: "Используйте отрицательную форму Present Simple для фактов, которые не происходят в условном предложении нулевого типа."
        },
        {
            question: "Select the biological principle:",
            questionRu: "Выберите биологический принцип:",
            sentence: "When animals ___ threatened, they ___ or fight.",
            options: [
                "feel / run",
                "felt / ran",
                "feel / ran",
                "feels / runs"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'When animals feel threatened, they run or fight' - survival instinct.",
            correctFeedbackRu: "Отлично! 'When animals feel threatened, they run or fight' - инстинкт выживания.",
            incorrectFeedback: "Zero conditional describes natural instincts with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает природные инстинкты с Present Simple."
        },
        {
            question: "Choose the mathematical truth:",
            questionRu: "Выберите математическую истину:",
            sentence: "If you ___ zero to any number, the result ___ the same.",
            options: [
                "add / stays",
                "added / stayed",
                "add / stayed",
                "adds / stay"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If you add zero to any number, the result stays the same' - math law.",
            correctFeedbackRu: "Идеально! 'If you add zero to any number, the result stays the same' - математический закон.",
            incorrectFeedback: "Use present simple for mathematical laws in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для математических законов в условном предложении нулевого типа."
        },
        {
            question: "Complete the light principle:",
            questionRu: "Дополните принцип света:",
            sentence: "When light ___ through a prism, it ___ into colors.",
            options: [
                "passes / splits",
                "passed / split",
                "passes / split",
                "pass / splits"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When light passes through a prism, it splits into colors' - optical law.",
            correctFeedbackRu: "Правильно! 'When light passes through a prism, it splits into colors' - оптический закон.",
            incorrectFeedback: "Zero conditional explains optical phenomena with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет оптические явления с Present Simple."
        },
        {
            question: "Select the weather principle:",
            questionRu: "Выберите принцип погоды:",
            sentence: "If air temperature ___ rapidly, storms ___.",
            options: [
                "changes / form",
                "changed / formed",
                "changes / formed",
                "change / forms"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'If air temperature changes rapidly, storms form' - meteorological fact.",
            correctFeedbackRu: "Отлично! 'If air temperature changes rapidly, storms form' - метеорологический факт.",
            incorrectFeedback: "Use present simple for weather phenomena in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для погодных явлений в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Page 2: Zero Conditional - General Truths and Human Behavior
============================================ */
window.grammarExercises['conditionals']['zero-conditional-page2'] = {
    title: "General Truths and Human Behavior", multipleChoice: [
        {
            question: "Complete the general truth:",
            questionRu: "Дополните общую истину:",
            sentence: "If people ___ regularly, they ___ healthier.",
            options: [
                "exercise / stay",
                "exercised / stayed",
                "exercise / stayed",
                "exercises / stays"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If people exercise regularly, they stay healthier' - general health truth.",
            correctFeedbackRu: "Отлично! 'If people exercise regularly, they stay healthier' - общая истина о здоровье.",
            incorrectFeedback: "Use present simple for general truths in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для общих истин в условном предложении нулевого типа."
        },
        {
            question: "Select the correct habit pattern:",
            questionRu: "Выберите правильную модель привычки:",
            sentence: "When I ___ stressed, I ___ music.",
            options: [
                "feel / listen to",
                "felt / listened to",
                "feel / listened to",
                "feeling / listen to"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When I feel stressed, I listen to music' - personal habit pattern.",
            correctFeedbackRu: "Правильно! 'When I feel stressed, I listen to music' - модель личной привычки.",
            incorrectFeedback: "Zero conditional describes regular habits with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает регулярные привычки с Present Simple."
        },
        {
            question: "Choose the correct behavioral pattern:",
            questionRu: "Выберите правильную поведенческую модель:",
            sentence: "If children ___ too much sugar, they ___ hyperactive.",
            options: [
                "eat / become",
                "ate / became",
                "eat / became",
                "eats / becomes"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If children eat too much sugar, they become hyperactive' - cause and effect.",
            correctFeedbackRu: "Идеально! 'If children eat too much sugar, they become hyperactive' - причина и следствие.",
            incorrectFeedback: "Use present simple for cause-effect relationships in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для отношений причины и следствия в условном предложении нулевого типа."
        },
        {
            question: "Complete the social truth:",
            questionRu: "Дополните социальную истину:",
            sentence: "When people ___ together, they ___ friends.",
            options: [
                "work / make",
                "worked / made",
                "work / made",
                "works / makes"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'When people work together, they make friends' - social interaction truth.",
            correctFeedbackRu: "Отлично! 'When people work together, they make friends' - истина социального взаимодействия.",
            incorrectFeedback: "Zero conditional expresses general social truths with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа выражает общие социальные истины с Present Simple."
        },
        {
            question: "Select the correct learning principle:",
            questionRu: "Выберите правильный принцип обучения:",
            sentence: "If students ___ hard, they ___ good grades.",
            options: [
                "study / get",
                "studied / got",
                "study / got",
                "studies / gets"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If students study hard, they get good grades' - educational truth.",
            correctFeedbackRu: "Отлично! 'If students study hard, they get good grades' - образовательная истина.",
            incorrectFeedback: "Use present simple in both parts for educational principles.",
            incorrectFeedbackRu: "Используйте Present Simple в обеих частях для образовательных принципов."
        },
        {
            question: "Choose the emotional response:",
            questionRu: "Выберите эмоциональную реакцию:",
            sentence: "When babies ___ hungry, they ___.",
            options: [
                "get / cry",
                "got / cried",
                "get / cried",
                "gets / cries"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When babies get hungry, they cry' - natural human response.",
            correctFeedbackRu: "Идеально! 'When babies get hungry, they cry' - естественная человеческая реакция.",
            incorrectFeedback: "Zero conditional describes natural responses with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает естественные реакции с Present Simple."
        },
        {
            question: "Complete the sleep pattern:",
            questionRu: "Дополните модель сна:",
            sentence: "If people ___ enough sleep, they ___ tired.",
            options: [
                "don't get / feel",
                "didn't get / felt",
                "don't get / felt",
                "doesn't get / feels"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'If people don't get enough sleep, they feel tired' - biological truth.",
            correctFeedbackRu: "Правильно! 'If people don't get enough sleep, they feel tired' - биологическая истина.",
            incorrectFeedback: "Use present simple negative for biological patterns in zero conditional.",
            incorrectFeedbackRu: "Используйте отрицательную форму Present Simple для биологических закономерностей в условном предложении нулевого типа."
        },
        {
            question: "Select the communication truth:",
            questionRu: "Выберите истину о коммуникации:",
            sentence: "When people ___ clearly, others ___ them better.",
            options: [
                "speak / understand",
                "spoke / understood",
                "speak / understood",
                "speaks / understands"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'When people speak clearly, others understand them better' - communication principle.",
            correctFeedbackRu: "Отлично! 'When people speak clearly, others understand them better' - принцип коммуникации.",
            incorrectFeedback: "Zero conditional explains communication principles with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет принципы коммуникации с Present Simple."
        },
        {
            question: "Choose the age-related fact:",
            questionRu: "Выберите факт, связанный с возрастом:",
            sentence: "If people ___ older, their hair ___ gray.",
            options: [
                "get / turns",
                "got / turned",
                "get / turned",
                "gets / turn"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If people get older, their hair turns gray' - aging process.",
            correctFeedbackRu: "Отлично! 'If people get older, their hair turns gray' - процесс старения.",
            incorrectFeedback: "Use present simple for aging processes in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для процессов старения в условном предложении нулевого типа."
        },
        {
            question: "Complete the motivation truth:",
            questionRu: "Дополните истину о мотивации:",
            sentence: "When teachers ___ students, learning ___ easier.",
            options: [
                "encourage / becomes",
                "encouraged / became",
                "encourage / became",
                "encourages / become"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When teachers encourage students, learning becomes easier' - educational psychology.",
            correctFeedbackRu: "Идеально! 'When teachers encourage students, learning becomes easier' - педагогическая психология.",
            incorrectFeedback: "Zero conditional describes educational psychology with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает педагогическую психологию с Present Simple."
        }
    ]
};

/* ============================================
Page 3: Zero Conditional - Technology and Digital Life
============================================ */
window.grammarExercises['conditionals']['zero-conditional-page3'] = {
    title: "Technology and Digital Life", multipleChoice: [
        {
            question: "Complete the technology fact:",
            questionRu: "Дополните технологический факт:",
            sentence: "If you ___ the power button, the computer ___.",
            options: [
                "press / starts",
                "pressed / started",
                "press / started",
                "pressing / starts"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'If you press the power button, the computer starts' - technology operation fact.",
            correctFeedbackRu: "Правильно! 'If you press the power button, the computer starts' - факт работы технологии.",
            incorrectFeedback: "Use present simple for technology operation facts.",
            incorrectFeedbackRu: "Используйте Present Simple для фактов работы технологии."
        },
        {
            question: "Choose the correct digital rule:",
            questionRu: "Выберите правильное цифровое правило:",
            sentence: "When you ___ your password, you ___ access to your account.",
            options: [
                "forget / lose",
                "forgot / lost",
                "forget / lost",
                "forgets / loses"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When you forget your password, you lose access' - digital security rule.",
            correctFeedbackRu: "Идеально! 'When you forget your password, you lose access' - правило цифровой безопасности.",
            incorrectFeedback: "Zero conditional describes digital rules with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает цифровые правила с Present Simple."
        },
        {
            question: "Select the internet principle:",
            questionRu: "Выберите принцип интернета:",
            sentence: "If your internet connection ___ slow, videos ___ properly.",
            options: [
                "is / don't load",
                "was / didn't load",
                "is / didn't load",
                "are / don't load"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If your internet connection is slow, videos don't load properly' - tech limitation.",
            correctFeedbackRu: "Отлично! 'If your internet connection is slow, videos don't load properly' - техническое ограничение.",
            incorrectFeedback: "Use present simple negative for technology limitations in zero conditional.",
            incorrectFeedbackRu: "Используйте отрицательную форму Present Simple для технических ограничений в условном предложении нулевого типа."
        },
        {
            question: "Complete the software rule:",
            questionRu: "Дополните правило программного обеспечения:",
            sentence: "When you ___ a file without saving, you ___ your work.",
            options: [
                "close / lose",
                "closed / lost",
                "close / lost",
                "closes / loses"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'When you close a file without saving, you lose your work' - software rule.",
            correctFeedbackRu: "Отлично! 'When you close a file without saving, you lose your work' - правило программного обеспечения.",
            incorrectFeedback: "Zero conditional explains software behavior with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет поведение программного обеспечения с Present Simple."
        },
        {
            question: "Choose the device fact:",
            questionRu: "Выберите факт об устройстве:",
            sentence: "If your phone battery ___ empty, the device ___.",
            options: [
                "gets / shuts down",
                "got / shut down",
                "gets / shut down",
                "get / shuts down"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If your phone battery gets empty, the device shuts down' - device behavior.",
            correctFeedbackRu: "Идеально! 'If your phone battery gets empty, the device shuts down' - поведение устройства.",
            incorrectFeedback: "Use present simple for device behavior patterns in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для моделей поведения устройств в условном предложении нулевого типа."
        },
        {
            question: "Select the email rule:",
            questionRu: "Выберите правило электронной почты:",
            sentence: "When you ___ 'Reply All', everyone ___ your message.",
            options: [
                "click / receives",
                "clicked / received",
                "click / received",
                "clicks / receive"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When you click Reply All, everyone receives your message' - email function.",
            correctFeedbackRu: "Правильно! 'When you click Reply All, everyone receives your message' - функция электронной почты.",
            incorrectFeedback: "Zero conditional describes email functions with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает функции электронной почты с Present Simple."
        },
        {
            question: "Complete the backup principle:",
            questionRu: "Дополните принцип резервного копирования:",
            sentence: "If you ___ backup your data, you ___ it when the computer crashes.",
            options: [
                "don't / lose",
                "didn't / lost",
                "don't / lost",
                "doesn't / loses"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'If you don't backup your data, you lose it when the computer crashes' - data safety rule.",
            correctFeedbackRu: "Отлично! 'If you don't backup your data, you lose it when the computer crashes' - правило безопасности данных.",
            incorrectFeedback: "Use present simple negative for data safety rules in zero conditional.",
            incorrectFeedbackRu: "Используйте отрицательную форму Present Simple для правил безопасности данных в условном предложении нулевого типа."
        },
        {
            question: "Choose the social media fact:",
            questionRu: "Выберите факт о социальных медиа:",
            sentence: "When you ___ something online, it ___ forever.",
            options: [
                "post / stays",
                "posted / stayed",
                "post / stayed",
                "posts / stay"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'When you post something online, it stays forever' - digital permanence.",
            correctFeedbackRu: "Отлично! 'When you post something online, it stays forever' - цифровая постоянность.",
            incorrectFeedback: "Zero conditional explains digital permanence with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет цифровую постоянность с Present Simple."
        },
        {
            question: "Select the update rule:",
            questionRu: "Выберите правило обновления:",
            sentence: "If software ___ outdated, it ___ security vulnerabilities.",
            options: [
                "becomes / creates",
                "became / created",
                "becomes / created",
                "become / creates"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If software becomes outdated, it creates security vulnerabilities' - cybersecurity principle.",
            correctFeedbackRu: "Идеально! 'If software becomes outdated, it creates security vulnerabilities' - принцип кибербезопасности.",
            incorrectFeedback: "Use present simple for cybersecurity principles in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для принципов кибербезопасности в условном предложении нулевого типа."
        },
        {
            question: "Complete the search engine fact:",
            questionRu: "Дополните факт о поисковой системе:",
            sentence: "When you ___ specific keywords, search engines ___ relevant results.",
            options: [
                "use / show",
                "used / showed",
                "use / showed",
                "uses / shows"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When you use specific keywords, search engines show relevant results' - search algorithm.",
            correctFeedbackRu: "Правильно! 'When you use specific keywords, search engines show relevant results' - поисковый алгоритм.",
            incorrectFeedback: "Zero conditional describes search algorithms with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает поисковые алгоритмы с Present Simple."
        }
    ]
};

/* ============================================
Page 4: Zero Conditional - Weather and Natural Phenomena  
============================================ */
window.grammarExercises['conditionals']['zero-conditional-page4'] = {
    title: "Weather and Natural Phenomena", multipleChoice: [
        {
            question: "Complete the weather fact:",
            questionRu: "Дополните погодный факт:",
            sentence: "If it ___ below 0°C, water ___.",
            options: [
                "gets / freezes",
                "got / froze",
                "gets / froze",
                "get / freezes"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'If it gets below 0°C, water freezes' - natural weather law.",
            correctFeedbackRu: "Правильно! 'If it gets below 0°C, water freezes' - естественный погодный закон.",
            incorrectFeedback: "Use present simple for weather and temperature facts.",
            incorrectFeedbackRu: "Используйте Present Simple для фактов о погоде и температуре."
        },
        {
            question: "Select the seasonal pattern:",
            questionRu: "Выберите сезонную закономерность:",
            sentence: "When autumn ___, leaves ___ yellow and red.",
            options: [
                "comes / turn",
                "came / turned",
                "comes / turned",
                "come / turns"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When autumn comes, leaves turn yellow and red' - seasonal change.",
            correctFeedbackRu: "Идеально! 'When autumn comes, leaves turn yellow and red' - сезонное изменение.",
            incorrectFeedback: "Zero conditional describes seasonal patterns with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает сезонные закономерности с Present Simple."
        },
        {
            question: "Choose the weather effect:",
            questionRu: "Выберите погодный эффект:",
            sentence: "If the sun ___ brightly, people ___ sunglasses.",
            options: [
                "shines / wear",
                "shone / wore",
                "shines / wore",
                "shine / wears"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If the sun shines brightly, people wear sunglasses' - weather behavior.",
            correctFeedbackRu: "Отлично! 'If the sun shines brightly, people wear sunglasses' - поведение при погоде.",
            incorrectFeedback: "Use present simple for weather-related behaviors in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для поведения, связанного с погодой, в условном предложении нулевого типа."
        },
        {
            question: "Complete the rain fact:",
            questionRu: "Дополните факт о дожде:",
            sentence: "When it ___ heavily, people ___ umbrellas.",
            options: [
                "rains / use",
                "rained / used",
                "rains / used",
                "rain / uses"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'When it rains heavily, people use umbrellas' - practical weather response.",
            correctFeedbackRu: "Отлично! 'When it rains heavily, people use umbrellas' - практическая реакция на погоду.",
            incorrectFeedback: "Zero conditional explains practical responses to weather with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет практические реакции на погоду с Present Simple."
        },
        {
            question: "Select the snow consequence:",
            questionRu: "Выберите последствие снега:",
            sentence: "If it ___ a lot, roads ___ slippery.",
            options: [
                "snows / become",
                "snowed / became",
                "snows / became",
                "snow / becomes"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If it snows a lot, roads become slippery' - weather consequence.",
            correctFeedbackRu: "Идеально! 'If it snows a lot, roads become slippery' - погодное последствие.",
            incorrectFeedback: "Use present simple for weather consequences in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для погодных последствий в условном предложении нулевого типа."
        },
        {
            question: "Choose the wind effect:",
            questionRu: "Выберите эффект ветра:",
            sentence: "When the wind ___ strong, trees ___.",
            options: [
                "blows / bend",
                "blew / bent",
                "blows / bent",
                "blow / bends"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When the wind blows strong, trees bend' - natural wind effect.",
            correctFeedbackRu: "Правильно! 'When the wind blows strong, trees bend' - естественный эффект ветра.",
            incorrectFeedback: "Zero conditional describes natural wind effects with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает естественные эффекты ветра с Present Simple."
        },
        {
            question: "Complete the humidity fact:",
            questionRu: "Дополните факт о влажности:",
            sentence: "If humidity ___ high, people ___ uncomfortable.",
            options: [
                "gets / feel",
                "got / felt",
                "gets / felt",
                "get / feels"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'If humidity gets high, people feel uncomfortable' - weather comfort rule.",
            correctFeedbackRu: "Отлично! 'If humidity gets high, people feel uncomfortable' - правило комфорта при погоде.",
            incorrectFeedback: "Use present simple for weather comfort rules in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для правил комфорта при погоде в условном предложении нулевого типа."
        },
        {
            question: "Select the storm pattern:",
            questionRu: "Выберите модель грозы:",
            sentence: "When lightning ___, thunder ___ afterwards.",
            options: [
                "strikes / follows",
                "struck / followed",
                "strikes / followed",
                "strike / follows"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'When lightning strikes, thunder follows afterwards' - storm sequence.",
            correctFeedbackRu: "Отлично! 'When lightning strikes, thunder follows afterwards' - последовательность грозы.",
            incorrectFeedback: "Zero conditional describes storm sequences with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает последовательности грозы с Present Simple."
        },
        {
            question: "Choose the drought effect:",
            questionRu: "Выберите эффект засухи:",
            sentence: "If there ___ no rain for months, plants ___.",
            options: [
                "is / die",
                "was / died",
                "is / died",
                "are / dies"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If there is no rain for months, plants die' - drought consequence.",
            correctFeedbackRu: "Идеально! 'If there is no rain for months, plants die' - последствие засухи.",
            incorrectFeedback: "Use present simple for drought consequences in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для последствий засухи в условном предложении нулевого типа."
        },
        {
            question: "Complete the fog fact:",
            questionRu: "Дополните факт о тумане:",
            sentence: "When fog ___ thick, visibility ___.",
            options: [
                "becomes / decreases",
                "became / decreased",
                "becomes / decreased",
                "become / decreases"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When fog becomes thick, visibility decreases' - weather visibility rule.",
            correctFeedbackRu: "Правильно! 'When fog becomes thick, visibility decreases' - правило видимости при погоде.",
            incorrectFeedback: "Zero conditional describes weather visibility rules with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает правила видимости при погоде с Present Simple."
        }
    ]
};

/* ============================================
Page 5: Zero Conditional - Business and Work Rules
============================================ */
window.grammarExercises['conditionals']['zero-conditional-page5'] = {
    title: "Business and Work Rules", multipleChoice: [
        {
            question: "Complete the business rule:",
            questionRu: "Дополните бизнес-правило:",
            sentence: "If employees ___ late, they ___ a warning.",
            options: [
                "arrive / receive",
                "arrived / received",
                "arrive / received",
                "arrives / receives"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'If employees arrive late, they receive a warning' - company policy.",
            correctFeedbackRu: "Правильно! 'If employees arrive late, they receive a warning' - политика компании.",
            incorrectFeedback: "Use present simple for company policies and work rules.",
            incorrectFeedbackRu: "Используйте Present Simple для политики компании и рабочих правил."
        },
        {
            question: "Select the customer service rule:",
            questionRu: "Выберите правило обслуживания клиентов:",
            sentence: "When customers ___, we ___ their problems immediately.",
            options: [
                "complain / solve",
                "complained / solved",
                "complain / solved",
                "complains / solves"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When customers complain, we solve their problems immediately' - service standard.",
            correctFeedbackRu: "Идеально! 'When customers complain, we solve their problems immediately' - стандарт обслуживания.",
            incorrectFeedback: "Zero conditional describes service standards with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает стандарты обслуживания с Present Simple."
        },
        {
            question: "Choose the quality control fact:",
            questionRu: "Выберите факт контроля качества:",
            sentence: "If products ___ quality standards, we ___ them.",
            options: [
                "don't meet / reject",
                "didn't meet / rejected",
                "don't meet / rejected",
                "doesn't meet / rejects"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If products don't meet quality standards, we reject them' - quality control procedure.",
            correctFeedbackRu: "Отлично! 'If products don't meet quality standards, we reject them' - процедура контроля качества.",
            incorrectFeedback: "Use present simple negative for quality control procedures in zero conditional.",
            incorrectFeedbackRu: "Используйте отрицательную форму Present Simple для процедур контроля качества в условном предложении нулевого типа."
        },
        {
            question: "Complete the meeting rule:",
            questionRu: "Дополните правило собраний:",
            sentence: "When the boss ___ absent, meetings ___ canceled.",
            options: [
                "is / are",
                "was / were",
                "is / were",
                "are / is"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'When the boss is absent, meetings are canceled' - organizational rule.",
            correctFeedbackRu: "Отлично! 'When the boss is absent, meetings are canceled' - организационное правило.",
            incorrectFeedback: "Zero conditional explains organizational rules with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет организационные правила с Present Simple."
        },
        {
            question: "Select the sales principle:",
            questionRu: "Выберите принцип продаж:",
            sentence: "If we ___ better prices, sales ___.",
            options: [
                "offer / increase",
                "offered / increased",
                "offer / increased",
                "offers / increase"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If we offer better prices, sales increase' - business principle.",
            correctFeedbackRu: "Идеально! 'If we offer better prices, sales increase' - бизнес-принцип.",
            incorrectFeedback: "Use present simple for business principles in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для бизнес-принципов в условном предложении нулевого типа."
        },
        {
            question: "Choose the productivity rule:",
            questionRu: "Выберите правило продуктивности:",
            sentence: "When employees ___ breaks, they ___ more efficiently.",
            options: [
                "take / work",
                "took / worked",
                "take / worked",
                "takes / works"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When employees take breaks, they work more efficiently' - workplace psychology.",
            correctFeedbackRu: "Правильно! 'When employees take breaks, they work more efficiently' - рабочая психология.",
            incorrectFeedback: "Zero conditional describes workplace psychology with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает рабочую психологию с Present Simple."
        },
        {
            question: "Complete the deadline fact:",
            questionRu: "Дополните факт о сроках:",
            sentence: "If teams ___ deadlines, projects ___.",
            options: [
                "miss / fail",
                "missed / failed",
                "miss / failed",
                "misses / fails"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'If teams miss deadlines, projects fail' - project management truth.",
            correctFeedbackRu: "Отлично! 'If teams miss deadlines, projects fail' - истина управления проектами.",
            incorrectFeedback: "Use present simple for project management truths in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для истин управления проектами в условном предложении нулевого типа."
        },
        {
            question: "Select the communication rule:",
            questionRu: "Выберите правило коммуникации:",
            sentence: "When managers ___ clear goals, teams ___ better.",
            options: [
                "set / perform",
                "set / performed",
                "set / perform",
                "sets / perform"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'When managers set clear goals, teams perform better' - management principle.",
            correctFeedbackRu: "Отлично! 'When managers set clear goals, teams perform better' - принцип управления.",
            incorrectFeedback: "Zero conditional explains management principles with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет принципы управления с Present Simple."
        },
        {
            question: "Choose the training effect:",
            questionRu: "Выберите эффект обучения:",
            sentence: "If companies ___ training programs, employee skills ___.",
            options: [
                "provide / develop",
                "provided / developed",
                "provide / developed",
                "provides / develop"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If companies provide training programs, employee skills develop' - development principle.",
            correctFeedbackRu: "Идеально! 'If companies provide training programs, employee skills develop' - принцип развития.",
            incorrectFeedback: "Use present simple for development principles in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для принципов развития в условном предложении нулевого типа."
        },
        {
            question: "Complete the budget rule:",
            questionRu: "Дополните правило бюджета:",
            sentence: "When departments ___ budget limits, they ___ authorization.",
            options: [
                "exceed / need",
                "exceeded / needed",
                "exceed / needed",
                "exceeds / needs"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When departments exceed budget limits, they need authorization' - financial rule.",
            correctFeedbackRu: "Правильно! 'When departments exceed budget limits, they need authorization' - финансовое правило.",
            incorrectFeedback: "Zero conditional describes financial rules with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает финансовые правила с Present Simple."
        }
    ]
};

/* ============================================
Page 6: Zero Conditional - Health and Medicine
============================================ */
window.grammarExercises['conditionals']['zero-conditional-page6'] = {
    title: "Health and Medicine", multipleChoice: [
        {
            question: "Complete the medical fact:",
            questionRu: "Дополните медицинский факт:",
            sentence: "If people ___ enough water, they ___ dehydrated.",
            options: [
                "don't drink / become",
                "didn't drink / became",
                "don't drink / became",
                "doesn't drink / becomes"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'If people don't drink enough water, they become dehydrated' - medical fact.",
            correctFeedbackRu: "Правильно! 'If people don't drink enough water, they become dehydrated' - медицинский факт.",
            incorrectFeedback: "Use present simple negative for medical facts in zero conditional.",
            incorrectFeedbackRu: "Используйте отрицательную форму Present Simple для медицинских фактов в условном предложении нулевого типа."
        },
        {
            question: "Select the exercise truth:",
            questionRu: "Выберите истину об упражнениях:",
            sentence: "When people ___ daily, their muscles ___ stronger.",
            options: [
                "exercise / get",
                "exercised / got",
                "exercise / got",
                "exercises / gets"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When people exercise daily, their muscles get stronger' - fitness principle.",
            correctFeedbackRu: "Идеально! 'When people exercise daily, their muscles get stronger' - принцип фитнеса.",
            incorrectFeedback: "Zero conditional describes fitness principles with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает принципы фитнеса с Present Simple."
        },
        {
            question: "Choose the sleep pattern:",
            questionRu: "Выберите модель сна:",
            sentence: "If people ___ enough sleep, they ___ alert.",
            options: [
                "don't get / aren't",
                "didn't get / weren't",
                "don't get / weren't",
                "doesn't get / isn't"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If people don't get enough sleep, they aren't alert' - sleep science.",
            correctFeedbackRu: "Отлично! 'If people don't get enough sleep, they aren't alert' - наука о сне.",
            incorrectFeedback: "Use present simple negative for sleep science facts in zero conditional.",
            incorrectFeedbackRu: "Используйте отрицательную форму Present Simple для фактов науки о сне в условном предложении нулевого типа."
        },
        {
            question: "Complete the nutrition fact:",
            questionRu: "Дополните факт о питании:",
            sentence: "When children ___ vegetables, they ___ important vitamins.",
            options: [
                "eat / get",
                "ate / got",
                "eat / got",
                "eats / gets"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'When children eat vegetables, they get important vitamins' - nutritional fact.",
            correctFeedbackRu: "Отлично! 'When children eat vegetables, they get important vitamins' - факт питания.",
            incorrectFeedback: "Zero conditional explains nutritional facts with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет факты питания с Present Simple."
        },
        {
            question: "Select the stress effect:",
            questionRu: "Выберите эффект стресса:",
            sentence: "If people ___ too much stress, their health ___.",
            options: [
                "have / suffers",
                "had / suffered",
                "have / suffered",
                "has / suffer"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If people have too much stress, their health suffers' - medical fact.",
            correctFeedbackRu: "Идеально! 'If people have too much stress, their health suffers' - медицинский факт.",
            incorrectFeedback: "Use present simple for medical facts in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для медицинских фактов в условном предложении нулевого типа."
        },
        {
            question: "Choose the hygiene principle:",
            questionRu: "Выберите принцип гигиены:",
            sentence: "When people ___ their hands regularly, they ___ fewer illnesses.",
            options: [
                "wash / catch",
                "washed / caught",
                "wash / caught",
                "washes / catch"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When people wash their hands regularly, they catch fewer illnesses' - hygiene fact.",
            correctFeedbackRu: "Правильно! 'When people wash their hands regularly, they catch fewer illnesses' - факт гигиены.",
            incorrectFeedback: "Zero conditional describes hygiene facts with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает факты гигиены с Present Simple."
        },
        {
            question: "Complete the medicine rule:",
            questionRu: "Дополните правило о лекарствах:",
            sentence: "If patients ___ medication as prescribed, they ___ better.",
            options: [
                "take / recover",
                "took / recovered",
                "take / recovered",
                "takes / recover"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'If patients take medication as prescribed, they recover better' - medical compliance.",
            correctFeedbackRu: "Отлично! 'If patients take medication as prescribed, they recover better' - медицинская дисциплина.",
            incorrectFeedback: "Use present simple for medical compliance in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для медицинской дисциплины в условном предложении нулевого типа."
        },
        {
            question: "Select the smoking effect:",
            questionRu: "Выберите эффект курения:",
            sentence: "When people ___, their lung capacity ___.",
            options: [
                "smoke / decreases",
                "smoked / decreased",
                "smoke / decreased",
                "smokes / decrease"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'When people smoke, their lung capacity decreases' - health consequence.",
            correctFeedbackRu: "Отлично! 'When people smoke, their lung capacity decreases' - последствие для здоровья.",
            incorrectFeedback: "Zero conditional explains health consequences with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет последствия для здоровья с Present Simple."
        },
        {
            question: "Choose the sun exposure fact:",
            questionRu: "Выберите факт о солнечном воздействии:",
            sentence: "If people ___ in the sun too long, their skin ___.",
            options: [
                "stay / burns",
                "stayed / burned",
                "stay / burned",
                "stays / burn"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If people stay in the sun too long, their skin burns' - natural consequence.",
            correctFeedbackRu: "Идеально! 'If people stay in the sun too long, their skin burns' - естественное последствие.",
            incorrectFeedback: "Use present simple for natural consequences in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для естественных последствий в условном предложении нулевого типа."
        },
        {
            question: "Complete the diet principle:",
            questionRu: "Дополните принцип диеты:",
            sentence: "When people ___ too much sugar, they ___ weight.",
            options: [
                "consume / gain",
                "consumed / gained",
                "consume / gained",
                "consumes / gain"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When people consume too much sugar, they gain weight' - dietary fact.",
            correctFeedbackRu: "Правильно! 'When people consume too much sugar, they gain weight' - диетический факт.",
            incorrectFeedback: "Zero conditional describes dietary facts with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает диетические факты с Present Simple."
        }
    ]
};

/* ============================================
Page 7: Zero Conditional - Transportation and Traffic
============================================ */
window.grammarExercises['conditionals']['zero-conditional-page7'] = {
    title: "Transportation and Traffic", multipleChoice: [
        {
            question: "Complete the traffic rule:",
            questionRu: "Дополните правило дорожного движения:",
            sentence: "If drivers ___ the speed limit, they ___ tickets.",
            options: [
                "exceed / get",
                "exceeded / got",
                "exceed / got",
                "exceeds / gets"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'If drivers exceed the speed limit, they get tickets' - traffic law.",
            correctFeedbackRu: "Правильно! 'If drivers exceed the speed limit, they get tickets' - закон о дорожном движении.",
            incorrectFeedback: "Use present simple for traffic laws in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для законов о дорожном движении в условном предложении нулевого типа."
        },
        {
            question: "Select the vehicle maintenance fact:",
            questionRu: "Выберите факт об обслуживании транспорта:",
            sentence: "When cars ___ regular maintenance, they ___ longer.",
            options: [
                "receive / last",
                "received / lasted",
                "receive / lasted",
                "receives / last"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When cars receive regular maintenance, they last longer' - mechanical principle.",
            correctFeedbackRu: "Идеально! 'When cars receive regular maintenance, they last longer' - механический принцип.",
            incorrectFeedback: "Zero conditional describes mechanical principles with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает механические принципы с Present Simple."
        },
        {
            question: "Choose the fuel efficiency rule:",
            questionRu: "Выберите правило топливной эффективности:",
            sentence: "If drivers ___ aggressively, cars ___ more fuel.",
            options: [
                "drive / consume",
                "drove / consumed",
                "drive / consumed",
                "drives / consume"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If drivers drive aggressively, cars consume more fuel' - driving efficiency.",
            correctFeedbackRu: "Отлично! 'If drivers drive aggressively, cars consume more fuel' - эффективность вождения.",
            incorrectFeedback: "Use present simple for driving efficiency facts in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для фактов эффективности вождения в условном предложении нулевого типа."
        },
        {
            question: "Complete the safety principle:",
            questionRu: "Дополните принцип безопасности:",
            sentence: "When passengers ___ seat belts, they ___ safer.",
            options: [
                "wear / are",
                "wore / were",
                "wear / were",
                "wears / is"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'When passengers wear seat belts, they are safer' - safety principle.",
            correctFeedbackRu: "Отлично! 'When passengers wear seat belts, they are safer' - принцип безопасности.",
            incorrectFeedback: "Zero conditional explains safety principles with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет принципы безопасности с Present Simple."
        },
        {
            question: "Select the parking rule:",
            questionRu: "Выберите правило парковки:",
            sentence: "If people ___ in no-parking zones, they ___ fined.",
            options: [
                "park / get",
                "parked / got",
                "park / got",
                "parks / gets"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If people park in no-parking zones, they get fined' - parking regulation.",
            correctFeedbackRu: "Идеально! 'If people park in no-parking zones, they get fined' - правило парковки.",
            incorrectFeedback: "Use present simple for parking regulations in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для правил парковки в условном предложении нулевого типа."
        },
        {
            question: "Choose the public transport fact:",
            questionRu: "Выберите факт об общественном транспорте:",
            sentence: "When buses ___ full, passengers ___ for the next one.",
            options: [
                "are / wait",
                "were / waited",
                "are / waited",
                "is / waits"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When buses are full, passengers wait for the next one' - transport pattern.",
            correctFeedbackRu: "Правильно! 'When buses are full, passengers wait for the next one' - транспортная модель.",
            incorrectFeedback: "Zero conditional describes transport patterns with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает транспортные модели с Present Simple."
        },
        {
            question: "Complete the weather driving rule:",
            questionRu: "Дополните правило вождения в плохую погоду:",
            sentence: "If roads ___ icy, drivers ___ more carefully.",
            options: [
                "are / drive",
                "were / drove",
                "are / drove",
                "is / drives"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'If roads are icy, drivers drive more carefully' - weather driving rule.",
            correctFeedbackRu: "Отлично! 'If roads are icy, drivers drive more carefully' - правило вождения в плохую погоду.",
            incorrectFeedback: "Use present simple for weather driving rules in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для правил вождения в плохую погоду в условном предложении нулевого типа."
        },
        {
            question: "Select the tire pressure fact:",
            questionRu: "Выберите факт о давлении в шинах:",
            sentence: "When tire pressure ___ low, fuel consumption ___.",
            options: [
                "is / increases",
                "was / increased",
                "is / increased",
                "are / increase"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'When tire pressure is low, fuel consumption increases' - automotive fact.",
            correctFeedbackRu: "Отлично! 'When tire pressure is low, fuel consumption increases' - автомобильный факт.",
            incorrectFeedback: "Zero conditional explains automotive facts with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет автомобильные факты с Present Simple."
        },
        {
            question: "Choose the traffic light rule:",
            questionRu: "Выберите правило светофора:",
            sentence: "If the traffic light ___ red, vehicles ___.",
            options: [
                "turns / stop",
                "turned / stopped",
                "turns / stopped",
                "turn / stops"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If the traffic light turns red, vehicles stop' - traffic regulation.",
            correctFeedbackRu: "Идеально! 'If the traffic light turns red, vehicles stop' - правило дорожного движения.",
            incorrectFeedback: "Use present simple for traffic regulations in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для правил дорожного движения в условном предложении нулевого типа."
        },
        {
            question: "Complete the rush hour fact:",
            questionRu: "Дополните факт о часе пик:",
            sentence: "When it ___ rush hour, traffic ___ slower.",
            options: [
                "is / moves",
                "was / moved",
                "is / moved",
                "are / move"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When it is rush hour, traffic moves slower' - traffic pattern.",
            correctFeedbackRu: "Правильно! 'When it is rush hour, traffic moves slower' - модель дорожного движения.",
            incorrectFeedback: "Zero conditional describes traffic patterns with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает модели дорожного движения с Present Simple."
        }
    ]
};

/* ============================================
Page 8: Zero Conditional - Education and Learning
============================================ */
window.grammarExercises['conditionals']['zero-conditional-page8'] = {
    title: "Education and Learning", multipleChoice: [
        {
            question: "Complete the learning principle:",
            questionRu: "Дополните принцип обучения:",
            sentence: "If students ___ attention, they ___ better grades.",
            options: [
                "pay / get",
                "paid / got",
                "pay / got",
                "pays / gets"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'If students pay attention, they get better grades' - educational principle.",
            correctFeedbackRu: "Правильно! 'If students pay attention, they get better grades' - образовательный принцип.",
            incorrectFeedback: "Use present simple for educational principles in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для образовательных принципов в условном предложении нулевого типа."
        },
        {
            question: "Select the study habit rule:",
            questionRu: "Выберите правило учебных привычек:",
            sentence: "When children ___ regularly, their memory ___.",
            options: [
                "read / improves",
                "read / improved",
                "read / improve",
                "reads / improve"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When children read regularly, their memory improves' - cognitive development.",
            correctFeedbackRu: "Идеально! 'When children read regularly, their memory improves' - когнитивное развитие.",
            incorrectFeedback: "Zero conditional describes cognitive development with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает когнитивное развитие с Present Simple."
        },
        {
            question: "Choose the classroom rule:",
            questionRu: "Выберите правило класса:",
            sentence: "If students ___ homework, teachers ___ them extra assignments.",
            options: [
                "don't do / give",
                "didn't do / gave",
                "don't do / gave",
                "doesn't do / gives"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If students don't do homework, teachers give them extra assignments' - classroom policy.",
            correctFeedbackRu: "Отлично! 'If students don't do homework, teachers give them extra assignments' - политика класса.",
            incorrectFeedback: "Use present simple negative for classroom policies in zero conditional.",
            incorrectFeedbackRu: "Используйте отрицательную форму Present Simple для политик класса в условном предложении нулевого типа."
        },
        {
            question: "Complete the exam fact:",
            questionRu: "Дополните факт об экзаменах:",
            sentence: "When students ___ for exams, they ___ nervous.",
            options: [
                "prepare / feel",
                "prepared / felt",
                "prepare / felt",
                "prepares / feels"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'When students prepare for exams, they feel nervous' - student psychology.",
            correctFeedbackRu: "Отлично! 'When students prepare for exams, they feel nervous' - студенческая психология.",
            incorrectFeedback: "Zero conditional explains student psychology with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет студенческую психологию с Present Simple."
        },
        {
            question: "Select the library rule:",
            questionRu: "Выберите правило библиотеки:",
            sentence: "If people ___ loudly in libraries, librarians ___ them to be quiet.",
            options: [
                "talk / ask",
                "talked / asked",
                "talk / asked",
                "talks / ask"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If people talk loudly in libraries, librarians ask them to be quiet' - library etiquette.",
            correctFeedbackRu: "Идеально! 'If people talk loudly in libraries, librarians ask them to be quiet' - этикет библиотеки.",
            incorrectFeedback: "Use present simple for library etiquette in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для этикета библиотеки в условном предложении нулевого типа."
        },
        {
            question: "Choose the language learning fact:",
            questionRu: "Выберите факт изучения языка:",
            sentence: "When people ___ a new language daily, they ___ faster progress.",
            options: [
                "practice / make",
                "practiced / made",
                "practice / made",
                "practices / makes"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When people practice a new language daily, they make faster progress' - learning principle.",
            correctFeedbackRu: "Правильно! 'When people practice a new language daily, they make faster progress' - принцип обучения.",
            incorrectFeedback: "Zero conditional describes learning principles with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает принципы обучения с Present Simple."
        },
        {
            question: "Complete the motivation rule:",
            questionRu: "Дополните правило мотивации:",
            sentence: "If teachers ___ students positively, learning ___ more effective.",
            options: [
                "encourage / becomes",
                "encouraged / became",
                "encourage / became",
                "encourages / become"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'If teachers encourage students positively, learning becomes more effective' - educational psychology.",
            correctFeedbackRu: "Отлично! 'If teachers encourage students positively, learning becomes more effective' - педагогическая психология.",
            incorrectFeedback: "Use present simple for educational psychology in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для педагогической психологии в условном предложении нулевого типа."
        },
        {
            question: "Select the attendance rule:",
            questionRu: "Выберите правило посещаемости:",
            sentence: "When students ___ classes frequently, their grades ___.",
            options: [
                "miss / drop",
                "missed / dropped",
                "miss / dropped",
                "misses / drops"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'When students miss classes frequently, their grades drop' - academic consequence.",
            correctFeedbackRu: "Отлично! 'When students miss classes frequently, their grades drop' - академическое последствие.",
            incorrectFeedback: "Zero conditional explains academic consequences with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет академические последствия с Present Simple."
        },
        {
            question: "Choose the group work fact:",
            questionRu: "Выберите факт о групповой работе:",
            sentence: "If students ___ in groups, they ___ different perspectives.",
            options: [
                "work / learn",
                "worked / learned",
                "work / learned",
                "works / learns"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If students work in groups, they learn different perspectives' - collaborative learning.",
            correctFeedbackRu: "Идеально! 'If students work in groups, they learn different perspectives' - совместное обучение.",
            incorrectFeedback: "Use present simple for collaborative learning facts in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для фактов совместного обучения в условном предложении нулевого типа."
        },
        {
            question: "Complete the testing principle:",
            questionRu: "Дополните принцип тестирования:",
            sentence: "When students ___ enough sleep before tests, they ___ better.",
            options: [
                "get / perform",
                "got / performed",
                "get / performed",
                "gets / perform"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When students get enough sleep before tests, they perform better' - cognitive performance.",
            correctFeedbackRu: "Правильно! 'When students get enough sleep before tests, they perform better' - когнитивная производительность.",
            incorrectFeedback: "Zero conditional describes cognitive performance with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает когнитивную производительность с Present Simple."
        }
    ]
};

/* ============================================
Page 9: Zero Conditional - Food and Cooking
============================================ */
window.grammarExercises['conditionals']['zero-conditional-page9'] = {
    title: "Food and Cooking", multipleChoice: [
        {
            question: "Complete the cooking fact:",
            questionRu: "Дополните факт о готовке:",
            sentence: "If you ___ water to 100°C, it ___.",
            options: [
                "heat / boils",
                "heated / boiled",
                "heat / boiled",
                "heats / boil"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'If you heat water to 100°C, it boils' - physical law in cooking.",
            correctFeedbackRu: "Правильно! 'If you heat water to 100°C, it boils' - физический закон в готовке.",
            incorrectFeedback: "Use present simple for physical laws in cooking in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для физических законов в готовке в условном предложении нулевого типа."
        },
        {
            question: "Select the baking principle:",
            questionRu: "Выберите принцип выпечки:",
            sentence: "When you ___ too much flour, cakes ___ heavy.",
            options: [
                "add / become",
                "added / became",
                "add / became",
                "adds / becomes"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When you add too much flour, cakes become heavy' - baking science.",
            correctFeedbackRu: "Идеально! 'When you add too much flour, cakes become heavy' - наука выпечки.",
            incorrectFeedback: "Zero conditional describes baking science with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает науку выпечки с Present Simple."
        },
        {
            question: "Choose the food safety rule:",
            questionRu: "Выберите правило безопасности пищи:",
            sentence: "If meat ___ properly cooked, bacteria ___.",
            options: [
                "isn't / survive",
                "wasn't / survived",
                "isn't / survived",
                "aren't / survives"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If meat isn't properly cooked, bacteria survive' - food safety principle.",
            correctFeedbackRu: "Отлично! 'If meat isn't properly cooked, bacteria survive' - принцип безопасности пищи.",
            incorrectFeedback: "Use present simple negative for food safety principles in zero conditional.",
            incorrectFeedbackRu: "Используйте отрицательную форму Present Simple для принципов безопасности пищи в условном предложении нулевого типа."
        },
        {
            question: "Complete the preservation fact:",
            questionRu: "Дополните факт о консервации:",
            sentence: "When food ___ in the refrigerator, it ___ longer.",
            options: [
                "stays / lasts",
                "stayed / lasted",
                "stays / lasted",
                "stay / lasts"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'When food stays in the refrigerator, it lasts longer' - preservation principle.",
            correctFeedbackRu: "Отлично! 'When food stays in the refrigerator, it lasts longer' - принцип консервации.",
            incorrectFeedback: "Zero conditional explains preservation principles with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет принципы консервации с Present Simple."
        },
        {
            question: "Select the seasoning rule:",
            questionRu: "Выберите правило приправ:",
            sentence: "If you ___ salt to food, it ___ the flavor.",
            options: [
                "add / enhances",
                "added / enhanced",
                "add / enhanced",
                "adds / enhance"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If you add salt to food, it enhances the flavor' - culinary principle.",
            correctFeedbackRu: "Идеально! 'If you add salt to food, it enhances the flavor' - кулинарный принцип.",
            incorrectFeedback: "Use present simple for culinary principles in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для кулинарных принципов в условном предложении нулевого типа."
        },
        {
            question: "Choose the oil heating fact:",
            questionRu: "Выберите факт о нагревании масла:",
            sentence: "When oil ___ too hot, it ___ smoke.",
            options: [
                "gets / produces",
                "got / produced",
                "gets / produced",
                "get / produces"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When oil gets too hot, it produces smoke' - cooking science.",
            correctFeedbackRu: "Правильно! 'When oil gets too hot, it produces smoke' - наука готовки.",
            incorrectFeedback: "Zero conditional describes cooking science with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает науку готовки с Present Simple."
        },
        {
            question: "Complete the fermentation principle:",
            questionRu: "Дополните принцип ферментации:",
            sentence: "If bread dough ___ in warm places, it ___ faster.",
            options: [
                "rises / ferments",
                "rose / fermented",
                "rises / fermented",
                "rise / ferments"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'If bread dough rises in warm places, it ferments faster' - baking chemistry.",
            correctFeedbackRu: "Отлично! 'If bread dough rises in warm places, it ferments faster' - химия выпечки.",
            incorrectFeedback: "Use present simple for baking chemistry in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для химии выпечки в условном предложении нулевого типа."
        },
        {
            question: "Select the vitamin fact:",
            questionRu: "Выберите факт о витаминах:",
            sentence: "When vegetables ___ overcooked, they ___ nutrients.",
            options: [
                "are / lose",
                "were / lost",
                "are / lost",
                "is / loses"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'When vegetables are overcooked, they lose nutrients' - nutritional science.",
            correctFeedbackRu: "Отлично! 'When vegetables are overcooked, they lose nutrients' - наука о питании.",
            incorrectFeedback: "Zero conditional explains nutritional science with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет науку о питании с Present Simple."
        },
        {
            question: "Choose the sugar caramelization fact:",
            questionRu: "Выберите факт о карамелизации сахара:",
            sentence: "If sugar ___ at high temperature, it ___.",
            options: [
                "heats / caramelizes",
                "heated / caramelized",
                "heats / caramelized",
                "heat / caramelizes"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If sugar heats at high temperature, it caramelizes' - chemical reaction.",
            correctFeedbackRu: "Идеально! 'If sugar heats at high temperature, it caramelizes' - химическая реакция.",
            incorrectFeedback: "Use present simple for chemical reactions in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для химических реакций в условном предложении нулевого типа."
        },
        {
            question: "Complete the spice storage rule:",
            questionRu: "Дополните правило хранения специй:",
            sentence: "When spices ___ in sunlight, they ___ their potency.",
            options: [
                "sit / lose",
                "sat / lost",
                "sit / lost",
                "sits / lose"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When spices sit in sunlight, they lose their potency' - storage principle.",
            correctFeedbackRu: "Правильно! 'When spices sit in sunlight, they lose their potency' - принцип хранения.",
            incorrectFeedback: "Zero conditional describes storage principles with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает принципы хранения с Present Simple."
        }
    ]
};

/* ============================================
Page 10: Zero Conditional - Environment and Nature
============================================ */
window.grammarExercises['conditionals']['zero-conditional-page10'] = {
    title: "Environment and Nature", multipleChoice: [
        {
            question: "Complete the recycling principle:",
            questionRu: "Дополните принцип переработки:",
            sentence: "If people ___ waste, they ___ the environment.",
            options: [
                "recycle / protect",
                "recycled / protected",
                "recycle / protected",
                "recycles / protect"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'If people recycle waste, they protect the environment' - environmental principle.",
            correctFeedbackRu: "Правильно! 'If people recycle waste, they protect the environment' - экологический принцип.",
            incorrectFeedback: "Use present simple for environmental principles in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для экологических принципов в условном предложении нулевого типа."
        },
        {
            question: "Select the deforestation consequence:",
            questionRu: "Выберите последствие вырубки лесов:",
            sentence: "When forests ___ cut down, wildlife ___ its habitat.",
            options: [
                "are / loses",
                "were / lost",
                "are / lost",
                "is / lose"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'When forests are cut down, wildlife loses its habitat' - ecological consequence.",
            correctFeedbackRu: "Идеально! 'When forests are cut down, wildlife loses its habitat' - экологическое последствие.",
            incorrectFeedback: "Zero conditional describes ecological consequences with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает экологические последствия с Present Simple."
        },
        {
            question: "Choose the pollution effect:",
            questionRu: "Выберите эффект загрязнения:",
            sentence: "If factories ___ chemicals into rivers, fish ___.",
            options: [
                "dump / die",
                "dumped / died",
                "dump / died",
                "dumps / dies"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'If factories dump chemicals into rivers, fish die' - pollution consequence.",
            correctFeedbackRu: "Отлично! 'If factories dump chemicals into rivers, fish die' - последствие загрязнения.",
            incorrectFeedback: "Use present simple for pollution consequences in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для последствий загрязнения в условном предложении нулевого типа."
        },
        {
            question: "Complete the energy conservation fact:",
            questionRu: "Дополните факт об энергосбережении:",
            sentence: "When people ___ lights when not needed, they ___ energy.",
            options: [
                "turn off / save",
                "turned off / saved",
                "turn off / saved",
                "turns off / saves"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'When people turn off lights when not needed, they save energy' - conservation practice.",
            correctFeedbackRu: "Отлично! 'When people turn off lights when not needed, they save energy' - практика сбережения.",
            incorrectFeedback: "Zero conditional explains conservation practices with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет практики сбережения с Present Simple."
        },
        {
            question: "Select the carbon emissions rule:",
            questionRu: "Выберите правило выбросов углерода:",
            sentence: "If cars ___ fossil fuels, they ___ carbon dioxide.",
            options: [
                "burn / release",
                "burned / released",
                "burn / released",
                "burns / release"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If cars burn fossil fuels, they release carbon dioxide' - environmental science.",
            correctFeedbackRu: "Идеально! 'If cars burn fossil fuels, they release carbon dioxide' - экологическая наука.",
            incorrectFeedback: "Use present simple for environmental science facts in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для фактов экологической науки в условном предложении нулевого типа."
        },
        {
            question: "Choose the water cycle fact:",
            questionRu: "Выберите факт о круговороте воды:",
            sentence: "When the sun ___ ocean water, it ___ and forms clouds.",
            options: [
                "heats / evaporates",
                "heated / evaporated",
                "heats / evaporated",
                "heat / evaporates"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When the sun heats ocean water, it evaporates and forms clouds' - water cycle.",
            correctFeedbackRu: "Правильно! 'When the sun heats ocean water, it evaporates and forms clouds' - круговорот воды.",
            incorrectFeedback: "Zero conditional describes natural cycles with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает природные циклы с Present Simple."
        },
        {
            question: "Complete the soil erosion principle:",
            questionRu: "Дополните принцип эрозии почвы:",
            sentence: "If there ___ no trees on hillsides, soil ___ away.",
            options: [
                "are / washes",
                "were / washed",
                "are / washed",
                "is / wash"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'If there are no trees on hillsides, soil washes away' - erosion process.",
            correctFeedbackRu: "Отлично! 'If there are no trees on hillsides, soil washes away' - процесс эрозии.",
            incorrectFeedback: "Use present simple for natural processes in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для природных процессов в условном предложении нулевого типа."
        },
        {
            question: "Select the renewable energy fact:",
            questionRu: "Выберите факт о возобновляемой энергии:",
            sentence: "When wind ___, turbines ___ electricity.",
            options: [
                "blows / generate",
                "blew / generated",
                "blows / generated",
                "blow / generates"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'When wind blows, turbines generate electricity' - renewable energy principle.",
            correctFeedbackRu: "Отлично! 'When wind blows, turbines generate electricity' - принцип возобновляемой энергии.",
            incorrectFeedback: "Zero conditional explains renewable energy principles with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа объясняет принципы возобновляемой энергии с Present Simple."
        },
        {
            question: "Choose the composting fact:",
            questionRu: "Выберите факт о компостировании:",
            sentence: "If organic waste ___ properly, it ___ into fertilizer.",
            options: [
                "decomposes / turns",
                "decomposed / turned",
                "decomposes / turned",
                "decompose / turns"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'If organic waste decomposes properly, it turns into fertilizer' - natural decomposition.",
            correctFeedbackRu: "Идеально! 'If organic waste decomposes properly, it turns into fertilizer' - естественное разложение.",
            incorrectFeedback: "Use present simple for natural decomposition processes in zero conditional.",
            incorrectFeedbackRu: "Используйте Present Simple для процессов естественного разложения в условном предложении нулевого типа."
        },
        {
            question: "Complete the climate change fact:",
            questionRu: "Дополните факт об изменении климата:",
            sentence: "When global temperatures ___, ice caps ___.",
            options: [
                "rise / melt",
                "rose / melted",
                "rise / melted",
                "rises / melt"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'When global temperatures rise, ice caps melt' - climate science.",
            correctFeedbackRu: "Правильно! 'When global temperatures rise, ice caps melt' - климатология.",
            incorrectFeedback: "Zero conditional describes climate science with present simple.",
            incorrectFeedbackRu: "Условное предложение нулевого типа описывает климатологию с Present Simple."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Zero Conditional Multiple Choice exercises (Pages 1-10) loaded successfully!");
console.log("===== ALL ZERO CONDITIONAL EXERCISES PAGES 1-10 LOADED =====");


/* =============================================================================== */
/* ===========================Fill in the Gaps Exercises========================== */

/* ============================================
Page 1: Zero Conditional - Natural Laws and Scientific Facts
============================================ */
window.grammarExercises['conditionals']['zero-conditional-gap-page1'] = {
    title: "Natural Laws and Scientific Facts", fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If you ____ water to 100°C, it boils.",
            correctAnswer: "heat",
            options: ["heat", "heated", "heating", "heats"],
            correctFeedback: "Correct! 'If you heat' uses present simple in zero conditional for scientific facts.",
            correctFeedbackRu: "Правильно! 'If you heat' использует Present Simple в условном предложении нулевого типа для научных фактов.",
            incorrectFeedback: "Try again. Zero conditional uses present simple in both parts for facts that are always true.",
            incorrectFeedbackRu: "Попробуйте снова. Условное предложение нулевого типа использует Present Simple в обеих частях для фактов, которые всегда верны."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When ice ____ in the sun, it melts.",
            correctAnswer: "stays",
            options: ["stay", "stays", "stayed", "staying"],
            correctFeedback: "Excellent! 'When ice stays' is correct - third person singular needs -s in present simple.",
            correctFeedbackRu: "Отлично! 'When ice stays' правильно - третье лицо единственного числа требует -s в Present Simple.",
            incorrectFeedback: "Remember: 'ice' is third person singular, so we need 'stays' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'ice' - третье лицо единственного числа, поэтому нужно 'stays' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If you mix sugar in water, it ____.",
            correctAnswer: "dissolves",
            options: ["dissolve", "dissolves", "dissolved", "dissolving"],
            correctFeedback: "Perfect! 'It dissolves' uses third person singular form in zero conditional scientific fact.",
            correctFeedbackRu: "Идеально! 'It dissolves' использует форму третьего лица единственного числа в научном факте условного предложения нулевого типа.",
            incorrectFeedback: "Incorrect. 'It' requires the -s form: 'dissolves' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'It' требует форму с -s: 'dissolves' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When plants ____ enough water, they die.",
            correctAnswer: "don't get",
            options: ["don't get", "doesn't get", "didn't get", "not get"],
            correctFeedback: "Great! 'Plants don't get' uses correct plural negative form in zero conditional.",
            correctFeedbackRu: "Отлично! 'Plants don't get' использует правильную отрицательную форму множественного числа в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Plants' is plural, so we use 'don't get' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Plants' во множественном числе, поэтому используем 'don't get' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If you drop an object, it ____ down.",
            correctAnswer: "falls",
            options: ["fall", "falls", "fell", "falling"],
            correctFeedback: "Correct! 'It falls' demonstrates the law of gravity in zero conditional.",
            correctFeedbackRu: "Правильно! 'It falls' демонстрирует закон гравитации в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'it' needs the -s form 'falls' in zero conditional for physical laws.",
            incorrectFeedbackRu: "Помните: 'it' требует форму с -s 'falls' в условном предложении нулевого типа для физических законов."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If you combine oil and water, they ____ mix.",
            correctAnswer: "don't",
            options: ["don't", "doesn't", "didn't", "not"],
            correctFeedback: "Excellent! 'They don't mix' uses plural negative form for this chemistry fact.",
            correctFeedbackRu: "Отлично! 'They don't mix' использует отрицательную форму множественного числа для этого химического факта.",
            incorrectFeedback: "Try again. 'They' requires 'don't' for negative statements in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' требует 'don't' для отрицательных утверждений в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "When animals feel threatened, they ____ or fight.",
            correctAnswer: "run",
            options: ["run", "runs", "ran", "running"],
            correctFeedback: "Perfect! 'They run' uses plural form for animal survival instincts in zero conditional.",
            correctFeedbackRu: "Идеально! 'They run' использует форму множественного числа для инстинктов выживания животных в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'They' uses the base form 'run' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'They' использует базовую форму 'run' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If you add zero to any number, the result ____ the same.",
            correctAnswer: "stays",
            options: ["stay", "stays", "stayed", "staying"],
            correctFeedback: "Great! 'The result stays' demonstrates mathematical law in zero conditional.",
            correctFeedbackRu: "Отлично! 'The result stays' демонстрирует математический закон в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'result' is singular, so we need 'stays' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'result' в единственном числе, поэтому нужно 'stays' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "When light ____ through a prism, it splits into colors.",
            correctAnswer: "passes",
            options: ["pass", "passes", "passed", "passing"],
            correctFeedback: "Correct! 'Light passes' uses singular form for this optical law in zero conditional.",
            correctFeedbackRu: "Правильно! 'Light passes' использует форму единственного числа для этого оптического закона в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Light' is singular, so we use 'passes' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Light' в единственном числе, поэтому используем 'passes' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If air temperature changes rapidly, storms ____.",
            correctAnswer: "form",
            options: ["form", "forms", "formed", "forming"],
            correctFeedback: "Excellent! 'Storms form' uses plural form for this meteorological fact in zero conditional.",
            correctFeedbackRu: "Отлично! 'Storms form' использует форму множественного числа для этого метеорологического факта в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'storms' is plural, so we use the base form 'form' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'storms' во множественном числе, поэтому используем базовую форму 'form' в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Page 2: Zero Conditional - General Truths and Human Behavior
============================================ */
window.grammarExercises['conditionals']['zero-conditional-gap-page2'] = {
    title: "General Truths and Human Behavior", fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people ____ regularly, they stay healthier.",
            correctAnswer: "exercise",
            options: ["exercise", "exercises", "exercised", "exercising"],
            correctFeedback: "Correct! 'People exercise' uses plural form for general health truths in zero conditional.",
            correctFeedbackRu: "Правильно! 'People exercise' использует форму множественного числа для общих истин о здоровье в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'People' is plural, so we use the base form 'exercise' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'People' во множественном числе, поэтому используем базовую форму 'exercise' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When I feel stressed, I ____ to music.",
            correctAnswer: "listen",
            options: ["listen", "listens", "listened", "listening"],
            correctFeedback: "Perfect! 'I listen' uses first person form for personal habits in zero conditional.",
            correctFeedbackRu: "Идеально! 'I listen' использует форму первого лица для личных привычек в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. With 'I', we use the base form 'listen' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. С 'I' мы используем базовую форму 'listen' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If children eat too much sugar, they ____ hyperactive.",
            correctAnswer: "become",
            options: ["become", "becomes", "became", "becoming"],
            correctFeedback: "Great! 'They become' shows cause-effect relationship in zero conditional.",
            correctFeedbackRu: "Отлично! 'They become' показывает отношения причины и следствия в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'they' uses the base form 'become' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'they' использует базовую форму 'become' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When people work together, they ____ friends.",
            correctAnswer: "make",
            options: ["make", "makes", "made", "making"],
            correctFeedback: "Excellent! 'They make' demonstrates social interaction truth in zero conditional.",
            correctFeedbackRu: "Отлично! 'They make' демонстрирует истину социального взаимодействия в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'They' requires the base form 'make' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' требует базовую форму 'make' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If students study hard, they ____ good grades.",
            correctAnswer: "get",
            options: ["get", "gets", "got", "getting"],
            correctFeedback: "Correct! 'They get' expresses educational principles in zero conditional.",
            correctFeedbackRu: "Правильно! 'They get' выражает образовательные принципы в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'They' uses the base form 'get' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'They' использует базовую форму 'get' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When babies get hungry, they ____.",
            correctAnswer: "cry",
            options: ["cry", "cries", "cried", "crying"],
            correctFeedback: "Perfect! 'They cry' shows natural human response in zero conditional.",
            correctFeedbackRu: "Идеально! 'They cry' показывает естественную человеческую реакцию в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'they' uses the base form 'cry' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'they' использует базовую форму 'cry' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people ____ enough sleep, they feel tired.",
            correctAnswer: "don't get",
            options: ["don't get", "doesn't get", "didn't get", "not get"],
            correctFeedback: "Great! 'People don't get' uses correct plural negative form for biological truths.",
            correctFeedbackRu: "Отлично! 'People don't get' использует правильную отрицательную форму множественного числа для биологических истин.",
            incorrectFeedback: "Try again. 'People' is plural, so we use 'don't get' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'People' во множественном числе, поэтому используем 'don't get' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When people speak clearly, others ____ them better.",
            correctAnswer: "understand",
            options: ["understand", "understands", "understood", "understanding"],
            correctFeedback: "Excellent! 'Others understand' shows communication principle in zero conditional.",
            correctFeedbackRu: "Отлично! 'Others understand' показывает принцип коммуникации в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Others' is plural, so we use 'understand' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Others' во множественном числе, поэтому используем 'understand' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people get older, their hair ____ gray.",
            correctAnswer: "turns",
            options: ["turn", "turns", "turned", "turning"],
            correctFeedback: "Correct! 'Hair turns' demonstrates aging process in zero conditional.",
            correctFeedbackRu: "Правильно! 'Hair turns' демонстрирует процесс старения в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'hair' is singular, so we need 'turns' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'hair' в единственном числе, поэтому нужно 'turns' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When teachers encourage students, learning ____ easier.",
            correctAnswer: "becomes",
            options: ["become", "becomes", "became", "becoming"],
            correctFeedback: "Perfect! 'Learning becomes' expresses educational psychology in zero conditional.",
            correctFeedbackRu: "Идеально! 'Learning becomes' выражает педагогическую психологию в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Learning' is singular, so we use 'becomes' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Learning' в единственном числе, поэтому используем 'becomes' в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Page 3: Zero Conditional - Technology and Digital Life
============================================ */
window.grammarExercises['conditionals']['zero-conditional-gap-page3'] = {
    title: "Technology and Digital Life", fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If you press the power button, the computer ____.",
            correctAnswer: "starts",
            options: ["start", "starts", "started", "starting"],
            correctFeedback: "Correct! 'The computer starts' demonstrates technology operation facts in zero conditional.",
            correctFeedbackRu: "Правильно! 'The computer starts' демонстрирует факты работы технологии в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Computer' is singular, so we use 'starts' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Computer' в единственном числе, поэтому используем 'starts' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When you forget your password, you ____ access to your account.",
            correctAnswer: "lose",
            options: ["lose", "loses", "lost", "losing"],
            correctFeedback: "Perfect! 'You lose' shows digital security rules in zero conditional.",
            correctFeedbackRu: "Идеально! 'You lose' показывает правила цифровой безопасности в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. With 'you', we use the base form 'lose' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. С 'you' мы используем базовую форму 'lose' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If your internet connection is slow, videos ____ properly.",
            correctAnswer: "don't load",
            options: ["don't load", "doesn't load", "didn't load", "not load"],
            correctFeedback: "Great! 'Videos don't load' uses plural negative form for tech limitations.",
            correctFeedbackRu: "Отлично! 'Videos don't load' использует отрицательную форму множественного числа для технических ограничений.",
            incorrectFeedback: "Remember: 'videos' is plural, so we use 'don't load' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'videos' во множественном числе, поэтому используем 'don't load' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When you close a file without saving, you ____ your work.",
            correctAnswer: "lose",
            options: ["lose", "loses", "lost", "losing"],
            correctFeedback: "Excellent! 'You lose' demonstrates software behavior rules in zero conditional.",
            correctFeedbackRu: "Отлично! 'You lose' демонстрирует правила поведения программного обеспечения в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. With 'you', we use the base form 'lose' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. С 'you' мы используем базовую форму 'lose' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If your phone battery gets empty, the device ____.",
            correctAnswer: "shuts down",
            options: ["shut down", "shuts down", "shut", "shutting down"],
            correctFeedback: "Correct! 'The device shuts down' shows device behavior patterns in zero conditional.",
            correctFeedbackRu: "Правильно! 'The device shuts down' показывает модели поведения устройств в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'device' is singular, so we use 'shuts down' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'device' в единственном числе, поэтому используем 'shuts down' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When you click 'Reply All', everyone ____ your message.",
            correctAnswer: "receives",
            options: ["receive", "receives", "received", "receiving"],
            correctFeedback: "Perfect! 'Everyone receives' demonstrates email functions in zero conditional.",
            correctFeedbackRu: "Идеально! 'Everyone receives' демонстрирует функции электронной почты в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Everyone' is singular, so we use 'receives' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Everyone' в единственном числе, поэтому используем 'receives' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If you ____ backup your data, you lose it when the computer crashes.",
            correctAnswer: "don't",
            options: ["don't", "doesn't", "didn't", "not"],
            correctFeedback: "Great! 'You don't backup' uses correct negative form for data safety rules.",
            correctFeedbackRu: "Отлично! 'You don't backup' использует правильную отрицательную форму для правил безопасности данных.",
            incorrectFeedback: "Incorrect. With 'you', we use 'don't' for negative statements in zero conditional.",
            incorrectFeedbackRu: "Неправильно. С 'you' мы используем 'don't' для отрицательных утверждений в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When you post something online, it ____ forever.",
            correctAnswer: "stays",
            options: ["stay", "stays", "stayed", "staying"],
            correctFeedback: "Excellent! 'It stays' explains digital permanence in zero conditional.",
            correctFeedbackRu: "Отлично! 'It stays' объясняет цифровую постоянность в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'it' needs the -s form 'stays' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'it' требует форму с -s 'stays' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If software becomes outdated, it ____ security vulnerabilities.",
            correctAnswer: "creates",
            options: ["create", "creates", "created", "creating"],
            correctFeedback: "Correct! 'It creates' demonstrates cybersecurity principles in zero conditional.",
            correctFeedbackRu: "Правильно! 'It creates' демонстрирует принципы кибербезопасности в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'It' requires the -s form 'creates' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'It' требует форму с -s 'creates' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When you use specific keywords, search engines ____ relevant results.",
            correctAnswer: "show",
            options: ["show", "shows", "showed", "showing"],
            correctFeedback: "Perfect! 'Search engines show' describes search algorithms in zero conditional.",
            correctFeedbackRu: "Идеально! 'Search engines show' описывает поисковые алгоритмы в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Search engines' is plural, so we use 'show' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Search engines' во множественном числе, поэтому используем 'show' в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Page 4: Zero Conditional - Weather and Seasons
============================================ */
window.grammarExercises['conditionals']['zero-conditional-gap-page4'] = {
    title: "Weather and Seasons", fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If it ____ below 0°C, water freezes.",
            correctAnswer: "gets",
            options: ["get", "gets", "got", "getting"],
            correctFeedback: "Correct! 'It gets' demonstrates weather temperature facts in zero conditional.",
            correctFeedbackRu: "Правильно! 'It gets' демонстрирует факты о температуре погоды в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'It' requires the -s form 'gets' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'It' требует форму с -s 'gets' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When autumn comes, leaves ____ yellow and red.",
            correctAnswer: "turn",
            options: ["turn", "turns", "turned", "turning"],
            correctFeedback: "Perfect! 'Leaves turn' shows seasonal changes in zero conditional.",
            correctFeedbackRu: "Идеально! 'Leaves turn' показывает сезонные изменения в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Leaves' is plural, so we use the base form 'turn' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Leaves' во множественном числе, поэтому используем базовую форму 'turn' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the sun shines brightly, people ____ sunglasses.",
            correctAnswer: "wear",
            options: ["wear", "wears", "wore", "wearing"],
            correctFeedback: "Great! 'People wear' demonstrates weather-related behavior in zero conditional.",
            correctFeedbackRu: "Отлично! 'People wear' демонстрирует поведение, связанное с погодой, в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'people' is plural, so we use the base form 'wear' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'people' во множественном числе, поэтому используем базовую форму 'wear' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When it rains heavily, people ____ umbrellas.",
            correctAnswer: "use",
            options: ["use", "uses", "used", "using"],
            correctFeedback: "Excellent! 'People use' shows practical weather responses in zero conditional.",
            correctFeedbackRu: "Отлично! 'People use' показывает практические реакции на погоду в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'People' is plural, so we use the base form 'use' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'People' во множественном числе, поэтому используем базовую форму 'use' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If it snows a lot, roads ____ slippery.",
            correctAnswer: "become",
            options: ["become", "becomes", "became", "becoming"],
            correctFeedback: "Correct! 'Roads become' demonstrates weather consequences in zero conditional.",
            correctFeedbackRu: "Правильно! 'Roads become' демонстрирует погодные последствия в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Roads' is plural, so we use the base form 'become' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Roads' во множественном числе, поэтому используем базовую форму 'become' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When humidity is high, people ____ uncomfortable.",
            correctAnswer: "feel",
            options: ["feel", "feels", "felt", "feeling"],
            correctFeedback: "Perfect! 'People feel' shows weather comfort factors in zero conditional.",
            correctFeedbackRu: "Идеально! 'People feel' показывает факторы погодного комфорта в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'people' is plural, so we use the base form 'feel' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'people' во множественном числе, поэтому используем базовую форму 'feel' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the wind blows strong, trees ____.",
            correctAnswer: "bend",
            options: ["bend", "bends", "bent", "bending"],
            correctFeedback: "Great! 'Trees bend' demonstrates natural wind effects in zero conditional.",
            correctFeedbackRu: "Отлично! 'Trees bend' демонстрирует естественные эффекты ветра в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Trees' is plural, so we use the base form 'bend' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Trees' во множественном числе, поэтому используем базовую форму 'bend' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When temperatures get very high, animals ____ shade.",
            correctAnswer: "seek",
            options: ["seek", "seeks", "sought", "seeking"],
            correctFeedback: "Excellent! 'Animals seek' shows survival behavior in zero conditional.",
            correctFeedbackRu: "Отлично! 'Animals seek' показывает поведение выживания в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Animals' is plural, so we use the base form 'seek' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Animals' во множественном числе, поэтому используем базовую форму 'seek' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If atmospheric pressure drops, storms ____.",
            correctAnswer: "develop",
            options: ["develop", "develops", "developed", "developing"],
            correctFeedback: "Correct! 'Storms develop' demonstrates meteorological principles in zero conditional.",
            correctFeedbackRu: "Правильно! 'Storms develop' демонстрирует метеорологические принципы в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'storms' is plural, so we use the base form 'develop' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'storms' во множественном числе, поэтому используем базовую форму 'develop' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When winter approaches, many birds ____ south.",
            correctAnswer: "migrate",
            options: ["migrate", "migrates", "migrated", "migrating"],
            correctFeedback: "Perfect! 'Birds migrate' shows animal migration patterns in zero conditional.",
            correctFeedbackRu: "Идеально! 'Birds migrate' показывает модели миграции животных в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Birds' is plural, so we use the base form 'migrate' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Birds' во множественном числе, поэтому используем базовую форму 'migrate' в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Page 5: Zero Conditional - Business and Work Rules
============================================ */
window.grammarExercises['conditionals']['zero-conditional-gap-page5'] = {
    title: "Business and Work Rules", fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If employees arrive late, they ____ part of their salary.",
            correctAnswer: "lose",
            options: ["lose", "loses", "lost", "losing"],
            correctFeedback: "Correct! 'They lose' demonstrates company policies in zero conditional.",
            correctFeedbackRu: "Правильно! 'They lose' демонстрирует политику компании в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'They' uses the base form 'lose' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' использует базовую форму 'lose' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When customers complain, we ____ their problems immediately.",
            correctAnswer: "solve",
            options: ["solve", "solves", "solved", "solving"],
            correctFeedback: "Perfect! 'We solve' shows service standards in zero conditional.",
            correctFeedbackRu: "Идеально! 'We solve' показывает стандарты обслуживания в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. With 'we', we use the base form 'solve' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. С 'we' мы используем базовую форму 'solve' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If products ____ quality standards, we reject them.",
            correctAnswer: "don't meet",
            options: ["don't meet", "doesn't meet", "didn't meet", "not meet"],
            correctFeedback: "Great! 'Products don't meet' uses correct plural negative form for quality control.",
            correctFeedbackRu: "Отлично! 'Products don't meet' использует правильную отрицательную форму множественного числа для контроля качества.",
            incorrectFeedback: "Remember: 'products' is plural, so we use 'don't meet' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'products' во множественном числе, поэтому используем 'don't meet' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When the boss is absent, the meeting ____ postponed.",
            correctAnswer: "gets",
            options: ["get", "gets", "got", "getting"],
            correctFeedback: "Excellent! 'The meeting gets' demonstrates organizational rules in zero conditional.",
            correctFeedbackRu: "Отлично! 'The meeting gets' демонстрирует организационные правила в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Meeting' is singular, so we use 'gets' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Meeting' в единственном числе, поэтому используем 'gets' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If we provide better service, sales ____.",
            correctAnswer: "increase",
            options: ["increase", "increases", "increased", "increasing"],
            correctFeedback: "Correct! 'Sales increase' shows business principles in zero conditional.",
            correctFeedbackRu: "Правильно! 'Sales increase' показывает бизнес-принципы в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Sales' is plural, so we use the base form 'increase' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Sales' во множественном числе, поэтому используем базовую форму 'increase' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When workers take breaks, their productivity ____.",
            correctAnswer: "improves",
            options: ["improve", "improves", "improved", "improving"],
            correctFeedback: "Perfect! 'Productivity improves' demonstrates workplace psychology in zero conditional.",
            correctFeedbackRu: "Идеально! 'Productivity improves' демонстрирует психологию рабочего места в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'productivity' is singular, so we use 'improves' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'productivity' в единственном числе, поэтому используем 'improves' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If teams miss deadlines, projects ____.",
            correctAnswer: "fail",
            options: ["fail", "fails", "failed", "failing"],
            correctFeedback: "Great! 'Projects fail' shows project management truths in zero conditional.",
            correctFeedbackRu: "Отлично! 'Projects fail' показывает истины управления проектами в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Projects' is plural, so we use the base form 'fail' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Projects' во множественном числе, поэтому используем базовую форму 'fail' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When managers give clear instructions, employees ____ better.",
            correctAnswer: "perform",
            options: ["perform", "performs", "performed", "performing"],
            correctFeedback: "Excellent! 'Employees perform' explains management principles in zero conditional.",
            correctFeedbackRu: "Отлично! 'Employees perform' объясняет принципы управления в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Employees' is plural, so we use the base form 'perform' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Employees' во множественном числе, поэтому используем базовую форму 'perform' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If companies exceed their budget, they ____ into debt.",
            correctAnswer: "go",
            options: ["go", "goes", "went", "going"],
            correctFeedback: "Correct! 'They go' demonstrates financial principles in zero conditional.",
            correctFeedbackRu: "Правильно! 'They go' демонстрирует финансовые принципы в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'they' uses the base form 'go' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'they' использует базовую форму 'go' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When employees receive proper training, mistakes ____.",
            correctAnswer: "decrease",
            options: ["decrease", "decreases", "decreased", "decreasing"],
            correctFeedback: "Perfect! 'Mistakes decrease' shows training effectiveness in zero conditional.",
            correctFeedbackRu: "Идеально! 'Mistakes decrease' показывает эффективность обучения в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Mistakes' is plural, so we use the base form 'decrease' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Mistakes' во множественном числе, поэтому используем базовую форму 'decrease' в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Page 6: Zero Conditional - Health and Medicine
============================================ */
window.grammarExercises['conditionals']['zero-conditional-gap-page6'] = {
    title: "Health and Medicine", fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people ____ enough water, they become dehydrated.",
            correctAnswer: "don't drink",
            options: ["don't drink", "doesn't drink", "didn't drink", "not drink"],
            correctFeedback: "Correct! 'People don't drink' uses plural negative form for health facts.",
            correctFeedbackRu: "Правильно! 'People don't drink' использует отрицательную форму множественного числа для фактов о здоровье.",
            incorrectFeedback: "Try again. 'People' is plural, so we use 'don't drink' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'People' во множественном числе, поэтому используем 'don't drink' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When people consume too much sugar, their energy ____ quickly.",
            correctAnswer: "crashes",
            options: ["crash", "crashes", "crashed", "crashing"],
            correctFeedback: "Perfect! 'Energy crashes' demonstrates metabolic facts in zero conditional.",
            correctFeedbackRu: "Идеально! 'Energy crashes' демонстрирует метаболические факты в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Energy' is singular, so we use 'crashes' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Energy' в единственном числе, поэтому используем 'crashes' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people exercise regularly, their heart ____ stronger.",
            correctAnswer: "becomes",
            options: ["become", "becomes", "became", "becoming"],
            correctFeedback: "Great! 'Heart becomes' shows cardiovascular health facts in zero conditional.",
            correctFeedbackRu: "Отлично! 'Heart becomes' показывает факты о сердечно-сосудистом здоровье в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'heart' is singular, so we use 'becomes' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'heart' в единственном числе, поэтому используем 'becomes' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When people get enough sleep, their immune system ____.",
            correctAnswer: "strengthens",
            options: ["strengthen", "strengthens", "strengthened", "strengthening"],
            correctFeedback: "Excellent! 'Immune system strengthens' explains immunity facts in zero conditional.",
            correctFeedbackRu: "Отлично! 'Immune system strengthens' объясняет факты об иммунитете в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Immune system' is singular, so we use 'strengthens' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Immune system' в единственном числе, поэтому используем 'strengthens' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people experience chronic stress, their health ____.",
            correctAnswer: "deteriorates",
            options: ["deteriorate", "deteriorates", "deteriorated", "deteriorating"],
            correctFeedback: "Correct! 'Health deteriorates' demonstrates stress impact in zero conditional.",
            correctFeedbackRu: "Правильно! 'Health deteriorates' демонстрирует влияние стресса в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Health' is singular, so we use 'deteriorates' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Health' в единственном числе, поэтому используем 'deteriorates' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When the body lacks vitamin C, people ____ sick more often.",
            correctAnswer: "get",
            options: ["get", "gets", "got", "getting"],
            correctFeedback: "Perfect! 'People get' shows nutritional deficiency effects in zero conditional.",
            correctFeedbackRu: "Идеально! 'People get' показывает эффекты дефицита питательных веществ в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'people' is plural, so we use the base form 'get' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'people' во множественном числе, поэтому используем базовую форму 'get' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people get sunlight, their bodies ____ vitamin D.",
            correctAnswer: "produce",
            options: ["produce", "produces", "produced", "producing"],
            correctFeedback: "Great! 'Bodies produce' demonstrates biological processes in zero conditional.",
            correctFeedbackRu: "Отлично! 'Bodies produce' демонстрирует биологические процессы в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Bodies' is plural, so we use the base form 'produce' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Bodies' во множественном числе, поэтому используем базовую форму 'produce' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When people smoke, their lung capacity ____.",
            correctAnswer: "decreases",
            options: ["decrease", "decreases", "decreased", "decreasing"],
            correctFeedback: "Excellent! 'Lung capacity decreases' explains health consequences in zero conditional.",
            correctFeedbackRu: "Отлично! 'Lung capacity decreases' объясняет последствия для здоровья в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Lung capacity' is singular, so we use 'decreases' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Lung capacity' в единственном числе, поэтому используем 'decreases' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people become dehydrated, their concentration ____.",
            correctAnswer: "suffers",
            options: ["suffer", "suffers", "suffered", "suffering"],
            correctFeedback: "Correct! 'Concentration suffers' demonstrates cognitive impact in zero conditional.",
            correctFeedbackRu: "Правильно! 'Concentration suffers' демонстрирует когнитивное воздействие в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'concentration' is singular, so we use 'suffers' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'concentration' в единственном числе, поэтому используем 'suffers' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When people maintain a balanced diet, they ____ healthier.",
            correctAnswer: "stay",
            options: ["stay", "stays", "stayed", "staying"],
            correctFeedback: "Perfect! 'They stay' describes nutrition principles in zero conditional.",
            correctFeedbackRu: "Идеально! 'They stay' описывает принципы питания в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'They' uses the base form 'stay' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' использует базовую форму 'stay' в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Page 7: Zero Conditional - Transportation and Travel
============================================ */
window.grammarExercises['conditionals']['zero-conditional-gap-page7'] = {
    title: "Transportation and Travel", fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If drivers exceed the speed limit, they ____ a ticket.",
            correctAnswer: "get",
            options: ["get", "gets", "got", "getting"],
            correctFeedback: "Correct! 'They get' demonstrates traffic laws in zero conditional.",
            correctFeedbackRu: "Правильно! 'They get' демонстрирует правила дорожного движения в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'They' uses the base form 'get' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' использует базовую форму 'get' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When cars run out of gas, they ____.",
            correctAnswer: "stop",
            options: ["stop", "stops", "stopped", "stopping"],
            correctFeedback: "Perfect! 'They stop' shows mechanical facts in zero conditional.",
            correctFeedbackRu: "Идеально! 'They stop' показывает механические факты в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'They' uses the base form 'stop' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'They' использует базовую форму 'stop' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If passengers ____ valid tickets, they can't travel.",
            correctAnswer: "don't have",
            options: ["don't have", "doesn't have", "didn't have", "not have"],
            correctFeedback: "Great! 'Passengers don't have' uses plural negative form for transport rules.",
            correctFeedbackRu: "Отлично! 'Passengers don't have' использует отрицательную форму множественного числа для правил транспорта.",
            incorrectFeedback: "Remember: 'passengers' is plural, so we use 'don't have' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'passengers' во множественном числе, поэтому используем 'don't have' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When planes change altitude, passengers ____ ear discomfort.",
            correctAnswer: "experience",
            options: ["experience", "experiences", "experienced", "experiencing"],
            correctFeedback: "Excellent! 'Passengers experience' demonstrates aviation physiology in zero conditional.",
            correctFeedbackRu: "Отлично! 'Passengers experience' демонстрирует авиационную физиологию в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Passengers' is plural, so we use the base form 'experience' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Passengers' во множественном числе, поэтому используем базовую форму 'experience' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If GPS signals are weak, navigation ____ inaccurate.",
            correctAnswer: "becomes",
            options: ["become", "becomes", "became", "becoming"],
            correctFeedback: "Correct! 'Navigation becomes' shows technology limitations in zero conditional.",
            correctFeedbackRu: "Правильно! 'Navigation becomes' показывает технологические ограничения в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Navigation' is singular, so we use 'becomes' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Navigation' в единственном числе, поэтому используем 'becomes' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When drivers park in no-parking zones, they ____ fined.",
            correctAnswer: "get",
            options: ["get", "gets", "got", "getting"],
            correctFeedback: "Perfect! 'They get' demonstrates parking regulations in zero conditional.",
            correctFeedbackRu: "Идеально! 'They get' демонстрирует правила парковки в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'they' uses the base form 'get' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'they' использует базовую форму 'get' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If vehicles ____ regular maintenance, they break down more often.",
            correctAnswer: "don't receive",
            options: ["don't receive", "doesn't receive", "didn't receive", "not receive"],
            correctFeedback: "Great! 'Vehicles don't receive' uses plural negative form for maintenance principles.",
            correctFeedbackRu: "Отлично! 'Vehicles don't receive' использует отрицательную форму множественного числа для принципов обслуживания.",
            incorrectFeedback: "Try again. 'Vehicles' is plural, so we use 'don't receive' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Vehicles' во множественном числе, поэтому используем 'don't receive' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When it rains heavily, flights ____ delayed.",
            correctAnswer: "get",
            options: ["get", "gets", "got", "getting"],
            correctFeedback: "Excellent! 'Flights get' explains weather impact on travel in zero conditional.",
            correctFeedbackRu: "Отлично! 'Flights get' объясняет влияние погоды на путешествия в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Flights' is plural, so we use the base form 'get' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Flights' во множественном числе, поэтому используем базовую форму 'get' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If passengers wear seat belts, they ____ safer.",
            correctAnswer: "stay",
            options: ["stay", "stays", "stayed", "staying"],
            correctFeedback: "Correct! 'They stay' demonstrates safety regulations in zero conditional.",
            correctFeedbackRu: "Правильно! 'They stay' демонстрирует правила безопасности в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'they' uses the base form 'stay' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'they' использует базовую форму 'stay' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When rush hour arrives, traffic ____ heavy.",
            correctAnswer: "becomes",
            options: ["become", "becomes", "became", "becoming"],
            correctFeedback: "Perfect! 'Traffic becomes' describes urban transportation patterns in zero conditional.",
            correctFeedbackRu: "Идеально! 'Traffic becomes' описывает модели городского транспорта в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Traffic' is singular, so we use 'becomes' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Traffic' в единственном числе, поэтому используем 'becomes' в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Page 8: Zero Conditional - Education and Learning
============================================ */
window.grammarExercises['conditionals']['zero-conditional-gap-page8'] = {
    title: "Education and Learning", fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If students pay attention in class, they ____ better grades.",
            correctAnswer: "get",
            options: ["get", "gets", "got", "getting"],
            correctFeedback: "Correct! 'They get' demonstrates educational principles in zero conditional.",
            correctFeedbackRu: "Правильно! 'They get' демонстрирует образовательные принципы в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'They' uses the base form 'get' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' использует базовую форму 'get' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When people review information repeatedly, they ____ it better.",
            correctAnswer: "remember",
            options: ["remember", "remembers", "remembered", "remembering"],
            correctFeedback: "Perfect! 'They remember' shows memory science in zero conditional.",
            correctFeedbackRu: "Идеально! 'They remember' показывает науку о памяти в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'They' uses the base form 'remember' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'They' использует базовую форму 'remember' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If students practice regularly, their skills ____.",
            correctAnswer: "improve",
            options: ["improve", "improves", "improved", "improving"],
            correctFeedback: "Great! 'Skills improve' demonstrates skill development laws in zero conditional.",
            correctFeedbackRu: "Отлично! 'Skills improve' демонстрирует законы развития навыков в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'skills' is plural, so we use the base form 'improve' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'skills' во множественном числе, поэтому используем базовую форму 'improve' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When students do their homework, they ____ the material better.",
            correctAnswer: "understand",
            options: ["understand", "understands", "understood", "understanding"],
            correctFeedback: "Excellent! 'They understand' explains learning reinforcement in zero conditional.",
            correctFeedbackRu: "Отлично! 'They understand' объясняет закрепление обучения в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'They' uses the base form 'understand' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' использует базовую форму 'understand' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If children read books regularly, their vocabulary ____.",
            correctAnswer: "expands",
            options: ["expand", "expands", "expanded", "expanding"],
            correctFeedback: "Correct! 'Vocabulary expands' shows language development in zero conditional.",
            correctFeedbackRu: "Правильно! 'Vocabulary expands' показывает развитие языка в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Vocabulary' is singular, so we use 'expands' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Vocabulary' в единственном числе, поэтому используем 'expands' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When students study in noisy environments, their focus ____.",
            correctAnswer: "decreases",
            options: ["decrease", "decreases", "decreased", "decreasing"],
            correctFeedback: "Perfect! 'Focus decreases' describes learning environment effects in zero conditional.",
            correctFeedbackRu: "Идеально! 'Focus decreases' описывает эффекты учебной среды в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'focus' is singular, so we use 'decreases' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'focus' в единственном числе, поэтому используем 'decreases' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If teachers provide constructive feedback, students ____ faster.",
            correctAnswer: "learn",
            options: ["learn", "learns", "learned", "learning"],
            correctFeedback: "Great! 'Students learn' explains pedagogical principles in zero conditional.",
            correctFeedbackRu: "Отлично! 'Students learn' объясняет педагогические принципы в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Students' is plural, so we use the base form 'learn' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Students' во множественном числе, поэтому используем базовую форму 'learn' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When students become interested in a subject, they ____ more effort.",
            correctAnswer: "put in",
            options: ["put in", "puts in", "put", "putting in"],
            correctFeedback: "Excellent! 'They put in' explains motivation psychology in zero conditional.",
            correctFeedbackRu: "Отлично! 'They put in' объясняет психологию мотивации в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'They' uses the base form 'put in' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'They' использует базовую форму 'put in' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If students work in groups, they ____ different perspectives.",
            correctAnswer: "gain",
            options: ["gain", "gains", "gained", "gaining"],
            correctFeedback: "Correct! 'They gain' demonstrates collaborative learning benefits in zero conditional.",
            correctFeedbackRu: "Правильно! 'They gain' демонстрирует преимущества совместного обучения в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'they' uses the base form 'gain' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'they' использует базовую форму 'gain' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When students cram at the last minute, they ____ stressed.",
            correctAnswer: "become",
            options: ["become", "becomes", "became", "becoming"],
            correctFeedback: "Perfect! 'They become' describes study habit consequences in zero conditional.",
            correctFeedbackRu: "Идеально! 'They become' описывает последствия учебных привычек в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'They' uses the base form 'become' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' использует базовую форму 'become' в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Page 9: Zero Conditional - Food and Cooking
============================================ */
window.grammarExercises['conditionals']['zero-conditional-gap-page9'] = {
    title: "Food and Cooking", fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If you heat water to 100°C, it ____.",
            correctAnswer: "boils",
            options: ["boil", "boils", "boiled", "boiling"],
            correctFeedback: "Correct! 'It boils' demonstrates basic cooking science in zero conditional.",
            correctFeedbackRu: "Правильно! 'It boils' демонстрирует основы кулинарной науки в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'It' requires the -s form 'boils' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'It' требует форму с -s 'boils' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When you add too much flour, the cake ____ heavy.",
            correctAnswer: "becomes",
            options: ["become", "becomes", "became", "becoming"],
            correctFeedback: "Perfect! 'The cake becomes' shows baking chemistry in zero conditional.",
            correctFeedbackRu: "Идеально! 'The cake becomes' показывает химию выпечки в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Cake' is singular, so we use 'becomes' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Cake' в единственном числе, поэтому используем 'becomes' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If meat ____ properly cooked, bacteria survive.",
            correctAnswer: "isn't",
            options: ["isn't", "aren't", "wasn't", "not"],
            correctFeedback: "Great! 'Meat isn't' uses singular negative form for food safety principles.",
            correctFeedbackRu: "Отлично! 'Meat isn't' использует отрицательную форму единственного числа для принципов пищевой безопасности.",
            incorrectFeedback: "Remember: 'meat' is singular, so we use 'isn't' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'meat' в единственном числе, поэтому используем 'isn't' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When you store food in the refrigerator, it ____ longer.",
            correctAnswer: "lasts",
            options: ["last", "lasts", "lasted", "lasting"],
            correctFeedback: "Excellent! 'It lasts' explains food preservation in zero conditional.",
            correctFeedbackRu: "Отлично! 'It lasts' объясняет консервацию пищи в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'It' requires the -s form 'lasts' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'It' требует форму с -s 'lasts' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If you add salt to food, the flavor ____.",
            correctAnswer: "enhances",
            options: ["enhance", "enhances", "enhanced", "enhancing"],
            correctFeedback: "Correct! 'The flavor enhances' demonstrates taste enhancement principles in zero conditional.",
            correctFeedbackRu: "Правильно! 'The flavor enhances' демонстрирует принципы улучшения вкуса в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Flavor' is singular, so we use 'enhances' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Flavor' в единственном числе, поэтому используем 'enhances' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When milk sits at room temperature, it ____.",
            correctAnswer: "sours",
            options: ["sour", "sours", "soured", "souring"],
            correctFeedback: "Perfect! 'It sours' describes natural fermentation processes in zero conditional.",
            correctFeedbackRu: "Идеально! 'It sours' описывает естественные процессы ферментации в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'it' needs the -s form 'sours' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'it' требует форму с -s 'sours' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people eat too much fast food, they ____ weight.",
            correctAnswer: "gain",
            options: ["gain", "gains", "gained", "gaining"],
            correctFeedback: "Great! 'They gain' demonstrates nutritional consequences in zero conditional.",
            correctFeedbackRu: "Отлично! 'They gain' демонстрирует пищевые последствия в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'They' uses the base form 'gain' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' использует базовую форму 'gain' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When you cook vegetables too long, they ____ their nutrients.",
            correctAnswer: "lose",
            options: ["lose", "loses", "lost", "losing"],
            correctFeedback: "Excellent! 'They lose' explains cooking nutrition facts in zero conditional.",
            correctFeedbackRu: "Отлично! 'They lose' объясняет факты о питательности при готовке в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'They' uses the base form 'lose' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'They' использует базовую форму 'lose' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If you soak beans before cooking, they ____ faster.",
            correctAnswer: "cook",
            options: ["cook", "cooks", "cooked", "cooking"],
            correctFeedback: "Correct! 'They cook' describes cooking preparation principles in zero conditional.",
            correctFeedbackRu: "Правильно! 'They cook' описывает принципы подготовки к готовке в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'they' uses the base form 'cook' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'they' использует базовую форму 'cook' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When fruits ripen, they ____ sweeter.",
            correctAnswer: "become",
            options: ["become", "becomes", "became", "becoming"],
            correctFeedback: "Perfect! 'They become' describes natural ripening processes in zero conditional.",
            correctFeedbackRu: "Идеально! 'They become' описывает естественные процессы созревания в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'They' uses the base form 'become' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' использует базовую форму 'become' в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Page 10: Zero Conditional - Social Media and Communication
============================================ */
window.grammarExercises['conditionals']['zero-conditional-gap-page10'] = {
    title: "Social Media and Communication", fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people post controversial content, they ____ negative reactions.",
            correctAnswer: "receive",
            options: ["receive", "receives", "received", "receiving"],
            correctFeedback: "Correct! 'They receive' demonstrates social media principles in zero conditional.",
            correctFeedbackRu: "Правильно! 'They receive' демонстрирует принципы социальных медиа в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'They' uses the base form 'receive' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'They' использует базовую форму 'receive' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When people maintain eye contact, communication ____ more effective.",
            correctAnswer: "becomes",
            options: ["become", "becomes", "became", "becoming"],
            correctFeedback: "Perfect! 'Communication becomes' shows communication psychology in zero conditional.",
            correctFeedbackRu: "Идеально! 'Communication becomes' показывает психологию коммуникации в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Communication' is singular, so we use 'becomes' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Communication' в единственном числе, поэтому используем 'becomes' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If users share personal information online, they ____ privacy risks.",
            correctAnswer: "face",
            options: ["face", "faces", "faced", "facing"],
            correctFeedback: "Great! 'They face' demonstrates digital security principles in zero conditional.",
            correctFeedbackRu: "Отлично! 'They face' демонстрирует принципы цифровой безопасности в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'they' uses the base form 'face' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'they' использует базовую форму 'face' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When content triggers emotions, it ____ more widely.",
            correctAnswer: "spreads",
            options: ["spread", "spreads", "spread", "spreading"],
            correctFeedback: "Excellent! 'It spreads' explains viral marketing principles in zero conditional.",
            correctFeedbackRu: "Отлично! 'It spreads' объясняет принципы вирусного маркетинга в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'It' requires the -s form 'spreads' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'It' требует форму с -s 'spreads' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people receive too many notifications, they ____ overwhelmed.",
            correctAnswer: "feel",
            options: ["feel", "feels", "felt", "feeling"],
            correctFeedback: "Correct! 'They feel' demonstrates digital wellness principles in zero conditional.",
            correctFeedbackRu: "Правильно! 'They feel' демонстрирует принципы цифрового благополучия в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'They' uses the base form 'feel' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'They' использует базовую форму 'feel' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When users engage with certain content, algorithms ____ similar posts.",
            correctAnswer: "show",
            options: ["show", "shows", "showed", "showing"],
            correctFeedback: "Perfect! 'Algorithms show' describes algorithm behavior in zero conditional.",
            correctFeedbackRu: "Идеально! 'Algorithms show' описывает поведение алгоритма в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'algorithms' is plural, so we use the base form 'show' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'algorithms' во множественном числе, поэтому используем базовую форму 'show' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If people stare at screens for too long, their eyes ____.",
            correctAnswer: "strain",
            options: ["strain", "strains", "strained", "straining"],
            correctFeedback: "Great! 'Eyes strain' demonstrates digital health facts in zero conditional.",
            correctFeedbackRu: "Отлично! 'Eyes strain' демонстрирует факты цифрового здоровья в условном предложении нулевого типа.",
            incorrectFeedback: "Try again. 'Eyes' is plural, so we use the base form 'strain' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Eyes' во множественном числе, поэтому используем базовую форму 'strain' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When people use emojis in messages, communication ____ friendlier.",
            correctAnswer: "seems",
            options: ["seem", "seems", "seemed", "seeming"],
            correctFeedback: "Excellent! 'Communication seems' explains digital communication patterns in zero conditional.",
            correctFeedbackRu: "Отлично! 'Communication seems' объясняет модели цифровой коммуникации в условном предложении нулевого типа.",
            incorrectFeedback: "Incorrect. 'Communication' is singular, so we use 'seems' in zero conditional.",
            incorrectFeedbackRu: "Неправильно. 'Communication' в единственном числе, поэтому используем 'seems' в условном предложении нулевого типа."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If internet connection is unstable, video calls ____.",
            correctAnswer: "freeze",
            options: ["freeze", "freezes", "froze", "freezing"],
            correctFeedback: "Correct! 'Video calls freeze' demonstrates video communication limitations in zero conditional.",
            correctFeedbackRu: "Правильно! 'Video calls freeze' демонстрирует ограничения видеосвязи в условном предложении нулевого типа.",
            incorrectFeedback: "Remember: 'video calls' is plural, so we use the base form 'freeze' in zero conditional.",
            incorrectFeedbackRu: "Помните: 'video calls' во множественном числе, поэтому используем базовую форму 'freeze' в условном предложении нулевого типа."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "When users include relevant hashtags, their posts ____ more visibility.",
            correctAnswer: "get",
            options: ["get", "gets", "got", "getting"],
            correctFeedback: "Perfect! 'Posts get' describes social media strategies in zero conditional. You've completed all 10 pages of Zero Conditional Fill in the Gaps exercises!",
            correctFeedbackRu: "Идеально! 'Posts get' описывает стратегии социальных медиа в условном предложении нулевого типа. Вы завершили все 10 страниц упражнений Fill in the Gaps на Zero Conditional!",
            incorrectFeedback: "Try again. 'Posts' is plural, so we use the base form 'get' in zero conditional.",
            incorrectFeedbackRu: "Попробуйте снова. 'Posts' во множественном числе, поэтому используем базовую форму 'get' в условном предложении нулевого типа."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Zero Conditional Fill in the Gaps exercises (Pages 1-10) loaded successfully!");
console.log("===== ALL ZERO CONDITIONAL FILL GAPS EXERCISES COMPLETED =====");

/* =============================================================================== */
/* =========================Sentence Building Exercises=========================== */

/* ============================================
Page 1: Zero Conditional - Daily Life and Technology
============================================ */
window.grammarExercises['conditionals']['zero-conditional-sentence-page1'] = {
    title: "Daily Life and Technology", sentenceBuilding: [
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "forget", "your", "phone", "charger", "the", "battery", "dies"],
            correctAnswer: "If you forget your phone charger, the battery dies.",
            correctFeedback: "Excellent! 'If you forget your phone charger, the battery dies' - perfect everyday technology fact!",
            correctFeedbackRu: "Отлично! 'If you forget your phone charger, the battery dies' - идеальный повседневный технологический факт!",
            incorrectFeedback: "Try again. Remember: If + you forget your phone charger, the battery dies.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + you forget your phone charger, the battery dies."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "drink", "coffee", "late", "I", "can't", "sleep"],
            correctAnswer: "When I drink coffee late, I can't sleep.",
            correctFeedback: "Perfect! 'When I drink coffee late, I can't sleep' - common personal experience!",
            correctFeedbackRu: "Идеально! 'When I drink coffee late, I can't sleep' - обычный личный опыт!",
            incorrectFeedback: "Not quite right. The correct order is: When I drink coffee late, I can't sleep.",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: When I drink coffee late, I can't sleep."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "leave", "milk", "out", "it", "goes", "bad"],
            correctAnswer: "If you leave milk out, it goes bad.",
            correctFeedback: "Great! 'If you leave milk out, it goes bad' - practical kitchen knowledge!",
            correctFeedbackRu: "Отлично! 'If you leave milk out, it goes bad' - практические кухонные знания!",
            incorrectFeedback: "Try again. Remember: If you leave milk out, it goes bad.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you leave milk out, it goes bad."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эди слова:",
            words: ["When", "it", "rains", "people", "use", "umbrellas"],
            correctAnswer: "When it rains, people use umbrellas.",
            correctFeedback: "Excellent! 'When it rains, people use umbrellas' - universal weather behavior!",
            correctFeedbackRu: "Отлично! 'When it rains, people use umbrellas' - универсальное поведение при погоде!",
            incorrectFeedback: "Not right. The correct structure is: When it rains, people use umbrellas.",
            incorrectFeedbackRu: "Неправильно. Правильная структура: When it rains, people use umbrellas."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "I", "eat", "too", "much", "I", "feel", "sick"],
            correctAnswer: "If I eat too much, I feel sick.",
            correctFeedback: "Perfect! 'If I eat too much, I feel sick' - relatable personal experience!",
            correctFeedbackRu: "Идеально! 'If I eat too much, I feel sick' - понятный личный опыт!",
            incorrectFeedback: "Try again. The correct order is: If I eat too much, I feel sick.",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: If I eat too much, I feel sick."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "press", "the", "wrong", "button", "the", "elevator", "stops"],
            correctAnswer: "When you press the wrong button, the elevator stops.",
            correctFeedback: "Great! 'When you press the wrong button, the elevator stops' - everyday building experience!",
            correctFeedbackRu: "Отлично! 'When you press the wrong button, the elevator stops' - повседневный опыт в здании!",
            incorrectFeedback: "Not quite. Remember: When you press the wrong button, the elevator stops.",
            incorrectFeedbackRu: "Не совсем так. Помните: When you press the wrong button, the elevator stops."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "don't", "water", "plants", "they", "die"],
            correctAnswer: "If you don't water plants, they die.",
            correctFeedback: "Excellent! 'If you don't water plants, they die' - basic gardening fact!",
            correctFeedbackRu: "Отлично! 'If you don't water plants, they die' - основной факт садоводства!",
            incorrectFeedback: "Try again. The structure is: If you don't water plants, they die.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: If you don't water plants, they die."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "watch", "scary", "movies", "I", "get", "nightmares"],
            correctAnswer: "When I watch scary movies, I get nightmares.",
            correctFeedback: "Perfect! 'When I watch scary movies, I get nightmares' - common personal reaction!",
            correctFeedbackRu: "Идеально! 'When I watch scary movies, I get nightmares' - обычная личная реакция!",
            incorrectFeedback: "Not right. The correct order is: When I watch scary movies, I get nightmares.",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: When I watch scary movies, I get nightmares."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "leave", "food", "on", "the", "counter", "flies", "come"],
            correctAnswer: "If you leave food on the counter, flies come.",
            correctFeedback: "Great! 'If you leave food on the counter, flies come' - household reality!",
            correctFeedbackRu: "Отлично! 'If you leave food on the counter, flies come' - домашняя реальность!",
            incorrectFeedback: "Try again. Remember: If you leave food on the counter, flies come.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you leave food on the counter, flies come."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "forget", "your", "keys", "you", "get", "locked", "out"],
            correctAnswer: "When you forget your keys, you get locked out.",
            correctFeedback: "Excellent! 'When you forget your keys, you get locked out' - frustrating but common experience!",
            correctFeedbackRu: "Отлично! 'When you forget your keys, you get locked out' - раздражающий, но обычный опыт!",
            incorrectFeedback: "Not quite right. The structure is: When you forget your keys, you get locked out.",
            incorrectFeedbackRu: "Не совсем правильно. Структура: When you forget your keys, you get locked out."
        }
    ]
};

/* ============================================
Page 2: Zero Conditional - Work and Social Life
============================================ */
window.grammarExercises['conditionals']['zero-conditional-sentence-page2'] = {
    title: "Work and Social Life", sentenceBuilding: [
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "arrive", "late", "to", "work", "your", "boss", "gets", "angry"],
            correctAnswer: "If you arrive late to work, your boss gets angry.",
            correctFeedback: "Excellent! 'If you arrive late to work, your boss gets angry' - workplace reality!",
            correctFeedbackRu: "Отлично! 'If you arrive late to work, your boss gets angry' - реальность рабочего места!",
            incorrectFeedback: "Try again. Remember: If you arrive late to work, your boss gets angry.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you arrive late to work, your boss gets angry."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "work", "from", "home", "I", "save", "money", "on", "transport"],
            correctAnswer: "When I work from home, I save money on transport.",
            correctFeedback: "Perfect! 'When I work from home, I save money on transport' - modern work benefit!",
            correctFeedbackRu: "Идеально! 'When I work from home, I save money on transport' - преимущество современной работы!",
            incorrectFeedback: "Not quite right. The correct order is: When I work from home, I save money on transport.",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: When I work from home, I save money on transport."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "gossip", "about", "colleagues", "people", "lose", "trust"],
            correctAnswer: "If you gossip about colleagues, people lose trust.",
            correctFeedback: "Great! 'If you gossip about colleagues, people lose trust' - workplace social dynamics!",
            correctFeedbackRu: "Отлично! 'If you gossip about colleagues, people lose trust' - социальная динамика на рабочем месте!",
            incorrectFeedback: "Try again. Remember: If you gossip about colleagues, people lose trust.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you gossip about colleagues, people lose trust."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "help", "others", "they", "remember", "your", "kindness"],
            correctAnswer: "When you help others, they remember your kindness.",
            correctFeedback: "Excellent! 'When you help others, they remember your kindness' - beautiful human truth!",
            correctFeedbackRu: "Отлично! 'When you help others, they remember your kindness' - прекрасная человеческая истина!",
            incorrectFeedback: "Not right. The correct structure is: When you help others, they remember your kindness.",
            incorrectFeedbackRu: "Неправильно. Правильная структура: When you help others, they remember your kindness."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "I", "skip", "lunch", "I", "get", "cranky"],
            correctAnswer: "If I skip lunch, I get cranky.",
            correctFeedback: "Perfect! 'If I skip lunch, I get cranky' - relatable daily experience!",
            correctFeedbackRu: "Идеально! 'If I skip lunch, I get cranky' - понятный ежедневный опыт!",
            incorrectFeedback: "Try again. The correct order is: If I skip lunch, I get cranky.",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: If I skip lunch, I get cranky."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "smile", "at", "strangers", "they", "usually", "smile", "back"],
            correctAnswer: "When you smile at strangers, they usually smile back.",
            correctFeedback: "Great! 'When you smile at strangers, they usually smile back' - social psychology in action!",
            correctFeedbackRu: "Отлично! 'When you smile at strangers, they usually smile back' - социальная психология в действии!",
            incorrectFeedback: "Not quite. Remember: When you smile at strangers, they usually smile back.",
            incorrectFeedbackRu: "Не совсем так. Помните: When you smile at strangers, they usually smile back."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "check", "social", "media", "constantly", "you", "feel", "anxious"],
            correctAnswer: "If you check social media constantly, you feel anxious.",
            correctFeedback: "Excellent! 'If you check social media constantly, you feel anxious' - modern digital reality!",
            correctFeedbackRu: "Отлично! 'If you check social media constantly, you feel anxious' - современная цифровая реальность!",
            incorrectFeedback: "Try again. The structure is: If you check social media constantly, you feel anxious.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: If you check social media constantly, you feel anxious."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "meet", "new", "people", "I", "feel", "nervous"],
            correctAnswer: "When I meet new people, I feel nervous.",
            correctFeedback: "Perfect! 'When I meet new people, I feel nervous' - common social anxiety!",
            correctFeedbackRu: "Идеально! 'When I meet new people, I feel nervous' - обычное социальное беспокойство!",
            incorrectFeedback: "Not right. The correct order is: When I meet new people, I feel nervous.",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: When I meet new people, I feel nervous."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "complain", "all", "the", "time", "people", "avoid", "you"],
            correctAnswer: "If you complain all the time, people avoid you.",
            correctFeedback: "Great! 'If you complain all the time, people avoid you' - harsh but true social fact!",
            correctFeedbackRu: "Отлично! 'If you complain all the time, people avoid you' - суровый, но правдивый социальный факт!",
            incorrectFeedback: "Try again. Remember: If you complain all the time, people avoid you.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you complain all the time, people avoid you."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "listen", "to", "others", "they", "appreciate", "you", "more"],
            correctAnswer: "When you listen to others, they appreciate you more.",
            correctFeedback: "Excellent! 'When you listen to others, they appreciate you more' - valuable relationship advice!",
            correctFeedbackRu: "Отлично! 'When you listen to others, they appreciate you more' - ценный совет для отношений!",
            incorrectFeedback: "Not quite right. The structure is: When you listen to others, they appreciate you more.",
            incorrectFeedbackRu: "Не совсем правильно. Структура: When you listen to others, they appreciate you more."
        }
    ]
};

/* ============================================
Page 3: Zero Conditional - Health and Personal Habits
============================================ */
window.grammarExercises['conditionals']['zero-conditional-sentence-page3'] = {
    title: "Health and Personal Habits", sentenceBuilding: [
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "stay", "up", "late", "you", "feel", "tired", "tomorrow"],
            correctAnswer: "If you stay up late, you feel tired tomorrow.",
            correctFeedback: "Excellent! 'If you stay up late, you feel tired tomorrow' - sleep hygiene reality!",
            correctFeedbackRu: "Отлично! 'If you stay up late, you feel tired tomorrow' - реальность гигиены сна!",
            incorrectFeedback: "Try again. Remember: If you stay up late, you feel tired tomorrow.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you stay up late, you feel tired tomorrow."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "exercise", "regularly", "I", "sleep", "better"],
            correctAnswer: "When I exercise regularly, I sleep better.",
            correctFeedback: "Perfect! 'When I exercise regularly, I sleep better' - proven health benefit!",
            correctFeedbackRu: "Идеально! 'When I exercise regularly, I sleep better' - доказанная польза для здоровья!",
            incorrectFeedback: "Not quite right. The correct order is: When I exercise regularly, I sleep better.",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: When I exercise regularly, I sleep better."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "eat", "junk", "food", "your", "skin", "breaks", "out"],
            correctAnswer: "If you eat junk food, your skin breaks out.",
            correctFeedback: "Great! 'If you eat junk food, your skin breaks out' - diet and skin connection!",
            correctFeedbackRu: "Отлично! 'If you eat junk food, your skin breaks out' - связь диеты и кожи!",
            incorrectFeedback: "Try again. Remember: If you eat junk food, your skin breaks out.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you eat junk food, your skin breaks out."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "sit", "all", "day", "your", "back", "hurts"],
            correctAnswer: "When you sit all day, your back hurts.",
            correctFeedback: "Excellent! 'When you sit all day, your back hurts' - modern office worker reality!",
            correctFeedbackRu: "Отлично! 'When you sit all day, your back hurts' - реальность современного офисного работника!",
            incorrectFeedback: "Not right. The correct structure is: When you sit all day, your back hurts.",
            incorrectFeedbackRu: "Неправильно. Правильная структура: When you sit all day, your back hurts."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "I", "skip", "breakfast", "I", "get", "headaches"],
            correctAnswer: "If I skip breakfast, I get headaches.",
            correctFeedback: "Perfect! 'If I skip breakfast, I get headaches' - importance of morning nutrition!",
            correctFeedbackRu: "Идеально! 'If I skip breakfast, I get headaches' - важность утреннего питания!",
            incorrectFeedback: "Try again. The correct order is: If I skip breakfast, I get headaches.",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: If I skip breakfast, I get headaches."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "drink", "enough", "water", "your", "energy", "improves"],
            correctAnswer: "When you drink enough water, your energy improves.",
            correctFeedback: "Great! 'When you drink enough water, your energy improves' - hydration benefits!",
            correctFeedbackRu: "Отлично! 'When you drink enough water, your energy improves' - преимущества гидратации!",
            incorrectFeedback: "Not quite. Remember: When you drink enough water, your energy improves.",
            incorrectFeedbackRu: "Не совсем так. Помните: When you drink enough water, your energy improves."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "stress", "too", "much", "your", "hair", "falls", "out"],
            correctAnswer: "If you stress too much, your hair falls out.",
            correctFeedback: "Excellent! 'If you stress too much, your hair falls out' - stress and physical health!",
            correctFeedbackRu: "Отлично! 'If you stress too much, your hair falls out' - стресс и физическое здоровье!",
            incorrectFeedback: "Try again. The structure is: If you stress too much, your hair falls out.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: If you stress too much, your hair falls out."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "meditate", "daily", "I", "feel", "calmer"],
            correctAnswer: "When I meditate daily, I feel calmer.",
            correctFeedback: "Perfect! 'When I meditate daily, I feel calmer' - mindfulness benefits!",
            correctFeedbackRu: "Идеально! 'When I meditate daily, I feel calmer' - преимущества осознанности!",
            incorrectFeedback: "Not right. The correct order is: When I meditate daily, I feel calmer.",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: When I meditate daily, I feel calmer."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "smoke", "cigarettes", "you", "damage", "your", "lungs"],
            correctAnswer: "If you smoke cigarettes, you damage your lungs.",
            correctFeedback: "Great! 'If you smoke cigarettes, you damage your lungs' - important health warning!",
            correctFeedbackRu: "Отлично! 'If you smoke cigarettes, you damage your lungs' - важное предупреждение о здоровье!",
            incorrectFeedback: "Try again. Remember: If you smoke cigarettes, you damage your lungs.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you smoke cigarettes, you damage your lungs."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "get", "enough", "vitamin", "D", "your", "mood", "lifts"],
            correctAnswer: "When you get enough vitamin D, your mood lifts.",
            correctFeedback: "Excellent! 'When you get enough vitamin D, your mood lifts' - sunshine and mental health connection!",
            correctFeedbackRu: "Отлично! 'When you get enough vitamin D, your mood lifts' - связь солнечного света и психического здоровья!",
            incorrectFeedback: "Not quite right. The structure is: When you get enough vitamin D, your mood lifts.",
            incorrectFeedbackRu: "Не совсем правильно. Структура: When you get enough vitamin D, your mood lifts."
        }
    ]
};

/* ============================================
Page 4: Zero Conditional - Money and Shopping
============================================ */
window.grammarExercises['conditionals']['zero-conditional-sentence-page4'] = {
    title: "Money and Shopping", sentenceBuilding: [
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "spend", "more", "than", "you", "earn", "you", "get", "into", "debt"],
            correctAnswer: "If you spend more than you earn, you get into debt.",
            correctFeedback: "Excellent! 'If you spend more than you earn, you get into debt' - fundamental financial rule!",
            correctFeedbackRu: "Отлично! 'If you spend more than you earn, you get into debt' - основное правило финансов!",
            incorrectFeedback: "Try again. Remember: If you spend more than you earn, you get into debt.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you spend more than you earn, you get into debt."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "go", "grocery", "shopping", "hungry", "I", "buy", "too", "much"],
            correctAnswer: "When I go grocery shopping hungry, I buy too much.",
            correctFeedback: "Perfect! 'When I go grocery shopping hungry, I buy too much' - classic shopping mistake!",
            correctFeedbackRu: "Идеально! 'When I go grocery shopping hungry, I buy too much' - классическая ошибка покупок!",
            incorrectFeedback: "Not quite right. The correct order is: When I go grocery shopping hungry, I buy too much.",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: When I go grocery shopping hungry, I buy too much."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "compare", "prices", "online", "you", "save", "money"],
            correctAnswer: "If you compare prices online, you save money.",
            correctFeedback: "Great! 'If you compare prices online, you save money' - smart shopping tip!",
            correctFeedbackRu: "Отлично! 'If you compare prices online, you save money' - умный совет по покупкам!",
            incorrectFeedback: "Try again. Remember: If you compare prices online, you save money.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you compare prices online, you save money."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "stores", "have", "sales", "people", "buy", "things", "they", "don't", "need"],
            correctAnswer: "When stores have sales, people buy things they don't need.",
            correctFeedback: "Excellent! 'When stores have sales, people buy things they don't need' - retail psychology!",
            correctFeedbackRu: "Отлично! 'When stores have sales, people buy things they don't need' - психология розничной торговли!",
            incorrectFeedback: "Not right. The correct structure is: When stores have sales, people buy things they don't need.",
            incorrectFeedbackRu: "Неправильно. Правильная структура: When stores have sales, people buy things they don't need."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "use", "credit", "cards", "carelessly", "debt", "accumulates", "quickly"],
            correctAnswer: "If you use credit cards carelessly, debt accumulates quickly.",
            correctFeedback: "Perfect! 'If you use credit cards carelessly, debt accumulates quickly' - important financial warning!",
            correctFeedbackRu: "Идеально! 'If you use credit cards carelessly, debt accumulates quickly' - важное финансовое предупреждение!",
            incorrectFeedback: "Try again. The correct order is: If you use credit cards carelessly, debt accumulates quickly.",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: If you use credit cards carelessly, debt accumulates quickly."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "buy", "cheap", "clothes", "they", "wear", "out", "fast"],
            correctAnswer: "When you buy cheap clothes, they wear out fast.",
            correctFeedback: "Great! 'When you buy cheap clothes, they wear out fast' - quality vs price reality!",
            correctFeedbackRu: "Отлично! 'When you buy cheap clothes, they wear out fast' - реальность качества против цены!",
            incorrectFeedback: "Not quite. Remember: When you buy cheap clothes, they wear out fast.",
            incorrectFeedbackRu: "Не совсем так. Помните: When you buy cheap clothes, they wear out fast."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "save", "money", "regularly", "you", "build", "financial", "security"],
            correctAnswer: "If you save money regularly, you build financial security.",
            correctFeedback: "Excellent! 'If you save money regularly, you build financial security' - wealth building principle!",
            correctFeedbackRu: "Отлично! 'If you save money regularly, you build financial security' - принцип накопления богатства!",
            incorrectFeedback: "Try again. The structure is: If you save money regularly, you build financial security.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: If you save money regularly, you build financial security."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "see", "expensive", "brands", "I", "feel", "tempted", "to", "buy"],
            correctAnswer: "When I see expensive brands, I feel tempted to buy.",
            correctFeedback: "Perfect! 'When I see expensive brands, I feel tempted to buy' - marketing psychology in action!",
            correctFeedbackRu: "Идеально! 'When I see expensive brands, I feel tempted to buy' - психология маркетинга в действии!",
            incorrectFeedback: "Not right. The correct order is: When I see expensive brands, I feel tempted to buy.",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: When I see expensive brands, I feel tempted to buy."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "don't", "budget", "your", "money", "disappears", "mysteriously"],
            correctAnswer: "If you don't budget, your money disappears mysteriously.",
            correctFeedback: "Great! 'If you don't budget, your money disappears mysteriously' - personal finance reality!",
            correctFeedbackRu: "Отлично! 'If you don't budget, your money disappears mysteriously' - реальность личных финансов!",
            incorrectFeedback: "Try again. Remember: If you don't budget, your money disappears mysteriously.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you don't budget, your money disappears mysteriously."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "pay", "with", "cash", "you", "spend", "less", "money"],
            correctAnswer: "When you pay with cash, you spend less money.",
            correctFeedback: "Excellent! 'When you pay with cash, you spend less money' - psychological spending effect!",
            correctFeedbackRu: "Отлично! 'When you pay with cash, you spend less money' - психологический эффект трат!",
            incorrectFeedback: "Not quite right. The structure is: When you pay with cash, you spend less money.",
            incorrectFeedbackRu: "Не совсем правильно. Структура: When you pay with cash, you spend less money."
        }
    ]
};

/* ============================================
Page 5: Zero Conditional - Transportation and City Life
============================================ */
window.grammarExercises['conditionals']['zero-conditional-sentence-page5'] = {
    title: "Transportation and City Life", sentenceBuilding: [
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "drive", "during", "rush", "hour", "traffic", "is", "terrible"],
            correctAnswer: "If you drive during rush hour, traffic is terrible.",
            correctFeedback: "Excellent! 'If you drive during rush hour, traffic is terrible' - urban commuting reality!",
            correctFeedbackRu: "Отлично! 'If you drive during rush hour, traffic is terrible' - реальность городских поездок!",
            incorrectFeedback: "Try again. Remember: If you drive during rush hour, traffic is terrible.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you drive during rush hour, traffic is terrible."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "take", "public", "transport", "I", "save", "on", "parking", "fees"],
            correctAnswer: "When I take public transport, I save on parking fees.",
            correctFeedback: "Perfect! 'When I take public transport, I save on parking fees' - practical city living!",
            correctFeedbackRu: "Идеально! 'When I take public transport, I save on parking fees' - практическая городская жизнь!",
            incorrectFeedback: "Not quite right. The correct order is: When I take public transport, I save on parking fees.",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: When I take public transport, I save on parking fees."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "don't", "wear", "a", "helmet", "cycling", "becomes", "dangerous"],
            correctAnswer: "If you don't wear a helmet, cycling becomes dangerous.",
            correctFeedback: "Great! 'If you don't wear a helmet, cycling becomes dangerous' - important safety reminder!",
            correctFeedbackRu: "Отлично! 'If you don't wear a helmet, cycling becomes dangerous' - важное напоминание о безопасности!",
            incorrectFeedback: "Try again. Remember: If you don't wear a helmet, cycling becomes dangerous.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you don't wear a helmet, cycling becomes dangerous."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "it", "snows", "flights", "get", "cancelled"],
            correctAnswer: "When it snows, flights get cancelled.",
            correctFeedback: "Excellent! 'When it snows, flights get cancelled' - weather impact on travel!",
            correctFeedbackRu: "Отлично! 'When it snows, flights get cancelled' - влияние погоды на путешествия!",
            incorrectFeedback: "Not right. The correct structure is: When it snows, flights get cancelled.",
            incorrectFeedbackRu: "Неправильно. Правильная структура: When it snows, flights get cancelled."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "speed", "on", "the", "highway", "police", "stop", "you"],
            correctAnswer: "If you speed on the highway, police stop you.",
            correctFeedback: "Perfect! 'If you speed on the highway, police stop you' - traffic law enforcement!",
            correctFeedbackRu: "Идеально! 'If you speed on the highway, police stop you' - соблюдение правил дорожного движения!",
            incorrectFeedback: "Try again. The correct order is: If you speed on the highway, police stop you.",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: If you speed on the highway, police stop you."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "walk", "instead", "of", "driving", "you", "get", "exercise"],
            correctAnswer: "When you walk instead of driving, you get exercise.",
            correctFeedback: "Great! 'When you walk instead of driving, you get exercise' - healthy transportation choice!",
            correctFeedbackRu: "Отлично! 'When you walk instead of driving, you get exercise' - здоровый выбор транспорта!",
            incorrectFeedback: "Not quite. Remember: When you walk instead of driving, you get exercise.",
            incorrectFeedbackRu: "Не совсем так. Помните: When you walk instead of driving, you get exercise."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "don't", "validate", "your", "ticket", "you", "get", "fined"],
            correctAnswer: "If you don't validate your ticket, you get fined.",
            correctFeedback: "Excellent! 'If you don't validate your ticket, you get fined' - public transport rules!",
            correctFeedbackRu: "Отлично! 'If you don't validate your ticket, you get fined' - правила общественного транспорта!",
            incorrectFeedback: "Try again. The structure is: If you don't validate your ticket, you get fined.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: If you don't validate your ticket, you get fined."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "use", "GPS", "I", "never", "get", "lost"],
            correctAnswer: "When I use GPS, I never get lost.",
            correctFeedback: "Perfect! 'When I use GPS, I never get lost' - modern navigation convenience!",
            correctFeedbackRu: "Идеально! 'When I use GPS, I never get lost' - удобство современной навигации!",
            incorrectFeedback: "Not right. The correct order is: When I use GPS, I never get lost.",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: When I use GPS, I never get lost."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "park", "illegally", "your", "car", "gets", "towed"],
            correctAnswer: "If you park illegally, your car gets towed.",
            correctFeedback: "Great! 'If you park illegally, your car gets towed' - parking enforcement reality!",
            correctFeedbackRu: "Отлично! 'If you park illegally, your car gets towed' - реальность контроля парковки!",
            incorrectFeedback: "Try again. Remember: If you park illegally, your car gets towed.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you park illegally, your car gets towed."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "travel", "by", "plane", "you", "arrive", "faster"],
            correctAnswer: "When you travel by plane, you arrive faster.",
            correctFeedback: "Excellent! 'When you travel by plane, you arrive faster' - efficiency of air travel!",
            correctFeedbackRu: "Отлично! 'When you travel by plane, you arrive faster' - эффективность авиаперелетов!",
            incorrectFeedback: "Not quite right. The structure is: When you travel by plane, you arrive faster.",
            incorrectFeedbackRu: "Не совсем правильно. Структура: When you travel by plane, you arrive faster."
        }
    ]
};

/* ============================================
Page 6: Zero Conditional - Family and Relationships
============================================ */
window.grammarExercises['conditionals']['zero-conditional-sentence-page6'] = {
    title: "Family and Relationships", sentenceBuilding: [
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "don't", "call", "your", "parents", "they", "worry", "about", "you"],
            correctAnswer: "If you don't call your parents, they worry about you.",
            correctFeedback: "Excellent! 'If you don't call your parents, they worry about you' - universal family truth!",
            correctFeedbackRu: "Отлично! 'If you don't call your parents, they worry about you' - универсальная семейная истина!",
            incorrectFeedback: "Try again. Remember: If you don't call your parents, they worry about you.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you don't call your parents, they worry about you."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "couples", "don't", "communicate", "relationships", "deteriorate"],
            correctAnswer: "When couples don't communicate, relationships deteriorate.",
            correctFeedback: "Perfect! 'When couples don't communicate, relationships deteriorate' - relationship psychology!",
            correctFeedbackRu: "Идеально! 'When couples don't communicate, relationships deteriorate' - психология отношений!",
            incorrectFeedback: "Not quite right. The correct order is: When couples don't communicate, relationships deteriorate.",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: When couples don't communicate, relationships deteriorate."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "spend", "quality", "time", "with", "kids", "they", "behave", "better"],
            correctAnswer: "If you spend quality time with kids, they behave better.",
            correctFeedback: "Great! 'If you spend quality time with kids, they behave better' - parenting wisdom!",
            correctFeedbackRu: "Отлично! 'If you spend quality time with kids, they behave better' - мудрость воспитания!",
            incorrectFeedback: "Try again. Remember: If you spend quality time with kids, they behave better.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you spend quality time with kids, they behave better."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "argue", "with", "my", "siblings", "mom", "gets", "upset"],
            correctAnswer: "When I argue with my siblings, mom gets upset.",
            correctFeedback: "Excellent! 'When I argue with my siblings, mom gets upset' - family dynamics reality!",
            correctFeedbackRu: "Отлично! 'When I argue with my siblings, mom gets upset' - реальность семейной динамики!",
            incorrectFeedback: "Not right. The correct structure is: When I argue with my siblings, mom gets upset.",
            incorrectFeedbackRu: "Неправильно. Правильная структура: When I argue with my siblings, mom gets upset."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "remember", "anniversaries", "your", "partner", "feels", "loved"],
            correctAnswer: "If you remember anniversaries, your partner feels loved.",
            correctFeedback: "Perfect! 'If you remember anniversaries, your partner feels loved' - relationship maintenance!",
            correctFeedbackRu: "Идеально! 'If you remember anniversaries, your partner feels loved' - поддержание отношений!",
            incorrectFeedback: "Try again. The correct order is: If you remember anniversaries, your partner feels loved.",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: If you remember anniversaries, your partner feels loved."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "grandparents", "visit", "children", "get", "spoiled"],
            correctAnswer: "When grandparents visit, children get spoiled.",
            correctFeedback: "Great! 'When grandparents visit, children get spoiled' - classic family pattern!",
            correctFeedbackRu: "Отлично! 'When grandparents visit, children get spoiled' - классическая семейная модель!",
            incorrectFeedback: "Not quite. Remember: When grandparents visit, children get spoiled.",
            incorrectFeedbackRu: "Не совсем так. Помните: When grandparents visit, children get spoiled."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "keep", "secrets", "from", "friends", "trust", "breaks", "down"],
            correctAnswer: "If you keep secrets from friends, trust breaks down.",
            correctFeedback: "Excellent! 'If you keep secrets from friends, trust breaks down' - friendship principle!",
            correctFeedbackRu: "Отлично! 'If you keep secrets from friends, trust breaks down' - принцип дружбы!",
            incorrectFeedback: "Try again. The structure is: If you keep secrets from friends, trust breaks down.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: If you keep secrets from friends, trust breaks down."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "live", "with", "roommates", "compromise", "becomes", "necessary"],
            correctAnswer: "When you live with roommates, compromise becomes necessary.",
            correctFeedback: "Perfect! 'When you live with roommates, compromise becomes necessary' - shared living reality!",
            correctFeedbackRu: "Идеально! 'When you live with roommates, compromise becomes necessary' - реальность совместного проживания!",
            incorrectFeedback: "Not right. The correct order is: When you live with roommates, compromise becomes necessary.",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: When you live with roommates, compromise becomes necessary."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "break", "promises", "people", "stop", "trusting", "you"],
            correctAnswer: "If you break promises, people stop trusting you.",
            correctFeedback: "Great! 'If you break promises, people stop trusting you' - integrity and relationships!",
            correctFeedbackRu: "Отлично! 'If you break promises, people stop trusting you' - честность и отношения!",
            incorrectFeedback: "Try again. Remember: If you break promises, people stop trusting you.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you break promises, people stop trusting you."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "families", "eat", "dinner", "together", "bonds", "strengthen"],
            correctAnswer: "When families eat dinner together, bonds strengthen.",
            correctFeedback: "Excellent! 'When families eat dinner together, bonds strengthen' - family bonding importance!",
            correctFeedbackRu: "Отлично! 'When families eat dinner together, bonds strengthen' - важность семейного сплочения!",
            incorrectFeedback: "Not quite right. The structure is: When families eat dinner together, bonds strengthen.",
            incorrectFeedbackRu: "Не совсем правильно. Структура: When families eat dinner together, bonds strengthen."
        }
    ]
};

/* ============================================
Page 7: Zero Conditional - Food and Cooking
============================================ */
window.grammarExercises['conditionals']['zero-conditional-sentence-page7'] = {
    title: "Food and Cooking", sentenceBuilding: [
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "overcook", "pasta", "it", "becomes", "mushy"],
            correctAnswer: "If you overcook pasta, it becomes mushy.",
            correctFeedback: "Excellent! 'If you overcook pasta, it becomes mushy' - classic cooking mistake!",
            correctFeedbackRu: "Отлично! 'If you overcook pasta, it becomes mushy' - классическая кулинарная ошибка!",
            incorrectFeedback: "Try again. Remember: If you overcook pasta, it becomes mushy.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you overcook pasta, it becomes mushy."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "cook", "without", "a", "recipe", "dishes", "turn", "out", "strange"],
            correctAnswer: "When I cook without a recipe, dishes turn out strange.",
            correctFeedback: "Perfect! 'When I cook without a recipe, dishes turn out strange' - cooking adventure reality!",
            correctFeedbackRu: "Идеально! 'When I cook without a recipe, dishes turn out strange' - реальность кулинарных приключений!",
            incorrectFeedback: "Not quite right. The correct order is: When I cook without a recipe, dishes turn out strange.",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: When I cook without a recipe, dishes turn out strange."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "leave", "bread", "out", "too", "long", "it", "gets", "stale"],
            correctAnswer: "If you leave bread out too long, it gets stale.",
            correctFeedback: "Great! 'If you leave bread out too long, it gets stale' - food storage basics!",
            correctFeedbackRu: "Отлично! 'If you leave bread out too long, it gets stale' - основы хранения продуктов!",
            incorrectFeedback: "Try again. Remember: If you leave bread out too long, it gets stale.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you leave bread out too long, it gets stale."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "add", "too", "much", "salt", "food", "becomes", "inedible"],
            correctAnswer: "When you add too much salt, food becomes inedible.",
            correctFeedback: "Excellent! 'When you add too much salt, food becomes inedible' - seasoning disaster!",
            correctFeedbackRu: "Отлично! 'When you add too much salt, food becomes inedible' - катастрофа с приправами!",
            incorrectFeedback: "Not right. The correct structure is: When you add too much salt, food becomes inedible.",
            incorrectFeedbackRu: "Неправильно. Правильная структура: When you add too much salt, food becomes inedible."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "don't", "preheat", "the", "oven", "baking", "fails"],
            correctAnswer: "If you don't preheat the oven, baking fails.",
            correctFeedback: "Perfect! 'If you don't preheat the oven, baking fails' - essential baking rule!",
            correctFeedbackRu: "Идеально! 'If you don't preheat the oven, baking fails' - основное правило выпечки!",
            incorrectFeedback: "Try again. The correct order is: If you don't preheat the oven, baking fails.",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: If you don't preheat the oven, baking fails."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "smell", "something", "burning", "I", "rush", "to", "the", "kitchen"],
            correctAnswer: "When I smell something burning, I rush to the kitchen.",
            correctFeedback: "Great! 'When I smell something burning, I rush to the kitchen' - kitchen emergency response!",
            correctFeedbackRu: "Отлично! 'When I smell something burning, I rush to the kitchen' - реакция на кухонную аварию!",
            incorrectFeedback: "Not quite. Remember: When I smell something burning, I rush to the kitchen.",
            incorrectFeedbackRu: "Не совсем так. Помните: When I smell something burning, I rush to the kitchen."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "eat", "spicy", "food", "your", "nose", "runs"],
            correctAnswer: "If you eat spicy food, your nose runs.",
            correctFeedback: "Excellent! 'If you eat spicy food, your nose runs' - universal spicy food reaction!",
            correctFeedbackRu: "Отлично! 'If you eat spicy food, your nose runs' - универсальная реакция на острую пищу!",
            incorrectFeedback: "Try again. The structure is: If you eat spicy food, your nose runs.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: If you eat spicy food, your nose runs."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "order", "takeout", "too", "often", "you", "gain", "weight"],
            correctAnswer: "When you order takeout too often, you gain weight.",
            correctFeedback: "Perfect! 'When you order takeout too often, you gain weight' - modern eating habits consequence!",
            correctFeedbackRu: "Идеально! 'When you order takeout too often, you gain weight' - последствие современных пищевых привычек!",
            incorrectFeedback: "Not right. The correct order is: When you order takeout too often, you gain weight.",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: When you order takeout too often, you gain weight."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "don't", "wash", "vegetables", "you", "risk", "getting", "sick"],
            correctAnswer: "If you don't wash vegetables, you risk getting sick.",
            correctFeedback: "Great! 'If you don't wash vegetables, you risk getting sick' - food safety principle!",
            correctFeedbackRu: "Отлично! 'If you don't wash vegetables, you risk getting sick' - принцип безопасности пищи!",
            incorrectFeedback: "Try again. Remember: If you don't wash vegetables, you risk getting sick.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you don't wash vegetables, you risk getting sick."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "cook", "at", "home", "you", "save", "money", "and", "eat", "healthier"],
            correctAnswer: "When you cook at home, you save money and eat healthier.",
            correctFeedback: "Excellent! 'When you cook at home, you save money and eat healthier' - home cooking benefits!",
            correctFeedbackRu: "Отлично! 'When you cook at home, you save money and eat healthier' - преимущества домашней готовки!",
            incorrectFeedback: "Not quite right. The structure is: When you cook at home, you save money and eat healthier.",
            incorrectFeedbackRu: "Не совсем правильно. Структура: When you cook at home, you save money and eat healthier."
        }
    ]
};

/* ============================================
Page 8: Zero Conditional - Weather and Seasons
============================================ */
window.grammarExercises['conditionals']['zero-conditional-sentence-page8'] = {
    title: "Weather and Seasons", sentenceBuilding: [
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "it", "rains", "heavily", "streets", "flood", "quickly"],
            correctAnswer: "If it rains heavily, streets flood quickly.",
            correctFeedback: "Excellent! 'If it rains heavily, streets flood quickly' - urban weather consequence!",
            correctFeedbackRu: "Отлично! 'If it rains heavily, streets flood quickly' - городское погодное последствие!",
            incorrectFeedback: "Try again. Remember: If it rains heavily, streets flood quickly.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If it rains heavily, streets flood quickly."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "winter", "arrives", "I", "get", "seasonal", "depression"],
            correctAnswer: "When winter arrives, I get seasonal depression.",
            correctFeedback: "Perfect! 'When winter arrives, I get seasonal depression' - seasonal affective disorder reality!",
            correctFeedbackRu: "Идеально! 'When winter arrives, I get seasonal depression' - реальность сезонного аффективного расстройства!",
            incorrectFeedback: "Not quite right. The correct order is: When winter arrives, I get seasonal depression.",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: When winter arrives, I get seasonal depression."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "the", "temperature", "drops", "suddenly", "people", "catch", "colds"],
            correctAnswer: "If the temperature drops suddenly, people catch colds.",
            correctFeedback: "Great! 'If the temperature drops suddenly, people catch colds' - weather and health connection!",
            correctFeedbackRu: "Отлично! 'If the temperature drops suddenly, people catch colds' - связь погоды и здоровья!",
            incorrectFeedback: "Try again. Remember: If the temperature drops suddenly, people catch colds.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If the temperature drops suddenly, people catch colds."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "it's", "sunny", "outside", "my", "mood", "improves"],
            correctAnswer: "When it's sunny outside, my mood improves.",
            correctFeedback: "Excellent! 'When it's sunny outside, my mood improves' - sunshine psychology effect!",
            correctFeedbackRu: "Отлично! 'When it's sunny outside, my mood improves' - психологический эффект солнечного света!",
            incorrectFeedback: "Not right. The correct structure is: When it's sunny outside, my mood improves.",
            incorrectFeedbackRu: "Неправильно. Правильная структура: When it's sunny outside, my mood improves."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "don't", "dress", "warmly", "you", "get", "hypothermia"],
            correctAnswer: "If you don't dress warmly, you get hypothermia.",
            correctFeedback: "Perfect! 'If you don't dress warmly, you get hypothermia' - winter safety warning!",
            correctFeedbackRu: "Идеально! 'If you don't dress warmly, you get hypothermia' - предупреждение о зимней безопасности!",
            incorrectFeedback: "Try again. The correct order is: If you don't dress warmly, you get hypothermia.",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: If you don't dress warmly, you get hypothermia."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "humidity", "is", "high", "hair", "gets", "frizzy"],
            correctAnswer: "When humidity is high, hair gets frizzy.",
            correctFeedback: "Great! 'When humidity is high, hair gets frizzy' - universal hair struggle!",
            correctFeedbackRu: "Отлично! 'When humidity is high, hair gets frizzy' - универсальная проблема с волосами!",
            incorrectFeedback: "Not quite. Remember: When humidity is high, hair gets frizzy.",
            incorrectFeedbackRu: "Не совсем так. Помните: When humidity is high, hair gets frizzy."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "there's", "a", "thunderstorm", "my", "dog", "hides", "under", "the", "bed"],
            correctAnswer: "If there's a thunderstorm, my dog hides under the bed.",
            correctFeedback: "Excellent! 'If there's a thunderstorm, my dog hides under the bed' - pet weather anxiety!",
            correctFeedbackRu: "Отлично! 'If there's a thunderstorm, my dog hides under the bed' - погодная тревожность у питомцев!",
            incorrectFeedback: "Try again. The structure is: If there's a thunderstorm, my dog hides under the bed.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: If there's a thunderstorm, my dog hides under the bed."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "spring", "comes", "people", "start", "exercising", "outdoors"],
            correctAnswer: "When spring comes, people start exercising outdoors.",
            correctFeedback: "Perfect! 'When spring comes, people start exercising outdoors' - seasonal fitness motivation!",
            correctFeedbackRu: "Идеально! 'When spring comes, people start exercising outdoors' - сезонная мотивация к фитнесу!",
            incorrectFeedback: "Not right. The correct order is: When spring comes, people start exercising outdoors.",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: When spring comes, people start exercising outdoors."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "it", "snows", "overnight", "schools", "get", "cancelled"],
            correctAnswer: "If it snows overnight, schools get cancelled.",
            correctFeedback: "Great! 'If it snows overnight, schools get cancelled' - snow day reality!",
            correctFeedbackRu: "Отлично! 'If it snows overnight, schools get cancelled' - реальность снежных дней!",
            incorrectFeedback: "Try again. Remember: If it snows overnight, schools get cancelled.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If it snows overnight, schools get cancelled."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "the", "weather", "gets", "hot", "ice", "cream", "sales", "increase"],
            correctAnswer: "When the weather gets hot, ice cream sales increase.",
            correctFeedback: "Excellent! 'When the weather gets hot, ice cream sales increase' - seasonal business pattern!",
            correctFeedbackRu: "Отлично! 'When the weather gets hot, ice cream sales increase' - сезонная бизнес-модель!",
            incorrectFeedback: "Not quite right. The structure is: When the weather gets hot, ice cream sales increase.",
            incorrectFeedbackRu: "Не совсем правильно. Структура: When the weather gets hot, ice cream sales increase."
        }
    ]
};

/* ============================================
Page 9: Zero Conditional - Entertainment and Leisure
============================================ */
window.grammarExercises['conditionals']['zero-conditional-sentence-page9'] = {
    title: "Entertainment and Leisure", sentenceBuilding: [
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "binge-watch", "TV", "shows", "you", "lose", "track", "of", "time"],
            correctAnswer: "If you binge-watch TV shows, you lose track of time.",
            correctFeedback: "Excellent! 'If you binge-watch TV shows, you lose track of time' - modern entertainment reality!",
            correctFeedbackRu: "Отлично! 'If you binge-watch TV shows, you lose track of time' - реальность современных развлечений!",
            incorrectFeedback: "Try again. Remember: If you binge-watch TV shows, you lose track of time.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you binge-watch TV shows, you lose track of time."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "play", "video", "games", "all", "night", "I", "feel", "exhausted"],
            correctAnswer: "When I play video games all night, I feel exhausted.",
            correctFeedback: "Perfect! 'When I play video games all night, I feel exhausted' - gaming consequence!",
            correctFeedbackRu: "Идеально! 'When I play video games all night, I feel exhausted' - последствие игр!",
            incorrectFeedback: "Not quite right. The correct order is: When I play video games all night, I feel exhausted.",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: When I play video games all night, I feel exhausted."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "go", "to", "concerts", "regularly", "your", "hearing", "suffers"],
            correctAnswer: "If you go to concerts regularly, your hearing suffers.",
            correctFeedback: "Great! 'If you go to concerts regularly, your hearing suffers' - loud music health warning!",
            correctFeedbackRu: "Отлично! 'If you go to concerts regularly, your hearing suffers' - предупреждение о здоровье от громкой музыки!",
            incorrectFeedback: "Try again. Remember: If you go to concerts regularly, your hearing suffers.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you go to concerts regularly, your hearing suffers."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "read", "books", "before", "bed", "you", "sleep", "better"],
            correctAnswer: "When you read books before bed, you sleep better.",
            correctFeedback: "Excellent! 'When you read books before bed, you sleep better' - healthy bedtime routine!",
            correctFeedbackRu: "Отлично! 'When you read books before bed, you sleep better' - здоровая вечерняя рутина!",
            incorrectFeedback: "Not right. The correct structure is: When you read books before bed, you sleep better.",
            incorrectFeedbackRu: "Неправильно. Правильная структура: When you read books before bed, you sleep better."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "scroll", "social", "media", "endlessly", "you", "feel", "depressed"],
            correctAnswer: "If you scroll social media endlessly, you feel depressed.",
            correctFeedback: "Perfect! 'If you scroll social media endlessly, you feel depressed' - digital wellness warning!",
            correctFeedbackRu: "Идеально! 'If you scroll social media endlessly, you feel depressed' - предупреждение о цифровом благополучии!",
            incorrectFeedback: "Try again. The correct order is: If you scroll social media endlessly, you feel depressed.",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: If you scroll social media endlessly, you feel depressed."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "exercise", "regularly", "endorphins", "make", "you", "happy"],
            correctAnswer: "When you exercise regularly, endorphins make you happy.",
            correctFeedback: "Great! 'When you exercise regularly, endorphins make you happy' - exercise science fact!",
            correctFeedbackRu: "Отлично! 'When you exercise regularly, endorphins make you happy' - научный факт об упражнениях!",
            incorrectFeedback: "Not quite. Remember: When you exercise regularly, endorphins make you happy.",
            incorrectFeedbackRu: "Не совсем так. Помните: When you exercise regularly, endorphins make you happy."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "attend", "live", "sports", "events", "the", "energy", "is", "contagious"],
            correctAnswer: "If you attend live sports events, the energy is contagious.",
            correctFeedback: "Excellent! 'If you attend live sports events, the energy is contagious' - crowd psychology!",
            correctFeedbackRu: "Отлично! 'If you attend live sports events, the energy is contagious' - психология толпы!",
            incorrectFeedback: "Try again. The structure is: If you attend live sports events, the energy is contagious.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: If you attend live sports events, the energy is contagious."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "watch", "horror", "movies", "alone", "every", "sound", "scares", "you"],
            correctAnswer: "When you watch horror movies alone, every sound scares you.",
            correctFeedback: "Perfect! 'When you watch horror movies alone, every sound scares you' - horror movie psychology!",
            correctFeedbackRu: "Идеально! 'When you watch horror movies alone, every sound scares you' - психология фильмов ужасов!",
            incorrectFeedback: "Not right. The correct order is: When you watch horror movies alone, every sound scares you.",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: When you watch horror movies alone, every sound scares you."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "learn", "a", "musical", "instrument", "your", "brain", "develops", "differently"],
            correctAnswer: "If you learn a musical instrument, your brain develops differently.",
            correctFeedback: "Great! 'If you learn a musical instrument, your brain develops differently' - neuroscience of music!",
            correctFeedbackRu: "Отлично! 'If you learn a musical instrument, your brain develops differently' - нейронаука музыки!",
            incorrectFeedback: "Try again. Remember: If you learn a musical instrument, your brain develops differently.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you learn a musical instrument, your brain develops differently."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "dance", "with", "others", "social", "bonds", "strengthen"],
            correctAnswer: "When you dance with others, social bonds strengthen.",
            correctFeedback: "Excellent! 'When you dance with others, social bonds strengthen' - dance as social connection!",
            correctFeedbackRu: "Отлично! 'When you dance with others, social bonds strengthen' - танец как социальная связь!",
            incorrectFeedback: "Not quite right. The structure is: When you dance with others, social bonds strengthen.",
            incorrectFeedbackRu: "Не совсем правильно. Структура: When you dance with others, social bonds strengthen."
        }
    ]
};

/* ============================================
Page 10: Zero Conditional - Study and Learning Habits
============================================ */
window.grammarExercises['conditionals']['zero-conditional-sentence-page10'] = {
    title: "Study and Learning Habits", sentenceBuilding: [
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "study", "without", "breaks", "your", "concentration", "decreases"],
            correctAnswer: "If you study without breaks, your concentration decreases.",
            correctFeedback: "Excellent! 'If you study without breaks, your concentration decreases' - learning psychology fact!",
            correctFeedbackRu: "Отлично! 'If you study without breaks, your concentration decreases' - факт психологии обучения!",
            incorrectFeedback: "Try again. Remember: If you study without breaks, your concentration decreases.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you study without breaks, your concentration decreases."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "I", "procrastinate", "on", "assignments", "stress", "levels", "increase"],
            correctAnswer: "When I procrastinate on assignments, stress levels increase.",
            correctFeedback: "Perfect! 'When I procrastinate on assignments, stress levels increase' - student reality!",
            correctFeedbackRu: "Идеально! 'When I procrastinate on assignments, stress levels increase' - реальность студента!",
            incorrectFeedback: "Not quite right. The correct order is: When I procrastinate on assignments, stress levels increase.",
            incorrectFeedbackRu: "Не совсем правильно. Правильный порядок: When I procrastinate on assignments, stress levels increase."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "review", "notes", "regularly", "information", "sticks", "better"],
            correctAnswer: "If you review notes regularly, information sticks better.",
            correctFeedback: "Great! 'If you review notes regularly, information sticks better' - memory retention principle!",
            correctFeedbackRu: "Отлично! 'If you review notes regularly, information sticks better' - принцип запоминания!",
            incorrectFeedback: "Try again. Remember: If you review notes regularly, information sticks better.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you review notes regularly, information sticks better."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "study", "in", "groups", "you", "learn", "from", "different", "perspectives"],
            correctAnswer: "When you study in groups, you learn from different perspectives.",
            correctFeedback: "Excellent! 'When you study in groups, you learn from different perspectives' - collaborative learning benefit!",
            correctFeedbackRu: "Отлично! 'When you study in groups, you learn from different perspectives' - преимущество совместного обучения!",
            incorrectFeedback: "Not right. The correct structure is: When you study in groups, you learn from different perspectives.",
            incorrectFeedbackRu: "Неправильно. Правильная структура: When you study in groups, you learn from different perspectives."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "cram", "the", "night", "before", "exams", "you", "forget", "everything"],
            correctAnswer: "If you cram the night before exams, you forget everything.",
            correctFeedback: "Perfect! 'If you cram the night before exams, you forget everything' - poor study strategy consequence!",
            correctFeedbackRu: "Идеально! 'If you cram the night before exams, you forget everything' - последствие плохой стратегии обучения!",
            incorrectFeedback: "Try again. The correct order is: If you cram the night before exams, you forget everything.",
            incorrectFeedbackRu: "Попробуйте снова. Правильный порядок: If you cram the night before exams, you forget everything."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "use", "flashcards", "memorization", "becomes", "easier"],
            correctAnswer: "When you use flashcards, memorization becomes easier.",
            correctFeedback: "Great! 'When you use flashcards, memorization becomes easier' - effective study tool!",
            correctFeedbackRu: "Отлично! 'When you use flashcards, memorization becomes easier' - эффективный учебный инструмент!",
            incorrectFeedback: "Not quite. Remember: When you use flashcards, memorization becomes easier.",
            incorrectFeedbackRu: "Не совсем так. Помните: When you use flashcards, memorization becomes easier."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "study", "while", "listening", "to", "music", "focus", "suffers"],
            correctAnswer: "If you study while listening to music, focus suffers.",
            correctFeedback: "Excellent! 'If you study while listening to music, focus suffers' - multitasking myth exposed!",
            correctFeedbackRu: "Отлично! 'If you study while listening to music, focus suffers' - разоблачение мифа о многозадачности!",
            incorrectFeedback: "Try again. The structure is: If you study while listening to music, focus suffers.",
            incorrectFeedbackRu: "Попробуйте снова. Структура: If you study while listening to music, focus suffers."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "explain", "concepts", "to", "others", "your", "understanding", "deepens"],
            correctAnswer: "When you explain concepts to others, your understanding deepens.",
            correctFeedback: "Perfect! 'When you explain concepts to others, your understanding deepens' - teaching effect!",
            correctFeedbackRu: "Идеально! 'When you explain concepts to others, your understanding deepens' - эффект обучения!",
            incorrectFeedback: "Not right. The correct order is: When you explain concepts to others, your understanding deepens.",
            incorrectFeedbackRu: "Неправильно. Правильный порядок: When you explain concepts to others, your understanding deepens."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["If", "you", "skip", "classes", "regularly", "grades", "drop", "significantly"],
            correctAnswer: "If you skip classes regularly, grades drop significantly.",
            correctFeedback: "Great! 'If you skip classes regularly, grades drop significantly' - academic attendance consequence!",
            correctFeedbackRu: "Отлично! 'If you skip classes regularly, grades drop significantly' - последствие пропуска занятий!",
            incorrectFeedback: "Try again. Remember: If you skip classes regularly, grades drop significantly.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If you skip classes regularly, grades drop significantly."
        },
        {
            question: "Form a correct Zero Conditional sentence using these words:",
            questionRu: "Составьте правильное условное предложение нулевого типа, используя эти слова:",
            words: ["When", "you", "create", "mind", "maps", "complex", "information", "becomes", "clearer"],
            correctAnswer: "When you create mind maps, complex information becomes clearer.",
            correctFeedback: "Excellent! 'When you create mind maps, complex information becomes clearer' - visual learning power! You've completed all 10 pages of Zero Conditional Sentence Building exercises!",
            correctFeedbackRu: "Отлично! 'When you create mind maps, complex information becomes clearer' - сила визуального обучения! Вы завершили все 10 страниц упражнений Sentence Building на Zero Conditional!",
            incorrectFeedback: "Not quite right. The structure is: When you create mind maps, complex information becomes clearer.",
            incorrectFeedbackRu: "Не совсем правильно. Структура: When you create mind maps, complex information becomes clearer."
        }
    ]
};

/* ============================================
Console log to confirm data loading
============================================ */
console.log("Zero Conditional Sentence Building exercises (Pages 1-10) loaded successfully!");
console.log("===== ALL ZERO CONDITIONAL SENTENCE BUILDING EXERCISES COMPLETED =====");
