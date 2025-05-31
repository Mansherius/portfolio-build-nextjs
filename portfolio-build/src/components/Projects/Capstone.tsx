import React from "react";

function FoodKGProject() {
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
							As someone deeply interested in both technology and food, I wanted to explore how structured data could transform how we interact with culinary information.
						</span>{" "}
						This Capstone project was an attempt to bridge semantic web technologies with practical, user-focused applications. I built a full-stack web application that allows users to search a large-scale recipe Knowledge Graph by name or by detailed parameters. The graph, built on a curated ontology of over 16,500 recipes, enables rich, meaningful queries — from finding recipes that exclude allergens, to matching ingredients on hand. The idea was to make this powerful dataset usable by anyone through an elegant, easy-to-use interface.
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
							The frontend was built using Next.js and Tailwind CSS,
						</span>{" "}
						with a fully responsive layout tailored for both desktop and mobile users. Two distinct search modes were designed: a simple name-based search field with fuzzy matching for accessibility, and a detail-based filter form featuring chip selectors, sliders, and multi-select inputs. These were carefully styled for usability across devices.
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
							The backend uses Python with owlready2 to interface with the OWL ontology,
						</span>{" "}
						allowing semantic queries and ontology traversal. I implemented preprocessing for user inputs, caching for repeat queries, and batching to reduce response time. Real-world challenges — like hydration issues, payload mismatches, and multilingual data handling — were addressed as part of the build.
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
					<p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
						<span className="font-bold text-white">
							Looking ahead, the project can evolve to include natural language processing and SPARQL support,
						</span>{" "}
						making queries even more user-friendly. Planned features include user authentication, saved searches, and integration with online recipe platforms. A full-scale deployment with backend optimizations is also in the pipeline.
					</p>
				</div>
			</div>
		</>
	);
}

export default FoodKGProject;
