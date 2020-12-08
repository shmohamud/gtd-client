# Directory Organization:

# ************  Client Side (/gtd-client/src/...) ********************************

# components: These are reusable, view-agnostic Presentational Components. 

# views: These are stateful Container Components made up of reusable Components (from components directory).

# hooks:  These are custom hooks, generic and DB model specific

# Features

# Automated "Queueing" of "Next Action" based on "priority", "setting" (e.g. at computer, driving, walking) and "type" (e.g. "call", "social hangout", "email").

# Project Mode & Project Agnostic Mode. User can select a project and only queue actions for that project, or, all "Next Actions" marked for the week will appear in no particular order (unless they're dependent on prior action completion --- determined by "waiting_for" value for an action).

# Braindump's allow for a timed session to simply dump any and all "stuff" on mind to store away for later processing 

# Capture (a view) is where any responsibilities or "tasks" can be concretized into a set of "actions" under a "project"

# ExecuteView presents a *Single* Next Action to complete as well as a countdown timer in fidelity to Parkinson's Law.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

