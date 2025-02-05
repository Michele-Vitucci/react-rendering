import { Welcome } from "./Welcome.jsx";
import { Message } from "./Message.jsx";


export default function App() {
  const name = "John";
  const Age = 25;

  return (
    <div>
      <Welcome name={name} Age={Age} />
      <Message Age={Age} />
    </div>
  );
}
