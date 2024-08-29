import styled from "styled-components";
import data from "@json/index.json";
import { faqBreakPoints, fontSize, fontWeight, theme } from "@styles/theme";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
                     <p
                        className={`answer ${
                           questionSelected === faq.question ? "selected" : ""
                        }`}
                        data-testid="answer"
                     >
                        {faq.answer}
                     </p>
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

         .answer {
            height: 0;
            overflow: hidden;
            transition: 0.5s ease;
            margin-top: 1rem;
            padding: 0 1rem;
            border-radius: 1rem;
            opacity: 0;
            transform: translateY(-2rem);

            &.selected {
               height: 10rem;
               opacity: 1;
               transform: translateY(0rem);
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

   ${faqBreakPoints}
`;
