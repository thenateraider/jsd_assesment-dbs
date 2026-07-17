-- Task 1: Sides Menu Board
-- The owner wants to update the printed menu board that displays only the side dishes.
-- They need a list of every item in the 'Side' category along with its current price,
-- so the designer can produce an accurate board without having to check each item manually.
--
-- Hint: Write a query to find the name and price of all menu items that are in the 'Side' category.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task1_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
--  ตอนนี้ เรามี ข้อมูล เมนูในร้านในตาราง MenuItems (จากที่ Insert Into ไป) แล้ว โดยจะมีฟิลด์ข้อมูลต่างๆบรรจุในตาราง
-- แต่ข้อมูลที่เราสนใจและต้องการ "เลือก (Select)" มาก็คือ ชื่อเมนู (name) และ ราคา (price) 
-- โดย จะต้องเป็นเมนูและราคาที่อยู่ในหมวด category = "Side" หรือเครื่องเคียง มาแสดงผล

SELECT name,price FROM MenuItems WHERE category='Side';