-- playlist of SQL: https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y

-- Order of Execution in SQL Queries as follows:

--  FROM: Determine the data source.
--  WHERE: Filter rows based on specified conditions.
--  GROUP BY: Group the filtered rows into subsets based on specified columns.
--  HAVING: Filter the grouped subsets based on specified conditions (usually involving aggregate functions).
--  SELECT: Determine which columns or expressions to return.
--  ORDER BY: Sort the results based on specified columns.
-- 

-- HAVING clause
    -- The HAVING clause is designed to filter results after aggregation has taken place
    -- HAVING can only be used with aggregate functions.
    -- You can Use HAVING Without GROUP BY

-- you can use aggregate functions with or without GROUP BY, and when GROUP BY is necessary

1. HAVING vs Where cluase
2. constraint in postgresql
3. join in mongodb

-- question on aggregate function and GROUP BY
id (Primary Key) 
name (Hardik, Rohit, Virat, Sachin …)
subject (maths, hindi, english …)
score (20, 30, 90 …)

1.SQL query to get the max marks in Hindi
2.SQL query to get names of students who got the max marks in Hindi
3.SQL query to get third highest marks in Hindi

// Ans
1.select MAX(score) AS mark from marks where subject = 'Hindi'.
2. SELECT name 
FROM marks 
WHERE subject = 'Hindi' 
AND score = (SELECT MAX(score) 
             FROM marks 
             WHERE subject = 'Hindi');
below is solution of mine giving all students of having obtained marks in hindi
2X.select name, MAX(score) AS hindi_marks from marks where subject = 'Hindi' GROUP BY name ORDER BY hindi_marks DESC;

3.SELECT DISTINCT score 
FROM marks 
WHERE subject = 'Hindi' 
ORDER BY score DESC 
LIMIT 1 OFFSET 2;

below is solution of mine
3X.select MAX(score) AS hindi_marks from marks where subject = 'Hindi' GROUP BY name ORDER BY hindi_marks DESC LIMIT 3 OFFSET 2;