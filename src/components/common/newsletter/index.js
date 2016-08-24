import './index.scss'
import React from 'react';

export default function Newsletter () {
  return (
    <div className="newsletter">
      <div className="home--newsletter--title">
        <h2>Accelerate your career with React</h2>
      </div>
      <p>Get notified about future workshops</p>
      <div id="mc_embed_signup">
        <form action="//reactuniversity.us12.list-manage.com/subscribe/post?u=b2288653d99f8d9216e217796&amp;id=5079f900cd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <input type="email" name="EMAIL" className="subscriber-email" id="mce-EMAIL" placeholder="email address" required />
            <div style={{"position": "absolute", "left": "-5000px", "ariaHidden": true}}>
              <input type="text" name="b_b2288653d99f8d9216e217796_5079f900cd" tabIndex="-1"  />
            </div>
            <input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="btn-register" />
          </div>
        </form>
      </div>
    </div>
  );
}
