const INITIAL_VALUES = { sideBarCollapse: false }

const templateReducer = (state = INITIAL_VALUES, action) => {
  switch (action.type) {
    case 'PUSH_MENU':
      const storageConfig = JSON.parse(localStorage.getItem('TEMPLATE_CONFIG') || '{}')  

      const sideBarCollapse = !storageConfig.sideBarCollapse
      localStorage.setItem('TEMPLATE_CONFIG', JSON.stringify( { ...storageConfig, sideBarCollapse: sideBarCollapse } ))

      return { ...state, sideBarCollapse: sideBarCollapse }
  
    default:
      return { ...state }
  }
}

export default templateReducer