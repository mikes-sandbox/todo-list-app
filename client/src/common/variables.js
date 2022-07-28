
import { v4 as uuidv4 } from 'uuid';

export const FILTERS = {
    "ALL": "All",
    "ACTIVE": "Active",
    "COMPLETED": "Completed"
};

export const EXAMPLE_TODOS = [
    {
        id: uuidv4(),
        completed: false,
        name: "Implement Drag & Drop",
        dateModified: new Date().valueOf(),
        isDeleted: false
    },
    {
        id: uuidv4(),
        completed: false,
        name: "Add \"Guest\" functionality",
        dateModified: new Date().valueOf(),
        isDeleted: false
    },
    {
        id: uuidv4(),
        completed: false,
        name: "Store todo's in Firestore",
        dateModified: new Date().valueOf(),
        isDeleted: false
    },
    {
        id: uuidv4(),
        completed: true,
        name: "Add authentication based routing",
        dateModified: new Date().valueOf(),
        isDeleted: false
    },
    {
        id: uuidv4(),
        completed: true,
        name: "Retrieve user information from firestore",
        dateModified: new Date().valueOf(),
        isDeleted: false
    },
    {
        id: uuidv4(),
        completed: true,
        name: "Add Google login functionality",
        dateModified: new Date().valueOf(),
        isDeleted: false
    },
    {
        id: uuidv4(),
        completed: true,
        name: "Implement themes with CSS variables",
        dateModified: new Date().valueOf(),
        isDeleted: false
    },
    {
        id: uuidv4(),
        completed: true,
        name: "Implement filtering, clear completed & item's left",
        dateModified: new Date().valueOf(),
        isDeleted: false
    },
    {
        id: uuidv4(),
        completed: true,
        name: "Indicate number of todos left",
        dateModified: new Date().valueOf(),
        isDeleted: false
    },
    {
        id: uuidv4(),
        completed: true,
        name: "Create todo functionality with Redux",
        dateModified: new Date().valueOf(),
        isDeleted: false
    }
];


