import { Container, Button,Typography,useMediaQuery,useTheme } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

import { Row } from "react-bootstrap";
function AllProjectsButton() {
  const theme = useTheme();
  return (
    <Container style={{ textAlign: "center" }}>
      <Link href="/projects" passHref>
        <Button
          style={{ marginTop: "5rem" }}
          component="a"
          color="secondary"
          size="large"
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
        >
          View All Projects
        </Button>
      </Link>
      <Typography  variant={useMediaQuery(theme.breakpoints.up("sm")) ? "h4" : "h5"}
          component="h2"
          align="center"
          style={{
            fontWeight: useMediaQuery(theme.breakpoints.up("sm"))
              ? theme.typography.fontWeightLight
              : theme.typography.fontWeightRegular,
          }}>
        <Github/>
      </Typography>
    </Container>
  );
}

export default AllProjectsButton;



function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px",color:"white",  }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px"}}>
        Days I Code
      </h1>
      <GitHubCalendar
       style={{width:"100%",margin:"auto"}}
        username="Vishall001"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

