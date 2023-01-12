import {
  memo
} from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Hidden,
  useTheme,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import TwitterIcon from "@material-ui/icons/Twitter";
import { SiLeetcode } from 'react-icons/si';


import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.type === "dark" ? "#091c34" : "#ccff90",

      paddingBottom: theme.spacing(5),
      
    },
    wave: {
      width: "100%",
      height: theme.spacing(50),
      [theme.breakpoints.down("md")]: {
        height: theme.spacing(25),
      },
    },
    main: {
       margin:"auto",
    },
    left: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      
    },
    leftContainer: {
      flexGrow: 1,
      
    },
    iconsGrid: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    socialItem: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.secondary.light,
      },
    },
    illustrationContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    illustration: {
      width: "80%",
    },
    sendButton: {
      marginTop: theme.spacing(2),
    },
  })
);

function Footer() {
 
  const classes = useStyles();
  const theme = useTheme();
  return (
    <footer className={classes.root}>
      <img
        className={classes.wave}
        src={
          theme.palette.type === "dark"
            ? "/assets/footer-wave-dark.svg"
            : "/assets/footer-wave-light.svg"
        }
        alt="wave for styling and separating sections"
      />
      <Container id="contact" >
        <Grid container >
          <Grid item md={6} sm={12} className={classes.main}>
            <Typography variant="h3" align="left">
              Connect with me
            </Typography>
            <article
              itemScope
              itemType="http://schema.org/Author"
              className={classes.left}
            >
              <Grid container className={classes.leftContainer}>
                <Grid item md={6} sm={6} className={classes.iconsGrid}>
                  <Link
                    className={classes.socialItem}
                    href="https://github.com/Vishall001"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <GitHubIcon className={classes.icon} fontSize="large" />

                    <Typography>Github</Typography>
                  </Link>

                  <Link
                    className={classes.socialItem}
                    href="https://www.linkedin.com/in/vishal-mandloii/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <LinkedInIcon className={classes.icon} fontSize="large" />

                    <Typography>LinkedIn</Typography>
                  </Link>

                  <Link
                    className={classes.socialItem}
                    href="https://leetcode.com/vishalmandloi62/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <SiLeetcode className={classes.icon} fontSize="30px" />

                    <Typography>Leetcode</Typography>
                  </Link>

                  <Link
                    className={classes.socialItem}
                    href="mailto:vishalmandloi62@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <MailIcon fontSize="large" className={classes.icon} />
                    <Typography>vishalmandloi62@gmail.com</Typography>
                  </Link>
                </Grid>

                <Grid
                  item
                  md={6}
                  sm={6}
                  className={classes.illustrationContainer}
                >
                  <Hidden xsDown>
                    <img
                      src="/assets/message.svg"
                      className={classes.illustration}
                      alt="message illustration"
                    />
                  </Hidden>
                </Grid>
              </Grid>
            </article>
          </Grid>
          {/* <Grid item md={6} sm={12}>
            <Typography variant="h3" align="left">
              Say Hi
            </Typography>
            <form onSubmit={handleFormSubmit}>
              <TextField
                label="Name"
                fullWidth
                margin="dense"
                variant="outlined"
                color="secondary"
                inputRef={nameRef}
                required
                id="form-name"
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="dense"
                variant="outlined"
                color="secondary"
                inputRef={emailRef}
                required
                placeholder="So I can get back to you"
                id="form-email"
              />
              <TextField
                label="Message"
                fullWidth
                margin="dense"
                multiline
                rows={5}
                variant="outlined"
                color="secondary"
                inputRef={messageRef}
                required
                id="form-message"
              />
              <Button
                variant="outlined"
                className={classes.sendButton}
                color="secondary"
                endIcon={<SendIcon />}
                type="submit"
              >
                send
              </Button>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={message}
              action={
                <>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </>
              }
            />
          </Grid> */}
        </Grid>
      </Container>
    </footer>
  );
}

export default memo(Footer);
