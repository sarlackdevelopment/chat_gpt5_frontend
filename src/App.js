function App() {
  return (
    <div>
      It works!
        <button onClick={(e) => fetch('http://localhost:5094/User/users').then((res) => console.log(res))}>GO!</button>
    </div>
  );
}

export default App;
