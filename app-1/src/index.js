// import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';

// Create a react component
const App = ()=> {
    return (
    <div className="ui container comments">

          <ApprovalCard >
          <Comment 
          author="Sam"
           date="Today at 6:00PM" 
           text="Nice blog post!" 
           image={faker.image.animals()}   
           />
           </ApprovalCard>

            <ApprovalCard >
            <Comment 
             author="Alex" 
            date="Today at 5:00AM" 
            text="Well i see u are doing great! Keep going!" 
            image={faker.image.animals()}
             />
            </ApprovalCard>

            <ApprovalCard >
            <Comment 
            author="Max" 
            date="Yesterday at 4:30PM" 
            text="I Like it !" 
            image={faker.image.animals()}
            />
            </ApprovalCard>

    </div>
       
    );
};


// Take the react component and show it on the 
ReactDOM.render (
    <App />,
    document.querySelector('#root')
);