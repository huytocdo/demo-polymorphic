const MyComponent = ({ as, children }) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};

export default MyComponent;
