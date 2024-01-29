    interface Question {
        question: string;
        answer: []; 
        key: any;
    }

    export interface Questions extends Array<Question> {}