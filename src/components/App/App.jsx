import { useState, useEffect } from 'react'
import { getImage } from '../../imageGaleryAPI';
import SearchBar from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';


export default function App() {
  const [images, setImages] = useState([]);
  const [queryImg, setQuery] = useState("");
  const [currentPage, setPage] = useState(1);
  const [isLoader, setLoader] = useState(false);
  const [isError, setError] = useState(false);


  useEffect(() => {
    async function fetchImages() {
      try {
        setLoader(true);
      const fetchedImages = await getImage();
      
      setImages(fetchedImages);
      } catch {
        setError(true)
      } finally {
        setLoader(false);
      }
    }
    fetchImages()
  }, [currentPage, queryImg])

    const searchImages = async (word) => {
    setImages([]);
    setQuery(word);
    setPage(1);
    
  };

  return (
    <>
      <SearchBar onSearch={searchImages} />
      {isError && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoader && <Loader />}
    </>
  )
}







