import styled from "@emotion/styled";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PropsHoverPopUp {
  children: string;
  img: string;
}

const Contanier = styled.span`
  position: relative;
  font-weight: bold;
`;

const PopUp = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100%;
`;
export default function HoverPopUp({ img, children }: PropsHoverPopUp) {
  const [isVisible, setIsVisible] = useState(false);

  const variant = {
    hidden: { y: "100%", opacity: 0, scale: 0 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <Contanier
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.span
            variants={variant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.8 }}
          >
            <PopUp src={img} />
          </motion.span>
        )}
      </AnimatePresence>
    </Contanier>
  );
}
