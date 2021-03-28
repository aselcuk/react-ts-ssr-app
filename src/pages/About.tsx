import React from 'react';
import './about.scss';
import AirplaneImg from '../public/assets/images/airplane.png'

export default function About() {
  return (
    <div>
      <h1 className="title">About page 1</h1>
      <img src={AirplaneImg} alt="airplane image"/>
    </div>
  )
}
