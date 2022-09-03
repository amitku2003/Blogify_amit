import React from 'react';
import Header from './Header';
import MiniBlog from './MiniBlog';
import Img from './images/contemplative-reptile.jpg';
const content = [
    {
        key: 1,
        name: 'Amit Kumar',
        date: 'September 29, 2012',
        text: "Hello My name is Amit Kumar"
    },
    {
        key: 2,
        name: 'Ansh Pradhan',
        date: 'September 29, 2012',
        text: "Hello My name is Amit Kumar"
    },
    {
        key: 3,
        name: 'Akash Kumar',
        date: 'September 29, 2012',
        text: "Hello My name is Amit Kumar"
    },
    {
        key: 4,
        name: 'Ayush Mishra',
        date: 'September 29, 2012',
        text: "Hello My name is Amit Kumar"
    },
    {
        key: 5,
        name: 'Abhinav Kumar',
        date: 'September 29, 2012',
        text: "Hello My name is Amit Kumar"
    }
];

const SignUp = () => {
    return(
        <>
            <Header />
            {
                content.map((e)=>{
                    return(
                        <MiniBlog img={Img} name={e.name} text={e.text} date={e.date} key={e.key} />
                    )
                })
            }
        </>
    );
}

export default SignUp;