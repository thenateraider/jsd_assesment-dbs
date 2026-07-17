-- Task 4 Bonus: Total Revenue Summary
-- At the end of the trading period, the owner wants a single figure that shows how much revenue
-- the truck has generated across all recorded orders. This number will be used in their
-- financial summary report, so the result should be returned as a single value named total_revenue.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query that uses an aggregate function on the Orders table
-- to sum the total_price across all orders, returning the result as total_revenue.

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--

-- Your thinking:
-- อันดับแรก ต้องทำการดูโครงสร้างข้อมูลตารางก่อน โดยเราสนใจในส่วนยอดขายทั้งหมดในออเดอร์
-- โดยจะต้องไปดูที่ table "Orders" โดยเมื่อเข้าไปแล้ว
-- ก็จะพบเจอ row รายการสั่งซื้อ หรือออเดอร์แต่ละอัน และแต่ละออเดอร์ก็จะมีข้อมูลของตนเอง
-- จากโจทย์ข้อนี่ เราจะสนใจ รายได้รวมทั้งหมด (Total Revenue Summary)
-- เราก็ต้องกวาด ค้นหา ข้อมูลทุกอันใน table "orders" 
-- โดยเราจะสนใจโดยการกรองหา find column ในแต่ละ order ในคีย์ชื่อ "total_price" 
-- จากนั้น พอได้total price ทุกออเดอร์ต้องนำมา รวมกัน Aggregation ด้วยกระบวนการหาผลลรวม หรือ Sum 
-- เพื่อหาผลรวมของ total price ทุกออเดอร์ และ ยุบเป็น table คอลัมน์เดียว
-- และนำมาแสดงผล (SELECT) ผลลัพธ์การบวกนั้น เป็น ตารางที่มี column ข้อมูล 
-- เดียวชื่อ "total_revenue โดยจะบรรจุตัวเลขผลรวมยอดขายทุกออเดอร์ที่เกิดขึ้นในร้าน"

SELECT SUM(total_price) AS total_revenue FROM Orders;

