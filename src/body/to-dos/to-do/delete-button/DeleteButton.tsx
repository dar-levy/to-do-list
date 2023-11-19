import "./DeleteButton.css";

interface Props {
  onDelete: (heading: string) => void;
  heading: string;
}

function DeleteButton({ onDelete, heading }: Props) {
  return (
    <span onClick={() => onDelete(heading)} className="close">
      <i className="bi bi-trash" />
    </span>
  );
}

export default DeleteButton;
