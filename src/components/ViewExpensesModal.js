import { Modal } from "react-bootstrap";
import { useBudgets } from "../contexts/BudgetContext";

export default function ViewExpensesModal({ show, handleClose }) {
	const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets();

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header>
				<Modal.Title>Expenses - </Modal.Title>
			</Modal.Header>
			<Modal.Body>body</Modal.Body>
		</Modal>
	);
}
