import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/styles";
import { LinksBar } from "../Links";
import { FcHighPriority } from "react-icons/fc";

const useStyles = makeStyles({
  root: {
    backgroundColor: (theme) => theme.color.black,
    color: (theme) => theme.color.white,
    padding: (theme) => theme.space.spacing.pageMargin,
    paddingTop: (theme) => theme.space.header,
  },
  heading: {
    fontSize: (theme) => theme.fontSize.title,
  },
  subHeading: {
    fontSize: (theme) => theme.fontSize.medium,
    marginTop: (theme) => theme.space.s,
    marginBottom: (theme) => theme.space.m,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: (theme) => (theme.mode === "widescreen" ? "" : "100%"),
    alignItems: (theme) => (theme.mode === "widescreen" ? "" : "center"),
  },
  inputField: {
    display: "flex",
    alignItems: "flex-start",
    padding: (theme) => theme.contactForm.inputFieldPadding,
  },
  input: {
    borderRadius: "2em",
    fontSize: (theme) => theme.fontSize.small,
    fontWeight: (theme) => theme.fontWeight.thin,
    padding: (theme) => theme.space.spacing.small,
    height: (theme) => theme.space.inputField.inputBoxHeight,
    outline: "none",
    backgroundColor: (theme) => theme.color.white,
    width: (theme) => theme.space.inputField.inputBox,
    transition: "background-color 0.25s",
    "&:hover": {
      backgroundColor: (theme) => theme.color.background,
    },
  },
  textarea: {
    borderRadius: "1em",
    fontSize: (theme) => theme.fontSize.small,
    fontWeight: (theme) => theme.fontWeight.thin,
    padding: (theme) => theme.space.spacing.small,
    height: (theme) => theme.fontSize.heading,
    width: (theme) => theme.space.inputField.textBox,
    resize: "none",
    outline: "none",
    transition: "background-color 0.25s",
    "&:hover": {
      backgroundColor: (theme) => theme.color.background,
    },
  },
  label: {
    height: (theme) => theme.space.inputField.labelHeight,
    width: (theme) => theme.space.inputField.label,
  },
  buttonBox: {
    marginLeft: (theme) => theme.space.inputField.buttonMarginLeft,
    display: "flex",
    flexDirection: (theme) => (theme.mode === "widescreen" ? "row" : "column"),
    alignItems: "center",
    justifyContent: (theme) => (theme.mode === "widescreen" ? "" : "center"),
    width: (theme) => theme.space.inputField.inputBox,
  },
  button: {
    border: "none",
    backgroundColor: (theme) => theme.color.primary,
    marginBottom: (theme) => theme.space.s,
    borderRadius: "2em",
    height: (theme) => theme.space.inputField.labelHeight,
    width: (theme) => theme.space.inputField.label,
    color: "white",
    outline: "none",
    textAlign: "center",
    verticalAlign: "center",
    transition: "background-color 0.25s",
    "&:hover": {
      backgroundColor: (theme) => theme.color.background,
      color: "black",
    },
  },
  confirmMessage: {
    fontSize: (theme) => theme.fontSize.small,
    paddingLeft: (theme) => theme.fontSize.medium,
    fontWeight: (theme) => theme.fontWeight.bold,
    color: "green",
    animation: "$byebyemessage 5s",
    animationDirection: "normal",
    animationFillMode: "forwards",
  },
  "@keyframes byebyemessage": {
    "0%": {
      opacity: "1",
    },
    "90%": {
      opacity: "1",
    },
    "100%": {
      opacity: "0",
    },
  },
});

const ContactForm = (props) => {
  const { theme } = props;
  const classes = useStyles(theme);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    props.sendQuery(data);
    reset();
  };

  return (
    <div id="contact" className={classes.root}>
      <div className={classes.heading}>Let's talk?</div>
      <div className={classes.subHeading}>
        Thanks for visiting, let me know if you have questions!
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formContainer}>
          <div className={classes.inputField}>
            <label className={classes.label} htmlFor="name">
              Name
            </label>
            <input
              name="name"
              ref={register({ required: true })}
              className={classes.input}
              id="name"
              type="text"
            />
            {errors.name && <FcHighPriority />}
          </div>

          <div className={classes.inputField}>
            <label className={classes.label} htmlFor="name">
              E-Mail
            </label>
            <input
              name="email"
              ref={register({ required: true })}
              className={classes.input}
              type="email"
            />
            {errors.email && <FcHighPriority />}
          </div>

          <div className={classes.inputField}>
            <label className={classes.label} htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              ref={register({ required: true })}
              className={classes.textarea}
              id="message"
            />
            {errors.message && <FcHighPriority />}
          </div>
          <div className={classes.buttonBox}>
            <button type="submit" className={classes.button}>
              Submit
            </button>
            {props.message.messagePassed && (
              <div className={classes.confirmMessage}>
                Cool, I'mma get back to you soon
              </div>
            )}
          </div>
        </div>
      </form>
      <LinksBar {...props} />
    </div>
  );
};

const MapStateToProps = (state) => ({
  message: state.userData || {},
});
const MapDispatchToProps = (dispatch) => ({
  sendQuery: (data) => dispatch({ type: "SEND_QUERY", payload: data }),
});
export default connect(MapStateToProps, MapDispatchToProps)(ContactForm);
