import React from "react";
import styled from "styled-components";
import { color } from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Timeline = styled.section`
  position: relative;
  &:before {
    margin-top: 10px;
    content: "";
    position: absolute;
    top: 0;
    left: 25px;
    height: 100%;
    width: 4px;
    background: ${color.primary};
  }
  @media only screen and (min-width: 1170px) {
    &:before {
      left: 50%;
      margin-left: -2px;
    }
  }
`;

const Node = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0 4px ${color.secoundary};
  background: white;
  @media only screen and (min-width: 1170px) {
    width: 30px;
    height: 30px;
    left: 50%;
    margin-left: -15px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
`;

const WorkIcon = styled(FontAwesomeIcon)`
  padding-right: 5px;
`;
export const Experience = ({ forwardedRef }: any) => {
  return (
    <div style={{ backgroundColor: "gray", padding: 20 }} ref={forwardedRef}>
      <h1
        style={{
          margin: 0,
          textAlign: "center",
          paddingBottom: 10,
          color: "white",
        }}
      >
        Work Experiences
      </h1>
      <Timeline id="cd-timeline">
        <div className="cd-timexline-block">
          <Node>
            <FontAwesomeIcon
              icon={["fas", "crosshairs"]}
              style={{ color: color.primary, fontSize: 24 }}
            />
          </Node>
          <div className="cd-timeline-content">
            <h2>Allianz Technilogy Thailand</h2>
            <div className="timeline-content-info">
              <div>
                <span className="timeline-content-info-title">
                  <WorkIcon icon={["fas", "briefcase"]} />
                  Senior Full Stack Developer
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  June 2020 - Present
                </span>
              </div>
              <div>
                <span className="timeline-content-info-title">
                  <WorkIcon icon={["fas", "briefcase"]} />
                  Advance Full Stack Developer
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  July 2018 - May 2020
                </span>
              </div>
            </div>
            <p>
              Develop product the Roadside Assistance Platform of Allianz car
              insurance for Allianz Partners in Europe, Austraila and Asia.
              Implement Web Application and mobile application on Android and
              iOS(Cross-platform appliction with React Native), develop and
              design microservices for Backend system.
            </p>
            <ul className="content-skills">
              <li>React Native</li>
              <li>Angular</li>
              <li>TypeScript</li>
            </ul>
            <ul className="content-skills">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Docker</li>
            </ul>
            <ul className="content-skills">
              <li>My SQL</li>
              <li>Redis</li>
            </ul>
            <ul className="content-skills">
              <li>Robot Framework</li>
            </ul>
          </div>
        </div>

        <div className="cd-timeline-block">
          <Node />

          <div className="cd-timeline-content">
            <h2>Ascend Corporation</h2>
            <div className="timeline-content-info">
              <span className="timeline-content-info-title">
                <WorkIcon icon={["fas", "briefcase"]} />
                Software Engineer
              </span>
              <span className="timeline-content-info-date">
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                June 2017 - June 2018
              </span>
            </div>
            <p>
              <li>
                Develop and implement microservices about the topup cash card
                system.Co-work with online gaming companies in Thailand and
                implement new design of services to partner for the topup cash
                card to the game online system.
              </li>
              <li>
                Develop and implement microservices about selling cash card via
                True Money application and seller partner in Thailand, change
                legacy project to use new technology and microservices,
                implement and reduce code complicated
              </li>
              <li>
                Develop and design new product about project is web portal about
                config and manage the Value-added service(prepaid and postpaid)
                and manage promotions and cammpaing ads banner.
              </li>
            </p>
            <ul className="content-skills">
              <li>Java</li>
              <li>Spring Boot</li>
            </ul>
            <ul className="content-skills">
              <li>JavaScript</li>
              <li>React</li>
            </ul>
            <ul className="content-skills">
              <li>My SQL</li>
              <li>Oracle</li>
            </ul>
            <ul className="content-skills">
              <li>Robot Framework</li>
            </ul>
          </div>
        </div>

        <div className="cd-timeline-block">
          <Node />

          <div className="cd-timeline-content">
            <h2>National University of Singapore</h2>
            <div className="timeline-content-info">
              <span className="timeline-content-info-title">
                <WorkIcon icon={["fas", "briefcase"]} />
                Student Internship
              </span>
              <span className="timeline-content-info-date">
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                October 2016 - January 2017
              </span>
            </div>
            <p>
              Working alongside the designer team implementing the designs, also
              developing custom solutions to address team necessities.
            </p>
            <ul className="content-skills">
              <li>Computer Vision</li>
              <li>ResNet</li>
              <li>R-FCN</li>
              <li>CNN</li>
            </ul>
          </div>
        </div>
      </Timeline>
    </div>
  );
};
