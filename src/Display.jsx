
export default function Display(props){
    return (
        <div className="score">
        <h3>Score Board</h3>
        <p> Score: {props.score} </p>
        <p> Best Score: {props.bestScore} / 12</p>
        </div>
    )
}