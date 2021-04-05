import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, onClick }) => {
  const { id, webformatURL, tags } = image;
  return (
    <li className={s.ImageGalleryItem} key={id} onClick={onClick}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
