import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    display: 'flex',
    justifyContent: 'center',
    width: "80%",
  },
  title: {
    display: "flex",
    justifyContent: "space-between"
  },
  buttons: {
    margin: "8px"
  }
}));