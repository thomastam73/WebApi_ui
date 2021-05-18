// Define our labelmap
const labelMap = {
  1: { name: "zero", color: "red" },
  2: { name: "one", color: "yellow" },
  3: { name: "two", color: "lime" },
  4: { name: "three", color: "blue" },
  5: { name: "four", color: "purple" },
  6: { name: "five", color: "black" },
  7: { name: "six", color: "pink" },
  8: { name: "seven", color: "gray" },
  9: { name: "eight", color: "purple" },
  10: { name: "nine", color: "purple" },
  11: { name: "ten", color: "purple" },
};

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

      ctx.strokeStyle = labelMap[text]["color"];
      ctx.lineWidth = 10;
      ctx.fillStyle = "white";
      ctx.font = "30px Arial";

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
    }
  }
};
