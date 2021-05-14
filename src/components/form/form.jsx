import { Button } from "@material-ui/core";
import Input from "../input/input"
import {Wrapper} from "./form.styles"

const Form = (props) => {
  return (
    <Wrapper>
      <Input
        onChange={props.handleLogin}
        label="Celular, e-mail ou nome de usuário"
      />
      <Input
        onChange={props.handlePassword}
        label="Senha"
      />

      <Button
        disabled={!props.activeButton}
        variant="contained"
        color="primary"
        disableElevation
      >
        Entrar
      </Button>
    </Wrapper>
  );
};

export default Form;
