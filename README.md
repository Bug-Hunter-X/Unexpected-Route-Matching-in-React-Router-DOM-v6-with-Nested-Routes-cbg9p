# Unexpected Route Matching in React Router DOM v6 with Nested Routes

This repository demonstrates a common issue encountered when working with nested routes in React Router DOM v6: unexpected route matching.  The problem arises when nested routes don't match as expected, leading to incorrect page rendering or navigation problems.

## Problem Description

The `bug.js` file contains a React component using nested routes.  Due to a specific route configuration, some routes may unexpectedly match, causing the wrong components to render.

## Solution

The `bugSolution.js` file offers a corrected implementation that resolves the unexpected route matching.  The solution involves carefully reviewing the route definitions and applying appropriate route matching strategies to ensure correct navigation.

## How to reproduce

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Navigate to different routes and observe the unexpected behavior in `bug.js`. 
5. Compare with the correctly functioning example in `bugSolution.js`.