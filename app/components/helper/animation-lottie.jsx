"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Indique que l'environnement client est prêt
    setIsClient(true);
  }, []);

  // Retourne null si le rendu est côté serveur
  if (!isClient || !animationPath) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || "95%", // Utilise une largeur par défaut si aucune largeur n'est fournie
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
