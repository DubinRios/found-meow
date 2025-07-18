import React, { useEffect, useState } from "react";
import "./AdoptionCounter.css";

const AdoptionCounter = () => {
  const [count, setCount] = useState(0);
  const target = 41886;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return prev + 86;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const digits = count.toString().padStart(5, "0").split("");

  return (
    <section className="adoption-counter">
      <div className="adoption-counter__container">
        <div className="adoption-counter__digits">
          {digits.map((digit, index) => (
            <div key={index} className="adoption-counter__digit">
              {digit}
            </div>
          ))}
        </div>
        <p className="adoption-counter__text">
          <i class="fa-solid fa-house adoption-counter__icon"></i> &nbsp; Gatitos que han encontrado un nuevo hogar. <br />
          <i class="fa-solid fa-heart adoption-counter__icon"></i> &nbsp; Historias de adopción que nos llenan de alegría.
        </p>
        <p className="adoption-counter__note">
          *Adopciones virtuales desde 2018.
        </p>
      </div>
    </section>
  );
};

export default AdoptionCounter;
