import Button from "./Button";

const Buttoncombo = ({ buttonName }) => {
  return (
    <div className="flex gap-3 justify-center items-center">
      <Button
        buttonName="Learn more"
        className="text-sm px-3 py-1.5 bg-[#007AFF] text-white rounded-3xl"
      />
      <Button
        buttonName={buttonName}
        className="text-sm px-3 py-1.5 border border-[#007AFF] bg-transparent text-[#007AFF] rounded-3xl hover:bg-[#007AFF] hover:text-white"
      />
    </div>
  );
};

export default Buttoncombo;
