import React, { useState } from 'react';

interface Pagination{
    totalQuestion : number;
    currentQuestion: number;
    onQuestionChange: (newNumber : number) => void;
   

}

const QuestionNavigation : React.FC<Pagination> = ({totalQuestion,currentQuestion,onQuestionChange}) => {
    const totalNumber = []
    for (let i = 0; i < totalQuestion; i++) {
        totalNumber.push(i)
    }


    const [activePage, setActivePage] = useState(1)


    const handlePageClick = (number: number) => {
        setActivePage(number)
        onQuestionChange(activePage)
    }

   

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {totalNumber.map(number => (
                    <li className="page-item" onClick={() => {
                        handlePageClick(number);
                    }}><a className="page-link" href="#" key={number}>{number + 1}</a></li>
                ))}
            </ul>
        </nav>
    )

}

export default QuestionNavigation
