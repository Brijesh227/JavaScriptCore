/**
 * not in vs join
 * Performance	\
 * 
 * join
 *  Generally more efficient for large datasets, especially when indexed properly.	
 *  Performs well with large datasets, especially when indexed.	

 * not in
 *  Can be slower if the subquery returns a large number of results.
 *  Can perform poorly if page_likes has a large number of distinct values.
 * 
 * 
 * DB:
 * 
    Write a query to return the IDs of the Facebook pages that have zero likes. 
    The output should be sorted in ascending order based on the page IDs.

    pages Table:
        page_id	page_name
        20001	  SQL Solutions
        20045	  Brain Exercises
        20701	  Tips for Data Analysts

    page_likes Table:
        user_id	page_id	liked_date
        111	    20001	  04/08/2022 00:00:00
        121	    20045	  03/12/2022 00:00:00
        156	    20001	  07/25/2022 00:00:00

  Example Output:
      page_id
      20701


    ANS:

    using not in clause

    SELECT page_id
    FROM pages
    WHERE page_id NOT IN (SELECT DISTINCT page_id FROM page_likes)
    ORDER BY page_id ASC;

    left  join

    SELECT p.page_id
    FROM pages p
    LEFT JOIN page_likes pl ON p.page_id = pl.page_id
    WHERE pl.page_id IS NULL
    ORDER BY p.page_id ASC;


 */

1. Page With No Likes - DB ->  i have given answer using not in clause but they asked to use join
2. React js passing onClick to child component as a prop and child component re-render every time how to solve it.
/**
 * 
import { useState } from "react";

const CounterParent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <CounterButton onClick={handleClick} />
    </div>
  );
};

const CounterButton = ({ onClick }) => {
  console.log("Child rendered");

  return <button onClick={onClick}>Increment</button>;
};

export default CounterParent;


ANS: 
    why this is happening?:

        When the button is clicked, handleClick updates count.
        React re-renders CounterParent, causing CounterButton to re-render.
        console.log("Child rendered") confirms when the child re-renders.

        useCallback() only ensures that the function reference (handleClick) stays the same across renders.
        However, React does not automatically prevent child components from re-rendering when the parent updates.
        By default, if a parent component re-renders, all its child components also re-render, even if their props didn't change.

    React.memo() prevents re-rendering by checking if props have changed.
    Since useCallback() ensures that onClick has the same reference, React.memo() detects no prop change → No re-render.

    Final Thought
        ✅ useCallback() alone → Keeps function reference stable but doesn't stop re-renders.
        ✅ useCallback() + React.memo() → Prevents unnecessary child re-renders by keeping function reference stable and skipping renders when props don’t change.
 * 
 * 
 * 
 * 
 * 
 */


3. High level architecture of a queue system
