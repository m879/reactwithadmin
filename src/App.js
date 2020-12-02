import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import { PostList } from './posts';
import jsonServerProvider from 'ra-data-json-server';


import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const App = () => (
    <Admin  dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} theme={theme} >
        <Resource name="posts" list={PostList} edit={EditGuesser} icon={PostIcon}/>
        <Resource name="users" options={{ label: 'Meraj' }} list={UserList} icon={UserIcon}/>
    </Admin>
);
export default App;