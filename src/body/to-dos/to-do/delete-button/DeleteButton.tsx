import "./DeleteButton.css";

interface Props {
  onDelete: (heading: string) => void;
  heading: string;
}

function DeleteButton({ onDelete, heading }: Props) {
  return (
    <>
      <button
        onClick={() => onDelete(heading)}
        type="button"
        className="btn btn-danger btn-lg"
      >
        <i className="bi bi-trash" />
      </button>
    </>
  );
}

export default DeleteButton;
