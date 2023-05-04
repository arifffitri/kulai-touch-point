import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function LanguageRadioButton() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Bahasa Melayu", value: "1" },
    { name: "English", value: "2" },
  ];

  return (
    <>
      <ButtonGroup className="me-4">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-primary" : "outline-primary"}
            className="rounded-0 "
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default LanguageRadioButton;
