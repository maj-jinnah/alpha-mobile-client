import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 md:w-4/5  lg:w-2/3 mx-auto'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>There are four main types of states in a React application.<br />
                        <strong>1. Local state:</strong> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).<br />
                        <strong>2. Global state:</strong> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of a global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.<br />
                        <strong>3. Server state:</strong> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately, there are tools such as SWR and React Query that makes managing server state much easier.<br />
                        <strong>4. URL state:</strong> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing the URL state. Try to imagine building a blog without being able to fetch a post based on its slug or id that is located in the URL!

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be a line of code, a method, or a class. <br />
                        To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits of writing unit tests: <br />
                        {
                            <div>
                                <li>You can test units or functions of your project in isolation.</li>
                                <li>Unit tests act as documentation for your code.</li>
                                <li>They enable you to catch bugs early in the development process.</li>
                                <li>Automated unit tests help a great deal with regression testing.</li>
                                <li>They detect code smells in your codebase. For example, if you're having a hard time writing unit   tests for  a piece of code, it might be a sign that your function is too complex.</li>
                                <li>They contribute to higher code quality.</li>
                            </div>
                        }
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>
                        <strong className='text-lg'>React-</strong> React, developed by Facebook, was initially released in 2013. React, interestingly, combines the UI and behavior of components. React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. <br /> <br />

                        <strong className='text-lg'>Angular-</strong> Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. In Angular, components are referred to as directives. Directives are just markers on DOM elements, which Angular can track and attach specific behavior too. Therefore, Angular separates the UI part of components as attributes of HTML tags, and their behaviors in the form of JavaScript code. <br /> <br />

                        <strong className='text-lg'>Vue-</strong> Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014.  In Vue, UI and behavior are also a part of components, which makes things more intuitive. Also, Vue is highly customizable, which allows you to combine the UI and behavior of components from within a script. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;