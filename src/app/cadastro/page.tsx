"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { useForm, SubmitHandler } from "react-hook-form";

import { ModalError, ModalSuccess } from "./modal";

import { insertProduto } from "./action";

type Produto = any;

export default function Page() {
  const { register, handleSubmit, reset, setValue } = useForm<Produto>();

  const onSubmit: SubmitHandler<Produto> = async function (data) {
    const value = await insertProduto(data);
    if (!value)
      return ModalError.fire();
    ModalSuccess.fire();
    reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>
            ID:{" "}
            <Form.Control
              type="number"
              {...register("id", { valueAsNumber: true })}
              min={0}
              disabled
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Tipo comercial: <Form.Control type="text" {...register("tipo")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Descrição: <Form.Control type="text" {...register("nome")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Cor: <Form.Control type="text" {...register("cor")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Raio mínimo de dobra dentro do conduite:{" "}
            <Form.Control
              type="number"
              step="any"
              {...register("raio", { valueAsNumber: true })}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Isolação:{" "}
            <Form.Control
              type="number"
              step="any"
              {...register("isolacao", { valueAsNumber: true })}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Unidade da medida da bitola:{" "}
            <Form.Control
              type="number"
              step="any"
              {...register("bitola", { valueAsNumber: true })}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Preço de compra sem os impostos:{" "}
            <Form.Control
              type="number"
              step={0.01}
              {...register("precoCompra", { valueAsNumber: true })}
              onChange={(event) => {
                let value: any;
                value = parseFloat(event.target.value);
                value /= 0.6;
                value = value.toFixed(2);
                value = parseFloat(value);
                setValue("precoVendaLiquido", value);
              }}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Preço de venda sem os impostos
            <InputGroup>
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                type="number"
                step={0.01}
                {...register("precoVendaLiquido", { valueAsNumber: true })}
                onChange={(event) => {
                  let value: any;
                  value = parseFloat(event.target.value);
                  value /= 0.6;
                  value = value.toFixed(2);
                  value = parseFloat(value);
                  setValue("precoVendaImposto", value);
                }}
              />
            </InputGroup>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Preço de venda com os impostos:
            <InputGroup>
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                type="number"
                step={0.01}
                {...register("precoVendaImposto", { valueAsNumber: true })}
              />
            </InputGroup>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Quantidade:
            <InputGroup>
              <Form.Control
                type="number"
                {...register("quantidade", { valueAsNumber: true })}
              />{" "}
              <InputGroup.Text>metros</InputGroup.Text>
            </InputGroup>
          </Form.Label>
        </Form.Group>
        <Button variant="danger" onClick={() => reset()}>
          Limpar
        </Button>
        <Button variant="warning" disabled>
          Editar
        </Button>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
