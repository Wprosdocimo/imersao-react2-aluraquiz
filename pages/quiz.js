import styled from 'styled-components'
import Head from 'next/head';
import db from '../db.json';
// import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 80vw;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    max-width: 350px;
    margin: auto;
    padding: 15px;
  }
`;

export default function Quiz () {
    return (
    <QuizBackground backgroundImage={db.bg}>
        <Head>
            <title>
                {db.title}
            </title>
            <meta property="og:image" content={db.bg} />\
            <meta property="og:title" content="Quiz sobre Pneus" />
        </Head>
        <QuizContainer>
            <QuizLogo />
            
            <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/wprosdocimo" />
    </QuizBackground>
    );
}