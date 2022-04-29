import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='text-center blogs'>
                <h1 className='mb-5 text-center'>Blogs</h1>

                <h4><b>Question-1</b>: What is the difference between JavaScript and NodeJS...?</h4>
                <p className='mb-4'><b>Answer :</b> JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>

                <h4><b>Question-2.1</b>: When should you use NodeJS...?</h4>
                <p className='mb-4'><b>Answer :</b> Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>

                <h4><b>Question-2.2</b>: When should you use MongoDB...?</h4>
                <p className='mb-4'><b>Answer :</b> SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>

                <h4><b>Question-3</b>: What is the differences between SQL and NoSQL databases...?</h4>
                <p className='mb-4'><b>Answer :</b> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

                <h4><b>Question-4</b>: What is the purpose of JWT and how does it work...?</h4>
                <p><b>Answer :</b> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>
        </div>
    );
};

export default Blogs;