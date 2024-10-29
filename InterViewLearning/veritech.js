bubble sort but seprate swap function not running 

fetch data from api using fetch in react component (goes into infinte loop)

deployment strategies of nodejs app

resturant

// reservation
// order from table
// waiter
// kitchen

restaurant_table    -> restaurant_table_id, capicity, table_number
reservation         -> reservation_id, res_id, time, restaurant_table_id
waiter              -> waiter_id, name
order               -> order_id, waiter_id, restaurant_table_id, description, status
kictchen            -> kictchen_id, or_id
display             -> display_id, or_id

waiter might be in queue

id (Primary Key) 
name (Hardik, Rohit, Virat, Sachin …)
subject (maths, hindi, english …)
score (20, 30, 90 …)


1.SQL query to get the max marks in Hindi
2.SQL query to get names of students who got the max marks in Hindi
3.SQL query to get third highest marks in Hindi

// Ans
1.select MAX(score) AS mark from marks where subject = 'Hindi'.
2.select name, MAX(score) AS hindi_marks from marks where subject = 'Hindi' GROUP BY name ORDER BY hindi_marks DESC;
3.select MAX(score) AS hindi_marks from marks where subject = 'Hindi' GROUP BY name ORDER BY hindi_marks DESC LIMIT 3 OFFSET 2;