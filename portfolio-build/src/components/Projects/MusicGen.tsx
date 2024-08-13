import React from "react";

function MusicData() {
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
							This project, initiated as part of my NLP Final, evolved into an
							advanced music recommendation and playlist generator with a
							custom-trained Roberta emotional classifier.{" "}
						</span>
						The main challenge was the lack of an existing dataset with music
						lyrics, artist names, album names, and associated emotions. To
						overcome this, I used a Roberta emotional classifier transformer to
						annotate the dataset, which became the foundation for training the
						model.
					</p>
					<p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
						This collaborative project between a coursemate and I was completed
						within 3 weeks to a month, and was our final submission for our
						course on Natural Language and Processing.{" "}
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
							Currently, the project runs as a user-driven terminal program,
							with plans to develop a full application in the future.{" "}
						</span>
						The interface is basic, relying on command-line inputs to generate
						music recommendations and playlists based on user emotions and
						preferences.
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
							The back-end is powered by a custom-trained Roberta transformer
							model, with various supporting components for data processing and
							model training.{" "}
						</span>
						The model was trained on an annotated dataset using transformers,
						pandas, and PyTorch. The project includes separate modules for data
						annotation, model training, and mapping emotions to hot-one
						encoding.
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
							The next step is to develop a full-fledged application that can
							bring this project to life beyond the terminal.{" "}
						</span>
						This will involve creating a more user-friendly interface,
						potentially expanding the dataset, and improving model accuracy
						further.
					</p>
				</div>
			</div>
		</>
	);
}

export default MusicData;
