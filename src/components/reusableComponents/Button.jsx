const Button = ({ buttonName, className = "" }) => {
  return (
    <div
      className={`inline-block shadow transition cursor-pointer ${className}`}
    >
      {buttonName}
    </div>
  );
};

export default Button;
