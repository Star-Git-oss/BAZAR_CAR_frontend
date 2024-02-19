export const FullWidthBgImage = ({
  image,
  label,
  text,
  // height,
  borderRadius,
}) => {
  return (
    <div
      className="bg-image-container h-48 lg:h-96"
      style={{ backgroundImage: `url(${image})`, borderRadius }}
    >
      <div className="gradient">
        <div className="text-container">
          <div className="label">{label}</div>
          <div className="body">{text}</div>
        </div>
      </div>
    </div>
  );
};
