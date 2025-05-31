import React from "react";

function TrackerData() {
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
                            The idea was to combine my passion for exercise and fitness with
                            my interest in software development, leading to the creation of
                            a socail media cum fitness tracker that not only tracks workouts but also
                            allows users to save custom routines, track their progress and compare their strength with other users.
                            {" "}
                        </span>
                    </p>
                    <p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto py-1">
                        Despite it starting as a personal project, eventually I built it with two other partners as part
                        of a project for a course (killing two birds with one stone) on computing in the cloud. Buitl with basic development 
                        principles in mind and containerized microservices, this project served as the start of my journey into true software development 
                        and I intend to take it forward and ship it to the playstore eventually.{" "}
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
                            In order to eventually ship the application to the app store so that it can be used on mobile
                            devices, the app is built using Flutter and Dart{" "}
                        </span>
                        The interface is built to mimic another popular fitness tracker application and is currently 
                        not yet in an APK format, and so only works locally despite the backend and servers being hosted on the cloud.
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
                            The backend is a comnbination of PostgresSQL, Flask and S3 in order to efficiently communicate with the frontend, 
                            retrieving data in the most efficient manner possible.{" "}
                        </span>
                        Originally the plan was to use Django for the backend, but due to the time constraints of the project as well 
                        as the inherent issues in trying to integrate with Django, we had to switch to Flask. The S3 database is used to store
                        the user profile photos and other media, while the PostgresSQL database is used to store the user data and workout routines.
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
                            The next step is to ship the code after creating an APK out of the flutter application 
                            thus ensuring that a downloadable application exists in the app store while we upgrade it.{" "}
                        </span>
                        This will currently remain as a pet project/side project, but I intend to take it forward and ship it to the app store eventually.
                    </p>
                </div>
            </div>
        </>
    );
}

export default TrackerData;