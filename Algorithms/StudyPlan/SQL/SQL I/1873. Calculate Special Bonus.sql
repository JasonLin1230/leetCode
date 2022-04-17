select employee_id,
    (case when employee_id%2=1 then 
        case when substring(name,1,1)<>'M' then salary else 0 end
    else 0 end) as bonus
from Employees order by employee_id;