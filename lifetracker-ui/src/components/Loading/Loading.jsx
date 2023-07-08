import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="loading">
      <div className="loading-message">
        Loading
      </div>
    </div>
  );
}

export default Loading;


  /* #### Implement the `Loading` Component

- [ x] Build the **`Loading`** component to:
  - [x ] Render JSX that is wrapped by an element with the class name of `loading`
  - [ x] Render an element with the class name of `loading-message` that contains the text `"Loading"` */