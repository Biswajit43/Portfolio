import usewindowstore from "../../Store/Window";


const Windowcontrol = ({ target }) => {
  const { closewindow } = usewindowstore();

  return (
    <div id='window-controls'>
      {/* The close button needs to be an element. 
          I've used the 'close' div here as the trigger. 
      */}
      <div 
        className="close" 
        onClick={(e) => {
          e.stopPropagation(); 
          closewindow(target);
        }} 
      />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default Windowcontrol;