import express from 'express';
import path from 'path';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

import usersRouter  from './routes/users.js';
import teamsRouter  from './routes/teams.js';
import projectsRouter  from './routes/projects.js';
import ticketsRouter  from './routes/tickets.js';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//ALL USERS 
app.use('/users', usersRouter);

//ALL TICKETS
app.use('/tickets', ticketsRouter);

//ALL PROJECTS 
app.use('/projects', projectsRouter);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;
