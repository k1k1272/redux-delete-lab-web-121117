let id = 0
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      let newBand = Object.assign({}, action.band, {id:id} )
      return { bands: state.bands.concat(newBand) }
    case 'DELETE_BAND':
      let bands = state.bands.filter(band => {return band.id !== action.id})
      return { bands }
    default:
      return state;
  }
};
