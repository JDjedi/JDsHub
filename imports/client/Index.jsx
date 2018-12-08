import React from "react";
import ReactPlayer from 'react-player'
import Contact from './Contact';
import Pricing from './Pricing';

export default class Gallery extends React.Component {
	render() {
		return (
			<div>
				<main>
					<div className="page-wrap">
						<section id="main">
							<section id="banner">
								<div className="inner">
									<h1>JD's Hub</h1>
								</div>
							</section>

							<section id="galleries">
								<div className="gallery">
									<header className="special">

									</header>
									<footer>
											<div className="content">
												<div className="media">
													<div
														id="imageToEnlarge"
														onClick={() =>
															this.setState({
																isOpen: true,
																imageToEnlarge: ["images/fulls/01.jpg"]
															})
														}
													>
														<img
															src="images/thumbs/01.jpg"
															alt=""
															title="This right here is a caption."
														/>
													</div>
												</div>
												<div className="media">
													<div
														id="imageToEnlarge"
														onClick={() =>
															this.setState({
																isOpen: true,
																imageToEnlarge: ["images/fulls/05.jpg"]
															})
														}
													>
														<img
															src="images/thumbs/05.jpg"
															alt=""
															title="This right here is a caption."
														/>
													</div>
												</div>
												<div className="media">
													<div
														id="imageToEnlarge"
														onClick={() =>
															this.setState({
																isOpen: true,
																imageToEnlarge: ["images/fulls/09.jpg"]
															})
														}
													>
														<img
															src="images/thumbs/09.jpg"
															alt=""
															title="This right here is a caption."
														/>
													</div>
												</div>
												<div className="media">
													<div
														id="imageToEnlarge"
														onClick={() =>
															this.setState({
																isOpen: true,
																imageToEnlarge: ["images/fulls/02.jpg"]
															})
														}
													>
														<img
															src="images/thumbs/02.jpg"
															alt=""
															title="This right here is a caption."
														/>
													</div>
												</div>
											</div>
									</footer>
								</div>
							</section>
							<section id="contact">
								<div className="social column">
									<h3> What is JD's Hub </h3>
									<p>
										Mus sed interdum nunc dictum rutrum scelerisque erat a
										parturient condimentum potenti dapibus vestibulum
										condimentum per tristique porta. Torquent a ut consectetur a
										vel ullamcorper a commodo a mattis ipsum className quam sed
										eros vestibulum quisque a eu nulla scelerisque a elementum
										vestibulum.
									</p>
									<p>
										Aliquet dolor ultricies sem rhoncus dolor ullamcorper
										pharetra dis condimentum ullamcorper rutrum vehicula id nisi
										vel aptent orci litora hendrerit penatibus erat ad sit. In a
										semper velit eleifend a viverra adipiscing a phasellus urna
										praesent parturient integer ultrices montes parturient
										suscipit posuere quis aenean. Parturient euismod ultricies
										commodo arcu elementum suspendisse id dictumst at ut
										vestibulum conubia quisque a himenaeos dictum proin dis
										purus integer mollis parturient eros scelerisque dis libero
										parturient magnis.
									</p>
									<a href="/pricing" className="button">
										Venue Features
									</a>
									<ul className="icons">
										<li>
											<a href="#" className="icon fa-twitter">
												<span className="label">Twitter</span>
											</a>
										</li>
										<li>
											<a href="#" className="icon fa-facebook">
												<span className="label">Facebook</span>
											</a>
										</li>
										<li>
											<a href="#" className="icon fa-instagram">
												<span className="label">Instagram</span>
											</a>
										</li>
									</ul>
								</div>
								
								<Contact />
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

//<div className="content">
//	<div className="media">
//		<img
//			src="images/thumbs/01.jpg"
//			alt=""
//			title="This right here is a caption."
//		/>
//	</div>
//	<div className="media">
//		<img
//			src="images/thumbs/05.jpg"
//			alt=""
//			title="This right here is a caption."
//		/>
//	</div>
//	<div className="media">
//		<img
//			src="images/thumbs/09.jpg"
//			alt=""
//			title="This right here is a caption."
//		/>
//	</div>
//	<div className="media">
//		<img
//			src="images/thumbs/02.jpg"
//			alt=""
//			title="This right here is a caption."
//		/>
//	</div>
//</div>

// <ReactPlayer
	// 	className='react-player'
	// 	url='https://www.youtube.com/watch?v=KQ6zr6kCPj8'
	// 	controls
	// />


