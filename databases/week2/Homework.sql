-- removing one column from one of the tables
ALTER TABLE course
DROP column duration;

-- changing the data type for one column in one of the tables
ALTER TABLE student
MODIFY COLUMN class int(10) NOT NULL;

-- adding a new column to one of the tables with a default value.
ALTER TABLE course
ADD COLUMN `location` varchar(255) DEFAULT 'CPH' NOT NULL;

-- modifying two entries (rows) in one of the tables
UPDATE student
SET email = 'gordon.fields@gmail.com',
    phone = '911-911-911'
WHERE id = 7;

-- delete two entries in one of the tables
DELETE FROM student_course
ORDER BY id desc
LIMIT 2;

-- adding an index to one of the columns in one of the tables
CREATE INDEX class ON student(class);
