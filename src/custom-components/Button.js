import '../styles/component.css';

function Button(props) {
  const {btnname, btnStyle, ...rest} = props;
    return (
      <button style={props?.btnStyle} {...rest}>{btnname}</button>  
    );
}
  
export default Button;