interface Props {
  addTerm: (newVal: string) => void;
}

export default function AddToList(props: Props) {
  function handleAdd(e) {
    e.preventDefault();
    const newTerm = e.target.newTerm.value;
    props.addTerm(newTerm);
    e.target.newTerm.value = "";
  }

  return (
    <form onSubmit={(e) => handleAdd(e)}>
      <input type="text" name="newTerm" />
    </form>
  );
}
