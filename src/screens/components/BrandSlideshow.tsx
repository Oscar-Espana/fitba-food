import { Box } from "@mui/system";
import React, { FC } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./BrandSlideshow.module.css";

interface Props {
  images: string[];
}

const BrandSlideshow: FC<Props> = ({ images }) => {
  return (
    <Box
      sx={{
        maxWidth: "500px",
      }}
    >
      <Slide easing="ease" duration={5000} indicators>
        {images.map((image) => {
          // const url = `/products/${image}`;
          return (
            <div className={styles["each-slide"]} key={image}>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            </div>
          );
        })}
      </Slide>
    </Box>
  );
};

export default BrandSlideshow;
