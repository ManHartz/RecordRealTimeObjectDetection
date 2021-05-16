import React, { useState } from "react";
import { Container } from "@material-ui/core";
import TableInitiate from "./TableInitiate";
//Define our labelmap
const labelMap = {
  1: { id: 1, name: "Bulu Tangkis", color: "red" },
  2: { id: 2, name: "Raket Badminton", color: "yellow" },
  3: { id: 3, name: "Bola keranjang", color: "lime" },
  4: { id: 4, name: "Takraw", color: "blue" },
};

var itemName = "";
var itemId = "";
// Define a drawing function
export const drawRect = (
  boxes,
  classes,
  scores,
  threshold,
  imgWidth,
  imgHeight,
  ctx
) => {
  for (let i = 0; i <= boxes.length; i++) {
    if (boxes[i] && classes[i] && scores[i] > threshold) {
      // Extract variables
      const [y, x, height, width] = boxes[i];
      const text = classes[i];

      //Pass item name and id to global variable
      var itemName = labelMap[text]["name"];
      var itemId = labelMap[text]["id"];

      // Set styling
      ctx.strokeStyle = labelMap[text]["color"];
      ctx.lineWidth = 10;
      ctx.fillStyle = "white";
      ctx.font = "30px Arial";

      // DRAW!!
      ctx.beginPath();
      ctx.fillText(
        labelMap[text]["name"] + " - " + Math.round(scores[i] * 100) / 100,
        x * imgWidth,
        y * imgHeight - 10
      );
      ctx.rect(
        x * imgWidth,
        y * imgHeight,
        (width * imgWidth) / 2,
        (height * imgHeight) / 1.5
      );
      ctx.stroke();

      // TableInitiate(itemId, itemName);
    }
  }
};
