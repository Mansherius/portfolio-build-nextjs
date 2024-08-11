import React from "react";

function TravelData() {
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
					<p className="text-neutral-600 dark:text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
						<span className="font-bold text-neutral-700 dark:text-white">
							During the middle of my internship at Zool Tech, A team of interns
							and I decided to take on a project to build a fully functional
							travel website "Planorama"{" "}
						</span>
						The idea was to build a travel website that would help users plan
						their trips by providing them with a list of destinations, hotels,
						and activities based on their preferences and budget. The web app
						would allow users to plan their itineraries to the last detail,
						incliuding locations to visit, restaurants to eat at, and activities
						to do.
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
					<p className="text-neutral-600 dark:text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
						<span className="font-bold text-neutral-700 dark:text-white">
							The Project's client side is being built using Next.js and
							Tailwind CSS.{" "}
						</span>
						It will be a multi-page responsive web app that contains both a
						default navbar and sidebar when shrunk to mobile size. Using the
						Google Maps API, the itinerary page will contain a map that
						showcases the location of all the shortlisted areas.
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
					<p className="text-neutral-600 dark:text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
						<span className="font-bold text-neutral-700 dark:text-white">
							The current iteration of the backend is created using Strapi.io so
							that we haev a simple, efficient easy-to-deploy solution for
							backend databases.{" "}
						</span>
						Moving forward, the goal is to use Node.js, Express.js and MongoDB
						to create a more robust backend that can handle the large amount of
						data that will be stored in the database. We will also be using the
						Google Maps API to get the location data for the destinations that
						the user selects so that removes one extra layer of data that has to
						be stored.
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
						The Path Forward
					</h1>
					<p className="text-neutral-600 dark:text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
						<span className="font-bold text-neutral-700 dark:text-white">
							As we are currently on the third iteration of our project, it
							doesn't look like it is going to be complete anytime soon.{" "}
						</span>
						We are constantly updating the application to reflect our vision and
						our latest conversations and planning have resulted in us starting
						from the beginning and re-using many of the components to build a
						better web app than it's predescessor.
					</p>
				</div>
			</div>
		</>
	);
}

export default TravelData;
