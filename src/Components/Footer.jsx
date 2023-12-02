import React from 'react';

const footer = () => {
    return (
        <footer className="footer">
        <div className="container text-center">
          {/* <a className="btn btn-default btn-round btn-lg btn-icon cc-twitter-follow" href="" target="_blank" rel="tooltip" title="Follow me on Twitter"><i className="fa fa-twitter" /></a> */}
          <a className="btn btn-default btn-round btn-lg btn-icon cc-facebook-follow" href="https://www.facebook.com/nanduri.mg" target="_blank" rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook" /></a>
          {/* <a className="btn btn-default btn-round btn-lg btn-icon cc-github-follow" href="" target="_blank" rel="tooltip" title="Follow me on github"><i className="fa fa-github" /></a> */}
          <a className="btn btn-default btn-round btn-lg btn-icon cc-linkedin-follow" href="https://www.linkedin.com/in/manikanta-ganesh-25402391/" target="_blank" rel="tooltip" title="Connect with me on Linkedin"><i className="fa fa-linkedin" /></a>
          <a className="btn btn-default btn-round btn-lg btn-icon cc-instagram-follow" href="https://www.instagram.com/manikanta_ganesh/" target="_blank" rel="tooltip" title="Follow me on Instagram"><i className="fa fa-instagram" /></a>
          {/* <a className="btn btn-default btn-round btn-lg btn-icon cc-stack-overflow-follow" href="" target="_blank" rel="tooltip" title="Check me on Stackoverflow"><i className="fa fa-stack-overflow" /></a> */}
          {/* <a className="btn btn-default btn-round btn-lg btn-icon cc-google-plus-follow" href="" target="_blank" rel="tooltip" title="Follow me on Google+"><i className="fa fa-google-plus" /></a> */}
        </div>
            <div className="h4 title text-center">Manikanta Ganesh</div>
            <div className="text-center text-muted">
                <p style={{fontSize:4}}>© Creative CV. All rights reserved.<br />Design - <a className="credit" href="https://templateflip.com" target="_blank">TemplateFlip</a></p>
            </div>
        </footer>
    );
}

export default footer;
