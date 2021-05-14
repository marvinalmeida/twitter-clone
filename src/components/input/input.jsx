import TextField from "@material-ui/core/TextField"

const Input = (props) => {
    return (
        <TextField
        onChange={props.onChange}
        id="outlined-basic"
        label={props.label}
        variant="outlined"
      />
    )
}

export default Input;