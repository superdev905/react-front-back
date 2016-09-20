import './index.scss';
import React   from 'react';
import Tagline from 'components/common/tagline';
import Newsletter from 'components/common/newsletter';


export default function About() {
  return (
    <div className="about">
      <Tagline title="About"/>
      <div className="site-content">
       <div className="row">
        <div className="small-10 small-offset-1 large-8 large-offset-2 columns">
          <p>
          React University was created to help JavaScript engineers learn new
          skills from book authors, community leaders, and open-source
          contributors. We are commited to providing the best learning
          experience for our students via our workshops, videos, and blog posts.
          </p>
          <h3>Code of Conduct</h3>
          <p>
          All attendees, speakers, sponsors and volunteers at are required to
          agree with the following code of conduct. We are expecting cooperation
          from all participants to help ensuring a safe environment for
          everyone.
          </p>
          <p>
            We are dedicated to providing a harassment-free experience for
          everyone, regardless of gender, gender identity and expression, age,
          sexual orientation, disability, physical appearance, body size, race,
          ethnicity, religion (or lack thereof), or technology choices. We do not
          tolerate harassment of in any form. Sexual language and imagery is not
          appropriate for any of our venues venue, including talks, workshops,
          parties, Twitter and other online media. Participants violating these
          rules may be sanctioned or expelled from the any event without a refund
          at the discretion of the organisers.
          </p>
        </div>
       </div>
      </div>
      <Newsletter />
    </div>
  );
}
