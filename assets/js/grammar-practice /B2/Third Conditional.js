/* ============================================
Initialize Grammar Exercises Object Structure
============================================ */
if (!window.grammarExercises) {
    window.grammarExercises = {};
}
if (!window.grammarExercises.conditionals) {
    window.grammarExercises.conditionals = {};
}

/* =============================================================================== */
/* =========================Multiple Choice Exercises============================= */

/* ============================================
Page 1: Third Conditional - Career and Life Decisions / Regrets
============================================ */
window.grammarExercises['conditionals']['third-conditional-page1'] = {
    title: "Third Conditional - Career and Life Decisions",
    multipleChoice: [
        {
            question: "Choose the correct third conditional form:",
            questionRu: "Выберите правильную форму третьего условного предложения:",
            sentence: "If Sarah _____ harder in university, she _____ that promotion.",
            options: [
                "had studied / would have gotten",
                "studied / would get",
                "has studied / will get",
                "studies / gets"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Third conditional structure: If + past perfect (had studied), would have + past participle (gotten). This expresses an unreal past condition and its imaginary result.",
            correctFeedbackRu: "Правильно! Структура третьего условного: If + past perfect (had studied), would have + past participle (gotten). Это выражает нереальное прошлое условие и его воображаемый результат.",
            incorrectFeedback: "Remember: Third conditional uses 'If + had + past participle' for unreal past conditions and 'would have + past participle' for imaginary past results. Both parts refer to situations that didn't happen.",
            incorrectFeedbackRu: "Помните: Третье условное использует 'If + had + past participle' для нереальных прошлых условий и 'would have + past participle' для воображаемых прошлых результатов. Обе части относятся к ситуациям, которые не произошли."
        },
        {
            question: "Select the correct third conditional sentence:",
            questionRu: "Выберите правильное третье условное предложение:",
            sentence: "If Mark _____ that job offer, his life _____ completely different.",
            options: [
                "had accepted / would have been",
                "accepted / would be",
                "accepts / will be",
                "has accepted / would have been"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had accepted' (past perfect) + 'would have been' (conditional perfect) creates proper third conditional expressing regret about missed opportunities and their consequences.",
            correctFeedbackRu: "Отлично! 'Had accepted' (past perfect) + 'would have been' (conditional perfect) создает правильное третье условное, выражающее сожаление об упущенных возможностях и их последствиях.",
            incorrectFeedback: "Third conditional requires past perfect in the if-clause and conditional perfect in the main clause. Use 'had + past participle' and 'would have + past participle' for unreal past situations.",
            incorrectFeedbackRu: "Третье условное требует past perfect в if-части и conditional perfect в главной части. Используйте 'had + past participle' и 'would have + past participle' для нереальных прошлых ситуаций."
        },
        {
            question: "Complete the third conditional about education:",
            questionRu: "Дополните третье условное предложение об образовании:",
            sentence: "If Emma _____ to that expensive school, she _____ such huge student loans.",
            options: [
                "hadn't gone / wouldn't have had",
                "didn't go / wouldn't have",
                "hasn't gone / won't have",
                "doesn't go / won't have"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Negative third conditional: 'hadn't gone' (negative past perfect) + 'wouldn't have had' (negative conditional perfect) expresses how avoiding past actions would have prevented problems.",
            correctFeedbackRu: "Отлично! Отрицательное третье условное: 'hadn't gone' (отрицательный past perfect) + 'wouldn't have had' (отрицательный conditional perfect) выражает, как избежание прошлых действий предотвратило бы проблемы.",
            incorrectFeedback: "For negative third conditional, use 'hadn't + past participle' in the if-clause and 'wouldn't have + past participle' in the main clause to show avoided actions and prevented results.",
            incorrectFeedbackRu: "Для отрицательного третьего условного используйте 'hadn't + past participle' в if-части и 'wouldn't have + past participle' в главной части, чтобы показать избежанные действия и предотвращенные результаты."
        },
        {
            question: "Choose the correct form for past regret:",
            questionRu: "Выберите правильную форму для выражения сожаления о прошлом:",
            sentence: "If David _____ his own business, he _____ financially independent by now.",
            options: [
                "had started / would have become",
                "started / would become",
                "has started / will become",
                "starts / becomes"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had started' + conditional perfect 'would have become' correctly expresses how past entrepreneurial decisions would have led to different current financial status.",
            correctFeedbackRu: "Отлично! Past perfect 'had started' + conditional perfect 'would have become' правильно выражает, как прошлые предпринимательские решения привели бы к другому текущему финансовому статусу.",
            incorrectFeedback: "Third conditional structure: If + subject + had + past participle, subject + would have + past participle. Use this to express regret about past decisions and their imaginary consequences.",
            incorrectFeedbackRu: "Структура третьего условного: If + подлежащее + had + past participle, подлежащее + would have + past participle. Используйте это для выражения сожаления о прошлых решениях и их воображаемых последствиях."
        },
        {
            question: "Select the third conditional about relationships:",
            questionRu: "Выберите третье условное предложение о отношениях:",
            sentence: "If Jessica _____ more honest with her partner, they _____ apart.",
            options: [
                "had been / wouldn't have grown",
                "was / wouldn't grow",
                "is / won't grow",
                "has been / wouldn't have grown"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Had been' (past perfect of 'be') + 'wouldn't have grown' (negative conditional perfect) shows how past honesty would have prevented relationship problems.",
            correctFeedbackRu: "Правильно! 'Had been' (past perfect от 'be') + 'wouldn't have grown' (отрицательный conditional perfect) показывает, как прошлая честность предотвратила бы проблемы в отношениях.",
            incorrectFeedback: "Use past perfect of 'be' (had been) with negative conditional perfect (wouldn't have + past participle) to express how different past behavior would have prevented negative outcomes.",
            incorrectFeedbackRu: "Используйте past perfect от 'be' (had been) с отрицательным conditional perfect (wouldn't have + past participle), чтобы выразить, как другое прошлое поведение предотвратило бы негативные результаты."
        },
        {
            question: "Complete the sentence about travel decisions:",
            questionRu: "Дополните предложение о решениях по путешествиям:",
            sentence: "If Tom _____ that flight, he _____ his dream job interview.",
            options: [
                "hadn't missed / wouldn't have missed",
                "didn't miss / wouldn't miss",
                "hasn't missed / won't miss",
                "doesn't miss / won't miss"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Double negative structure: 'hadn't missed' + 'wouldn't have missed' shows how avoiding one past problem would have prevented another problem - a cause-and-effect chain in third conditional.",
            correctFeedbackRu: "Отлично! Двойная отрицательная структура: 'hadn't missed' + 'wouldn't have missed' показывает, как избежание одной прошлой проблемы предотвратило бы другую проблему - цепочка причин и следствий в третьем условном.",
            incorrectFeedback: "This double negative third conditional uses 'hadn't + past participle' and 'wouldn't have + past participle' to show how preventing one past event would have prevented another.",
            incorrectFeedbackRu: "Это двойное отрицательное третье условное использует 'hadn't + past participle' и 'wouldn't have + past participle', чтобы показать, как предотвращение одного прошлого события предотвратило бы другое."
        },
        {
            question: "Choose the correct third conditional about health:",
            questionRu: "Выберите правильное третье условное предложение о здоровье:",
            sentence: "If Michael _____ regular exercise, he _____ that heart attack.",
            options: [
                "had done / might not have had",
                "did / might not have",
                "does / might not have",
                "has done / might not have had"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Might not have had' with 'had done' expresses uncertain possibility in third conditional - we use 'might' instead of 'would' when the result isn't certain, just possible.",
            correctFeedbackRu: "Отлично! 'Might not have had' с 'had done' выражает неопределенную возможность в третьем условном - мы используем 'might' вместо 'would', когда результат не определен, а только возможен.",
            incorrectFeedback: "Use 'might have + past participle' instead of 'would have' in third conditional when expressing possibility rather than certainty about past hypothetical results.",
            incorrectFeedbackRu: "Используйте 'might have + past participle' вместо 'would have' в третьем условном, когда выражаете возможность, а не уверенность относительно прошлых гипотетических результатов."
        },
        {
            question: "Select the third conditional about family decisions:",
            questionRu: "Выберите третье условное предложение о семейных решениях:",
            sentence: "If Rachel _____ more time with her children, they _____ closer as a family.",
            options: [
                "had spent / would have been",
                "spent / would be",
                "spends / will be",
                "has spent / would have been"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had spent' + conditional perfect 'would have been' expresses how different past time allocation would have created stronger family relationships.",
            correctFeedbackRu: "Отлично! Past perfect 'had spent' + conditional perfect 'would have been' выражает, как другое прошлое распределение времени создало бы более крепкие семейные отношения.",
            incorrectFeedback: "Third conditional structure: past perfect 'had + past participle' for the condition and conditional perfect 'would have + past participle' for the imaginary family outcome.",
            incorrectFeedbackRu: "Структура третьего условного: past perfect 'had + past participle' для условия и conditional perfect 'would have + past participle' для воображаемого семейного результата."
        },
        {
            question: "Complete the sentence about financial decisions:",
            questionRu: "Дополните предложение о финансовых решениях:",
            sentence: "If Lisa _____ in that company ten years ago, she _____ a millionaire today.",
            options: [
                "had invested / would have become",
                "invested / would become",
                "invests / will become",
                "has invested / would have become"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Standard third conditional: 'had invested' (past perfect) + 'would have become' (conditional perfect) expresses how past investment decisions would have changed current financial status.",
            correctFeedbackRu: "Отлично! Стандартное третье условное: 'had invested' (past perfect) + 'would have become' (conditional perfect) выражает, как прошлые инвестиционные решения изменили бы текущий финансовый статус.",
            incorrectFeedback: "Use past perfect in the if-clause and conditional perfect in the main clause to express how past financial decisions would have affected present wealth.",
            incorrectFeedbackRu: "Используйте past perfect в if-части и conditional perfect в главной части, чтобы выразить, как прошлые финансовые решения повлияли бы на нынешнее богатство."
        },
        {
            question: "Choose the correct form about educational choices:",
            questionRu: "Выберите правильную форму о выборе образования:",
            sentence: "If Peter _____ abroad for university, he _____ so many international connections.",
            options: [
                "had studied / would have made",
                "studied / would make",
                "studies / will make",
                "has studied / would have made"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Past perfect 'had studied' + conditional perfect 'would have made' shows how different educational choices in the past would have created networking opportunities.",
            correctFeedbackRu: "Правильно! Past perfect 'had studied' + conditional perfect 'would have made' показывает, как другие образовательные выборы в прошлом создали бы возможности для налаживания связей.",
            incorrectFeedback: "Third conditional uses past perfect for unreal past educational decisions and conditional perfect for their imaginary professional networking results.",
            incorrectFeedbackRu: "Третье условное использует past perfect для нереальных прошлых образовательных решений и conditional perfect для их воображаемых результатов профессионального нетворкинга."
        }
    ]
};

/* ============================================
Page 2: Third Conditional - Missed Opportunities and What-if Scenarios  
============================================ */
window.grammarExercises['conditionals']['third-conditional-page2'] = {
    title: "Third Conditional - Missed Opportunities and What-if Scenarios",
    multipleChoice: [
        {
            question: "Choose the correct third conditional about creative pursuits:",
            questionRu: "Выберите правильное третье условное предложение о творческих занятиях:",
            sentence: "If Amy _____ painting lessons as a child, she _____ a professional artist.",
            options: [
                "had taken / could have become",
                "took / could become",
                "takes / can become",
                "has taken / could have become"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Could have become' with 'had taken' expresses possibility in third conditional - childhood lessons might have led to artistic career, but we're not certain.",
            correctFeedbackRu: "Отлично! 'Could have become' с 'had taken' выражает возможность в третьем условном - детские уроки могли привести к художественной карьере, но мы не уверены.",
            incorrectFeedback: "Use 'could have + past participle' instead of 'would have' when expressing possibility rather than certainty in third conditional statements about potential outcomes.",
            incorrectFeedbackRu: "Используйте 'could have + past participle' вместо 'would have', когда выражаете возможность, а не уверенность в третьих условных предложениях о потенциальных результатах."
        },
        {
            question: "Select the third conditional about technology choices:",
            questionRu: "Выберите третье условное предложение о технологических решениях:",
            sentence: "If our company _____ in digital transformation earlier, we _____ behind our competitors.",
            options: [
                "had invested / wouldn't have fallen",
                "invested / wouldn't fall",
                "invests / won't fall",
                "has invested / wouldn't have fallen"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Negative conditional perfect 'wouldn't have fallen' with past perfect 'had invested' shows how past business decisions would have prevented current competitive disadvantages.",
            correctFeedbackRu: "Отлично! Отрицательный conditional perfect 'wouldn't have fallen' с past perfect 'had invested' показывает, как прошлые бизнес-решения предотвратили бы текущие конкурентные недостатки.",
            incorrectFeedback: "Third conditional with negative result: past perfect 'had + past participle' + negative conditional perfect 'wouldn't have + past participle' for prevented business outcomes.",
            incorrectFeedbackRu: "Третье условное с отрицательным результатом: past perfect 'had + past participle' + отрицательный conditional perfect 'wouldn't have + past participle' для предотвращенных бизнес-результатов."
        },
        {
            question: "Complete the third conditional about social situations:",
            questionRu: "Дополните третье условное предложение о социальных ситуациях:",
            sentence: "If Jake _____ his fear of public speaking, he _____ that leadership position.",
            options: [
                "had overcome / would have gotten",
                "overcame / would get",
                "overcomes / will get",
                "has overcome / would have gotten"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had overcome' + conditional perfect 'would have gotten' expresses how conquering past personal limitations would have led to career advancement.",
            correctFeedbackRu: "Отлично! Past perfect 'had overcome' + conditional perfect 'would have gotten' выражает, как преодоление прошлых личных ограничений привело бы к карьерному росту.",
            incorrectFeedback: "Use past perfect for overcoming personal challenges and conditional perfect for the career opportunities that would have resulted in third conditional structure.",
            incorrectFeedbackRu: "Используйте past perfect для преодоления личных вызовов и conditional perfect для карьерных возможностей, которые получились бы в структуре третьего условного."
        },
        {
            question: "Choose the third conditional about environmental impact:",
            questionRu: "Выберите третье условное предложение о воздействии на окружающую среду:",
            sentence: "If governments _____ climate change seriously 30 years ago, we _____ in this crisis.",
            options: [
                "had taken / wouldn't be",
                "took / wouldn't be",
                "take / won't be",
                "have taken / wouldn't be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Mixed conditional: past perfect 'had taken' + present conditional 'wouldn't be' shows how past governmental action would affect current environmental situation.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had taken' + present conditional 'wouldn't be' показывает, как прошлые правительственные действия повлияли бы на текущую экологическую ситуацию.",
            incorrectFeedback: "This is mixed conditional (third + second): past perfect for unreal past condition + present conditional for current result. Use when past actions would affect present situation.",
            incorrectFeedbackRu: "Это смешанное условное (третье + второе): past perfect для нереального прошлого условия + present conditional для текущего результата. Используйте, когда прошлые действия повлияли бы на настоящую ситуацию."
        },
        {
            question: "Select the correct form about learning opportunities:",
            questionRu: "Выберите правильную форму о возможностях обучения:",
            sentence: "If Maria _____ that scholarship, she _____ her doctorate at Harvard.",
            options: [
                "had received / would have completed",
                "received / would complete",
                "receives / will complete",
                "has received / would have completed"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Standard third conditional: 'had received' (past perfect) + 'would have completed' (conditional perfect) expresses how past financial support would have enabled educational achievement.",
            correctFeedbackRu: "Отлично! Стандартное третье условное: 'had received' (past perfect) + 'would have completed' (conditional perfect) выражает, как прошлая финансовая поддержка обеспечила бы образовательные достижения.",
            incorrectFeedback: "Third conditional structure: past perfect for receiving past financial aid and conditional perfect for completing educational goals that would have been possible.",
            incorrectFeedbackRu: "Структура третьего условного: past perfect для получения прошлой финансовой помощи и conditional perfect для завершения образовательных целей, которые были бы возможны."
        },
        {
            question: "Complete the sentence about timing and luck:",
            questionRu: "Дополните предложение о времени и удаче:",
            sentence: "If Robert _____ five minutes earlier, he _____ the CEO in the elevator.",
            options: [
                "had arrived / would have met",
                "arrived / would meet",
                "arrives / will meet",
                "has arrived / would have met"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had arrived' + conditional perfect 'would have met' shows how small timing differences in the past would have created networking opportunities.",
            correctFeedbackRu: "Отлично! Past perfect 'had arrived' + conditional perfect 'would have met' показывает, как небольшие различия во времени в прошлом создали бы возможности для налаживания связей.",
            incorrectFeedback: "Use past perfect for precise timing in the past and conditional perfect for the meeting opportunity that would have resulted from better timing.",
            incorrectFeedbackRu: "Используйте past perfect для точного времени в прошлом и conditional perfect для возможности встречи, которая получилась бы от лучшего тайминга."
        },
        {
            question: "Choose the third conditional about cultural experiences:",
            questionRu: "Выберите третье условное предложение о культурных переживаниях:",
            sentence: "If Elena _____ to study abroad in Japan, she _____ fluent in Japanese.",
            options: [
                "had gone / would have become",
                "went / would become",
                "goes / will become",
                "has gone / would have become"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Past perfect 'had gone' + conditional perfect 'would have become' expresses how past study abroad decisions would have resulted in language fluency.",
            correctFeedbackRu: "Правильно! Past perfect 'had gone' + conditional perfect 'would have become' выражает, как прошлые решения об учебе за границей привели бы к владению языком.",
            incorrectFeedback: "Third conditional for cultural immersion: past perfect for study abroad decisions and conditional perfect for language skills that would have developed.",
            incorrectFeedbackRu: "Третье условное для культурного погружения: past perfect для решений об учебе за границей и conditional perfect для языковых навыков, которые развились бы."
        },
        {
            question: "Select the correct form about personal relationships:",
            questionRu: "Выберите правильную форму о личных отношениях:",
            sentence: "If Alex _____ his pride and apologized, he _____ his best friend.",
            options: [
                "had swallowed / wouldn't have lost",
                "swallowed / wouldn't lose",
                "swallows / won't lose",
                "has swallowed / wouldn't have lost"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had swallowed' + negative conditional perfect 'wouldn't have lost' shows how past humility would have preserved important relationships.",
            correctFeedbackRu: "Отлично! Past perfect 'had swallowed' + отрицательный conditional perfect 'wouldn't have lost' показывает, как прошлая скромность сохранила бы важные отношения.",
            incorrectFeedback: "Use past perfect for swallowing pride and negative conditional perfect 'wouldn't have + past participle' for the friendship that would have been preserved.",
            incorrectFeedbackRu: "Используйте past perfect для проглатывания гордости и отрицательный conditional perfect 'wouldn't have + past participle' для дружбы, которая была бы сохранена."
        },
        {
            question: "Complete the third conditional about health choices:",
            questionRu: "Дополните третье условное предложение о выборе здоровья:",
            sentence: "If Sophie _____ smoking years ago, her lungs _____ in much better condition.",
            options: [
                "had quit / would be",
                "quit / would be",
                "quits / will be",
                "has quit / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Mixed conditional: past perfect 'had quit' + present conditional 'would be' connects past health decisions to current physical condition.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had quit' + present conditional 'would be' связывает прошлые решения о здоровье с текущим физическим состоянием.",
            incorrectFeedback: "This mixed conditional uses past perfect for past health decisions and present conditional for current health status that would exist now.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для прошлых решений о здоровье и present conditional для текущего состояния здоровья, которое существовало бы сейчас."
        },
        {
            question: "Choose the correct form about missed business opportunities:",
            questionRu: "Выберите правильную форму об упущенных деловых возможностях:",
            sentence: "If the startup founders _____ that investor's offer, they _____ bankrupt six months later.",
            options: [
                "had accepted / wouldn't have gone",
                "accepted / wouldn't go",
                "accept / won't go",
                "have accepted / wouldn't have gone"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had accepted' + negative conditional perfect 'wouldn't have gone' shows how accepting past financial help would have prevented business failure.",
            correctFeedbackRu: "Отлично! Past perfect 'had accepted' + отрицательный conditional perfect 'wouldn't have gone' показывает, как принятие прошлой финансовой помощи предотвратило бы провал бизнеса.",
            incorrectFeedback: "Third conditional with 'go bankrupt': past perfect for accepting investment offers and negative conditional perfect for avoiding business failure.",
            incorrectFeedbackRu: "Третье условное с 'go bankrupt': past perfect для принятия инвестиционных предложений и отрицательный conditional perfect для избежания провала бизнеса."
        }
    ]
};

/* ============================================
Page 3: Third Conditional - Historical Events and Alternative Realities
============================================ */
window.grammarExercises['conditionals']['third-conditional-page3'] = {
    title: "Third Conditional - Historical Events and Alternative Realities",
    multipleChoice: [
        {
            question: "Choose the correct third conditional about historical decisions:",
            questionRu: "Выберите правильное третье условное предложение об исторических решениях:",
            sentence: "If the city council _____ that beautiful old theater, downtown _____ its cultural heart.",
            options: [
                "hadn't demolished / would still have",
                "didn't demolish / would still have",
                "doesn't demolish / will still have",
                "hasn't demolished / would still have"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: negative past perfect 'hadn't demolished' + present conditional 'would still have' connects past preservation decisions to current cultural status.",
            correctFeedbackRu: "Отлично! Смешанное условное: отрицательный past perfect 'hadn't demolished' + present conditional 'would still have' связывает прошлые решения о сохранении с текущим культурным статусом.",
            incorrectFeedback: "This mixed conditional uses negative past perfect 'hadn't + past participle' for avoided demolition and present conditional for current cultural preservation.",
            incorrectFeedbackRu: "Это смешанное условное использует отрицательный past perfect 'hadn't + past participle' для избежанного сноса и present conditional для текущего культурного сохранения."
        },
        {
            question: "Select the third conditional about scientific discoveries:",
            questionRu: "Выберите третье условное предложение о научных открытиях:",
            sentence: "If Dr. Martinez _____ her research funding, she _____ that breakthrough in cancer treatment.",
            options: [
                "hadn't lost / might have achieved",
                "didn't lose / might achieve",
                "doesn't lose / might achieve",
                "hasn't lost / might have achieved"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Might have achieved' with negative past perfect 'hadn't lost' expresses uncertain possibility - continued funding could have led to discovery, but success wasn't guaranteed.",
            correctFeedbackRu: "Отлично! 'Might have achieved' с отрицательным past perfect 'hadn't lost' выражает неопределенную возможность - продолженное финансирование могло привести к открытию, но успех не был гарантирован.",
            incorrectFeedback: "Use 'might have + past participle' instead of 'would have' when the scientific result was possible but not certain, even with continued funding.",
            incorrectFeedbackRu: "Используйте 'might have + past participle' вместо 'would have', когда научный результат был возможен, но не определен, даже с продолженным финансированием."
        },
        {
            question: "Complete the third conditional about transportation planning:",
            questionRu: "Дополните третье условное предложение о планировании транспорта:",
            sentence: "If the city _____ the subway system 20 years ago, traffic _____ such a nightmare today.",
            options: [
                "had built / wouldn't be",
                "built / wouldn't be",
                "builds / won't be",
                "has built / wouldn't be"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Mixed conditional: past perfect 'had built' + present conditional 'wouldn't be' shows how past infrastructure decisions would affect current transportation problems.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had built' + present conditional 'wouldn't be' показывает, как прошлые решения по инфраструктуре повлияли бы на текущие транспортные проблемы.",
            incorrectFeedback: "This mixed conditional uses past perfect for infrastructure construction and present conditional for current traffic conditions that would exist now.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для строительства инфраструктуры и present conditional для текущих дорожных условий, которые существовали бы сейчас."
        },
        {
            question: "Choose the correct form about educational policy:",
            questionRu: "Выберите правильную форму о образовательной политике:",
            sentence: "If the school district _____ arts programs, students _____ more creative and well-rounded.",
            options: [
                "hadn't cut / would have become",
                "didn't cut / would become",
                "doesn't cut / will become",
                "hasn't cut / would have become"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Negative past perfect 'hadn't cut' + conditional perfect 'would have become' expresses how avoiding past educational cuts would have produced better student development.",
            correctFeedbackRu: "Отлично! Отрицательный past perfect 'hadn't cut' + conditional perfect 'would have become' выражает, как избежание прошлых образовательных сокращений привело бы к лучшему развитию студентов.",
            incorrectFeedback: "Third conditional with educational policy: negative past perfect 'hadn't + past participle' for avoided cuts and conditional perfect for student outcomes that would have resulted.",
            incorrectFeedbackRu: "Третье условное с образовательной политикой: отрицательный past perfect 'hadn't + past participle' для избежанных сокращений и conditional perfect для результатов студентов, которые получились бы."
        },
        {
            question: "Select the third conditional about environmental conservation:",
            questionRu: "Выберите третье условное предложение об охране окружающей среды:",
            sentence: "If the community _____ that old forest, the rare birds _____ extinct in this region.",
            options: [
                "had protected / wouldn't have become",
                "protected / wouldn't become",
                "protects / won't become",
                "has protected / wouldn't have become"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had protected' + negative conditional perfect 'wouldn't have become' shows how past environmental action would have prevented species extinction.",
            correctFeedbackRu: "Отлично! Past perfect 'had protected' + отрицательный conditional perfect 'wouldn't have become' показывает, как прошлые экологические действия предотвратили бы вымирание видов.",
            incorrectFeedback: "Use past perfect for environmental protection actions and negative conditional perfect 'wouldn't have + past participle' for extinction that would have been prevented.",
            incorrectFeedbackRu: "Используйте past perfect для действий по защите окружающей среды и отрицательный conditional perfect 'wouldn't have + past participle' для вымирания, которое было бы предотвращено."
        },
        {
            question: "Complete the sentence about social movements:",
            questionRu: "Дополните предложение о социальных движениях:",
            sentence: "If more people _____ that peaceful protest, the government _____ attention to their concerns.",
            options: [
                "had joined / would have paid",
                "joined / would pay",
                "join / will pay",
                "have joined / would have paid"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had joined' + conditional perfect 'would have paid' expresses how greater past participation would have forced governmental response to social issues.",
            correctFeedbackRu: "Отлично! Past perfect 'had joined' + conditional perfect 'would have paid' выражает, как большее прошлое участие заставило бы правительственный ответ на социальные вопросы.",
            incorrectFeedback: "Third conditional for social action: past perfect for protest participation and conditional perfect for governmental attention that would have resulted.",
            incorrectFeedbackRu: "Третье условное для социального действия: past perfect для участия в протестах и conditional perfect для правительственного внимания, которое получилось бы."
        },
        {
            question: "Choose the third conditional about technological adoption:",
            questionRu: "Выберите третье условное предложение о принятии технологий:",
            sentence: "If the hospital _____ electronic records earlier, they _____ those patient files in the fire.",
            options: [
                "had implemented / wouldn't have lost",
                "implemented / wouldn't lose",
                "implements / won't lose",
                "has implemented / wouldn't have lost"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had implemented' + negative conditional perfect 'wouldn't have lost' shows how earlier technology adoption would have prevented data loss.",
            correctFeedbackRu: "Отлично! Past perfect 'had implemented' + отрицательный conditional perfect 'wouldn't have lost' показывает, как более раннее внедрение технологий предотвратило бы потерю данных.",
            incorrectFeedback: "Use past perfect for technology implementation and negative conditional perfect 'wouldn't have + past participle' for data loss that would have been avoided.",
            incorrectFeedbackRu: "Используйте past perfect для внедрения технологий и отрицательный conditional perfect 'wouldn't have + past participle' для потери данных, которой избежали бы."
        },
        {
            question: "Select the correct form about cultural preservation:",
            questionRu: "Выберите правильную форму о сохранении культуры:",
            sentence: "If the indigenous community _____ their language classes, the dialect _____ completely.",
            options: [
                "had continued / wouldn't have disappeared",
                "continued / wouldn't disappear",
                "continues / won't disappear",
                "has continued / wouldn't have disappeared"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had continued' + negative conditional perfect 'wouldn't have disappeared' expresses how sustained cultural education would have preserved linguistic heritage.",
            correctFeedbackRu: "Отлично! Past perfect 'had continued' + отрицательный conditional perfect 'wouldn't have disappeared' выражает, как устойчивое культурное образование сохранило бы лингвистическое наследие.",
            incorrectFeedback: "Third conditional for cultural preservation: past perfect for continuing education and negative conditional perfect for language loss that would have been prevented.",
            incorrectFeedbackRu: "Третье условное для сохранения культуры: past perfect для продолжения образования и отрицательный conditional perfect для потери языка, которая была бы предотвращена."
        },
        {
            question: "Complete the third conditional about urban planning:",
            questionRu: "Дополните третье условное предложение о городском планировании:",
            sentence: "If the architects _____ earthquake safety standards, the building _____ during the tremor.",
            options: [
                "had followed / wouldn't have collapsed",
                "followed / wouldn't collapse",
                "follow / won't collapse",
                "have followed / wouldn't have collapsed"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had followed' + negative conditional perfect 'wouldn't have collapsed' shows how proper past construction standards would have prevented structural failure.",
            correctFeedbackRu: "Отлично! Past perfect 'had followed' + отрицательный conditional perfect 'wouldn't have collapsed' показывает, как правильные прошлые строительные стандарты предотвратили бы структурный провал.",
            incorrectFeedback: "Use past perfect for following safety standards and negative conditional perfect 'wouldn't have + past participle' for building collapse that would have been avoided.",
            incorrectFeedbackRu: "Используйте past perfect для соблюдения стандартов безопасности и отрицательный conditional perfect 'wouldn't have + past participle' для обрушения здания, которого избежали бы."
        },
        {
            question: "Choose the final third conditional about personal legacy:",
            questionRu: "Выберите финальное третье условное предложение о личном наследии:",
            sentence: "If the famous writer _____ his autobiography, future generations _____ his incredible life story.",
            options: [
                "had written / would have known",
                "wrote / would know",
                "writes / will know",
                "has written / would have known"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had written' + conditional perfect 'would have known' expresses how past documentation would have preserved knowledge for future generations.",
            correctFeedbackRu: "Отлично! Past perfect 'had written' + conditional perfect 'would have known' выражает, как прошлая документация сохранила бы знания для будущих поколений.",
            incorrectFeedback: "Third conditional for legacy: past perfect for writing autobiography and conditional perfect for knowledge that future generations would have possessed.",
            incorrectFeedbackRu: "Третье условное для наследия: past perfect для написания автобиографии и conditional perfect для знаний, которыми будущие поколения обладали бы."
        }
    ]
};

/* ============================================
Page 4: Third Conditional - Professional and Academic Achievements
============================================ */
window.grammarExercises['conditionals']['third-conditional-page4'] = {
    title: "Third Conditional - Professional and Academic Achievements",
    multipleChoice: [
        {
            question: "Choose the correct third conditional form:",
            questionRu: "Выберите правильную форму третьего условного предложения:",
            sentence: "If the research team _____ more funding, they _____ the project on time.",
            options: [
                "had secured / would have completed",
                "secured / would complete",
                "secures / will complete",
                "has secured / would complete"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Third conditional structure: If + past perfect (had secured), would have + past participle (completed). This expresses an unreal past situation and its imaginary result.",
            correctFeedbackRu: "Правильно! Структура третьего условного: If + past perfect (had secured), would have + past participle (completed). Это выражает нереальную прошлую ситуацию и её воображаемый результат.",
            incorrectFeedback: "Remember: Third conditional uses 'If + had + past participle' in the condition clause and 'would have + past participle' in the result clause. Both parts refer to unreal past situations.",
            incorrectFeedbackRu: "Помните: Третье условное использует 'If + had + past participle' в условной части и 'would have + past participle' в результативной части. Обе части относятся к нереальным прошлым ситуациям."
        },
        {
            question: "Select the correct third conditional sentence:",
            questionRu: "Выберите правильное третье условное предложение:",
            sentence: "If the company _____ digital marketing earlier, sales _____ by 40% last year.",
            options: [
                "had adopted / would have increased",
                "adopted / would increase",
                "adopts / will increase",
                "has adopted / would have increased"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had adopted' (past perfect) + 'would have increased' (conditional perfect) creates a proper third conditional expressing regret about past business decisions.",
            correctFeedbackRu: "Отлично! 'Had adopted' (past perfect) + 'would have increased' (conditional perfect) создает правильное третье условное, выражающее сожаление о прошлых бизнес-решениях.",
            incorrectFeedback: "Third conditional requires past perfect in the 'if' clause and 'would have + past participle' in the main clause to show unreal past situations and their hypothetical consequences.",
            incorrectFeedbackRu: "Третье условное требует past perfect в части 'if' и 'would have + past participle' в главной части, чтобы показать нереальные прошлые ситуации и их гипотетические последствия."
        },
        {
            question: "Complete the third conditional about innovation:",
            questionRu: "Дополните третье условное предложение об инновациях:",
            sentence: "If the engineers _____ that design flaw, the product _____ such poor reviews.",
            options: [
                "had detected / wouldn't have received",
                "detected / wouldn't receive",
                "detect / won't receive",
                "have detected / wouldn't have received"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! The negative form 'wouldn't have received' with past perfect 'had detected' correctly shows how fixing past problems would have prevented negative outcomes.",
            correctFeedbackRu: "Отлично! Отрицательная форма 'wouldn't have received' с past perfect 'had detected' правильно показывает, как исправление прошлых проблем предотвратило бы негативные результаты.",
            incorrectFeedback: "In third conditional negatives, use 'wouldn't have + past participle' in the result clause with 'if + had + past participle' in the condition clause.",
            incorrectFeedbackRu: "В отрицательных третьих условных используйте 'wouldn't have + past participle' в результативной части с 'if + had + past participle' в условной части."
        },
        {
            question: "Choose the correct form about academic performance:",
            questionRu: "Выберите правильную форму об академической успеваемости:",
            sentence: "If the student _____ the assignment deadline, she _____ her scholarship.",
            options: [
                "had met / wouldn't have lost",
                "met / wouldn't lose",
                "meets / won't lose",
                "has met / wouldn't lose"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Past perfect 'had met' + conditional perfect negative 'wouldn't have lost' expresses regret about missing deadlines and losing opportunities.",
            correctFeedbackRu: "Правильно! Past perfect 'had met' + отрицательный conditional perfect 'wouldn't have lost' выражает сожаление о пропуске дедлайнов и потере возможностей.",
            incorrectFeedback: "Third conditional structure: If + subject + had + past participle, subject + wouldn't have + past participle. Both parts refer to completed unreal past events.",
            incorrectFeedbackRu: "Структура третьего условного: If + подлежащее + had + past participle, подлежащее + wouldn't have + past participle. Обе части относятся к завершенным нереальным прошлым событиям."
        },
        {
            question: "Select the third conditional about teamwork:",
            questionRu: "Выберите третье условное предложение о командной работе:",
            sentence: "If the manager _____ better communication skills, the team _____ more efficiently.",
            options: [
                "had developed / would have worked",
                "developed / would work",
                "develops / will work",
                "has developed / would work"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! This shows how past personal development (had developed) would have led to different team outcomes (would have worked) - classic third conditional usage.",
            correctFeedbackRu: "Отлично! Это показывает, как прошлое личное развитие (had developed) привело бы к другим командным результатам (would have worked) - классическое использование третьего условного.",
            incorrectFeedback: "Use 'had + past participle' for the condition and 'would have + past participle' for the result when discussing unreal past situations and their consequences.",
            incorrectFeedbackRu: "Используйте 'had + past participle' для условия и 'would have + past participle' для результата при обсуждении нереальных прошлых ситуаций и их последствий."
        },
        {
            question: "Complete the sentence about training opportunities:",
            questionRu: "Дополните предложение о возможностях обучения:",
            sentence: "If the employees _____ proper training, the accident _____ happened.",
            options: [
                "had received / wouldn't have",
                "received / wouldn't have",
                "receive / won't have",
                "have received / wouldn't"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had received' (past perfect) + 'wouldn't have happened' (conditional perfect) correctly expresses how past training could have prevented accidents.",
            correctFeedbackRu: "Отлично! 'Had received' (past perfect) + 'wouldn't have happened' (conditional perfect) правильно выражает, как прошлое обучение могло предотвратить несчастные случаи.",
            incorrectFeedback: "Third conditional uses past perfect in the if-clause and conditional perfect (would/wouldn't have + past participle) in the main clause for unreal past situations.",
            incorrectFeedbackRu: "Третье условное использует past perfect в if-части и conditional perfect (would/wouldn't have + past participle) в главной части для нереальных прошлых ситуаций."
        },
        {
            question: "Choose the third conditional about networking:",
            questionRu: "Выберите третье условное предложение о налаживании связей:",
            sentence: "If the graduate _____ to industry conferences, he _____ valuable professional contacts.",
            options: [
                "had gone / would have made",
                "went / would make",
                "goes / will make",
                "has gone / would make"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! The structure shows how past actions (had gone) would have created different professional outcomes (would have made) - expressing missed networking opportunities.",
            correctFeedbackRu: "Правильно! Структура показывает, как прошлые действия (had gone) создали бы другие профессиональные результаты (would have made) - выражение упущенных возможностей налаживания связей.",
            incorrectFeedback: "For third conditional, combine past perfect (had + past participle) in the if-clause with conditional perfect (would have + past participle) in the result clause.",
            incorrectFeedbackRu: "Для третьего условного соедините past perfect (had + past participle) в if-части с conditional perfect (would have + past participle) в результативной части."
        },
        {
            question: "Select the correct form about strategic planning:",
            questionRu: "Выберите правильную форму о стратегическом планировании:",
            sentence: "If the board _____ a long-term strategy, the company _____ bankruptcy.",
            options: [
                "had implemented / could have avoided",
                "implemented / could avoid",
                "implements / can avoid",
                "has implemented / could avoid"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Could have avoided' with 'had implemented' shows possibility in third conditional - the strategy might have prevented bankruptcy but we're not certain.",
            correctFeedbackRu: "Отлично! 'Could have avoided' с 'had implemented' показывает возможность в третьем условном - стратегия могла предотвратить банкротство, но мы не уверены.",
            incorrectFeedback: "Use 'could have + past participle' instead of 'would have' when expressing possibility rather than certainty in third conditional statements.",
            incorrectFeedbackRu: "Используйте 'could have + past participle' вместо 'would have', когда выражаете возможность, а не уверенность в третьих условных предложениях."
        },
        {
            question: "Complete the third conditional about quality control:",
            questionRu: "Дополните третье условное предложение о контроле качества:",
            sentence: "If the factory _____ stricter quality checks, customers _____ so many complaints.",
            options: [
                "had implemented / wouldn't have made",
                "implemented / wouldn't make",
                "implements / won't make",
                "has implemented / wouldn't make"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! This third conditional structure expresses how past quality control measures (had implemented) would have prevented customer complaints (wouldn't have made).",
            correctFeedbackRu: "Отлично! Эта структура третьего условного выражает, как прошлые меры контроля качества (had implemented) предотвратили бы жалобы клиентов (wouldn't have made).",
            incorrectFeedback: "Third conditional requires past perfect 'had + past participle' for the condition and 'would/wouldn't have + past participle' for the hypothetical result.",
            incorrectFeedbackRu: "Третье условное требует past perfect 'had + past participle' для условия и 'would/wouldn't have + past participle' для гипотетического результата."
        },
        {
            question: "Choose the final form about professional development:",
            questionRu: "Выберите финальную форму о профессиональном развитии:",
            sentence: "If the consultant _____ industry trends, her recommendations _____ more effective.",
            options: [
                "had analyzed / would have been",
                "analyzed / would be",
                "analyzes / will be",
                "has analyzed / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had analyzed' + conditional perfect 'would have been' creates proper third conditional expressing how past research would have improved professional advice quality.",
            correctFeedbackRu: "Отлично! Past perfect 'had analyzed' + conditional perfect 'would have been' создает правильное третье условное, выражающее, как прошлые исследования улучшили бы качество профессиональных советов.",
            incorrectFeedback: "In third conditional, use past perfect for the condition and conditional perfect for the result to express unreal past situations and their imaginary consequences.",
            incorrectFeedbackRu: "В третьем условном используйте past perfect для условия и conditional perfect для результата, чтобы выразить нереальные прошлые ситуации и их воображаемые последствия."
        }
    ]
};

/* ============================================
Page 5: Third Conditional - Social Issues and Community Impact
============================================ */
window.grammarExercises['conditionals']['third-conditional-page5'] = {
    title: "Third Conditional - Social Issues and Community Impact",
    multipleChoice: [
        {
            question: "Choose the correct third conditional form:",
            questionRu: "Выберите правильную форму третьего условного предложения:",
            sentence: "If the government _____ in renewable energy sooner, pollution levels _____ dramatically.",
            options: [
                "had invested / would have decreased",
                "invested / would decrease",
                "invests / will decrease",
                "has invested / would decrease"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Third conditional: past perfect 'had invested' + conditional perfect 'would have decreased' expresses regret about delayed environmental action and its consequences.",
            correctFeedbackRu: "Правильно! Третье условное: past perfect 'had invested' + conditional perfect 'would have decreased' выражает сожаление о задержке экологических действий и их последствиях.",
            incorrectFeedback: "Third conditional structure requires past perfect (had + past participle) in the if-clause and conditional perfect (would have + past participle) in the main clause.",
            incorrectFeedbackRu: "Структура третьего условного требует past perfect (had + past participle) в if-части и conditional perfect (would have + past participle) в главной части."
        },
        {
            question: "Select the correct third conditional sentence:",
            questionRu: "Выберите правильное третье условное предложение:",
            sentence: "If the community _____ the housing project, homelessness _____ such a serious problem.",
            options: [
                "had supported / wouldn't have become",
                "supported / wouldn't become",
                "supports / won't become",
                "has supported / wouldn't become"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had supported' (past perfect) + 'wouldn't have become' (negative conditional perfect) shows how past community action could have prevented current social problems.",
            correctFeedbackRu: "Отлично! 'Had supported' (past perfect) + 'wouldn't have become' (отрицательный conditional perfect) показывает, как прошлые действия сообщества могли предотвратить текущие социальные проблемы.",
            incorrectFeedback: "Use negative conditional perfect 'wouldn't have + past participle' with past perfect 'had + past participle' to express how past actions could have prevented problems.",
            incorrectFeedbackRu: "Используйте отрицательный conditional perfect 'wouldn't have + past participle' с past perfect 'had + past participle', чтобы выразить, как прошлые действия могли предотвратить проблемы."
        },
        {
            question: "Complete the third conditional about public health:",
            questionRu: "Дополните третье условное предложение о общественном здравоохранении:",
            sentence: "If the city _____ smoking in public places earlier, respiratory diseases _____ by 30%.",
            options: [
                "had banned / would have declined",
                "banned / would decline",
                "bans / will decline",
                "has banned / would decline"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had banned' + conditional perfect 'would have declined' correctly expresses how earlier public health policies would have improved health outcomes.",
            correctFeedbackRu: "Отлично! Past perfect 'had banned' + conditional perfect 'would have declined' правильно выражает, как более ранние политики общественного здравоохранения улучшили бы результаты здоровья.",
            incorrectFeedback: "Third conditional uses past perfect for the condition and conditional perfect for the result when discussing unreal past situations and their hypothetical outcomes.",
            incorrectFeedbackRu: "Третье условное использует past perfect для условия и conditional perfect для результата при обсуждении нереальных прошлых ситуаций и их гипотетических исходов."
        },
        {
            question: "Choose the correct form about educational access:",
            questionRu: "Выберите правильную форму о доступе к образованию:",
            sentence: "If the scholarship program _____ more funding, hundreds of students _____ university.",
            options: [
                "had received / could have attended",
                "received / could attend",
                "receives / can attend",
                "has received / could attend"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Could have attended' with 'had received' shows possibility in third conditional - more funding might have enabled university access, expressing potential rather than certainty.",
            correctFeedbackRu: "Правильно! 'Could have attended' с 'had received' показывает возможность в третьем условном - больше финансирования могло обеспечить доступ к университету, выражая потенциал, а не уверенность.",
            incorrectFeedback: "Use 'could have + past participle' instead of 'would have' when expressing possibility or potential rather than certain outcomes in third conditional.",
            incorrectFeedbackRu: "Используйте 'could have + past participle' вместо 'would have', когда выражаете возможность или потенциал, а не определенные результаты в третьем условном."
        },
        {
            question: "Select the third conditional about crime prevention:",
            questionRu: "Выберите третье условное предложение о предотвращении преступности:",
            sentence: "If the neighborhood _____ a community watch program, the burglary rate _____ so high.",
            options: [
                "had established / wouldn't have been",
                "established / wouldn't be",
                "establishes / won't be",
                "has established / wouldn't be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! This structure expresses how past community action (had established) would have prevented crime problems (wouldn't have been) using proper third conditional form.",
            correctFeedbackRu: "Отлично! Эта структура выражает, как прошлые действия сообщества (had established) предотвратили бы проблемы преступности (wouldn't have been), используя правильную форму третьего условного.",
            incorrectFeedback: "Third conditional requires 'had + past participle' for past unreal conditions and 'wouldn't have been' for negative results that didn't happen.",
            incorrectFeedbackRu: "Третье условное требует 'had + past participle' для прошлых нереальных условий и 'wouldn't have been' для отрицательных результатов, которые не произошли."
        },
        {
            question: "Complete the sentence about transportation policy:",
            questionRu: "Дополните предложение о транспортной политике:",
            sentence: "If the mayor _____ public transportation, fewer people _____ cars downtown.",
            options: [
                "had improved / would have driven",
                "improved / would drive",
                "improves / will drive",
                "has improved / would drive"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had improved' + conditional perfect 'would have driven' correctly shows how better transit would have reduced car usage in third conditional.",
            correctFeedbackRu: "Отлично! Past perfect 'had improved' + conditional perfect 'would have driven' правильно показывает, как лучший транспорт уменьшил бы использование автомобилей в третьем условном.",
            incorrectFeedback: "Use past perfect in the if-clause and conditional perfect in the main clause to express unreal past situations and their imaginary results.",
            incorrectFeedbackRu: "Используйте past perfect в if-части и conditional perfect в главной части, чтобы выразить нереальные прошлые ситуации и их воображаемые результаты."
        },
        {
            question: "Choose the third conditional about social programs:",
            questionRu: "Выберите третье условное предложение о социальных программах:",
            sentence: "If the state _____ job training programs, unemployment _____ to 15%.",
            options: [
                "had expanded / wouldn't have risen",
                "expanded / wouldn't rise",
                "expands / won't rise",
                "has expanded / wouldn't rise"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! This shows how past policy decisions (had expanded) would have prevented economic problems (wouldn't have risen) using proper third conditional structure.",
            correctFeedbackRu: "Правильно! Это показывает, как прошлые политические решения (had expanded) предотвратили бы экономические проблемы (wouldn't have risen), используя правильную структуру третьего условного.",
            incorrectFeedback: "Third conditional uses past perfect for unreal past conditions and negative conditional perfect 'wouldn't have + past participle' for prevented outcomes.",
            incorrectFeedbackRu: "Третье условное использует past perfect для нереальных прошлых условий и отрицательный conditional perfect 'wouldn't have + past participle' для предотвращенных результатов."
        },
        {
            question: "Select the correct form about environmental protection:",
            questionRu: "Выберите правильную форму о защите окружающей среды:",
            sentence: "If residents _____ recycling seriously, the landfill _____ full so quickly.",
            options: [
                "had taken / wouldn't have become",
                "took / wouldn't become",
                "take / won't become",
                "have taken / wouldn't become"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had taken' (past perfect) + 'wouldn't have become' (negative conditional perfect) expresses how past environmental action could have prevented waste problems.",
            correctFeedbackRu: "Отлично! 'Had taken' (past perfect) + 'wouldn't have become' (отрицательный conditional perfect) выражает, как прошлые экологические действия могли предотвратить проблемы с отходами.",
            incorrectFeedback: "For third conditional, combine past perfect in the condition with negative conditional perfect in the result to show prevented outcomes.",
            incorrectFeedbackRu: "Для третьего условного соедините past perfect в условии с отрицательным conditional perfect в результате, чтобы показать предотвращенные исходы."
        },
        {
            question: "Complete the third conditional about digital divide:",
            questionRu: "Дополните третье условное предложение о цифровом разрыве:",
            sentence: "If the library _____ free internet access, students _____ equal learning opportunities.",
            options: [
                "had provided / would have had",
                "provided / would have",
                "provides / will have",
                "has provided / would have"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had provided' + conditional perfect 'would have had' correctly expresses how past technology access would have created educational equality.",
            correctFeedbackRu: "Отлично! Past perfect 'had provided' + conditional perfect 'would have had' правильно выражает, как прошлый доступ к технологиям создал бы равенство в образовании.",
            incorrectFeedback: "Third conditional structure: past perfect 'had + past participle' for the condition and conditional perfect 'would have + past participle' for the result.",
            incorrectFeedbackRu: "Структура третьего условного: past perfect 'had + past participle' для условия и conditional perfect 'would have + past participle' для результата."
        },
        {
            question: "Choose the final form about community healthcare:",
            questionRu: "Выберите финальную форму о здравоохранении сообщества:",
            sentence: "If the clinic _____ open during weekends, emergency room visits _____ by 25%.",
            options: [
                "had stayed / might have decreased",
                "stayed / might decrease",
                "stays / might decrease",
                "has stayed / might have decreased"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Might have decreased' with 'had stayed' shows uncertain possibility in third conditional - weekend clinic hours could have reduced ER visits, but we're not completely sure.",
            correctFeedbackRu: "Отлично! 'Might have decreased' с 'had stayed' показывает неопределенную возможность в третьем условном - работа клиники в выходные могла сократить посещения скорой помощи, но мы не полностью уверены.",
            incorrectFeedback: "Use 'might have + past participle' with past perfect to express uncertain possibilities in third conditional statements rather than definite outcomes.",
            incorrectFeedbackRu: "Используйте 'might have + past participle' с past perfect для выражения неопределенных возможностей в третьих условных предложениях, а не определенных результатов."
        }
    ]
};

/* ============================================
Page 6: Third Conditional - Technology and Innovation Decisions
============================================ */
window.grammarExercises['conditionals']['third-conditional-page6'] = {
    title: "Third Conditional - Technology and Innovation Decisions",
    multipleChoice: [
        {
            question: "Choose the correct third conditional form:",
            questionRu: "Выберите правильную форму третьего условного предложения:",
            sentence: "If the software developers _____ for security vulnerabilities, hackers _____ the system.",
            options: [
                "had tested / wouldn't have breached",
                "tested / wouldn't breach",
                "test / won't breach",
                "have tested / wouldn't breach"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Past perfect 'had tested' + negative conditional perfect 'wouldn't have breached' shows how past security testing would have prevented cyber attacks.",
            correctFeedbackRu: "Правильно! Past perfect 'had tested' + отрицательный conditional perfect 'wouldn't have breached' показывает, как прошлое тестирование безопасности предотвратило бы кибератаки.",
            incorrectFeedback: "Third conditional structure: past perfect 'had + past participle' for security measures and negative conditional perfect 'wouldn't have + past participle' for prevented breaches.",
            incorrectFeedbackRu: "Структура третьего условного: past perfect 'had + past participle' для мер безопасности и отрицательный conditional perfect 'wouldn't have + past participle' для предотвращенных взломов."
        },
        {
            question: "Select the correct third conditional sentence:",
            questionRu: "Выберите правильное третье условное предложение:",
            sentence: "If the tech startup _____ artificial intelligence earlier, they _____ the market leader today.",
            options: [
                "had adopted / would be",
                "adopted / would be",
                "adopts / will be",
                "has adopted / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: past perfect 'had adopted' + present conditional 'would be' connects past AI adoption decisions to current market position.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had adopted' + present conditional 'would be' связывает прошлые решения о принятии ИИ с текущей рыночной позицией.",
            incorrectFeedback: "This mixed conditional uses past perfect for technology adoption decisions and present conditional for current business status that would exist now.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для решений о принятии технологий и present conditional для текущего бизнес-статуса, который существовал бы сейчас."
        },
        {
            question: "Complete the third conditional about data backup:",
            questionRu: "Дополните третье условное предложение о резервном копировании данных:",
            sentence: "If the company _____ automatic backups, they _____ all their customer data in the crash.",
            options: [
                "had implemented / wouldn't have lost",
                "implemented / wouldn't lose",
                "implements / won't lose",
                "has implemented / wouldn't lose"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had implemented' + negative conditional perfect 'wouldn't have lost' expresses how past IT precautions would have prevented data loss disasters.",
            correctFeedbackRu: "Отлично! Past perfect 'had implemented' + отрицательный conditional perfect 'wouldn't have lost' выражает, как прошлые IT-меры предосторожности предотвратили бы катастрофы потери данных.",
            incorrectFeedback: "Use past perfect for implementing backup systems and negative conditional perfect 'wouldn't have + past participle' for the data loss that would have been prevented.",
            incorrectFeedbackRu: "Используйте past perfect для внедрения систем резервного копирования и отрицательный conditional perfect 'wouldn't have + past participle' для потери данных, которая была бы предотвращена."
        },
        {
            question: "Choose the correct form about mobile app development:",
            questionRu: "Выберите правильную форму о разработке мобильных приложений:",
            sentence: "If the designers _____ user feedback during development, the app _____ so many negative reviews.",
            options: [
                "had incorporated / wouldn't have received",
                "incorporated / wouldn't receive",
                "incorporate / won't receive",
                "have incorporated / wouldn't receive"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Past perfect 'had incorporated' + negative conditional perfect 'wouldn't have received' shows how past user research would have prevented poor app reception.",
            correctFeedbackRu: "Правильно! Past perfect 'had incorporated' + отрицательный conditional perfect 'wouldn't have received' показывает, как прошлые исследования пользователей предотвратили бы плохой прием приложения.",
            incorrectFeedback: "Third conditional for app development: past perfect for incorporating feedback and negative conditional perfect for avoided negative reviews.",
            incorrectFeedbackRu: "Третье условное для разработки приложений: past perfect для включения обратной связи и отрицательный conditional perfect для избежанных негативных отзывов."
        },
        {
            question: "Select the third conditional about cloud migration:",
            questionRu: "Выберите третье условное предложение о миграции в облако:",
            sentence: "If the IT department _____ to cloud storage sooner, the server failure _____ business operations.",
            options: [
                "had migrated / wouldn't have disrupted",
                "migrated / wouldn't disrupt",
                "migrates / won't disrupt",
                "has migrated / wouldn't disrupt"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had migrated' + negative conditional perfect 'wouldn't have disrupted' expresses how earlier cloud adoption would have prevented operational problems.",
            correctFeedbackRu: "Отлично! Past perfect 'had migrated' + отрицательный conditional perfect 'wouldn't have disrupted' выражает, как более раннее принятие облака предотвратило бы операционные проблемы.",
            incorrectFeedback: "Use past perfect for cloud migration timing and negative conditional perfect for business disruptions that would have been avoided.",
            incorrectFeedbackRu: "Используйте past perfect для времени миграции в облако и отрицательный conditional perfect для бизнес-нарушений, которые были бы избежаны."
        },
        {
            question: "Complete the sentence about social media strategy:",
            questionRu: "Дополните предложение о стратегии социальных медиа:",
            sentence: "If the marketing team _____ social media trends, their campaign _____ viral.",
            options: [
                "had analyzed / might have gone",
                "analyzed / might go",
                "analyzes / might go",
                "has analyzed / might go"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Might have gone' with past perfect 'had analyzed' expresses uncertain possibility - trend analysis could have led to viral success, but wasn't guaranteed.",
            correctFeedbackRu: "Отлично! 'Might have gone' с past perfect 'had analyzed' выражает неопределенную возможность - анализ трендов мог привести к вирусному успеху, но не был гарантирован.",
            incorrectFeedback: "Use 'might have + past participle' instead of 'would have' when viral marketing success was possible but not certain, even with trend analysis.",
            incorrectFeedbackRu: "Используйте 'might have + past participle' вместо 'would have', когда вирусный маркетинговый успех был возможен, но не определен, даже с анализом трендов."
        },
        {
            question: "Choose the third conditional about e-commerce platform:",
            questionRu: "Выберите третье условное предложение о платформе электронной коммерции:",
            sentence: "If the online store _____ mobile optimization, sales _____ by 60% last quarter.",
            options: [
                "had prioritized / would have increased",
                "prioritized / would increase",
                "prioritizes / will increase",
                "has prioritized / would increase"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had prioritized' + conditional perfect 'would have increased' shows how past mobile optimization would have improved sales performance.",
            correctFeedbackRu: "Отлично! Past perfect 'had prioritized' + conditional perfect 'would have increased' показывает, как прошлая мобильная оптимизация улучшила бы показатели продаж.",
            incorrectFeedback: "Standard third conditional: past perfect for prioritizing mobile optimization and conditional perfect for the sales increase that would have resulted.",
            incorrectFeedbackRu: "Стандартное третье условное: past perfect для приоритизации мобильной оптимизации и conditional perfect для увеличения продаж, которое получилось бы."
        },
        {
            question: "Select the correct form about automated systems:",
            questionRu: "Выберите правильную форму об автоматизированных системах:",
            sentence: "If the factory _____ robotic assembly lines, production costs _____ significantly.",
            options: [
                "had installed / would have decreased",
                "installed / would decrease",
                "installs / will decrease",
                "has installed / would decrease"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had installed' + conditional perfect 'would have decreased' expresses how past automation investments would have reduced manufacturing expenses.",
            correctFeedbackRu: "Отлично! Past perfect 'had installed' + conditional perfect 'would have decreased' выражает, как прошлые инвестиции в автоматизацию снизили бы производственные расходы.",
            incorrectFeedback: "Third conditional for industrial automation: past perfect for installing robotic systems and conditional perfect for cost reductions that would have occurred.",
            incorrectFeedbackRu: "Третье условное для промышленной автоматизации: past perfect для установки роботизированных систем и conditional perfect для снижения затрат, которое произошло бы."
        },
        {
            question: "Complete the third conditional about digital payment systems:",
            questionRu: "Дополните третье условное предложение о системах цифровых платежей:",
            sentence: "If the restaurant _____ contactless payments before the pandemic, they _____ so many customers.",
            options: [
                "had introduced / wouldn't have lost",
                "introduced / wouldn't lose",
                "introduces / won't lose",
                "has introduced / wouldn't lose"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had introduced' + negative conditional perfect 'wouldn't have lost' shows how earlier payment innovation would have prevented customer loss during health crises.",
            correctFeedbackRu: "Отлично! Past perfect 'had introduced' + отрицательный conditional perfect 'wouldn't have lost' показывает, как более ранние платежные инновации предотвратили бы потерю клиентов во время кризисов здоровья.",
            incorrectFeedback: "Use past perfect for introducing payment technology and negative conditional perfect for customer retention that would have been maintained.",
            incorrectFeedbackRu: "Используйте past perfect для внедрения платежных технологий и отрицательный conditional perfect для удержания клиентов, которое было бы сохранено."
        },
        {
            question: "Choose the final form about data analytics:",
            questionRu: "Выберите финальную форму о аналитике данных:",
            sentence: "If the executives _____ data-driven decisions from the beginning, the company _____ more profitable now.",
            options: [
                "had made / would be",
                "made / would be",
                "make / will be",
                "have made / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: past perfect 'had made' + present conditional 'would be' connects past data-driven decision making to current profitability status.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had made' + present conditional 'would be' связывает прошлое принятие решений на основе данных с текущим статусом прибыльности.",
            incorrectFeedback: "This mixed conditional uses past perfect for data-driven decision making and present conditional for current business profitability that would exist today.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для принятия решений на основе данных и present conditional для текущей бизнес-прибыльности, которая существовала бы сегодня."
        }
    ]
};

/* ============================================
Page 7: Third Conditional - Personal Development and Life Choices
============================================ */
window.grammarExercises['conditionals']['third-conditional-page7'] = {
    title: "Third Conditional - Personal Development and Life Choices",
    multipleChoice: [
        {
            question: "Choose the correct third conditional form:",
            questionRu: "Выберите правильную форму третьего условного предложения:",
            sentence: "If Jennifer _____ her confidence earlier in life, she _____ more leadership opportunities.",
            options: [
                "had developed / would have pursued",
                "developed / would pursue",
                "develops / will pursue",
                "has developed / would pursue"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Past perfect 'had developed' + conditional perfect 'would have pursued' expresses how past personal growth would have led to different career choices.",
            correctFeedbackRu: "Правильно! Past perfect 'had developed' + conditional perfect 'would have pursued' выражает, как прошлый личностный рост привел бы к другим карьерным выборам.",
            incorrectFeedback: "Third conditional structure: past perfect 'had + past participle' for personal development and conditional perfect 'would have + past participle' for career opportunities.",
            incorrectFeedbackRu: "Структура третьего условного: past perfect 'had + past participle' для личностного развития и conditional perfect 'would have + past participle' для карьерных возможностей."
        },
        {
            question: "Select the correct third conditional sentence:",
            questionRu: "Выберите правильное третье условное предложение:",
            sentence: "If Marcus _____ his spending habits in his twenties, he _____ debt-free today.",
            options: [
                "had controlled / would be",
                "controlled / would be",
                "controls / will be",
                "has controlled / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: past perfect 'had controlled' + present conditional 'would be' connects past financial discipline to current debt status.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had controlled' + present conditional 'would be' связывает прошлую финансовую дисциплину с текущим долговым статусом.",
            incorrectFeedback: "This mixed conditional uses past perfect for financial habits and present conditional for current financial freedom that would exist now.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для финансовых привычек и present conditional для текущей финансовой свободы, которая существовала бы сейчас."
        },
        {
            question: "Complete the third conditional about language learning:",
            questionRu: "Дополните третье условное предложение об изучении языков:",
            sentence: "If Catherine _____ consistently for five years, she _____ completely bilingual by now.",
            options: [
                "had practiced / would have become",
                "practiced / would become",
                "practices / will become",
                "has practiced / would become"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had practiced' + conditional perfect 'would have become' shows how consistent past language study would have achieved fluency.",
            correctFeedbackRu: "Отлично! Past perfect 'had practiced' + conditional perfect 'would have become' показывает, как последовательное прошлое изучение языка достигло бы беглости.",
            incorrectFeedback: "Standard third conditional: past perfect for consistent practice and conditional perfect for language fluency that would have been achieved.",
            incorrectFeedbackRu: "Стандартное третье условное: past perfect для последовательной практики и conditional perfect для беглости языка, которая была бы достигнута."
        },
        {
            question: "Choose the correct form about mental health support:",
            questionRu: "Выберите правильную форму о поддержке психического здоровья:",
            sentence: "If Brian _____ therapy after his divorce, he _____ through depression so quickly.",
            options: [
                "had sought / might not have gone",
                "sought / might not go",
                "seeks / might not go",
                "has sought / might not go"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Might not have gone' with past perfect 'had sought' expresses uncertain possibility - therapy could have helped with depression, but recovery isn't guaranteed.",
            correctFeedbackRu: "Правильно! 'Might not have gone' с past perfect 'had sought' выражает неопределенную возможность - терапия могла помочь с депрессией, но выздоровление не гарантировано.",
            incorrectFeedback: "Use 'might not have + past participle' instead of 'wouldn't have' when mental health outcomes were possible but not certain, even with professional help.",
            incorrectFeedbackRu: "Используйте 'might not have + past participle' вместо 'wouldn't have', когда результаты психического здоровья были возможны, но не определены, даже с профессиональной помощью."
        },
        {
            question: "Select the third conditional about fitness goals:",
            questionRu: "Выберите третье условное предложение о фитнес-целях:",
            sentence: "If Sandra _____ a personal trainer, she _____ her marathon goal last year.",
            options: [
                "had hired / would have achieved",
                "hired / would achieve",
                "hires / will achieve",
                "has hired / would achieve"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had hired' + conditional perfect 'would have achieved' expresses how past professional guidance would have enabled athletic success.",
            correctFeedbackRu: "Отлично! Past perfect 'had hired' + conditional perfect 'would have achieved' выражает, как прошлое профессиональное руководство обеспечило бы спортивный успех.",
            incorrectFeedback: "Third conditional for fitness: past perfect for hiring professional help and conditional perfect for athletic goals that would have been accomplished.",
            incorrectFeedbackRu: "Третье условное для фитнеса: past perfect для найма профессиональной помощи и conditional perfect для спортивных целей, которые были бы достигнуты."
        },
        {
            question: "Complete the sentence about time management:",
            questionRu: "Дополните предложение о управлении временем:",
            sentence: "If William _____ better boundaries between work and family, his marriage _____ survived.",
            options: [
                "had established / might have",
                "established / might have",
                "establishes / might",
                "has established / might"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Might have survived' with past perfect 'had established' shows uncertain possibility - better boundaries could have saved the marriage, but wasn't guaranteed.",
            correctFeedbackRu: "Отлично! 'Might have survived' с past perfect 'had established' показывает неопределенную возможность - лучшие границы могли спасти брак, но не были гарантированы.",
            incorrectFeedback: "Use 'might have + past participle' for relationship outcomes that were possible but not certain, even with better work-life balance.",
            incorrectFeedbackRu: "Используйте 'might have + past participle' для результатов отношений, которые были возможны, но не определены, даже с лучшим балансом работы и жизни."
        },
        {
            question: "Choose the third conditional about educational choices:",
            questionRu: "Выберите третье условное предложение о образовательных выборах:",
            sentence: "If Patricia _____ her master's degree part-time while working, she _____ her career advancement.",
            options: [
                "had completed / wouldn't have delayed",
                "completed / wouldn't delay",
                "completes / won't delay",
                "has completed / wouldn't delay"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had completed' + negative conditional perfect 'wouldn't have delayed' shows how balancing education and work would have maintained career momentum.",
            correctFeedbackRu: "Отлично! Past perfect 'had completed' + отрицательный conditional perfect 'wouldn't have delayed' показывает, как баланс образования и работы поддержал бы карьерный импульс.",
            incorrectFeedback: "Use past perfect for completing education and negative conditional perfect 'wouldn't have + past participle' for career progress that would have been maintained.",
            incorrectFeedbackRu: "Используйте past perfect для завершения образования и отрицательный conditional perfect 'wouldn't have + past participle' для карьерного прогресса, который был бы сохранен."
        },
        {
            question: "Select the correct form about social skills development:",
            questionRu: "Выберите правильную форму о развитии социальных навыков:",
            sentence: "If Kevin _____ networking events regularly, his professional circle _____ much wider now.",
            options: [
                "had attended / would be",
                "attended / would be",
                "attends / will be",
                "has attended / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: past perfect 'had attended' + present conditional 'would be' connects past networking efforts to current professional network size.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had attended' + present conditional 'would be' связывает прошлые усилия по нетворкингу с текущим размером профессиональной сети.",
            incorrectFeedback: "This mixed conditional uses past perfect for networking activities and present conditional for current professional connections that would exist today.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для сетевых активностей и present conditional для текущих профессиональных связей, которые существовали бы сегодня."
        },
        {
            question: "Complete the third conditional about creative pursuits:",
            questionRu: "Дополните третье условное предложение о творческих занятиях:",
            sentence: "If Michelle _____ her artistic talents seriously, she _____ a successful gallery exhibition by now.",
            options: [
                "had taken / would have had",
                "took / would have",
                "takes / will have",
                "has taken / would have"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had taken' + conditional perfect 'would have had' expresses how past dedication to art would have resulted in professional recognition.",
            correctFeedbackRu: "Отлично! Past perfect 'had taken' + conditional perfect 'would have had' выражает, как прошлая преданность искусству привела бы к профессиональному признанию.",
            incorrectFeedback: "Standard third conditional: past perfect for taking artistic talents seriously and conditional perfect for gallery success that would have been achieved.",
            incorrectFeedbackRu: "Стандартное третье условное: past perfect для серьезного отношения к художественным талантам и conditional perfect для галерейного успеха, который был бы достигнут."
        },
        {
            question: "Choose the final form about personal relationships:",
            questionRu: "Выберите финальную форму о личных отношениях:",
            sentence: "If Gregory _____ more emotionally available in his relationships, he _____ alone today.",
            options: [
                "had been / wouldn't be",
                "was / wouldn't be", 
                "is / won't be",
                "has been / wouldn't be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: past perfect 'had been' + present negative conditional 'wouldn't be' connects past emotional availability to current relationship status.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had been' + отрицательный present conditional 'wouldn't be' связывает прошлую эмоциональную доступность с текущим статусом отношений.",
            incorrectFeedback: "This mixed conditional uses past perfect of 'be' (had been) for emotional availability and present negative conditional for current loneliness that wouldn't exist.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect от 'be' (had been) для эмоциональной доступности и отрицательный present conditional для текущего одиночества, которое не существовало бы."
        }
    ]
};

/* ============================================
Page 8: Third Conditional - Economic and Financial Decisions
============================================ */
window.grammarExercises['conditionals']['third-conditional-page8'] = {
    title: "Third Conditional - Economic and Financial Decisions",
    multipleChoice: [
        {
            question: "Choose the correct third conditional form:",
            questionRu: "Выберите правильную форму третьего условного предложения:",
            sentence: "If the central bank _____ interest rates earlier, the housing bubble _____ burst so dramatically.",
            options: [
                "had raised / wouldn't have",
                "raised / wouldn't have",
                "raises / won't have",
                "has raised / wouldn't"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Past perfect 'had raised' + negative conditional perfect 'wouldn't have burst' shows how earlier monetary policy would have prevented economic crisis.",
            correctFeedbackRu: "Правильно! Past perfect 'had raised' + отрицательный conditional perfect 'wouldn't have burst' показывает, как более ранняя денежная политика предотвратила бы экономический кризис.",
            incorrectFeedback: "Third conditional structure: past perfect 'had + past participle' for monetary policy and negative conditional perfect 'wouldn't have + past participle' for prevented crisis.",
            incorrectFeedbackRu: "Структура третьего условного: past perfect 'had + past participle' для денежной политики и отрицательный conditional perfect 'wouldn't have + past participle' для предотвращенного кризиса."
        },
        {
            question: "Select the correct third conditional sentence:",
            questionRu: "Выберите правильное третье условное предложение:",
            sentence: "If the pension fund _____ in cryptocurrency five years ago, retirees _____ much wealthier today.",
            options: [
                "had invested / would be",
                "invested / would be",
                "invests / will be",
                "has invested / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: past perfect 'had invested' + present conditional 'would be' connects past investment decisions to current wealth status.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had invested' + present conditional 'would be' связывает прошлые инвестиционные решения с текущим статусом богатства.",
            incorrectFeedback: "This mixed conditional uses past perfect for investment timing and present conditional for current financial status that would exist now.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для времени инвестиций и present conditional для текущего финансового статуса, который существовал бы сейчас."
        },
        {
            question: "Complete the third conditional about trade policies:",
            questionRu: "Дополните третье условное предложение о торговой политике:",
            sentence: "If the government _____ those tariffs on imported goods, domestic manufacturers _____ more competitive.",
            options: [
                "hadn't imposed / wouldn't have become",
                "didn't impose / wouldn't become",
                "doesn't impose / won't become",
                "hasn't imposed / wouldn't become"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Negative past perfect 'hadn't imposed' + negative conditional perfect 'wouldn't have become' shows how avoiding trade barriers would have prevented artificial competitiveness.",
            correctFeedbackRu: "Отлично! Отрицательный past perfect 'hadn't imposed' + отрицательный conditional perfect 'wouldn't have become' показывает, как избежание торговых барьеров предотвратило бы искусственную конкурентоспособность.",
            incorrectFeedback: "Double negative third conditional: 'hadn't + past participle' for avoided policy and 'wouldn't have + past participle' for prevented market effects.",
            incorrectFeedbackRu: "Двойное отрицательное третье условное: 'hadn't + past participle' для избежанной политики и 'wouldn't have + past participle' для предотвращенных рыночных эффектов."
        },
        {
            question: "Choose the correct form about small business support:",
            questionRu: "Выберите правильную форму о поддержке малого бизнеса:",
            sentence: "If the bank _____ more flexible loan terms, dozens of startups _____ during the recession.",
            options: [
                "had offered / might not have failed",
                "offered / might not fail",
                "offers / might not fail",
                "has offered / might not fail"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Might not have failed' with past perfect 'had offered' expresses uncertain possibility - flexible loans could have helped businesses survive, but success wasn't guaranteed.",
            correctFeedbackRu: "Правильно! 'Might not have failed' с past perfect 'had offered' выражает неопределенную возможность - гибкие кредиты могли помочь бизнесам выжить, но успех не был гарантирован.",
            incorrectFeedback: "Use 'might not have + past participle' instead of 'wouldn't have' when business survival was possible but not certain, even with better lending terms.",
            incorrectFeedbackRu: "Используйте 'might not have + past participle' вместо 'wouldn't have', когда выживание бизнеса было возможно, но не определено, даже с лучшими условиями кредитования."
        },
        {
            question: "Select the third conditional about currency exchange:",
            questionRu: "Выберите третье условное предложение о валютном обмене:",
            sentence: "If the company _____ currency hedging strategies, foreign exchange losses _____ their profits.",
            options: [
                "had implemented / wouldn't have eroded",
                "implemented / wouldn't erode",
                "implements / won't erode",
                "has implemented / wouldn't erode"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had implemented' + negative conditional perfect 'wouldn't have eroded' expresses how past financial risk management would have protected company earnings.",
            correctFeedbackRu: "Отлично! Past perfect 'had implemented' + отрицательный conditional perfect 'wouldn't have eroded' выражает, как прошлое управление финансовыми рисками защитило бы доходы компании.",
            incorrectFeedback: "Third conditional for risk management: past perfect for implementing hedging and negative conditional perfect for profit losses that would have been prevented.",
            incorrectFeedbackRu: "Третье условное для управления рисками: past perfect для внедрения хеджирования и отрицательный conditional perfect для потерь прибыли, которые были бы предотвращены."
        },
        {
            question: "Complete the sentence about market regulation:",
            questionRu: "Дополните предложение о рыночном регулировании:",
            sentence: "If financial regulators _____ stricter oversight, the stock market crash _____ so severe.",
            options: [
                "had maintained / wouldn't have been",
                "maintained / wouldn't be",
                "maintain / won't be",
                "have maintained / wouldn't be"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had maintained' + negative conditional perfect 'wouldn't have been' shows how past regulatory vigilance would have reduced market volatility.",
            correctFeedbackRu: "Отлично! Past perfect 'had maintained' + отрицательный conditional perfect 'wouldn't have been' показывает, как прошлая регулятивная бдительность снизила бы рыночную волатильность.",
            incorrectFeedback: "Use past perfect for maintaining oversight and negative conditional perfect with 'be' (wouldn't have been) for severity that would have been reduced.",
            incorrectFeedbackRu: "Используйте past perfect для поддержания надзора и отрицательный conditional perfect с 'be' (wouldn't have been) для серьезности, которая была бы снижена."
        },
        {
            question: "Choose the third conditional about consumer spending:",
            questionRu: "Выберите третье условное предложение о потребительских расходах:",
            sentence: "If consumers _____ their credit card debt earlier, the financial crisis _____ as widespread.",
            options: [
                "had reduced / wouldn't have been",
                "reduced / wouldn't be",
                "reduce / won't be",
                "have reduced / wouldn't be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had reduced' + negative conditional perfect 'wouldn't have been' expresses how past consumer financial responsibility would have limited economic crisis scope.",
            correctFeedbackRu: "Отлично! Past perfect 'had reduced' + отрицательный conditional perfect 'wouldn't have been' выражает, как прошлая потребительская финансовая ответственность ограничила бы масштаб экономического кризиса.",
            incorrectFeedback: "Standard third conditional: past perfect for debt reduction and negative conditional perfect for crisis extent that would have been prevented.",
            incorrectFeedbackRu: "Стандартное третье условное: past perfect для сокращения долга и отрицательный conditional perfect для масштаба кризиса, который был бы предотвращен."
        },
        {
            question: "Select the correct form about agricultural subsidies:",
            questionRu: "Выберите правильную форму о сельскохозяйственных субсидиях:",
            sentence: "If the government _____ sustainable farming practices, food prices _____ more stable now.",
            options: [
                "had subsidized / would be",
                "subsidized / would be",
                "subsidizes / will be",
                "has subsidized / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: past perfect 'had subsidized' + present conditional 'would be' connects past agricultural policy to current food market stability.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had subsidized' + present conditional 'would be' связывает прошлую сельскохозяйственную политику с текущей стабильностью продовольственного рынка.",
            incorrectFeedback: "This mixed conditional uses past perfect for agricultural subsidies and present conditional for current price stability that would exist today.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для сельскохозяйственных субсидий и present conditional для текущей стабильности цен, которая существовала бы сегодня."
        },
        {
            question: "Complete the third conditional about taxation policy:",
            questionRu: "Дополните третье условное предложение о налоговой политике:",
            sentence: "If the city _____ property taxes gradually, the gentrification process _____ so rapid.",
            options: [
                "had increased / wouldn't have been",
                "increased / wouldn't be",
                "increases / won't be",
                "has increased / wouldn't be"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had increased' + negative conditional perfect 'wouldn't have been' shows how gradual tax policy would have slowed urban development patterns.",
            correctFeedbackRu: "Отлично! Past perfect 'had increased' + отрицательный conditional perfect 'wouldn't have been' показывает, как постепенная налоговая политика замедлила бы образцы городского развития.",
            incorrectFeedback: "Use past perfect for implementing tax increases and negative conditional perfect for development speed that would have been controlled.",
            incorrectFeedbackRu: "Используйте past perfect для внедрения налоговых увеличений и отрицательный conditional perfect для скорости развития, которая была бы контролируема."
        },
        {
            question: "Choose the final form about economic inequality:",
            questionRu: "Выберите финальную форму о экономическом неравенстве:",
            sentence: "If policymakers _____ minimum wage increases with inflation, income disparity _____ less pronounced today.",
            options: [
                "had aligned / would be",
                "aligned / would be",
                "align / will be",
                "have aligned / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: past perfect 'had aligned' + present conditional 'would be' connects past wage policy to current inequality levels.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had aligned' + present conditional 'would be' связывает прошлую политику заработной платы с текущими уровнями неравенства.",
            incorrectFeedback: "This mixed conditional uses past perfect for aligning wage policy and present conditional for current income disparity that would exist now.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для выравнивания политики заработной платы и present conditional для текущего неравенства доходов, которое существовало бы сейчас."
        }
    ]
};

/* ============================================
Page 9: Third Conditional - Global Issues and International Relations
============================================ */
window.grammarExercises['conditionals']['third-conditional-page9'] = {
    title: "Third Conditional - Global Issues and International Relations",
    multipleChoice: [
        {
            question: "Choose the correct third conditional form:",
            questionRu: "Выберите правильную форму третьего условного предложения:",
            sentence: "If the international community _____ more decisively in the early stages, the humanitarian crisis _____ prevented.",
            options: [
                "had intervened / could have been",
                "intervened / could be",
                "intervenes / can be",
                "has intervened / could be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Could have been' with past perfect 'had intervened' expresses uncertain possibility in passive voice - intervention might have prevented crisis, but wasn't guaranteed.",
            correctFeedbackRu: "Правильно! 'Could have been' с past perfect 'had intervened' выражает неопределенную возможность в пассивном залоге - вмешательство могло предотвратить кризис, но не было гарантировано.",
            incorrectFeedback: "Use 'could have been + past participle' (passive) instead of 'would have been' when prevention was possible but not certain, even with intervention.",
            incorrectFeedbackRu: "Используйте 'could have been + past participle' (пассивный залог) вместо 'would have been', когда предотвращение было возможно, но не определено, даже с вмешательством."
        },
        {
            question: "Select the correct third conditional sentence:",
            questionRu: "Выберите правильное третье условное предложение:",
            sentence: "If developing nations _____ better access to vaccines, millions of lives _____ saved.",
            options: [
                "had received / would have been",
                "received / would be",
                "receive / will be",
                "have received / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had received' + conditional perfect passive 'would have been saved' shows how past medical equity would have prevented deaths.",
            correctFeedbackRu: "Отлично! Past perfect 'had received' + conditional perfect пассивный 'would have been saved' показывает, как прошлое медицинское равенство предотвратило бы смерти.",
            incorrectFeedback: "Third conditional passive: past perfect for receiving vaccines and conditional perfect passive 'would have been + past participle' for lives that would have been saved.",
            incorrectFeedbackRu: "Третье условное пассивное: past perfect для получения вакцин и conditional perfect пассивный 'would have been + past participle' для жизней, которые были бы спасены."
        },
        {
            question: "Complete the third conditional about climate negotiations:",
            questionRu: "Дополните третье условное предложение о климатических переговорах:",
            sentence: "If world leaders _____ binding emissions targets in 2000, global warming _____ accelerated so rapidly.",
            options: [
                "had established / wouldn't have",
                "established / wouldn't have",
                "establish / won't have",
                "have established / wouldn't"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had established' + negative conditional perfect 'wouldn't have accelerated' expresses how past climate action would have slowed environmental change.",
            correctFeedbackRu: "Отлично! Past perfect 'had established' + отрицательный conditional perfect 'wouldn't have accelerated' выражает, как прошлые климатические действия замедлили бы экологические изменения.",
            incorrectFeedback: "Use past perfect for establishing targets and negative conditional perfect 'wouldn't have + past participle' for prevented acceleration.",
            incorrectFeedbackRu: "Используйте past perfect для установления целей и отрицательный conditional perfect 'wouldn't have + past participle' для предотвращенного ускорения."
        },
        {
            question: "Choose the correct form about refugee assistance:",
            questionRu: "Выберите правильную форму о помощи беженцам:",
            sentence: "If wealthy countries _____ refugee camps adequately, the living conditions _____ so deplorable.",
            options: [
                "had funded / wouldn't have been",
                "funded / wouldn't be",
                "fund / won't be",
                "have funded / wouldn't be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! Past perfect 'had funded' + negative conditional perfect 'wouldn't have been' shows how past international aid would have improved humanitarian conditions.",
            correctFeedbackRu: "Правильно! Past perfect 'had funded' + отрицательный conditional perfect 'wouldn't have been' показывает, как прошлая международная помощь улучшила бы гуманитарные условия.",
            incorrectFeedback: "Third conditional with 'be': past perfect for funding decisions and negative conditional perfect 'wouldn't have been' for conditions that would have been better.",
            incorrectFeedbackRu: "Третье условное с 'be': past perfect для решений о финансировании и отрицательный conditional perfect 'wouldn't have been' для условий, которые были бы лучше."
        },
        {
            question: "Select the third conditional about trade agreements:",
            questionRu: "Выберите третье условное предложение о торговых соглашениях:",
            sentence: "If the trade bloc _____ environmental standards in their agreements, deforestation rates _____ declined significantly.",
            options: [
                "had included / would have",
                "included / would have",
                "includes / will have",
                "has included / would"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had included' + conditional perfect 'would have declined' expresses how past environmental policy integration would have protected forests.",
            correctFeedbackRu: "Отлично! Past perfect 'had included' + conditional perfect 'would have declined' выражает, как прошлая интеграция экологической политики защитила бы леса.",
            incorrectFeedback: "Standard third conditional: past perfect for including standards and conditional perfect for environmental improvements that would have resulted.",
            incorrectFeedbackRu: "Стандартное третье условное: past perfect для включения стандартов и conditional perfect для экологических улучшений, которые получились бы."
        },
        {
            question: "Complete the sentence about nuclear disarmament:",
            questionRu: "Дополните предложение о ядерном разоружении:",
            sentence: "If nuclear powers _____ disarmament treaties seriously, the world _____ much safer today.",
            options: [
                "had taken / would be",
                "took / would be",
                "take / will be",
                "have taken / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Mixed conditional: past perfect 'had taken' + present conditional 'would be' connects past diplomatic efforts to current global security status.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had taken' + present conditional 'would be' связывает прошлые дипломатические усилия с текущим статусом глобальной безопасности.",
            incorrectFeedback: "This mixed conditional uses past perfect for taking treaties seriously and present conditional for current world safety that would exist now.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для серьезного отношения к договорам и present conditional для текущей мировой безопасности, которая существовала бы сейчас."
        },
        {
            question: "Choose the third conditional about educational equality:",
            questionRu: "Выберите третье условное предложение о равенстве в образовании:",
            sentence: "If international organizations _____ girls' education programs globally, literacy rates _____ much higher by now.",
            options: [
                "had prioritized / would have become",
                "prioritized / would become",
                "prioritize / will become",
                "have prioritized / would become"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had prioritized' + conditional perfect 'would have become' shows how past educational investment would have improved global literacy outcomes.",
            correctFeedbackRu: "Отлично! Past perfect 'had prioritized' + conditional perfect 'would have become' показывает, как прошлые образовательные инвестиции улучшили бы глобальные результаты грамотности.",
            incorrectFeedback: "Third conditional for education: past perfect for prioritizing programs and conditional perfect for literacy improvements that would have been achieved.",
            incorrectFeedbackRu: "Третье условное для образования: past perfect для приоритизации программ и conditional perfect для улучшений грамотности, которые были бы достигнуты."
        },
        {
            question: "Select the correct form about peacekeeping missions:",
            questionRu: "Выберите правильную форму о миротворческих миссиях:",
            sentence: "If the UN _____ peacekeeping forces earlier, the civil war _____ for so many years.",
            options: [
                "had deployed / might not have lasted",
                "deployed / might not last",
                "deploys / might not last",
                "has deployed / might not last"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Might not have lasted' with past perfect 'had deployed' expresses uncertain possibility - peacekeeping could have shortened conflict, but wasn't guaranteed to succeed.",
            correctFeedbackRu: "Отлично! 'Might not have lasted' с past perfect 'had deployed' выражает неопределенную возможность - миротворчество могло сократить конфликт, но не гарантировало успех.",
            incorrectFeedback: "Use 'might not have + past participle' instead of 'wouldn't have' when conflict resolution was possible but not certain, even with peacekeeping intervention.",
            incorrectFeedbackRu: "Используйте 'might not have + past participle' вместо 'wouldn't have', когда разрешение конфликта было возможно, но не определено, даже с миротворческим вмешательством."
        },
        {
            question: "Complete the third conditional about technological cooperation:",
            questionRu: "Дополните третье условное предложение о технологическом сотрудничестве:",
            sentence: "If developed countries _____ technology transfer to emerging economies, the digital divide _____ so pronounced.",
            options: [
                "had facilitated / wouldn't be",
                "facilitated / wouldn't be",
                "facilitate / won't be",
                "have facilitated / wouldn't be"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Mixed conditional: past perfect 'had facilitated' + present negative conditional 'wouldn't be' connects past technology sharing to current global inequality.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had facilitated' + отрицательный present conditional 'wouldn't be' связывает прошлый обмен технологиями с текущим глобальным неравенством.",
            incorrectFeedback: "This mixed conditional uses past perfect for facilitating technology transfer and present negative conditional for current digital inequality that wouldn't exist.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для содействия передаче технологий и отрицательный present conditional для текущего цифрового неравенства, которое не существовало бы."
        },
        {
            question: "Choose the final form about cultural preservation:",
            questionRu: "Выберите финальную форму о сохранении культуры:",
            sentence: "If UNESCO _____ endangered languages more aggressively, hundreds of dialects _____ extinct.",
            options: [
                "had protected / wouldn't have become",
                "protected / wouldn't become",
                "protects / won't become",
                "has protected / wouldn't become"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had protected' + negative conditional perfect 'wouldn't have become' expresses how past cultural preservation efforts would have prevented linguistic extinction.",
            correctFeedbackRu: "Отлично! Past perfect 'had protected' + отрицательный conditional perfect 'wouldn't have become' выражает, как прошлые усилия по сохранению культуры предотвратили бы языковое вымирание.",
            incorrectFeedback: "Standard third conditional: past perfect for protection efforts and negative conditional perfect for extinction that would have been prevented.",
            incorrectFeedbackRu: "Стандартное третье условное: past perfect для усилий по защите и отрицательный conditional perfect для вымирания, которое было бы предотвращено."
        }
    ]
};

/* ============================================
Page 10: Third Conditional - Scientific Discoveries and Medical Breakthroughs
============================================ */
window.grammarExercises['conditionals']['third-conditional-page10'] = {
    title: "Third Conditional - Scientific Discoveries and Medical Breakthroughs",
    multipleChoice: [
        {
            question: "Choose the correct third conditional form:",
            questionRu: "Выберите правильную форму третьего условного предложения:",
            sentence: "If researchers _____ stem cell technology earlier, paralyzed patients _____ mobility by now.",
            options: [
                "had developed / might have regained",
                "developed / might regain",
                "develop / might regain",
                "have developed / might regain"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Might have regained' with past perfect 'had developed' expresses uncertain medical possibility - stem cell research could have restored mobility, but treatment success varies.",
            correctFeedbackRu: "Правильно! 'Might have regained' с past perfect 'had developed' выражает неопределенную медицинскую возможность - исследования стволовых клеток могли восстановить подвижность, но успех лечения варьируется.",
            incorrectFeedback: "Use 'might have + past participle' instead of 'would have' when medical outcomes were possible but not guaranteed, even with advanced research.",
            incorrectFeedbackRu: "Используйте 'might have + past participle' вместо 'would have', когда медицинские результаты были возможны, но не гарантированы, даже с продвинутыми исследованиями."
        },
        {
            question: "Select the correct third conditional sentence:",
            questionRu: "Выберите правильное третье условное предложение:",
            sentence: "If the pharmaceutical company _____ more diverse clinical trials, the drug _____ approved for all populations.",
            options: [
                "had conducted / would have been",
                "conducted / would be",
                "conducts / will be",
                "has conducted / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had conducted' + conditional perfect passive 'would have been approved' shows how past research methodology would have achieved regulatory approval.",
            correctFeedbackRu: "Отлично! Past perfect 'had conducted' + conditional perfect пассивный 'would have been approved' показывает, как прошлая методология исследований достигла бы регулятивного одобрения.",
            incorrectFeedback: "Third conditional passive: past perfect for conducting trials and conditional perfect passive 'would have been + past participle' for approval that would have been achieved.",
            incorrectFeedbackRu: "Третье условное пассивное: past perfect для проведения испытаний и conditional perfect пассивный 'would have been + past participle' для одобрения, которое было бы достигнуто."
        },
        {
            question: "Complete the third conditional about space exploration:",
            questionRu: "Дополните третье условное предложение об освоении космоса:",
            sentence: "If space agencies _____ international collaboration from the beginning, Mars exploration _____ decades earlier.",
            options: [
                "had prioritized / would have begun",
                "prioritized / would begin",
                "prioritize / will begin",
                "have prioritized / would begin"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had prioritized' + conditional perfect 'would have begun' expresses how past international cooperation would have accelerated space missions.",
            correctFeedbackRu: "Отлично! Past perfect 'had prioritized' + conditional perfect 'would have begun' выражает, как прошлое международное сотрудничество ускорило бы космические миссии.",
            incorrectFeedback: "Standard third conditional: past perfect for prioritizing collaboration and conditional perfect for space exploration that would have started earlier.",
            incorrectFeedbackRu: "Стандартное третье условное: past perfect для приоритизации сотрудничества и conditional perfect для освоения космоса, которое началось бы раньше."
        },
        {
            question: "Choose the correct form about genetic research:",
            questionRu: "Выберите правильную форму о генетических исследованиях:",
            sentence: "If scientists _____ CRISPR gene editing sooner, hereditary diseases _____ eliminated by now.",
            options: [
                "had perfected / could have been",
                "perfected / could be",
                "perfect / can be",
                "have perfected / could be"
            ],
            correctAnswer: 0,
            correctFeedback: "Correct! 'Could have been eliminated' with past perfect 'had perfected' expresses uncertain possibility in passive voice - gene editing might have cured diseases, but medical breakthroughs are unpredictable.",
            correctFeedbackRu: "Правильно! 'Could have been eliminated' с past perfect 'had perfected' выражает неопределенную возможность в пассивном залоге - генное редактирование могло излечить болезни, но медицинские прорывы непредсказуемы.",
            incorrectFeedback: "Use 'could have been + past participle' (passive) instead of 'would have been' when scientific breakthroughs were possible but not certain to succeed.",
            incorrectFeedbackRu: "Используйте 'could have been + past participle' (пассивный) вместо 'would have been', когда научные прорывы были возможны, но не определены для успеха."
        },
        {
            question: "Select the third conditional about climate science:",
            questionRu: "Выберите третье условное предложение о климатической науке:",
            sentence: "If meteorologists _____ advanced weather modeling systems, extreme weather predictions _____ more accurate.",
            options: [
                "had implemented / would have become",
                "implemented / would become",
                "implement / will become",
                "have implemented / would become"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Past perfect 'had implemented' + conditional perfect 'would have become' shows how past technological advancement would have improved scientific accuracy.",
            correctFeedbackRu: "Отлично! Past perfect 'had implemented' + conditional perfect 'would have become' показывает, как прошлый технологический прогресс улучшил бы научную точность.",
            incorrectFeedback: "Third conditional for scientific progress: past perfect for implementing technology and conditional perfect for accuracy improvements that would have resulted.",
            incorrectFeedbackRu: "Третье условное для научного прогресса: past perfect для внедрения технологий и conditional perfect для улучшений точности, которые получились бы."
        },
        {
            question: "Complete the sentence about archaeological discoveries:",
            questionRu: "Дополните предложение об археологических открытиях:",
            sentence: "If archaeologists _____ ground-penetrating radar technology, ancient civilizations _____ discovered much sooner.",
            options: [
                "had utilized / would have been",
                "utilized / would be",
                "utilize / will be",
                "have utilized / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had utilized' + conditional perfect passive 'would have been discovered' shows how past technology adoption would have accelerated historical findings.",
            correctFeedbackRu: "Отлично! Past perfect 'had utilized' + conditional perfect пассивный 'would have been discovered' показывает, как прошлое принятие технологий ускорило бы исторические находки.",
            incorrectFeedback: "Use past perfect for utilizing technology and conditional perfect passive 'would have been + past participle' for discoveries that would have been made.",
            incorrectFeedbackRu: "Используйте past perfect для использования технологий и conditional perfect пассивный 'would have been + past participle' для открытий, которые были бы сделаны."
        },
        {
            question: "Choose the third conditional about renewable energy:",
            questionRu: "Выберите третье условное предложение о возобновляемой энергии:",
            sentence: "If engineers _____ solar panel efficiency in the 1980s, fossil fuel dependency _____ significantly reduced.",
            options: [
                "had maximized / would have been",
                "maximized / would be",
                "maximize / will be",
                "have maximized / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! Past perfect 'had maximized' + conditional perfect passive 'would have been reduced' expresses how past engineering advances would have transformed energy consumption patterns.",
            correctFeedbackRu: "Отлично! Past perfect 'had maximized' + conditional perfect пассивный 'would have been reduced' выражает, как прошлые инженерные достижения трансформировали бы модели потребления энергии.",
            incorrectFeedback: "Third conditional passive: past perfect for maximizing efficiency and conditional perfect passive for dependency reduction that would have been achieved.",
            incorrectFeedbackRu: "Третье условное пассивное: past perfect для максимизации эффективности и conditional perfect пассивный для сокращения зависимости, которое было бы достигнуто."
        },
        {
            question: "Select the correct form about neuroscience research:",
            questionRu: "Выберите правильную форму о нейронаучных исследованиях:",
            sentence: "If neuroscientists _____ brain imaging techniques earlier, Alzheimer's treatments _____ available today.",
            options: [
                "had advanced / might be",
                "advanced / might be",
                "advance / might be",
                "have advanced / might be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: past perfect 'had advanced' + present possibility 'might be' connects past brain research to current treatment availability with uncertainty.",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had advanced' + настоящая возможность 'might be' связывает прошлые исследования мозга с текущей доступностью лечения с неопределенностью.",
            incorrectFeedback: "This mixed conditional uses past perfect for advancing research and present possibility 'might be' for current treatments that could exist now.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для продвижения исследований и настоящую возможность 'might be' для текущих лечений, которые могли бы существовать сейчас."
        },
        {
            question: "Complete the third conditional about marine biology:",
            questionRu: "Дополните третье условное предложение о морской биологии:",
            sentence: "If marine biologists _____ deep-sea exploration technology, thousands of species _____ documented by now.",
            options: [
                "had developed / would have been",
                "developed / would be",
                "develop / will be",
                "have developed / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! Past perfect 'had developed' + conditional perfect passive 'would have been documented' shows how past technological innovation would have expanded scientific knowledge.",
            correctFeedbackRu: "Отлично! Past perfect 'had developed' + conditional perfect пассивный 'would have been documented' показывает, как прошлые технологические инновации расширили бы научные знания.",
            incorrectFeedback: "Use past perfect for developing technology and conditional perfect passive 'would have been + past participle' for species documentation that would have occurred.",
            incorrectFeedbackRu: "Используйте past perfect для разработки технологий и conditional perfect пассивный 'would have been + past participle' для документирования видов, которое произошло бы."
        },
        {
            question: "Choose the final form about artificial intelligence research:",
            questionRu: "Выберите финальную форму о исследованиях искусственного интеллекта:",
            sentence: "If computer scientists _____ machine learning algorithms decades ago, artificial intelligence _____ far more sophisticated now.",
            options: [
                "had refined / would be",
                "refined / would be",
                "refine / will be",
                "have refined / would be"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! Mixed conditional: past perfect 'had refined' + present conditional 'would be' connects past AI research to current technological sophistication levels. You've completed all 10 pages of Third Conditional Multiple Choice exercises!",
            correctFeedbackRu: "Отлично! Смешанное условное: past perfect 'had refined' + present conditional 'would be' связывает прошлые исследования ИИ с текущими уровнями технологической сложности. Вы завершили все 10 страниц упражнений Multiple Choice на Third Conditional!",
            incorrectFeedback: "This mixed conditional uses past perfect for refining algorithms and present conditional for current AI sophistication that would exist today.",
            incorrectFeedbackRu: "Это смешанное условное использует past perfect для усовершенствования алгоритмов и present conditional для текущей сложности ИИ, которая существовала бы сегодня."
        }
    ]
};

/* =============================================================================== */
/* ===========================Fill in the Gaps Exercises========================== */

/* ============================================
Page 1: Third Conditional - Career and Educational Decisions
============================================ */
window.grammarExercises['conditionals']['third-conditional-gap-page1'] = {
    title: "Third Conditional - Career and Educational Decisions",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the university ____ more scholarships, underprivileged students would have attended.",
            correctAnswer: "had offered",
            options: ["had offered", "offered", "has offered", "offers"],
            correctFeedback: "Correct! 'Had offered' (past perfect) is used in third conditional to express unreal past conditions that would have led to different outcomes.",
            correctFeedbackRu: "Правильно! 'Had offered' (past perfect) используется в третьем условном для выражения нереальных прошлых условий, которые привели бы к другим результатам.",
            incorrectFeedback: "Remember: Third conditional uses past perfect 'had + past participle' in the if-clause for unreal past situations.",
            incorrectFeedbackRu: "Помните: Третье условное использует past perfect 'had + past participle' в if-части для нереальных прошлых ситуаций."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If James ____ networking events regularly, his career would have progressed faster.",
            correctAnswer: "had attended",
            options: ["had attended", "attended", "has attended", "attends"],
            correctFeedback: "Perfect! 'Had attended' (past perfect) shows how past networking activities would have influenced career development in third conditional.",
            correctFeedbackRu: "Отлично! 'Had attended' (past perfect) показывает, как прошлие сетевые активности повлияли бы на карьерное развитие в третьем условном.",
            incorrectFeedback: "Use past perfect 'had + past participle' to express past actions that didn't happen but would have caused different results.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для выражения прошлых действий, которые не произошли, но привели бы к другим результатам."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If the research team ____ adequate funding, they would have discovered the cure.",
            correctAnswer: "had received",
            options: ["had received", "received", "has received", "receives"],
            correctFeedback: "Excellent! 'Had received' (past perfect) expresses the unreal past condition of getting funding that would have led to scientific breakthrough.",
            correctFeedbackRu: "Отлично! 'Had received' (past perfect) выражает нереальное прошлое условие получения финансирования, которое привело бы к научному прорыву.",
            incorrectFeedback: "Third conditional requires past perfect in the condition clause to show what didn't happen in the past.",
            incorrectFeedbackRu: "Третье условное требует past perfect в условной части, чтобы показать, что не произошло в прошлом."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If the company ____ employee training programs, productivity wouldn't have declined.",
            correctAnswer: "had maintained",
            options: ["had maintained", "maintained", "has maintained", "maintains"],
            correctFeedback: "Correct! 'Had maintained' (past perfect) in third conditional shows how continuing training would have prevented productivity problems.",
            correctFeedbackRu: "Правильно! 'Had maintained' (past perfect) в третьем условном показывает, как продолжение обучения предотвратило бы проблемы с продуктивностью.",
            incorrectFeedback: "Use past perfect 'had + past participle' for actions that should have continued in the past but didn't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для действий, которые должны были продолжаться в прошлом, но не продолжались."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the medical school ____ admission requirements, more diverse doctors would have graduated.",
            correctAnswer: "had broadened",
            options: ["had broadened", "broadened", "has broadened", "broadens"],
            correctFeedback: "Perfect! 'Had broadened' (past perfect) expresses how past policy changes would have created more inclusive medical education.",
            correctFeedbackRu: "Отлично! 'Had broadened' (past perfect) выражает, как прошлые изменения политики создали бы более инклюзивное медицинское образование.",
            incorrectFeedback: "Third conditional uses past perfect to express policy changes that didn't happen but would have improved outcomes.",
            incorrectFeedbackRu: "Третье условное использует past perfect для выражения изменений политики, которые не произошли, но улучшили бы результаты."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If the startup founders ____ market research, their business wouldn't have failed.",
            correctAnswer: "had conducted",
            options: ["had conducted", "conducted", "has conducted", "conducts"],
            correctFeedback: "Excellent! 'Had conducted' (past perfect) shows how proper market research would have prevented business failure in third conditional.",
            correctFeedbackRu: "Отлично! 'Had conducted' (past perfect) показывает, как правильное исследование рынка предотвратило бы провал бизнеса в третьем условном.",
            incorrectFeedback: "Use past perfect 'had + past participle' for business preparations that should have been done but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для бизнес-подготовки, которая должна была быть сделана, но не была."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If the professor ____ modern teaching methods, students would have learned more effectively.",
            correctAnswer: "had implemented",
            options: ["had implemented", "implemented", "has implemented", "implements"],
            correctFeedback: "Correct! 'Had implemented' (past perfect) expresses how adopting new teaching approaches would have improved educational outcomes.",
            correctFeedbackRu: "Правильно! 'Had implemented' (past perfect) выражает, как принятие новых подходов к преподаванию улучшило бы образовательные результаты.",
            incorrectFeedback: "Third conditional requires past perfect to show educational innovations that didn't happen but would have helped students.",
            incorrectFeedbackRu: "Третье условное требует past perfect, чтобы показать образовательные инновации, которые не произошли, но помогли бы студентам."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If the engineering firm ____ safety protocols, the accident wouldn't have occurred.",
            correctAnswer: "had followed",
            options: ["had followed", "followed", "has followed", "follows"],
            correctFeedback: "Perfect! 'Had followed' (past perfect) shows how adhering to safety measures would have prevented workplace accidents.",
            correctFeedbackRu: "Отлично! 'Had followed' (past perfect) показывает, как соблюдение мер безопасности предотвратило бы несчастные случаи на рабочем месте.",
            incorrectFeedback: "Use past perfect 'had + past participle' for safety measures that should have been followed but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для мер безопасности, которые должны были соблюдаться, но не соблюдались."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the law firm ____ pro bono cases, their reputation would have improved significantly.",
            correctAnswer: "had accepted",
            options: ["had accepted", "accepted", "has accepted", "accepts"],
            correctFeedback: "Excellent! 'Had accepted' (past perfect) expresses how taking free legal cases would have enhanced the firm's public image.",
            correctFeedbackRu: "Отлично! 'Had accepted' (past perfect) выражает, как принятие бесплатных юридических дел улучшило бы публичный имидж фирмы.",
            incorrectFeedback: "Third conditional uses past perfect for professional decisions that weren't made but would have improved reputation.",
            incorrectFeedbackRu: "Третье условное использует past perfect для профессиональных решений, которые не были приняты, но улучшили бы репутацию."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If the architect ____ sustainable materials, the building would have been environmentally friendly.",
            correctAnswer: "had chosen",
            options: ["had chosen", "chose", "has chosen", "chooses"],
            correctFeedback: "Correct! 'Had chosen' (past perfect) shows how selecting eco-friendly materials would have created sustainable architecture.",
            correctFeedbackRu: "Правильно! 'Had chosen' (past perfect) показывает, как выбор экологически чистых материалов создал бы устойчивую архитектуру.",
            incorrectFeedback: "Use past perfect 'had + past participle' for design decisions that would have made buildings more environmentally conscious.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для дизайнерских решений, которые сделали бы здания более экологически сознательными."
        }
    ]
};

/* ============================================
Page 2: Third Conditional - Business and Technology Decisions
============================================ */
window.grammarExercises['conditionals']['third-conditional-gap-page2'] = {
    title: "Third Conditional - Business and Technology Decisions",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the tech company ____ cybersecurity measures, hackers wouldn't have breached their system.",
            correctAnswer: "had strengthened",
            options: ["had strengthened", "strengthened", "has strengthened", "strengthens"],
            correctFeedback: "Correct! 'Had strengthened' (past perfect) expresses how improving security would have prevented cyber attacks in third conditional.",
            correctFeedbackRu: "Правильно! 'Had strengthened' (past perfect) выражает, как улучшение безопасности предотвратило бы кибератаки в третьем условном.",
            incorrectFeedback: "Third conditional uses past perfect 'had + past participle' for security improvements that should have been made.",
            incorrectFeedbackRu: "Третье условное использует past perfect 'had + past participle' для улучшений безопасности, которые должны были быть сделаны."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If the retail chain ____ online sales platforms, they wouldn't have lost customers to competitors.",
            correctAnswer: "had developed",
            options: ["had developed", "developed", "has developed", "develops"],
            correctFeedback: "Perfect! 'Had developed' (past perfect) shows how creating digital platforms would have maintained customer loyalty.",
            correctFeedbackRu: "Отлично! 'Had developed' (past perfect) показывает, как создание цифровых платформ сохранило бы лояльность клиентов.",
            incorrectFeedback: "Use past perfect 'had + past participle' for business innovations that weren't implemented but would have prevented losses.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для бизнес-инноваций, которые не были внедрены, но предотвратили бы потери."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If the manufacturing plant ____ automation systems, production costs would have decreased.",
            correctAnswer: "had installed",
            options: ["had installed", "installed", "has installed", "installs"],
            correctFeedback: "Excellent! 'Had installed' (past perfect) expresses how implementing automation would have reduced manufacturing expenses.",
            correctFeedbackRu: "Отлично! 'Had installed' (past perfect) выражает, как внедрение автоматизации снизило бы производственные расходы.",
            incorrectFeedback: "Third conditional requires past perfect for technological upgrades that didn't happen but would have improved efficiency.",
            incorrectFeedbackRu: "Третье условное требует past perfect для технологических обновлений, которые не произошли, но улучшили бы эффективность."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If the software developers ____ user feedback earlier, the application wouldn't have failed.",
            correctAnswer: "had incorporated",
            options: ["had incorporated", "incorporated", "has incorporated", "incorporates"],
            correctFeedback: "Correct! 'Had incorporated' (past perfect) shows how listening to users would have prevented software failure.",
            correctFeedbackRu: "Правильно! 'Had incorporated' (past perfect) показывает, как прислушивание к пользователям предотвратило бы провал программного обеспечения.",
            incorrectFeedback: "Use past perfect 'had + past participle' for development practices that should have been followed but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для практик разработки, которые должны были соблюдаться, но не соблюдались."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the pharmaceutical company ____ clinical trials more thoroughly, side effects would have been discovered.",
            correctAnswer: "had conducted",
            options: ["had conducted", "conducted", "has conducted", "conducts"],
            correctFeedback: "Perfect! 'Had conducted' (past perfect) expresses how thorough testing would have revealed drug safety issues.",
            correctFeedbackRu: "Отлично! 'Had conducted' (past perfect) выражает, как тщательное тестирование выявило бы проблемы безопасности лекарств.",
            incorrectFeedback: "Third conditional uses past perfect for research procedures that should have been more comprehensive.",
            incorrectFeedbackRu: "Третье условное использует past perfect для исследовательских процедур, которые должны были быть более всесторонними."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If the airline ____ maintenance schedules properly, the flight delays wouldn't have occurred.",
            correctAnswer: "had managed",
            options: ["had managed", "managed", "has managed", "manages"],
            correctFeedback: "Excellent! 'Had managed' (past perfect) shows how proper maintenance planning would have prevented operational problems.",
            correctFeedbackRu: "Отлично! 'Had managed' (past perfect) показывает, как правильное планирование обслуживания предотвратило бы операционные проблемы.",
            incorrectFeedback: "Use past perfect 'had + past participle' for organizational practices that weren't maintained but should have been.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для организационных практик, которые не поддерживались, но должны были."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If the telecommunications firm ____ 5G infrastructure earlier, they would have dominated the market.",
            correctAnswer: "had deployed",
            options: ["had deployed", "deployed", "has deployed", "deploys"],
            correctFeedback: "Correct! 'Had deployed' (past perfect) expresses how early technology adoption would have created competitive advantage.",
            correctFeedbackRu: "Правильно! 'Had deployed' (past perfect) выражает, как раннее принятие технологий создало бы конкурентное преимущество.",
            incorrectFeedback: "Third conditional requires past perfect for strategic technology investments that weren't made in time.",
            incorrectFeedbackRu: "Третье условное требует past perfect для стратегических технологических инвестиций, которые не были сделаны вовремя."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If the restaurant chain ____ delivery services during the pandemic, revenue wouldn't have plummeted.",
            correctAnswer: "had launched",
            options: ["had launched", "launched", "has launched", "launches"],
            correctFeedback: "Perfect! 'Had launched' (past perfect) shows how adapting to market conditions would have preserved business income.",
            correctFeedbackRu: "Отлично! 'Had launched' (past perfect) показывает, как адаптация к рыночным условиям сохранила бы доходы бизнеса.",
            incorrectFeedback: "Use past perfect 'had + past participle' for business adaptations that should have been implemented but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для бизнес-адаптаций, которые должны были быть внедрены, но не были."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the energy company ____ renewable sources, their carbon footprint would have been smaller.",
            correctAnswer: "had prioritized",
            options: ["had prioritized", "prioritized", "has prioritized", "prioritizes"],
            correctFeedback: "Excellent! 'Had prioritized' (past perfect) expresses how focusing on clean energy would have reduced environmental impact.",
            correctFeedbackRu: "Отлично! 'Had prioritized' (past perfect) выражает, как фокус на чистой энергии снизил бы воздействие на окружающую среду.",
            incorrectFeedback: "Third conditional uses past perfect for environmental choices that weren't made but would have been beneficial.",
            incorrectFeedbackRu: "Третье условное использует past perfect для экологических выборов, которые не были сделаны, но были бы полезными."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If the logistics company ____ AI-powered routing systems, delivery times would have improved dramatically.",
            correctAnswer: "had implemented",
            options: ["had implemented", "implemented", "has implemented", "implements"],
            correctFeedback: "Correct! 'Had implemented' (past perfect) shows how artificial intelligence would have optimized transportation efficiency.",
            correctFeedbackRu: "Правильно! 'Had implemented' (past perfect) показывает, как искусственный интеллект оптимизировал бы эффективность транспорта.",
            incorrectFeedback: "Use past perfect 'had + past participle' for technological solutions that weren't adopted but would have enhanced performance.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для технологических решений, которые не были приняты, но улучшили бы производительность."
        }
    ]
};

/* ============================================
Page 3: Third Conditional - Health and Social Issues
============================================ */
window.grammarExercises['conditionals']['third-conditional-gap-page3'] = {
    title: "Third Conditional - Health and Social Issues",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the government ____ smoking in public places earlier, lung disease rates would have declined.",
            correctAnswer: "had banned",
            options: ["had banned", "banned", "has banned", "bans"],
            correctFeedback: "Correct! 'Had banned' (past perfect) expresses how earlier public health policies would have prevented respiratory illnesses.",
            correctFeedbackRu: "Правильно! 'Had banned' (past perfect) выражает, как более ранние политики общественного здравоохранения предотвратили бы респираторные заболевания.",
            incorrectFeedback: "Third conditional uses past perfect 'had + past participle' for health policies that should have been implemented sooner.",
            incorrectFeedbackRu: "Третье условное использует past perfect 'had + past participle' для политик здравоохранения, которые должны были быть внедрены раньше."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If the community ____ mental health programs, suicide rates wouldn't have increased.",
            correctAnswer: "had funded",
            options: ["had funded", "funded", "has funded", "funds"],
            correctFeedback: "Perfect! 'Had funded' (past perfect) shows how investing in mental health support would have saved lives.",
            correctFeedbackRu: "Отлично! 'Had funded' (past perfect) показывает, как инвестиции в поддержку психического здоровья спасли бы жизни.",
            incorrectFeedback: "Use past perfect 'had + past participle' for social investments that weren't made but would have prevented tragedies.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для социальных инвестиций, которые не были сделаны, но предотвратили бы трагедии."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If the city ____ affordable housing projects, homelessness wouldn't have become so widespread.",
            correctAnswer: "had built",
            options: ["had built", "built", "has built", "builds"],
            correctFeedback: "Excellent! 'Had built' (past perfect) expresses how constructing low-cost homes would have addressed housing shortages.",
            correctFeedbackRu: "Отлично! 'Had built' (past perfect) выражает, как строительство недорогого жилья решило бы проблемы нехватки жилья.",
            incorrectFeedback: "Third conditional requires past perfect for urban development that didn't happen but would have solved social problems.",
            incorrectFeedbackRu: "Третье условное требует past perfect для городского развития, которое не произошло, но решило бы социальные проблемы."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If healthcare workers ____ adequate protective equipment, fewer would have contracted the virus.",
            correctAnswer: "had received",
            options: ["had received", "received", "has received", "receives"],
            correctFeedback: "Correct! 'Had received' (past perfect) shows how proper safety gear would have protected medical professionals.",
            correctFeedbackRu: "Правильно! 'Had received' (past perfect) показывает, как правильное защитное снаряжение защитило бы медицинских работников.",
            incorrectFeedback: "Use past perfect 'had + past participle' for safety measures that should have been provided but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для мер безопасности, которые должны были быть предоставлены, но не были."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the school district ____ nutritious meal programs, childhood obesity rates would have decreased.",
            correctAnswer: "had introduced",
            options: ["had introduced", "introduced", "has introduced", "introduces"],
            correctFeedback: "Perfect! 'Had introduced' (past perfect) expresses how healthy food initiatives would have improved children's health.",
            correctFeedbackRu: "Отлично! 'Had introduced' (past perfect) выражает, как инициативы здорового питания улучшили бы здоровье детей.",
            incorrectFeedback: "Third conditional uses past perfect for educational health programs that weren't implemented but would have helped students.",
            incorrectFeedbackRu: "Третье условное использует past perfect для образовательных программ здоровья, которые не были внедрены, но помогли бы студентам."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If environmental agencies ____ air quality standards, respiratory problems wouldn't have worsened.",
            correctAnswer: "had enforced",
            options: ["had enforced", "enforced", "has enforced", "enforces"],
            correctFeedback: "Excellent! 'Had enforced' (past perfect) shows how strict environmental regulations would have protected public health.",
            correctFeedbackRu: "Отлично! 'Had enforced' (past perfect) показывает, как строгие экологические регуляции защитили бы общественное здоровье.",
            incorrectFeedback: "Use past perfect 'had + past participle' for regulatory enforcement that didn't happen but would have prevented health issues.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для регулятивного принуждения, которое не произошло, но предотвратило бы проблемы со здоровьем."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If social workers ____ more resources, vulnerable families would have received better support.",
            correctAnswer: "had accessed",
            options: ["had accessed", "accessed", "has accessed", "accesses"],
            correctFeedback: "Correct! 'Had accessed' (past perfect) expresses how obtaining adequate resources would have enabled better family assistance.",
            correctFeedbackRu: "Правильно! 'Had accessed' (past perfect) выражает, как получение адекватных ресурсов обеспечило бы лучшую помощь семьям.",
            incorrectFeedback: "Third conditional requires past perfect for resource availability that didn't happen but would have improved social services.",
            incorrectFeedbackRu: "Третье условное требует past perfect для доступности ресурсов, которая не произошла, но улучшила бы социальные услуги."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If the rehabilitation center ____ evidence-based therapies, addiction recovery rates would have improved.",
            correctAnswer: "had adopted",
            options: ["had adopted", "adopted", "has adopted", "adopts"],
            correctFeedback: "Perfect! 'Had adopted' (past perfect) shows how implementing proven treatments would have helped more patients recover.",
            correctFeedbackRu: "Отлично! 'Had adopted' (past perfect) показывает, как внедрение проверенных методов лечения помогло бы большему количеству пациентов выздороветь.",
            incorrectFeedback: "Use past perfect 'had + past participle' for treatment approaches that should have been used but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для подходов к лечению, которые должны были использоваться, но не использовались."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If the police department ____ community policing strategies, public trust would have increased.",
            correctAnswer: "had implemented",
            options: ["had implemented", "implemented", "has implemented", "implements"],
            correctFeedback: "Excellent! 'Had implemented' (past perfect) expresses how community-focused approaches would have built better police relations.",
            correctFeedbackRu: "Отлично! 'Had implemented' (past perfect) выражает, как подходы, ориентированные на сообщество, построили бы лучшие отношения с полицией.",
            incorrectFeedback: "Third conditional uses past perfect for policing reforms that weren't adopted but would have improved community relations.",
            incorrectFeedbackRu: "Третье условное использует past perfect для реформ полиции, которые не были приняты, но улучшили бы отношения с сообществом."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If the public transportation system ____ accessibility features, disabled passengers would have traveled more easily.",
            correctAnswer: "had included",
            options: ["had included", "included", "has included", "includes"],
            correctFeedback: "Correct! 'Had included' (past perfect) shows how designing for accessibility would have created inclusive transportation.",
            correctFeedbackRu: "Правильно! 'Had included' (past perfect) показывает, как дизайн для доступности создал бы инклюзивный транспорт.",
            incorrectFeedback: "Use past perfect 'had + past participle' for design decisions that should have considered all users but didn't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для дизайнерских решений, которые должны были учитывать всех пользователей, но не учитывали."
        }
    ]
};

/* ============================================
Page 4: Third Conditional - Environmental and Scientific Research
============================================ */
window.grammarExercises['conditionals']['third-conditional-gap-page4'] = {
    title: "Third Conditional - Environmental and Scientific Research",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If marine biologists ____ ocean acidification earlier, coral reef damage could have been prevented.",
            correctAnswer: "had studied",
            options: ["had studied", "studied", "has studied", "studies"],
            correctFeedback: "Correct! 'Had studied' (past perfect) expresses how earlier scientific research would have enabled coral reef protection.",
            correctFeedbackRu: "Правильно! 'Had studied' (past perfect) выражает, как более ранние научные исследования обеспечили бы защиту коралловых рифов.",
            incorrectFeedback: "Third conditional uses past perfect 'had + past participle' for scientific investigations that should have been conducted sooner.",
            incorrectFeedbackRu: "Третье условное использует past perfect 'had + past participle' для научных исследований, которые должны были проводиться раньше."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If the forestry department ____ illegal logging, deforestation rates wouldn't have accelerated.",
            correctAnswer: "had prevented",
            options: ["had prevented", "prevented", "has prevented", "prevents"],
            correctFeedback: "Perfect! 'Had prevented' (past perfect) shows how stopping illegal activities would have preserved forest ecosystems.",
            correctFeedbackRu: "Отлично! 'Had prevented' (past perfect) показывает, как остановка незаконной деятельности сохранила бы лесные экосистемы.",
            incorrectFeedback: "Use past perfect 'had + past participle' for conservation actions that weren't taken but would have protected natural resources.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для природоохранных действий, которые не были предприняты, но защитили бы природные ресурсы."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If pharmaceutical researchers ____ natural compounds more extensively, breakthrough medicines would have been discovered.",
            correctAnswer: "had explored",
            options: ["had explored", "explored", "has explored", "explores"],
            correctFeedback: "Excellent! 'Had explored' (past perfect) expresses how thorough investigation of nature would have yielded medical advances.",
            correctFeedbackRu: "Отлично! 'Had explored' (past perfect) выражает, как тщательное исследование природы дало бы медицинские достижения.",
            incorrectFeedback: "Third conditional requires past perfect for research approaches that weren't pursued but would have led to discoveries.",
            incorrectFeedbackRu: "Третье условное требует past perfect для исследовательских подходов, которые не использовались, но привели бы к открытиям."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If climatologists ____ more accurate prediction models, extreme weather preparation would have improved.",
            correctAnswer: "had developed",
            options: ["had developed", "developed", "has developed", "develops"],
            correctFeedback: "Correct! 'Had developed' (past perfect) shows how better forecasting technology would have enhanced disaster readiness.",
            correctFeedbackRu: "Правильно! 'Had developed' (past perfect) показывает, как лучшие технологии прогнозирования улучшили бы готовность к катастрофам.",
            incorrectFeedback: "Use past perfect 'had + past participle' for technological improvements that should have been made but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для технологических улучшений, которые должны были быть сделаны, но не были."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If agricultural scientists ____ drought-resistant crops decades ago, food security would have been stronger.",
            correctAnswer: "had engineered",
            options: ["had engineered", "engineered", "has engineered", "engineers"],
            correctFeedback: "Perfect! 'Had engineered' (past perfect) expresses how developing resilient plants would have protected food supplies.",
            correctFeedbackRu: "Отлично! 'Had engineered' (past perfect) выражает, как разработка устойчивых растений защитила бы продовольственные запасы.",
            incorrectFeedback: "Third conditional uses past perfect for agricultural innovations that weren't created but would have addressed hunger.",
            incorrectFeedbackRu: "Третье условное использует past perfect для сельскохозяйственных инноваций, которые не были созданы, но решили бы проблему голода."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If nuclear physicists ____ fusion technology earlier, clean energy would have become widespread.",
            correctAnswer: "had perfected",
            options: ["had perfected", "perfected", "has perfected", "perfects"],
            correctFeedback: "Excellent! 'Had perfected' (past perfect) shows how mastering fusion power would have revolutionized energy production.",
            correctFeedbackRu: "Отлично! 'Had perfected' (past perfect) показывает, как овладение термоядерной энергией революционизировало бы производство энергии.",
            incorrectFeedback: "Use past perfect 'had + past participle' for breakthrough technologies that weren't achieved but would have transformed society.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для прорывных технологий, которые не были достигнуты, но трансформировали бы общество."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If space scientists ____ asteroid detection systems, planetary defense would have been more effective.",
            correctAnswer: "had enhanced",
            options: ["had enhanced", "enhanced", "has enhanced", "enhances"],
            correctFeedback: "Correct! 'Had enhanced' (past perfect) expresses how improving monitoring technology would have better protected Earth.",
            correctFeedbackRu: "Правильно! 'Had enhanced' (past perfect) выражает, как улучшение технологий мониторинга лучше защитило бы Землю.",
            incorrectFeedback: "Third conditional requires past perfect for defense improvements that weren't implemented but would have increased safety.",
            incorrectFeedbackRu: "Третье условное требует past perfect для улучшений обороны, которые не были внедрены, но повысили бы безопасность."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If microbiologists ____ antibiotic resistance patterns, pandemic responses would have been more targeted.",
            correctAnswer: "had mapped",
            options: ["had mapped", "mapped", "has mapped", "maps"],
            correctFeedback: "Perfect! 'Had mapped' (past perfect) shows how understanding bacterial evolution would have guided better treatment strategies.",
            correctFeedbackRu: "Отлично! 'Had mapped' (past perfect) показывает, как понимание бактериальной эволюции направило бы лучшие стратегии лечения.",
            incorrectFeedback: "Use past perfect 'had + past participle' for scientific mapping that should have been completed but wasn't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для научного картирования, которое должно было быть завершено, но не было."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If environmental engineers ____ carbon capture technology, greenhouse gas levels would have stabilized.",
            correctAnswer: "had scaled",
            options: ["had scaled", "scaled", "has scaled", "scales"],
            correctFeedback: "Excellent! 'Had scaled' (past perfect) expresses how expanding carbon removal would have controlled atmospheric pollution.",
            correctFeedbackRu: "Отлично! 'Had scaled' (past perfect) выражает, как расширение удаления углерода контролировало бы атмосферное загрязнение.",
            incorrectFeedback: "Third conditional uses past perfect for environmental technologies that weren't scaled up but would have mitigated climate change.",
            incorrectFeedbackRu: "Третье условное использует past perfect для экологических технологий, которые не были масштабированы, но смягчили бы изменение климата."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If geological surveys ____ seismic activity more accurately, earthquake damage would have been minimized.",
            correctAnswer: "had predicted",
            options: ["had predicted", "predicted", "has predicted", "predicts"],
            correctFeedback: "Correct! 'Had predicted' (past perfect) shows how better earthquake forecasting would have reduced destruction and casualties.",
            correctFeedbackRu: "Правильно! 'Had predicted' (past perfect) показывает, как лучшее прогнозирование землетрясений уменьшило бы разрушения и жертвы.",
            incorrectFeedback: "Use past perfect 'had + past participle' for predictive capabilities that weren't developed but would have saved lives.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для прогностических возможностей, которые не были развиты, но спасли бы жизни."
        }
    ]
};

/* ============================================
Page 5: Third Conditional - Cultural and Educational Transformation
============================================ */
window.grammarExercises['conditionals']['third-conditional-gap-page5'] = {
    title: "Third Conditional - Cultural and Educational Transformation",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If educators ____ multilingual teaching methods, immigrant students would have integrated more successfully.",
            correctAnswer: "had embraced",
            options: ["had embraced", "embraced", "has embraced", "embraces"],
            correctFeedback: "Correct! 'Had embraced' (past perfect) expresses how accepting diverse teaching approaches would have helped immigrant children succeed.",
            correctFeedbackRu: "Правильно! 'Had embraced' (past perfect) выражает, как принятие разнообразных подходов к преподаванию помогло бы детям-иммигрантам преуспеть.",
            incorrectFeedback: "Third conditional uses past perfect 'had + past participle' for educational practices that should have been adopted.",
            incorrectFeedbackRu: "Третье условное использует past perfect 'had + past participle' для образовательных практик, которые должны были быть приняты."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If museums ____ interactive digital exhibits, younger generations would have engaged more with history.",
            correctAnswer: "had created",
            options: ["had created", "created", "has created", "creates"],
            correctFeedback: "Perfect! 'Had created' (past perfect) shows how innovative displays would have attracted youth to cultural learning.",
            correctFeedbackRu: "Отлично! 'Had created' (past perfect) показывает, как инновационные экспозиции привлекли бы молодежь к культурному обучению.",
            incorrectFeedback: "Use past perfect 'had + past participle' for cultural innovations that weren't implemented but would have increased participation.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для культурных инноваций, которые не были внедрены, но увеличили бы участие."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If universities ____ interdisciplinary programs, students would have developed broader perspectives.",
            correctAnswer: "had established",
            options: ["had established", "established", "has established", "establishes"],
            correctFeedback: "Excellent! 'Had established' (past perfect) expresses how cross-field education would have created more well-rounded graduates.",
            correctFeedbackRu: "Отлично! 'Had established' (past perfect) выражает, как междисциплинарное образование создало бы более разносторонних выпускников.",
            incorrectFeedback: "Third conditional requires past perfect for academic reforms that weren't created but would have enhanced learning.",
            incorrectFeedbackRu: "Третье условное требует past perfect для академических реформ, которые не были созданы, но улучшили бы обучение."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If libraries ____ community maker spaces, digital literacy would have improved significantly.",
            correctAnswer: "had transformed",
            options: ["had transformed", "transformed", "has transformed", "transforms"],
            correctFeedback: "Correct! 'Had transformed' (past perfect) shows how modernizing libraries would have enhanced technological skills.",
            correctFeedbackRu: "Правильно! 'Had transformed' (past perfect) показывает, как модернизация библиотек улучшила бы технологические навыки.",
            incorrectFeedback: "Use past perfect 'had + past participle' for institutional changes that should have been made but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для институциональных изменений, которые должны были быть сделаны, но не были."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If arts organizations ____ community outreach programs, cultural appreciation would have flourished.",
            correctAnswer: "had expanded",
            options: ["had expanded", "expanded", "has expanded", "expands"],
            correctFeedback: "Perfect! 'Had expanded' (past perfect) expresses how broader cultural access would have cultivated artistic appreciation.",
            correctFeedbackRu: "Отлично! 'Had expanded' (past perfect) выражает, как более широкий культурный доступ развил бы художественное понимание.",
            incorrectFeedback: "Third conditional uses past perfect for cultural initiatives that weren't expanded but would have enriched communities.",
            incorrectFeedbackRu: "Третье условное использует past perfect для культурных инициатив, которые не были расширены, но обогатили бы сообщества."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If linguists ____ endangered languages systematically, cultural heritage would have been preserved.",
            correctAnswer: "had documented",
            options: ["had documented", "documented", "has documented", "documents"],
            correctFeedback: "Excellent! 'Had documented' (past perfect) shows how recording languages would have saved invaluable cultural knowledge.",
            correctFeedbackRu: "Отлично! 'Had documented' (past perfect) показывает, как запись языков сохранила бы бесценные культурные знания.",
            incorrectFeedback: "Use past perfect 'had + past participle' for preservation efforts that weren't undertaken but would have saved traditions.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для усилий по сохранению, которые не предпринимались, но спасли бы традиции."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If academic institutions ____ open-access research policies, scientific knowledge would have spread faster.",
            correctAnswer: "had mandated",
            options: ["had mandated", "mandated", "has mandated", "mandates"],
            correctFeedback: "Correct! 'Had mandated' (past perfect) expresses how requiring free research access would have accelerated scientific progress.",
            correctFeedbackRu: "Правильно! 'Had mandated' (past perfect) выражает, как требование бесплатного доступа к исследованиям ускорило бы научный прогресс.",
            incorrectFeedback: "Third conditional requires past perfect for policy changes that weren't implemented but would have democratized information.",
            incorrectFeedbackRu: "Третье условное требует past perfect для изменений политики, которые не были внедрены, но демократизировали бы информацию."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If performing arts centers ____ accessibility features, disabled artists would have participated more fully.",
            correctAnswer: "had incorporated",
            options: ["had incorporated", "incorporated", "has incorporated", "incorporates"],
            correctFeedback: "Perfect! 'Had incorporated' (past perfect) shows how inclusive design would have enabled broader artistic participation.",
            correctFeedbackRu: "Отлично! 'Had incorporated' (past perfect) показывает, как инклюзивный дизайн обеспечил бы более широкое участие в искусстве.",
            incorrectFeedback: "Use past perfect 'had + past participle' for inclusive designs that should have been implemented but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для инклюзивных дизайнов, которые должны были быть внедрены, но не были."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If media organizations ____ fact-checking protocols, misinformation wouldn't have proliferated so rapidly.",
            correctAnswer: "had strengthened",
            options: ["had strengthened", "strengthened", "has strengthened", "strengthens"],
            correctFeedback: "Excellent! 'Had strengthened' (past perfect) expresses how rigorous verification would have prevented false information spread.",
            correctFeedbackRu: "Отлично! 'Had strengthened' (past perfect) выражает, как тщательная проверка предотвратила бы распространение ложной информации.",
            incorrectFeedback: "Third conditional uses past perfect for journalistic standards that weren't enforced but would have protected public discourse.",
            incorrectFeedbackRu: "Третье условное использует past perfect для журналистских стандартов, которые не применялись, но защитили бы общественный дискурс."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If vocational schools ____ apprenticeship partnerships, skilled workforce shortages wouldn't have emerged.",
            correctAnswer: "had fostered",
            options: ["had fostered", "fostered", "has fostered", "fosters"],
            correctFeedback: "Correct! 'Had fostered' (past perfect) shows how building industry connections would have developed necessary job skills.",
            correctFeedbackRu: "Правильно! 'Had fostered' (past perfect) показывает, как создание связей с промышленностью развило бы необходимые рабочие навыки.",
            incorrectFeedback: "Use past perfect 'had + past participle' for educational partnerships that weren't developed but would have addressed labor needs.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для образовательных партнерств, которые не были развиты, но решили бы трудовые потребности."
        }
    ]
};

/* ============================================
Page 6: Third Conditional - International Relations and Global Governance
============================================ */
window.grammarExercises['conditionals']['third-conditional-gap-page6'] = {
    title: "Third Conditional - International Relations and Global Governance",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If diplomatic negotiations ____ multilateral frameworks, regional conflicts would have been resolved peacefully.",
            correctAnswer: "had utilized",
            options: ["had utilized", "utilized", "has utilized", "utilizes"],
            correctFeedback: "Correct! 'Had utilized' (past perfect) expresses how using comprehensive diplomatic approaches would have prevented armed conflicts.",
            correctFeedbackRu: "Правильно! 'Had utilized' (past perfect) выражает, как использование комплексных дипломатических подходов предотвратило бы вооруженные конфликты.",
            incorrectFeedback: "Third conditional uses past perfect 'had + past participle' for diplomatic strategies that weren't employed but would have maintained peace.",
            incorrectFeedbackRu: "Третье условное использует past perfect 'had + past participle' для дипломатических стратегий, которые не применялись, но поддержали бы мир."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If international tribunals ____ war crimes more consistently, human rights violations would have diminished.",
            correctAnswer: "had prosecuted",
            options: ["had prosecuted", "prosecuted", "has prosecuted", "prosecutes"],
            correctFeedback: "Perfect! 'Had prosecuted' (past perfect) shows how consistent legal accountability would have deterred human rights abuses.",
            correctFeedbackRu: "Отлично! 'Had prosecuted' (past perfect) показывает, как последовательная правовая ответственность сдержала бы нарушения прав человека.",
            incorrectFeedback: "Use past perfect 'had + past participle' for justice mechanisms that should have been enforced but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для механизмов правосудия, которые должны были применяться, но не применялись."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If trade organizations ____ fair labor standards globally, worker exploitation wouldn't have persisted.",
            correctAnswer: "had enforced",
            options: ["had enforced", "enforced", "has enforced", "enforces"],
            correctFeedback: "Excellent! 'Had enforced' (past perfect) expresses how implementing worker protections would have eliminated labor abuses.",
            correctFeedbackRu: "Отлично! 'Had enforced' (past perfect) выражает, как внедрение защиты работников устранило бы трудовые злоупотребления.",
            incorrectFeedback: "Third conditional requires past perfect for regulatory enforcement that didn't happen but would have protected workers.",
            incorrectFeedbackRu: "Третье условное требует past perfect для регулятивного принуждения, которое не произошло, но защитило бы работников."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If refugee assistance programs ____ adequate resources, humanitarian crises would have been mitigated.",
            correctAnswer: "had secured",
            options: ["had secured", "secured", "has secured", "secures"],
            correctFeedback: "Correct! 'Had secured' (past perfect) shows how sufficient funding would have alleviated refugee suffering.",
            correctFeedbackRu: "Правильно! 'Had secured' (past perfect) показывает, как достаточное финансирование облегчило бы страдания беженцев.",
            incorrectFeedback: "Use past perfect 'had + past participle' for humanitarian funding that wasn't obtained but would have saved lives.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для гуманитарного финансирования, которое не было получено, но спасло бы жизни."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If nuclear disarmament treaties ____ binding verification mechanisms, weapons proliferation would have been controlled.",
            correctAnswer: "had included",
            options: ["had included", "included", "has included", "includes"],
            correctFeedback: "Perfect! 'Had included' (past perfect) expresses how comprehensive oversight would have prevented nuclear weapons spread.",
            correctFeedbackRu: "Отлично! 'Had included' (past perfect) выражает, как комплексный надзор предотвратил бы распространение ядерного оружия.",
            incorrectFeedback: "Third conditional uses past perfect for treaty provisions that weren't incorporated but would have enhanced security.",
            incorrectFeedbackRu: "Третье условное использует past perfect для договорных положений, которые не были включены, но усилили бы безопасность."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If global health organizations ____ pandemic preparedness protocols, disease outbreaks wouldn't have overwhelmed healthcare systems.",
            correctAnswer: "had coordinated",
            options: ["had coordinated", "coordinated", "has coordinated", "coordinates"],
            correctFeedback: "Excellent! 'Had coordinated' (past perfect) shows how unified health planning would have managed infectious disease responses.",
            correctFeedbackRu: "Отлично! 'Had coordinated' (past perfect) показывает, как единое планирование здравоохранения управляло бы реагированием на инфекционные заболевания.",
            incorrectFeedback: "Use past perfect 'had + past participle' for international coordination that should have been established but wasn't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для международной координации, которая должна была быть установлена, но не была."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If economic sanctions ____ leadership exclusively rather than affecting civilians, political change would have occurred more effectively.",
            correctAnswer: "had focused",
            options: ["had focused", "focused", "has focused", "focuses"],
            correctFeedback: "Correct! 'Had focused' (past perfect) expresses how precise sanctions would have achieved political goals without harming innocent populations.",
            correctFeedbackRu: "Правильно! 'Had focused' (past perfect) выражает, как точные санкции достигли бы политических целей без вреда невинному населению.",
            incorrectFeedback: "Third conditional requires past perfect for strategic approaches that weren't used but would have been more effective.",
            incorrectFeedbackRu: "Третье условное требует past perfect для стратегических подходов, которые не использовались, но были бы более эффективными."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If cybersecurity alliances ____ information sharing protocols, international cyber attacks would have been prevented.",
            correctAnswer: "had established",
            options: ["had established", "established", "has established", "establishes"],
            correctFeedback: "Perfect! 'Had established' (past perfect) shows how collaborative defense systems would have protected against digital threats.",
            correctFeedbackRu: "Отлично! 'Had established' (past perfect) показывает, как совместные системы защиты защитили бы от цифровых угроз.",
            incorrectFeedback: "Use past perfect 'had + past participle' for security partnerships that weren't formed but would have enhanced protection.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для партнерств безопасности, которые не были сформированы, но усилили бы защиту."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If maritime law enforcement ____ illegal fishing operations, ocean ecosystems would have remained healthier.",
            correctAnswer: "had intercepted",
            options: ["had intercepted", "intercepted", "has intercepted", "intercepts"],
            correctFeedback: "Excellent! 'Had intercepted' (past perfect) expresses how stopping illegal fishing would have preserved marine biodiversity.",
            correctFeedbackRu: "Отлично! 'Had intercepted' (past perfect) выражает, как остановка незаконного рыболовства сохранила бы морское биоразнообразие.",
            incorrectFeedback: "Third conditional uses past perfect for enforcement actions that weren't taken but would have protected natural resources.",
            incorrectFeedbackRu: "Третье условное использует past perfect для принудительных действий, которые не предпринимались, но защитили бы природные ресурсы."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If international courts ____ corporate accountability frameworks, multinational companies wouldn't have exploited developing nations.",
            correctAnswer: "had implemented",
            options: ["had implemented", "implemented", "has implemented", "implements"],
            correctFeedback: "Correct! 'Had implemented' (past perfect) shows how corporate oversight would have prevented exploitation of vulnerable countries.",
            correctFeedbackRu: "Правильно! 'Had implemented' (past perfect) показывает, как корпоративный надзор предотвратил бы эксплуатацию уязвимых стран.",
            incorrectFeedback: "Use past perfect 'had + past participle' for accountability measures that should have been created but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для мер ответственности, которые должны были быть созданы, но не были."
        }
    ]
};

/* ============================================
Page 7: Third Conditional - Urban Planning and Infrastructure Development
============================================ */
window.grammarExercises['conditionals']['third-conditional-gap-page7'] = {
    title: "Third Conditional - Urban Planning and Infrastructure Development",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If city planners ____ sustainable transportation networks, urban air pollution would have decreased significantly.",
            correctAnswer: "had designed",
            options: ["had designed", "designed", "has designed", "designs"],
            correctFeedback: "Correct! 'Had designed' (past perfect) expresses how eco-friendly transport planning would have improved urban air quality.",
            correctFeedbackRu: "Правильно! 'Had designed' (past perfect) выражает, как экологичное планирование транспорта улучшило бы качество городского воздуха.",
            incorrectFeedback: "Third conditional uses past perfect 'had + past participle' for urban planning that wasn't implemented but would have benefited cities.",
            incorrectFeedbackRu: "Третье условное использует past perfect 'had + past participle' для городского планирования, которое не было внедрено, но принесло бы пользу городам."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If municipal authorities ____ flood management systems, storm damage wouldn't have devastated residential areas.",
            correctAnswer: "had upgraded",
            options: ["had upgraded", "upgraded", "has upgraded", "upgrades"],
            correctFeedback: "Perfect! 'Had upgraded' (past perfect) shows how improving drainage infrastructure would have protected homes from flooding.",
            correctFeedbackRu: "Отлично! 'Had upgraded' (past perfect) показывает, как улучшение дренажной инфраструктуры защитило бы дома от наводнений.",
            incorrectFeedback: "Use past perfect 'had + past participle' for infrastructure improvements that weren't made but would have prevented disasters.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для улучшений инфраструктуры, которые не были сделаны, но предотвратили бы катастрофы."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If housing developers ____ affordable housing quotas, urban gentrification wouldn't have displaced low-income families.",
            correctAnswer: "had maintained",
            options: ["had maintained", "maintained", "has maintained", "maintains"],
            correctFeedback: "Excellent! 'Had maintained' (past perfect) expresses how preserving affordable housing would have prevented community displacement.",
            correctFeedbackRu: "Отлично! 'Had maintained' (past perfect) выражает, как сохранение доступного жилья предотвратило бы переселение сообществ.",
            incorrectFeedback: "Third conditional requires past perfect for housing policies that weren't sustained but would have protected communities.",
            incorrectFeedbackRu: "Третье условное требует past perfect для жилищной политики, которая не поддерживалась, но защитила бы сообщества."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If traffic engineers ____ intelligent signal systems, commute times would have been reduced dramatically.",
            correctAnswer: "had installed",
            options: ["had installed", "installed", "has installed", "installs"],
            correctFeedback: "Correct! 'Had installed' (past perfect) shows how smart traffic technology would have optimized urban mobility.",
            correctFeedbackRu: "Правильно! 'Had installed' (past perfect) показывает, как умные транспортные технологии оптимизировали бы городскую мобильность.",
            incorrectFeedback: "Use past perfect 'had + past participle' for technological upgrades that weren't implemented but would have improved efficiency.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для технологических обновлений, которые не были внедрены, но улучшили бы эффективность."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If waste management facilities ____ recycling capabilities, landfill overflow wouldn't have created environmental hazards.",
            correctAnswer: "had expanded",
            options: ["had expanded", "expanded", "has expanded", "expands"],
            correctFeedback: "Perfect! 'Had expanded' (past perfect) expresses how increasing recycling capacity would have prevented waste disposal problems.",
            correctFeedbackRu: "Отлично! 'Had expanded' (past perfect) выражает, как увеличение мощности переработки предотвратило бы проблемы утилизации отходов.",
            incorrectFeedback: "Third conditional uses past perfect for waste management improvements that weren't made but would have protected the environment.",
            incorrectFeedbackRu: "Третье условное использует past perfect для улучшений управления отходами, которые не были сделаны, но защитили бы окружающую среду."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If construction companies ____ earthquake-resistant building codes, structural collapses wouldn't have occurred during seismic events.",
            correctAnswer: "had followed",
            options: ["had followed", "followed", "has followed", "follows"],
            correctFeedback: "Excellent! 'Had followed' (past perfect) shows how adhering to safety standards would have prevented building failures.",
            correctFeedbackRu: "Отлично! 'Had followed' (past perfect) показывает, как соблюдение стандартов безопасности предотвратило бы разрушение зданий.",
            incorrectFeedback: "Use past perfect 'had + past participle' for safety compliance that wasn't maintained but would have saved lives.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для соблюдения безопасности, которое не поддерживалось, но спасло бы жизни."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If energy grids ____ renewable power sources, carbon emissions would have been minimized in urban centers.",
            correctAnswer: "had integrated",
            options: ["had integrated", "integrated", "has integrated", "integrates"],
            correctFeedback: "Correct! 'Had integrated' (past perfect) expresses how incorporating clean energy would have reduced city pollution levels.",
            correctFeedbackRu: "Правильно! 'Had integrated' (past perfect) выражает, как включение чистой энергии снизило бы уровни загрязнения города.",
            incorrectFeedback: "Third conditional requires past perfect for energy transitions that weren't completed but would have benefited urban environments.",
            incorrectFeedbackRu: "Третье условное требует past perfect для энергетических переходов, которые не были завершены, но принесли бы пользу городской среде."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If park systems ____ green corridors throughout the city, urban heat islands wouldn't have intensified so severely.",
            correctAnswer: "had created",
            options: ["had created", "created", "has created", "creates"],
            correctFeedback: "Perfect! 'Had created' (past perfect) shows how establishing green spaces would have regulated urban temperatures.",
            correctFeedbackRu: "Отлично! 'Had created' (past perfect) показывает, как создание зеленых пространств регулировало бы городские температуры.",
            incorrectFeedback: "Use past perfect 'had + past participle' for environmental planning that wasn't implemented but would have mitigated climate effects.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для экологического планирования, которое не было внедрено, но смягчило бы климатические эффекты."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If telecommunications infrastructure ____ fiber optic networks, digital divides wouldn't have persisted in underserved neighborhoods.",
            correctAnswer: "had prioritized",
            options: ["had prioritized", "prioritized", "has prioritized", "prioritizes"],
            correctFeedback: "Excellent! 'Had prioritized' (past perfect) expresses how focusing on high-speed internet would have eliminated connectivity gaps.",
            correctFeedbackRu: "Отлично! 'Had prioritized' (past perfect) выражает, как фокус на высокоскоростном интернете устранил бы пробелы в подключении.",
            incorrectFeedback: "Third conditional uses past perfect for infrastructure priorities that weren't established but would have ensured digital equity.",
            incorrectFeedbackRu: "Третье условное использует past perfect для приоритетов инфраструктуры, которые не были установлены, но обеспечили бы цифровое равенство."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If water treatment plants ____ advanced filtration technologies, contamination incidents wouldn't have endangered public health.",
            correctAnswer: "had adopted",
            options: ["had adopted", "adopted", "has adopted", "adopts"],
            correctFeedback: "Correct! 'Had adopted' (past perfect) shows how implementing superior purification would have protected drinking water safety.",
            correctFeedbackRu: "Правильно! 'Had adopted' (past perfect) показывает, как внедрение превосходной очистки защитило бы безопасность питьевой воды.",
            incorrectFeedback: "Use past perfect 'had + past participle' for technological adoptions that weren't made but would have safeguarded communities.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для технологических принятий, которые не были сделаны, но защитили бы сообщества."
        }
    ]
};

/* ============================================
Page 8: Third Conditional - Financial Markets and Economic Policy
============================================ */
window.grammarExercises['conditionals']['third-conditional-gap-page8'] = {
    title: "Third Conditional - Financial Markets and Economic Policy",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If central banks ____ interest rates more gradually, the housing market wouldn't have crashed so dramatically.",
            correctAnswer: "had adjusted",
            options: ["had adjusted", "adjusted", "has adjusted", "adjusts"],
            correctFeedback: "Correct! 'Had adjusted' (past perfect) expresses how careful monetary policy would have prevented real estate bubbles.",
            correctFeedbackRu: "Правильно! 'Had adjusted' (past perfect) выражает, как осторожная денежная политика предотвратила бы пузыри недвижимости.",
            incorrectFeedback: "Third conditional uses past perfect 'had + past participle' for monetary policies that weren't implemented but would have stabilized markets.",
            incorrectFeedbackRu: "Третье условное использует past perfect 'had + past participle' для денежной политики, которая не была внедрена, но стабилизировала бы рынки."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If financial institutions ____ transparent risk disclosure practices, investors wouldn't have made uninformed decisions.",
            correctAnswer: "had maintained",
            options: ["had maintained", "maintained", "has maintained", "maintains"],
            correctFeedback: "Perfect! 'Had maintained' (past perfect) shows how honest financial reporting would have protected individual investors.",
            correctFeedbackRu: "Отлично! 'Had maintained' (past perfect) показывает, как честная финансовая отчетность защитила бы индивидуальных инвесторов.",
            incorrectFeedback: "Use past perfect 'had + past participle' for transparency practices that weren't sustained but would have prevented losses.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для практик прозрачности, которые не поддерживались, но предотвратили бы потери."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If pension funds ____ diversified investment portfolios, retirees wouldn't have lost their life savings.",
            correctAnswer: "had maintained",
            options: ["had maintained", "maintained", "has maintained", "maintains"],
            correctFeedback: "Excellent! 'Had maintained' (past perfect) expresses how balanced investing would have protected retirement security.",
            correctFeedbackRu: "Отлично! 'Had maintained' (past perfect) выражает, как сбалансированное инвестирование защитило бы пенсионную безопасность.",
            incorrectFeedback: "Third conditional requires past perfect for investment strategies that weren't sustained but would have preserved wealth.",
            incorrectFeedbackRu: "Третье условное требует past perfect для инвестиционных стратегий, которые не поддерживались, но сохранили бы богатство."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If credit rating agencies ____ accurate risk assessments, toxic mortgages wouldn't have been packaged into securities.",
            correctAnswer: "had provided",
            options: ["had provided", "provided", "has provided", "provides"],
            correctFeedback: "Correct! 'Had provided' (past perfect) shows how honest evaluations would have prevented dangerous financial products.",
            correctFeedbackRu: "Правильно! 'Had provided' (past perfect) показывает, как честные оценки предотвратили бы опасные финансовые продукты.",
            incorrectFeedback: "Use past perfect 'had + past participle' for accurate assessments that weren't given but would have warned investors.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для точных оценок, которые не были даны, но предупредили бы инвесторов."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If government stimulus programs ____ infrastructure projects, unemployment wouldn't have remained persistently high.",
            correctAnswer: "had prioritized",
            options: ["had prioritized", "prioritized", "has prioritized", "prioritizes"],
            correctFeedback: "Perfect! 'Had prioritized' (past perfect) expresses how focusing on job-creating investments would have reduced unemployment.",
            correctFeedbackRu: "Отлично! 'Had prioritized' (past perfect) выражает, как фокус на создающих рабочие места инвестициях снизил бы безработицу.",
            incorrectFeedback: "Third conditional uses past perfect for spending priorities that weren't chosen but would have created employment.",
            incorrectFeedbackRu: "Третье условное использует past perfect для приоритетов расходов, которые не были выбраны, но создали бы занятость."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If international trade agreements ____ currency manipulation clauses, exchange rate volatility wouldn't have destabilized emerging markets.",
            correctAnswer: "had incorporated",
            options: ["had incorporated", "incorporated", "has incorporated", "incorporates"],
            correctFeedback: "Excellent! 'Had incorporated' (past perfect) shows how including monetary safeguards would have protected developing economies.",
            correctFeedbackRu: "Отлично! 'Had incorporated' (past perfect) показывает, как включение монетарных гарантий защитило бы развивающиеся экономики.",
            incorrectFeedback: "Use past perfect 'had + past participle' for trade provisions that weren't included but would have enhanced stability.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для торговых положений, которые не были включены, но усилили бы стабильность."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If sovereign wealth funds ____ ethical investment guidelines, resource-rich nations wouldn't have funded controversial regimes.",
            correctAnswer: "had adopted",
            options: ["had adopted", "adopted", "has adopted", "adopts"],
            correctFeedback: "Correct! 'Had adopted' (past perfect) expresses how responsible investing would have prevented funding authoritarian governments.",
            correctFeedbackRu: "Правильно! 'Had adopted' (past perfect) выражает, как ответственное инвестирование предотвратило бы финансирование авторитарных правительств.",
            incorrectFeedback: "Third conditional requires past perfect for investment standards that weren't established but would have promoted democracy.",
            incorrectFeedbackRu: "Третье условное требует past perfect для инвестиционных стандартов, которые не были установлены, но продвигали бы демократию."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If tax authorities ____ offshore banking loopholes, wealth inequality wouldn't have increased so dramatically.",
            correctAnswer: "had closed",
            options: ["had closed", "closed", "has closed", "closes"],
            correctFeedback: "Perfect! 'Had closed' (past perfect) shows how eliminating tax evasion would have preserved public revenues.",
            correctFeedbackRu: "Отлично! 'Had closed' (past perfect) показывает, как устранение уклонения от налогов сохранило бы государственные доходы.",
            incorrectFeedback: "Use past perfect 'had + past participle' for tax reforms that weren't implemented but would have reduced inequality.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для налоговых реформ, которые не были внедрены, но снизили бы неравенство."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If microfinance institutions ____ transparent lending practices, borrowers in developing countries wouldn't have fallen into debt traps.",
            correctAnswer: "had implemented",
            options: ["had implemented", "implemented", "has implemented", "implements"],
            correctFeedback: "Excellent! 'Had implemented' (past perfect) expresses how ethical lending would have empowered rather than exploited communities.",
            correctFeedbackRu: "Отлично! 'Had implemented' (past perfect) выражает, как этичное кредитование расширило бы возможности, а не эксплуатировало сообщества.",
            incorrectFeedback: "Third conditional uses past perfect for lending standards that weren't enforced but would have protected vulnerable populations.",
            incorrectFeedbackRu: "Третье условное использует past perfect для стандартов кредитования, которые не применялись, но защитили бы уязвимые группы населения."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If cryptocurrency exchanges ____ robust security protocols, billions in digital assets wouldn't have been stolen by hackers.",
            correctAnswer: "had established",
            options: ["had established", "established", "has established", "establishes"],
            correctFeedback: "Correct! 'Had established' (past perfect) shows how implementing proper security would have protected digital investments.",
            correctFeedbackRu: "Правильно! 'Had established' (past perfect) показывает, как внедрение надлежащей безопасности защитило бы цифровые инвестиции.",
            incorrectFeedback: "Use past perfect 'had + past participle' for security measures that should have been created but weren't.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для мер безопасности, которые должны были быть созданы, но не были."
        }
    ]
};

/* ============================================
Page 9: Third Conditional - Medical Research and Healthcare Innovation
============================================ */
window.grammarExercises['conditionals']['third-conditional-gap-page9'] = {
    title: "Third Conditional - Medical Research and Healthcare Innovation",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If medical researchers ____ stem cell therapies earlier, paralyzed patients would have regained mobility decades ago.",
            correctAnswer: "had advanced",
            options: ["had advanced", "advanced", "has advanced", "advances"],
            correctFeedback: "Correct! 'Had advanced' (past perfect) expresses how accelerating regenerative medicine would have restored nerve function sooner.",
            correctFeedbackRu: "Правильно! 'Had advanced' (past perfect) выражает, как ускорение регенеративной медицины восстановило бы функцию нервов раньше.",
            incorrectFeedback: "Third conditional uses past perfect 'had + past participle' for medical breakthroughs that weren't achieved but would have healed patients.",
            incorrectFeedbackRu: "Третье условное использует past perfect 'had + past participle' для медицинских прорывов, которые не были достигнуты, но исцелили бы пациентов."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If pharmaceutical companies ____ rare disease research, orphan drug treatments would have been developed much sooner.",
            correctAnswer: "had funded",
            options: ["had funded", "funded", "has funded", "funds"],
            correctFeedback: "Perfect! 'Had funded' (past perfect) shows how investing in uncommon conditions would have helped neglected patient populations.",
            correctFeedbackRu: "Отлично! 'Had funded' (past perfect) показывает, как инвестирование в редкие состояния помогло бы забытым группам пациентов.",
            incorrectFeedback: "Use past perfect 'had + past participle' for research investments that weren't made but would have saved lives.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для исследовательских инвестиций, которые не были сделаны, но спасли бы жизни."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If gene therapy protocols ____ safety standards more rigorously, clinical trial participants wouldn't have suffered adverse reactions.",
            correctAnswer: "had followed",
            options: ["had followed", "followed", "has followed", "follows"],
            correctFeedback: "Excellent! 'Had followed' (past perfect) expresses how stricter adherence would have protected experimental subjects.",
            correctFeedbackRu: "Отлично! 'Had followed' (past perfect) выражает, как более строгое соблюдение защитило бы экспериментальных субъектов.",
            incorrectFeedback: "Third conditional requires past perfect for safety compliance that wasn't maintained but would have prevented harm.",
            incorrectFeedbackRu: "Третье условное требует past perfect для соблюдения безопасности, которое не поддерживалось, но предотвратило бы вред."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If diagnostic imaging technologies ____ artificial intelligence capabilities, cancer detection would have improved dramatically.",
            correctAnswer: "had integrated",
            options: ["had integrated", "integrated", "has integrated", "integrates"],
            correctFeedback: "Correct! 'Had integrated' (past perfect) shows how combining AI with medical imaging would have enhanced early diagnosis.",
            correctFeedbackRu: "Правильно! 'Had integrated' (past perfect) показывает, как объединение ИИ с медицинской визуализацией улучшило бы раннюю диагностику.",
            incorrectFeedback: "Use past perfect 'had + past participle' for technological integration that wasn't achieved but would have saved lives.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для технологической интеграции, которая не была достигнута, но спасла бы жизни."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If vaccine development programs ____ mRNA technology sooner, pandemic responses would have been more effective.",
            correctAnswer: "had embraced",
            options: ["had embraced", "embraced", "has embraced", "embraces"],
            correctFeedback: "Perfect! 'Had embraced' (past perfect) expresses how adopting innovative platforms would have accelerated immunization efforts.",
            correctFeedbackRu: "Отлично! 'Had embraced' (past perfect) выражает, как принятие инновационных платформ ускорило бы усилия по иммунизации.",
            incorrectFeedback: "Third conditional uses past perfect for technological adoption that wasn't pursued but would have enhanced preparedness.",
            incorrectFeedbackRu: "Третье условное использует past perfect для принятия технологий, которое не осуществлялось, но усилило бы готовность."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If mental health researchers ____ neuroplasticity mechanisms, depression treatments would have become more targeted.",
            correctAnswer: "had understood",
            options: ["had understood", "understood", "has understood", "understands"],
            correctFeedback: "Excellent! 'Had understood' (past perfect) shows how deeper brain knowledge would have revolutionized psychiatric care.",
            correctFeedbackRu: "Отлично! 'Had understood' (past perfect) показывает, как более глубокие знания мозга революционизировали бы психиатрическую помощь.",
            incorrectFeedback: "Use past perfect 'had + past participle' for scientific understanding that wasn't achieved but would have transformed treatment.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для научного понимания, которое не было достигнуто, но трансформировало бы лечение."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If surgical robotics ____ precision capabilities earlier, minimally invasive procedures would have reduced recovery times significantly.",
            correctAnswer: "had developed",
            options: ["had developed", "developed", "has developed", "develops"],
            correctFeedback: "Correct! 'Had developed' (past perfect) expresses how advancing robotic surgery would have improved patient outcomes.",
            correctFeedbackRu: "Правильно! 'Had developed' (past perfect) выражает, как продвижение роботической хирургии улучшило бы результаты пациентов.",
            incorrectFeedback: "Third conditional requires past perfect for technological development that wasn't completed but would have benefited patients.",
            incorrectFeedbackRu: "Третье условное требует past perfect для технологического развития, которое не было завершено, но принесло бы пользу пациентам."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If personalized medicine initiatives ____ genetic profiling data, drug prescriptions would have avoided dangerous interactions.",
            correctAnswer: "had utilized",
            options: ["had utilized", "utilized", "has utilized", "utilizes"],
            correctFeedback: "Perfect! 'Had utilized' (past perfect) shows how using genetic information would have prevented adverse drug reactions.",
            correctFeedbackRu: "Отлично! 'Had utilized' (past perfect) показывает, как использование генетической информации предотвратило бы неблагоприятные реакции на лекарства.",
            incorrectFeedback: "Use past perfect 'had + past participle' for data utilization that wasn't implemented but would have enhanced safety.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для использования данных, которое не было внедрено, но повысило бы безопасность."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If telemedicine platforms ____ rural healthcare access, medical disparities wouldn't have widened in remote communities.",
            correctAnswer: "had expanded",
            options: ["had expanded", "expanded", "has expanded", "expands"],
            correctFeedback: "Excellent! 'Had expanded' (past perfect) expresses how extending digital health services would have reduced geographic inequalities.",
            correctFeedbackRu: "Отлично! 'Had expanded' (past perfect) выражает, как расширение цифровых медицинских услуг снизило бы географическое неравенство.",
            incorrectFeedback: "Third conditional uses past perfect for service expansion that wasn't achieved but would have improved equity.",
            incorrectFeedbackRu: "Третье условное использует past perfect для расширения услуг, которое не было достигнуто, но улучшило бы справедливость."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If organ transplant networks ____ compatibility algorithms, donor-recipient matching would have been optimized globally.",
            correctAnswer: "had implemented",
            options: ["had implemented", "implemented", "has implemented", "implements"],
            correctFeedback: "Correct! 'Had implemented' (past perfect) shows how advanced matching systems would have saved more lives through better organ allocation.",
            correctFeedbackRu: "Правильно! 'Had implemented' (past perfect) показывает, как продвинутые системы подбора спасли бы больше жизней через лучшее распределение органов.",
            incorrectFeedback: "Use past perfect 'had + past participle' for algorithmic systems that weren't deployed but would have maximized transplant success.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для алгоритмических систем, которые не были развернуты, но максимизировали бы успех трансплантации."
        }
    ]
};

/* ============================================
Page 10: Third Conditional - Space Exploration and Advanced Technology
============================================ */
window.grammarExercises['conditionals']['third-conditional-gap-page10'] = {
    title: "Third Conditional - Space Exploration and Advanced Technology",
    fillGaps: [
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If space agencies ____ reusable rocket technology decades ago, space exploration costs would have decreased dramatically.",
            correctAnswer: "had developed",
            options: ["had developed", "developed", "has developed", "develops"],
            correctFeedback: "Correct! 'Had developed' (past perfect) expresses how earlier innovation would have made space travel more economical.",
            correctFeedbackRu: "Правильно! 'Had developed' (past perfect) выражает, как более ранние инновации сделали бы космические путешествия более экономичными.",
            incorrectFeedback: "Third conditional uses past perfect 'had + past participle' for technological advances that weren't achieved but would have transformed industries.",
            incorrectFeedbackRu: "Третье условное использует past perfect 'had + past participle' для технологических достижений, которые не были достигнуты, но трансформировали бы отрасли."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If quantum computing researchers ____ stable qubit systems earlier, cryptographic security wouldn't have remained vulnerable for so long.",
            correctAnswer: "had perfected",
            options: ["had perfected", "perfected", "has perfected", "perfects"],
            correctFeedback: "Perfect! 'Had perfected' (past perfect) shows how mastering quantum technology would have revolutionized data protection.",
            correctFeedbackRu: "Отлично! 'Had perfected' (past perfect) показывает, как овладение квантовой технологией революционизировало бы защиту данных.",
            incorrectFeedback: "Use past perfect 'had + past participle' for scientific breakthroughs that weren't completed but would have enhanced security.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для научных прорывов, которые не были завершены, но усилили бы безопасность."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If artificial intelligence systems ____ ethical programming frameworks, algorithmic bias wouldn't have perpetuated social inequalities.",
            correctAnswer: "had incorporated",
            options: ["had incorporated", "incorporated", "has incorporated", "incorporates"],
            correctFeedback: "Excellent! 'Had incorporated' (past perfect) expresses how embedding ethical standards would have prevented discriminatory AI outcomes.",
            correctFeedbackRu: "Отлично! 'Had incorporated' (past perfect) выражает, как встраивание этических стандартов предотвратило бы дискриминационные результаты ИИ.",
            incorrectFeedback: "Third conditional requires past perfect for ethical considerations that weren't integrated but would have promoted fairness.",
            incorrectFeedbackRu: "Третье условное требует past perfect для этических соображений, которые не были интегрированы, но продвигали бы справедливость."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If nanotechnology applications ____ targeted drug delivery systems, cancer treatments would have achieved higher success rates.",
            correctAnswer: "had enabled",
            options: ["had enabled", "enabled", "has enabled", "enables"],
            correctFeedback: "Correct! 'Had enabled' (past perfect) shows how molecular-scale technology would have improved therapeutic precision.",
            correctFeedbackRu: "Правильно! 'Had enabled' (past perfect) показывает, как технология молекулярного масштаба улучшила бы терапевтическую точность.",
            incorrectFeedback: "Use past perfect 'had + past participle' for technological capabilities that weren't achieved but would have advanced medicine.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для технологических возможностей, которые не были достигнуты, но продвинули бы медицину."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If fusion power reactors ____ commercial viability sooner, renewable energy transitions would have accelerated globally.",
            correctAnswer: "had achieved",
            options: ["had achieved", "achieved", "has achieved", "achieves"],
            correctFeedback: "Perfect! 'Had achieved' (past perfect) expresses how successful fusion technology would have revolutionized clean energy production.",
            correctFeedbackRu: "Отлично! 'Had achieved' (past perfect) выражает, как успешная термоядерная технология революционизировала бы производство чистой энергии.",
            incorrectFeedback: "Third conditional uses past perfect for energy breakthroughs that weren't realized but would have solved climate challenges.",
            incorrectFeedbackRu: "Третье условное использует past perfect для энергетических прорывов, которые не были реализованы, но решили бы климатические проблемы."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If autonomous vehicle networks ____ comprehensive safety protocols, traffic fatalities would have been eliminated in urban areas.",
            correctAnswer: "had implemented",
            options: ["had implemented", "implemented", "has implemented", "implements"],
            correctFeedback: "Excellent! 'Had implemented' (past perfect) shows how robust self-driving systems would have prevented road accidents.",
            correctFeedbackRu: "Отлично! 'Had implemented' (past perfect) показывает, как надежные системы беспилотного вождения предотвратили бы дорожные аварии.",
            incorrectFeedback: "Use past perfect 'had + past participle' for safety systems that weren't deployed but would have saved lives.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для систем безопасности, которые не были развернуты, но спасли бы жизни."
        },
        {
            question: "Complete the third conditional sentence:",
            questionRu: "Дополните третье условное предложение:",
            sentence: "If biotechnology companies ____ CRISPR gene editing applications more extensively, hereditary diseases would have been eradicated.",
            correctAnswer: "had pursued",
            options: ["had pursued", "pursued", "has pursued", "pursues"],
            correctFeedback: "Correct! 'Had pursued' (past perfect) expresses how advancing genetic modification would have eliminated inherited disorders.",
            correctFeedbackRu: "Правильно! 'Had pursued' (past perfect) выражает, как продвижение генетической модификации устранило бы наследственные расстройства.",
            incorrectFeedback: "Third conditional requires past perfect for research directions that weren't taken but would have cured diseases.",
            incorrectFeedbackRu: "Третье условное требует past perfect для исследовательских направлений, которые не были выбраны, но излечили бы болезни."
        },
        {
            question: "Fill in the gap with the appropriate form:",
            questionRu: "Заполните пропуск подходящей формой:",
            sentence: "If neural interface technologies ____ brain-computer communication, paralyzed individuals would have regained control over their environment.",
            correctAnswer: "had established",
            options: ["had established", "established", "has established", "establishes"],
            correctFeedback: "Perfect! 'Had established' (past perfect) shows how direct neural connections would have restored independence for disabled people.",
            correctFeedbackRu: "Отлично! 'Had established' (past perfect) показывает, как прямые нейронные связи восстановили бы независимость для людей с инвалидностью.",
            incorrectFeedback: "Use past perfect 'had + past participle' for interface development that wasn't completed but would have transformed lives.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для разработки интерфейсов, которая не была завершена, но трансформировала бы жизни."
        },
        {
            question: "Complete the sentence with the correct form:",
            questionRu: "Заполните предложение правильной формой:",
            sentence: "If 3D printing technology ____ sustainable manufacturing materials, industrial waste wouldn't have accumulated in landfills.",
            correctAnswer: "had utilized",
            options: ["had utilized", "utilized", "has utilized", "utilizes"],
            correctFeedback: "Excellent! 'Had utilized' (past perfect) expresses how eco-friendly additive manufacturing would have reduced environmental impact.",
            correctFeedbackRu: "Отлично! 'Had utilized' (past perfect) выражает, как экологически чистое аддитивное производство снизило бы воздействие на окружающую среду.",
            incorrectFeedback: "Third conditional uses past perfect for material innovations that weren't adopted but would have protected ecosystems.",
            incorrectFeedbackRu: "Третье условное использует past perfect для инноваций материалов, которые не были приняты, но защитили бы экосистемы."
        },
        {
            question: "Fill in the blank with the correct verb form:",
            questionRu: "Заполните пропуск правильной формой глагола:",
            sentence: "If virtual reality platforms ____ immersive educational environments, learning outcomes would have improved across all age groups.",
            correctAnswer: "had created",
            options: ["had created", "created", "has created", "creates"],
            correctFeedback: "Correct! 'Had created' (past perfect) shows how advanced VR technology would have revolutionized educational methods and engagement. You've completed all 100 Fill in the Gaps exercises for Third Conditional!",
            correctFeedbackRu: "Правильно! 'Had created' (past perfect) показывает, как продвинутая VR-технология революционизировала бы образовательные методы и вовлеченность. Вы завершили все 100 упражнений Fill in the Gaps для Third Conditional!",
            incorrectFeedback: "Use past perfect 'had + past participle' for educational technologies that weren't developed but would have enhanced learning.",
            incorrectFeedbackRu: "Используйте past perfect 'had + past participle' для образовательных технологий, которые не были разработаны, но улучшили бы обучение."
        }
    ]
};

/* =============================================================================== */
/* =========================Sentence Building Exercises=========================== */

/* ============================================
Page 1: Third Conditional - Career and Personal Development
============================================ */
window.grammarExercises['conditionals']['third-conditional-sentence-page1'] = {
    title: "Third Conditional - Career and Personal Development",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "she", "had", "studied", "abroad,", "her", "career", "would", "have", "flourished."],
            correctAnswer: "If she had studied abroad, her career would have flourished.",
            correctFeedback: "Perfect! 'If she had studied abroad, her career would have flourished.' correctly expresses how past educational decisions would have influenced career success.",
            correctFeedbackRu: "Отлично! 'If she had studied abroad, her career would have flourished.' правильно выражает, как прошлые образовательные решения повлияли бы на карьерный успех.",
            incorrectFeedback: "Try again. Remember: If + subject + had + past participle, subject + would have + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + подлежащее + had + past participle, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "the", "manager", "had", "listened", "to", "feedback,", "productivity", "wouldn't", "have", "declined."],
            correctAnswer: "If the manager had listened to feedback, productivity wouldn't have declined.",
            correctFeedback: "Excellent! 'If the manager had listened to feedback, productivity wouldn't have declined.' shows how past management decisions would have prevented workplace problems.",
            correctFeedbackRu: "Отлично! 'If the manager had listened to feedback, productivity wouldn't have declined.' показывает, как прошлые управленческие решения предотвратили бы проблемы на рабочем месте.",
            incorrectFeedback: "Remember the structure: If + subject + had + past participle, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Помните структуру: If + подлежащее + had + past participle, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "they", "had", "invested", "in", "training,", "employees", "would", "have", "remained", "loyal."],
            correctAnswer: "If they had invested in training, employees would have remained loyal.",
            correctFeedback: "Great! 'If they had invested in training, employees would have remained loyal.' correctly demonstrates how workforce investment would have improved retention.",
            correctFeedbackRu: "Отлично! 'If they had invested in training, employees would have remained loyal.' правильно демонстрирует, как инвестиции в персонал улучшили бы удержание сотрудников.",
            incorrectFeedback: "Check your word order. Use: If + they + had + past participle, subject + would have + past participle.",
            incorrectFeedbackRu: "Проверьте порядок слов. Используйте: If + they + had + past participle, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "he", "had", "networked", "effectively,", "opportunities", "would", "have", "multiplied."],
            correctAnswer: "If he had networked effectively, opportunities would have multiplied.",
            correctFeedback: "Perfect! 'If he had networked effectively, opportunities would have multiplied.' expresses how professional relationship building would have created career advantages.",
            correctFeedbackRu: "Отлично! 'If he had networked effectively, opportunities would have multiplied.' выражает, как построение профессиональных отношений создало бы карьерные преимущества.",
            incorrectFeedback: "Try again. The correct structure is: If + he + had + past participle + adverb, subject + would have + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Правильная структура: If + he + had + past participle + наречие, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "the", "startup", "had", "secured", "funding,", "it", "wouldn't", "have", "failed."],
            correctAnswer: "If the startup had secured funding, it wouldn't have failed.",
            correctFeedback: "Excellent! 'If the startup had secured funding, it wouldn't have failed.' shows how financial support would have prevented business collapse.",
            correctFeedbackRu: "Отлично! 'If the startup had secured funding, it wouldn't have failed.' показывает, как финансовая поддержка предотвратила бы крах бизнеса.",
            incorrectFeedback: "Remember: If + subject + had + past participle, it + wouldn't have + past participle for negative outcomes.",
            incorrectFeedbackRu: "Помните: If + подлежащее + had + past participle, it + wouldn't have + past participle для негативных результатов."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "she", "had", "pursued", "certification,", "her", "expertise", "would", "have", "been", "recognized."],
            correctAnswer: "If she had pursued certification, her expertise would have been recognized.",
            correctFeedback: "Great! 'If she had pursued certification, her expertise would have been recognized.' demonstrates how professional credentials would have validated skills.",
            correctFeedbackRu: "Отлично! 'If she had pursued certification, her expertise would have been recognized.' демонстрирует, как профессиональные сертификаты подтвердили бы навыки.",
            incorrectFeedback: "Check the passive structure: If + she + had + past participle, subject + would have been + past participle.",
            incorrectFeedbackRu: "Проверьте пассивную структуру: If + she + had + past participle, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "they", "had", "embraced", "innovation,", "the", "company", "would", "have", "survived."],
            correctAnswer: "If they had embraced innovation, the company would have survived.",
            correctFeedback: "Perfect! 'If they had embraced innovation, the company would have survived.' expresses how adapting to change would have ensured business continuity.",
            correctFeedbackRu: "Отлично! 'If they had embraced innovation, the company would have survived.' выражает, как адаптация к изменениям обеспечила бы непрерывность бизнеса.",
            incorrectFeedback: "Use the structure: If + they + had + past participle, the + noun + would have + past participle.",
            incorrectFeedbackRu: "Используйте структуру: If + they + had + past participle, the + существительное + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "he", "had", "developed", "leadership", "skills,", "promotion", "wouldn't", "have", "been", "denied."],
            correctAnswer: "If he had developed leadership skills, promotion wouldn't have been denied.",
            correctFeedback: "Excellent! 'If he had developed leadership skills, promotion wouldn't have been denied.' shows how skill development would have advanced career progression.",
            correctFeedbackRu: "Отлично! 'If he had developed leadership skills, promotion wouldn't have been denied.' показывает, как развитие навыков продвинуло бы карьерный рост.",
            incorrectFeedback: "Remember the passive negative: If + he + had + past participle, subject + wouldn't have been + past participle.",
            incorrectFeedbackRu: "Помните пассивное отрицание: If + he + had + past participle, подлежащее + wouldn't have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "the", "team", "had", "collaborated", "better,", "deadlines", "would", "have", "been", "met."],
            correctAnswer: "If the team had collaborated better, deadlines would have been met.",
            correctFeedback: "Great! 'If the team had collaborated better, deadlines would have been met.' demonstrates how improved teamwork would have achieved project goals.",
            correctFeedbackRu: "Отлично! 'If the team had collaborated better, deadlines would have been met.' демонстрирует, как улучшенная командная работа достигла бы целей проекта.",
            incorrectFeedback: "Use: If + the team + had + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Используйте: If + the team + had + past participle + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "she", "had", "taken", "risks,", "her", "business", "would", "have", "expanded", "internationally."],
            correctAnswer: "If she had taken risks, her business would have expanded internationally.",
            correctFeedback: "Perfect! 'If she had taken risks, her business would have expanded internationally.' expresses how bold decisions would have enabled global growth.",
            correctFeedbackRu: "Отлично! 'If she had taken risks, her business would have expanded internationally.' выражает, как смелые решения обеспечили бы глобальный рост.",
            incorrectFeedback: "Check your structure: If + she + had + past participle, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Проверьте структуру: If + she + had + past participle, подлежащее + would have + past participle + наречие."
        }
    ]
};

/* ============================================
Page 2: Third Conditional - Technology and Scientific Progress
============================================ */
window.grammarExercises['conditionals']['third-conditional-sentence-page2'] = {
    title: "Third Conditional - Technology and Scientific Progress",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "scientists", "had", "discovered", "antibiotics", "earlier,", "millions", "would", "have", "survived."],
            correctAnswer: "If scientists had discovered antibiotics earlier, millions would have survived.",
            correctFeedback: "Perfect! 'If scientists had discovered antibiotics earlier, millions would have survived.' correctly shows how medical breakthroughs would have saved lives.",
            correctFeedbackRu: "Отлично! 'If scientists had discovered antibiotics earlier, millions would have survived.' правильно показывает, как медицинские прорывы спасли бы жизни.",
            incorrectFeedback: "Try again. Remember: If + scientists + had + past participle + adverb, subject + would have + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + scientists + had + past participle + наречие, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "the", "internet", "had", "been", "regulated", "properly,", "privacy", "wouldn't", "have", "been", "compromised."],
            correctAnswer: "If the internet had been regulated properly, privacy wouldn't have been compromised.",
            correctFeedback: "Excellent! 'If the internet had been regulated properly, privacy wouldn't have been compromised.' demonstrates how proper oversight would have protected digital rights.",
            correctFeedbackRu: "Отлично! 'If the internet had been regulated properly, privacy wouldn't have been compromised.' демонстрирует, как правильный надзор защитил бы цифровые права.",
            incorrectFeedback: "Remember the passive structure: If + subject + had been + past participle + adverb, subject + wouldn't have been + past participle.",
            incorrectFeedbackRu: "Помните пассивную структуру: If + подлежащее + had been + past participle + наречие, подлежащее + wouldn't have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "renewable", "energy", "had", "been", "prioritized,", "climate", "change", "would", "have", "slowed."],
            correctAnswer: "If renewable energy had been prioritized, climate change would have slowed.",
            correctFeedback: "Great! 'If renewable energy had been prioritized, climate change would have slowed.' shows how environmental policies would have mitigated global warming.",
            correctFeedbackRu: "Отлично! 'If renewable energy had been prioritized, climate change would have slowed.' показывает, как экологическая политика смягчила бы глобальное потепление.",
            incorrectFeedback: "Check your order: If + renewable energy + had been + past participle, subject + would have + past participle.",
            incorrectFeedbackRu: "Проверьте порядок: If + renewable energy + had been + past participle, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "artificial", "intelligence", "had", "been", "developed", "responsibly,", "job", "displacement", "wouldn't", "have", "occurred."],
            correctAnswer: "If artificial intelligence had been developed responsibly, job displacement wouldn't have occurred.",
            correctFeedback: "Perfect! 'If artificial intelligence had been developed responsibly, job displacement wouldn't have occurred.' expresses how ethical AI development would have protected employment.",
            correctFeedbackRu: "Отлично! 'If artificial intelligence had been developed responsibly, job displacement wouldn't have occurred.' выражает, как этичная разработка ИИ защитила бы занятость.",
            incorrectFeedback: "Use: If + artificial intelligence + had been + past participle + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Используйте: If + artificial intelligence + had been + past participle + наречие, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "social", "media", "platforms", "had", "controlled", "misinformation,", "democracy", "would", "have", "remained", "stronger."],
            correctAnswer: "If social media platforms had controlled misinformation, democracy would have remained stronger.",
            correctFeedback: "Excellent! 'If social media platforms had controlled misinformation, democracy would have remained stronger.' shows how content moderation would have preserved democratic institutions.",
            correctFeedbackRu: "Отлично! 'If social media platforms had controlled misinformation, democracy would have remained stronger.' показывает, как модерация контента сохранила бы демократические институты.",
            incorrectFeedback: "Remember: If + social media platforms + had + past participle, subject + would have + past participle + adjective.",
            incorrectFeedbackRu: "Помните: If + social media platforms + had + past participle, подлежащее + would have + past participle + прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "quantum", "computing", "had", "been", "perfected", "sooner,", "encryption", "would", "have", "evolved."],
            correctAnswer: "If quantum computing had been perfected sooner, encryption would have evolved.",
            correctFeedback: "Great! 'If quantum computing had been perfected sooner, encryption would have evolved.' demonstrates how technological advancement would have enhanced cybersecurity.",
            correctFeedbackRu: "Отлично! 'If quantum computing had been perfected sooner, encryption would have evolved.' демонстрирует, как технологический прогресс усилил бы кибербезопасность.",
            incorrectFeedback: "Use the structure: If + quantum computing + had been + past participle + adverb, subject + would have + past participle.",
            incorrectFeedbackRu: "Используйте структуру: If + quantum computing + had been + past participle + наречие, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "gene", "therapy", "had", "advanced", "faster,", "genetic", "diseases", "would", "have", "been", "cured."],
            correctAnswer: "If gene therapy had advanced faster, genetic diseases would have been cured.",
            correctFeedback: "Perfect! 'If gene therapy had advanced faster, genetic diseases would have been cured.' expresses how medical innovation would have eliminated hereditary conditions.",
            correctFeedbackRu: "Отлично! 'If gene therapy had advanced faster, genetic diseases would have been cured.' выражает, как медицинские инновации устранили бы наследственные заболевания.",
            incorrectFeedback: "Check the passive: If + gene therapy + had + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Проверьте пассивное: If + gene therapy + had + past participle + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "autonomous", "vehicles", "had", "been", "tested", "thoroughly,", "accidents", "wouldn't", "have", "happened."],
            correctAnswer: "If autonomous vehicles had been tested thoroughly, accidents wouldn't have happened.",
            correctFeedback: "Excellent! 'If autonomous vehicles had been tested thoroughly, accidents wouldn't have happened.' shows how proper validation would have prevented safety issues.",
            correctFeedbackRu: "Отлично! 'If autonomous vehicles had been tested thoroughly, accidents wouldn't have happened.' показывает, как правильная валидация предотвратила бы проблемы безопасности.",
            incorrectFeedback: "Use: If + autonomous vehicles + had been + past participle + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Используйте: If + autonomous vehicles + had been + past participle + наречие, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "space", "exploration", "had", "received", "more", "funding,", "Mars", "colonization", "would", "have", "begun."],
            correctAnswer: "If space exploration had received more funding, Mars colonization would have begun.",
            correctFeedback: "Great! 'If space exploration had received more funding, Mars colonization would have begun.' demonstrates how investment would have accelerated space settlement.",
            correctFeedbackRu: "Отлично! 'If space exploration had received more funding, Mars colonization would have begun.' демонстрирует, как инвестиции ускорили бы космическое поселение.",
            incorrectFeedback: "Remember: If + space exploration + had + past participle + object, subject + would have + past participle.",
            incorrectFeedbackRu: "Помните: If + space exploration + had + past participle + дополнение, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "biotechnology", "companies", "had", "collaborated", "internationally,", "vaccine", "development", "would", "have", "accelerated."],
            correctAnswer: "If biotechnology companies had collaborated internationally, vaccine development would have accelerated.",
            correctFeedback: "Perfect! 'If biotechnology companies had collaborated internationally, vaccine development would have accelerated.' expresses how global cooperation would have sped up medical responses.",
            correctFeedbackRu: "Отлично! 'If biotechnology companies had collaborated internationally, vaccine development would have accelerated.' выражает, как глобальное сотрудничество ускорило бы медицинские ответы.",
            incorrectFeedback: "Check the structure: If + biotechnology companies + had + past participle + adverb, subject + would have + past participle.",
            incorrectFeedbackRu: "Проверьте структуру: If + biotechnology companies + had + past participle + наречие, подлежащее + would have + past participle."
        }
    ]
};

/* ============================================
Page 3: Third Conditional - Social Issues and Global Challenges  
============================================ */
window.grammarExercises['conditionals']['third-conditional-sentence-page3'] = {
    title: "Third Conditional - Social Issues and Global Challenges",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "governments", "had", "addressed", "inequality,", "social", "unrest", "wouldn't", "have", "erupted."],
            correctAnswer: "If governments had addressed inequality, social unrest wouldn't have erupted.",
            correctFeedback: "Perfect! 'If governments had addressed inequality, social unrest wouldn't have erupted.' correctly shows how tackling social issues would have prevented civil discord.",
            correctFeedbackRu: "Отлично! 'If governments had addressed inequality, social unrest wouldn't have erupted.' правильно показывает, как решение социальных проблем предотвратило бы гражданские беспорядки.",
            incorrectFeedback: "Try again. Remember: If + governments + had + past participle, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + governments + had + past participle, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "education", "systems", "had", "been", "reformed,", "literacy", "rates", "would", "have", "improved", "dramatically."],
            correctAnswer: "If education systems had been reformed, literacy rates would have improved dramatically.",
            correctFeedback: "Excellent! 'If education systems had been reformed, literacy rates would have improved dramatically.' demonstrates how educational changes would have enhanced learning outcomes.",
            correctFeedbackRu: "Отлично! 'If education systems had been reformed, literacy rates would have improved dramatically.' демонстрирует, как образовательные изменения улучшили бы результаты обучения.",
            incorrectFeedback: "Remember the passive: If + education systems + had been + past participle, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Помните пассивное: If + education systems + had been + past participle, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "healthcare", "had", "been", "accessible", "to", "all,", "preventable", "deaths", "wouldn't", "have", "occurred."],
            correctAnswer: "If healthcare had been accessible to all, preventable deaths wouldn't have occurred.",
            correctFeedback: "Great! 'If healthcare had been accessible to all, preventable deaths wouldn't have occurred.' shows how universal access would have saved lives.",
            correctFeedbackRu: "Отлично! 'If healthcare had been accessible to all, preventable deaths wouldn't have occurred.' показывает, как всеобщий доступ спас бы жизни.",
            incorrectFeedback: "Check your structure: If + healthcare + had been + adjective + prepositional phrase, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Проверьте структуру: If + healthcare + had been + прилагательное + предложная фраза, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "international", "aid", "had", "reached", "disaster", "victims", "faster,", "suffering", "would", "have", "been", "minimized."],
            correctAnswer: "If international aid had reached disaster victims faster, suffering would have been minimized.",
            correctFeedback: "Perfect! 'If international aid had reached disaster victims faster, suffering would have been minimized.' expresses how rapid response would have reduced humanitarian crises.",
            correctFeedbackRu: "Отлично! 'If international aid had reached disaster victims faster, suffering would have been minimized.' выражает, как быстрое реагирование сократило бы гуманитарные кризисы.",
            incorrectFeedback: "Use: If + international aid + had + past participle + object + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Используйте: If + international aid + had + past participle + дополнение + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "mental", "health", "awareness", "had", "been", "promoted,", "suicide", "rates", "would", "have", "decreased."],
            correctAnswer: "If mental health awareness had been promoted, suicide rates would have decreased.",
            correctFeedback: "Excellent! 'If mental health awareness had been promoted, suicide rates would have decreased.' shows how public education would have prevented tragedies.",
            correctFeedbackRu: "Отлично! 'If mental health awareness had been promoted, suicide rates would have decreased.' показывает, как общественное образование предотвратило бы трагедии.",
            incorrectFeedback: "Remember the passive: If + mental health awareness + had been + past participle, subject + would have + past participle.",
            incorrectFeedbackRu: "Помните пассивное: If + mental health awareness + had been + past participle, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "refugees", "had", "been", "welcomed", "properly,", "integration", "would", "have", "succeeded."],
            correctAnswer: "If refugees had been welcomed properly, integration would have succeeded.",
            correctFeedback: "Great! 'If refugees had been welcomed properly, integration would have succeeded.' demonstrates how inclusive policies would have facilitated social cohesion.",
            correctFeedbackRu: "Отлично! 'If refugees had been welcomed properly, integration would have succeeded.' демонстрирует, как инклюзивная политика способствовала бы социальной сплоченности.",
            incorrectFeedback: "Use the structure: If + refugees + had been + past participle + adverb, subject + would have + past participle.",
            incorrectFeedbackRu: "Используйте структуру: If + refugees + had been + past participle + наречие, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "corruption", "had", "been", "eliminated,", "economic", "development", "would", "have", "accelerated."],
            correctAnswer: "If corruption had been eliminated, economic development would have accelerated.",
            correctFeedback: "Perfect! 'If corruption had been eliminated, economic development would have accelerated.' expresses how clean governance would have boosted prosperity.",
            correctFeedbackRu: "Отлично! 'If corruption had been eliminated, economic development would have accelerated.' выражает, как чистое управление повысило бы процветание.",
            incorrectFeedback: "Check the passive: If + corruption + had been + past participle, subject + would have + past participle.",
            incorrectFeedbackRu: "Проверьте пассивное: If + corruption + had been + past participle, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "gender", "equality", "had", "been", "prioritized,", "workplace", "discrimination", "wouldn't", "have", "persisted."],
            correctAnswer: "If gender equality had been prioritized, workplace discrimination wouldn't have persisted.",
            correctFeedback: "Excellent! 'If gender equality had been prioritized, workplace discrimination wouldn't have persisted.' shows how promoting equal rights would have eliminated bias.",
            correctFeedbackRu: "Отлично! 'If gender equality had been prioritized, workplace discrimination wouldn't have persisted.' показывает, как продвижение равных прав устранило бы предвзятость.",
            incorrectFeedback: "Remember the passive: If + gender equality + had been + past participle, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Помните пассивное: If + gender equality + had been + past participle, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "environmental", "protection", "laws", "had", "been", "enforced,", "biodiversity", "loss", "would", "have", "been", "prevented."],
            correctAnswer: "If environmental protection laws had been enforced, biodiversity loss would have been prevented.",
            correctFeedback: "Great! 'If environmental protection laws had been enforced, biodiversity loss would have been prevented.' demonstrates how legal enforcement would have preserved ecosystems.",
            correctFeedbackRu: "Отлично! 'If environmental protection laws had been enforced, biodiversity loss would have been prevented.' демонстрирует, как правовое принуждение сохранило бы экосистемы.",
            incorrectFeedback: "Use the double passive: If + environmental protection laws + had been + past participle, subject + would have been + past participle.",
            incorrectFeedbackRu: "Используйте двойное пассивное: If + environmental protection laws + had been + past participle, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "sustainable", "agriculture", "had", "been", "practiced", "globally,", "food", "security", "wouldn't", "have", "deteriorated."],
            correctAnswer: "If sustainable agriculture had been practiced globally, food security wouldn't have deteriorated.",
            correctFeedback: "Perfect! 'If sustainable agriculture had been practiced globally, food security wouldn't have deteriorated.' expresses how responsible farming would have ensured adequate nutrition worldwide.",
            correctFeedbackRu: "Отлично! 'If sustainable agriculture had been practiced globally, food security wouldn't have deteriorated.' выражает, как ответственное земледелие обеспечило бы адекватное питание во всем мире.",
            incorrectFeedback: "Check your structure: If + sustainable agriculture + had been + past participle + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Проверьте структуру: If + sustainable agriculture + had been + past participle + наречие, подлежащее + wouldn't have + past participle."
        }
    ]
};

/* ============================================
Page 4: Third Conditional - Economic Systems and Financial Policies
============================================ */
window.grammarExercises['conditionals']['third-conditional-sentence-page4'] = {
    title: "Third Conditional - Economic Systems and Financial Policies",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "central", "banks", "had", "regulated", "mortgages", "strictly,", "the", "housing", "crisis", "wouldn't", "have", "happened."],
            correctAnswer: "If central banks had regulated mortgages strictly, the housing crisis wouldn't have happened.",
            correctFeedback: "Perfect! 'If central banks had regulated mortgages strictly, the housing crisis wouldn't have happened.' correctly shows how financial oversight would have prevented economic collapse.",
            correctFeedbackRu: "Отлично! 'If central banks had regulated mortgages strictly, the housing crisis wouldn't have happened.' правильно показывает, как финансовый надзор предотвратил бы экономический крах.",
            incorrectFeedback: "Try again. Remember: If + central banks + had + past participle + object + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + central banks + had + past participle + дополнение + наречие, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "tax", "evasion", "had", "been", "prevented", "effectively,", "public", "services", "would", "have", "been", "funded", "adequately."],
            correctAnswer: "If tax evasion had been prevented effectively, public services would have been funded adequately.",
            correctFeedback: "Excellent! 'If tax evasion had been prevented effectively, public services would have been funded adequately.' demonstrates how proper tax collection would have improved government resources.",
            correctFeedbackRu: "Отлично! 'If tax evasion had been prevented effectively, public services would have been funded adequately.' демонстрирует, как правильный сбор налогов улучшил бы государственные ресурсы.",
            incorrectFeedback: "Remember the double passive: If + tax evasion + had been + past participle + adverb, subject + would have been + past participle + adverb.",
            incorrectFeedbackRu: "Помните двойное пассивное: If + tax evasion + had been + past participle + наречие, подлежащее + would have been + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "microfinance", "institutions", "had", "offered", "fair", "terms,", "rural", "entrepreneurs", "would", "have", "prospered."],
            correctAnswer: "If microfinance institutions had offered fair terms, rural entrepreneurs would have prospered.",
            correctFeedback: "Great! 'If microfinance institutions had offered fair terms, rural entrepreneurs would have prospered.' shows how ethical lending would have empowered small business owners.",
            correctFeedbackRu: "Отлично! 'If microfinance institutions had offered fair terms, rural entrepreneurs would have prospered.' показывает, как этичное кредитование расширило бы возможности владельцев малого бизнеса.",
            incorrectFeedback: "Check your structure: If + microfinance institutions + had + past participle + adjective + object, subject + would have + past participle.",
            incorrectFeedbackRu: "Проверьте структуру: If + microfinance institutions + had + past participle + прилагательное + дополнение, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "pension", "funds", "had", "diversified", "investments", "properly,", "retirees", "wouldn't", "have", "lost", "savings."],
            correctAnswer: "If pension funds had diversified investments properly, retirees wouldn't have lost savings.",
            correctFeedback: "Perfect! 'If pension funds had diversified investments properly, retirees wouldn't have lost savings.' expresses how sound financial management would have protected retirement security.",
            correctFeedbackRu: "Отлично! 'If pension funds had diversified investments properly, retirees wouldn't have lost savings.' выражает, как здравое финансовое управление защитило бы пенсионную безопасность.",
            incorrectFeedback: "Use: If + pension funds + had + past participle + object + adverb, subject + wouldn't have + past participle + object.",
            incorrectFeedbackRu: "Используйте: If + pension funds + had + past participle + дополнение + наречие, подлежащее + wouldn't have + past participle + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "cryptocurrency", "exchanges", "had", "implemented", "security", "measures,", "billions", "wouldn't", "have", "been", "stolen."],
            correctAnswer: "If cryptocurrency exchanges had implemented security measures, billions wouldn't have been stolen.",
            correctFeedback: "Excellent! 'If cryptocurrency exchanges had implemented security measures, billions wouldn't have been stolen.' shows how proper cybersecurity would have prevented digital theft.",
            correctFeedbackRu: "Отлично! 'If cryptocurrency exchanges had implemented security measures, billions wouldn't have been stolen.' показывает, как правильная кибербезопасность предотвратила бы цифровое воровство.",
            incorrectFeedback: "Remember: If + cryptocurrency exchanges + had + past participle + object, subject + wouldn't have been + past participle.",
            incorrectFeedbackRu: "Помните: If + cryptocurrency exchanges + had + past participle + дополнение, подлежащее + wouldn't have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "trade", "agreements", "had", "included", "labor", "protections,", "worker", "exploitation", "would", "have", "been", "eliminated."],
            correctAnswer: "If trade agreements had included labor protections, worker exploitation would have been eliminated.",
            correctFeedback: "Great! 'If trade agreements had included labor protections, worker exploitation would have been eliminated.' demonstrates how international standards would have safeguarded employees.",
            correctFeedbackRu: "Отлично! 'If trade agreements had included labor protections, worker exploitation would have been eliminated.' демонстрирует, как международные стандарты защитили бы сотрудников.",
            incorrectFeedback: "Use the structure: If + trade agreements + had + past participle + object, subject + would have been + past participle.",
            incorrectFeedbackRu: "Используйте структуру: If + trade agreements + had + past participle + дополнение, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "stimulus", "packages", "had", "targeted", "infrastructure,", "unemployment", "would", "have", "decreased", "significantly."],
            correctAnswer: "If stimulus packages had targeted infrastructure, unemployment would have decreased significantly.",
            correctFeedback: "Perfect! 'If stimulus packages had targeted infrastructure, unemployment would have decreased significantly.' expresses how strategic spending would have created jobs.",
            correctFeedbackRu: "Отлично! 'If stimulus packages had targeted infrastructure, unemployment would have decreased significantly.' выражает, как стратегические расходы создали бы рабочие места.",
            incorrectFeedback: "Check your structure: If + stimulus packages + had + past participle + object, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Проверьте структуру: If + stimulus packages + had + past participle + дополнение, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "sovereign", "wealth", "funds", "had", "invested", "ethically,", "authoritarian", "regimes", "wouldn't", "have", "been", "supported."],
            correctAnswer: "If sovereign wealth funds had invested ethically, authoritarian regimes wouldn't have been supported.",
            correctFeedback: "Excellent! 'If sovereign wealth funds had invested ethically, authoritarian regimes wouldn't have been supported.' shows how responsible investment would have promoted democracy.",
            correctFeedbackRu: "Отлично! 'If sovereign wealth funds had invested ethically, authoritarian regimes wouldn't have been supported.' показывает, как ответственные инвестиции продвигали бы демократию.",
            incorrectFeedback: "Use: If + sovereign wealth funds + had + past participle + adverb, subject + wouldn't have been + past participle.",
            incorrectFeedbackRu: "Используйте: If + sovereign wealth funds + had + past participle + наречие, подлежащее + wouldn't have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "financial", "literacy", "programs", "had", "been", "mandatory,", "consumer", "debt", "wouldn't", "have", "spiraled."],
            correctAnswer: "If financial literacy programs had been mandatory, consumer debt wouldn't have spiraled.",
            correctFeedback: "Great! 'If financial literacy programs had been mandatory, consumer debt wouldn't have spiraled.' demonstrates how education would have prevented personal financial crises.",
            correctFeedbackRu: "Отлично! 'If financial literacy programs had been mandatory, consumer debt wouldn't have spiraled.' демонстрирует, как образование предотвратило бы личные финансовые кризисы.",
            incorrectFeedback: "Remember the passive: If + financial literacy programs + had been + adjective, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Помните пассивное: If + financial literacy programs + had been + прилагательное, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "credit", "rating", "agencies", "had", "provided", "accurate", "assessments,", "investors", "would", "have", "made", "informed", "decisions."],
            correctAnswer: "If credit rating agencies had provided accurate assessments, investors would have made informed decisions.",
            correctFeedback: "Perfect! 'If credit rating agencies had provided accurate assessments, investors would have made informed decisions.' expresses how honest evaluations would have protected financial markets.",
            correctFeedbackRu: "Отлично! 'If credit rating agencies had provided accurate assessments, investors would have made informed decisions.' выражает, как честные оценки защитили бы финансовые рынки.",
            incorrectFeedback: "Check your structure: If + credit rating agencies + had + past participle + adjective + object, subject + would have + past participle + adjective + object.",
            incorrectFeedbackRu: "Проверьте структуру: If + credit rating agencies + had + past participle + прилагательное + дополнение, подлежащее + would have + past participle + прилагательное + дополнение."
        }
    ]
};

/* ============================================
Page 5: Third Conditional - Urban Development and Infrastructure
============================================ */
window.grammarExercises['conditionals']['third-conditional-sentence-page5'] = {
    title: "Third Conditional - Urban Development and Infrastructure",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "cities", "had", "planned", "sustainable", "transportation,", "air", "pollution", "would", "have", "been", "reduced."],
            correctAnswer: "If cities had planned sustainable transportation, air pollution would have been reduced.",
            correctFeedback: "Perfect! 'If cities had planned sustainable transportation, air pollution would have been reduced.' correctly shows how eco-friendly urban planning would have improved air quality.",
            correctFeedbackRu: "Отлично! 'If cities had planned sustainable transportation, air pollution would have been reduced.' правильно показывает, как экологическое городское планирование улучшило бы качество воздуха.",
            incorrectFeedback: "Try again. Remember: If + cities + had + past participle + adjective + object, subject + would have been + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + cities + had + past participle + прилагательное + дополнение, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "housing", "developers", "had", "followed", "building", "codes,", "earthquake", "damage", "wouldn't", "have", "been", "catastrophic."],
            correctAnswer: "If housing developers had followed building codes, earthquake damage wouldn't have been catastrophic.",
            correctFeedback: "Excellent! 'If housing developers had followed building codes, earthquake damage wouldn't have been catastrophic.' demonstrates how safety compliance would have prevented disasters.",
            correctFeedbackRu: "Отлично! 'If housing developers had followed building codes, earthquake damage wouldn't have been catastrophic.' демонстрирует, как соблюдение безопасности предотвратило бы катастрофы.",
            incorrectFeedback: "Remember: If + housing developers + had + past participle + object, subject + wouldn't have been + adjective.",
            incorrectFeedbackRu: "Помните: If + housing developers + had + past participle + дополнение, подлежащее + wouldn't have been + прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "water", "treatment", "facilities", "had", "been", "modernized,", "contamination", "outbreaks", "wouldn't", "have", "occurred."],
            correctAnswer: "If water treatment facilities had been modernized, contamination outbreaks wouldn't have occurred.",
            correctFeedback: "Great! 'If water treatment facilities had been modernized, contamination outbreaks wouldn't have occurred.' shows how infrastructure upgrades would have protected public health.",
            correctFeedbackRu: "Отлично! 'If water treatment facilities had been modernized, contamination outbreaks wouldn't have occurred.' показывает, как модернизация инфраструктуры защитила бы общественное здоровье.",
            incorrectFeedback: "Check the passive: If + water treatment facilities + had been + past participle, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Проверьте пассивное: If + water treatment facilities + had been + past participle, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "smart", "grid", "technology", "had", "been", "implemented", "earlier,", "power", "outages", "would", "have", "been", "minimized."],
            correctAnswer: "If smart grid technology had been implemented earlier, power outages would have been minimized.",
            correctFeedback: "Perfect! 'If smart grid technology had been implemented earlier, power outages would have been minimized.' expresses how advanced systems would have improved electrical reliability.",
            correctFeedbackRu: "Отлично! 'If smart grid technology had been implemented earlier, power outages would have been minimized.' выражает, как продвинутые системы улучшили бы надежность электроснабжения.",
            incorrectFeedback: "Use: If + smart grid technology + had been + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Используйте: If + smart grid technology + had been + past participle + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "green", "building", "standards", "had", "been", "enforced,", "energy", "consumption", "would", "have", "decreased", "dramatically."],
            correctAnswer: "If green building standards had been enforced, energy consumption would have decreased dramatically.",
            correctFeedback: "Excellent! 'If green building standards had been enforced, energy consumption would have decreased dramatically.' shows how environmental regulations would have reduced resource usage.",
            correctFeedbackRu: "Отлично! 'If green building standards had been enforced, energy consumption would have decreased dramatically.' показывает, как экологические регуляции снизили бы потребление ресурсов.",
            incorrectFeedback: "Remember the passive: If + green building standards + had been + past participle, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Помните пассивное: If + green building standards + had been + past participle, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "urban", "planners", "had", "preserved", "green", "spaces,", "mental", "health", "wouldn't", "have", "deteriorated."],
            correctAnswer: "If urban planners had preserved green spaces, mental health wouldn't have deteriorated.",
            correctFeedback: "Great! 'If urban planners had preserved green spaces, mental health wouldn't have deteriorated.' demonstrates how nature conservation would have supported psychological wellbeing.",
            correctFeedbackRu: "Отлично! 'If urban planners had preserved green spaces, mental health wouldn't have deteriorated.' демонстрирует, как сохранение природы поддержало бы психологическое благополучие.",
            incorrectFeedback: "Use the structure: If + urban planners + had + past participle + adjective + object, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Используйте структуру: If + urban planners + had + past participle + прилагательное + дополнение, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "public", "transportation", "systems", "had", "been", "expanded", "efficiently,", "traffic", "congestion", "would", "have", "been", "eliminated."],
            correctAnswer: "If public transportation systems had been expanded efficiently, traffic congestion would have been eliminated.",
            correctFeedback: "Perfect! 'If public transportation systems had been expanded efficiently, traffic congestion would have been eliminated.' expresses how comprehensive transit would have solved mobility problems.",
            correctFeedbackRu: "Отлично! 'If public transportation systems had been expanded efficiently, traffic congestion would have been eliminated.' выражает, как комплексный транзит решил бы проблемы мобильности.",
            incorrectFeedback: "Check the double passive: If + public transportation systems + had been + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Проверьте двойное пассивное: If + public transportation systems + had been + past participle + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "waste", "management", "systems", "had", "prioritized", "recycling,", "landfills", "wouldn't", "have", "overflowed."],
            correctAnswer: "If waste management systems had prioritized recycling, landfills wouldn't have overflowed.",
            correctFeedback: "Excellent! 'If waste management systems had prioritized recycling, landfills wouldn't have overflowed.' shows how circular economy principles would have prevented waste crises.",
            correctFeedbackRu: "Отлично! 'If waste management systems had prioritized recycling, landfills wouldn't have overflowed.' показывает, как принципы циркулярной экономики предотвратили бы кризисы отходов.",
            incorrectFeedback: "Use: If + waste management systems + had + past participle + object, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Используйте: If + waste management systems + had + past participle + дополнение, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "affordable", "housing", "projects", "had", "been", "prioritized,", "homelessness", "wouldn't", "have", "increased", "exponentially."],
            correctAnswer: "If affordable housing projects had been prioritized, homelessness wouldn't have increased exponentially.",
            correctFeedback: "Great! 'If affordable housing projects had been prioritized, homelessness wouldn't have increased exponentially.' demonstrates how social housing would have addressed inequality.",
            correctFeedbackRu: "Отлично! 'If affordable housing projects had been prioritized, homelessness wouldn't have increased exponentially.' демонстрирует, как социальное жилье решило бы неравенство.",
            incorrectFeedback: "Remember the passive: If + affordable housing projects + had been + past participle, subject + wouldn't have + past participle + adverb.",
            incorrectFeedbackRu: "Помните пассивное: If + affordable housing projects + had been + past participle, подлежащее + wouldn't have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "disaster", "preparedness", "systems", "had", "been", "established", "comprehensively,", "casualties", "would", "have", "been", "prevented."],
            correctAnswer: "If disaster preparedness systems had been established comprehensively, casualties would have been prevented.",
            correctFeedback: "Perfect! 'If disaster preparedness systems had been established comprehensively, casualties would have been prevented.' expresses how emergency planning would have saved lives during natural disasters.",
            correctFeedbackRu: "Отлично! 'If disaster preparedness systems had been established comprehensively, casualties would have been prevented.' выражает, как планирование чрезвычайных ситуаций спасло бы жизни во время стихийных бедствий.",
            incorrectFeedback: "Check the double passive: If + disaster preparedness systems + had been + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Проверьте двойное пассивное: If + disaster preparedness systems + had been + past participle + наречие, подлежащее + would have been + past participle."
        }
    ]
};

/* ============================================
Page 6: Third Conditional - Healthcare Systems and Medical Research
============================================ */
window.grammarExercises['conditionals']['third-conditional-sentence-page6'] = {
    title: "Third Conditional - Healthcare Systems and Medical Research",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "universal", "healthcare", "had", "been", "implemented", "globally,", "medical", "bankruptcies", "wouldn't", "have", "occurred."],
            correctAnswer: "If universal healthcare had been implemented globally, medical bankruptcies wouldn't have occurred.",
            correctFeedback: "Perfect! 'If universal healthcare had been implemented globally, medical bankruptcies wouldn't have occurred.' correctly shows how accessible medical care would have prevented financial ruin.",
            correctFeedbackRu: "Отлично! 'If universal healthcare had been implemented globally, medical bankruptcies wouldn't have occurred.' правильно показывает, как доступная медицинская помощь предотвратила бы финансовое разорение.",
            incorrectFeedback: "Try again. Remember: If + universal healthcare + had been + past participle + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + universal healthcare + had been + past participle + наречие, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "pharmaceutical", "companies", "had", "shared", "research", "data,", "vaccine", "development", "would", "have", "accelerated."],
            correctAnswer: "If pharmaceutical companies had shared research data, vaccine development would have accelerated.",
            correctFeedback: "Excellent! 'If pharmaceutical companies had shared research data, vaccine development would have accelerated.' demonstrates how collaboration would have expedited medical breakthroughs.",
            correctFeedbackRu: "Отлично! 'If pharmaceutical companies had shared research data, vaccine development would have accelerated.' демонстрирует, как сотрудничество ускорило бы медицинские прорывы.",
            incorrectFeedback: "Remember: If + pharmaceutical companies + had + past participle + object, subject + would have + past participle.",
            incorrectFeedbackRu: "Помните: If + pharmaceutical companies + had + past participle + дополнение, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "telemedicine", "infrastructure", "had", "been", "developed", "comprehensively,", "rural", "patients", "would", "have", "received", "specialist", "care."],
            correctAnswer: "If telemedicine infrastructure had been developed comprehensively, rural patients would have received specialist care.",
            correctFeedback: "Great! 'If telemedicine infrastructure had been developed comprehensively, rural patients would have received specialist care.' shows how digital health would have eliminated geographic barriers.",
            correctFeedbackRu: "Отлично! 'If telemedicine infrastructure had been developed comprehensively, rural patients would have received specialist care.' показывает, как цифровое здравоохранение устранило бы географические барьеры.",
            incorrectFeedback: "Check the passive: If + telemedicine infrastructure + had been + past participle + adverb, subject + would have + past participle + object.",
            incorrectFeedbackRu: "Проверьте пассивное: If + telemedicine infrastructure + had been + past participle + наречие, подлежащее + would have + past participle + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "mental", "health", "services", "had", "been", "destigmatized,", "suicide", "prevention", "would", "have", "improved", "significantly."],
            correctAnswer: "If mental health services had been destigmatized, suicide prevention would have improved significantly.",
            correctFeedback: "Perfect! 'If mental health services had been destigmatized, suicide prevention would have improved significantly.' expresses how social acceptance would have enhanced psychological support.",
            correctFeedbackRu: "Отлично! 'If mental health services had been destigmatized, suicide prevention would have improved significantly.' выражает, как социальное принятие улучшило бы психологическую поддержку.",
            incorrectFeedback: "Use: If + mental health services + had been + past participle, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Используйте: If + mental health services + had been + past participle, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "organ", "donation", "systems", "had", "been", "streamlined", "internationally,", "transplant", "waiting", "lists", "would", "have", "been", "eliminated."],
            correctAnswer: "If organ donation systems had been streamlined internationally, transplant waiting lists would have been eliminated.",
            correctFeedback: "Excellent! 'If organ donation systems had been streamlined internationally, transplant waiting lists would have been eliminated.' shows how global coordination would have saved lives.",
            correctFeedbackRu: "Отлично! 'If organ donation systems had been streamlined internationally, transplant waiting lists would have been eliminated.' показывает, как глобальная координация спасла бы жизни.",
            incorrectFeedback: "Remember the double passive: If + organ donation systems + had been + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Помните двойное пассивное: If + organ donation systems + had been + past participle + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "personalized", "medicine", "had", "been", "adopted", "earlier,", "cancer", "treatment", "would", "have", "become", "more", "effective."],
            correctAnswer: "If personalized medicine had been adopted earlier, cancer treatment would have become more effective.",
            correctFeedback: "Great! 'If personalized medicine had been adopted earlier, cancer treatment would have become more effective.' demonstrates how tailored therapy would have improved oncology outcomes.",
            correctFeedbackRu: "Отлично! 'If personalized medicine had been adopted earlier, cancer treatment would have become more effective.' демонстрирует, как индивидуальная терапия улучшила бы результаты онкологии.",
            incorrectFeedback: "Use the structure: If + personalized medicine + had been + past participle + adverb, subject + would have + past participle + comparative.",
            incorrectFeedbackRu: "Используйте структуру: If + personalized medicine + had been + past participle + наречие, подлежащее + would have + past participle + сравнительная степень."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "preventive", "care", "programs", "had", "been", "prioritized,", "chronic", "disease", "rates", "wouldn't", "have", "skyrocketed."],
            correctAnswer: "If preventive care programs had been prioritized, chronic disease rates wouldn't have skyrocketed.",
            correctFeedback: "Perfect! 'If preventive care programs had been prioritized, chronic disease rates wouldn't have skyrocketed.' expresses how early intervention would have maintained population health.",
            correctFeedbackRu: "Отлично! 'If preventive care programs had been prioritized, chronic disease rates wouldn't have skyrocketed.' выражает, как раннее вмешательство поддержало бы здоровье населения.",
            incorrectFeedback: "Check the passive: If + preventive care programs + had been + past participle, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Проверьте пассивное: If + preventive care programs + had been + past participle, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "robotic", "surgery", "systems", "had", "been", "perfected", "earlier,", "surgical", "precision", "would", "have", "improved", "dramatically."],
            correctAnswer: "If robotic surgery systems had been perfected earlier, surgical precision would have improved dramatically.",
            correctFeedback: "Excellent! 'If robotic surgery systems had been perfected earlier, surgical precision would have improved dramatically.' shows how advanced medical technology would have enhanced surgical outcomes.",
            correctFeedbackRu: "Отлично! 'If robotic surgery systems had been perfected earlier, surgical precision would have improved dramatically.' показывает, как продвинутые медицинские технологии улучшили бы хирургические результаты.",
            incorrectFeedback: "Use: If + robotic surgery systems + had been + past participle + adverb, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Используйте: If + robotic surgery systems + had been + past participle + наречие, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "global", "health", "surveillance", "systems", "had", "detected", "outbreaks", "faster,", "pandemics", "would", "have", "been", "contained."],
            correctAnswer: "If global health surveillance systems had detected outbreaks faster, pandemics would have been contained.",
            correctFeedback: "Great! 'If global health surveillance systems had detected outbreaks faster, pandemics would have been contained.' demonstrates how early warning would have prevented global spread.",
            correctFeedbackRu: "Отлично! 'If global health surveillance systems had detected outbreaks faster, pandemics would have been contained.' демонстрирует, как раннее предупреждение предотвратило бы глобальное распространение.",
            incorrectFeedback: "Remember: If + global health surveillance systems + had + past participle + object + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Помните: If + global health surveillance systems + had + past participle + дополнение + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "gene", "therapy", "research", "had", "received", "sufficient", "funding,", "hereditary", "disorders", "would", "have", "been", "cured."],
            correctAnswer: "If gene therapy research had received sufficient funding, hereditary disorders would have been cured.",
            correctFeedback: "Perfect! 'If gene therapy research had received sufficient funding, hereditary disorders would have been cured.' expresses how investment would have eliminated genetic diseases.",
            correctFeedbackRu: "Отлично! 'If gene therapy research had received sufficient funding, hereditary disorders would have been cured.' выражает, как инвестиции устранили бы генетические заболевания.",
            incorrectFeedback: "Check your structure: If + gene therapy research + had + past participle + adjective + object, subject + would have been + past participle.",
            incorrectFeedbackRu: "Проверьте структуру: If + gene therapy research + had + past participle + прилагательное + дополнение, подлежащее + would have been + past participle."
        }
    ]
};

/* ============================================
Page 7: Third Conditional - Environmental Conservation and Climate Action
============================================ */
window.grammarExercises['conditionals']['third-conditional-sentence-page7'] = {
    title: "Third Conditional - Environmental Conservation and Climate Action",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "carbon", "emissions", "had", "been", "regulated", "strictly", "decades", "ago,", "global", "warming", "wouldn't", "have", "accelerated."],
            correctAnswer: "If carbon emissions had been regulated strictly decades ago, global warming wouldn't have accelerated.",
            correctFeedback: "Perfect! 'If carbon emissions had been regulated strictly decades ago, global warming wouldn't have accelerated.' correctly shows how early climate action would have prevented environmental crisis.",
            correctFeedbackRu: "Отлично! 'If carbon emissions had been regulated strictly decades ago, global warming wouldn't have accelerated.' правильно показывает, как ранние климатические действия предотвратили бы экологический кризис.",
            incorrectFeedback: "Try again. Remember: If + carbon emissions + had been + past participle + adverb + time phrase, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + carbon emissions + had been + past participle + наречие + временная фраза, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "deforestation", "had", "been", "prevented", "aggressively,", "biodiversity", "loss", "wouldn't", "have", "reached", "critical", "levels."],
            correctAnswer: "If deforestation had been prevented aggressively, biodiversity loss wouldn't have reached critical levels.",
            correctFeedback: "Excellent! 'If deforestation had been prevented aggressively, biodiversity loss wouldn't have reached critical levels.' demonstrates how forest protection would have preserved ecosystems.",
            correctFeedbackRu: "Отлично! 'If deforestation had been prevented aggressively, biodiversity loss wouldn't have reached critical levels.' демонстрирует, как защита лесов сохранила бы экосистемы.",
            incorrectFeedback: "Remember the passive: If + deforestation + had been + past participle + adverb, subject + wouldn't have + past participle + adjective + object.",
            incorrectFeedbackRu: "Помните пассивное: If + deforestation + had been + past participle + наречие, подлежащее + wouldn't have + past participle + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "renewable", "energy", "sources", "had", "been", "subsidized", "heavily,", "fossil", "fuel", "dependency", "would", "have", "ended."],
            correctAnswer: "If renewable energy sources had been subsidized heavily, fossil fuel dependency would have ended.",
            correctFeedback: "Great! 'If renewable energy sources had been subsidized heavily, fossil fuel dependency would have ended.' shows how government support would have accelerated clean energy transition.",
            correctFeedbackRu: "Отлично! 'If renewable energy sources had been subsidized heavily, fossil fuel dependency would have ended.' показывает, как государственная поддержка ускорила бы переход к чистой энергии.",
            incorrectFeedback: "Check the passive: If + renewable energy sources + had been + past participle + adverb, subject + would have + past participle.",
            incorrectFeedbackRu: "Проверьте пассивное: If + renewable energy sources + had been + past participle + наречие, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "plastic", "production", "had", "been", "restricted", "globally,", "ocean", "pollution", "wouldn't", "have", "become", "catastrophic."],
            correctAnswer: "If plastic production had been restricted globally, ocean pollution wouldn't have become catastrophic.",
            correctFeedback: "Perfect! 'If plastic production had been restricted globally, ocean pollution wouldn't have become catastrophic.' expresses how manufacturing limits would have protected marine environments.",
            correctFeedbackRu: "Отлично! 'If plastic production had been restricted globally, ocean pollution wouldn't have become catastrophic.' выражает, как ограничения производства защитили бы морскую среду.",
            incorrectFeedback: "Use: If + plastic production + had been + past participle + adverb, subject + wouldn't have + past participle + adjective.",
            incorrectFeedbackRu: "Используйте: If + plastic production + had been + past participle + наречие, подлежащее + wouldn't have + past participle + прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "endangered", "species", "had", "been", "protected", "effectively,", "mass", "extinctions", "wouldn't", "have", "occurred."],
            correctAnswer: "If endangered species had been protected effectively, mass extinctions wouldn't have occurred.",
            correctFeedback: "Excellent! 'If endangered species had been protected effectively, mass extinctions wouldn't have occurred.' shows how conservation efforts would have prevented biodiversity collapse.",
            correctFeedbackRu: "Отлично! 'If endangered species had been protected effectively, mass extinctions wouldn't have occurred.' показывает, как усилия по сохранению предотвратили бы коллапс биоразнообразия.",
            incorrectFeedback: "Remember the passive: If + endangered species + had been + past participle + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Помните пассивное: If + endangered species + had been + past participle + наречие, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "sustainable", "farming", "practices", "had", "been", "adopted", "universally,", "soil", "degradation", "would", "have", "been", "prevented."],
            correctAnswer: "If sustainable farming practices had been adopted universally, soil degradation would have been prevented.",
            correctFeedback: "Great! 'If sustainable farming practices had been adopted universally, soil degradation would have been prevented.' demonstrates how agricultural reform would have preserved land fertility.",
            correctFeedbackRu: "Отлично! 'If sustainable farming practices had been adopted universally, soil degradation would have been prevented.' демонстрирует, как аграрная реформа сохранила бы плодородие земли.",
            incorrectFeedback: "Use the structure: If + sustainable farming practices + had been + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Используйте структуру: If + sustainable farming practices + had been + past participle + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "water", "conservation", "measures", "had", "been", "implemented", "comprehensively,", "drought", "crises", "wouldn't", "have", "intensified."],
            correctAnswer: "If water conservation measures had been implemented comprehensively, drought crises wouldn't have intensified.",
            correctFeedback: "Perfect! 'If water conservation measures had been implemented comprehensively, drought crises wouldn't have intensified.' expresses how resource management would have mitigated climate impacts.",
            correctFeedbackRu: "Отлично! 'If water conservation measures had been implemented comprehensively, drought crises wouldn't have intensified.' выражает, как управление ресурсами смягчило бы климатические воздействия.",
            incorrectFeedback: "Check the passive: If + water conservation measures + had been + past participle + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Проверьте пассивное: If + water conservation measures + had been + past participle + наречие, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "circular", "economy", "principles", "had", "been", "embraced", "industrially,", "waste", "streams", "would", "have", "been", "eliminated."],
            correctAnswer: "If circular economy principles had been embraced industrially, waste streams would have been eliminated.",
            correctFeedback: "Excellent! 'If circular economy principles had been embraced industrially, waste streams would have been eliminated.' shows how sustainable business models would have ended pollution.",
            correctFeedbackRu: "Отлично! 'If circular economy principles had been embraced industrially, waste streams would have been eliminated.' показывает, как устойчивые бизнес-модели покончили бы с загрязнением.",
            incorrectFeedback: "Use: If + circular economy principles + had been + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Используйте: If + circular economy principles + had been + past participle + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "green", "technology", "research", "had", "received", "massive", "investment,", "environmental", "solutions", "would", "have", "emerged", "faster."],
            correctAnswer: "If green technology research had received massive investment, environmental solutions would have emerged faster.",
            correctFeedback: "Great! 'If green technology research had received massive investment, environmental solutions would have emerged faster.' demonstrates how funding would have accelerated innovation.",
            correctFeedbackRu: "Отлично! 'If green technology research had received massive investment, environmental solutions would have emerged faster.' демонстрирует, как финансирование ускорило бы инновации.",
            incorrectFeedback: "Remember: If + green technology research + had + past participle + adjective + object, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Помните: If + green technology research + had + past participle + прилагательное + дополнение, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "environmental", "education", "programs", "had", "been", "mandatory", "worldwide,", "ecological", "awareness", "would", "have", "increased", "dramatically."],
            correctAnswer: "If environmental education programs had been mandatory worldwide, ecological awareness would have increased dramatically.",
            correctFeedback: "Perfect! 'If environmental education programs had been mandatory worldwide, ecological awareness would have increased dramatically.' expresses how education would have transformed environmental consciousness globally.",
            correctFeedbackRu: "Отлично! 'If environmental education programs had been mandatory worldwide, ecological awareness would have increased dramatically.' выражает, как образование трансформировало бы экологическое сознание во всем мире.",
            incorrectFeedback: "Check your structure: If + environmental education programs + had been + adjective + adverb, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Проверьте структуру: If + environmental education programs + had been + прилагательное + наречие, подлежащее + would have + past participle + наречие."
        }
    ]
};

/* ============================================
Page 8: Third Conditional - International Relations and Diplomacy
============================================ */
window.grammarExercises['conditionals']['third-conditional-sentence-page8'] = {
    title: "Third Conditional - International Relations and Diplomacy",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "diplomatic", "negotiations", "had", "been", "conducted", "transparently,", "regional", "conflicts", "wouldn't", "have", "escalated."],
            correctAnswer: "If diplomatic negotiations had been conducted transparently, regional conflicts wouldn't have escalated.",
            correctFeedback: "Perfect! 'If diplomatic negotiations had been conducted transparently, regional conflicts wouldn't have escalated.' correctly shows how open diplomacy would have prevented wars.",
            correctFeedbackRu: "Отлично! 'If diplomatic negotiations had been conducted transparently, regional conflicts wouldn't have escalated.' правильно показывает, как открытая дипломатия предотвратила бы войны.",
            incorrectFeedback: "Try again. Remember: If + diplomatic negotiations + had been + past participle + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + diplomatic negotiations + had been + past participle + наречие, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "international", "sanctions", "had", "targeted", "specific", "individuals,", "civilian", "populations", "wouldn't", "have", "suffered."],
            correctAnswer: "If international sanctions had targeted specific individuals, civilian populations wouldn't have suffered.",
            correctFeedback: "Excellent! 'If international sanctions had targeted specific individuals, civilian populations wouldn't have suffered.' demonstrates how precise measures would have protected innocent people.",
            correctFeedbackRu: "Отлично! 'If international sanctions had targeted specific individuals, civilian populations wouldn't have suffered.' демонстрирует, как точные меры защитили бы невинных людей.",
            incorrectFeedback: "Remember: If + international sanctions + had + past participle + adjective + object, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Помните: If + international sanctions + had + past participle + прилагательное + дополнение, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "peacekeeping", "forces", "had", "been", "deployed", "earlier,", "genocide", "would", "have", "been", "prevented."],
            correctAnswer: "If peacekeeping forces had been deployed earlier, genocide would have been prevented.",
            correctFeedback: "Great! 'If peacekeeping forces had been deployed earlier, genocide would have been prevented.' shows how timely intervention would have saved countless lives.",
            correctFeedbackRu: "Отлично! 'If peacekeeping forces had been deployed earlier, genocide would have been prevented.' показывает, как своевременное вмешательство спасло бы бесчисленные жизни.",
            incorrectFeedback: "Check the passive: If + peacekeeping forces + had been + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Проверьте пассивное: If + peacekeeping forces + had been + past participle + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "arms", "trade", "treaties", "had", "been", "enforced", "rigorously,", "weapon", "proliferation", "wouldn't", "have", "destabilized", "regions."],
            correctAnswer: "If arms trade treaties had been enforced rigorously, weapon proliferation wouldn't have destabilized regions.",
            correctFeedback: "Perfect! 'If arms trade treaties had been enforced rigorously, weapon proliferation wouldn't have destabilized regions.' expresses how strict controls would have maintained regional security.",
            correctFeedbackRu: "Отлично! 'If arms trade treaties had been enforced rigorously, weapon proliferation wouldn't have destabilized regions.' выражает, как строгий контроль поддержал бы региональную безопасность.",
            incorrectFeedback: "Use: If + arms trade treaties + had been + past participle + adverb, subject + wouldn't have + past participle + object.",
            incorrectFeedbackRu: "Используйте: If + arms trade treaties + had been + past participle + наречие, подлежащее + wouldn't have + past participle + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "refugee", "assistance", "programs", "had", "received", "adequate", "funding,", "humanitarian", "crises", "would", "have", "been", "mitigated."],
            correctAnswer: "If refugee assistance programs had received adequate funding, humanitarian crises would have been mitigated.",
            correctFeedback: "Excellent! 'If refugee assistance programs had received adequate funding, humanitarian crises would have been mitigated.' shows how proper support would have alleviated suffering.",
            correctFeedbackRu: "Отлично! 'If refugee assistance programs had received adequate funding, humanitarian crises would have been mitigated.' показывает, как правильная поддержка облегчила бы страдания.",
            incorrectFeedback: "Remember: If + refugee assistance programs + had + past participle + adjective + object, subject + would have been + past participle.",
            incorrectFeedbackRu: "Помните: If + refugee assistance programs + had + past participle + прилагательное + дополнение, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "nuclear", "disarmament", "agreements", "had", "been", "implemented", "completely,", "global", "security", "would", "have", "improved", "dramatically."],
            correctAnswer: "If nuclear disarmament agreements had been implemented completely, global security would have improved dramatically.",
            correctFeedback: "Great! 'If nuclear disarmament agreements had been implemented completely, global security would have improved dramatically.' demonstrates how weapons reduction would have enhanced world peace.",
            correctFeedbackRu: "Отлично! 'If nuclear disarmament agreements had been implemented completely, global security would have improved dramatically.' демонстрирует, как сокращение оружия усилило бы мир во всем мире.",
            incorrectFeedback: "Use the structure: If + nuclear disarmament agreements + had been + past participle + adverb, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Используйте структуру: If + nuclear disarmament agreements + had been + past participle + наречие, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "multilateral", "trade", "agreements", "had", "included", "environmental", "clauses,", "ecological", "destruction", "would", "have", "been", "limited."],
            correctAnswer: "If multilateral trade agreements had included environmental clauses, ecological destruction would have been limited.",
            correctFeedback: "Perfect! 'If multilateral trade agreements had included environmental clauses, ecological destruction would have been limited.' expresses how green policies would have protected ecosystems.",
            correctFeedbackRu: "Отлично! 'If multilateral trade agreements had included environmental clauses, ecological destruction would have been limited.' выражает, как зеленая политика защитила бы экосистемы.",
            incorrectFeedback: "Check: If + multilateral trade agreements + had + past participle + adjective + object, subject + would have been + past participle.",
            incorrectFeedbackRu: "Проверьте: If + multilateral trade agreements + had + past participle + прилагательное + дополнение, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "cybersecurity", "cooperation", "frameworks", "had", "been", "established", "internationally,", "state-sponsored", "attacks", "wouldn't", "have", "proliferated."],
            correctAnswer: "If cybersecurity cooperation frameworks had been established internationally, state-sponsored attacks wouldn't have proliferated.",
            correctFeedback: "Excellent! 'If cybersecurity cooperation frameworks had been established internationally, state-sponsored attacks wouldn't have proliferated.' shows how digital collaboration would have prevented cyber warfare.",
            correctFeedbackRu: "Отлично! 'If cybersecurity cooperation frameworks had been established internationally, state-sponsored attacks wouldn't have proliferated.' показывает, как цифровое сотрудничество предотвратило бы кибервойны.",
            incorrectFeedback: "Use: If + cybersecurity cooperation frameworks + had been + past participle + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Используйте: If + cybersecurity cooperation frameworks + had been + past participle + наречие, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "international", "courts", "had", "prosecuted", "war", "criminals", "consistently,", "human", "rights", "violations", "would", "have", "decreased."],
            correctAnswer: "If international courts had prosecuted war criminals consistently, human rights violations would have decreased.",
            correctFeedback: "Great! 'If international courts had prosecuted war criminals consistently, human rights violations would have decreased.' demonstrates how justice would have deterred atrocities.",
            correctFeedbackRu: "Отлично! 'If international courts had prosecuted war criminals consistently, human rights violations would have decreased.' демонстрирует, как правосудие сдержало бы зверства.",
            incorrectFeedback: "Remember: If + international courts + had + past participle + object + adverb, subject + would have + past participle.",
            incorrectFeedbackRu: "Помните: If + international courts + had + past participle + дополнение + наречие, подлежащее + would have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "cultural", "exchange", "programs", "had", "been", "expanded", "globally,", "international", "understanding", "would", "have", "deepened", "significantly."],
            correctAnswer: "If cultural exchange programs had been expanded globally, international understanding would have deepened significantly.",
            correctFeedback: "Perfect! 'If cultural exchange programs had been expanded globally, international understanding would have deepened significantly.' expresses how cross-cultural contact would have promoted world peace.",
            correctFeedbackRu: "Отлично! 'If cultural exchange programs had been expanded globally, international understanding would have deepened significantly.' выражает, как межкультурные контакты способствовали бы мировому миру.",
            incorrectFeedback: "Check your structure: If + cultural exchange programs + had been + past participle + adverb, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Проверьте структуру: If + cultural exchange programs + had been + past participle + наречие, подлежащее + would have + past participle + наречие."
        }
    ]
};

/* ============================================
Page 9: Third Conditional - Advanced Technology and Space Exploration
============================================ */
window.grammarExercises['conditionals']['third-conditional-sentence-page9'] = {
    title: "Third Conditional - Advanced Technology and Space Exploration",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "quantum", "computing", "had", "been", "developed", "sooner,", "cryptographic", "security", "would", "have", "evolved", "dramatically."],
            correctAnswer: "If quantum computing had been developed sooner, cryptographic security would have evolved dramatically.",
            correctFeedback: "Perfect! 'If quantum computing had been developed sooner, cryptographic security would have evolved dramatically.' correctly shows how advanced technology would have transformed data protection.",
            correctFeedbackRu: "Отлично! 'If quantum computing had been developed sooner, cryptographic security would have evolved dramatically.' правильно показывает, как продвинутые технологии трансформировали бы защиту данных.",
            incorrectFeedback: "Try again. Remember: If + quantum computing + had been + past participle + adverb, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + quantum computing + had been + past participle + наречие, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "space", "agencies", "had", "collaborated", "internationally", "from", "the", "beginning,", "Mars", "exploration", "would", "have", "advanced", "faster."],
            correctAnswer: "If space agencies had collaborated internationally from the beginning, Mars exploration would have advanced faster.",
            correctFeedback: "Excellent! 'If space agencies had collaborated internationally from the beginning, Mars exploration would have advanced faster.' demonstrates how cooperation would have accelerated space discovery.",
            correctFeedbackRu: "Отлично! 'If space agencies had collaborated internationally from the beginning, Mars exploration would have advanced faster.' демонстрирует, как сотрудничество ускорило бы космические открытия.",
            incorrectFeedback: "Remember: If + space agencies + had + past participle + adverb + prepositional phrase, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Помните: If + space agencies + had + past participle + наречие + предложная фраза, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "artificial", "intelligence", "ethics", "had", "been", "established", "proactively,", "algorithmic", "bias", "wouldn't", "have", "emerged."],
            correctAnswer: "If artificial intelligence ethics had been established proactively, algorithmic bias wouldn't have emerged.",
            correctFeedback: "Great! 'If artificial intelligence ethics had been established proactively, algorithmic bias wouldn't have emerged.' shows how early regulation would have prevented AI discrimination.",
            correctFeedbackRu: "Отлично! 'If artificial intelligence ethics had been established proactively, algorithmic bias wouldn't have emerged.' показывает, как раннее регулирование предотвратило бы дискриминацию ИИ.",
            incorrectFeedback: "Check the passive: If + artificial intelligence ethics + had been + past participle + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Проверьте пассивное: If + artificial intelligence ethics + had been + past participle + наречие, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "nanotechnology", "applications", "had", "been", "perfected", "earlier,", "targeted", "drug", "delivery", "would", "have", "revolutionized", "medicine."],
            correctAnswer: "If nanotechnology applications had been perfected earlier, targeted drug delivery would have revolutionized medicine.",
            correctFeedback: "Perfect! 'If nanotechnology applications had been perfected earlier, targeted drug delivery would have revolutionized medicine.' expresses how molecular engineering would have transformed healthcare.",
            correctFeedbackRu: "Отлично! 'If nanotechnology applications had been perfected earlier, targeted drug delivery would have revolutionized medicine.' выражает, как молекулярная инженерия трансформировала бы здравоохранение.",
            incorrectFeedback: "Use: If + nanotechnology applications + had been + past participle + adverb, subject + would have + past participle + object.",
            incorrectFeedbackRu: "Используйте: If + nanotechnology applications + had been + past participle + наречие, подлежащее + would have + past participle + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "fusion", "power", "technology", "had", "achieved", "commercial", "viability,", "energy", "crises", "wouldn't", "have", "occurred."],
            correctAnswer: "If fusion power technology had achieved commercial viability, energy crises wouldn't have occurred.",
            correctFeedback: "Excellent! 'If fusion power technology had achieved commercial viability, energy crises wouldn't have occurred.' shows how clean energy breakthroughs would have solved global problems.",
            correctFeedbackRu: "Отлично! 'If fusion power technology had achieved commercial viability, energy crises wouldn't have occurred.' показывает, как прорывы в чистой энергии решили бы глобальные проблемы.",
            incorrectFeedback: "Remember: If + fusion power technology + had + past participle + adjective + object, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Помните: If + fusion power technology + had + past participle + прилагательное + дополнение, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "brain-computer", "interfaces", "had", "been", "developed", "safely,", "paralyzed", "patients", "would", "have", "regained", "mobility."],
            correctAnswer: "If brain-computer interfaces had been developed safely, paralyzed patients would have regained mobility.",
            correctFeedback: "Great! 'If brain-computer interfaces had been developed safely, paralyzed patients would have regained mobility.' demonstrates how neurotechnology would have restored human capabilities.",
            correctFeedbackRu: "Отлично! 'If brain-computer interfaces had been developed safely, paralyzed patients would have regained mobility.' демонстрирует, как нейротехнологии восстановили бы человеческие способности.",
            incorrectFeedback: "Use the structure: If + brain-computer interfaces + had been + past participle + adverb, subject + would have + past participle + object.",
            incorrectFeedbackRu: "Используйте структуру: If + brain-computer interfaces + had been + past participle + наречие, подлежащее + would have + past participle + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "autonomous", "vehicle", "networks", "had", "been", "implemented", "comprehensively,", "traffic", "accidents", "would", "have", "been", "eliminated."],
            correctAnswer: "If autonomous vehicle networks had been implemented comprehensively, traffic accidents would have been eliminated.",
            correctFeedback: "Perfect! 'If autonomous vehicle networks had been implemented comprehensively, traffic accidents would have been eliminated.' expresses how self-driving technology would have saved lives.",
            correctFeedbackRu: "Отлично! 'If autonomous vehicle networks had been implemented comprehensively, traffic accidents would have been eliminated.' выражает, как технология беспилотного вождения спасла бы жизни.",
            incorrectFeedback: "Check the passive: If + autonomous vehicle networks + had been + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Проверьте пассивное: If + autonomous vehicle networks + had been + past participle + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "genetic", "engineering", "techniques", "had", "been", "refined", "responsibly,", "hereditary", "diseases", "would", "have", "been", "eradicated."],
            correctAnswer: "If genetic engineering techniques had been refined responsibly, hereditary diseases would have been eradicated.",
            correctFeedback: "Excellent! 'If genetic engineering techniques had been refined responsibly, hereditary diseases would have been eradicated.' shows how biotechnology would have eliminated genetic disorders.",
            correctFeedbackRu: "Отлично! 'If genetic engineering techniques had been refined responsibly, hereditary diseases would have been eradicated.' показывает, как биотехнология устранила бы генетические расстройства.",
            incorrectFeedback: "Use: If + genetic engineering techniques + had been + past participle + adverb, subject + would have been + past participle.",
            incorrectFeedbackRu: "Используйте: If + genetic engineering techniques + had been + past participle + наречие, подлежащее + would have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "virtual", "reality", "platforms", "had", "been", "integrated", "into", "education,", "learning", "outcomes", "would", "have", "improved", "exponentially."],
            correctAnswer: "If virtual reality platforms had been integrated into education, learning outcomes would have improved exponentially.",
            correctFeedback: "Great! 'If virtual reality platforms had been integrated into education, learning outcomes would have improved exponentially.' demonstrates how immersive technology would have transformed teaching.",
            correctFeedbackRu: "Отлично! 'If virtual reality platforms had been integrated into education, learning outcomes would have improved exponentially.' демонстрирует, как иммерсивные технологии трансформировали бы обучение.",
            incorrectFeedback: "Remember: If + virtual reality platforms + had been + past participle + prepositional phrase, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Помните: If + virtual reality platforms + had been + past participle + предложная фраза, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "additive", "manufacturing", "had", "prioritized", "eco-friendly", "materials,", "industrial", "waste", "would", "have", "been", "reduced."],
            correctAnswer: "If additive manufacturing had prioritized eco-friendly materials, industrial waste would have been reduced.",
            correctFeedback: "Perfect! 'If additive manufacturing had prioritized eco-friendly materials, industrial waste would have been reduced.' expresses how sustainable production methods would have minimized environmental impact.",
            correctFeedbackRu: "Отлично! 'If additive manufacturing had prioritized eco-friendly materials, industrial waste would have been reduced.' выражает, как устойчивые методы производства минимизировали бы воздействие на окружающую среду.",
            incorrectFeedback: "Check your structure: If + additive manufacturing + had + past participle + adjective + object, subject + would have been + past participle.",
            incorrectFeedbackRu: "Проверьте структуру: If + additive manufacturing + had + past participle + прилагательное + дополнение, подлежащее + would have been + past participle."
        }
    ]
};

/* ============================================
Page 10: Third Conditional - Futuristic Innovation and Global Transformation
============================================ */
window.grammarExercises['conditionals']['third-conditional-sentence-page10'] = {
    title: "Third Conditional - Futuristic Innovation and Global Transformation",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "interplanetary", "communication", "networks", "had", "been", "established", "decades", "ago,", "space", "colonization", "would", "have", "progressed", "exponentially."],
            correctAnswer: "If interplanetary communication networks had been established decades ago, space colonization would have progressed exponentially.",
            correctFeedback: "Perfect! 'If interplanetary communication networks had been established decades ago, space colonization would have progressed exponentially.' correctly shows how advanced infrastructure would have accelerated human expansion into space.",
            correctFeedbackRu: "Отлично! 'If interplanetary communication networks had been established decades ago, space colonization would have progressed exponentially.' правильно показывает, как продвинутая инфраструктура ускорила бы человеческую экспансию в космос.",
            incorrectFeedback: "Try again. Remember: If + interplanetary communication networks + had been + past participle + time phrase, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: If + interplanetary communication networks + had been + past participle + временная фраза, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "molecular", "manufacturing", "technologies", "had", "been", "perfected", "commercially,", "resource", "scarcity", "would", "have", "become", "obsolete."],
            correctAnswer: "If molecular manufacturing technologies had been perfected commercially, resource scarcity would have become obsolete.",
            correctFeedback: "Excellent! 'If molecular manufacturing technologies had been perfected commercially, resource scarcity would have become obsolete.' demonstrates how nanotechnology would have solved material limitations.",
            correctFeedbackRu: "Отлично! 'If molecular manufacturing technologies had been perfected commercially, resource scarcity would have become obsolete.' демонстрирует, как нанотехнология решила бы проблемы материальных ограничений.",
            incorrectFeedback: "Remember: If + molecular manufacturing technologies + had been + past participle + adverb, subject + would have + past participle + adjective.",
            incorrectFeedbackRu: "Помните: If + molecular manufacturing technologies + had been + past participle + наречие, подлежащее + would have + past participle + прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "consciousness", "uploading", "research", "had", "been", "pursued", "ethically,", "digital", "immortality", "might", "have", "been", "achieved."],
            correctAnswer: "If consciousness uploading research had been pursued ethically, digital immortality might have been achieved.",
            correctFeedback: "Great! 'If consciousness uploading research had been pursued ethically, digital immortality might have been achieved.' shows how neuroscience breakthroughs could have transformed human existence.",
            correctFeedbackRu: "Отлично! 'If consciousness uploading research had been pursued ethically, digital immortality might have been achieved.' показывает, как прорывы в нейронауке могли трансформировать человеческое существование.",
            incorrectFeedback: "Check the modal: If + consciousness uploading research + had been + past participle + adverb, subject + might have been + past participle.",
            incorrectFeedbackRu: "Проверьте модальный: If + consciousness uploading research + had been + past participle + наречие, подлежащее + might have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "antimatter", "propulsion", "systems", "had", "been", "developed", "successfully,", "interstellar", "travel", "would", "have", "become", "feasible."],
            correctAnswer: "If antimatter propulsion systems had been developed successfully, interstellar travel would have become feasible.",
            correctFeedback: "Perfect! 'If antimatter propulsion systems had been developed successfully, interstellar travel would have become feasible.' expresses how exotic physics would have enabled exploration beyond our solar system.",
            correctFeedbackRu: "Отлично! 'If antimatter propulsion systems had been developed successfully, interstellar travel would have become feasible.' выражает, как экзотическая физика обеспечила бы исследование за пределами нашей солнечной системы.",
            incorrectFeedback: "Use: If + antimatter propulsion systems + had been + past participle + adverb, subject + would have + past participle + adjective.",
            incorrectFeedbackRu: "Используйте: If + antimatter propulsion systems + had been + past participle + наречие, подлежащее + would have + past participle + прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "climate", "engineering", "technologies", "had", "been", "deployed", "responsibly,", "planetary", "weather", "systems", "could", "have", "been", "stabilized."],
            correctAnswer: "If climate engineering technologies had been deployed responsibly, planetary weather systems could have been stabilized.",
            correctFeedback: "Excellent! 'If climate engineering technologies had been deployed responsibly, planetary weather systems could have been stabilized.' shows how geoengineering might have controlled global climate patterns.",
            correctFeedbackRu: "Отлично! 'If climate engineering technologies had been deployed responsibly, planetary weather systems could have been stabilized.' показывает, как геоинженерия могла контролировать глобальные климатические модели.",
            incorrectFeedback: "Remember the modal: If + climate engineering technologies + had been + past participle + adverb, subject + could have been + past participle.",
            incorrectFeedbackRu: "Помните модальный: If + climate engineering technologies + had been + past participle + наречие, подлежащее + could have been + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "synthetic", "biology", "platforms", "had", "been", "regulated", "comprehensively,", "biological", "weapons", "wouldn't", "have", "proliferated."],
            correctAnswer: "If synthetic biology platforms had been regulated comprehensively, biological weapons wouldn't have proliferated.",
            correctFeedback: "Great! 'If synthetic biology platforms had been regulated comprehensively, biological weapons wouldn't have proliferated.' demonstrates how biotechnology oversight would have prevented dangerous applications.",
            correctFeedbackRu: "Отлично! 'If synthetic biology platforms had been regulated comprehensively, biological weapons wouldn't have proliferated.' демонстрирует, как надзор за биотехнологиями предотвратил бы опасные применения.",
            incorrectFeedback: "Use the structure: If + synthetic biology platforms + had been + past participle + adverb, subject + wouldn't have + past participle.",
            incorrectFeedbackRu: "Используйте структуру: If + synthetic biology platforms + had been + past participle + наречие, подлежащее + wouldn't have + past participle."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "telepathic", "communication", "interfaces", "had", "been", "invented", "safely,", "language", "barriers", "would", "have", "been", "eliminated", "permanently."],
            correctAnswer: "If telepathic communication interfaces had been invented safely, language barriers would have been eliminated permanently.",
            correctFeedback: "Perfect! 'If telepathic communication interfaces had been invented safely, language barriers would have been eliminated permanently.' expresses how mind-to-mind communication would have unified humanity.",
            correctFeedbackRu: "Отлично! 'If telepathic communication interfaces had been invented safely, language barriers would have been eliminated permanently.' выражает, как общение сознание к сознанию объединило бы человечество.",
            incorrectFeedback: "Check the passive: If + telepathic communication interfaces + had been + past participle + adverb, subject + would have been + past participle + adverb.",
            incorrectFeedbackRu: "Проверьте пассивное: If + telepathic communication interfaces + had been + past participle + наречие, подлежащее + would have been + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "time", "dilation", "fields", "had", "been", "harnessed", "technologically,", "temporal", "research", "would", "have", "revolutionized", "scientific", "understanding."],
            correctAnswer: "If time dilation fields had been harnessed technologically, temporal research would have revolutionized scientific understanding.",
            correctFeedback: "Excellent! 'If time dilation fields had been harnessed technologically, temporal research would have revolutionized scientific understanding.' shows how mastering spacetime would have transformed physics.",
            correctFeedbackRu: "Отлично! 'If time dilation fields had been harnessed technologically, temporal research would have revolutionized scientific understanding.' показывает, как овладение пространством-временем трансформировало бы физику.",
            incorrectFeedback: "Use: If + time dilation fields + had been + past participle + adverb, subject + would have + past participle + adjective + object.",
            incorrectFeedbackRu: "Используйте: If + time dilation fields + had been + past participle + наречие, подлежащее + would have + past participle + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "universal", "translation", "algorithms", "had", "been", "integrated", "globally,", "cross-cultural", "misunderstandings", "would", "have", "disappeared", "entirely."],
            correctAnswer: "If universal translation algorithms had been integrated globally, cross-cultural misunderstandings would have disappeared entirely.",
            correctFeedback: "Great! 'If universal translation algorithms had been integrated globally, cross-cultural misunderstandings would have disappeared entirely.' demonstrates how AI language processing would have promoted global harmony.",
            correctFeedbackRu: "Отлично! 'If universal translation algorithms had been integrated globally, cross-cultural misunderstandings would have disappeared entirely.' демонстрирует, как ИИ-обработка языка способствовала бы глобальной гармонии.",
            incorrectFeedback: "Remember: If + universal translation algorithms + had been + past participle + adverb, subject + would have + past participle + adverb.",
            incorrectFeedbackRu: "Помните: If + universal translation algorithms + had been + past participle + наречие, подлежащее + would have + past participle + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["If", "dimensional", "portal", "technology", "had", "been", "mastered", "theoretically,", "parallel", "universe", "exploration", "might", "have", "commenced", "successfully."],
            correctAnswer: "If dimensional portal technology had been mastered theoretically, parallel universe exploration might have commenced successfully.",
            correctFeedback: "Perfect! 'If dimensional portal technology had been mastered theoretically, parallel universe exploration might have commenced successfully.' expresses how theoretical physics breakthroughs could have opened infinite possibilities. You've completed all 100 Sentence Building exercises for Third Conditional!",
            correctFeedbackRu: "Отлично! 'If dimensional portal technology had been mastered theoretically, parallel universe exploration might have commenced successfully.' выражает, как прорывы в теоретической физике могли открыть бесконечные возможности. Вы завершили все 100 упражнений Sentence Building для Third Conditional!",
            incorrectFeedback: "Check your structure: If + dimensional portal technology + had been + past participle + adverb, subject + might have + past participle + adverb.",
            incorrectFeedbackRu: "Проверьте структуру: If + dimensional portal technology + had been + past participle + наречие, подлежащее + might have + past participle + наречие."
        }
    ]
};