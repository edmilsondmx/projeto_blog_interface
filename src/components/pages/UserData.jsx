import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Menu from "components/molecules/Menu";
import Section from "components/atoms/Section";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import Footer from "components/organisms/Footer";
import UserType from "models/types/UserType";

const ContentProfile = styled.div`
  margin-top: 20px;
  padding: 50px 0;
  display: flex;
  justify-content: center;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-position: center;
  `};
`;

const ImgProfile = styled.img`
  border-radius: 100%;
  max-width: 130px;
`;

const DataUser = styled.div`
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.bgCard};
  border-radius: 6px;
  padding: 10px;

  h5 {
    margin-top: 5px;
  }

  span {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.main};
  }

  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.2rem;
  }
`;

const UserData = ({ image, avatar, user, address, company }) => (
  <>
    <Menu />
    <Section>
      <ContentProfile image={image} data-testid="userData">
        <ImgProfile src={avatar} />
      </ContentProfile>
      <Grid md={2}>
        <DataUser>
          <Heading>
            <h5>Dados Pessoais</h5>
          </Heading>
          <div>
            <span>Name:</span>
            <p>{user.name}</p>
            <span>Username:</span>
            <p>{user.username}</p>
            <span>E-mail:</span>
            <p>{user.email}</p>
            <span>Phone:</span>
            <p>{user.email}</p>
            <span>Website:</span>
            <p>{user.email}</p>
          </div>
        </DataUser>
        <DataUser>
          <Heading>
            <h5>Endereço</h5>
          </Heading>
          <div>
            <span>Street:</span>
            <p>{user?.address?.street}</p>
            <span>Suite:</span>
            <p>{user.address?.suite}</p>
            <span>City:</span>
            <p>{user.address?.city}</p>
            <span>ZipCode:</span>
            <p>{user.address?.zipcode}</p>
          </div>
        </DataUser>
        <DataUser>
          <Heading>
            <h5>Geo-Localização</h5>
          </Heading>
          <div>
            <span>Latitude:</span>
            <p>{user.address?.geo.lat}</p>
            <span>Longitude:</span>
            <p>{user.address?.geo.lng}</p>
          </div>
        </DataUser>
        <DataUser>
          <Heading>
            <h5>Empresa</h5>
          </Heading>
          <div>
            <span>Name:</span>
            <p>{user.company?.name}</p>
            <span>Catch Phrase:</span>
            <p>{user.company?.catchPhrase}</p>
            <span>BS:</span>
            <p>{user.company?.bs}</p>
          </div>
        </DataUser>
      </Grid>
    </Section>
    <Footer />
  </>
);
UserData.defaultProps = {
  image: undefined,
  avatar: undefined,
  user: undefined,
};

UserData.propTypes = {
  image: PropTypes.node,
  avatar: PropTypes.node,
  user: PropTypes.objectOf(UserType),
};

export default UserData;
