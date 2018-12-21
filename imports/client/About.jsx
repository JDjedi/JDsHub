import React from "react";
import { Component } from "react";

import Contact from './ContactComponent';

export default class About extends React.Component {


	render() {
		return (
			<div className="page-wrap">
				<section id="main">
					<section id="about">
						<header>
							<h1>About</h1>
						</header>
						<div className="content">
								<div className="about">
									<h4>Premium Spirits and Craft Cocktails</h4>
									<p>
										Mus sed interdum nunc dictum rutrum scelerisque erat a
										parturient condimentum potenti dapibus vestibulum condimentum
										per tristique porta. Torquent a ut consectetur a vel ullamcorper
										a commodo a mattis ipsum class quam sed eros vestibulum quisque
										a eu nulla scelerisque a elementum vestibulum.
									</p>

									<h4>Live Music</h4>
									<p>
										Mus sed interdum nunc dictum rutrum scelerisque erat a
										parturient condimentum potenti dapibus vestibulum condimentum
										per tristique porta. Torquent a ut consectetur a vel ullamcorper
										a commodo a mattis ipsum class quam sed eros vestibulum quisque
										a eu nulla scelerisque a elementum vestibulum.
									</p>

									<h4>Signature Tastes</h4>
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