CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    declare offsetIndex int;
    set offsetIndex = N-1;
    RETURN (
        select distinct Salary from Employee order by desc limit offsetIndex,1;
    );
END