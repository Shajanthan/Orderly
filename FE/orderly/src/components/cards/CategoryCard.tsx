import React from "react";
import image from "../../assets/noodles.jpg";

// interface CategoryCardProps {

// }

const CategoryCard: React.FC = () => {
  return (
    <div>
      <div className="rounded-full h-15 w-15">
        <img
          src={image}
          alt=""
          className="h-full object-cover w-full rounded-full"
        />
      </div>
      <div className="subtitle-text-no-color text-center"> Noodeles</div>
    </div>
  );
};

export default CategoryCard;
