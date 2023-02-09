import React from 'react' 

export default function Questions(props) {
    
    function optionButton() {
        return props.options.map((opt,index) => (
         <button 
          value={opt}
         key={index} 
         className="option" >
         {atob(opt)}
         </button>   
        ))
    }
    
    return (
        <div className='quediv'>
         <h3>{atob(props.question)}</h3>
         {optionButton()}
        </div>
    )
}