import "./Rating.css";
import { Link } from "react-router-dom";

const RatingCard = ({ Svg, rating, platform, to }) => {
  return (
    <Link
      className="ratingCard"
      to={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Svg className="platformSvg"></Svg>
      <div>{platform}</div>
      <div className="rating-scale">{rating}</div>
    </Link>
  );
};

export default RatingCard;
