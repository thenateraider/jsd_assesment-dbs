// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// อันดับแรก ต้องทำการดูโครงสร้างข้อมูล chrome burger db ก่อน โดยเราสนใจในส่วนออเดอร์ จะไปดูที่ Collection "orders" โดยเมื่อเข้าไปแล้ว
// ก็จะพบเจอ document รายการสั่งซื้อ หรือออเดอร์แต่ละอัน และแต่ละออเดอร์ก็จะมีข้อมูลของตนเอง
// จากโจทย์ข้อนี่ เราจะสนใจ "ออเดอร์ที่อันที่อยู่ภายใต้การรับของพนักงานที่ชื่อ Jane Doe"
// เราก็ต้องกวาด ค้นหา ข้อมูลทุกอันใน collection "orders" 
// โดยเราจะสนใจขั้นแรกโดยการกรองหา find key ชื่อ "staff" ที่มี nested dcoument ย่อย ที่ประกอบไปด้วย
// first_name ที่ต้องมี value บรรจุว่า "Jane" และ last_name ที่บรรจุ valur ว่า "Doe" และเราไม่ได้สนใจไอดีในตอนนี้
// จากนั้น พอได้ออเดอร์ทุกออเดอร์ของ Jane Doe แล้ว ก็ทำการ projection หรือดึงข้อมูลมาแสดงผลของคีย์ที่ชื่อ 
// `order_date` และ `total_price` ในรายการทุกออเดอร์ของ Jane Doe

use("chrome-burger-db");
db.orders.find(
    {
    "staff.first_name":"Jane",
    "staff.last_name":"Doe"
    },
    {
        order_date:1,
        total_price:1
    }
);