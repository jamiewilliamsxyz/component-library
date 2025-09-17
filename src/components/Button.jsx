export const Button = ({ children, shape, color, ...rest }) => {
  return (
    <button {...rest} className={`button button-${shape} button-${color}`}>
      {children}
    </button>
  );
};
