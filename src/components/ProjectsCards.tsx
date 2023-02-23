import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import shop from "../assets/shop-montreale.png";
import posts from "../assets/posts.png";
import sudoku from "../assets/sudoku.png";
import db from "../assets/db.png";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project() {
  return (
    <div className="Cards">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={shop} />
          <Card.Body>
            <Card.Title className="headers">Shop-Montreale</Card.Title>
            <Card.Text>
              The application fetches products, users, and categories of
              products from a <span className="intro">REST API</span> and
              displays them on the different pages of the website. The app
              features theme changing (light/dark),
              search(autocomplete)/cart/bookmark functionalities, user
              authentication, and filtering along with a Product Details/User
              Details page. Building the application, I learned to use
              <span className="intro">
                {" "}
                Redux Toolkit, Typescript, and Fetch API
              </span>{" "}
              relatively fast. While working on the project I got a better
              understanding of React and Redux, and feels comfortable using
              those libraries for future projects.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="linksBlock">
          <small className="text-muted"><a href="https://shop-montreale.netlify.app" className="links" target="_blank">link to deploy</a></small>
          <div className="linksBlock">
          <GitHubIcon/>
            <small className="text-muted"><a href="https://github.com/Nanaier/Shop-Montreale" className="links" target="_blank">link to src code</a></small>
            </div></Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={posts} />
          <Card.Body>
            <Card.Title className="headers">Posts App</Card.Title>
            <Card.Text>
              The application fetches posts, users, and comments from a{" "}
              <span className="intro">REST API </span>
              and displays them on different pages accordingly. The app features
              Post and User Details pages, a Home page (Posts page), and a Users
              page. Building this project, Anastasiia learned to use{" "}
              <span className="intro">
                Redux Toolkit, Typescript, React, Material UI, and Fetch API
              </span>
              , and advanced her skills in using React/Redux for fetching and
              displaying data, and her knowledge of using Material UI improved
              tremendously.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="linksBlock">
          <small className="text-muted"><a href="https://posts-app-nanaier.netlify.app/" className="links" target="_blank">link to deploy</a></small>
          <div className="linksBlock">
          <GitHubIcon/>
            <small className="text-muted"><a href="https://github.com/Nanaier/bof-posts" className="links" target="_blank">link to src code</a></small>
            </div></Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={sudoku} />
          <Card.Body>
            <Card.Title className="headers">Sudoku Engine</Card.Title>
            <Card.Text>
              This desktop app generates unique sudoku puzzles based on the
              level preference the player will choose (Easy/Medium/Hard). The
              logic behind Sudoku Engine was written using{" "}
              <span className="intro">Python</span> and GUI was created using
              the module <span className="intro">PyGames</span>. The player can
              input the number he wants using the keyboard. If the player is
              stuck at some point, he can use the Hint button(up to 3 times) or
              press the Solve button to see the fully solved riddle. Also, the
              player can save the last game he played to return to it later.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="linksBlock">
          <GitHubIcon/>
            <small className="text-muted"><a href="https://github.com/Nanaier/kursova_robota" className="links" target="_blank">link to src code</a></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={db} />
          <Card.Body>
            <Card.Title className="headers">DB for Hotel Complex</Card.Title>
            <Card.Text>
              This database serves Its purpose by supporting work of real hotel
              complex. This Hotel DataBase was created using <span className="intro">MySQL</span>. First, the
              necessary tables were created to store information about the
              hotel, such as rooms, employees, customers, and bookings. Primary
              and foreign keys were defined to ensure data integrity and to
              establish relationships between the tables. Next, views were
              created to present data in a specific way and make it easier to
              query. Finally, stored procedures and functions were implemented
              to perform specific tasks, such as calculating the total cost of a
              booking or returning a list of free rooms within a certain time
              period. Overall, the creation of the hotel complex database
              required careful planning and the use of <span className="intro">SQL commands</span> to structure
              and manipulate the data.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="linksBlock">
          <GitHubIcon/>
            <small className="text-muted"><a href="https://github.com/Nanaier/DB-for-Hotel-Complex" className="links" target="_blank">link to src code</a></small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Project;
