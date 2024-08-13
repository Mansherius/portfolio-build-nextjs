import React from "react";

function PassData() {
	return (
        <>
            <div className="relative">
			<div
				className="p-8 md:p-14 rounded-3xl mb-4"
				style={{
					background:
						"linear-gradient(153deg, rgba(0,3,25,1) 35%, rgba(2,115,51,1) 76%)",
				}}
			>
				<h1 className="sm:text-3xl md:text-4xl tracking-wider font-bold text-white font-sans mx-auto pb-2">
					The Concept
				</h1>
				<p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
					<span className="font-bold text-white">
						The project aimed to develop a simple yet effective password manager
						capable of securely storing and retrieving passwords for multiple
						users.{" "}
					</span>
					Key features included user authentication and login, a personalized
					dashboard for each user, a database to store password details, and
					robust encryption to protect data during transmission.
				</p>
				<p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
					The project was completed over 2-3 weeks in collaboration with a
					coursemate as part of our final submission for a course on Computer
					Security and Privacy.
				</p>
			</div>
			<div
				className="p-8 md:p-14 rounded-3xl mb-4"
				style={{
					background:
						"linear-gradient(153deg, rgba(0,3,25,1) 35%, rgba(2,115,51,1) 76%)",
				}}
			>
				<h1 className="sm:text-3xl md:text-4xl tracking-wider font-bold text-white font-sans mx-auto pb-2">
					Front-end Technology
				</h1>
				<p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
					<span className="font-bold text-white">
						I leveraged Python’s DASH module to construct the front-end of the
						multi-page website.{" "}
					</span>
					This choice allowed me to seamlessly combine Python, HTML, and CSS
					within a single environment. The login, registration, and index pages
					were designed as separate templates, each adhering to a consistent
					visual style for a cohesive user experience. The user dashboard was
					dynamically rendered within the main app page, offering personalized
					access to stored passwords.
				</p>
				<p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
					While DASH enabled rapid development and integration, its limitations
					in flexibility and performance became apparent, highlighting the need
					for more advanced front-end frameworks. However, at the time, this was
					the most effective solution given my familiarity with available
					technologies.
				</p>
			</div>
			<div
				className="p-8 md:p-14 rounded-3xl mb-4"
				style={{
					background:
						"linear-gradient(153deg, rgba(0,3,25,1) 35%, rgba(2,115,51,1) 76%)",
				}}
			>
				<h1 className="sm:text-3xl md:text-4xl tracking-wider font-bold text-white font-sans mx-auto pb-2">
					Back-end Technology
				</h1>
				<p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
					<span className="font-bold text-white">
						The backend of this project is built using Flask and SQLite for
						managing user authentication and data storage.{" "}
					</span>
					Flask handles routing, session management, and user authentication,
					while SQLite serves as the database for storing user credentials and
					related data. The application includes custom cryptographic
					implementations, using RSA for secure communication and Schnorr
					signatures for user verification. Flask&apos;s application context is also
					utilized to manage database connections efficiently, ensuring the
					smooth operation of the system.
				</p>
			</div>
			<div
				className="p-8 md:p-14 rounded-3xl mb-4"
				style={{
					background:
						"linear-gradient(153deg, rgba(0,3,25,1) 35%, rgba(2,115,51,1) 76%)",
				}}
			>
				<h1 className="sm:text-3xl md:text-4xl tracking-wider font-bold text-white font-sans mx-auto pb-2">
					Security Features
				</h1>
				<p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
					<span className="font-bold text-white">
						The authentication process is secured with advanced cryptographic
						methods.{" "}
					</span>
					User data and certificates are encrypted using custom DSA keys, with a
					self-signed certificate establishing trust in client-server
					interactions. The system generates and manages user-specific keys,
					ensuring their secure storage and usage. Additionally, real-time
					communication via sockets is employed for secure and efficient data
					exchange with the server.
				</p>
			</div>
            </div>
            </>
	);
}

export default PassData;
