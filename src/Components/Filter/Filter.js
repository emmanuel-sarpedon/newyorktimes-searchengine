//SCSS
import "./Filter.scss";

const Filter = (props) => {
  const { value, onClick, isEnabled } = props;

  return (
    <span
      className="filter"
      style={{
        backgroundColor: isEnabled && "#fdce01",
        color: isEnabled && "black",
        opacity: isEnabled && 0.85,
      }}
      onClick={onClick}
    >
      {value}
    </span>
  );
};

export default Filter;
