import AddOnCard from "./AddOnCard";
import ContentHead from "./ContentHead";
import StepContainer from "./StepContainer";

const addns = [
  ["Online service", 1, "Access to multiplayer games"],
  ["Larger storage", 2, "Extra 1TB of cloud save"],
  ["Customizable Profile", 2, "Custom theme on your profile"],
];

const AddOns = ({ setAddons, isMonthly, addons }) => {
  return (
    <StepContainer
      title="Pick add-ons"
      descr="Add-ons help enhance your gaming experience."
    >
      {/* <ContentHead
        title="Pick add-ons"
        descr="Add-ons help enhance your gaming experience."
      /> */}
      <div className="plans w-full">
        {addns.map((item) => (
          <AddOnCard
            key={item[0]}
            item={item}
            isMonthly={isMonthly}
            setAddons={setAddons}
            addons={addons}
          />
        ))}
      </div>
    </StepContainer>
  );
};

export default AddOns;
