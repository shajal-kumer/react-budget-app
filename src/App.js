import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./App.css";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import BudgetCard from "./components/BudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import ViewExpensesModal from "./components/ViewExpensesModal";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetContext";

function App() {
	const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
	const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
	const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
	const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();

	const { budgets, getBudgetExpenses } = useBudgets();

	// open for specific budget
	function openAddExpenseModal(budgetId) {
		setShowAddExpenseModal(true);
		setAddExpenseModalBudgetId(budgetId);
	}
	return (
		<>
			c
			<Container className="my-4">
				<Stack direction="horizontal" gap="2" className="mb-4">
					<h1 className="me-auto">Budgets</h1>
					<Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
						Add Budget
					</Button>
					<Button variant="outline-primary" onClick={openAddExpenseModal}>
						Add Expense
					</Button>
				</Stack>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
						gap: "1rem",
						alignItems: "flex-start",
					}}
				></div>
				{budgets.map((budget) => {
					const amount = getBudgetExpenses(budget.id).reduce((acc, expense) => (acc += expense.amount), 0);
					return (
						<BudgetCard
							key={budget.id}
							name={budget.name}
							gray
							amount={amount}
							max={budget.max}
							onAddExpenseClick={() => openAddExpenseModal(budget.id)}
							onViewExpenseClick={() => setViewExpensesModalBudgetId(budget.id)}
						></BudgetCard>
					);
				})}

				<UncategorizedBudgetCard
					onAddExpenseClick={openAddExpenseModal}
					onViewExpenseClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}
				/>
				<TotalBudgetCard />
			</Container>
			<AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
			<AddExpenseModal
				defaultBudgetId={addExpenseModalBudgetId}
				show={showAddExpenseModal}
				handleClose={() => setShowAddExpenseModal(false)}
			/>
			<ViewExpensesModal
				budgetId={viewExpensesModalBudgetId}
				handleClose={() => setViewExpensesModalBudgetId(false)}
			/>
		</>
	);
}

export default App;
