import React from "react";
import { Center, Image } from "native-base";
export default function HomeImage() {
  return (
    <Center style={{ transform: [{ rotate: "-5deg" }] }} shadow={6}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649096082/The-Baby/danny.jpg",
        }}
        alt="Alternate Text"
        size="xl"
        rounded="md"
      />
    </Center>
  );
}
