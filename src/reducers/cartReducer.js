export default function cartReducer(state = [], action) {
  if (action.type === 'addToCart') {
    return [...state, action.bike]
  } else if (action.type === 'removeFromCart') {
      return [...state].filter(e => e.ref !== action.bike.ref)
  } else if (action.type === 'updateQuantity') {
      return state.map(item => {
				if (item.ref === action.bike.ref) {
					return {
						...item,
						userQuantity : action.userQuantity,
					};
				} else {
					return item;
				}
			});
  } else return state
}