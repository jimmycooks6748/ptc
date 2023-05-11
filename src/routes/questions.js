/**@type {{
 * question: string,
 * answers: [ string, string ] | [ string, string, string] | [ string, string, string, string ]  | * 
 * correct:number
 * time:number
 * }[]}
 *  */
    export const questions = [
        {
            question: "Is this the first question?",
            answers: [
                'Yes',
                'No',
                'Maybe'
            ],
            correct: 0,
            time: 20
        },
        {
            question: "Who was the first person to sit down?",
            answers: [
                'Me',
                'Jim',
                'Lazlo'
            ],
            correct: 1,
            time: 20
        },
        {
            question: "When did lelo and stich come out?",
            answers: [
                '1990',
                '2002',
                '2005'
            ],
            correct: 1,
            time: 20
    
    
        },
        {
            question: "Who was the first U.S cowboy",
            answers: [
                'Vaquors',
                'Minons',
                'Mexicans'
            ],
            correct: 0,
            time: 20
        }
    ]