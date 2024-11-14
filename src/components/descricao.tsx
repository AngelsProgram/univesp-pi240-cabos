type Tprops = {
  label: string;
  descricao: string | JSX.Element;
};

export function Descricao(props: Tprops) {
  return (
    <div className="menu--descricao">
      <div className="element__label">{props.label}</div>
      <div>{props.descricao}</div>
    </div>
  );
}
