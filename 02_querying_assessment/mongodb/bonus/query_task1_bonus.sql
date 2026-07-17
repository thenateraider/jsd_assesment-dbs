-- Task 1 Bonus: Budget Meal Deal
-- The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
-- which menu items could be included. To qualify, an item must be priced under $10.00,
-- so they can offer good value without cutting too deep into margins.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the name and price of all rows in the MenuItems table
-- where the price is less than 10.

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- อันดับแรก ต้องทำการดูโครงสร้างข้อมูลก่อน โดยจะไปดูที่ table ตาราง
-- MenuItems เพราะมีการบรรจุราคาใน table นั้น โดยเมื่อเข้าไปแล้ว
-- ก็จะพบเจอ row รายการอาหารเมนูแต่ละอัน และแต่ละเมนูก็จะประกอบไปด้วยข้อมูลแต่ละอัน
-- จากโจทย์ข้อนี่ เราจะสนใจจากข้อมูลราคา ใน column ชื่อ "price" ซึ่งจะมีราคาใส่ไว้
-- เราก็ต้องกวาดเลือก (Select) ข้อมูลจาก MenuItems ที่ "price" ที่มีค่า "น้อยกกว่า  10 เหรียญusd"


SELECT name,price FROM MenuItems WHERE price < 10 ;