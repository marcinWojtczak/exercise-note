import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import { ExerciseData } from '../models';
import { BsPencil  } from 'react-icons/bs';
import { FaRegTrashAlt  } from 'react-icons/fa';

import { SlNote } from 'react-icons/sl';



interface Props {
  exerciseList: ExerciseData[];
  setExerciseList: React.Dispatch<React.SetStateAction<ExerciseData[]>>
  exercise: ExerciseData;
};

const SingleExercise = ({ exerciseList, setExerciseList, exercise }: Props) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [notes, setNotes] = useState<boolean>(false)
  //Edit exercise
  const [editExercise, setEditExercise] = useState<string>(exercise.exercise)
  //Edit number of sets
  const [editSets, setEditSets] = useState<string|number>(exercise.sets)
  //edit number of 
  const [editRepetition, setEditRepetition] = useState<string|number>(exercise.repetition)
  //Add notes to exercise
  const [addNotes, setAddNotes] = useState<string>('')
  console.log(addNotes)
  
// edit exercise data
const handleSubmit = (e: React.FormEvent, id:number) => {
  e.preventDefault();
  setExerciseList(exerciseList.map((exercise) => (
    exercise.id === id ? {...exercise, exercise: editExercise, sets: editSets, repetition: editRepetition}: exercise
  )));
  setEdit(false)
  if(textVal.current != null) {
    setAddNotes(textVal.current.value)
  }
  setNotes(false)
}

//Delete exercise form list
  const handleDelete = (id: number) => {
    setExerciseList(
      exerciseList.filter((exercise) => exercise.id !== id )
    )
  };

  //Move cursor to the end of input
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);


  const textVal =useRef<HTMLTextAreaElement>(null);

  

  return (
    <>
    <form className="exercise__single" onSubmit={(e) => handleSubmit(e, exercise.id)}>
    {edit ? (
      <div className='exercise__single--edit'>
        <input 
          ref={inputRef}
          value={editExercise} 
          className="exercise__single--text input" 
          placeholder="Edit exercise"
          name='exercise'
          onChange={(e) => setEditExercise(e.target.value)}
        />
        <input 
          value={editSets}
          className="exercise__single--number input" 
          placeholder="Edit sets"
          name='sets'
          onChange={(e) => setEditSets(e.target.value)}
        />
        <input 
          value={editRepetition} 
          className="exercise__single--number input" 
          placeholder="Edit repetition"
          name="repetition"
          onChange={(e) => setEditRepetition(e.target.value)}
        />
        <button className="exercise__single--btn ">Edit</button> 
      </div>
    ) : (
      <>
        <div className='exercise__single--data'>
          <div className='exercise__single--exercise'>
            <h5 className='exercise__single--header'>Exercise</h5>
            <h4 className='exercise__single--text'>{exercise.exercise}</h4>
          </div>

          <div className='exercise__single--sets'>
            <h5 className='exercise__single--header'>Sets</h5>
            <h4 className='exercise__single--number'>{exercise.sets}</h4>
          </div>

          <div className='exercise__single--repetition'>
            <h5 className='exercise__single--header'>Repetition</h5>
            <h4 className='exercise__single--number'>{exercise.repetition}</h4>
          </div>
        </div>
        <div className='exercise__single--notes'>
          <h5 className='exercise__single--header'>Notes:</h5>
          <h5 className='exercise__single--subtext'>{addNotes}</h5>
          {notes && (
        <div className='exercise__single--addNotes'>
          <textarea 
            ref={textVal}
            className="exercise__single--textarea"
            placeholder='Add notes'
          />
          <button className="exercise__single--btn ">Add notes</button> 
        </div>
      )}
        <div className='exercise__single--icons'> 
          <span className='exercise__single--icon'  onClick={() => {
            if(!edit) {
              setEdit(!edit)
            }
          }}>
            <span className='icon__toolTip '>Edit</span>
            <BsPencil className='icon' />
          </span>

          <span className='exercise__single--icon' onClick={() => handleDelete(exercise.id)}>
            <span className='icon__toolTip'>Delete</span>
            <FaRegTrashAlt className='icon' data-tooltip="Delete"/>
          </span>

          <span className='exercise__single--icon' data-tooltip="Add Notes"onClick={() => {
            if(!notes) {
              setNotes(!notes)
            }
          }}>
            <span className='icon__toolTip'>Add notes</span>
            <SlNote className='icon' />
          </span>
        </div> 
        </div>
      </>
    )}
      {/* {notes && (
        <div className='exercise__single--addNotes'>
          <textarea 
            ref={textVal}
            className="exercise__single--textarea"
            placeholder='Add notes'
          />
          <button className="exercise__single--btn ">Add notes</button> 
        </div>
      )}
        <div className='exercise__single--icons'> 
          <span className='exercise__single--icon'  onClick={() => {
            if(!edit) {
              setEdit(!edit)
            }
          }}>
            <span className='icon__toolTip '>Edit</span>
            <BsPencil className='icon' />
          </span>

          <span className='exercise__single--icon' onClick={() => handleDelete(exercise.id)}>
            <span className='icon__toolTip'>Delete</span>
            <FaRegTrashAlt className='icon' data-tooltip="Delete"/>
          </span>

          <span className='exercise__single--icon' data-tooltip="Add Notes"onClick={() => {
            if(!notes) {
              setNotes(!notes)
            }
          }}>
            <span className='icon__toolTip'>Add notes</span>
            <SlNote className='icon' />
          </span>
        </div>  */}
      </form>
    </>
  )
}

export default SingleExercise