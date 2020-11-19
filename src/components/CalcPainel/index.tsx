import React, { useState, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from '../../services/api';

import {
  Container,
  Content,
  ContentResult,
  WithoutPlanTitle,
  WithPlanTitle,
} from './styles';

import Input from '../Input';
import InputSelect from '../InputSelect';

interface Response {
  source: string;
  destiny: string;
  time: string;
  plan: string;
}

const CalcPainel: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [finalValue, setFinalValue] = useState([0]);
  const [priceWithoutPlan, setPriceWithoutPlan] = useState([0]);

  async function handleSubmit(data: Response): Promise<void> {
    const response = await api.post('/telzir', data);
    setFinalValue(response.data.finalPrice);
    setPriceWithoutPlan(response.data.priceWithoutPlan);
  }

  return (
    <>
      <Container>
        <Content>
          <Form initialData={{ time: 1 }} onSubmit={handleSubmit} ref={formRef}>
            <h2>Telzir</h2>
            <label>Origem</label>
            <InputSelect name="origem" />
            <label>Destino</label>
            <InputSelect name="destiny" />
            <label>Tempo de ligação</label>
            <Input type="number" name="time" placeholder="Tempo" min="0" />
            <label>
              Escolha seu plano
              {' '}
              <i>FaleMais</i>
            </label>
            <InputSelect name="plan" inputType="Plan" />
            <button type="submit">Verificar</button>
          </Form>
        </Content>
        <ContentResult>
          <h2>Com Plano FaleMais</h2>
          <WithPlanTitle>
            R$
            {finalValue}
          </WithPlanTitle>
          <h2>Sem Plano FaleMais</h2>
          <WithoutPlanTitle>
            R$
            {priceWithoutPlan}
          </WithoutPlanTitle>
        </ContentResult>
      </Container>
    </>
  );
};

export default CalcPainel;
