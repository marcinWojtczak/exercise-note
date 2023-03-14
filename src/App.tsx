import './App.css';
import{ useState} from 'react';
import Header  from './components/Header';
import { ExerciseData } from './models';
import InputFields from './components/InputFields';
import ExerciseList from './components/ExerciseList';


const App = () => {

  //input exercise data
  const [formData, setFormData] = useState<{exercise: string; sets: number|string; repetition: number|string}>(
    {exercise: '', sets: '', repetition: ''}
  );
  //array of exercise
  const [exerciseList, setExerciseList] = useState<ExerciseData[]>([])
  
  //add exercise data to array
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(formData) {
      setExerciseList([...exerciseList, {id: Date.now(), exercise: formData.exercise, sets: formData.sets, repetition: formData.repetition}]);
      setFormData( {exercise:'', sets: '', repetition: ''})
    }
  }
  console.log(exerciseList)

  return (
    <div className="App">
      <Header />
      <InputFields 
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <main className="exerciseBox" >
        <ExerciseList 
          exerciseList={exerciseList}
          setExerciseList={setExerciseList}
        />
      </main>
      
    </div>
  );
}

export default App;
