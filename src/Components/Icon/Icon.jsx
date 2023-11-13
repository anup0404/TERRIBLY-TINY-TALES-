import React from "react";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import "./Icon.css";
function Icon() {
  return (
    <div className="icon">
      <StarsRoundedIcon style={{ color: "#6FC2D1" }} />
      <p>125</p>
      <RecommendRoundedIcon style={{ color: "#EFA310" }} />
      <p>12</p>
      <RemoveRedEyeIcon style={{ color: "#848484" }} />
      <p>57.8K</p>
      <FavoriteIcon style={{ color: "#BB2857" }} />
      <p>26.0K</p>
    </div>
  );
}

export default Icon;
