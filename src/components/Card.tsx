interface CardProps {
  children: string|JSX.Element|JSX.Element[];
}
interface CardBodyProps {
  title: string;
  text?: string;
}
function Card(props: CardProps) {
  const {children}=props;
  return (
    <div className="card" style={{ width: "350 px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

export function CardBody(props: CardBodyProps) {
  const {title, text} = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}
export default Card;
