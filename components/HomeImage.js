import React from "react";
import { Center, Image } from "native-base";
export default function HomeImage() {
  return (
    <Center flex={1} rounded="sm" alignItems="flex-start" shadow={6}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649096082/The-Baby/danny.jpg",
        }}
        alt="Baby"
        size="xl"
        rounded="sm"
        style={{ transform: [{ rotate: "-2deg" }] }}
      />
    </Center>
  );
}
