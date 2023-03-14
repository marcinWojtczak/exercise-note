import React from 'react'

interface Props {
  formData: {exercise: string; sets: number|string; repetition: number|string};
  setFormData: React.Dispatch<React.SetStateAction<{
    exercise: string;
    sets: number|string;
    repetition: number|string;
  
  }>>
  handleSubmit: (e: React.FormEvent) => void;
};

const InputFields = ({formData, setFormData, handleSubmit }: Props) => {

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input 
        className="form__input--text input" 
        type="text" 
        placeholder="Add exercise"
        name='exercise'
        value={formData.exercise}
        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
        
      />
      <input 
        className="form__input--number input" 
        type="input" 
        placeholder="Sets num"
        name='sets'
        value={formData.sets}
        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
      />
      <input 
        className="form__input--number input" 
        type="input" 
        placeholder="Rep num"
        name='repetition'
        value={formData.repetition}
        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}

      />
      <button className="form__button">Add</button>
    </form>
  )
}

export default InputFields