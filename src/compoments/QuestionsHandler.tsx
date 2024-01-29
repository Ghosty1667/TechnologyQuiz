import React, { Component } from 'react';
import {Questions} from "../types/questions"


interface QuestionProps {}
interface QuestionState {
  questionList: Questions | null;
}

class QuestionsList extends Component<QuestionProps, QuestionState>{
  
  constructor (props) {
      super(props);
      this.state = {
        questionList: null
      }
    }


  getQuestions = () => {
      fetch ("../question.json")
        .then (response => {
          return response.json();
        })
        .then (response => {
          console.log(response)
          this.setState({ questionList: response });
        })
    }
    render () {
      const { questionList } = this.state;
      console.log(questionList)
      return (
        <div className=''>
          {
            questionList && questionList.map ((question) => {
              console.log(question)
              return (

                  <div className='row' key={question.question}>
                    <span>{question.question}</span>       
                  </div>
              )
            })
          }
        </div>
      )
    }
  
    componentDidMount () {
      this.getQuestions()
    }
  }
  
  export default QuestionsList
