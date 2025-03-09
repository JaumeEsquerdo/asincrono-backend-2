import { useState } from "react";

const cardsData = [
    { id: 1, name: "Antonio Ruiz", message: "Felicidades amigo. Te veo pronto", time: "08:00" },
    { id: 2, name: "Manuela Antonia", message: "Hola, un placer hablar contigo", time: "18:33" },
    { id: 3, name: "Angela H.", message: "Que mal dia ha salido hoy", time: "13:40" },
    { id: 4, name: "Javiera Dominguez", message: "Ayer no pude ir al encuentro porque me puse enfermo", time: "10:00" }
];

export const Cards = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [expanded, setExpanded] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)

    const handleNextCard = () => {
        if (activeIndex < cardsData.length - 1) {
            setActiveIndex(activeIndex + 1)
        }
    }

    const handleExpand = (card)=>{
        setExpanded(prev => !prev)
        setSelectedCard(card)
        
    }

    return (
        <main>

        <div className="Card-stack">
            {cardsData.map((card, i) => (
                i >= activeIndex && (
                    <div onclick={()=>handleExpand(card)} key={card.id}
                        className={`Card ${i === activeIndex ? "Card-front" : "Card-back"}`}

                        style={{ zIndex: cardsData.length - i }}
                        onClick={handleNextCard}
                    >
                        <h2>Introductions</h2>
                        <div className="Profile">
                            <h3>{card.name}</h3>
                            <span>{card.time}</span>
                        </div>
                        <p>{card.message}</p>
                    </div>
                )

            ))}

        </div>

        {expanded && <CardAbierta card={selectedCard} setExpanded={setExpanded}/>}
        </main>

    );
}

export const CardAbierta = ({card, setExpanded}) => {
    return ( 
        <div>
            <h2>{card.name}</h2>
            <button onClick={()=> setExpanded(false)}>X</button>
        </div>
     );
}

