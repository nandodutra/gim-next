const PeopleReducer = (state = { nome: 'fernando' }, action) => {
  switch (action.type) {
    case 'PEOPLE_FETCHED':
      return action.payload
    default:
      return state;
  }
};

export default PeopleReducer;
