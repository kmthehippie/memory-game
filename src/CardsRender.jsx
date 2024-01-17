import Card from "./Card"
import Display from "./Display"
import { useState, useEffect } from "react"
import "./cardsrender.css"

function CardsRender() {

    const defaultCardArr = [
        {id: 1, name: "koala", link: "https://images.pexels.com/photos/2610309/pexels-photo-2610309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 2, name: "hedgehog", link: "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 3, name: "owl", link: "https://images.pexels.com/photos/1804976/pexels-photo-1804976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 4, name: "rabbit", link: "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 5, name: "giraffe", link: "https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 6, name: "red panda", link: "https://images.pexels.com/photos/2265247/pexels-photo-2265247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 7, name: "otter", link: "https://images.pexels.com/photos/13765828/pexels-photo-13765828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 8, name: "llama", link: "https://images.pexels.com/photos/1575857/pexels-photo-1575857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 9, name: "axolotl", link:"https://images.pexels.com/photos/2168831/pexels-photo-2168831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 10, name:"penguin", link:"https://images.pexels.com/photos/2078475/pexels-photo-2078475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 11, name:"chick", link:"https://images.pexels.com/photos/583677/pexels-photo-583677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {id: 12, name: "parrot", link: "https://images.pexels.com/photos/1040400/pexels-photo-1040400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        
    ]

    const [ cardsArr, setCardsArr ] = useState(defaultCardArr)


    const [ clickedArr, setClickedArr ] = useState([])

    const [ score, setScore ] = useState(0)

    const [ bestScore, setBestScore ] = useState(0)

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i --){
            const j = Math.floor(Math.random() * (i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    const findDupes = (arr) => {
        return arr.filter((currVal, currIndex)=>
        arr.indexOf(currVal) !== currIndex
        )
    }

   
    const handleClick = (e)=>{
        const tempArr = [...defaultCardArr]
        shuffle(tempArr)
        setCardsArr(tempArr)

        const {id} = e.target
        const list = [...clickedArr]
        list.push(id)
        setClickedArr(list)

        let curScore = score
        curScore ++
        setScore(curScore)

    }

    const cardsList = cardsArr.map(card=>
        <>
        <div className="card" onClick={(e)=>{
            handleClick(e)
        }}>
        <Card link = {card.link} name = {card.name} id = {card.id} key = {card.name}/>
        </div>
        </>
    )

    
    

    useEffect(()=>{
        console.log(clickedArr)
        let newList = [...clickedArr]
        console.log(findDupes(newList))
        if (findDupes(newList).length > 0){
            setClickedArr([])
            if(score > bestScore){
                setBestScore(score)
            }            
            setScore(0)
        } 
    return()=>{
        
    }
    },[clickedArr])

    return (
    <>
    <Display score={score} bestScore={bestScore}/>
    <div className="cards-render">
            {cardsList}        
    </div>   
       
    </>
    )
}

export default CardsRender


//Additional data:
// {name: "sheep", link: "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
// {name: "monkey", link: "https://images.pexels.com/photos/11999135/pexels-photo-11999135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
// {name: "turtle", link: "https://images.pexels.com/photos/5560909/pexels-photo-5560909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
// {name: "dog", link:"https://images.pexels.com/photos/1954515/pexels-photo-1954515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}