import React from 'react';
import Button from './Button';

function App() {
  // Define a function to handle the button click
  const handleButtonClick = () => {
    alert('Button clicked!'); // You can replace this with your custom logic
  };

  return (
    <div className="App">
      <h1>React Button Example</h1>
      <Button
        onClick={handleButtonClick} // Pass the click handler function
        className="custom-button" // Add custom CSS classes
        label="Click Me" // Button label
      />
    </div>
  );
}

export default App;