-- # Write your MySQL query statement below
-- # Runtime: 214 ms, faster than 90.49% of MySQL online submissions for Combine Two Tables.
-- # Memory Usage: 0B, less than 100.00% of MySQL online submissions for Combine Two Tables.
select FirstName, LastName, City, State from Person left join Address on Person.PersonId = Address.PersonId;