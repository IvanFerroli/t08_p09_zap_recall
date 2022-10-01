import styled from "styled-components";
import GlobalStyle from "../assets/GlobalStyle";
import Logo from "../assets/img/logo.png";
import SetaVirar from "../assets/img/seta_virar.png";
import SetaPlay from "../assets/img/seta_play.png";

export default function App() {
    return (
        <>
            <ScreenContainer>
                <LogoContainer>
                    <img src={Logo} alt="Logo ZapRecall" />
                    <h1>ZapRecall</h1>
                </LogoContainer>

                <PerguntaAberta>
                    <p>O que é JSX?</p>
                    <img src={SetaVirar} alt="Virar flashcard" />
                </PerguntaAberta>
                <PerguntaFechada>
                    <p>Pergunta 2</p>
                    <img src={SetaPlay} alt="Jogar flashcard" />
                </PerguntaFechada>
                <PerguntaFechada>
                    <p>Pergunta 3</p>
                    <img src={SetaPlay} alt="Jogar flashcard" />
                </PerguntaFechada>
                <PerguntaFechada>
                    <p>Pergunta 4</p>
                    <img src={SetaPlay} alt="Jogar flashcard" />
                </PerguntaFechada>

            <FooterConcluidos>
                <ContainerBotoes>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </ContainerBotoes>
                <span>0/4 CONCLUÍDOS</span>
            </FooterConcluidos>
            </ScreenContainer>
            <GlobalStyle />
        </>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`
const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`
const ContainerBotoes = styled.div`
    /* Você vai precisar trocar a cor dos botões e alguns textos!
    VERDE = "#2FBE34"
    AMARELO = "#FF922E"
    VERMELHO = "#FF3030"
    CINZA = "#333333" 
    */

    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: blue;
        border-radius: 5px;
        border: 1px solid blue;
        padding:5px;
    }
`
const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`