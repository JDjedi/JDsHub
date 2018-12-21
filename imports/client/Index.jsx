import React from "react";
import ReactPlayer from 'react-player'
import Contact from './ContactComponent';


export default class Index extends React.Component {
	render() {
		return (
			<div>
				<main>
					<div className="page-wrap">
						<section id="main">
							<section id="banner">
								<div className="inner">
									<h1>1789</h1>
								</div>
							</section>

							<section id="galleries">
								<div className="gallery">
									<div className="content">
										<div className="media">
											<a href="/about">
												<div
													id="imageToEnlarge"
													onClick={() =>
														this.setState({
															isOpen: true
														})
													}
												>
													<img
														src="images/thumbs/01jh.jpg"
														alt=""
														title="This right here is a caption."
													/>
													<div className="link-text">
														<h2>About</h2>
													</div>
												</div>
											</a>
										</div>

										<div className="media">
											<a href="/event">
												<div
													id="imageToEnlarge"
													onClick={() =>
														this.setState({
															isOpen: true
														})
													}
												>
													<img
														src="images/thumbs/06jh.jpg"
														alt=""
														title="This right here is a caption."
													/>
													<div className="link-text">
														<h2>Events</h2>
													</div>
												</div>
											</a>
										</div>

										<div className="media">
											<a href="/contact">
												<div
													id="imageToEnlarge"
													onClick={() =>
														this.setState({
															isOpen: true
														})
													}
												>
													<img
														src="images/thumbs/05jh.jpg"
														alt=""
														title="This right here is a caption."
													/>
													<div className="link-text">
														<h2>Contact</h2>
													</div>
												</div>
											</a>
										</div>

										<div className="media">
											<a href="/gallery">
												<div
													id="imageToEnlarge"
													onClick={() =>
														this.setState({
															isOpen: true
														})
													}
												>
													<img
														src="images/thumbs/07jh.jpg"
														alt=""
														title="This right here is a caption."
													/>
													<div className="link-text">
														<h2>Photographs</h2>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</section>

							<footer id="footer">
								<div className="copyright">
									&copy; Untitled Design:{" "}
									<a href="https://templated.co/">TEMPLATED</a>. Images:{" "}
									<a href="https://unsplash.com/">Unsplash</a>.
								</div>
							</footer>
						</section>
					</div>
				</main>
			</div>
		);
	}
}


