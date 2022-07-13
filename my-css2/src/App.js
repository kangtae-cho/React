
import './App.css';

function App() {
  return (
    <div className="toggle" onClick={(event)=>{
      console.log(event);
      event.target.classList.toggle('active')}}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  // <script>
  //   let menutoggle = document.querySelector('.toggle');
  //   menutoggle.onclick = function(){
  //     menutoggle.classList.toggle('active')
  //   }
  // </script>
  );
}

export default App;
