import React from 'react'
import { ExerciseData } from '../models'
import SingleExercise from './SingleExercise'

interface Props {
  exerciseList: ExerciseData[]
  setExerciseList: React.Dispatch<React.SetStateAction<ExerciseData[]>>;
}


const ExerciseList = ({ exerciseList, setExerciseList}: Props) => {
  
  return (
    <div className="exercise">
      {exerciseList.map((exercise) => (
        <SingleExercise 
          exercise={exercise}
          key={exercise.id}
          exerciseList={exerciseList} 
          setExerciseList={setExerciseList}/>

      ))} 
    </div>
  )
}

export default ExerciseList