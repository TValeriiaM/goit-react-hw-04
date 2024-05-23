import css from "./ImageCard.module.css"

export default function ImageCard({ card }) {
    return (
        <img className={css.img}
        src={card.urls.small}
        alt={card.description}
        />
 )
}