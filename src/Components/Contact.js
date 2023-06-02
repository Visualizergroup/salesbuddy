import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
       <div>
        <h2>About us</h2>
        <p>We are bunch of hungry and a bit crazy Finnish group based in Helsinki. 
          Us combined we have over 30 years of experiense in the SAAS and sales market with an extra tint in conversational solutions</p>
       </div>
      </section>
    );
  }
}

export default Contact;
