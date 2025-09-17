export const Badge = ({ children, shape, status, ...rest }) => {
  return (
    <div {...rest} className={`badge badge-${shape} badge-${status}`}>
      {children}
    </div>
  );
};
