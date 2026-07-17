// Task 4: Total Revenue Summary
// At the end of the trading period, the owner wants a single figure that shows how much revenue
// the truck has generated across all recorded orders. This number will be used in their
// financial summary report, so the result should be returned as a single value named total_revenue.
//
// Hint: Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// The result should be a single document with a field named total_revenue.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task4_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// อันดับแรก ต้องทำการดูโครงสร้างข้อมูล chrome burger db ก่อน โดยเราสนใจในส่วนยอดขายทั้งหมดในออเดอร์
// โดยจะต้องไปดูที่ Collection "orders" โดยเมื่อเข้าไปแล้ว
// ก็จะพบเจอ document รายการสั่งซื้อ หรือออเดอร์แต่ละอัน และแต่ละออเดอร์ก็จะมีข้อมูลของตนเอง
// จากโจทย์ข้อนี่ เราจะสนใจ รายได้รวมทั้งหมด (Total Revenue Summary)
// เราก็ต้องกวาด ค้นหา ข้อมูลทุกอันใน collection "orders" 
// โดยเราจะสนใจโดยการกรองหา find key ในแต่ละ order ในคีย์ชื่อ "total_price" 
// จากนั้น พอได้total price ทุกออเดอร์ต้องนำมา aggregation 
// เพื่อหาผลรวมของ total price ทุกออเดอร์ ผ่านการ group ก่อนใหเป็น doc เดียว
//และนำมาแสดงผล (project) เป็น เอกสารที่มี key เดียวชื่อ "total_revenue โดยจะบรรจุตัวเลขผลรวมยอดขายทุกออเดอร์"

use("chrome-burger-db");
db.orders.aggregate([
    {
        $group: {
            _id: null, // รวมให้เป็นอันเดียว
            total_revenue: { $sum: "$total_price" } //เอายอดการ sum ไปใส่ในน total_revenue
        }
    },
    {
        $project: {
            _id: 0,
            total_revenue: 1 //ปิดไม่แสดง id และแสดงแค่ค่า total_revenue
        }
    }
]);