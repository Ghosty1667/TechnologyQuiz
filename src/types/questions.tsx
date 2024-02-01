    export interface Question {
        question: string;
        answer: string[];
        correct: number;
    }

    export interface Questions extends Array<Question> {}