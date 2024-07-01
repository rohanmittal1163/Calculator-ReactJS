import { Reducer, useReducer } from 'react';
import './App.css';
import { ACTION, Action, stateType } from './Component/CalculatorTypes';
import reducer from './Component/Reducer';

function App() {
	const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer<
		Reducer<stateType, Action>
	>(reducer, {});
	return (
		<>
			<div className="calculator_grid">
				<div className="output">
					<div className="previous_operand">
						{previousOperand} {operation}
					</div>
					<div className="current_operand">{currentOperand}</div>
				</div>
				<div className="input">
					<button
						onClick={() => {
							dispatch({
								type: ACTION.CLEAR,
								payload: {},
							});
						}}
					>
						AC
					</button>
					<button
						onClick={() => {
							dispatch({ type: ACTION.DELETE_DIGIT, payload: {} });
						}}
					>
						DEL
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.CHOOSE_OPERATION,
								payload: { operator: '/' },
							});
						}}
					>
						/
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: 1 },
							});
						}}
					>
						1
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: 2 },
							});
						}}
					>
						2
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: 3 },
							});
						}}
					>
						3
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.CHOOSE_OPERATION,
								payload: { operator: '*' },
							});
						}}
					>
						*
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: 4 },
							});
						}}
					>
						4
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: 5 },
							});
						}}
					>
						5
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: 6 },
							});
						}}
					>
						6
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.CHOOSE_OPERATION,
								payload: { operator: '+' },
							});
						}}
					>
						+
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: 7 },
							});
						}}
					>
						7
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: 8 },
							});
						}}
					>
						8
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: 9 },
							});
						}}
					>
						9
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.CHOOSE_OPERATION,
								payload: { operator: '-' },
							});
						}}
					>
						-
					</button>

					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: '.' },
							});
						}}
					>
						.
					</button>
					<button
						onClick={() => {
							dispatch({
								type: ACTION.ADD_DIGIT,
								payload: { digit: 0 },
							});
						}}
					>
						0
					</button>
					<button
						onClick={() =>
							dispatch({
								type: ACTION.EVALUATE,
								payload: { operator: '=' },
							})
						}
					>
						=
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
