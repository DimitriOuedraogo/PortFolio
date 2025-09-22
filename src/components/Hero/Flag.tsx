import React from "react";

interface FlagProps {
  countryCode: string; // ex: "bf", "fr", "us"
  size?: number;
}

const Flag: React.FC<FlagProps> = ({ countryCode, size = 24 }) => {
  return (
    <img
      src={`https://flagcdn.com/w40/${countryCode}.png`}
      alt={`${countryCode} flag`}
      width={size}
      height={size}
      style={{ borderRadius: "4px" }}
    />
  );
};

export default Flag;
