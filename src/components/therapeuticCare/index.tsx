import styled from "styled-components"
import luanaWithToskaniProduct from "@assets/imageToTherapeuticCare.jpeg" 

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
                    Caso seja uma preferência do paciente sentir os benefícios apenas de uma terapia, é possível agendar o horário específico, e a duração dependerá de qual prática de será realizada. 
                </p>
            </div>
            <img className="image" src={luanaWithToskaniProduct} alt="Dra.Luana" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 8rem 3rem;
    gap: 3rem;

    .info {
        max-width: 50rem;
        font-size: 2.5rem;
        text-align: justify;
        font-weight: 300;

        .title {
            margin-bottom: 2rem;
            font-size: 4rem;
            font-weight: 400;
        }
    }

    .image {
        min-width: 50rem;
        max-height: 50rem;
        object-fit: cover;
        border-radius: 1.5rem;
    }
`