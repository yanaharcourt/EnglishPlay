/* ============================================
Initialize Grammar Exercises Object Structure
============================================ */
if (!window.grammarExercises) {
    window.grammarExercises = {};
}
if (!window.grammarExercises['past-tenses']) {
    window.grammarExercises['past-tenses'] = {};
}

/* =============================================================================== */
/* =========================Multiple Choice Exercises============================= */

/* ============================================
Page 1: Past Perfect - Sequence: Everyday Life and Work
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-page1'] = {
    title: "Past Perfect - Sequence: I had finished work before I went home",
    multipleChoice: [
        {
            question: "Choose the correct sequence of events:",
            questionRu: "Выберите правильную последовательность событий:",
            sentence: "I _____ my homework before my friends arrived.",
            options: [
                "had finished",
                "have finished",
                "finished",
                "was finishing"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had finished' shows the homework was completed before the friends arrived - classic sequence of past events.",
            correctFeedbackRu: "Отлично! 'Had finished' показывает, что домашнее задание было завершено до того, как пришли друзья - классическая последовательность прошлых событий.",
            incorrectFeedback: "Think about the timing! **Past Perfect shows what happened first.** The homework was completely done before the friends arrived, so we need 'had finished' to show this earlier action. 'Have finished' is present perfect, 'finished' is simple past, and 'was finishing' suggests the homework was still in progress when friends arrived.",
            incorrectFeedbackRu: "Подумайте о времени! **Past Perfect показывает, что произошло первым.** Домашнее задание было полностью выполнено до того, как пришли друзья, поэтому нам нужно 'had finished', чтобы показать это более раннее действие. 'Have finished' - это Present Perfect, 'finished' - простое прошедшее, а 'was finishing' предполагает, что домашнее задание еще выполнялось, когда пришли друзья."
        },
        {
            question: "Select the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "She realized she _____ her keys at home.",
            options: [
                "had left",
                "has left",
                "left",
                "was leaving"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had left' shows the keys were left at home before she realized it - perfect sequence understanding!",
            correctFeedbackRu: "Отлично! 'Had left' показывает, что ключи были оставлены дома до того, как она это поняла - идеальное понимание последовательности!",
            incorrectFeedback: "Look at the sequence carefully! **She left the keys first, then realized it later.** Past Perfect 'had left' shows the earlier action. 'Has left' is present perfect (wrong timeframe), 'left' doesn't show the sequence clearly, and 'was leaving' suggests an ongoing action.",
            incorrectFeedbackRu: "Внимательно посмотрите на последовательность! **Сначала она оставила ключи, а потом поняла это.** Past Perfect 'had left' показывает более раннее действие. 'Has left' - это Present Perfect (неправильный временной период), 'left' не показывает последовательность четко, а 'was leaving' предполагает продолжающееся действие."
        },
        {
            question: "Choose the correct tense combination:",
            questionRu: "Выберите правильное сочетание времен:",
            sentence: "The movie _____ by the time we got to the cinema.",
            options: [
                "had started",
                "has started", 
                "started",
                "was starting"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had started' perfectly shows the movie began before we arrived - textbook past perfect sequence!",
            correctFeedbackRu: "Отлично! 'Had started' прекрасно показывает, что фильм начался до нашего прибытия - образцовая последовательность Past Perfect!",
            incorrectFeedback: "Think about what happened first! **The movie started before we got there.** Past Perfect 'had started' shows this earlier action. Using 'has started' is present perfect (wrong context), 'started' doesn't emphasize the sequence, and 'was starting' suggests it was just beginning when we arrived.",
            incorrectFeedbackRu: "Подумайте, что произошло первым! **Фильм начался до того, как мы туда попали.** Past Perfect 'had started' показывает это более раннее действие. 'Has started' - это Present Perfect (неправильный контекст), 'started' не подчеркивает последовательность, а 'was starting' предполагает, что он только начинался, когда мы прибыли."
        },
        {
            question: "Select the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "They discovered someone _____ into their house.",
            options: [
                "had broken",
                "has broken",
                "broke",
                "was breaking"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had broken' shows the break-in happened before they discovered it - excellent sequence awareness!",
            correctFeedbackRu: "Отлично! 'Had broken' показывает, что взлом произошел до того, как они это обнаружили - превосходное понимание последовательности!",
            incorrectFeedback: "Consider the timeline! **The break-in happened first, then they discovered it.** Past Perfect 'had broken' shows this earlier completed action. 'Has broken' is present perfect (wrong tense), 'broke' is simple past (doesn't show sequence), and 'was breaking' suggests ongoing action during discovery.",
            incorrectFeedbackRu: "Рассмотрите временную линию! **Взлом произошел первым, а потом они это обнаружили.** Past Perfect 'had broken' показывает это более раннее завершенное действие. 'Has broken' - это Present Perfect (неправильное время), 'broke' - простое прошедшее (не показывает последовательность), а 'was breaking' предполагает продолжающееся действие во время обнаружения."
        },
        {
            question: "Choose the correct past perfect construction:",
            questionRu: "Выберите правильную конструкцию Past Perfect:",
            sentence: "When I woke up, I saw that it _____ heavily during the night.",
            options: [
                "had snowed",
                "has snowed",
                "snowed",
                "was snowing"
            ],
            correctAnswer: 0,
            correctFeedback: "Brilliant! 'Had snowed' shows the snow fell during the night before you woke up - perfect past sequence!",
            correctFeedbackRu: "Замечательно! 'Had snowed' показывает, что снег шел ночью до того, как вы проснулись - идеальная прошедшая последовательность!",
            incorrectFeedback: "Think about when it snowed! **The snowing happened during the night, before waking up.** Past Perfect 'had snowed' shows this completed earlier action. 'Has snowed' is present perfect (wrong timeframe), 'snowed' doesn't emphasize the sequence, and 'was snowing' suggests it was still snowing when you woke up.",
            incorrectFeedbackRu: "Подумайте, когда шел снег! **Снег шел ночью, до пробуждения.** Past Perfect 'had snowed' показывает это завершенное более раннее действие. 'Has snowed' - это Present Perfect (неправильный временной период), 'snowed' не подчеркивает последовательность, а 'was snowing' предполагает, что снег еще шел, когда вы проснулись."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The guests _____ before we finished cooking dinner.",
            options: [
                "had arrived",
                "have arrived",
                "arrived",
                "were arriving"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had arrived' shows the guests came before dinner was ready - perfect timing sequence!",
            correctFeedbackRu: "Отлично! 'Had arrived' показывает, что гости пришли до того, как ужин был готов - идеальная временная последовательность!",
            incorrectFeedback: "Look at what happened first! **The guests arrived before dinner was finished.** Past Perfect 'had arrived' shows this earlier action. 'Have arrived' is present perfect (wrong context), 'arrived' is simple past (doesn't show sequence clearly), and 'were arriving' suggests they were in the process of arriving.",
            incorrectFeedbackRu: "Посмотрите, что произошло первым! **Гости прибыли до того, как ужин был закончен.** Past Perfect 'had arrived' показывает это более раннее действие. 'Have arrived' - это Present Perfect (неправильный контекст), 'arrived' - простое прошедшее (не показывает последовательность четко), а 'were arriving' предполагает, что они были в процессе прибытия."
        },
        {
            question: "Choose the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "I couldn't find my phone because I _____ it somewhere.",
            options: [
                "had lost",
                "have lost",
                "lost",
                "was losing"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had lost' shows you lost the phone before you couldn't find it - clear cause and effect sequence!",
            correctFeedbackRu: "Отлично! 'Had lost' показывает, что вы потеряли телефон до того, как не могли его найти - четкая последовательность причины и следствия!",
            incorrectFeedback: "Think about cause and effect! **You lost the phone first, then couldn't find it.** Past Perfect 'had lost' shows this earlier action that caused the current problem. 'Have lost' is present perfect (wrong tense), 'lost' doesn't show the sequence, and 'was losing' suggests ongoing action.",
            incorrectFeedbackRu: "Подумайте о причине и следствии! **Сначала вы потеряли телефон, а потом не могли его найти.** Past Perfect 'had lost' показывает это более раннее действие, которое вызвало текущую проблему. 'Have lost' - это Present Perfect (неправильное время), 'lost' не показывает последовательность, а 'was losing' предполагает продолжающееся действие."
        },
        {
            question: "Select the correct past perfect usage:",
            questionRu: "Выберите правильное использование Past Perfect:",
            sentence: "She was tired because she _____ all night.",
            options: [
                "had worked",
                "has worked",
                "worked",
                "was working"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had worked' shows the all-night work happened before she felt tired - perfect causal sequence!",
            correctFeedbackRu: "Отлично! 'Had worked' показывает, что работа всю ночь произошла до того, как она почувствовала усталость - идеальная причинная последовательность!",
            incorrectFeedback: "Consider the reason for tiredness! **She worked all night first, which made her tired later.** Past Perfect 'had worked' shows this earlier action that caused her current state. 'Has worked' is present perfect (wrong context), 'worked' doesn't emphasize the causal sequence, and 'was working' suggests ongoing action.",
            incorrectFeedbackRu: "Рассмотрите причину усталости! **Сначала она работала всю ночь, что позже сделало ее уставшей.** Past Perfect 'had worked' показывает это более раннее действие, которое вызвало ее текущее состояние. 'Has worked' - это Present Perfect (неправильный контекст), 'worked' не подчеркивает причинную последовательность, а 'was working' предполагает продолжающееся действие."
        },
        {
            question: "Choose the correct tense for sequence:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The train _____ by the time I reached the platform.",
            options: [
                "had left",
                "has left",
                "left",
                "was leaving"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had left' shows the train departed before you reached the platform - classic missed opportunity sequence!",
            correctFeedbackRu: "Отлично! 'Had left' показывает, что поезд ушел до того, как вы добрались до платформы - классическая последовательность упущенной возможности!",
            incorrectFeedback: "Think about the timing! **The train left first, then you reached the platform.** Past Perfect 'had left' shows this earlier departure. 'Has left' is present perfect (wrong timeframe), 'left' is simple past (doesn't show sequence), and 'was leaving' suggests the train was departing when you arrived.",
            incorrectFeedbackRu: "Подумайте о времени! **Поезд ушел первым, а потом вы добрались до платформы.** Past Perfect 'had left' показывает этот более ранний отъезд. 'Has left' - это Present Perfect (неправильный временной период), 'left' - простое прошедшее (не показывает последовательность), а 'was leaving' предполагает, что поезд отъезжал, когда вы прибыли."
        },
        {
            question: "Select the appropriate past perfect construction:",
            questionRu: "Выберите подходящую конструкцию Past Perfect:",
            sentence: "We couldn't enter the building because someone _____ the door.",
            options: [
                "had locked",
                "has locked",
                "locked",
                "was locking"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had locked' shows the door was locked before you tried to enter - clear sequence of events!",
            correctFeedbackRu: "Отлично! 'Had locked' показывает, что дверь была заперта до того, как вы попытались войти - четкая последовательность событий!",
            incorrectFeedback: "Consider what prevented entry! **Someone locked the door first, then you couldn't enter.** Past Perfect 'had locked' shows this earlier action that created the obstacle. 'Has locked' is present perfect (wrong tense), 'locked' doesn't emphasize the sequence, and 'was locking' suggests ongoing action during your arrival.",
            incorrectFeedbackRu: "Рассмотрите, что помешало входу! **Кто-то сначала запер дверь, а потом вы не смогли войти.** Past Perfect 'had locked' показывает это более раннее действие, которое создало препятствие. 'Has locked' - это Present Perfect (неправильное время), 'locked' не подчеркивает последовательность, а 'was locking' предполагает продолжающееся действие во время вашего прибытия."
        }
    ]
};

/* ============================================
Page 2: Past Perfect - Sequence: Travel and Experiences  
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-page2'] = {
    title: "Past Perfect - Sequence: Travel and Life Experiences",
    multipleChoice: [
        {
            question: "Choose the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "When we arrived at the hotel, they told us our room _____ to someone else.",
            options: [
                "had been given",
                "has been given",
                "was given",
                "had given"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had been given' shows the room was given away before you arrived - frustrating but clear sequence!",
            correctFeedbackRu: "Отлично! 'Had been given' показывает, что комната была отдана до вашего прибытия - расстраивающая, но четкая последовательность!",
            incorrectFeedback: "Think about hotel booking problems! **The room was given to someone else first, then you arrived.** Past Perfect passive 'had been given' shows this earlier action. 'Has been given' is present perfect (wrong timeframe), 'was given' doesn't show sequence, and 'had given' is active voice (room can't give itself).",
            incorrectFeedbackRu: "Подумайте о проблемах с бронированием отеля! **Комната была отдана кому-то другому первой, а потом вы прибыли.** Past Perfect пассивный залог 'had been given' показывает это более раннее действие. 'Has been given' - это Present Perfect (неправильный временной период), 'was given' не показывает последовательность, а 'had given' - активный залог (комната не может отдать себя)."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "I felt sick on the plane because I _____ too much at the airport.",
            options: [
                "had eaten",
                "have eaten",
                "ate",
                "was eating"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had eaten' shows the overeating at the airport happened before feeling sick on the plane - classic travel mistake!",
            correctFeedbackRu: "Отлично! 'Had eaten' показывает, что переедание в аэропорту произошло до плохого самочувствия в самолете - классическая ошибка путешественника!",
            incorrectFeedback: "Consider the cause of sickness! **You ate too much first, then felt sick later.** Past Perfect 'had eaten' shows this earlier action that caused the problem. 'Have eaten' is present perfect (wrong context), 'ate' doesn't show the causal sequence clearly, and 'was eating' suggests ongoing action during the flight.",
            incorrectFeedbackRu: "Рассмотрите причину недомогания! **Сначала вы съели слишком много, а потом почувствовали себя плохо.** Past Perfect 'had eaten' показывает это более раннее действие, которое вызвало проблему. 'Have eaten' - это Present Perfect (неправильный контекст), 'ate' не показывает причинную последовательность четко, а 'was eating' предполагает продолжающееся действие во время полета."
        },
        {
            question: "Choose the appropriate past perfect usage:",
            questionRu: "Выберите подходящее использование Past Perfect:",
            sentence: "The museum was closed when we got there because it _____ for renovation.",
            options: [
                "had closed",
                "has closed",
                "closed",
                "was closing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had closed' shows the museum closed for renovation before you arrived - disappointing travel timing!",
            correctFeedbackRu: "Отлично! 'Had closed' показывает, что музей закрылся на ремонт до вашего прибытия - неудачное время для путешествия!",
            incorrectFeedback: "Think about why you couldn't visit! **The museum closed for renovation first, then you arrived.** Past Perfect 'had closed' shows this earlier closure. 'Has closed' is present perfect (wrong tense), 'closed' doesn't emphasize the sequence, and 'was closing' suggests it was closing when you arrived.",
            incorrectFeedbackRu: "Подумайте, почему вы не смогли посетить! **Музей сначала закрылся на ремонт, а потом вы прибыли.** Past Perfect 'had closed' показывает это более раннее закрытие. 'Has closed' - это Present Perfect (неправильное время), 'closed' не подчеркивает последовательность, а 'was closing' предполагает, что он закрывался, когда вы прибыли."
        },
        {
            question: "Select the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "She couldn't board the flight because she _____ her passport at home.",
            options: [
                "had forgotten",
                "has forgotten",
                "forgot",
                "was forgetting"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had forgotten' shows the passport was left at home before attempting to board - travel nightmare sequence!",
            correctFeedbackRu: "Отлично! 'Had forgotten' показывает, что паспорт был забыт дома до попытки сесть на самолет - кошмарная последовательность для путешественника!",
            incorrectFeedback: "Consider the travel disaster! **She forgot her passport first, then couldn't board.** Past Perfect 'had forgotten' shows this earlier mistake. 'Has forgotten' is present perfect (wrong timeframe), 'forgot' doesn't show the sequence, and 'was forgetting' doesn't make sense in this context.",
            incorrectFeedbackRu: "Рассмотрите катастрофу путешествия! **Сначала она забыла паспорт, а потом не смогла сесть на самолет.** Past Perfect 'had forgotten' показывает эту более раннюю ошибку. 'Has forgotten' - это Present Perfect (неправильный временной период), 'forgot' не показывает последовательность, а 'was forgetting' не имеет смысла в этом контексте."
        },
        {
            question: "Choose the correct tense combination:",
            questionRu: "Выберите правильное сочетание времен:",
            sentence: "The tour guide explained that the ancient city _____ over 1000 years ago.",
            options: [
                "had been built",
                "has been built",
                "was built",
                "had built"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had been built' shows the city was built long before the tour guide's explanation - historical sequence!",
            correctFeedbackRu: "Отлично! 'Had been built' показывает, что город был построен задолго до объяснения гида - историческая последовательность!",
            incorrectFeedback: "Think about historical timing! **The city was built first, then the guide explained it.** Past Perfect passive 'had been built' shows this much earlier construction. 'Has been built' is present perfect (wrong context), 'was built' is simple past (doesn't show sequence), and 'had built' is active voice (the city didn't build itself).",
            incorrectFeedbackRu: "Подумайте об историческом времени! **Город был построен первым, а потом гид это объяснил.** Past Perfect пассивный залог 'had been built' показывает это гораздо более раннее строительство. 'Has been built' - это Present Perfect (неправильный контекст), 'was built' - простое прошедшее (не показывает последовательность), а 'had built' - активный залог (город не строил себя сам)."
        },
        {
            question: "Select the appropriate past perfect construction:",
            questionRu: "Выберите подходящую конструкцию Past Perfect:",
            sentence: "We missed the sunset because our taxi _____ in traffic.",
            options: [
                "had been stuck",
                "has been stuck",
                "was stuck",
                "had stuck"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had been stuck' shows the taxi was in traffic before missing the sunset - unfortunate travel timing!",
            correctFeedbackRu: "Отлично! 'Had been stuck' показывает, что такси застряло в пробке до того, как пропустили закат - неудачное время для путешествия!",
            incorrectFeedback: "Consider the missed opportunity! **The taxi got stuck in traffic first, then you missed the sunset.** Past Perfect 'had been stuck' shows this earlier problem. 'Has been stuck' is present perfect (wrong tense), 'was stuck' doesn't show sequence, and 'had stuck' is wrong form (stuck doesn't take objects here).",
            incorrectFeedbackRu: "Рассмотрите упущенную возможность! **Такси сначала застряло в пробке, а потом вы пропустили закат.** Past Perfect 'had been stuck' показывает эту более раннюю проблему. 'Has been stuck' - это Present Perfect (неправильное время), 'was stuck' не показывает последовательность, а 'had stuck' - неправильная форма (stuck здесь не принимает дополнения)."
        },
        {
            question: "Choose the correct past perfect usage:",
            questionRu: "Выберите правильное использование Past Perfect:",
            sentence: "The restaurant was empty when we arrived because everyone _____ already.",
            options: [
                "had left",
                "has left",
                "left",
                "was leaving"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had left' shows everyone departed before you arrived - timing is everything in dining!",
            correctFeedbackRu: "Отлично! 'Had left' показывает, что все ушли до вашего прибытия - время решает все в ресторанах!",
            incorrectFeedback: "Think about restaurant timing! **Everyone left first, then you arrived to an empty place.** Past Perfect 'had left' shows this earlier departure. 'Has left' is present perfect (wrong context), 'left' doesn't emphasize the sequence, and 'was leaving' suggests people were leaving when you arrived.",
            incorrectFeedbackRu: "Подумайте о времени в ресторане! **Все сначала ушли, а потом вы пришли в пустое место.** Past Perfect 'had left' показывает этот более ранний уход. 'Has left' - это Present Perfect (неправильный контекст), 'left' не подчеркивает последовательность, а 'was leaving' предполагает, что люди уходили, когда вы прибыли."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "I couldn't take photos because I _____ to charge my camera battery.",
            options: [
                "had forgotten",
                "have forgotten",
                "forgot",
                "was forgetting"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had forgotten' shows you forgot to charge the battery before needing to take photos - photographer's nightmare!",
            correctFeedbackRu: "Отлично! 'Had forgotten' показывает, что вы забыли зарядить батарею до того, как понадобилось делать фотографии - кошмар фотографа!",
            incorrectFeedback: "Consider the photography problem! **You forgot to charge the battery first, then couldn't take photos.** Past Perfect 'had forgotten' shows this earlier oversight. 'Have forgotten' is present perfect (wrong timeframe), 'forgot' doesn't show the causal sequence, and 'was forgetting' doesn't make sense here.",
            incorrectFeedbackRu: "Рассмотрите проблему с фотографией! **Сначала вы забыли зарядить батарею, а потом не смогли делать фотографии.** Past Perfect 'had forgotten' показывает эту более раннюю оплошность. 'Have forgotten' - это Present Perfect (неправильный временной период), 'forgot' не показывает причинную последовательность, а 'was forgetting' здесь не имеет смысла."
        },
        {
            question: "Choose the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "The concert was cancelled because the main singer _____ ill.",
            options: [
                "had fallen",
                "has fallen",
                "fell",
                "was falling"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had fallen' shows the singer became ill before the concert cancellation - unfortunate sequence of events!",
            correctFeedbackRu: "Отлично! 'Had fallen' показывает, что певец заболел до отмены концерта - неудачная последовательность событий!",
            incorrectFeedback: "Think about the cancellation reason! **The singer fell ill first, then the concert was cancelled.** Past Perfect 'had fallen' shows this earlier illness. 'Has fallen' is present perfect (wrong tense), 'fell' doesn't show the sequence, and 'was falling' suggests ongoing action during cancellation.",
            incorrectFeedbackRu: "Подумайте о причине отмены! **Певец сначала заболел, а потом концерт был отменен.** Past Perfect 'had fallen' показывает эту более раннюю болезнь. 'Has fallen' - это Present Perfect (неправильное время), 'fell' не показывает последовательность, а 'was falling' предполагает продолжающееся действие во время отмены."
        },
        {
            question: "Select the correct past perfect construction:",
            questionRu: "Выберите правильную конструкцию Past Perfect:",
            sentence: "We couldn't find our hotel because we _____ the wrong address.",
            options: [
                "had written down",
                "have written down",
                "wrote down",
                "were writing down"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had written down' shows you noted the wrong address before trying to find the hotel - classic travel confusion!",
            correctFeedbackRu: "Отлично! 'Had written down' показывает, что вы записали неправильный адрес до попытки найти отель - классическая путешественническая путаница!",
            incorrectFeedback: "Consider the navigation problem! **You wrote down the wrong address first, then couldn't find the hotel.** Past Perfect 'had written down' shows this earlier mistake. 'Have written down' is present perfect (wrong context), 'wrote down' doesn't show the sequence clearly, and 'were writing down' suggests ongoing action.",
            incorrectFeedbackRu: "Рассмотрите проблему навигации! **Сначала вы записали неправильный адрес, а потом не смогли найти отель.** Past Perfect 'had written down' показывает эту более раннюю ошибку. 'Have written down' - это Present Perfect (неправильный контекст), 'wrote down' не показывает последовательность четко, а 'were writing down' предполагает продолжающееся действие."
        }
    ]
};
/* ============================================
Page 3: Past Perfect - Sequence: Education and Career
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-page3'] = {
    title: "Past Perfect - Sequence: Education and Career Success",
    multipleChoice: [
        {
            question: "Choose the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "She got the promotion because she _____ exceptional results all year.",
            options: [
                "had achieved",
                "has achieved",
                "achieved",
                "was achieving"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had achieved' shows her excellent work happened before getting the promotion - well-deserved career success!",
            correctFeedbackRu: "Отлично! 'Had achieved' показывает, что ее отличная работа произошла до получения повышения - заслуженный карьерный успех!",
            incorrectFeedback: "Think about earning success! **She achieved great results first, then got promoted.** Past Perfect 'had achieved' shows this earlier accomplishment that led to recognition. 'Has achieved' is present perfect (wrong timeframe), 'achieved' doesn't show the causal sequence, and 'was achieving' suggests ongoing action during the promotion.",
            incorrectFeedbackRu: "Подумайте о заслуженном успехе! **Сначала она добилась отличных результатов, а потом получила повышение.** Past Perfect 'had achieved' показывает это более раннее достижение, которое привело к признанию. 'Has achieved' - это Present Perfect (неправильный временной период), 'achieved' не показывает причинную последовательность, а 'was achieving' предполагает продолжающееся действие во время повышения."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The professor was disappointed when he discovered that most students _____ the required reading.",
            options: [
                "hadn't done",
                "haven't done",
                "didn't do",
                "weren't doing"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Hadn't done' shows the students failed to complete reading before the professor's discovery - classic academic disappointment!",
            correctFeedbackRu: "Отлично! 'Hadn't done' показывает, что студенты не выполнили чтение до того, как профессор это обнаружил - классическое академическое разочарование!",
            incorrectFeedback: "Consider the professor's frustration! **Students didn't do the reading first, then the professor discovered this.** Past Perfect negative 'hadn't done' shows this earlier failure. 'Haven't done' is present perfect (wrong context), 'didn't do' doesn't emphasize the sequence, and 'weren't doing' suggests they were in the process of not reading.",
            incorrectFeedbackRu: "Рассмотрите разочарование профессора! **Студенты сначала не сделали чтение, а потом профессор это обнаружил.** Past Perfect отрицательная форма 'hadn't done' показывает эту более раннюю неудачу. 'Haven't done' - это Present Perfect (неправильный контекст), 'didn't do' не подчеркивает последовательность, а 'weren't doing' предполагает, что они были в процессе нечтения."
        },
        {
            question: "Choose the appropriate past perfect usage:",
            questionRu: "Выберите подходящее использование Past Perfect:",
            sentence: "I failed the driving test because I _____ enough practice sessions.",
            options: [
                "hadn't attended",
                "haven't attended",
                "didn't attend",
                "wasn't attending"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Hadn't attended' shows insufficient practice happened before the test failure - learning from mistakes!",
            correctFeedbackRu: "Отлично! 'Hadn't attended' показывает, что недостаточная практика произошла до провала экзамена - учимся на ошибках!",
            incorrectFeedback: "Think about test preparation! **You didn't attend enough sessions first, then failed the test.** Past Perfect negative 'hadn't attended' shows this earlier lack of preparation. 'Haven't attended' is present perfect (wrong tense), 'didn't attend' doesn't show the causal connection, and 'wasn't attending' suggests ongoing non-attendance.",
            incorrectFeedbackRu: "Подумайте о подготовке к экзамену! **Сначала вы не посещали достаточно занятий, а потом провалили экзамен.** Past Perfect отрицательная форма 'hadn't attended' показывает эту более раннюю нехватку подготовки. 'Haven't attended' - это Present Perfect (неправильное время), 'didn't attend' не показывает причинную связь, а 'wasn't attending' предполагает продолжающееся непосещение."
        },
        {
            question: "Select the correct past perfect construction:",
            questionRu: "Выберите правильную конструкцию Past Perfect:",
            sentence: "The company hired her immediately because she _____ impressive qualifications.",
            options: [
                "had presented",
                "has presented",
                "presented",
                "was presenting"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had presented' shows she demonstrated her qualifications before getting hired - impressive interview performance!",
            correctFeedbackRu: "Отлично! 'Had presented' показывает, что она продемонстрировала свою квалификацию до найма - впечатляющее выступление на собеседовании!",
            incorrectFeedback: "Consider the hiring decision! **She presented her qualifications first, then got hired immediately.** Past Perfect 'had presented' shows this earlier demonstration. 'Has presented' is present perfect (wrong context), 'presented' doesn't emphasize the sequence, and 'was presenting' suggests ongoing action during hiring.",
            incorrectFeedbackRu: "Рассмотрите решение о найме! **Сначала она представила свою квалификацию, а потом была немедленно нанята.** Past Perfect 'had presented' показывает эту более раннюю демонстрацию. 'Has presented' - это Present Perfect (неправильный контекст), 'presented' не подчеркивает последовательность, а 'was presenting' предполагает продолжающееся действие во время найма."
        },
        {
            question: "Choose the correct tense combination:",
            questionRu: "Выберите правильное сочетание времен:",
            sentence: "The research project was approved after we _____ all the necessary documentation.",
            options: [
                "had submitted",
                "have submitted",
                "submitted",
                "were submitting"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had submitted' shows the documentation was completed before project approval - thorough academic process!",
            correctFeedbackRu: "Отлично! 'Had submitted' показывает, что документация была завершена до одобрения проекта - тщательный академический процесс!",
            incorrectFeedback: "Think about bureaucratic processes! **You submitted all documents first, then the project was approved.** Past Perfect 'had submitted' shows this earlier completion. 'Have submitted' is present perfect (wrong timeframe), 'submitted' doesn't show the sequence clearly, and 'were submitting' suggests ongoing submission during approval.",
            incorrectFeedbackRu: "Подумайте о бюрократических процессах! **Сначала вы подали все документы, а потом проект был одобрен.** Past Perfect 'had submitted' показывает это более раннее завершение. 'Have submitted' - это Present Perfect (неправильный временной период), 'submitted' не показывает последовательность четко, а 'were submitting' предполагает продолжающуюся подачу во время одобрения."
        },
        {
            question: "Select the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "The interview went badly because I _____ about the company beforehand.",
            options: [
                "hadn't researched",
                "haven't researched",
                "didn't research",
                "wasn't researching"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Hadn't researched' shows the lack of preparation happened before the poor interview - important career lesson!",
            correctFeedbackRu: "Отлично! 'Hadn't researched' показывает, что отсутствие подготовки произошло до плохого собеседования - важный карьерный урок!",
            incorrectFeedback: "Consider interview preparation! **You didn't research the company first, then the interview went badly.** Past Perfect negative 'hadn't researched' shows this earlier oversight. 'Haven't researched' is present perfect (wrong tense), 'didn't research' doesn't show the causal sequence, and 'wasn't researching' suggests ongoing non-research.",
            incorrectFeedbackRu: "Рассмотрите подготовку к собеседованию! **Сначала вы не изучили компанию, а потом собеседование прошло плохо.** Past Perfect отрицательная форма 'hadn't researched' показывает эту более раннюю оплошность. 'Haven't researched' - это Present Perfect (неправильное время), 'didn't research' не показывает причинную последовательность, а 'wasn't researching' предполагает продолжающееся неизучение."
        },
        {
            question: "Choose the correct past perfect usage:",
            questionRu: "Выберите правильное использование Past Perfect:",
            sentence: "She understood the lecture easily because she _____ the textbook chapter in advance.",
            options: [
                "had studied",
                "has studied",
                "studied",
                "was studying"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had studied' shows her advance preparation made the lecture comprehensible - smart academic strategy!",
            correctFeedbackRu: "Отлично! 'Had studied' показывает, что ее предварительная подготовка сделала лекцию понятной - умная академическая стратегия!",
            incorrectFeedback: "Think about academic success! **She studied the chapter first, then understood the lecture easily.** Past Perfect 'had studied' shows this earlier preparation. 'Has studied' is present perfect (wrong context), 'studied' doesn't emphasize the causal relationship, and 'was studying' suggests ongoing action during the lecture.",
            incorrectFeedbackRu: "Подумайте об академическом успехе! **Сначала она изучила главу, а потом легко поняла лекцию.** Past Perfect 'had studied' показывает эту более раннюю подготовку. 'Has studied' - это Present Perfect (неправильный контекст), 'studied' не подчеркивает причинную связь, а 'was studying' предполагает продолжающееся действие во время лекции."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The workshop was cancelled because not enough people _____ for it.",
            options: [
                "had registered",
                "have registered",
                "registered",
                "were registering"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had registered' shows insufficient registration happened before the cancellation - disappointing but necessary decision!",
            correctFeedbackRu: "Отлично! 'Had registered' показывает, что недостаточная регистрация произошла до отмены - разочаровывающее, но необходимое решение!",
            incorrectFeedback: "Consider event planning challenges! **Not enough people registered first, then the workshop was cancelled.** Past Perfect 'had registered' shows this earlier insufficient response. 'Have registered' is present perfect (wrong timeframe), 'registered' doesn't show the sequence, and 'were registering' suggests ongoing registration during cancellation.",
            incorrectFeedbackRu: "Рассмотрите проблемы планирования мероприятий! **Сначала недостаточно людей зарегистрировалось, а потом семинар был отменен.** Past Perfect 'had registered' показывает этот более ранний недостаточный отклик. 'Have registered' - это Present Perfect (неправильный временной период), 'registered' не показывает последовательность, а 'were registering' предполагает продолжающуюся регистрацию во время отмены."
        },
        {
            question: "Choose the appropriate past perfect construction:",
            questionRu: "Выберите подходящую конструкцию Past Perfect:",
            sentence: "The student was expelled because he _____ multiple assignments without permission.",
            options: [
                "had plagiarized",
                "has plagiarized",
                "plagiarized",
                "was plagiarizing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had plagiarized' shows the academic dishonesty occurred before the expulsion - serious academic consequences!",
            correctFeedbackRu: "Отлично! 'Had plagiarized' показывает, что академическая нечестность произошла до исключения - серьезные академические последствия!",
            incorrectFeedback: "Think about academic integrity! **He plagiarized assignments first, then was expelled.** Past Perfect 'had plagiarized' shows this earlier misconduct. 'Has plagiarized' is present perfect (wrong tense), 'plagiarized' doesn't emphasize the sequence, and 'was plagiarizing' suggests ongoing action during expulsion.",
            incorrectFeedbackRu: "Подумайте об академической честности! **Сначала он плагиатил задания, а потом был исключен.** Past Perfect 'had plagiarized' показывает это более раннее нарушение. 'Has plagiarized' - это Present Perfect (неправильное время), 'plagiarized' не подчеркивает последовательность, а 'was plagiarizing' предполагает продолжающееся действие во время исключения."
        },
        {
            question: "Select the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The conference was a huge success because the organizers _____ every detail meticulously.",
            options: [
                "had planned",
                "have planned",
                "planned",
                "were planning"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had planned' shows the meticulous preparation happened before the successful conference - excellent event management!",
            correctFeedbackRu: "Отлично! 'Had planned' показывает, что тщательная подготовка произошла до успешной конференции - отличное управление мероприятием!",
            incorrectFeedback: "Consider event success factors! **The organizers planned everything first, then the conference was successful.** Past Perfect 'had planned' shows this earlier preparation. 'Have planned' is present perfect (wrong context), 'planned' doesn't emphasize the causal relationship, and 'were planning' suggests ongoing action during the conference.",
            incorrectFeedbackRu: "Рассмотрите факторы успеха мероприятия! **Организаторы сначала все спланировали, а потом конференция была успешной.** Past Perfect 'had planned' показывает эту более раннюю подготовку. 'Have planned' - это Present Perfect (неправильный контекст), 'planned' не подчеркивает причинную связь, а 'were planning' предполагает продолжающееся действие во время конференции."
        }
    ]
};

/* ============================================
Page 4: Past Perfect - Sequence: Technology and Modern Life
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-page4'] = {
    title: "Past Perfect - Sequence: Technology and Digital Challenges",
    multipleChoice: [
        {
            question: "Choose the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "I couldn't access my account because I _____ my password multiple times.",
            options: [
                "had forgotten",
                "have forgotten",
                "forgot",
                "was forgetting"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had forgotten' shows the password problems occurred before being locked out - modern digital frustration!",
            correctFeedbackRu: "Отлично! 'Had forgotten' показывает, что проблемы с паролем произошли до блокировки аккаунта - современная цифровая фрустрация!",
            incorrectFeedback: "Think about security systems! **You forgot your password repeatedly first, then got locked out.** Past Perfect 'had forgotten' shows this earlier repeated mistake. 'Have forgotten' is present perfect (wrong timeframe), 'forgot' doesn't show the sequence, and 'was forgetting' suggests ongoing forgetfulness during lockout.",
            incorrectFeedbackRu: "Подумайте о системах безопасности! **Сначала вы многократно забывали пароль, а потом были заблокированы.** Past Perfect 'had forgotten' показывает эту более раннюю повторяющуюся ошибку. 'Have forgotten' - это Present Perfect (неправильный временной период), 'forgot' не показывает последовательность, а 'was forgetting' предполагает продолжающуюся забывчивость во время блокировки."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The presentation failed because the speaker _____ to test the microphone beforehand.",
            options: [
                "hadn't remembered",
                "haven't remembered",
                "didn't remember",
                "wasn't remembering"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Hadn't remembered' shows the lack of preparation caused the presentation failure - technical preparation matters!",
            correctFeedbackRu: "Отлично! 'Hadn't remembered' показывает, что отсутствие подготовки привело к провалу презентации - техническая подготовка важна!",
            incorrectFeedback: "Consider presentation disasters! **The speaker didn't test equipment first, then the presentation failed.** Past Perfect negative 'hadn't remembered' shows this earlier oversight. 'Haven't remembered' is present perfect (wrong tense), 'didn't remember' doesn't emphasize the causal sequence, and 'wasn't remembering' suggests ongoing non-remembering.",
            incorrectFeedbackRu: "Рассмотрите катастрофы презентаций! **Спикер сначала не проверил оборудование, а потом презентация провалилась.** Past Perfect отрицательная форма 'hadn't remembered' показывает эту более раннюю оплошность. 'Haven't remembered' - это Present Perfect (неправильное время), 'didn't remember' не подчеркивает причинную последовательность, а 'wasn't remembering' предполагает продолжающееся незапоминание."
        },
        {
            question: "Choose the appropriate past perfect usage:",
            questionRu: "Выберите подходящее использование Past Perfect:",
            sentence: "The app crashed constantly because the developers _____ it properly before release.",
            options: [
                "hadn't tested",
                "haven't tested",
                "didn't test",
                "weren't testing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Hadn't tested' shows insufficient quality control happened before the problematic release - software development lesson!",
            correctFeedbackRu: "Отлично! 'Hadn't tested' показывает, что недостаточный контроль качества произошел до проблемного релиза - урок разработки программного обеспечения!",
            incorrectFeedback: "Think about software quality! **Developers didn't test properly first, then the app crashed constantly.** Past Perfect negative 'hadn't tested' shows this earlier negligence. 'Haven't tested' is present perfect (wrong context), 'didn't test' doesn't show the causal relationship, and 'weren't testing' suggests ongoing non-testing.",
            incorrectFeedbackRu: "Подумайте о качестве программного обеспечения! **Разработчики сначала не протестировали должным образом, а потом приложение постоянно крашилось.** Past Perfect отрицательная форма 'hadn't tested' показывает эту более раннюю небрежность. 'Haven't tested' - это Present Perfect (неправильный контекст), 'didn't test' не показывает причинную связь, а 'weren't testing' предполагает продолжающееся нетестирование."
        },
        {
            question: "Select the correct past perfect construction:",
            questionRu: "Выберите правильную конструкцию Past Perfect:",
            sentence: "She lost all her photos because she _____ them to cloud storage.",
            options: [
                "hadn't backed up",
                "haven't backed up",
                "didn't back up",
                "wasn't backing up"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Hadn't backed up' shows the lack of backup occurred before losing photos - painful digital lesson!",
            correctFeedbackRu: "Отлично! 'Hadn't backed up' показывает, что отсутствие резервного копирования произошло до потери фотографий - болезненный цифровой урок!",
            incorrectFeedback: "Consider data protection! **She didn't back up photos first, then lost them all.** Past Perfect negative 'hadn't backed up' shows this earlier omission. 'Haven't backed up' is present perfect (wrong timeframe), 'didn't back up' doesn't emphasize the sequence, and 'wasn't backing up' suggests ongoing non-backup action.",
            incorrectFeedbackRu: "Рассмотрите защиту данных! **Сначала она не сделала резервную копию фотографий, а потом потеряла их все.** Past Perfect отрицательная форма 'hadn't backed up' показывает это более раннее упущение. 'Haven't backed up' - это Present Perfect (неправильный временной период), 'didn't back up' не подчеркивает последовательность, а 'wasn't backing up' предполагает продолжающееся отсутствие резервного копирования."
        },
        {
            question: "Choose the correct tense combination:",
            questionRu: "Выберите правильное сочетание времен:",
            sentence: "The video conference was a disaster because several participants _____ their cameras or microphones.",
            options: [
                "hadn't configured",
                "haven't configured",
                "didn't configure",
                "weren't configuring"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Hadn't configured' shows the technical setup problems occurred before the disastrous meeting - remote work challenges!",
            correctFeedbackRu: "Отлично! 'Hadn't configured' показывает, что проблемы с технической настройкой произошли до катастрофической встречи - вызовы удаленной работы!",
            incorrectFeedback: "Think about virtual meeting preparation! **Participants didn't set up equipment first, then the conference was a disaster.** Past Perfect negative 'hadn't configured' shows this earlier technical negligence. 'Haven't configured' is present perfect (wrong tense), 'didn't configure' doesn't show the causal sequence, and 'weren't configuring' suggests ongoing non-configuration.",
            incorrectFeedbackRu: "Подумайте о подготовке к виртуальным встречам! **Участники сначала не настроили оборудование, а потом конференция была катастрофой.** Past Perfect отрицательная форма 'hadn't configured' показывает эту более раннюю техническую небрежность. 'Haven't configured' - это Present Perfect (неправильное время), 'didn't configure' не показывает причинную последовательность, а 'weren't configuring' предполагает продолжающуюся ненастройку."
        },
        {
            question: "Select the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "I missed the important email because it _____ to my spam folder automatically.",
            options: [
                "had been moved",
                "has been moved",
                "was moved",
                "had moved"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had been moved' shows the email was filtered before you missed it - digital communication mishaps!",
            correctFeedbackRu: "Отлично! 'Had been moved' показывает, что письмо было отфильтровано до того, как вы его пропустили - неполадки цифровой коммуникации!",
            incorrectFeedback: "Consider email filtering systems! **The email was moved to spam first, then you missed it.** Past Perfect passive 'had been moved' shows this earlier automatic action. 'Has been moved' is present perfect (wrong context), 'was moved' doesn't show the sequence, and 'had moved' is active voice (email doesn't move itself).",
            incorrectFeedbackRu: "Рассмотрите системы фильтрации электронной почты! **Письмо сначала было перемещено в спам, а потом вы его пропустили.** Past Perfect пассивный залог 'had been moved' показывает это более раннее автоматическое действие. 'Has been moved' - это Present Perfect (неправильный контекст), 'was moved' не показывает последовательность, а 'had moved' - активный залог (письмо не двигается само)."
        },
        {
            question: "Choose the correct past perfect usage:",
            questionRu: "Выберите правильное использование Past Perfect:",
            sentence: "The online order was delayed because the system _____ the wrong shipping address.",
            options: [
                "had processed",
                "has processed",
                "processed",
                "was processing"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had processed' shows the system error occurred before the shipping delay - e-commerce complications!",
            correctFeedbackRu: "Отлично! 'Had processed' показывает, что системная ошибка произошла до задержки доставки - осложнения электронной коммерции!",
            incorrectFeedback: "Think about automated systems! **The system processed wrong address first, then the order was delayed.** Past Perfect 'had processed' shows this earlier system error. 'Has processed' is present perfect (wrong timeframe), 'processed' doesn't emphasize the sequence, and 'was processing' suggests ongoing action during delay announcement.",
            incorrectFeedbackRu: "Подумайте об автоматизированных системах! **Система сначала обработала неправильный адрес, а потом заказ был задержан.** Past Perfect 'had processed' показывает эту более раннюю системную ошибку. 'Has processed' - это Present Perfect (неправильный временной период), 'processed' не подчеркивает последовательность, а 'was processing' предполагает продолжающееся действие во время объявления о задержке."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The smartphone battery died quickly because I _____ too many background apps running.",
            options: [
                "had left",
                "have left",
                "left",
                "was leaving"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had left' shows the apps were running before the battery died - mobile device management lesson!",
            correctFeedbackRu: "Отлично! 'Had left' показывает, что приложения работали до того, как батарея разрядилась - урок управления мобильными устройствами!",
            incorrectFeedback: "Consider battery drain causes! **You left too many apps running first, then the battery died quickly.** Past Perfect 'had left' shows this earlier poor device management. 'Have left' is present perfect (wrong tense), 'left' doesn't show the causal relationship, and 'was leaving' suggests ongoing action during battery death.",
            incorrectFeedbackRu: "Рассмотрите причины разрядки батареи! **Сначала вы оставили слишком много приложений работающими, а потом батарея быстро разрядилась.** Past Perfect 'had left' показывает это более раннее плохое управление устройством. 'Have left' - это Present Perfect (неправильное время), 'left' не показывает причинную связь, а 'was leaving' предполагает продолжающееся действие во время разрядки батареи."
        },
        {
            question: "Choose the appropriate past perfect construction:",
            questionRu: "Выберите подходящую конструкцию Past Perfect:",
            sentence: "The social media post went viral because it _____ a current trending topic perfectly.",
            options: [
                "had captured",
                "has captured",
                "captured",
                "was capturing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had captured' shows the perfect topic match happened before going viral - social media timing success!",
            correctFeedbackRu: "Отлично! 'Had captured' показывает, что идеальное попадание в тему произошло до того, как пост стал вирусным - успех времени в социальных медиа!",
            incorrectFeedback: "Think about viral content creation! **The post captured the trending topic first, then went viral.** Past Perfect 'had captured' shows this earlier perfect timing. 'Has captured' is present perfect (wrong context), 'captured' doesn't emphasize the sequence, and 'was capturing' suggests ongoing action during viral spread.",
            incorrectFeedbackRu: "Подумайте о создании вирусного контента! **Пост сначала захватил трендовую тему, а потом стал вирусным.** Past Perfect 'had captured' показывает это более раннее идеальное время. 'Has captured' - это Present Perfect (неправильный контекст), 'captured' не подчеркивает последовательность, а 'was capturing' предполагает продолжающееся действие во время вирусного распространения."
        },
        {
            question: "Select the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The website crashed during the sale because the developers _____ for such high traffic volume.",
            options: [
                "hadn't prepared",
                "haven't prepared",
                "didn't prepare",
                "weren't preparing"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Hadn't prepared' shows the lack of preparation occurred before the website crash - e-commerce scalability lesson!",
            correctFeedbackRu: "Отлично! 'Hadn't prepared' показывает, что отсутствие подготовки произошло до краша сайта - урок масштабируемости электронной коммерции!",
            incorrectFeedback: "Consider website capacity planning! **Developers didn't prepare for traffic first, then the site crashed during the sale.** Past Perfect negative 'hadn't prepared' shows this earlier oversight. 'Haven't prepared' is present perfect (wrong timeframe), 'didn't prepare' doesn't show the causal sequence, and 'weren't preparing' suggests ongoing non-preparation during the crash.",
            incorrectFeedbackRu: "Рассмотрите планирование пропускной способности сайта! **Разработчики сначала не подготовились к трафику, а потом сайт упал во время распродажи.** Past Perfect отрицательная форма 'hadn't prepared' показывает эту более раннюю оплошность. 'Haven't prepared' - это Present Perfect (неправильный временной период), 'didn't prepare' не показывает причинную последовательность, а 'weren't preparing' предполагает продолжающуюся неподготовку во время краша."
        }
    ]
};

/* ============================================
Page 5: Past Perfect - Sequence: Family and Relationships
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-page5'] = {
    title: "Past Perfect - Sequence: Family Dynamics and Personal Relationships",
    multipleChoice: [
        {
            question: "Choose the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "My parents were upset because I _____ to call them on their anniversary.",
            options: [
                "had forgotten",
                "have forgotten",
                "forgot",
                "was forgetting"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had forgotten' shows you forgot the anniversary before your parents got upset - family relationship lesson!",
            correctFeedbackRu: "Отлично! 'Had forgotten' показывает, что вы забыли годовщину до того, как родители расстроились - урок семейных отношений!",
            incorrectFeedback: "Think about family disappointment! **You forgot to call first, then your parents were upset.** Past Perfect 'had forgotten' shows this earlier oversight. 'Have forgotten' is present perfect (wrong timeframe), 'forgot' doesn't show the sequence clearly, and 'was forgetting' suggests ongoing forgetfulness during their upset.",
            incorrectFeedbackRu: "Подумайте о семейном разочаровании! **Сначала вы забыли позвонить, а потом родители расстроились.** Past Perfect 'had forgotten' показывает эту более раннюю оплошность. 'Have forgotten' - это Present Perfect (неправильный временной период), 'forgot' не показывает последовательность четко, а 'was forgetting' предполагает продолжающуюся забывчивость во время их расстройства."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "She refused to speak to me because I _____ her birthday party invitation.",
            options: [
                "had declined",
                "have declined",
                "declined",
                "was declining"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had declined' shows the invitation refusal happened before she stopped speaking - friendship consequences!",
            correctFeedbackRu: "Отлично! 'Had declined' показывает, что отказ от приглашения произошел до того, как она перестала говорить - последствия дружбы!",
            incorrectFeedback: "Consider friendship dynamics! **You declined her invitation first, then she refused to speak.** Past Perfect 'had declined' shows this earlier rejection. 'Have declined' is present perfect (wrong context), 'declined' doesn't emphasize the causal sequence, and 'was declining' suggests ongoing decline during her silence.",
            incorrectFeedbackRu: "Рассмотрите динамику дружбы! **Сначала вы отклонили ее приглашение, а потом она отказалась говорить.** Past Perfect 'had declined' показывает этот более ранний отказ. 'Have declined' - это Present Perfect (неправильный контекст), 'declined' не подчеркивает причинную последовательность, а 'was declining' предполагает продолжающийся отказ во время ее молчания."
        },
        {
            question: "Choose the appropriate past perfect usage:",
            questionRu: "Выберите подходящее использование Past Perfect:",
            sentence: "The family reunion was awkward because my cousin _____ some embarrassing family secrets.",
            options: [
                "had revealed",
                "has revealed",
                "revealed",
                "was revealing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had revealed' shows the secret-sharing happened before the awkward reunion - family drama timeline!",
            correctFeedbackRu: "Отлично! 'Had revealed' показывает, что раскрытие секретов произошло до неловкого воссоединения - временная линия семейной драмы!",
            incorrectFeedback: "Think about family tensions! **Your cousin revealed secrets first, then the reunion became awkward.** Past Perfect 'had revealed' shows this earlier indiscretion. 'Has revealed' is present perfect (wrong tense), 'revealed' doesn't show the causal relationship, and 'was revealing' suggests ongoing revelation during the reunion.",
            incorrectFeedbackRu: "Подумайте о семейных напряжениях! **Ваш двоюродный брат сначала раскрыл секреты, а потом воссоединение стало неловким.** Past Perfect 'had revealed' показывает эту более раннюю неосмотрительность. 'Has revealed' - это Present Perfect (неправильное время), 'revealed' не показывает причинную связь, а 'was revealing' предполагает продолжающееся раскрытие во время воссоединения."
        },
        {
            question: "Select the correct past perfect construction:",
            questionRu: "Выберите правильную конструкцию Past Perfect:",
            sentence: "My brother was jealous because I _____ the inheritance he wanted.",
            options: [
                "had received",
                "have received",
                "received",
                "was receiving"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had received' shows you got the inheritance before your brother's jealousy - family financial dynamics!",
            correctFeedbackRu: "Отлично! 'Had received' показывает, что вы получили наследство до ревности брата - семейная финансовая динамика!",
            incorrectFeedback: "Consider sibling rivalry! **You received the inheritance first, then your brother became jealous.** Past Perfect 'had received' shows this earlier windfall. 'Have received' is present perfect (wrong timeframe), 'received' doesn't emphasize the sequence, and 'was receiving' suggests ongoing receipt during his jealousy.",
            incorrectFeedbackRu: "Рассмотрите соперничество между братьями и сестрами! **Сначала вы получили наследство, а потом брат стал ревновать.** Past Perfect 'had received' показывает эту более раннюю удачу. 'Have received' - это Present Perfect (неправильный временной период), 'received' не подчеркивает последовательность, а 'was receiving' предполагает продолжающееся получение во время его ревности."
        },
        {
            question: "Choose the correct tense combination:",
            questionRu: "Выберите правильное сочетание времен:",
            sentence: "The wedding was cancelled because the couple _____ irreconcilable differences.",
            options: [
                "had discovered",
                "have discovered",
                "discovered",
                "were discovering"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had discovered' shows the relationship problems were found before the wedding cancellation - difficult but wise decision!",
            correctFeedbackRu: "Отлично! 'Had discovered' показывает, что проблемы отношений были обнаружены до отмены свадьбы - трудное, но мудрое решение!",
            incorrectFeedback: "Think about relationship challenges! **The couple discovered problems first, then cancelled the wedding.** Past Perfect 'had discovered' shows this earlier realization. 'Have discovered' is present perfect (wrong context), 'discovered' doesn't show the sequence, and 'were discovering' suggests ongoing discovery during cancellation.",
            incorrectFeedbackRu: "Подумайте о проблемах отношений! **Пара сначала обнаружила проблемы, а потом отменила свадьбу.** Past Perfect 'had discovered' показывает это более раннее осознание. 'Have discovered' - это Present Perfect (неправильный контекст), 'discovered' не показывает последовательность, а 'were discovering' предполагает продолжающееся открытие во время отмены."
        },
        {
            question: "Select the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "My grandmother was disappointed because we _____ to visit her for months.",
            options: [
                "hadn't managed",
                "haven't managed",
                "didn't manage",
                "weren't managing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Hadn't managed' shows the long absence occurred before her disappointment - family neglect consequences!",
            correctFeedbackRu: "Отлично! 'Hadn't managed' показывает, что долгое отсутствие произошло до ее разочарования - последствия пренебрежения семьей!",
            incorrectFeedback: "Consider family obligations! **You didn't visit for months first, then grandmother was disappointed.** Past Perfect negative 'hadn't managed' shows this earlier neglect. 'Haven't managed' is present perfect (wrong tense), 'didn't manage' doesn't emphasize the duration, and 'weren't managing' suggests ongoing non-management.",
            incorrectFeedbackRu: "Рассмотрите семейные обязательства! **Сначала вы не навещали месяцами, а потом бабушка была разочарована.** Past Perfect отрицательная форма 'hadn't managed' показывает это более раннее пренебрежение. 'Haven't managed' - это Present Perfect (неправильное время), 'didn't manage' не подчеркивает продолжительность, а 'weren't managing' предполагает продолжающееся неуправление."
        },
        {
            question: "Choose the correct past perfect usage:",
            questionRu: "Выберите правильное использование Past Perfect:",
            sentence: "The children were excited because their father _____ them a surprise trip to Disneyland.",
            options: [
                "had promised",
                "has promised",
                "promised",
                "was promising"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had promised' shows the promise was made before the children's excitement - happy family anticipation!",
            correctFeedbackRu: "Отлично! 'Had promised' показывает, что обещание было дано до того, как дети обрадовались - счастливое семейное ожидание!",
            incorrectFeedback: "Think about family joy! **Father promised the trip first, then children became excited.** Past Perfect 'had promised' shows this earlier commitment. 'Has promised' is present perfect (wrong timeframe), 'promised' doesn't emphasize the sequence, and 'was promising' suggests ongoing promising during their excitement.",
            incorrectFeedbackRu: "Подумайте о семейной радости! **Отец сначала пообещал поездку, а потом дети обрадовались.** Past Perfect 'had promised' показывает это более раннее обязательство. 'Has promised' - это Present Perfect (неправильный временной период), 'promised' не подчеркивает последовательность, а 'was promising' предполагает продолжающееся обещание во время их радости."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "My sister felt guilty because she _____ harsh words during our argument.",
            options: [
                "had spoken",
                "has spoken",
                "spoke",
                "was speaking"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had spoken' shows the harsh words were said before feeling guilty - sibling conflict aftermath!",
            correctFeedbackRu: "Отлично! 'Had spoken' показывает, что резкие слова были сказаны до чувства вины - последствия конфликта между братьями и сестрами!",
            incorrectFeedback: "Consider emotional aftermath! **She spoke harshly first, then felt guilty later.** Past Perfect 'had spoken' shows this earlier outburst. 'Has spoken' is present perfect (wrong context), 'spoke' doesn't show the causal relationship, and 'was speaking' suggests ongoing speech during guilt.",
            incorrectFeedbackRu: "Рассмотрите эмоциональные последствия! **Сначала она говорила резко, а потом почувствовала вину.** Past Perfect 'had spoken' показывает эту более раннюю вспышку. 'Has spoken' - это Present Perfect (неправильный контекст), 'spoke' не показывает причинную связь, а 'was speaking' предполагает продолжающуюся речь во время вины."
        },
        {
            question: "Choose the appropriate past perfect construction:",
            questionRu: "Выберите подходящую конструкцию Past Perfect:",
            sentence: "The family dinner was tense because my uncle _____ controversial political opinions.",
            options: [
                "had expressed",
                "has expressed",
                "expressed",
                "was expressing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had expressed' shows the political comments were made before the dinner tension - family gathering dynamics!",
            correctFeedbackRu: "Отлично! 'Had expressed' показывает, что политические комментарии были сделаны до напряжения за ужином - динамика семейных собраний!",
            incorrectFeedback: "Think about family gatherings! **Uncle expressed controversial views first, then dinner became tense.** Past Perfect 'had expressed' shows this earlier provocation. 'Has expressed' is present perfect (wrong tense), 'expressed' doesn't emphasize the sequence, and 'was expressing' suggests ongoing expression during tension.",
            incorrectFeedbackRu: "Подумайте о семейных собраниях! **Дядя сначала выразил противоречивые взгляды, а потом ужин стал напряженным.** Past Perfect 'had expressed' показывает эту более раннюю провокацию. 'Has expressed' - это Present Perfect (неправильное время), 'expressed' не подчеркивает последовательность, а 'was expressing' предполагает продолжающееся выражение во время напряжения."
        },
        {
            question: "Select the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "My teenage daughter was grounded because she _____ her curfew repeatedly.",
            options: [
                "had broken",
                "has broken",
                "broke",
                "was breaking"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had broken' shows the curfew violations occurred before the grounding - parenting consequences!",
            correctFeedbackRu: "Отлично! 'Had broken' показывает, что нарушения комендантского часа произошли до наказания - родительские последствия!",
            incorrectFeedback: "Consider parenting challenges! **She broke curfew repeatedly first, then was grounded.** Past Perfect 'had broken' shows these earlier violations. 'Has broken' is present perfect (wrong timeframe), 'broke' doesn't show the pattern, and 'was breaking' suggests ongoing breaking during grounding.",
            incorrectFeedbackRu: "Рассмотрите проблемы воспитания! **Сначала она многократно нарушала комендантский час, а потом была наказана.** Past Perfect 'had broken' показывает эти более ранние нарушения. 'Has broken' - это Present Perfect (неправильный временной период), 'broke' не показывает закономерность, а 'was breaking' предполагает продолжающееся нарушение во время наказания."
        }
    ]
};

/* ============================================
Page 6: Past Perfect - Sequence: Health and Lifestyle
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-page6'] = {
    title: "Past Perfect - Sequence: Health Decisions and Lifestyle Changes",
    multipleChoice: [
        {
            question: "Choose the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "I felt much better after the treatment because the doctor _____ the correct diagnosis.",
            options: [
                "had made",
                "has made",
                "made",
                "was making"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had made' shows the diagnosis came before feeling better - successful medical care sequence!",
            correctFeedbackRu: "Отлично! 'Had made' показывает, что диагноз был поставлен до улучшения самочувствия - успешная последовательность медицинской помощи!",
            incorrectFeedback: "Think about medical recovery! **The doctor made the diagnosis first, then you felt better.** Past Perfect 'had made' shows this earlier medical breakthrough. 'Has made' is present perfect (wrong context), 'made' doesn't emphasize the causal sequence, and 'was making' suggests ongoing diagnosis during recovery.",
            incorrectFeedbackRu: "Подумайте о медицинском восстановлении! **Доктор сначала поставил диагноз, а потом вам стало лучше.** Past Perfect 'had made' показывает этот более ранний медицинский прорыв. 'Has made' - это Present Perfect (неправильный контекст), 'made' не подчеркивает причинную последовательность, а 'was making' предполагает продолжающийся диагноз во время восстановления."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "She was exhausted at work because she _____ sleeping properly for weeks.",
            options: [
                "hadn't been",
                "haven't been",
                "wasn't",
                "isn't"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Hadn't been' shows the sleep problems existed before workplace exhaustion - health impact on performance!",
            correctFeedbackRu: "Отлично! 'Hadn't been' показывает, что проблемы со сном существовали до истощения на работе - влияние здоровья на производительность!",
            incorrectFeedback: "Consider health consequences! **She wasn't sleeping well for weeks first, then became exhausted at work.** Past Perfect continuous negative 'hadn't been' shows this earlier ongoing problem. 'Haven't been' is present perfect (wrong tense), 'wasn't' is simple past (doesn't show duration), and 'isn't' is present tense.",
            incorrectFeedbackRu: "Рассмотрите последствия для здоровья! **Сначала она плохо спала неделями, а потом стала истощенной на работе.** Past Perfect Continuous отрицательная форма 'hadn't been' показывает эту более раннюю продолжающуюся проблему. 'Haven't been' - это Present Perfect (неправильное время), 'wasn't' - простое прошедшее (не показывает продолжительность), а 'isn't' - настоящее время."
        },
        {
            question: "Choose the appropriate past perfect usage:",
            questionRu: "Выберите подходящее использование Past Perfect:",
            sentence: "The athlete's performance improved dramatically after he _____ his training routine.",
            options: [
                "had changed",
                "has changed",
                "changed",
                "was changing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had changed' shows the routine modification happened before performance improvement - smart athletic strategy!",
            correctFeedbackRu: "Отлично! 'Had changed' показывает, что изменение режима произошло до улучшения результатов - умная спортивная стратегия!",
            incorrectFeedback: "Think about athletic development! **He changed his training routine first, then performance improved.** Past Perfect 'had changed' shows this earlier modification. 'Has changed' is present perfect (wrong timeframe), 'changed' doesn't emphasize the causal relationship, and 'was changing' suggests ongoing change during improvement.",
            incorrectFeedbackRu: "Подумайте о спортивном развитии! **Сначала он изменил тренировочный режим, а потом результаты улучшились.** Past Perfect 'had changed' показывает эту более раннюю модификацию. 'Has changed' - это Present Perfect (неправильный временной период), 'changed' не подчеркивает причинную связь, а 'was changing' предполагает продолжающееся изменение во время улучшения."
        },
        {
            question: "Select the correct past perfect construction:",
            questionRu: "Выберите правильную конструкцию Past Perfect:",
            sentence: "I gained weight during vacation because I _____ my diet completely.",
            options: [
                "had abandoned",
                "has abandoned",
                "abandoned",
                "was abandoning"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had abandoned' shows the diet neglect happened before weight gain - vacation indulgence consequences!",
            correctFeedbackRu: "Отлично! 'Had abandoned' показывает, что пренебрежение диетой произошло до набора веса - последствия отпускных излишеств!",
            incorrectFeedback: "Consider vacation habits! **You abandoned your diet first, then gained weight during vacation.** Past Perfect 'had abandoned' shows this earlier dietary lapse. 'Has abandoned' is present perfect (wrong context), 'abandoned' doesn't show the sequence, and 'was abandoning' suggests ongoing abandonment during weight gain.",
            incorrectFeedbackRu: "Рассмотрите отпускные привычки! **Сначала вы забросили диету, а потом набрали вес во время отпуска.** Past Perfect 'had abandoned' показывает этот более ранний диетический срыв. 'Has abandoned' - это Present Perfect (неправильный контекст), 'abandoned' не показывает последовательность, а 'was abandoning' предполагает продолжающееся забрасывание во время набора веса."
        },
        {
            question: "Choose the correct tense combination:",
            questionRu: "Выберите правильное сочетание времен:",
            sentence: "The surgery was successful because the medical team _____ extensively for the procedure.",
            options: [
                "had prepared",
                "have prepared",
                "prepared",
                "were preparing"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had prepared' shows the thorough preparation occurred before surgical success - medical professionalism pays off!",
            correctFeedbackRu: "Отлично! 'Had prepared' показывает, что тщательная подготовка произошла до успеха операции - медицинский профессионализм окупается!",
            incorrectFeedback: "Think about medical excellence! **The team prepared extensively first, then the surgery was successful.** Past Perfect 'had prepared' shows this earlier dedication. 'Have prepared' is present perfect (wrong tense), 'prepared' doesn't emphasize the causal relationship, and 'were preparing' suggests ongoing preparation during surgery.",
            incorrectFeedbackRu: "Подумайте о медицинском совершенстве! **Команда сначала тщательно подготовилась, а потом операция была успешной.** Past Perfect 'had prepared' показывает эту более раннюю самоотдачу. 'Have prepared' - это Present Perfect (неправильное время), 'prepared' не подчеркивает причинную связь, а 'were preparing' предполагает продолжающуюся подготовку во время операции."
        },
        {
            question: "Select the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "My back pain disappeared after I _____ ergonomic furniture in my office.",
            options: [
                "had installed",
                "has installed",
                "installed",
                "was installing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had installed' shows the furniture change happened before pain relief - workplace health improvement!",
            correctFeedbackRu: "Отлично! 'Had installed' показывает, что замена мебели произошла до облегчения боли - улучшение здоровья на рабочем месте!",
            incorrectFeedback: "Consider workplace wellness! **You installed ergonomic furniture first, then back pain disappeared.** Past Perfect 'had installed' shows this earlier workplace improvement. 'Has installed' is present perfect (wrong timeframe), 'installed' doesn't emphasize the sequence, and 'was installing' suggests ongoing installation during pain relief.",
            incorrectFeedbackRu: "Рассмотрите благополучие на рабочем месте! **Сначала вы установили эргономичную мебель, а потом боль в спине исчезла.** Past Perfect 'had installed' показывает это более раннее улучшение рабочего места. 'Has installed' - это Present Perfect (неправильный временной период), 'installed' не подчеркивает последовательность, а 'was installing' предполагает продолжающуюся установку во время облегчения боли."
        },
        {
            question: "Choose the correct past perfect usage:",
            questionRu: "Выберите правильное использование Past Perfect:",
            sentence: "She felt more energetic because she _____ smoking three months earlier.",
            options: [
                "had quit",
                "has quit",
                "quit",
                "was quitting"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had quit' shows smoking cessation happened before increased energy - health recovery timeline!",
            correctFeedbackRu: "Отлично! 'Had quit' показывает, что отказ от курения произошел до повышения энергичности - временная линия восстановления здоровья!",
            incorrectFeedback: "Think about health recovery! **She quit smoking first, then felt more energetic later.** Past Perfect 'had quit' shows this earlier lifestyle change. 'Has quit' is present perfect (wrong context), 'quit' doesn't emphasize the timeline, and 'was quitting' suggests ongoing quitting during energy increase.",
            incorrectFeedbackRu: "Подумайте о восстановлении здоровья! **Сначала она бросила курить, а потом почувствовала больше энергии.** Past Perfect 'had quit' показывает это более раннее изменение образа жизни. 'Has quit' - это Present Perfect (неправильный контекст), 'quit' не подчеркивает временную линию, а 'was quitting' предполагает продолжающееся бросание во время повышения энергии."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The patient recovered quickly because the nurse _____ his medication schedule carefully.",
            options: [
                "had monitored",
                "has monitored",
                "monitored",
                "was monitoring"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had monitored' shows the careful oversight happened before quick recovery - dedicated nursing care!",
            correctFeedbackRu: "Отлично! 'Had monitored' показывает, что тщательный надзор произошел до быстрого выздоровления - преданная медсестринская помощь!",
            incorrectFeedback: "Consider healthcare quality! **The nurse monitored medication carefully first, then patient recovered quickly.** Past Perfect 'had monitored' shows this earlier professional care. 'Has monitored' is present perfect (wrong tense), 'monitored' doesn't emphasize the causal sequence, and 'was monitoring' suggests ongoing monitoring during recovery.",
            incorrectFeedbackRu: "Рассмотрите качество здравоохранения! **Медсестра сначала тщательно следила за лекарствами, а потом пациент быстро выздоровел.** Past Perfect 'had monitored' показывает эту более раннюю профессиональную заботу. 'Has monitored' - это Present Perfect (неправильное время), 'monitored' не подчеркивает причинную последовательность, а 'was monitoring' предполагает продолжающееся наблюдение во время выздоровления."
        },
        {
            question: "Choose the appropriate past perfect construction:",
            questionRu: "Выберите подходящую конструкцию Past Perfect:",
            sentence: "I avoided the flu this winter because I _____ the vaccination early in autumn.",
            options: [
                "had received",
                "have received",
                "received",
                "was receiving"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had received' shows the vaccination happened before flu avoidance - preventive medicine success!",
            correctFeedbackRu: "Отлично! 'Had received' показывает, что вакцинация произошла до избежания гриппа - успех профилактической медицины!",
            incorrectFeedback: "Think about disease prevention! **You received vaccination first, then avoided flu this winter.** Past Perfect 'had received' shows this earlier protective measure. 'Have received' is present perfect (wrong timeframe), 'received' doesn't emphasize the protective sequence, and 'was receiving' suggests ongoing vaccination during flu season.",
            incorrectFeedbackRu: "Подумайте о профилактике заболеваний! **Сначала вы получили вакцинацию, а потом избежали гриппа этой зимой.** Past Perfect 'had received' показывает эту более раннюю защитную меру. 'Have received' - это Present Perfect (неправильный временной период), 'received' не подчеркивает защитную последовательность, а 'was receiving' предполагает продолжающуюся вакцинацию во время сезона гриппа."
        },
        {
            question: "Select the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The marathon runner collapsed because he _____ enough water during the race.",
            options: [
                "hadn't consumed",
                "haven't consumed",
                "didn't consume", 
                "wasn't consuming"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Hadn't consumed' shows insufficient hydration occurred before collapse - athletic health lesson!",
            correctFeedbackRu: "Отлично! 'Hadn't consumed' показывает, что недостаточное потребление воды произошло до коллапса - урок спортивного здоровья!",
            incorrectFeedback: "Consider hydration importance! **He didn't consume enough water first, then collapsed.** Past Perfect negative 'hadn't consumed' shows this earlier dehydration. 'Haven't consumed' is present perfect (wrong tense), 'didn't consume' doesn't emphasize the causal sequence, and 'wasn't consuming' suggests ongoing non-consumption.",
            incorrectFeedbackRu: "Рассмотрите важность гидратации! **Сначала он не потреблял достаточно воды, а потом упал в обморок.** Past Perfect отрицательная форма 'hadn't consumed' показывает это более раннее обезвоживание. 'Haven't consumed' - это Present Perfect (неправильное время), 'didn't consume' не подчеркивает причинную последовательность, а 'wasn't consuming' предполагает продолжающееся непотребление."
        }
    ]
};

/* ============================================
Page 7: Past Perfect - Sequence: Business and Finance
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-page7'] = {
    title: "Past Perfect - Sequence: Business Decisions and Financial Outcomes",
    multipleChoice: [
        {
            question: "Choose the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The company went bankrupt because the CEO _____ risky investments without board approval.",
            options: [
                "had made",
                "has made",
                "made",
                "was making"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had made' shows the risky investments happened before bankruptcy - corporate governance lesson!",
            correctFeedbackRu: "Отлично! 'Had made' показывает, что рискованные инвестиции произошли до банкротства - урок корпоративного управления!",
            incorrectFeedback: "Think about business consequences! **The CEO made risky investments first, then the company went bankrupt.** Past Perfect 'had made' shows this earlier poor decision-making. 'Has made' is present perfect (wrong timeframe), 'made' doesn't emphasize the causal sequence, and 'was making' suggests ongoing investment during bankruptcy.",
            incorrectFeedbackRu: "Подумайте о бизнес-последствиях! **CEO сначала сделал рискованные инвестиции, а потом компания обанкротилась.** Past Perfect 'had made' показывает это более раннее плохое принятие решений. 'Has made' - это Present Perfect (неправильный временной период), 'made' не подчеркивает причинную последовательность, а 'was making' предполагает продолжающиеся инвестиции во время банкротства."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The merger was approved after both companies _____ their financial records thoroughly.",
            options: [
                "had audited",
                "have audited",
                "audited",
                "were auditing"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had audited' shows the financial review was completed before merger approval - due diligence process!",
            correctFeedbackRu: "Отлично! 'Had audited' показывает, что финансовая проверка была завершена до одобрения слияния - процесс должной осмотрительности!",
            incorrectFeedback: "Consider corporate procedures! **Companies audited records first, then the merger was approved.** Past Perfect 'had audited' shows this earlier verification process. 'Have audited' is present perfect (wrong context), 'audited' doesn't emphasize the sequence, and 'were auditing' suggests ongoing audit during approval.",
            incorrectFeedbackRu: "Рассмотрите корпоративные процедуры! **Компании сначала проверили записи, а потом слияние было одобрено.** Past Perfect 'had audited' показывает этот более ранний процесс верификации. 'Have audited' - это Present Perfect (неправильный контекст), 'audited' не подчеркивает последовательность, а 'were auditing' предполагает продолжающийся аудит во время одобрения."
        },
        {
            question: "Choose the appropriate past perfect usage:",
            questionRu: "Выберите подходящее использование Past Perfect:",
            sentence: "The startup secured funding because the founders _____ an impressive business plan.",
            options: [
                "had developed",
                "have developed",
                "developed",
                "were developing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had developed' shows the business plan creation happened before securing funding - entrepreneurial preparation success!",
            correctFeedbackRu: "Отлично! 'Had developed' показывает, что создание бизнес-плана произошло до получения финансирования - успех предпринимательской подготовки!",
            incorrectFeedback: "Think about startup success! **Founders developed the business plan first, then secured funding.** Past Perfect 'had developed' shows this earlier preparation. 'Have developed' is present perfect (wrong tense), 'developed' doesn't emphasize the causal relationship, and 'were developing' suggests ongoing development during funding.",
            incorrectFeedbackRu: "Подумайте об успехе стартапа! **Основатели сначала разработали бизнес-план, а потом получили финансирование.** Past Perfect 'had developed' показывает эту более раннюю подготовку. 'Have developed' - это Present Perfect (неправильное время), 'developed' не подчеркивает причинную связь, а 'were developing' предполагает продолжающуюся разработку во время финансирования."
        },
        {
            question: "Select the correct past perfect construction:",
            questionRu: "Выберите правильную конструкцию Past Perfect:",
            sentence: "The stock price plummeted after investors discovered the company _____ its earnings reports.",
            options: [
                "had falsified",
                "has falsified",
                "falsified",
                "was falsifying"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had falsified' shows the financial fraud occurred before the stock crash - market justice sequence!",
            correctFeedbackRu: "Отлично! 'Had falsified' показывает, что финансовое мошенничество произошло до краха акций - последовательность рыночной справедливости!",
            incorrectFeedback: "Consider market integrity! **The company falsified reports first, then stock price plummeted.** Past Perfect 'had falsified' shows this earlier deception. 'Has falsified' is present perfect (wrong timeframe), 'falsified' doesn't show the sequence clearly, and 'was falsifying' suggests ongoing falsification during discovery.",
            incorrectFeedbackRu: "Рассмотрите рыночную целостность! **Компания сначала подделала отчеты, а потом цена акций рухнула.** Past Perfect 'had falsified' показывает этот более ранний обман. 'Has falsified' - это Present Perfect (неправильный временной период), 'falsified' не показывает последовательность четко, а 'was falsifying' предполагает продолжающуюся фальсификацию во время обнаружения."
        },
        {
            question: "Choose the correct tense combination:",
            questionRu: "Выберите правильное сочетание времен:",
            sentence: "The bank approved the loan because the applicant _____ excellent credit history.",
            options: [
                "had maintained",
                "have maintained",
                "maintained",
                "was maintaining"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had maintained' shows the good credit was established before loan approval - financial responsibility pays off!",
            correctFeedbackRu: "Отлично! 'Had maintained' показывает, что хорошая кредитная история была установлена до одобрения кредита - финансовая ответственность окупается!",
            incorrectFeedback: "Think about creditworthiness! **The applicant maintained good credit first, then the bank approved the loan.** Past Perfect 'had maintained' shows this earlier financial discipline. 'Have maintained' is present perfect (wrong context), 'maintained' doesn't emphasize the causal sequence, and 'was maintaining' suggests ongoing maintenance during approval.",
            incorrectFeedbackRu: "Подумайте о кредитоспособности! **Заявитель сначала поддерживал хорошую кредитную историю, а потом банк одобрил кредит.** Past Perfect 'had maintained' показывает эту более раннюю финансовую дисциплину. 'Have maintained' - это Present Perfect (неправильный контекст), 'maintained' не подчеркивает причинную последовательность, а 'was maintaining' предполагает продолжающееся поддержание во время одобрения."
        },
        {
            question: "Select the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "The product launch failed because the marketing team _____ the target audience properly.",
            options: [
                "hadn't researched",
                "haven't researched",
                "didn't research",
                "weren't researching"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Hadn't researched' shows the lack of market research occurred before launch failure - marketing fundamentals matter!",
            correctFeedbackRu: "Отлично! 'Hadn't researched' показывает, что отсутствие исследования рынка произошло до провала запуска - основы маркетинга важны!",
            incorrectFeedback: "Consider marketing basics! **The team didn't research the audience first, then the launch failed.** Past Perfect negative 'hadn't researched' shows this earlier oversight. 'Haven't researched' is present perfect (wrong tense), 'didn't research' doesn't emphasize the causal relationship, and 'weren't researching' suggests ongoing non-research.",
            incorrectFeedbackRu: "Рассмотрите основы маркетинга! **Команда сначала не исследовала аудиторию, а потом запуск провалился.** Past Perfect отрицательная форма 'hadn't researched' показывает эту более раннюю оплошность. 'Haven't researched' - это Present Perfect (неправильное время), 'didn't research' не подчеркивает причинную связь, а 'weren't researching' предполагает продолжающееся неисследование."
        },
        {
            question: "Choose the correct past perfect usage:",
            questionRu: "Выберите правильное использование Past Perfect:",
            sentence: "The contract negotiations succeeded because both parties _____ their positions beforehand.",
            options: [
                "had clarified",
                "have clarified",
                "clarified",
                "were clarifying"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had clarified' shows position clarification happened before successful negotiations - diplomatic preparation works!",
            correctFeedbackRu: "Отлично! 'Had clarified' показывает, что прояснение позиций произошло до успешных переговоров - дипломатическая подготовка работает!",
            incorrectFeedback: "Think about negotiation strategy! **Both parties clarified positions first, then negotiations succeeded.** Past Perfect 'had clarified' shows this earlier preparation. 'Have clarified' is present perfect (wrong timeframe), 'clarified' doesn't emphasize the sequence, and 'were clarifying' suggests ongoing clarification during success.",
            incorrectFeedbackRu: "Подумайте о стратегии переговоров! **Обе стороны сначала прояснили позиции, а потом переговоры прошли успешно.** Past Perfect 'had clarified' показывает эту более раннюю подготовку. 'Have clarified' - это Present Perfect (неправильный временной период), 'clarified' не подчеркивает последовательность, а 'were clarifying' предполагает продолжающееся прояснение во время успеха."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The franchise expanded rapidly because the owner _____ a proven business model.",
            options: [
                "had established",
                "has established",
                "established",
                "was establishing"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had established' shows the business model was proven before rapid expansion - scalable success formula!",
            correctFeedbackRu: "Отлично! 'Had established' показывает, что бизнес-модель была проверена до быстрого расширения - масштабируемая формула успеха!",
            incorrectFeedback: "Consider business growth! **The owner established a proven model first, then franchise expanded rapidly.** Past Perfect 'had established' shows this earlier foundation. 'Has established' is present perfect (wrong context), 'established' doesn't emphasize the causal relationship, and 'was establishing' suggests ongoing establishment during expansion.",
            incorrectFeedbackRu: "Рассмотрите рост бизнеса! **Владелец сначала установил проверенную модель, а потом франшиза быстро расширилась.** Past Perfect 'had established' показывает эту более раннюю основу. 'Has established' - это Present Perfect (неправильный контекст), 'established' не подчеркивает причинную связь, а 'was establishing' предполагает продолжающееся установление во время расширения."
        },
        {
            question: "Choose the appropriate past perfect construction:",
            questionRu: "Выберите подходящую конструкцию Past Perfect:",
            sentence: "The quarterly report was delayed because the accountant _____ some calculation errors.",
            options: [
                "had discovered",
                "has discovered",
                "discovered",
                "was discovering"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had discovered' shows the errors were found before report delay - quality control in action!",
            correctFeedbackRu: "Отлично! 'Had discovered' показывает, что ошибки были найдены до задержки отчета - контроль качества в действии!",
            incorrectFeedback: "Think about financial accuracy! **The accountant discovered errors first, then report was delayed.** Past Perfect 'had discovered' shows this earlier finding. 'Has discovered' is present perfect (wrong tense), 'discovered' doesn't emphasize the sequence, and 'was discovering' suggests ongoing discovery during delay.",
            incorrectFeedbackRu: "Подумайте о финансовой точности! **Бухгалтер сначала обнаружил ошибки, а потом отчет был задержан.** Past Perfect 'had discovered' показывает это более раннее обнаружение. 'Has discovered' - это Present Perfect (неправильное время), 'discovered' не подчеркивает последовательность, а 'was discovering' предполагает продолжающееся обнаружение во время задержки."
        },
        {
            question: "Select the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The business partnership dissolved because one partner _____ funds from the company account.",
            options: [
                "had embezzled",
                "has embezzled",
                "embezzled",
                "was embezzling"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had embezzled' shows the theft occurred before partnership dissolution - trust violation consequences!",
            correctFeedbackRu: "Отлично! 'Had embezzled' показывает, что кража произошла до расторжения партнерства - последствия нарушения доверия!",
            incorrectFeedback: "Consider partnership trust! **One partner embezzled funds first, then partnership dissolved.** Past Perfect 'had embezzled' shows this earlier betrayal. 'Has embezzled' is present perfect (wrong timeframe), 'embezzled' doesn't show the sequence clearly, and 'was embezzling' suggests ongoing embezzlement during dissolution.",
            incorrectFeedbackRu: "Рассмотрите партнерское доверие! **Один партнер сначала растратил средства, а потом партнерство было расторгнуто.** Past Perfect 'had embezzled' показывает это более раннее предательство. 'Has embezzled' - это Present Perfect (неправильный временной период), 'embezzled' не показывает последовательность четко, а 'was embezzling' предполагает продолжающуюся растрату во время расторжения."
        }
    ]
};

/* ============================================
Page 8: Past Perfect - Sequence: Entertainment and Sports
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-page8'] = {
    title: "Past Perfect - Sequence: Entertainment Industry and Athletic Achievements",
    multipleChoice: [
        {
            question: "Choose the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The movie became a blockbuster because the director _____ an all-star cast.",
            options: [
                "had assembled",
                "has assembled",
                "assembled",
                "was assembling"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had assembled' shows the cast was gathered before the movie's success - Hollywood strategy works!",
            correctFeedbackRu: "Отлично! 'Had assembled' показывает, что актерский состав был собран до успеха фильма - голливудская стратегия работает!",
            incorrectFeedback: "Think about movie production! **The director assembled the cast first, then movie became a blockbuster.** Past Perfect 'had assembled' shows this earlier strategic decision. 'Has assembled' is present perfect (wrong context), 'assembled' doesn't emphasize the causal sequence, and 'was assembling' suggests ongoing assembly during success.",
            incorrectFeedbackRu: "Подумайте о производстве фильмов! **Режиссер сначала собрал актерский состав, а потом фильм стал блокбастером.** Past Perfect 'had assembled' показывает это более раннее стратегическое решение. 'Has assembled' - это Present Perfect (неправильный контекст), 'assembled' не подчеркивает причинную последовательность, а 'was assembling' предполагает продолжающуюся сборку во время успеха."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The concert was cancelled because the lead singer _____ her voice during rehearsals.",
            options: [
                "had strained",
                "has strained",
                "strained",
                "was straining"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had strained' shows the voice injury occurred before concert cancellation - performer health priority!",
            correctFeedbackRu: "Отлично! 'Had strained' показывает, что травма голоса произошла до отмены концерта - приоритет здоровья исполнителя!",
            incorrectFeedback: "Consider performer safety! **The singer strained her voice first, then concert was cancelled.** Past Perfect 'had strained' shows this earlier injury. 'Has strained' is present perfect (wrong tense), 'strained' doesn't emphasize the sequence, and 'was straining' suggests ongoing strain during cancellation.",
            incorrectFeedbackRu: "Рассмотрите безопасность исполнителя! **Певица сначала повредила голос, а потом концерт был отменен.** Past Perfect 'had strained' показывает эту более раннюю травму. 'Has strained' - это Present Perfect (неправильное время), 'strained' не подчеркивает последовательность, а 'was straining' предполагает продолжающееся напряжение во время отмены."
        },
        {
            question: "Choose the appropriate past perfect usage:",
            questionRu: "Выберите подходящее использование Past Perfect:",
            sentence: "The athlete won the championship because she _____ intensively for two years.",
            options: [
                "had trained",
                "has trained",
                "trained",
                "was training"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had trained' shows the intensive preparation happened before championship victory - dedication pays off!",
            correctFeedbackRu: "Отлично! 'Had trained' показывает, что интенсивная подготовка произошла до победы в чемпионате - преданность окупается!",
            incorrectFeedback: "Think about athletic success! **She trained intensively first, then won the championship.** Past Perfect 'had trained' shows this earlier commitment. 'Has trained' is present perfect (wrong timeframe), 'trained' doesn't emphasize the causal relationship, and 'was training' suggests ongoing training during victory.",
            incorrectFeedbackRu: "Подумайте об спортивном успехе! **Сначала она интенсивно тренировалась, а потом выиграла чемпионат.** Past Perfect 'had trained' показывает эту более раннюю приверженность. 'Has trained' - это Present Perfect (неправильный временной период), 'trained' не подчеркивает причинную связь, а 'was training' предполагает продолжающуюся тренировку во время победы."
        },
        {
            question: "Select the correct past perfect construction:",
            questionRu: "Выберите правильную конструкцию Past Perfect:",
            sentence: "The theater production was a disaster because the actors _____ their lines properly.",
            options: [
                "hadn't memorized",
                "haven't memorized",
                "didn't memorize",
                "weren't memorizing"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Hadn't memorized' shows the lack of preparation occurred before the disastrous performance - theater basics matter!",
            correctFeedbackRu: "Отлично! 'Hadn't memorized' показывает, что отсутствие подготовки произошло до катастрофического выступления - основы театра важны!",
            incorrectFeedback: "Consider theatrical preparation! **Actors didn't memorize lines first, then production was a disaster.** Past Perfect negative 'hadn't memorized' shows this earlier negligence. 'Haven't memorized' is present perfect (wrong context), 'didn't memorize' doesn't emphasize the causal sequence, and 'weren't memorizing' suggests ongoing non-memorization.",
            incorrectFeedbackRu: "Рассмотрите театральную подготовку! **Актеры сначала не выучили реплики, а потом постановка была катастрофой.** Past Perfect отрицательная форма 'hadn't memorized' показывает эту более раннюю небрежность. 'Haven't memorized' - это Present Perfect (неправильный контекст), 'didn't memorize' не подчеркивает причинную последовательность, а 'weren't memorizing' предполагает продолжающееся незапоминание."
        },
        {
            question: "Choose the correct tense combination:",
            questionRu: "Выберите правильное сочетание времен:",
            sentence: "The football team lost the match because their star player _____ during warm-up.",
            options: [
                "had injured himself",
                "has injured himself",
                "injured himself",
                "was injuring himself"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had injured himself' shows the injury occurred before losing the match - sports timing cruel reality!",
            correctFeedbackRu: "Отлично! 'Had injured himself' показывает, что травма произошла до проигрыша матча - жестокая реальность спортивного времени!",
            incorrectFeedback: "Think about sports setbacks! **The player injured himself first, then team lost the match.** Past Perfect 'had injured himself' shows this earlier misfortune. 'Has injured himself' is present perfect (wrong tense), 'injured himself' doesn't emphasize the sequence, and 'was injuring himself' suggests ongoing injury during match.",
            incorrectFeedbackRu: "Подумайте о спортивных неудачах! **Игрок сначала травмировался, а потом команда проиграла матч.** Past Perfect 'had injured himself' показывает эту более раннюю неудачу. 'Has injured himself' - это Present Perfect (неправильное время), 'injured himself' не подчеркивает последовательность, а 'was injuring himself' предполагает продолжающуюся травму во время матча."
        },
        {
            question: "Select the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "The band's album went platinum because they _____ their unique sound over many years.",
            options: [
                "had developed",
                "have developed",
                "developed",
                "were developing"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had developed' shows the sound development happened before album success - artistic evolution pays off!",
            correctFeedbackRu: "Отлично! 'Had developed' показывает, что развитие звука произошло до успеха альбома - художественная эволюция окупается!",
            incorrectFeedback: "Consider musical evolution! **The band developed their sound first, then album went platinum.** Past Perfect 'had developed' shows this earlier artistic journey. 'Have developed' is present perfect (wrong timeframe), 'developed' doesn't emphasize the long-term process, and 'were developing' suggests ongoing development during success.",
            incorrectFeedbackRu: "Рассмотрите музыкальную эволюцию! **Группа сначала развила свой звук, а потом альбом стал платиновым.** Past Perfect 'had developed' показывает это более раннее художественное путешествие. 'Have developed' - это Present Perfect (неправильный временной период), 'developed' не подчеркивает долгосрочный процесс, а 'were developing' предполагает продолжающееся развитие во время успеха."
        },
        {
            question: "Choose the correct past perfect usage:",
            questionRu: "Выберите правильное использование Past Perfect:",
            sentence: "The video game launch was postponed because the developers _____ several critical bugs.",
            options: [
                "had discovered",
                "have discovered",
                "discovered",
                "were discovering"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had discovered' shows the bugs were found before launch postponement - quality control decision!",
            correctFeedbackRu: "Отлично! 'Had discovered' показывает, что баги были найдены до отсрочки запуска - решение контроля качества!",
            incorrectFeedback: "Think about product quality! **Developers discovered bugs first, then launch was postponed.** Past Perfect 'had discovered' shows this earlier finding. 'Have discovered' is present perfect (wrong context), 'discovered' doesn't emphasize the sequence, and 'were discovering' suggests ongoing discovery during postponement.",
            incorrectFeedbackRu: "Подумайте о качестве продукта! **Разработчики сначала обнаружили баги, а потом запуск был отложен.** Past Perfect 'had discovered' показывает это более раннее обнаружение. 'Have discovered' - это Present Perfect (неправильный контекст), 'discovered' не подчеркивает последовательность, а 'were discovering' предполагает продолжающееся обнаружение во время отсрочки."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The tennis player dominated the tournament because she _____ her serve technique perfectly.",
            options: [
                "had mastered",
                "has mastered",
                "mastered",
                "was mastering"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had mastered' shows the technique perfection happened before tournament domination - skill development triumph!",
            correctFeedbackRu: "Отлично! 'Had mastered' показывает, что совершенство техники произошло до доминирования в турнире - триумф развития навыков!",
            incorrectFeedback: "Consider athletic mastery! **She mastered her serve first, then dominated the tournament.** Past Perfect 'had mastered' shows this earlier skill perfection. 'Has mastered' is present perfect (wrong tense), 'mastered' doesn't emphasize the causal relationship, and 'was mastering' suggests ongoing mastery during tournament.",
            incorrectFeedbackRu: "Рассмотрите спортивное мастерство! **Сначала она овладела своей подачей, а потом доминировала в турнире.** Past Perfect 'had mastered' показывает это более раннее совершенство навыка. 'Has mastered' - это Present Perfect (неправильное время), 'mastered' не подчеркивает причинную связь, а 'was mastering' предполагает продолжающееся овладение во время турнира."
        },
        {
            question: "Choose the appropriate past perfect construction:",
            questionRu: "Выберите подходящую конструкцию Past Perfect:",
            sentence: "The TV series was renewed for another season because it _____ massive viewer ratings.",
            options: [
                "had achieved",
                "has achieved",
                "achieved",
                "was achieving"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had achieved' shows the high ratings came before series renewal - entertainment success formula!",
            correctFeedbackRu: "Отлично! 'Had achieved' показывает, что высокие рейтинги пришли до продления сериала - формула успеха развлечений!",
            incorrectFeedback: "Think about TV success! **The series achieved high ratings first, then was renewed.** Past Perfect 'had achieved' shows this earlier accomplishment. 'Has achieved' is present perfect (wrong timeframe), 'achieved' doesn't emphasize the sequence, and 'was achieving' suggests ongoing achievement during renewal.",
            incorrectFeedbackRu: "Подумайте об успехе на телевидении! **Сериал сначала достиг высоких рейтингов, а потом был продлен.** Past Perfect 'had achieved' показывает это более раннее достижение. 'Has achieved' - это Present Perfect (неправильный временной период), 'achieved' не подчеркивает последовательность, а 'was achieving' предполагает продолжающееся достижение во время продления."
        },
        {
            question: "Select the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The Olympic swimmer broke the world record because he _____ a revolutionary training method.",
            options: [
                "had adopted",
                "has adopted",
                "adopted",
                "was adopting"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had adopted' shows the training innovation happened before record-breaking - sports science advancement!",
            correctFeedbackRu: "Отлично! 'Had adopted' показывает, что инновация в тренировках произошла до установления рекорда - прогресс спортивной науки!",
            incorrectFeedback: "Consider athletic innovation! **The swimmer adopted new training first, then broke the world record.** Past Perfect 'had adopted' shows this earlier methodology change. 'Has adopted' is present perfect (wrong context), 'adopted' doesn't emphasize the causal sequence, and 'was adopting' suggests ongoing adoption during record-breaking.",
            incorrectFeedbackRu: "Рассмотрите спортивные инновации! **Пловец сначала принял новую тренировку, а потом побил мировой рекорд.** Past Perfect 'had adopted' показывает это более раннее изменение методологии. 'Has adopted' - это Present Perfect (неправильный контекст), 'adopted' не подчеркивает причинную последовательность, а 'was adopting' предполагает продолжающееся принятие во время установления рекорда."
        }
    ]
};

/* ============================================
Page 9: Past Perfect - Sequence: Environmental and Social Issues
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-page9'] = {
    title: "Past Perfect - Sequence: Environmental Changes and Social Developments",
    multipleChoice: [
        {
            question: "Choose the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The city experienced severe flooding because developers _____ too many wetlands.",
            options: [
                "had destroyed",
                "has destroyed",
                "destroyed",
                "were destroying"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had destroyed' shows wetland destruction occurred before flooding - environmental consequences!",
            correctFeedbackRu: "Отлично! 'Had destroyed' показывает, что уничтожение болот произошло до наводнения - экологические последствия!",
            incorrectFeedback: "Think about environmental impact! **Developers destroyed wetlands first, then city experienced flooding.** Past Perfect 'had destroyed' shows this earlier environmental damage. 'Has destroyed' is present perfect (wrong timeframe), 'destroyed' doesn't emphasize the causal sequence, and 'were destroying' suggests ongoing destruction during flooding.",
            incorrectFeedbackRu: "Подумайте о воздействии на окружающую среду! **Застройщики сначала уничтожили болота, а потом город пережил наводнение.** Past Perfect 'had destroyed' показывает этот более ранний экологический ущерб. 'Has destroyed' - это Present Perfect (неправильный временной период), 'destroyed' не подчеркивает причинную последовательность, а 'were destroying' предполагает продолжающееся уничтожение во время наводнения."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The community garden flourished because volunteers _____ the soil with organic compost.",
            options: [
                "had enriched",
                "have enriched",
                "enriched",
                "were enriching"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had enriched' shows soil preparation happened before garden success - sustainable agriculture works!",
            correctFeedbackRu: "Отлично! 'Had enriched' показывает, что подготовка почвы произошла до успеха сада - устойчивое сельское хозяйство работает!",
            incorrectFeedback: "Consider sustainable gardening! **Volunteers enriched soil first, then garden flourished.** Past Perfect 'had enriched' shows this earlier preparation. 'Have enriched' is present perfect (wrong context), 'enriched' doesn't emphasize the sequence, and 'were enriching' suggests ongoing enrichment during flourishing.",
            incorrectFeedbackRu: "Рассмотрите устойчивое садоводство! **Волонтеры сначала обогатили почву, а потом сад расцвел.** Past Perfect 'had enriched' показывает эту более раннюю подготовку. 'Have enriched' - это Present Perfect (неправильный контекст), 'enriched' не подчеркивает последовательность, а 'were enriching' предполагает продолжающееся обогащение во время процветания."
        },
        {
            question: "Choose the appropriate past perfect usage:",
            questionRu: "Выберите подходящее использование Past Perfect:",
            sentence: "The wildlife sanctuary was established because conservationists _____ endangered species habitat.",
            options: [
                "had protected",
                "have protected",
                "protected",
                "were protecting"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had protected' shows conservation efforts occurred before sanctuary establishment - proactive environmental stewardship!",
            correctFeedbackRu: "Отлично! 'Had protected' показывает, что природоохранные усилия произошли до создания заповедника - проактивное экологическое управление!",
            incorrectFeedback: "Think about conservation strategy! **Conservationists protected habitat first, then sanctuary was established.** Past Perfect 'had protected' shows this earlier preservation work. 'Have protected' is present perfect (wrong tense), 'protected' doesn't emphasize the causal relationship, and 'were protecting' suggests ongoing protection during establishment.",
            incorrectFeedbackRu: "Подумайте о стратегии сохранения! **Защитники природы сначала защитили среду обитания, а потом был создан заповедник.** Past Perfect 'had protected' показывает эту более раннюю работу по сохранению. 'Have protected' - это Present Perfect (неправильное время), 'protected' не подчеркивает причинную связь, а 'were protecting' предполагает продолжающуюся защиту во время создания."
        },
        {
            question: "Select the correct past perfect construction:",
            questionRu: "Выберите правильную конструкцию Past Perfect:",
            sentence: "The neighborhood improved significantly after residents _____ a community watch program.",
            options: [
                "had organized",
                "have organized",
                "organized",
                "were organizing"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had organized' shows community organizing happened before neighborhood improvement - grassroots action success!",
            correctFeedbackRu: "Отлично! 'Had organized' показывает, что организация сообщества произошла до улучшения района - успех низовых действий!",
            incorrectFeedback: "Consider community empowerment! **Residents organized the program first, then neighborhood improved.** Past Perfect 'had organized' shows this earlier community building. 'Have organized' is present perfect (wrong timeframe), 'organized' doesn't emphasize the sequence, and 'were organizing' suggests ongoing organization during improvement.",
            incorrectFeedbackRu: "Рассмотрите расширение возможностей сообщества! **Жители сначала организовали программу, а потом район улучшился.** Past Perfect 'had organized' показывает это более раннее строительство сообщества. 'Have organized' - это Present Perfect (неправильный временной период), 'organized' не подчеркивает последовательность, а 'were organizing' предполагает продолжающуюся организацию во время улучшения."
        },
        {
            question: "Choose the correct tense combination:",
            questionRu: "Выберите правильное сочетание времен:",
            sentence: "Air quality improved dramatically after the government _____ stricter emission standards.",
            options: [
                "had implemented",
                "have implemented",
                "implemented",
                "was implementing"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had implemented' shows policy implementation occurred before air quality improvement - effective environmental regulation!",
            correctFeedbackRu: "Отлично! 'Had implemented' показывает, что внедрение политики произошло до улучшения качества воздуха - эффективное экологическое регулирование!",
            incorrectFeedback: "Think about policy impact! **Government implemented standards first, then air quality improved.** Past Perfect 'had implemented' shows this earlier regulatory action. 'Have implemented' is present perfect (wrong context), 'implemented' doesn't emphasize the causal sequence, and 'was implementing' suggests ongoing implementation during improvement.",
            incorrectFeedbackRu: "Подумайте о воздействии политики! **Правительство сначала внедрило стандарты, а потом качество воздуха улучшилось.** Past Perfect 'had implemented' показывает это более раннее регулятивное действие. 'Have implemented' - это Present Perfect (неправильный контекст), 'implemented' не подчеркивает причинную последовательность, а 'was implementing' предполагает продолжающееся внедрение во время улучшения."
        },
        {
            question: "Select the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "The recycling program succeeded because citizens _____ properly educated about waste separation.",
            options: [
                "had been",
                "have been",
                "were",
                "are"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had been' shows education occurred before program success - public awareness foundation!",
            correctFeedbackRu: "Отлично! 'Had been' показывает, что образование произошло до успеха программы - основа общественного сознания!",
            incorrectFeedback: "Consider public education importance! **Citizens were educated first, then recycling program succeeded.** Past Perfect passive 'had been' shows this earlier awareness building. 'Have been' is present perfect (wrong tense), 'were' is simple past (doesn't show sequence), and 'are' is present tense.",
            incorrectFeedbackRu: "Рассмотрите важность общественного образования! **Граждане сначала были обучены, а потом программа переработки была успешной.** Past Perfect пассивный залог 'had been' показывает это более раннее формирование осведомленности. 'Have been' - это Present Perfect (неправильное время), 'were' - простое прошедшее (не показывает последовательность), а 'are' - настоящее время."
        },
        {
            question: "Choose the correct past perfect usage:",
            questionRu: "Выберите правильное использование Past Perfect:",
            sentence: "The solar panel project was approved because engineers _____ its environmental benefits thoroughly.",
            options: [
                "had demonstrated",
                "have demonstrated",
                "demonstrated",
                "were demonstrating"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had demonstrated' shows benefit proof occurred before project approval - evidence-based decision making!",
            correctFeedbackRu: "Отлично! 'Had demonstrated' показывает, что доказательство выгод произошло до одобрения проекта - принятие решений на основе доказательств!",
            incorrectFeedback: "Think about project justification! **Engineers demonstrated benefits first, then project was approved.** Past Perfect 'had demonstrated' shows this earlier evidence presentation. 'Have demonstrated' is present perfect (wrong timeframe), 'demonstrated' doesn't emphasize the sequence, and 'were demonstrating' suggests ongoing demonstration during approval.",
            incorrectFeedbackRu: "Подумайте об обосновании проекта! **Инженеры сначала продемонстрировали выгоды, а потом проект был одобрен.** Past Perfect 'had demonstrated' показывает эту более раннюю презентацию доказательств. 'Have demonstrated' - это Present Perfect (неправильный временной период), 'demonstrated' не подчеркивает последовательность, а 'were demonstrating' предполагает продолжающуюся демонстрацию во время одобрения."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The forest recovered remarkably after scientists _____ invasive species from the ecosystem.",
            options: [
                "had removed",
                "have removed",
                "removed",
                "were removing"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had removed' shows species removal occurred before forest recovery - ecological restoration success!",
            correctFeedbackRu: "Отлично! 'Had removed' показывает, что удаление видов произошло до восстановления леса - успех экологической реставрации!",
            incorrectFeedback: "Consider ecosystem management! **Scientists removed invasive species first, then forest recovered.** Past Perfect 'had removed' shows this earlier intervention. 'Have removed' is present perfect (wrong context), 'removed' doesn't emphasize the causal relationship, and 'were removing' suggests ongoing removal during recovery.",
            incorrectFeedbackRu: "Рассмотрите управление экосистемой! **Ученые сначала удалили инвазивные виды, а потом лес восстановился.** Past Perfect 'had removed' показывает это более раннее вмешательство. 'Have removed' - это Present Perfect (неправильный контекст), 'removed' не подчеркивает причинную связь, а 'were removing' предполагает продолжающееся удаление во время восстановления."
        },
        {
            question: "Choose the appropriate past perfect construction:",
            questionRu: "Выберите подходящую конструкцию Past Perfect:",
            sentence: "Public support for renewable energy increased after activists _____ awareness campaigns nationwide.",
            options: [
                "had launched",
                "have launched",
                "launched",
                "were launching"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had launched' shows campaigns happened before increased support - effective advocacy strategy!",
            correctFeedbackRu: "Отлично! 'Had launched' показывает, что кампании произошли до роста поддержки - эффективная стратегия адвокации!",
            incorrectFeedback: "Think about social change! **Activists launched campaigns first, then public support increased.** Past Perfect 'had launched' shows this earlier mobilization effort. 'Have launched' is present perfect (wrong tense), 'launched' doesn't emphasize the sequence, and 'were launching' suggests ongoing launching during support increase.",
            incorrectFeedbackRu: "Подумайте о социальных изменениях! **Активисты сначала запустили кампании, а потом общественная поддержка возросла.** Past Perfect 'had launched' показывает это более раннее усилие мобилизации. 'Have launched' - это Present Perfect (неправильное время), 'launched' не подчеркивает последовательность, а 'were launching' предполагает продолжающийся запуск во время роста поддержки."
        },
        {
            question: "Select the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The urban heat island effect was reduced because planners _____ more green spaces throughout the city.",
            options: [
                "had created",
                "have created",
                "created",
                "were creating"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had created' shows green space development occurred before heat reduction - urban planning solution!",
            correctFeedbackRu: "Отлично! 'Had created' показывает, что создание зеленых зон произошло до снижения жары - решение городского планирования!",
            incorrectFeedback: "Consider urban climate solutions! **Planners created green spaces first, then heat island effect was reduced.** Past Perfect 'had created' shows this earlier environmental design. 'Have created' is present perfect (wrong timeframe), 'created' doesn't emphasize the causal sequence, and 'were creating' suggests ongoing creation during heat reduction.",
            incorrectFeedbackRu: "Рассмотрите решения городского климата! **Планировщики сначала создали зеленые зоны, а потом эффект теплового острова был снижен.** Past Perfect 'had created' показывает этот более ранний экологический дизайн. 'Have created' - это Present Perfect (неправильный временной период), 'created' не подчеркивает причинную последовательность, а 'were creating' предполагает продолжающееся создание во время снижения жары."
        }
    ]
};

/* ============================================
Page 10: Past Perfect - Sequence: Science and Innovation
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-page10'] = {
    title: "Past Perfect - Sequence: Scientific Discoveries and Technological Breakthroughs",
    multipleChoice: [
        {
            question: "Choose the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The vaccine was approved for public use after researchers _____ extensive clinical trials.",
            options: [
                "had completed",
                "have completed",
                "completed",
                "were completing"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had completed' shows trials were finished before vaccine approval - scientific rigor at work!",
            correctFeedbackRu: "Отлично! 'Had completed' показывает, что испытания были завершены до одобрения вакцины - научная строгость в действии!",
            incorrectFeedback: "Think about medical safety! **Researchers completed trials first, then vaccine was approved.** Past Perfect 'had completed' shows this earlier verification process. 'Have completed' is present perfect (wrong context), 'completed' doesn't emphasize the sequence, and 'were completing' suggests ongoing trials during approval.",
            incorrectFeedbackRu: "Подумайте о медицинской безопасности! **Исследователи сначала завершили испытания, а потом вакцина была одобрена.** Past Perfect 'had completed' показывает этот более ранний процесс верификации. 'Have completed' - это Present Perfect (неправильный контекст), 'completed' не подчеркивает последовательность, а 'were completing' предполагает продолжающиеся испытания во время одобрения."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The space mission succeeded because engineers _____ every possible failure scenario.",
            options: [
                "had analyzed",
                "have analyzed",
                "analyzed",
                "were analyzing"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had analyzed' shows scenario planning occurred before mission success - thorough preparation pays off!",
            correctFeedbackRu: "Отлично! 'Had analyzed' показывает, что планирование сценариев произошло до успеха миссии - тщательная подготовка окупается!",
            incorrectFeedback: "Consider aerospace planning! **Engineers analyzed scenarios first, then mission succeeded.** Past Perfect 'had analyzed' shows this earlier risk assessment. 'Have analyzed' is present perfect (wrong tense), 'analyzed' doesn't emphasize the causal relationship, and 'were analyzing' suggests ongoing analysis during mission.",
            incorrectFeedbackRu: "Рассмотрите планирование в аэрокосмической отрасли! **Инженеры сначала проанализировали сценарии, а потом миссия была успешной.** Past Perfect 'had analyzed' показывает эту более раннюю оценку рисков. 'Have analyzed' - это Present Perfect (неправильное время), 'analyzed' не подчеркивает причинную связь, а 'were analyzing' предполагает продолжающийся анализ во время миссии."
        },
        {
            question: "Choose the appropriate past perfect usage:",
            questionRu: "Выберите подходящее использование Past Perfect:",
            sentence: "The Nobel Prize was awarded to the physicist because she _____ a groundbreaking theory.",
            options: [
                "had formulated",
                "has formulated",
                "formulated",
                "was formulating"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had formulated' shows theory development occurred before Nobel Prize - scientific achievement recognition!",
            correctFeedbackRu: "Отлично! 'Had formulated' показывает, что развитие теории произошло до Нобелевской премии - признание научного достижения!",
            incorrectFeedback: "Think about scientific recognition! **She formulated the theory first, then won Nobel Prize.** Past Perfect 'had formulated' shows this earlier intellectual breakthrough. 'Has formulated' is present perfect (wrong timeframe), 'formulated' doesn't emphasize the sequence, and 'was formulating' suggests ongoing formulation during award.",
            incorrectFeedbackRu: "Подумайте о научном признании! **Сначала она сформулировала теорию, а потом получила Нобелевскую премию.** Past Perfect 'had formulated' показывает этот более ранний интеллектуальный прорыв. 'Has formulated' - это Present Perfect (неправильный временной период), 'formulated' не подчеркивает последовательность, а 'was formulating' предполагает продолжающуюся формулировку во время награждения."
        },
        {
            question: "Select the correct past perfect construction:",
            questionRu: "Выберите правильную конструкцию Past Perfect:",
            sentence: "The robot prototype malfunctioned because programmers _____ a critical software bug.",
            options: [
                "hadn't detected",
                "haven't detected",
                "didn't detect",
                "weren't detecting"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Hadn't detected' shows the bug existed before malfunction - quality assurance oversight!",
            correctFeedbackRu: "Отлично! 'Hadn't detected' показывает, что баг существовал до сбоя - упущение контроля качества!",
            incorrectFeedback: "Consider software testing! **Programmers didn't detect the bug first, then robot malfunctioned.** Past Perfect negative 'hadn't detected' shows this earlier oversight. 'Haven't detected' is present perfect (wrong context), 'didn't detect' doesn't emphasize the causal sequence, and 'weren't detecting' suggests ongoing non-detection.",
            incorrectFeedbackRu: "Рассмотрите тестирование программного обеспечения! **Программисты сначала не обнаружили баг, а потом робот дал сбой.** Past Perfect отрицательная форма 'hadn't detected' показывает эту более раннюю оплошность. 'Haven't detected' - это Present Perfect (неправильный контекст), 'didn't detect' не подчеркивает причинную последовательность, а 'weren't detecting' предполагает продолжающееся необнаружение."
        },
        {
            question: "Choose the correct tense combination:",
            questionRu: "Выберите правильное сочетание времен:",
            sentence: "The archaeological discovery was significant because researchers _____ advanced dating techniques.",
            options: [
                "had employed",
                "have employed",
                "employed",
                "were employing"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had employed' shows technique use occurred before significant discovery - methodological innovation success!",
            correctFeedbackRu: "Отлично! 'Had employed' показывает, что использование техники произошло до значительного открытия - успех методологической инновации!",
            incorrectFeedback: "Think about research methodology! **Researchers employed advanced techniques first, then made significant discovery.** Past Perfect 'had employed' shows this earlier methodological choice. 'Have employed' is present perfect (wrong tense), 'employed' doesn't emphasize the causal relationship, and 'were employing' suggests ongoing employment during discovery.",
            incorrectFeedbackRu: "Подумайте о методологии исследования! **Исследователи сначала применили передовые техники, а потом сделали значительное открытие.** Past Perfect 'had employed' показывает этот более ранний методологический выбор. 'Have employed' - это Present Perfect (неправильное время), 'employed' не подчеркивает причинную связь, а 'were employing' предполагает продолжающееся применение во время открытия."
        },
        {
            question: "Select the appropriate past perfect form:",
            questionRu: "Выберите подходящую форму Past Perfect:",
            sentence: "The climate model proved accurate because scientists _____ decades of weather data.",
            options: [
                "had incorporated",
                "have incorporated",
                "incorporated",
                "were incorporating"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had incorporated' shows data inclusion occurred before model accuracy - comprehensive research approach!",
            correctFeedbackRu: "Отлично! 'Had incorporated' показывает, что включение данных произошло до точности модели - всесторонний исследовательский подход!",
            incorrectFeedback: "Consider scientific modeling! **Scientists incorporated data first, then model proved accurate.** Past Perfect 'had incorporated' shows this earlier data compilation. 'Have incorporated' is present perfect (wrong timeframe), 'incorporated' doesn't emphasize the sequence, and 'were incorporating' suggests ongoing incorporation during accuracy proof.",
            incorrectFeedbackRu: "Рассмотрите научное моделирование! **Ученые сначала включили данные, а потом модель оказалась точной.** Past Perfect 'had incorporated' показывает эту более раннюю компиляцию данных. 'Have incorporated' - это Present Perfect (неправильный временной период), 'incorporated' не подчеркивает последовательность, а 'were incorporating' предполагает продолжающееся включение во время доказательства точности."
        },
        {
            question: "Choose the correct past perfect usage:",
            questionRu: "Выберите правильное использование Past Perfect:",
            sentence: "The medical breakthrough was possible because the team _____ interdisciplinary collaboration.",
            options: [
                "had embraced",
                "has embraced",
                "embraced",
                "was embracing"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had embraced' shows collaboration adoption occurred before breakthrough - teamwork innovation!",
            correctFeedbackRu: "Отлично! 'Had embraced' показывает, что принятие сотрудничества произошло до прорыва - инновация командной работы!",
            incorrectFeedback: "Think about scientific collaboration! **The team embraced collaboration first, then breakthrough was possible.** Past Perfect 'had embraced' shows this earlier approach change. 'Has embraced' is present perfect (wrong context), 'embraced' doesn't emphasize the causal sequence, and 'was embracing' suggests ongoing embracing during breakthrough.",
            incorrectFeedbackRu: "Подумайте о научном сотрудничестве! **Команда сначала приняла сотрудничество, а потом прорыв стал возможным.** Past Perfect 'had embraced' показывает это более раннее изменение подхода. 'Has embraced' - это Present Perfect (неправильный контекст), 'embraced' не подчеркивает причинную последовательность, а 'was embracing' предполагает продолжающееся принятие во время прорыва."
        },
        {
            question: "Select the correct sequence tense:",
            questionRu: "Выберите правильное время для последовательности:",
            sentence: "The experiment yielded unexpected results because the laboratory _____ new measurement equipment.",
            options: [
                "had acquired",
                "have acquired",
                "acquired",
                "was acquiring"
            ],
            correctAnswer: 0,
            correctFeedback: "Excellent! 'Had acquired' shows equipment installation occurred before unexpected results - technological advancement impact!",
            correctFeedbackRu: "Отлично! 'Had acquired' показывает, что установка оборудования произошла до неожиданных результатов - влияние технологического прогресса!",
            incorrectFeedback: "Consider laboratory capabilities! **Laboratory acquired equipment first, then experiment yielded unexpected results.** Past Perfect 'had acquired' shows this earlier technological upgrade. 'Have acquired' is present perfect (wrong tense), 'acquired' doesn't emphasize the causal relationship, and 'was acquiring' suggests ongoing acquisition during results.",
            incorrectFeedbackRu: "Рассмотрите возможности лаборатории! **Лаборатория сначала приобрела оборудование, а потом эксперимент дал неожиданные результаты.** Past Perfect 'had acquired' показывает это более раннее технологическое обновление. 'Have acquired' - это Present Perfect (неправильное время), 'acquired' не подчеркивает причинную связь, а 'was acquiring' предполагает продолжающееся приобретение во время результатов."
        },
        {
            question: "Choose the appropriate past perfect construction:",
            questionRu: "Выберите подходящую конструкцию Past Perfect:",
            sentence: "The AI system performed exceptionally because developers _____ it with diverse datasets.",
            options: [
                "had trained",
                "have trained",
                "trained",
                "were training"
            ],
            correctAnswer: 0,
            correctFeedback: "Great! 'Had trained' shows training occurred before exceptional performance - machine learning fundamentals!",
            correctFeedbackRu: "Отлично! 'Had trained' показывает, что обучение произошло до исключительной производительности - основы машинного обучения!",
            incorrectFeedback: "Consider machine learning principles! **Developers trained the system first, then it performed exceptionally.** Past Perfect 'had trained' shows this earlier preparation process. 'Have trained' is present perfect (wrong timeframe), 'trained' doesn't emphasize the sequence, and 'were training' suggests ongoing training during performance evaluation.",
            incorrectFeedbackRu: "Рассмотрите принципы машинного обучения! **Разработчики сначала обучили систему, а потом она показала исключительную производительность.** Past Perfect 'had trained' показывает этот более ранний процесс подготовки. 'Have trained' - это Present Perfect (неправильный временной период), 'trained' не подчеркивает последовательность, а 'were training' предполагает продолжающееся обучение во время оценки производительности."
        },
        {
            question: "Select the correct past perfect form:",
            questionRu: "Выберите правильную форму Past Perfect:",
            sentence: "The gene therapy trial was halted because researchers _____ unexpected side effects in patients.",
            options: [
                "had observed",
                "have observed",
                "observed",
                "were observing"
            ],
            correctAnswer: 0,
            correctFeedback: "Perfect! 'Had observed' shows side effects were noticed before trial halt - patient safety priority!",
            correctFeedbackRu: "Отлично! 'Had observed' показывает, что побочные эффекты были замечены до остановки испытания - приоритет безопасности пациентов!",
            incorrectFeedback: "Think about medical ethics! **Researchers observed side effects first, then trial was halted.** Past Perfect 'had observed' shows this earlier safety concern. 'Have observed' is present perfect (wrong context), 'observed' doesn't emphasize the causal sequence, and 'were observing' suggests ongoing observation during halt.",
            incorrectFeedbackRu: "Подумайте о медицинской этике! **Исследователи сначала наблюдали побочные эффекты, а потом испытание было остановлено.** Past Perfect 'had observed' показывает эту более раннюю озабоченность безопасностью. 'Have observed' - это Present Perfect (неправильный контекст), 'observed' не подчеркивает причинную последовательность, а 'were observing' предполагает продолжающееся наблюдение во время остановки."
        }
    ]
};

/* =============================================================================== */
/* =========================Fill in the Gaps Exercises========================= */

/* ============================================
Page 1: Past Perfect - Sequence: Daily Routines and Work Life
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-gap-page1'] = {
    title: "Past Perfect - Sequence: Daily Routines and Work Life",
    fillGaps: [
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "By the time I arrived at the office, my colleagues ____ the morning meeting.",
            correctAnswer: "had started",
            options: ["had started", "have started", "started", "were starting"],
            correctFeedback: "Excellent! 'Had started' shows the meeting began before your arrival - perfect sequence understanding!",
            correctFeedbackRu: "Отлично! 'Had started' показывает, что совещание началось до вашего прибытия - идеальное понимание последовательности!",
            incorrectFeedback: "Try again. Use 'had started' because the meeting began before you arrived at the office.",
            incorrectFeedbackRu: "Попробуйте снова. Используйте 'had started', потому что совещание началось до того, как вы пришли в офис."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "She couldn't find her laptop because she ____ it at the coffee shop.",
            correctAnswer: "had left",
            options: ["had left", "has left", "left", "was leaving"],
            correctFeedback: "Perfect! 'Had left' shows the laptop was forgotten before she looked for it - classic sequence mistake!",
            correctFeedbackRu: "Отлично! 'Had left' показывает, что ноутбук был забыт до того, как она его искала - классическая ошибка последовательности!",
            incorrectFeedback: "Remember to use 'had left' because leaving the laptop happened before realizing it was missing.",
            incorrectFeedbackRu: "Помните, используйте 'had left', потому что забывание ноутбука произошло до осознания его отсутствия."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "The presentation went smoothly because we ____ it thoroughly the night before.",
            correctAnswer: "had rehearsed",
            options: ["had rehearsed", "have rehearsed", "rehearsed", "were rehearsing"],
            correctFeedback: "Great! 'Had rehearsed' shows the practice session occurred before the successful presentation!",
            correctFeedbackRu: "Отлично! 'Had rehearsed' показывает, что репетиция произошла до успешной презентации!",
            incorrectFeedback: "Use 'had rehearsed' to show that practicing happened before the presentation went smoothly.",
            incorrectFeedbackRu: "Используйте 'had rehearsed', чтобы показать, что практика произошла до того, как презентация прошла гладко."
        },
        {
            question: "Fill in the gap with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "I was exhausted at work because I ____ well the previous night.",
            correctAnswer: "hadn't slept",
            options: ["hadn't slept", "haven't slept", "didn't sleep", "wasn't sleeping"],
            correctFeedback: "Excellent! 'Hadn't slept' shows the poor sleep occurred before feeling exhausted at work!",
            correctFeedbackRu: "Отлично! 'Hadn't slept' показывает, что плохой сон произошел до чувства усталости на работе!",
            incorrectFeedback: "Try 'hadn't slept' because the lack of sleep happened before being exhausted at work.",
            incorrectFeedbackRu: "Попробуйте 'hadn't slept', потому что недостаток сна произошел до усталости на работе."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The boss was angry because the team ____ the deadline again.",
            correctAnswer: "had missed",
            options: ["had missed", "have missed", "missed", "were missing"],
            correctFeedback: "Perfect! 'Had missed' shows the deadline was missed before the boss became angry!",
            correctFeedbackRu: "Отлично! 'Had missed' показывает, что дедлайн был пропущен до того, как босс разозлился!",
            incorrectFeedback: "Use 'had missed' to show missing the deadline happened before the boss's anger.",
            incorrectFeedbackRu: "Используйте 'had missed', чтобы показать, что пропуск дедлайна произошел до гнева босса."
        },
        {
            question: "Fill in the blank with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The client was satisfied because we ____ all their requirements perfectly.",
            correctAnswer: "had met",
            options: ["had met", "have met", "met", "were meeting"],
            correctFeedback: "Great! 'Had met' shows the requirements were fulfilled before client satisfaction!",
            correctFeedbackRu: "Отлично! 'Had met' показывает, что требования были выполнены до удовлетворения клиента!",
            incorrectFeedback: "Try 'had met' because meeting requirements happened before the client felt satisfied.",
            incorrectFeedbackRu: "Попробуйте 'had met', потому что выполнение требований произошло до того, как клиент был удовлетворен."
        },
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "I couldn't log into my email because I ____ my password.",
            correctAnswer: "had forgotten",
            options: ["had forgotten", "have forgotten", "forgot", "was forgetting"],
            correctFeedback: "Excellent! 'Had forgotten' shows forgetting the password occurred before being unable to log in!",
            correctFeedbackRu: "Отлично! 'Had forgotten' показывает, что забывание пароля произошло до невозможности войти в систему!",
            incorrectFeedback: "Use 'had forgotten' because forgetting happened before trying to log in.",
            incorrectFeedbackRu: "Используйте 'had forgotten', потому что забывание произошло до попытки войти в систему."
        },
        {
            question: "Fill in the gap with the correct past perfect construction:",
            questionRu: "Заполните пропуск правильной конструкцией Past Perfect:",
            sentence: "The meeting was cancelled because the main speaker ____ ill suddenly.",
            correctAnswer: "had fallen",
            options: ["had fallen", "has fallen", "fell", "was falling"],
            correctFeedback: "Perfect! 'Had fallen' shows the illness occurred before the meeting cancellation!",
            correctFeedbackRu: "Отлично! 'Had fallen' показывает, что болезнь случилась до отмены встречи!",
            incorrectFeedback: "Try 'had fallen' to show that becoming ill happened before the meeting was cancelled.",
            incorrectFeedbackRu: "Попробуйте 'had fallen', чтобы показать, что заболевание произошло до отмены встречи."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "The project was approved immediately because our team ____ exceptional research.",
            correctAnswer: "had conducted",
            options: ["had conducted", "have conducted", "conducted", "were conducting"],
            correctFeedback: "Great! 'Had conducted' shows the research was completed before project approval!",
            correctFeedbackRu: "Отлично! 'Had conducted' показывает, что исследование было завершено до одобрения проекта!",
            incorrectFeedback: "Use 'had conducted' because the research was done before getting project approval.",
            incorrectFeedbackRu: "Используйте 'had conducted', потому что исследование было сделано до получения одобрения проекта."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "I felt confident during the interview because I ____ extensively about the company.",
            correctAnswer: "had researched",
            options: ["had researched", "have researched", "researched", "was researching"],
            correctFeedback: "Excellent! 'Had researched' shows the preparation occurred before feeling confident in the interview!",
            correctFeedbackRu: "Отлично! 'Had researched' показывает, что подготовка произошла до чувства уверенности на собеседовании!",
            incorrectFeedback: "Try 'had researched' because studying the company happened before the interview confidence.",
            incorrectFeedbackRu: "Попробуйте 'had researched', потому что изучение компании произошло до уверенности на собеседовании."
        }
    ]
};

/* ============================================
Page 2: Past Perfect - Sequence: Personal Experiences and Social Situations
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-gap-page2'] = {
    title: "Past Perfect - Sequence: Personal Experiences and Social Situations",
    fillGaps: [
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "My friends were disappointed because I ____ their birthday party invitation.",
            correctAnswer: "had declined",
            options: ["had declined", "have declined", "declined", "was declining"],
            correctFeedback: "Perfect! 'Had declined' shows the invitation refusal occurred before their disappointment!",
            correctFeedbackRu: "Отлично! 'Had declined' показывает, что отказ от приглашения произошел до их разочарования!",
            incorrectFeedback: "Use 'had declined' because declining the invitation happened before your friends felt disappointed.",
            incorrectFeedbackRu: "Используйте 'had declined', потому что отклонение приглашения произошло до того, как друзья почувствовали разочарование."
        },
        {
            question: "Fill in the blank with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The restaurant was fully booked because we ____ to make a reservation.",
            correctAnswer: "hadn't remembered",
            options: ["hadn't remembered", "haven't remembered", "didn't remember", "weren't remembering"],
            correctFeedback: "Excellent! 'Hadn't remembered' shows forgetting to book occurred before finding it was full!",
            correctFeedbackRu: "Отлично! 'Hadn't remembered' показывает, что забывание забронировать произошло до обнаружения, что все занято!",
            incorrectFeedback: "Try 'hadn't remembered' because not booking happened before discovering the restaurant was full.",
            incorrectFeedbackRu: "Попробуйте 'hadn't remembered', потому что отсутствие бронирования произошло до обнаружения, что ресторан полон."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "She felt embarrassed at the party because she ____ the wrong dress code.",
            correctAnswer: "had misunderstood",
            options: ["had misunderstood", "have misunderstood", "misunderstood", "was misunderstanding"],
            correctFeedback: "Great! 'Had misunderstood' shows the dress code confusion occurred before feeling embarrassed!",
            correctFeedbackRu: "Отлично! 'Had misunderstood' показывает, что путаница с дресс-кодом произошла до чувства смущения!",
            incorrectFeedback: "Use 'had misunderstood' because the dress code confusion happened before the embarrassment.",
            incorrectFeedbackRu: "Используйте 'had misunderstood', потому что путаница с дресс-кодом произошла до смущения."
        },
        {
            question: "Fill in the gap with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "I couldn't enjoy the concert because I ____ my seat in the front row.",
            correctAnswer: "hadn't booked",
            options: ["hadn't booked", "haven't booked", "didn't book", "wasn't booking"],
            correctFeedback: "Perfect! 'Hadn't booked' shows the lack of booking occurred before not enjoying the concert!",
            correctFeedbackRu: "Отлично! 'Hadn't booked' показывает, что отсутствие бронирования произошло до неудовольствия от концерта!",
            incorrectFeedback: "Try 'hadn't booked' because not reserving a good seat happened before the concert disappointment.",
            incorrectFeedbackRu: "Попробуйте 'hadn't booked', потому что отсутствие резервирования хорошего места произошло до разочарования концертом."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "The surprise party was perfect because we ____ every detail carefully.",
            correctAnswer: "had planned",
            options: ["had planned", "have planned", "planned", "were planning"],
            correctFeedback: "Excellent! 'Had planned' shows the careful planning occurred before the perfect party!",
            correctFeedbackRu: "Отлично! 'Had planned' показывает, что тщательное планирование произошло до идеальной вечеринки!",
            incorrectFeedback: "Use 'had planned' because the detailed planning happened before the party's success.",
            incorrectFeedbackRu: "Используйте 'had planned', потому что детальное планирование произошло до успеха вечеринки."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "My neighbor was furious because my dog ____ in his garden repeatedly.",
            correctAnswer: "had barked",
            options: ["had barked", "has barked", "barked", "was barking"],
            correctFeedback: "Great! 'Had barked' shows the repeated barking occurred before the neighbor's fury!",
            correctFeedbackRu: "Отлично! 'Had barked' показывает, что повторяющийся лай произошел до ярости соседа!",
            incorrectFeedback: "Try 'had barked' because the dog's repeated barking happened before your neighbor became furious.",
            incorrectFeedbackRu: "Попробуйте 'had barked', потому что повторяющийся лай собаки произошел до того, как сосед разъярился."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The wedding was memorable because the couple ____ their vows themselves.",
            correctAnswer: "had written",
            options: ["had written", "have written", "wrote", "were writing"],
            correctFeedback: "Perfect! 'Had written' shows the vow writing occurred before the memorable wedding!",
            correctFeedbackRu: "Отлично! 'Had written' показывает, что написание клятв произошло до запоминающейся свадьбы!",
            incorrectFeedback: "Use 'had written' because writing the vows happened before the wedding became memorable.",
            incorrectFeedbackRu: "Используйте 'had written', потому что написание клятв произошло до того, как свадьба стала запоминающейся."
        },
        {
            question: "Fill in the gap with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "I felt nervous at the reunion because I ____ my old classmates for twenty years.",
            correctAnswer: "hadn't seen",
            options: ["hadn't seen", "haven't seen", "didn't see", "wasn't seeing"],
            correctFeedback: "Excellent! 'Hadn't seen' shows the long absence occurred before feeling nervous at the reunion!",
            correctFeedbackRu: "Отлично! 'Hadn't seen' показывает, что долгое отсутствие произошло до нервозности на встрече выпускников!",
            incorrectFeedback: "Try 'hadn't seen' because the twenty-year separation happened before the reunion nervousness.",
            incorrectFeedbackRu: "Попробуйте 'hadn't seen', потому что двадцатилетняя разлука произошла до нервозности на встрече."
        },
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The dinner party was ruined because I ____ the main course completely.",
            correctAnswer: "had overcooked",
            options: ["had overcooked", "have overcooked", "overcooked", "was overcooking"],
            correctFeedback: "Great! 'Had overcooked' shows the cooking mistake occurred before the party was ruined!",
            correctFeedbackRu: "Отлично! 'Had overcooked' показывает, что ошибка в готовке произошла до того, как вечеринка была испорчена!",
            incorrectFeedback: "Use 'had overcooked' because overcooking the food happened before ruining the dinner party.",
            incorrectFeedbackRu: "Используйте 'had overcooked', потому что пережаривание еды произошло до испорченного ужина."
        },
        {
            question: "Fill in the blank with the correct past perfect construction:",
            questionRu: "Заполните пропуск правильной конструкцией Past Perfect:",
            sentence: "She was excited about the vacation because she ____ this trip for months.",
            correctAnswer: "had anticipated",
            options: ["had anticipated", "have anticipated", "anticipated", "was anticipating"],
            correctFeedback: "Perfect! 'Had anticipated' shows the months of anticipation occurred before vacation excitement!",
            correctFeedbackRu: "Отлично! 'Had anticipated' показывает, что месяцы ожидания произошли до волнения от отпуска!",
            incorrectFeedback: "Try 'had anticipated' because months of expecting the trip happened before feeling excited.",
            incorrectFeedbackRu: "Попробуйте 'had anticipated', потому что месяцы ожидания поездки произошли до чувства волнения."
        }
    ]
};

/* ============================================
Page 3: Past Perfect - Sequence: Learning and Academic Achievements
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-gap-page3'] = {
    title: "Past Perfect - Sequence: Learning and Academic Achievements",
    fillGaps: [
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The exam was easier than expected because I ____ all the relevant chapters.",
            correctAnswer: "had studied",
            options: ["had studied", "have studied", "studied", "was studying"],
            correctFeedback: "Excellent! 'Had studied' shows the preparation occurred before finding the exam easy!",
            correctFeedbackRu: "Отлично! 'Had studied' показывает, что подготовка произошла до того, как экзамен оказался легким!",
            incorrectFeedback: "Use 'had studied' because studying the chapters happened before discovering the exam was easy.",
            incorrectFeedbackRu: "Используйте 'had studied', потому что изучение глав произошло до обнаружения, что экзамен легкий."
        },
        {
            question: "Fill in the blank with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "My professor was impressed because I ____ additional research beyond the syllabus.",
            correctAnswer: "had completed",
            options: ["had completed", "have completed", "completed", "was completing"],
            correctFeedback: "Perfect! 'Had completed' shows the extra research occurred before the professor's impression!",
            correctFeedbackRu: "Отлично! 'Had completed' показывает, что дополнительное исследование произошло до впечатления профессора!",
            incorrectFeedback: "Try 'had completed' because doing extra research happened before impressing your professor.",
            incorrectFeedbackRu: "Попробуйте 'had completed', потому что выполнение дополнительного исследования произошло до впечатления профессора."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "I struggled with the advanced course because I ____ the prerequisite subjects properly.",
            correctAnswer: "hadn't mastered",
            options: ["hadn't mastered", "haven't mastered", "didn't master", "wasn't mastering"],
            correctFeedback: "Great! 'Hadn't mastered' shows the lack of foundation occurred before struggling with advanced material!",
            correctFeedbackRu: "Отлично! 'Hadn't mastered' показывает, что отсутствие основы произошло до борьбы с продвинутым материалом!",
            incorrectFeedback: "Use 'hadn't mastered' because not learning prerequisites happened before course struggles.",
            incorrectFeedbackRu: "Используйте 'hadn't mastered', потому что неизучение предварительных предметов произошло до трудностей курса."
        },
        {
            question: "Fill in the gap with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The scholarship was awarded to me because I ____ excellent grades consistently.",
            correctAnswer: "had maintained",
            options: ["had maintained", "have maintained", "maintained", "was maintaining"],
            correctFeedback: "Excellent! 'Had maintained' shows consistent performance occurred before scholarship award!",
            correctFeedbackRu: "Отлично! 'Had maintained' показывает, что стабильная успеваемость произошла до получения стипендии!",
            incorrectFeedback: "Try 'had maintained' because keeping good grades happened before receiving the scholarship.",
            incorrectFeedbackRu: "Попробуйте 'had maintained', потому что поддержание хороших оценок произошло до получения стипендии."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "The library was closed when I arrived because the staff ____ for the day.",
            correctAnswer: "had left",
            options: ["had left", "have left", "left", "were leaving"],
            correctFeedback: "Perfect! 'Had left' shows the staff departure occurred before your arrival!",
            correctFeedbackRu: "Отлично! 'Had left' показывает, что уход персонала произошел до вашего прибытия!",
            incorrectFeedback: "Use 'had left' because the staff's departure happened before you arrived at the library.",
            incorrectFeedbackRu: "Используйте 'had left', потому что уход персонала произошел до того, как вы пришли в библиотеку."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "My thesis defense went smoothly because I ____ every possible question.",
            correctAnswer: "had anticipated",
            options: ["had anticipated", "have anticipated", "anticipated", "was anticipating"],
            correctFeedback: "Great! 'Had anticipated' shows the preparation occurred before the smooth defense!",
            correctFeedbackRu: "Отлично! 'Had anticipated' показывает, что подготовка произошла до гладкой защиты!",
            incorrectFeedback: "Try 'had anticipated' because preparing for questions happened before the successful defense.",
            incorrectFeedbackRu: "Попробуйте 'had anticipated', потому что подготовка к вопросам произошла до успешной защиты."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The online class was confusing because I ____ the updated software.",
            correctAnswer: "hadn't downloaded",
            options: ["hadn't downloaded", "haven't downloaded", "didn't download", "wasn't downloading"],
            correctFeedback: "Excellent! 'Hadn't downloaded' shows the software issue occurred before class confusion!",
            correctFeedbackRu: "Отлично! 'Hadn't downloaded' показывает, что проблема с программным обеспечением произошла до путаницы на занятии!",
            incorrectFeedback: "Use 'hadn't downloaded' because not getting the software happened before the confusing class.",
            incorrectFeedbackRu: "Используйте 'hadn't downloaded', потому что отсутствие программного обеспечения произошло до запутанного занятия."
        },
        {
            question: "Fill in the gap with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The group project succeeded because we ____ our roles clearly from the beginning.",
            correctAnswer: "had defined",
            options: ["had defined", "have defined", "defined", "were defining"],
            correctFeedback: "Perfect! 'Had defined' shows role clarification occurred before project success!",
            correctFeedbackRu: "Отлично! 'Had defined' показывает, что прояснение ролей произошло до успеха проекта!",
            incorrectFeedback: "Try 'had defined' because establishing roles happened before the group project succeeded.",
            incorrectFeedbackRu: "Попробуйте 'had defined', потому что установление ролей произошло до успеха группового проекта."
        },
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "I felt confident during the presentation because I ____ my speech multiple times.",
            correctAnswer: "had practiced",
            options: ["had practiced", "have practiced", "practiced", "was practicing"],
            correctFeedback: "Great! 'Had practiced' shows the rehearsal occurred before feeling confident during presentation!",
            correctFeedbackRu: "Отлично! 'Had practiced' показывает, что репетиция произошла до чувства уверенности во время презентации!",
            incorrectFeedback: "Use 'had practiced' because rehearsing the speech happened before presentation confidence.",
            incorrectFeedbackRu: "Используйте 'had practiced', потому что репетиция речи произошла до уверенности в презентации."
        },
        {
            question: "Fill in the blank with the correct past perfect construction:",
            questionRu: "Заполните пропуск правильной конструкцией Past Perfect:",
            sentence: "The research paper was rejected because the student ____ proper citations.",
            correctAnswer: "hadn't included",
            options: ["hadn't included", "haven't included", "didn't include", "wasn't including"],
            correctFeedback: "Excellent! 'Hadn't included' shows the citation error occurred before paper rejection!",
            correctFeedbackRu: "Отлично! 'Hadn't included' показывает, что ошибка с цитированием произошла до отклонения работы!",
            incorrectFeedback: "Try 'hadn't included' because missing citations happened before the paper was rejected.",
            incorrectFeedbackRu: "Попробуйте 'hadn't included', потому что отсутствие цитат произошло до отклонения работы."
        }
    ]
};

/* ============================================
Page 4: Past Perfect - Sequence: Technology and Digital Life
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-gap-page4'] = {
    title: "Past Perfect - Sequence: Technology and Digital Life",
    fillGaps: [
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The smartphone stopped working because I ____ too many apps simultaneously.",
            correctAnswer: "had opened",
            options: ["had opened", "have opened", "opened", "was opening"],
            correctFeedback: "Excellent! 'Had opened' shows opening multiple apps occurred before the phone stopped working!",
            correctFeedbackRu: "Отлично! 'Had opened' показывает, что открытие множества приложений произошло до остановки работы телефона!",
            incorrectFeedback: "Use 'had opened' because opening too many apps happened before the smartphone malfunctioned.",
            incorrectFeedbackRu: "Используйте 'had opened', потому что открытие слишком многих приложений произошло до сбоя смартфона."
        },
        {
            question: "Fill in the blank with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "I lost all my documents because I ____ them to the cloud storage.",
            correctAnswer: "hadn't uploaded",
            options: ["hadn't uploaded", "haven't uploaded", "didn't upload", "wasn't uploading"],
            correctFeedback: "Perfect! 'Hadn't uploaded' shows the lack of backup occurred before losing documents!",
            correctFeedbackRu: "Отлично! 'Hadn't uploaded' показывает, что отсутствие резервной копии произошло до потери документов!",
            incorrectFeedback: "Try 'hadn't uploaded' because not backing up files happened before losing all documents.",
            incorrectFeedbackRu: "Попробуйте 'hadn't uploaded', потому что отсутствие резервного копирования произошло до потери всех документов."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The video call was a disaster because participants ____ their microphones properly.",
            correctAnswer: "hadn't configured",
            options: ["hadn't configured", "haven't configured", "didn't configure", "weren't configuring"],
            correctFeedback: "Great! 'Hadn't configured' shows the setup problems occurred before the disastrous call!",
            correctFeedbackRu: "Отлично! 'Hadn't configured' показывает, что проблемы с настройкой произошли до катастрофического звонка!",
            incorrectFeedback: "Use 'hadn't configured' because microphone setup issues happened before the call disaster.",
            incorrectFeedbackRu: "Используйте 'hadn't configured', потому что проблемы с настройкой микрофона произошли до катастрофы звонка."
        },
        {
            question: "Fill in the gap with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The website crashed during the sale because developers ____ for high traffic volume.",
            correctAnswer: "hadn't prepared",
            options: ["hadn't prepared", "haven't prepared", "didn't prepare", "weren't preparing"],
            correctFeedback: "Excellent! 'Hadn't prepared' shows the lack of preparation occurred before the website crash!",
            correctFeedbackRu: "Отлично! 'Hadn't prepared' показывает, что отсутствие подготовки произошло до краха веб-сайта!",
            incorrectFeedback: "Try 'hadn't prepared' because insufficient preparation happened before the website crashed.",
            incorrectFeedbackRu: "Попробуйте 'hadn't prepared', потому что недостаточная подготовка произошла до краха веб-сайта."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "My computer ran smoothly after I ____ the latest antivirus software.",
            correctAnswer: "had installed",
            options: ["had installed", "have installed", "installed", "was installing"],
            correctFeedback: "Perfect! 'Had installed' shows the software installation occurred before smooth computer performance!",
            correctFeedbackRu: "Отлично! 'Had installed' показывает, что установка программного обеспечения произошла до плавной работы компьютера!",
            incorrectFeedback: "Use 'had installed' because installing antivirus software happened before improved performance.",
            incorrectFeedbackRu: "Используйте 'had installed', потому что установка антивируса произошла до улучшения производительности."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The online order was delayed because the system ____ the wrong delivery address.",
            correctAnswer: "had processed",
            options: ["had processed", "have processed", "processed", "was processing"],
            correctFeedback: "Great! 'Had processed' shows the address error occurred before the delivery delay!",
            correctFeedbackRu: "Отлично! 'Had processed' показывает, что ошибка с адресом произошла до задержки доставки!",
            incorrectFeedback: "Try 'had processed' because processing wrong address happened before the order delay.",
            incorrectFeedbackRu: "Попробуйте 'had processed', потому что обработка неправильного адреса произошла до задержки заказа."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "I couldn't access my social media because hackers ____ my account overnight.",
            correctAnswer: "had hacked",
            options: ["had hacked", "have hacked", "hacked", "were hacking"],
            correctFeedback: "Excellent! 'Had hacked' shows the security breach occurred before being unable to access!",
            correctFeedbackRu: "Отлично! 'Had hacked' показывает, что нарушение безопасности произошло до невозможности доступа!",
            incorrectFeedback: "Use 'had hacked' because the security breach happened before you couldn't access your account.",
            incorrectFeedbackRu: "Используйте 'had hacked', потому что нарушение безопасности произошло до того, как вы не смогли получить доступ к аккаунту."
        },
        {
            question: "Fill in the gap with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The presentation looked professional because I ____ high-quality graphics.",
            correctAnswer: "had created",
            options: ["had created", "have created", "created", "was creating"],
            correctFeedback: "Perfect! 'Had created' shows the graphic creation occurred before the professional presentation!",
            correctFeedbackRu: "Отлично! 'Had created' показывает, что создание графики произошло до профессиональной презентации!",
            incorrectFeedback: "Try 'had created' because making quality graphics happened before the professional presentation.",
            incorrectFeedbackRu: "Попробуйте 'had created', потому что создание качественной графики произошло до профессиональной презентации."
        },
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The gaming session was frustrating because I ____ to update my graphics drivers.",
            correctAnswer: "had forgotten",
            options: ["had forgotten", "have forgotten", "forgot", "was forgetting"],
            correctFeedback: "Great! 'Had forgotten' shows forgetting the update occurred before the frustrating gaming!",
            correctFeedbackRu: "Отлично! 'Had forgotten' показывает, что забывание обновления произошло до фрустрирующей игры!",
            incorrectFeedback: "Use 'had forgotten' because not updating drivers happened before the gaming frustration.",
            incorrectFeedbackRu: "Используйте 'had forgotten', потому что необновление драйверов произошло до фрустрации в игре."
        },
        {
            question: "Fill in the blank with the correct past perfect construction:",
            questionRu: "Заполните пропуск правильной конструкцией Past Perfect:",
            sentence: "The email went to spam because I ____ the sender to my contact list.",
            correctAnswer: "hadn't added",
            options: ["hadn't added", "haven't added", "didn't add", "wasn't adding"],
            correctFeedback: "Excellent! 'Hadn't added' shows not adding contacts occurred before emails going to spam!",
            correctFeedbackRu: "Отлично! 'Hadn't added' показывает, что неподключение контактов произошло до попадания писем в спам!",
            incorrectFeedback: "Try 'hadn't added' because not adding the sender happened before the spam filtering.",
            incorrectFeedbackRu: "Попробуйте 'hadn't added', потому что неподключение отправителя произошло до фильтрации спама."
        }
    ]
};

/* ============================================
Page 5: Past Perfect - Sequence: Health and Lifestyle Choices
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-gap-page5'] = {
    title: "Past Perfect - Sequence: Health and Lifestyle Choices",
    fillGaps: [
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "I felt energetic all day because I ____ eight hours of quality sleep.",
            correctAnswer: "had gotten",
            options: ["had gotten", "have gotten", "got", "was getting"],
            correctFeedback: "Excellent! 'Had gotten' shows getting good sleep occurred before feeling energetic all day!",
            correctFeedbackRu: "Отлично! 'Had gotten' показывает, что хороший сон произошел до чувства бодрости весь день!",
            incorrectFeedback: "Use 'had gotten' because sleeping well happened before having energy throughout the day.",
            incorrectFeedbackRu: "Используйте 'had gotten', потому что хороший сон произошел до наличия энергии в течение дня."
        },
        {
            question: "Fill in the blank with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The doctor was concerned because I ____ my medication for several days.",
            correctAnswer: "hadn't taken",
            options: ["hadn't taken", "haven't taken", "didn't take", "wasn't taking"],
            correctFeedback: "Perfect! 'Hadn't taken' shows missing medication occurred before the doctor's concern!",
            correctFeedbackRu: "Отлично! 'Hadn't taken' показывает, что пропуск лекарства произошел до беспокойства врача!",
            incorrectFeedback: "Try 'hadn't taken' because skipping medication happened before the doctor became concerned.",
            incorrectFeedbackRu: "Попробуйте 'hadn't taken', потому что пропуск лекарства произошел до того, как врач забеспокоился."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "My back pain improved significantly after I ____ ergonomic office furniture.",
            correctAnswer: "had purchased",
            options: ["had purchased", "have purchased", "purchased", "was purchasing"],
            correctFeedback: "Great! 'Had purchased' shows buying furniture occurred before back pain improvement!",
            correctFeedbackRu: "Отлично! 'Had purchased' показывает, что покупка мебели произошла до улучшения боли в спине!",
            incorrectFeedback: "Use 'had purchased' because buying ergonomic furniture happened before pain relief.",
            incorrectFeedbackRu: "Используйте 'had purchased', потому что покупка эргономичной мебели произошла до облегчения боли."
        },
        {
            question: "Fill in the gap with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "I avoided getting sick this winter because I ____ the flu vaccination early.",
            correctAnswer: "had received",
            options: ["had received", "have received", "received", "was receiving"],
            correctFeedback: "Excellent! 'Had received' shows vaccination occurred before avoiding illness this winter!",
            correctFeedbackRu: "Отлично! 'Had received' показывает, что вакцинация произошла до избежания болезни этой зимой!",
            incorrectFeedback: "Try 'had received' because getting vaccinated happened before staying healthy this winter.",
            incorrectFeedbackRu: "Попробуйте 'had received', потому что вакцинация произошла до сохранения здоровья этой зимой."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "The fitness program was effective because I ____ realistic goals from the start.",
            correctAnswer: "had set",
            options: ["had set", "have set", "set", "was setting"],
            correctFeedback: "Perfect! 'Had set' shows goal setting occurred before program effectiveness!",
            correctFeedbackRu: "Отлично! 'Had set' показывает, что постановка целей произошла до эффективности программы!",
            incorrectFeedback: "Use 'had set' because establishing goals happened before the fitness program's success.",
            incorrectFeedbackRu: "Используйте 'had set', потому что установление целей произошло до успеха фитнес-программы."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "I gained weight during the holidays because I ____ my diet completely.",
            correctAnswer: "had abandoned",
            options: ["had abandoned", "have abandoned", "abandoned", "was abandoning"],
            correctFeedback: "Great! 'Had abandoned' shows abandoning diet occurred before holiday weight gain!",
            correctFeedbackRu: "Отлично! 'Had abandoned' показывает, что забрасывание диеты произошло до набора веса на праздниках!",
            incorrectFeedback: "Try 'had abandoned' because giving up the diet happened before gaining holiday weight.",
            incorrectFeedbackRu: "Попробуйте 'had abandoned', потому что отказ от диеты произошел до набора праздничного веса."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The surgery was successful because the patient ____ all pre-operative instructions.",
            correctAnswer: "had followed",
            options: ["had followed", "have followed", "followed", "was following"],
            correctFeedback: "Excellent! 'Had followed' shows following instructions occurred before surgical success!",
            correctFeedbackRu: "Отлично! 'Had followed' показывает, что следование инструкциям произошло до успеха операции!",
            incorrectFeedback: "Use 'had followed' because obeying instructions happened before the successful surgery.",
            incorrectFeedbackRu: "Используйте 'had followed', потому что следование инструкциям произошло до успешной операции."
        },
        {
            question: "Fill in the gap with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "My stress levels decreased after I ____ meditation into my daily routine.",
            correctAnswer: "had incorporated",
            options: ["had incorporated", "have incorporated", "incorporated", "was incorporating"],
            correctFeedback: "Perfect! 'Had incorporated' shows adding meditation occurred before stress reduction!",
            correctFeedbackRu: "Отлично! 'Had incorporated' показывает, что добавление медитации произошло до снижения стресса!",
            incorrectFeedback: "Try 'had incorporated' because adding meditation happened before stress level improvement.",
            incorrectFeedbackRu: "Попробуйте 'had incorporated', потому что добавление медитации произошло до улучшения уровня стресса."
        },
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The athlete's performance improved dramatically after she ____ her training regimen.",
            correctAnswer: "had modified",
            options: ["had modified", "have modified", "modified", "was modifying"],
            correctFeedback: "Great! 'Had modified' shows training changes occurred before performance improvement!",
            correctFeedbackRu: "Отлично! 'Had modified' показывает, что изменения в тренировках произошли до улучшения результатов!",
            incorrectFeedback: "Use 'had modified' because changing training happened before the performance improvement.",
            incorrectFeedbackRu: "Используйте 'had modified', потому что изменение тренировок произошло до улучшения результатов."
        },
        {
            question: "Fill in the blank with the correct past perfect construction:",
            questionRu: "Заполните пропуск правильной конструкцией Past Perfect:",
            sentence: "I felt dizzy during the workout because I ____ properly before exercising.",
            correctAnswer: "hadn't hydrated",
            options: ["hadn't hydrated", "haven't hydrated", "didn't hydrate", "wasn't hydrating"],
            correctFeedback: "Excellent! 'Hadn't hydrated' shows lack of hydration occurred before feeling dizzy!",
            correctFeedbackRu: "Отлично! 'Hadn't hydrated' показывает, что отсутствие гидратации произошло до головокружения!",
            incorrectFeedback: "Try 'hadn't hydrated' because not drinking enough happened before the dizzy workout.",
            incorrectFeedbackRu: "Попробуйте 'hadn't hydrated', потому что недостаточное питье произошло до головокружения на тренировке."
        }
    ]
};

/* ============================================
Page 6: Past Perfect - Sequence: Travel and Adventure Experiences
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-gap-page6'] = {
    title: "Past Perfect - Sequence: Travel and Adventure Experiences",
    fillGaps: [
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The flight was delayed because severe weather ____ the airport earlier.",
            correctAnswer: "had affected",
            options: ["had affected", "have affected", "affected", "was affecting"],
            correctFeedback: "Excellent! 'Had affected' shows weather impact occurred before flight delay!",
            correctFeedbackRu: "Отлично! 'Had affected' показывает, что воздействие погоды произошло до задержки рейса!",
            incorrectFeedback: "Use 'had affected' because bad weather happened before the flight was delayed.",
            incorrectFeedbackRu: "Используйте 'had affected', потому что плохая погода произошла до задержки рейса."
        },
        {
            question: "Fill in the blank with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "I couldn't board the cruise ship because I ____ my passport at the hotel.",
            correctAnswer: "had left",
            options: ["had left", "have left", "left", "was leaving"],
            correctFeedback: "Perfect! 'Had left' shows leaving the passport occurred before being unable to board!",
            correctFeedbackRu: "Отлично! 'Had left' показывает, что оставление паспорта произошло до невозможности сесть на корабль!",
            incorrectFeedback: "Try 'had left' because leaving the passport at the hotel happened before boarding problems.",
            incorrectFeedbackRu: "Попробуйте 'had left', потому что оставление паспорта в отеле произошло до проблем с посадкой."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The guided tour was informative because the guide ____ extensive local research.",
            correctAnswer: "had conducted",
            options: ["had conducted", "have conducted", "conducted", "was conducting"],
            correctFeedback: "Great! 'Had conducted' shows research occurred before the informative tour!",
            correctFeedbackRu: "Отлично! 'Had conducted' показывает, что исследование произошло до информативного тура!",
            incorrectFeedback: "Use 'had conducted' because doing research happened before the informative guided tour.",
            incorrectFeedbackRu: "Используйте 'had conducted', потому что проведение исследования произошло до информативного экскурсионного тура."
        },
        {
            question: "Fill in the gap with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "We missed the sunrise hike because our alarm clock ____ during the night.",
            correctAnswer: "had malfunctioned",
            options: ["had malfunctioned", "have malfunctioned", "malfunctioned", "was malfunctioning"],
            correctFeedback: "Excellent! 'Had malfunctioned' shows alarm failure occurred before missing the hike!",
            correctFeedbackRu: "Отлично! 'Had malfunctioned' показывает, что сбой будильника произошел до пропуска похода!",
            incorrectFeedback: "Try 'had malfunctioned' because alarm failure happened before missing the sunrise hike.",
            incorrectFeedbackRu: "Попробуйте 'had malfunctioned', потому что сбой будильника произошел до пропуска рассветного похода."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "The camping trip was comfortable because we ____ high-quality equipment in advance.",
            correctAnswer: "had purchased",
            options: ["had purchased", "have purchased", "purchased", "was purchasing"],
            correctFeedback: "Perfect! 'Had purchased' shows equipment buying occurred before comfortable camping!",
            correctFeedbackRu: "Отлично! 'Had purchased' показывает, что покупка снаряжения произошла до комфортного кемпинга!",
            incorrectFeedback: "Use 'had purchased' because buying equipment happened before the comfortable trip.",
            incorrectFeedbackRu: "Используйте 'had purchased', потому что покупка снаряжения произошла до комфортной поездки."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "I felt sick on the boat because I ____ motion sickness medication.",
            correctAnswer: "hadn't taken",
            options: ["hadn't taken", "haven't taken", "didn't take", "wasn't taking"],
            correctFeedback: "Great! 'Hadn't taken' shows missing medication occurred before feeling sick on boat!",
            correctFeedbackRu: "Отлично! 'Hadn't taken' показывает, что пропуск лекарства произошел до плохого самочувствия на лодке!",
            incorrectFeedback: "Try 'hadn't taken' because not taking medication happened before boat sickness.",
            incorrectFeedbackRu: "Попробуйте 'hadn't taken', потому что непринятие лекарства произошло до морской болезни."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The mountain climb was successful because the team ____ together for months.",
            correctAnswer: "had trained",
            options: ["had trained", "have trained", "trained", "was training"],
            correctFeedback: "Excellent! 'Had trained' shows months of training occurred before successful climb!",
            correctFeedbackRu: "Отлично! 'Had trained' показывает, что месяцы тренировок произошли до успешного восхождения!",
            incorrectFeedback: "Use 'had trained' because months of preparation happened before the successful climb.",
            incorrectFeedbackRu: "Используйте 'had trained', потому что месяцы подготовки произошли до успешного восхождения."
        },
        {
            question: "Fill in the gap with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "We couldn't find our hotel because the taxi driver ____ us to the wrong address.",
            correctAnswer: "had taken",
            options: ["had taken", "have taken", "took", "was taking"],
            correctFeedback: "Perfect! 'Had taken' shows wrong direction occurred before being unable to find hotel!",
            correctFeedbackRu: "Отлично! 'Had taken' показывает, что неправильное направление произошло до невозможности найти отель!",
            incorrectFeedback: "Try 'had taken' because going to wrong address happened before hotel search problems.",
            incorrectFeedbackRu: "Попробуйте 'had taken', потому что поездка по неправильному адресу произошла до проблем поиска отеля."
        },
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The safari experience was amazing because our guide ____ wildlife behavior extensively.",
            correctAnswer: "had studied",
            options: ["had studied", "have studied", "studied", "was studying"],
            correctFeedback: "Great! 'Had studied' shows wildlife study occurred before amazing safari experience!",
            correctFeedbackRu: "Отлично! 'Had studied' показывает, что изучение дикой природы произошло до удивительного сафари!",
            incorrectFeedback: "Use 'had studied' because learning about wildlife happened before the amazing safari.",
            incorrectFeedbackRu: "Используйте 'had studied', потому что изучение дикой природы произошло до удивительного сафари."
        },
        {
            question: "Fill in the blank with the correct past perfect construction:",
            questionRu: "Заполните пропуск правильной конструкцией Past Perfect:",
            sentence: "The beach vacation was disappointing because we ____ about the construction work.",
            correctAnswer: "hadn't known",
            options: ["hadn't known", "haven't known", "didn't know", "weren't knowing"],
            correctFeedback: "Excellent! 'Hadn't known' shows lack of information occurred before vacation disappointment!",
            correctFeedbackRu: "Отлично! 'Hadn't known' показывает, что отсутствие информации произошло до разочарования отпуском!",
            incorrectFeedback: "Try 'hadn't known' because not knowing about construction happened before disappointment.",
            incorrectFeedbackRu: "Попробуйте 'hadn't known', потому что незнание о строительстве произошло до разочарования."
        }
    ]
};

/* ============================================
Page 7: Past Perfect - Sequence: Business and Professional Development
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-gap-page7'] = {
    title: "Past Perfect - Sequence: Business and Professional Development",
    fillGaps: [
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The startup secured funding because the founders ____ a compelling business model.",
            correctAnswer: "had developed",
            options: ["had developed", "have developed", "developed", "were developing"],
            correctFeedback: "Excellent! 'Had developed' shows business model creation occurred before securing funding!",
            correctFeedbackRu: "Отлично! 'Had developed' показывает, что создание бизнес-модели произошло до получения финансирования!",
            incorrectFeedback: "Use 'had developed' because creating the business model happened before getting funding.",
            incorrectFeedbackRu: "Используйте 'had developed', потому что создание бизнес-модели произошло до получения финансирования."
        },
        {
            question: "Fill in the blank with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The merger was approved after both companies ____ their financial records.",
            correctAnswer: "had audited",
            options: ["had audited", "have audited", "audited", "were auditing"],
            correctFeedback: "Perfect! 'Had audited' shows financial review occurred before merger approval!",
            correctFeedbackRu: "Отлично! 'Had audited' показывает, что финансовая проверка произошла до одобрения слияния!",
            incorrectFeedback: "Try 'had audited' because reviewing finances happened before the merger was approved.",
            incorrectFeedbackRu: "Попробуйте 'had audited', потому что проверка финансов произошла до одобрения слияния."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The product launch failed because the team ____ adequate market research.",
            correctAnswer: "hadn't conducted",
            options: ["hadn't conducted", "haven't conducted", "didn't conduct", "weren't conducting"],
            correctFeedback: "Great! 'Hadn't conducted' shows lack of research occurred before launch failure!",
            correctFeedbackRu: "Отлично! 'Hadn't conducted' показывает, что отсутствие исследований произошло до провала запуска!",
            incorrectFeedback: "Use 'hadn't conducted' because insufficient research happened before the product launch failed.",
            incorrectFeedbackRu: "Используйте 'hadn't conducted', потому что недостаточное исследование произошло до провала запуска продукта."
        },
        {
            question: "Fill in the gap with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The contract negotiations succeeded because both parties ____ their objectives clearly.",
            correctAnswer: "had defined",
            options: ["had defined", "have defined", "defined", "were defining"],
            correctFeedback: "Excellent! 'Had defined' shows objective clarification occurred before successful negotiations!",
            correctFeedbackRu: "Отлично! 'Had defined' показывает, что прояснение целей произошло до успешных переговоров!",
            incorrectFeedback: "Try 'had defined' because clarifying objectives happened before negotiation success.",
            incorrectFeedbackRu: "Попробуйте 'had defined', потому что прояснение целей произошло до успеха переговоров."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "The quarterly report was delayed because the accountant ____ several calculation errors.",
            correctAnswer: "had discovered",
            options: ["had discovered", "have discovered", "discovered", "was discovering"],
            correctFeedback: "Perfect! 'Had discovered' shows error detection occurred before report delay!",
            correctFeedbackRu: "Отлично! 'Had discovered' показывает, что обнаружение ошибок произошло до задержки отчета!",
            incorrectFeedback: "Use 'had discovered' because finding errors happened before the report was delayed.",
            incorrectFeedbackRu: "Используйте 'had discovered', потому что обнаружение ошибок произошло до задержки отчета."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The company went bankrupt because management ____ risky investments without approval.",
            correctAnswer: "had made",
            options: ["had made", "have made", "made", "were making"],
            correctFeedback: "Great! 'Had made' shows risky investments occurred before bankruptcy!",
            correctFeedbackRu: "Отлично! 'Had made' показывает, что рискованные инвестиции произошли до банкротства!",
            incorrectFeedback: "Try 'had made' because making risky investments happened before the company went bankrupt.",
            incorrectFeedbackRu: "Попробуйте 'had made', потому что рискованные инвестиции произошли до банкротства компании."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The promotion was well-deserved because she ____ exceptional performance for years.",
            correctAnswer: "had demonstrated",
            options: ["had demonstrated", "have demonstrated", "demonstrated", "was demonstrating"],
            correctFeedback: "Excellent! 'Had demonstrated' shows years of performance occurred before promotion!",
            correctFeedbackRu: "Отлично! 'Had demonstrated' показывает, что годы результативности произошли до повышения!",
            incorrectFeedback: "Use 'had demonstrated' because showing performance happened before earning the promotion.",
            incorrectFeedbackRu: "Используйте 'had demonstrated', потому что демонстрация результатов произошла до получения повышения."
        },
        {
            question: "Fill in the gap with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The client was satisfied because we ____ all their requirements on time.",
            correctAnswer: "had fulfilled",
            options: ["had fulfilled", "have fulfilled", "fulfilled", "were fulfilling"],
            correctFeedback: "Perfect! 'Had fulfilled' shows requirement completion occurred before client satisfaction!",
            correctFeedbackRu: "Отлично! 'Had fulfilled' показывает, что выполнение требований произошло до удовлетворения клиента!",
            incorrectFeedback: "Try 'had fulfilled' because meeting requirements happened before client satisfaction.",
            incorrectFeedbackRu: "Попробуйте 'had fulfilled', потому что выполнение требований произошло до удовлетворения клиента."
        },
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The workplace accident happened because safety protocols ____ properly.",
            correctAnswer: "hadn't been followed",
            options: ["hadn't been followed", "haven't been followed", "weren't followed", "aren't followed"],
            correctFeedback: "Great! 'Hadn't been followed' shows protocol violation occurred before the accident!",
            correctFeedbackRu: "Отлично! 'Hadn't been followed' показывает, что нарушение протокола произошло до несчастного случая!",
            incorrectFeedback: "Use 'hadn't been followed' because ignoring safety happened before the workplace accident.",
            incorrectFeedbackRu: "Используйте 'hadn't been followed', потому что игнорирование безопасности произошло до несчастного случая на работе."
        },
        {
            question: "Fill in the blank with the correct past perfect construction:",
            questionRu: "Заполните пропуск правильной конструкцией Past Perfect:",
            sentence: "The business partnership dissolved because one partner ____ company funds.",
            correctAnswer: "had misappropriated",
            options: ["had misappropriated", "have misappropriated", "misappropriated", "was misappropriating"],
            correctFeedback: "Excellent! 'Had misappropriated' shows fund misuse occurred before partnership dissolution!",
            correctFeedbackRu: "Отлично! 'Had misappropriated' показывает, что нецелевое использование средств произошло до расторжения партнерства!",
            incorrectFeedback: "Try 'had misappropriated' because misusing funds happened before the partnership ended.",
            incorrectFeedbackRu: "Попробуйте 'had misappropriated', потому что нецелевое использование средств произошло до окончания партнерства."
        }
    ]
};

/* ============================================
Page 8: Past Perfect - Sequence: Entertainment and Cultural Events
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-gap-page8'] = {
    title: "Past Perfect - Sequence: Entertainment and Cultural Events",
    fillGaps: [
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The concert was cancelled because the lead vocalist ____ her voice during rehearsal.",
            correctAnswer: "had strained",
            options: ["had strained", "have strained", "strained", "was straining"],
            correctFeedback: "Excellent! 'Had strained' shows vocal injury occurred before concert cancellation!",
            correctFeedbackRu: "Отлично! 'Had strained' показывает, что травма голоса произошла до отмены концерта!",
            incorrectFeedback: "Use 'had strained' because injuring her voice happened before the concert was cancelled.",
            incorrectFeedbackRu: "Используйте 'had strained', потому что травма голоса произошла до отмены концерта."
        },
        {
            question: "Fill in the blank with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The movie premiere was a success because the director ____ a talented cast.",
            correctAnswer: "had assembled",
            options: ["had assembled", "have assembled", "assembled", "was assembling"],
            correctFeedback: "Perfect! 'Had assembled' shows cast selection occurred before premiere success!",
            correctFeedbackRu: "Отлично! 'Had assembled' показывает, что подбор актеров произошел до успеха премьеры!",
            incorrectFeedback: "Try 'had assembled' because choosing actors happened before the successful premiere.",
            incorrectFeedbackRu: "Попробуйте 'had assembled', потому что выбор актеров произошел до успешной премьеры."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The theater production was a disaster because the actors ____ their lines adequately.",
            correctAnswer: "hadn't rehearsed",
            options: ["hadn't rehearsed", "haven't rehearsed", "didn't rehearse", "weren't rehearsing"],
            correctFeedback: "Great! 'Hadn't rehearsed' shows inadequate preparation occurred before production disaster!",
            correctFeedbackRu: "Отлично! 'Hadn't rehearsed' показывает, что неадекватная подготовка произошла до катастрофы постановки!",
            incorrectFeedback: "Use 'hadn't rehearsed' because insufficient practice happened before the theater disaster.",
            incorrectFeedbackRu: "Используйте 'hadn't rehearsed', потому что недостаточная практика произошла до театральной катастрофы."
        },
        {
            question: "Fill in the gap with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The art exhibition was impressive because the curator ____ pieces from renowned artists.",
            correctAnswer: "had selected",
            options: ["had selected", "have selected", "selected", "was selecting"],
            correctFeedback: "Excellent! 'Had selected' shows artwork curation occurred before impressive exhibition!",
            correctFeedbackRu: "Отлично! 'Had selected' показывает, что кураторство произведений искусства произошло до впечатляющей выставки!",
            incorrectFeedback: "Try 'had selected' because choosing artworks happened before the impressive exhibition.",
            incorrectFeedbackRu: "Попробуйте 'had selected', потому что выбор произведений искусства произошел до впечатляющей выставки."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "The music festival was postponed because organizers ____ necessary permits.",
            correctAnswer: "hadn't obtained",
            options: ["hadn't obtained", "haven't obtained", "didn't obtain", "weren't obtaining"],
            correctFeedback: "Perfect! 'Hadn't obtained' shows permit issues occurred before festival postponement!",
            correctFeedbackRu: "Отлично! 'Hadn't obtained' показывает, что проблемы с разрешениями произошли до отсрочки фестиваля!",
            incorrectFeedback: "Use 'hadn't obtained' because missing permits happened before the festival was postponed.",
            incorrectFeedbackRu: "Используйте 'hadn't obtained', потому что отсутствие разрешений произошло до отсрочки фестиваля."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The dance performance was flawless because the troupe ____ for months.",
            correctAnswer: "had practiced",
            options: ["had practiced", "have practiced", "practiced", "was practicing"],
            correctFeedback: "Great! 'Had practiced' shows months of preparation occurred before flawless performance!",
            correctFeedbackRu: "Отлично! 'Had practiced' показывает, что месяцы подготовки произошли до безупречного выступления!",
            incorrectFeedback: "Try 'had practiced' because months of training happened before the flawless performance.",
            incorrectFeedbackRu: "Попробуйте 'had practiced', потому что месяцы тренировок произошли до безупречного выступления."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The comedy show was hilarious because the comedian ____ fresh material specifically for the audience.",
            correctAnswer: "had written",
            options: ["had written", "have written", "wrote", "was writing"],
            correctFeedback: "Excellent! 'Had written' shows material creation occurred before hilarious show!",
            correctFeedbackRu: "Отлично! 'Had written' показывает, что создание материала произошло до веселого шоу!",
            incorrectFeedback: "Use 'had written' because creating new material happened before the hilarious comedy show.",
            incorrectFeedbackRu: "Используйте 'had written', потому что создание нового материала произошло до веселого комедийного шоу."
        },
        {
            question: "Fill in the gap with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The opera singer received a standing ovation because she ____ her technique over decades.",
            correctAnswer: "had perfected",
            options: ["had perfected", "have perfected", "perfected", "was perfecting"],
            correctFeedback: "Perfect! 'Had perfected' shows decades of improvement occurred before standing ovation!",
            correctFeedbackRu: "Отлично! 'Had perfected' показывает, что десятилетия совершенствования произошли до стоячих оваций!",
            incorrectFeedback: "Try 'had perfected' because decades of improvement happened before the standing ovation.",
            incorrectFeedbackRu: "Попробуйте 'had perfected', потому что десятилетия совершенствования произошли до стоячих оваций."
        },
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The book launch was successful because the author ____ a strong online presence.",
            correctAnswer: "had built",
            options: ["had built", "have built", "built", "was building"],
            correctFeedback: "Great! 'Had built' shows online presence development occurred before successful book launch!",
            correctFeedbackRu: "Отлично! 'Had built' показывает, что развитие онлайн-присутствия произошло до успешного запуска книги!",
            incorrectFeedback: "Use 'had built' because developing online presence happened before the successful book launch.",
            incorrectFeedbackRu: "Используйте 'had built', потому что развитие онлайн-присутствия произошло до успешного запуска книги."
        },
        {
            question: "Fill in the blank with the correct past perfect construction:",
            questionRu: "Заполните пропуск правильной конструкцией Past Perfect:",
            sentence: "The film festival entry was rejected because the filmmaker ____ to the submission guidelines.",
            correctAnswer: "hadn't adhered",
            options: ["hadn't adhered", "haven't adhered", "didn't adhere", "wasn't adhering"],
            correctFeedback: "Excellent! 'Hadn't adhered' shows guideline violation occurred before festival rejection!",
            correctFeedbackRu: "Отлично! 'Hadn't adhered' показывает, что нарушение правил произошло до отклонения на фестивале!",
            incorrectFeedback: "Try 'hadn't adhered' because not following guidelines happened before the festival rejection.",
            incorrectFeedbackRu: "Попробуйте 'hadn't adhered', потому что несоблюдение правил произошло до отклонения на фестивале."
        }
    ]
};

/* ============================================
Page 9: Past Perfect - Sequence: Environmental and Social Impact
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-gap-page9'] = {
    title: "Past Perfect - Sequence: Environmental and Social Impact",
    fillGaps: [
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The city experienced severe flooding because developers ____ too many natural wetlands.",
            correctAnswer: "had destroyed",
            options: ["had destroyed", "have destroyed", "destroyed", "were destroying"],
            correctFeedback: "Excellent! 'Had destroyed' shows wetland destruction occurred before severe flooding!",
            correctFeedbackRu: "Отлично! 'Had destroyed' показывает, что уничтожение болот произошло до сильного наводнения!",
            incorrectFeedback: "Use 'had destroyed' because destroying wetlands happened before the city experienced flooding.",
            incorrectFeedbackRu: "Используйте 'had destroyed', потому что уничтожение болот произошло до того, как город пережил наводнение."
        },
        {
            question: "Fill in the blank with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The community garden flourished because volunteers ____ the soil with organic compost.",
            correctAnswer: "had enriched",
            options: ["had enriched", "have enriched", "enriched", "were enriching"],
            correctFeedback: "Perfect! 'Had enriched' shows soil preparation occurred before garden flourishing!",
            correctFeedbackRu: "Отлично! 'Had enriched' показывает, что подготовка почвы произошла до процветания сада!",
            incorrectFeedback: "Try 'had enriched' because improving soil happened before the community garden flourished.",
            incorrectFeedbackRu: "Попробуйте 'had enriched', потому что улучшение почвы произошло до процветания общественного сада."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "Air quality improved dramatically after the government ____ stricter emission standards.",
            correctAnswer: "had implemented",
            options: ["had implemented", "have implemented", "implemented", "was implementing"],
            correctFeedback: "Great! 'Had implemented' shows policy introduction occurred before air quality improvement!",
            correctFeedbackRu: "Отлично! 'Had implemented' показывает, что внедрение политики произошло до улучшения качества воздуха!",
            incorrectFeedback: "Use 'had implemented' because introducing standards happened before air quality improved.",
            incorrectFeedbackRu: "Используйте 'had implemented', потому что введение стандартов произошло до улучшения качества воздуха."
        },
        {
            question: "Fill in the gap with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The recycling program succeeded because citizens ____ properly educated about waste separation.",
            correctAnswer: "had been",
            options: ["had been", "have been", "were", "are"],
            correctFeedback: "Excellent! 'Had been' shows education occurred before program success!",
            correctFeedbackRu: "Отлично! 'Had been' показывает, что образование произошло до успеха программы!",
            incorrectFeedback: "Try 'had been' because educating citizens happened before the recycling program succeeded.",
            incorrectFeedbackRu: "Попробуйте 'had been', потому что обучение граждан произошло до успеха программы переработки."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "The wildlife sanctuary was established because conservationists ____ endangered species habitat.",
            correctAnswer: "had protected",
            options: ["had protected", "have protected", "protected", "were protecting"],
            correctFeedback: "Perfect! 'Had protected' shows habitat conservation occurred before sanctuary establishment!",
            correctFeedbackRu: "Отлично! 'Had protected' показывает, что охрана среды обитания произошла до создания заповедника!",
            incorrectFeedback: "Use 'had protected' because conserving habitat happened before establishing the sanctuary.",
            incorrectFeedbackRu: "Используйте 'had protected', потому что сохранение среды обитания произошло до создания заповедника."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The neighborhood improved significantly after residents ____ a community watch program.",
            correctAnswer: "had organized",
            options: ["had organized", "have organized", "organized", "were organizing"],
            correctFeedback: "Great! 'Had organized' shows community organizing occurred before neighborhood improvement!",
            correctFeedbackRu: "Отлично! 'Had organized' показывает, что организация сообщества произошла до улучшения района!",
            incorrectFeedback: "Try 'had organized' because creating the program happened before the neighborhood improved.",
            incorrectFeedbackRu: "Попробуйте 'had organized', потому что создание программы произошло до улучшения района."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The solar panel project was approved because engineers ____ its environmental benefits thoroughly.",
            correctAnswer: "had demonstrated",
            options: ["had demonstrated", "have demonstrated", "demonstrated", "were demonstrating"],
            correctFeedback: "Excellent! 'Had demonstrated' shows benefit proof occurred before project approval!",
            correctFeedbackRu: "Отлично! 'Had demonstrated' показывает, что доказательство выгод произошло до одобрения проекта!",
            incorrectFeedback: "Use 'had demonstrated' because proving benefits happened before the project was approved.",
            incorrectFeedbackRu: "Используйте 'had demonstrated', потому что доказательство выгод произошло до одобрения проекта."
        },
        {
            question: "Fill in the gap with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The forest recovered remarkably after scientists ____ invasive species from the ecosystem.",
            correctAnswer: "had removed",
            options: ["had removed", "have removed", "removed", "were removing"],
            correctFeedback: "Perfect! 'Had removed' shows species removal occurred before forest recovery!",
            correctFeedbackRu: "Отлично! 'Had removed' показывает, что удаление видов произошло до восстановления леса!",
            incorrectFeedback: "Try 'had removed' because eliminating invasive species happened before forest recovery.",
            incorrectFeedbackRu: "Попробуйте 'had removed', потому что устранение инвазивных видов произошло до восстановления леса."
        },
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "Public support for renewable energy increased after activists ____ awareness campaigns nationwide.",
            correctAnswer: "had launched",
            options: ["had launched", "have launched", "launched", "were launching"],
            correctFeedback: "Great! 'Had launched' shows campaign initiation occurred before increased public support!",
            correctFeedbackRu: "Отлично! 'Had launched' показывает, что запуск кампаний произошел до увеличения общественной поддержки!",
            incorrectFeedback: "Use 'had launched' because starting campaigns happened before public support increased.",
            incorrectFeedbackRu: "Используйте 'had launched', потому что запуск кампаний произошел до увеличения общественной поддержки."
        },
        {
            question: "Fill in the blank with the correct past perfect construction:",
            questionRu: "Заполните пропуск правильной конструкцией Past Perfect:",
            sentence: "The urban heat island effect was reduced because planners ____ more green spaces throughout the city.",
            correctAnswer: "had created",
            options: ["had created", "have created", "created", "were creating"],
            correctFeedback: "Excellent! 'Had created' shows green space development occurred before heat reduction!",
            correctFeedbackRu: "Отлично! 'Had created' показывает, что создание зеленых зон произошло до снижения жары!",
            incorrectFeedback: "Try 'had created' because developing green spaces happened before reducing the heat island effect.",
            incorrectFeedbackRu: "Попробуйте 'had created', потому что создание зеленых зон произошло до снижения эффекта теплового острова."
        }
    ]
};

/* ============================================
Page 10: Past Perfect - Sequence: Science and Innovation Breakthroughs
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-gap-page10'] = {
    title: "Past Perfect - Sequence: Science and Innovation Breakthroughs",
    fillGaps: [
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The vaccine was approved for public use after researchers ____ extensive clinical trials.",
            correctAnswer: "had completed",
            options: ["had completed", "have completed", "completed", "were completing"],
            correctFeedback: "Excellent! 'Had completed' shows trial completion occurred before vaccine approval!",
            correctFeedbackRu: "Отлично! 'Had completed' показывает, что завершение испытаний произошло до одобрения вакцины!",
            incorrectFeedback: "Use 'had completed' because finishing trials happened before the vaccine was approved.",
            incorrectFeedbackRu: "Используйте 'had completed', потому что завершение испытаний произошло до одобрения вакцины."
        },
        {
            question: "Fill in the blank with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The space mission succeeded because engineers ____ every possible failure scenario.",
            correctAnswer: "had analyzed",
            options: ["had analyzed", "have analyzed", "analyzed", "were analyzing"],
            correctFeedback: "Perfect! 'Had analyzed' shows scenario analysis occurred before mission success!",
            correctFeedbackRu: "Отлично! 'Had analyzed' показывает, что анализ сценариев произошел до успеха миссии!",
            incorrectFeedback: "Try 'had analyzed' because studying scenarios happened before the space mission succeeded.",
            incorrectFeedbackRu: "Попробуйте 'had analyzed', потому что изучение сценариев произошло до успеха космической миссии."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The Nobel Prize was awarded to the physicist because she ____ a groundbreaking theory.",
            correctAnswer: "had formulated",
            options: ["had formulated", "have formulated", "formulated", "was formulating"],
            correctFeedback: "Great! 'Had formulated' shows theory development occurred before Nobel Prize award!",
            correctFeedbackRu: "Отлично! 'Had formulated' показывает, что развитие теории произошло до награждения Нобелевской премией!",
            incorrectFeedback: "Use 'had formulated' because developing the theory happened before winning the Nobel Prize.",
            incorrectFeedbackRu: "Используйте 'had formulated', потому что разработка теории произошла до получения Нобелевской премии."
        },
        {
            question: "Fill in the gap with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The robot prototype malfunctioned because programmers ____ a critical software bug.",
            correctAnswer: "hadn't detected",
            options: ["hadn't detected", "haven't detected", "didn't detect", "weren't detecting"],
            correctFeedback: "Excellent! 'Hadn't detected' shows bug oversight occurred before robot malfunction!",
            correctFeedbackRu: "Отлично! 'Hadn't detected' показывает, что упущение бага произошло до сбоя робота!",
            incorrectFeedback: "Try 'hadn't detected' because missing the bug happened before the robot malfunctioned.",
            incorrectFeedbackRu: "Попробуйте 'hadn't detected', потому что пропуск бага произошел до сбоя робота."
        },
        {
            question: "Complete the sentence with the appropriate past perfect form:",
            questionRu: "Заполните предложение подходящей формой Past Perfect:",
            sentence: "The archaeological discovery was significant because researchers ____ advanced dating techniques.",
            correctAnswer: "had employed",
            options: ["had employed", "have employed", "employed", "were employing"],
            correctFeedback: "Perfect! 'Had employed' shows technique usage occurred before significant discovery!",
            correctFeedbackRu: "Отлично! 'Had employed' показывает, что использование техники произошло до значительного открытия!",
            incorrectFeedback: "Use 'had employed' because using techniques happened before the significant discovery.",
            incorrectFeedbackRu: "Используйте 'had employed', потому что использование техник произошло до значительного открытия."
        },
        {
            question: "Fill in the blank with the correct past perfect form:",
            questionRu: "Заполните пропуск правильной формой Past Perfect:",
            sentence: "The climate model proved accurate because scientists ____ decades of weather data.",
            correctAnswer: "had incorporated",
            options: ["had incorporated", "have incorporated", "incorporated", "were incorporating"],
            correctFeedback: "Great! 'Had incorporated' shows data integration occurred before model accuracy!",
            correctFeedbackRu: "Отлично! 'Had incorporated' показывает, что интеграция данных произошла до точности модели!",
            incorrectFeedback: "Try 'had incorporated' because including data happened before the model proved accurate.",
            incorrectFeedbackRu: "Попробуйте 'had incorporated', потому что включение данных произошло до того, как модель оказалась точной."
        },
        {
            question: "Complete the sentence with the correct past perfect construction:",
            questionRu: "Заполните предложение правильной конструкцией Past Perfect:",
            sentence: "The medical breakthrough was possible because the team ____ interdisciplinary collaboration.",
            correctAnswer: "had embraced",
            options: ["had embraced", "have embraced", "embraced", "was embracing"],
            correctFeedback: "Excellent! 'Had embraced' shows collaboration adoption occurred before medical breakthrough!",
            correctFeedbackRu: "Отлично! 'Had embraced' показывает, что принятие сотрудничества произошло до медицинского прорыва!",
            incorrectFeedback: "Use 'had embraced' because adopting collaboration happened before the medical breakthrough.",
            incorrectFeedbackRu: "Используйте 'had embraced', потому что принятие сотрудничества произошло до медицинского прорыва."
        },
        {
            question: "Fill in the gap with the appropriate past perfect form:",
            questionRu: "Заполните пропуск подходящей формой Past Perfect:",
            sentence: "The experiment yielded unexpected results because the laboratory ____ new measurement equipment.",
            correctAnswer: "had acquired",
            options: ["had acquired", "have acquired", "acquired", "was acquiring"],
            correctFeedback: "Perfect! 'Had acquired' shows equipment installation occurred before unexpected results!",
            correctFeedbackRu: "Отлично! 'Had acquired' показывает, что установка оборудования произошла до неожиданных результатов!",
            incorrectFeedback: "Try 'had acquired' because getting equipment happened before yielding unexpected results.",
            incorrectFeedbackRu: "Попробуйте 'had acquired', потому что получение оборудования произошло до получения неожиданных результатов."
        },
        {
            question: "Complete the sentence with the correct past perfect form:",
            questionRu: "Заполните предложение правильной формой Past Perfect:",
            sentence: "The AI system performed exceptionally because developers ____ it with diverse datasets.",
            correctAnswer: "had trained",
            options: ["had trained", "have trained", "trained", "were training"],
            correctFeedback: "Great! 'Had trained' shows training occurred before exceptional AI performance!",
            correctFeedbackRu: "Отлично! 'Had trained' показывает, что обучение произошло до исключительной работы ИИ!",
            incorrectFeedback: "Use 'had trained' because training the system happened before exceptional performance.",
            incorrectFeedbackRu: "Используйте 'had trained', потому что обучение системы произошло до исключительной производительности."
        },
        {
            question: "Fill in the blank with the correct past perfect construction:",
            questionRu: "Заполните пропуск правильной конструкцией Past Perfect:",
            sentence: "The gene therapy trial was halted because researchers ____ unexpected side effects in patients.",
            correctAnswer: "had observed",
            options: ["had observed", "have observed", "observed", "were observing"],
            correctFeedback: "Excellent! 'Had observed' shows side effect detection occurred before trial halt!",
            correctFeedbackRu: "Отлично! 'Had observed' показывает, что обнаружение побочных эффектов произошло до остановки испытания!",
            incorrectFeedback: "Try 'had observed' because noticing side effects happened before the trial was halted.",
            incorrectFeedbackRu: "Попробуйте 'had observed', потому что замечание побочных эффектов произошло до остановки испытания."
        }
    ]
};

/* =============================================================================== */
/* =========================Sentence Building Exercises========================= */

/* ============================================
Page 1: Past Perfect - Sequence: Workplace and Career Situations
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-sentence-page1'] = {
    title: "Past Perfect - Sequence: Workplace and Career Situations",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "meeting", "had", "already", "started", "when", "I", "arrived."],
            correctAnswer: "The meeting had already started when I arrived.",
            correctFeedback: "Perfect! 'The meeting had already started when I arrived.' shows correct sequence with Past Perfect!",
            correctFeedbackRu: "Отлично! 'The meeting had already started when I arrived.' показывает правильную последовательность с Past Perfect!",
            incorrectFeedback: "Try again. Remember: Subject + had + past participle + when + subject + past simple.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + had + причастие прошедшего времени + when + подлежащее + простое прошедшее."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["She", "couldn't", "find", "her", "files", "because", "she", "had", "forgotten", "to", "save", "them."],
            correctAnswer: "She couldn't find her files because she had forgotten to save them.",
            correctFeedback: "Excellent! 'She couldn't find her files because she had forgotten to save them.' Perfect causal sequence!",
            correctFeedbackRu: "Отлично! 'She couldn't find her files because she had forgotten to save them.' Идеальная причинная последовательность!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["By", "the", "time", "we", "finished", "the", "project,", "the", "deadline", "had", "passed."],
            correctAnswer: "By the time we finished the project, the deadline had passed.",
            correctFeedback: "Great! 'By the time we finished the project, the deadline had passed.' Excellent use of sequence markers!",
            correctFeedbackRu: "Отлично! 'By the time we finished the project, the deadline had passed.' Превосходное использование маркеров последовательности!",
            incorrectFeedback: "Try again. Remember: By the time + subject + past simple, subject + had + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: By the time + подлежащее + простое прошедшее, подлежащее + had + причастие прошедшего времени."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "client", "was", "impressed", "because", "we", "had", "prepared", "a", "detailed", "proposal."],
            correctAnswer: "The client was impressed because we had prepared a detailed proposal.",
            correctFeedback: "Perfect! 'The client was impressed because we had prepared a detailed proposal.' Shows preparation before reaction!",
            correctFeedbackRu: "Отлично! 'The client was impressed because we had prepared a detailed proposal.' Показывает подготовку до реакции!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "felt", "confident", "during", "the", "interview", "because", "I", "had", "researched", "the", "company."],
            correctAnswer: "I felt confident during the interview because I had researched the company.",
            correctFeedback: "Excellent! 'I felt confident during the interview because I had researched the company.' Perfect preparation sequence!",
            correctFeedbackRu: "Отлично! 'I felt confident during the interview because I had researched the company.' Идеальная последовательность подготовки!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "presentation", "failed", "because", "the", "team", "hadn't", "tested", "the", "technology."],
            correctAnswer: "The presentation failed because the team hadn't tested the technology.",
            correctFeedback: "Great! 'The presentation failed because the team hadn't tested the technology.' Perfect negative Past Perfect!",
            correctFeedbackRu: "Отлично! 'The presentation failed because the team hadn't tested the technology.' Идеальный отрицательный Past Perfect!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + hadn't + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + hadn't + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["After", "she", "had", "completed", "her", "training,", "she", "received", "a", "promotion."],
            correctAnswer: "After she had completed her training, she received a promotion.",
            correctFeedback: "Perfect! 'After she had completed her training, she received a promotion.' Excellent sequence with 'after'!",
            correctFeedbackRu: "Отлично! 'After she had completed her training, she received a promotion.' Превосходная последовательность с 'after'!",
            incorrectFeedback: "Try again. Remember: After + subject + had + past participle, subject + past simple.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: After + подлежащее + had + причастие прошедшего времени, подлежащее + простое прошедшее."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "project", "was", "approved", "quickly", "because", "we", "had", "submitted", "all", "documents."],
            correctAnswer: "The project was approved quickly because we had submitted all documents.",
            correctFeedback: "Excellent! 'The project was approved quickly because we had submitted all documents.' Perfect documentation sequence!",
            correctFeedbackRu: "Отлично! 'The project was approved quickly because we had submitted all documents.' Идеальная последовательность документооборота!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adverb + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + наречие + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["When", "the", "boss", "arrived,", "the", "employees", "had", "already", "left", "for", "lunch."],
            correctAnswer: "When the boss arrived, the employees had already left for lunch.",
            correctFeedback: "Great! 'When the boss arrived, the employees had already left for lunch.' Perfect timing sequence!",
            correctFeedbackRu: "Отлично! 'When the boss arrived, the employees had already left for lunch.' Идеальная временная последовательность!",
            incorrectFeedback: "Try again. Remember: When + subject + past simple, subject + had + already + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: When + подлежащее + простое прошедшее, подлежащее + had + already + причастие прошедшего времени."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["He", "was", "exhausted", "at", "work", "because", "he", "hadn't", "slept", "well."],
            correctAnswer: "He was exhausted at work because he hadn't slept well.",
            correctFeedback: "Perfect! 'He was exhausted at work because he hadn't slept well.' Shows cause and effect clearly!",
            correctFeedbackRu: "Отлично! 'He was exhausted at work because he hadn't slept well.' Четко показывает причину и следствие!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + hadn't + past participle + adverb.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + hadn't + причастие прошедшего времени + наречие."
        }
    ]
};

/* ============================================
Page 2: Past Perfect - Sequence: Personal Life and Relationships
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-sentence-page2'] = {
    title: "Past Perfect - Sequence: Personal Life and Relationships",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["My", "friends", "were", "upset", "because", "I", "had", "cancelled", "our", "dinner", "plans."],
            correctAnswer: "My friends were upset because I had cancelled our dinner plans.",
            correctFeedback: "Perfect! 'My friends were upset because I had cancelled our dinner plans.' Clear cause and effect!",
            correctFeedbackRu: "Отлично! 'My friends were upset because I had cancelled our dinner plans.' Четкая причина и следствие!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["She", "felt", "embarrassed", "because", "she", "had", "worn", "the", "wrong", "outfit."],
            correctAnswer: "She felt embarrassed because she had worn the wrong outfit.",
            correctFeedback: "Excellent! 'She felt embarrassed because she had worn the wrong outfit.' Perfect emotional sequence!",
            correctFeedbackRu: "Отлично! 'She felt embarrassed because she had worn the wrong outfit.' Идеальная эмоциональная последовательность!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "party", "was", "perfect", "because", "we", "had", "planned", "every", "detail."],
            correctAnswer: "The party was perfect because we had planned every detail.",
            correctFeedback: "Great! 'The party was perfect because we had planned every detail.' Excellent preparation pays off!",
            correctFeedbackRu: "Отлично! 'The party was perfect because we had planned every detail.' Превосходная подготовка окупается!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["When", "I", "got", "home,", "my", "family", "had", "already", "eaten", "dinner."],
            correctAnswer: "When I got home, my family had already eaten dinner.",
            correctFeedback: "Perfect! 'When I got home, my family had already eaten dinner.' Great timing with 'already'!",
            correctFeedbackRu: "Отлично! 'When I got home, my family had already eaten dinner.' Отличное время с 'already'!",
            incorrectFeedback: "Try again. Remember: When + subject + past simple, subject + had + already + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: When + подлежащее + простое прошедшее, подлежащее + had + already + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "couldn't", "join", "the", "conversation", "because", "I", "hadn't", "heard", "the", "story."],
            correctAnswer: "I couldn't join the conversation because I hadn't heard the story.",
            correctFeedback: "Excellent! 'I couldn't join the conversation because I hadn't heard the story.' Perfect social context!",
            correctFeedbackRu: "Отлично! 'I couldn't join the conversation because I hadn't heard the story.' Идеальный социальный контекст!",
            incorrectFeedback: "Try again. Remember: Subject + couldn't + verb + because + subject + hadn't + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + couldn't + глагол + because + подлежащее + hadn't + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["After", "we", "had", "argued,", "we", "didn't", "speak", "for", "days."],
            correctAnswer: "After we had argued, we didn't speak for days.",
            correctFeedback: "Great! 'After we had argued, we didn't speak for days.' Shows relationship consequence clearly!",
            correctFeedbackRu: "Отлично! 'After we had argued, we didn't speak for days.' Четко показывает последствия для отношений!",
            incorrectFeedback: "Try again. Remember: After + subject + had + past participle, subject + didn't + verb + time expression.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: After + подлежащее + had + причастие прошедшего времени, подлежащее + didn't + глагол + выражение времени."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "wedding", "was", "memorable", "because", "they", "had", "written", "personal", "vows."],
            correctAnswer: "The wedding was memorable because they had written personal vows.",
            correctFeedback: "Perfect! 'The wedding was memorable because they had written personal vows.' Beautiful personal touch!",
            correctFeedbackRu: "Отлично! 'The wedding was memorable because they had written personal vows.' Прекрасный личный штрих!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "felt", "nervous", "at", "the", "reunion", "because", "I", "hadn't", "seen", "anyone", "for", "years."],
            correctAnswer: "I felt nervous at the reunion because I hadn't seen anyone for years.",
            correctFeedback: "Excellent! 'I felt nervous at the reunion because I hadn't seen anyone for years.' Perfect emotional context!",
            correctFeedbackRu: "Отлично! 'I felt nervous at the reunion because I hadn't seen anyone for years.' Идеальный эмоциональный контекст!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + hadn't + past participle + object + time expression.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + hadn't + причастие прошедшего времени + дополнение + выражение времени."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "surprise", "party", "worked", "perfectly", "because", "nobody", "had", "told", "him."],
            correctAnswer: "The surprise party worked perfectly because nobody had told him.",
            correctFeedback: "Great! 'The surprise party worked perfectly because nobody had told him.' Perfect secret keeping!",
            correctFeedbackRu: "Отлично! 'The surprise party worked perfectly because nobody had told him.' Идеальное сохранение секрета!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adverb + because + nobody + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + наречие + because + nobody + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["By", "the", "time", "the", "guests", "arrived,", "we", "had", "decorated", "the", "house."],
            correctAnswer: "By the time the guests arrived, we had decorated the house.",
            correctFeedback: "Perfect! 'By the time the guests arrived, we had decorated the house.' Excellent preparation timing!",
            correctFeedbackRu: "Отлично! 'By the time the guests arrived, we had decorated the house.' Превосходное время подготовки!",
            incorrectFeedback: "Try again. Remember: By the time + subject + past simple, subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: By the time + подлежащее + простое прошедшее, подлежащее + had + причастие прошедшего времени + дополнение."
        }
    ]
};

/* ============================================
Page 3: Past Perfect - Sequence: Education and Learning Experiences
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-sentence-page3'] = {
    title: "Past Perfect - Sequence: Education and Learning Experiences",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "exam", "was", "easier", "than", "expected", "because", "I", "had", "studied", "thoroughly."],
            correctAnswer: "The exam was easier than expected because I had studied thoroughly.",
            correctFeedback: "Perfect! 'The exam was easier than expected because I had studied thoroughly.' Great preparation pays off!",
            correctFeedbackRu: "Отлично! 'The exam was easier than expected because I had studied thoroughly.' Отличная подготовка окупается!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + comparison + because + subject + had + past participle + adverb.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + сравнение + because + подлежащее + had + причастие прошедшего времени + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["My", "professor", "was", "impressed", "because", "I", "had", "completed", "extra", "research."],
            correctAnswer: "My professor was impressed because I had completed extra research.",
            correctFeedback: "Excellent! 'My professor was impressed because I had completed extra research.' Going beyond expectations!",
            correctFeedbackRu: "Отлично! 'My professor was impressed because I had completed extra research.' Превзойти ожидания!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "struggled", "with", "the", "course", "because", "I", "hadn't", "mastered", "the", "basics."],
            correctAnswer: "I struggled with the course because I hadn't mastered the basics.",
            correctFeedback: "Great! 'I struggled with the course because I hadn't mastered the basics.' Foundation is important!",
            correctFeedbackRu: "Отлично! 'I struggled with the course because I hadn't mastered the basics.' Основа важна!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + hadn't + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + hadn't + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["After", "I", "had", "finished", "my", "thesis,", "I", "felt", "relieved."],
            correctAnswer: "After I had finished my thesis, I felt relieved.",
            correctFeedback: "Perfect! 'After I had finished my thesis, I felt relieved.' Academic achievement brings relief!",
            correctFeedbackRu: "Отлично! 'After I had finished my thesis, I felt relieved.' Академическое достижение приносит облегчение!",
            incorrectFeedback: "Try again. Remember: After + subject + had + past participle + object, subject + past simple + adjective.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: After + подлежащее + had + причастие прошедшего времени + дополнение, подлежащее + простое прошедшее + прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "library", "was", "closed", "when", "I", "arrived", "because", "staff", "had", "left", "early."],
            correctAnswer: "The library was closed when I arrived because staff had left early.",
            correctFeedback: "Excellent! 'The library was closed when I arrived because staff had left early.' Perfect timing explanation!",
            correctFeedbackRu: "Отлично! 'The library was closed when I arrived because staff had left early.' Идеальное объяснение времени!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + when + subject + past simple + because + subject + had + past participle + adverb.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + when + подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "group", "project", "succeeded", "because", "we", "had", "divided", "the", "work", "equally."],
            correctAnswer: "The group project succeeded because we had divided the work equally.",
            correctFeedback: "Great! 'The group project succeeded because we had divided the work equally.' Teamwork makes it work!",
            correctFeedbackRu: "Отлично! 'The group project succeeded because we had divided the work equally.' Командная работа - залог успеха!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + object + adverb.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + дополнение + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["When", "the", "semester", "ended,", "I", "realized", "I", "had", "learned", "so", "much."],
            correctAnswer: "When the semester ended, I realized I had learned so much.",
            correctFeedback: "Perfect! 'When the semester ended, I realized I had learned so much.' Beautiful reflection on growth!",
            correctFeedbackRu: "Отлично! 'When the semester ended, I realized I had learned so much.' Прекрасное размышление о росте!",
            incorrectFeedback: "Try again. Remember: When + subject + past simple, subject + past simple + subject + had + past participle + adverb + adjective.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: When + подлежащее + простое прошедшее, подлежащее + простое прошедшее + подлежащее + had + причастие прошедшего времени + наречие + прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["My", "presentation", "went", "smoothly", "because", "I", "had", "practiced", "many", "times."],
            correctAnswer: "My presentation went smoothly because I had practiced many times.",
            correctFeedback: "Excellent! 'My presentation went smoothly because I had practiced many times.' Practice makes perfect!",
            correctFeedbackRu: "Отлично! 'My presentation went smoothly because I had practiced many times.' Повторение - мать учения!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adverb + because + subject + had + past participle + frequency expression.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + наречие + because + подлежащее + had + причастие прошедшего времени + выражение частоты."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "research", "paper", "was", "rejected", "because", "I", "hadn't", "included", "proper", "citations."],
            correctAnswer: "The research paper was rejected because I hadn't included proper citations.",
            correctFeedback: "Great! 'The research paper was rejected because I hadn't included proper citations.' Academic standards matter!",
            correctFeedbackRu: "Отлично! 'The research paper was rejected because I hadn't included proper citations.' Академические стандарты важны!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + hadn't + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + hadn't + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["By", "the", "time", "graduation", "came,", "we", "had", "formed", "lifelong", "friendships."],
            correctAnswer: "By the time graduation came, we had formed lifelong friendships.",
            correctFeedback: "Perfect! 'By the time graduation came, we had formed lifelong friendships.' Beautiful educational journey!",
            correctFeedbackRu: "Отлично! 'By the time graduation came, we had formed lifelong friendships.' Прекрасное образовательное путешествие!",
            incorrectFeedback: "Try again. Remember: By the time + subject + past simple, subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: By the time + подлежащее + простое прошедшее, подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        }
    ]
};

/* ============================================
Page 4: Past Perfect - Sequence: Technology and Modern Challenges
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-sentence-page4'] = {
    title: "Past Perfect - Sequence: Technology and Modern Challenges",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "computer", "crashed", "because", "I", "had", "opened", "too", "many", "programs."],
            correctAnswer: "The computer crashed because I had opened too many programs.",
            correctFeedback: "Perfect! 'The computer crashed because I had opened too many programs.' Classic tech overload!",
            correctFeedbackRu: "Отлично! 'The computer crashed because I had opened too many programs.' Классическая технологическая перегрузка!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + quantity + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + количество + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "lost", "all", "my", "photos", "because", "I", "hadn't", "backed", "them", "up."],
            correctAnswer: "I lost all my photos because I hadn't backed them up.",
            correctFeedback: "Excellent! 'I lost all my photos because I hadn't backed them up.' Important digital lesson!",
            correctFeedbackRu: "Отлично! 'I lost all my photos because I hadn't backed them up.' Важный цифровой урок!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + object + because + subject + hadn't + past participle + pronoun + particle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + дополнение + because + подлежащее + hadn't + причастие прошедшего времени + местоимение + частица."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "video", "call", "failed", "because", "we", "hadn't", "tested", "our", "connection."],
            correctAnswer: "The video call failed because we hadn't tested our connection.",
            correctFeedback: "Great! 'The video call failed because we hadn't tested our connection.' Remote work preparation matters!",
            correctFeedbackRu: "Отлично! 'The video call failed because we hadn't tested our connection.' Подготовка к удаленной работе важна!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + hadn't + past participle + possessive + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + hadn't + причастие прошедшего времени + притяжательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["After", "I", "had", "updated", "the", "software,", "the", "program", "worked", "perfectly."],
            correctAnswer: "After I had updated the software, the program worked perfectly.",
            correctFeedback: "Perfect! 'After I had updated the software, the program worked perfectly.' Updates solve problems!",
            correctFeedbackRu: "Отлично! 'After I had updated the software, the program worked perfectly.' Обновления решают проблемы!",
            incorrectFeedback: "Try again. Remember: After + subject + had + past participle + object, subject + past simple + adverb.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: After + подлежащее + had + причастие прошедшего времени + дополнение, подлежащее + простое прошедшее + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "website", "was", "slow", "because", "developers", "hadn't", "optimized", "the", "code."],
            correctAnswer: "The website was slow because developers hadn't optimized the code.",
            correctFeedback: "Excellent! 'The website was slow because developers hadn't optimized the code.' Web development basics!",
            correctFeedbackRu: "Отлично! 'The website was slow because developers hadn't optimized the code.' Основы веб-разработки!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + hadn't + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + hadn't + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["When", "I", "checked", "my", "email,", "the", "message", "had", "already", "been", "deleted."],
            correctAnswer: "When I checked my email, the message had already been deleted.",
            correctFeedback: "Great! 'When I checked my email, the message had already been deleted.' Perfect passive Past Perfect!",
            correctFeedbackRu: "Отлично! 'When I checked my email, the message had already been deleted.' Идеальный пассивный Past Perfect!",
            incorrectFeedback: "Try again. Remember: When + subject + past simple + object, subject + had + already + been + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: When + подлежащее + простое прошедшее + дополнение, подлежащее + had + already + been + причастие прошедшего времени."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "app", "crashed", "repeatedly", "because", "I", "hadn't", "installed", "the", "latest", "update."],
            correctAnswer: "The app crashed repeatedly because I hadn't installed the latest update.",
            correctFeedback: "Perfect! 'The app crashed repeatedly because I hadn't installed the latest update.' Keep software current!",
            correctFeedbackRu: "Отлично! 'The app crashed repeatedly because I hadn't installed the latest update.' Поддерживайте программное обеспечение в актуальном состоянии!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adverb + because + subject + hadn't + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + наречие + because + подлежащее + hadn't + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["By", "the", "time", "tech", "support", "called,", "I", "had", "fixed", "the", "problem."],
            correctAnswer: "By the time tech support called, I had fixed the problem.",
            correctFeedback: "Excellent! 'By the time tech support called, I had fixed the problem.' Self-reliance in tech!",
            correctFeedbackRu: "Отлично! 'By the time tech support called, I had fixed the problem.' Самостоятельность в технологиях!",
            incorrectFeedback: "Try again. Remember: By the time + subject + past simple, subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: By the time + подлежащее + простое прошедшее, подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "couldn't", "access", "my", "account", "because", "hackers", "had", "changed", "the", "password."],
            correctAnswer: "I couldn't access my account because hackers had changed the password.",
            correctFeedback: "Great! 'I couldn't access my account because hackers had changed the password.' Cybersecurity awareness!",
            correctFeedbackRu: "Отлично! 'I couldn't access my account because hackers had changed the password.' Осведомленность о кибербезопасности!",
            incorrectFeedback: "Try again. Remember: Subject + couldn't + verb + object + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + couldn't + глагол + дополнение + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "online", "meeting", "was", "productive", "because", "everyone", "had", "prepared", "their", "materials."],
            correctAnswer: "The online meeting was productive because everyone had prepared their materials.",
            correctFeedback: "Perfect! 'The online meeting was productive because everyone had prepared their materials.' Digital teamwork success!",
            correctFeedbackRu: "Отлично! 'The online meeting was productive because everyone had prepared their materials.' Успех цифровой командной работы!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + possessive + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + притяжательное + дополнение."
        }
    ]
};

/* ============================================
Page 5: Past Perfect - Sequence: Health and Lifestyle Decisions
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-sentence-page5'] = {
    title: "Past Perfect - Sequence: Health and Lifestyle Decisions",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "felt", "energetic", "all", "day", "because", "I", "had", "slept", "eight", "hours."],
            correctAnswer: "I felt energetic all day because I had slept eight hours.",
            correctFeedback: "Perfect! 'I felt energetic all day because I had slept eight hours.' Good sleep pays off!",
            correctFeedbackRu: "Отлично! 'I felt energetic all day because I had slept eight hours.' Хороший сон окупается!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + time expression + because + subject + had + past participle + quantity + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + выражение времени + because + подлежащее + had + причастие прошедшего времени + количество + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "doctor", "was", "concerned", "because", "I", "hadn't", "taken", "my", "medication."],
            correctAnswer: "The doctor was concerned because I hadn't taken my medication.",
            correctFeedback: "Excellent! 'The doctor was concerned because I hadn't taken my medication.' Medical compliance matters!",
            correctFeedbackRu: "Отлично! 'The doctor was concerned because I hadn't taken my medication.' Соблюдение медицинских рекомендаций важно!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + hadn't + past participle + possessive + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + hadn't + причастие прошедшего времени + притяжательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["After", "I", "had", "started", "exercising", "regularly,", "my", "health", "improved", "dramatically."],
            correctAnswer: "After I had started exercising regularly, my health improved dramatically.",
            correctFeedback: "Great! 'After I had started exercising regularly, my health improved dramatically.' Fitness transformation!",
            correctFeedbackRu: "Отлично! 'After I had started exercising regularly, my health improved dramatically.' Фитнес-трансформация!",
            incorrectFeedback: "Try again. Remember: After + subject + had + past participle + gerund + adverb, subject + past simple + adverb.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: After + подлежащее + had + причастие прошедшего времени + герундий + наречие, подлежащее + простое прошедшее + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "avoided", "getting", "sick", "because", "I", "had", "received", "the", "flu", "vaccine."],
            correctAnswer: "I avoided getting sick because I had received the flu vaccine.",
            correctFeedback: "Perfect! 'I avoided getting sick because I had received the flu vaccine.' Prevention works!",
            correctFeedbackRu: "Отлично! 'I avoided getting sick because I had received the flu vaccine.' Профилактика работает!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + gerund + adjective + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + герундий + прилагательное + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "surgery", "was", "successful", "because", "the", "patient", "had", "followed", "all", "instructions."],
            correctAnswer: "The surgery was successful because the patient had followed all instructions.",
            correctFeedback: "Excellent! 'The surgery was successful because the patient had followed all instructions.' Medical compliance success!",
            correctFeedbackRu: "Отлично! 'The surgery was successful because the patient had followed all instructions.' Успех соблюдения медицинских рекомендаций!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + quantity + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + количество + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "gained", "weight", "during", "vacation", "because", "I", "had", "abandoned", "my", "diet."],
            correctAnswer: "I gained weight during vacation because I had abandoned my diet.",
            correctFeedback: "Great! 'I gained weight during vacation because I had abandoned my diet.' Holiday indulgence consequences!",
            correctFeedbackRu: "Отлично! 'I gained weight during vacation because I had abandoned my diet.' Последствия праздничных излишеств!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + object + time expression + because + subject + had + past participle + possessive + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + дополнение + выражение времени + because + подлежащее + had + причастие прошедшего времени + притяжательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["When", "the", "test", "results", "came,", "I", "was", "relieved", "because", "I", "had", "quit", "smoking."],
            correctAnswer: "When the test results came, I was relieved because I had quit smoking.",
            correctFeedback: "Perfect! 'When the test results came, I was relieved because I had quit smoking.' Health decision vindicated!",
            correctFeedbackRu: "Отлично! 'When the test results came, I was relieved because I had quit smoking.' Решение о здоровье оправдалось!",
            incorrectFeedback: "Try again. Remember: When + subject + past simple, subject + past simple + adjective + because + subject + had + past participle + gerund.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: When + подлежащее + простое прошедшее, подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + герундий."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["My", "stress", "levels", "decreased", "after", "I", "had", "learned", "meditation", "techniques."],
            correctAnswer: "My stress levels decreased after I had learned meditation techniques.",
            correctFeedback: "Excellent! 'My stress levels decreased after I had learned meditation techniques.' Mindfulness benefits!",
            correctFeedbackRu: "Отлично! 'My stress levels decreased after I had learned meditation techniques.' Преимущества осознанности!",
            incorrectFeedback: "Try again. Remember: Possessive + subject + past simple + after + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Притяжательное + подлежащее + простое прошедшее + after + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "felt", "dizzy", "during", "the", "workout", "because", "I", "hadn't", "eaten", "breakfast."],
            correctAnswer: "I felt dizzy during the workout because I hadn't eaten breakfast.",
            correctFeedback: "Great! 'I felt dizzy during the workout because I hadn't eaten breakfast.' Proper nutrition matters!",
            correctFeedbackRu: "Отлично! 'I felt dizzy during the workout because I hadn't eaten breakfast.' Правильное питание важно!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + preposition + object + because + subject + hadn't + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + предлог + дополнение + because + подлежащее + hadn't + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["By", "the", "time", "I", "saw", "the", "doctor,", "the", "symptoms", "had", "disappeared."],
            correctAnswer: "By the time I saw the doctor, the symptoms had disappeared.",
            correctFeedback: "Perfect! 'By the time I saw the doctor, the symptoms had disappeared.' Sometimes problems resolve themselves!",
            correctFeedbackRu: "Отлично! 'By the time I saw the doctor, the symptoms had disappeared.' Иногда проблемы решаются сами собой!",
            incorrectFeedback: "Try again. Remember: By the time + subject + past simple + object, subject + had + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: By the time + подлежащее + простое прошедшее + дополнение, подлежащее + had + причастие прошедшего времени."
        }
    ]
};

/* ============================================
Page 6: Past Perfect - Sequence: Travel and Adventure Experiences
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-sentence-page6'] = {
    title: "Past Perfect - Sequence: Travel and Adventure Experiences",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "flight", "was", "delayed", "because", "storms", "had", "hit", "the", "airport."],
            correctAnswer: "The flight was delayed because storms had hit the airport.",
            correctFeedback: "Perfect! 'The flight was delayed because storms had hit the airport.' Weather impacts travel!",
            correctFeedbackRu: "Отлично! 'The flight was delayed because storms had hit the airport.' Погода влияет на путешествия!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "couldn't", "board", "the", "train", "because", "I", "had", "left", "my", "ticket", "at", "home."],
            correctAnswer: "I couldn't board the train because I had left my ticket at home.",
            correctFeedback: "Excellent! 'I couldn't board the train because I had left my ticket at home.' Classic travel mistake!",
            correctFeedbackRu: "Отлично! 'I couldn't board the train because I had left my ticket at home.' Классическая ошибка путешественника!",
            incorrectFeedback: "Try again. Remember: Subject + couldn't + verb + object + because + subject + had + past participle + object + place.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + couldn't + глагол + дополнение + because + подлежащее + had + причастие прошедшего времени + дополнение + место."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "tour", "guide", "was", "knowledgeable", "because", "she", "had", "studied", "local", "history."],
            correctAnswer: "The tour guide was knowledgeable because she had studied local history.",
            correctFeedback: "Great! 'The tour guide was knowledgeable because she had studied local history.' Preparation makes excellence!",
            correctFeedbackRu: "Отлично! 'The tour guide was knowledgeable because she had studied local history.' Подготовка создает совершенство!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["We", "missed", "the", "sunrise", "because", "our", "alarm", "hadn't", "worked", "properly."],
            correctAnswer: "We missed the sunrise because our alarm hadn't worked properly.",
            correctFeedback: "Perfect! 'We missed the sunrise because our alarm hadn't worked properly.' Technology fails at worst times!",
            correctFeedbackRu: "Отлично! 'We missed the sunrise because our alarm hadn't worked properly.' Технологии подводят в самый неподходящий момент!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + object + because + possessive + subject + hadn't + past participle + adverb.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + дополнение + because + притяжательное + подлежащее + hadn't + причастие прошедшего времени + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["After", "we", "had", "booked", "the", "hotel,", "we", "felt", "more", "relaxed."],
            correctAnswer: "After we had booked the hotel, we felt more relaxed.",
            correctFeedback: "Excellent! 'After we had booked the hotel, we felt more relaxed.' Travel planning reduces stress!",
            correctFeedbackRu: "Отлично! 'After we had booked the hotel, we felt more relaxed.' Планирование путешествия снижает стресс!",
            incorrectFeedback: "Try again. Remember: After + subject + had + past participle + object, subject + past simple + comparative + adjective.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: After + подлежащее + had + причастие прошедшего времени + дополнение, подлежащее + простое прошедшее + сравнительная степень + прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["I", "felt", "sick", "on", "the", "boat", "because", "I", "hadn't", "taken", "motion", "sickness", "pills."],
            correctAnswer: "I felt sick on the boat because I hadn't taken motion sickness pills.",
            correctFeedback: "Great! 'I felt sick on the boat because I hadn't taken motion sickness pills.' Travel preparation matters!",
            correctFeedbackRu: "Отлично! 'I felt sick on the boat because I hadn't taken motion sickness pills.' Подготовка к путешествию важна!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + place + because + subject + hadn't + past participle + compound + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + место + because + подлежащее + hadn't + причастие прошедшего времени + составное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "camping", "trip", "was", "comfortable", "because", "we", "had", "brought", "quality", "equipment."],
            correctAnswer: "The camping trip was comfortable because we had brought quality equipment.",
            correctFeedback: "Perfect! 'The camping trip was comfortable because we had brought quality equipment.' Good gear matters!",
            correctFeedbackRu: "Отлично! 'The camping trip was comfortable because we had brought quality equipment.' Хорошее снаряжение важно!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["When", "we", "reached", "the", "summit,", "we", "realized", "we", "had", "achieved", "our", "goal."],
            correctAnswer: "When we reached the summit, we realized we had achieved our goal.",
            correctFeedback: "Excellent! 'When we reached the summit, we realized we had achieved our goal.' Adventure accomplishment!",
            correctFeedbackRu: "Отлично! 'When we reached the summit, we realized we had achieved our goal.' Достижение приключения!",
            incorrectFeedback: "Try again. Remember: When + subject + past simple + object, subject + past simple + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: When + подлежащее + простое прошедшее + дополнение, подлежащее + простое прошедшее + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["We", "couldn't", "find", "our", "hotel", "because", "the", "taxi", "driver", "had", "taken", "us", "to", "the", "wrong", "address."],
            correctAnswer: "We couldn't find our hotel because the taxi driver had taken us to the wrong address.",
            correctFeedback: "Great! 'We couldn't find our hotel because the taxi driver had taken us to the wrong address.' Navigation confusion!",
            correctFeedbackRu: "Отлично! 'We couldn't find our hotel because the taxi driver had taken us to the wrong address.' Путаница с навигацией!",
            incorrectFeedback: "Try again. Remember: Subject + couldn't + verb + object + because + subject + had + past participle + object + prepositional phrase.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + couldn't + глагол + дополнение + because + подлежащее + had + причастие прошедшего времени + дополнение + предложная фраза."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["By", "the", "time", "we", "arrived", "at", "the", "beach,", "the", "sun", "had", "already", "set."],
            correctAnswer: "By the time we arrived at the beach, the sun had already set.",
            correctFeedback: "Perfect! 'By the time we arrived at the beach, the sun had already set.' Timing in travel matters!",
            correctFeedbackRu: "Отлично! 'By the time we arrived at the beach, the sun had already set.' Время в путешествии важно!",
            incorrectFeedback: "Try again. Remember: By the time + subject + past simple + place, subject + had + already + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: By the time + подлежащее + простое прошедшее + место, подлежащее + had + already + причастие прошедшего времени."
        }
    ]
};

/* ============================================
Page 7: Past Perfect - Sequence: Business and Professional Growth
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-sentence-page7'] = {
    title: "Past Perfect - Sequence: Business and Professional Growth",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "startup", "secured", "funding", "because", "they", "had", "developed", "an", "innovative", "product."],
            correctAnswer: "The startup secured funding because they had developed an innovative product.",
            correctFeedback: "Perfect! 'The startup secured funding because they had developed an innovative product.' Innovation attracts investment!",
            correctFeedbackRu: "Отлично! 'The startup secured funding because they had developed an innovative product.' Инновации привлекают инвестиции!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + object + because + subject + had + past participle + article + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + дополнение + because + подлежащее + had + причастие прошедшего времени + артикль + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "merger", "was", "approved", "after", "both", "companies", "had", "completed", "due", "diligence."],
            correctAnswer: "The merger was approved after both companies had completed due diligence.",
            correctFeedback: "Excellent! 'The merger was approved after both companies had completed due diligence.' Business process success!",
            correctFeedbackRu: "Отлично! 'The merger was approved after both companies had completed due diligence.' Успех бизнес-процесса!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + after + quantity + subject + had + past participle + compound + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + after + количество + подлежащее + had + причастие прошедшего времени + составное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "product", "launch", "failed", "because", "the", "team", "hadn't", "researched", "the", "market."],
            correctAnswer: "The product launch failed because the team hadn't researched the market.",
            correctFeedback: "Great! 'The product launch failed because the team hadn't researched the market.' Market research is crucial!",
            correctFeedbackRu: "Отлично! 'The product launch failed because the team hadn't researched the market.' Исследование рынка крайне важно!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + hadn't + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + hadn't + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["She", "received", "a", "promotion", "because", "she", "had", "exceeded", "all", "performance", "targets."],
            correctAnswer: "She received a promotion because she had exceeded all performance targets.",
            correctFeedback: "Perfect! 'She received a promotion because she had exceeded all performance targets.' Excellence pays off!",
            correctFeedbackRu: "Отлично! 'She received a promotion because she had exceeded all performance targets.' Совершенство окупается!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + object + because + subject + had + past participle + quantity + compound + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + дополнение + because + подлежащее + had + причастие прошедшего времени + количество + составное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "contract", "negotiations", "succeeded", "because", "both", "parties", "had", "prepared", "thoroughly."],
            correctAnswer: "The contract negotiations succeeded because both parties had prepared thoroughly.",
            correctFeedback: "Excellent! 'The contract negotiations succeeded because both parties had prepared thoroughly.' Preparation wins deals!",
            correctFeedbackRu: "Отлично! 'The contract negotiations succeeded because both parties had prepared thoroughly.' Подготовка выигрывает сделки!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + quantity + subject + had + past participle + adverb.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + количество + подлежащее + had + причастие прошедшего времени + наречие."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "company", "went", "bankrupt", "because", "management", "had", "made", "poor", "financial", "decisions."],
            correctAnswer: "The company went bankrupt because management had made poor financial decisions.",
            correctFeedback: "Great! 'The company went bankrupt because management had made poor financial decisions.' Leadership consequences!",
            correctFeedbackRu: "Отлично! 'The company went bankrupt because management had made poor financial decisions.' Последствия руководства!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + adjective + compound + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + прилагательное + составное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["When", "the", "audit", "finished,", "we", "discovered", "the", "accountant", "had", "made", "several", "errors."],
            correctAnswer: "When the audit finished, we discovered the accountant had made several errors.",
            correctFeedback: "Perfect! 'When the audit finished, we discovered the accountant had made several errors.' Financial oversight revealed!",
            correctFeedbackRu: "Отлично! 'When the audit finished, we discovered the accountant had made several errors.' Финансовый надзор раскрыт!",
            incorrectFeedback: "Try again. Remember: When + subject + past simple, subject + past simple + subject + had + past participle + quantity + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: When + подлежащее + простое прошедшее, подлежащее + простое прошедшее + подлежащее + had + причастие прошедшего времени + количество + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "client", "was", "satisfied", "because", "we", "had", "delivered", "the", "project", "on", "time."],
            correctAnswer: "The client was satisfied because we had delivered the project on time.",
            correctFeedback: "Excellent! 'The client was satisfied because we had delivered the project on time.' Reliability builds trust!",
            correctFeedbackRu: "Отлично! 'The client was satisfied because we had delivered the project on time.' Надежность строит доверие!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + object + prepositional phrase.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + дополнение + предложная фраза."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["After", "the", "CEO", "had", "announced", "the", "restructuring,", "employee", "morale", "dropped."],
            correctAnswer: "After the CEO had announced the restructuring, employee morale dropped.",
            correctFeedback: "Great! 'After the CEO had announced the restructuring, employee morale dropped.' Organizational change impacts!",
            correctFeedbackRu: "Отлично! 'After the CEO had announced the restructuring, employee morale dropped.' Влияние организационных изменений!",
            incorrectFeedback: "Try again. Remember: After + subject + had + past participle + object, compound + subject + past simple.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: After + подлежащее + had + причастие прошедшего времени + дополнение, составное + подлежащее + простое прошедшее."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["By", "the", "time", "the", "meeting", "started,", "all", "participants", "had", "reviewed", "the", "agenda."],
            correctAnswer: "By the time the meeting started, all participants had reviewed the agenda.",
            correctFeedback: "Perfect! 'By the time the meeting started, all participants had reviewed the agenda.' Professional preparation!",
            correctFeedbackRu: "Отлично! 'By the time the meeting started, all participants had reviewed the agenda.' Профессиональная подготовка!",
            incorrectFeedback: "Try again. Remember: By the time + subject + past simple, quantity + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: By the time + подлежащее + простое прошедшее, количество + подлежащее + had + причастие прошедшего времени + дополнение."
        }
    ]
};

/* ============================================
Page 8: Past Perfect - Sequence: Entertainment and Cultural Achievements
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-sentence-page8'] = {
    title: "Past Perfect - Sequence: Entertainment and Cultural Achievements",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "concert", "was", "cancelled", "because", "the", "singer", "had", "lost", "her", "voice."],
            correctAnswer: "The concert was cancelled because the singer had lost her voice.",
            correctFeedback: "Perfect! 'The concert was cancelled because the singer had lost her voice.' Performer health priority!",
            correctFeedbackRu: "Отлично! 'The concert was cancelled because the singer had lost her voice.' Приоритет здоровья исполнителя!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + possessive + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + притяжательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "movie", "premiere", "was", "successful", "because", "the", "director", "had", "chosen", "talented", "actors."],
            correctAnswer: "The movie premiere was successful because the director had chosen talented actors.",
            correctFeedback: "Excellent! 'The movie premiere was successful because the director had chosen talented actors.' Casting matters!",
            correctFeedbackRu: "Отлично! 'The movie premiere was successful because the director had chosen talented actors.' Кастинг важен!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "play", "was", "a", "disaster", "because", "the", "actors", "hadn't", "memorized", "their", "lines."],
            correctAnswer: "The play was a disaster because the actors hadn't memorized their lines.",
            correctFeedback: "Great! 'The play was a disaster because the actors hadn't memorized their lines.' Theater preparation essential!",
            correctFeedbackRu: "Отлично! 'The play was a disaster because the actors hadn't memorized their lines.' Подготовка в театре крайне важна!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + article + object + because + subject + hadn't + past participle + possessive + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + артикль + дополнение + because + подлежащее + hadn't + причастие прошедшего времени + притяжательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "art", "exhibition", "was", "impressive", "because", "the", "curator", "had", "selected", "masterpieces."],
            correctAnswer: "The art exhibition was impressive because the curator had selected masterpieces.",
            correctFeedback: "Perfect! 'The art exhibition was impressive because the curator had selected masterpieces.' Curation creates impact!",
            correctFeedbackRu: "Отлично! 'The art exhibition was impressive because the curator had selected masterpieces.' Кураторство создает впечатление!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "festival", "was", "postponed", "because", "organizers", "hadn't", "obtained", "proper", "permits."],
            correctAnswer: "The festival was postponed because organizers hadn't obtained proper permits.",
            correctFeedback: "Excellent! 'The festival was postponed because organizers hadn't obtained proper permits.' Legal requirements matter!",
            correctFeedbackRu: "Отлично! 'The festival was postponed because organizers hadn't obtained proper permits.' Юридические требования важны!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + hadn't + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + hadn't + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["After", "the", "band", "had", "practiced", "for", "months,", "their", "performance", "was", "flawless."],
            correctAnswer: "After the band had practiced for months, their performance was flawless.",
            correctFeedback: "Great! 'After the band had practiced for months, their performance was flawless.' Practice makes perfect!",
            correctFeedbackRu: "Отлично! 'After the band had practiced for months, their performance was flawless.' Практика - путь к совершенству!",
            incorrectFeedback: "Try again. Remember: After + subject + had + past participle + time expression, possessive + subject + past simple + adjective.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: After + подлежащее + had + причастие прошедшего времени + выражение времени, притяжательное + подлежащее + простое прошедшее + прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "comedy", "show", "was", "hilarious", "because", "the", "comedian", "had", "written", "fresh", "material."],
            correctAnswer: "The comedy show was hilarious because the comedian had written fresh material.",
            correctFeedback: "Perfect! 'The comedy show was hilarious because the comedian had written fresh material.' Original content wins!",
            correctFeedbackRu: "Отлично! 'The comedy show was hilarious because the comedian had written fresh material.' Оригинальный контент побеждает!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["When", "the", "awards", "ceremony", "ended,", "we", "realized", "our", "film", "had", "won", "three", "prizes."],
            correctAnswer: "When the awards ceremony ended, we realized our film had won three prizes.",
            correctFeedback: "Excellent! 'When the awards ceremony ended, we realized our film had won three prizes.' Creative achievement recognized!",
            correctFeedbackRu: "Отлично! 'When the awards ceremony ended, we realized our film had won three prizes.' Творческое достижение признано!",
            incorrectFeedback: "Try again. Remember: When + subject + past simple, subject + past simple + possessive + subject + had + past participle + quantity + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: When + подлежащее + простое прошедшее, подлежащее + простое прошедшее + притяжательное + подлежащее + had + причастие прошедшего времени + количество + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "book", "launch", "was", "successful", "because", "the", "author", "had", "built", "a", "strong", "following."],
            correctAnswer: "The book launch was successful because the author had built a strong following.",
            correctFeedback: "Great! 'The book launch was successful because the author had built a strong following.' Author platform matters!",
            correctFeedbackRu: "Отлично! 'The book launch was successful because the author had built a strong following.' Платформа автора важна!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + article + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + артикль + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["By", "the", "time", "the", "show", "started,", "the", "audience", "had", "filled", "every", "seat."],
            correctAnswer: "By the time the show started, the audience had filled every seat.",
            correctFeedback: "Perfect! 'By the time the show started, the audience had filled every seat.' Popular entertainment draws crowds!",
            correctFeedbackRu: "Отлично! 'By the time the show started, the audience had filled every seat.' Популярные развлечения привлекают толпы!",
            incorrectFeedback: "Try again. Remember: By the time + subject + past simple, subject + had + past participle + quantity + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: By the time + подлежащее + простое прошедшее, подлежащее + had + причастие прошедшего времени + количество + дополнение."
        }
    ]
};

/* ============================================
Page 9: Past Perfect - Sequence: Environmental and Social Changes
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-sentence-page9'] = {
    title: "Past Perfect - Sequence: Environmental and Social Changes",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "city", "experienced", "flooding", "because", "developers", "had", "destroyed", "natural", "wetlands."],
            correctAnswer: "The city experienced flooding because developers had destroyed natural wetlands.",
            correctFeedback: "Perfect! 'The city experienced flooding because developers had destroyed natural wetlands.' Environmental consequences matter!",
            correctFeedbackRu: "Отлично! 'The city experienced flooding because developers had destroyed natural wetlands.' Экологические последствия важны!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + object + because + subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + дополнение + because + подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "garden", "flourished", "because", "volunteers", "had", "enriched", "the", "soil", "with", "compost."],
            correctAnswer: "The garden flourished because volunteers had enriched the soil with compost.",
            correctFeedback: "Excellent! 'The garden flourished because volunteers had enriched the soil with compost.' Community effort pays off!",
            correctFeedbackRu: "Отлично! 'The garden flourished because volunteers had enriched the soil with compost.' Усилия сообщества окупаются!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + object + prepositional phrase.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + дополнение + предложная фраза."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Air", "quality", "improved", "dramatically", "after", "the", "government", "had", "implemented", "stricter", "standards."],
            correctAnswer: "Air quality improved dramatically after the government had implemented stricter standards.",
            correctFeedback: "Great! 'Air quality improved dramatically after the government had implemented stricter standards.' Policy impact visible!",
            correctFeedbackRu: "Отлично! 'Air quality improved dramatically after the government had implemented stricter standards.' Влияние политики заметно!",
            incorrectFeedback: "Try again. Remember: Compound subject + past simple + adverb + after + subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Составное подлежащее + простое прошедшее + наречие + after + подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "recycling", "program", "succeeded", "because", "citizens", "had", "been", "properly", "educated."],
            correctAnswer: "The recycling program succeeded because citizens had been properly educated.",
            correctFeedback: "Perfect! 'The recycling program succeeded because citizens had been properly educated.' Education enables change!",
            correctFeedbackRu: "Отлично! 'The recycling program succeeded because citizens had been properly educated.' Образование способствует изменениям!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + been + adverb + past participle.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + been + наречие + причастие прошедшего времени."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "wildlife", "sanctuary", "was", "established", "because", "conservationists", "had", "protected", "the", "habitat."],
            correctAnswer: "The wildlife sanctuary was established because conservationists had protected the habitat.",
            correctFeedback: "Excellent! 'The wildlife sanctuary was established because conservationists had protected the habitat.' Conservation efforts rewarded!",
            correctFeedbackRu: "Отлично! 'The wildlife sanctuary was established because conservationists had protected the habitat.' Усилия по сохранению вознаграждены!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "neighborhood", "improved", "after", "residents", "had", "organized", "a", "community", "watch", "program."],
            correctAnswer: "The neighborhood improved after residents had organized a community watch program.",
            correctFeedback: "Great! 'The neighborhood improved after residents had organized a community watch program.' Community action works!",
            correctFeedbackRu: "Отлично! 'The neighborhood improved after residents had organized a community watch program.' Действия сообщества работают!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + after + subject + had + past participle + article + compound + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + after + подлежащее + had + причастие прошедшего времени + артикль + составное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "solar", "project", "was", "approved", "because", "engineers", "had", "demonstrated", "its", "benefits."],
            correctAnswer: "The solar project was approved because engineers had demonstrated its benefits.",
            correctFeedback: "Perfect! 'The solar project was approved because engineers had demonstrated its benefits.' Evidence-based decisions!",
            correctFeedbackRu: "Отлично! 'The solar project was approved because engineers had demonstrated its benefits.' Решения на основе фактов!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + possessive + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + притяжательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["When", "spring", "arrived,", "the", "forest", "had", "recovered", "from", "the", "previous", "damage."],
            correctAnswer: "When spring arrived, the forest had recovered from the previous damage.",
            correctFeedback: "Excellent! 'When spring arrived, the forest had recovered from the previous damage.' Nature's resilience!",
            correctFeedbackRu: "Отлично! 'When spring arrived, the forest had recovered from the previous damage.' Устойчивость природы!",
            incorrectFeedback: "Try again. Remember: When + subject + past simple, subject + had + past participle + prepositional phrase.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: When + подлежащее + простое прошедшее, подлежащее + had + причастие прошедшего времени + предложная фраза."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["Public", "support", "increased", "after", "activists", "had", "launched", "awareness", "campaigns."],
            correctAnswer: "Public support increased after activists had launched awareness campaigns.",
            correctFeedback: "Great! 'Public support increased after activists had launched awareness campaigns.' Advocacy creates change!",
            correctFeedbackRu: "Отлично! 'Public support increased after activists had launched awareness campaigns.' Адвокация создает изменения!",
            incorrectFeedback: "Try again. Remember: Compound subject + past simple + after + subject + had + past participle + compound object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Составное подлежащее + простое прошедшее + after + подлежащее + had + причастие прошедшего времени + составное дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["By", "the", "time", "summer", "ended,", "the", "city", "had", "created", "five", "new", "parks."],
            correctAnswer: "By the time summer ended, the city had created five new parks.",
            correctFeedback: "Perfect! 'By the time summer ended, the city had created five new parks.' Urban development progress!",
            correctFeedbackRu: "Отлично! 'By the time summer ended, the city had created five new parks.' Прогресс городского развития!",
            incorrectFeedback: "Try again. Remember: By the time + subject + past simple, subject + had + past participle + quantity + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: By the time + подлежащее + простое прошедшее, подлежащее + had + причастие прошедшего времени + количество + прилагательное + дополнение."
        }
    ]
};

/* ============================================
Page 10: Past Perfect - Sequence: Scientific and Technological Breakthroughs
============================================ */
window.grammarExercises['past-tenses']['past-perfect-sequence-sentence-page10'] = {
    title: "Past Perfect - Sequence: Scientific and Technological Breakthroughs",
    sentenceBuilding: [
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "vaccine", "was", "approved", "after", "researchers", "had", "completed", "extensive", "trials."],
            correctAnswer: "The vaccine was approved after researchers had completed extensive trials.",
            correctFeedback: "Perfect! 'The vaccine was approved after researchers had completed extensive trials.' Scientific rigor ensures safety!",
            correctFeedbackRu: "Отлично! 'The vaccine was approved after researchers had completed extensive trials.' Научная строгость обеспечивает безопасность!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + after + subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + after + подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "space", "mission", "succeeded", "because", "engineers", "had", "analyzed", "every", "possible", "scenario."],
            correctAnswer: "The space mission succeeded because engineers had analyzed every possible scenario.",
            correctFeedback: "Excellent! 'The space mission succeeded because engineers had analyzed every possible scenario.' Thorough preparation wins!",
            correctFeedbackRu: "Отлично! 'The space mission succeeded because engineers had analyzed every possible scenario.' Тщательная подготовка побеждает!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + had + past participle + quantity + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + had + причастие прошедшего времени + количество + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "physicist", "won", "the", "Nobel", "Prize", "because", "she", "had", "discovered", "a", "new", "particle."],
            correctAnswer: "The physicist won the Nobel Prize because she had discovered a new particle.",
            correctFeedback: "Great! 'The physicist won the Nobel Prize because she had discovered a new particle.' Scientific breakthrough recognized!",
            correctFeedbackRu: "Отлично! 'The physicist won the Nobel Prize because she had discovered a new particle.' Научный прорыв признан!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + object + because + subject + had + past participle + article + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + дополнение + because + подлежащее + had + причастие прошедшего времени + артикль + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "robot", "malfunctioned", "because", "programmers", "hadn't", "detected", "a", "critical", "bug."],
            correctAnswer: "The robot malfunctioned because programmers hadn't detected a critical bug.",
            correctFeedback: "Perfect! 'The robot malfunctioned because programmers hadn't detected a critical bug.' Quality assurance matters!",
            correctFeedbackRu: "Отлично! 'The robot malfunctioned because programmers hadn't detected a critical bug.' Контроль качества важен!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + because + subject + hadn't + past participle + article + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + because + подлежащее + hadn't + причастие прошедшего времени + артикль + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "discovery", "was", "significant", "because", "archaeologists", "had", "used", "advanced", "dating", "methods."],
            correctAnswer: "The discovery was significant because archaeologists had used advanced dating methods.",
            correctFeedback: "Excellent! 'The discovery was significant because archaeologists had used advanced dating methods.' Technology enhances research!",
            correctFeedbackRu: "Отлично! 'The discovery was significant because archaeologists had used advanced dating methods.' Технологии улучшают исследования!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + adjective + compound object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + прилагательное + составное дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "climate", "model", "proved", "accurate", "because", "scientists", "had", "incorporated", "decades", "of", "data."],
            correctAnswer: "The climate model proved accurate because scientists had incorporated decades of data.",
            correctFeedback: "Great! 'The climate model proved accurate because scientists had incorporated decades of data.' Comprehensive data works!",
            correctFeedbackRu: "Отлично! 'The climate model proved accurate because scientists had incorporated decades of data.' Всеобъемлющие данные работают!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adjective + because + subject + had + past participle + quantity + prepositional phrase.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + прилагательное + because + подлежащее + had + причастие прошедшего времени + количество + предложная фраза."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["After", "the", "team", "had", "embraced", "collaboration,", "the", "breakthrough", "became", "possible."],
            correctAnswer: "After the team had embraced collaboration, the breakthrough became possible.",
            correctFeedback: "Perfect! 'After the team had embraced collaboration, the breakthrough became possible.' Teamwork enables innovation!",
            correctFeedbackRu: "Отлично! 'After the team had embraced collaboration, the breakthrough became possible.' Командная работа способствует инновациям!",
            incorrectFeedback: "Try again. Remember: After + subject + had + past participle + object, subject + past simple + adjective.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: After + подлежащее + had + причастие прошедшего времени + дополнение, подлежащее + простое прошедшее + прилагательное."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["When", "the", "experiment", "concluded,", "we", "realized", "we", "had", "achieved", "unexpected", "results."],
            correctAnswer: "When the experiment concluded, we realized we had achieved unexpected results.",
            correctFeedback: "Excellent! 'When the experiment concluded, we realized we had achieved unexpected results.' Scientific discovery moment!",
            correctFeedbackRu: "Отлично! 'When the experiment concluded, we realized we had achieved unexpected results.' Момент научного открытия!",
            incorrectFeedback: "Try again. Remember: When + subject + past simple, subject + past simple + subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: When + подлежащее + простое прошедшее, подлежащее + простое прошедшее + подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["The", "AI", "system", "performed", "excellently", "because", "developers", "had", "trained", "it", "with", "diverse", "datasets."],
            correctAnswer: "The AI system performed excellently because developers had trained it with diverse datasets.",
            correctFeedback: "Great! 'The AI system performed excellently because developers had trained it with diverse datasets.' Quality training data matters!",
            correctFeedbackRu: "Отлично! 'The AI system performed excellently because developers had trained it with diverse datasets.' Качественные данные для обучения важны!",
            incorrectFeedback: "Try again. Remember: Subject + past simple + adverb + because + subject + had + past participle + pronoun + prepositional phrase.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: Подлежащее + простое прошедшее + наречие + because + подлежащее + had + причастие прошедшего времени + местоимение + предложная фраза."
        },
        {
            question: "Form a correct sentence using these words:",
            questionRu: "Составьте правильное предложение, используя эти слова:",
            words: ["By", "the", "time", "the", "trial", "ended,", "researchers", "had", "observed", "remarkable", "improvements."],
            correctAnswer: "By the time the trial ended, researchers had observed remarkable improvements.",
            correctFeedback: "Perfect! 'By the time the trial ended, researchers had observed remarkable improvements.' Medical research success!",
            correctFeedbackRu: "Отлично! 'By the time the trial ended, researchers had observed remarkable improvements.' Успех медицинских исследований!",
            incorrectFeedback: "Try again. Remember: By the time + subject + past simple, subject + had + past participle + adjective + object.",
            incorrectFeedbackRu: "Попробуйте снова. Помните: By the time + подлежащее + простое прошедшее, подлежащее + had + причастие прошедшего времени + прилагательное + дополнение."
        }
    ]
};