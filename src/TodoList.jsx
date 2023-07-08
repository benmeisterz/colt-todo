import { useState } from 'react';
import List from '@mui/material/List';
import Todoitem from './Todoitem';

const initidalTodos = [
    { id: 1, text: "walk the dog", completed: true },
    { id: 2, text: "walk the cat", completed: false },
    { id: 3, text: "walk the chickens", completed: true },
    { id: 4, text: "walk the birds", completed: false }
]

export default function TodoList() {
    const [todos, setTodos] = useState(initidalTodos)

    const removeTodo = (id) => {
        setTodos(prevTodos => (
            prevTodos.filter((t) => t.id !== id)
        ))
    }


    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <Todoitem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} />
            ))}
        </List>
    );


}




// export default function CheckboxList() {
//     const [checked, setChecked] = React.useState([0]);

//     const handleToggle = (value: number) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];

//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }

//         setChecked(newChecked);
//     };

//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {[0, 1, 2, 3].map((value) => {
//                 const labelId = `checkbox-list-label-${value}`;

//                 return (
//                     <ListItem
//                         key={value}
//                         secondaryAction={
//                             <IconButton edge="end" aria-label="comments">
//                                 <CommentIcon />
//                             </IconButton>
//                         }
//                         disablePadding
//                     >
//                         <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//                             <ListItemIcon>
//                                 <Checkbox
//                                     edge="start"
//                                     checked={checked.indexOf(value) !== -1}
//                                     tabIndex={-1}
//                                     disableRipple
//                                     inputProps={{ 'aria-labelledby': labelId }}
//                                 />
//                             </ListItemIcon>
//                             <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//                         </ListItemButton>
//                     </ListItem>
//                 );
//             })}
//         </List>
//     );
// }
