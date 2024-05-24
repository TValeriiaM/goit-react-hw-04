import css from "./ImageCard.module.css"

export default function ImageCard({ card, onClick }) {
    return (
        <img className={css.img}
        src={card.urls.small}
        alt={card.description}
        onClick={() => onClick(card.urls.regular, card.description)}
        
        />
 )
}