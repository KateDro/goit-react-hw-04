import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ items, onClickModal }) => {
  return (
    <>
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id} onClick={() => onClickModal(item.id)}>
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
