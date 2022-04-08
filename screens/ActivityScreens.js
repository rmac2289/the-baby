import ActivityScreenLayout from "./ActivityScreenLayout";
import Sleep from "./Sleep";
import { useRoute } from "@react-navigation/native";
import React from "react";
let iconImage =
  "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby";

export const Bottle = () => {
  return (
    <ActivityScreenLayout uri={`${iconImage}/bottle.png`} route="Bottle" />
  );
};

export const Diaper = () => {
  return (
    <ActivityScreenLayout uri={`${iconImage}/diaper.png`} route="Diaper" />
  );
};
export const Breastfeed = () => {
  return (
    <ActivityScreenLayout
      uri={`${iconImage}/breastfeed.png`}
      route="Breastfeed"
    />
  );
};
export const Medicine = () => {
  return (
    <ActivityScreenLayout uri={`${iconImage}/medicine.png`} route="Medicine" />
  );
};
export const Pump = () => {
  return <ActivityScreenLayout uri={`${iconImage}/pump.png`} route="Pump" />;
};

const Components = {
  pump: Pump,
  bottle: Bottle,
  diaper: Diaper,
  breastfeed: Breastfeed,
  medicine: Medicine,
  sleep: Sleep,
};
export const CurrentScreen = () => {
  const route = useRoute();
  const routeName = route.params.screenToRender.toLowerCase();
  const CurrentComponent = Components[routeName];
  return <CurrentComponent />;
};

// WILL NEED TO GET COMPONENTS FROM DB DEPENDING ON WHAT ACTIVITIES USER HAS
