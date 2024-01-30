    export interface Question {
        question: string;
        answer: string[];
        key: any;
    }

    export interface Questions extends Array<Question> {}