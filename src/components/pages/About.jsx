import React from "react";
import styled from "styled-components";

import Menu from "../molecules/Menu";
import Footer from "../organisms/Footer";
import Section from "../atoms/Section";
import Grid from "../atoms/Grid";
import AboutSvg from "../../draws/Blog";
import Heading from "../atoms/Heading";

const ImageContainer = styled.div`
  svg {
    margin-top: 20px;
    width: 100%;
    height: auto;
    max-width: 480px;
    color: ${(props) => props.theme.colors.main};
  }
`;
const Content = styled.div`
  margin-top: 30px;
`;

const About = () => (
  <>
    <Menu />
    <Section>
      <h2>Know our history</h2>

      <Grid md={2}>
        <Content>
          <p>
            Welcome to our blog! Here you will find a variety of articles and
            resources on various subjects related to our market niche. Our aim
            is to provide relevant information and useful to our readers, in a
            clear and concise way.
          </p>
          <p>
            We believe that education and information sharing are critical to
            success in any endeavor. Per this, our blog is an extension of our
            mission to help our clients to achieve their goals and achieve
            success in their business.
          </p>
          <p>
            Our articles are written by experienced professionals and passionate
            about our niche market. They provide insights valuable resources,
            practical tips and in-depth analysis on trends and best practices.
            We also invited experts and leaders from opinion to contribute with
            their knowledge and experiences.
          </p>
          <ul>
            <li>Continuing education and learning.</li>
            <li>Keep up to date on market trends.</li>
            <li>Improve your skills.</li>
            <li>Learning Community.</li>
            <li>Free and affordable.</li>
          </ul>
        </Content>
        <Content>
          <p>
            Thank you for choosing our blog as a trusted source of information
            and we are committed to providing relevant content and Of Quality.
            Do not hesitate to contact us if you have any suggestions or
            comments about our articles or our blog as a whole. Thanks for
            following us!
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
            <h4>Mission</h4>
          </Heading>
          <p>
            Our mission is to help our customers achieve their goals and succeed
            in their business by providing innovative and high quality, plus
            valuable information and helpful resources by through our blog.
          </p>
        </div>
        <div>
          <Heading>
            <h4>Vision</h4>
          </Heading>
          <p>
            Our vision is to become a reference in our niche of market,
            recognized by our customers as reliable partners and specialists in
            innovative and high quality solutions. we want continue to grow and
            evolve to always provide the best for our customers and readers.
          </p>
        </div>
      </Grid>
    </Section>
    <Footer />
  </>
);

export default About;
