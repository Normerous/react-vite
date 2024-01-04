import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();

    const nextPage = () => {
        console.log(';;;;')
        navigate('/')
      };

  return <div onClick={nextPage} className="card">This is the About page!</div>;
}