import React from "react";
import { Component } from "react";

import Contact from './ContactComponent';

export default class Contactpage extends React.Component {

	render() {
		return (
			<div className="page-wrap">
				<section id="main">
					<section id="banner">
						<div className="inner">
							<a href="/"><h1>JD's Hub</h1></a>
						</div>
					</section>
					<section id="contact-pricing">
						<Contact />
					</section>
					<footer id="footer">
						<div className="copyright">
							&copy; Untitled Design:{" "}
							<a href="">TEMPLATED</a>.
						</div>
					</footer>
				</section>
			</div>
		);
	}
}

