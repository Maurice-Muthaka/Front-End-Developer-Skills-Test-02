import React from "react";
function HomeScreen() {
  return (
    <div className="jumbotron d-flex align-items-center" id="home">

      <div class="container">
        <h1 class="display-3">Hello, world!</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p>
          <a class="btn btn-primary btn-lg mr-2" href="/learn" role="button">Learn »</a>
          <a class="btn btn-outline-primary btn-lg" href="/incubators" role="button">Incubators »</a>
        </p>
      </div>
    
    </div>
  );
}

export default HomeScreen;