import React from "react";

function StockData() {
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
							This project is a Stock Prediction Tool designed to predict stock
							prices based on historical data. It was my{" "}
							<span className="text-green-4">First</span> project in Machine
							Learning and Web Development.{" "}
						</span>
						The tool utilizes Python&apos;s Dash framework for creating an
						interactive web application, complemented by CSS for styling, and an
						ML model built using scikit-learn (sklearn). The user can input a
						date range, choose a stock, and specify the number of days to
						predict, after which the tool generates a zoomable and manipulable
						graph displaying the predicted prices.
					</p>
					<p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
						The project was completed over 2 weeks and was my final submission
						for a introductory course on Machine Learning.{" "}
                        <span className="font-bold text-white">
							If you would like to read an in-depth explanation of my process while building, checkout the the{" "}
							<span className="text-green-4">ReadMe</span> section of my github repository.
						</span>
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
							The front-end is crafted using Dash and CSS.{" "}
						</span>
						Dash components like dcc and html are used to create a user-friendly
						interface. The input fields allow users to select the date range,
						stock, and prediction duration. The output is a graph created using
						Plotly Express, which is interactive and customizable, enabling
						users to zoom in and out, and manipulate the display of the
						predicted stock prices.
					</p>
					<p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
						While DASH enabled rapid development and integration, its
						limitations in flexibility and performance became apparent,
						highlighting the need for more advanced front-end frameworks.
						However, at the time, this was the most effective solution given my
						familiarity with available technologies.
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
							The back-end leverages Python and scikit-learn to build the ML
							model.{" "}
						</span>
						The model is trained using an SVR (Support Vector Regression)
						algorithm, fine-tuned with GridSearchCV to optimize hyperparameters.
						It takes in historical stock data, provided by the user, and
						predicts future prices based on features such as Open, Close, High,
						Low, and Adjusted Close prices. The backend also manages data
						retrieval from Yahoo Finance using yfinance and data processing with
						Pandas and NumPy.
					</p>
				</div>
			</div>
		</>
	);
}

export default StockData;
