import React, { useState, ChangeEvent } from "react";

import {
  BGContainer,
  Colors,
  Input,
  H1,
  H2,
  H3,
  Button,
} from "./background-generator.style";

const BG = () => {
  const [value1, setValue1] = useState("#f1d7a3");
  const [value2, setValue2] = useState("#0ff922");

  const random = () => {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = 6 - x.length;
    var z = "000000";
    var z1 = z.substring(0, y);
    setValue1("#" + z1 + x);

    var q = Math.round(0xffffff * Math.random()).toString(16);
    var w = 6 - q.length;
    var e = "000000";
    var e1 = e.substring(0, w);
    setValue2("#" + e1 + q);
  };

  const background =
    "linear-gradient(to right, " + value1 + ", " + value2 + ")";

  const changeHandler = (event: ChangeEvent<HTMLInputElement>, str: string) => {
    if (str === "1") setValue1(event?.target?.value);
    if (str === "2") setValue2(event?.target?.value);
  };

  return (
    <BGContainer property={background}>
      <H1>BACKGROUND GENERATOR</H1>
      <Colors>
        <Input
          type="color"
          onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, "1")}
          value={value1}
        />
        <Input
          type="color"
          onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e, "2")}
          value={value2}
        />
      </Colors>
      <H2>CURRENT CSS BACKGROUND</H2>
      <H3>{background}</H3>
      <Button property={background} onClick={random}>
        Random Generator
      </Button>
    </BGContainer>
  );
};

export default BG;
