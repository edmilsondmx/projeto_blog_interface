import React from "react";

import About from "./About";
import Section from "components/atoms/Section";
import Grid from "components/atoms/Grid";
import { ImageContainer, Content } from "./About";
import AboutSvg from "../../draws/Blog";
import Heading from "components/atoms/Heading";

export default {
  title: "Components/Pages/About",
  component: About,
};

export const usage = () => (
  <>
    <Section>
      <Grid md={2}>
        <Content>
          <p>
            Bem-vindo ao nosso blog! Aqui você encontrará uma variedade de
            artigos e recursos sobre diversos assuntos relacionados ao nosso
            nicho de mercado. Nosso objetivo é fornecer informações relevantes e
            úteis para nossos leitores, de forma clara e concisa.
          </p>
          <p>
            Nós acreditamos que a educação e o compartilhamento de informações
            são fundamentais para o sucesso em qualquer empreendimento. Por
            isso, nosso blog é uma extensão da nossa missão de ajudar nossos
            clientes a atingirem seus objetivos e alcançarem o sucesso em seus
            negócios.
          </p>
          <p>
            Nossos artigos são escritos por profissionais experientes e
            apaixonados pelo nosso nicho de mercado. Eles fornecem insights
            valiosos, dicas práticas e análises aprofundadas sobre tendências e
            melhores práticas. Nós também convidamos especialistas e líderes de
            opinião para contribuir com seus conhecimentos e experiências.
          </p>
          <ul>
            <li>Educação e aprendizado contínuos.</li>
            <li>Mantenha-se atualizado sobre as tendências do mercado.</li>
            <li>Melhore suas habilidades.</li>
            <li>Comunidade de aprendizado.</li>
            <li>Gratuito e acessível.</li>
          </ul>
        </Content>
        <Content>
          <p>
            Agradecemos por escolher nosso blog como uma fonte confiável de
            informação e estamos comprometidos em fornecer conteúdo relevante e
            de qualidade. Não hesite em entrar em contato conosco caso tenha
            alguma sugestão ou comentário sobre nossos artigos ou nosso blog
            como um todo. Obrigado por nos acompanhar!
          </p>
          <ImageContainer>
            <AboutSvg />
          </ImageContainer>
        </Content>
      </Grid>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h4>Missão</h4>
          </Heading>
          <p>
            Nossa missão é ajudar nossos clientes a alcançar seus objetivos e
            ter sucesso em seus negócios, fornecendo soluções inovadoras e de
            alta qualidade, além de informações valiosas e recursos úteis por
            meio do nosso blog.
          </p>
        </div>
        <div>
          <Heading>
            <h4>Visão</h4>
          </Heading>
          <p>
            Nossa visão é nos tornarmos uma referência em nosso nicho de
            mercado, reconhecidos por nossos clientes como parceiros confiáveis
            e especialistas em soluções inovadoras e de alta qualidade. Queremos
            continuar crescendo e evoluindo para fornecer sempre o melhor para
            nossos clientes e leitores.
          </p>
        </div>
      </Grid>
    </Section>
  </>
);
