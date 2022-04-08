import React from "react";
import { Center, Image } from "native-base";
export default function HomeImage() {
  return (
    <Center width="45%" rounded="sm" shadow={6} flex={0.5}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649096082/The-Baby/danny.jpg",
        }}
        alt="Baby"
        size="xl"
        rounded="sm"
        width="100%"
      />
    </Center>
  );
}
