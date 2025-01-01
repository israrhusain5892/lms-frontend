
import Header from './components/Header/Header';
import Popup from './components/PopUps/PopUps';
import Loader from './components/Loader/Loader';

function App() {
  

  return (
    <>
        
           <Header/>

           <Popup
      title="Are You Sure You Want To Leave?"
      description="You haven't completed this assignment yet. Are you sure you want to leave without submitting it?"
      onContinue={() => alert("You chose to continue!")}
    />
           <Popup
      title="Ready to Submit?"
      description="Are you sure you want to submit the test? Please double-check your answers before proceeding."
      onContinue={() => alert("You chose to continue!")}
    />

<Popup
  title="Missing or Invalid Answers"
  description="We detected some incomplete or invalid answers. Do you still want to submit this assessment?"
  status="wrong"
  onContinue={() => console.log("Continuing...")}
/>

                  
            <Loader/>
    </>
  )
}

export default App