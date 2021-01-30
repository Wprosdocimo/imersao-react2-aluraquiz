import React from 'react';

export default function QuizDaGaleraPage() {
  return (
    <div>
      Desafio da proxima aula junto com as animações.
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log('Infos que o next da pra gente', context);
  return {
    props: {}, // will be passed to the page component as props
  };
}