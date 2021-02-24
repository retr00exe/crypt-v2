import React from 'react';
import styled from 'styled-components';

export const FooterWrapper = () => {
	return (
		<FooterContainer>
			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-6">
							<h4 className="footer-desc">Crypt</h4>
							<ul className="list-unstyled">
								<li>Hash</li>
								<li>Encode/Decode</li>
								<li>Cipher</li>
								<li>RSA</li>
								<li>AES</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-6">
							<h4 className="footer-desc">Project</h4>
							<ul className="list-unstyled">
								<li>GitHub</li>
							</ul>
						</div>
						<div className="footer-bootom">
							<p className="text-xs-center mt-3">
								&copy; {new Date().getFullYear()} Crypt - Web app offering
								modular conversion, encoding and encryption online. Translations
								are done in the browser without any server interaction. Code
								licensed MIT.
							</p>
						</div>
					</div>
				</div>
			</div>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	.footer {
		padding: 20px;
		background-color: #1c1c1c;
		color: #fff;
		font-family: 'Zilla Slab', serif;
	}

	.footer-desc {
		color: #ff9900;
	}
`;
