import styled from "styled-components";
import data from "@json/index.json";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-collapse";

export const FAQs = () => {
   const [questionSelected, setQuestionSelected] = useState("");

   const handleAccordion = (faq: string) => {
      questionSelected === faq
         ? setQuestionSelected("")
         : setQuestionSelected(faq);
   };

   return (
      <Container>
         <h2 className="title">Perguntas Frequentes</h2>
         {data.faqs && (
            <ul className="faqs">
               {data.faqs.map((faq, index) => (
                  <li
                     className="faq"
                     key={index}
                     onClick={() => handleAccordion(faq.question)}
                  >
                     <div className="questionBar" data-testid="question">
                        <p className="question">{faq.question}</p>
                        <FontAwesomeIcon
                           icon={faChevronDown}
                           className={`icon ${
                              questionSelected === faq.question && "rotate"
                           }`}
                        />
                     </div>
                     {/* <p
                        className={`answer ${
                           questionSelected === faq.question ? "selected" : ""
                        }`}
                        data-testid="answer"
                     >
                        {faq.answer}
                     </p> */}
                     <Collapse isOpened={questionSelected === faq.question}>
                        {faq.answer}
                     </Collapse>
                  </li>
               ))}
            </ul>
         )}
      </Container>
   );
};

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 3rem;
   margin-bottom: 5rem;
   padding: 0 3rem;

   .ReactCollapse--collapse {
      transition: height .5s ease;
      margin: 1rem 1rem 0;
      font-size: ${fontSize.smallSize};
      font-weight: ${fontWeight.medium};
   }

   .title {
      font-size: ${fontSize.extraLargeSize};
      font-weight: ${fontWeight.medium};
   }

   .faqs {
      max-width: 100rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-size: ${fontSize.smallSize};

      .faq {
         cursor: pointer;

         &:hover > .question {
            opacity: 0.6;
         }

         .questionBar {
            font-size: ${fontSize.basicSize};
            padding-bottom: 1rem;
            border-bottom: 0.2rem solid ${theme.secondaryColor};
            transition: 0.3s;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            font-weight: ${fontWeight.medium};

            .question {
               width: 100%;
               text-align: left;
            }

            .icon {
               transition: 0.5s ease;

               &.rotate {
                  transform: rotate(180deg);
               }
            }
         }
      }
   }

   @media (max-width: 768px) {
      padding: 0 2rem;

      .title {
         font-size: ${fontSize.mediumSize};
      }

      .faqs {
         .faq {
            .questionBar {
               text-align: center;
               font-size: ${fontSize.smallSize};
            }
         }
      }
   }
`;
