export default function directionAnimate(
  direction: string,
  effectScala: boolean
) {
  const templateHorizontal = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  };
  const templateVertical = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };
  if (effectScala) {
    Object.assign(templateHorizontal.hidden, { scale: 0.2 });
    Object.assign(templateHorizontal.visible, { scale: 1 });
    Object.assign(templateVertical.hidden, { scale: 0.2 });
    Object.assign(templateVertical.visible, { scale: 1 });
  }

  switch (direction) {
    case "left":
      return templateHorizontal;
    case "right":
      templateHorizontal.hidden.x = "-100%";
      return templateHorizontal;
    case "up":
      return templateVertical;
    case "down":
      templateVertical.hidden.y = "-100%";
      return templateVertical;
  }
}
