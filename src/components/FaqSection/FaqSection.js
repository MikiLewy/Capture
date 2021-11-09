import Toggle from "components/Toggle";
import React from "react";
import { FaqWrapper } from "./FaqSection.styles";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <FaqWrapper>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do i Start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nostrum id autem sapiente maiores, tempore voluptas iure, est
              delectus obcaecati expedita provident? Molestiae ab, a maiores
              tempore blanditiis voluptates cum?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nostrum id autem sapiente maiores, tempore voluptas iure, est
              delectus obcaecati expedita provident? Molestiae ab, a maiores
              tempore blanditiis voluptates cum?
            </p>
          </div>
        </Toggle>
        <Toggle title="Diffrent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nostrum id autem sapiente maiores, tempore voluptas iure, est
              delectus obcaecati expedita provident? Molestiae ab, a maiores
              tempore blanditiis voluptates cum?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nostrum id autem sapiente maiores, tempore voluptas iure, est
              delectus obcaecati expedita provident? Molestiae ab, a maiores
              tempore blanditiis voluptates cum?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqWrapper>
  );
};

export default FaqSection;
