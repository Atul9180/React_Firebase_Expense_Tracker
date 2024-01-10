import { Container, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN MailBox</h1>
          <p className="text-center mb-4">
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </p>
          <div className="d-flex">
            {userInfo ? (
              <h3>Welcome {userInfo?.name}</h3>
            ) : (
              <>
                <Button
                  variant="primary"
                  as={Link}
                  to="/login"
                  className="me-3"
                >
                  Sign In
                </Button>
                <Button variant="secondary" as={Link} to="/signup">
                  Register
                </Button>
              </>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
