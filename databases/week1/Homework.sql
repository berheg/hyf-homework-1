# 1. Find out how many tasks are in the task table 
select count(*)
from task;
# Answer: 35

# 2. Find out how many tasks in the task table do not have a valid due date
select count(*)
from task
where task.due_date is NULL;
# Answer: 8

# 3. Find all the tasks that are marked as done
select task.id, task.title, task.description, status.name
from task join status on task.status_id = status.id
where  status.name like "%done%";
# Answer: 12 row(s) returned

# 4. Find all the tasks that are not marked as done
select task.id, task.title, task.description, status.name
from task join status on task.status_id = status.id
where  status.name not like '%done%';
# Answer: 23 row(s) returned

# 5. Get all the tasks, sorted with the most recently created first
select *
from task
order by created DESC;
# Answer: 35 row(s) returned

# 6. Get the single most recently created task
select *
from task
order by created DESC
limit 1;

# 7. Get the title and due date of all tasks where the title or description contains database
select title, due_date
from task 
where title like '%database%' or description like '%database%';
# Answer: 5 row(s) returned

# 8. Get the title and status (as text) of all tasks
select task.title, status.name
from task join status on task.status_id = status.id;
# Answer: 35 row(s) returned

# 9. Get the name of each status, along with a count of how many tasks have that status
select status.name, count(*)
from status join task on status.id = task.status_id
group by status.name;
# Answer: 'not started'=8; 'in progress'=15; 'done'=12

# 10. Get the names of all statuses, sorted by the status with most tasks first
select status.name, count(*)
from status join task on status.id = task.status_id
group by status.name
order by count(*) DESC;
# Answer: 'in progress'=15; 'done'=12; 'not started'=8
