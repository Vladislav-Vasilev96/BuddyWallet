import TabButton from "../Buttons/TabButtons";
import './Example.css'

const Example = () => {
    function handleSelect (props){
        console.log(`Hello Word - ${props}!`)
    }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onSelecet={()=>handleSelect('components')}>Components</TabButton>
      </menu>
    </section>
  );
};

export default Example;
