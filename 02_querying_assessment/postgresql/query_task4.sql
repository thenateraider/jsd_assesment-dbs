-- Task 4: Supplier Dependency Check
-- The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
-- Before deciding whether to source from an alternative supplier, they need to know exactly
-- which ingredients depend on that supplier, so they can assess the impact on the menu.
--
-- Hint: Write a query to find the names of all ingredients supplied by 'Freshest Farm Produce'.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task4_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- ตอนนี้ เรามี ข้อมูล ส่วนวัตถุุดิบ ingredients และ supplier 
-- ของร้านจากตาราง Ingredients และ Suppliers ตามลำดับ (จากที่ Insert Into ไป) แล้ว 
-- โดยจะจับคู่ข้อมูลผ่านคอลัมน์ supplier_id จากตาราง Ingredients กับ Suppliers ที่เพื่อเชื่อมกันแล้ว
-- ระบุว่า ingredient นั้น มี ซัพพลายเออร์ชื่ออะไรรองรับอยู่
-- จากนั้นทำการจัดกลุ่มซัพพลายเออร์ จากทุกๆออเดอร์ให้เป็นตารางเดียวกันแถวเดียว 
-- ด้วยการเลือกมาแสดงแต่ ชื่อ name ของ ingredient นั้นๆ

SELECT Ingredients.name
FROM Ingredients
INNER JOIN Suppliers ON Ingredients.supplier_id = Suppliers.supplier_id
WHERE Suppliers.name = 'Freshest Farm Produce';