export const loadState = () => {
  try {
    const serializesState = localStorage.getItem('state');
    if (serializesState === null ) return undefined;
    return JSON.parse(serializesState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializesState = JSON.stringify(state);
    localStorage.setItem('state', serializesState);
  } catch (error) {
    console.log(error);
  }
};
