import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>Differnece Between Javascript and Node js</h1>
                <h2>Javascript</h2>
                <p>
                    Javascript is programming language. We use it as a scripting language. There is a limitation to run Javascript. We can not run it without Browser. Javascript mainly used for frontend development. It does the work for client side. We can use Html tags on Javascript.
                </p>
                <h2>Node.JS</h2>
                <p>
                    Node js is actually an environment for javascript runtime. We can use it outside of the browser. There is no limitation. Node js is used for backend development. Server side works are done by node js. There is a restriction for using html tags on node.js
                </p>
            </div>
            <div>
                <h1>When should you use nodejs and when should you use mongodb</h1>
                <p>
                    Node js and MongoDB these are totally different technologies that we used to build our application.
                    When we want run our javascript code we certainly use node js. Mongodb is related to the data we use or store for our application. By using mongodb we can delete update read and create data that we want to use in our websites. mongodb also have some apis that helps us to integrate out code with the database.

                    So when we work with coding to develope our site we use node js. but when we work on data management we use mongodb to make it easier.
                </p>
            </div>
            <div>
                <h1>What is the purpose of jwt and how does it work</h1>

                <p>
                    JWT that stands for JSON WEB TOKEN. JWT is used for a kind of security between the server side and the client side. The server use this token to authenticate the user.

                </p>

                <p>
                    JWT works in a very conventional way. When client request for something to the server then server create a JWT and send it to the client. THis jwt consists unique information to authenticate the client. Next time when that user sends any request the server just use that JWT to authenticate that client and make respose to client's request.
                </p>
            </div>
        </div>
    );
};

export default Blogs;