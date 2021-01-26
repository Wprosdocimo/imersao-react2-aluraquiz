import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from "next/link";
import db from '../db.json';
// import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          {db.title}
        </title>
        <meta property="og:image" content={db.bg} />
        \
        <meta property="og:title" content="Quiz sobre Pneus" />
      </Head>
      <QuizContainer>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <QuizLogo />
          </a>
        </Link>
        <Widget>
          <Widget.Header>
            <h1>{name}</h1>
          </Widget.Header>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/wprosdocimo" />
    </QuizBackground>
  );
}
