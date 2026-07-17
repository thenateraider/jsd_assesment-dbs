-- Task 2: Kitchen Staff Contact List
-- The manager has a last-minute change to the kitchen prep schedule and needs to notify
-- all cooks as soon as possible. They need the full names of every staff member
-- whose role is 'Cook' so they can be contacted directly.
--
-- Hint: Write a query to list the first_name and last_name of all staff members whose role is 'Cook'.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task2_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
--  ตอนนี้ เรามี ข้อมูล พนักงาน (staff)ในร้านในตาราง Staff (จากที่ Insert Into ไป) แล้ว 
-- โดยจะมีฟิลด์ข้อมูลต่างๆของพนักงานบรรจุในตารางนั้น
-- แต่ข้อมูลที่เราสนใจและต้องการ "เลือก (Select)" มาก็คือ ชื่อ (first_name) และ นามสกุล (last_name) 
-- โดย จะต้องเป็นพนักงานที่เป็น cook เท่านั้น ซึ่งตรวจได้จาก rols = "Cook" หรือกุ๊ก

SELECT first_name,last_name FROM Staff WHERE role='Cook';
