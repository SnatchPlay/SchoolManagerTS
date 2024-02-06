import cors from 'cors';
import express from "express";
import  initRoutes  from "./PL/Routes";
const path = require('path');
import RolesController from './PL/RolesController';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

//app.use('/', express.static('../../client/reactjs/build'));
const buildPath = path.join(__dirname, '../../client/reactjs/build');

app.use(express.static(buildPath));

// For any other route, send the index.html file (React app entry point)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
