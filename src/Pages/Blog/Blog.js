import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-100 w-11/12 mx-auto p-4 m-4'>

            <div className='bg-sky-300 p-4'>
                <h1>1. What are the different ways to manage a state in a React application?</h1>
                <p className='p-3'>Ans:There are several other ways to manage state​s in React, including the use of: Hooks. React Context API. Apollo Link State.React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>
            </div>

            <div className='bg-sky-300 p-4'>
                <h1>2. How does prototypical inheritance work?</h1>
                <p className='p-3'>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>

            <div className='bg-sky-300 p-4'>
                <h1>3. What is a unit test? Why should we write unit tests?</h1>
                <p className='p-3'>Ans: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>

            <div className='bg-sky-300 p-4'>
                <h1>4. React vs. Angular vs. Vue?</h1>
                <p className='p-3'>Ans: 
                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                <br />
                Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.</p>
            </div>
        
        </div>
    );
};

export default Blog;