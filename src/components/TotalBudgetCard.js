import { useBudgets } from "../contexts/BudgetContext";
import BudgetCard from "./BudgetCard";

export default function TotalBudgetCard() {
	const { budgets, expenses } = useBudgets();
	const amount = expenses.reduce((acc, expense) => (acc += expense.amount), 0);
	const max = budgets.reduce((acc, budget) => (acc += budget.max), 0);

	if (max === 0) return null;

	return <BudgetCard name="Total" gray max={max} amount={amount} hideButtons />;
}
