import React from "react";
import Content from "./topicContent.json";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { ClassContext } from "./Context";
function Videos() {
  const a = useContext(ClassContext);

  const { currTopic } = a;
  return (
    <div className="pt-16 px-20">
      {Content[currTopic - 1].videos.map((item) => {
        return (
          <Container className=" grid grid-cols-2 m-2 left-1/2">
            <iframe
              width="560"
              height="315"
              src={item}
              title="YouTube video player"
              allowfullscreen="true"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </Container>
        );
      })}
    </div>
  );
}

export default Videos;
