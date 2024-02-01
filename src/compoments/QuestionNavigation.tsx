import React, { useState } from 'react';

interface Pagination {
    totalQuestion: number;
    currentQuestion: number;
    onQuestionChange: (newNumber: number) => void;


}

const QuestionNavigation: React.FC<Pagination> = ({ totalQuestion, currentQuestion, onQuestionChange }) => {
    const totalNumber = []
    for (let i = 0; i < totalQuestion; i++) {
        totalNumber.push(i)
    }


    const [activePage, setActivePage] = useState(0)


    const handlePageClick = (number: number) => {
        setActivePage(number)
        onQuestionChange(number)
        console.log("active page = " + activePage)
    }

    const handlePrevClick = () => {

        if (currentQuestion > 0) {
            onQuestionChange(activePage - 1)
            setActivePage(activePage - 1)
        }

    }

    const handleNextClick = () => {

        if (currentQuestion < totalNumber.length) {
            
            onQuestionChange(activePage + 1)
            setActivePage(activePage + 1)
      
        }

    }




    return (
        <div className="grid gap-0 row-gap-3 allign-items-right">
            <nav>
                <ul className="pagination p-2 g-col-6">
                    <li className='page-item'> <button className={`page-link pagination ${activePage === 0 ? "disabled" : ""}`} onClick={() => handlePrevClick}>Prev</button></li>
                    {totalNumber.map(number => (
                        <li className={`page-item ${activePage === number ? "active" : ""}`} key={number} onClick={() => handlePageClick(number)}>
                            <a className="page-link" href="#" >{number + 1}</a>
                        </li>))}
                    <li className='page-item'> <button className={`page-link pagination ${(activePage > totalNumber.length -2) === true  ? "disabled" : ""}`} onClick={() => handleNextClick}>Next</button></li>
                </ul>

            </nav>
        </div>


    )

}

export default QuestionNavigation
