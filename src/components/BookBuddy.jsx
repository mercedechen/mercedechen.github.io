import "../styles/work.css";
import bookbuddy from "../assets/projects/bookbuddy-ui.png";

export default function BookBuddy(){
  return (
    <div className="container">
      <div className="section">
        <div className="description">
          <h3>Book Buddy</h3>
          <p>
              An online public library service called "Book Buddy" that offers free access to a collection of books. Users can browse the library, register, and log in to their accounts to manage their reading preferences and borrowing history.
          </p>

          <p>
            Powered by Vite using React/Redux framework, JavaScript, HTML, and CSS
          </p>

          <a href="https://spiffy-pothos-bdeb7f.netlify.app" target="_blank"><button>Live Prototype</button></a>  

          <img src={bookbuddy}/>
        </div>
      </div>
    </div>
  )
}