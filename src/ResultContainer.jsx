import NameCard from './NameCard';
import'./ResultContainer.css';


const ResultContainer = ({ suggestedNames }) =>
{   const suggestedNameJsx = suggestedNames.map(suggestedName => {
    return <NameCard key ={suggestedName} suggestedName={suggestedName}/>
    
})
    return(
        <div className="results-container">
            {suggestedNameJsx}
        </div>
    )
}

export default ResultContainer 