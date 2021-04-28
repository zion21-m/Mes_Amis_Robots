const BarreDeRecherche = (props) => {
  return (
    <div className={props.className}>
      <input
        type="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        id={props.id}
      />
    </div>
  );
};

export default BarreDeRecherche;
