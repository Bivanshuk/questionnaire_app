import React from 'react'
import Data from './data'
import './style.css'
import Question from './question'

export default function App() {
    const [questions,setQuestions] = React.useState()
    
    // React.useEffect(() => {
    //     fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple&encode=base64')
    //     .then(res => res.json())
    //     .then(data=> console.log(data))
        
    // })
    
    function questionComponents() {
        return questions.map((res,index) => {
            const options=[...res.incorrect_answers]
            options.splice(Math.floor(Math.random()*4),0,res.correct_answer)
            return (<Question key={index}  question={res.question} options={options} correct={res.correct_answer}/>)
        })
    }
    
    function toggleClick() {
        setQuestions(Data.results)  
        // console.log(questions)  
    }
    
    

    return(
        <main class='outer'>
        {
         questions
         ?
         <div className='outer-box'>
         <h1>questions</h1>
        {questionComponents()}
         </div>
         :
         <div className='opening-page'>
         <h1>Quizzical</h1>
         <button onClick={toggleClick}>Start quiz</button> 
         </div> 
        }
        </main>
    )
}