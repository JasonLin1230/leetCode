select distinct
    t1.Num as ConsecutiveNums
from
    Logs t1,
    Logs t2,
    Logs t3
where
    t1.Id = t2.Id-1
    and t2.Id = t3.Id-1
    and t1.Num = t2.Num
    and t2.Num = t3.Num