import React from "react";
import { Component } from "react";

import Contactform from './ContactComponent';

export default class Contact extends React.Component {

	render() {
		return (
			<div className="page-wrap">
				<section id="main">
					<section id="banner">
						<div className="inner">
							<a href="/"><h1>1789</h1></a>
						</div>
					</section>
					<section id="contact-pricing">
						<Contactform />
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

