const TabButton = ({ children,onSelecet }) => {
    function handleClick(){
        console.log('Hello Word!')
    }

  return (
    <li>
      <button onClick={onSelecet} >{children}</button>
    </li>
  );
};

export default TabButton;
