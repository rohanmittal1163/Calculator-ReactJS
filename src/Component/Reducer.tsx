import { ACTION, Action, stateType } from './CalculatorTypes';
import evaluate from './Evaluate';

export default function reducer(
	state: stateType,
	{ type, payload }: Action
): stateType {
	switch (type) {
		case ACTION.ADD_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					currentOperand: `${payload.digit}`,
					previousOperand: null,
					operation: null,
				};
			}
			if (payload.digit === '.' && state.currentOperand == null) {
				return {
					...state,
					currentOperand: `0.`,
				};
			}
			if (
				(payload.digit === '.' &&
					(state.currentOperand as string).includes('.')) ||
				(payload.digit === 0 && state.currentOperand === '0')
			) {
				return state;
			}
			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${payload.digit}`,
			};
		case ACTION.CLEAR:
			return {};

		case ACTION.CHOOSE_OPERATION:
			if (state.currentOperand == null && state.previousOperand == null) {
				return state;
			}
			if (state.previousOperand == null) {
				return {
					...state,
					overwrite: false,
					operation: `${payload.operator}`,
					previousOperand: `${state.currentOperand}`,
					currentOperand: null,
				};
			}
			if (state.currentOperand === null) {
				return { ...state, overwrite: false, operation: `${payload.operator}` };
			}

			return {
				...state,
				overwrite: false,
				currentOperand: null,
				operation: `${payload.operator}`,
				previousOperand: evaluate(state),
			};
		case ACTION.EVALUATE:
			if (state.currentOperand == null || state.previousOperand == null) {
				return state;
			}
			return {
				...state,
				overwrite: true,
				previousOperand: null,
				operation: null,
				currentOperand: evaluate(state),
			};
		case ACTION.DELETE_DIGIT:
			if (state.overwrite) {
				return { ...state, overwrite: false, currentOperand: null };
			}
			if (state.previousOperand == null && state.currentOperand == null) {
				return state;
			}

			if (state.currentOperand === '') {
				return {
					...state,
					currentOperand: state.previousOperand,
					operation: null,
					previousOperand: null,
				};
			}

			return {
				...state,
				currentOperand: (state.currentOperand as string).slice(0, -1),
			};
		default:
			return state;
	}
}
