import "./styles.css";
import MyComponent from "./components/MyComponent";

export default function App() {
  return (
    <div className="App">
      <MyComponent as="button">Hello Polymorphic!</MyComponent>
      <MyComponent as="div">Hello Polymorphic!</MyComponent>
      <MyComponent as="span">Hello Polymorphic!</MyComponent>
      <MyComponent as="em">Hello Polymorphic!</MyComponent>
    </div>
  );
}
