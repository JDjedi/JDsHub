import React from "react";
import { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

import Contact from './ContactComponent';

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			imageToEnlarge: []
		};
	}

	render() {
		const { isOpen, imageToEnlarge } = this.state;

		return (
			<div className="page-wrap">
				<section id="main">
					<section id="galleries">
						<div className="gallery-wrapper">
							<header>
								<h1>Gallery</h1>
							</header>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									src="images/fulls/01.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									className="gallery-image"
									src="images/fulls/05.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									className="gallery-image"
									src="images/fulls/09.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									className="gallery-image"
									src="images/fulls/02.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									className="gallery-image"
									src="images/fulls/06.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									className="gallery-image"
									src="images/fulls/10.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									className="gallery-image"
									src="images/fulls/03.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									src="images/fulls/07.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									src="images/fulls/11.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									src="images/fulls/04.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									src="images/fulls/08.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
							<div className="gallery-image">
								<img
									height="100%"
									width="100%"
									src="images/fulls/12.jpg"
									alt=""
									title="This right here is a caption."
								/>
							</div>
						</div>

						{isOpen && (
							<Lightbox
								mainSrc={imageToEnlarge[0]}
								onCloseRequest={() =>
									this.setState({ isOpen: false, imageToEnlarge: [] })
								}
							/>)
						}
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
