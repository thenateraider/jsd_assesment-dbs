-- Task 3 Bonus: Stock Replenishment Check
-- Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
-- that are already well-stocked. They need a list of every ingredient with a stock level
-- of 100 or more so those can be deprioritised in this week's order.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the name of all rows in the Ingredients table
-- where the stock_level is greater than or equal to 100.

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- อันดับแรก ต้องทำการดูโครงสร้างข้อมูลก่อน โดยจะไปดูที่ table ingredients 
-- เพราะมีการบรรจุวัตถุดิบใน table นั้น โดยเมื่อเข้าไปแล้ว
-- ก็จะพบเจอ row รายการวัตถุดิบเมนูแต่ละอย่าง โดยก็จะมีข้อมูลของแต่ละวัตถุดิบแยกกันหลาย doc
-- จากโจทย์ข้อนี่ เราจะสนใจจากข้อมูลคงคลัง ใน column ชื่อ "stock_level" ซึ่งจะมี value 
-- บรรจุข้อมูลสต็อกคงเหลือไว้เป็นหน่วยเลข
-- เราก็ต้องกวาดเลือก ข้อมูลทุกอันใน table ingredients ที่อยู่ใน column "stock_level" 
-- ที่มีค่า "มากกว่าหรือเท่ากับ 100 หน่วยขึ้นไป"

-- และตามโจทย์บอกว่า  the name of all rows in the Ingredients table
-- ***where** the stock_level is greater than or equal to 100.
-- ให้แสดงรายการที่เอาแค่ชื่อ (Select Name) ของทุกๆอันที่มีสต็อกมากกว่า 100 


SELECT name FROM Ingredients WHERE stock_level>= 100;
