import React from 'react';
import {useState} from 'react';
import { data } from './data';

const App = () => {
 const [index,setIndex] = useState(0);
 const {job,image,name} = data[index];

 const checkNumber = (number)=>{
  if(number > data.length-1){
     return 0;
  }
  if(number < 0){
   return data.length-1
  }
  return number;
 }

 const nextItem = ()=>{
  setIndex((index)=>{
   let newIndex = index + 1;
   return checkNumber(newIndex);
  })
 }
  const prevItem = ()=>{
   setIndex((index)=>{
    let newIndex = index - 1;
    return checkNumber(newIndex);
   })
 }
 const randomImage = ()=>{
  let randomNumber = Math.floor(Math.random()*data.length);

  if(randomNumber === index){
   return randomNumber = index + 1;
  }
  setIndex(checkNumber(randomNumber))
 };
  return (
    <section>
     <img src={image} alt={name} className='image'/>
     <h4>{name}</h4>
     <p>{job}</p>
     <div className='btn-holder'>
      <button type='button' onClick={nextItem}>Next</button>
      <button type='button' onClick={prevItem}>Previous</button>
     </div>
     <button onClick={randomImage}>Random</button>
    </section>
  )
}

export default App
