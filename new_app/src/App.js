import Todo from "./components/Todo";
import './App.css';
import img1 from "./components/img/f3.png";
import img2 from "./components/img/f4.png";
import img3 from "./components/img/f5.png";

function App() {
  return (
    <div>
      <h1 className="main_title">Что Вам необходимо?</h1>
        <div className="blocks">
          <Todo title="Первый блок" text="Lorem, ipsum dolor sit amet consectetur adipiscing elit" img={img1} />
          <Todo title="Второй блок" text="Lorem, ipsum dolor sit amet consectetur adipiscing elit" img={img2} />
          <Todo title="Третий блок" text="Lorem, ipsum dolor sit amet consectetur adipiscing elit" img={img3} />
        </div>
      </div>
      )
}

export default App;
