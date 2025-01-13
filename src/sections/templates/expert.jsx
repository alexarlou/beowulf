import React from 'react'
import { Container, Row, Col } from 'reactstrap'


const teamData = [
  {
    photo: '/team1.jpg',
    title: 'Ryan Perez',
    details: 'Co-Founder / CEO',
    linkedin: 'https://www.linkedin.com/in/ryan-perez1?trk=people-guest_people_search-card'
  },
  {
    photo: '/team2.jpg',
    title: 'Mark Hammonds',
    details: 'Co-Founder / CTO',
    linkedin: 'https://www.linkedin.com/in/mhammonds?trk=public_profile_browsemap-profile'
  },
  {
    photo: '/team4.jpg',
    title: 'Hon. Chris Miller',
    details: 'Executive Advisor',
  },
  {
    photo: '/team6.jpg',
    title: 'David Spirk',
    details: 'Executive Advisor',
  },
  {
    photo: '/team5.jpg',
    title: 'Theo Schlossnagle',
    details: 'Executive Advisor',
    linkedin: 'https://www.linkedin.com/in/postwait'
  },
  {
    photo: '/team3.jpg',
    title: 'Erik Maltais',
    details: 'Executive Advisor',
    linkedin: 'https://www.linkedin.com/in/maltaisem'
  },

]


const Expert = () => {

  const teamMembers = (teamSubset) => {
    return teamSubset.map((person, index) => (
      <div className="team-person" key={`team-person-${index}`}>
        <div className="team-img">
          <img alt="" className="img-fluid" src={person.photo} />
          {person.linkedin && <div className="overlay"></div>}
          <div className="social">
            <ul>
              {person.linkedin && (
                <li>
                  <a href={person.linkedin} target="_blank">
                    <img src="/linkedin.svg" alt="" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="team-text">
          <h5 className="e-name">{person.title}</h5>
          <h6 className="post font-secondary">{person.details}</h6>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className="team agency speaker expert-bg saas1" style={{ padding: '0px' }}>
        <div id="about" className="anchor"></div>

        <Container>
          <Col md="10" className="offset-md-1">
            <div className="title title2">
              <h6 className="font-primary borders main-text text-uppercase"><span>meet</span></h6>
              <div className="sub-title">
                <h2 className="title-text text-capitalize text-center">Our Great Team</h2>
              </div>

              <div style={{ margin: '40px auto 0px auto', maxWidth: '700px' }}><p>Our team is comprised of software development and ERP industry veterans alongside U.S. special operations veterans to uniquely address critical gaps in DOD and commercial logistics. The diverse skill set enables us to offer innovative solutions, bringing industry knowledge with specialized insights to enhance efficiency and accountability in both government and commercial applications.</p></div>
            </div>
          </Col>

          <Row className='first-row'>
            <Col lg="12" md="12">
              <div className="team-container left first-row">

                <div className="team-container left first-row">
                  {teamMembers(teamData.slice(0, 2))}
                </div>

                <div className="team-container left remaining-rows">
                  {teamMembers(teamData.slice(2))}
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Expert;