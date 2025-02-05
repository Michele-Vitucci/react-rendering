export function Welcome({ name, Age }) {
  return (
    <div>
      <p>Benvenuto, {name}!</p>
      {Age > 18 && <Age Age={Age} />}
      {Age && <Age Age={Age} />}
      {Age > 18 && Age < 65 && <Age Age={Age} />}
      {Age > 18 && name === "John" && <Age Age={Age} />}
    </div>
  );
}