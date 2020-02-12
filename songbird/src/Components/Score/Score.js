import React from 'react'
import './Score.css'

export default function Score(props) {
  return <h2 className="score">Score: {props.score}</h2>
}