import React from 'react';
import useTitle from '../../hooks/useTitle';
// import useTitle from '../../hooks/useTitle';

const Blog = () => {

    useTitle('Blog');

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
                <div className="border-2 shadow-xl m-8 rounded-2xl">
                    <div className="rounded-xl ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">1.What is Difference ways to manage a state in a React Application?</h1>
                            <p className="py-6"> <span className='text-xl text-blue-800'>Ans: </span> <br />
                                When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                                <br />
                                There are four main types of state you need to properly manage in your React apps: <br />
                                <ul>
                                    <li>1. Local state</li>
                                    <li>2. Global state</li>
                                    <li>3. Server state</li>
                                    <li>4. URL state</li>
                                </ul>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="border-2 shadow-xl m-8 rounded-2xl">
                    <div className=" ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">2. How does prototypical inheritance work?</h1>
                            <p className="py-6"><span className='text-xl text-blue-800'>Ans: </span> <br /> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                                <br />
                                In programming, we often want to take something and extend it.

                                For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

                                Prototypal inheritance is a language feature that helps in that.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="border-2 shadow-xl m-8 rounded-2xl ">
                    <div className="rounded-xl ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">3. What is a unit test? Why should we write unit tests?</h1>
                            <p className="py-6"><span className='text-xl text-blue-800'>Ans: </span> <br /> The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                                <br />
                                A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
                                Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.</p>
                        </div>
                    </div>
                </div>
                <div className="border-2 shadow-xl m-8 rounded-2xl">
                    <div className=" ">
                        <div className="p-16">
                            <h1 className="text-2xl font-bold">4. What is the diffrence between React vs Angular vs Vue?</h1>
                            <p className="py-6"> <span className='text-xl text-blue-800'>Ans: </span> <br />
                                <span className='text-accent font-semibold'>React JS:</span> This open-source Javascript library has become quite the rage for developing interactive web and mobile apps since Facebook launched it in 2013.
                                There are primarily three reasons which have made the React library a developer darling -
                                Code Reusability- it allows developers to reuse blocks of code for a simple function
                                <br />
                                <span className='text-accent font-semibold'>Angular Js:</span> This open-source Javascript library has become quite the rage for developing interactive web and mobile apps since Facebook launched it in 2013.
                                There are primarily three reasons which have made the React library a developer darling -
                                Code Reusability- it allows developers to reuse blocks of code for a simple function
                                <br />
                                <span className='text-accent font-semibold'>Vue JS:</span> This open-source Javascript library has become quite the rage for developing interactive web and mobile apps since Facebook launched it in 2013.
                                There are primarily three reasons which have made the React library a developer darling -
                                Code Reusability- it allows developers to reuse blocks of code for a simple function
                                <br />


                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;