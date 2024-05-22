import css from "./ImageGallery.module.css"
import { ImageCard } from "../ImageCard/ImageCard"

export function ImageGallery({ images }) {
    return (
     <ul className={css.galleryList}>
            {images.map(image => (
                <li key={image.id} className={css.galleryItem} >
                    <ImageCard card={image} />
                </li>))}
            
     </ul>
 )
}