insert into urls
(customurl)
values ($1);
returning *;