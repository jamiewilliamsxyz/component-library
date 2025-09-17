export const ComponentSection = ({ children, ...props }) => {
  return (
    <section className="component-section">
      <div>
        <h2>{props.title}</h2>
        <p className="subtext">Variants: {props.variants}</p>
      </div>

      <div className="components-container">{children}</div>
    </section>
  );
};
