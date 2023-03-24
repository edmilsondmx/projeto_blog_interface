import React from "react";

import Menu from "./Menu";
import Section from "components/atoms/Section";
import { Header, Profile, ContainerNav } from "./Menu";
import Button from "components/atoms/Button";

export default {
  title: "Components/Molecules/Menu",
  component: Menu,
};

export const usage = () => (
  <Header>
    <Section>
      <ContainerNav>
        <Profile>
          <img
            src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            alt="avatar para perfil"
          />
          <h2>
            Blog <span>|</span> Edmilson Gomes
          </h2>
        </Profile>
        <nav>
          <ul>
            <li>
              <Button>Home</Button>
            </li>
            <li>
              <Button>Sobre</Button>
            </li>
          </ul>
        </nav>
      </ContainerNav>
    </Section>
  </Header>
);
