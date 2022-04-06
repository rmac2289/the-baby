import { Center, Image } from "native-base";
import React from "react";

export default function Icon({ uri, route, position, top, left, bottom }) {
  let pos = position === "absolute" ? "absolute" : "relative";
  return (
    <Center position={pos} top={top} left={left} bottom={bottom}>
      <Image
        source={{
          uri,
        }}
        alt={route}
        size="xs"
        style={
          route === "Bottle" && {
            transform: [{ rotate: "-20deg" }],
          }
        }
      />
    </Center>
  );
}
