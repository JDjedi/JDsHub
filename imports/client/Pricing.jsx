import React from "react";
import { Component } from "react";

import Contact from './Contact';

export default class Gallery extends React.Component {

	render() {
		return (
			<div className="page-wrap">
				<section id="main">
					<section id="pricing">
						<header>
							<h1>Venue Features</h1>
							<a href="/" className="home-button"><h3>Home</h3></a>
						</header>
						<div className="content">
							<div className="pricing column">
								<h4>Live Music</h4>
								<p>
									Mus sed interdum nunc dictum rutrum scelerisque erat a
									parturient condimentum potenti dapibus vestibulum condimentum
									per tristique porta. Torquent a ut consectetur a vel ullamcorper
									a commodo a mattis ipsum class quam sed eros vestibulum quisque
									a eu nulla scelerisque a elementum vestibulum.
								</p>
							</div>
							<div className="pricing column">
								<h4>Signature Spirits</h4>
								<p>
									Mus sed interdum nunc dictum rutrum scelerisque erat a
									parturient condimentum potenti dapibus vestibulum condimentum
									per tristique porta. Torquent a ut consectetur a vel ullamcorper
									a commodo a mattis ipsum class quam sed eros vestibulum quisque
									a eu nulla scelerisque a elementum vestibulum.
								</p>
							</div>
							<div className="pricing column">
								<h4>Great Foods</h4>
								<p>
									Mus sed interdum nunc dictum rutrum scelerisque erat a
									parturient condimentum potenti dapibus vestibulum condimentum
									per tristique porta. Torquent a ut consectetur a vel ullamcorper
									a commodo a mattis ipsum class quam sed eros vestibulum quisque
									a eu nulla scelerisque a elementum vestibulum.
								</p>
							</div>
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