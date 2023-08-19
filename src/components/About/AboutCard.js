import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Hollasunkanmi Hollayemi </span>
            from <span className="purple"> lagos, nigeria.</span>
            <br /> I am a skill developer that helps bisnesses, client solves
            ideas and also giving them an online presence to scale their work or
            buisness scale their work or buisness
            <br />
            <br />
            <br />
            <br />
            THINGS THAT I LOVE TO DO WHEN NOT console.log()
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading tech notes
            </li>
            <li className="about-activity">
              <ImPointRight /> Technical writing ("still learning")
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Solving to bring innovative ideas "{" "}
          </p>
          <footer className="blockquote-footer">Hollasunkanmi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
