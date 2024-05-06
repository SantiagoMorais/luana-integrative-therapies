import { theme } from "@styles/theme"
import styled from "styled-components"
import aboutImage from "@assets/imgs/professionalImage.jpg"

export const AboutMe = () => {
    return (
        <Container>
            <div className="content">
                <h2 className="title">Sobre mim</h2>
                <img className="aboutImage" src={aboutImage} alt="Imagem profissional" />
                <p className="text">
                    Muito prazer, meu nome é Luana, sou cirurgiã-dentista e terapeuta integrativa. Formei-me em 2018 pela UFMG em odontologia e comecei a atuar imediatamente. A partir daí começou minha busca incessante por algo que nem eu mesma sabia ao certo o que era. Sempre fui apaixonada por reabilitar sorrisos, mas sentia falta de algo em meus atendimentos. Apesar de sempre optar por um atendimento humanizado, com tecnologias modernas, havia algo que ainda não estava conseguindo atingir em meu paciente: a vontade de sorrir.
                </p>

                <p className="text">
                    Em 2022, descobri o universo das terapias integrativas como paciente e fui em busca de entender melhor sobre a medicina tradicional chinesa. Desde então, não passo um dia sequer sem estudar um pouco mais sobre as terapias integrativas.
                </p>

                <p className="text">
                    Busquei me especializar nessa área, pois, assim como senti os benefícios e efeitos das práticas integrativas, queria proporcionar isso também para meus pacientes. Realizei pós-graduações em várias áreas dentro das práticas integrativas, com foco na área terapêutica e estética, e venho me aperfeiçoando a cada dia. Através de muito estudo teórico e prático, desenvolvi um método de atendimento no qual realizo diversas práticas integrativas na mesma sessão em prol do mesmo objetivo, e comecei a reparar na eficácia e durabilidade dos resultados.
                </p>

                <p className="text">
                    O segredo da nossa saúde, beleza e bem-estar está no equilíbrio físico, emocional e energético. Então, além de atuar na estética do sorriso, ajudo meu paciente a resgatar a vontade de sorrir! Hoje me sinto mais completa como profissional e muito mais realizada na minha vida pessoal!
                </p>
            </div>
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex: 1;

    .content {
        max-width: 108rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        font-size: 2.5rem;
        font-weight: 300;

        .aboutImage {
            max-width: 40rem;
            width: 100%;
            height: 100%;
            max-height: 45rem;
            object-fit: cover;
            object-position: 0 -6rem;
            border-radius: 5rem;
            border: 1rem solid ${theme.primaryColor};
        }

        .title {
            font-size: 4rem;
            font-weight: 400;
            text-align: center;
        }

        .text {
            text-align: justify;
            color: ${theme.textColor};
            font-size: 2.5rem;
            text-indent: 3rem;
        }
    }
`