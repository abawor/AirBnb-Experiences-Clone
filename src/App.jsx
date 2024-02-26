import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(card => {
        return (
            <Card
                key={card.id}
                coverImg={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                location={card.location}
                title={card.title}
                price={card.price}
            />
        )
    })
    return (
        /* <Hero />*/
        <div>
            <Navbar />
            {cards}
        </div>
    )
}
