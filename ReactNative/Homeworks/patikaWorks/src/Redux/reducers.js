
export default function (state, action) {
    switch (action.type) {
      case 'TOGGLE_FAV':

        let itemToggle = action.payload.thisItem;
        let list = [...state.itemList];

        if (list.length >= 1) {
          let find = list.findIndex( (item) => item.id == itemToggle.id);
          
          if (find >= 0) {
            if (list.length == 1){
              return { ...state, itemList: []};
              
            }
            list.splice(find,1);
            return { ... state, itemList: list};
          } 
        }

        let newList = [ ...list, itemToggle ]
        return { ...state, itemList: newList};


      case 'CLEAN_FAVS':
        return { ...state, itemList: []};
        
      default:
        return state;
    }
  }