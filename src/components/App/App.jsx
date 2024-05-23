import { useState, useEffect } from 'react'
import { getImage } from '../../imageGaleryAPI';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
// import { ImageModal } from '../ImageModal/ImageModal';


export default function App() {
  const [images, setImages] = useState([]);
  const [queryImg, setQuery] = useState("");
  const [currentPage, setPage] = useState(1);
  const [isLoader, setLoader] = useState(false);
  const [isError, setError] = useState(false);
  // const [modalIsOpen, setModalIsOpen] = useState(false);


  useEffect(() => {
    if (!queryImg) return;
    async function fetchImages() {
      try {
        setLoader(true);
        setError(false);
      const FetchedImages = await getImage(queryImg, currentPage);
      
      setImages(FetchedImages.results);
      } catch {
        setError(true);
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
  
   const handleLoadMore = async () => {
    setPage(currentPage + 1);
   };
  
  //  function openModal() {
  //   setModalIsOpen(true);
  // }

  //  function closeModal() {
  //   setModalIsOpen(false);
  // }


  return (
    <>
      <SearchBar onSubmit={searchImages} />
      {isError && <ErrorMessage />}
      {isLoader && <Loader />}
      {images.length !== 0 && <ImageGallery images={images} />}
      {images.length !== 0 && !isLoader && (<LoadMoreBtn onClick={handleLoadMore} />)}
      {/* <ImageModal openModal={openModal} closeModal={closeModal}/> */}
    </>
  )
}







