import ActivityScreenLayout from "./ActivityScreenLayout";

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
      uri={`${iconImage}/breastfeeding.png`}
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
