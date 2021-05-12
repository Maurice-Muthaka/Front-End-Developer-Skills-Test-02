import React from "react";
function HomeScreen() {
  return (
    <div className="jumbotron d-flex align-items-center" id="home">

      <div class="container">
        <h1 class="display-3">Welcome to Front End Developer Skills Test 02</h1>
        <p className="mt-3 pb-3">My name is Maurice Muthaka from the Democratic Republic of Congo based in Nairobi, Kenya. <br /> 
        I am a Full Stack Web Developer with +4 years of experience in design and development of Web Applications using HTML, CSS, JavaScript, PHP, Python, NodeJs, MySQL. <br />
        I would love to join the Minority Programmers to expand my network and learn from their program.</p>
        <p>
          <a class="btn btn-home-learn btn-lg mr-2" href="/learn" role="button">Learn »</a>
          <a class="btn btn-home-inc btn-lg" href="/incubators" role="button">Incubators »</a>
        </p>
      </div>
    
    </div>
  );
}

export default HomeScreen;