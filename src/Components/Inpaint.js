import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Inpaint extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="inpaintai">  
        <Fade left duration={1000} di stance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>InpaintAi</h1>

              
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Inpaint;
