import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      paddingRight: "20%",
    },
    hi: {
      color: "red",
    },
    paragraph: {
      paddingRight: "20%",
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <Box
      component="main"
      role="main"
      itemScope
      itemType="https://schema.org/Person"
      className={classes.root}
    >
      <meta itemProp="familyName" content="Tomar" />
      <meta itemProp="gender" content="https://schema.org/Male" />
      <meta itemProp="name" content="Vishal Mandloi" />
      <Typography
        className={classes.title}
        variant="h2"
        component="h1"
        gutterBottom
      >
        <span className={classes.hi}>Hi, </span>I'm{" "}
        <span itemProp="givenName">Vishal Mandloi</span>
      </Typography>
      <Typography
        variant="h4"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        A fullstack developer
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
      A result-oriented and self-motivated Software developer, Constant learner and ability to adapt to new technologies. looking for a challenging career where I can implement my coding
                knowledge to further enhance my skills.  Strong knowledge of HTML, CSS, Javascript, React and Redux{" "}   My field of interest is building full fletch and user-friendly application.
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
