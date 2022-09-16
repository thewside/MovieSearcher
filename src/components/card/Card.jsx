import template from 'C:/learn/react/projects/movieSearcher/src/template.json'
import "./Card.scss"
export const Card = () => {
    console.log(template)
    return (
        <div className='card-container'>
            <div>
                <img src={template.Poster} alt="poster" />
            </div>
            <div>

            </div>
        </div>
    )
};