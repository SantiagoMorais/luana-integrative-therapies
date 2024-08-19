import styled from "styled-components"
import luanaWithProducts from "@assets/imgs/imageToTherapeuticCare.jpg" 
import { fontSize, fontWeight } from "@styles/theme"

export const TherapeuticCare = () => {
    return (
        <Container>
            <div className="info">
                <h2 className="title">Como funcionam os atendimentos?</h2>
                <p className="functionality">
                    Você será atendido mediante a agendamento prévio, basta entrar em contato. As sessões têm em média 01:30hs de duração, e diante de uma anamnese integrativa escolhemos quais terapias vamos utilizar para as suas queixas. 
                    <br />
                    A duração do tratamento e espaço entre sessões dependerá das queixas e da resposta biológica. Já obtemos resultados positivos e de melhora desde a primeira sessão.
                    <br />
                    Caso seja uma preferência do paciente sentir os benefícios apenas de uma terapia, é possível agendar o horário específico, e a duração dependerá de qual prática será realizada. 
                </p>
            </div>
            <img className="image" src={luanaWithProducts} alt="Dra.Luana" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 8rem 3rem;
    gap: 3rem;
    flex-wrap: wrap-reverse;
    align-items: flex-end;

    .info, .image {
        flex: 1;
        max-width: 50rem;
        min-width: 30rem;
        width: 40%;
    }

    .info {
        font-size: ${fontSize.basicSize};
        font-weight: ${fontWeight.thin};

        .title {
            margin-bottom: 2rem;
            font-size: ${fontSize.extraLargeSize};
            font-weight: ${fontWeight.medium};
        }

        .functionality {
            text-align: justify;
        }
    }

    .image {
        max-height: 60rem;
        min-height: 40rem;
        object-fit: cover;
        border-radius: 1.5rem;
        box-shadow: .5rem .5rem 1rem rgba(0,0,0,.3);
    }

    @media (max-width: 768px) {
        padding: 3rem;
    }

    @media (max-width: 425px) {
        padding: 2rem;
        gap: 1rem;

        .info, .image {
            min-width: 20rem;
        }
        
        .info {
            font-size: ${fontSize.smallSize};
            font-weight: 400;
            
            .title {
                margin-bottom: 1rem;
                font-size: ${fontSize.mediumSize};
                text-align: center;
            }
        }
    }
`