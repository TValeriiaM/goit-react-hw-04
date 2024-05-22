import css from "./ImageCard.module.css"

export function ImageCard({ card }) {
    return (
        <img className={css.img}
        src={card.urls.small}
        alt={card.description}
        />
 )
}