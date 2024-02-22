import css from "./ImageCard.module.css";

export const ImageCard = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <div className={css.wrapperImg}>
      <div onClick={handleClick}>
        <img
          className={css.img}
          src={item.urls.small}
          alt={item.alt_description}
        />
      </div>
    </div>
  );
};
