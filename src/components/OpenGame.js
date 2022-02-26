import { useState } from "react";
import Button from "./Button";

const OpenGame = ({ maxSteps, defaultStep, play, startPlay }) => {
  const [step, setStep] = useState(defaultStep);
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
    startPlay && startPlay(e.target.steps.value);
  };

  const handleChange = (e) => {
    setStep(e.target.value);
  };

  return (
    <>
      {(isOpen || !play) && (
        <div
          onAnimationEnd={() => {
            play && setIsOpen(false);
          }}
          className={`fixed left-0 top-0 right-0 bottom-0 bg-[#3b83f6b0] ${
            play ? "animate-hide" : "animate-show"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex items-center flex-col justify-center h-full gap-6"
          >
            <div className="select">
              <div className="w-full text-center mb-2">
                <label className="tracking-widest">KROKI</label>
              </div>
              <select
                name="steps"
                value={step}
                onChange={handleChange}
                className="text-xl rounded-md border-2 border-green-700 py-2 px-16"
              >
                {Array(maxSteps)
                  .fill(0)
                  .map((el, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
              </select>
            </div>
            <Button label="GRAJ" type="submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default OpenGame;
