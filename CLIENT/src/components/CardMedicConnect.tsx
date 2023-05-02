import React from 'react'
import '../styles/CardMedicConnect.css'
import { Link } from 'react-router-dom'

interface cards {
  id: number
  cardTitle: string
  image: string
  route: string
}

type listCards = cards[]

interface Props {
  cards: listCards
}

const CardMedicConnect: React.FC<Props> = ({ cards }): JSX.Element => {
  return (
        <>
            {
                cards.map(card => (
                    <div className="card card-image" key={card.id}>
                        <img
                            className="card-img-top h-50" src={card.image} alt={card.cardTitle}/>
                        <div className="card-body d-flex flex-column justify-content-between">
                            <h3 className="card-title">{card.cardTitle}</h3>
                            <Link to={card.route}>
                                <button className="btn btn-primary col-md-12">Agregar</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
  )
}

export default CardMedicConnect
