import React from 'react';
// import useTitle from '../../hooks/useTitle';

const Blog = () => {

    // useTitle('Blog');

    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url("https://i.ibb.co/7Vxr0qz/unstoppable-young-muscular-caucasian-athlete-practicing-squats-gym-with-weight-male-model-doing-stre.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content pt-32 pb-10 mb-2">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-error font-bold">Blog</h1>
                        <p className="mb-5">READ EVERYTHING FITNESS, TRAINING, NUTRITION AND HEALTH RELATED FROM ROBERT COTTERILL.</p>

                    </div>
                </div>
            </div>
            <h1 className='text-center text-4xl font-bold mt-28 underline'>QNA</h1>
            <div className='grid md:grid-cols-2 my-8'>
                <div className="border-2 shadow-xl m-8">
                    <div className="rounded-xl ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">1.What is Difference between SQL and NoSQL?</h1>
                            <p className="py-6"> <span className='text-xl text-blue-800'>Ans: </span> <br />
                                <span className='text-xl font-semibold underline'>SQL:</span> Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.
                                SQL programming can be effectively used to insert, search, update, delete database records. <br />
                                <span className='text-xl font-semibold underline'>NOSQL: </span>
                                NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.

                                NoSQL database stands for “Not Only SQL” or “Not SQL.” Though a better term would NoREL NoSQL caught on. Carl Strozz introduced the NoSQL concept in 1998.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="border-2 shadow-xl m-8">
                    <div className=" ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">2. WHat is JWT and how does it work?</h1>
                            <p className="py-6"><span className='text-xl text-blue-800'>Ans: </span> <br />  JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                                <br />
                                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>

                        </div>
                    </div>
                </div>
                <div className="border-2 shadow-xl m-8 ">
                    <div className="rounded-xl ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">3. What is the difference between Javascript and NodeJS?</h1>
                            <p className="py-6"><span className='text-xl text-blue-800'>Ans: </span> <br /> For executing JavaScript on the server, Node.js is a bridge, open-source Js runtime environment. JavaScript code can now execute outside of the browser, thanks to Node.js. Node.js has many components and is primarily used for web development. It may run on various operating systems, including Windows, Linux, and Mac OS. It provides a cross-platform runtime environment for developing highly scalable server-side JavaScript applications with event-driven, non-blocking (asynchronous) I/O.
                                <br />
                                Javascript is a simple object-oriented programming language for building interactive HTML pages. JavaScript is also commonly used in the development of games and mobile applications. The program can only be executed and run in an internet browser because it is interpreted as scripting. To run and execute the code outside the browser, we can utilize Node.js.</p>
                        </div>
                    </div>
                </div>
                <div className="border-2 shadow-xl m-8">
                    <div className=" ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">4. How does NodeJs handle multiple requests at the same time?</h1>
                            <p className="py-6"> <span className='text-xl text-blue-800'>Ans: </span> <br />NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;