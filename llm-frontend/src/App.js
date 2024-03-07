import './App.css';
import React, {useState} from 'react';

function App() {
  console.log("Hello")

  const makeApiCall = async (userInput) => {
    try {
      setIsSubmitting(true)
      const response = await fetch(' http://localhost:8000/waddles/invoke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: { input: userInput }}),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      console.log("Sending to server...")
      const data = await response.json();
      const data2 = data.output.output;
      setConversation(prev => [[...prev.slice(0, -1), data2]]);
      // Handle the response data (e.g., display it in the UI)
    } catch (error) {
      console.error('Failed to fetch:', error);
    } finally {
      setIsSubmitting(false)
    }
  };


  const [inputValue, setInputValue] = useState('');
  const [conversation, setConversation] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)


   // Update state based on input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = () => {
    // makeApiCall(inputValue);
    if (inputValue.trim()) {
      // Append new conversation entry
      const newEntry = `${inputValue}`;
      setConversation(prev => [...prev, "--User--", newEntry, "--Waddle--", "Fetching for response..."]);
      setInputValue(''); // Clear input field
      makeApiCall(inputValue)
    }
  };


  // Handle submission
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/images.png`} className="App-logo" alt="logo" />
        <p>
          <br></br>
          Welcome to Waddle! Ask your questions!
        </p>
        <div className='chatBox'>
          {conversation.map((entry, index) => (
              <p className='message' key={index}>{entry}</p>
            ))}
        </div>
        <input 
          className="inputBar"
          type="text" 
          placeholder="Waddle is looking at you..." 
          value={inputValue} 
          onChange={handleInputChange}
        />
        <button 
        className="beautiful-button" 
        disabled={isSubmitting}
        onClick={handleSubmit}>
        {isSubmitting ? 'Please wait...' : 'Submit'}</button>
        
      </header>
    </div>
  );
}

export default App;
