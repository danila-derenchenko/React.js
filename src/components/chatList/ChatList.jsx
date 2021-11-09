import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import "./ChatList.css"

export const ChatList = ({ list }) => {
    return <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {list.map(chat => (
                <div key={chat.chat_id}>
                    <ListItem className="list_item" alignItems="flex-start">
                        <ListItemText
                            primary={chat.chat_name}
                        />
                    </ListItem>
                </div>
            ))}
        </List>
    </div>
}