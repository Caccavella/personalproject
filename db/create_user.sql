insert into users
(FirstName, LastName, email, authID)
values ($1, $2, $3, $4)
returning *;