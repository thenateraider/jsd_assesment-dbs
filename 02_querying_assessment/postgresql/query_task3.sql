-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- ตอนนี้เรามีข้อมูลของพนักงานจากตาราง Staff เป็นหลัก แล้วเราต้่องนำมา เชื่อมโยง 
-- ร่วมกับข้อมูลรายการสั่งซื้อออเดอร์ของร้านจากตาราง Orders
-- โดยจะจับคู่ข้อมูลผ่านคอลัมน์ staff_id ที่ระบุอยู่ว่าพนักงานคนไหนเป็นคนรับออเดอร์นั้น ๆ ชื่อนามสกุุลไร
-- จากนั้นทำการจัดกลุ่มพนักงาน และนับจำนวนออเดอร์ทั้งหมดออกมาเป็นยอดรวมของแต่ละคนในคอลัมน์ order_count
-- แต่เนื่องจากการแสดงผลแค่จำนวนออเดอร์และรหัสพนักงานยังไม่เพียงพอต่อตามโจทย์ เพื่อสะดวกกับหัวหน้า
--  และดูง่าย จึงต้องดึงข้อมูลชื่อ (first_name) และนามสกุล (last_name) 
--จากตาราง Staff มา "เลือกและจับมาชนกัน (Concatenated)" คั่นด้วยช่องว่างชื่อ-นามสกุล
-- เพื่อรวมกันเป็นชื่อคอลัมน์ใหม่ที่ใช้แสดงผลว่า full_name และต่อท้ายด้วยการเรียงลำดับพนักงาน
--ที่ทำยอดออเดอร์ได้มากที่สุดลงไปน้อยที่สุด (desc)


SELECT
    Staff.first_name || ' ' || Staff.last_name AS full_name, -- รวมชื่อเป็น full name
    -- ถ้าไต้องการแยกชชื่อ สามารถใช้คำสั่งที่คอมเม้นได้
    -- Staff.first_name , Staff.last_name,
    COUNT(Orders.order_id) AS order_count
FROM Staff
INNER JOIN Orders ON Staff.staff_id = Orders.staff_id  
--นำข้อมูลของstaff(first-last name ที่ concat มาแล้ว) เทียบ id ของพวกเขาจากการนับออเดอร์ 
--ที่ select มาแล้ว มา inner join เชื่อมด้วย staff_id ที่ระบุในตาราง Order เพื่อให้แสดงชื่อสกุลเต็มๆ
GROUP BY Staff.staff_id
-- รวบรายการออเดอร์ทั้งหมดเข้าด้วยกัน โดยแยกกลุ่มตามพนักงานแต่ละคน
ORDER BY order_count DESC;
-- เรียงจากมากไปน้อย

