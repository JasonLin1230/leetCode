
select Request_at as 'Day', convert(count(if(Status != 'completed',true,null))/count(*),decimal(10,2)) as 'Cancellation Rate'
        from Trips
        where Request_at between '2013-10-01' and '2013-10-03'
        and Client_id in (
            select Users_Id from Users where Banned = 'No' and Role = 'client' 
        ) 
        group by Request_at;


# select t1.Request_at as 'Day', convert(num/den,decimal(10,2)) as 'Cancellation Rate' from 
# (
#     select Trips.Request_at, if(x.num is null,0,x.num) as num
#     from (
#         select Request_at, count(*) as num
#         from Trips
#         where Status != 'completed'
#         and Client_id in (
#             select Users_Id from Users where Banned = 'No' and Role = 'client' 
#         ) 
#         group by Request_at 
#     ) x right join Trips 
#     on x.Request_at = Trips.Request_at 
#     group by Trips.Request_at
# ) t1,
# (
#     select Request_at, count(*) as den
#     from Trips
#     where Client_id in (
#         select Users_Id from Users where Banned = 'No' and Role = 'client' 
#     ) 
#     group by Request_at
# ) t2
# where t1.Request_at = t2.Request_at and t1.Request_at between '2013-10-01' and '2013-10-03'
