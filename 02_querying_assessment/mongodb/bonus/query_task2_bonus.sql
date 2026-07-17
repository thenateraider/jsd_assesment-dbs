-- Task 2 Bonus: Shift Activity Report
-- Jane Doe has an upcoming performance review and the manager wants to look at her order history
-- ahead of the meeting. They only need to see when each order was placed and what it was worth —
-- no other details are required for this particular review.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the order_date and total_price from the Orders table
-- for all orders handled by Jane Doe. You will need to join with the Staff table
-- to filter by the staff member's name.

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- อันดับแรก ต้องทำการดูโครงสร้างข้อมูลก่อน 
-- โดยเราสนใจในส่วนออเดอร์ จะไปดูที่ table "Orders" โดยเมื่อเข้าไปแล้ว
-- ก็จะพบเจอ row แต่ละอันที่มี รายการสั่งซื้อ หรือออเดอร์แต่ละอัน และแต่ละออเดอร์ก็จะมีข้อมูลของตนเอง

-- จากโจทย์ข้อนี่ เราจะสนใจ "ออเดอร์ที่อันที่อยู่ภายใต้การรับของพนักงานที่ชื่อ Jane Doe"
-- เราก็ต้องเลือกพิจารณา ข้อมูลทุกอันใน table "orders" 
-- แต่มีเงื่อนไขที่เราจะสนใจขั้นแรกโดยการกวาดไปดู staff_id ของออเดอร์นั้นๆ ก่อน
-- จากนั้น เราก็ทำการเชื่อมข้อมูลกับตาราง Staff โดยจับคู่ผ่าน staff_id ของทั้งสองตารางที่ตรงกัน
-- จากเดิมที่ออเดอร์ไม่รู้ชื่อพนักงาน และมีแต่ id พนักงานใน order ก็จะรู้แล้วว่าใครชื่อไรที่รับออเดอร์นั้น
-- สุดท้ายค่อยเลือกแสดงข้อมูล  order_date, total_price ตามต้องการ 




SELECT order_date,total_price FROM Orders --สนใจแสดงข้อมูลorder_date, total_price ตั้งไว้ก่อน
INNER JOIN Staff ON Orders.staff_id = Staff.staff_id 
-- จากนั้น ไปค้นหาจาก table Staff ว่า Jane Doe มี staff_id อะไร 
-- ด้วยการทำ INNER JOIN เข้ากับ Table Orders
-- ด้วยค่า staff_id ในตาราง Orders 
WHERE Staff.first_name = 'Jane' AND Staff.last_name = 'Doe';