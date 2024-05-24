import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ images, onClick }) {
    return (
     <ul className={css.galleryList}>
            {images.map(image => (
                <li key={image.id} className={css.galleryItem} >
                    <ImageCard card={image} onClick={onClick} />
                </li>))}
            
     </ul>
 )
}