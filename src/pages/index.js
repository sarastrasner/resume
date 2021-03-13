import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.title} ·{' '}
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Full stack JavaScript developer with a Master’s degree in Museum
            Studies and a background in museum education and nonprofit
            management.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Manager of the Boeing Academy for STEM Learning
              </h3>
              <div className="subheading mb-3">
                The Museum of Flight, Seattle, WA
              </div>
              <ul>
                <li>
                  Led recruitment, registration, budget, and events for three
                  education programs
                </li>
                <li>
                  Managed operations and logistics for 10+ events per year,
                  ranging in size from 20 to 400 guests
                </li>
                <li>
                  Oversaw 1 direct report, seasonal interns, and volunteers
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2018 - August 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Connections Program Data Specialist</h3>
              <div className="subheading mb-3">
                The Museum of Flight, Seattle, WA
              </div>
              <ul>
                <li>Managed educational student membership of 24,000</li>
                <li>
                  Conceptualized, planned, launched, and executed events for
                  hundreds of members
                </li>
                <li>
                  Planned, articulated, and evaluated program goals for
                  educational student membership program
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2013 - June 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Field Trip Curriculum Specialist</h3>
              <div className="subheading mb-3">
                The Center for Wooden Boats, Seattle, WA
              </div>
              <ul>
                <li>
                  Developed and aligned field trip curriculum with WA state
                  standards
                </li>
                <li>Created field trip intern program for underserved youth</li>
                <li>Recruited, trained, and supervised field trip interns</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                October 2013 2010 - June 2015
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Code Fellows, Seattle, WA</h3>
              <div className="subheading mb-3">
                Certificate - Advanced Software Development in Full Stack
                JavaScript
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2020 - February 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Washington</h3>
              <div className="subheading mb-3">Master of Arts - Museology</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2013 - June 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Louisiana State University</h3>
              <div className="subheading mb-3">
                Bachelor of Arts - Art History
              </div>
              <div className="subheading mb-3">Bachelor of Arts - Spanish</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                September 2007 - December 2011
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-aws"></i>{' '}
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            As a life-long learner with a growth mindset, I enjoy challenging
            myself both mentally and physically - from completing crosswords to
            running several half marathons.
          </p>
          {/* <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p> */}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Personal Projects</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-code text-warning"></i>
              <a
                href="real-housewives-quotes.herokuapp.com/quotes"
                target="_blank"
              >
                Real Housewives Quotes API
              </a>
              <ul>
                <li>
                  full-CRUD API featuring quotes from various Real Housewives
                  franchises
                </li>
                <li>
                  Technologies Used: mongoDB, mongoose, heroku, express,
                  express.Router, jest
                </li>
              </ul>
            </li>
            <li>
              <i className="fa-li fa fa-code text-warning"></i>
              <a href="https://bbdq.netlify.app/" target="_blank">
                BBDQ
              </a>
              <ul>
                <li>
                  a silly web app that displays words that I like, including
                  words of my own invention
                </li>
                <li>Technologies Used: React, Sass</li>
              </ul>
            </li>
            <li>
              <i className="fa-li fa fa-code text-warning"></i>
              <a href="thesearewords.com/" target="_blank">
                These Are Words
              </a>
              <ul>
                <li>
                  a web app to celebrate Women's History month and women in tech
                </li>
                <li>
                  Technologies Used: React, React-Bootstrap, Sass, EmailJS
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
