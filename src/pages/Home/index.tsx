import React from 'react';

import { Container, Content, Title, SubTitle } from './styles';

import CalcPainel from '../../components/CalcPainel';

const Home: React.FC = () => (
  <>
    <Container>
      <Content>
        <CalcPainel />
      </Content>
    </Container>
  </>
);

export default Home;
