import '../styles/component.css';

function Button(props) {
  const {btnClass, btnName, btnStyle} = props;
    return (
      <button className={btnClass} style={btnStyle} {...props}>{btnName}</button>  
    );
}
  
export default Button;