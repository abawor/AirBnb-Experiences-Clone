import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
    return (
        /* <Hero />*/
        <div>
            <Navbar />
            <Card 
                img = {"katie-zaferes.png"}
                rating = {"5.0"}
                reviewCount = {6}
                country = {"Whatever you want"}
                title = {"Life Lessons with Katie Zaferes"}
                price = {136}
            />
        </div>
    )
}


/*
let jokes = [["a", "aa"], ["b", "bb"]]

function renderJokes(jokes) {
    let jokesList = []
    for (let i = 0; i < jokes.length; i++) {
        jokesList.push(
            <Joke
                key={i}
                setup={jokes[i][0]}
                punchline={jokes[i][1]}
            />
        )
    }
    return jokesList
}

export default function App() {
    return(
        <div>            
            {renderJokes(jokes)}
        </div>
    )
}
*/
